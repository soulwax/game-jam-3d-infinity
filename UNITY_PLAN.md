# THE QUARANTINE — UNITY GREENFIELD IMPLEMENTATION PLAN

> Status: active implementation plan for the Unity track only
>
> Track: `unity-windows` — one of two independent runtime tracks
>
> Repository audit: 2026-08-18
>
> Product authority: `external/docs/MASTERPLAN.md`
>
> Target: Unity 6.3 LTS, URP, Windows x64 first
>
> Audience: developers working directly from the plan

This plan describes creating the Unity game from an empty repository. It is not
a migration plan. No Unity scene, prefab, ScriptableObject, runtime service, or
save file is assumed to exist. The Dart/WebGL project is an algorithm and
content reference only: copy a rule when it is useful, then implement it as
small, idiomatic C# with Unity ownership made explicit.

The product is the 21-day domestic administrative horror game defined by
`external/docs/MASTERPLAN.md`.

### Track differentiation

`MASTERPLAN.md` §4.2 and DEC-004 define two *independent* runtime tracks —
`dart-web` and `unity-windows` — and this plan covers only the second. That
separation is a standing constraint on this document, not a preamble:

- **Unity owns the Unity runtime. It does not own the product.** This file may
  define Unity architecture, packet order, and Unity acceptance. Per
  `MASTERPLAN.md` §0.1, it may not redefine the product, freeze the Dart track,
  or make Dart retirement a condition of a Unity release.
- **Neither track is the other's successor.** The Dart/WebGL game running on
  Pixeldart is a valid end product. A Unity release certifies `unity-windows`
  and says nothing about `dart-web`; the reverse is equally true.
- **Either track may proceed, pause, or ship without the other.** Work here
  needs no permission from the Dart track and grants none to it.
- **Dart is a reference, not a requirement.** Copy a rule from `lib/` when it
  is useful and reimplement it as idiomatic C#. No Dart class, file layout, or
  test is a Unity obligation, and no Dart packet closes because a Unity packet
  closed.
- **Evidence never crosses tracks.** Every capture, test result, and release
  claim names `unity-windows`. A `dart-web` result cannot close a packet here
  (`MASTERPLAN.md` §9).
- **Shared content, not shared runtime.** The screenplay, corpus, and
  `assets/house/*.json` are canonical for both tracks and are consumed here
  through validated read-only exports. Runtime state, save schemas, and
  renderer configuration are per track and are never copied between them.

`MASTERPLAN.md` currently records Unity as inactive for this workspace, so
active work under this plan presumes the owner has explicitly reopened the
track. If that is not the case, this document is adaptation context and must
not pull effort off `dart-web`.

## 0. Working protocol

### 0.1 Authority order

1. `external/docs/MASTERPLAN.md` owns product intent, priorities, gates, and
   human acceptance for *both* tracks. Where this file and the masterplan
   disagree about player experience, this file is wrong and gets corrected.
2. This file owns the `unity-windows` track only: Unity categories, packet
   order, architecture, Unity acceptance, and this track's database
   synchronization. It has no authority over `dart-web` — not its scope, its
   priorities, its status, or its continued existence.
3. `text/story.screenplay` and linked corpus files remain root/Python-owned
   authoring sources; Unity consumes their validated read-only export.
4. `assets/house/*.json` own authored house, inventory, material, and sound
   data after validation.
5. Dart files named in section 3 are reference algorithms for this track, never
   authority over it — and naming one here confers no obligation on the Dart
   track in return.
6. Unity assets are generated consumers of those sources; they are not a second
   content database.
7. `external/docs/GROUND_RULES.md` remains the Git and repository-process
   authority, unchanged by anything in this plan.

Where Unity and Dart differ only because their engines, platforms, input
systems, or presentation stacks differ, record the adaptation here rather than
forcing parity in either direction (`MASTERPLAN.md` §0.1).

### 0.2 Packet lifecycle

```text
OPEN -> ACTIVE -> PARTIAL -> ACTIVE
                 -> BLOCKED -> ACTIVE
                 -> CLOSED -> ACTIVE (only after regression evidence)
OPEN/PARTIAL/BLOCKED -> DROPPED (human decision)
```

Each packet has one owner, one observable outcome, a bounded file scope, and a
production-path check. Never close a packet because a class exists or a mock
passes. Close it only when the named behaviour works in the assembled Unity
project and the required human gate is recorded.

### 0.3 Required packet fields

Keep this order in every packet. `Category` and `Subcategory` make the plan
easy to filter; the website parser surfaces them on cards while the database
stores them as visible card tags and in card details. Tags are lowercase,
comma-separated capability labels; use `none` only when a packet truly has no
cross-cutting label.

```text
ID
State
Owner
Category
Subcategory
Tags
Handles
Runbook
Depends on
Outcome
Inputs
Files
Do not touch
Steps
Checks
Evidence
Remainder
```

### 0.4 Human implementation loop

1. Pull the first `OPEN` packet whose dependencies are `CLOSED`.
2. Read the category, Dart references, packet scope, and acceptance check.
3. Create the smallest failing test or fixture that proves the behaviour.
4. Implement the direct C# path; keep domain code independent of `MonoBehaviour`.
5. Integrate it through the current bootstrap scene.
6. Run focused tests, database sync, and the applicable build check.
7. Capture a playable or inspectable result for human review.
8. Update the packet and the matching database card, then stop at the packet
   boundary.

### 0.5 Handle rules

A **handle** is a small, independently reviewable slice inside a `WARD-*`
packet. It is not a second ticket system: handles keep the implementation
sequence visible while one packet remains the atomic Kanban card and closure
unit. A handle is lowercase kebab-case and starts with its milestone prefix
(`u0-` through `u6-`).

Work one handle at a time in listed order. Record handle-level proof in the
packet Evidence field using `handle-name: command or capture path`. Do not mark
the parent packet `CLOSED` until every handle has proof and the packet-level
check passes. The planner mirrors handles to the card detail text; they are
deliberately not separate planner tags, so board filtering stays useful.

## 1. Greenfield product objective

### 1.1 Player promise

The player is a householder under quarantine, not an action hero. They hear a
cue, move through a believable house, inspect or listen at a threshold, choose
access/help/refusal/silence, write a fallible record, spend time and heat, see a
human or physical consequence, secure the house, and sleep. The record and the
house gradually disagree.

### 1.2 First playable target

The first playable build is one complete Day 1 route through a small greybox:

- boot, new run, deterministic seed, and resume;
- ground floor, one upper room, cellar access, and two functioning thresholds;
- first-person movement with collision and portal crossing;
- one visitor, one broadcast, one inspectable domestic object, and one choice;
- journal write/correct/lock flow;
- time, heat, ration, scrutiny, and sleep transition;
- text dialogue, captions, keyboard navigation, and reduced-motion mode;
- one saved consequence visible after reload.

Everything else waits behind this vertical slice.

## 2. Categories and subcategories

### 2.1 Foundation and project operations

**Subcategories:** Unity version and packages; repository layout; scenes and
bootstrap; coding rules; build profiles; CI and local setup.

Create an empty Unity project, pin the editor/package versions, add only URP,
Input System, Test Framework, UI Toolkit, Audio Mixer, and localization-ready
string support. The project must open, test, and build before game code grows.

### 2.2 Domain simulation

**Subcategories:** clock/day loop; resources; difficulty; deterministic random;
weather and surface state; consequences; ending derivation.

Use plain C# records and services called by `GameSession`. Domain time advances
only through explicit commands; `Update()` is presentation plumbing, never the
owner of story or save state.

### 2.3 Authored content and import

**Subcategories:** scenario export; dialogue corpus; house rooms; portals; inventory;
materials; soundscape; schema validation; generated Unity assets.

Source JSON/text is validated first, then converted into typed immutable
runtime data. Stable IDs are mandatory. A failed import names the ID and source
path and produces no partial asset set. Unity has no screenplay editor, story
graph editor, or authoring UI: those remain outside the game project.

### 2.4 Persistence and database synchronization

**Subcategories:** local save slots; atomic writes; recovery; project planner;
packet status; evidence; activity; conflict policy; release manifests.

Gameplay saves are local, versioned, checksummed, and recoverable. Planning
state is hosted in Postgres through the website. Unity does not connect to the
planner database at runtime; a sync command mirrors plan packets into the
private `unity-plan` project.

### 2.5 House and spatial world

**Subcategories:** coordinate scale; room graph; portal topology; stairs;
collision; focus points; physical residues; scene binding.

Build the room graph and greybox from data, then bind authored meshes by stable
IDs. A room is a playable volume with exits and acoustic portals, not merely a
scene hierarchy folder.

### 2.6 Movement and tactile interaction

**Subcategories:** first-person camera; capsule movement; stair traversal;
portal crossing; focus ray; hold/drag; door chain and letterbox; accessibility.

Player actions return typed success/rejection results. Every interaction has a
visual, audio, and journal-visible consequence or a clear reason it is not
available.

### 2.7 Story delivery and people

**Subcategories:** event schedule; visitor arrival; conversation choices;
callbacks; flags; residues; day progression; endings.

The validated scenario schedule is the only event authority. The runtime resolves
conditions and records choices; it never invents an event because a prototype
class happens to be available.

### 2.8 Journal and evidence

**Subcategories:** entries; uncertainty; corroboration; correction; lock;
night drift; citations; residue links; final record.

Journal operations are domain commands with deterministic results. UI is a
projection of the journal, not a second mutable journal.

### 2.9 UI, input, and accessibility

**Subcategories:** pause shell; dialogue; journal; inventory; settings;
captions; remapping; focus order; text scale; reduced motion; contrast.

Text-first interaction is always complete. Audio and visual effects enhance a
route but never carry required information alone.

### 2.10 Audio, voice, and acoustics

**Subcategories:** cue catalogue; portal transmission; muffle; spatial audio;
voice variants; captions; fallback; mixer snapshots.

The acoustic planner chooses a bounded route through portals. Voice is imported
only after text, timing, captions, and fallback are approved.

### 2.11 Rendering and presentation

**Subcategories:** URP baseline; period lighting; practicals; rain and wetness;
materials; camera treatment; performance profiles; rupture effects.

Start with a clean, legible period baseline. Add stylization or reflective
effects only when the player can still read rooms, objects, and thresholds.

### 2.12 Verification, telemetry, and release

**Subcategories:** EditMode tests; PlayMode tests; content fixtures; save
recovery; accessibility route; performance; Windows packaging; evidence.

Every milestone has a reproducible command, a human review artifact, and a
known-limit record. Automated checks never replace visual or experiential
approval.

## 3. Dart reference algorithms (copy the rule, not the runtime)

These files are useful algorithm references. Read the named methods, write a
small C# equivalent, and add a Unity test. Do not import Dart code, mirror its
class graph, or make Unity depend on the Dart build.

| Unity concern | Dart reference | Algorithm worth preserving |
|---|---|---|
| Session command flow | `lib/game/session.dart` — `advance`, `sleep`, `writeJournal`, `applyAuthoredEvent` | Explicit command ownership, event queue, snapshot projection |
| Save recovery | `lib/game/save_store.dart` — `write`, `read` | Versioned envelope, checksum/recovery slot, no half-written active save |
| Capsule movement | `lib/house/collision.dart` — `Capsule.move`, `_tryAxis`, `_moveOnStair` | Axis-separated collision, stair restoration, typed `MovementResult` |
| Room/portal crossing | `lib/house/collision.dart` — `portalCross`, `_crossPortal` | Crossing a passable portal changes room only after plane/bounds checks |
| Inventory validation | `lib/house/inventory.dart` — `validateAgainst`, `runtimeBounds` | Stable placement IDs, scale conversion, bounds and missing-asset checks |
| Weather impacts | `lib/sim/weather_physics.dart` — `WeatherImpactResolver.evaluate` | Swept collision, surface normal reflection, bounded restitution |
| Melt/wet state | `lib/sim/weather_physics.dart` — `WeatherSurfaceAccumulator.advance` | Deterministic accumulation/evaporation with warm-source clearance |
| Acoustic routing | `lib/engine/audio_planner.dart` — `AudioPlanner._route`, `transmission` | Bounded portal route, distance loss, closed-door muffle, deterministic gain |
| Story callbacks | `lib/story/narrative_encounter_director.dart` — `resolveEncounter`, `commitChoice` | Canonical encounter lookup, callback flags, no duplicate schedule |
| Roster integrity | `lib/story/character_roster_registry.dart` — `verifyRosterIntegrity` | Stable character IDs and referenced-line validation |
| Deterministic cues | `lib/engine/audio_planner.dart` — `AudioCueSet.select` | Seeded choice instead of random replay drift |
| Resource policy | `lib/game/session.dart` — `spendHoursAndGas`, `collectRation` | Atomic multi-resource command or no change |
| Weather profiles | `lib/sim/weather_physics.dart` — `WeatherParticleProfile.forKind` | Data-driven profile selection with bounded values |

## 4. Unity project shape

```text
unity/
  Assets/Quarantine/
    Runtime/Domain/       # pure C# rules and immutable snapshots
    Runtime/Content/      # typed imported data and validators
    Runtime/Save/         # local save store and save-schema migrations only
    Runtime/World/        # room graph, portals, scene bindings
    Runtime/Interaction/  # focus, doors, inventory, thresholds
    Runtime/Story/        # schedule, visitors, callbacks, residues
    Runtime/Audio/        # cue and portal transmission planning
    Runtime/UI/           # UI Toolkit views and input actions
    Runtime/Presentation/ # URP materials, lighting, camera, particles
    Editor/Import/        # source validation and asset generation
    Tests/EditMode/
    Tests/PlayMode/
    Content/Generated/
  Assets/Scenes/Bootstrap.unity
  Assets/Scenes/Day01Greybox.unity
  Packages/manifest.json
  ProjectSettings/ProjectVersion.txt
  Docs/Decisions/
```

Use one `GameSession` composition root in `Bootstrap`. Domain assemblies must
not reference `UnityEngine`; presentation reads immutable snapshots and sends
commands back to the session.

## 5. Canonical contracts

### 5.1 Content contract

Source files are read from explicit paths, validated with stable IDs, and
written to `Assets/Quarantine/Content/Generated`. Generated assets include a
source digest and importer version. Re-importing identical source is a no-op.

### 5.2 Domain contract

The session owns clock, resources, story flags, journal state, residues,
current room, and deterministic seed. Systems receive commands and return a
new snapshot plus domain events. No UI, audio, or scene object mutates domain
fields directly.

### 5.3 Save contract

```text
SaveEnvelope { schemaVersion, runId, seed, createdAt, updatedAt,
               payload, payloadSha256 }
```

Write a temporary file, flush, replace the active slot, and retain one recovery
slot. Reject a bad checksum or unknown schema without destroying the last good
save. Save after meaningful commands, sleep, and settings changes—not every
frame.

### 5.4 Database contract

The website is the planning database. The stable mapping is:

```text
source packet WARD-40 -> board project unity-plan -> card unity-ward-40
```

`WARD-*` IDs are implementation packet IDs — renamed from the earlier `MIG-*`
prefix, a leftover from before the project's pivot away from a Unity-migration
framing that no longer described anything real.

Source-owned card fields: title, details, checklist, owner, priority, cover,
planner tags, and packet evidence. Planner tags use the reserved `plan-` tag
namespace; manually created tags remain untouched. Board-owned fields: manual
lane position, archive state, comments, watchers, custom tags, and local view
preferences. Sync is idempotent and updates only source-owned fields. A
database failure never changes the source plan file.

### 5.5 World contract

Room IDs, portal IDs, focus IDs, inventory IDs, material IDs, sound IDs, story
event IDs, and journal entry IDs are stable across imports. Scene object names
are presentation labels only.

## 6. Database synchronization procedure

1. Parse `UNITY_PLAN.md` and validate every packet field and dependency.
2. Compute the plan digest and list changed packet IDs.
3. Upsert the private `unity-plan` project and ensure its lanes, default tags,
   and reserved `plan-*` packet tags.
4. Upsert each `unity-ward-##` card's source-owned fields.
5. Preserve lane position, comments, watchers, and user view state.
6. Record a project activity entry with the digest and changed count.
7. If any packet fails validation, abort before writing cards.
8. Retry transient database failures; never mark a packet closed from a board
   card alone.

### 6.1 Sync invariants

- The sync is a no-op when the source-owned projection is unchanged; opening
  the planner repeatedly must not create activity noise.
- A changed packet updates its title, details, checklist, owner, priority,
  cover colour, and managed state tags only.
- Lane, position, archive state, comments, watchers, custom tags, and view
  preferences belong to the board and are never replaced by source sync.
- New cards receive the next position in the lane derived from the packet
  state. Existing cards never move automatically when the source state changes.
- A successful change records one activity event containing the changed count
  and the first 12 characters of the source digest. Invalid input records no
  writes; a transient database failure may leave additive partial progress, so
  the next idempotent retry resumes it and emits no activity until complete.
- The project settings retain the full planner digest, last sync timestamp,
  changed count, and changed packet IDs so an administrator can audit the last
  mirror without inspecting every card.
- Existing cards created under the old `Unity migration plan` or `Unity
  greenfield build plan` names are renamed once to `Unity implementation
  board`; a custom project name is preserved.

### 6.2 Canonical Kanban migration

The `unity-plan` project is the only interactive task surface for this plan.
Every packet becomes one persistent `unity-ward-##` Kanban card, initially in
`Backlog`; active, blocked, and closed packets map to `In progress`, `Blocked`,
and `Done` on first sync. The card's checklist mirrors the packet steps, its
reserved planner tags mirror the packet tags, and its detail text keeps the
source contract readable without opening the Markdown file.

After the first card is created, lane and position are board-owned. Dragging,
comments, watching, due dates, and custom tags stay on the Kanban board;
source synchronization enriches the plan fields without resetting active work.
The website home route opens this board directly, so there is no separate
screenplay-like planning editor or secondary to-do view to keep in sync.

The implementation lives in
`external/project-agile-web/src/lib/server/persistence.ts` (`syncUnityPlannerCards`).
The planner route calls it on load. A future Unity editor import may consume a
checked plan export, but Unity must not write directly to Postgres.

## 7. Milestones and category exits

| Milestone | Categories | Exit |
|---|---|---|
| U0 Foundation | 2.1, 2.4 | Empty project opens, tests, builds, and syncs a plan card |
| U1 Truth | 2.2, 2.3, 2.7, 2.8 | Typed content and pure session fixture run deterministically |
| U2 Greybox | 2.5, 2.6, 2.10 | Day 1 route is navigable, inspectable, and audible |
| U3 Vertical slice | 2.9, 2.12 | Complete Day 1 route survives save/reload and human review |
| U4 Campaign | 2.7, 2.8, 2.10 | Acts I–III and consequences are schedule-driven |
| U5 Production house | 2.5, 2.11 | Rooms, lighting, materials, and audio pass human review |
| U6 Release candidate | 2.4, 2.9, 2.12 | Windows build, recovery, accessibility, and performance gates pass |

### 7.1 Milestone handoff checklist

Each milestone hands a small, inspectable package to the next one. Do not start
the next milestone on confidence alone; verify these concrete handoffs:

| Handoff | Required package | Next work may assume |
|---|---|---|
| U0 -> U1 | pinned Unity version, empty bootstrap scene, CI command, plan mirror, and source-authority map | the project opens consistently and source changes have one owner |
| U1 -> U2 | validated sample content, deterministic `GameSession` fixture, one save envelope, and event log | data and rules can be exercised without a scene |
| U2 -> U3 | Day 1 greybox route, movement/portal/focus proof, cue plan, and input shell | a player can move, act, hear, and receive feedback |
| U3 -> U4 | clean Day 1 build, reload proof, accessibility capture, known issues ranked by severity | campaign work extends a stable vertical slice |
| U4 -> U5 | replayable Act I–III fixture set, consequence audit, ending-input report | production art and voice can bind to stable story IDs |
| U5 -> U6 | approved room batches, lighting profile, performance capture, rights ledger | packaging does not need placeholder or unapproved assets |

### 7.2 Packet execution cadence

Use this cadence inside every packet, even when the packet's local steps are
shorter:

1. **Prepare:** reread the packet, dependencies, source files, and acceptance
   check; record any missing authority as `BLOCKED` before editing.
2. **Prove the gap:** add a failing focused test, importer fixture, or
   reproducible PlayMode route that demonstrates the missing behaviour.
3. **Implement the smallest path:** keep rules in plain C# and adapt them to
   Unity at the edge; avoid opportunistic refactors outside `Files`.
4. **Integrate once:** exercise the feature through `Bootstrap.unity` or the
   relevant import/build command rather than only through a unit fixture.
5. **Verify and hand off:** attach command output, digest, capture, and known
   remainder; update the packet/card only after the named check passes.

### 7.3 Free-asset intake direction

Use free assets as measurable production inputs, never as anonymous filler.
Every imported file needs a source URL, licence, download date, upstream file
name, SHA-256, intended room/usage, processing notes, and approver in
`unity/Docs/Rights/ASSET_LEDGER.csv`. Keep a copy of the licence text beside
the source file. A source page is not enough evidence; each downloaded asset
must be reviewed before it enters an import batch.

| Need | Preferred source | Use in this project | Intake rule |
|---|---|---|---|
| PBR surfaces, small domestic scans, neutral HDRIs | [Poly Haven](https://polyhaven.com/license) | temporary material look-dev, prop texture reference, lighting calibration | CC0 only; make Unity material variants locally and never redistribute the website's branding or preview renders. |
| Prototype UI glyphs, input prompts, temporary blocker props | [Kenney](https://kenney.nl/support) | development-only controls, debug signage, greybox placeholder silhouettes | CC0; never ship its logo or use its visual language as the game identity. Replace any visible placeholder before production-house approval. |
| Environmental one-shots and room-tone candidates | [Freesound](https://freesound.org/help/faq/#licenses) | rain, room tone, doors, paper, distant mechanical cues | Accept individual CC0 files by default. CC-BY needs an exact credit entry; reject CC-BY-NC, Sampling+, unverified uploads, and all voice recordings. |
| Discovery only: small CC0 prop candidates | [OpenGameArt CC0 collections](https://opengameart.org/content/3d-assets-cc0) | a specific missing domestic prop after in-house/Poly Haven search | Verify the individual asset licence and creator page; do not trust collection-level labelling alone. Prefer rebuilding simple props in Blender. |

**Acquisition order:** first make the greybox from primitives; then collect only
the asset named by a handle; quarantine it under
`unity/Assets/Quarantine/Art/ThirdParty/_Intake/<source>/<asset-id>`; capture
the ledger record; import with normal maps/material settings disabled until a
visual check; finally promote it to the approved batch. No free asset may enter
the release manifest without a ledger row and a human visual review. Voice,
faces, logos, copyrighted brands, and story-specific imagery are never sourced
from open libraries for this project.

## 8. Ordered implementation packets

### WARD-00 — Choose the greenfield contract

ID: WARD-00
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Scope and decisions
Tags: greenfield, unity, decisions
Handles: u0-charter-authority-doc, u0-charter-editor-decide, u0-charter-hardware-decide, u0-charter-source-roots-doc, u0-charter-package-set-decide, u0-charter-day1-route-doc, u0-charter-nongoals-doc, u0-charter-risk-doc, u0-charter-approval-review
Runbook:
1. Read the masterplan and source-authority map, then write a one-page decision draft without creating Unity files.
2. Resolve the target editor, Day 1 route, source roots, and explicit non-goals with the accountable reviewer.
3. Save the approved decision under `unity/Docs/Decisions`, link the review evidence, and only then unblock foundation work.
Depends on: none
Outcome: A reviewed greenfield charter names the Unity target, source roots, first playable, and non-goals.
Inputs: `external/docs/MASTERPLAN.md`, this plan, Dart reference map.
Files: `UNITY_PLAN.md`, `unity/Docs/Decisions/DEC-001-greenfield.md`
Do not touch: Dart runtime, story prose, database rows.
Steps:
1. `u0-charter-authority-doc` — Write the authority table: for product, source content, build, and planning, name the owning file and the accountable human. Product is `external/docs/MASTERPLAN.md`; nothing in the charter may contradict it.
2. `u0-charter-editor-decide` — Pin one exact Unity 6.3 LTS patch and record why that one. Note the URP version it ships with. A later patch bump is its own decision entry, not an edit to this one.
3. `u0-charter-hardware-decide` — Name the single Windows x64 machine that is the supported test target: GPU, driver version, RAM, and display resolution. Results from any other machine are context, not proof.
4. `u0-charter-source-roots-doc` — List the read-only source roots Unity may import from (`text/`, `assets/house/*.json`) and state plainly that Unity writes to none of them.
5. `u0-charter-package-set-decide` — Split the package list into approved and deferred. Every deferral gets a reason and an interim replacement, so a later packet cannot quietly reintroduce it.
6. `u0-charter-day1-route-doc` — Write the Day 1 route as an explicit chain of player action -> domain consequence -> saved proof. This chain is the acceptance target for everything through WARD-40.
7. `u0-charter-nongoals-doc` — Write the non-goals for the first playable (no voice, no final art, no 21 days). Each non-goal names the later packet that owns it, so it reads as deferred rather than forgotten.
8. `u0-charter-risk-doc` — Record the three risks most likely to stop the first playable. Each needs a named early signal and a fallback you would actually accept.
9. `u0-charter-approval-review` — Walk the charter with the accountable reviewer. Record their name and the date, save it as `unity/Docs/Decisions/DEC-001-greenfield.md`, and do not start WARD-01 before that file exists.
Checks: Human review of the charter; no Unity project required yet.
Evidence: none
Remainder: none

### WARD-01 — Create the empty Unity foundation

ID: WARD-01
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Project scaffold and CI
Tags: greenfield, unity, ci, tooling
Handles: u0-found-project-asset, u0-found-folders-asset, u0-found-domain-asmdef-guard, u0-found-asmdef-map-guard, u0-found-bootstrap-scene, u0-found-composition-adapter, u0-found-buildstamp-adapter, u0-found-smoke-test, u0-found-build-command-adapter, u0-found-ci-guard, u0-found-clean-clone-route, u0-found-version-capture
Runbook:
1. Create the project with the approved Unity patch and commit the generated package lock before adding gameplay code.
2. Add assemblies, bootstrap scene, smoke test, and Windows build command one handle at a time; run each after adding it.
3. Repeat the test and build from a clean checkout, then attach editor version, log paths, and artifact digest to the card.
Depends on: WARD-00
Outcome: A clean checkout opens the empty Unity project, runs a smoke test, and builds Windows x64.
Inputs: approved Unity patch, package list, Windows build environment.
Files: `unity/ProjectSettings`, `unity/Packages`, `unity/Assets/Quarantine/Tests`, CI workflow.
Do not touch: gameplay rules, imported content, final art.
Steps:
1. `u0-found-project-asset` — Create the Unity project from the pinned patch, then commit `Packages/manifest.json` and `Packages/packages-lock.json` before adding any other file.
2. `u0-found-folders-asset` — Create the folder roots under `unity/Assets/Quarantine/` (`Domain`, `Presentation`, `Content`, `Tests`), each with its own assembly definition, so the layout is enforced rather than conventional.
3. `u0-found-domain-asmdef-guard` — Give `Quarantine.Domain` an assembly definition with no reference to `UnityEngine`. This is the boundary WARD-05 later enforces in CI, so it has to be real from the first commit.
4. `u0-found-asmdef-map-guard` — Wire the remaining references one direction only: Presentation depends on Domain, Tests depend on both, Domain depends on neither. Confirm Unity reports no circular reference.
5. `u0-found-bootstrap-scene` — Add one bootstrap scene containing nothing but the composition-root object and a build-stamp text element. Resist putting gameplay in it.
6. `u0-found-composition-adapter` — Write the composition root that explicitly constructs and disposes the domain services. No `FindObjectOfType`, no singletons, no static mutable state.
7. `u0-found-buildstamp-adapter` — Render editor version, git SHA, and build time into the scene's stamp, so any later screenshot identifies the build that produced it.
8. `u0-found-smoke-test` — Add an EditMode test that constructs and disposes the composition root twice and asserts nothing leaked between the two. It must not open a scene.
9. `u0-found-build-command-adapter` — Add a headless Windows x64 build command that writes its log and artifact to known paths and exits non-zero on failure.
10. `u0-found-ci-guard` — Run the EditMode tests and the build command in CI on every push. A red run blocks the packet; do not add an override switch.
11. `u0-found-clean-clone-route` — From a fresh clone with no `Library` cache, open the project, run the tests, and build. Time the first import: much over fifteen minutes is a finding to record, not to absorb.
12. `u0-found-version-capture` — Attach the editor version, package-lock digest, build log path, and artifact digest to the WARD-01 card as its evidence.
Checks: Clean clone open; EditMode tests; development build.
Evidence: none
Remainder: none

### WARD-02 — Define typed source schemas

ID: WARD-02
State: OPEN
Owner: unassigned
Category: Authored content and import
Subcategory: Schemas and IDs
Tags: content, schemas, validation, ids
Handles: u1-schema-source-census-doc, u1-schema-result-format-rule, u1-schema-id-registry-schema, u1-schema-house-schema, u1-schema-portal-schema, u1-schema-inventory-schema, u1-schema-material-schema, u1-schema-sound-schema, u1-schema-scenario-schema, u1-schema-corpus-schema, u1-schema-valid-fixture, u1-schema-invalid-fixture, u1-schema-suite-test, u1-schema-failure-report-capture
Runbook:
1. Catalogue every source file family and write its ID, references, ranges, and required fields in a schema table.
2. Implement immutable definitions and validators before any importer or scene binding, with valid and invalid fixtures beside each definition.
3. Run the complete schema suite and retain one failure report proving path, ID, field, and message are actionable.
Depends on: WARD-01
Outcome: C# content records validate house, story, inventory, material, sound, and schedule sources without Unity scene access.
Inputs: `assets/house/*.json`, validated scenario export/corpus, Dart parsers as behaviour references.
Files: `Runtime/Content`, `Editor/Import` schemas and tests.
Do not touch: generated prefabs, gameplay controllers.
Steps:
1. `u1-schema-source-census-doc` — Catalogue every source file family in one table: file glob, primary ID field, foreign references, optional fields, allowed ranges. Write it before any C# type exists — the table is what the schemas encode.
2. `u1-schema-result-format-rule` — Define one validation result record carrying source path, ID, field, and message. Every validator returns this shape, so a failure reads the same wherever it came from.
3. `u1-schema-id-registry-schema` — Build the ID registry that every other schema resolves references through, so a dangling reference is caught once, centrally, rather than per file family.
4. `u1-schema-house-schema` — Define the immutable room record and its validator: unique room ID, level, bounds, required display name.
5. `u1-schema-portal-schema` — Define the portal record: both endpoint room IDs resolve, no self-portals, and traversal state is one of the allowed values.
6. `u1-schema-inventory-schema` — Define the inventory record: stable item ID, host room reference, pickable flag, and the placement fields the greybox will need.
7. `u1-schema-material-schema` — Define the material record: stable material ID, family, and the value ranges a URP material can actually accept.
8. `u1-schema-sound-schema` — Define the soundscape record: emitter ID, host room reference, gain and distance ranges, and portal-muffle references.
9. `u1-schema-scenario-schema` — Define the schedule record: day, time window, event ID, conditions, and choice IDs, with days constrained to 1-21.
10. `u1-schema-corpus-schema` — Define the corpus record: text ID, speaker, and body, and validate that every ID referenced by the scenario resolves to a real line.
11. `u1-schema-valid-fixture` — Add one minimal valid fixture per source family — the smallest file that passes — and keep it beside its schema.
12. `u1-schema-invalid-fixture` — Add one focused invalid fixture per family, each breaking exactly one rule, so a failing test names the rule that broke.
13. `u1-schema-suite-test` — Run the whole schema suite in EditMode with no scene access, asserting that every valid fixture passes and every invalid one fails with the expected field.
14. `u1-schema-failure-report-capture` — Feed one malformed real source file through the suite and attach the report, proving path, ID, field, and message are actionable by someone who did not write the schema.
Checks: EditMode schema suite; malformed fixture fails with path and ID.
Evidence: none
Remainder: none

### WARD-03 — Build deterministic content import

ID: WARD-03
State: OPEN
Owner: unassigned
Category: Authored content and import
Subcategory: Import and generated assets
Tags: content, import, determinism, assets
Handles: u1-import-manifest-schema, u1-import-temp-root-rule, u1-import-house-adapter, u1-import-inventory-adapter, u1-import-material-adapter, u1-import-sound-adapter, u1-import-scenario-adapter, u1-import-corpus-adapter, u1-import-crossref-rule, u1-import-swap-rule, u1-import-digest-rule, u1-import-menu-adapter, u1-import-determinism-test, u1-import-atomicity-test, u1-import-manifest-capture
Runbook:
1. Create the import manifest and temporary output root, listing parser version and digest for every input.
2. Import scenario, house, inventory, material, and sound data into the temporary root, stopping on any validation error.
3. Compare two clean imports for stable IDs and digests, then promote only the fully validated generated root.
Depends on: WARD-02
Outcome: Valid source produces typed generated assets; invalid source produces no partial output.
Inputs: validated schemas and canonical text/JSON.
Files: `Editor/Import`, `Content/Generated`.
Do not touch: runtime session and scene art.
Steps:
1. `u1-import-manifest-schema` — Define the import manifest: every source file, its digest, the parser version, and the output asset root. The manifest is the record that makes an import reviewable.
2. `u1-import-temp-root-rule` — Import into a temporary output root, never directly into `Content/Generated`. Nothing outside the temp root is touched until the whole pass validates.
3. `u1-import-house-adapter` — Import the room graph and portals into typed generated assets, carrying source line and ID into every diagnostic.
4. `u1-import-inventory-adapter` — Import inventory placements with the same stable-ID rule, so a placement keeps its identity across re-imports.
5. `u1-import-material-adapter` — Import material definitions into generated assets; do not create URP materials here — that binding belongs to WARD-51.
6. `u1-import-sound-adapter` — Import the soundscape into typed data, keeping emitter-to-room references symbolic rather than resolved to scene objects.
7. `u1-import-scenario-adapter` — Import the validated schedule into typed events, preserving day, window, and condition fields exactly as authored.
8. `u1-import-corpus-adapter` — Import the corpus into typed text data keyed by text ID, with no formatting or trimming that would change authored prose.
9. `u1-import-crossref-rule` — Validate cross-references inside the temp root — every scenario text ID, every emitter room, every portal endpoint — before any promotion.
10. `u1-import-swap-rule` — Promote by swapping the validated temp root into `Content/Generated` as one operation. A failed import leaves the previous generated set untouched.
11. `u1-import-digest-rule` — Write source digest, importer version, and generated-at into the manifest, so a generated asset can always be traced to the exact source that produced it.
12. `u1-import-menu-adapter` — Add the editor menu command that runs the import and reports the result count, so the pass is reproducible without a console incantation.
13. `u1-import-determinism-test` — Run two clean imports from identical sources and assert identical IDs and digests. A difference here means something non-deterministic leaked in — find it now, not in WARD-40.
14. `u1-import-atomicity-test` — Run an import with one deliberately invalid source and assert the generated root is unchanged and no partial assets exist.
15. `u1-import-manifest-capture` — Attach the manifest from a successful run to the card as the packet's evidence.
Checks: Two identical imports produce identical IDs/digests; invalid import is atomic.
Evidence: none
Remainder: none

### WARD-04 — Synchronize the plan with the project database

ID: WARD-04
State: OPEN
Owner: unassigned
Category: Persistence and database synchronization
Subcategory: Planner cards and activity
Tags: database, sync, planner, audit
Handles: u0-sync-projection-rule, u0-sync-handle-parse-rule, u0-sync-validation-guard, u0-sync-checklist-merge-rule, u0-sync-upsert-adapter, u0-sync-tag-namespace-rule, u0-sync-board-owned-guard, u0-sync-activity-rule, u0-sync-noop-test, u0-sync-conflict-test, u0-sync-retry-test, u0-sync-hosted-route, u0-sync-audit-capture
Runbook:
1. Parse the plan into one canonical projection and deliberately test duplicate IDs, missing taxonomy, handles, and dependencies.
2. Upsert only source-owned fields, then prove a dragged lane, a comment, and a custom tag survive a changed source packet.
3. Run a changed sync and an immediate repeat, recording the digest, changed IDs, and no-op result in project activity.
Depends on: WARD-00
Outcome: Every valid implementation packet has an idempotent `unity-ward-##` card with source-owned details.
Inputs: `syncUnityPlannerCards`, `DATABASE_URL`, packet parser.
Files: website persistence/tests and database-sync documentation.
Do not touch: gameplay save files, user-owned board lane positions.
Steps:
1. `u0-sync-projection-rule` — Parse each packet into one canonical projection object (identity, taxonomy, tags, dependencies, handles, steps, checks, evidence). The projection, not the Markdown, is what the writer consumes.
2. `u0-sync-handle-parse-rule` — Parse `Handles:` into a normalized, de-duplicated, lower-cased list that preserves declared order. The order is the intended implementation order and must survive the round trip.
3. `u0-sync-validation-guard` — Run the full validator before opening any database write: duplicate IDs, unknown dependencies, missing taxonomy, untagged packets, malformed handles, and handles milestoned to the wrong packet.
4. `u0-sync-checklist-merge-rule` — Project handles onto the card checklist keyed by handle name, merging by name so a handle already ticked stays ticked when surrounding source text changes.
5. `u0-sync-upsert-adapter` — Upsert only source-owned fields: title, details, checklist text, owner, priority, cover. Everything else on the card belongs to the board and is never written here.
6. `u0-sync-tag-namespace-rule` — Write plan-derived tags into a reserved `plan-` namespace, so a user's own tags on the same card are never candidates for removal.
7. `u0-sync-board-owned-guard` — Assert, in code and in a test, that lane, position, archive state, comments, watchers, custom tags, and per-user view state are never written by sync.
8. `u0-sync-activity-rule` — After a fully successful pass, record one activity entry with the plan digest, changed count, and changed packet IDs. Never record anything for a partial pass.
9. `u0-sync-noop-test` — Test that syncing twice against an unchanged plan writes nothing the second time and reports zero changes.
10. `u0-sync-conflict-test` — Test that a card dragged to another lane, given a comment, and given a custom tag keeps all three after its source packet's text changes.
11. `u0-sync-retry-test` — Test that a transient database failure mid-pass leaves no digest recorded, so the next run is a full retry rather than a silent partial.
12. `u0-sync-hosted-route` — Run the sync against the hosted database with one deliberately changed packet and confirm the change appears on the board.
13. `u0-sync-audit-capture` — Capture the resulting activity row and the board state, and attach both to the card.
Checks: Validation rejects duplicate/missing IDs before writes; website tests; hosted sync with a changed packet; repeat sync is a no-op; retry after transient failure.
Evidence: none
Remainder: none

### WARD-05 — Install human-sized code guardrails

ID: WARD-05
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Code quality and review
Tags: unity, csharp, testing, guardrails
Handles: u0-guard-domain-boundary-guard, u0-guard-analyzer-set-guard, u0-guard-editorconfig-doc, u0-guard-empty-test-guard, u0-guard-generated-edit-guard, u0-guard-naming-doc, u0-guard-review-checklist-doc, u0-guard-violation-fixture, u0-guard-ci-failure-route, u0-guard-contributing-doc
Runbook:
1. Add assembly boundaries and analyzer rules before feature assemblies grow.
2. Create the contribution checklist with test, source-ownership, generated-file, and scene-integration prompts.
3. Introduce one known boundary violation in a branch or fixture and verify CI rejects it with an understandable message.
Depends on: WARD-01
Outcome: Unity code has analyzers, test commands, ownership boundaries, and a review checklist.
Inputs: section 0 rules.
Files: `.editorconfig`, analyzers, CI, `unity/Docs/CONTRIBUTING.md`.
Do not touch: product behaviour.
Steps:
1. `u0-guard-domain-boundary-guard` — Add the CI rule that fails when `Quarantine.Domain` references `UnityEngine`, and make it name the offending file and line.
2. `u0-guard-analyzer-set-guard` — Enable the agreed analyzer set with warnings as errors for the rules the team will actually honour. Explicitly suppress the rest rather than leaving standing noise.
3. `u0-guard-editorconfig-doc` — Commit `.editorconfig` with indentation, naming, and file-scoped-namespace rules, noting which analyzer enforces each one.
4. `u0-guard-empty-test-guard` — Add the rule that fails a test method containing no assertion, so an empty test cannot be mistaken for coverage.
5. `u0-guard-generated-edit-guard` — Fail the build when a generated file is hand-edited, and name the generator that should have produced it.
6. `u0-guard-naming-doc` — Document naming rules for domain types, adapters, and ScriptableObjects, with one worked example of each.
7. `u0-guard-review-checklist-doc` — Write the pull-request checklist: one packet per change, tests present, source ownership respected, generated files untouched, scene integration done.
8. `u0-guard-violation-fixture` — Commit a fixture that deliberately violates the domain boundary, so the guard is proven to fire rather than assumed to.
9. `u0-guard-ci-failure-route` — Run that fixture through CI and read the failure as a newcomer would. If the message does not name the file and the rule, fix the message before closing.
10. `u0-guard-contributing-doc` — Write `unity/Docs/CONTRIBUTING.md` covering the one-packet workflow, the test commands, and how to run the guards locally before pushing.
Checks: CI fails on a deliberate boundary violation.
Evidence: none
Remainder: none

### WARD-10 — Implement clock, resources, and deterministic difficulty

ID: WARD-10
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Day loop and resource commands
Tags: domain, clock, resources, determinism
Handles: u1-clock-command-table-doc, u1-clock-state-rule, u1-clock-advance-rule, u1-clock-day-boundary-rule, u1-clock-spend-atomic-rule, u1-clock-ration-rule, u1-clock-rejection-rule, u1-clock-seed-create-rule, u1-clock-seed-persist-rule, u1-clock-session-port, u1-clock-boundary-fixture, u1-clock-replay-test, u1-clock-event-list-capture
Runbook:
1. Write the command/rejection table for time, heat, rations, collection, and sleep before coding state mutation.
2. Implement immutable state transitions and seed creation in plain C#, then cover day boundaries and insufficient-resource cases.
3. Replay the same command list twice and attach matching snapshots plus event lists as proof.
Depends on: WARD-02, WARD-05
Outcome: A pure session advances time and atomically spends hours, heat, and rations.
Inputs: `lib/game/session.dart` (`advance`, `sleep`, `spendHoursAndGas`), product pacing decision.
Files: `Runtime/Domain/Clock`, `Resources`, `Difficulty`, tests.
Do not touch: UI timers, MonoBehaviour.Update, final pacing art.
Steps:
1. `u1-clock-command-table-doc` — Write the command table first: advance, spend, collect, sleep, and every rejection case, with the precondition and the resulting delta for each. Code follows the table.
2. `u1-clock-state-rule` — Implement the session state as an immutable snapshot; a command returns a new snapshot plus a result, never mutates in place.
3. `u1-clock-advance-rule` — Implement time advance with explicit before/after values in the result, so a caller never has to recompute what changed.
4. `u1-clock-day-boundary-rule` — Handle the day boundary as its own transition: what resets, what carries, and what is emitted. This is where off-by-one errors live.
5. `u1-clock-spend-atomic-rule` — Make hours, heat, and rations spend atomically — either the whole cost applies or the command is rejected and nothing changes.
6. `u1-clock-ration-rule` — Implement ration collection on its authored run days only, rejecting collection attempts on any other day.
7. `u1-clock-rejection-rule` — Return a typed rejection with a reason for every refused command. A silent no-op is a bug; the UI later needs the reason.
8. `u1-clock-seed-create-rule` — Seed difficulty exactly once at run creation. Nothing else in the domain may create randomness.
9. `u1-clock-seed-persist-rule` — Persist the seed inside the snapshot so a reload continues the same run rather than reseeding a new one.
10. `u1-clock-session-port` — Port the resource invariants from `lib/game/session.dart` — the rule intent, not the object structure. Idiomatic C# is the goal, not a transliteration.
11. `u1-clock-boundary-fixture` — Build a fixture covering same-day, day-boundary, and insufficient-resource cases as one ordered command list.
12. `u1-clock-replay-test` — Replay that command list twice from the same seed and assert identical snapshots and identical event lists.
13. `u1-clock-event-list-capture` — Attach both replay snapshots and the event list to the card, so determinism is shown rather than claimed.
Checks: EditMode fixture replay produces the same snapshot and event list.
Evidence: none
Remainder: none

### WARD-11 — Implement journal truth and drift

ID: WARD-11
State: OPEN
Owner: unassigned
Category: Journal and evidence
Subcategory: Entries, corrections, and night drift
Tags: journal, evidence, consequences, save
Handles: u1-journal-entry-schema, u1-journal-status-rule, u1-journal-citation-rule, u1-journal-revision-rule, u1-journal-correction-rule, u1-journal-lock-rule, u1-journal-attention-rule, u1-journal-drift-select-rule, u1-journal-drift-apply-rule, u1-journal-drift-port, u1-journal-state-fixture, u1-journal-lock-rejection-test, u1-journal-drift-replay-test
Runbook:
1. Define entry statuses, citations, correction rules, and locks in a pure domain fixture.
2. Implement sleep-boundary drift from the stored seed, never from frame time or UI state.
3. Prove correction, lock rejection, and identical overnight replay with focused tests.
Depends on: WARD-10
Outcome: Entries can be written, cited, corrected, verified, and locked; night drift is deterministic and visible.
Inputs: `lib/game/session.dart` journal methods, canonical journal rules.
Files: `Runtime/Domain/Journal`, tests.
Do not touch: journal UI and prose authoring.
Steps:
1. `u1-journal-entry-schema` — Define the journal entry record: stable ordinal, day written, body, status, and citations.
2. `u1-journal-status-rule` — Implement the status transitions — written, cited, corrected, verified, locked — and reject any transition not on that list.
3. `u1-journal-citation-rule` — Implement citations as stable ordinals pointing at other entries, and reject a citation of a non-existent or later entry.
4. `u1-journal-revision-rule` — Keep revisions append-only: a correction adds a revision, it never overwrites the original text.
5. `u1-journal-correction-rule` — Implement the correction rule so the prior text stays readable; the entry's disagreement with the house is the horror, and erasing it removes the point.
6. `u1-journal-lock-rule` — Implement locking, and make a write to a locked entry return a typed rejection rather than silently doing nothing.
7. `u1-journal-attention-rule` — Implement the attention/steady-hand cost so writing well is a resource decision, not free.
8. `u1-journal-drift-select-rule` — Select which entries drift purely from the stored seed and the day — never from frame time, UI state, or iteration order of a hash map.
9. `u1-journal-drift-apply-rule` — Apply drift only at the sleep boundary, as one domain operation with an explicit list of what changed.
10. `u1-journal-drift-port` — Port the drift kinds (insertion, contradiction, deletion) from the Dart journal rules, keeping the authored day schedule.
11. `u1-journal-state-fixture` — Build a fixture that writes, cites, corrects, verifies, and locks entries in one ordered sequence.
12. `u1-journal-lock-rejection-test` — Assert a locked entry cannot be changed and that the attempt returns a reason the UI can show.
13. `u1-journal-drift-replay-test` — Replay two nights from the same seed and assert identical drifted text, then replay from a different seed and assert it differs.
Checks: Replay fixture; locked entry cannot be silently changed.
Evidence: none
Remainder: none

### WARD-12 — Implement the authored encounter schedule

ID: WARD-12
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Schedule, choices, and callbacks
Tags: story, schedule, choices, callbacks
Handles: u1-story-event-schema, u1-story-condition-rule, u1-story-resolver-rule, u1-story-choice-commit-rule, u1-story-flag-rule, u1-story-residue-rule, u1-story-journal-fact-rule, u1-story-duplicate-guard, u1-story-director-port, u1-story-single-event-fixture, u1-story-roster-integrity-test, u1-story-replay-test
Runbook:
1. Start with one imported event and resolve it only from day, time, stable conditions, and schedule IDs.
2. Commit the selected choice, flags, residue, journal fact, and activity as one domain operation.
3. Replay the event from the same seed and show the exact same callbacks and residue IDs.
Depends on: WARD-03, WARD-10, WARD-11
Outcome: The validated scenario schedule delivers one canonical encounter and records its callback flags.
Inputs: scenario/corpus import, `NarrativeEncounterDirector.resolveEncounter`, `commitChoice`.
Files: `Runtime/Story`, tests.
Do not touch: hard-coded replacement schedules and prototype narrative directors.
Steps:
1. `u1-story-event-schema` — Define the runtime event record built from the imported schedule: event ID, day, window, conditions, and choice IDs.
2. `u1-story-condition-rule` — Implement condition evaluation against day, time, and stable domain flags only. No scene state, no wall-clock time.
3. `u1-story-resolver-rule` — Implement the resolver that picks at most one event for a given day and window, with a deterministic tie-break when two qualify.
4. `u1-story-choice-commit-rule` — Commit the selected choice as a single domain operation — flags, residue, journal fact, and activity together, or none of them.
5. `u1-story-flag-rule` — Implement callback flags with stable IDs so a later day can read a choice made earlier without string guessing.
6. `u1-story-residue-rule` — Implement physical residue records with stable IDs, since the house must later show what the record does not.
7. `u1-story-journal-fact-rule` — Emit the journal fact for the choice through the WARD-11 journal API rather than writing entry state directly.
8. `u1-story-duplicate-guard` — Guard against delivering the same event twice, including across a save and reload in the same day.
9. `u1-story-director-port` — Port the resolution and commit intent from `NarrativeEncounterDirector`, taking the rules and discarding the Dart object graph.
10. `u1-story-single-event-fixture` — Build a fixture with exactly one imported event and drive it end to end before adding a second.
11. `u1-story-roster-integrity-test` — Assert every scheduled event resolves to a real visitor and real corpus text, so a missing asset fails here rather than in front of a player.
12. `u1-story-replay-test` — Replay the same seed and choice sequence and assert the same flags and residue IDs, then attach the run to the card.
Checks: Same seed and choice sequence produces the same flags and residue IDs.
Evidence: none
Remainder: none

### WARD-13 — Compose the GameSession

ID: WARD-13
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Composition root and event queue
Tags: domain, session, events, integration
Handles: u1-session-compose-rule, u1-session-snapshot-rule, u1-session-event-drain-rule, u1-session-rejection-telemetry-rule, u1-session-bootstrap-adapter, u1-session-single-owner-guard, u1-session-compose-test, u1-session-drain-test, u1-session-probe-route
Runbook:
1. Compose all completed pure services in one `GameSession` constructor with no scene lookup or global singleton.
2. Expose a read-only snapshot and a drain-once event stream, then wire a minimal Bootstrap consumer.
3. Run a PlayMode bootstrap probe and verify a second session cannot become an accidental owner.
Depends on: WARD-10, WARD-11, WARD-12
Outcome: Bootstrap creates one session whose snapshot drives all current systems.
Inputs: domain packets and Dart session event-queue behaviour.
Files: `Runtime/Domain/GameSession`, bootstrap composition, tests.
Do not touch: global singletons and scene lookups.
Steps:
1. `u1-session-compose-rule` — Compose clock, resources, journal, story, residues, and seed in one `GameSession` constructor. No scene lookup, no service locator, no static state.
2. `u1-session-snapshot-rule` — Expose one read-only snapshot that every consumer reads. No consumer reaches past it into a subsystem.
3. `u1-session-event-drain-rule` — Expose domain events as a drain-once stream, so a consumer cannot process the same event twice or miss one by reading late.
4. `u1-session-rejection-telemetry-rule` — Record rejected commands with their reason, so the UI can explain a refusal and a test can assert one happened.
5. `u1-session-bootstrap-adapter` — Wire one minimal Bootstrap consumer that creates the session and reads the snapshot — no gameplay in it yet.
6. `u1-session-single-owner-guard` — Add the guard that makes a second session owner fail loudly at construction rather than quietly running two clocks.
7. `u1-session-compose-test` — Test that construction and disposal are clean and that the composed session exposes every subsystem's state through the one snapshot.
8. `u1-session-drain-test` — Test that draining events twice yields them once, and that an undrained event survives until it is read.
9. `u1-session-probe-route` — Run the PlayMode bootstrap probe, confirm one session owner, and attach the probe output to the card.
Checks: PlayMode bootstrap route; no duplicate session owner.
Evidence: none
Remainder: none

### WARD-14 — Add resilient local saves

ID: WARD-14
State: OPEN
Owner: unassigned
Category: Persistence and database synchronization
Subcategory: Save slots and recovery
Tags: save, recovery, checksums, persistence
Handles: u2-save-envelope-schema, u2-save-serialize-rule, u2-save-checksum-rule, u2-save-temp-write-adapter, u2-save-replace-rule, u2-save-recovery-slot-rule, u2-save-schema-upgrade-rule, u2-save-rejection-rule, u2-save-store-port, u2-save-roundtrip-test, u2-save-interrupt-fixture, u2-save-corrupt-fixture, u2-save-restore-choice-adapter, u2-save-recovery-route
Runbook:
1. Specify the save envelope, version policy, active and recovery locations, and rejection message before serializing data.
2. Implement temporary-write, flush, checksum, replace, and recovery retention in that exact order.
3. Simulate interrupted, corrupt, missing, and old-schema saves; preserve the last good save in every failure case.
Depends on: WARD-13
Outcome: New run, save, load, corrupted active slot, and recovery slot all behave safely.
Inputs: `lib/game/save_store.dart` (`write`, `read`), save contract section 5.3.
Files: `Runtime/Save`, EditMode and PlayMode save tests.
Do not touch: hosted planner database or per-frame autosave.
Steps:
1. `u2-save-envelope-schema` — Define the save envelope: schema version, run seed, written-at, payload, and checksum. Version goes first so an old file can always be identified before it is parsed.
2. `u2-save-serialize-rule` — Serialize the domain snapshot only. No Unity object references, no scene paths, nothing that a rebuild would invalidate.
3. `u2-save-checksum-rule` — Compute the checksum over the payload and store it in the envelope, so a truncated or edited file is detectable without parsing it.
4. `u2-save-temp-write-adapter` — Write to a temporary file beside the target, flush it, and only then rename. Never write into the live slot directly.
5. `u2-save-replace-rule` — Replace the active slot with an atomic rename, so an interrupted save leaves the previous slot intact rather than half-written.
6. `u2-save-recovery-slot-rule` — Keep the previous good save as a recovery slot, so a corrupt active slot is an inconvenience rather than a lost run.
7. `u2-save-schema-upgrade-rule` — Implement the upgrade path for an older schema version, and reject a newer one with a clear message instead of guessing.
8. `u2-save-rejection-rule` — Return a typed reason for every refused load — bad checksum, unknown version, missing file — so the UI can offer recovery rather than a blank failure.
9. `u2-save-store-port` — Port the read/write intent from `lib/game/save_store.dart`, keeping the atomicity rules and dropping the Dart structure.
10. `u2-save-roundtrip-test` — Test that a full snapshot survives write and read unchanged, including the seed and the journal's locked entries.
11. `u2-save-interrupt-fixture` — Build a fixture that interrupts the write between temp and rename, and assert the previous slot still loads.
12. `u2-save-corrupt-fixture` — Build a fixture with a corrupted active slot and assert the recovery slot is offered and loads.
13. `u2-save-restore-choice-adapter` — Add the restore prompt that lets a human choose the recovery slot, rather than silently loading it behind their back.
14. `u2-save-recovery-route` — Run the full route in a build — new run, save, corrupt the slot, relaunch, recover — and attach the result.
Checks: Interrupted-write fixture; build-path reload test.
Evidence: none
Remainder: none

### WARD-20 — Build the data-driven domestic greybox

ID: WARD-20
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Room graph, scale, and binding
Tags: world, rooms, portals, greybox
Handles: u2-world-calibration-scene, u2-world-scale-decide, u2-world-roomgraph-rule, u2-world-portal-topology-rule, u2-world-stair-geometry-asset, u2-world-collision-layer-asset, u2-world-proxy-generator-adapter, u2-world-binding-manifest-bind, u2-world-focus-anchor-bind, u2-world-residue-anchor-bind, u2-world-debug-label-adapter, u2-world-graph-validator-test, u2-world-day1-route, u2-world-route-capture, u2-world-greybox-review
Runbook:
1. Build the Day 1 room and portal graph from stable IDs using primitives only.
2. Bind one room pair at a time and validate scale, portal bounds, collider clearance, and focus anchors.
3. Walk the fixed ground-to-upper-to-cellar route and capture the expected room-ID sequence.
Depends on: WARD-03, WARD-13
Outcome: Imported room/portal data creates a navigable greybox with stable bindings.
Inputs: house JSON, inventory JSON, `HouseInventory.validateAgainst`.
Files: `Runtime/World`, `Editor/Import`, `Scenes/Day01Greybox`.
Do not touch: final production models and decorative dressing.
Steps:
1. `u2-world-calibration-scene` — Build a calibration scene with a human-height reference and a door of known size. Every later spatial judgement is measured against it.
2. `u2-world-scale-decide` — Decide and record one world unit per metre, eye height, and door dimensions. Changing these later invalidates every capture, so decide once and write it down.
3. `u2-world-roomgraph-rule` — Construct the runtime room graph from imported data only. A room that exists in the scene but not the data is a bug, not a shortcut.
4. `u2-world-portal-topology-rule` — Build portal topology from the data and assert every portal connects two rooms that exist and is reachable from both sides.
5. `u2-world-stair-geometry-asset` — Build the stair geometry to the calibrated dimensions, since stairs are where movement and collision will first disagree.
6. `u2-world-collision-layer-asset` — Set up the collision layers and the matrix once, and document which layer each kind of surface belongs to.
7. `u2-world-proxy-generator-adapter` — Generate greybox proxies from room bounds so the whole house exists before any art does.
8. `u2-world-binding-manifest-bind` — Bind generated proxies to their data IDs through a manifest, so a later art asset can replace a proxy without breaking references.
9. `u2-world-focus-anchor-bind` — Place focus anchors from inventory placements, so WARD-22 has real targets rather than invented ones.
10. `u2-world-residue-anchor-bind` — Place residue anchors from the story residue IDs, so WARD-12's committed residue has somewhere to appear.
11. `u2-world-debug-label-adapter` — Add a toggleable debug label showing room ID and portal state, so a route failure is diagnosable from a screenshot.
12. `u2-world-graph-validator-test` — Test the room graph for unreachable rooms, orphan portals, and IDs present in the scene but absent from the data.
13. `u2-world-day1-route` — Walk the full Day 1 route in PlayMode and confirm every Day 1 target is reachable.
14. `u2-world-route-capture` — Capture the route at the two required resolutions and attach the frames, naming `unity-windows` as the track.
15. `u2-world-greybox-review` — Have a human walk the greybox and judge whether it reads as a house rather than a diagram. Record their name, date, and verdict — this packet is in a visible-change category and cannot close on a model's judgement.
Checks: Room graph validator; PlayMode route reaches every Day 1 target.
Evidence: none
Remainder: none

### WARD-21 — Implement movement and portal crossing

ID: WARD-21
State: OPEN
Owner: unassigned
Category: Movement and tactile interaction
Subcategory: Capsule, stairs, and room transitions
Tags: movement, collision, stairs, portals
Handles: u2-move-input-adapter, u2-move-look-adapter, u2-move-capsule-rule, u2-move-axis-rule, u2-move-collision-port, u2-move-stairs-rule, u2-move-crouch-rule, u2-move-portal-plane-rule, u2-move-portal-command-adapter, u2-move-rejection-rule, u2-move-clipping-test, u2-move-stairs-test, u2-move-portal-test, u2-move-day1-route, u2-move-route-capture
Runbook:
1. Separate input sampling, desired displacement, collision solve, stairs, and room notification into distinct components.
2. Implement capsule and axis resolution against the generated collision layer before adding any story trigger.
3. Exercise clipping, backtracking, blocked doors, and stair restoration in PlayMode with expected rejection reasons.
Depends on: WARD-20
Outcome: The player can walk, step stairs, collide, and cross only passable portals.
Inputs: `lib/house/collision.dart` (`Capsule.move`, `_tryAxis`, `_moveOnStair`, `portalCross`).
Files: `Runtime/World/Movement`, `Runtime/Interaction/Portals`, tests.
Do not touch: story triggers hidden in movement code.
Steps:
1. `u2-move-input-adapter` — Wire the input action map for move and look, keeping the adapter separate from the movement rules so input can be rebound without touching physics.
2. `u2-move-look-adapter` — Implement look with sensitivity and inversion settings read from configuration, not constants.
3. `u2-move-capsule-rule` — Implement the capsule with the calibrated radius, height, and eye offset from WARD-20. Do not re-derive these numbers here.
4. `u2-move-axis-rule` — Resolve movement one axis at a time so a blocked X does not cancel a legal Z — this is what makes wall-sliding feel right.
5. `u2-move-collision-port` — Port the sweep and resolve intent from `lib/house/collision.dart`, keeping the axis order and step tolerances.
6. `u2-move-stairs-rule` — Implement stair traversal with the step tolerance, so a player walks up rather than catching on each riser.
7. `u2-move-crouch-rule` — Implement crouch with its own capsule height and a stand-up check that refuses to stand under low geometry.
8. `u2-move-portal-plane-rule` — Detect the portal crossing plane rather than a trigger volume, so a crossing cannot be missed at speed.
9. `u2-move-portal-command-adapter` — Route the crossing through a domain command, so the door's state — not the collider — decides whether it is passable.
10. `u2-move-rejection-rule` — Give a refused crossing a reason the UI can surface, so a locked door reads as locked rather than broken.
11. `u2-move-clipping-test` — Test the collision fixture for clipping through walls at high speed and in corners.
12. `u2-move-stairs-test` — Test ascent and descent on every staircase in the house, both directions.
13. `u2-move-portal-test` — Test that a passable portal is crossed and an impassable one is refused with its reason.
14. `u2-move-day1-route` — Run the ground, upper, and cellar route in PlayMode without clipping or getting stuck.
15. `u2-move-route-capture` — Capture the route and attach it, naming the track and the build stamp.
Checks: Collision fixture; PlayMode ground/upper/cellar route.
Evidence: none
Remainder: none

### WARD-22 — Implement focus and threshold interaction

ID: WARD-22
State: OPEN
Owner: unassigned
Category: Movement and tactile interaction
Subcategory: Focus, doors, letterbox, and objects
Tags: interaction, focus, doors, inventory
Handles: u2-focus-query-rule, u2-focus-occlusion-rule, u2-focus-target-bind, u2-focus-prompt-adapter, u2-focus-door-rule, u2-focus-chain-rule, u2-focus-letterbox-rule, u2-focus-hold-rule, u2-focus-drag-rule, u2-focus-inventory-rule, u2-focus-feedback-adapter, u2-focus-rejection-doc, u2-focus-order-test, u2-focus-threshold-route
Runbook:
1. Define focus targets and typed accepted/rejected actions from generated IDs, never scene object names.
2. Implement door, chain, letterbox, hold, drag, and inventory paths with a visible and audible response for each result.
3. Complete the threshold route with keyboard focus order and record any unavailable-action explanation.
Depends on: WARD-21, WARD-20
Outcome: Focused objects expose typed actions with clear success/rejection feedback.
Inputs: inventory/focus data, interaction contract, `InventoryPhysics` bounds.
Files: `Runtime/Interaction`, `Runtime/World` bindings, tests.
Do not touch: generic event bus and hierarchy-name discovery.
Steps:
1. `u2-focus-query-rule` — Implement the focus query as a bounded cone plus distance, matching the interaction contract rather than an arbitrary raycast.
2. `u2-focus-occlusion-rule` — Reject a focus target occluded by geometry, so a player cannot interact through a wall.
3. `u2-focus-target-bind` — Bind focus targets to the anchors placed in WARD-20, resolving to the item's data ID rather than a scene reference.
4. `u2-focus-prompt-adapter` — Show the prompt for the focused target with its available actions, and nothing when there is no target.
5. `u2-focus-door-rule` — Implement door actions — open, close, lock, listen — routed through domain commands, since a door's state is game state.
6. `u2-focus-chain-rule` — Implement the door chain as its own state, so a chained door offers a different action set than a locked one.
7. `u2-focus-letterbox-rule` — Implement the letterbox interaction, since it is the threshold exchange the campaign leans on most.
8. `u2-focus-hold-rule` — Implement press-and-hold for actions that should be deliberate, with a visible progress cue and a clean cancel.
9. `u2-focus-drag-rule` — Implement constrained drag within the item's authored bounds, refusing motion that would push an item through geometry.
10. `u2-focus-inventory-rule` — Implement pick up and place against the inventory rules, so a placement is data, not a parented transform.
11. `u2-focus-feedback-adapter` — Give every action success and rejection feedback, so nothing a player does is silent.
12. `u2-focus-rejection-doc` — Document each rejection reason and the wording the UI shows, so the vocabulary stays consistent across packets.
13. `u2-focus-order-test` — Test focus order for accessibility: a keyboard user must reach every interactive target in a predictable sequence.
14. `u2-focus-threshold-route` — Run the threshold route in PlayMode, capture it, and have a human confirm the interactions read clearly. This packet is in a visible-change category and needs that review to close.
Checks: PlayMode threshold route; accessibility focus order test.
Evidence: none
Remainder: none

### WARD-23 — Add portal acoustics and the Day 1 sound bed

ID: WARD-23
State: OPEN
Owner: unassigned
Category: Audio, voice, and acoustics
Subcategory: Portal transmission and cues
Tags: audio, acoustics, cues, captions
Handles: u2-audio-cue-schema, u2-audio-catalogue-doc, u2-audio-route-rule, u2-audio-transmission-rule, u2-audio-muffle-rule, u2-audio-distance-rule, u2-audio-planner-port, u2-audio-mixer-asset, u2-audio-source-adapter, u2-audio-caption-rule, u2-audio-fallback-guard, u2-audio-plan-fixture, u2-audio-plan-test, u2-audio-hardware-route, u2-audio-mix-review
Runbook:
1. Make a cue catalogue with stable IDs, source room, required caption, and explicit fallback before adding clips.
2. Route one visitor and one broadcast through portals, then tune distance and closed-door loss in the mixer.
3. Verify the route on speakers and headphones and prove every required cue still works with audio disabled.
Depends on: WARD-20, WARD-21, WARD-22
Outcome: A visitor and broadcast are spatially audible with closed-door muffle and captions.
Inputs: `lib/engine/audio_planner.dart` (`AudioPlanner._route`, `transmission`, `muffleToGainDb`).
Files: `Runtime/Audio`, mixer setup, cue fixtures.
Do not touch: locked final voice coverage.
Steps:
1. `u2-audio-cue-schema` — Define the cue record: cue ID, source emitter, gain, distance model, and caption text ID.
2. `u2-audio-catalogue-doc` — Catalogue the Day 1 cues — visitor, broadcast, house bed — and name the source file for each before wiring anything.
3. `u2-audio-route-rule` — Implement routing from emitter room to listener room through the portal graph, not through straight-line distance.
4. `u2-audio-transmission-rule` — Implement transmission across portals so an open door carries sound differently than a closed one.
5. `u2-audio-muffle-rule` — Implement the closed-door muffle as a filter plus gain change, matching the authored values rather than an eyeballed cutoff.
6. `u2-audio-distance-rule` — Implement distance attenuation with the authored reference and max distances, so a cue does not vanish at the room boundary.
7. `u2-audio-planner-port` — Port the routing intent from `lib/engine/audio_planner.dart`, keeping `_route`, `transmission`, and `muffleToGainDb` semantics.
8. `u2-audio-mixer-asset` — Build the mixer groups once — bed, transient, voice, air — so later packets add cues without re-inventing the bus layout.
9. `u2-audio-source-adapter` — Adapt planned cues onto Unity audio sources, keeping the plan itself testable without the engine.
10. `u2-audio-caption-rule` — Emit a caption for every audible cue, so the audio route and the caption route cannot drift apart.
11. `u2-audio-fallback-guard` — Guard against a missing audio asset: log the cue ID and continue silently rather than throwing mid-scene.
12. `u2-audio-plan-fixture` — Build a fixture that produces a deterministic audio plan for a fixed listener and emitter position.
13. `u2-audio-plan-test` — Test the plan fixture for stable gains and filter values, so a regression in routing is caught without listening.
14. `u2-audio-hardware-route` — Listen to the route on both speakers and headphones on the supported machine; spatialisation errors show up on one and not the other.
15. `u2-audio-mix-review` — Have a human approve the mix and the captions together, and record the verdict. Audio is a visible-change category for acceptance purposes.
Checks: speaker/headphone PlayMode check; deterministic audio-plan fixture.
Evidence: none
Remainder: none

### WARD-30 — Build the persistent UI shell

ID: WARD-30
State: OPEN
Owner: unassigned
Category: UI, input, and accessibility
Subcategory: Pause, settings, and input actions
Tags: ui, input, settings, accessibility
Handles: u3-shell-ui-root-adapter, u3-shell-panel-settings-asset, u3-shell-input-actions-asset, u3-shell-remap-rule, u3-shell-pause-scene, u3-shell-focus-order-rule, u3-shell-settings-schema, u3-shell-settings-store-adapter, u3-shell-save-feedback-adapter, u3-shell-settings-persist-test, u3-shell-keyboard-route, u3-shell-restart-route, u3-shell-usability-review
Runbook:
1. Create one Bootstrap-owned UI root and map pause, settings, and input actions without duplicating session state.
2. Implement keyboard navigation and settings persistence independently from game-save persistence.
3. Restart the build, restore a run, and verify focus plus user settings return in the expected order.
Depends on: WARD-13, WARD-21
Outcome: Pause, settings, input remapping, and return-to-game work without losing the session.
Inputs: input/accessibility product rules.
Files: `Runtime/UI`, UI Toolkit documents/styles, tests.
Do not touch: story-specific text layout.
Steps:
1. `u3-shell-ui-root-adapter` — Build the persistent UI root that survives scene changes, so the pause menu is never rebuilt mid-session.
2. `u3-shell-panel-settings-asset` — Build the settings panel layout once, with room for the accessibility controls WARD-33 will add rather than a redesign later.
3. `u3-shell-input-actions-asset` — Author the input action asset with every action the game needs named now, even where the binding is still placeholder.
4. `u3-shell-remap-rule` — Implement rebinding with conflict detection, refusing a binding already taken rather than silently shadowing it.
5. `u3-shell-pause-scene` — Implement pause that stops domain time without tearing down the session, and confirm resume continues the same run.
6. `u3-shell-focus-order-rule` — Define UI focus order explicitly per panel. Do not rely on hierarchy order, which changes whenever someone reorders a prefab.
7. `u3-shell-settings-schema` — Define the settings record with a version field, so a later added setting does not invalidate an existing profile.
8. `u3-shell-settings-store-adapter` — Persist settings outside the save file, since they belong to the player and not to the run.
9. `u3-shell-save-feedback-adapter` — Show explicit feedback when settings are saved, so a player is never left guessing whether a change took.
10. `u3-shell-settings-persist-test` — Test that every setting survives a restart, including one deliberately non-default value per control.
11. `u3-shell-keyboard-route` — Complete pause, change a setting, rebind a key, and resume using only the keyboard.
12. `u3-shell-restart-route` — Restart the build and confirm the session resumes and the settings held.
13. `u3-shell-usability-review` — Have a human who did not build it operate the shell and record what confused them. This packet is in a visible-change category and closes on that review, not on a passing test.
Checks: keyboard-only PlayMode route; settings survive restart.
Evidence: none
Remainder: none

### WARD-31 — Deliver text-first dialogue and captions

ID: WARD-31
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Dialogue, choices, and fallback
Tags: story, dialogue, captions, fallback
Handles: u3-dialogue-presenter-adapter, u3-dialogue-line-bind, u3-dialogue-choice-adapter, u3-dialogue-commit-rule, u3-dialogue-caption-rule, u3-dialogue-timing-rule, u3-dialogue-lineid-test, u3-dialogue-replay-fixture, u3-dialogue-textonly-route, u3-dialogue-route-capture
Runbook:
1. Render one imported line and choice sequence from stable IDs, with no hard-coded replacement text.
2. Send the selected choice through the domain command and prove the resulting callback is committed once.
3. Run the entire conversation with audio off, keyboard only, and captions enabled; retain the replay result.
Depends on: WARD-12, WARD-23, WARD-30
Outcome: A visitor conversation presents authored lines, choices, captions, and callbacks without audio.
Inputs: imported corpus, validated schedule, caption rules.
Files: `Runtime/UI/Dialogue`, `Runtime/Story` presentation adapter, tests.
Do not touch: generated voice assets.
Steps:
1. `u3-dialogue-presenter-adapter` — Build the presenter that renders authored lines from imported corpus data, with no prose written in C#.
2. `u3-dialogue-line-bind` — Bind lines by stable text ID, so a corpus edit reaches the game without touching the scene.
3. `u3-dialogue-choice-adapter` — Present choices from the imported schedule, in the authored order, with no invented options.
4. `u3-dialogue-commit-rule` — Commit the chosen option through the WARD-12 domain command, so the UI never writes story state directly.
5. `u3-dialogue-caption-rule` — Show a caption for every line, since this packet ships before voice and captions are the only channel.
6. `u3-dialogue-timing-rule` — Implement reading-time pacing and a silence timer, so a conversation can proceed without the player being rushed or stalled.
7. `u3-dialogue-lineid-test` — Test that every scheduled line ID resolves to real corpus text; a missing line must fail here, not in front of a player.
8. `u3-dialogue-replay-fixture` — Build a fixture that replays a choice sequence and asserts the same flags and journal facts result.
9. `u3-dialogue-textonly-route` — Run a full visitor conversation in PlayMode with audio off, confirming it is completable on text alone.
10. `u3-dialogue-route-capture` — Capture the conversation and attach it, naming the track and build stamp.
Checks: text-only PlayMode conversation; choice replay fixture.
Evidence: none
Remainder: none

### WARD-32 — Build the working journal UI

ID: WARD-32
State: OPEN
Owner: unassigned
Category: Journal and evidence
Subcategory: Entry editing and citations
Tags: journal, ui, citations, evidence
Handles: u3-record-view-adapter, u3-record-entry-template-asset, u3-record-uncertainty-adapter, u3-record-citation-adapter, u3-record-residue-link-bind, u3-record-write-adapter, u3-record-correct-adapter, u3-record-lock-adapter, u3-record-rejection-doc, u3-record-screenreader-test, u3-record-reload-route, u3-record-route-capture
Runbook:
1. Render immutable journal state, uncertainty, citations, and residue references before enabling edits.
2. Wire write, correct, verify, and lock controls to domain commands and show each rejection reason without exposing hidden truth.
3. Write an entry, reload, lock it, and prove both its state and accessibility labels persist.
Depends on: WARD-11, WARD-30
Outcome: The player can inspect, write, cite, correct, verify, and lock a journal entry in-game.
Inputs: journal domain snapshot and commands.
Files: `Runtime/UI/Journal`, UI Toolkit templates, tests.
Do not touch: duplicate UI-side journal state.
Steps:
1. `u3-record-view-adapter` — Build the journal view that reads the domain snapshot only, so the UI cannot hold its own copy of entry state.
2. `u3-record-entry-template-asset` — Build the entry template with room for status, citations, and revisions without relayout.
3. `u3-record-uncertainty-adapter` — Show uncertainty explicitly, since an entry that reads as certain when it is not defeats the game's central mechanic.
4. `u3-record-citation-adapter` — Let a player cite another entry and see the citation resolved, refusing a citation of a later entry.
5. `u3-record-residue-link-bind` — Link an entry to its residue anchor so the player can navigate from the record to the physical evidence that contradicts it.
6. `u3-record-write-adapter` — Implement writing an entry through the domain command, with the attention cost visible before the player commits.
7. `u3-record-correct-adapter` — Implement correction so the prior text remains visible; this is the point of the mechanic, not an implementation detail.
8. `u3-record-lock-adapter` — Implement locking with a confirmation, since it is irreversible and the player should know that before doing it.
9. `u3-record-rejection-doc` — Document every rejection the journal UI can show and its exact wording, matching the vocabulary from WARD-22.
10. `u3-record-screenreader-test` — Test that every control carries a screen-reader label and that entry status is announced, not only coloured.
11. `u3-record-reload-route` — Write, correct, lock, save, reload, and confirm every state survived exactly.
12. `u3-record-route-capture` — Capture the route and attach it with the human review this visible-change category requires.
Checks: PlayMode write/reload/lock route; screen-reader labels.
Evidence: none
Remainder: none

### WARD-33 — Complete the accessible Day 1 route

ID: WARD-33
State: OPEN
Owner: unassigned
Category: UI, input, and accessibility
Subcategory: Keyboard, captions, contrast, and reduced motion
Tags: accessibility, keyboard, captions, reduced-motion
Handles: u3-access-control-census-doc, u3-access-text-scale-adapter, u3-access-caption-toggle-adapter, u3-access-motion-reduction-adapter, u3-access-hold-alternative-rule, u3-access-brightness-adapter, u3-access-focus-order-test, u3-access-suite-test, u3-access-keyboard-route, u3-access-contrast-review, u3-access-route-capture, u3-access-severity-doc
Runbook:
1. List every required Day 1 control and complete the route with keyboard input before polishing pointer interactions.
2. Check focus order, contrast, text scaling, captions, and reduced motion at their supported extremes.
3. Capture the route, file each failure by severity, and rerun after the first unreachable or confusing step is fixed.
Depends on: WARD-22, WARD-23, WARD-30, WARD-31, WARD-32
Outcome: Day 1 is completable with keyboard-only input, captions, scalable text, and reduced motion.
Inputs: real human usability reviewer and accessibility checklist.
Files: accessibility settings, UI tests, evidence capture.
Do not touch: campaign expansion.
Steps:
1. `u3-access-control-census-doc` — Census every interactive control in the game so far and record how each is reached without a mouse. Gaps found here are the packet's work list.
2. `u3-access-text-scale-adapter` — Implement text scaling that reflows rather than clips, and check the longest authored string at the largest scale.
3. `u3-access-caption-toggle-adapter` — Implement the caption toggle and make captions the default on, since the game ships text-first.
4. `u3-access-motion-reduction-adapter` — Implement reduced motion covering camera shake, transitions, and any drift animation.
5. `u3-access-hold-alternative-rule` — Give every press-and-hold action a tap alternative, so hold is a preference and never a requirement.
6. `u3-access-brightness-adapter` — Implement a brightness/contrast control calibrated against the darkest authored scene, not a mid-tone one.
7. `u3-access-focus-order-test` — Test focus order across every panel and the world, asserting no trap and no unreachable control.
8. `u3-access-suite-test` — Run the accessibility suite in PlayMode as one command, so a regression is caught by CI and not by a person.
9. `u3-access-keyboard-route` — Complete the whole Day 1 route keyboard-only, in a build, without touching the mouse once.
10. `u3-access-contrast-review` — Measure contrast on every text surface against the darkest and brightest scenes, and record the numbers.
11. `u3-access-route-capture` — Capture the keyboard route at both required resolutions and the narrow viewport.
12. `u3-access-severity-doc` — Record every finding with a severity and an owning packet, so nothing is closed by being forgotten.
Checks: human keyboard route; PlayMode accessibility suite.
Evidence: none
Remainder: none

### WARD-40 — Close the first human-testable vertical slice

ID: WARD-40
State: OPEN
Owner: unassigned
Category: Verification, telemetry, and release
Subcategory: Day 1 integration gate
Tags: vertical-slice, qa, telemetry, human-test
Handles: u3-slice-script-doc, u3-slice-expected-state-fixture, u3-slice-regression-test, u3-slice-clean-profile-route, u3-slice-reload-route, u3-slice-route-capture, u3-slice-human-review, u3-slice-comprehension-doc, u3-slice-triage-doc, u3-slice-blocker-rerun-route
Runbook:
1. Freeze a single Day 1 acceptance script with expected prompts, room IDs, resources, choices, and journal outcomes.
2. Run it from a clean Windows profile, including quit/reload, and collect visual, audio, accessibility, and comprehension notes.
3. Fix blockers only, rerun the identical route, and attach the approved capture plus remaining follow-ups.
Depends on: WARD-14, WARD-20, WARD-21, WARD-22, WARD-23, WARD-31, WARD-32, WARD-33
Outcome: A fresh player can complete Day 1, reload a consequence, and explain what happened.
Inputs: canonical Day 1 content and human review.
Files: integration scene, build script, evidence index.
Do not touch: final house art, Acts II–III, locked voice.
Steps:
1. `u3-slice-script-doc` — Write the playthrough script a fresh player will follow, in their words rather than packet vocabulary.
2. `u3-slice-expected-state-fixture` — Record the expected domain state at each checkpoint of that script, so a deviation is identifiable rather than a vague feeling.
3. `u3-slice-regression-test` — Automate the script as a regression test, so the slice stays closed once it closes.
4. `u3-slice-clean-profile-route` — Run the slice from a clean user profile with no prior save or settings, on the supported machine.
5. `u3-slice-reload-route` — Reload mid-slice and confirm the consequence persisted, since a consequence that does not survive a reload is not a consequence.
6. `u3-slice-route-capture` — Capture the full route and attach it with build stamp and track name.
7. `u3-slice-human-review` — Have a fresh player — not the implementer — complete Day 1 unaided. Record where they hesitated.
8. `u3-slice-comprehension-doc` — Ask them to explain what happened in their own words, and record it verbatim. If they cannot, the slice is not closed regardless of the tests.
9. `u3-slice-triage-doc` — Triage every finding into fix-now or an owning packet, with a named reason for each deferral.
10. `u3-slice-blocker-rerun-route` — Fix the blockers and rerun the whole route from a clean profile before closing.
Checks: clean Windows development build; human playthrough approved.
Evidence: none
Remainder: none

### WARD-50 — Produce the approved house asset baseline

ID: WARD-50
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Production meshes and dressing
Tags: world, art, meshes, dressing
Handles: u5-house-rights-ledger-doc, u5-house-intake-quarantine-guard, u5-house-intake-checksum-rule, u5-house-prop-batch-asset, u5-house-room-pair-asset, u5-house-collision-refit-bind, u5-house-scale-verify-test, u5-house-portal-clearance-test, u5-house-focus-id-test, u5-house-hero-prop-doc, u5-house-batch-capture, u5-house-batch-review
Runbook:
1. Create rights-ledger entries and quarantine files before importing any third-party asset.
2. Replace proxies for one room pair using stable bindings, then check collision, scale, portals, and focus IDs.
3. Obtain visual approval for the batch and keep rejected or unapproved assets out of release folders.
Depends on: WARD-40
Outcome: The first approved room batch replaces proxies without changing IDs, scale, or routes.
Inputs: rights-cleared house sources, modeling plan, greybox bindings.
Files: model import settings, room prefabs, material slots.
Do not touch: domain rules and packet database.
Steps:
1. `u5-house-rights-ledger-doc` — Record the licence, source, and permitted use for every asset before it enters the repository. An asset without a ledger row does not get imported.
2. `u5-house-intake-quarantine-guard` — Stage incoming assets in a quarantine folder that the build ignores, so nothing unvetted can reach a scene.
3. `u5-house-intake-checksum-rule` — Checksum each source asset on intake and record it, so a later silent replacement is detectable.
4. `u5-house-prop-batch-asset` — Prepare the first prop batch to the calibrated scale from WARD-20, checking each against the calibration scene.
5. `u5-house-room-pair-asset` — Replace the first room pair's proxies, keeping every data ID identical — the swap is visual only.
6. `u5-house-collision-refit-bind` — Refit collision to the new geometry rather than inheriting the proxy's, and re-run the movement tests.
7. `u5-house-scale-verify-test` — Verify scale against the calibration reference; a door that reads slightly wrong here will read very wrong at eye height.
8. `u5-house-portal-clearance-test` — Test portal clearance with the player capsule, since new geometry is where a passable door becomes impassable.
9. `u5-house-focus-id-test` — Test that every focus target in the batch still resolves to its original data ID.
10. `u5-house-hero-prop-doc` — Identify the hero props the room's meaning depends on and record why each one matters, so later batches do not dilute them.
11. `u5-house-batch-capture` — Capture the room batch before and after at both resolutions.
12. `u5-house-batch-review` — Have a human compare the captures and approve. Art batches close on human eyes, never on a passing import.
Checks: room-batch PlayMode route and capture review.
Evidence: none
Remainder: none

### WARD-51 — Establish period lighting and materials

ID: WARD-51
State: OPEN
Owner: unassigned
Category: Rendering and presentation
Subcategory: URP baseline, practicals, and weather
Tags: rendering, urp, lighting, weather
Handles: u5-light-urp-asset, u5-light-exposure-calibration-scene, u5-light-material-library-asset, u5-light-practical-asset, u5-light-shadow-profile-decide, u5-light-fog-asset, u5-light-rain-asset, u5-light-wetness-asset, u5-light-quality-tier-guard, u5-light-perf-capture, u5-light-readability-review, u5-light-baseline-doc
Runbook:
1. Establish a neutral URP exposure and lighting calibration scene before tuning individual rooms.
2. Build reusable material, practical-light, rain, and wetness variants from approved assets only.
3. Review readability and performance together on target hardware, then lock the baseline before rupture experiments.
Depends on: WARD-50
Outcome: A readable period lighting baseline supports domestic care, procedure, memory, and place.
Inputs: materials JSON, lighting references, accessibility profile.
Files: URP assets, light profiles, shaders/materials, captures.
Do not touch: experimental rupture effects until baseline approval.
Steps:
1. `u5-light-urp-asset` — Configure the URP asset and quality tiers once, and record which tier the supported machine targets.
2. `u5-light-exposure-calibration-scene` — Build the exposure calibration scene, so 'too dark' becomes a measurement rather than an argument.
3. `u5-light-material-library-asset` — Build the material library from the imported material data, one material family at a time.
4. `u5-light-practical-asset` — Author the practical lights — lamp, hearth, candle — as the room's actual sources, since the game is lit by what is in it.
5. `u5-light-shadow-profile-decide` — Decide and record the shadow distance, cascade count, and resolution the target machine sustains.
6. `u5-light-fog-asset` — Author the interior fog so depth reads without flattening the darks into grey.
7. `u5-light-rain-asset` — Author rain as an exterior and window effect, keeping it off the interior surfaces it should not touch.
8. `u5-light-wetness-asset` — Author surface wetness response for the window and threshold materials only, where weather can actually reach.
9. `u5-light-quality-tier-guard` — Guard the quality tiers so a lower tier degrades readability last; darkness is atmosphere, illegibility is a bug.
10. `u5-light-perf-capture` — Capture frame timings on the supported machine at both resolutions, and record the numbers rather than an impression.
11. `u5-light-readability-review` — Have a human confirm every authored surface is readable at the accessibility brightness floor, not only at the artist's setting.
12. `u5-light-baseline-doc` — Write the lighting baseline down — values, references, and what may not change — so later batches extend it rather than relitigate it.
Checks: human baseline review; performance capture.
Evidence: none
Remainder: none

### WARD-52 — Expand rooms, residues, and sound by batch

ID: WARD-52
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Room pairs, physical consequences, and sound
Tags: world, residues, acoustics, production
Handles: u5-expand-batch-selection-doc, u5-expand-room-pair-asset, u5-expand-residue-asset, u5-expand-residue-bind, u5-expand-cue-bind, u5-expand-soundscene-asset, u5-expand-day-route, u5-expand-batch-capture, u5-expand-acoustic-review, u5-expand-visual-review
Runbook:
1. Choose one room pair with its specific consequence and acoustic requirements.
2. Bind visual residue and cues by stable IDs, then replay the route without changing schedule or domain code.
3. Review visuals, navigation, and acoustics in one capture session before starting the next room batch.
Depends on: WARD-51
Outcome: Production room batches preserve the route while adding authored physical and acoustic evidence.
Inputs: canonical consequences, inventory, soundscape, approved baseline.
Files: room prefabs, residue bindings, audio scenes, captures.
Do not touch: unapproved story rewrites.
Steps:
1. `u5-expand-batch-selection-doc` — Select the next room batch by what the campaign needs next, and record why those rooms and not others.
2. `u5-expand-room-pair-asset` — Build the room pair against the approved baseline, reusing the material library rather than adding one-off materials.
3. `u5-expand-residue-asset` — Author the residue art for the consequences these rooms carry, since the house's disagreement with the record is the point.
4. `u5-expand-residue-bind` — Bind residue art to the residue IDs committed by WARD-12, so a story consequence actually appears.
5. `u5-expand-cue-bind` — Bind the room's audio cues to its emitters, keeping the routing rules from WARD-23.
6. `u5-expand-soundscene-asset` — Author the room's sound bed so it is distinguishable from its neighbours with the door shut.
7. `u5-expand-day-route` — Run the affected day's route in PlayMode and confirm the batch changed nothing about reachability.
8. `u5-expand-batch-capture` — Capture the batch at both resolutions, before and after.
9. `u5-expand-acoustic-review` — Have a human listen with the door open and shut and confirm the rooms read as different places.
10. `u5-expand-visual-review` — Have a human approve the visual batch against the baseline and record the verdict.
Checks: per-batch PlayMode and human review.
Evidence: none
Remainder: none

### WARD-60 — Implement Acts I–III from the schedule

ID: WARD-60
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Campaign progression
Tags: story, campaign, schedule, consequences
Handles: u4-act-batch-doc, u4-act-one-bind, u4-act-one-fixture, u4-act-two-bind, u4-act-two-fixture, u4-act-three-bind, u4-act-three-fixture, u4-act-consequence-test, u4-act-callback-audit-doc, u4-act-saveload-route, u4-act-pacing-review, u4-act-batch-capture
Runbook:
1. Split the approved schedule into day-range batches with required rooms, choices, callbacks, and expected residues.
2. Import and integrate one batch at a time, then replay known seeds instead of manually recreating timing or line IDs.
3. Save/reload at each batch boundary and hold a pacing review before enabling the next act.
Depends on: WARD-40, WARD-52
Outcome: The full campaign runs from the validated scenario schedule, corpus, journal, resources, and consequences.
Inputs: closed story batches, approved room/audio batches.
Files: campaign fixtures, event bindings, PlayMode scenarios.
Do not touch: invented event timing and duplicate narrative authorities.
Steps:
1. `u4-act-batch-doc` — Plan the act batches and record which days each covers, so implementation order is decided once.
2. `u4-act-one-bind` — Bind Act I days to their scheduled events, changing no rule — only wiring authored content.
3. `u4-act-one-fixture` — Build the Act I fixture that drives those days end to end from a fixed seed.
4. `u4-act-two-bind` — Bind Act II days, where callbacks from Act I first have to resolve.
5. `u4-act-two-fixture` — Build the Act II fixture, asserting Act I's flags are visible in Act II's conditions.
6. `u4-act-three-bind` — Bind Act III days, where the record and the house diverge most.
7. `u4-act-three-fixture` — Build the Act III fixture, asserting residues authored earlier are still present and correct.
8. `u4-act-consequence-test` — Test that a choice made in one act changes an outcome in a later one, which is the whole campaign's premise.
9. `u4-act-callback-audit-doc` — Audit every callback flag for a reader; a flag written and never read is either dead or a missing scene.
10. `u4-act-saveload-route` — Save and reload at each act boundary and confirm the campaign continues identically.
11. `u4-act-pacing-review` — Have a human play consecutive days and report where pacing sags or rushes.
12. `u4-act-batch-capture` — Capture each act's route and attach it.
Checks: act fixtures, save/reload, human pacing review.
Evidence: none
Remainder: none

### WARD-61 — Implement Day 21 and derived endings

ID: WARD-61
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Endings and final record
Tags: domain, endings, journal, consequences
Handles: u4-end-input-schema, u4-end-resolver-rule, u4-end-compliance-fixture, u4-end-sync-fixture, u4-end-rupture-fixture, u4-end-boundary-test, u4-end-final-record-adapter, u4-end-rupture-scene, u4-end-replay-test, u4-end-campaign-review
Runbook:
1. List the exact snapshot inputs for each ending and implement a deterministic resolver without hidden developer switches.
2. Build fixtures for every ending and boundary combination, including incomplete journal and residue cases.
3. Run the full campaign review and verify the final record reports history without rewriting it.
Depends on: WARD-60
Outcome: The Day 21 rupture and three endings derive from recorded choices, journal state, and residues.
Inputs: ending acceptance rules, session snapshot, canonical final content.
Files: ending domain rules, final scene, tests.
Do not touch: arbitrary ending selection or hidden developer switches.
Steps:
1. `u4-end-input-schema` — Define exactly which recorded values feed the ending: choices, journal state, residues. Nothing else may influence it.
2. `u4-end-resolver-rule` — Implement the resolver as a pure function of that input, so an ending can be explained after the fact.
3. `u4-end-compliance-fixture` — Build the fixture that reaches the compliance ending and assert it is reached for the documented reason.
4. `u4-end-sync-fixture` — Build the fixture for the synchronisation ending with the same assertion.
5. `u4-end-rupture-fixture` — Build the fixture for the rupture ending with the same assertion.
6. `u4-end-boundary-test` — Test the boundary between endings, since a run one value away from a different ending is where the resolver breaks.
7. `u4-end-final-record-adapter` — Present the final record so the player can see what their own journal said versus what happened.
8. `u4-end-rupture-scene` — Build the Day 21 rupture presentation, keeping distortion to the rupture state as the masterplan requires.
9. `u4-end-replay-test` — Replay each ending from its seed and assert identical outcomes.
10. `u4-end-campaign-review` — Have a human complete a full campaign and confirm the ending felt earned by their own choices.
Checks: deterministic ending fixture; human campaign review.
Evidence: none
Remainder: none

### WARD-62 — Add locked voice after text approval

ID: WARD-62
State: OPEN
Owner: unassigned
Category: Audio, voice, and acoustics
Subcategory: Voice coverage and licensing
Tags: audio, voice, licensing, captions
Handles: u5-voice-textlock-decide, u5-voice-rights-doc, u5-voice-lineid-test, u5-voice-import-adapter, u5-voice-caption-timing-bind, u5-voice-mixer-bind, u5-voice-missing-fallback-test, u5-voice-audio-off-route, u5-voice-coverage-capture, u5-voice-hardware-review
Runbook:
1. Freeze text and line IDs, then record a rights ledger for every approved performance before importing audio.
2. Import clips through metadata that maps each line to captions, timing, mixer route, and a text-only fallback.
3. Test missing clips, disabled audio, speakers, and headphones; reject any line without a safe fallback.
Depends on: WARD-31, WARD-60
Outcome: Approved voice coverage is imported with caption timing and a safe text fallback.
Inputs: locked script, rights records, approved performances.
Files: voice assets, import metadata, mixer routes, caption timings.
Do not touch: unapproved generated voice in release builds.
Steps:
1. `u5-voice-textlock-decide` — Lock the script before any recording. Recording against unlocked text guarantees rework and is the most expensive mistake available here.
2. `u5-voice-rights-doc` — Record performer rights and permitted use per line before import, with no exceptions for placeholder takes.
3. `u5-voice-lineid-test` — Test that every voice file maps to a real line ID and that no line ID has two files.
4. `u5-voice-import-adapter` — Import approved takes with their line IDs, keeping the text as the source of truth.
5. `u5-voice-caption-timing-bind` — Bind caption timing to the audio so captions track the performance rather than a guessed duration.
6. `u5-voice-mixer-bind` — Route voice through its own mixer group so it can be balanced without moving the bed.
7. `u5-voice-missing-fallback-test` — Test that a missing take falls back to text silently and does not stall the conversation.
8. `u5-voice-audio-off-route` — Run a conversation with audio fully off and confirm nothing is lost, since text remains the canonical channel.
9. `u5-voice-coverage-capture` — Capture coverage: which lines have approved audio and which do not, as a number rather than an impression.
10. `u5-voice-hardware-review` — Have a human review the mix on headphones and speakers and record the verdict.
Checks: voice audit; headphone/speaker human review.
Evidence: none
Remainder: none

### WARD-70 — Package and release the Windows candidate

ID: WARD-70
State: OPEN
Owner: unassigned
Category: Verification, telemetry, and release
Subcategory: Performance, recovery, and packaging
Tags: release, windows, performance, recovery
Handles: u6-rel-manifest-doc, u6-rel-digest-freeze-rule, u6-rel-preflight-guard, u6-rel-build-adapter, u6-rel-checksum-doc, u6-rel-clean-install-route, u6-rel-no-devtools-route, u6-rel-recovery-route, u6-rel-accessibility-route, u6-rel-perf-capture, u6-rel-rollback-doc, u6-rel-human-review
Runbook:
1. Freeze the release manifest, package lock, generated-content digest, rights ledger, and known-issue list.
2. Build and install from a clean Windows profile, then complete the release route without developer tools.
3. Record performance and recovery evidence, publish checksums and rollback notes, and stop on any release blocker.
Depends on: WARD-14, WARD-33, WARD-61, WARD-62
Outcome: A clean Windows x64 candidate installs, runs, saves, recovers, and passes the release checklist.
Inputs: all closed packets, target hardware, release profile.
Files: build scripts, release notes, evidence index, checksums.
Do not touch: source authority files during packaging.
Steps:
1. `u6-rel-manifest-doc` — Write the release manifest: every content digest, the editor version, the packet set, and the target machine.
2. `u6-rel-digest-freeze-rule` — Freeze source digests at candidate time, so the artifact can always be traced to exact inputs.
3. `u6-rel-preflight-guard` — Implement the preflight that refuses to build when a required packet is open or a digest does not match.
4. `u6-rel-build-adapter` — Produce the candidate through the same build command CI uses, never a local one-off configuration.
5. `u6-rel-checksum-doc` — Publish the artifact checksum alongside the build so a tester can confirm what they installed.
6. `u6-rel-clean-install-route` — Install on a clean machine with no editor and no prior profile, and complete a session.
7. `u6-rel-no-devtools-route` — Confirm no debug overlay, developer console, or test scene ships in the candidate.
8. `u6-rel-recovery-route` — Run the save-recovery drill on the candidate: corrupt the active slot, relaunch, recover, continue.
9. `u6-rel-accessibility-route` — Re-run the keyboard-only and caption routes on the candidate, since a build can regress what the editor passed.
10. `u6-rel-perf-capture` — Capture frame timings on the target machine at both resolutions and record them against the WARD-51 baseline.
11. `u6-rel-rollback-doc` — Write the rollback procedure and the conditions that trigger it, before the release rather than during an incident.
12. `u6-rel-human-review` — Have a human complete a full playthrough on the candidate and sign off. `unity-windows` release status comes from this review and certifies that track only.
Checks: release preflight; human playthrough; recovery drill.
Evidence: none
Remainder: none

## 9. Verification matrix

| Layer | Required proof |
|---|---|
| Domain | EditMode deterministic fixtures and invariant tests |
| Content | Valid/invalid import fixtures with source ID/path errors |
| Database | Idempotent sync, source change update, board-owned field preservation |
| Save | Interrupted write, checksum failure, recovery slot, schema rejection |
| World | PlayMode movement, portal, focus, residue, and route checks |
| Story | Schedule/choice replay with stable seed and callback flags |
| UI | Keyboard, captions, focus order, text scale, reduced motion |
| Audio | Portal transmission, deterministic cue selection, fallback captions |
| Visual | Human captures on target profile; no model-only approval |
| Release | Clean Windows build, install, save/reload, performance, and evidence |

## 10. Risks and stop conditions

Stop and record `BLOCKED` when the source schedule, rights, database
credentials, Unity package lock, or human decision needed for the next packet is
missing. Stop release work when a save can be lost, a required action is
pointer-only, a source import is partial, or a card sync overwrites user-owned
board state. Do not solve a blocked product decision with a hidden default.

## 11. Compact database-facing ledger

The website reads the packets below by stable ID and mirrors them to
`unity-plan`. Keep this table synchronized with packet `State`, `Owner`, and
`Evidence`.

| Packet | State | Owner | Milestone | Evidence |
|---|---|---|---|---|
| WARD-00 | OPEN | unassigned | U0 | none |
| WARD-01 | OPEN | unassigned | U0 | none |
| WARD-02 | OPEN | unassigned | U1 | none |
| WARD-03 | OPEN | unassigned | U1 | none |
| WARD-04 | OPEN | unassigned | U0 | none |
| WARD-05 | OPEN | unassigned | U0 | none |
| WARD-10 | OPEN | unassigned | U1 | none |
| WARD-11 | OPEN | unassigned | U1 | none |
| WARD-12 | OPEN | unassigned | U1 | none |
| WARD-13 | OPEN | unassigned | U1 | none |
| WARD-14 | OPEN | unassigned | U2 | none |
| WARD-20 | OPEN | unassigned | U2 | none |
| WARD-21 | OPEN | unassigned | U2 | none |
| WARD-22 | OPEN | unassigned | U2 | none |
| WARD-23 | OPEN | unassigned | U2 | none |
| WARD-30 | OPEN | unassigned | U3 | none |
| WARD-31 | OPEN | unassigned | U3 | none |
| WARD-32 | OPEN | unassigned | U3 | none |
| WARD-33 | OPEN | unassigned | U3 | none |
| WARD-40 | OPEN | unassigned | U3 | none |
| WARD-50 | OPEN | unassigned | U5 | none |
| WARD-51 | OPEN | unassigned | U5 | none |
| WARD-52 | OPEN | unassigned | U5 | none |
| WARD-60 | OPEN | unassigned | U4 | none |
| WARD-61 | OPEN | unassigned | U4 | none |
| WARD-62 | OPEN | unassigned | U5 | none |
| WARD-70 | OPEN | unassigned | U6 | none |

## 12. Development detail playbook

### 12.1 One-way data flow

Keep the runtime path explicit:

```text
validated source -> immutable content snapshot -> GameSession command
-> domain result -> saved snapshot + journal event -> UI/audio/presentation
```

`MonoBehaviour`, scene objects, particle systems, and UI Toolkit views consume
domain results. They do not mutate the clock, schedule, inventory, journal, or
save store directly. Every command returns either a typed success result with
the state delta or a typed rejection with a player-facing reason.

### 12.2 C# implementation shape

For each packet, prefer this small vertical slice:

1. `Runtime/Domain/<Feature>State.cs`: immutable state and value types.
2. `Runtime/Domain/<Feature>Rules.cs`: pure algorithm with no Unity namespace.
3. `Runtime/Content/<Feature>Definition.cs`: imported authored data and
   validation rules.
4. `Runtime/Integration/<Feature>Service.cs`: maps commands to domain rules
   and emits events through `GameSession`.
5. `Runtime/UI` or `Runtime/Presentation`: observes events and renders them.
6. `Tests/EditMode/<Feature>RulesTests.cs` plus one assembled PlayMode test
   when scene binding or input is involved.

Avoid a singleton service locator, hidden static state, `FindObjectOfType`,
reflection-driven registration, and gameplay logic in `Update()`. A feature is
not complete until it can be constructed in a plain EditMode fixture.

### 12.3 Test design and evidence

Use the smallest test that proves the contract, then one integration proof:

- pure rules: table-driven cases for boundaries, rejection, and determinism;
- content: valid, missing-reference, duplicate-ID, and out-of-range fixtures;
- persistence: interrupted write, checksum failure, recovery, and schema bump;
- integration: one fresh-run route through the assembled bootstrap scene;
- accessibility: keyboard-only route, focus order, captions, text scale, and
  reduced-motion capture;
- release: clean checkout, Windows build, install, reload, and evidence digest.

Name tests after observable behaviour (`RejectsClosedPortal`,
`ReplayKeepsChoiceStable`) rather than implementation methods. Attach the
command, test output, build/profile, source digest, and capture path to the
packet evidence. A green unit suite without an assembled proof leaves the
packet `PARTIAL`.

### 12.4 Error and recovery policy

Validate at boundaries, return errors as data, and keep the last known-good
state. An importer writes to a temporary generated directory and swaps it only
after every source has validated. A save writes a temporary file, flushes it,
renames the active slot, and retains one recovery slot. A database sync
validates the entire packet set before its first card write and retries
idempotently after transient failure.

### 12.5 Performance and review budgets

The first playable must keep domain commands allocation-light, avoid per-frame
filesystem or database work, and keep presentation polling bounded. Measure
before optimizing: record frame time, memory, load time, save time, and audio
voice latency on the target Windows profile. Review each packet for stable IDs,
source ownership, accessibility, deterministic replay, and a reversible change
before moving it to `CLOSED`.

## 13. Greenfield definition of done

The Unity project is ready for release consideration only when the product
masterplan gates pass, all required packets are `CLOSED`, the database mirror
has no stale source-owned fields, the clean Windows candidate has a recorded
digest, save recovery succeeds, accessibility is human-reviewed, and the full
21-day campaign can be completed without Dart or browser runtime dependencies.
