'use strict';

const fs = require('fs');
const path = require('path');
const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');
const {
  parseTextureBindings,
  validateResidentTextureBindings,
} = require('./exterior_pvs_residency.cjs');

const baseUrl = process.env.EXTERIOR_PVS_BASE_URL ||
  'http://127.0.0.1:8098/tmp/pvs-web/?renderer=pixeldart&automation=1';
const outputDir = process.env.EXTERIOR_PVS_ARTIFACT_DIR || '/tmp/r09-pvs';

function parsePlayer(raw) {
  if (!raw) throw new Error('automation player attribute is missing');
  const player = JSON.parse(raw);
  if (player.phase !== 'running' || player.inputEnabled !== true ||
      typeof player.roomId !== 'string') {
    throw new Error(`automation player is not running: ${raw}`);
  }
  return player;
}

function parseStats(raw) {
  if (!raw) throw new Error('renderer frame stats attribute is missing');
  return Object.fromEntries(raw.split(';').map((entry) => {
    const [key, value] = entry.split('=');
    return [key, Number(value)];
  }));
}

function parseItems(raw) {
  const match = /^(\d+)\/(\d+)$/.exec(raw || '');
  if (!match) throw new Error(`exterior item count is invalid: ${raw}`);
  return { submitted: Number(match[1]), total: Number(match[2]) };
}

function parseResidency(raw, label) {
  if (!raw) throw new Error(`${label}: texture residency is missing`);
  const result = {};
  for (const entry of raw.split(',').filter(Boolean)) {
    const [key, status] = entry.split('=');
    if (!key || !status) throw new Error(`${label}: invalid residency entry ${entry}`);
    result[key] = status;
  }
  if (Object.keys(result).length === 0) {
    throw new Error(`${label}: texture residency is empty`);
  }
  return result;
}

async function readState(page, label) {
  const state = await page.locator('#game').evaluate((canvas) => ({
    backend: canvas.getAttribute('data-renderer-backend'),
    player: canvas.getAttribute('data-automation-player'),
    cells: canvas.getAttribute('data-renderer-exterior-cells'),
    items: canvas.getAttribute('data-renderer-exterior-items'),
    shadowCasters: canvas.getAttribute('data-renderer-shadow-casters'),
    stats: canvas.getAttribute('data-renderer-frame-stats'),
    budget: canvas.getAttribute('data-renderer-budget'),
    textureResidency: canvas.getAttribute('data-renderer-texture-residency'),
    textureResidencyInitial: canvas.getAttribute('data-renderer-texture-residency-initial'),
    textureResidencyCounts: canvas.getAttribute('data-renderer-texture-residency-counts'),
    textureResidencyHandles: canvas.getAttribute('data-renderer-texture-residency-handles'),
    textureBindings: canvas.getAttribute('data-renderer-exterior-texture-bindings'),
  }));
  const player = parsePlayer(state.player);
  if (state.backend !== 'pixeldart' && state.backend !== 'next') {
    throw new Error(`${label}: unexpected backend ${state.backend}`);
  }
  const cells = (state.cells || '').split(',').filter(Boolean).sort();
  if (cells.length === 0) throw new Error(`${label}: no exterior PVS cells published`);
  return {
    backend: state.backend,
    roomId: player.roomId,
    eye: player.eye,
    yaw: player.yaw,
    cells,
    items: parseItems(state.items),
    shadowCasters: parseItems(state.shadowCasters),
    stats: parseStats(state.stats),
    budget: state.budget,
    textureResidency: parseResidency(state.textureResidency, label),
    textureResidencyInitial: parseResidency(state.textureResidencyInitial, `${label} initial`),
    textureResidencyCounts: state.textureResidencyCounts,
    textureResidencyHandles: state.textureResidencyHandles,
    textureBindings: parseTextureBindings(state.textureBindings, label),
  };
}

async function waitForRunning(page) {
  await page.waitForFunction(
    () => document.querySelector('#game')?.getAttribute('data-automation-player')?.includes('"phase":"running"'),
    null,
    { timeout: 20000, polling: 50 },
  );
  await page.waitForFunction(
    () => document.querySelector('#game')?.hasAttribute('data-renderer-exterior-cells'),
    null,
    { timeout: 10000, polling: 50 },
  );
}

async function dismissVisitor(page) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const choice = page.locator('.door.visible .door-choice').filter({ hasText: 'ignore' });
    if (!(await choice.count())) return;
    await choice.evaluate((button) => button.click());
    await page.waitForTimeout(120);
  }
  throw new Error('visitor dialog did not clear');
}

async function hold(page, key, milliseconds) {
  await page.keyboard.down(key);
  await page.waitForTimeout(milliseconds);
  await page.keyboard.up(key);
  await page.waitForTimeout(180);
}

async function readRoomId(page) {
  return page.locator('#game').evaluate((canvas) => {
    const raw = canvas.getAttribute('data-automation-player');
    return JSON.parse(raw || '{}').roomId;
  });
}

async function driveUntilRoom(page, key, targetRoom, label, {
  stepMs = 450,
  maxSteps = 16,
} = {}) {
  const steps = [];
  for (let i = 0; i < maxSteps; i++) {
    const current = await readRoomId(page);
    if (current === targetRoom) return steps;
    await hold(page, key, stepMs);
    steps.push({ key, stepMs, roomId: await readRoomId(page) });
  }
  throw new Error(`${label}: movement did not reach ${targetRoom}: ${JSON.stringify(steps)}`);
}

async function capture(page, state, name, notes) {
  const file = path.join(outputDir, `${name}.png`);
  return writeScreenshotBundle(page, {
    file,
    standard: {
      taskId: 'R-09',
      purpose: 'verification',
      surface: 'game',
      state: state.roomId,
      theme: 'renderer-default',
      quality: 'safe',
      audience: 'test',
      privacyCheck: 'pass',
      rightsStatus: 'original',
      altText: `Exterior PVS browser proof while the player is in ${state.roomId}.`,
      notes,
    },
    metadata: {
      schemaVersion: 1,
      scenario: 'exterior-pvs-transition',
      requestedRenderer: 'pixeldart',
      requestedProfile: 'safe',
      negotiatedProfile: 'safe',
      profileNegotiation: 'honored',
      resolvedRun: {
        schemaVersion: 2,
        canonical: {
          renderer: 'pixeldart',
          profile: 'safe',
          scenario: 'exterior-pvs-transition',
          viewport: page.viewportSize(),
        },
        compatibilityAliases: {},
      },
      routeName: 'exterior-pvs-transition',
      routePath: baseUrl,
      renderer: 'pixeldart',
      viewport: page.viewportSize(),
      sourceUrl: baseUrl,
      fixture: 'authored-house-exterior-pvs',
      evidence: state,
      capture: { scale: 'css', animations: 'disabled', fullPage: false },
      browser: { name: 'firefox', version: page.context().browser()?.version() ?? null },
    },
  });
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await firefox.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(`${error}\n${error.stack ?? ''}`));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await waitForRunning(page);
    await dismissVisitor(page);
    await page.mouse.click(320, 240);
    await page.waitForTimeout(120);
    const before = await readState(page, 'hall');
    if (before.roomId !== 'hall') throw new Error(`expected authored hall start, got ${before.roomId}`);
    if (!Object.values(before.textureResidencyInitial).includes('pending')) {
      throw new Error(`initial texture residency did not expose pending state: ${JSON.stringify(before)}`);
    }
    if (Object.values(before.textureResidency).some((status) => status !== 'resident')) {
      throw new Error(`hall textures did not become resident: ${JSON.stringify(before)}`);
    }
    validateResidentTextureBindings(before, 'hall');
    if (before.shadowCasters.submitted <= 0 ||
        before.shadowCasters.submitted >= before.shadowCasters.total) {
      throw new Error(`hall shadow-caster LOD was not bounded: ${JSON.stringify(before)}`);
    }
    await capture(page, before, 'browser-game-pvs-hall', 'Before transition: hall/front PVS working set.');

    // At the authored yaw-zero start, W advances down the hall toward the
    // hall-kitchen portal; A then crosses its west-facing opening.
    // The runtime house now applies the 2.25x authored horizontal scale;
    // derive enough forward travel to reach the hall-kitchen portal lane
    // before the adaptive lateral crossing below.
    await hold(page, 'w', 5600);
    const approach = await readState(page, 'hall approach');
    console.log(`quarantine-exterior-pvs-approach: ${JSON.stringify(approach)}`);
    const hallToKitchenSteps = await driveUntilRoom(
      page,
      'a',
      'kitchen',
      'hall-kitchen route',
    );
    const afterWest = await readState(page, 'hall west crossing');
    console.log(`quarantine-exterior-pvs-west-crossing: ${JSON.stringify({ state: afterWest, steps: hallToKitchenSteps })}`);
    const after = await readState(page, 'kitchen');
    if (after.roomId !== 'kitchen') throw new Error(`portal transition did not enter kitchen: ${after.roomId}`);
    if (before.cells.join('|') === after.cells.join('|')) {
      throw new Error(`room transition did not change PVS cells: ${before.cells.join(',')}`);
    }
    if (before.items.total !== after.items.total || before.items.total === 0) {
      throw new Error(`retained exterior item total changed: ${JSON.stringify({ before: before.items, after: after.items })}`);
    }
    if (before.stats.creates !== after.stats.creates || before.stats.deletes !== after.stats.deletes) {
      throw new Error(`PVS transition re-registered resources: ${JSON.stringify({ before: before.stats, after: after.stats })}`);
    }
    if (before.textureResidencyHandles !== after.textureResidencyHandles) {
      throw new Error(`texture handle identities changed across PVS transition: ${JSON.stringify({ before: before.textureResidencyHandles, after: after.textureResidencyHandles })}`);
    }
    if (Object.values(after.textureResidency).some((status) => status !== 'resident')) {
      throw new Error(`kitchen texture residency regressed: ${JSON.stringify(after)}`);
    }
    validateResidentTextureBindings(after, 'kitchen');
    if (after.shadowCasters.submitted <= 0 ||
        after.shadowCasters.submitted >= after.shadowCasters.total) {
      throw new Error(`kitchen shadow-caster LOD was not bounded: ${JSON.stringify(after)}`);
    }
    if (before.shadowCasters.submitted === after.shadowCasters.submitted) {
      throw new Error(`shadow-caster LOD did not switch facade tier: ${JSON.stringify({ before: before.shadowCasters, after: after.shadowCasters })}`);
    }
    if (after.items.submitted <= 0 || after.items.submitted >= after.items.total) {
      throw new Error(`kitchen PVS did not produce a bounded subset: ${JSON.stringify(after.items)}`);
    }
    await capture(page, after, 'browser-game-pvs-kitchen', 'After hall-kitchen portal crossing: kitchen/rear-service PVS working set.');

    // Continue through the authored kitchen-living portal. S backs away from
    // the hall opening, D reaches the portal lane, and S crosses physically;
    // this is a third room stop, not a teleport or room override.
    await hold(page, 's', 2500);
    await hold(page, 'a', 2200);
    const kitchenToLivingSteps = await driveUntilRoom(
      page,
      's',
      'living-room',
      'kitchen-living route',
    );
    const living = await readState(page, 'living-room');
    if (living.roomId !== 'living-room') {
      throw new Error(`kitchen-living portal did not enter living-room: ${living.roomId}`);
    }
    if (after.cells.join('|') === living.cells.join('|')) {
      throw new Error(`kitchen-living transition did not change PVS cells: ${after.cells.join(',')}`);
    }
    if (living.items.total !== before.items.total ||
        living.stats.creates !== before.stats.creates ||
        living.stats.deletes !== before.stats.deletes) {
      throw new Error(`multi-room transition changed retained resources: ${JSON.stringify({ before, living })}`);
    }
    if (living.textureResidencyHandles !== before.textureResidencyHandles ||
        Object.values(living.textureResidency).some((status) => status !== 'resident')) {
      throw new Error(`living-room texture residency regressed: ${JSON.stringify(living)}`);
    }
    validateResidentTextureBindings(living, 'living-room');
    if (living.shadowCasters.submitted <= 0 ||
        living.shadowCasters.submitted >= living.shadowCasters.total ||
        living.shadowCasters.total !== before.shadowCasters.total) {
      throw new Error(`living-room shadow-caster LOD was not bounded: ${JSON.stringify(living)}`);
    }
    await capture(page, living, 'browser-game-pvs-living', 'After kitchen-living portal crossing: living/front PVS working set.');
    if (errors.length > 0) throw new Error(`page errors: ${errors.join('\n')}`);
    const evidence = {
      before,
      after,
      living,
      transition: 'hall→kitchen→living-room',
      movementCalibration: { hallToKitchenSteps, kitchenToLivingSteps },
      transitions: [
        { from: before.roomId, to: after.roomId, cellsChanged: before.cells.join('|') !== after.cells.join('|') },
        { from: after.roomId, to: living.roomId, cellsChanged: after.cells.join('|') !== living.cells.join('|') },
      ],
      resourceStable: true,
      textureHandlesStable: before.textureResidencyHandles === after.textureResidencyHandles,
      residentDrawBindings: true,
      residentDrawBindingCounts: {
        hall: Object.keys(before.textureBindings).length,
        kitchen: Object.keys(after.textureBindings).length,
        living: Object.keys(living.textureBindings).length,
      },
      textureResidencyStable: Object.keys(after.textureResidency).every(
        (key) => after.textureResidency[key] === 'resident',
      ),
      shadowCasterLodStable: before.shadowCasters.total === after.shadowCasters.total &&
        before.shadowCasters.submitted !== after.shadowCasters.submitted,
      multiRoomResourceStable: living.stats.creates === before.stats.creates &&
        living.stats.deletes === before.stats.deletes &&
        living.textureResidencyHandles === before.textureResidencyHandles,
    };
    fs.writeFileSync(path.join(outputDir, 'browser-game-pvs-transition.json'), `${JSON.stringify(evidence, null, 2)}\n`);
    console.log(`quarantine-exterior-pvs: ${JSON.stringify(evidence)}`);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
