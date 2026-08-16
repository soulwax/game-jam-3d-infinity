# THE QUARANTINE — UNITY TRANSITION PLAN

> Status: active migration authority
>
> Repository audit: 2026-08-16
>
> Product authority: `tmp/MASTERPLAN.md`
>
> Target: Unity 6.3 LTS, URP, Windows x64 first
>
> Audience: human engineers and small coding subagents

This document explains how to move *The Quarantine* from its current Dart/WebGL
implementation into Unity without turning the port into a second, contradictory
game. It owns Unity architecture, migration order, parity evidence, and the
handoff from Dart. It does not own story meaning, game vision, room purpose,
visual approval, or release criteria; those remain in `tmp/MASTERPLAN.md`.

The transition is a controlled replacement. Unity must first reproduce one
small, truthful product slice. It must not begin by copying every Dart class,
rebuilding Pixeldart, importing every experimental shader, or decorating an
unproven scene.

---

## 0. Operating protocol

### 0.1 Authority order

When sources disagree, use this order:

1. `tmp/MASTERPLAN.md` owns the horror game, player loop, campaign, evidence
   standards, and human-review gates.
2. This document owns the Unity migration and Unity project structure.
3. `text/story.screenplay` owns the 21-day dramatic graph.
4. Linked `text/**/*.txt` files own final prose and dialogue.
5. `assets/house/house.json`, `inventory.json`, `materials.json`, and
   `soundscape.json` own intended house data after they pass import validation.
6. Dart production paths are behavioral reference, including known defects.
7. Dart tests prove only the behavior they execute; their names are not canon.
8. Unity scenes and generated ScriptableObjects are consumers, never independent
   authoring sources.
9. `tmp/HUMAN_AGILE_GUIDE.md` describes human cadence, WIP, review, and handoff;
   it is operational guidance and cannot redefine a packet or product decision.

If this document conflicts with the product masterplan, stop and fix this
document. Do not change the product vision to make a port easier.

### 0.2 Work states

Unity packets use the same lifecycle as the product plan:

```text
OPEN -> ACTIVE -> CLOSED
               -> PARTIAL -> ACTIVE | DROPPED
               -> BLOCKED -> ACTIVE | DROPPED
CLOSED -> ACTIVE only when regression evidence reopens it
```

- `OPEN`: not started.
- `ACTIVE`: exactly one owner is working on it.
- `PARTIAL`: a tested subset exists; `Remainder` names the exact missing work.
- `BLOCKED`: the decision, authority, asset, or input needed is named.
- `CLOSED`: production-path acceptance and required human review passed.
- `DROPPED`: a human deliberately removed it from scope.

Never report a percentage. Never close a packet because a class, prefab, or
test with the expected name exists.

### 0.3 Small-subagent rules

Each subagent receives one packet and must:

1. Read sections 0–4, its packet, and every named input file.
2. Run `git status --short` and preserve unrelated work.
3. Change the packet to `ACTIVE`, add its owner, and stop if another owner is
   already active.
4. Edit only the named files/directories.
5. Keep Unity compiling after each coherent change.
6. Add focused EditMode or PlayMode coverage in the same packet.
7. Record commands, results, and artifact paths under `Evidence`.
8. Finish as `CLOSED`, `PARTIAL`, or `BLOCKED`, synchronize section 15, and stop.

Subagents must not:

- “port the game” as one task;
- create IDs from scene object names or display text;
- edit generated content or `.meta` GUIDs by hand;
- introduce a package without the packet authorizing it;
- change story prose to satisfy code;
- add singleton state owners beside `GameSession`;
- put domain rules in `MonoBehaviour.Update()`;
- treat an attractive screenshot as parity;
- approve their own visible changes; or
- begin the next packet automatically.

### 0.4 Packet format

Every packet keeps these fields in this order:

```text
ID
State
Owner
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

Split a packet before work if one subagent cannot finish it while owning one
clear directory and one independent acceptance result.

### 0.5 Editing this document

Ordinary agent edits are restricted to:

- a packet's state, owner, evidence, and remainder;
- audited truth when the repository actually changes;
- the risk register when a release-level risk is proven;
- the compact ledger; and
- packet splits approved by the dependency order.

Do not append dated diaries, “epiphanies,” second roadmaps, implementation code,
or renderer wish lists. Put architectural detail in code documentation or an
Architecture Decision Record (ADR) under `unity/Docs/Decisions/` after the Unity
project exists.

Before handing off a plan change:

```sh
git diff --check -- UNITY_PLAN.md
git status --short
```

### 0.6 Minimalistic human-like code

All Unity code must look like a careful human wrote the smallest complete
solution for the current packet. “Flexible,” “enterprise,” and “future-proof”
are not goals unless a current requirement proves the need.

The rule is:

> Prefer one direct data flow, one obvious owner, and one readable implementation
> over frameworks, indirection, cleverness, or speculative reuse.

Required habits:

- Read the surrounding code before naming or structuring new code.
- Use plain C# and Unity APIs already approved by this plan.
- Keep behavior close to its owner and dependencies visible in constructors or
  serialized fields.
- Write short top-to-bottom methods with early returns for invalid/rejected
  cases.
- Use concrete names from the game: `PortalController`, `JournalEntry`,
  `StoryEvent`, `SaveStore`, `RoomBinding`.
- Comment only when correctness depends on a reason that code cannot express.
- Delete dead branches, unused fields, temporary logging, copied scaffolding,
  and obsolete comments before handoff.
- Prefer an enum or small result type when a Boolean argument/result would be
  ambiguous at the call site.
- Keep public APIs narrow; default to `private` and expose immutable/read-only
  data.
- Make invalid authored content fail during sync/import/bootstrap with the
  stable ID and source path in the error.
- Return a typed rejection for ordinary player actions; do not use exceptions as
  expected control flow.

Forbidden without a recorded ADR and current measured need:

- dependency-injection containers, service locators, global event buses, global
  mutable singletons, reflection-driven registration, or `SendMessage`;
- an interface with one implementation unless it isolates a real boundary such
  as clock, randomness, filesystem, or platform build service;
- generic repositories, factories, builders, coordinators, registries, or
  “systems” that only rename one constructor or method call;
- base classes created only to share a few lines;
- stringly typed commands when a small enum/record already describes the action;
- catch-all `try/catch`, swallowed exceptions, or success returned after a
  partial import/save;
- per-object `Update()` loops when one owner can update a bounded collection;
- runtime `FindObjectOfType`, hierarchy-name searches, or scene-name logic;
- LINQ or allocations inside per-frame/player-input loops without profiling;
- coroutines for domain time, saves, story delivery, or authoritative state;
- pooling, jobs, ECS, Addressables, custom render features, or caching layers
  before profiling demonstrates the problem; and
- names such as `ComprehensiveDynamicPortalStateSynchronizationCoordinator`.

Soft size warnings, not fragmentation targets:

- A method above roughly 40 lines deserves a readability pass.
- A production class above roughly 250 lines deserves an ownership pass.
- More than three constructor dependencies deserves an ownership/composition
  check.
- A change that adds more infrastructure than behavior should be reduced.

Do not satisfy these warnings by making one-line wrapper files. Cohesion is more
important than a number.

### 0.7 Small-subagent execution recipe

For each packet, use this exact sequence:

1. **Restate:** write one sentence describing the observable outcome.
2. **Inspect:** list production callers, data inputs, existing tests, and the
   smallest intended write set.
3. **Classify:** put pure rules in Domain, parsing/assets in Content/Editor,
   scene binding in Runtime, and pixels/audio/UI in Presentation.
4. **Prove first:** add the smallest failing test or reproducible fixture when
   feasible.
5. **Implement directly:** build only enough code/assets to pass the packet.
6. **Integrate:** exercise the production composition root; a detached prefab or
   isolated helper is not integrated.
7. **Simplify:** remove duplication, speculative hooks, excess comments, noisy
   logs, unused serialization, and unnecessary abstractions.
8. **Verify:** run focused checks, applicable shared checks, and a packaged path
   when the packet requires it.
9. **Handoff:** update state/ledger and provide the record below.
10. **Stop:** do not opportunistically start dependent work.

Handoff format:

```text
Packet: MIG-##
Delivered outcome: one sentence
Files changed: exact paths
Behavior path: input -> owner -> output
IDs/schema changed: none or exact list
Verification: exact command and PASS/FAIL
Artifacts: exact paths or none
Human review: HR-### APPROVED/REJECTED or not required
Known limits: exact limits
Remaining work: none or exact next work
```

“Implemented,” “ported,” “works,” and “tests pass” are incomplete handoffs
without the behavior path and exact evidence.

---

## 1. Migration objective

### 1.1 One-sentence objective

Ship the same 21-day domestic administrative horror game in Unity, with its
threshold choices, journal uncertainty, persistent house, resources, people,
and three derived endings intact, while replacing the browser-specific runtime
and renderer with a maintainable Windows Unity production.

### 1.2 What must survive

- Stable room, portal, window, focus, visitor, event, choice, narrative flag,
  record, asset, material, and sound-emitter IDs.
- The red-thread loop: hear -> move -> inspect/listen -> choose -> record -> pay
  or preserve resources -> see consequence -> secure house -> sleep.
- One authoritative `GameSession` and deterministic run seed.
- Journal entries, revisions, uncertainty, corroboration, locks, and night drift.
- Time, gas/heat, rations, scrutiny, exhaustion, isolation, and sleep behavior.
- Threshold modes: closed door, chain, letterbox, open door, silence/walk-away.
- Persistent physical residues and house states.
- Screenplay/corpus authority, text-first fallback, captions, and three endings.
- Save semantics, reproducible fixtures, and human visual review.

### 1.3 What must not be ported

- Pixeldart, WebGL wrappers, GLSL passes, DOM layout code, JavaScript interop,
  browser boot/query behavior, or committed `dist/web/` output.
- The eight sparse renderer-showcase chambers from `lib/house/house.dart`.
- `sparseTestChambers`, default PS1/VHS presentation, Shader Lab experiments,
  fake legacy-renderer selection, or renderer-only demonstration modes.
- `NarrativeEncounterDirector`, `TimelineProgressionCoordinator.canonical21Days`,
  or any other hard-coded narrative that competes with the screenplay/corpus.
- Self-declared gold-master badges, constant certification status, or tests that
  claim visual/runtime coverage without exercising it.
- Browser local-storage plumbing, pointer-lock details, or Dart-specific event
  classes when a smaller C# boundary expresses the same rule.
- Missing model paths as if they were real assets.

### 1.4 Migration strategy

Use a strangler transition:

1. Freeze and validate shared content contracts.
2. Build a Unity domain that passes selected cross-engine fixtures.
3. Build a greybox Day 1 slice in Unity.
4. Obtain human play and visual approval.
5. Expand by act and room batch in Unity.
6. Keep the Dart build as a behavioral/content reference during parity work.
7. Freeze Dart feature development when Unity Day 1 reaches the transition gate.
8. Retire the Dart production only after the Unity campaign and save/recovery
   gates pass; retain tagged source and evidence for archaeology.

Do not implement new product features twice. Before Unity reaches its Day 1
gate, only critical bug fixes and canonical content/source corrections should
land in Dart. New campaign, art, and presentation work goes to Unity unless a
human explicitly chooses otherwise.

---

## 2. Audited starting point

| Area | State | Repository truth | Unity consequence |
|---|---|---|---|
| Unity project | `ABSENT` | No `unity/` project exists. | Scaffold, package lock, CI, and ownership come first. |
| Product vision | `VERIFIED` | `tmp/MASTERPLAN.md` defines the game and ordered product gaps. | Unity implements that plan, not the old showcase direction. |
| House runtime | `CONTRADICTED` | Dart runs eight all-ground renderer chambers; authored JSON describes a cellar/ground/first-floor house. | Import JSON; never port showcase geometry. |
| House content | `PARTIAL` | Eight rooms, nine intended portals, stairs, inventory, materials, soundscape, routes, and captures exist as data. | Validate scale/topology before scene work. |
| Production models | `MOSTLY ABSENT` | Inventory references roughly 60 assets; almost all model sources are missing. One porcelain OBJ source exists. | Greybox with labeled proxies; asset intake is a separate human-reviewed lane. |
| Story spine | `VERIFIED` | The screenplay defines 21 scenes and links the prose corpus. | Compile/import it as canon. |
| Story schedule | `ABSENT` | The screenplay has no authored `EVENT` records. | Unity cannot invent timing; shared source must gain a schedule first. |
| Visitor runtime | `PARTIAL` | Corpus-driven `VisitorDirector` is wired in Dart. | Port behavior after consolidating it with screenplay events. |
| Duplicate story logic | `VERIFIED` | Hard-coded 21-day prototypes contradict canonical content and feed self-audits. | Exclude and retire; do not translate them. |
| Domain systems | `PARTIAL` | Session, day/resources, journal, drift, difficulty, weather, saves, visitors, and endings have useful pure code/tests. | Port rules selectively with fixture parity. |
| Pacing | `UNRESOLVED` | Current `dayLengthSeconds` is 5,760 seconds while the product target is a 3–5 hour campaign. | Port target pacing policy, not the stale constant. |
| UI/accessibility | `PARTIAL` | Pause/settings/credits/dialogue/journal/accessibility models exist. | Preserve behavior; redesign presentation for Unity with human review. |
| Audio/voice | `PARTIAL` | Sound planning and many generated voice/demo files exist; production coverage and story lock are unproven. | Build text/caption/audio fallback first; voice imports only after lock. |
| Visual baseline | `CONTRADICTED` | Realism, PS1 defaults, and extensive experimental effects coexist. | URP clean period baseline first; rupture effects later. |
| Tests | `PARTIAL` | Many standalone Dart scripts exist; several test only isolated prototypes. | Select behavioral fixtures; do not translate test count. |
| Release status | `ABSENT` | No valid human-reviewed release evidence exists. | Unity starts pre-alpha regardless of self-certification strings. |

### 2.1 Migration decisions

1. Unity is the target production runtime; Dart remains reference until the
   retirement gate.
2. Windows x64 is the first platform. Browser parity is not a Unity launch gate.
3. Use Unity 6.3 LTS and pin one tested patch in `ProjectVersion.txt`. Unity's
   official support page lists Unity 6.3 LTS support through December 2027:
   <https://unity.com/releases/unity-6/support>.
4. Use URP, not HDRP or a custom render pipeline.
5. Use GameObjects/components and plain C# domain code. Do not begin with ECS.
6. Use Unity Input System, Test Framework, UI Toolkit, AudioMixer, and built-in
   localization-ready string keys.
7. Defer Addressables until profiling proves one-scene content is a problem.
8. Do not add Cinemachine for the normal first-person camera.
9. All visible work requires the human-eyes gate from the product masterplan.
10. Story and house sources remain outside `unity/` and are imported
    deterministically; generated Unity assets are never hand-authored canon.

---

## 3. Target Unity project

### 3.1 Repository layout

```text
.
├── assets/house/                    # shared authored house source
├── text/                            # shared authored narrative source
├── tools/unity/                     # deterministic sync and headless helpers
├── tmp/MASTERPLAN.md                # product authority; separate docs repo
├── UNITY_PLAN.md                    # this migration authority
└── unity/
    ├── Assets/_Quarantine/
    │   ├── Art/
    │   │   ├── Source/              # human source files where suitable
    │   │   ├── Models/
    │   │   ├── Textures/
    │   │   ├── Materials/
    │   │   └── Prefabs/
    │   ├── Audio/
    │   │   ├── Music/
    │   │   ├── Sfx/
    │   │   ├── Voice/
    │   │   └── Mixers/
    │   ├── Content/
    │   │   ├── Raw/                 # generated copies; never hand-edit
    │   │   ├── Imported/            # generated Unity assets; never hand-edit
    │   │   └── Schemas/
    │   ├── Prefabs/
    │   │   ├── Player/
    │   │   ├── House/
    │   │   ├── Interaction/
    │   │   └── UI/
    │   ├── Scenes/
    │   │   ├── Bootstrap.unity
    │   │   ├── HouseGreybox.unity
    │   │   └── House.unity
    │   ├── Scripts/
    │   │   ├── Domain/
    │   │   ├── Content/
    │   │   ├── Runtime/
    │   │   ├── Presentation/
    │   │   └── Editor/
    │   ├── Settings/
    │   └── Tests/
    │       ├── EditMode/
    │       └── PlayMode/
    ├── Docs/Decisions/
    ├── Packages/
    ├── ProjectSettings/
    └── UserSettings/                # ignored
```

Do not use a Unity `Resources/` folder. Do not put canonical content into
`StreamingAssets` merely to avoid writing an importer. Runtime JSON is allowed
only when a packet proves live data loading is necessary; otherwise use
generated typed assets with source hashes.

### 3.2 Assemblies

| Assembly | May depend on | Must not depend on |
|---|---|---|
| `Quarantine.Domain` | .NET base libraries | UnityEngine, scenes, assets, wall clock, global random |
| `Quarantine.Content` | Domain, minimal Unity asset containers | Runtime, Presentation |
| `Quarantine.Runtime` | Domain, Content, UnityEngine | UI implementation, Editor |
| `Quarantine.Presentation` | Runtime, Content, Input System, UI/URP APIs | Editor |
| `Quarantine.Editor` | Runtime assemblies, UnityEditor | Player build |
| `Quarantine.Domain.Tests` | Domain, NUnit | UnityEngine |
| `Quarantine.PlayMode.Tests` | Runtime, Presentation, test fixtures | Editor-only production dependency |

The compiler must enforce the boundary with `.asmdef` files from the scaffold
packet. A scene load must never be required to run domain tests.

### 3.3 Bootstrap ownership

`Bootstrap.unity` contains only composition roots and persistent services:

```text
AppRoot
├── ContentRoot
├── SessionRoot
├── SaveRoot
├── InputRoot
├── AudioRoot
├── PresentationRoot
└── SceneFlowRoot
```

Boot sequence:

1. Load and validate imported content catalogue.
2. Load settings and apply accessibility-safe defaults.
3. Load or create the domain session from an injected clock/seed.
4. Load the greybox/house scene.
5. Bind stable IDs to scene components and reject missing/duplicate bindings.
6. Apply the first immutable snapshot.
7. Enable input and publish `Ready`.

Do not use arbitrary Script Execution Order to make this work. Express order in
one asynchronous bootstrap coordinator and test every failure stage.

### 3.4 C# and Unity asset conventions

MIG-05 turns these conventions into project guardrails.

#### C# shape

- One primary type per file; filename matches the type.
- Namespace follows the owning assembly and feature, for example
  `Quarantine.Domain.Journal` or `Quarantine.Runtime.House`.
- Public types/members use `PascalCase`; parameters/locals/private fields use
  `camelCase`. Serialized private fields use the same private-field convention
  selected in `unity/.editorconfig`.
- Use `var` when the right-hand type is obvious; write the type when it clarifies
  a domain distinction.
- Use collection interfaces/read-only views at public boundaries. Do not return
  a mutable internal list or dictionary.
- Validate constructor/import inputs once. Do not scatter repeated null/ID
  checks through every frame.
- Use exhaustive `switch` statements for commands, states, and event kinds so a
  new enum value fails loudly during development.
- Use named constants for product values. Do not hide unexplained numbers in
  scene scripts.
- Keep log messages short and actionable: subsystem, stable ID, failure. Do not
  log every frame or every successful interaction.

#### MonoBehaviour shape

- A `MonoBehaviour` adapts Unity lifecycle/input/scene objects to a plain owner;
  it does not contain campaign rules.
- Serialized references are private and explicit. Cache required components at
  `Awake`; do not repeatedly query them.
- Subscribe and unsubscribe symmetrically in one visible lifecycle pair.
- `Update` reads input or advances presentation only. Domain time advances once
  through the session adapter.
- `OnValidate` may validate the component's own fields. Global ID/reference
  validation belongs to the importer/build validator.
- Visual tweens/coroutines must be cancel-safe on disable, scene unload, snapshot
  replacement, and reduced-motion mode.
- Development diagnostics are compiled or enabled explicitly and cannot become
  a hidden dependency of normal boot.

#### Prefab, scene, and `.meta` safety

- Never manufacture or edit `.meta` GUIDs.
- Do not hand-edit serialized scene/prefab YAML for convenience. Use the Unity
  Editor or a deterministic Editor tool, then inspect the serialized diff.
- Do not reserialize unrelated scenes/assets or accept mass GUID/import-setting
  churn.
- A generated scene/prefab must state its generator and source hash in an
  importer-owned record, not a comment pasted into every object.
- Human-authored prefabs and generated catalogues live in separate directories;
  sync/import tools may delete only files in their owned generated set.
- Scene references use serialized object references plus stable content IDs.
  Object names remain readable but are never identity.

#### Tests

- Test one behavior per test; name it as `Action_Condition_Result`.
- Prefer Arrange/Act/Assert with little fixture magic.
- Assert public results, ordered events, snapshots, bindings, or visible state;
  do not inspect private fields through reflection.
- A fake implements only the boundary the test needs. Do not build a reusable
  fake framework before two real consumers need it.
- Keep deterministic seeds, times, IDs, and expected values visible in the test.
- A PlayMode test must fail if it accidentally uses a test-only command path
  instead of production input/session composition.

#### Review questions

Before handoff, the owner answers:

1. Can a reader find the state owner in under a minute?
2. Is there a shorter implementation with the same tested behavior?
3. Did this packet add an abstraction for a hypothetical second use?
4. Are lifecycle, failure, cancellation, and save effects explicit?
5. Can the next subagent change the feature without reading unrelated systems?

If answers 1, 2, 4, or 5 are “no,” simplify before review. If answer 3 is “yes,”
remove the abstraction or record the current second use.

---

## 4. Canonical contracts

### 4.1 Content synchronization

One command owns source-to-Unity synchronization:

```text
tools/unity/sync-content
```

Choose a tracked implementation available on CI; do not require an editor UI.
It must:

1. Run or verify `dart run tools/text_build.dart` while Dart remains the shared
   compiler.
2. Validate screenplay, generated story JSON, house, inventory, material,
   soundscape, verification, and manifest sources before copying.
3. Copy only declared inputs to `unity/Assets/_Quarantine/Content/Raw/`.
4. Write `content-index.json` with schema version, source path, destination,
   byte length, SHA-256, content kind, stable IDs, and provenance status.
5. Stage generated output and replace it only after the full transaction passes.
6. Delete only stale files recorded as owned by the previous content index.
7. Fail on missing references, duplicate IDs, unconsumed event kinds, absent
   production assets, or unsupported schema versions.
8. Remain byte-for-byte stable when inputs do not change.

Voice is excluded unless a human-approved story/voice lock authorizes the exact
text hashes. Missing voice must not block a text-only build.

### 4.2 Typed imported content

Use small typed records rather than a single dynamic dictionary database:

```text
HouseLayoutCatalog
  Levels, Rooms, Windows, Portals, Stairs, ExteriorCells

HousePresentationCatalog
  Materials, Assets, Placements, Bounds, FocusTargets, Emitters

StoryCatalog
  Days, Scenes, Beats, Branches, Events, Sources

DialogueCatalog
  Visitors, Arrivals, Tiers, Reactions, Variants, Residues, Captions

TextCatalog
  Broadcasts, Documents, Nights, Records, Endings, Vocabulary
```

Generated assets store the source schema version and hash. Lookup dictionaries
are derived at load time and are not serialized as competing mutable copies.

### 4.3 Domain boundary

The ported domain exposes commands, immutable snapshots, and ordered events:

```text
GameSession
  Advance(elapsed)
  Interact(command)
  ChooseVisitorOption(encounterId, optionId)
  WriteJournal(draft)
  CorrectJournal(entryId, revision)
  LockJournal(entryId)
  Sleep(quality, location)
  CreateSave(meta)
```

Required properties:

- no `MonoBehaviour`, `GameObject`, `Time`, `Random`, scene query, audio, or UI;
- injected fixed time and deterministic random source;
- all mutations through commands;
- all output through immutable snapshots and ordered events;
- stable serialization independent of dictionary insertion order; and
- explicit rejection results rather than silent no-ops.

Event listeners update presentation only. An animation-complete callback does
not reissue the domain command that caused it.

### 4.4 Save contract

Use versioned JSON under `Application.persistentDataPath`:

```text
save-vN.json.tmp -> fsync/close -> atomic replace save-vN.json
                                      -> previous valid save-vN.backup.json
```

Persist:

- run seed, day, fractional hour, pacing profile;
- time/gas/ration/lock resources and difficulty consequences;
- full journal with revisions, corroboration, uncertainty, and locks;
- narrative flags, delivered event IDs, visitors, choices, quotes, residues;
- portal, shutter, mantle, inventory inspection, and drift states;
- player room, position, look, crouch, and stable transition state;
- settings separately under meta where they do not affect game rules; and
- content schema/hash compatibility information.

Never persist GameObjects, instance IDs, asset paths as identity, coroutines,
animation progress, AudioSource state, or GPU objects.

Cross-engine import of browser saves is not assumed. MIG-14 must inspect whether
public saves need a one-time export/import path and record a human decision.

### 4.5 House coordinate contract

Shared house data is `[x, y, z]`, Y-up, authored in metres. Import
`modelScale` exactly once. Keep `HouseRoot` at identity. A generated marker and
human visual mesh must agree without compensating root transforms.

Before final art, validate:

- eight canonical rooms on cellar, ground, and first levels;
- nine intended canonical portals and one stair transition;
- front-door, journal-desk, mantle, mirror, wireless, and required focus anchors;
- route fixtures through ground, upper, cellar, and threshold bands;
- a 0.3 m-radius, 1.8 m-high player capsule at route clearance; and
- human approval of perceived domestic scale before locking architecture.

If JSON data and product intent conflict, correct the shared source with a
recorded migration. Do not hide the problem in a Unity transform override.

### 4.6 Scene binding

The greybox and production house use independent layers:

```text
HouseRoot
├── Visuals
├── Collision
├── RoomVolumes
├── Portals
├── Interactions
├── AudioAnchors
├── Lighting
└── Debug                         # editor/development build only
```

- `RoomBinding` stores one `RoomId`.
- `PortalBinding` stores one `PortalId`, animation references, and colliders.
- `InteractableBinding` stores one `FocusId` and supported typed command.
- `EmitterBinding` stores one `EmitterId`.
- Validation rejects duplicates and missing required IDs before play begins.
- Visual prefab replacement cannot alter domain truth or save identity.

### 4.7 Interaction contract

Use a `CharacterController` for first-person movement. The production focus path:

1. Raycast from the camera through the current room/cell collision mask.
2. Reject solid-wall occlusion, targets beyond the configured distance, and
   targets outside the authored focus cone/bounds.
3. Resolve exactly one stable focus ID and supported command.
4. Show a presentation-only prompt.
5. On press/hold/direct manipulation, send one domain command.
6. Apply accepted state through domain events and snapshots.
7. Save/reload and reconstruct the same semantic state.

Continuous door/shutter/object manipulation may predict visuals locally but
commits one accepted semantic state at its defined boundary. Cancel restores the
last authoritative state.

### 4.8 Story and scheduling contract

Unity consumes the screenplay and linked corpus. It does not invent a schedule
to compensate for the current zero-event source.

Before campaign expansion:

- every day has wake, required story/threshold, consequence, and sleep-ready
  event records;
- every event kind has one declared runtime consumer;
- optional ambient windows resolve deterministically from run seed and event ID;
- reading, pause, and accessibility modes obey the product pacing policy;
- delivered IDs make events exactly-once across save/reload; and
- branch outcomes write declared fact keys consumed by later callbacks,
  residues, resources, or ending texture.

### 4.9 UI and input contract

Input maps:

```text
Gameplay: Move, Look, Crouch, Run, Interact, AlternateInteract, Journal, Pause
Dialogue: Advance, Choose1, Choose2, Choose3, Silence, Cancel
UI: Navigate, Submit, Cancel, Point, Click, Scroll
```

Keyboard/mouse is the first required route. Gamepad may be added only with full
remapping and focus parity. One `InputModeCoordinator` owns map switching,
cursor state, movement suppression, and restoration across pause, journal,
dialogue, sleep, ending, and focus loss.

Prefer UI Toolkit for pause, settings, credits, and journal. A screen-space
uGUI layer is allowed for reticle or dialogue only if ownership is explicit and
keyboard/accessibility semantics remain complete. Never implement one panel in
both systems.

### 4.10 Rendering contract

Use URP to reproduce the product look, not Dart render passes:

- clean restrained period realism as ordinary baseline;
- baked/static indirect grounding for the house;
- bounded mixed/realtime practicals and shadows for stateful lights;
- room reflection probes only where evidence shows value;
- readable darkness before bloom, fog, grain, or color treatment;
- high and safe profiles that preserve all story information;
- story-driven rupture effects separated from ordinary post-processing; and
- no default PS1, VHS, gameplay depth of field, motion blur, flare, SSR, or
  volumetric requirement.

Expose only graphics settings that alter real Unity configuration. Requested
and effective values must be reportable. Profile changes retain the last valid
configuration on failure.

### 4.11 Audio and voice contract

Use one AudioMixer with master, music, effects, ambience, voice, and reverb
groups. Spatial emitters use shared IDs. A portal graph computes listener/source
path, gain, low-pass, and reverb intent from live door/window states.

Required transmission modes include open threshold, closed door, chain,
letterbox, window, wall, floor, wireless, and telephone where authored. Captions
remain authoritative. A missing or rejected clip plays text/captions with no
broken wait.

Voice production begins only after a human locks the relevant text hashes,
casting, performance direction, pronunciation, rights, and fallback behavior.
Runtime TTS is forbidden.

---

## 5. Parity philosophy

### 5.1 Product parity, not bug parity

Port a Dart behavior only when at least one of these is true:

- it implements a product rule in `tmp/MASTERPLAN.md`;
- it is exercised by the current production browser path and agrees with canon;
- it is necessary to read existing shared content or saves; or
- a human explicitly accepts it as intended behavior.

Do not port behavior merely because a pure helper or test exists. Record every
adopt/replace/reject choice in `unity/Docs/Decisions/MigrationMap.md` with source
path, target owner, rule, fixture, and status.

### 5.2 Cross-engine fixtures

Fixtures are plain versioned JSON with inputs and expected semantic output. Use
them for:

- clock progression and day boundary;
- resource spending and sleep reset;
- journal write/correct/lock/drift;
- reaction effects and exactly-once events;
- portal/shutter/mantle state;
- save/restore digest;
- ending selection; and
- fixed house route/anchor facts.

Do not compare floating-point serialization byte-for-byte without a declared
normalization. Do compare stable IDs, ordered events, state digests, and bounded
numeric results.

### 5.3 Evidence ladder

| Evidence | Proves |
|---|---|
| EditMode NUnit | Pure C# rules, parsing, serialization. |
| Importer test | Deterministic source-to-Unity mapping. |
| PlayMode test | Scene binding, input, collision, interaction, save wiring. |
| Windows development build | Packaged runtime behavior outside the editor. |
| Capture bundle | Reproducible visible state, not quality approval. |
| Human review | Visual/audio/usability judgment. |
| Human playthrough | Campaign coherence and ending reachability. |

The Unity Editor alone is not the shipped product path. Milestone gates require
a Windows development or release build where stated.

### 5.4 Human-eyes gate

Every visible Unity packet follows `tmp/MASTERPLAN.md` section 9.2. The reviewer
must be a real human engineer and record:

```text
Human review ID
Reviewer
Commit/build
Unity editor patch
Windows/CPU/GPU/driver
Resolution and quality profile
Capture paths
Readability/composition/clipping/motion/horror notes
APPROVED or REJECTED
```

Subagents may prepare captures but cannot approve them. A rejection yields
`PARTIAL` with exact corrections and requires a new build/review.

---

## 6. Migration milestones

| Milestone | Outcome | Hard gate |
|---|---|---|
| U0 — Scaffold | Pinned Unity project builds headlessly with assemblies and one test. | Clean clone batch build and tests. |
| U1 — Shared truth | Content sync/import and cross-engine domain fixtures are deterministic. | No duplicate story/house authority in Unity. |
| U2 — Greybox house | Real topology, player, portals, focus, audio graph, and save work. | Ground/upper/cellar/threshold PlayMode routes. |
| U3 — Day 1 slice | Full red-thread Day 1 works text-first in a Windows build. | Human play + visual/accessibility approval. |
| U4 — Act I | Days 1–7 and first journal anomaly work. | Human pacing review; no idle wait. |
| U5 — Full campaign | Days 1–21 and three endings work. | Automated semantic routes + human playthroughs. |
| U6 — Production house | Human art, materials, lighting, audio, and states replace proxies. | Room-batch human approvals. |
| U7 — Release candidate | Performance, accessibility, rights, recovery, and packaging pass. | Product masterplan release gate. |

The Dart feature freeze occurs after U3 is approved. Dart retirement occurs only
after U5, save/recovery proof, and a human transition decision.

---

## 7. Ordered migration packets

The first `OPEN` packet with all dependencies `CLOSED` is the default next task.

### MIG-00 — Record the transition charter

ID: MIG-00
State: OPEN
Owner: unassigned
Depends on: none
Outcome: one reviewed charter records platforms, Unity version policy, source
authorities, Dart freeze/retirement gates, and ownership.
Inputs: `tmp/MASTERPLAN.md`, this plan, current repository status.
Files: `unity/Docs/Decisions/000-transition-charter.md` after scaffold, or a
temporary reviewed record under `docs/unity/` before scaffold.
Do not touch: code, story, assets.
Steps:

1. Name the human product owner, Unity technical owner, content owner, and human
   visual reviewers.
2. Confirm Windows x64 first and Unity 6.3 LTS patch-selection process.
3. Confirm no new product features are implemented in both engines.
4. Confirm U3 Dart freeze and U5 retirement decision gates.
5. Record whether public Dart saves require cross-engine import.

Checks: human review of the charter and links to both plans.
Evidence: none.
Remainder: none.

### MIG-01 — Scaffold the pinned Unity project

ID: MIG-01
State: OPEN
Owner: unassigned
Depends on: MIG-00
Outcome: a minimal URP Unity project opens, compiles, tests, and builds Windows
from a clean checkout with pinned packages.
Inputs: Unity 6.3 LTS official support/package documentation, section 3.
Files: `unity/`, root ignore attributes as required, CI/build helper only.
Do not touch: Dart, shared story, house data, production art.
Steps:

1. A human installs/selects one supported 6.3 LTS patch and records it.
2. Create an empty URP project under `unity/`.
3. Pin manifest and lock file; retain only authorized packages.
4. Add assemblies and one pure test proving Domain has no Unity dependency.
5. Add a batch test command and Windows development-build command.
6. Verify serialized text/meta settings minimize unnecessary diffs.

Checks: Unity batch EditMode test and Windows development build from a clean
checkout.
Evidence: none.
Remainder: none. A visible default scene does not need art approval.

### MIG-02 — Create deterministic content sync

ID: MIG-02
State: OPEN
Owner: unassigned
Depends on: MIG-01
Outcome: one headless transaction mirrors declared shared content into Unity and
produces a stable hash index.
Inputs: `text/`, `web/res/story_script.json`, `assets/house/*.json`, verification
JSON, asset/audio manifest and provenance records.
Files: `tools/unity/`, Unity `Content/Raw/`, focused tool tests.
Do not touch: prose, house values, Unity scenes, art.
Steps:

1. Declare allowed inputs and owned destinations.
2. Validate before writing.
3. Stage, compare, atomically replace, and remove only owned stale outputs.
4. Generate schema-versioned `content-index.json`.
5. Prove identical inputs produce no semantic or byte diff.
6. Prove one missing reference fails without damaging the last valid import.

Checks: tool self-test, two-run idempotence, negative missing-reference fixture.
Evidence: none.
Remainder: none.

### MIG-03 — Import typed catalogues

ID: MIG-03
State: OPEN
Owner: unassigned
Depends on: MIG-02
Outcome: Unity imports typed story, dialogue, house, placement, material, and
sound catalogues with stable IDs/source hashes.
Inputs: synchronized raw content and schemas.
Files: `Scripts/Content/`, `Scripts/Editor/Import/`, `Content/Imported/`, importer
EditMode tests.
Do not touch: runtime scene binding or domain behavior.
Steps:

1. Decode into validation DTOs before creating assets.
2. Validate global IDs and cross-catalog references.
3. Create/update generated assets transactionally.
4. Reject duplicate IDs and unsupported schemas with exact source paths.
5. Keep GUIDs stable for unchanged stable IDs.
6. Emit a readable import report mapping source IDs to Unity asset GUIDs.

Checks: EditMode import, idempotence, source-move/hash fixture, negative schemas.
Evidence: none.
Remainder: none.

### MIG-04 — Build the migration map and fixture runner

ID: MIG-04
State: OPEN
Owner: unassigned
Depends on: MIG-01
Outcome: intended Dart behaviors are classified and selected plain-JSON fixtures
run in Dart reference and Unity Domain tests.
Inputs: masterplan truth table; `lib/game`, `lib/sim`, `lib/journal`,
`lib/visitors`, `lib/story`, relevant focused Dart tests.
Files: `unity/Docs/Decisions/MigrationMap.md`, shared fixture schema/data,
Unity fixture runner, minimal Dart fixture exporter if needed.
Do not touch: gameplay implementation or prose.
Steps:

1. Classify each candidate rule `adopt`, `replace`, `retire`, or `decision`.
2. Exclude renderer showcase, duplicate narrative, and fake certification.
3. Define normalized commands, ordered events, and expected state digests.
4. Create initial time, resource, journal, save, and ending fixtures.
5. Require a human decision for every `decision` row before dependent porting.

Checks: schema test; Dart reference fixture run; empty Unity runner discovers all
fixtures even before implementations pass.
Evidence: none.
Remainder: none.

### MIG-05 — Install minimal-code guardrails

ID: MIG-05
State: OPEN
Owner: unassigned
Depends on: MIG-01
Outcome: the Unity project enforces assembly direction, stable formatting, clean
asset ownership, and the minimal-code rules that can be checked mechanically.
Inputs: sections 0.6, 0.7, 3.2, and 3.4; scaffolded Unity project.
Files: `unity/.editorconfig`, assembly definitions, focused architecture/build
validation tests, `unity/Docs/Decisions/CodeRules.md` containing only rules that
cannot live in configuration/tests.
Do not touch: gameplay behavior, shared content, scenes, third-party analyzers.
Steps:

1. Add a small `.editorconfig` that formats C# consistently without reformatting
   generated/vendor files.
2. Make assembly references enforce Domain -> Content -> Runtime -> Presentation
   direction declared in section 3.2.
3. Add a test/build validator rejecting `Resources/`, duplicate production
   composition roots, forbidden Domain Unity references, and generated files
   outside owned directories.
4. Add one intentionally invalid fixture for each guard and prove clear errors.
5. Document only non-mechanical rules and link back to this plan rather than
   copying it.
6. Run one cleanup review on the scaffold so the reference code demonstrates
   direct naming, narrow APIs, and no needless interface/framework.

Checks: formatting check, EditMode architecture tests, batch compile, Windows
development build.
Evidence: none.
Remainder: none.

### MIG-10 — Port time, day, resources, and difficulty

ID: MIG-10
State: OPEN
Owner: unassigned
Depends on: MIG-03, MIG-04, MIG-05
Outcome: Unity Domain reproduces accepted clock, resource, sleep, weather, and
difficulty rules without UnityEngine.
Inputs: accepted migration-map rows and fixtures.
Files: `Scripts/Domain/Time/`, `Scripts/Domain/Resources/`, Domain tests.
Do not touch: scenes, UI, story prose.
Steps:

1. Port values only after resolving stale pacing constants against the product
   pacing policy.
2. Inject elapsed time and deterministic random source.
3. Make sleep the only normal day transition.
4. Prevent negative resources and required-content soft locks.
5. Serialize stable state and ordered events.

Checks: EditMode fixtures for boundaries, spend/reject, sleep reset, weather,
difficulty, and deterministic repeat.
Evidence: none.
Remainder: none.

### MIG-11 — Port journal and drift

ID: MIG-11
State: OPEN
Owner: unassigned
Depends on: MIG-03, MIG-04, MIG-05
Outcome: write, uncertainty, comparison, correction, corroboration, lock, night
drift, and revision history match the accepted product rules.
Inputs: vocabulary/catalogues, journal migration rows/fixtures.
Files: `Scripts/Domain/Journal/`, Domain tests.
Do not touch: journal UI, narrative prose.
Steps:

1. Use typed fields and stable entry/revision IDs.
2. Preserve revision history and cause/source metadata.
3. Distinguish mismatch, contradiction, and unverifiable.
4. Apply deterministic drift only during accepted sleep transition.
5. Prove protected entries and sparse save state.

Checks: EditMode positive/negative/cross-engine fixtures and stable digest.
Evidence: none.
Remainder: none.

### MIG-12 — Port narrative state and event delivery

ID: MIG-12
State: OPEN
Owner: unassigned
Depends on: MIG-03, MIG-05, MIG-10, MIG-11; product STORY-01 and STORY-02 closed
Outcome: screenplay events, visitor choices, callbacks, residues, and exactly-once
delivery mutate one domain narrative state.
Inputs: compiled canonical story/dialogue catalogues and accepted fixtures.
Files: `Scripts/Domain/Narrative/`, Domain tests.
Do not touch: duplicate Dart narrative prototypes or Unity UI.
Steps:

1. Reject event kinds with no declared consumer.
2. Resolve optional time windows deterministically.
3. Validate every choice effect key and later consumer.
4. Persist delivered events, active encounter, choice, flags, residues, quotes.
5. Prove pause/save/reload never duplicates delivery.

Checks: EditMode 21-day schema sweep and focused Day 1/exactly-once fixtures.
Evidence: none.
Remainder: none.

### MIG-13 — Compose the Unity GameSession

ID: MIG-13
State: OPEN
Owner: unassigned
Depends on: MIG-10, MIG-11, MIG-12
Outcome: one Unity-free session accepts all current commands and emits one
immutable snapshot/event stream.
Inputs: ported domain modules and command/event contract.
Files: `Scripts/Domain/Session/`, Domain tests.
Do not touch: MonoBehaviours, scenes, UI.
Steps:

1. Define command results with accepted/rejected reason.
2. Order same-tick events explicitly.
3. Prohibit subsystem mutation outside session methods.
4. Compose deterministic domain snapshot and digest.
5. Run multi-day command fixture twice with identical output.

Checks: Domain tests, cross-engine fixture subset, architectural dependency test.
Evidence: none.
Remainder: none.

### MIG-14 — Implement resilient saves

ID: MIG-14
State: OPEN
Owner: unassigned
Depends on: MIG-13
Outcome: Unity saves/restores complete session and player metadata atomically,
recovers from corruption, and follows the charter's cross-engine decision.
Inputs: save contract, Dart save schema/reference fixtures, transition charter.
Files: `Scripts/Runtime/Save/`, save tests and fixtures.
Do not touch: game UI beyond a test adapter.
Steps:

1. Define version/schema/content compatibility fields.
2. Write temp -> replace -> backup with bounded failure recovery.
3. Reject malformed/unsupported saves without boot crash.
4. Prove deterministic restore digest and exactly-once events.
5. Implement or explicitly omit cross-engine import per MIG-00 decision.

Checks: EditMode serialization; PlayMode filesystem failures; corrupt primary
backup recovery; development-build save/reload smoke.
Evidence: none.
Remainder: none.

### MIG-20 — Generate and bind the domestic greybox

ID: MIG-20
State: OPEN
Owner: unassigned
Depends on: MIG-03, MIG-13
Outcome: Unity displays and binds the canonical cellar/ground/first-floor house,
not renderer chambers.
Inputs: house catalogue, route/capture fixtures, house contract.
Files: `Scripts/Runtime/House/`, `Scripts/Editor/House/`,
`HouseGreybox.unity`, house prefabs/tests.
Do not touch: final art, lighting polish, story.
Steps:

1. Generate labeled proxy rooms/openings/stairs from catalogue data.
2. Create identity-root bindings for rooms, portals, focus, and emitters.
3. Validate scale exactly once and all required IDs.
4. Bind immutable snapshots to portal/shutter/mantle proxy states.
5. Prove a visual replacement can occur without changing domain/save IDs.

Checks: importer/binding EditMode tests; PlayMode boot and marker assertions;
development-build capture.
Evidence: none.
Remainder: none. Visible scale/topology requires human approval.

### MIG-21 — Implement first-person movement and routes

ID: MIG-21
State: OPEN
Owner: unassigned
Depends on: MIG-20
Outcome: keyboard/mouse player movement traverses ground, upper, cellar, and
threshold routes with stable room transitions and save recovery.
Inputs: player constants, verification routes, accessibility movement policy.
Files: `Scripts/Runtime/Player/`, player prefab/input actions, PlayMode tests.
Do not touch: camera effects, final geometry, dialogue.
Steps:

1. Configure `CharacterController` capsule and explicit fixed movement policy.
2. Implement look, move, crouch, run, wall slide, stairs, and room volumes.
3. Prevent tunneling and invalid portal crossing.
4. Drive route fixtures with production input actions.
5. Save/reload on stairs and after a portal transition.

Checks: PlayMode routes and Windows build smoke at supported frame rates.
Evidence: none.
Remainder: none. Camera/motion requires human review including reduced motion.

### MIG-22 — Implement focus and tactile interaction

ID: MIG-22
State: OPEN
Owner: unassigned
Depends on: MIG-21
Outcome: production focus resolves through occlusion and sends exactly one typed
session command for door, shutter, mantle, inspection, and journal desk.
Inputs: focus/inventory catalogues, command contract, product interaction rules.
Files: `Scripts/Runtime/Interaction/`, interaction prefabs, PlayMode tests.
Do not touch: final UI/art.
Steps:

1. Resolve stable target/bounds from collider hits.
2. Enforce room, wall, distance, and cone constraints.
3. Implement press/hold/cancel and one direct-manipulation proof.
4. Apply domain result to presentation once.
5. Save/reload every proof state.

Checks: PlayMode approach/aim/focus/act routes, negative wall-occlusion tests.
Evidence: none.
Remainder: none. Visible feedback requires human approval.

### MIG-23 — Implement portal acoustics and Day 1 sound bed

ID: MIG-23
State: OPEN
Owner: unassigned
Depends on: MIG-20, MIG-22
Outcome: room ambience, one localized cue, and threshold voice/text respond to
live portal state through one AudioMixer route.
Inputs: soundscape catalogue, portal graph, product audio/accessibility rules.
Files: `Scripts/Runtime/Audio/`, AudioMixer/assets, PlayMode/hardware tests.
Do not touch: full voice batch or music expansion.
Steps:

1. Bind emitters and listener to stable room IDs.
2. Compute portal path, gain, low-pass, and reverb intent.
3. Smooth changes on door open/close and room crossing.
4. Apply master/effects/ambience/voice, mono, and night settings.
5. Preserve caption/text fallback with missing voice.

Checks: EditMode graph tests; PlayMode open/closed paths; Windows hardware smoke;
human headphone/speaker review.
Evidence: none.
Remainder: none.

### MIG-30 — Build the persistent UI/input shell

ID: MIG-30
State: OPEN
Owner: unassigned
Depends on: MIG-13, MIG-21
Outcome: HUD, pause, settings, credits, modal ownership, input maps, and focus
loss work through one persistent UI root.
Inputs: product UI/accessibility contract and current Dart behavior reference.
Files: `Scripts/Presentation/UI/`, UI assets/prefabs, input coordinator/tests.
Do not touch: journal/dialogue detail or final skin.
Steps:

1. Build one panel stack/modal ledger.
2. Route actions through semantic controls and typed commands.
3. Own input-map/cursor/movement transitions centrally.
4. Persist settings with migration/defaults.
5. Prove keyboard navigation, close/back, focus loss, and resume.

Checks: EditMode view-model tests; PlayMode keyboard route; captures.
Evidence: none.
Remainder: none. Visible UI requires human approval.

### MIG-31 — Build text-first dialogue and captions

ID: MIG-31
State: OPEN
Owner: unassigned
Depends on: MIG-12, MIG-23, MIG-30
Outcome: visitor/broadcast dialogue, choices, silence, walk-away, type pacing,
captions, and missing-audio fallback complete Day 1.
Inputs: story/dialogue/text catalogues, session events, accessibility policy.
Files: `Scripts/Presentation/Dialogue/`, dialogue UI, PlayMode tests.
Do not touch: final voice production or story prose.
Steps:

1. Present authored source/speaker/text without storing branch truth in UI.
2. Route option/silence/walk-away once to session.
3. Support instant/readable/slow pacing and skip without skipping semantics.
4. Display speech/non-speech/direction captions.
5. Verify voice present, voice missing, and voice disabled paths.

Checks: view-model tests; PlayMode threshold scenario; keyboard/accessibility
route; captures.
Evidence: none.
Remainder: none. Visible dialogue requires human approval.

### MIG-32 — Build the working journal

ID: MIG-32
State: OPEN
Owner: unassigned
Depends on: MIG-11, MIG-30
Outcome: player can write, mark uncertainty, cite, compare, correct, and lock an
entry with accessible revision history and save recovery.
Inputs: journal snapshots/events, vocabulary catalogue, product journal contract.
Files: `Scripts/Presentation/Journal/`, journal UI, PlayMode tests.
Do not touch: journal domain mutation outside commands or final art skin.
Steps:

1. Build semantic entry editor and ledger.
2. Show source, certainty, corroboration, revisions, and protected state.
3. Distinguish mismatch/contradiction/unverifiable language.
4. Route every mutation through session commands.
5. Prove keyboard-only Day 1 entry and save/reload.

Checks: view-model/EditMode tests; PlayMode journal route; captures.
Evidence: none.
Remainder: none. Visible journal requires human approval.

### MIG-33 — Complete Day 1 accessibility route

ID: MIG-33
State: OPEN
Owner: unassigned
Depends on: MIG-22, MIG-23, MIG-30, MIG-31, MIG-32
Outcome: Day 1 is completable keyboard-only with remapping, scalable UI,
captions, strong focus, reduced motion/effects, and non-hold interaction.
Inputs: product accessibility requirements and all Day 1 systems.
Files: `Scripts/Presentation/Accessibility/`, relevant settings/input/presentation
files and PlayMode scenarios.
Do not touch: simplify choices or reveal hidden causes.
Steps:

1. Audit every required action and focus target.
2. Exercise remap/conflict/reset/persistence.
3. Exercise UI scale, contrast, captions, reduced modes, and brightness.
4. Exercise pause/focus-loss/audio interaction.
5. Conduct real human usability review.

Checks: semantic tests; keyboard-only Windows build route; captures; human review.
Evidence: none.
Remainder: none.

### MIG-40 — Complete the Unity Day 1 vertical slice

ID: MIG-40
State: OPEN
Owner: unassigned
Depends on: MIG-14, MIG-20, MIG-21, MIG-22, MIG-23, MIG-31, MIG-32, MIG-33
Outcome: a Windows build completes wake -> domestic preparation -> threshold ->
choice -> journal -> physical consequence -> sleep -> reload in 8–15 minutes.
Inputs: product LOOP-01 acceptance and Day 1 canonical content.
Files: integration/composition and Day 1 fixtures only; defects go to owning
directories.
Do not touch: Days 2–21 implementation or final art expansion.
Steps:

1. Add one deterministic semantic scenario and one production-input smoke.
2. Verify no idle wait and no repeated event after reload.
3. Capture normal, accessibility, safe/high, and consequence states.
4. Record performance and load evidence.
5. Conduct human play, visual, audio, and accessibility reviews.
6. Record the Dart feature-freeze decision when approved.

Checks: all Day 1 EditMode/PlayMode tests; clean Windows development build;
human gate.
Evidence: none.
Remainder: none.

### MIG-50 — Accept the human house model

ID: MIG-50
State: OPEN
Owner: unassigned
Depends on: MIG-40
Outcome: a rights-cleared, source-controlled human house visual replaces the
greybox without changing topology, bindings, collision truth, or saves.
Inputs: product room/art briefs, house catalogue, greybox fixtures, modeller
handoff.
Files: `Art/House/`, house visual prefab, import presets, provenance/handoff
record, visual tests.
Do not touch: domain topology or story.
Steps:

1. Require source, export, units/axes, hashes, materials, anchors, and rights.
2. Import with identity house root and per-asset normalization.
3. Keep collision/room/portal/focus/audio layers separate.
4. Run every route and binding fixture.
5. Review perceived domestic scale before architecture lock.
6. Obtain human approval for normal/high/safe/accessibility captures.

Checks: asset validation; PlayMode routes; Windows captures/performance; human
review.
Evidence: none.
Remainder: none.

### MIG-51 — Establish production materials and lighting

ID: MIG-51
State: OPEN
Owner: unassigned
Depends on: MIG-50
Outcome: Day 1 hero route meets the clean restrained realism baseline in URP
without hiding construction behind effects.
Inputs: product VIS-01/ART-01 requirements, material catalogue, human house.
Files: URP settings, materials/textures, lighting/probe prefabs, visual fixtures.
Do not touch: advanced effect wish list or other rooms.
Steps:

1. Validate color space, normals, ORM channels, mipmaps, filtering, and scale.
2. Establish daylight and bounded warm practicals.
3. Bake indirect grounding and configure necessary realtime shadows.
4. Calibrate darkest normal navigation with post disabled.
5. Add only restrained accepted post treatment.
6. Capture and obtain human approval across profiles/states.

Checks: import/material audit; Windows gallery; GPU/frame record; human review.
Evidence: none.
Remainder: none.

### MIG-52 — Expand house art and sound by room pair

ID: MIG-52
State: OPEN
Owner: unassigned
Depends on: MIG-51 and canonical campaign consequences for affected rooms
Outcome: kitchen/cellar, bedroom/landing, and bathroom/spare-room reach the hero
bar with story states, interactions, and sound.
Inputs: product ART-02, room jobs, campaign state requirements.
Files: affected room art/prefabs/materials/lighting/audio and tests.
Do not touch: unrelated room pair or new renderer features.
Steps:

1. Split into three packets before becoming `ACTIVE`.
2. Replace only validated proxies with rights-cleared assets.
3. Author normal, consequence, and late-game states actually used by story.
4. Verify route/focus/save/acoustics/profiles/accessibility per pair.
5. Obtain separate human approval per pair.

Checks: per-pair asset, PlayMode, gallery, performance, and human gates.
Evidence: none.
Remainder: must split before work.

### MIG-60 — Implement Acts I–III

ID: MIG-60
State: OPEN
Owner: unassigned
Depends on: MIG-40; product STORY-03 batches closed as shared content
Outcome: Days 2–20 reuse the accepted loop with callbacks, consequences, pacing,
save/reload, and restrained escalation.
Inputs: canonical compiled campaign and product act gates.
Files: integration/content consumers and affected house state prefabs/tests.
Do not touch: new prose in Unity or renderer features.
Steps:

1. Split into Days 2–7, 8–14, and 15–20 before becoming `ACTIVE`.
2. Add one required embodied beat and consequence per day.
3. Prove declared callbacks and no orphaned effects.
4. Add exactly-once save/reload scenario per act.
5. Conduct human pacing/restraint review per act.

Checks: per-act Domain/PlayMode/Windows scenarios and human play notes.
Evidence: none.
Remainder: must split before work.

### MIG-61 — Implement Day 21 and three endings

ID: MIG-61
State: OPEN
Owner: unassigned
Depends on: MIG-60
Outcome: compliance, synchronisation, and player-initiated rupture are derived
from campaign facts and return run-specific human/physical texture.
Inputs: canonical Day 21/endings and product END-01.
Files: ending integration/UI, rupture presentation, scenarios/tests.
Do not touch: fourth ending, cause explanation, final ending selector menu.
Steps:

1. Bind ending eligibility to inspectable saved facts.
2. Keep rupture Day-21/front-door/player initiated.
3. Implement photosensitivity-safe/reduced rupture presentation.
4. Return two or three authored run-specific residues.
5. Prove all routes in Windows builds and human playthroughs.

Checks: Domain resolver, three PlayMode/build routes, save/reload, human visual
and campaign review.
Evidence: none.
Remainder: none.

### MIG-62 — Produce locked voice only if approved

ID: MIG-62
State: OPEN
Owner: unassigned
Depends on: MIG-60; human story lock
Outcome: approved hash-matched voice coverage imports atomically while the full
campaign remains playable voice-off.
Inputs: locked text hashes, cast/pronunciation/direction/provenance, TTS pipeline,
caption catalogue.
Files: staged voice output, approved Unity audio imports, voice index/lock,
audio tests.
Do not touch: prose, branches, runtime TTS, obstruction baked into sole masters.
Steps:

1. Generate/review a representative audition set.
2. Render to staging and validate hash, loudness, clipping, keys, and rights.
3. Human-review performances and reject weak lines explicitly.
4. Promote one complete accepted batch atomically.
5. Run voice-on and voice-off campaign sweeps.

Checks: voice index audit; PlayMode routing/caption fallback; human performance
and mix review.
Evidence: none.
Remainder: none.

### MIG-70 — Optimize and package the release candidate

ID: MIG-70
State: OPEN
Owner: unassigned
Depends on: MIG-52, MIG-61, MIG-62 or human decision to ship text-first
Outcome: one pinned Unity Windows build satisfies the product release gate with
measured performance, recovery, accessibility, rights, and human evidence.
Inputs: product release criteria and all closed migration packets.
Files: quality/build settings, build tooling, manifests/licenses, evidence index;
defects remain owned by their systems.
Do not touch: add features or upgrade Unity/packages casually.
Steps:

1. Profile representative routes before adding Addressables or custom features.
2. Establish high/safe budgets for CPU, GPU, memory, load, and stutter.
3. Run long traversal, portal/light transitions, context/device/focus recovery,
   and save corruption tests.
4. Audit licenses/provenance and strip developer UI/content.
5. Complete human visual/audio/accessibility/playthrough gates.
6. A human records the release and Dart-retirement decisions.

Checks: clean batch tests/build, packaged Windows matrix, product masterplan
release gate.
Evidence: none.
Remainder: none.

---

## 8. Human house handoff

The modeller owns visual architecture; Unity owns gameplay bindings and simple
collision. A handoff includes:

- source scene (`.blend` or equivalent) and deterministic interchange export;
- exporter and Unity importer versions/presets;
- metres, Y-up, baked transforms, unit scale, identity root;
- room/cell-separated render meshes and independent door/shutter/stateful leaves;
- stable anchor transforms or a generated anchor comparison report;
- material slots, texture sources, channel conventions, and provenance;
- LOD intent where profiling requires it;
- no gameplay scripts, triggers, cameras, lights, or authoritative colliders;
- source/export hashes in `house-handoff.json`; and
- route, capture, scale, and human-review result for the accepted export.

Required hierarchy may vary internally, but the prefab adapter must expose:

```text
Visual/Room__<room-id>
Visual/Exterior/Cell__<cell-id>
DoorVisual/Portal__<portal-id>
ShutterVisual/Window__<window-id>
Anchor/Focus__<focus-id>
Anchor/Emitter__<emitter-id>
```

A new export cannot replace the previous accepted house until validation passes.
Do not repair a failed route by moving gameplay markers away from canonical data
without an approved source migration.

---

## 9. Asset intake

Every external or human-produced asset follows:

```text
candidate -> rights/provenance -> source snapshot -> normalization
          -> import preset -> prefab/material -> stable-ID registry
          -> route/state/capture review -> accepted
```

Statuses are `candidate`, `blocked`, `normalizing`, `validated`, `accepted`, and
`deprecated`. A visually useful asset with unknown rights stays `blocked` and
does not enter a production scene.

The intake record contains:

- stable asset ID and intended placements;
- source URL/creator/license/receipt or human ownership record;
- source and normalized hashes;
- unit, axis, pivot, bounds, material, texture, and collider policy;
- importer preset version;
- prefab GUID;
- LOD and animation/state notes;
- human review IDs; and
- replacement/deprecation record.

Do not bulk-download assets to satisfy missing inventory paths. Start with the
Day 1 route, use labeled proxies elsewhere, and acquire only assets tied to a
room job or story state.

---

## 10. Visual and performance profiles

### 10.1 Initial profiles

Create only after MIG-51 proves the baseline:

| Setting | High | Safe |
|---|---|---|
| Render scale | 1.0 unless measured otherwise | measured lower bound |
| Antialiasing | tested TAA/SMAA/MSAA choice | stable low-cost choice |
| Realtime shadows | bounded hero/stateful lights | one or none where readable |
| Shadow distance/resolution | measured hero route | reduced, no clue loss |
| Texture quality | full within budget | mip-biased/streamed, no missing clue |
| Post | restrained accepted stack | reduced effects |
| Particles/fog | authored and bounded | reduced/disabled |

Do not publish numbers before profiling the actual production house. Requested
and effective profile, resolution, shadow budget, and downgrade reason must be
available in development diagnostics and capture metadata.

### 10.2 Provisional release measurements

Measure, do not self-certify:

- p50/p95/p99 CPU and GPU frame times on declared minimum/reference hardware;
- frame pacing during room/portal/light/dialogue transitions;
- peak and steady managed/native/GPU memory;
- cold/warm boot and first-use asset/shader stutter;
- save/load latency and failure recovery;
- 100 repeated door/light/room transitions without growing live counts; and
- window/fullscreen/resolution/focus/device recovery.

Budget decisions require actual target hardware and belong in MIG-70 evidence,
not permanent speculative constants in this plan.

---

## 11. Test matrix

| Layer | Required coverage |
|---|---|
| Domain EditMode | time/resources, journal/drift, narrative/events, ending, save DTOs, determinism |
| Content EditMode | schemas, IDs, cross-references, import idempotence, hash/GUID stability |
| Runtime PlayMode | boot failures, scene binding, routes, focus, interactions, portal acoustics, save/reload |
| Presentation PlayMode | modal/input state, dialogue, journal, captions, settings, accessibility |
| Windows smoke | production input, Day 1, save/reload, audio device, graphics profiles |
| Campaign automation | per-act exactly-once events, consequences, three endings |
| Human | visual, audio, accessibility, pacing, complete playthroughs |

Every failure artifact includes Unity patch, commit/build, platform/hardware,
seed, content index hash, save/fixture, scene, quality, resolution, logs, last
commands/events, screenshot when visible, and replay procedure.

Every code packet also receives a minimal-code review. The reviewer rejects:

- unused public APIs, speculative extension points, or placeholder methods;
- a new interface/factory/manager without a current second use or real boundary;
- domain logic in Unity lifecycle methods;
- hidden scene lookup, static mutable state, or duplicate state ownership;
- broad comments/XML summaries that repeat the code;
- tests that only reproduce implementation details; and
- a large mechanical/reformat diff mixed with behavior.

A mechanically green packet remains `PARTIAL` until this review is clean.

---

## 12. Risks

| ID | State | Risk | Mitigation |
|---|---|---|---|
| URISK-01 | OPEN | Porting current showcase instead of the game. | Explicit exclusion; house JSON and product room jobs govern. |
| URISK-02 | OPEN | Two live engines receive new features and diverge. | U3 feature freeze; one owner and transition charter. |
| URISK-03 | OPEN | Duplicate narrative prototypes become Unity canon. | Import screenplay/corpus only; migration map retires duplicates. |
| URISK-04 | OPEN | `modelScale` is applied twice or feels non-domestic. | Identity root, marker assertions, human scale review before art lock. |
| URISK-05 | OPEN | Unity scene objects become save truth. | Domain IDs/state authoritative; binding validation and replacement test. |
| URISK-06 | OPEN | Missing assets cause proxy scenes to be called finished. | Explicit proxy/accepted status and human visual gate. |
| URISK-07 | OPEN | Package/plugin sprawl delays the vertical slice. | Fixed authorized packages; new package requires ADR and measured need. |
| URISK-08 | OPEN | Editor tests pass while Windows build is broken. | Development-build gates from U0/U3 onward. |
| URISK-09 | OPEN | Voice generation locks in unfinished prose. | Story hash lock, audition, atomic promotion, voice-off completeness. |
| URISK-10 | OPEN | Visual effects recreate prototype contradictions. | Clean baseline first; rupture-only distortion; human approval. |
| URISK-11 | OPEN | Ported pacing copies a stale 96-minute day. | Product duration policy plus Day 1/act human timing evidence. |
| URISK-12 | OPEN | This plan becomes another append-only document. | Section 0.5, stable packets, compact ledger, ADRs for implementation detail. |
| URISK-13 | OPEN | Subagents produce framework-heavy, generated-looking C#. | Sections 0.6/3.4, MIG-05 guardrails, minimal-code review on every packet. |

---

## 13. Stop conditions

Set the active packet `BLOCKED` and stop when:

- product and Unity plans disagree about intended behavior;
- a source ID/canon conflict has no recorded resolution;
- another owner is active on the packet or intended files;
- a Unity/package upgrade is required but not approved/tested;
- a required asset has missing rights, source, or provenance;
- save compatibility needs a human migration choice;
- a production path cannot be tested outside a mock/editor-only seam;
- visible work has no real human reviewer;
- shared source changes would break Dart before its freeze without a coordinated
  migration; or
- the work ports renderer novelty rather than a product requirement.

Split/narrow difficult work before declaring it blocked.

---

## 14. Shared commands and evidence placeholders

MIG-01 must replace placeholders below with exact, tested commands for the
pinned editor and CI environment. Do not guess an editor path in later packets.

```text
UNITY_EDITMODE_TEST_COMMAND=<recorded by MIG-01>
UNITY_PLAYMODE_TEST_COMMAND=<recorded by MIG-01>
UNITY_WINDOWS_DEV_BUILD_COMMAND=<recorded by MIG-01>
UNITY_CONTENT_SYNC_COMMAND=<recorded by MIG-02>
```

Common source-side checks while Dart remains authoritative:

```sh
dart analyze
dart run tools/text_build.dart
npm run assets:check
```

Visible evidence must follow the human record in section 5.4. Unity capture
metadata additionally records scene, camera/route, render pipeline asset,
quality level, active Volume profile, and content index hash.

---

## 15. Compact migration ledger

Packet bodies in section 7 own detail. Keep this table synchronized.

| ID | State | Owner | Milestone | Evidence |
|---|---|---|---|---|
| MIG-00 | OPEN | unassigned | U0 | none |
| MIG-01 | OPEN | unassigned | U0 | none |
| MIG-02 | OPEN | unassigned | U1 | none |
| MIG-03 | OPEN | unassigned | U1 | none |
| MIG-04 | OPEN | unassigned | U1 | none |
| MIG-05 | OPEN | unassigned | U0 | minimal-code guardrails |
| MIG-10 | OPEN | unassigned | U1 | none |
| MIG-11 | OPEN | unassigned | U1 | none |
| MIG-12 | OPEN | unassigned | U1 | product story dependencies |
| MIG-13 | OPEN | unassigned | U1 | none |
| MIG-14 | OPEN | unassigned | U2 | save decision required in MIG-00 |
| MIG-20 | OPEN | unassigned | U2 | human scale gate |
| MIG-21 | OPEN | unassigned | U2 | human motion gate |
| MIG-22 | OPEN | unassigned | U2 | human interaction gate |
| MIG-23 | OPEN | unassigned | U2 | human audio gate |
| MIG-30 | OPEN | unassigned | U3 | human UI gate |
| MIG-31 | OPEN | unassigned | U3 | human UI gate |
| MIG-32 | OPEN | unassigned | U3 | human UI gate |
| MIG-33 | OPEN | unassigned | U3 | human accessibility gate |
| MIG-40 | OPEN | unassigned | U3 | Dart freeze decision |
| MIG-50 | OPEN | unassigned | U6 | human house gate |
| MIG-51 | OPEN | unassigned | U6 | human visual gate |
| MIG-52 | OPEN | unassigned | U6 | must split; human gate |
| MIG-60 | OPEN | unassigned | U4–U5 | must split; human pacing gate |
| MIG-61 | OPEN | unassigned | U5 | human ending/play gate |
| MIG-62 | OPEN | unassigned | U5–U6 | story lock and human voice gate |
| MIG-70 | OPEN | unassigned | U7 | human release/retirement decision |

---

## 16. Unity transition definition of done

The transition is complete only when:

- the pinned Unity project builds reproducibly from a clean checkout;
- production C# follows the minimal-code rule with no unneeded framework,
  duplicate owner, global state, or generated-looking scaffolding;
- canonical shared content imports deterministically with no hand-edited copy;
- one Unity-free domain owns all authoritative run state;
- all eight domestic rooms and three levels agree across scene, collision,
  focus, audio, save, and automation;
- the 21-day campaign has no duplicate narrative authority or idle-wait gate;
- Day 1 and all acts pass packaged Windows routes and human pacing review;
- all three endings derive from saved play and pass human review;
- text/captions communicate the full game with voice disabled;
- final house/art/audio/assets have rights, provenance, state, and human approval;
- high/safe/accessibility modes preserve every required clue and action;
- save/recovery, performance, memory, load, and long-run evidence meet the
  product release gate; and
- a human records the release and Dart-retirement decisions.

Until then, the project is a migration in progress, regardless of test names,
screenshots, version strings, or editor appearance.
