const { firefox } = require('playwright');

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';

async function readAudio(page) {
  return page.locator('#game').evaluate((canvas) => ({
    paused: canvas.getAttribute('data-audio-paused'),
    muted: canvas.getAttribute('data-audio-muted'),
    master: canvas.getAttribute('data-audio-master-mix'),
    voice: canvas.getAttribute('data-audio-voice-mix'),
    captions: canvas.getAttribute('data-audio-captions'),
  }));
}

async function main() {
  const browser = await firefox.launch({ headless: process.env.RENDERER_HEADLESS !== '0' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    await page.goto(`${baseUrl}/?renderer=pixeldart&automation=1`);
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    await page.locator('#game').focus();
    const before = await readAudio(page);
    await page.keyboard.press('Escape');
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-audio-paused') === 'true',
      null,
      { timeout: 3000 },
    );
    const paused = await readAudio(page);
    await page.keyboard.press('Escape');
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-audio-paused') === 'false',
      null,
      { timeout: 3000 },
    );
    const resumed = await readAudio(page);
    for (const state of [before, paused, resumed]) {
      if (!['true', 'false'].includes(state.muted) ||
          !['true', 'false'].includes(state.captions) ||
          Number.isNaN(Number(state.master)) || Number.isNaN(Number(state.voice))) {
        throw new Error(`invalid audio telemetry: ${JSON.stringify(state)}`);
      }
    }
    if (before.paused !== 'false' || paused.paused !== 'true' || resumed.paused !== 'false') {
      throw new Error(`pause/resume telemetry did not settle: ${JSON.stringify({ before, paused, resumed })}`);
    }
    console.log(JSON.stringify({ before, paused, resumed }));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
