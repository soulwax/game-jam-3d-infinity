const { firefox } = require('playwright');

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';
const url = `${baseUrl}/?renderer=pixeldart&profile=high&automation=1` +
  '&captureSeed=7&captureDay=20&captureHour=14&captureWeather=rain' +
  '&captureShutters=open';

async function main() {
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() =>
      document.querySelector('canvas')?.getAttribute(
        'data-renderer-shader-lab-document',
      ),
    );
    const result = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      const rawDocument = canvas?.getAttribute(
        'data-renderer-shader-lab-document',
      );
      const rawDiagnostics = canvas?.getAttribute('data-renderer-shader-lab');
      if (!rawDocument || !rawDiagnostics) {
        throw new Error('canonical document or diagnostics attribute missing');
      }
      const documentValue = JSON.parse(rawDocument);
      const diagnostics = JSON.parse(rawDiagnostics);
      if (documentValue.schema !== 'pixeldart-shader-lab-v1' ||
          documentValue.version !== 1 ||
          !Array.isArray(documentValue.controls) ||
          documentValue.controls.length < 1) {
        throw new Error(`invalid canonical document: ${rawDocument}`);
      }
      const effectiveCount = documentValue.controls.filter(
        (control) => control.effective !== null,
      ).length;
      if (effectiveCount !== diagnostics.liveCount) {
        throw new Error(
          `effective/live mismatch: ${effectiveCount}/${diagnostics.liveCount}`,
        );
      }
      return {
        schema: documentValue.schema,
        version: documentValue.version,
        controls: documentValue.controls.length,
        liveCount: diagnostics.liveCount,
        unavailableCount: diagnostics.unavailableCount,
      };
    });
    console.log(JSON.stringify(result));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
