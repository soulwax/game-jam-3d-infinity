'use strict';

const fs = require('fs');
const path = require('path');
const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');
const {
  parsePortalStates,
  parseCellarTransmission,
  validateClosedCellarDoorState,
  validateReturnToOrigin,
} = require('./closed_cellar_door_contract.cjs');

const baseUrl = process.env.CELLAR_DOOR_BASE_URL ||
  'http://127.0.0.1:8098/tmp/pvs-web/?renderer=pixeldart&automation=1';
const outputDir = process.env.CELLAR_DOOR_ARTIFACT_DIR || 'tmp/r09-pvs';

function parsePlayer(raw) {
  const player = JSON.parse(raw || '{}');
  if (player.phase !== 'running' || player.inputEnabled !== true) {
    throw new Error(`automation player is not running: ${raw}`);
  }
  return player;
}

function parsePair(raw, label) {
  const match = /^(\d+)\/(\d+)$/.exec(raw || '');
  if (!match) throw new Error(`${label} count is invalid: ${raw}`);
  return { submitted: Number(match[1]), total: Number(match[2]) };
}

function parseResidency(raw, label) {
  if (!raw) throw new Error(`${label}: texture residency is missing`);
  const values = Object.fromEntries(raw.split(',').map((entry) => entry.split('=')));
  if (Object.keys(values).length === 0 || Object.values(values).some((v) => v !== 'resident')) {
    throw new Error(`${label}: textures are not all resident: ${raw}`);
  }
  return values;
}

function parseStats(raw) {
  if (!raw) throw new Error('renderer frame stats attribute is missing');
  return Object.fromEntries(raw.split(';').map((entry) => {
    const [key, value] = entry.split('=');
    return [key, Number(value)];
  }));
}

async function readState(page, label) {
  const raw = await page.locator('#game').evaluate((canvas) => ({
    player: canvas.getAttribute('data-automation-player'),
    cells: canvas.getAttribute('data-renderer-exterior-cells'),
    items: canvas.getAttribute('data-renderer-exterior-items'),
    casters: canvas.getAttribute('data-renderer-shadow-casters'),
    stats: canvas.getAttribute('data-renderer-frame-stats'),
    handles: canvas.getAttribute('data-renderer-texture-residency-handles'),
    residency: canvas.getAttribute('data-renderer-texture-residency'),
    portals: canvas.getAttribute('data-automation-portals'),
    audioPlanner: canvas.getAttribute('data-audio-planner'),
    audioRoomIr: canvas.getAttribute('data-audio-room-ir'),
    audioSpatial: canvas.getAttribute('data-audio-spatial-active'),
    cellarTransmission: canvas.getAttribute('data-audio-transmission-cellar'),
  }));
  const player = parsePlayer(raw.player);
  const cells = (raw.cells || '').split(',').filter(Boolean).sort();
  if (cells.length === 0) throw new Error(`${label}: no PVS cells published`);
  return {
    roomId: player.roomId,
    eye: player.eye,
    cells,
    items: parsePair(raw.items, `${label} exterior items`),
    casters: parsePair(raw.casters, `${label} shadow casters`),
    stats: parseStats(raw.stats),
    handles: raw.handles,
    residency: parseResidency(raw.residency, label),
    portals: parsePortalStates(raw.portals, label),
    audioPlanner: raw.audioPlanner,
    audioRoomIr: raw.audioRoomIr,
    audioSpatial: Number(raw.audioSpatial),
    cellarTransmission: parseCellarTransmission(raw.cellarTransmission, label),
  };
}

async function hold(page, key, milliseconds) {
  await page.keyboard.down(key);
  await page.waitForTimeout(milliseconds);
  await page.keyboard.up(key);
  await page.waitForTimeout(180);
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

async function capture(page, state, name, notes) {
  return writeScreenshotBundle(page, {
    file: path.join(outputDir, `${name}.png`),
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
      altText: `Closed cellar door browser proof while the player remains in ${state.roomId}.`,
      notes,
    },
    metadata: {
      schemaVersion: 1,
      scenario: 'closed-cellar-door',
      requestedRenderer: 'pixeldart',
      requestedProfile: 'safe',
      negotiatedProfile: 'safe',
      profileNegotiation: 'honored',
      resolvedRun: {
        schemaVersion: 2,
        canonical: {
          renderer: 'pixeldart',
          profile: 'safe',
          scenario: 'closed-cellar-door',
          viewport: page.viewportSize(),
        },
        compatibilityAliases: {},
      },
      routeName: 'closed-cellar-door',
      routePath: baseUrl,
      renderer: 'pixeldart',
      viewport: page.viewportSize(),
      sourceUrl: baseUrl,
      fixture: 'authored-house-closed-cellar-door',
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
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-audio-planner') === 'validated',
      null,
      { timeout: 20000, polling: 50 },
    );
    await dismissVisitor(page);
    await page.mouse.click(320, 240);
    await page.waitForTimeout(120);
    const before = await readState(page, 'cellar-door before');
    if (before.roomId !== 'hall') throw new Error(`expected hall start, got ${before.roomId}`);
    validateClosedCellarDoorState(before, 'cellar-door before');
    await capture(page, before, 'browser-game-cellar-door-before', 'Hall start before attempting the closed hall-cellar grille.');

    // The cellar portal is at the far south end of the hall. W reaches the
    // physical grille; the extra hold attempts to cross it and must be blocked.
    await hold(page, 'w', 7000);
    const after = await readState(page, 'cellar-door after-attempt');
    if (after.roomId !== 'hall') {
      throw new Error(`closed hall-cellar door unexpectedly transitioned: ${after.roomId}`);
    }
    if (after.cells.join('|') !== before.cells.join('|') ||
        after.items.submitted !== before.items.submitted ||
        after.items.total !== before.items.total) {
      throw new Error(`blocked door changed the PVS working set: ${JSON.stringify({ before, after })}`);
    }
    if (after.stats.creates !== before.stats.creates || after.stats.deletes !== before.stats.deletes ||
        after.handles !== before.handles) {
      throw new Error(`blocked door changed retained resources/textures: ${JSON.stringify({ before, after })}`);
    }
    if (after.casters.submitted !== before.casters.submitted || after.casters.total !== before.casters.total) {
      throw new Error(`blocked door changed shadow-caster policy: ${JSON.stringify({ before, after })}`);
    }
    validateClosedCellarDoorState(after, 'cellar-door blocked');
    await capture(page, after, 'browser-game-cellar-door-blocked', 'Physical traversal attempt is blocked by the authored closed/stuck cellar door; room and working set remain unchanged.');

    // Return through the same corridor. This must recover the original hall
    // cell/pose without creating a second resource or texture ownership set.
    await hold(page, 's', 7000);
    const returned = await readState(page, 'cellar-door returned');
    validateClosedCellarDoorState(returned, 'cellar-door returned');
    validateReturnToOrigin(before, returned);
    await capture(page, returned, 'browser-game-cellar-door-returned', 'After backing away from the blocked grille, the player returns to the original hall pose and retained working set.');
    if (errors.length > 0) throw new Error(`page errors: ${errors.join('\n')}`);
    const evidence = {
      before,
      after,
      returned,
      transition: 'hall→cellar blocked',
      roomStable: before.roomId === after.roomId,
      pvsStable: before.cells.join('|') === after.cells.join('|'),
      resourcesStable: before.stats.creates === after.stats.creates && before.stats.deletes === after.stats.deletes,
      textureHandlesStable: before.handles === after.handles,
      shadowCasterPolicyStable: before.casters.submitted === after.casters.submitted,
      returnToOrigin: true,
      closedDoorAudioMuffled: before.cellarTransmission.gainDb === -12 && before.cellarTransmission.lowPassHz === 1100,
    };
    fs.writeFileSync(path.join(outputDir, 'browser-game-cellar-door.json'), `${JSON.stringify(evidence, null, 2)}\n`);
    console.log(`quarantine-cellar-door: ${JSON.stringify(evidence)}`);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
