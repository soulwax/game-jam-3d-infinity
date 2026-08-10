'use strict';

function parseShadowFixtureState(raw, label = 'shadow fixture') {
  if (!raw || typeof raw !== 'object') {
    throw new Error(`${label}: fixture state is missing`);
  }
  const state = { ...raw };
  if (!['available', 'unsupported'].includes(state.capability)) {
    throw new Error(`${label}: capability is invalid: ${state.capability}`);
  }
  if (state.capability === 'unsupported') {
    if (state.status !== 'unsupported' || state.pixelProof !== 'unsupported' ||
        typeof state.reason !== 'string' || state.reason.length === 0) {
      throw new Error(`${label}: unsupported state is incomplete`);
    }
    return state;
  }
  if (!['shadow-pass', 'zero-pass'].includes(state.status) ||
      !['shadow-pass', 'zero-pass'].includes(state.pixelProof) ||
      !['on', 'off'].includes(state.mode) ||
      !Number.isInteger(state.casterDraws) || state.casterDraws < 0 ||
      !Number.isInteger(state.triangles) || state.triangles < 0) {
    throw new Error(`${label}: available state is malformed`);
  }
  if (state.status === 'shadow-pass' &&
      (state.casterDraws <= 0 || state.triangles <= 0)) {
    throw new Error(`${label}: shadow-pass has no caster work`);
  }
  if (state.status === 'zero-pass' &&
      (state.casterDraws !== 0 || state.triangles !== 0)) {
    throw new Error(`${label}: zero-pass reports caster work`);
  }
  return state;
}

function validateShadowPixelComparison(on, off, comparison) {
  if (on.capability === 'unsupported' || off.capability === 'unsupported') {
    return { status: 'unsupported', reason: 'webgl2-or-shadow-context-unavailable' };
  }
  if (on.status === 'zero-pass') {
    return { status: 'zero-pass', reason: 'shadow-caster-pass-did-not-run' };
  }
  if (on.mode !== 'on' || off.mode !== 'off' ||
      on.status !== 'shadow-pass' || off.status !== 'zero-pass') {
    throw new Error('shadow A/B metadata does not describe on=pass and off=zero-pass');
  }
  if (!comparison || !Number.isInteger(comparison.changedPixels) ||
      comparison.changedPixels <= 0 || !Number.isFinite(comparison.meanDelta) ||
      comparison.meanDelta <= 0) {
    throw new Error('shadow A/B canvas pixels did not change');
  }
  return { status: 'observed', reason: 'shadowed-world-pixels-changed' };
}

module.exports = {
  parseShadowFixtureState,
  validateShadowPixelComparison,
};
