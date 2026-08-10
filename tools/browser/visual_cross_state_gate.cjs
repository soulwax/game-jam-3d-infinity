#!/usr/bin/env node

const fs = require('fs');
const { compareRgba, readPng } = require('./visual_pair_gate.cjs');

function fail(message) {
  throw new Error(`visual-cross-state-gate: ${message}`);
}

function metadata(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function crossStateDelta(fromFile, toFile, {
  field = 'shutters',
  minimumMeanChannelDelta = 0.001,
} = {}) {
  const from = metadata(fromFile);
  const to = metadata(toFile);
  const a = from.visualCaptureSelection;
  const b = to.visualCaptureSelection;
  if (!a || !b || JSON.stringify(a.camera) !== JSON.stringify(b.camera) ||
      a.fixture.seed !== b.fixture.seed || a.fixture.day !== b.fixture.day ||
      a.fixture.hour !== b.fixture.hour || a.fixture.room !== b.fixture.room ||
      a.fixture.weather !== b.fixture.weather ||
      JSON.stringify(a.fixture.portals) !== JSON.stringify(b.fixture.portals) ||
      JSON.stringify(a.fixture.mantles) !== JSON.stringify(b.fixture.mantles)) {
    fail('state comparison changed camera or unrelated fixture fields');
  }
  if (JSON.stringify(a.fixture[field]) === JSON.stringify(b.fixture[field])) {
    fail(`expected ${field} state to change`);
  }
  const pixels = compareRgba(
    readPng(fromFile.replace(/\.json$/, '.png')),
    readPng(toFile.replace(/\.json$/, '.png')),
  );
  if (pixels.meanChannelDelta < minimumMeanChannelDelta) {
    fail(`${field} delta was too small ${JSON.stringify(pixels)}`);
  }
  return { field, from: a.captureId, to: b.captureId, pixels };
}

if (require.main === module) {
  const [fromFile, toFile] = process.argv.slice(2);
  if (!fromFile || !toFile) {
    console.error('usage: node tools/browser/visual_cross_state_gate.cjs <from.json> <to.json>');
    process.exit(2);
  }
  try {
    console.log(JSON.stringify(crossStateDelta(fromFile, toFile)));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { crossStateDelta };
