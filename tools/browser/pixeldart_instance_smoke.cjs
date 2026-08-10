const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');

const baseUrl = process.env.PIXELDART_INSTANCE_BASE_URL ||
  'http://127.0.0.1:8091/web/renderer_test/';
const screenshotPath = process.env.PIXELDART_INSTANCE_SCREENSHOT ||
  '/tmp/browser-pixeldart-r09-instance-proof.png';

function parseTransforms(raw) {
  return raw.split(';').map((entry) => entry.split(',').map(Number));
}

async function run() {
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
    const errors = [];
    await page.addInitScript(() => {
      const calls = [];
      const proto = WebGL2RenderingContext.prototype;
      const drawElementsInstanced = proto.drawElementsInstanced;
      proto.drawElementsInstanced = function (...args) {
        // drawElementsInstanced(mode, count, type, offset, instanceCount).
        calls.push({ count: args[1], instanceCount: args[4] });
        return drawElementsInstanced.apply(this, args);
      };
      window.__pixeldartInstanceCalls = calls;
    });
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('#test-canvas')?.hasAttribute('data-instance-pixel-proof'),
      null,
      { timeout: 15000 },
    );
    const evidence = await page.locator('#test-canvas').evaluate((canvas) => ({
      familyKey: canvas.getAttribute('data-instance-family-key'),
      count: Number(canvas.getAttribute('data-instance-count')),
      transforms: canvas.getAttribute('data-instance-transforms'),
      drawMode: canvas.getAttribute('data-instance-draw-mode'),
      pixelProof: canvas.getAttribute('data-instance-pixel-proof'),
      pixelHits: canvas.getAttribute('data-instance-pixel-hits'),
      instancedCalls: window.__pixeldartInstanceCalls ?? [],
    }));
    if (errors.length > 0) throw new Error(`page errors: ${errors.join('\n')}`);
    if (evidence.drawMode !== 'instanced' || evidence.count !== 3 ||
        !evidence.familyKey || evidence.pixelProof !== 'three-distinct') {
      throw new Error(`R-09 browser evidence was incomplete: ${JSON.stringify(evidence)}`);
    }
    const transforms = parseTransforms(evidence.transforms);
    if (transforms.length !== 3 ||
        new Set(transforms.map((value) => value.join(','))).size !== 3) {
      throw new Error(`R-09 browser transforms were not distinct: ${evidence.transforms}`);
    }
    if (!evidence.instancedCalls.some((call) => call.instanceCount === 3)) {
      throw new Error(`R-09 browser had no drawElementsInstanced(..., 3): ${JSON.stringify(evidence.instancedCalls)}`);
    }
    await writeScreenshotBundle(page, {
      file: screenshotPath,
      standard: {
        taskId: 'V-01',
        purpose: 'verification',
        surface: 'renderer',
        state: 'r09-three-instances',
        theme: 'renderer-default',
        quality: 'safe',
        audience: 'test',
        privacyCheck: 'pass',
        rightsStatus: 'original',
        altText: 'Pixeldart browser proof for three distinct instanced transforms.',
        notes: 'Standalone renderer smoke evidence; not a golden gallery image.',
      },
      metadata: {
        schemaVersion: 1,
        renderer: 'pixeldart',
        profile: 'safe',
        viewport: page.viewportSize(),
        sourceUrl: baseUrl,
        fixture: 'standalone-r09-instance-probe',
        evidence,
        browser: {
          name: 'firefox',
          version: page.context().browser()?.version() ?? null,
        },
        capture: { scale: 'css', animations: 'disabled', fullPage: false },
      },
    });
    console.log(`pixeldart-r09-instance-proof: ${JSON.stringify(evidence)}`);
    console.log(`pixeldart-r09-instance-screenshot: ${screenshotPath}`);
    await page.close();
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
