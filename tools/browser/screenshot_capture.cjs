'use strict';

const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');

const DEFAULT_MAX_BYTES = 8 * 1024 * 1024;

function safeToken(value, fallback = 'capture') {
  const token = String(value ?? '')
    .trim()
    .replace(/[^a-z0-9._-]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  return token || fallback;
}

/**
 * Fields shared by game and renderer captures.
 *
 * The game harness adds its existing route/automation fields beside these
 * values. Renderer captures use the same contract without pretending to be a
 * game route. Keeping the vocabulary in one place makes mixed galleries
 * searchable and comparable.
 */
function standardCaptureMetadata(options = {}) {
  return {
    captureContractVersion: 1,
    taskId: String(options.taskId ?? 'V-01'),
    purpose: String(options.purpose ?? 'review'),
    surface: String(options.surface ?? 'game'),
    state: String(options.state ?? 'settled'),
    sourceMethod: String(options.sourceMethod ?? 'browser'),
    safeArea: String(options.safeArea ?? 'full-frame'),
    theme: String(options.theme ?? 'default'),
    locale: String(options.locale ?? 'en'),
    motion: String(options.motion ?? 'settled'),
    quality: String(options.quality ?? 'safe'),
    audience: String(options.audience ?? 'development'),
    seed: options.seed ?? null,
    privacyCheck: String(options.privacyCheck ?? 'pass'),
    rightsStatus: String(options.rightsStatus ?? 'original'),
    altText: String(options.altText ?? ''),
    notes: String(options.notes ?? ''),
  };
}

function sidecarPath(file, suffix) {
  return file.replace(/\.png$/i, suffix);
}

/**
 * Capture a page or locator and write the PNG, metadata sidecar, and digest.
 * `target` may be a Playwright Page or Locator; both expose screenshot().
 */
async function writeScreenshotBundle(target, options = {}) {
  if (!target || typeof target.screenshot !== 'function') {
    throw new TypeError('screenshot target must expose screenshot()');
  }
  if (typeof options.file !== 'string' || !options.file.trim()) {
    throw new TypeError('screenshot file is required');
  }
  const file = path.resolve(options.file);
  const basename = path.basename(file);
  if (!/^browser-[a-z0-9._-]+\.png$/i.test(basename)) {
    throw new Error(`screenshot filename must use browser-*.png: ${basename}`);
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  try {
    await target.screenshot({
      animations: 'disabled',
      caret: 'hide',
      fullPage: false,
      scale: 'css',
      // WebGL compositing can stall briefly while a context is settling after
      // a sleep/reload boundary. Keep the capture deterministic but allow the
      // browser one bounded recovery window before failing the whole packet.
      timeout: options.screenshotTimeoutMs ?? 60000,
      ...(options.screenshotOptions || {}),
      path: file,
    });
  } catch (error) {
    let fontDiagnostics = null;
    if (typeof target.evaluate === 'function') {
      try {
        fontDiagnostics = await target.evaluate(() => ({
          status: document.fonts.status,
          fonts: [...document.fonts].map((font) => ({
            family: font.family,
            style: font.style,
            weight: font.weight,
            status: font.status,
          })),
        }));
      } catch (_) {
        fontDiagnostics = { status: 'unavailable' };
      }
    }
    throw new Error(`${error}; fontDiagnostics=${JSON.stringify(fontDiagnostics)}`);
  }
  const maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;
  const bytes = fs.statSync(file).size;
  if (bytes > maxBytes) {
    fs.rmSync(file, { force: true });
    throw new Error(`screenshot exceeds ${maxBytes} bytes: ${bytes}`);
  }

  const metadataFile = sidecarPath(file, '.json');
  const metadata = {
    ...standardCaptureMetadata(options.standard),
    ...(options.metadata || {}),
    screenshot: basename,
  };
  fs.writeFileSync(metadataFile, `${JSON.stringify(metadata, null, 2)}\n`);

  const digestFile = sidecarPath(file, '.digest.json');
  const sha256 = (value) => createHash('sha256').update(value).digest('hex');
  const screenshotBytes = fs.readFileSync(file);
  const metadataBytes = fs.readFileSync(metadataFile);
  fs.writeFileSync(digestFile, `${JSON.stringify({
    schemaVersion: 1,
    captureContractVersion: metadata.captureContractVersion,
    screenshot: basename,
    screenshotSha256: sha256(screenshotBytes),
    metadata: path.basename(metadataFile),
    metadataSha256: sha256(metadataBytes),
  }, null, 2)}\n`);

  return {
    file,
    metadataFile,
    digestFile,
    bytes,
    width: options.width ?? null,
    height: options.height ?? null,
  };
}

module.exports = {
  DEFAULT_MAX_BYTES,
  safeToken,
  standardCaptureMetadata,
  writeScreenshotBundle,
};
