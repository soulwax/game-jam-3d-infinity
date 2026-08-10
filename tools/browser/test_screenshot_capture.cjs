'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { createHash } = require('crypto');
const {
  standardCaptureMetadata,
  writeScreenshotBundle,
} = require('./screenshot_capture.cjs');

// A tiny valid PNG keeps this contract test independent of a browser launch.
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
  'base64',
);

async function main() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'screenshot-contract-'));
  try {
    const file = path.join(root, 'browser-contract-game.png');
    const result = await writeScreenshotBundle({
      screenshot: async ({ path: destination }) => fs.writeFileSync(destination, PNG),
    }, {
      file,
      standard: standardCaptureMetadata({
        taskId: 'V-01',
        purpose: 'review',
        surface: 'game',
        state: 'contract-test',
      }),
      metadata: {
        schemaVersion: 1,
        scenario: 'contract',
        viewport: { width: 1, height: 1 },
      },
    });
    assert.strictEqual(result.bytes, PNG.length);
    assert.ok(fs.existsSync(result.metadataFile));
    assert.ok(fs.existsSync(result.digestFile));
    const metadata = JSON.parse(fs.readFileSync(result.metadataFile, 'utf8'));
    assert.strictEqual(metadata.captureContractVersion, 1);
    assert.strictEqual(metadata.surface, 'game');
    assert.strictEqual(metadata.screenshot, 'browser-contract-game.png');
    const digest = JSON.parse(fs.readFileSync(result.digestFile, 'utf8'));
    assert.strictEqual(
      digest.screenshotSha256,
      createHash('sha256').update(PNG).digest('hex'),
    );
    assert.strictEqual(digest.metadata, 'browser-contract-game.json');
    await assert.rejects(
      writeScreenshotBundle({ screenshot: async () => {} }, {
        file: path.join(root, 'not-a-browser-name.png'),
      }),
      /browser-\*\.png/,
    );
    console.log('screenshot-contract: bundle, metadata, and digest verified');
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
