const fs = require('fs');
const path = require('path');

const schemaVersion = 1;
const idPattern = /^[a-z0-9][a-z0-9._-]*$/;
const modes = new Set(['clean', 'final', 'debug']);
const owners = new Set(['embodied', 'synthetic']);
const profileAliases = new Map([
  ['clean', 'high'],
]);

function loadVisualCaptureManifest(filePath) {
  const absolute = path.resolve(filePath);
  const source = fs.readFileSync(absolute, 'utf8');
  let decoded;
  try {
    decoded = JSON.parse(source);
  } catch (error) {
    throw new Error(`visual capture manifest is not JSON: ${absolute}: ${error}`);
  }
  validateManifest(decoded, absolute);
  return {
    file: absolute,
    source,
    schemaVersion: decoded.schemaVersion,
    captures: decoded.captures,
  };
}

function validateManifest(value, filePath) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`visual capture manifest root is not an object: ${filePath}`);
  }
  if (value.schemaVersion !== schemaVersion ||
      typeof value.houseId !== 'string' ||
      !Array.isArray(value.captures) || value.captures.length === 0) {
    throw new Error(`visual capture manifest header is invalid: ${filePath}`);
  }
  const ids = new Set();
  const pairs = new Map();
  for (const capture of value.captures) {
    if (!capture || typeof capture !== 'object' || Array.isArray(capture) ||
        typeof capture.id !== 'string' || !idPattern.test(capture.id) ||
        ids.has(capture.id) || typeof capture.pairId !== 'string' ||
        !idPattern.test(capture.pairId) || !owners.has(capture.owner) ||
        !modes.has(capture.mode) || !capture.source ||
        typeof capture.source.scenario !== 'string' ||
        typeof capture.source.waypoint !== 'string' || !capture.camera ||
        !Array.isArray(capture.camera.position) ||
        capture.camera.position.length !== 3 ||
        capture.camera.position.some((coordinate) =>
          typeof coordinate !== 'number' || !Number.isFinite(coordinate)) ||
        !Number.isFinite(capture.camera.yaw) ||
        !Number.isFinite(capture.camera.pitch) ||
        !Number.isFinite(capture.camera.fov) || capture.camera.fov <= 0 ||
        capture.camera.fov >= Math.PI || !capture.viewport ||
        !Number.isInteger(capture.viewport.width) ||
        !Number.isInteger(capture.viewport.height) ||
        capture.viewport.width <= 0 || capture.viewport.height <= 0 ||
        typeof capture.profile !== 'string' || !capture.fixture ||
        !Array.isArray(capture.requiredMetadata) ||
        capture.requiredMetadata.length === 0) {
      throw new Error(`visual capture manifest entry is invalid: ${filePath}`);
    }
    ids.add(capture.id);
    if (!pairs.has(capture.pairId)) pairs.set(capture.pairId, []);
    pairs.get(capture.pairId).push(capture);
  }
  for (const [pairId, entries] of pairs) {
    const pairModes = new Set(entries.map((entry) => entry.mode));
    if (entries.length !== 2 || pairModes.size !== 2 ||
        !pairModes.has('clean') || !pairModes.has('final')) {
      throw new Error(`visual capture manifest pair is incomplete: ${pairId}`);
    }
    if (!samePair(entries[0], entries[1])) {
      throw new Error(`visual capture manifest pair drifts: ${pairId}`);
    }
  }
}

function samePair(a, b) {
  return a.owner === b.owner && a.profile === b.profile &&
    a.source.scenario === b.source.scenario &&
    a.source.waypoint === b.source.waypoint &&
    JSON.stringify(a.camera) === JSON.stringify(b.camera) &&
    JSON.stringify(a.viewport) === JSON.stringify(b.viewport) &&
    JSON.stringify(a.fixture) === JSON.stringify(b.fixture);
}

function visualCaptureManifestSummary(manifest) {
  return {
    status: 'validated',
    schemaVersion: manifest.schemaVersion,
    file: path.relative(process.cwd(), manifest.file) || manifest.file,
    sha256: require('crypto').createHash('sha256')
      .update(manifest.source)
      .digest('hex'),
    captureCount: manifest.captures.length,
  };
}

function selectVisualCapture(manifest, captureId, request = {}) {
  if (typeof captureId !== 'string' || captureId.trim() === '') return null;
  const normalizedId = captureId.trim();
  const capture = manifest.captures.find((entry) => entry.id === normalizedId);
  if (!capture) {
    throw new Error(`visual capture manifest has no capture ID: ${normalizedId}`);
  }
  const mismatches = [];
  if (typeof request.scenario === 'string' &&
      capture.source.scenario !== request.scenario) {
    mismatches.push({
      field: 'scenario',
      expected: request.scenario,
      actual: capture.source.scenario,
    });
  }
  if (Number.isInteger(request.width) &&
      capture.viewport.width !== request.width) {
    mismatches.push({
      field: 'viewport.width',
      expected: request.width,
      actual: capture.viewport.width,
    });
  }
  if (Number.isInteger(request.height) &&
      capture.viewport.height !== request.height) {
    mismatches.push({
      field: 'viewport.height',
      expected: request.height,
      actual: capture.viewport.height,
    });
  }
  if (typeof request.profile === 'string' &&
      (profileAliases.get(request.profile) || request.profile) !==
        (profileAliases.get(capture.profile) || capture.profile)) {
    mismatches.push({
      field: 'profile',
      expected: request.profile,
      actual: capture.profile,
    });
  }
  return {
    status: mismatches.length === 0 ? 'selected' : 'incompatible',
    captureId: capture.id,
    pairId: capture.pairId,
    mode: capture.mode,
    owner: capture.owner,
    source: { ...capture.source },
    camera: {
      position: [...capture.camera.position],
      yaw: capture.camera.yaw,
      pitch: capture.camera.pitch,
      fov: capture.camera.fov,
    },
    fixture: JSON.parse(JSON.stringify(capture.fixture)),
    profile: capture.profile,
    viewport: { ...capture.viewport },
    mismatches,
    poseEvidence: 'not-captured',
    selectionMode: 'manifest-selector-only',
  };
}

function decodeAutomationPlayerState(raw, label = 'automation player state') {
  if (typeof raw !== 'string' || raw.trim() === '') {
    throw new Error(`${label} is missing`);
  }
  let decoded;
  try {
    decoded = JSON.parse(raw);
  } catch (error) {
    throw new Error(`${label} is not JSON: ${error}`);
  }
  const eye = decoded?.eye;
  if (!decoded || typeof decoded !== 'object' || Array.isArray(decoded) ||
      decoded.schemaVersion !== 1 || typeof decoded.phase !== 'string' ||
      typeof decoded.roomId !== 'string' || !eye ||
      !['x', 'y', 'z'].every((key) =>
        typeof eye[key] === 'number' && Number.isFinite(eye[key])) ||
      !['yaw', 'pitch'].every((key) =>
        typeof decoded[key] === 'number' && Number.isFinite(decoded[key])) ||
      typeof decoded.modal !== 'boolean' ||
      typeof decoded.inputEnabled !== 'boolean' ||
      !Number.isInteger(decoded.day) ||
      typeof decoded.hour !== 'number' || !Number.isFinite(decoded.hour)) {
    throw new Error(`${label} has invalid fields`);
  }
  return decoded;
}

module.exports = {
  decodeAutomationPlayerState,
  loadVisualCaptureManifest,
  selectVisualCapture,
  visualCaptureManifestSummary,
};
