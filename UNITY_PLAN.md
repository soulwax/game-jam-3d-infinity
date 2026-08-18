# THE QUARANTINE — UNITY GREENFIELD IMPLEMENTATION PLAN

> Status: active greenfield implementation authority
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
`external/docs/MASTERPLAN.md`. Unity owns the new production runtime. Dart is
never a second runtime to keep in lockstep, and no Dart class is a Unity
requirement. Shared authored content is synchronized through validated source
files and the project-management database, not by copying runtime state.

## 0. Working protocol

### 0.1 Authority order

1. `external/docs/MASTERPLAN.md` owns product intent and human acceptance.
2. This file owns Unity categories, packet order, architecture, and database
   synchronization.
3. `text/story.screenplay` and linked corpus files own story content.
4. `assets/house/*.json` own authored house, inventory, material, and sound
   data after validation.
5. Dart files named in section 3 are reference algorithms, never authority.
6. Unity assets are generated consumers of those sources; they are not a second
   content database.

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

**Subcategories:** screenplay; dialogue corpus; house rooms; portals; inventory;
materials; soundscape; schema validation; generated Unity assets.

Source JSON/text is validated first, then converted into typed immutable
runtime data. Stable IDs are mandatory. A failed import names the ID and source
path and produces no partial asset set.

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

The screenplay schedule is the only event authority. The runtime resolves
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
source packet MIG-40 -> board project unity-plan -> card unity-mig-40
```

`MIG-*` IDs are retained for database and board compatibility; they no longer
mean migration. They are implementation packet IDs.

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
4. Upsert each `unity-mig-##` card's source-owned fields.
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
- Existing cards created under the old `Unity migration plan` name are renamed
  once to `Unity greenfield build plan`; a custom project name is preserved.

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

## 8. Ordered implementation packets

### MIG-00 — Choose the greenfield contract

ID: MIG-00
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Scope and decisions
Tags: greenfield, unity, decisions
Depends on: none
Outcome: A reviewed greenfield charter names the Unity target, source roots, first playable, and non-goals.
Inputs: `external/docs/MASTERPLAN.md`, this plan, Dart reference map.
Files: `UNITY_PLAN.md`, `unity/Docs/Decisions/DEC-001-greenfield.md`
Do not touch: Dart runtime, story prose, database rows.
Steps:
1. Confirm Unity 6.3 LTS patch and Windows build target.
2. Confirm the first playable route and explicit exclusions.
3. Record whether any optional package is approved.
Checks: Human review of the charter; no Unity project required yet.
Evidence: none
Remainder: none

### MIG-01 — Create the empty Unity foundation

ID: MIG-01
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Project scaffold and CI
Tags: greenfield, unity, ci, tooling
Depends on: MIG-00
Outcome: A clean checkout opens the empty Unity project, runs a smoke test, and builds Windows x64.
Inputs: approved Unity patch, package list, Windows build environment.
Files: `unity/ProjectSettings`, `unity/Packages`, `unity/Assets/Quarantine/Tests`, CI workflow.
Do not touch: gameplay rules, imported content, final art.
Steps:
1. Create the project and pin packages.
2. Add `Bootstrap.unity` and a deterministic EditMode smoke test.
3. Add a reproducible Windows build command.
Checks: Clean clone open; EditMode tests; development build.
Evidence: none
Remainder: none

### MIG-02 — Define typed source schemas

ID: MIG-02
State: OPEN
Owner: unassigned
Category: Authored content and import
Subcategory: Schemas and IDs
Tags: content, schemas, validation, ids
Depends on: MIG-01
Outcome: C# content records validate house, story, inventory, material, sound, and schedule sources without Unity scene access.
Inputs: `assets/house/*.json`, screenplay/corpus, Dart parsers as behaviour references.
Files: `Runtime/Content`, `Editor/Import` schemas and tests.
Do not touch: generated prefabs, gameplay controllers.
Steps:
1. Define stable ID and reference types.
2. Validate duplicates, missing references, ranges, and source digests.
3. Add fixture tests for valid and invalid source.
Checks: EditMode schema suite; malformed fixture fails with path and ID.
Evidence: none
Remainder: none

### MIG-03 — Build deterministic content import

ID: MIG-03
State: OPEN
Owner: unassigned
Category: Authored content and import
Subcategory: Import and generated assets
Tags: content, import, determinism, assets
Depends on: MIG-02
Outcome: Valid source produces typed generated assets; invalid source produces no partial output.
Inputs: validated schemas and canonical text/JSON.
Files: `Editor/Import`, `Content/Generated`.
Do not touch: runtime session and scene art.
Steps:
1. Import screenplay schedule and corpus.
2. Import room graph, portals, inventory, materials, and soundscape.
3. Write source digest and importer version into generated assets.
Checks: Two identical imports produce identical IDs/digests; invalid import is atomic.
Evidence: none
Remainder: none

### MIG-04 — Synchronize the plan with the project database

ID: MIG-04
State: OPEN
Owner: unassigned
Category: Persistence and database synchronization
Subcategory: Planner cards and activity
Tags: database, sync, planner, audit
Depends on: MIG-00
Outcome: Every valid implementation packet has an idempotent `unity-mig-##` card with source-owned details.
Inputs: `syncUnityPlannerCards`, `DATABASE_URL`, packet parser.
Files: website persistence/tests and database-sync documentation.
Do not touch: gameplay save files, user-owned board lane positions.
Steps:
1. Add packet category/subcategory and normalized tags to card details and tag links.
2. Upsert changed source-owned fields while preserving board-owned fields.
3. Record plan digest and changed packet count in activity.
4. Add parser validation, retry, tag-preservation, and conflict tests.
Checks: Validation rejects duplicate/missing IDs before writes; website tests; hosted sync with a changed packet; repeat sync is a no-op; retry after transient failure.
Evidence: none
Remainder: none

### MIG-05 — Install human-sized code guardrails

ID: MIG-05
State: OPEN
Owner: unassigned
Category: Foundation and project operations
Subcategory: Code quality and review
Tags: unity, csharp, testing, guardrails
Depends on: MIG-01
Outcome: Unity code has analyzers, test commands, ownership boundaries, and a review checklist.
Inputs: section 0 rules.
Files: `.editorconfig`, analyzers, CI, `unity/Docs/CONTRIBUTING.md`.
Do not touch: product behaviour.
Steps:
1. Enforce no domain-to-UnityEngine references.
2. Add warnings for empty tests and accidental generated edits.
3. Document the one-packet human workflow.
Checks: CI fails on a deliberate boundary violation.
Evidence: none
Remainder: none

### MIG-10 — Implement clock, resources, and deterministic difficulty

ID: MIG-10
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Day loop and resource commands
Tags: domain, clock, resources, determinism
Depends on: MIG-02, MIG-05
Outcome: A pure session advances time and atomically spends hours, heat, and rations.
Inputs: `lib/game/session.dart` (`advance`, `sleep`, `spendHoursAndGas`), product pacing decision.
Files: `Runtime/Domain/Clock`, `Resources`, `Difficulty`, tests.
Do not touch: UI timers, MonoBehaviour.Update, final pacing art.
Steps:
1. Implement immutable snapshot and command results.
2. Port only the tested resource invariants.
3. Add seeded difficulty and day-boundary tests.
Checks: EditMode fixture replay produces the same snapshot and event list.
Evidence: none
Remainder: none

### MIG-11 — Implement journal truth and drift

ID: MIG-11
State: OPEN
Owner: unassigned
Category: Journal and evidence
Subcategory: Entries, corrections, and night drift
Tags: journal, evidence, consequences, save
Depends on: MIG-10
Outcome: Entries can be written, cited, corrected, verified, and locked; night drift is deterministic and visible.
Inputs: `lib/game/session.dart` journal methods, canonical journal rules.
Files: `Runtime/Domain/Journal`, tests.
Do not touch: journal UI and prose authoring.
Steps:
1. Model entry status and citations with stable ordinals.
2. Implement correction/lock rejection rules.
3. Apply seeded drift only at the sleep boundary.
Checks: Replay fixture; locked entry cannot be silently changed.
Evidence: none
Remainder: none

### MIG-12 — Implement scheduled story events

ID: MIG-12
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Schedule, choices, and callbacks
Tags: story, schedule, choices, callbacks
Depends on: MIG-03, MIG-10, MIG-11
Outcome: The screenplay schedule delivers one canonical encounter and records its callback flags.
Inputs: screenplay/corpus import, `NarrativeEncounterDirector.resolveEncounter`, `commitChoice`.
Files: `Runtime/Story`, tests.
Do not touch: hard-coded replacement schedules and prototype narrative directors.
Steps:
1. Resolve event by day/time/conditions.
2. Present choices from imported content.
3. Commit flags, residues, journal facts, and activity as one domain command.
Checks: Same seed and choice sequence produces the same flags and residue IDs.
Evidence: none
Remainder: none

### MIG-13 — Compose the GameSession

ID: MIG-13
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Composition root and event queue
Tags: domain, session, events, integration
Depends on: MIG-10, MIG-11, MIG-12
Outcome: Bootstrap creates one session whose snapshot drives all current systems.
Inputs: domain packets and Dart session event-queue behaviour.
Files: `Runtime/Domain/GameSession`, bootstrap composition, tests.
Do not touch: global singletons and scene lookups.
Steps:
1. Compose clock, resources, journal, story, residues, and seed.
2. Expose read-only snapshot and drained domain events.
3. Add command rejection telemetry.
Checks: PlayMode bootstrap route; no duplicate session owner.
Evidence: none
Remainder: none

### MIG-14 — Add resilient local saves

ID: MIG-14
State: OPEN
Owner: unassigned
Category: Persistence and database synchronization
Subcategory: Save slots and recovery
Tags: save, recovery, checksums, persistence
Depends on: MIG-13
Outcome: New run, save, load, corrupted active slot, and recovery slot all behave safely.
Inputs: `lib/game/save_store.dart` (`write`, `read`), save contract section 5.3.
Files: `Runtime/Save`, EditMode and PlayMode save tests.
Do not touch: hosted planner database or per-frame autosave.
Steps:
1. Serialize the versioned envelope and checksum.
2. Write temporary then replace active; retain recovery.
3. Reject bad data without deleting good data.
Checks: Interrupted-write fixture; build-path reload test.
Evidence: none
Remainder: none

### MIG-20 — Build the data-driven domestic greybox

ID: MIG-20
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Room graph, scale, and binding
Tags: world, rooms, portals, greybox
Depends on: MIG-03, MIG-13
Outcome: Imported room/portal data creates a navigable greybox with stable bindings.
Inputs: house JSON, inventory JSON, `HouseInventory.validateAgainst`.
Files: `Runtime/World`, `Editor/Import`, `Scenes/Day01Greybox`.
Do not touch: final production models and decorative dressing.
Steps:
1. Establish metres, eye height, floor, stairs, and portal conventions.
2. Generate labeled proxy geometry from room data.
3. Bind focus points and residues by ID.
Checks: Room graph validator; PlayMode route reaches every Day 1 target.
Evidence: none
Remainder: none

### MIG-21 — Implement movement and portal crossing

ID: MIG-21
State: OPEN
Owner: unassigned
Category: Movement and tactile interaction
Subcategory: Capsule, stairs, and room transitions
Tags: movement, collision, stairs, portals
Depends on: MIG-20
Outcome: The player can walk, step stairs, collide, and cross only passable portals.
Inputs: `lib/house/collision.dart` (`Capsule.move`, `_tryAxis`, `_moveOnStair`, `portalCross`).
Files: `Runtime/World/Movement`, `Runtime/Interaction/Portals`, tests.
Do not touch: story triggers hidden in movement code.
Steps:
1. Implement capsule sweep and axis-separated resolution.
2. Implement stair enter/restore and portal-plane bounds.
3. Emit room-change domain command to the session.
Checks: Collision fixture; PlayMode ground/upper/cellar route.
Evidence: none
Remainder: none

### MIG-22 — Implement focus and threshold interaction

ID: MIG-22
State: OPEN
Owner: unassigned
Category: Movement and tactile interaction
Subcategory: Focus, doors, letterbox, and objects
Tags: interaction, focus, doors, inventory
Depends on: MIG-21, MIG-20
Outcome: Focused objects expose typed actions with clear success/rejection feedback.
Inputs: inventory/focus data, interaction contract, `InventoryPhysics` bounds.
Files: `Runtime/Interaction`, `Runtime/World` bindings, tests.
Do not touch: generic event bus and hierarchy-name discovery.
Steps:
1. Cast the bounded focus query.
2. Implement open/close/hold/drag/letterbox/chain actions.
3. Send accepted action commands to `GameSession`.
Checks: PlayMode threshold route; accessibility focus order test.
Evidence: none
Remainder: none

### MIG-23 — Add portal acoustics and the Day 1 sound bed

ID: MIG-23
State: OPEN
Owner: unassigned
Category: Audio, voice, and acoustics
Subcategory: Portal transmission and cues
Tags: audio, acoustics, cues, captions
Depends on: MIG-20, MIG-21, MIG-22
Outcome: A visitor and broadcast are spatially audible with closed-door muffle and captions.
Inputs: `lib/engine/audio_planner.dart` (`AudioPlanner._route`, `transmission`, `muffleToGainDb`).
Files: `Runtime/Audio`, mixer setup, cue fixtures.
Do not touch: locked final voice coverage.
Steps:
1. Build a bounded portal route from source room to listener room.
2. Apply distance and portal transmission to mixer parameters.
3. Provide text/caption fallback for every required cue.
Checks: speaker/headphone PlayMode check; deterministic audio-plan fixture.
Evidence: none
Remainder: none

### MIG-30 — Build the persistent UI shell

ID: MIG-30
State: OPEN
Owner: unassigned
Category: UI, input, and accessibility
Subcategory: Pause, settings, and input actions
Tags: ui, input, settings, accessibility
Depends on: MIG-13, MIG-21
Outcome: Pause, settings, input remapping, and return-to-game work without losing the session.
Inputs: input/accessibility product rules.
Files: `Runtime/UI`, UI Toolkit documents/styles, tests.
Do not touch: story-specific text layout.
Steps:
1. Create one persistent UI root owned by bootstrap.
2. Bind Input System actions and focus navigation.
3. Save settings independently from run state.
Checks: keyboard-only PlayMode route; settings survive restart.
Evidence: none
Remainder: none

### MIG-31 — Deliver text-first dialogue and captions

ID: MIG-31
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Dialogue, choices, and fallback
Tags: story, dialogue, captions, fallback
Depends on: MIG-12, MIG-23, MIG-30
Outcome: A visitor conversation presents authored lines, choices, captions, and callbacks without audio.
Inputs: imported corpus, schedule, caption rules.
Files: `Runtime/UI/Dialogue`, `Runtime/Story` presentation adapter, tests.
Do not touch: generated voice assets.
Steps:
1. Render line/choice sequence from typed content.
2. Keep callback commit in the domain command.
3. Make captions timing-independent and readable.
Checks: text-only PlayMode conversation; choice replay fixture.
Evidence: none
Remainder: none

### MIG-32 — Build the working journal UI

ID: MIG-32
State: OPEN
Owner: unassigned
Category: Journal and evidence
Subcategory: Entry editing and citations
Tags: journal, ui, citations, evidence
Depends on: MIG-11, MIG-30
Outcome: The player can inspect, write, cite, correct, verify, and lock a journal entry in-game.
Inputs: journal domain snapshot and commands.
Files: `Runtime/UI/Journal`, UI Toolkit templates, tests.
Do not touch: duplicate UI-side journal state.
Steps:
1. Render immutable entries and uncertainty markers.
2. Send edit/correct/verify/lock commands to the session.
3. Show residues and citations without exposing hidden truth.
Checks: PlayMode write/reload/lock route; screen-reader labels.
Evidence: none
Remainder: none

### MIG-33 — Complete the accessible Day 1 route

ID: MIG-33
State: OPEN
Owner: unassigned
Category: UI, input, and accessibility
Subcategory: Keyboard, captions, contrast, and reduced motion
Tags: accessibility, keyboard, captions, reduced-motion
Depends on: MIG-22, MIG-23, MIG-30, MIG-31, MIG-32
Outcome: Day 1 is completable with keyboard-only input, captions, scalable text, and reduced motion.
Inputs: real human usability reviewer and accessibility checklist.
Files: accessibility settings, UI tests, evidence capture.
Do not touch: campaign expansion.
Steps:
1. Traverse every required action without pointer-only controls.
2. Verify focus order, contrast, text scale, captions, and reduced motion.
3. Fix the first confusing or unreachable step before adding polish.
Checks: human keyboard route; PlayMode accessibility suite.
Evidence: none
Remainder: none

### MIG-40 — Close the first human-testable vertical slice

ID: MIG-40
State: OPEN
Owner: unassigned
Category: Verification, telemetry, and release
Subcategory: Day 1 integration gate
Tags: vertical-slice, qa, telemetry, human-test
Depends on: MIG-14, MIG-20, MIG-21, MIG-22, MIG-23, MIG-31, MIG-32, MIG-33
Outcome: A fresh player can complete Day 1, reload a consequence, and explain what happened.
Inputs: canonical Day 1 content and human review.
Files: integration scene, build script, evidence index.
Do not touch: final house art, Acts II–III, locked voice.
Steps:
1. Run the complete route from a clean profile.
2. Save, quit, reload, and verify the residue and journal.
3. Collect visual/audio/accessibility feedback and fix blockers.
Checks: clean Windows development build; human playthrough approved.
Evidence: none
Remainder: none

### MIG-50 — Produce the approved house asset baseline

ID: MIG-50
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Production meshes and dressing
Tags: world, art, meshes, dressing
Depends on: MIG-40
Outcome: The first approved room batch replaces proxies without changing IDs, scale, or routes.
Inputs: rights-cleared house sources, modeling plan, greybox bindings.
Files: model import settings, room prefabs, material slots.
Do not touch: domain rules and packet database.
Steps:
1. Replace one room pair at a time.
2. Validate scale, collision, portal clearance, and focus IDs.
3. Obtain human visual approval before the next batch.
Checks: room-batch PlayMode route and capture review.
Evidence: none
Remainder: none

### MIG-51 — Establish period lighting and materials

ID: MIG-51
State: OPEN
Owner: unassigned
Category: Rendering and presentation
Subcategory: URP baseline, practicals, and weather
Tags: rendering, urp, lighting, weather
Depends on: MIG-50
Outcome: A readable period lighting baseline supports domestic care, procedure, memory, and place.
Inputs: materials JSON, lighting references, accessibility profile.
Files: URP assets, light profiles, shaders/materials, captures.
Do not touch: experimental rupture effects until baseline approval.
Steps:
1. Establish exposure, shadow, fog, practical, and rain profiles.
2. Add wetness/surface response only where it improves legibility.
3. Measure frame time on the target Windows profile.
Checks: human baseline review; performance capture.
Evidence: none
Remainder: none

### MIG-52 — Expand rooms, residues, and sound by batch

ID: MIG-52
State: OPEN
Owner: unassigned
Category: House and spatial world
Subcategory: Room pairs, physical consequences, and sound
Tags: world, residues, acoustics, production
Depends on: MIG-51
Outcome: Production room batches preserve the route while adding authored physical and acoustic evidence.
Inputs: canonical consequences, inventory, soundscape, approved baseline.
Files: room prefabs, residue bindings, audio scenes, captures.
Do not touch: unapproved story rewrites.
Steps:
1. Select one room pair and its consequence set.
2. Bind residues and audio cues by stable ID.
3. Review visual, route, and acoustic coherence together.
Checks: per-batch PlayMode and human review.
Evidence: none
Remainder: none

### MIG-60 — Implement Acts I–III from the schedule

ID: MIG-60
State: OPEN
Owner: unassigned
Category: Story delivery and people
Subcategory: Campaign progression
Tags: story, campaign, schedule, consequences
Depends on: MIG-40, MIG-52
Outcome: The full campaign runs from canonical schedule, corpus, journal, resources, and consequences.
Inputs: closed story batches, approved room/audio batches.
Files: campaign fixtures, event bindings, PlayMode scenarios.
Do not touch: invented event timing and duplicate narrative authorities.
Steps:
1. Add one closed story batch at a time.
2. Replay key choices from a known seed.
3. Review pacing and restraint after each act.
Checks: act fixtures, save/reload, human pacing review.
Evidence: none
Remainder: none

### MIG-61 — Implement Day 21 and derived endings

ID: MIG-61
State: OPEN
Owner: unassigned
Category: Domain simulation
Subcategory: Endings and final record
Tags: domain, endings, journal, consequences
Depends on: MIG-60
Outcome: The Day 21 rupture and three endings derive from recorded choices, journal state, and residues.
Inputs: ending acceptance rules, session snapshot, canonical final content.
Files: ending domain rules, final scene, tests.
Do not touch: arbitrary ending selection or hidden developer switches.
Steps:
1. Derive ending inputs from the session snapshot.
2. Test all three outcomes and boundary cases.
3. Present the final record without rewriting history.
Checks: deterministic ending fixture; human campaign review.
Evidence: none
Remainder: none

### MIG-62 — Add locked voice after text approval

ID: MIG-62
State: OPEN
Owner: unassigned
Category: Audio, voice, and acoustics
Subcategory: Voice coverage and licensing
Tags: audio, voice, licensing, captions
Depends on: MIG-31, MIG-60
Outcome: Approved voice coverage is imported with caption timing and a safe text fallback.
Inputs: locked script, rights records, approved performances.
Files: voice assets, import metadata, mixer routes, caption timings.
Do not touch: unapproved generated voice in release builds.
Steps:
1. Verify line IDs against the corpus.
2. Import only rights-cleared files.
3. Test missing/failed voice fallback and captions.
Checks: voice audit; headphone/speaker human review.
Evidence: none
Remainder: none

### MIG-70 — Package and release the Windows candidate

ID: MIG-70
State: OPEN
Owner: unassigned
Category: Verification, telemetry, and release
Subcategory: Performance, recovery, and packaging
Tags: release, windows, performance, recovery
Depends on: MIG-14, MIG-33, MIG-61, MIG-62
Outcome: A clean Windows x64 candidate installs, runs, saves, recovers, and passes the release checklist.
Inputs: all closed packets, target hardware, release profile.
Files: build scripts, release notes, evidence index, checksums.
Do not touch: source authority files during packaging.
Steps:
1. Run clean checkout tests and content validation.
2. Measure boot, room transition, memory, frame time, save recovery, and input.
3. Package the candidate and record exact digest.
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
| MIG-00 | OPEN | unassigned | U0 | none |
| MIG-01 | OPEN | unassigned | U0 | none |
| MIG-02 | OPEN | unassigned | U1 | none |
| MIG-03 | OPEN | unassigned | U1 | none |
| MIG-04 | OPEN | unassigned | U0 | none |
| MIG-05 | OPEN | unassigned | U0 | none |
| MIG-10 | OPEN | unassigned | U1 | none |
| MIG-11 | OPEN | unassigned | U1 | none |
| MIG-12 | OPEN | unassigned | U1 | none |
| MIG-13 | OPEN | unassigned | U1 | none |
| MIG-14 | OPEN | unassigned | U2 | none |
| MIG-20 | OPEN | unassigned | U2 | none |
| MIG-21 | OPEN | unassigned | U2 | none |
| MIG-22 | OPEN | unassigned | U2 | none |
| MIG-23 | OPEN | unassigned | U2 | none |
| MIG-30 | OPEN | unassigned | U3 | none |
| MIG-31 | OPEN | unassigned | U3 | none |
| MIG-32 | OPEN | unassigned | U3 | none |
| MIG-33 | OPEN | unassigned | U3 | none |
| MIG-40 | OPEN | unassigned | U3 | none |
| MIG-50 | OPEN | unassigned | U5 | none |
| MIG-51 | OPEN | unassigned | U5 | none |
| MIG-52 | OPEN | unassigned | U5 | none |
| MIG-60 | OPEN | unassigned | U4 | none |
| MIG-61 | OPEN | unassigned | U4 | none |
| MIG-62 | OPEN | unassigned | U5 | none |
| MIG-70 | OPEN | unassigned | U6 | none |

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
