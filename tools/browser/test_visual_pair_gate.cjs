const assert = require('assert');

const { compareRgba } = require('./visual_pair_gate.cjs');

const a = {
  width: 2,
  height: 1,
  pixels: Buffer.from([10, 20, 30, 255, 40, 50, 60, 255]),
};
assert.deepStrictEqual(compareRgba(a, a), {
  width: 2,
  height: 1,
  changedRatio: 0,
  meanChannelDelta: 0,
  maxChannelDelta: 0,
});
const b = {
  ...a,
  pixels: Buffer.from([11, 20, 30, 255, 40, 50, 60, 255]),
};
const diff = compareRgba(a, b);
assert.strictEqual(diff.changedRatio, 0.5);
assert(diff.meanChannelDelta > 0 && diff.meanChannelDelta < 0.01);
console.log('browser visual pair gate: RGBA diff fixtures pass');
