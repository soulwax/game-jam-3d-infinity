#!/usr/bin/env node

// Machine-side acceptance for HOUSE-05. This proves that the promoted FBX
// room is visitable and save-stable; it does not approve the room's appearance.
const { firefox } = require('playwright');

const baseUrl = process.env.CANONICAL_FBX_ROOM_URL || 'http://127.0.0.1:8090/';

function decodeSave(raw, label) {
  if (!raw) throw new Error(`${label}: save is missing`);
  const snapshot = JSON.parse(raw);
  const player = snapshot?.meta?.player;
  if (snapshot?.version !== 2 || player?.roomId !== 'living-room') {
    throw new Error(`${label}: expected living-room save, got ${JSON.stringify(player)}`);
  }
  return player;
}

async function savedPlayer(page) {
  const raw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
  if (!raw) return null;
  return JSON.parse(raw)?.meta?.player ?? null;
}

async function dismissVisitors(page) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const choice = page.locator('.door.visible .door-choice').filter({ hasText: 'ignore' });
    if (!(await choice.count())) return;
    await choice.evaluate((button) => button.click());
    await page.waitForTimeout(100);
  }
  throw new Error('visitor dialog did not clear');
}

async function readRuntime(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector('#game');
    if (!(canvas instanceof HTMLCanvasElement)) return null;
    let diagnostics = {};
    try {
      diagnostics = JSON.parse(canvas.getAttribute('data-renderer-model-package-diagnostics') || '{}');
    } catch (_) {}
    return {
      boot: canvas.getAttribute('data-boot-phase'),
      packages: canvas.getAttribute('data-renderer-model-packages'),
      runtime: canvas.getAttribute('data-renderer-model-packages-runtime'),
      houseRole: canvas.getAttribute('data-house-role'),
      storyAuthority: canvas.getAttribute('data-house-story-authority'),
      legacyLivingRoomShell: canvas.getAttribute('data-renderer-legacy-living-room-shell'),
      canonicalRoomShell: canvas.getAttribute('data-renderer-canonical-room-shell'),
      skyboxAsset: canvas.getAttribute('data-renderer-skybox-asset'),
      skyboxTexture: canvas.getAttribute('data-renderer-texture-skybox-main-atmosphere-v1'),
      playability: canvas.getAttribute('data-house-playability'),
      collisionAuthority: canvas.getAttribute('data-house-collision-authority'),
      focusAuthority: canvas.getAttribute('data-house-focus-authority'),
      saveRestoreAuthority: canvas.getAttribute('data-house-save-restore-authority'),
      audioPlanner: canvas.getAttribute('data-audio-planner'),
      diagnostics,
    };
  });
}

async function main() {
  const browser = await firefox.launch({ headless: process.env.RENDERER_HEADLESS !== '0' });
  try {
    const page = await browser.newPage({ viewport: { width: 800, height: 500 } });
    const httpErrors = [];
    page.on('response', (response) => {
      if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) {
        httpErrors.push(`${response.status()} ${response.url()}`);
      }
    });
    await page.addInitScript(() => {
      if (window.name !== 'canonical-fbx-room-clean') {
        window.localStorage.removeItem('quarantine.save.active');
        window.name = 'canonical-fbx-room-clean';
      }
    });
    await page.goto(`${baseUrl}?renderer=pixeldart&profile=safe&automation=1`, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 20000 },
    );
    await page.waitForFunction(() => {
      const canvas = document.querySelector('#game');
      if (!(canvas instanceof HTMLCanvasElement)) return false;
      let diagnostics;
      try {
        diagnostics = JSON.parse(canvas.getAttribute('data-renderer-model-package-diagnostics') || '{}');
      } catch (_) {
        return false;
      }
      return canvas.getAttribute('data-renderer-model-packages') === 'validated' &&
        canvas.getAttribute('data-renderer-model-packages-runtime') === 'loaded' &&
        canvas.getAttribute('data-house-role') === 'provisional-visible-place' &&
        canvas.getAttribute('data-house-story-authority') === 'external-story-data' &&
        canvas.getAttribute('data-renderer-skybox-asset') === 'main-atmosphere-v1' &&
        canvas.getAttribute('data-renderer-texture-skybox-main-atmosphere-v1') === 'loaded' &&
        canvas.getAttribute('data-house-playability') === 'canonical-fbx-residence' &&
        canvas.getAttribute('data-house-collision-authority') === 'game-house' &&
        canvas.getAttribute('data-house-focus-authority') === 'game-focus-resolver' &&
        canvas.getAttribute('data-house-save-restore-authority') === 'game-session-save' &&
        diagnostics.attached === true && diagnostics.bindingCount >= 1;
    // The promoted FBX package is intentionally loaded through the same
    // asynchronous runtime path as production. Headless WebGL can spend over
    // a minute compiling/linking it on a cold run, so keep the acceptance
    // window generous while still failing deterministically.
    }, null, { timeout: 90000, polling: 100 });
    const shellState = await page.evaluate(() => {
      const canvas = document.querySelector('#game');
      return {
        legacy: canvas?.getAttribute('data-renderer-legacy-living-room-shell'),
        canonical: canvas?.getAttribute('data-renderer-canonical-room-shell'),
      };
    });
    if (shellState.legacy !== 'removed' || shellState.canonical !== 'living-room') {
      throw new Error(`legacy living-room shell was not retired: ${JSON.stringify(shellState)}`);
    }
    await dismissVisitors(page);
    await page.waitForTimeout(1000);
    await page.keyboard.press('k');
    await page.waitForTimeout(100);
    await page.mouse.click(320, 240);
    await page.waitForTimeout(100);
    await page.keyboard.down('w');
    await page.waitForTimeout(3500);
    await page.keyboard.up('w');
    await page.waitForTimeout(180);
    await page.keyboard.down('a');
    await page.waitForTimeout(1800);
    await page.keyboard.up('a');
    await page.waitForTimeout(180);
    // Re-arm the production pointer-input path and turn toward the authored
    // living-room approach, matching the canonical embodied smoke route.
    await page.mouse.move(415, 90);
    await page.waitForTimeout(180);
    await page.keyboard.press('k');
    await page.waitForTimeout(150);
    let before = await savedPlayer(page);
    // The browser may begin at any valid hall spawn after an earlier local
    // run. Probe only through real movement and save observations so the
    // acceptance remains a visitability test rather than a camera teleport.
    const probes = [
      ['s', 1800], ['a', 900],
      ['s', 900], ['d', 900], ['w', 900], ['a', 900],
      ['s', 900], ['a', 900], ['w', 900], ['d', 900],
      ['w', 900], ['a', 900], ['s', 900], ['d', 900],
    ];
    for (const [key, milliseconds] of probes) {
      if (before?.roomId === 'living-room') break;
      await page.keyboard.down(key);
      await page.waitForTimeout(milliseconds);
      await page.keyboard.up(key);
      await page.waitForTimeout(100);
      await page.keyboard.press('k');
      await page.waitForTimeout(100);
      before = await savedPlayer(page);
    }
    if (before?.roomId !== 'living-room') {
      throw new Error(`bounded authored movement did not reach living-room: ${JSON.stringify(before)}`);
    }
    before = decodeSave(JSON.stringify({ version: 2, meta: { player: before } }), 'before reload');
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 20000 },
    );
    await dismissVisitors(page);
    await page.waitForFunction(() => {
      const canvas = document.querySelector('#game');
      if (!(canvas instanceof HTMLCanvasElement)) return false;
      let diagnostics;
      try {
        diagnostics = JSON.parse(canvas.getAttribute('data-renderer-model-package-diagnostics') || '{}');
      } catch (_) {
        return false;
      }
      return canvas.getAttribute('data-renderer-model-packages') === 'validated' &&
        canvas.getAttribute('data-renderer-model-packages-runtime') === 'loaded' &&
        diagnostics.attached === true && diagnostics.bindingCount >= 1;
    }, null, { timeout: 90000, polling: 100 });
    const after = decodeSave(
      await page.evaluate(() => window.localStorage.getItem('quarantine.save.active')),
      'after reload',
    );
    const runtime = await readRuntime(page);
    if (httpErrors.length) throw new Error(`unexpected HTTP errors: ${httpErrors.join('; ')}`);
    if (after.roomId !== before.roomId) {
      throw new Error(`room changed across reload: ${before.roomId} -> ${after.roomId}`);
    }
    console.log(JSON.stringify({
      route: 'canonical-fbx-room',
      status: 'machine-pass',
      storyIndependent: true,
      before: { roomId: before.roomId },
      after: { roomId: after.roomId },
      runtime,
    }));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
