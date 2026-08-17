#!/usr/bin/env node

// Capture the broad visual-review matrix required by MASTERPLAN.md. This tool
// prepares evidence for a person; it never invents a reviewer or approves art.
const fs = require('fs');
const path = require('path');
const { firefox } = require('playwright');
const { writeScreenshotBundle } = require('./screenshot_capture.cjs');

const REQUIRED_CHECKS = [
  'normal play distance and camera framing',
  'readable darkness and focal hierarchy',
  'materials, normals, silhouette, and contact grounding',
  'near/mid/far spatial depth without light leaks',
  'interaction, captions, focus, and clipping at default UI scale',
  'narrow viewport layout and safe-area behavior',
  'high and safe profile differences remain intentional',
  'dark and bright states remain coherent and legible',
  'no proxy, floating prop, collision mismatch, or debug residue',
];

const DEFAULT_VIEWPORTS = [
  { id: 'desktop-720', width: 1280, height: 720 },
  { id: 'desktop-1080', width: 1920, height: 1080 },
  { id: 'narrow', width: 390, height: 844 },
];
const DEFAULT_PROFILES = ['safe', 'high'];
const DEFAULT_STATES = ['normal', 'dark', 'bright'];

function fail(message) {
  throw new Error(`human-visual-confirmation: ${message}`);
}

function safeToken(value) {
  const token = String(value).trim().toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
  return token.replace(/^-+|-+$/g, '') || 'capture';
}

function parseList(value, fallback) {
  if (!value) return [...fallback];
  const values = value.split(',').map((item) => item.trim()).filter(Boolean);
  if (!values.length) fail('comma-separated option cannot be empty');
  return values;
}

function parseArgs(argv) {
  const args = {
    url: process.env.HUMAN_VISUAL_URL || 'http://127.0.0.1:8090/',
    out: process.env.HUMAN_VISUAL_OUT || 'artifacts/human-visual-confirmation',
    headed: false,
    // The page has auxiliary canvases; the game canvas is the human-review
    // surface and is the only reliable readiness target.
    readySelector: '#game',
    profiles: DEFAULT_PROFILES,
    states: DEFAULT_STATES,
    viewports: DEFAULT_VIEWPORTS,
    resume: false,
  };
  for (let index = 0; index < argv.length; index++) {
    const value = argv[index];
    const next = () => {
      if (index + 1 >= argv.length) fail(`${value} requires a value`);
      return argv[++index];
    };
    if (value === '--url') args.url = next();
    else if (value === '--out') args.out = next();
    else if (value === '--ready-selector') args.readySelector = next();
    else if (value === '--profiles') args.profiles = parseList(next(), DEFAULT_PROFILES);
    else if (value === '--states') args.states = parseList(next(), DEFAULT_STATES);
    else if (value === '--resume') args.resume = true;
    else if (value === '--headed') args.headed = true;
    else if (value === '--help') {
      console.log('usage: node tools/browser/human_visual_confirmation.cjs [--url URL] [--out DIR] [--headed]');
      console.log('       [--profiles safe,high] [--states normal,dark,bright] [--resume] [--ready-selector CSS]');
      process.exit(0);
    } else fail(`unknown argument ${value}`);
  }
  return args;
}

function appendReviewQuery(rawUrl, profile, state) {
  const url = new URL(rawUrl);
  url.searchParams.set('renderer', 'pixeldart');
  url.searchParams.set('profile', profile);
  url.searchParams.set('visualState', state);
  return url.toString();
}

function buildHumanReviewPacket({ output, captures, failures = [], runtimeErrors = [], request }) {
  const expected = request.viewports && request.profiles && request.states
    ? request.viewports.length * request.profiles.length * request.states.length
    : captures.length + failures.length;
  return {
    schemaVersion: 1,
    packet: 'human-visual-confirmation',
    status: 'pending-human-review',
    reviewer: null,
    reviewedAt: null,
    decision: null,
    request,
    requiredChecks: REQUIRED_CHECKS,
    matrix: {
      expected,
      captured: captures.length,
      failed: failures.length,
      complete: failures.length === 0 && captures.length === expected,
    },
    instructions: [
      'Review every capture at 100% scale in the named runtime build.',
      'Use the checklist for each viewport/profile/state; record concrete defects, not vibes.',
      'Reject the packet if any hard-fail defect or unreadable state is present.',
      'Only a real human may fill reviewer, reviewedAt, and decision.',
    ],
    captures: captures.map((capture) => ({
      id: capture.id,
      viewport: capture.viewport,
      profile: capture.profile,
      state: capture.state,
      houseRole: capture.houseRole,
      screenshot: path.relative(process.cwd(), capture.screenshot),
      metadata: path.relative(process.cwd(), capture.metadata),
      digest: path.relative(process.cwd(), capture.digest),
      review: {
        status: 'pending-human-review',
        scores: Object.fromEntries(REQUIRED_CHECKS.map((check) => [check, null])),
        defects: [],
        notes: '',
      },
    })),
    failures: failures.map((failure) => ({
      id: failure.id,
      viewport: failure.viewport,
      profile: failure.profile,
      state: failure.state,
      error: failure.error,
    })),
    runtimeErrors,
    output: path.relative(process.cwd(), output),
  };
}

async function captureMatrix(options) {
  const output = path.resolve(options.out);
  fs.mkdirSync(output, { recursive: true });
  const captures = [];
  const failures = [];
  const pageErrors = [];
  const packetFile = path.join(output, 'human-visual-confirmation.json');
  const request = {
    url: options.url,
    profiles: options.profiles,
    states: options.states,
    viewports: options.viewports,
    readySelector: options.readySelector,
  };
  const completedIds = new Set();
  if (options.resume && fs.existsSync(packetFile)) {
    try {
      const previous = JSON.parse(fs.readFileSync(packetFile, 'utf8'));
      for (const capture of previous.captures || []) {
        const screenshot = path.resolve(capture.screenshot);
        const metadata = path.resolve(capture.metadata);
        const digest = path.resolve(capture.digest);
        if (capture.id && fs.existsSync(screenshot) && fs.existsSync(metadata) && fs.existsSync(digest)) {
          captures.push({
            id: capture.id,
            viewport: capture.viewport,
            profile: capture.profile,
            state: capture.state,
            screenshot,
            metadata,
            digest,
          });
          completedIds.add(capture.id);
        }
      }
    } catch (error) {
      failures.push({
        id: 'resume-packet',
        viewport: null,
        profile: null,
        state: null,
        error: `could not resume prior packet: ${error}`,
      });
    }
  }
  const checkpoint = () => {
    const packet = buildHumanReviewPacket({
      output: packetFile,
      captures,
      failures,
      runtimeErrors: pageErrors,
      request,
    });
    fs.writeFileSync(packetFile, `${JSON.stringify(packet, null, 2)}\n`);
  };
  checkpoint();
  for (const viewport of options.viewports) {
    for (const profile of options.profiles) {
      for (const state of options.states) {
        const id = `${viewport.id}-${profile}-${state}`;
        if (completedIds.has(id)) continue;
        let browser;
        try {
          browser = await firefox.launch({ headless: !options.headed });
          const page = await browser.newPage();
          page.on('pageerror', (error) => pageErrors.push(String(error)));
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          const url = appendReviewQuery(options.url, profile, state);
          await page.goto(url, { waitUntil: 'networkidle' });
          await page.waitForFunction((selector) => {
            const element = document.querySelector(selector);
            if (!(element instanceof HTMLElement || element instanceof HTMLCanvasElement)) {
              return false;
            }
            const rect = element.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
          }, options.readySelector, { timeout: 15000, polling: 50 });
          let observed;
          const packageDeadline = Date.now() + 20000;
          do {
            observed = await page.evaluate(() => {
              const canvas = document.querySelector('#game');
              if (!(canvas instanceof HTMLCanvasElement)) return null;
              return {
                boot: canvas.getAttribute('data-boot-phase'),
                packages: canvas.getAttribute('data-renderer-model-packages'),
                runtime: canvas.getAttribute('data-renderer-model-packages-runtime'),
                count: canvas.getAttribute('data-renderer-model-package-count'),
                houseRole: canvas.getAttribute('data-house-role'),
                error: canvas.getAttribute('data-renderer-model-package-error'),
                diagnostics: canvas.getAttribute('data-renderer-model-package-diagnostics'),
              };
            });
            let ready = false;
            try {
              const diagnostics = JSON.parse(observed?.diagnostics || '{}');
              ready = observed?.packages === 'validated' &&
                observed?.runtime === 'loaded' &&
                Number(observed?.count || 0) > 0 &&
                diagnostics.bindingCount === Number(observed?.count) &&
                diagnostics.attached === true;
            } catch (_) {
              ready = false;
            }
            if (ready) break;
            await page.waitForTimeout(250);
          } while (Date.now() < packageDeadline);
          let attached = false;
          try {
            const diagnostics = JSON.parse(observed.diagnostics || '{}');
            attached = diagnostics.bindingCount >= 1 && diagnostics.attached === true;
          } catch (_) {
            attached = false;
          }
          if (observed.packages !== 'validated' || observed.runtime !== 'loaded' ||
              !attached || observed.houseRole !== 'provisional-visible-place') {
            throw new Error(`promoted model binding did not settle: ${JSON.stringify({ observed })}`);
          }
          await page.waitForTimeout(250);
          const file = path.join(output, `browser-human-${safeToken(id)}.png`);
          const bundle = await writeScreenshotBundle(page, {
            file,
            width: viewport.width,
            height: viewport.height,
            standard: {
              taskId: 'RPA-05-HUMAN',
              purpose: 'human-visual-confirmation',
              surface: 'game',
              state,
              quality: profile,
              audience: 'development',
              rightsStatus: 'licensed-or-original',
              altText: `Human review capture: ${viewport.id}, ${profile} profile, ${state} state.`,
              notes: 'Requested profile/state is encoded in the URL; verify the effective runtime state in-app. Machine-captured evidence; aesthetic approval remains human-owned.',
            },
            metadata: {
              schemaVersion: 1,
              reviewCaptureId: id,
              requestedRenderer: 'pixeldart',
              profile,
              visualState: state,
              viewport,
              sourceUrl: url,
              browser: { name: 'firefox', version: browser.version() },
              houseRole: observed.houseRole,
              promotedModel: 'living-room',
              promotedModelDiagnostics: await page.locator('#game').getAttribute(
                'data-renderer-model-package-diagnostics',
              ),
            },
          });
          captures.push({
            id,
            viewport,
            profile,
            state,
            houseRole: observed.houseRole,
            screenshot: bundle.file,
            metadata: bundle.metadataFile,
            digest: bundle.digestFile,
          });
          checkpoint();
        } catch (error) {
          // Firefox can terminate a WASM page under repeated WebGL pressure.
          // Preserve the cells that did succeed and record this one explicitly
          // so a human never mistakes a partial packet for a full matrix.
          failures.push({
            id,
            viewport,
            profile,
            state,
            error: String(error?.stack || error),
          });
          checkpoint();
        } finally {
          if (browser) await browser.close().catch(() => {});
        }
      }
    }
  }
  checkpoint();
  const packet = JSON.parse(fs.readFileSync(packetFile, 'utf8'));
  return packet;
}

if (require.main === module) {
  captureMatrix(parseArgs(process.argv.slice(2)))
    .then((packet) => console.log(`wrote ${packet.captures.length} captures and pending HUMAN packet: ${packet.output}`))
    .catch((error) => {
      console.error(error.stack || error);
      process.exitCode = 1;
    });
}

module.exports = {
  DEFAULT_PROFILES,
  DEFAULT_STATES,
  DEFAULT_VIEWPORTS,
  REQUIRED_CHECKS,
  appendReviewQuery,
  buildHumanReviewPacket,
  parseArgs,
};
