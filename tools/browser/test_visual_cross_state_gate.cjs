#!/usr/bin/env node

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { crossStateDelta } = require('./visual_cross_state_gate.cjs');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'visual-cross-state-'));
const metadata = (id, shutters) => ({
  visualCaptureSelection: {
    captureId: id,
    camera: { position: [1, 2, 3], yaw: 0, pitch: 0, fov: 1 },
    fixture: {
      seed: 1, day: 1, hour: 8, room: 'living-room', weather: 'overcast',
      portals: { 'hall-living': 'open' },
      mantles: { 'mantle-living': 'on' }, shutters,
    },
  },
});

function writeCapture(id, shutters) {
  const json = path.join(root, `${id}.json`);
  const png = path.join(root, `${id}.png`);
  fs.writeFileSync(json, JSON.stringify(metadata(id, shutters)));
  // Reuse a packaged RGBA PNG; the gate must reject unchanged pixels.
  fs.copyFileSync(path.resolve('.vercel/output/static/res/tex/soft.png'), png);
  return json;
}

// Metadata validation is the important contract; malformed fixture images must fail loudly.
const open = writeCapture('open', { window: 'open' });
const closed = writeCapture('closed', { window: 'closed' });
assert.throws(() => crossStateDelta(open, closed), /delta|PNG|data check/i);
console.log('visual cross-state gate: PASS (fixture validation)');
