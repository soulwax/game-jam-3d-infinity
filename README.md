# ∞

- Theme: 3D Infinite Possibilities
- Project for Ludum Dare
- Project history: [CHANGELOG.md](CHANGELOG.md)

- How to build: install dart then run the following commands or open in vscode and press play button.

```sh
dart pub get
dart pub global activate webdev      # once
dart pub global run webdev serve web:8080
```

Narrative authors can validate and compile the complete screenplay graph and
the granular dialogue corpus together:

```sh
dart run tools/text_build.dart
```

The command reads `text/story.screenplay`, checks all 21 days and branch
targets, and emits `web/res/story_script.json` alongside `text.json`.

The editor's headless data checks can be run without a display:

```sh
python3 tools/test_screenplay_editor.py
```

For a small visual editor using only Python's standard library, run:

```sh
python3 tools/screenplay_editor.py
```

Edit the selected scene, beats, branch prompt, or options, then choose
`Save + validate`. The editor presents story moments and player-facing answers
instead of screenplay syntax, offers friendly next-scene names, and keeps a
`story.screenplay.bak` safety copy on every save. Use `--no-build` when Dart is
not installed.

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

Browser evidence for the game and Pixeldart renderer follows one capture
contract (stable `browser-*.png` names, metadata, and SHA-256 sidecars):
[`tools/browser/SCREENSHOT_CONTRACT.md`](tools/browser/SCREENSHOT_CONTRACT.md).

Presentation tuning is centralized: resize the authored house through
`lib/house/scale_profile.dart`, then update the mirrored manifest `modelScale`
value and run the house manifest tests. Camera projection can be varied without
editing gameplay by adding `?cameraProfile=wide`, `?cameraProfile=intimate`, or
`?cameraFov=72` to the web URL; FOV overrides are bounded to 35–100 degrees.

_The map of this place is where you look in the
place the tunnel doesn't show you._
