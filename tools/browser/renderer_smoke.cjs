const { firefox } = require('playwright');

const routes = [
  ['legacy-default', '/'],
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

(async () => {
  const launchOptions = { headless: process.env.RENDERER_HEADLESS !== '0' };
  if (process.env.FIREFOX_BIN) launchOptions.executablePath = process.env.FIREFOX_BIN;
  const browser = await firefox.launch(launchOptions);
  try {
    for (const [name, path] of routes) {
      const page = await browser.newPage();
      const failures = trackPageHealth(page);
      const response = await page.goto(`http://127.0.0.1:8090${path}`);
      if (!response || response.status() !== 200) {
        throw new Error(`${name}: expected HTTP 200`);
      }
      await page.waitForFunction(
        () => document.querySelector('#game')?.getAttribute('data-boot-phase'),
        null,
        { timeout: 15000 },
      );
      await page.waitForTimeout(1000);
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
        wallTexture: canvas.getAttribute('data-renderer-texture-wall-plaster'),
        grimeTexture: canvas.getAttribute('data-renderer-texture-grime'),
      }));
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
      await noWebglPage.goto('http://127.0.0.1:8090/?renderer=next');
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
      await constrainedPage.goto('http://127.0.0.1:8090/?renderer=next');
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
    await recoveryPage.goto('http://127.0.0.1:8090/?renderer=next');
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
    await scalingPage.goto('http://127.0.0.1:8090/?renderer=next');
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
    await comfortPage.goto('http://127.0.0.1:8090/?renderer=next');
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
