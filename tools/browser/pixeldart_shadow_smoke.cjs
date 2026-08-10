'use strict';

const fs = require('fs');
const path = require('path');
const { firefox } = require('playwright');
const {
  parseShadowFixtureState,
  validateShadowPixelComparison,
} = require('./pixeldart_shadow_contract.cjs');

const baseUrl = process.env.PIXELDART_SHADOW_BASE_URL ||
  'http://127.0.0.1:8092/tmp/r09-web/?r09-shadow-proof=1';
const outputDir = process.env.PIXELDART_SHADOW_ARTIFACT_DIR || 'tmp/r09-shadow';

function fixtureUrl(url, off) {
  const result = new URL(url);
  result.searchParams.set('r09-shadow-proof', '1');
  if (off) result.searchParams.set('r09-shadow-off', '1');
  else result.searchParams.delete('r09-shadow-off');
  return result.toString();
}

function parseNumber(raw, label) {
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 0) throw new Error(`${label} is invalid: ${raw}`);
  return value;
}

async function readState(page, label) {
  const raw = await page.locator('#test-canvas').evaluate((canvas) => ({
    capability: canvas.getAttribute('data-r09-shadow-capability'),
    status: canvas.getAttribute('data-r09-shadow-status'),
    pixelProof: canvas.getAttribute('data-r09-shadow-pixel-proof'),
    mode: canvas.getAttribute('data-r09-shadow-mode'),
    casterDraws: canvas.getAttribute('data-r09-shadow-caster-draws'),
    triangles: canvas.getAttribute('data-r09-shadow-triangles'),
    reason: canvas.getAttribute('data-r09-shadow-reason'),
    pixelSize: canvas.getAttribute('data-r09-shadow-pixel-size'),
    pixelSamples: canvas.getAttribute('data-r09-shadow-pixel-samples'),
  }));
  const state = parseShadowFixtureState({
    ...raw,
    casterDraws: raw.casterDraws == null ? 0 : parseNumber(raw.casterDraws, `${label} caster draws`),
    triangles: raw.triangles == null ? 0 : parseNumber(raw.triangles, `${label} triangles`),
  }, label);
  if (state.capability === 'available') {
    if (!/^\d+x\d+$/.test(raw.pixelSize || '') || !raw.pixelSamples) {
      throw new Error(`${label}: in-loop shadow pixel samples are missing`);
    }
    const [columns, rows] = raw.pixelSize.split('x').map(Number);
    const samples = raw.pixelSamples.split(',').map(Number);
    if (!Number.isInteger(columns) || !Number.isInteger(rows) ||
        samples.length !== columns * rows ||
        samples.some((value) => !Number.isInteger(value) || value < 0 || value > 255)) {
      throw new Error(`${label}: shadow pixel sample grid is invalid`);
    }
    state.pixelSize = { columns, rows };
    state.pixelSamples = samples;
  } else {
    state.pixelSize = null;
    state.pixelSamples = null;
  }
  return state;
}

function compareSamples(on, off) {
  if (!on || !off || on.pixelSize.columns !== off.pixelSize.columns ||
      on.pixelSize.rows !== off.pixelSize.rows ||
      on.pixelSamples.length !== off.pixelSamples.length) {
    throw new Error('shadow A/B canvas dimensions or sampling differ');
  }
  let changedPixels = 0;
  let totalDelta = 0;
  for (let i = 0; i < on.pixelSamples.length; i++) {
    const delta = Math.abs(on.pixelSamples[i] - off.pixelSamples[i]);
    if (delta >= 2) changedPixels++;
    totalDelta += delta;
  }
  return {
    sampleCount: on.pixelSamples.length,
    changedPixels,
    meanDelta: totalDelta / on.pixelSamples.length,
  };
}

function summarizeState(state) {
  const { pixelSamples, ...summary } = state;
  return {
    ...summary,
    pixelSampleCount: pixelSamples?.length ?? 0,
  };
}

async function openFixture(browser, url, label) {
  const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(`${error}\n${error.stack ?? ''}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(
    () => document.querySelector('#test-canvas')?.hasAttribute('data-r09-shadow-pixel-proof'),
    null,
    { timeout: 20000, polling: 50 },
  );
  const state = await readState(page, label);
  if (errors.length > 0) throw new Error(`${label}: page errors: ${errors.join('\n')}`);
  return { page, state };
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await firefox.launch({ headless: true });
  try {
    const on = await openFixture(browser, fixtureUrl(baseUrl, false), 'shadow on');
    const off = await openFixture(browser, fixtureUrl(baseUrl, true), 'shadow off');
    const comparison = on.state.pixelSamples && off.state.pixelSamples
      ? compareSamples(on.state, off.state)
      : null;
    const outcome = validateShadowPixelComparison(on.state, off.state, comparison);
    const evidence = {
      ...outcome,
      transition: 'shadow-off→shadow-on',
      on: summarizeState(on.state),
      off: summarizeState(off.state),
      pixelComparison: comparison,
      browser: { name: 'firefox', version: browser.version() },
      viewport: { width: 640, height: 480 },
      sourceUrl: baseUrl,
    };
    fs.writeFileSync(
      path.join(outputDir, 'browser-pixeldart-shadow-pixel.json'),
      `${JSON.stringify(evidence, null, 2)}\n`,
    );
    console.log(`r09-shadow-pixel: ${JSON.stringify(evidence)}`);
    await on.page.close();
    await off.page.close();
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(`r09-shadow-pixel: ${error.stack ?? error}`);
  process.exitCode = 1;
});
