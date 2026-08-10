'use strict';

const fs = require('fs');
const path = require('path');
const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');

const baseUrl = process.env.HOUSE_MATERIALS_BASE_URL ||
  'http://127.0.0.1:8098/tmp/house-materials-web/?renderer=pixeldart&automation=1';
const outputDir = process.env.HOUSE_MATERIALS_ARTIFACT_DIR || '/tmp/house-materials';

function parseBindings(raw, label) {
  if (!raw) throw new Error(`${label}: house material bindings missing`);
  const entries = raw.split(',').filter(Boolean);
  if (entries.length !== 24) {
    throw new Error(`${label}: expected 24 room surface bindings, got ${entries.length}`);
  }
  const result = new Map();
  for (const entry of entries) {
    const match = /^([^:]+):(wall|floor|ceiling)=([^:]+):([^,]+)$/.exec(entry);
    if (!match) throw new Error(`${label}: malformed binding ${entry}`);
    result.set(`${match[1]}:${match[2]}`, {
      material: match[3],
      texture: match[4],
    });
  }
  for (const room of ['hall', 'living-room', 'kitchen', 'cellar', 'bedroom', 'landing', 'bathroom', 'spare-room']) {
    for (const surface of ['wall', 'floor', 'ceiling']) {
      if (!result.has(`${room}:${surface}`)) throw new Error(`${label}: missing ${room}:${surface}`);
    }
  }
  return result;
}

function parsePlayer(raw) {
  if (!raw) throw new Error('automation player state missing');
  const player = JSON.parse(raw);
  if (player.phase !== 'running' || player.inputEnabled !== true || player.roomId !== 'hall') {
    throw new Error(`unexpected player state ${raw}`);
  }
  return player;
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await firefox.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(`${error}`));
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => {
      const canvas = document.querySelector('#game');
      return canvas?.getAttribute('data-automation-player')?.includes('"phase":"running"') &&
        canvas?.getAttribute('data-renderer-house-materials');
    }, null, { timeout: 20000, polling: 50 });
    const state = await page.locator('#game').evaluate((canvas) => ({
      backend: canvas.getAttribute('data-renderer-backend'),
      player: canvas.getAttribute('data-automation-player'),
      materials: canvas.getAttribute('data-renderer-house-materials'),
      handles: canvas.getAttribute('data-renderer-house-surface-bindings'),
      scale: canvas.getAttribute('data-renderer-house-model-scale'),
      residency: canvas.getAttribute('data-renderer-texture-residency'),
      residencyInitial: canvas.getAttribute('data-renderer-texture-residency-initial'),
      stats: canvas.getAttribute('data-renderer-frame-stats'),
      budget: canvas.getAttribute('data-renderer-budget'),
      manifest: canvas.getAttribute('data-house-manifest'),
    }));
    if (state.backend !== 'pixeldart' && state.backend !== 'next') throw new Error(`unexpected backend ${state.backend}`);
    const player = parsePlayer(state.player);
    const bindings = parseBindings(state.materials, 'house');
    if (!state.handles || state.handles.split(',').length !== 24) throw new Error('surface handle binding count is not 24');
    if (state.scale !== '2.25') throw new Error(`spacious model scale missing: ${state.scale}`);
    if (state.manifest !== 'validated') throw new Error(`authored manifest was not validated: ${state.manifest}`);
    const expectedTextures = new Set(['wall-plaster', 'grime', 'floor-linoleum', 'ceiling-stained']);
    for (const value of bindings.values()) if (!expectedTextures.has(value.texture)) throw new Error(`unknown surface texture ${value.texture}`);
    const residency = Object.fromEntries((state.residency || '').split(',').filter(Boolean).map((entry) => entry.split('=')));
    if (Object.values(residency).some((status) => status !== 'resident')) throw new Error(`surface textures not resident: ${state.residency}`);
    if (!(state.residencyInitial || '').split(',').some((entry) => entry.endsWith('=pending'))) throw new Error('initial pending texture state was not observed');
    if (errors.length) throw new Error(`page errors: ${errors.join('\n')}`);
    const capture = await writeScreenshotBundle(page, {
      file: path.join(outputDir, 'browser-game-house-materials-effects-off.png'),
      standard: {
        taskId: 'H-00', purpose: 'verification', surface: 'game', state: 'house-materials-effects-off',
        theme: 'renderer-default', quality: 'safe', audience: 'test', privacyCheck: 'pass', rightsStatus: 'original',
        altText: 'Spacious two-storey house shell with authored wall, floor, and ceiling material bindings.',
        notes: 'Deterministic packaged Pixeldart capture; post-processing is off in the safe profile.',
      },
      metadata: {
        schemaVersion: 1, scenario: 'house-material-bindings', requestedRenderer: 'pixeldart', requestedProfile: 'safe',
        negotiatedProfile: 'safe', profileNegotiation: 'honored', routeName: 'house-material-bindings', routePath: baseUrl,
        renderer: 'pixeldart', viewport: page.viewportSize(), sourceUrl: baseUrl,
        fixture: 'authored-house-spacious-surface-palette', evidence: { ...state, player, bindingCount: bindings.size },
        capture: { scale: 'css', animations: 'disabled', fullPage: false },
        browser: { name: 'firefox', version: browser.version() },
      },
    });
    console.log(JSON.stringify({ ok: true, capture, bindingCount: bindings.size, scale: state.scale, backend: state.backend }));
  } finally {
    await browser.close();
  }
}

run().catch((error) => { console.error(error.stack || error); process.exitCode = 1; });
