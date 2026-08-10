'use strict';

const {
  parsePortalStates,
  parseCellarTransmission,
  validateClosedCellarDoorState,
  validateReturnToOrigin,
} = require('./closed_cellar_door_contract.cjs');

const base = {
  roomId: 'hall',
  eye: { x: 8.625, y: 1.65, z: 0.55 },
  cells: ['front', 'opposite-house', 'street'],
  items: { submitted: 11, total: 17 },
  handles: 'grime=1.1,wall-plaster=0.1',
  portals: parsePortalStates(JSON.stringify({
    'hall-cellar': {
      a: 'hall', b: 'cellar', open: false, locked: false,
      sticks: true, passable: false,
    },
  }), 'fixture'),
  cellarTransmission: parseCellarTransmission(JSON.stringify({
    sourceRoom: 'cellar', listenerRoom: 'hall', portalPath: ['hall-cellar'],
    gainDb: -12, lowPassHz: 1100, muffle01: 0.55,
    barrierIds: ['hall-cellar'], reasonTrace: 'portal:hall-cellar', reachable: true,
  }), 'fixture'),
  audioPlanner: 'validated',
  audioRoomIr: 'ir-stone',
  audioSpatial: 0,
  audioMuffle: 0,
};

validateClosedCellarDoorState(base, 'valid fixture');
validateReturnToOrigin(base, {
  ...base,
  eye: { x: 8.52, y: 1.65, z: 0.72 },
}, 0.65);

for (const mutate of [
  (state) => ({ ...state, portals: { ...state.portals, 'hall-cellar': {
    ...state.portals['hall-cellar'], passable: true,
  } } }),
  (state) => ({ ...state, cellarTransmission: {
    ...state.cellarTransmission, lowPassHz: 20000,
  } }),
  (state) => ({ ...state, cellarTransmission: {
    ...state.cellarTransmission, muffle01: 1.5,
  } }),
  (state) => ({ ...state, audioPlanner: 'unavailable' }),
]) {
  let failed = false;
  try {
    validateClosedCellarDoorState(mutate(base), 'invalid fixture');
  } catch (_) {
    failed = true;
  }
  if (!failed) throw new Error('invalid cellar-door fixture was accepted');
}

let driftFailed = false;
try {
  validateReturnToOrigin(base, { ...base, eye: { x: 20, y: 1.65, z: 20 } });
} catch (_) {
  driftFailed = true;
}
if (!driftFailed) throw new Error('large return-to-origin drift was accepted');

console.log('Closed cellar door contract fixtures passed.');
