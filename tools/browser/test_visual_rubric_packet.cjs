const assert = require('assert');

const {
  RUBRIC_DIMENSIONS,
  reviewTemplate,
} = require('./visual_rubric_packet.cjs');

const review = reviewTemplate('hero-test', ['hero-test-clean', 'hero-test-final']);
assert.strictEqual(review.status, 'pending-human-review');
assert.strictEqual(review.reviewer, null);
assert.strictEqual(review.mustFixDefects.length, 0);
assert.deepStrictEqual(Object.keys(review.scores), RUBRIC_DIMENSIONS);
assert(RUBRIC_DIMENSIONS.every((dimension) => review.scores[dimension] === null));
console.log('browser visual rubric packet: pending-review template passes');
