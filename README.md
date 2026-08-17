# ∞

- Theme: 3D Infinite Possibilities
- Project for Ludum Dare
- Project history: [CHANGELOG.md](CHANGELOG.md)

## Prerequisites and quick start

Install these tools before starting the application:

- Dart SDK with `dart` and `webdev` available on `PATH`
- Python 3.10 or newer for the storyline editor and TTS tooling
- `ffmpeg` and `ffprobe` for audio rendering and validation
- Node.js 24+ and npm only if you will use the optional Svelte project board
- macOS with the `say` command for Apple voices; other systems can use Edge TTS or gTTS

Start the game and its browser editor from the repository root:

```sh
dart pub get
dart pub global activate webdev   # once per Dart installation
dart pub global run webdev serve web:8080
```

Open <http://localhost:8080>. In VS Code, the same Dart web application can be
started with the Run/Play action after dependencies are installed.

Start the Python storyline editor in a second terminal:

```sh
python3 tools/screenplay_editor.py
```

Run its headless validation without opening a window:

```sh
python3 tools/test_screenplay_editor.py
```

To use Apple voice preview in the web editor, open it in a macOS browser with
system voices installed. To render production audio with the Apple backend:

```sh
python3 scripts/tts.py --backend apple --line "Open the door." --name door
```

The optional Svelte project board runs independently:

```sh
cd external/project-agile-web
npm install
printf 'APP_LOGIN=editor\nAPP_PASSWORD=change-me\nAPP_SESSION_SECRET=use-a-long-random-value\n' > .env
npm run dev
```

Open <http://127.0.0.1:5173>. Never commit `.env` or reuse these example
credentials outside local development.

### Game build

Install Dart, then run the following commands or open the project in VS Code
and press the Play button.

```sh
dart pub get
dart pub global run webdev serve web:8080
```

Narrative authors can validate and compile the complete screenplay graph and
the granular dialogue corpus together:

```sh
dart run tools/text_build.dart
```

The command reads `text/story.screenplay`, checks all 21 days and branch
targets, and emits `web/res/story_script.json` alongside `text.json`.

The **Game events** window in the editor is the authoring home for the runtime
schedule. Use **Build day plan** to create visitor and broadcast events from
the screenplay links, then add timing, cues, narrative effects, and follow-up
scenes. The compiled event schedule is available to the Dart game layer through
`TextLibrary.gameEvents`. The game keeps a save-friendly delivery cursor, then
hands each event's effects to `GameSession`; authored flags therefore survive
reloads without letting the renderer mutate game state. In the event window,
filter by day or kind, duplicate a moment as a starting point, and use
`Story changes` for optional `key=value` facts that later dialogue can read.
The day timeline is a visual 24-hour rail: select a day, click an empty time to
start an event there, or click an existing marker to edit it.
Use the ‹ and › day buttons to move through the 21-day story, while the day
summary shows the number of moments and the next scheduled time.
The Hour field also has half-hour nudge buttons for quick rhythm changes, and
the editor checks destinations, event kinds, and voice cues before saving.
To make an event flexible, turn on **Random time** and enter an **Earliest** and
**Latest** hour. The event remains one named moment, but the timeline shows its
window as a band so flexible pacing is visible instead of hidden in prose.
The compiler rejects incomplete, reversed, or out-of-day ranges. At runtime the
game resolves each range to a stable minute using the run seed and event ID, so
the same playthrough does not move an event every frame, while a new run can
feel different. Save data keeps the delivered-event IDs, so reloads do not
repeat an already-fired random event.

The editor's headless data checks can be run without a display:

```sh
python3 tools/test_screenplay_editor.py
```

For a small visual editor using only Python's standard library, run:

```sh
python3 tools/screenplay_editor.py
```

The editor has a familiar Windows-style toolbar: **Save**, **Preview**, **Game
events**, **Characters**, and **Voice line** are the frequent actions. Recovery, help, and quit
live under **More** so they remain available without competing with daily work.
Keyboard shortcuts are shown in the footer: `Ctrl+S`, `F5`, `Ctrl+E`, and
`Ctrl+Shift+C`, `Ctrl+Shift+V`.

Use **Characters** to create a new visitor with a valid writing scaffold and
link it to the selected day. Select an existing character and choose **Open
writing** to edit its full `@day`/`@tier` dialogue in the normal text editor;
use **Save name** for the writer-facing name while keeping the stable ID intact.

Edit the selected scene, beats, branch prompt, or options, then choose
`Save + validate`. The editor presents story moments and player-facing answers
instead of screenplay syntax, offers friendly next-scene names, and keeps a
`story.screenplay.bak` safety copy on every save. Use `--no-build` when Dart is
not installed.

To voice one selected visitor or broadcast line, choose its speaker, performance,
transmission, and an optional variation cue under `Voice this line`, then press
`Generate review`. The editor stages the sample privately, offers **Play**,
and only copies it into `web/res/vo/` and the audio manifest when you press
**Keep**. **Discard** removes the staged file without touching the game.
The **Quick style** menu covers common choices such as Natural visitor, Official
broadcast, Close whisper, Urgent, and Distant; choose Custom when you want to
adjust the individual controls. The **Character** control adds natural, bright,
dark, breathy, nasal, strained, childlike, warm, hollow, metallic, shaky, and
elderly timbral variations independently of the emotional performance and
transmission. Named characters also receive distinct neural voice identities
automatically, while the automatic backend now
properly uses installed Edge neural voices when available; gTTS remains a
working fallback and still receives the same timbre processing.
Accepted manifest-backed visitor clips are loaded by the game audio system and
played automatically when their visitor/day/tier/line key matches. Reload the
game after keeping a clip so the browser loads the updated manifest. TTS needs
`ffmpeg`, `ffprobe`, and the backend's normal network/dependency setup.

The repository also includes a voice demonstration pack under
`web/res/vo/demo/`. The current set covers Irish, Australian, North American,
New Zealand, and British voices across courteous, alert, authoritative,
elderly, rough, intimate, measured, and technical performances. It also
demonstrates door, window, tannoy, wall, floor, telephone, wireless, and clean
transmissions. The clips are registered in `web/res/manifest.json` so they can
be used immediately by audio-preview tooling or the game.
The same folder also contains a `demo-lab-*` A/B set: one identical sentence
rendered with different neural voices and character profiles, making it easy to
compare timbre without the wording or scene context changing.

For precise creative experiments, use `--line-file` instead of fighting shell
quoting; UTF-8 punctuation is preserved. `--rate +6%` and `--pitch -2Hz` give
small direct performance adjustments without creating a new named tone. The
cache includes the complete text and voice settings, so distinct creative
lines cannot collide.

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
