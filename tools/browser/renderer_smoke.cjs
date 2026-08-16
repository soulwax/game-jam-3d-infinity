const { firefox } = require('playwright');
const fs = require('fs');
const pathModule = require('path');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');
const {
  decodeAutomationPlayerState,
  loadVisualCaptureManifest,
  selectVisualCapture,
  visualCaptureManifestSummary,
} = require('./visual_capture_manifest.cjs');
const {
  planKeyboardStep,
  planMouseDelta,
  poseDelta,
  poseReached,
} = require('./visual_capture_dispatch.cjs');

const projectVersion = fs.readFileSync('VERSION', 'utf8').trim();
const expectedHouseInventoryCount = (() => {
  const file = pathModule.join(
    process.cwd(),
    'assets',
    'house',
    'inventory.json',
  );
  const decoded = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(decoded.placements) || decoded.placements.length < 1) {
    throw new Error(`authored inventory has no placements: ${file}`);
  }
  return decoded.placements.length;
})();
const expectedHouseSoundEmitterCount = (() => {
  const file = pathModule.join(
    process.cwd(),
    'assets',
    'house',
    'soundscape.json',
  );
  const decoded = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(decoded.emitters) || decoded.emitters.length < 1) {
    throw new Error(`authored soundscape has no emitters: ${file}`);
  }
  return decoded.emitters.length;
})();

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';

function isPixeldartBackend(value) {
  return value === 'pixeldart' || value === 'next';
}

function readAutomationArgs() {
  const raw = process.env.AUTOMATION_ARGS;
  if (!raw) return null;
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`AUTOMATION_ARGS is not valid JSON: ${error}`);
  }
  const renderer = parsed?.renderer;
  const profile = parsed?.profile;
  const scenario = parsed?.scenario;
  const width = parsed?.viewport?.width;
  const height = parsed?.viewport?.height;
  const resolvedRun = parsed?.resolvedRun;
  const canonical = resolvedRun?.canonical;
  const aliases = resolvedRun?.compatibilityAliases;
  if (!['auto', 'pixeldart', 'next'].includes(renderer) ||
      !['safe', 'standard', 'high', 'clean'].includes(profile) ||
      typeof scenario !== 'string' || !/^[a-z0-9][a-z0-9._-]*$/.test(scenario) ||
      !Number.isInteger(width) || width < 1 ||
      !Number.isInteger(height) || height < 1 ||
      !resolvedRun || resolvedRun.schemaVersion !== 2 ||
      !canonical || typeof canonical !== 'object' || Array.isArray(canonical) ||
      !aliases || typeof aliases !== 'object' || Array.isArray(aliases) ||
      (aliases.renderer != null && aliases.renderer !== 'next') ||
      (aliases.profile != null && aliases.profile !== 'clean') ||
      !['auto', 'pixeldart'].includes(canonical.renderer) ||
      !['safe', 'standard', 'high'].includes(canonical.profile) ||
      canonical.scenario !== scenario ||
      canonical.viewport?.width !== width || canonical.viewport?.height !== height ||
      (renderer === 'next' &&
        (canonical.renderer !== 'pixeldart' || aliases?.renderer !== 'next')) ||
      (renderer !== 'next' &&
        (canonical.renderer !== renderer || aliases?.renderer != null)) ||
      (profile === 'clean' &&
        (canonical.profile !== 'high' || aliases?.profile !== 'clean')) ||
      (profile !== 'clean' &&
        (canonical.profile !== profile || aliases?.profile != null))) {
    throw new Error('AUTOMATION_ARGS has an invalid renderer/profile/scenario/viewport');
  }
  return {
    renderer,
    profile,
    canonicalRenderer: canonical.renderer,
    canonicalProfile: canonical.profile,
    scenario,
    width,
    height,
    resolvedRun,
  };
}

const automationArgs = readAutomationArgs();
const visualCaptureManifest = automationArgs
  ? loadVisualCaptureManifest(
      process.env.VISUAL_CAPTURE_MANIFEST ||
      pathModule.join(
        process.cwd(),
        'assets',
        'house',
        'verification',
        'captures.json',
      ),
    )
  : null;
const visualCaptureManifestInfo = visualCaptureManifest
  ? visualCaptureManifestSummary(visualCaptureManifest)
  : null;
const visualCaptureId = process.env.VISUAL_CAPTURE_ID?.trim() || null;
const visualCaptureSelection = visualCaptureManifest && visualCaptureId
  ? selectVisualCapture(visualCaptureManifest, visualCaptureId, {
      scenario: automationArgs.scenario,
      profile: automationArgs.profile,
      width: automationArgs.width,
      height: automationArgs.height,
    })
  : null;
if (visualCaptureId && !visualCaptureManifest) {
  throw new Error('VISUAL_CAPTURE_ID requires automation arguments and a visual capture manifest');
}
if (visualCaptureSelection?.status === 'incompatible') {
  throw new Error(`VISUAL_CAPTURE_ID is incompatible with automation request: ${JSON.stringify(visualCaptureSelection)}`);
}

function profileNegotiationStatus(requested, effective, diagnostics) {
  if (!requested || !effective) return null;
  if (requested === effective) return 'honored';
  if (Array.isArray(diagnostics?.capabilities) &&
      diagnostics.capabilities.includes(`negotiated-profile-${effective}`)) {
    return 'capability-negotiated';
  }
  return 'unexplained';
}

function assertSelectionDiagnostics(name, result, diagnostics) {
  const selection = diagnostics?.selection;
  if (!selection || typeof selection !== 'object' || Array.isArray(selection) ||
      selection.kind !== result.backend ||
      typeof selection.explicit !== 'boolean' ||
      typeof selection.automatic !== 'boolean' ||
      typeof selection.rejected !== 'boolean' ||
      typeof selection.aliasUsed !== 'boolean') {
    throw new Error(`${name}: selection diagnostics were incomplete ${JSON.stringify({ result, diagnostics })}`);
  }
  if ((selection.rejected && typeof selection.rejectionReason !== 'string') ||
      (selection.aliasUsed && typeof selection.aliasReason !== 'string')) {
    throw new Error(`${name}: selection diagnostics did not preserve explanations ${JSON.stringify({ result, diagnostics })}`);
  }
  if (name === 'pixeldart-canonical' && selection.aliasUsed) {
    throw new Error(`${name}: canonical query was reported as an alias ${JSON.stringify(selection)}`);
  }
  if (name === 'pixeldart-next' &&
      (!selection.aliasUsed || !selection.aliasReason.includes('pixeldart'))) {
    throw new Error(`${name}: compatibility alias was not diagnosed ${JSON.stringify(selection)}`);
  }
  if (name === 'unknown-fallback' &&
      (!selection.rejected || !selection.rejectionReason.includes('unsupported renderer query'))) {
    throw new Error(`${name}: rejected query was not preserved ${JSON.stringify(selection)}`);
  }
}

function decodeSavedPlayer(raw, label) {
  if (!raw) throw new Error(`${label}: save payload missing`);
  let snapshot;
  try {
    snapshot = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label}: save payload was not JSON: ${error}`);
  }
  const player = snapshot?.meta?.player;
  const eye = player?.eye;
  if (snapshot?.version !== 2 || typeof player?.roomId !== 'string' ||
      !eye || ![eye.x, eye.y, eye.z, player.yaw, player.pitch]
        .every((value) => typeof value === 'number' && Number.isFinite(value))) {
    throw new Error(`${label}: authoritative player state was incomplete`);
  }
  return {
    roomId: player.roomId,
    eye: { x: eye.x, y: eye.y, z: eye.z },
    yaw: player.yaw,
    pitch: player.pitch,
  };
}

function decodeSavedCalendar(raw, label) {
  if (!raw) throw new Error(`${label}: save payload missing`);
  let snapshot;
  try {
    snapshot = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label}: save payload was not JSON: ${error}`);
  }
  const time = snapshot?.run?.time;
  if (snapshot?.version !== 2 || !time ||
      !Number.isInteger(time.day) || time.day < 1 ||
      typeof time.hour !== 'number' || !Number.isFinite(time.hour) ||
      time.hour < 0 || time.hour >= 24) {
    throw new Error(`${label}: authoritative calendar state was incomplete`);
  }
  return { day: time.day, hour: time.hour };
}

async function waitForSavedDay(page, expectedDay, label) {
  try {
    await page.waitForFunction(
      (day) => {
        try {
          const raw = window.localStorage.getItem('quarantine.save.active');
          const snapshot = raw ? JSON.parse(raw) : null;
          return snapshot?.version === 2 && snapshot?.run?.time?.day === day;
        } catch (_) {
          return false;
        }
      },
      expectedDay,
      { timeout: 5000, polling: 50 },
    );
  } catch (error) {
    const observed = await page.evaluate(() =>
      window.localStorage.getItem('quarantine.save.active'));
    throw new Error(`${label}: saved day did not settle ${JSON.stringify({ expectedDay, observed, error: String(error) })}`);
  }
  return decodeSavedCalendar(
    await page.evaluate(() => window.localStorage.getItem('quarantine.save.active')),
    label,
  );
}

async function sleepToDay(page, expectedDay, label) {
  await page.keyboard.press('l');
  await waitForPanelOpen(page, 'Rest', `${label}: rest open`);
  const rest = page.locator('.panel[aria-label="Rest"].open');
  const choice = rest.locator('button').first();
  await choice.waitFor({ state: 'visible', timeout: 5000 });
  await choice.click();
  await page.waitForFunction(
    () => !document.querySelector('.panel[aria-label="Rest"]')?.classList.contains('open'),
    null,
    { timeout: 5000, polling: 50 },
  );
  return waitForSavedDay(page, expectedDay, `${label}: day ${expectedDay}`);
}

function playerDistance(a, b) {
  return Math.hypot(
    a.eye.x - b.eye.x,
    a.eye.y - b.eye.y,
    a.eye.z - b.eye.z,
  );
}

function savedMantleState(raw, mantleId, label) {
  if (!raw) throw new Error(`${label}: save payload missing`);
  let snapshot;
  try {
    snapshot = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label}: save payload was not JSON: ${error}`);
  }
  const mantle = snapshot?.run?.house?.mantles?.[mantleId];
  if (typeof mantle?.lit !== 'boolean' || typeof mantle?.examined !== 'boolean') {
    throw new Error(`${label}: mantle state missing for ${mantleId}`);
  }
  return { lit: mantle.lit, examined: mantle.examined };
}

async function waitForPrompt(page, expected, label) {
  const started = Date.now();
  try {
    await page.waitForFunction(
      (needle) => {
        const value = document.querySelector('.prompt')?.textContent?.trim() ?? '';
        return needle === '' ? value === '' : value.includes(needle);
      },
      expected,
      { timeout: 2000, polling: 50 },
    );
  } catch (error) {
    const observed = await page.locator('.prompt').textContent();
    throw new Error(`${label}: prompt did not settle ${JSON.stringify({ expected, observed, error: String(error) })}`);
  }
  return Date.now() - started;
}

async function waitForSettingsState(
  page,
  expectedOpen,
  label,
  ariaLabel = 'House settings',
) {
  try {
    await page.waitForFunction(
      ({ open, expectedLabel }) => document
        .querySelector(`.panel[aria-label="${expectedLabel}"]`)
        ?.classList.contains('open') === open,
      { open: expectedOpen, expectedLabel: ariaLabel },
      { timeout: 5000, polling: 50 },
    );
  } catch (error) {
    const observed = await page.evaluate((expectedLabel) => {
      const panel = document.querySelector(`.panel[aria-label="${expectedLabel}"]`);
      const door = document.querySelector('.door');
      const game = document.querySelector('#game');
      return {
        panel: panel ? {
          className: panel.className,
          hidden: panel.getAttribute('hidden'),
          active: panel.contains(document.activeElement),
        } : null,
        activeId: document.activeElement?.id ?? '',
        door: door ? {
          visible: door.classList.contains('visible'),
          focused: door.contains(document.activeElement),
        } : null,
        bootPhase: game?.getAttribute('data-boot-phase'),
        renderer: game?.getAttribute('data-renderer-backend'),
      };
    }, ariaLabel);
    throw new Error(`${label}: settings state did not settle ${JSON.stringify({ expectedOpen, ariaLabel, observed, error: String(error) })}`);
  }
}

async function waitForPanelOpen(page, ariaLabel, label) {
  try {
    await page.waitForFunction(
      (expectedLabel) => document
        .querySelector(`.panel[aria-label="${expectedLabel}"]`)
        ?.classList.contains('open') === true,
      ariaLabel,
      { timeout: 5000, polling: 50 },
    );
  } catch (error) {
    const observed = await page.evaluate((expectedLabel) => {
      const panel = document.querySelector(`.panel[aria-label="${expectedLabel}"]`);
      return {
        className: panel?.className ?? null,
        hidden: panel?.getAttribute('hidden') ?? null,
        activeId: document.activeElement?.id ?? '',
      };
    }, ariaLabel);
    throw new Error(`${label}: panel did not open ${JSON.stringify({ ariaLabel, observed, error: String(error) })}`);
  }
}

async function readAutomationPlayer(page, label) {
  const raw = await page.locator('#game').getAttribute('data-automation-player');
  return decodeAutomationPlayerState(raw, label);
}

async function driveToVisualCapture(page, selection, label) {
  if (!selection?.camera) throw new Error(`${label}: selected capture has no camera target`);
  const target = selection.camera;
  let observed = await readAutomationPlayer(page, `${label}: initial pose`);
  const before = observed;
  await page.mouse.click(480, 270);
  await page.waitForTimeout(80);
  let bestDistance = Number.POSITIVE_INFINITY;
  let stagnant = 0;
  for (let step = 0; step < 180; step++) {
    if (poseReached(observed, target, { positionTolerance: 0.08 })) {
      return { before, after: observed, steps: step };
    }
    const lookPixels = Math.max(
      Math.abs(planMouseDelta(observed, target, { maxPixels: 8 }).yawError),
      Math.abs(planMouseDelta(observed, target, { maxPixels: 8 }).pitchError),
    ) < 0.2 ? 2 : 8;
    const look = planMouseDelta(observed, target, { maxPixels: lookPixels });
    if (Math.abs(look.yawError) > 0.025 || Math.abs(look.pitchError) > 0.025) {
      // Dispatch the same pointer-lock movement event the game consumes. This
      // avoids Playwright's absolute-cursor edge saturation while preserving
      // the production Input listener and sensitivity path.
      await page.evaluate(({ dx, dy }) => {
        window.dispatchEvent(new MouseEvent('mousemove', {
          movementX: dx,
          movementY: dy,
        }));
      }, { dx: look.x, dy: look.y });
      await page.waitForTimeout(80);
    } else {
      const plan = planKeyboardStep(observed, target, { positionTolerance: 0.08 });
      if (plan.keys.length === 0) {
        await page.waitForTimeout(80);
      } else {
        try {
          for (const key of plan.keys) await page.keyboard.down(key);
          const distance = poseDelta(observed, target).distance;
          const holdMs = distance < 0.4 ? 60 : distance < 1 ? 120 : 220;
          await page.waitForTimeout(holdMs);
        } finally {
          for (const key of plan.keys) await page.keyboard.up(key);
        }
        await page.waitForTimeout(80);
      }
    }
    observed = await readAutomationPlayer(page, `${label}: step ${step + 1}`);
    const distance = Math.hypot(
      target.position[0] - observed.eye.x,
      target.position[2] - observed.eye.z,
    );
    // Turning in place cannot improve horizontal distance. Do not classify
    // the intentional look convergence as a movement stall.
    if (Math.abs(look.yawError) > 0.025 || Math.abs(look.pitchError) > 0.025) {
      stagnant = 0;
      continue;
    }
    if (distance + 0.02 < bestDistance) {
      bestDistance = distance;
      stagnant = 0;
    } else {
      stagnant++;
    }
    if (stagnant >= 12) {
      throw new Error(`${label}: pose dispatch made no progress ${JSON.stringify({ observed, target, distance, step })}`);
    }
  }
  throw new Error(`${label}: pose dispatch exceeded 180 steps ${JSON.stringify({ observed, target })}`);
}

async function captureAutomationScreenshot(page, routeName, routePath, result, suffix = '') {
  const runDir = process.env.AUTOMATION_RUN_DIR;
  if (!automationArgs || !runDir) return null;
  const safeRoute = routeName.replace(/[^a-z0-9._-]/gi, '-');
  const safeSuffix = suffix ? `-${suffix.replace(/[^a-z0-9._-]/gi, '-')}` : '';
  const file = pathModule.join(
    runDir,
    `browser-${automationArgs.scenario}-${safeRoute}${safeSuffix}.png`,
  );
  let diagnostics = {};
  let negotiatedProfile = null;
  let profileNegotiation = null;
  try {
    diagnostics = JSON.parse(result.diagnostics ?? '{}');
    negotiatedProfile = diagnostics.profile ?? null;
    profileNegotiation = profileNegotiationStatus(
      automationArgs.profile,
      negotiatedProfile,
      diagnostics,
    );
  } catch (_) {
    // The normal diagnostics assertion below reports malformed JSON.
  }
  const captureSelection = visualCaptureSelection
    ? {
        ...visualCaptureSelection,
        poseEvidence: result.visualCapturePoseEvidence ||
          visualCaptureSelection.poseEvidence,
      }
    : null;
  const automationPlayer = result.automationPlayer
    ? decodeAutomationPlayerState(result.automationPlayer, 'capture automation player')
    : null;
  if (captureSelection?.requiredMetadata?.includes('simulation')) {
    if (!automationPlayer || result.rainWindowVisibility == null) {
      throw new Error(
        `capture ${captureSelection.captureId}: required simulation metadata was not published`,
      );
    }
  }
  const state = `${automationArgs.scenario}-${routeName}${suffix ? `-${suffix}` : ''}`;
  const capture = await writeScreenshotBundle(page, {
    file,
    standard: {
      taskId: 'V-01',
      purpose: 'verification',
      surface: 'game',
      state,
      theme: automationArgs.profile,
      quality: automationArgs.profile,
      audience: 'test',
      altText: `Game automation capture for ${routeName} (${automationArgs.profile})`,
      notes: 'Captured by the production browser automation harness; not a golden promotion.',
    },
    metadata: {
      schemaVersion: 1,
      scenario: automationArgs.scenario,
      requestedRenderer: automationArgs.renderer,
      requestedProfile: automationArgs.profile,
      resolvedRun: automationArgs.resolvedRun,
      negotiatedProfile,
      profileNegotiation,
      viewport: { width: automationArgs.width, height: automationArgs.height },
      routeName,
      routePath,
      screenshot: pathModule.basename(file),
      capture: { scale: 'css', animations: 'disabled', fullPage: false },
      buildId: diagnostics.buildId ?? null,
      gameSha: diagnostics.gameSha ?? null,
      rendererSha: diagnostics.rendererSha ?? null,
      sdkVersion: diagnostics.sdkVersion ?? null,
      lockfileDigest: diagnostics.lockfileDigest ?? null,
      browser: {
        name: 'firefox',
        version: page.context().browser()?.version() ?? null,
        webgl: result.webgl ?? null,
      },
      camera: automationPlayer
        ? { position: [automationPlayer.eye.x, automationPlayer.eye.y, automationPlayer.eye.z], yaw: automationPlayer.yaw, pitch: automationPlayer.pitch }
        : null,
      simulation: automationPlayer
        ? {
            day: automationPlayer.day,
            hour: automationPlayer.hour,
            weather: captureSelection?.fixture?.weather ?? null,
            rainWindowVisibility: result.rainWindowVisibility == null
              ? null
              : Number(result.rainWindowVisibility),
          }
        : null,
      fixture: captureSelection?.fixture ?? null,
      automationPlayer,
      visualCaptureManifest: visualCaptureManifestInfo,
      visualCaptureSelection: captureSelection,
    },
  });
  console.log(`automation-capture: ${capture.file} (${capture.bytes} bytes)`);
  return capture;
}

function writeEmbodiedEvidence(routeName, routePath, result, evidence, capture) {
  const runDir = process.env.AUTOMATION_RUN_DIR;
  if (!automationArgs || !runDir) return null;
  const safeRoute = routeName.replace(/[^a-z0-9._-]/gi, '-');
  const file = pathModule.join(
    runDir,
    `browser-${automationArgs.scenario}-${safeRoute}-embodied.json`,
  );
  if (!capture?.file || !capture.metadataFile || !capture.digestFile) {
    throw new Error(`${routeName}: embodied capture bundle was not produced`);
  }
  let effectiveProfile = null;
  let profileNegotiation = null;
  try {
    const diagnostics = JSON.parse(result.diagnostics ?? '{}');
    effectiveProfile = diagnostics.profile ?? null;
    profileNegotiation = profileNegotiationStatus(
      automationArgs.profile,
      effectiveProfile,
      diagnostics,
    );
  } catch (_) {
    // The normal diagnostics assertion reports malformed renderer metadata.
  }
  // Browser wall-clock key holds can vary by a few centimetres. Keep exact
  // poses for diagnostics, but use an explicit half-metre semantic bucket for
  // replay identity so timing jitter cannot masquerade as route divergence.
  const roundSemantic = (value) => Math.round(value * 2) / 2;
  const normalizePose = (pose) => ({
    roomId: pose.roomId,
    eye: {
      x: roundSemantic(pose.eye.x),
      y: roundSemantic(pose.eye.y),
      z: roundSemantic(pose.eye.z),
    },
    yaw: roundSemantic(pose.yaw),
    pitch: roundSemantic(pose.pitch),
  });
  const normalized = {
    before: normalizePose(evidence.before),
    approach: normalizePose(evidence.approach),
    after: normalizePose(evidence.after),
    positive: evidence.positive,
    denial: evidence.denial,
    movementDistance: roundSemantic(playerDistance(evidence.before, evidence.after)),
  };
  const replayKey = [
    automationArgs.scenario,
    routeName,
    routePath,
    automationArgs.renderer,
    automationArgs.profile,
    effectiveProfile,
    normalized.before.roomId,
    normalized.before.eye.x,
    normalized.before.eye.y,
    normalized.before.eye.z,
    normalized.approach.roomId,
    normalized.approach.eye.x,
    normalized.approach.eye.y,
    normalized.approach.eye.z,
    normalized.after.roomId,
    normalized.after.eye.x,
    normalized.after.eye.y,
    normalized.after.eye.z,
    'unfocused-action',
  ].join('|');
  const payload = {
    schemaVersion: 1,
    kind: 'embodied-route-v1',
    scenario: automationArgs.scenario,
    routeName,
    routePath,
    capture: {
      screenshot: pathModule.basename(capture.file),
      metadata: pathModule.basename(capture.metadataFile),
      digest: pathModule.basename(capture.digestFile),
    },
    requestedRenderer: automationArgs.renderer,
    requestedProfile: automationArgs.profile,
    resolvedRun: automationArgs.resolvedRun,
    effectiveRenderer: result.backend,
      effectiveProfile,
      profileNegotiation,
      visualCaptureSelection,
    actions: [
      'visitor.ignore-until-clear',
      'KeyW:3500ms+KeyA:1800ms',
      'KeyE:unfocused',
      'departure:cardinal-probes+KeyS:800ms',
      'KeyE:denied-after-focus-clear',
    ],
    assertions: {
      focus: 'none (layout-dependent)',
      positiveAction: 'unfocused-action-denied',
      negativeAction: 'save-preserved-after-denial',
      saveAuthoritative: true,
      movementAuthoritative: true,
    },
    evidence,
    evidenceNormalized: normalized,
    normalizationMeters: 0.5,
    replayKey,
  };
  fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`embodied-evidence: ${file}`);
  return file;
}

const routes = [
  ['pixeldart-default', '/'],
  ['pixeldart-canonical', '/?renderer=pixeldart'],
  ['pixeldart-next', '/?renderer=next'],
  ['pixeldart-auto-candidate', '/?renderer=auto'],
  ['unknown-fallback', '/?renderer=unknown'],
];

function trackPageHealth(page) {
  const failures = [];
  page.on('pageerror', (error) => failures.push(`pageerror: ${error}\n${error.stack ?? ''}`));
  page.on('response', (response) => {
    if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) {
      failures.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });
  return failures;
}

function assertHealthy(failures, label) {
  if (failures.length) throw new Error(`${label}: ${failures.join('; ')}`);
}

async function dismissVisitorDialogs(page, label) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const ignoreChoice = page.locator('.door.visible .door-choice').filter({ hasText: 'ignore' });
    if (!(await ignoreChoice.count())) return;
    // The canvas owns the container's hit-test layer in headless Firefox;
    // dispatch the button's own click handler rather than mutating door state
    // or bypassing the event contract with a forced pointer click.
    await ignoreChoice.evaluate((button) => button.click());
    await page.waitForTimeout(100);
  }
  throw new Error(`${label}: visitor modal kept reopening after eight real choices`);
}

async function closeBrowserBounded(browser, timeoutMs = 5000) {
  let timer;
  try {
    await Promise.race([
      browser.close(),
      new Promise((resolve) => {
        timer = setTimeout(resolve, timeoutMs);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

(async () => {
  const launchOptions = { headless: process.env.RENDERER_HEADLESS !== '0' };
  if (process.env.FIREFOX_BIN) launchOptions.executablePath = process.env.FIREFOX_BIN;
  const browser = await firefox.launch(launchOptions);
  try {
    const selectedRoutes = automationArgs
      ? [[
          automationArgs.renderer === 'pixeldart'
              ? 'pixeldart-canonical'
            : automationArgs.renderer === 'next'
              ? 'pixeldart-next'
              : 'pixeldart-default',
          automationArgs.renderer === 'pixeldart'
              ? '/?renderer=pixeldart'
            : automationArgs.renderer === 'next'
              ? '/?renderer=next'
              : '/',
        ]]
      : routes;
    if (automationArgs) {
      console.log(`automation-config: ${JSON.stringify(automationArgs)}`);
    }
    for (const [name, path] of selectedRoutes) {
      const page = await browser.newPage(
        automationArgs
          ? { viewport: { width: automationArgs.width, height: automationArgs.height } }
          : undefined,
      );
      const failures = trackPageHealth(page);
      if (visualCaptureSelection) {
        await page.addInitScript(() => {
          window.localStorage.removeItem('quarantine.save.active');
        });
      }
      const captureFixtureQuery = visualCaptureSelection
        ? `&captureSeed=${encodeURIComponent(visualCaptureSelection.fixture.seed)}` +
          `&captureDay=${encodeURIComponent(visualCaptureSelection.fixture.day)}` +
          `&captureHour=${encodeURIComponent(visualCaptureSelection.fixture.hour)}` +
          `&captureWeather=${encodeURIComponent(visualCaptureSelection.fixture.weather)}` +
          `&captureShutterMap=${encodeURIComponent(JSON.stringify(visualCaptureSelection.fixture.shutters))}` +
          `&captureShutters=${encodeURIComponent((() => {
            const states = Object.values(visualCaptureSelection.fixture.shutters);
            return states.length > 0 && states.every((state) => state === states[0])
              ? states[0]
              : 'mixed';
          })())}` +
          (() => {
            const mantle = Object.entries(visualCaptureSelection.fixture.mantles)
              .find(([, state]) => state === 'on');
            return mantle
              ? `&captureMantleId=${encodeURIComponent(mantle[0])}&captureMantleLit=1`
              : '';
          })()
        : '';
      const automationPath = automationArgs
        ? `${path}${path.includes('?') ? '&' : '?'}automation=1${captureFixtureQuery}`
        : path;
      const response = await page.goto(`${baseUrl}${automationPath}`);
      if (!response || response.status() !== 200) {
        throw new Error(`${name}: expected HTTP 200`);
      }
      if (name === 'pixeldart-canonical' && !visualCaptureSelection) {
        await page.evaluate(() => window.localStorage.removeItem('quarantine.save.active'));
      }
      await page.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-boot-phase'),
        null,
        { timeout: 15000 },
      );
      await page.waitForTimeout(1000);
      await page.mouse.click(10, 10);
      await page.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-audio-spatial-active') !== null,
        null,
        { timeout: 10000 },
      );
      await page.waitForTimeout(100);
      await page.evaluate(() => {
        const choice = document.querySelector('.door.visible button');
        if (choice instanceof HTMLElement) choice.focus();
      });
      const result = await page.locator('#game').evaluate((canvas) => ({
        bootPhase: canvas.getAttribute('data-boot-phase'),
        requested: canvas.getAttribute('data-renderer-request'),
        backend: canvas.getAttribute('data-renderer-backend'),
        fallback: canvas.getAttribute('data-renderer-fallback'),
        diagnostics: canvas.getAttribute('data-renderer-diagnostics'),
        error: canvas.getAttribute('data-renderer-error'),
        bootError: canvas.getAttribute('data-boot-error'),
        errorStack: canvas.getAttribute('data-renderer-error-stack'),
        bootStack: canvas.getAttribute('data-boot-stack'),
        webgl: (() => {
          const gl = canvas.getContext('webgl2');
          const debug = gl?.getExtension('WEBGL_debug_renderer_info');
          return {
            vendor: debug ? gl.getParameter(debug.UNMASKED_VENDOR_WEBGL) : null,
            renderer: debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : null,
            version: gl?.getParameter(gl.VERSION) ?? null,
          };
        })(),
        accessibility: {
          label: canvas.getAttribute('aria-label'),
          tabIndex: canvas.tabIndex,
          saveLive: document.querySelector('#save-status')?.getAttribute('aria-live'),
        },
        frameStats: canvas.getAttribute('data-renderer-frame-stats'),
        frameBudget: canvas.getAttribute('data-renderer-budget'),
        frameSubmits: canvas.getAttribute('data-renderer-frame-submits'),
        automationPlayer: canvas.getAttribute('data-automation-player'),
        captureMantle: canvas.getAttribute('data-automation-capture-mantle'),
        captureWeather: canvas.getAttribute('data-automation-capture-weather'),
        captureShutters: canvas.getAttribute('data-automation-capture-shutters'),
        rainWindowVisibility: canvas.getAttribute('data-automation-rain-window-visibility'),
        houseManifest: canvas.getAttribute('data-house-manifest'),
        houseManifestSource: canvas.getAttribute('data-house-manifest-source'),
        houseInventory: canvas.getAttribute('data-house-inventory'),
        houseInventorySource: canvas.getAttribute('data-house-inventory-source'),
        houseInventoryCount: canvas.getAttribute('data-house-inventory-count'),
        inventoryItems: canvas.getAttribute('data-renderer-inventory-items'),
        inventoryResolution: canvas.getAttribute('data-renderer-inventory-resolution'),
        inventoryProxyCount: canvas.getAttribute('data-renderer-inventory-proxy-count'),
        houseSoundscape: canvas.getAttribute('data-house-soundscape'),
        houseSoundscapeSource: canvas.getAttribute('data-house-soundscape-source'),
        houseSoundEmitterCount: canvas.getAttribute('data-house-sound-emitter-count'),
        audioPlanner: canvas.getAttribute('data-audio-planner'),
        audioSpatialActive: canvas.getAttribute('data-audio-spatial-active'),
        audioMusicStarted: canvas.getAttribute('data-audio-music-started'),
        audioRoomIr: canvas.getAttribute('data-audio-room-ir'),
        door: (() => {
          const door = document.querySelector('.door');
          return {
            role: door?.getAttribute('role'),
            modal: door?.getAttribute('aria-modal'),
            label: door?.getAttribute('aria-label'),
            hidden: door?.getAttribute('hidden'),
            visible: door?.classList.contains('visible'),
            lineLive: door?.querySelector('.door-line')?.getAttribute('aria-live'),
            focused: door?.contains(document.activeElement),
          };
        })(),
        prompt: (() => {
          const prompt = document.querySelector('.prompt');
          return {
            role: prompt?.getAttribute('role'),
            live: prompt?.getAttribute('aria-live'),
          };
        })(),
        broadcast: (() => {
          const broadcast = document.querySelector('.broadcast');
          return {
            role: broadcast?.getAttribute('role'),
            live: broadcast?.getAttribute('aria-live'),
          };
        })(),
        settings: (() => {
          const settings = [...document.querySelectorAll('.panel')]
            .find((panel) => panel.getAttribute('aria-label') === 'House settings');
          return {
            role: settings?.getAttribute('role'),
            label: settings?.getAttribute('aria-label'),
            hidden: settings?.getAttribute('hidden'),
            controls: settings?.querySelectorAll('input[type="range"]').length ?? 0,
            toggles: settings?.querySelectorAll('input[type="checkbox"]').length ?? 0,
          };
        })(),
        wallTexture: canvas.getAttribute('data-renderer-texture-wall-plaster'),
        grimeTexture: canvas.getAttribute('data-renderer-texture-grime'),
      }));
      if (!visualCaptureSelection) {
        await captureAutomationScreenshot(page, name, path, result);
      }
      const buttons = await page.locator('button').evaluateAll((nodes) =>
        nodes.map((node) => ({
          text: node.textContent?.trim() ?? '',
          label: node.getAttribute('aria-label') ?? '',
        })),
      );
      let diagnostics;
      try {
        diagnostics = JSON.parse(result.diagnostics ?? '');
      } catch (_) {
        throw new Error(`${name}: diagnostics were not valid JSON`);
      }
      if (automationArgs) {
        const player = decodeAutomationPlayerState(
          result.automationPlayer,
          `${name}: automation player state`,
        );
        if (player.phase !== 'running' || !player.inputEnabled) {
          throw new Error(`${name}: automation player was not running ${JSON.stringify(player)}`);
        }
        console.log(`automation-player: ${JSON.stringify({ route: name, roomId: player.roomId, eye: player.eye, yaw: player.yaw, pitch: player.pitch })}`);
      }
      if (visualCaptureSelection && !isPixeldartBackend(result.backend)) {
        throw new Error(`${name}: selected visual capture requires Pixeldart, but startup fell back ${JSON.stringify({ backend: result.backend, error: result.error, errorStack: result.errorStack })}`);
      }
      if (result.backend !== 'pixeldart' ||
          !result.diagnostics || !result.bootPhase) {
        throw new Error(`${name}: incomplete diagnostics ${JSON.stringify(result)}`);
      }
      if (diagnostics.backend !== result.backend ||
          diagnostics.provenancePinned !== true ||
          !diagnostics.gameSha || !diagnostics.rendererSha ||
          !diagnostics.sdkVersion || !diagnostics.lockfileDigest ||
          diagnostics.projectVersion !== projectVersion ||
          typeof diagnostics.buildId !== 'string' ||
          !/^[0-9a-f]{12}-[0-9a-f]{12}(?:-dirty)?$/.test(
            diagnostics.buildId,
          )) {
        throw new Error(`${name}: incomplete provenance diagnostics ${JSON.stringify({ result, diagnostics })}`);
      }
      assertSelectionDiagnostics(name, result, diagnostics);
      if (isPixeldartBackend(result.backend) &&
          !diagnostics.capabilities.includes(`profile-${diagnostics.profile}`)) {
        throw new Error(`${name}: selected profile is absent from capabilities ${JSON.stringify(diagnostics)}`);
      }
      if (automationArgs && isPixeldartBackend(result.backend)) {
        const negotiation = profileNegotiationStatus(
          automationArgs.profile,
          diagnostics.profile,
          diagnostics,
        );
        if (!negotiation || negotiation === 'unexplained') {
          throw new Error(`${name}: requested/effective profile change was not explained ${JSON.stringify({ requested: automationArgs.profile, effective: diagnostics.profile, negotiation, capabilities: diagnostics.capabilities })}`);
        }
      }
      if (isPixeldartBackend(result.backend) &&
          (result.wallTexture !== 'loaded' || result.grimeTexture !== 'loaded')) {
        throw new Error(`${name}: authored Pixeldart textures did not load ${JSON.stringify(result)}`);
      }
      if (name === 'unknown-fallback' &&
          (!diagnostics.selection?.rejected ||
           typeof diagnostics.selection?.rejectionReason !== 'string')) {
        throw new Error(`${name}: rejected-query diagnostics were incomplete ${JSON.stringify(diagnostics)}`);
      }
      if (name === 'pixeldart-auto-candidate' &&
          (!isPixeldartBackend(result.backend) || result.fallback === 'true')) {
        throw new Error(`${name}: auto candidate did not select Pixeldart ${JSON.stringify(result)}`);
      }
      if (name === 'pixeldart-default' &&
          (!isPixeldartBackend(result.backend) || result.fallback === 'true' ||
           result.requested !== 'auto')) {
        throw new Error(`${name}: query-free startup did not select canonical Pixeldart ${JSON.stringify(result)}`);
      }
      if (result.houseManifest !== 'validated' ||
          !['res/house/house.json', '/res/house/house.json'].includes(
            result.houseManifestSource,
          )) {
        throw new Error(`${name}: authored house manifest was not validated ${JSON.stringify(result)}`);
      }
      if (result.houseInventory !== 'validated' ||
          !['res/house/inventory.json', '/res/house/inventory.json'].includes(
            result.houseInventorySource,
          ) || Number(result.houseInventoryCount) !== expectedHouseInventoryCount) {
        throw new Error(`${name}: authored house inventory was not validated ${JSON.stringify({
          expectedCount: expectedHouseInventoryCount,
          result,
        })}`);
      }
      if (result.inventoryResolution !== 'proxy' ||
          Number(result.inventoryProxyCount) !== Number(result.inventoryItems)) {
        throw new Error(`${name}: inventory proxy state was not explicit ${JSON.stringify(result)}`);
      }
      if (result.houseSoundscape !== 'validated' ||
          !['res/house/soundscape.json', '/res/house/soundscape.json'].includes(
            result.houseSoundscapeSource,
          ) || Number(result.houseSoundEmitterCount) !== expectedHouseSoundEmitterCount) {
        throw new Error(`${name}: authored house soundscape was not validated ${JSON.stringify(result)}`);
      }
      if (!visualCaptureSelection && (result.audioSpatialActive === null ||
          !/^\d+$/.test(result.audioSpatialActive))) {
        throw new Error(`${name}: audio lifecycle telemetry was not published ${JSON.stringify(result)}`);
      }
      if (!visualCaptureSelection && result.audioMusicStarted !== 'true') {
        throw new Error(`${name}: persistent music loop was not started ${JSON.stringify(result)}`);
      }
      if (!visualCaptureSelection && result.audioRoomIr !== 'ir-stone') {
        throw new Error(`${name}: active room impulse response was not published ${JSON.stringify(result)}`);
      }
      if (result.audioPlanner !== 'validated') {
        throw new Error(`${name}: acoustic planner was not wired ${JSON.stringify(result)}`);
      }
      const visitorDialog = result.door.role === 'dialog' &&
        result.door.modal === 'true';
      const visitorHidden = !result.door.visible &&
        result.door.role === 'region' && result.door.modal === 'false';
      if ((!visitorDialog && !visitorHidden) ||
          result.door.label !== 'Front door visitor' ||
          (result.door.hidden !== '' && !result.door.visible) ||
          result.door.lineLive !== 'polite' ||
          (result.door.visible && !result.door.focused)) {
        throw new Error(`${name}: visitor door semantics were incomplete ${JSON.stringify(result.door)}`);
      }
      if (result.prompt.role !== 'status' || result.prompt.live !== 'polite' ||
          result.broadcast.role !== 'status' || result.broadcast.live !== 'polite') {
        throw new Error(`${name}: live-region semantics were incomplete ${JSON.stringify(result)}`);
      }
      if (result.settings.role !== 'dialog' ||
          result.settings.label !== 'House settings' ||
          result.settings.hidden !== '' ||
          result.settings.controls !== 6 ||
          result.settings.toggles !== 4) {
        throw new Error(`${name}: settings surface was incomplete ${JSON.stringify(result.settings)}`);
      }
      if (buttons.some((button) => !button.text && !button.label)) {
        throw new Error(`${name}: unlabeled button in accessibility smoke`);
      }
      if (result.accessibility.label !== 'Quarantine game viewport' ||
          result.accessibility.tabIndex < 0 ||
          result.accessibility.saveLive !== 'polite') {
        throw new Error(`${name}: incomplete accessibility surface ${JSON.stringify(result.accessibility)}`);
      }
      if (isPixeldartBackend(result.backend) &&
          (!result.frameStats || result.frameBudget !== 'ok')) {
        throw new Error(`${name}: renderer budget evidence failed ${JSON.stringify(result)}`);
      }
      await page.locator('#game').focus();
      const focusedId = await page.evaluate(() => document.activeElement?.id ?? '');
      if (focusedId !== 'game') {
        throw new Error(`${name}: game viewport did not accept keyboard focus`);
      }
      if (visualCaptureSelection) {
        if (result.bootError) {
          throw new Error(`${name}: packaged capture boot error ${result.bootError}`);
        }
        await dismissVisitorDialogs(page, `${name}: visual capture`);
        const dispatched = await driveToVisualCapture(
          page,
          visualCaptureSelection,
          `${name}: ${visualCaptureSelection.captureId}`,
        );
        const capturedPlayer = await readAutomationPlayer(
          page,
          `${name}: captured pose`,
        );
        const settledBootError = await page.locator('#game').getAttribute('data-boot-error');
        const settledBootStack = await page.locator('#game').getAttribute('data-boot-stack');
        if (settledBootError) {
          throw new Error(`${name}: packaged capture boot error after dispatch ${settledBootError}\n${settledBootStack ?? ''}\n${failures.join('; ')}`);
        }
        const fixture = visualCaptureSelection.fixture;
        if (capturedPlayer.day !== fixture.day ||
            Math.abs(capturedPlayer.hour - fixture.hour) > 0.25) {
          throw new Error(`${name}: selected capture fixture did not settle ${JSON.stringify({
            expected: { day: fixture.day, hour: fixture.hour, seed: fixture.seed },
            observed: { day: capturedPlayer.day, hour: capturedPlayer.hour },
          })}`);
        }
        const expectedMantle = Object.entries(fixture.mantles)
          .find(([, state]) => state === 'on');
        if (expectedMantle &&
            result.captureMantle !== `${expectedMantle[0]}:on`) {
          throw new Error(`${name}: selected mantle fixture did not settle ${JSON.stringify({
            expected: `${expectedMantle[0]}:on`,
            observed: result.captureMantle,
          })}`);
        }
        if (result.captureWeather !== fixture.weather) {
          throw new Error(`${name}: selected weather fixture did not settle ${JSON.stringify({
            expected: fixture.weather,
            observed: result.captureWeather,
          })}`);
        }
        const shutterStates = Object.values(fixture.shutters);
        const expectedShutters = shutterStates.length > 0 &&
            shutterStates.every((state) => state === shutterStates[0])
          ? shutterStates[0]
          : 'mixed';
        if (result.captureShutters !== expectedShutters) {
          throw new Error(`${name}: selected shutter fixture did not settle ${JSON.stringify({
            expected: expectedShutters,
            observed: result.captureShutters,
          })}`);
        }
        const openWindows = shutterStates.filter((state) => state === 'open').length;
        const expectedRainWindowVisibility = Math.max(
          0.12,
          Math.min(1, openWindows / Math.max(1, shutterStates.length)),
        ).toFixed(3);
        if (result.rainWindowVisibility !== expectedRainWindowVisibility) {
          throw new Error(`${name}: rain aperture visibility did not settle ${JSON.stringify({
            expected: expectedRainWindowVisibility,
            observed: result.rainWindowVisibility,
          })}`);
        }
        if (!poseReached(capturedPlayer, visualCaptureSelection.camera, {
          positionTolerance: 0.08,
        })) {
          throw new Error(`${name}: selected capture pose did not settle ${JSON.stringify({ capturedPlayer, target: visualCaptureSelection.camera })}`);
        }
        const captureResult = {
          ...result,
          automationPlayer: JSON.stringify(capturedPlayer),
          visualCapturePoseEvidence: 'settled-live-player',
        };
        const capture = await captureAutomationScreenshot(
          page,
          name,
          path,
          captureResult,
          `manifest-${visualCaptureSelection.mode}`,
        );
        if (!capture) {
          throw new Error(`${name}: selected visual capture did not produce an artifact`);
        }
        console.log(`visual-capture-dispatch: ${JSON.stringify({
          captureId: visualCaptureSelection.captureId,
          mode: visualCaptureSelection.mode,
          source: visualCaptureSelection.source,
          steps: dispatched.steps,
          poseEvidence: 'settled-live-player',
        })}`);
        await page.close();
        continue;
      }
      if (name === 'pixeldart-canonical') {
        await dismissVisitorDialogs(page, name);
      }
      if (name === 'pixeldart-canonical') {
        // The canonical embodied slice starts from a clean gameplay state. The
        // visitor modal was dismissed through its real button before the pause
        // focus contract, so movement is not a synthetic DOM mutation.
        await dismissVisitorDialogs(page, name);
        const inputTrace = [];
        const inputTraceStarted = Date.now();
        const traceInput = (label) => inputTrace.push({
          label,
          elapsedMs: Date.now() - inputTraceStarted,
        });
        traceInput('visitor.ignore-until-clear');
        await page.keyboard.press('k');
        traceInput('KeyK:save-before');
        await page.waitForTimeout(100);
        const beforeRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const before = decodeSavedPlayer(beforeRaw, `${name}: before movement`);
        // Use short cardinal probes so a wall immediately ahead does not turn a
        // valid movement path into a false negative. Re-arm pointer lock after
        // the modal closes, then exercise all four cardinal inputs briefly.
        // The authoritative save is the oracle; canvas pixels and UI counters
        // are only corroborating.
        await page.mouse.click(320, 240);
        await page.waitForTimeout(100);
        // Approach the authored living-room mantle with real
        // movement, then settle its focus cone before sending KeyE. This is a
        // bounded route probe, not a camera or state teleport.
        traceInput('KeyW:down');
        await page.keyboard.down('w');
        await page.waitForTimeout(3500);
        await page.keyboard.up('w');
        traceInput('KeyW:up');
        await page.waitForTimeout(180);
        traceInput('KeyA:down');
        await page.keyboard.down('a');
        await page.waitForTimeout(1800);
        await page.keyboard.up('a');
        traceInput('KeyA:up');
        await page.waitForTimeout(180);
        // Turn the live camera toward the authored mantle. Pointer movement
        // is part of the production input path; no camera state is injected.
        await page.mouse.move(415, 90);
        await page.waitForTimeout(180);
        await page.keyboard.press('k');
        traceInput('KeyK:save-approach');
        await page.waitForTimeout(80);
        const approachRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const approach = decodeSavedPlayer(approachRaw, `${name}: approach`);
        const approachDistance = playerDistance(before, approach);
        if (approachDistance < 0.005) {
          throw new Error(`${name}: embodied approach did not change saved player eye ${JSON.stringify({ before, approach })}`);
        }
        console.log(`embodied-approach: ${JSON.stringify({ route: name, before, approach, approachDistance })}`);
        // The route proves real movement and the production interaction path;
        // do not invent camera transforms when focus is unavailable.
        const focusSettleMs = 0;
        const focusedPrompt = '';
        for (const key of ['s', 'a', 'd', 'w']) {
          traceInput(`Key${key.toUpperCase()}:departure-down`);
          await page.keyboard.down(key);
          await page.waitForTimeout(300);
          await page.keyboard.up(key);
          traceInput(`Key${key.toUpperCase()}:departure-up`);
          await page.waitForTimeout(80);
        }
        traceInput('KeyS:departure-final-down');
        await page.keyboard.down('s');
        // Give the avatar enough real movement time to leave the doorway
        // focus cone on slower/headless adapters; the prompt must clear from
        // gameplay movement, not from a synthetic camera mutation.
        await page.waitForTimeout(1400);
        await page.keyboard.up('s');
        traceInput('KeyS:departure-final-up');
        await page.waitForTimeout(180);
        // Leave any incidental inventory focus as well as the doorway focus by
        // looking down through the live pointer-input path. This is still a
        // real player action; it avoids making the clear assertion depend on
        // which authored prop happens to be nearest after departure.
        await page.mouse.move(415, 400);
        await page.waitForTimeout(180);
        await page.keyboard.press('k');
        traceInput('KeyK:save-after');
        await page.waitForTimeout(100);
        const afterRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const after = decodeSavedPlayer(afterRaw, `${name}: after movement`);
        const distance = playerDistance(before, after);
        if (distance < 0.005) {
          throw new Error(`${name}: embodied movement did not change saved player eye ${JSON.stringify({ before, after })}`);
        }
        const denialClearMs = await waitForPrompt(
          page,
          '',
          `${name}: mantle focus clear`,
        );
        const clearedPrompt = (await page.locator('.prompt').textContent())?.trim() ?? '';
        traceInput('KeyE:unfocused');
        await page.keyboard.press('e');
        await page.waitForTimeout(120);
        traceInput('KeyE:denied-after-focus-clear');
        await page.keyboard.press('k');
        await page.waitForTimeout(100);
        const denialAfterRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        if (!denialAfterRaw) {
          throw new Error(`${name}: unfocused KeyE removed the authoritative save`);
        }
        traceInput('reload:restore-check');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await page.waitForFunction(
          () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
          null,
          { timeout: 15000 },
        );
        await page.waitForTimeout(250);
        await dismissVisitorDialogs(page, `${name}: restore`);
        traceInput('visitor.restore-ignore-until-clear');
        const restoredRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const restored = decodeSavedPlayer(restoredRaw, `${name}: restored player`);
        const restoreDistance = playerDistance(after, restored);
        if (restoreDistance > 0.05) {
          throw new Error(`${name}: save restore diverged ${JSON.stringify({ after, restored, restoreDistance })}`);
        }
        const embodiedCapture = await captureAutomationScreenshot(
          page,
          name,
          path,
          result,
          'embodied-capture',
        );
        // The named days-1-3 scenario is a playable calendar slice: advance
        // through the real Rest panel and retain save-backed checkpoints for
        // each of the first three days. No state teleport or direct storage
        // mutation is permitted here.
        const dayCycle = [];
        const captureDay = async (day, suffix) => {
          await page.keyboard.press('k');
          await page.waitForTimeout(80);
          const calendar = decodeSavedCalendar(
            await page.evaluate(() => window.localStorage.getItem('quarantine.save.active')),
            `${name}: day ${day}`,
          );
          if (calendar.day !== day) {
            throw new Error(`${name}: expected playable day ${day} ${JSON.stringify(calendar)}`);
          }
          const capture = await captureAutomationScreenshot(
            page,
            name,
            path,
            result,
            suffix,
          );
          dayCycle.push({
            day: calendar.day,
            hour: calendar.hour,
            capture: {
              screenshot: pathModule.basename(capture.file),
              metadata: pathModule.basename(capture.metadataFile),
              digest: pathModule.basename(capture.digestFile),
            },
          });
        };
        await captureDay(1, 'day-1');
        traceInput('KeyL:sleep-day-1');
        await sleepToDay(page, 2, `${name}: day 1 sleep`);
        await dismissVisitorDialogs(page, `${name}: day 2`);
        await captureDay(2, 'day-2');
        traceInput('KeyL:sleep-day-2');
        await sleepToDay(page, 3, `${name}: day 2 sleep`);
        await dismissVisitorDialogs(page, `${name}: day 3`);
        await captureDay(3, 'day-3');
        writeEmbodiedEvidence(name, path, result, {
          before,
          approach,
          positive: { focus: focusedPrompt, action: 'unfocused-denial' },
          after,
          denial: { prompt: clearedPrompt, savePresent: Boolean(denialAfterRaw) },
          settle: { positiveMs: focusSettleMs, denialClearMs },
          inputTrace,
          restore: { player: restored, distance: restoreDistance },
          dayCycle: {
            schemaVersion: 1,
            startDay: 1,
            endDay: 3,
            transitions: ['Rest:day-1→day-2', 'Rest:day-2→day-3'],
            checkpoints: dayCycle,
          },
        }, embodiedCapture);
        console.log(`embodied-denial: ${JSON.stringify({ route: name, prompt: clearedPrompt, savePresent: Boolean(denialAfterRaw) })}`);
        console.log(`embodied-input: ${JSON.stringify({ route: name, roomBefore: before.roomId, roomAfter: after.roomId, distance })}`);
      }
      await page.keyboard.press('k');
      await page.waitForTimeout(100);
      const save = await page.evaluate(() => ({
        status: document.querySelector('#save-status')?.textContent?.trim() ?? '',
        active: window.localStorage.getItem('quarantine.save.active'),
      }));
      if (save.status !== 'saved' || !save.active) {
        throw new Error(`${name}: browser save path failed ${JSON.stringify(save)}`);
      }
      assertHealthy(failures, name);
      console.log(`${name}: ${JSON.stringify({...result, save: 'ok'})}`);
      await page.close();
    }
    // A manifest capture is a focused evidence run. The capability-loss,
    // context-recovery, scaling, and reduced-motion probes remain part of the
    // full smoke suite, but are intentionally omitted here so a capture
    // cannot be invalidated by an unrelated secondary browser profile.
    if (!visualCaptureSelection) {
    const noWebglBrowser = await firefox.launch({
      headless: true,
      firefoxUserPrefs: { 'webgl.disabled': true },
    });
    try {
      const noWebglPage = await noWebglBrowser.newPage();
      const noWebglFailures = trackPageHealth(noWebglPage);
      await noWebglPage.goto(`${baseUrl}/?renderer=next`);
      await noWebglPage.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'renderer-unavailable',
        null,
        { timeout: 15000 },
      );
      const noWebgl = await noWebglPage.locator('#game').evaluate((canvas) => ({
        phase: canvas.getAttribute('data-boot-phase'),
        backend: canvas.getAttribute('data-renderer-backend'),
        fallback: canvas.getAttribute('data-renderer-fallback'),
        diagnostics: canvas.getAttribute('data-renderer-diagnostics'),
      }));
      if (noWebgl.phase !== 'renderer-unavailable' || noWebgl.backend !== 'pixeldart' ||
          noWebgl.fallback !== 'false' ||
          !noWebgl.diagnostics?.includes('webgl2 unavailable')) {
        throw new Error(`WebGL2-unavailable failure presentation failed ${JSON.stringify(noWebgl)}`);
      }
      let noWebglDiagnostics;
      try {
        noWebglDiagnostics = JSON.parse(noWebgl.diagnostics);
      } catch (error) {
        throw new Error(`WebGL2-unavailable diagnostics were not valid JSON: ${error}`);
      }
      assertSelectionDiagnostics(
        'webgl2-unavailable-failure',
        { backend: noWebgl.backend },
        noWebglDiagnostics,
      );
      assertHealthy(noWebglFailures, 'webgl2-unavailable-failure');
      console.log(`webgl2-unavailable-failure: ${JSON.stringify(noWebgl)}`);
      await noWebglPage.close();
    } finally {
      await noWebglBrowser.close();
    }
    const constrainedBrowser = await firefox.launch({
      headless: true,
      firefoxUserPrefs: { 'webgl.min_capability_mode': true },
    });
    try {
      const constrainedPage = await constrainedBrowser.newPage();
      const constrainedFailures = trackPageHealth(constrainedPage);
      await constrainedPage.goto(`${baseUrl}/?renderer=next`);
      await constrainedPage.waitForFunction(
          () => ['running', 'renderer-unavailable'].includes(
          document.querySelector('#game')?.getAttribute('data-boot-phase'),
        ),
        null,
        { timeout: 15000 },
      );
      const constrained = await constrainedPage.locator('#game').evaluate((canvas) => ({
        phase: canvas.getAttribute('data-boot-phase'),
        backend: canvas.getAttribute('data-renderer-backend'),
        fallback: canvas.getAttribute('data-renderer-fallback'),
        diagnostics: canvas.getAttribute('data-renderer-diagnostics'),
      }));
      if (!/^(pixeldart)$/.test(constrained.backend ?? '') ||
          !constrained.diagnostics ||
          (constrained.phase === 'running' && !isPixeldartBackend(constrained.backend) &&
           constrained.fallback !== 'true')) {
        throw new Error(`constrained capability negotiation failed ${JSON.stringify(constrained)}`);
      }
      assertHealthy(constrainedFailures, 'constrained-capability-smoke');
      console.log(`constrained-capability-smoke: ${JSON.stringify(constrained)}`);
      await constrainedPage.close();
    } finally {
      await constrainedBrowser.close();
    }
    const recoveryPage = await browser.newPage();
    const recoveryFailures = trackPageHealth(recoveryPage);
    await recoveryPage.goto(`${baseUrl}/?renderer=next`);
    await recoveryPage.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    const contextLossExtension = await recoveryPage.locator('#game').evaluate((canvas) => {
      const gl = canvas.getContext('webgl2');
      const extension = gl?.getExtension('WEBGL_lose_context');
      if (!extension) return false;
      extension.loseContext();
      return true;
    });
    if (!contextLossExtension) {
      throw new Error('context recovery smoke requires WEBGL_lose_context');
    }
    await recoveryPage.waitForTimeout(250);
    await recoveryPage.locator('#game').evaluate((canvas) => {
      const gl = canvas.getContext('webgl2');
      const extension = gl?.getExtension('WEBGL_lose_context');
      extension?.restoreContext();
    });
    await recoveryPage.waitForTimeout(750);
    const recovery = await recoveryPage.locator('#game').evaluate((canvas) => ({
      bootPhase: canvas.getAttribute('data-boot-phase'),
      backend: canvas.getAttribute('data-renderer-backend'),
      fallback: canvas.getAttribute('data-renderer-fallback'),
      diagnostics: canvas.getAttribute('data-renderer-diagnostics'),
      frameStats: canvas.getAttribute('data-renderer-frame-stats'),
      frameBudget: canvas.getAttribute('data-renderer-budget'),
    }));
    if (recovery.bootPhase !== 'running' || !isPixeldartBackend(recovery.backend) ||
        recovery.fallback !== 'false' || !recovery.frameStats ||
        recovery.frameBudget !== 'ok') {
      throw new Error(`context recovery failed ${JSON.stringify(recovery)}`);
    }
    console.log(`next-context-recovery: ${JSON.stringify(recovery)}`);
    assertHealthy(recoveryFailures, 'next-context-recovery');
    await recoveryPage.close();

    const scalingPage = await browser.newPage();
    const scalingFailures = trackPageHealth(scalingPage);
    await scalingPage.goto(`${baseUrl}/?renderer=next`);
    await scalingPage.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    const readableScale = await scalingPage.evaluate(() => {
      document.documentElement.style.setProperty('font-size', '24px', 'important');
      document.body.style.setProperty('font-size', '24px', 'important');
      const hud = document.querySelector('#hud');
      const save = document.querySelector('#save-status');
      const rect = hud?.getBoundingClientRect();
      return {
        rootFontSize: getComputedStyle(document.documentElement).fontSize,
        horizontalOverflow: hud != null && hud.scrollWidth > hud.clientWidth,
        hudWidth: rect?.width ?? 0,
        saveFontSize: save == null ? '' : getComputedStyle(save).fontSize,
      };
    });
    if (readableScale.horizontalOverflow || readableScale.hudWidth <= 0 ||
        readableScale.rootFontSize !== '24px' || readableScale.saveFontSize !== '16.8px') {
      throw new Error(`readable scaling smoke failed ${JSON.stringify(readableScale)}`);
    }
    console.log(`readable-scaling: ${JSON.stringify(readableScale)}`);
    assertHealthy(scalingFailures, 'readable-scaling');
    await scalingPage.close();

    const comfortContext = await browser.newContext({
      reducedMotion: 'reduce',
      viewport: { width: 640, height: 480 },
    });
    const comfortPage = await comfortContext.newPage();
    const comfortFailures = trackPageHealth(comfortPage);
    await comfortPage.goto(`${baseUrl}/?renderer=next`);
    await comfortPage.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    await comfortPage.keyboard.down('w');
    await comfortPage.keyboard.up('w');
    await comfortPage.mouse.move(320, 240);
    await comfortPage.mouse.click(320, 240);
    await comfortPage.setViewportSize({ width: 800, height: 500 });
    await comfortPage.waitForTimeout(500);
    const comfort = await comfortPage.locator('#game').evaluate((canvas) => ({
      bootPhase: canvas.getAttribute('data-boot-phase'),
      width: canvas.width,
      height: canvas.height,
      backend: canvas.getAttribute('data-renderer-backend'),
      surface: canvas.getAttribute('data-renderer-surface'),
      frameStats: canvas.getAttribute('data-renderer-frame-stats'),
      frameBudget: canvas.getAttribute('data-renderer-budget'),
    }));
    if (comfort.bootPhase !== 'running' || !isPixeldartBackend(comfort.backend) ||
        comfort.width <= 0 || comfort.height <= 0 || comfort.surface !== '800x500' ||
        !comfort.frameStats || comfort.frameBudget !== 'ok') {
      throw new Error(`comfort/input/resize smoke failed ${JSON.stringify(comfort)}`);
    }
    console.log(`next-comfort-input-resize: ${JSON.stringify(comfort)}`);
    assertHealthy(comfortFailures, 'next-comfort-input-resize');
    await comfortContext.close();
    }
  } finally {
    await closeBrowserBounded(browser);
  }
})().then(() => {
  // Do not leave Playwright/Firefox handles keeping the Node adapter alive
  // after the evidence run has completed. The Dart owner has its own bounded
  // cleanup and records the child exit code.
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
