'use strict';

const {
  parseShadowFixtureState,
  validateShadowPixelComparison,
} = require('./pixeldart_shadow_contract.cjs');

const on = parseShadowFixtureState({
  capability: 'available', status: 'shadow-pass', pixelProof: 'shadow-pass',
  mode: 'on', casterDraws: 5, triangles: 120,
  reason: 'caster-pass-recorded',
}, 'on fixture');
const off = parseShadowFixtureState({
  capability: 'available', status: 'zero-pass', pixelProof: 'zero-pass',
  mode: 'off', casterDraws: 0, triangles: 0,
  reason: 'no-shadow-caster-draws',
}, 'off fixture');
const observed = validateShadowPixelComparison(on, off, {
  changedPixels: 48,
  meanDelta: 2.5,
});
if (observed.status !== 'observed') throw new Error('observed fixture was not accepted');

const unsupported = validateShadowPixelComparison(
  parseShadowFixtureState({
    capability: 'unsupported', status: 'unsupported', pixelProof: 'unsupported',
    reason: 'webgl2-context-unavailable',
  }, 'unsupported fixture'),
  off,
  null,
);
if (unsupported.status !== 'unsupported') throw new Error('unsupported fixture was not preserved');

let failed = false;
try {
  validateShadowPixelComparison(on, off, { changedPixels: 0, meanDelta: 0 });
} catch (_) {
  failed = true;
}
if (!failed) throw new Error('pixel-identical fixture was accepted');

console.log('Pixeldart shadow contract fixtures passed.');
