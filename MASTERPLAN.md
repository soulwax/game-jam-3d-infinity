# THE QUARANTINE — MASTERPLAN

> [!IMPORTANT]
> **This is the single source of truth for current scope, priority, status,
> dependencies, blockers, acceptance, and the ship decision.** It was reconciled
> against the three live repositories on **2026-08-01**. The direct
> owner request to create this root-level file is the narrow exception to
> `tmp/GROUND_RULES.md` §3's normal rule that project guidance stays in `tmp/`.

The project is **THE QUARANTINE**, a pure-Dart/WebGL2 21-day chamber game. The
repository name `3D-Infinity` and the `MANYFOLD-*` documents are historical.
MANYFOLD is closed and is not part of this plan.

---

## 1. How to use this file

This file answers five questions: what must ship, what is true now, what happens
next, what blocks it, and what evidence is required to call it done.

| Question | Authority |
| --- | --- |
| Current status, order, blockers, scope, and ship gates | **This file** |
| Product intent, story canon, mechanics, and authored numbers | `tmp/PLAN.md` |
| Detailed implementation cards and historical evidence | `tmp/TODO.md` |
| Repository behavior, git, comments, and durable-memory rules | `tmp/GROUND_RULES.md` |
| Renderer architecture and acceptance methods | `tmp/RENDERER-ELEVATION-PLAN.md`, `tmp/RENDERER-HANDOFF.md` |
| Renderer packet evidence | `tmp/RENDERER-BOARD.md` |
| Voice design and cue semantics | `tmp/TTS-PLAN.md`, `tmp/AUDIO-CUES.md` |
| Closed predecessor | `tmp/MANYFOLD-*` |

Supporting documents remain valuable specifications and history. Their old status
tables, checkboxes, “next” lists, line-budget blockers, and critical paths are
snapshots. They do not override this file.

If this file's implementation claim conflicts with source or a reproducible test,
the source/test is evidence that this file needs correction; it is not permission
to silently change product intent. Correct the row here before dispatching more
work.

### Status vocabulary

| Status | Meaning |
| --- | --- |
| **ACCEPTED** | The outcome exists and its named observable gate has passed with recorded evidence. |
| **LANDED–VERIFY** | Relevant code exists, but a required browser, audio, integration, packaging, or other observable gate is missing or red. |
| **ACTIVE** | Work is present or deliberately in progress. Its owner/write set must be respected. |
| **READY** | Unblocked, specified well enough to start, and has one concrete next action. |
| **BLOCKED** | Cannot safely start until the named dependency or owner decision clears. |
| **DEFERRED** | Explicitly outside the current ship path. It is not silently abandoned. |

Priorities have one meaning: **P0** protects the work or restores truthful
verification; **P1** is on the required convergence path; **P2** is required later
or safely parallel; **P3** is cuttable polish.

### Dispatch snapshot

This compact snapshot is the first thing a continuing orchestrator reads. The
register in §5 remains authoritative if the snapshot and a row ever disagree.

| Field | Current dispatch truth |
| --- | --- |
| Planning packet | `CTL-01` is **LANDED–VERIFY** locally; preserve the uncommitted root/docs changes until their separate repository commits and a clean extraction rerun make the cutover durable. |
| Active implementation | `REN-03A` is the only active code packet: five modified files in `external/pixeldart`, based on `9ffedf4`. |
| Do-not-touch set | The five paths listed in §3 and lease `LEASE-RP3-A`; never reset, format wholesale, or absorb them into another packet. |
| Next root control action | Close `CTL-01`'s durability gate, then run `CTL-03` to create ignored in-workspace worktrees for lanes C and G and record their base SHAs. |
| Parallel start after `CTL-03` | `AUT-01`/`BLD-01` in the tooling queue, `AST-01A` in lane C, and `GAM-00` in lane G. The orchestrator admits only one active writer per lease. |
| Renderer queue | Finish `REN-03A`; run `BASE-04`; then serialize `REN-03B`, `REN-03C`, and `REN-04` through `REN-08`. |
| Asset strategy | Finish the tracked catalogue/licence foundation, write the room bill of materials, scout 150+ candidates in disjoint fragments, curate 80–120, then harden the bulk converter against the selected collection. |
| First command | `dart run tools/plan.dart validate` once `AUT-01` exists; until then use the manual register checks in §5 and `dart run tools/card.dart <card-id>`. |
| Global blocker rule | Unknown ownership, dirty-path overlap, stale base SHA, an unaccepted hard dependency, or a red deterministic gate means stop before writing. |

The task table follows a deliberately small grammar so `tools/plan.dart` can own
future dispatch. IDs are unique. `Depends` contains only comma-separated task or
decision IDs, or `—`; prose, ranges, and semicolon conditions are invalid. A
`READY` row has every dependency accepted. An `ACTIVE` row additionally has a
current owner, base SHA, worktree, and exact write lease. An `ACCEPTED` row has no
unfinished next action and cites durable or explicitly local evidence. A compound
outcome is split instead of smuggling a later gate into a presently ready row.
Decision prerequisites use the same exact-ID rule; only `RECORDED` or an explicitly
permitted conservative `DEFAULT` satisfies a task dependency.

---

## 2. Product outcome

Ship a complete 21-day run in which the player inhabits one eight-room house,
listens to the Board, meets visitors through the door, records facts in a physical
journal, chooses what to verify and protect, sleeps, and discovers that memory,
paper, witnesses, and eventually the house itself can disagree. The run reaches
one of three authored endings, resumes exactly from durable saves, and carries only
the intended fact into a second run.

### Non-negotiable design rules

1. **Attention protects.** An entry the player re-read or validly protected does
   not drift. Difficulty changes pressure, never the eligibility rule.
2. **Deniability holds through Day 14.** Every anomaly retains a mundane reading;
   the game does not confirm a supernatural explanation.
3. **The player is sometimes plainly right.** Verification can confirm as well as
   contradict. The mechanic is not a rigged “always wrong” machine.
4. **Information may change channel; it may not vanish.** Removing a readout
   requires an equivalent cue in text, sound, light, or the world.
5. **Nothing in the house physically hurts the player.** No combat, chase,
   monster, damage, or death system is introduced.
6. **Only sleep changes the calendar day.** Frame time and ordinary actions may
   consume hours, never advance the day independently.
7. **One physical fact has one owner.** Portals, apertures, windows, mantles, and
   room dimensions are canonical data shared by rendering, collision, light, and
   audio.
8. **Aesthetic motion never changes simulation truth.** Breathing, shake, tape,
   and presentation offsets do not decide room membership or visibility.
9. **Authored text stays data.** Story prose is compiled from `text/`; it is not
   duplicated in Dart.
10. **Saves contain game state only.** Never persist GPU, audio, DOM, or other
    runtime handles.
11. **Visitor voice only.** Broadcasts remain text over carrier sound unless the
    owner explicitly changes that decision.
12. **Pixeldart becomes the only renderer implementation.** The legacy renderer
    remains the rollback/default path until parity gates pass; it is retired once,
    at the end of the adapter sequence, never reimplemented in parallel.

### Required ship scope

- A stable authored boot, complete Days 1–21, all 22 visitors and 74 scheduled
  arrivals, full/compressed/off tiers, ambient notices, nights, records, street
  text, three endings, and the intended second-run carryover.
- Traversal and interaction across all eight rooms, canonical doors, stairs,
  shutters, mantles, radio, journal, visitor surface, bed, and ending surface.
- Deterministic drift, consultations, difficulty, economy, save/recovery, house
  drift, ending resolution, and full-run scenario evidence.
- Pixeldart RP-3 through RP-8, game adapters RV-11 through RV-14, a representative
  licensed model through the real asset path first, then the curated 80–120-model
  Victorian collection and legacy-renderer retirement.
- Visitor voice, spatial audio, audible door/footstep vocabulary, ambient music,
  truthful manifests, pinned provenance, full licence texts, and an offline-safe
  package.
- The retained presentation systems: gaslight/draught/damp, sound through walls,
  weather/shortening days/breath, tape treatment, and the earned rupture.
- Keyboard and focus correctness, readable text scaling, reduced motion,
  photosensitivity/comfort checks, real-hardware performance, dev/release parity,
  and deployment smoke evidence.

### Asset-first Victorian house program

The house is now a first-class art-production outcome, not a sparse shell waiting
for late polish. **Find the strongest free assets before finalizing the bulk import
pipeline or room dressing.** The asset catalogue determines which source formats,
material cases, texture layouts, pivots, and model complexity the tools must handle.

#### Visual and density target

- Scout at least **150 credible candidates**; approve roughly **80–120 reusable
  models** and author **250–400 placements** across the eight rooms.
- Build a modular late-Victorian architectural kit: skirting, dado/picture rails,
  cornices, ceiling roses, architraves, thresholds, window reveals/sills, fireplace
  and chimney-breast pieces, alcoves, stair strings, newels, balusters, handrails,
  panelling, and deliberate wall/floor transitions.
- Give each major room one focal composition, 5–12 furniture-scale pieces, and
  15–35 small dressing placements. Reuse is expected; obvious repetition and
  evenly sprayed clutter are not.
- Preserve clear routes and meaningful negative space. Density may not block a
  portal, obscure a required story object, change a corroborating measurement, or
  make the swept player capsule unable to reach an interaction.
- Judge the clean daylight image at 384×216. Silhouette, layering, spacing,
  material contrast, wear, and light response matter more than texture resolution.

`tmp/PLAN.md` §20.0 owns the room-by-room art intent. This file owns how it is
sourced, built, integrated, measured, and accepted.

#### Source ladder

Prefer sources with clear, redistributable terms and original provenance:

1. **Tier A — CC0-first 3D/materials:** [Poly Haven](https://polyhaven.com/license),
   [ambientCG](https://ambientcg.com/),
   [Smithsonian Open Access](https://www.si.edu/openaccess/faq),
   [Quaternius](https://quaternius.com/faq.html), and
   [Kenney](https://www.kenney.nl/support). These are the default pools for models,
   materials, HDRI/reference, and adaptable filler pieces.
2. **Tier A — CC0 paintings/prints:** use only item pages explicitly carrying the
   open designation from [The Met Open Access](https://www.metmuseum.org/hubs/open-access),
   the [Art Institute of Chicago Open Access](https://www.artic.edu/open-access/open-access-images),
   and Smithsonian. These supply real period-credible images for framed paintings,
   prints, studies, maps, and papers; record artwork title, artist, date, object ID,
   item URL, image URL/hash, CC0 marker, crop/colour edits, and the frame model used.
3. **Tier B — per-asset Creative Commons:** downloadable
   [Sketchfab](https://sketchfab.com/blogs/community/refine-downloadable-model-searches-with-new-license-filters/)
   items may be considered only when the individual page is CC0 or commercial,
   derivative-friendly CC BY. Capture author, asset URL, exact licence/version,
   attribution text, and modification notice. Reject NC, ND, and SA for this ship
   unless the owner explicitly approves the consequence.
4. **Tier C — custom royalty-free terms:** libraries such as
   [BlenderKit](https://www.blenderkit.com/docs/licenses/) require an explicit owner
   decision and archived terms before use. They are never the silent fallback when
   a CC0/CC BY alternative exists.

Do not trust an aggregator label, a search-result snippet, or a filename as licence
evidence. The original asset page and its licence are captured before download.
Textures bundled with a model are separate licensed inputs unless the source says
otherwise.

#### Tracked catalogue and parallel scouting

The machine source of truth must live in the game repository, not ignored `tmp/`:

```text
assets/catalog/schema.json
assets/catalog/candidates/architecture.json
assets/catalog/candidates/furniture.json
assets/catalog/candidates/decor.json
assets/catalog/candidates/clutter.json
assets/catalog/accepted.json
assets/catalog/room_bom.json
assets-src/models/<stable-id>/...
assets-src/art/<stable-id>/...
web/res/models/<stable-id>/*.qmsh
web/res/models/<stable-id>/model.json
web/res/textures/art/<stable-id>.*
```

Candidate fragments are deliberately disjoint write leases, so three scouts can
work in parallel: architecture/structure, furniture/fixtures, and decor/clutter.
The asset lead alone promotes entries into `accepted.json`.

Every candidate record carries at least:

```text
id, category, roomTags, periodTags, sourceUrl, downloadUrl, creator,
licenseId, licenseUrl, attribution, retrievedAt, sourceSha256,
archiveMember, sourceFormat, units, upAxis, triangleCount, materialCount,
textureFiles/resolutions, previewUrl, proposedUse, status, rejectionReason
```

The catalogue validator rejects duplicate IDs/URLs/hashes, missing original source
pages, unapproved licences, unpinned bytes, unknown formats, path traversal,
non-finite metadata, missing bundled texture licences, and accepted entries with no
room or architectural purpose.

#### Normalize once; build deterministically forever

Raw downloads live in a hash-addressed ignored cache. Accepted assets are
normalized once into tracked, redistributable source inputs with explicit metres,
Y-up orientation, pivot, material split, normals, UVs, and modification record.
A clean production build must not require Blender, a logged-in marketplace, a
network request, or anything under `tmp/`.

The bulk producer consumes normalized OBJ plus material/texture sidecars and emits
pixeldart's existing QMSH/model contracts. Do **not** add a new legacy
`lib/engine/mesh_asset.dart`. One multi-material model becomes multiple QMSH mesh
parts referenced by a deterministic `model.json` matching pixeldart
`ModelDefinition`; collision proxies and story meaning stay in game data, never in
renderer mesh files.

Framed art is two assets, not a baked mystery mesh: a reusable frame model plus a
catalogued CC0/approved image derivative. A deterministic art step applies the
recorded crop/rotation/colour-space/downscale settings, preserves aspect ratio,
emits content-hashed texture bytes/mips, and records source/output hashes. It never
scrapes an arbitrary search thumbnail or makes the museum page itself a build input.

QMSH v1 is the pilot path. Before bulk conversion, measure expanded source bytes,
deduplicated runtime vertices, index counts, and package size across a representative
30-asset sample. If v1's expanded encoding breaches the ratified payload/resource
budget, design and test an indexed/material-aware QMSH v2 **before** converting the
whole catalogue. Never hand-edit generated QMSH.

The planned tool contract is:

```text
dart run tools/models.dart catalog --check
dart run tools/models.dart fetch --missing
dart run tools/models.dart normalize --check
dart run tools/models.dart convert --changed
dart run tools/models.dart art --check
dart run tools/models.dart turntable --all
dart run tools/models.dart house --check
dart run tools/models.dart report --json build/model-report.json
```

`fetch` is the only networked command. Every check/build/release command is offline
and consumes pinned tracked inputs or the verified hash cache. `convert --changed`
uses content hashes and atomic replacement; two cold conversions must produce the
same bytes, paths, model descriptors, and report.

#### House data and placement contract

- Canonical rooms, portals, windows, stairs, mantles, corroborating dimensions,
  and Q24 overrides remain in `lib/house/` and own simulation truth.
- Decorative architecture and placements are authored room-locally in validated
  data. Each record names a stable ID, model key, local transform, material variant,
  visibility group, collision policy, interaction tag if any, and importance/LOD.
- Collision is explicit: `solidProxy`, `softBlocker`, `nonBlocking`, or
  `interactionOnly`. Runtime triangle soup never silently becomes collision.
- Structural additions such as a chimney breast or alcove that genuinely change
  walkable space require canonical simple bounds and the same query path for
  collision, interaction, rendering, light, and audio.
- Furniture layout is authored, not procedurally sprayed. Seeded variants may swap
  equivalent clutter only when they cannot alter evidence, story access, save
  compatibility, or deterministic scenarios.
- Rendering batches by mesh/material/visibility group, shares model definitions,
  portal-culls by room, and never allocates per placement in the frame loop.

Automated furnished-house checks must sweep the 0.3 m-radius player capsule through
all named routes, prove every required interaction point reachable, reject overlaps
with doors/windows/stairs, confirm Q24 rebuilds affected detail, report visible
draws/triangles/materials/texture bytes per room pair, and generate fixed-camera
contact sheets plus per-model turntables. Art approval uses those artifacts; CI
uses deterministic metadata and semantic probes rather than vendor-fragile golden
pixels alone.

### Conditional or deferred scope

- RP-9 extras—soft particles, alpha-to-coverage, per-instance transform streaming,
  and demo simplification—are **DEFERRED** until the required path is green.
- Decorative props beyond the approved room BOM/density target, broadcast voice,
  publishing pixeldart as a public package, and broad platform/infrastructure
  migrations are not ship blockers.
- A required item may be waived only by an explicit owner decision recorded in
  §10 with its player-facing consequence. Lack of time is not an implicit waiver.

---

## 3. Audited repository truth

### Pre-cutover audited repository snapshot

| Repository | Audited revision/state | Meaning |
| --- | --- | --- |
| Game | `65f30da`, `main` ahead of `origin/main` by 3 | Q30 code, pixeldart gitlink/config, and Q31 notices are local commits. The root also has the modified submodule and this untracked `MASTERPLAN.md`; treat both as protected work. |
| Renderer | `external/pixeldart` at `9ffedf4`, aligned with origin, five modified files | RP-3 profile/post-chain work is **ACTIVE and uncommitted**. Do not reset, overwrite, or assign overlapping work until ownership is confirmed. |
| Docs | `tmp/` at `16c992e`, ahead of origin by 1, modified `PLAN.md` and `TODO.md` | Existing plans/cards are preserved in their own repository; the authority/preservation edits belong to the same cutover packet as this file. |

The five active pixeldart files are:

- `lib/rendering/api/capabilities.dart`
- `lib/rendering/passes/dof.dart`
- `lib/rendering/passes/grade.dart`
- `lib/rendering/passes/ps1.dart`
- `lib/rendering/passes/vhs.dart`

The patch introduces RP-3's feature-group vocabulary and parameterized post-chain
inputs. It is a partial first landing, not accepted RP-3. This snapshot describes
the state from which the plan was cut; it is refreshed through recorded evidence,
not silently edited into an undated claim after every working-tree change.

### What is proven now

- The game analyzer is clean.
- All **28** root `tools/test_*.dart` programs pass.
- The Python corpus suite passes **53 tests**.
- The runtime boot path loads authored text, creates/restores the session, builds
  the visitor director, applies stand-ins, saves on sleep, and reaches endings.
- Pure/runtime coverage includes the eight-room house, movement and interaction,
  journal and drift, difficulty, save/recovery, 22 visitors/74 arrivals, ambient
  notices, three endings, and the two implemented house drifts.
- Pixeldart analyzes clean; all **20** renderer test programs, the import-boundary
  check, and generated-shader check pass.
- RP-0 consolidation, RP-1 draw-count assertions, and RP-2 `TextureStore` have
  landed; RP-2 has browser evidence in the renderer board.

These facts prove substantial foundations. They do **not** prove a complete
player-facing run, browser accessibility, packaged parity, audio delivery,
full-scenario determinism, asset legality, or release readiness.

### What is red or incomplete now

1. **The committed release is stale.** `dist/web` last changed in `37bce10`, before
   the next three game commits. `core.hooksPath` is unset, so the documented hook
   did not rebuild the deployed artifact. `web/res/text_choices.json` already
   differs from its `dist/web` copy, and recent `web/main.dart` behavior is absent
   from the committed bundle.
2. **The asset strict gate fails.** No source entry has a pinned SHA-256; full
   OFL-1.1 and CC-BY-4.0 texts are missing; the orphan policy permits 292
   unverified files (NOTICE plus 291 old VO clips).
3. **Voice is not finished.** Q30's code is present, but the current migration
   estimate of 367 clips, five new visitor voices, manifest entries, provenance,
   and playback acceptance are absent. Release truth must come from a frozen plan
   hash rather than that hand-maintained estimate. `tts.py --check` is currently
   vacuous when the manifest has no `vo-*` keys and therefore cannot be trusted.
4. **Audio is mostly inert at runtime.** The engine exposes position, listener,
   listener-room, occlusion, and music APIs, but the game has no external call
   sites for `playAt`, `setListener`, `setListenerRoom`, or `startMusicLoop`.
   Knocks, footsteps, visitor voice, room occlusion, and music therefore lack an
   end-to-end path.
5. **Q24 is two changes out of five.** Kitchen width and spare-room ceiling are
   implemented. Day 17's 3/4 landing flicker, Day 18's moving wall with a fixed
   window, and Day 20's new window in the opposite house require explicit content
   decisions and implementation.
6. **Weather and rupture coupling are partial.** E11 is currently sun direction
   and colour only. E12 records mantle iteration order at rupture start, not the
   persisted 21-day lighting history required by the authored ending.
7. **Pixeldart is not integrated.** The game `pubspec.yaml` has no pixeldart path
   dependency and still uses `lib/engine/renderer_core.dart`. That is intentional
   until RV-11, but it means standalone renderer success is not game success.
8. **Pixeldart's static ladder is not fully green.** `check_sizes.dart` rejects
   `test_alpha_mask.dart` at 548/500 and `test_zero_cost.dart` at 529/500. The old
   game line-budget waiver does not silently disable this executable package gate;
   split the tests or explicitly ratify a new checked cap.
9. **Central browser evidence is missing.** `tmp/VERIFY-wave5-6.ps1` has no
   successful run and relies on broken/stale assumptions. There is no CI workflow.
10. **UI/accessibility remains unaccepted.** Focus helpers and reduced-motion CSS
    exist, but no browser DOM/a11y suite proves the complete surfaces; the door
    surface lacks equivalent panel focus/ARIA coverage.
11. **The build graph is neither singular nor clean-clone self-contained.**
    `tools/build.dart` and `tools/vercel_build.mjs` are divergent;
    `asset_audit.dart` shells into ignored `tmp/tools/fetch_assets.dart`; text,
    both shader families, models, voice, and generated freshness are not one
    mandatory graph. A clean game clone therefore cannot reproduce the claimed
    release using tracked inputs alone.
12. **Dependency/toolchain locking is incomplete.** Root `pubspec.lock` exists but
    is ignored and untracked, while the release downloader may float from Dart
    3.12.2 to “latest stable” after a failure. Release must commit the application
    lock, use `dart pub get --enforce-lockfile`, pin every build tool, and fail
    rather than silently change compilers.
13. **The cache contract is unsafe.** `/res/*` receives a one-year immutable
    header although stable names such as text JSON, manifests, audio, and textures
    can change. Stable URLs must revalidate immediately, or every reference must be
    content-fingerprinted and rewritten before immutable caching is claimed.
14. **The current verification ladders can omit work silently.** Root discovery
    can pass with zero tests, pixeldart's named list can miss a newly added test,
    and the VO checker sees zero speech when the manifest is empty. Exact-set and
    non-empty assertions belong in the shared verifier before its green result is
    promotion evidence.

---

## 4. Execution strategy

Front-load reproducibility and machine dispatch, then keep three implementation
lanes busy behind explicit leases. Parallel work is useful only when its merge cost
is bounded and its evidence can be promoted without rereading a transcript.

### Four-role topology

| Role | Repository/worktree | Exclusive responsibility |
| --- | --- | --- |
| **O — orchestrator/integrator** | Primary game worktree | Canonical status and decisions, lease admission, convergence merges, gitlinks/locks, `dist/**`, compact evidence promotion, and release. |
| **R — renderer** | Existing `external/pixeldart` checkout until RP-3 is checkpointed | Pixeldart RP packets, then renderer-facing game adapters. RP-3 through RP-8 are one serialized integration queue because their demo, pipeline, and lifecycle surfaces overlap. |
| **C — content/assets/audio** | `_worktrees/game-c` after `CTL-03` | Asset catalogue/provenance, model normalization/QMSH production, room dressing data, SFX, VO, and generated manifests. Candidate fragments may have temporary subleases. |
| **G — game/verification** | `_worktrees/game-g` after `CTL-03` | Save/domain state, scenarios, content consumers, weather/rupture/tape/audio event contracts, UI/accessibility, plan/gate tooling, and browser diagnostics. |

The worktree directories stay ignored and inside this workspace. C and G do not
initialize or alter their own pixeldart checkout unless O explicitly hands them an
integration packet. If worktrees cannot be created safely, lanes edit in sequence;
shared-root writes or commits are never treated as isolated.

### Hot-file ownership and handoffs

| Path/area | Owner and rule |
| --- | --- |
| `MASTERPLAN.md`, `tmp/PLAN.md`, `tmp/TODO.md`, compact evidence index | O only. Workers return a handoff; O applies status/evidence. |
| `dist/**`, `.githooks/**`, lockfiles, gitlinks, `_worktrees/**` metadata | O only. Only O rebuilds/stages generated release output on the integration tree. |
| `external/pixeldart/**` | R through `REN-08`; explicit temporary handoff to C for `INT-02`, then back to R. |
| `external/pixeldart/web/renderer_test/main.dart`, `lib/rendering/passes/pipeline_builder.dart` | Never parallel. One renderer packet owns both or neither. |
| `assets/catalog/**`, `assets-src/**`, `web/res/models/**`, asset/manifests/model/TTS tools | C. O owns the final manifest/dist convergence commit. |
| `assets/catalog/candidates/architecture.json` | C-architecture scout sublease only. |
| `assets/catalog/candidates/furniture.json` | C-furniture/fixtures scout sublease only. |
| `assets/catalog/candidates/decor.json`, `clutter.json` | C-decor/clutter scout sublease only. |
| `lib/game/**`, `lib/sim/**`, non-presentation `lib/house/**`, `lib/engine/audio.dart` | G until the domain snapshot is frozen. |
| New `lib/presentation/**`, `lib/house/emitter.dart`, renderer adapters | R after the explicit `INT-01` handoff. |
| `web/main.dart` | G through browser/UI baseline; O records a handoff to R before renderer integration. |
| `lib/config.dart` | G; R consumes typed immutable configuration snapshots rather than editing it concurrently. |

One active lease owns a path prefix. O refuses a claim if the expected base SHA is
stale, a dirty path overlaps, or a prefix intersects an existing lease. Leases do
not expire or get stolen automatically. They close by accepted handoff, explicit
release, or owner intervention.

### Commit and convergence protocol

1. A lane starts from a recorded SHA and changes only its leased paths. It does not
   rebuild/stage `dist`, edit the master, bump the gitlink, or fold unrelated dirt
   into its commit.
2. A handoff contains task ID, base/result SHA, exact changed paths, commands and
   results, artifact hashes, exact gate proved, adjacent scope not proved, and any
   blocker. Candidate feature evidence may be dirty; acceptance evidence may not.
   The sole exception is a state-inventory control gate such as `CTL-02`, whose
   measured object is the dirty-path set itself; it proves preservation only, never
   implementation correctness.
3. O merges isolated feature commits → shared seams/adapters → generated manifests
   and output → pixeldart gitlink/locks → aggregate verification → compact evidence
   and status. Generated output never hides source conflicts.
4. After a schema/save/interface change, O reruns affected downstream gates even
   if git merges cleanly. After a renderer packet, R's package gate runs before its
   gitlink moves.
5. The local hook is a convenience, not the concurrency controller. CI and the
   shared verifier are final authority; no lane uses `--no-verify` to make a packet
   appear isolated.

### Self-driving tooling contract

The automation lands before broad content work so future sessions become short,
bounded packets and the verifier proves that it can fail.

`tools/plan.dart` is the master-plan parser and dispatcher:

```text
dart run tools/plan.dart validate
dart run tools/plan.dart next --lane C --json
dart run tools/plan.dart dispatch ART-01A
dart run tools/plan.dart claim ART-01A --owner <id> --write <prefix> --expect-sha <sha>
dart run tools/plan.dart accept ART-01A --evidence <EV-id>
```

It validates IDs, statuses, dependencies, cycles, decisions, ready-state truth,
accepted evidence, active lease fields, and path-prefix overlap. `claim` uses an OS
file lock plus compare-and-swap of the master content digest. `dispatch` prints only
the ground rules, selected row, direct dependency evidence/decisions, exact paths
and gates, relevant card/design sections, dirty overlap, first command, and stop
rules. Core validation works without `tmp`; card enrichment reads `tmp` or
`QUARANTINE_DOCS_DIR` and otherwise gives one checkout instruction.

`tools/verify.dart` is the only aggregate runner:

```text
dart run tools/verify.dart --profile quick|full|release|renderer|browser [--only GATE] [--resume RUN] [--json]
```

It executes direct argument arrays, never shell-composed strings. Full/release
profiles continue independent gates and return nonzero if any fail; `--fail-fast`
is local-only. `tools/verify/gates.json` is a versioned implementation DAG—not a
second status board—with stable gate ID, cwd/repository, argv, dependencies,
profiles, input globs, timeout, retry class, exact/nonzero discovery expectations,
artifacts, and master task IDs. Root and pixeldart tests are discovered in sorted
order and exact-set checked so zero or silently omitted tests fail.

Each run writes ignored detail under `test-results/verify/<run-id>/`: `run.json`,
crash-resumable `events.ndjson`, `summary.json`/`.md`, `junit.xml`, environment,
per-gate stdout/stderr/result, and browser state/console/network/screenshots/
readbacks/metrics. Records include task/gate IDs, task-spec digest, all three SHAs
and dirty inputs, sorted input digests, sanitized argv, tool/browser/adapter,
attempts/timings/classification, artifact SHA-256s, `proves`, and
`doesNotProve`. O promotes only a compact immutable EV JSON or a CI URL plus
artifact hash. Resume skips only matching-fingerprint PASS gates.

`tools/verify/self_test.dart` exercises pass, assertion fail, timeout, allowed
infra retry, blocked dependency, zero discovery, missing artifact, stale resume,
malformed/cyclic plan, stale claim CAS, lease overlap, missing/extra/mutated dist,
wrong browser build, console error, dark frame, and software-adapter rejection. A
verifier that has not proved it can reject bad fixtures is not an acceptance gate.

### Canonical build, browser, and CI methods

- One tracked graph owns enforced locks, text, legacy and pixeldart shaders,
  QMSH/models, strict assets/VO, compilation, static copy, and a no-timestamp
  `build-manifest.json` of sorted path/size/SHA. `tools/build.dart` becomes a thin
  wrapper or is retired; ignored `tmp/**`, global `webdev`, network access, and
  “latest stable” fallbacks are forbidden in release mode.
- Release setup uses committed lockfiles and `dart pub get --enforce-lockfile`.
  A failed pinned tool download fails. `BUILD_ID` derives from sorted input bytes.
- Build twice into fresh output roots, compare exact path/size/hash trees, then
  compare the candidate with tracked `dist/web`, including extras and forbidden
  maps/stale apps. Only O replaces `dist/web`; nondeterminism is never normalized.
- Stable `/res/*` URLs revalidate. Immutable caching is allowed only after every
  reference uses a content hash and package/deploy evidence proves the mapping.
- Public diagnostics are JSON text in a release-safe hidden
  `<output id="verification-state">`: schema/build ID, boot/error/frame,
  day-hour-room, canvas, backend/profile, adapter/software flag, GL errors,
  UI/focus/pointer lock, save/audio state and last event, and renderer resources.
  A verification-only public end-of-frame request returns framebuffer hash,
  luminance and black-pixel statistics rather than inferring them from a screenshot.
- The browser runner owns only its server/browser PIDs, dynamic ports, temp
  profile, cache-disabled navigation, real input, expected build ID, console/page/
  crash/network capture, screenshots/readback, and `finally` cleanup. JSON scenarios
  preload versioned state before boot and then drive gameplay through public input.
  Software CI proves function; named real hardware proves visual/perf/audio claims.
- CI calls the same profiles. PR checks cover plan lint, harness self-test, exact
  static/test sets, content/generated contracts, double build/dist comparison, and
  software browser function. Manual/tag release adds hardware 600-frame/audio/
  offline/cache evidence before deployment. Tool/action versions are pinned.

### Retry, stop, and escalation policy

- Static, deterministic, hash, licence, semantic, generator, and visual assertion
  failures get one attempt. Never retry them into green.
- Browser startup/port/CDP infrastructure gets one fresh-port/profile retry. A
  pass on retry is `FLAKY` and cannot promote in CI.
- Performance is one prescribed warm-up plus exactly three measured runs; report
  median and p95 and discard none.
- Fetch/TTS may try at most three times with exponential backoff and jitter only
  for timeout/reset/408/429/5xx—not auth, other 4xx, parse, hash, licence, or
  semantic failure. Remote TTS bytes need not reproduce; frozen plans and committed
  clip hashes do.
- Timeout fails; dependents become `SKIPPED_BLOCKED`, while independent full or
  release gates continue. Zero tests/assets/planned clips is a hard failure.
- Always clean up owned PIDs/temp files. After three identical blocker outcomes,
  set the task `BLOCKED` with one concrete unblock condition instead of rerunning.
- Stop immediately for dirty overlap, changed base SHA, unclear licence, changed
  canonical geometry without a decision, runtime handles in saves, generated
  drift, secret exposure, or any request to erase unrelated user work.

### Optimized waves and convergence points

```text
W0 CONTROL
  CTL-01 + CTL-02 -> CTL-03
  R: REN-03A -> BASE-04 -> REN-03B -> REN-03C
  O/G: AUT-01 -> AUT-02; BLD-01; AUT-06 -> AUT-08 -> AUT-07
  C: AST-01A
  G: GAM-00
  CONVERGENCE A: BASE-02 + BASE-03, recorded M0 baseline

W1 PARALLEL PRODUCTION
  R: REN-04 -> REN-05 -> REN-06 -> REN-07 -> REN-08  (serialized)
  C: ART-00 -> ART-01A | ART-01B | ART-01C -> ART-01D
     -> AST-02A -> AST-02B; ART-02 -> ART-03; AST-03; AUD-01 -> AUD-02
  G: GAM-06; GAM-03A | GAM-04A | GAM-05A | GAM-08A | CNT-01 -> CNT-02
     GAM-07 | ACC-01A after BASE-03
  O/owner: DEC-Q24-00 -> DEC-Q24-17 | DEC-Q24-18 | DEC-Q24-20
  CONVERGENCE B: renderer M1, curated asset set, frozen domain snapshots

W2 ADAPTERS AND HOUSE
  O: INT-00 entrypoint handoff; R: INT-01; C/R handoff: INT-02; R: INT-03 -> INT-04
  C: ART-04 after INT-03; G/R: GAM-03B | GAM-04B | GAM-05B | GAM-08B after INT-04
  R: INT-05 -> INT-06A; G/C: AUD-03B; ART-05A; GAM-02 -> ART-05B
  CONVERGENCE C: next-renderer preview, furnished-house and content gates

W3 ACCEPT AND RETIRE
  ACC-01B replays the frozen ACC-01A route on next
  ACC-02 | ACC-03 -> INT-06B (next default, rollback, two RC matrices)
  -> INT-06C (separate legacy deletion) -> REL-00 -> REL-01 -> REL-02 -> REL-03
```

The legacy renderer is a controlled rollback through `INT-06B`. It is deleted in
its own `INT-06C` commit only after two consecutive accepted release-candidate
matrices. No new feature grows it except a release-blocking baseline repair.

---

## 5. Canonical work register

This is the only live status register. Detailed historical cards in `tmp/TODO.md`
remain requirements where they do not conflict with this table. Each row maps to
one gate ID; detailed commands will live in `tools/verify/gates.json`, and card
references are printed by `tools/plan.dart dispatch`.

### Active and reserved leases

| Lease | Task/owner | Repository/worktree/base | Exact write set | State |
| --- | --- | --- | --- | --- |
| `LEASE-RP3-A` | `REN-03A`, lane R | pixeldart existing checkout at `9ffedf4` | `lib/rendering/api/capabilities.dart`; `lib/rendering/passes/dof.dart`; `grade.dart`; `ps1.dart`; `vhs.dart` | **ACTIVE**—preserve current bytes; no overlapping format/reset/edit. |
| `RESERVE-O` | O | primary game/docs worktrees | `MASTERPLAN.md`; `tmp/PLAN.md`; `tmp/TODO.md`; compact evidence; `dist/**`; locks; gitlinks | Permanent exclusive integration reservation. |

No other implementation lease is active. A `READY` task is still not admitted if
its lane already has an active task or its proposed write prefix overlaps a
reservation.

### Control and baseline

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTL-01 | Durable master-plan cutover | O/game+docs | P0 | **LANDED–VERIFY** | — | `G-CTL-01` | `EV-PLAN-LOCAL-20260801` | Commit the reviewed root and docs packets in their own repositories, then rerun plan/card/link/diff checks from the committed states and promote compact clean evidence. |
| CTL-02 | Three-repository state and RP-3 preservation hold | O/all | P0 | **ACCEPTED** | — | `G-CTL-02` | `EV-STATE-20260801` | — |
| CTL-03 | Isolated C/G worktrees and base/branch checkpoint | O/game | P0 | **BLOCKED** | CTL-01, CTL-02 | `G-CTL-03` | — | Create ignored worktrees, exclude them from recursive tooling, record branches/base SHAs, and prove no shared dirty path was copied. |
| BASE-01 | Dated pure game baseline | G/game | P0 | **ACCEPTED** | — | `G-BASE-01` | `EV-GAME-PURE-20260801` | — |
| AUT-01 | Plan parser, validator, lease CAS, and minimal dispatcher — TODO `A1` | G/game | P0 | **BLOCKED** | CTL-03 | `G-AUT-01` | — | Implement the §4 command/schema contract and mutation-check invalid states. |
| AUT-02 | Gate DAG, aggregate verifier, resumable structured evidence — TODO `A2` | G/game | P0 | **BLOCKED** | AUT-01 | `G-AUT-02` | — | Implement direct-argv execution, fingerprints, independent-gate continuation, artifacts, and promotion rules. |
| BLD-01 | Singular tracked build graph, enforced locks, cache policy, double-build/dist guard — TODO `A3` | O/game | P0 | **BLOCKED** | CTL-03 | `G-BLD-01` | — | Remove the `tmp`/network/global-tool/floating-compiler dependencies and make all generated checks mandatory. |
| AUT-06 | Public diagnostics and owned-process browser scenario runner — TODO `A3` | G/game | P0 | **BLOCKED** | AUT-02, BLD-01 | `G-AUT-06` | — | Add versioned diagnostics/readback and source/package scenarios that fail on wrong build, errors, darkness, or disallowed software adapters. |
| AUT-08 | Cross-harness self-tests and mutation fixtures | G/game | P0 | **BLOCKED** | AUT-01, AUT-02, AUT-06, BLD-01 | `G-AUT-08` | — | Prove every failure/retry/resume/cleanup/dist/browser branch named in §4. |
| AUT-07 | Shared CI plus manual hardware release lane | O/game+pixeldart | P1 | **BLOCKED** | AUT-08 | `G-AUT-07` | — | Make CI call the same profiles, pin inputs/actions, upload artifacts always, and require hardware evidence for release. |
| BASE-02 | Truthful deterministic packaged artifact | O/game | P0 | **BLOCKED** | AUT-02, AUT-08, BLD-01 | `G-BASE-02` | — | Build twice, compare trees, replace `dist/web` once, and prove tracked dist exactly represents committed inputs. |
| BASE-03 | Dev/package browser baseline | G/game | P0 | **BLOCKED** | AUT-06, AUT-08, BASE-02 | `G-BASE-03` | — | Prove both builds reach 120 frames with build/adapter/readback/input evidence and no uncaught or stale-bundle fault. |
| BASE-04 | Pixeldart full static/size gate | R/pixeldart | P0 | **READY** | CTL-02 | `G-BASE-04` | — | After the active R packet yields, split the two oversized tests or ratify a test-only cap; run exact-set format/analyze/test/boundary/size/shader checks. |
| DOC-01 | Supporting-document reconciliation | O/docs+game | P2 | **BLOCKED** | CTL-01 | `G-DOC-01` | — | Repair handbook/README/package/TTS/asset references without adding live status outside this file. |
| PERF-01 | Supported browser/adapter and measured payload/frame/resource budget | O+G/game | P1 | **BLOCKED** | BASE-03 | `G-PERF-01` | — | Record target hardware/engines and binary CPU/GPU p50/p95, draw, triangle, texture, live-resource, warm-up, and package ceilings before final dressing. |

### Pixeldart completion

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REN-00 | RP-0 single renderer tree | R/pixeldart+game | P1 | **ACCEPTED** | — | `G-REN-00` | `EV-RP0` | — |
| REN-01 | RP-1 skip-path draw assertions | R/pixeldart | P1 | **ACCEPTED** | REN-00 | `G-REN-01` | `EV-RP1` | — |
| REN-02 | RP-2 `TextureStore` | R/pixeldart | P1 | **ACCEPTED** | REN-00 | `G-REN-02` | `EV-RP2` | — |
| REN-03A | RP-3 parameterized post-chain/capability patch | R/pixeldart | P0 | **ACTIVE** | REN-01, REN-02 | `G-REN-03A` | `LEASE-RP3-A` | Audit and finish only the five leased files; mutation-test feature vocabulary/parameter propagation, then hand off without broad formatting. |
| REN-03B | RP-3 resource assembler and owns-zero installation | R/pixeldart | P0 | **BLOCKED** | BASE-04, REN-03A | `G-REN-03B` | — | Build declared groups only; excluded groups create zero programs, targets, passes, or store-owned resources. |
| REN-03C | RP-3 profile matrix, atomic reconfigure, browser A/B | R/pixeldart | P0 | **BLOCKED** | REN-03B | `G-REN-03C` | — | Cover minimal/full/invalid combinations and resource counts across repeated configure/dispose cycles. |
| REN-04 | RP-4 fixed 384×216 internal-target policy | R/pixeldart | P1 | **BLOCKED** | REN-03C | `G-REN-04` | — | Ratify the sizing matrix, then prove resize/DPR/NEAREST behavior for every scene/history/post target. |
| REN-05 | RP-5 default-off vertex-lighting program variant | R/pixeldart | P1 | **BLOCKED** | REN-04 | `G-REN-05` | — | Compile/install it only for selected profiles; produce clean/on A/B. Shipping default remains off unless `DEC-RP5` is accepted. |
| REN-06 | RP-6 pinned determinism and live reduced motion | R/pixeldart | P1 | **BLOCKED** | REN-05 | `G-REN-06` | — | Pin time/seed/input/epoch/history and prove two identical 120-frame sequences plus measurable motion reduction. |
| REN-07 | RP-7 fog/debug/comfort contract | R/pixeldart | P1 | **BLOCKED** | REN-06 | `G-REN-07` | — | Add fog-factor inspection and pass the 600-frame luminance/NaN/mostly-black/photosensitivity probes. |
| REN-08 | RP-8 public `SceneRenderer` lifecycle facade | R/pixeldart | P1 | **BLOCKED** | REN-07 | `G-REN-08` | — | Prove exact ownership, atomic between-frame configure, stale-encoder rejection, dispose-to-baseline, resize, loss, and restore. |
| REN-09 | RP-9 optional extras | R/pixeldart | P3 | **DEFERRED** | — | `G-REN-09` | — | Only an explicit post-required-path owner selection creates a new packet. |

The renderer queue is intentionally serialized. Design notes and isolated fixtures
may be prepared elsewhere, but only one R packet integrates shared demo/pipeline/
lifecycle files at a time.

### Assets, house art, voice, and audio

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AST-01A | Tracked asset catalogue/fetch/licence foundation — TODO `Q18b` | C/game | P0 | **BLOCKED** | CTL-03 | `G-AST-01A` | — | Move machine truth/fetching out of `tmp`, define exact catalogue↔manifest↔filesystem checks, pin current bytes, and ship full licence texts. |
| ART-00 | Late-Victorian art bible and room bill of materials — PLAN §20.0, TODO `Q18b` | C/game | P1 | **BLOCKED** | AST-01A | `G-ART-00` | — | Turn each room identity into required/optional categories, quantity bands, dimensions, material palette, hero/story exclusions, and search terms. |
| ART-01A | Scout architecture/structure candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01A` | — | Record at least 50 viable trim/stair/fireplace/window/door/structural candidates in the leased fragment with original-page licence evidence. |
| ART-01B | Scout furniture/fixtures candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01B` | — | Record at least 50 tables, stools, chairs, beds, storage, range, bath, washstand, lighting, and utility candidates. |
| ART-01C | Scout decor/clutter candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01C` | — | Record at least 50 paintings/frames, books, clocks, crockery, bottles, textiles, tools, coal, paper, and personal-effect candidates. |
| ART-01D | Curate and pin the coherent shipped collection | C/game | P1 | **BLOCKED** | ART-01A, ART-01B, ART-01C | `G-ART-01D` | — | Score period fit, silhouette, room purpose, licence, format/material cases, size, reuse, and edit cost; accept roughly 80–120 without category holes. |
| AST-02A | Representative 30-asset normalization/QMSH pilot and format recommendation — TODO `Q18b` | C/game | P1 | **BLOCKED** | ART-01D | `G-AST-02A` | — | Harden deterministic OBJ/material/texture handling against selected cases, measure v1 expansion, and prototype/test v2 only when measured data predicts a budget breach. |
| AST-02B | Incremental bulk normalization/conversion/turntable producer | C/game | P1 | **BLOCKED** | AST-02A, PERF-01 | `G-AST-02B` | — | Apply the ratified payload/resource decision, then implement hash-keyed atomic `models.dart` commands, multi-material descriptors, corruption fixtures, changed-only builds, and two-cold-run byte equality. |
| ART-02 | Modular late-Victorian architectural kit — TODO `Q18c` | C/game | P1 | **BLOCKED** | ART-01D, AST-02A | `G-ART-02` | — | Build/normalize trim, architraves, reveals, cornices, fireplaces, alcoves, stair components, panels, and transitions with measured snap/variant rules. |
| ART-03 | Renderer-neutral base room compositions and collision proxies — TODO `Q18c`, `Q18d` | C+G/game | P1 | **BLOCKED** | ART-02, GAM-00 | `G-ART-03` | — | Author eight proxy layouts, focal compositions, clearances, visibility groups, simple collision policies, and fixed approval cameras before full dressing. |
| ART-04 | Full model conversion and authored house dressing — TODO `Q18d` | C/game | P1 | **BLOCKED** | AST-02B, ART-03, INT-03 | `G-ART-04` | — | Land 80–120 reusable models and 250–400 purposeful placements with coherent room identity, shared resources, LOD/visibility groups, and no procedural spray. |
| ART-05A | Furnished-house navigation, interaction, contact-sheet, and performance proof | C+G/game | P1 | **BLOCKED** | ART-04, INT-05, PERF-01 | `G-ART-05A` | — | Sweep all routes/interactions, reject portal/story overlaps, report per-room-pair draws/triangles/materials/texture bytes, and review clean-daylight contact sheets. |
| ART-05B | Q24-aware detail rebuild and evidence preservation | C+G/game | P1 | **BLOCKED** | ART-05A, GAM-02 | `G-ART-05B` | — | Prove each house override rebuilds affected detail/collision consistently without moving, hiding, or invalidating authored corroborators. |
| AST-03 | Licensed door/knock/footstep/ambience vocabulary | C/game | P1 | **BLOCKED** | AST-01A | `G-AST-03` | — | Source/author, pin, measure, manifest, and map deterministic named families and surface/door variants. |
| AUD-01 | Non-vacuous frozen VO plan/checker — TODO `Q30`, `A2` | C/game | P0 | **BLOCKED** | CTL-03 | `G-AUD-01` | — | Add pure `--plan-json`, nonempty exact plan↔clip-manifest↔files checks, source/settings digests, decode/audio metadata, and empty/extra/silent/stale fixtures. |
| AUD-02 | Final visitor-only VO corpus | C/game | P1 | **BLOCKED** | AST-01A, AUD-01 | `G-AUD-02` | — | Freeze the queue hash, render missing units in bounded batches, inspect the cue/tone/set matrix, pin outputs, and derive truth from the plan—not a hand-maintained count. |
| AUD-03A | Deterministic semantic audio event/runtime contract | G/game | P1 | **BLOCKED** | GAM-00 | `G-AUD-03A` | — | Define logical keys, listener/room snapshots, source position, portal occlusion, deterministic variants, music/mute/gesture state, and pure event tests using fixtures. |
| AUD-03B | Final voice/spatial/music/knock/footstep browser wiring | C+G/game | P1 | **BLOCKED** | AST-03, AUD-02, AUD-03A, BASE-03 | `G-AUD-03B` | — | Wire canonical events to content and measure near/far/open/closed, fallback, user gesture, mute/focus, and visitor coverage without per-frame filter churn. |
| AST-01B | Final strict shipped-asset reconciliation | C+O/game | P0 | **BLOCKED** | ART-04, AST-03, AUD-02, BLD-01 | `G-AST-01B` | — | Require exact nonempty catalogue↔runtime manifest↔filesystem equality, hashes/licences/generated provenance, no unverified orphan, and offline build/boot. |

### Game completion

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAM-01 | Existing pure simulation spine | G/game | P1 | **ACCEPTED** | — | `G-GAM-01` | `EV-GAME-PURE-20260801` | — |
| GAM-00 | Save-v2 migration plus renderer-neutral domain/presentation/audio snapshots — TODO `GAM-00` | G/game | P0 | **BLOCKED** | CTL-03, GAM-01 | `G-GAM-00` | — | Version atomic saves and freeze immutable facts/events before weather, rupture, Q24, audio, and adapters compete for the same state. |
| DEC-Q24-00 | Q24 option packet with diagrams, data/collision/render/save consequences | O+G/game | P1 | **BLOCKED** | ART-00, GAM-00 | `G-DEC-Q24-00` | — | Present observable, deniable implementations for the three unresolved beats; do not code the choices. |
| GAM-02 | Remaining Q24 house overrides and persistence — amended `Q24` | G/game | P1 | **BLOCKED** | DEC-Q24-17, DEC-Q24-18, DEC-Q24-20, GAM-00 | `G-GAM-02` | — | Implement all five as unobserved canonical overrides with data/render/collision/interaction/save fixtures. |
| GAM-03A | Pure draught, mantle economy, and semantic light/audio events — amended `Q20` | G/game | P1 | **BLOCKED** | GAM-00 | `G-GAM-03A` | — | Make one door/portal-derived draught stream drive logical flame/light/shadow/mote/hiss consumers without renderer handles. |
| GAM-03B | Pixeldart gaslight/draught/damp presentation | G+R/game | P1 | **BLOCKED** | GAM-03A, INT-04 | `G-GAM-03B` | — | Prove daylight/gaslight/open/closed A/B, gas cost, warmth/locality, zero-distance safety, and reduced-motion behavior. |
| GAM-04A | Pure 21-day weather/daylight/temperature/breath schedule — amended `E11` | G/game | P2 | **BLOCKED** | GAM-00 | `G-GAM-04A` | — | Author deterministic daylight length, rain, outside/room temperature and breath triggers; save/resume and seed fixtures must agree. |
| GAM-04B | Pixeldart weather/light/breath presentation | G+R/game | P2 | **BLOCKED** | GAM-04A, INT-04 | `G-GAM-04B` | — | Show three time colours, rain locality, shortening days and cold-room breath without obscuring play or violating comfort. |
| GAM-05A | Append-only mantle history and earned rupture sequence state — amended `E12` | G/game | P1 | **BLOCKED** | GAM-00 | `G-GAM-05A` | — | Persist first-light order across 21 days and model the six-step ending/portal sequence with no runtime handles or early trigger. |
| GAM-05B | Pixeldart rupture presentation/portal override | G+R/game | P1 | **BLOCKED** | GAM-05A, INT-04 | `G-GAM-05B` | — | Prove six legible ordered stages, intact geometry, wrong portal connection, personal light-out order, no spike, and reduced motion. |
| GAM-08A | State-driven tape/audio degradation contract — amended `E9` | G/game | P1 | **BLOCKED** | GAM-00 | `G-GAM-08A` | — | Derive named video/audio weights and one post-drift tracking event from week/exhaustion/isolation, with save and reduced-motion fixtures. |
| GAM-08B | Pixeldart VHS/history plus WebAudio tape presentation | G+R/game | P1 | **BLOCKED** | GAM-08A, INT-04 | `G-GAM-08B` | — | Prove individually switchable chroma/jitter/noise/dropout/ghosting and bandwidth/wow/hiss, mostly-clean restraint, fair heartbeat, and measured cost. |
| GAM-06 | Deterministic 21-day scenario/save/ending runner — TODO `GAM-06` | G/game | P0 | **BLOCKED** | GAM-00 | `G-GAM-06` | — | Run same-seed byte equality, three ending fixtures, Days 3/8/14/20 resume, arrival/tier/event coverage, and degenerate-economy no-soft-lock checks. |
| CNT-01 | Runtime content consumers and examination seams | G/game | P1 | **BLOCKED** | GAM-00 | `G-CNT-01` | — | Wire documents/records/street/nights, placed-object raycast examination, Day-17 citation, Day-19 replay, journal return, and second-run text through canonical APIs. |
| CNT-02 | Days 8–21 drift/content coverage and reachability | G/game | P1 | **BLOCKED** | CNT-01, GAM-06 | `G-CNT-02` | — | Author/validate remaining drift behavior and prove every intended content unit has a reachable consumer in deterministic full-run summaries. |
| GAM-07 | Keyboard/focus/text-scale/reduced-motion/a11y browser suite | G/game | P1 | **BLOCKED** | BASE-03 | `G-GAM-07` | — | Exercise every surface, pointer-lock recovery, door equivalence, zoom/scale, semantics, traps/escape, and comfort through real input. |

### Renderer/game convergence

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INT-00 | Freeze legacy web/UI baseline and hand `web/main.dart` from G to R | O/game | P0 | **BLOCKED** | ACC-01A, GAM-07 | `G-INT-00` | — | Record the accepted baseline SHA/scenarios, require no active G lease on the entrypoint, then grant R the exact adapter write set without reopening UI scope. |
| INT-01 | RV-11 game renderer adapter and `?renderer=next` switch, legacy default | R/game | P1 | **BLOCKED** | GAM-00, INT-00, REN-08 | `G-INT-01` | — | Add the path dependency and map immutable snapshots behind unchanged/documented game seams; smoke both backends. |
| INT-02 | RV-13A representative QMSH/material asset bridge | C+R/pixeldart | P1 | **BLOCKED** | AST-02A, REN-08 | `G-INT-02` | — | Load/draw/release/restore one accepted multi-part model with provenance and exact resource counts, then hand ownership back to R. |
| INT-03 | RV-10 representative furnished house route | R/game | P1 | **BLOCKED** | ART-03, INT-01, INT-02 | `G-INT-03` | — | Render hall→kitchen→living→hall→landing→bedroom with proxy architecture/furniture and prove apertures agree with interaction/collision. |
| INT-04 | RV-12 renderer-neutral presentation adapter | R/game | P1 | **BLOCKED** | GAM-03A, GAM-04A, GAM-05A, GAM-08A, INT-03 | `G-INT-04` | — | Map camera/environment/post/weather/tape/rupture snapshots into pixeldart with no duplicated simulation or audio logic. |
| INT-05 | RV-13B full production scene/asset/transient/light aggregation | R/game | P1 | **BLOCKED** | ART-04, GAM-03B, GAM-04B, GAM-05B, GAM-08B, INT-04 | `G-INT-05` | — | Pass representative Days 1–3 on pixeldart in dev/package with stable resource counts, no unexplained frame allocation, and no renderer/audio coupling. |
| INT-06A | Complete next-renderer preview | R+O/game | P0 | **BLOCKED** | INT-05 | `G-INT-06A` | — | Keep legacy default; expose documented preview/backend diagnostics and freeze an acceptance candidate. |
| INT-06B | Make next default while retaining legacy rollback; observe two RC matrices | O/game | P0 | **BLOCKED** | ACC-01B, ACC-02, ACC-03 | `G-INT-06B` | — | Switch default in a separate commit, retain rollback query/deployment point, and accept two consecutive unchanged-scope matrices. |
| INT-06C | Separate legacy renderer deletion | R+O/game | P0 | **BLOCKED** | INT-06B | `G-INT-06C` | — | Remove old renderer/dead flags/dependencies only, then rerun static, browser, package, save, and rollback-point smoke. |

### Final acceptance and release

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACC-01A | Legacy Days 1–3 dev/package baseline | G/game | P0 | **BLOCKED** | BASE-03 | `G-ACC-01A` | — | Run the unchanged critical route now on legacy and freeze scenario/actions/assertions/artifacts. |
| ACC-01B | Next-backend Days 1–3 parity | G+R/game | P0 | **BLOCKED** | ACC-01A, INT-06A | `G-ACC-01B` | — | Replay the frozen route in dev/package; accept only approved visual/perf differences and identical simulation/input/save outcomes. |
| ACC-02 | Full 21-day/three-ending/second-run player proof | G/game | P0 | **BLOCKED** | ART-05B, CNT-02, GAM-02, GAM-04B, GAM-05B, GAM-06, INT-06A | `G-ACC-02` | — | Combine pure fixtures with representative browser transitions and prove M4 without dead content, state loss, or soft-lock. |
| ACC-03 | Presentation/audio/accessibility/comfort/performance proof | G+C+R/game | P1 | **BLOCKED** | ART-05A, AUD-03B, GAM-03B, GAM-07, GAM-08B, INT-06A, PERF-01 | `G-ACC-03` | — | Run isolated A/B, real-adapter/audio, 600-frame, keyboard/focus/text/reduced-motion, resource, and package parity gates. |
| REL-00 | All pre-release required-scope closure audit | O/all | P0 | **BLOCKED** | ACC-01B, ACC-02, ACC-03, AST-01B, AUT-07, BASE-01, DOC-01, INT-06C | `G-REL-00` | — | Have the plan validator reject any non-deferred P0/P1/P2 row other than REL-00, REL-01, REL-02, and REL-03 without accepted evidence or an explicit owner waiver. |
| REL-01 | Clean-checkout offline release candidate | O/game | P0 | **BLOCKED** | REL-00 | `G-REL-01` | — | Enforce locks, build twice, compare dist, serve offline, clear/corrupt/restore saves, run endings/second run, and prove no production source maps. |
| REL-02 | Vercel prebuilt deployment and production smoke | O/game | P1 | **BLOCKED** | REL-01 | `G-REL-02` | — | Install CLI, link/pull safely, emit the exact production prebuilt artifact, deploy it, and verify build ID, assets, headers, saves, offline/cache behavior, and logs. |
| REL-03 | Owner ship decision/tag/release | O+Owner/all | P0 | **BLOCKED** | REL-02 | `G-REL-03` | — | Review required closure, waivers, limitations and rollback; release only the exact accepted candidate. |

### Evidence index

| Evidence | Scope and location |
| --- | --- |
| `EV-PLAN-LOCAL-20260801` | Local candidate only: master/PLAN/TODO authority notices, preserved card headings/bodies, card extraction and link/diff validation. It supports `LANDED–VERIFY`; `CTL-01` needs separate committed root/docs SHAs and a clean rerun before acceptance. |
| `EV-STATE-20260801` | Game `65f30da`, pixeldart `9ffedf4` plus the exact five dirty paths, docs `16c992e` plus PLAN/TODO dirt; preservation lease established without modifying RP-3 bytes. |
| `EV-GAME-PURE-20260801` | At game `65f30da`: analyzer green, 28 root Dart programs green, and 53 corpus tests green. It does not prove browser/package/audio/art/release scope. |
| `EV-RP0` | `tmp/RENDERER-BOARD.md` “RP-0 — consolidation”: one pixeldart tree, audited deletion, analyzer/package checks and commits recorded. |
| `EV-RP1` | `tmp/RENDERER-BOARD.md` “RP-1”: mutation-checked SSAO/bloom/DOF skip draw assertions and then-current package ladder. |
| `EV-RP2` | `tmp/RENDERER-BOARD.md` “RP-2”: `TextureStore` lifecycle/fallback fixtures and hardware-ANGLE browser confirmation. |

Historical narrative is not automatically promotable evidence. `AUT-02` backfills
structured records only where commands, SHAs, inputs, and proof can be
reconstructed; otherwise the affected row is demoted and rerun.

---

## 6. Milestones and exit gates

Milestones are outcome gates, not calendar promises. Parallel work is encouraged;
the milestone closes only when every exit condition is evidenced.

### M0 — Canonical, reproducible baseline

- `CTL-01`, `CTL-02`, and `CTL-03` preserve and durably commit the three-repository
  state, authority cutover, active RP-3 patch, and isolated lane worktrees.
- `AUT-01`, `AUT-02`, `AUT-06`, and `AUT-08` prove dispatch, evidence, browser,
  resume, failure, overlap, and cleanup behavior rather than merely describing it.
- `BLD-01` provides one clean-clone tracked build graph with enforced locks and no
  ignored-`tmp`, floating-toolchain, global-tool, or release-network dependency.
- Game and pixeldart static ladders are green.
- The committed release is rebuilt from HEAD and reproduces cleanly.
- Dev and packaged builds each run 120 frames with real adapter proof, public
  diagnostics, screenshot/readback, no console/page/GL exception, and no stale
  bundle.
- CI or one aggregate command makes partial verification difficult.

### M1 — Pixeldart is a reusable renderer

- `REN-03A`, `REN-03B`, `REN-03C`, and `REN-04` through `REN-08` are accepted in
  their serialized integration order.
- Profile exclusion owns zero programs/targets/passes/draws.
- Fixed internal resolution and resize/DPR behavior are explicit and tested.
- Vertex lighting remains default-off until owner ratification.
- Time/seed/history are deterministic; reduced-motion and comfort behavior are
  live and measured.
- `SceneRenderer` has exact lifecycle/configure/dispose/encoder/context-loss
  semantics and complete diagnostics.

### M2 — Pixeldart powers the game without a silent rewrite

- The curated collection drove the importer; a representative multi-part licensed
  model completes source→normalize→QMSH→descriptor→manifest→GPU end to end.
- `INT-00` through `INT-06A` pass in dependency order; final default/retirement is
  separately gated by `INT-06B` and `INT-06C` after acceptance.
- Legacy and new backends remain switchable until parity is accepted.
- The production switch has browser, pixel/readback, input, audio, performance,
  resize, context-loss, packaged, and rollback evidence.
- The legacy renderer and duplicate flags are removed only after acceptance.

### M3 — Days 1–3 are a complete game

A player can, in both source and packaged builds:

1. boot through authored text and asset data;
2. walk all eight rooms, stairs, and real door apertures without clipping;
3. operate canonical doors, shutters, and paid gas mantles;
4. hear/read the Day 1–3 broadcasts and visitors;
5. write, re-read, lock, and cite journal entries;
6. sleep and observe a protected note versus a plausible drift;
7. receive one genuine social confirmation and one contradiction; and
8. do all of this without a dark/flickering frame, stale build, uncaught error,
   inaccessible modal, or broken save.

### M4 — The full 21-day simulation is deterministic and completable

- Two identical seed/choice runs produce byte-identical event/state summaries.
- Three authored fixtures reach the three endings.
- Saves at Days 3, 8, 14, and 20 resume state-identically, including visitor,
  house, difficulty, audio-relevant, and rupture-history state.
- All 22 visitors, 74 arrivals, intended tiers, ambient notices, night events,
  records, street text, and endings have reachable runtime consumers.
- Q24 has all five changes or explicit owner waivers.
- Hour, gas, ration, sleep, scrutiny, exhaustion, and isolation cannot soft-lock
  the run under degenerate choices.
- The intended fact—and only that fact—crosses into the second run.

### M5 — Content, voice, and assets are truthful

- Final visitor VO queue, files, manifest, and runtime references agree.
- All voice cues/tones/sets, new speakers, drift-choice parity, loudness, peak,
  duration, and deterministic reuse checks pass.
- Knocks, footsteps, ambience, music, IR, textures, fonts, VO, and every shipped
  model are reachable and licensed.
- Every shipped asset has source, licence, hash, path, and purpose; full licence
  texts ship; strict audit passes without hiding debt behind orphan allowances.
- The curated house contains roughly 80–120 reusable models and 250–400 authored
  placements, with the room identities and architectural kit from §2/PLAN §20.0;
  candidate, accepted, rejected, modification, and provenance records remain
  reproducible rather than disappearing into an artist's download folder.
- Furnished-house sweeps prove portals, stairs, story objects and interactions stay
  reachable; fixed contact sheets and per-room-pair resource reports are accepted
  in the clean daylight profile.
- A network-disconnected clean build/boot reaches a complete playable run.

### M6 — Presentation serves play and remains comfortable

- Q20, E10, E11, E9, and E12 are state-driven and accepted on the final backend.
- Each visual/audio feature has an isolated on/off comparison and a measured cost.
- Temporal effects never alter simulation truth or erase information.
- Keyboard, focus, pointer-lock recovery, text scaling, reduced motion, and
  photosensitivity gates pass.
- On the named real adapter: CPU/GPU frame budgets, draw/resource counts, warm-up,
  measured frame set, and variance are recorded rather than inferred.
- No 600-frame run contains a NaN/inf uniform, mostly-black frame, or dangerous
  luminance collapse.

### M7 — Release candidate and deployment are reproducible

- `dart run tools/verify.dart --profile release` from clean HEAD enforces locks,
  content/generator gates and two fresh builds, then proves committed `dist/web`
  has the exact path/size/hash tree and no production source maps.
- Fresh storage, corrupt/previous save recovery, resume, all endings, and second
  run work in the packaged build.
- Chromium and at least one independent WebGL2 browser pass the supported matrix,
  or an explicit compatibility limitation is recorded before ship.
- Offline boot and strict asset/licence audit pass.
- The production-prebuilt artifact and deployed candidate serve the same build ID
  and hashed application/assets; stable resource URLs revalidate, immutable URLs
  are genuinely fingerprinted, and runtime logs contain no missing-file/error path.
- Release notes name known limitations and the exact rollback point.

---

## 7. Verification matrix

### Static and deterministic checks

After `AUT-01`/`AUT-02`/`BLD-01`, the canonical entry points are:

```powershell
dart run tools/plan.dart validate
dart run tools/verify.dart --profile quick
dart run tools/verify.dart --profile full --json
dart run tools/verify.dart --profile renderer --json
dart run tools/verify.dart --profile release --json
```

Until those tasks land, the dated bootstrap audit remains explicit rather than
pretending the aggregate command exists. Run from the game root unless shown:

```powershell
dart pub get
dart analyze
Get-ChildItem tools -Filter 'test_*.dart' | Sort-Object Name | ForEach-Object {
  dart run $_.FullName
  if ($LASTEXITCODE -ne 0) { throw "failed: $($_.Name)" }
}
python -m pytest scripts/test_corpus.py -q
dart run tools/asset_audit.dart --strict
npm run build:ship
```

```powershell
Set-Location external/pixeldart
dart pub get
dart format --output=none --set-exit-if-changed .
dart analyze
dart run tools/renderer/test_all.dart
dart run tools/renderer/check_boundary.dart
dart run tools/renderer/check_sizes.dart
dart run tools/renderer/shaders.dart --check
```

The current expected result is green except for the explicitly open asset-strict
and pixeldart-size rows. A known red gate stays red in the register; it is never
omitted from a report. Once `BLD-01` commits the application lock, every canonical
profile uses `dart pub get --enforce-lockfile`; the unpinned bootstrap command is
not release evidence. Discovery must assert the expected exact set and a nonzero
minimum for tests, assets, clips, generators, and browser scenarios.

### Browser evidence tiers

| Tier | Required evidence |
| --- | --- |
| Boot | Correct build identity, boot phase, frame count, current day/hour/room, canvas size, WebGL adapter, no console/page/GL error. |
| Visual | Named seed/state/profile, offscreen readback or screenshot, A/B controls, what changed and what did not, no stale cache. |
| Interaction | Real keyboard/mouse/pointer-lock events, focus state, route, one-action-per-press behavior, modal escape/recovery. |
| Persistence | Fresh, active, previous, corrupt, and version-migration slots; state comparison after reload at named days. |
| Audio | User-gesture start, selected clip/event, measured samples/loudness/occlusion, mute/focus behavior, intentional fallback. |
| Accessibility | Keyboard-only completion, focus order/traps, semantic names/roles, zoom/text scale, reduced motion, photosensitivity. |
| Performance | Named hardware/browser/adapter/profile/resolution, warm-up, at least 600 measured frames, CPU/GPU percentiles, draws, triangles, and live/peak resources. |
| Package/deploy | Clean build ID, immutable file hashes, offline route, cache headers, fresh-storage run, runtime logs, and source/package parity. |

Headless software rendering is useful for functional checks but cannot support a
hardware performance claim. A server answering a port is not proof the game booted.

### Evidence record format

Every status promotion cites structured evidence with at least this compact view:

```text
EV-YYYYMMDD-NN — <outcome>
Repos: game <sha>; pixeldart <sha>; docs <sha>
Task/spec: <task ID, gate IDs, task-spec digest, sorted input digest>
Command/route: <sanitized argv, URL, seed, profile, and hardware where relevant>
Result: <measured pass/fail/flaky/blocked, attempts, duration>
Artifacts: <paths or CI URL plus SHA-256s of logs/screenshots/readbacks/reports>
Proves: <the exact gate closed>
Does not prove: <important adjacent scope still open>
```

Detailed renderer evidence may remain in `tmp/RENDERER-BOARD.md`, but this file
owns the resulting canonical status. An accepted implementation commit is clean;
the later evidence/master commit may change HEAD, so evidence validity follows the
recorded source/input/gate fingerprint rather than a naive equality to current
HEAD. Dirty candidate runs are diagnostic only.

---

## 8. Release workflow

1. Start from clean, recorded states in all three repositories; never fold the
   pixeldart gitlink bump into an unrelated gameplay commit.
2. Enable the game hook once per clone:

   ```powershell
   git config core.hooksPath .githooks
   ```

3. Run `dart run tools/plan.dart validate`, the verifier self-tests, and
   `dart run tools/verify.dart --profile release --json`. This profile enforces
   committed locks, exact test/content sets, strict asset/VO truth, two fresh
   builds, dist equality, and browser/package gates.
4. Inspect the candidate manifest and `dist/web` diff. O alone promotes generated
   output, reruns the same input fingerprint, and records compact evidence.
5. Run packaged local acceptance on `:8081`, with cache disabled and fresh storage.
6. The Vercel CLI is not installed. Install it before deployment:

   ```powershell
   npm i -g vercel
   ```

   Link/pull environment safely without printing or committing secrets. The
   planned `npm run build:prebuilt:production` must consume the already verified
   production/no-source-map build and emit `.vercel/output`; it may not silently
   compile a different JS/non-WASM candidate. Deploy exactly that output with
   `vercel deploy --prebuilt --prod` and retain its deployment ID.
7. Use the CLI to inspect deployment/logs, then smoke the URL against the expected
   build ID, file hashes, stable-versus-fingerprinted cache policy, fresh storage,
   restore, offline behavior, and runtime logs.
8. Tag/release only after REL-03. Never use `--no-verify`, force-push, or rewrite a
   pushed release packet.

Vercel currently serves committed `dist/web`; until BASE-02 is accepted, a deploy
would knowingly ship stale behavior.

---

## 9. Risk register

| Risk | Current signal | Mitigation / trigger |
| --- | --- | --- |
| Active RP-3 work is overwritten | Five dirty pixeldart files, owner not recorded | CTL-02 before any renderer edit; explicit lease and write set. |
| A green source tree ships stale code | Hook unset; dist predates three commits | BASE-02 plus clean-rebuild CI; package identity in browser diagnostics. |
| Pure tests are mistaken for a finished game | 28+20 checks pass while browser/audio gates are open | Status split between foundations and player-facing outcomes; BASE-03 and milestone gates. |
| TTS check passes without checking speech | Zero manifest VO keys means zero checked clips | AUD-01 frozen nonempty plan/file/clip-manifest equality and failure fixtures. |
| Assets are legally or operationally unverifiable | No hashes, two missing licences, 292 allowed orphans | AST-01A tracked foundation, then AST-01B exact strict/offline reconciliation with no ship waiver. |
| A large asset hunt becomes an untraceable download folder | House needs 150+ candidates and dozens of sources | Disjoint candidate catalogues, original-page licence capture before download, lead-only promotion, hash-addressed cache, and room BOM. |
| More house detail breaks play or performance | 80–120 models and 250–400 placements share an eight-room chamber game | Proxy layouts first; explicit collision classes; route/interaction sweep; room-pair budgets; clean-daylight contact sheets; Q24-aware rebuild test. |
| Renderer migration becomes a big-bang rewrite | No current path dependency; legacy still live | Adapter sequence, preview, two-RC default observation, separate deletion, and rollback through INT-06B. |
| Standalone renderer acceptance is conflated with game acceptance | Pixeldart demo is advanced; game still uses legacy backend | Repo/lane on every evidence record; repeat M3/M4 after `INT-06A` and again after `INT-06C`. |
| Q24 semantics are guessed | Three authored changes lack implementation decisions | Owner decision packet before code; record exact world/collision/render meaning. |
| Audio APIs remain dead code | No listener/playAt/music call sites | AUD-03A deterministic event contract followed by AUD-03B measurable content/browser wiring. |
| Visual polish hides broken geometry/state | Historical dark/flicker and pass-divergence bugs | Clean daylight/gaslight controls, pass parity, feature-by-feature A/B. |
| Accessibility is deferred until too late | Door surface and focus flow lack complete evidence | GAM-07 before final aggregation; repeat on final backend. |
| Supporting docs recreate competing truth | Several boards and TODOs carry stale status | Master-only status protocol in §11; supporting docs hold spec/history only. |
| Build changes compiler/dependencies under failure | Ignored app lock; global tools; stable fallback | BLD-01 committed locks, enforced dependency resolution, pinned tools/compiler, release-mode fail-closed behavior. |

---

## 10. Decisions still required

Decision IDs are dependency nodes but are not implementation rows, so each ID
appears exactly once here. `PENDING` does not satisfy a task dependency. `DEFAULT`
is sufficient only when the dependent task explicitly says the conservative
default is allowed; an owner may later replace it with a dated `RECORDED` choice.

| ID | Status | Prerequisite | Owner/date | Needed by | Options / consequence | Current rule or unblock condition |
| --- | --- | --- | --- | --- | --- | --- |
| `DEC-Q24-17` | **PENDING** | DEC-Q24-00 | Owner / — | GAM-02 | Intermittent physical fourth landing; perceptual/lighting proxy; explicit waived beat | The packet must show how the count is observed and how portals/collision/save behave; never fake an invisible scalar. |
| `DEC-Q24-18` | **PENDING** | DEC-Q24-00 | Owner / — | GAM-02 | Window fixed in world while wall moves; window retains room-local offset; explicit waived beat | The packet must diagram both geometries and interaction/light consequences. |
| `DEC-Q24-20` | **PENDING** | DEC-Q24-00 | Owner / — | GAM-02, ART-05B | Minimal opposite-house facade/room; alternate observable exterior; explicit waived beat | The packet must supply an actually visible eleventh-window representation, not state with no rendering. |
| `DEC-RP5` | **DEFAULT** | — | Plan / 2026-08-01 | REN-05, INT-06B | Default off; opt-in PS1 profile; shipping default on after accepted A/B | Build/test the variant default-off. No owner response blocks implementation or ship; only an explicit recorded choice may enable it by default. |
| `DEC-RENDER-SIZE` | **DEFAULT** | — | Plan / 2026-08-01 | BASE-04 | Split oversized tests by fixture responsibility; or ratify a higher test-only cap | Split without deleting assertions. A cap increase needs measured rationale and owner record. |
| `DEC-SCOPE-CUT` | **DEFAULT** | — | Plan / 2026-08-01 | REL-00 | Build; waive with named player consequence; move the release target | Every non-deferred P0/P1/P2 outcome remains required until a specific owner-dated waiver replaces this default. |

A recorded decision includes owner, date, option, rationale, affected task/gate
IDs, save/content compatibility impact, and—when visual—its evidence artifact.

---

## 11. Update protocol

1. **Update status here, once.** Do not update current status in `tmp/PLAN.md`,
   `tmp/TODO.md`, renderer boards, handoffs, or package TODOs.
2. Before starting, confirm dependencies, repository, current HEAD, dirty paths,
   owner, worktree/base SHA, exact write/deny set, next action, and gate. Use the
   compare-and-swap claim once `AUT-01` exists; set exactly that row to **ACTIVE**.
3. One write set has one owner. Parallelize only disjoint work.
4. A task becomes **ACCEPTED** only with evidence for its exact observable gate.
   “Code landed,” analyzer green, or a historical checkbox is insufficient.
5. If an accepted dependency changes materially, demote affected downstream rows
   to **LANDED–VERIFY** until their gates rerun.
6. Record blockers with their unblock condition. Do not leave an ambiguous
   “partial” state; split the completed and incomplete outcomes into separate rows.
7. Preserve completed rows and decisions. Compact old evidence to an index; never
   erase why a gate was accepted or waived.
8. Detailed card/renderer logs may append concise evidence, but they must link back
   to the canonical task ID and may not invent a second critical path.
9. Re-audit this file after every renderer integration packet, schema/save change,
   required-scope decision, or release-candidate build.
10. Workers never edit canonical status as part of their feature commit. They
    return the handoff schema in §4; O validates source/input fingerprints, promotes
    compact evidence, releases the lease, and then admits the next packet.
11. `tools/plan.dart validate` is mandatory before dispatch, after a status/
    decision/dependency edit, and before release. Manual review remains required
    for art, licence meaning, owner decisions, and what evidence actually proves.

---

## 12. Preserved document map

Nothing in `tmp/` is deleted by this cutover.

| Document | Preserved value | Current limitation |
| --- | --- | --- |
| `tmp/PLAN.md` | Full design bible: 21-day arc, mechanics, house, endings, art/audio direction, invariants | §0 and dated implementation checkpoints are historical, not live status. |
| `tmp/TODO.md` | Detailed Q/E/RP card bodies, standing requirements, incident/evidence history; consumed by `tools/card.dart` | Its tables, checkboxes, and old critical paths are snapshots. |
| `tmp/GROUND_RULES.md` | Authoritative operational constraints | Wins over contradictory handbook text. |
| `tmp/HANDBOOK.md` | Verification techniques and implementation habits | Git/test/repo claims in its opening are stale pending DOC-01. |
| `tmp/RENDERER-ELEVATION-PLAN.md` | Renderer architecture, gates, adapter intent | Old paths into the removed game-tree renderer are historical. |
| `tmp/RENDERER-BOARD.md` | Detailed packet evidence and bug history | Does not own canonical task status. |
| `tmp/RENDERER-HANDOFF.md` | Renderer methodology and traps | Its last “next” statements predate RP-1/RP-2. |
| `external/pixeldart/TODO.md` | Useful package backlog | Several completed gaps remain unchecked; not the game ship board. |
| `tmp/TTS-PLAN.md`, `tmp/AUDIO-CUES.md` | Voice pipeline decisions, cue semantics, measurement lessons | Counts/status and some schema wording are stale. |
| `tmp/ASSETS.md` | Generated narrative/inventory and surviving historical asset evidence | Never machine/build truth; generate it from the tracked root catalogue after the authored sourcing rationale is restored. |
| `tmp/INTENSITY-OUTLINE.md` | Pacing rationale | Predates implemented nights/endings. |
| `tmp/MANYFOLD-*` | Historical predecessor provenance | Closed; never dispatch from it. |

The goal of preservation is not to keep every old claim active. It is to retain the
reasoning, specifications, incidents, and canon while giving the project exactly
one truthful route forward.
