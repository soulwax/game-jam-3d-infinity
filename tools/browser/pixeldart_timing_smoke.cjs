const { firefox } = require('playwright');

const baseUrl = process.env.PIXELDART_TIMING_BASE_URL ||
  'http://127.0.0.1:8091/web/renderer_test/';

function assertTiming(name, timing, { allowUnsupported = false } = {}) {
  const statuses = new Set(['ready', 'unsupported', 'disjoint', 'pending']);
  if (!statuses.has(timing.status)) {
    throw new Error(`${name}: invalid GPU timing status ${JSON.stringify(timing)}`);
  }
  if (timing.status === 'ready') {
    if (!Number.isInteger(timing.elapsedNanoseconds) ||
        timing.elapsedNanoseconds < 0) {
      throw new Error(`${name}: ready timing had no non-negative duration ${JSON.stringify(timing)}`);
    }
  } else if (timing.elapsedNanoseconds != null) {
    throw new Error(`${name}: ${timing.status} timing fabricated a duration ${JSON.stringify(timing)}`);
  }
  if (!allowUnsupported && timing.status === 'unsupported') {
    throw new Error(`${name}: WebGL2 timing unexpectedly unsupported`);
  }
}

async function readTiming(page) {
  return page.locator('#test-canvas').evaluate((canvas) => ({
    status: canvas.getAttribute('data-gpu-timing-status'),
    polls: Number(canvas.getAttribute('data-gpu-timing-polls')),
    elapsedNanoseconds: canvas.hasAttribute('data-gpu-timing-elapsed-ns')
      ? Number(canvas.getAttribute('data-gpu-timing-elapsed-ns'))
      : null,
  }));
}

async function run() {
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('#test-canvas')?.hasAttribute('data-gpu-timing-status'),
      null,
      { timeout: 15000 },
    );
    const timing = await readTiming(page);
    // A headless driver may expose WebGL2 while withholding the optional
    // timer extension. That is a valid capability result, not a test failure;
    // if the status is `ready`, assert the real duration below.
    assertTiming('webgl2', timing, { allowUnsupported: true });
    if (errors.length > 0) throw new Error(`webgl2: page errors ${errors.join('\n')}`);
    console.log(`pixeldart-webgl2-timing: ${JSON.stringify(timing)}`);
    await page.close();

    const unsupportedBrowser = await firefox.launch({
      headless: true,
      firefoxUserPrefs: { 'webgl.disabled': true },
    });
    try {
      const unsupportedPage = await unsupportedBrowser.newPage({
        viewport: { width: 640, height: 360 },
      });
      await unsupportedPage.goto(baseUrl, { waitUntil: 'networkidle' });
      await unsupportedPage.waitForFunction(
        () => document.querySelector('#test-canvas')?.getAttribute('data-gpu-timing-status') === 'unsupported',
        null,
        { timeout: 15000 },
      );
      const unsupported = await readTiming(unsupportedPage);
      assertTiming('webgl2-disabled', unsupported, { allowUnsupported: true });
      console.log(`pixeldart-webgl2-disabled-timing: ${JSON.stringify(unsupported)}`);
      await unsupportedPage.close();
    } finally {
      await unsupportedBrowser.close();
    }
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
