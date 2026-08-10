'use strict';

const {
  parseTextureBindings,
  validateResidentTextureBindings,
} = require('./exterior_pvs_residency.cjs');

function expectReject(action, label) {
  let rejected = false;
  try {
    action();
  } catch (error) {
    rejected = true;
    if (!(error instanceof Error)) throw error;
  }
  if (!rejected) throw new Error(`${label}: invalid fixture was accepted`);
}

const raw = 'front:1=wall-plaster:2.1,rear-service:4=grime:3.1';
const bindings = parseTextureBindings(raw, 'fixture');
const state = {
  items: { submitted: 2 },
  textureBindings: bindings,
  textureResidencyHandles: 'grime=3.1,wall-plaster=2.1',
  textureResidency: { 'wall-plaster': 'resident', grime: 'resident' },
};
if (!validateResidentTextureBindings(state, 'fixture')) {
  throw new Error('resident texture binding fixture did not validate');
}
expectReject(
  () => parseTextureBindings('front:1=wall-plaster:not-a-handle', 'bad-handle'),
  'bad handle',
);
expectReject(
  () => validateResidentTextureBindings({
    items: { submitted: 1 },
    textureBindings: bindings,
    textureResidencyHandles: 'grime=3.1,wall-plaster=2.1',
    textureResidency: { 'wall-plaster': 'resident', grime: 'resident' },
  }, 'bad-count'),
  'bad count',
);
expectReject(
  () => validateResidentTextureBindings({
    items: { submitted: 2 },
    textureBindings: bindings,
    textureResidencyHandles: 'grime=3.1,wall-plaster=2.1',
    textureResidency: { 'wall-plaster': 'pending', grime: 'resident' },
  }, 'bad-status'),
  'bad status',
);
console.log('Exterior PVS residency-binding fixtures passed.');
