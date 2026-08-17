const assert = require('assert');
const {
  REQUIRED_CHECKS,
  appendReviewQuery,
  buildHumanReviewPacket,
  parseArgs,
} = require('./human_visual_confirmation.cjs');

const parsed = parseArgs([
  '--url', 'http://localhost:8090/game',
  '--profiles', 'safe,high',
  '--states', 'dark,bright',
  '--resume',
  '--ready-selector', '#test-canvas',
]);
assert.strictEqual(parsed.url, 'http://localhost:8090/game');
assert.deepStrictEqual(parsed.profiles, ['safe', 'high']);
assert.deepStrictEqual(parsed.states, ['dark', 'bright']);
assert.deepStrictEqual(parsed.viewports, [
  { id: 'desktop-720', width: 1280, height: 720 },
  { id: 'desktop-1080', width: 1920, height: 1080 },
  { id: 'narrow', width: 390, height: 844 },
]);
assert.strictEqual(parsed.readySelector, '#test-canvas');
assert.strictEqual(parsed.resume, true);

const batched = parseArgs(['--viewports', 'narrow,desktop-720']);
assert.deepStrictEqual(batched.viewports, [
  { id: 'narrow', width: 390, height: 844 },
  { id: 'desktop-720', width: 1280, height: 720 },
]);
assert.throws(() => parseArgs(['--viewports', 'unknown']), /unknown viewport/);
assert.throws(() => parseArgs(['--viewports', 'narrow,narrow']), /duplicates/);

const reviewUrl = appendReviewQuery(parsed.url, 'high', 'dark');
assert(reviewUrl.includes('renderer=pixeldart'));
assert(reviewUrl.includes('profile=high'));
assert(reviewUrl.includes('visualState=dark'));

const packet = buildHumanReviewPacket({
  output: '/tmp/human-review.json',
  request: { profiles: ['high'], states: ['dark'] },
  captures: [{
    id: 'desktop-high-dark',
    viewport: { id: 'desktop', width: 1280, height: 720 },
    profile: 'high',
    state: 'dark',
    houseRole: 'provisional-visible-place',
    screenshot: '/tmp/browser-human.png',
    metadata: '/tmp/browser-human.json',
    digest: '/tmp/browser-human.digest.json',
  }],
});
assert.strictEqual(packet.status, 'pending-human-review');
assert.strictEqual(packet.reviewer, null);
assert.strictEqual(packet.decision, null);
assert.deepStrictEqual(packet.requiredChecks, REQUIRED_CHECKS);
assert.deepStrictEqual(packet.matrix, {
  expected: 1,
  captured: 1,
  failed: 0,
  complete: true,
});
assert.deepStrictEqual(packet.failures, []);
assert.deepStrictEqual(packet.runtimeErrors, []);
assert.strictEqual(packet.captures[0].review.status, 'pending-human-review');
assert.strictEqual(packet.captures[0].houseRole, 'provisional-visible-place');
assert(REQUIRED_CHECKS.every((check) => packet.captures[0].review.scores[check] === null));
assert(packet.captures.every((capture) =>
  capture.review.status === 'pending-human-review' &&
  Object.values(capture.review.scores).every((score) => score === null)));

const partial = buildHumanReviewPacket({
  output: '/tmp/human-review-partial.json',
  request: {
    profiles: ['safe'],
    states: ['normal'],
    viewports: [{ id: 'desktop', width: 1280, height: 720 }, { id: 'narrow', width: 390, height: 844 }],
  },
  captures: packet.captures.map((capture) => ({
    ...capture,
    screenshot: '/tmp/browser-human.png',
    metadata: '/tmp/browser-human.json',
    digest: '/tmp/browser-human.digest.json',
  })),
  failures: [{
    id: 'narrow-safe-normal',
    viewport: { id: 'narrow', width: 390, height: 844 },
    profile: 'safe',
    state: 'normal',
    error: 'page closed while settling WASM',
  }],
  runtimeErrors: ['diagnostic page error'],
});
assert.strictEqual(partial.status, 'pending-human-review');
assert.deepStrictEqual(partial.matrix, {
  expected: 2,
  captured: 1,
  failed: 1,
  complete: false,
});
assert.strictEqual(partial.failures.length, 1);
assert.deepStrictEqual(partial.runtimeErrors, ['diagnostic page error']);
console.log('human visual confirmation harness tests passed');
