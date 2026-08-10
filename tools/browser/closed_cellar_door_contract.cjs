'use strict';

function parsePortalStates(raw, label = 'portal state') {
  if (!raw) throw new Error(`${label}: portal state is missing`);
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label}: portal state is not JSON: ${error.message}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`${label}: portal state must be an object`);
  }
  return parsed;
}

function parseCellarTransmission(raw, label = 'cellar transmission') {
  if (!raw) throw new Error(`${label}: transmission is missing`);
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label}: transmission is not JSON: ${error.message}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`${label}: transmission must be an object`);
  }
  if (parsed.sourceRoom !== 'cellar' || typeof parsed.listenerRoom !== 'string') {
    throw new Error(`${label}: source/listener rooms are invalid`);
  }
  if (!Array.isArray(parsed.portalPath) ||
      parsed.portalPath.some((value) => typeof value !== 'string')) {
    throw new Error(`${label}: portal path is invalid`);
  }
  for (const key of ['gainDb', 'lowPassHz', 'muffle01']) {
    if (!Number.isFinite(parsed[key])) throw new Error(`${label}: ${key} is invalid`);
  }
  if (parsed.muffle01 < 0 || parsed.muffle01 > 1) {
    throw new Error(`${label}: muffle01 is outside [0,1]`);
  }
  if (typeof parsed.reachable !== 'boolean') {
    throw new Error(`${label}: reachability is invalid`);
  }
  return parsed;
}

function validateClosedCellarDoorState(state, label = 'cellar door') {
  if (state.roomId !== 'hall') {
    throw new Error(`${label}: expected hall, got ${state.roomId}`);
  }
  const portal = state.portals?.['hall-cellar'];
  if (!portal ||
      portal.a !== 'hall' ||
      portal.b !== 'cellar' ||
      portal.open !== false ||
      portal.locked !== false ||
      portal.sticks !== true ||
      portal.passable !== false) {
    throw new Error(`${label}: hall-cellar is not the authored closed/stuck portal`);
  }
  if (state.audioPlanner !== 'validated') {
    throw new Error(`${label}: audio planner is not validated`);
  }
  const transmission = state.cellarTransmission;
  if (transmission.listenerRoom !== state.roomId ||
      transmission.portalPath.join('|') !== 'hall-cellar' ||
      transmission.reachable !== true ||
      transmission.gainDb !== -12 ||
      transmission.lowPassHz !== 1100 ||
      transmission.muffle01 !== 0.55) {
    throw new Error(`${label}: closed-door transmission is not -12 dB / 1100 Hz`);
  }
  if (typeof state.audioRoomIr !== 'string' || state.audioRoomIr.length === 0) {
    throw new Error(`${label}: room impulse response is missing`);
  }
  if (!Number.isInteger(state.audioSpatial) || state.audioSpatial < 0) {
    throw new Error(`${label}: spatial-source count is invalid`);
  }
  return true;
}

function validateReturnToOrigin(origin, returned, tolerance = 0.65) {
  if (origin.roomId !== returned.roomId ||
      origin.cells.join('|') !== returned.cells.join('|') ||
      origin.items.submitted !== returned.items.submitted ||
      origin.handles !== returned.handles) {
    throw new Error('return-to-origin changed room, PVS, item count, or texture handles');
  }
  const distance = Math.hypot(
    origin.eye.x - returned.eye.x,
    origin.eye.y - returned.eye.y,
    origin.eye.z - returned.eye.z,
  );
  if (distance > tolerance) {
    throw new Error(`return-to-origin pose drift ${distance.toFixed(3)} exceeds ${tolerance}`);
  }
  return true;
}

module.exports = {
  parsePortalStates,
  parseCellarTransmission,
  validateClosedCellarDoorState,
  validateReturnToOrigin,
};
