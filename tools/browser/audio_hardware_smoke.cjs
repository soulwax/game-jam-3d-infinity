const { spawn } = require('node:child_process');
const { execFileSync } = require('node:child_process');
const { firefox } = require('playwright');

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function main() {
  if (process.env.RENDERER_HEADLESS === '1') {
    throw new Error('audio hardware smoke requires a headed browser');
  }

  const subscription = spawn('pactl', ['subscribe']);
  let events = '';
  subscription.stdout.on('data', (chunk) => {
    events += chunk.toString();
  });
  const browser = await firefox.launch({ headless: false });
  try {
    const page = await browser.newPage();
    const failures = [];
    page.on('pageerror', (error) => failures.push(String(error)));
    await page.goto('http://127.0.0.1:8090/?renderer=next');
    await page.waitForFunction(
      () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
      null,
      { timeout: 15000 },
    );
    await page.keyboard.press('k');
    await page.keyboard.down('w');
    await delay(5000);
    await page.keyboard.up('w');
    await delay(250);
    if (failures.length) throw new Error(failures.join('; '));
    if (!/Event 'new' on sink-input/.test(events)) {
      throw new Error(`no PipeWire sink-input event observed:\n${events}`);
    }
    const sinkInputs = execFileSync(
      'pactl',
      ['list', 'short', 'sink-inputs'],
      { encoding: 'utf8' },
    ).trim();
    const sinks = execFileSync(
      'pactl',
      ['list', 'short', 'sinks'],
      { encoding: 'utf8' },
    ).trim();
    if (!sinkInputs) throw new Error('PipeWire sink-input table is empty');
    const diagnostics = await page.locator('#game').getAttribute(
      'data-renderer-diagnostics',
    );
    console.log(JSON.stringify({
      audioSinkInput: 'observed',
      backend: 'next',
      diagnostics,
      sinkEvents: events.match(/Event '[^\n]+/g) ?? [],
      sinkInputs,
      sinks,
    }));
  } finally {
    await browser.close();
    subscription.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
