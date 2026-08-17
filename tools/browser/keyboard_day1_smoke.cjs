const { firefox } = require('playwright');

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';

async function main() {
  const browser = await firefox.launch({ headless: process.env.RENDERER_HEADLESS !== '0' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  try {
    const response = await page.goto(`${baseUrl}/?renderer=pixeldart&automation=1`);
    if (!response || response.status() !== 200) throw new Error('keyboard smoke did not receive HTTP 200');
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    await page.locator('#game').focus();
    await page.keyboard.press('j');
    await page.waitForSelector('.panel.open[aria-label="The Journal"]', { timeout: 3000 });
    const focusInside = await page.locator('.panel.open[aria-label="The Journal"]').evaluate(
      (panel) => panel.contains(document.activeElement),
    );
    if (!focusInside) throw new Error('journal panel did not receive keyboard focus');
    await page.keyboard.press('Escape');
    await page.waitForFunction(
      () => !document.querySelector('.panel.open[aria-label="The Journal"]'),
      null,
      { timeout: 3000 },
    );
    const telemetry = await page.locator('#game').evaluate((canvas) => ({
      captions: canvas.getAttribute('data-audio-captions'),
      paused: canvas.getAttribute('data-audio-paused'),
    }));
    if (!['true', 'false'].includes(telemetry.captions) ||
        !['true', 'false'].includes(telemetry.paused)) {
      throw new Error(`keyboard smoke missing accessibility telemetry: ${JSON.stringify(telemetry)}`);
    }
    if (errors.length) throw new Error(errors.join('; '));
    console.log(JSON.stringify({ keyboardJournal: 'opened-and-closed', telemetry }));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
