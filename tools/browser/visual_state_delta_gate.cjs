#!/usr/bin/env node

const fs = require('fs');
const { compareRgba, readPng } = require('./visual_pair_gate.cjs');

function fail(message) {
  throw new Error(`visual-state-delta-gate: ${message}`);
}

function metadata(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function stateDelta(offFile, onFile, { minimumMeanChannelDelta = 0.001 } = {}) {
  const off = metadata(offFile);
  const on = metadata(onFile);
  const a = off.visualCaptureSelection;
  const b = on.visualCaptureSelection;
  if (!a || !b || JSON.stringify(a.camera) !== JSON.stringify(b.camera) ||
      a.fixture.seed !== b.fixture.seed || a.fixture.day !== b.fixture.day ||
      a.fixture.hour !== b.fixture.hour || a.fixture.room !== b.fixture.room) {
    fail('state comparison changed camera or unrelated fixture fields');
  }
  if (a.fixture.mantles['mantle-living'] !== 'off' ||
      b.fixture.mantles['mantle-living'] !== 'on') {
    fail('expected mantle-living off → on transition');
  }
  const pixels = compareRgba(
    readPng(offFile.replace(/\.json$/, '.png')),
    readPng(onFile.replace(/\.json$/, '.png')),
  );
  if (pixels.meanChannelDelta < minimumMeanChannelDelta) {
    fail(`lighting delta was too small ${JSON.stringify(pixels)}`);
  }
  return { from: a.captureId, to: b.captureId, pixels };
}

if (require.main === module) {
  const [offFile, onFile] = process.argv.slice(2);
  if (!offFile || !onFile) {
    console.error('usage: node tools/browser/visual_state_delta_gate.cjs <off.json> <on.json>');
    process.exit(2);
  }
  try {
    console.log(JSON.stringify(stateDelta(offFile, onFile)));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { stateDelta };
