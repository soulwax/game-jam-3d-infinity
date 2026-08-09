const assert = require('assert');

const {
  planKeyboardStep,
  planMouseDelta,
  poseDelta,
  poseReached,
  wrapAngle,
} = require('./visual_capture_dispatch.cjs');

const observed = {
  eye: { x: 5.5, y: 1.65, z: 3.5 },
  yaw: 0,
  pitch: 0,
};
const target = {
  position: [5.5, 1.65, 5.5],
  yaw: 0,
  pitch: 0,
};
assert.deepStrictEqual(poseDelta(observed, target), {
  dx: 0,
  dy: 0,
  dz: 2,
  distance: 2,
  yawError: 0,
  pitchError: 0,
});
assert.deepStrictEqual(planKeyboardStep(observed, target).keys, ['w']);
assert.strictEqual(poseReached(observed, target), false);
assert.strictEqual(
  poseReached({ ...observed, eye: { ...observed.eye, z: 5.2 } }, target),
  true,
);
const turn = planMouseDelta(observed, {
  ...target,
  yaw: -Math.PI / 2,
});
assert(turn.x < -100);
assert.strictEqual(Math.abs(turn.y), 0);
assert(Math.abs(wrapAngle(Math.PI * 3 / 2) + Math.PI / 2) < 1e-9);
assert.deepStrictEqual(
  planKeyboardStep({ ...observed, yaw: Math.PI / 2 }, target).keys,
  ['a'],
);
console.log('browser visual dispatch: pose, look, movement, and tolerance fixtures pass');
