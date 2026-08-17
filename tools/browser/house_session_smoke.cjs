const { firefox } = require('playwright');

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';
const url = `${baseUrl}/?renderer=pixeldart&automation=1&captureDay=1&captureHour=8`;

function parsePlayer(raw, label) {
  if (!raw) throw new Error(`${label}: player telemetry missing`);
  const player = JSON.parse(raw);
  if (player.schemaVersion !== 1 || typeof player.roomId !== 'string') {
    throw new Error(`${label}: invalid player telemetry ${raw}`);
  }
  return player;
}

function distance(a, b) {
  return Math.hypot(
    a.eye.x - b.eye.x,
    a.eye.y - b.eye.y,
    a.eye.z - b.eye.z,
  );
}

async function main() {
  const browser = await firefox.launch({ headless: process.env.RENDERER_HEADLESS !== '0' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    const before = parsePlayer(
      await page.locator('#game').getAttribute('data-automation-player'),
      'before save',
    );
    await page.locator('#game').focus();
    await page.keyboard.press('k');
    await page.waitForFunction(
      () => Boolean(window.localStorage.getItem('quarantine.save.active')),
      null,
      { timeout: 5000 },
    );
    const saved = JSON.parse(await page.evaluate(
      () => window.localStorage.getItem('quarantine.save.active'),
    ));
    if (saved.version !== 2 || !saved.meta?.player) {
      throw new Error('save payload did not contain versioned player state');
    }
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    const after = parsePlayer(
      await page.locator('#game').getAttribute('data-automation-player'),
      'after reload',
    );
    if (after.roomId !== before.roomId || distance(after, before) > 0.01) {
      throw new Error(`house save/reload moved player: ${JSON.stringify({ before, after })}`);
    }
    const portals = await page.locator('#game').getAttribute('data-automation-portals');
    if (!portals || Object.keys(JSON.parse(portals)).length < 1) {
      throw new Error('authored portal telemetry missing after reload');
    }
    console.log(JSON.stringify({ houseSession: 'boot-save-reload', roomId: after.roomId }));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
