const { firefox } = require('playwright');
const { createHash } = require('crypto');
const fs = require('fs');
const pathModule = require('path');

const projectVersion = fs.readFileSync('VERSION', 'utf8').trim();

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';

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
  if (!['auto', 'legacy', 'next'].includes(renderer) ||
      !['safe', 'standard', 'clean'].includes(profile) ||
      typeof scenario !== 'string' || !/^[a-z0-9][a-z0-9._-]*$/.test(scenario) ||
      !Number.isInteger(width) || width < 1 ||
      !Number.isInteger(height) || height < 1) {
    throw new Error('AUTOMATION_ARGS has an invalid renderer/profile/scenario/viewport');
  }
  return { renderer, profile, scenario, width, height };
}

const automationArgs = readAutomationArgs();

function profileNegotiationStatus(requested, effective, diagnostics) {
  if (!requested || !effective) return null;
  if (requested === effective) return 'honored';
  if (Array.isArray(diagnostics?.capabilities) &&
      diagnostics.capabilities.includes(`negotiated-profile-${effective}`)) {
    return 'capability-negotiated';
  }
  return 'unexplained';
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

async function captureAutomationScreenshot(page, routeName, routePath, result, suffix = '') {
  const runDir = process.env.AUTOMATION_RUN_DIR;
  if (!automationArgs || !runDir) return null;
  const safeRoute = routeName.replace(/[^a-z0-9._-]/gi, '-');
  const safeSuffix = suffix ? `-${suffix.replace(/[^a-z0-9._-]/gi, '-')}` : '';
  const file = pathModule.join(
    runDir,
    `browser-${automationArgs.scenario}-${safeRoute}${safeSuffix}.png`,
  );
  await page.screenshot({
    path: file,
    animations: 'disabled',
    caret: 'hide',
    fullPage: false,
    scale: 'css',
  });
  const bytes = fs.statSync(file).size;
  if (bytes > 8 * 1024 * 1024) {
    fs.rmSync(file, { force: true });
    throw new Error(`automation screenshot exceeds 8 MiB: ${bytes}`);
  }
  const metadataFile = file.replace(/\.png$/, '.json');
  let negotiatedProfile = null;
  let profileNegotiation = null;
  try {
    const diagnostics = JSON.parse(result.diagnostics ?? '{}');
    negotiatedProfile = diagnostics.profile ?? null;
    profileNegotiation = profileNegotiationStatus(
      automationArgs.profile,
      negotiatedProfile,
      diagnostics,
    );
  } catch (_) {
    // The normal diagnostics assertion below reports malformed JSON.
  }
  fs.writeFileSync(
    metadataFile,
    `${JSON.stringify({
      schemaVersion: 1,
      scenario: automationArgs.scenario,
      requestedRenderer: automationArgs.renderer,
      requestedProfile: automationArgs.profile,
      negotiatedProfile,
      profileNegotiation,
      viewport: { width: automationArgs.width, height: automationArgs.height },
      routeName,
      routePath,
      screenshot: pathModule.basename(file),
      capture: { scale: 'css', animations: 'disabled', fullPage: false },
    }, null, 2)}\n`,
  );
  const digestFile = metadataFile.replace(/\.json$/, '.digest.json');
  const sha256 = (value) => createHash('sha256').update(value).digest('hex');
  fs.writeFileSync(
    digestFile,
    `${JSON.stringify({
      schemaVersion: 1,
      screenshot: pathModule.basename(file),
      screenshotSha256: sha256(fs.readFileSync(file)),
      metadata: pathModule.basename(metadataFile),
      metadataSha256: sha256(fs.readFileSync(metadataFile)),
    }, null, 2)}\n`,
  );
  console.log(`automation-capture: ${file} (${bytes} bytes)`);
  return { file, metadataFile, digestFile };
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
    'mantle-living-second',
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
    effectiveRenderer: result.backend,
    effectiveProfile,
    profileNegotiation,
    actions: [
      'visitor.ignore-until-clear',
      'KeyS:1000ms',
      'KeyA:600ms',
      'KeyW:500ms',
      'KeyE:mantle-living-second',
      'departure:cardinal-probes+KeyS:800ms',
      'KeyE:denied-after-focus-clear',
    ],
    assertions: {
      focus: 'mantle-living-second',
      positiveAction: 'lit-and-examined',
      negativeAction: 'no-mutation-after-clear',
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
  ['legacy-explicit', '/?renderer=legacy'],
  ['pixeldart-next', '/?renderer=next'],
  ['pixeldart-auto-candidate', '/?renderer=auto'],
  ['unknown-fallback', '/?renderer=unknown'],
];

function trackPageHealth(page) {
  const failures = [];
  page.on('pageerror', (error) => failures.push(`pageerror: ${error}`));
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

(async () => {
  const launchOptions = { headless: process.env.RENDERER_HEADLESS !== '0' };
  if (process.env.FIREFOX_BIN) launchOptions.executablePath = process.env.FIREFOX_BIN;
  const browser = await firefox.launch(launchOptions);
  try {
    const selectedRoutes = automationArgs
      ? [[
          automationArgs.renderer === 'legacy'
            ? 'legacy-explicit'
            : automationArgs.renderer === 'next'
              ? 'pixeldart-next'
              : 'pixeldart-default',
          automationArgs.renderer === 'legacy'
            ? '/?renderer=legacy'
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
      const response = await page.goto(`${baseUrl}${path}`);
      if (!response || response.status() !== 200) {
        throw new Error(`${name}: expected HTTP 200`);
      }
      await page.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-boot-phase'),
        null,
        { timeout: 15000 },
      );
      await page.waitForTimeout(1000);
      await page.mouse.click(10, 10);
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
        houseManifest: canvas.getAttribute('data-house-manifest'),
        houseManifestSource: canvas.getAttribute('data-house-manifest-source'),
        houseInventory: canvas.getAttribute('data-house-inventory'),
        houseInventorySource: canvas.getAttribute('data-house-inventory-source'),
        houseInventoryCount: canvas.getAttribute('data-house-inventory-count'),
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
      await captureAutomationScreenshot(page, name, path, result);
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
      if (!/^(legacy|next)$/.test(result.backend ?? '') ||
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
        throw new Error(`${name}: incomplete provenance diagnostics ${JSON.stringify(diagnostics)}`);
      }
      if (result.backend === 'next' &&
          !diagnostics.capabilities.includes(`profile-${diagnostics.profile}`)) {
        throw new Error(`${name}: selected profile is absent from capabilities ${JSON.stringify(diagnostics)}`);
      }
      if (automationArgs && result.backend === 'next') {
        const negotiation = profileNegotiationStatus(
          automationArgs.profile,
          diagnostics.profile,
          diagnostics,
        );
        if (!negotiation || negotiation === 'unexplained') {
          throw new Error(`${name}: requested/effective profile change was not explained ${JSON.stringify({ requested: automationArgs.profile, effective: diagnostics.profile, negotiation, capabilities: diagnostics.capabilities })}`);
        }
      }
      if (result.backend === 'next' &&
          (result.wallTexture !== 'loaded' || result.grimeTexture !== 'loaded')) {
        throw new Error(`${name}: authored Pixeldart textures did not load ${JSON.stringify(result)}`);
      }
      if (name === 'unknown-fallback' &&
          (diagnostics.fallback !== true ||
           diagnostics.fallbackReason !== 'unknown renderer query')) {
        throw new Error(`${name}: fallback diagnostics were incomplete ${JSON.stringify(diagnostics)}`);
      }
      if (name === 'pixeldart-auto-candidate' &&
          (result.backend !== 'next' || result.fallback === 'true')) {
        throw new Error(`${name}: auto candidate did not select Pixeldart ${JSON.stringify(result)}`);
      }
      if (name === 'pixeldart-default' &&
          (result.backend !== 'next' || result.fallback === 'true' ||
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
          ) || Number(result.houseInventoryCount) !== 27) {
        throw new Error(`${name}: authored house inventory was not validated ${JSON.stringify(result)}`);
      }
      if (result.houseSoundscape !== 'validated' ||
          !['res/house/soundscape.json', '/res/house/soundscape.json'].includes(
            result.houseSoundscapeSource,
          ) || Number(result.houseSoundEmitterCount) !== 4) {
        throw new Error(`${name}: authored house soundscape was not validated ${JSON.stringify(result)}`);
      }
      if (result.audioSpatialActive === null ||
          !/^\d+$/.test(result.audioSpatialActive)) {
        throw new Error(`${name}: audio lifecycle telemetry was not published ${JSON.stringify(result)}`);
      }
      if (result.audioMusicStarted !== 'true') {
        throw new Error(`${name}: persistent music loop was not started ${JSON.stringify(result)}`);
      }
      if (result.audioRoomIr !== 'ir-stone') {
        throw new Error(`${name}: active room impulse response was not published ${JSON.stringify(result)}`);
      }
      if (result.audioPlanner !== 'validated') {
        throw new Error(`${name}: acoustic planner was not wired ${JSON.stringify(result)}`);
      }
      if (result.door.role !== 'dialog' ||
          result.door.modal !== 'true' ||
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
      if (result.backend === 'next' &&
          (!result.frameStats || result.frameBudget !== 'ok')) {
        throw new Error(`${name}: renderer budget evidence failed ${JSON.stringify(result)}`);
      }
      if (result.backend === 'legacy' && Number(result.frameSubmits ?? '0') < 1) {
        throw new Error(`${name}: legacy renderer did not receive a backend frame ${JSON.stringify(result)}`);
      }
      await page.locator('#game').focus();
      const focusedId = await page.evaluate(() => document.activeElement?.id ?? '');
      if (focusedId !== 'game') {
        throw new Error(`${name}: game viewport did not accept keyboard focus`);
      }
      if (name === 'pixeldart-next') {
        await page.keyboard.press('Escape');
        await page.waitForFunction(
          () => document.querySelector('.panel[aria-label="House settings"]')?.classList.contains('open') === true,
          null,
        );
        const openedSettings = await page.evaluate(() => {
          const panel = document.querySelector('.panel[aria-label="House settings"]');
          const brightness = document.querySelector('#setting-brightness');
          return {
            open: panel?.classList.contains('open') === true,
            focusedInside: panel?.contains(document.activeElement) === true,
            brightnessExists: brightness instanceof HTMLInputElement,
          };
        });
        if (!openedSettings.open || !openedSettings.focusedInside ||
            !openedSettings.brightnessExists) {
          throw new Error(`Escape settings open/focus failed ${JSON.stringify(openedSettings)}`);
        }
        await page.locator('#setting-brightness').evaluate((input) => {
          input.value = '1.25';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        const displayPreference = await page.evaluate(() => ({
          display: window.localStorage.getItem('quarantine.display.brightness'),
          audio: window.localStorage.getItem('quarantine.audio.brightness'),
        }));
        if (displayPreference.display !== '1.25' || displayPreference.audio !== null) {
          throw new Error(`brightness preference routed incorrectly ${JSON.stringify(displayPreference)}`);
        }
        await page.keyboard.press('Escape');
        await page.waitForFunction(
          () => document.querySelector('.panel[aria-label="House settings"]')?.hasAttribute('hidden') === true,
          null,
        );
        const resumedFocus = await page.evaluate(() => document.activeElement?.id ?? '');
        if (resumedFocus !== 'game') {
          throw new Error(`Escape settings close/focus failed: ${resumedFocus}`);
        }
      }
      if (name === 'pixeldart-next') {
        // The canonical embodied slice starts from a clean gameplay state. The
        // visitor modal is deliberately dismissed through its real button so
        // movement is not a synthetic DOM mutation. Do this after the settings
        // focus contract has been checked, since the modal owns focus on boot.
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
        traceInput('KeyS:down');
        await page.keyboard.down('s');
        await page.waitForTimeout(1000);
        await page.keyboard.up('s');
        traceInput('KeyS:up');
        await page.waitForTimeout(120);
        traceInput('KeyA:down');
        await page.keyboard.down('a');
        await page.waitForTimeout(600);
        await page.keyboard.up('a');
        traceInput('KeyA:up');
        await page.waitForTimeout(120);
        traceInput('KeyW:down');
        await page.keyboard.down('w');
        await page.waitForTimeout(500);
        await page.keyboard.up('w');
        traceInput('KeyW:up');
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
        const focusSettleMs = await waitForPrompt(
          page,
          'mantle',
          `${name}: authored mantle focus`,
        );
        const focusedPrompt = await page.locator('.prompt').textContent();
        await page.keyboard.press('k');
        traceInput('KeyK:save-mantle-before');
        await page.waitForTimeout(80);
        const mantleBeforeRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const mantleBefore = savedMantleState(
          mantleBeforeRaw,
          'mantle-living-second',
          `${name}: mantle before interaction`,
        );
        traceInput('KeyE:mantle-living-second');
        await page.keyboard.press('e');
        await page.waitForTimeout(120);
        await page.keyboard.press('k');
        await page.waitForTimeout(100);
        const interactionSaveRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const mantleAfter = savedMantleState(
          interactionSaveRaw,
          'mantle-living-second',
          `${name}: interaction save`,
        );
        if (mantleBefore.lit || mantleAfter.lit !== true || mantleAfter.examined !== true) {
          throw new Error(`${name}: authored mantle interaction did not update state ${JSON.stringify({ prompt: focusedPrompt, approach, mantleBefore, mantleAfter })}`);
        }
        console.log(`embodied-interaction: ${JSON.stringify({ route: name, target: 'mantle-living-second', mantleBefore, mantleAfter })}`);
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
        await page.waitForTimeout(800);
        await page.keyboard.up('s');
        traceInput('KeyS:departure-final-up');
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
        const denialBefore = savedMantleState(
          afterRaw,
          'mantle-living-second',
          `${name}: denial before interaction`,
        );
        traceInput('KeyE:denied-after-focus-clear');
        await page.keyboard.press('e');
        await page.waitForTimeout(120);
        await page.keyboard.press('k');
        await page.waitForTimeout(100);
        const denialAfterRaw = await page.evaluate(() => window.localStorage.getItem('quarantine.save.active'));
        const denialAfter = savedMantleState(
          denialAfterRaw,
          'mantle-living-second',
          `${name}: denial after interaction`,
        );
        if (JSON.stringify(denialAfter) !== JSON.stringify(denialBefore)) {
          throw new Error(`${name}: KeyE mutated mantle with cleared focus ${JSON.stringify({ denialBefore, denialAfter })}`);
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
        const restoredMantle = savedMantleState(
          restoredRaw,
          'mantle-living-second',
          `${name}: restored mantle`,
        );
        const restoreDistance = playerDistance(after, restored);
        if (restoreDistance > 0.05 || JSON.stringify(restoredMantle) !== JSON.stringify(denialAfter)) {
          throw new Error(`${name}: save restore diverged ${JSON.stringify({ after, restored, denialAfter, restoredMantle, restoreDistance })}`);
        }
        const embodiedCapture = await captureAutomationScreenshot(
          page,
          name,
          path,
          result,
          'embodied-capture',
        );
        writeEmbodiedEvidence(name, path, result, {
          before,
          approach,
          positive: { before: mantleBefore, after: mantleAfter },
          after,
          denial: { before: denialBefore, after: denialAfter, prompt: clearedPrompt },
          settle: { positiveMs: focusSettleMs, denialClearMs },
          inputTrace,
          restore: { player: restored, mantle: restoredMantle, distance: restoreDistance },
        }, embodiedCapture);
        console.log(`embodied-denial: ${JSON.stringify({ route: name, prompt: clearedPrompt, mantle: denialAfter })}`);
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
    const noWebglBrowser = await firefox.launch({
      headless: true,
      firefoxUserPrefs: { 'webgl.disabled': true },
    });
    try {
      const noWebglPage = await noWebglBrowser.newPage();
      const noWebglFailures = trackPageHealth(noWebglPage);
      await noWebglPage.goto(`${baseUrl}/?renderer=next`);
      await noWebglPage.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'no-webgl2',
        null,
        { timeout: 15000 },
      );
      const noWebgl = await noWebglPage.locator('#game').evaluate((canvas) => ({
        phase: canvas.getAttribute('data-boot-phase'),
        backend: canvas.getAttribute('data-renderer-backend'),
        fallback: canvas.getAttribute('data-renderer-fallback'),
        diagnostics: canvas.getAttribute('data-renderer-diagnostics'),
      }));
      if (noWebgl.phase !== 'no-webgl2' || noWebgl.backend !== 'legacy' ||
          noWebgl.fallback !== 'true' ||
          !noWebgl.diagnostics?.includes('webgl2 unavailable')) {
        throw new Error(`WebGL2-unavailable fallback failed ${JSON.stringify(noWebgl)}`);
      }
      assertHealthy(noWebglFailures, 'webgl2-unavailable-fallback');
      console.log(`webgl2-unavailable-fallback: ${JSON.stringify(noWebgl)}`);
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
        () => ['running', 'no-webgl2'].includes(
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
      if (!/^(legacy|next)$/.test(constrained.backend ?? '') ||
          !constrained.diagnostics ||
          (constrained.phase === 'running' && constrained.backend !== 'next' &&
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
    if (recovery.bootPhase !== 'running' || recovery.backend !== 'next' ||
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
    if (comfort.bootPhase !== 'running' || comfort.backend !== 'next' ||
        comfort.width <= 0 || comfort.height <= 0 || comfort.surface !== '800x500' ||
        !comfort.frameStats || comfort.frameBudget !== 'ok') {
      throw new Error(`comfort/input/resize smoke failed ${JSON.stringify(comfort)}`);
    }
    console.log(`next-comfort-input-resize: ${JSON.stringify(comfort)}`);
    assertHealthy(comfortFailures, 'next-comfort-input-resize');
    await comfortContext.close();
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
