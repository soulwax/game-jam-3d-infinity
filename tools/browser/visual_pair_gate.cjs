#!/usr/bin/env node

// Dependency-free acceptance gate for fixed clean/final capture pairs.
// It checks state provenance before comparing pixels; a pretty image cannot
// compensate for a mismatched fixture or camera.
const fs = require('fs');
const zlib = require('zlib');

function fail(message) {
  throw new Error(`visual-pair-gate: ${message}`);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`could not read JSON ${file}: ${error.message}`);
  }
}

function readPng(file) {
  const input = fs.readFileSync(file);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!input.subarray(0, 8).equals(signature)) fail(`${file} is not PNG`);
  let offset = 8;
  let width;
  let height;
  let bitDepth;
  let colorType;
  let interlace;
  const idat = [];
  while (offset < input.length) {
    const length = input.readUInt32BE(offset);
    const type = input.toString('ascii', offset + 4, offset + 8);
    const data = input.subarray(offset + 8, offset + 8 + length);
    offset += 12 + length;
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'IDAT') {
      idat.push(data);
    } else if (type === 'IEND') {
      break;
    }
  }
  if (!width || !height || bitDepth !== 8 || colorType !== 6 || interlace !== 0) {
    fail(`${file} must be non-interlaced 8-bit RGBA PNG`);
  }
  const stride = width * 4;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const pixels = Buffer.alloc(height * stride);
  let source = 0;
  const paeth = (a, b, c) => {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  for (let y = 0; y < height; y++) {
    const filter = raw[source++];
    const row = pixels.subarray(y * stride, (y + 1) * stride);
    const prior = y === 0 ? null : pixels.subarray((y - 1) * stride, y * stride);
    for (let x = 0; x < stride; x++) {
      const left = x >= 4 ? row[x - 4] : 0;
      const up = prior ? prior[x] : 0;
      const upLeft = prior && x >= 4 ? prior[x - 4] : 0;
      const value = raw[source++];
      row[x] = (value + (filter === 0 ? 0 :
        filter === 1 ? left :
        filter === 2 ? up :
        filter === 3 ? Math.floor((left + up) / 2) :
        filter === 4 ? paeth(left, up, upLeft) : fail(`${file} has invalid PNG filter ${filter}`))) & 255;
    }
  }
  return { width, height, pixels };
}

function angleError(a, b) {
  let value = a - b;
  while (value > Math.PI) value -= Math.PI * 2;
  while (value < -Math.PI) value += Math.PI * 2;
  return Math.abs(value);
}

function compareRgba(a, b) {
  if (a.width !== b.width || a.height !== b.height) {
    fail(`PNG dimensions differ (${a.width}x${a.height} vs ${b.width}x${b.height})`);
  }
  let changed = 0;
  let sum = 0;
  let max = 0;
  const pixels = a.width * a.height;
  for (let i = 0; i < a.pixels.length; i += 4) {
    let pixelChanged = false;
    for (let channel = 0; channel < 4; channel++) {
      const delta = Math.abs(a.pixels[i + channel] - b.pixels[i + channel]);
      if (delta !== 0 && channel < 3) pixelChanged = true;
      sum += delta;
      if (delta > max) max = delta;
    }
    if (pixelChanged) changed++;
  }
  return {
    width: a.width,
    height: a.height,
    changedRatio: changed / pixels,
    meanChannelDelta: sum / (a.pixels.length * 255),
    maxChannelDelta: max / 255,
  };
}

function pairEvidence(cleanFile, finalFile, {
  maxPoseMeters = 0.08,
  maxAngleRadians = 0.05,
  // Clean/final may differ in a broad low-amplitude grade/post region. Mean
  // channel delta is the primary guard; changedRatio catches gross rewrites.
  maxChangedRatio = 0.75,
  maxMeanChannelDelta = 0.02,
} = {}) {
  const clean = readJson(cleanFile);
  const final = readJson(finalFile);
  const a = clean.visualCaptureSelection;
  const b = final.visualCaptureSelection;
  if (!a || !b || a.pairId !== b.pairId || a.mode !== 'clean' || b.mode !== 'final') {
    fail('metadata does not describe a clean/final pair');
  }
  if (JSON.stringify(a.fixture) !== JSON.stringify(b.fixture) ||
      JSON.stringify(a.camera) !== JSON.stringify(b.camera) ||
      a.profile !== b.profile ||
      JSON.stringify(a.viewport) !== JSON.stringify(b.viewport)) {
    fail('pair camera, fixture, profile, or viewport drifted');
  }
  if (clean.requestedRenderer !== 'pixeldart' || final.requestedRenderer !== 'pixeldart' ||
      clean.resolvedRun?.canonical?.renderer !== 'pixeldart' ||
      final.resolvedRun?.canonical?.renderer !== 'pixeldart') {
    fail('pair was not captured by canonical Pixeldart');
  }
  const pa = clean.automationPlayer;
  const pb = final.automationPlayer;
  if (!pa || !pb || pa.day !== a.fixture.day || pb.day !== a.fixture.day ||
      pa.hour !== a.fixture.hour || pb.hour !== a.fixture.hour ||
      pa.roomId !== a.fixture.room || pb.roomId !== a.fixture.room) {
    fail('live player state does not match the pair fixture');
  }
  const distance = Math.hypot(
    pa.eye.x - pb.eye.x,
    pa.eye.y - pb.eye.y,
    pa.eye.z - pb.eye.z,
  );
  const angle = Math.max(angleError(pa.yaw, pb.yaw), angleError(pa.pitch, pb.pitch));
  if (distance > maxPoseMeters || angle > maxAngleRadians) {
    fail(`pair pose drift exceeded threshold (${distance.toFixed(4)}m, ${angle.toFixed(4)}rad)`);
  }
  const cleanPng = readPng(cleanFile.replace(/\.json$/, '.png'));
  const finalPng = readPng(finalFile.replace(/\.json$/, '.png'));
  const pixels = compareRgba(cleanPng, finalPng);
  if (pixels.changedRatio > maxChangedRatio || pixels.meanChannelDelta > maxMeanChannelDelta) {
    fail(`pixel diff exceeded threshold ${JSON.stringify(pixels)}`);
  }
  return { pairId: a.pairId, captureIds: [a.captureId, b.captureId], distance, angle, pixels };
}

if (require.main === module) {
  const [cleanFile, finalFile] = process.argv.slice(2);
  if (!cleanFile || !finalFile) {
    console.error('usage: node tools/browser/visual_pair_gate.cjs <clean.json> <final.json>');
    process.exit(2);
  }
  try {
    console.log(JSON.stringify(pairEvidence(cleanFile, finalFile)));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { compareRgba, pairEvidence, readPng };
