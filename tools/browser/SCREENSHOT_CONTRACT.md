# Screenshot contract

Game and renderer screenshots use one browser-capture contract. The contract
is for review and documentation evidence; it does not promote an image to a
golden baseline automatically.

## Bundle format

Every capture is a lossless PNG whose filename is
`browser-<stable-name>.png`. Two sidecars sit beside it:

* `browser-<stable-name>.json` — capture metadata;
* `browser-<stable-name>.digest.json` — SHA-256 digests for both files.

Metadata has `schemaVersion: 1` for compatibility with the game automation
reporter and `captureContractVersion: 1` for the shared fields. Both surfaces
record `taskId`, `purpose`, `surface` (`game` or `renderer`), `state`,
`sourceMethod`, `safeArea`, `theme`, `locale`, `motion`, `quality`, `audience`,
`privacyCheck`, `rightsStatus`, `altText`, and `notes`. Surface-specific
provenance (route and renderer negotiation for the game, fixture and source
URL for Pixeldart) remains alongside those fields.

The writer is shared by `renderer_smoke.cjs` and the standalone renderer
gallery (`screenshot_capture.cjs`). It fixes the viewport in the caller,
disables animation/caret capture, writes full-frame PNGs, and rejects files
larger than 8 MiB. Inspect every new image with a local image viewer before
referencing it in documentation.

## Game captures

Use the normal deterministic automation entry point. It creates task-scoped
capture bundles in the run artifact directory and keeps route, profile,
renderer selection, automation-player state, and visual-manifest evidence:

```sh
dart --suppress-analytics run tools/automation.dart run \
  --port=8091 --renderer next --profile safe --viewport 640x480
```

`renderer_smoke.cjs` is invoked by that command; do not hand-crop or rename
its files. A game capture is verification evidence unless its review record
explicitly promotes it for a fixed gallery.

## Renderer captures

From the repository root, build the standalone fixture, serve the repository,
and capture the current Pixeldart states:

```sh
dart --suppress-analytics compile js external/pixeldart/web/renderer_test/main.dart \
  -o tmp/r09-web/main.dart.js -O2
python3 -m http.server 8092 --directory .
PIXELDART_GALLERY_BASE_URL=http://127.0.0.1:8092/tmp/r09-web/ \
PIXELDART_GALLERY_DIR=external/pixeldart/.github/screenshots \
node tools/browser/capture_pixeldart_gallery.cjs
```

The renderer gallery is deliberately labelled `surface: renderer` and
`fixture: standalone`: it proves Pixeldart features but contains no house
inventory, exterior PVS, or game simulation state. The current documentation
set is:

* `browser-pixeldart-r09-three-instances.png` — three distinct transforms;
* `browser-pixeldart-demo-all-features.png` — clean standalone feature stack;
* `browser-pixeldart-demo-depth-debug.png` — linearized depth debug state.

The focused `pixeldart_instance_smoke.cjs` probe follows the same writer and
defaults to `/tmp/browser-pixeldart-r09-instance-proof.png` for its verification
capture.

The package-level texture residency probe uses the same contract and captures
both sides of a real material transition:

```sh
PIXELDART_RESIDENCY_BASE_URL='http://127.0.0.1:8092/tmp/r09-web/?r09-residency=1' \
node tools/browser/pixeldart_residency_smoke.cjs
```

It requires a declared-but-pending handle to draw through the fallback, then
the same slot+generation handle to draw after its pixels arrive. Firefox
instrumentation must observe one additional `createTexture`, no delete, and
continued draws; the pending/resident PNGs must not be byte-identical. This is
package residency draw evidence, not an asset-streaming budget, eviction, or
shadow-hardware claim.

The standalone hardware shadow-pixel A/B probe uses a frozen scene and the
same compiled fixture:

```sh
PIXELDART_SHADOW_BASE_URL='http://127.0.0.1:8092/tmp/r09-web/?r09-shadow-proof=1' \
PIXELDART_SHADOW_ARTIFACT_DIR=tmp/r09-shadow \
node tools/browser/pixeldart_shadow_smoke.cjs
```

The `-off` page changes only `castsShadow`; the fixture records direct
`shadow-pass`/`zero-pass` telemetry and an in-loop 64×36 luma grid. The smoke
classifies an adapter honestly as `unsupported`, `zero-pass`, or `observed`;
`observed` requires non-zero caster work and changed presented pixels. This
probe is standalone renderer evidence and must not be used to infer that the
authored-house safe profile has hardware shadow draws.

The authored-house PVS transition probe uses the same bundle format for its
hall, kitchen, and living-room evidence. With a current game compile served from the
repository, run:

```sh
EXTERIOR_PVS_BASE_URL='http://127.0.0.1:8098/tmp/pvs-web/?renderer=pixeldart&automation=1' \
EXTERIOR_PVS_ARTIFACT_DIR=tmp/r09-pvs \
node tools/browser/exterior_pvs_smoke.cjs
```

It is a verification capture, not a synthetic camera teleport: Firefox walks
through the authored hall-kitchen and kitchen-living portals, checks each
changed cell set and submitted-item count, requires resource create/delete counters to remain
stable, and records the texture residency transition. The canvas evidence
must retain the initial `pending` report, reach `resident` for both authored
textures, keep the slot+generation handle string unchanged across the portal,
report explicit `missing`/`evicted` counts (zero is valid for this run), and
record the authored exterior shadow-caster LOD as a separate `submitted/total`
count. The safe profile may legitimately report zero GPU shadow-pass draws;
that is a capability boundary, not evidence that the policy was skipped.

Run `node tools/browser/test_screenshot_capture.cjs` when changing the writer.
Never replace a reviewed gallery image solely because a capture changed; record
the new state, inspect it, and update its sidecars together.

The closed hall-cellar negative probe uses the same bundle contract:

```sh
CELLAR_DOOR_BASE_URL='http://127.0.0.1:8098/tmp/pvs-web/?renderer=pixeldart&automation=1' \
CELLAR_DOOR_ARTIFACT_DIR=tmp/r09-pvs \
node tools/browser/closed_cellar_door_smoke.cjs
```

It physically approaches and presses through the authored closed/stuck grille;
the acceptance result is `roomStable`, unchanged PVS cells, unchanged retained
resource counters, stable texture handles, and stable shadow-caster policy.
The probe also validates `data-automation-portals` for the authoritative
`hall-cellar` `open`/`locked`/`sticks`/`passable` facts, checks the planner's
`-12 dB` / `1100 Hz` / `muffle01=0.55` cellar transmission, barrier IDs,
reason trace, live muffle-meter range, and room IR, then backs away to prove
return-to-origin pose stability. Its focused contract fixture rejects altered
door, audio, barrier, reason, and pose-drift metadata. This is planner and
scheduled-transfer telemetry; it does not claim audible playback. Use the
headed `audio_hardware_smoke.cjs` for the separate PipeWire sink-input lane.
