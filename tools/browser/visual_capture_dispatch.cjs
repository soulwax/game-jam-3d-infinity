const mouseSensitivity = 0.0028;

function finite(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function wrapAngle(value) {
  let result = value;
  while (result > Math.PI) result -= Math.PI * 2;
  while (result < -Math.PI) result += Math.PI * 2;
  return result;
}

function poseDelta(observed, target) {
  const dx = target.position[0] - observed.eye.x;
  const dy = target.position[1] - observed.eye.y;
  const dz = target.position[2] - observed.eye.z;
  return {
    dx,
    dy,
    dz,
    distance: Math.hypot(dx, dz),
    yawError: wrapAngle(target.yaw - observed.yaw),
    pitchError: target.pitch - observed.pitch,
  };
}

function poseReached(observed, target, {
  positionTolerance = 0.35,
  angleTolerance = 0.025,
} = {}) {
  if (!observed || !target || !Array.isArray(target.position) ||
      target.position.length !== 3 || positionTolerance <= 0 ||
      angleTolerance <= 0 || !finite(observed.eye?.x) ||
      !finite(observed.eye?.y) || !finite(observed.eye?.z) ||
      !finite(observed.yaw) || !finite(observed.pitch)) {
    return false;
  }
  const delta = poseDelta(observed, target);
  return delta.distance <= positionTolerance &&
    Math.abs(delta.dy) <= positionTolerance &&
    Math.abs(delta.yawError) <= angleTolerance &&
    Math.abs(delta.pitchError) <= angleTolerance;
}

function planMouseDelta(observed, target, {
  maxPixels = 180,
} = {}) {
  const delta = poseDelta(observed, target);
  const clamp = (value) => Math.max(-maxPixels, Math.min(maxPixels, value));
  return {
    x: clamp(delta.yawError / mouseSensitivity),
    y: clamp(-delta.pitchError / mouseSensitivity),
    yawError: delta.yawError,
    pitchError: delta.pitchError,
  };
}

function planKeyboardStep(observed, target, {
  positionTolerance = 0.35,
} = {}) {
  const delta = poseDelta(observed, target);
  if (delta.distance <= positionTolerance) return { keys: [], delta };
  const distance = Math.max(delta.distance, 1e-9);
  const sinYaw = Math.sin(observed.yaw);
  const cosYaw = Math.cos(observed.yaw);
  const forward = (delta.dx * sinYaw + delta.dz * cosYaw) / distance;
  const strafe = (delta.dx * cosYaw - delta.dz * sinYaw) / distance;
  const keys = [];
  if (forward > 0.12) keys.push('w');
  if (forward < -0.12) keys.push('s');
  if (strafe > 0.12) keys.push('d');
  if (strafe < -0.12) keys.push('a');
  return { keys, delta };
}

module.exports = {
  planKeyboardStep,
  planMouseDelta,
  poseDelta,
  poseReached,
  wrapAngle,
};
