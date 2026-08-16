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
  '--ready-selector', '#test-canvas',
]);
assert.strictEqual(parsed.url, 'http://localhost:8090/game');
assert.deepStrictEqual(parsed.profiles, ['safe', 'high']);
assert.deepStrictEqual(parsed.states, ['dark', 'bright']);
assert.strictEqual(parsed.readySelector, '#test-canvas');

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
    screenshot: '/tmp/browser-human.png',
    metadata: '/tmp/browser-human.json',
    digest: '/tmp/browser-human.digest.json',
  }],
});
assert.strictEqual(packet.status, 'pending-human-review');
assert.strictEqual(packet.reviewer, null);
assert.strictEqual(packet.decision, null);
assert.deepStrictEqual(packet.requiredChecks, REQUIRED_CHECKS);
assert.strictEqual(packet.captures[0].review.status, 'pending-human-review');
assert(REQUIRED_CHECKS.every((check) => packet.captures[0].review.scores[check] === null));
console.log('human visual confirmation harness tests passed');
