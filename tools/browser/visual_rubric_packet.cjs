#!/usr/bin/env node

// Builds a machine-checked review packet for the embodied hero gallery. This
// deliberately leaves aesthetic scores empty: tooling can prove provenance,
// state, and pixel-pair integrity, but only a human can approve the rubric.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const { pairEvidence } = require('./visual_pair_gate.cjs');

const RUBRIC_DIMENSIONS = [
  'roomIdentityFocalComposition',
  'readableDarknessValueHierarchy',
  'materialCredibilityAge',
  'contactShadowGrounding',
  'nearMidFarSpatialDepth',
  'tactileResponseStateCoherence',
  'atmosphereRestraintSourceLogic',
  'interactionAccessibilityReadability',
];

function fail(message) {
  throw new Error(`visual-rubric-packet: ${message}`);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`could not read ${file}: ${error.message}`);
  }
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function collectMetadata(directories) {
  const result = new Map();
  for (const directory of directories) {
    if (!fs.existsSync(directory)) fail(`capture directory does not exist: ${directory}`);
    for (const name of fs.readdirSync(directory)) {
      if (!name.endsWith('.json') || name.endsWith('.digest.json')) continue;
      const file = path.resolve(directory, name);
      const metadata = readJson(file);
      const captureId = metadata.visualCaptureSelection?.captureId;
      if (!captureId) continue;
      if (result.has(captureId)) fail(`duplicate sidecar for ${captureId}`);
      result.set(captureId, { file, metadata });
    }
  }
  return result;
}

function checkDigest(sidecarFile, metadata) {
  const screenshotFile = path.join(path.dirname(sidecarFile), metadata.screenshot);
  const digestFile = sidecarFile.replace(/\.json$/, '.digest.json');
  if (!fs.existsSync(screenshotFile)) fail(`${sidecarFile}: screenshot is missing`);
  if (!fs.existsSync(digestFile)) fail(`${sidecarFile}: digest sidecar is missing`);
  const digest = readJson(digestFile);
  if (digest.screenshotSha256 !== sha256(screenshotFile) ||
      digest.metadataSha256 !== sha256(sidecarFile)) {
    fail(`${sidecarFile}: digest does not match screenshot/metadata bytes`);
  }
  return {
    metadata: path.relative(process.cwd(), sidecarFile),
    screenshot: path.relative(process.cwd(), screenshotFile),
    digest: path.relative(process.cwd(), digestFile),
    screenshotSha256: digest.screenshotSha256,
  };
}

function reviewTemplate(pairId, captureIds) {
  return {
    status: 'pending-human-review',
    reviewer: null,
    reviewedAt: null,
    scores: Object.fromEntries(RUBRIC_DIMENSIONS.map((dimension) => [dimension, null])),
    mustFixDefects: [],
    notes: '',
    pairId,
    captureIds,
  };
}

function buildReviewPacket({ manifest, captureDirectories }) {
  if (manifest?.schemaVersion !== 1 || !Array.isArray(manifest.captures)) {
    fail('manifest must be schema version 1 with captures');
  }
  const metadata = collectMetadata(captureDirectories);
  const groups = new Map();
  for (const capture of manifest.captures) {
    if (!capture.id || !capture.pairId || !['clean', 'final'].includes(capture.mode)) {
      fail(`manifest capture is not a clean/final entry: ${JSON.stringify(capture)}`);
    }
    const found = metadata.get(capture.id);
    if (!found) fail(`missing capture sidecar for ${capture.id}`);
    const selection = found.metadata.visualCaptureSelection;
    if (selection.captureId !== capture.id || selection.pairId !== capture.pairId ||
        selection.mode !== capture.mode || found.metadata.requestedRenderer !== 'pixeldart' ||
        found.metadata.resolvedRun?.canonical?.renderer !== 'pixeldart') {
      fail(`${capture.id}: sidecar provenance does not match manifest/canonical Pixeldart`);
    }
    const evidence = checkDigest(found.file, found.metadata);
    const group = groups.get(capture.pairId) ?? {};
    if (group[capture.mode]) fail(`manifest pair has duplicate ${capture.mode}: ${capture.pairId}`);
    group[capture.mode] = { capture, found, evidence };
    groups.set(capture.pairId, group);
  }

  const pairs = [];
  for (const [pairId, group] of groups) {
    if (!group.clean || !group.final) fail(`${pairId}: clean/final pair is incomplete`);
    let pixels;
    try {
      pixels = pairEvidence(group.clean.found.file, group.final.found.file);
    } catch (error) {
      fail(`${pairId}: ${error.message}`);
    }
    pairs.push({
      pairId,
      evidenceStatus: 'pass',
      metrics: {
        poseDistanceMeters: pixels.distance,
        angleRadians: pixels.angle,
        changedRatio: pixels.pixels.changedRatio,
        meanChannelDelta: pixels.pixels.meanChannelDelta,
      },
      captures: {
        clean: group.clean.evidence,
        final: group.final.evidence,
      },
      review: reviewTemplate(pairId, [group.clean.capture.id, group.final.capture.id]),
    });
  }
  pairs.sort((a, b) => a.pairId.localeCompare(b.pairId));
  return {
    schemaVersion: 1,
    packet: 'embodied-visual-rubric',
    status: 'pending-human-review',
    generatedAt: new Date().toISOString(),
    manifest: path.relative(process.cwd(), manifest.file),
    rubric: {
      scoreRange: [1, 5],
      passScore: 4,
      dimensions: RUBRIC_DIMENSIONS,
      hardFailDefects: [
        'navigation',
        'accessibility',
        'missing-asset',
        'save-mismatch',
        'light-leak',
        'state-coherence',
      ],
    },
    pairs,
  };
}

function parseArgs(argv) {
  const args = { directories: [], output: null, manifest: null };
  for (let i = 0; i < argv.length; i++) {
    const value = argv[i];
    if (value === '--manifest') args.manifest = argv[++i];
    else if (value === '--capture-dir') args.directories.push(argv[++i]);
    else if (value === '--out') args.output = argv[++i];
    else fail(`unknown argument ${value}`);
  }
  if (!args.manifest || !args.directories.length) {
    fail('usage: --manifest <captures.json> --capture-dir <dir> [... ] [--out <file>]');
  }
  return args;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const manifestFile = path.resolve(args.manifest);
    const packet = buildReviewPacket({
      manifest: { ...readJson(manifestFile), file: manifestFile },
      captureDirectories: args.directories.map((directory) => path.resolve(directory)),
    });
    const encoded = `${JSON.stringify(packet, null, 2)}\n`;
    if (args.output) {
      fs.mkdirSync(path.dirname(path.resolve(args.output)), { recursive: true });
      fs.writeFileSync(args.output, encoded);
    }
    process.stdout.write(encoded);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { RUBRIC_DIMENSIONS, buildReviewPacket, reviewTemplate };
