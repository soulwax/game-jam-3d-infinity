const { firefox } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');

const repositoryRoot = path.resolve(__dirname, '../..');
const projectVersion = fs.readFileSync(path.join(repositoryRoot, 'VERSION'), 'utf8').trim();

function gitValue(cwd, args, fallback) {
  try {
    return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8' }).trim() || fallback;
  } catch (_) {
    return fallback;
  }
}

const gameSha = gitValue(repositoryRoot, ['rev-parse', 'HEAD'], 'unknown');
const rendererSha = gitValue(path.join(repositoryRoot, 'external/pixeldart'), ['rev-parse', 'HEAD'], 'unknown');
const dirty = gitValue(repositoryRoot, ['status', '--porcelain'], '') !== '' ||
  gitValue(path.join(repositoryRoot, 'external/pixeldart'), ['status', '--porcelain'], '') !== '';
const buildId = process.env.BUILD_ID ||
  `${gameSha.slice(0, 12)}-${rendererSha.slice(0, 12)}${dirty ? '-dirty' : ''}`;

const baseUrl = process.env.PIXELDART_GALLERY_BASE_URL ||
  'http://127.0.0.1:8092/tmp/r09-web/';
const outputDir = process.env.PIXELDART_GALLERY_DIR ||
  'external/pixeldart/.github/screenshots';

async function capture(page, url, file, state, altText, key) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(
    () => document.querySelector('#test-canvas')?.hasAttribute('data-instance-pixel-proof'),
    null,
    { timeout: 15000 },
  );
  if (key) {
    await page.keyboard.press(key);
    await page.waitForTimeout(180);
  }
  const viewport = page.viewportSize();
  const gpu = await page.evaluate(() => {
    const canvas = document.querySelector('#test-canvas');
    const gl = canvas?.getContext('webgl2');
    const debug = gl?.getExtension('WEBGL_debug_renderer_info');
    return {
      vendor: debug ? gl.getParameter(debug.UNMASKED_VENDOR_WEBGL) : null,
      renderer: debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : null,
      version: gl?.getParameter(gl.VERSION) ?? null,
    };
  });
  return writeScreenshotBundle(page.locator('#test-canvas'), {
    file: `${outputDir}/${file}`,
    standard: {
      taskId: 'V-01',
      purpose: 'documentation',
      surface: 'renderer',
      state,
      sourceMethod: 'browser',
      safeArea: 'full-frame',
      theme: 'renderer-default',
      locale: 'en',
      motion: 'settled',
      quality: 'safe',
      audience: 'documentation',
      privacyCheck: 'pass',
      rightsStatus: 'original',
      altText,
      notes: 'Standalone Pixeldart WebGL2 demo capture; no house inventory or PVS data.',
    },
    metadata: {
      schemaVersion: 1,
      renderer: 'pixeldart',
      profile: 'safe',
      buildId,
      gameSha,
      rendererSha,
      projectVersion,
      browser: { name: 'firefox', version: await page.context().browser().version() },
      gpu,
      viewport,
      sourceUrl: url,
      fixture: 'standalone',
      camera: 'standalone-demo-default',
      simulation: { seed: null, day: null, hour: null, weather: null },
      capture: { scale: 'css', animations: 'disabled', fullPage: false },
    },
  });
}

async function run() {
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(String(error)));
    const captures = [];
    captures.push(await capture(
      page,
      `${baseUrl}?r09-instances=1`,
      'browser-pixeldart-r09-three-instances.png',
      'r09-three-instances',
      'Three shared cube instances rendered through one instanced draw.',
    ));
    captures.push(await capture(
      page,
      baseUrl,
      'browser-pixeldart-demo-all-features.png',
      'demo-all-features',
      'Standalone Pixeldart demo with lighting, shadows, post effects, fog, and materials.',
    ));
    captures.push(await capture(
      page,
      baseUrl,
      'browser-pixeldart-demo-depth-debug.png',
      'demo-depth-debug',
      'Standalone Pixeldart demo showing the linearized depth debug view.',
      'd',
    ));
    if (errors.length > 0) throw new Error(`page errors: ${errors.join('\n')}`);
    console.log('Pixeldart gallery capture bundles written:', captures.map((capture) =>
      `${capture.file} + ${capture.metadataFile} + ${capture.digestFile}`,
    ).join('\n'));
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
