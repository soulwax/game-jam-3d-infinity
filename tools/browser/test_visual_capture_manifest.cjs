const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  decodeAutomationPlayerState,
  loadVisualCaptureManifest,
  selectVisualCapture,
  visualCaptureManifestSummary,
} = require('./visual_capture_manifest.cjs');

const root = path.resolve(__dirname, '..', '..');
const manifestPath = path.join(
  root,
  'assets',
  'house',
  'verification',
  'captures.json',
);
const manifest = loadVisualCaptureManifest(manifestPath);
assert.strictEqual(manifest.captures.length, 4);
assert.strictEqual(visualCaptureManifestSummary(manifest).status, 'validated');
assert.strictEqual(visualCaptureManifestSummary(manifest).captureCount, 4);
const selected = selectVisualCapture(manifest, 'hero-hall-entry-final', {
  scenario: 'ground-circuit',
  profile: 'clean',
  width: 960,
  height: 540,
});
assert.strictEqual(selected.status, 'selected');
assert.strictEqual(selected.mode, 'final');
assert.strictEqual(selected.poseEvidence, 'not-captured');
assert.strictEqual(selected.selectionMode, 'manifest-selector-only');
assert.deepStrictEqual(selected.camera.position, [8.625, 1.65, 0.55]);
assert.deepStrictEqual(selected.mismatches, []);
assert.strictEqual(
  decodeAutomationPlayerState(JSON.stringify({
    schemaVersion: 1,
    phase: 'running',
    roomId: 'hall',
    eye: { x: 1, y: 1.65, z: 2 },
    yaw: 0,
    pitch: 0,
    modal: false,
    inputEnabled: true,
    day: 1,
    hour: 8,
  }), 'fixture').roomId,
  'hall',
);
assert.throws(
  () => decodeAutomationPlayerState('{"schemaVersion":1}', 'fixture'),
  /invalid fields/,
);
assert.throws(
  () => selectVisualCapture(manifest, 'missing-capture', {}),
  /no capture ID/,
);
const incompatible = selectVisualCapture(manifest, 'hero-hall-entry-final', {
  scenario: 'days-1-3',
  profile: 'safe',
  width: 640,
  height: 360,
});
assert.strictEqual(incompatible.status, 'incompatible');
assert.deepStrictEqual(
  incompatible.mismatches.map((mismatch) => mismatch.field),
  ['scenario', 'viewport.width', 'viewport.height', 'profile'],
);

const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'visual-capture-manifest-'));
try {
  const malformedPath = path.join(temporary, 'malformed.json');
  const malformed = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  malformed.captures[1].camera.position[0] += 0.1;
  fs.writeFileSync(malformedPath, JSON.stringify(malformed));
  assert.throws(
    () => loadVisualCaptureManifest(malformedPath),
    /pair drifts/,
  );

  const missingPath = path.join(temporary, 'missing.json');
  assert.throws(
    () => loadVisualCaptureManifest(missingPath),
    /ENOENT/,
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}

console.log('browser visual manifest: validated pairs, summary, and failure coverage pass');
