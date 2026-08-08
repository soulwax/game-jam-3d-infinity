import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const finalOut = path.join(root, 'dist', 'web');
const out = path.join(root, 'dist', `.web-staging-${process.pid}`);
const appDir = path.join(out, 'app');
const cacheDir = path.join(root, '.vercel', 'cache');
const sdkVersion = process.env.DART_SDK_VERSION || '3.12.2';
const sdkChannel = process.env.DART_SDK_CHANNEL || 'stable';
const target = (process.argv.includes('--wasm') ? 'wasm' : process.env.DART_TARGET || 'js').toLowerCase();
const prebuilt = process.argv.includes('--prebuilt');
const sourceMaps = !process.argv.includes('--no-source-maps') && process.env.VERCEL_ENV !== 'production';
const win = process.platform === 'win32';
const entry = path.join('web', 'main.dart');
const indexTag = '<script defer src="main.dart.js"></script>';

function gitValue(args, cwd = root) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

const gameSha = gitValue(['rev-parse', 'HEAD']);
const rendererSha = gitValue(['-C', 'external/pixeldart', 'rev-parse', 'HEAD']);
const lockfileDigest = createHash('sha256')
  .update(fs.readFileSync(path.join(root, 'pubspec.lock')))
  .digest('hex');
const dirty = gitValue(['status', '--porcelain']).length > 0 ||
  gitValue(['-C', 'external/pixeldart', 'status', '--porcelain']).length > 0;
const buildId = `${gameSha.slice(0, 12)}-${rendererSha.slice(0, 12)}${dirty ? '-dirty' : ''}`;

function spawn(cmd, args, stdio) {
  if (!win) return spawnSync(cmd, args, { stdio });
  const line = [cmd, ...args].map((a) => (/[\s"]/.test(a) ? `"${a}"` : a)).join(' ');
  return spawnSync(line, { stdio, shell: true });
}

function sh(cmd, args) {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const r = spawn(cmd, args, 'inherit');
  if (r.status !== 0) {
    console.error(`failed (${r.status ?? r.error}): ${cmd} ${args.join(' ')}`);
    process.exit(1);
  }
}

function haveDart() {
  return spawn('dart', ['--version'], 'ignore').status === 0;
}

async function download(url, dest) {
  console.log(`fetching ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

function unzip(zipPath, destDir) {
  const buf = fs.readFileSync(zipPath);
  let eocd = buf.length - 22;
  while (eocd >= 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd--;
  if (eocd < 0) throw new Error(`no zip end-of-central-directory in ${zipPath}`);
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('bad central directory entry');
    const method = buf.readUInt16LE(p + 10);
    const csize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const mode = buf.readUInt32LE(p + 38) >>> 16;
    const lho = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    p += 46 + nameLen + extraLen + commentLen;
    const dest = path.join(destDir, name);
    if (!dest.startsWith(destDir)) throw new Error(`zip escapes destination: ${name}`);
    if (name.endsWith('/')) {
      fs.mkdirSync(dest, { recursive: true });
      continue;
    }
    const start = lho + 30 + buf.readUInt16LE(lho + 26) + buf.readUInt16LE(lho + 28);
    const raw = buf.subarray(start, start + csize);
    const data = method === 8 ? zlib.inflateRawSync(raw) : raw;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if ((mode & 0xf000) === 0xa000) {
      fs.symlinkSync(data.toString('utf8'), dest);
      continue;
    }
    fs.writeFileSync(dest, data);
    if (mode & 0o111) fs.chmodSync(dest, 0o755);
  }
}

async function ensureDart() {
  if (haveDart()) return 'dart';
  if (process.platform !== 'linux' || !['x64', 'arm64'].includes(process.arch)) {
    console.error('dart is not on PATH and auto-install only covers linux x64/arm64; install the Dart SDK first');
    process.exit(1);
  }
  const sdkRoot = path.join(cacheDir, `dart-${sdkVersion}-${process.arch}`);
  const bin = path.join(sdkRoot, 'dart-sdk', 'bin', 'dart');
  if (!fs.existsSync(bin)) {
    fs.rmSync(sdkRoot, { recursive: true, force: true });
    fs.mkdirSync(cacheDir, { recursive: true });
    const zip = path.join(cacheDir, 'dartsdk.zip');
    const base = `https://storage.googleapis.com/dart-archive/channels/${sdkChannel}/release`;
    const asset = `sdk/dartsdk-linux-${process.arch}-release.zip`;
    try {
      await download(`${base}/${sdkVersion}/${asset}`, zip);
    } catch (e) {
      throw new Error(`pinned Dart ${sdkVersion} download failed: ${e}`);
    }
    unzip(zip, sdkRoot);
    fs.rmSync(zip, { force: true });
  } else {
    console.log(`dart sdk ${sdkVersion} restored from build cache`);
  }
  const binDir = path.dirname(bin);
  for (const f of fs.readdirSync(binDir)) {
    const p = path.join(binDir, f);
    if (fs.statSync(p).isFile()) fs.chmodSync(p, 0o755);
  }
  return bin;
}

function copyStatic() {
  fs.mkdirSync(out, { recursive: true });
  for (const f of ['index.html', 'styles.css']) {
    fs.copyFileSync(path.join('web', f), path.join(out, f));
  }
  if (fs.existsSync(path.join('web', 'res'))) {
    fs.cpSync(path.join('web', 'res'), path.join(out, 'res'), { recursive: true });
    fs.rmSync(path.join(out, 'res', '.fetch_state.json'), { force: true });
  } else {
    console.log('web/res missing, shipping without assets');
  }
}

function compileArgs(kind, dest) {
  const a = ['compile', kind, '-O2'];
  if (!sourceMaps) a.push('--no-source-maps');
  a.push(
    `-DRENDERER_SHA=${rendererSha}`,
    `-DGAME_SHA=${gameSha}`,
    `-DDART_SDK_VERSION=${sdkVersion}`,
    `-DLOCKFILE_SHA256=${lockfileDigest}`,
    `-DRENDERER_BUILD_ID=${buildId}`,
  );
  return a.concat(['-o', dest, entry]);
}

function hashed(file, ext) {
  const digest = createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 8);
  const name = `main.${digest}${ext}`;
  fs.renameSync(file, path.join(path.dirname(file), name));
  return name;
}

function bootScript(detect, js, mjs, wasm) {
  return `(async () => {
  const app = './app/';
  if (${detect}) {
    try {
      const m = await import(app + '${mjs}');
      const compiled = await m.compileStreaming(fetch(app + '${wasm}'));
      (await compiled.instantiate({})).invokeMain();
      return;
    } catch (e) {
      console.warn('wasm boot failed, falling back to dart2js', e);
    }
  }
  const s = document.createElement('script');
  s.src = app + '${js}';
  document.body.appendChild(s);
})();
`;
}

function retargetIndex(src) {
  const p = path.join(out, 'index.html');
  const html = fs.readFileSync(p, 'utf8');
  if (!html.includes(indexTag)) {
    console.error(`web/index.html no longer contains ${indexTag}, cannot retarget the boot script`);
    process.exit(1);
  }
  fs.writeFileSync(p, html.replace(indexTag, `<script defer src="${src}"></script>`));
}

function buildJs(dart) {
  sh(dart, compileArgs('js', path.join(out, 'main.dart.js')));
  fs.rmSync(path.join(out, 'main.dart.js.deps'), { force: true });
  return path.join(out, 'main.dart.js');
}

function buildWasm(dart) {
  fs.mkdirSync(appDir, { recursive: true });
  sh(dart, compileArgs('js', path.join(appDir, 'main.js')));
  sh(dart, compileArgs('wasm', path.join(appDir, 'main.wasm')));
  fs.rmSync(path.join(appDir, 'main.js.deps'), { force: true });
  const support = path.join(appDir, 'main.support.js');
  const detect = fs.readFileSync(support, 'utf8').trim();
  fs.rmSync(support);
  const js = hashed(path.join(appDir, 'main.js'), '.js');
  const mjs = hashed(path.join(appDir, 'main.mjs'), '.mjs');
  const wasm = hashed(path.join(appDir, 'main.wasm'), '.wasm');
  fs.writeFileSync(path.join(out, 'boot.js'), bootScript(detect, js, mjs, wasm));
  return path.join(appDir, wasm);
}

function emitBuildOutput() {
  const dir = path.join(root, '.vercel', 'output');
  fs.rmSync(path.join(dir, 'static'), { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  fs.cpSync(out, path.join(dir, 'static'), { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'config.json'),
    `${JSON.stringify(
      {
        version: 3,
        routes: [
          {
            src: '^/(res|app)/(.*)$',
            headers: { 'cache-control': 'public, max-age=31536000, immutable' },
            continue: true,
          },
          {
            src: '^/(index\\.html|main\\.dart\\.js|boot\\.js)?$',
            headers: { 'cache-control': 'public, max-age=0, must-revalidate' },
            continue: true,
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  console.log('build output api tree written to .vercel/output');
}

if (!['js', 'wasm'].includes(target)) {
  console.error(`DART_TARGET must be js or wasm, got ${target}`);
  process.exit(1);
}

const dart = await ensureDart();
const pkgConfig = path.join(root, '.dart_tool', 'package_config.json');
const lockfile = path.join(root, 'pubspec.lock');
if (!fs.existsSync(lockfile)) {
  console.error('pubspec.lock is required for a reproducible release build');
  process.exit(1);
}
const pubFresh = fs.existsSync(pkgConfig) &&
  fs.statSync(pkgConfig).mtimeMs >= fs.statSync(path.join(root, 'pubspec.yaml')).mtimeMs &&
  fs.statSync(pkgConfig).mtimeMs >= fs.statSync(lockfile).mtimeMs;
if (pubFresh) console.log('pub deps up to date, skipping dart pub get');
else sh(dart, ['pub', 'get', '--enforce-lockfile']);

sh(dart, ['run', 'tools/asset_audit.dart', '--build']);
fs.rmSync(out, { recursive: true, force: true });
const primary = target === 'wasm' ? buildWasm(dart) : buildJs(dart);

copyStatic();
if (target === 'wasm') retargetIndex('boot.js');
if (prebuilt) emitBuildOutput();

const kb = (p) => `${(fs.statSync(p).size / 1024).toFixed(0)} kB`;
const detail = target === 'wasm'
  ? fs.readdirSync(appDir).filter((f) => !f.endsWith('.map')).map((f) => `${f} ${kb(path.join(appDir, f))}`).join(', ')
  : `main.dart.js ${kb(primary)}`;
fs.rmSync(finalOut, { recursive: true, force: true });
fs.renameSync(out, finalOut);
console.log(`dist/web ready [${target}] — ${detail}, source maps ${sourceMaps ? 'on' : 'off'}`);
