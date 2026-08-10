const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');

const baseUrl = process.env.PIXELDART_RESIDENCY_BASE_URL ||
  'http://127.0.0.1:8092/tmp/r09-web/?r09-residency=1';
const outputDir = process.env.PIXELDART_RESIDENCY_OUTPUT || 'tmp/r09-renderer';

function readCanvas(page) {
  return page.locator('#test-canvas').evaluate((canvas) => {
    const attrs = (prefix) => Object.fromEntries(
      Array.from(canvas.attributes)
        .filter((attribute) => attribute.name.startsWith(prefix))
        .map((attribute) => [attribute.name, attribute.value]),
    );
    return {
      status: canvas.getAttribute('data-r09-texture-residency-status'),
      handle: canvas.getAttribute('data-r09-texture-residency-handle'),
      frame: Number(canvas.getAttribute('data-r09-texture-residency-frame')),
      draw: canvas.getAttribute('data-r09-texture-residency-draw'),
      resources: canvas.getAttribute('data-r09-texture-residency-resources'),
      residencyAttributes: attrs('data-r09-texture-residency-'),
      webglCalls: window.__pixeldartResidencyCalls ?? null,
    };
  });
}

async function capture(page, state, evidence) {
  return writeScreenshotBundle(page, {
    file: `${outputDir}/browser-pixeldart-texture-residency-${state}.png`,
    standard: {
      taskId: 'R-09',
      purpose: 'verification',
      surface: 'renderer',
      state: `r09-texture-residency-${state}`,
      theme: 'renderer-default',
      quality: 'safe',
      audience: 'test',
      privacyCheck: 'pass',
      rightsStatus: 'original',
      altText: `Pixeldart standalone renderer texture residency ${state} state.`,
      notes: 'Package-boundary browser evidence; not a golden gallery image.',
    },
    metadata: {
      schemaVersion: 1,
      renderer: 'pixeldart',
      profile: 'safe',
      viewport: page.viewportSize(),
      sourceUrl: baseUrl,
      fixture: 'standalone-r09-texture-residency',
      evidence,
      browser: {
        name: 'firefox',
        version: page.context().browser()?.version() ?? null,
      },
      capture: { scale: 'css', animations: 'disabled', fullPage: false },
    },
  });
}

async function run() {
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
    const errors = [];
    await page.addInitScript(() => {
      const calls = { createTexture: 0, deleteTexture: 0, draws: 0 };
      const proto = WebGL2RenderingContext.prototype;
      const createTexture = proto.createTexture;
      const deleteTexture = proto.deleteTexture;
      const drawElements = proto.drawElements;
      const drawElementsInstanced = proto.drawElementsInstanced;
      const drawArrays = proto.drawArrays;
      const drawArraysInstanced = proto.drawArraysInstanced;
      proto.createTexture = function (...args) {
        calls.createTexture += 1;
        return createTexture.apply(this, args);
      };
      proto.deleteTexture = function (...args) {
        calls.deleteTexture += 1;
        return deleteTexture.apply(this, args);
      };
      proto.drawElements = function (...args) {
        calls.draws += 1;
        return drawElements.apply(this, args);
      };
      proto.drawElementsInstanced = function (...args) {
        calls.draws += 1;
        return drawElementsInstanced.apply(this, args);
      };
      proto.drawArrays = function (...args) {
        calls.draws += 1;
        return drawArrays.apply(this, args);
      };
      proto.drawArraysInstanced = function (...args) {
        calls.draws += 1;
        return drawArraysInstanced.apply(this, args);
      };
      window.__pixeldartResidencyCalls = calls;
    });
    page.on('pageerror', (error) => errors.push(String(error)));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('#test-canvas')?.getAttribute(
        'data-r09-texture-residency-status') === 'pending',
      null,
      { timeout: 15000, polling: 25 },
    );
    const pending = await readCanvas(page);
    const pendingCapture = await capture(page, 'pending', pending);
    await page.waitForFunction(
      () => document.querySelector('#test-canvas')?.getAttribute(
        'data-r09-texture-residency-status') === 'resident',
      null,
      { timeout: 15000, polling: 25 },
    );
    const resident = await readCanvas(page);
    const residentCapture = await capture(page, 'resident', resident);

    if (errors.length > 0) throw new Error(`page errors: ${errors.join('\n')}`);
    if (pending.status !== 'pending' || pending.draw !== 'fallback-material' ||
        resident.status !== 'resident' || resident.draw !== 'resident-material') {
      throw new Error(`residency status/draw evidence was incomplete: ${JSON.stringify({ pending, resident })}`);
    }
    if (!pending.handle || pending.handle !== resident.handle) {
      throw new Error(`logical texture handle changed across upload: ${JSON.stringify({ pending, resident })}`);
    }
    const pendingPng = require('fs').readFileSync(pendingCapture.file);
    const residentPng = require('fs').readFileSync(residentCapture.file);
    if (pendingPng.equals(residentPng)) {
      throw new Error('pending and resident renderer captures were pixel-identical');
    }
    const pendingCalls = pending.webglCalls;
    const residentCalls = resident.webglCalls;
    if (!pendingCalls || !residentCalls || residentCalls.draws <= pendingCalls.draws ||
        residentCalls.createTexture !== pendingCalls.createTexture + 1 ||
        residentCalls.deleteTexture !== pendingCalls.deleteTexture) {
      throw new Error(`unexpected WebGL residency transition: ${JSON.stringify({ pendingCalls, residentCalls })}`);
    }
    console.log(`pixeldart-r09-texture-residency: ${JSON.stringify({ pending, resident })}`);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
