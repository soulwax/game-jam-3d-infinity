# ∞

- Theme: 3D Infinite Possibilities
- Project for Ludum Dare
- Start time and date: 2026-07-28 06:00 CEST
- Duration: 72 hours
- End time and date: 2026-08-04 06:00 CEST self prolonged to make something worthwhile

- How to build: install dart then run the following commands or open in vscode and press play button.

```sh
dart pub get
dart pub global activate webdev      # once
dart pub global run webdev serve web:8080
```

- How to deploy (Vercel): import the repo and keep the defaults. `dist/web`
  is **committed**, so Vercel installs nothing, builds nothing, and just
  serves it — deploys land in seconds. A `pre-commit` hook keeps it honest:
  any commit touching `lib/`, `web/`, `pubspec.yaml` or the build script
  rebuilds both targets and stages the result, so whatever you push is
  already built. Enable it once per clone:

```sh
git config core.hooksPath .githooks
```

The hook adds ~15 s to those commits and nothing to the rest. Output is
content-hashed and the build is deterministic, so an unchanged source tree
produces an unchanged `dist/web` and no diff. If you ever need Vercel to
compile from source instead, point `buildCommand` back at
`node tools/vercel_build.mjs` — the SDK bootstrap still works.

```sh
npm run build:ship                     # exactly what the hook builds (wasm, no source maps)
npm run build                          # dart2js only, with source maps
npm run build:wasm                     # dual target, with source maps
node tools/vercel_build.mjs --prebuilt # → .vercel/output, for `vercel deploy --prebuilt`
```

Set `DART_SDK_VERSION` (default `3.12.2`) to pin a different SDK. Production
deploys drop source maps; preview deploys keep them.

`DART_TARGET=wasm` (or `--wasm`) compiles **both** targets into `app/` under
content-hashed names and generates a `boot.js` that feature-detects WasmGC —
wasm where it exists, dart2js everywhere else, and a fallback to dart2js if
the wasm boot throws. The hash in the filenames is what makes the immutable
caching on `/app/*` safe. The detect expression is lifted verbatim from the
SDK's own `main.support.js` at build time, so it can't drift from the
compiler. Default stays `js`: wasm is ~21% larger over the wire (55 kB vs
45.6 kB brotli) and its runtime win over dart2js is unmeasured for this
renderer — every GL call pays JS interop overhead that dart2js does not.

Assets (fonts, sfx, music — all freely licensed) ship committed
under `web/res/`.

License/author attribution ships in `web/res/manifest.json` and is shown in-game when used in the code.

_The map of this place is where you look in the
place the tunnel doesn't show you._
