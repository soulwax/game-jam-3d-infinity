# Unity Port Plan

## Purpose

Port **The Quarantine** from its custom pure-Dart/WebGL runtime to Unity with
the least avoidable re-authoring. This document is written as an implementation
contract: a small coding agent should be able to take one bounded section,
implement it, and know what it must not change.

The port should preserve the game, its authored content, its save semantics,
and the human-made house. It should *not* attempt to translate the custom
renderer, shaders, DOM code, or Dart files line by line.

## What Exists Today

The current game is a browser-first Dart application with a WebGL2 renderer.
It already has useful boundaries that should become Unity boundaries:

| Area | Current source of truth | Unity destination |
| --- | --- | --- |
| Session, day loop, resources, saves | `lib/game/`, `lib/sim/`, `lib/difficulty/` | pure C# domain assembly |
| Journal, drift and endings | `lib/journal/`, `lib/story/` | pure C# domain/content assembly |
| Visitor selection and reactions | `lib/visitors/`, `lib/story/` | content-driven encounter service |
| House topology and state | `assets/house/*.json`, `lib/house/` | layout importer, scene markers, runtime controllers |
| UI and accessibility | `lib/ui/`, `web/main.dart` | UI Toolkit or uGUI presentation layer |
| Audio and portal occlusion | `lib/engine/audio*.dart`, `assets/house/soundscape.json` | Audio Mixer, spatial emitters, portal graph |
| Rendering and post effects | `lib/presentation/`, `shaders/` | URP settings, Volumes, small custom effects only if needed |
| Test/automation fixtures | `tools/test_*.dart`, `assets/house/verification/` | NUnit EditMode/PlayMode tests and fixture loader |

Relevant content scale at the time of this plan:

- 21 broadcast days and 21 night entries.
- 22 visitor records, 12 authored reactions, and 10 conditional variants.
- Five closed journal vocabulary fields: 16 `who`, 14 `verb`, 15 `object`, 11
  `place`, and 10 `time` values.
- Eight rooms, nine portals, one stair transition, seven exterior cells, nine
  interior-window records, 61 asset definitions, 60 placements, 36 pickable
  placements, and eight authored sound emitters.
- 291 rendered voice clips under `web/res/vo/`. Treat them as legacy,
  regenerable presentation output, not narrative source. The authored `text/`
  corpus and reproducible Python text-to-speech (TTS) pipeline are authoritative.
- 220 existing Dart test programs and house-route/capture fixtures that are
  valuable behavioural evidence.

The current procedural/proxy house is not the final visual asset. A human will
model the final house. The house's *topology, IDs, anchors, routes, and scale*
remain authoritative during that replacement.

## Platform Decision

Use **Unity 6.3 LTS** and **URP**, targeting Windows desktop first. Unity 6.3
LTS is supported through December 2027; use a fixed patch version in
`ProjectVersion.txt`, not a floating "latest" editor. URP is a good fit for a
small first-person interior game because it has an artist-friendly workflow and
is designed for optimized graphics across hardware tiers. See Unity's
[support policy](https://unity.com/releases/unity-6/support) and
[URP manual](https://docs.unity3d.com/6000.0/Manual/universal-render-pipeline.html).

Install only these packages at project creation:

1. Universal RP.
2. Input System.
3. Test Framework.
4. Cinemachine only if it is used for authored cutscenes; do not use it for the
   ordinary first-person camera.
5. Addressables only after the house and all content work in one scene. It is
   useful for room/exterior streaming, but adds unnecessary indirection to the
   first playable build. Unity's Addressables system supports asynchronous
   dependency loading when that later need is real.

Do not start with HDRP, a third-party dialogue framework, a behaviour tree,
ECS, networking, procedural generation, or a custom render pipeline. None is
needed to reproduce this game.

## Non-Negotiable Rules

1. **Stable IDs are API.** Do not rename room IDs, portal IDs, window IDs,
   focus IDs, visitor IDs, story keys, asset IDs, or sound-emitter IDs without
   an explicit migration and a passing validation test.
2. **`assets/house/house.json` is measured data.** It is not a suggestion for
   an artist. The Unity importer applies `modelScale: 2.25` exactly once.
3. **Visual meshes do not own gameplay state.** Doors, shutters, lights,
   pickables, and sound sources use components keyed to content IDs. A mesh
   replacement must not erase a route, interaction, or save state.
4. **Domain code is Unity-free.** `GameSession`, journal drift, visitor choice,
   resource budgets, save migration, and story selection must compile and run
   without `MonoBehaviour`, `GameObject`, `Time`, `Random`, or scene objects.
5. **Content is data, never scene-name logic.** Code must not infer behaviour
   from object names such as `Door_01` or text such as `kitchen`.
6. **One source of state.** A `PortalController` may animate a door, but the
   domain `PortalState` is the authority. UI, collision, sound, and animation
   react to its event; they do not keep competing booleans.
7. **No Unity `Resources` folder.** Content is imported from the current repo
   through a deterministic sync step. `Resources.Load` hides dependencies and
   makes asset ownership unclear.
8. **Do not import `dist/` or copy generated browser code.** The Unity port
   consumes authored data and audio, not compiled Dart output.

## Repository Layout

Create Unity as a subproject so the original game remains runnable and its data
remains inspectable.

```text
.
├── assets/                       # existing authored house source; keep canonical
├── text/                         # existing authored narrative source; keep canonical
├── web/res/                      # current compiled text, audio, textures, fonts
├── lib/                          # behavioural reference only during migration
├── tools/unity/                  # deterministic sync/validation scripts
└── unity/
    ├── Assets/
    │   ├── _Quarantine/
    │   │   ├── Art/
    │   │   │   ├── House/        # human-modeled FBX/texture source imports
    │   │   │   ├── Props/        # imported or authored props
    │   │   │   ├── Materials/
    │   │   │   └── Prefabs/
    │   │   ├── Audio/
    │   │   │   ├── Music/
    │   │   │   ├── Sfx/
    │   │   │   ├── Voice/
    │   │   │   └── Mixers/
    │   │   ├── Content/
    │   │   │   ├── Imported/    # generated ScriptableObjects; never hand-edit
    │   │   │   ├── Raw/         # synced JSON/TextAssets and provenance records
    │   │   │   └── Runtime/     # small runtime content adapters
    │   │   ├── Prefabs/
    │   │   ├── Scenes/
    │   │   │   ├── Bootstrap.unity
    │   │   │   └── House.unity
    │   │   ├── Scripts/
    │   │   │   ├── Domain/
    │   │   │   ├── Content/
    │   │   │   ├── Runtime/
    │   │   │   ├── Presentation/
    │   │   │   ├── Editor/
    │   │   │   └── Tests/
    │   │   └── Settings/
    │   └── StreamingAssets/Quarantine/ # generated runtime JSON/audio index only
    ├── Packages/
    └── ProjectSettings/
└── UNITY_PLAN.md
```

Use `.asmdef` files from the first commit:

| Assembly | May depend on | Must not depend on |
| --- | --- | --- |
| `Quarantine.Domain` | .NET base libraries | UnityEngine, assets, scenes |
| `Quarantine.Content` | Domain, `UnityEngine` for asset containers | Runtime/UI |
| `Quarantine.Runtime` | Domain, Content, UnityEngine | Presentation UI details |
| `Quarantine.Presentation` | Runtime, Content, UI/Input/URP | Editor code |
| `Quarantine.Editor` | all runtime assemblies, UnityEditor | player builds |
| `Quarantine.Domain.Tests` | Domain, NUnit | Unity scene APIs |
| `Quarantine.Runtime.Tests` | Runtime, Content, NUnit | Editor-only APIs |

This separation is the main protection against a port that works only when a
specific scene is loaded.

## Deterministic Content Pipeline

### Inputs and generated files

Keep these existing inputs authoritative:

```text
text/**/*.txt
assets/house/house.json
assets/house/inventory.json
assets/house/soundscape.json
assets/house/materials.json
assets/house/verification/**/*.json
web/res/manifest.json
web/res/{sfx,music,ir,tex}/**
web/res/vo/**                    # legacy/reference; sync only under voice-lock
```

`text/` is compiled today by `tools/text_build.dart` into
`web/res/text.json` and `web/res/text_choices.json`. Continue to run that
compiler first. Unity should consume the compiled JSON, including
`text_choices.json`; it contains deterministic choices used by the authored
drift/voice process.

Add one deterministic command, for example:

```text
node tools/unity/sync-content.mjs
```

It must:

1. Run or verify `dart run tools/text_build.dart`.
2. Copy the listed JSON inputs into `unity/Assets/_Quarantine/Content/Raw/`.
3. Copy SFX, music, IR, and textures into the matching Unity folders without
   transcoding them. Copy voice only when a matching approved `voice-lock.json`
   exists; see **Text-to-Speech After Story Lock**.
4. Write `content-index.json` containing source path, SHA-256, byte length,
   licence/provenance, and import destination for every copied file.
5. Delete only generated files it owns; never delete human art or source data.
6. Fail if a referenced asset, room ID, portal ID, or focus ID is missing. If
   an approved `voice-lock.json` exists, also fail on any missing indexed voice
   file; before Phase 7, voice is optional and must not block a text-only build.

The Unity editor importer reads the raw JSON and writes generated
`ScriptableObject` assets under `Content/Imported/`. Give generated assets a
header such as `GENERATED - edit source JSON, then run sync`. The importer must
be idempotent: rerunning it without content changes produces no semantic diff.

### Content types to import

Use small serializable records, not one giant `GameDatabase` full of raw
`Dictionary<string, object>` values.

```csharp
// Quarantine.Content
public sealed class HouseLayout : ScriptableObject {
    public float ModelScale;
    public RoomDefinition[] Rooms;
    public PortalDefinition[] Portals;
    public StairDefinition[] Stairs;
    public string[] ExteriorCells;
}

public sealed class StoryCatalog : ScriptableObject {
    public BroadcastDefinition[] Broadcasts;
    public VisitorDefinition[] Visitors;
    public ReactionDefinition[] Reactions;
    public VariantDefinition[] Variants;
    public VocabularyDefinition Vocabulary;
    public TextRecord[] Documents, Nights, Records, Endings, Cues;
}
```

Lookup tables (`Dictionary<string, ...>`) are built once in `OnEnable` or a
bootstrap method. Do not serialize both the array and a second mutable copy.

Use literal current IDs as keys, for example `living-room`, `hall-living`,
`journal-desk`, `broadcast:17`, and `sibling:14:full:2`. Prefix keys only when
two existing namespaces can collide.

## Narrative Editorial Lock

### Canonical source decision

Do this before porting story logic or generating any new voice. The live
authored corpus is `text/**/*.txt`, compiled by `tools/text_build.dart` into
`web/res/text.json` and `web/res/text_choices.json`. It contains the broadcast
schedule, visitor lines, arrivals, reactions, variants, residues, documents,
night text, records, and endings.

Several Dart files are useful prototypes or test fixtures but cannot be treated
as a second story source without an editorial decision:

- `lib/story/narrative_truth_ledger.dart` calls Dr. Ayling the protagonist,
  while `text/visitors/ayling.txt` makes Mrs Ayling a visitor who becomes warden
  on Day 17.
- `lib/story/narrative_encounter_director.dart` contains a separate 21-day
  encounter matrix whose characters, facts, and reaction flags differ from the
  text corpus. It is exercised by tests but is not called by `web/main.dart`.
- `lib/story/character_roster_registry.dart`,
  `timeline_progression_coordinator.dart`, `narrative_scene_prototype.dart`,
  `obscure_reference_lattice.dart`, and `narrative_echo_analyzer.dart` contain
  useful character and thematic notes, but several names, facts, and locations
  do not match the playable text.
- `lib/story/physical_aftermath_manager.dart` is used at runtime, but its
  hard-coded residue flags and placements only partially match the corpus's
  `@reaction`, `@variant`, and `@residue` records.

For the Unity port, make `text/` the sole release narrative source. Migrate
any approved idea from those Dart prototypes into the corpus and its editorial
documents first, then retire the duplicate implementation rather than porting
both. In particular, replace hard-coded aftermath definitions with the compiled
`@residue` records and a data-driven `ResidueResolver`.

The player remains an unnamed, second-person householder. Mrs Ayling is a
separate person and the Day-17 named warden. Do not introduce a named Dr. Ayling
or an "Ayling family" backstory unless the writers explicitly revise the whole
corpus, the endings, and the relevant visitor conversations together.

### Story-lock documents

Create `docs/story/` outside `text/` so the existing parser never mistakes
planning notes for playable prose:

```text
docs/story/
├── STORY_BIBLE.md              # concise human-readable canon
├── day-beat-matrix.csv         # one row for Days 1-21
├── character-bible.yaml        # only characters in the shipped corpus
├── claim-ledger.csv            # official, personal, and observed claims
├── choice-payoff-matrix.csv    # every option and its later result
├── content-source-audit.md     # each legacy Dart narrative file: adopt/retire
├── editorial-decisions.md      # approved changes and rationale
└── story-lock.json             # generated hash and approval gate
```

The documents are not runtime content. They exist so writers, small coding
agents, and audio production all agree on the same facts.

`STORY_BIBLE.md` must fit within four pages and answer only these questions:

1. Who is the player, what is their ordinary routine, and what do they want to
   preserve during the order?
2. What does the Board claim, what can the player observe, and what remains
   genuinely unknowable?
3. What are the game's three evidence sources: broadcast/official record,
   visitor/domestic testimony, and player journal/house observation?
4. Why does Mrs Ayling's Day-17 appointment matter to the player personally?
5. What does each ending mean emotionally without explaining the house or
   declaring one metaphysical answer true?

The day-beat matrix has exactly these columns:

```text
day, routine, official-pressure, human-pressure, player-action,
evidence-created, evidence-questioned, optional-choice-id,
later-callback, night-change, visual-or-audio-support, ending-relevance
```

No Day may be blank in `routine`, `player-action`, or `ending-relevance`.
"More atmosphere" is not a valid player action. An action can be modest:
listen to the broadcast, examine a domestic object, choose how to answer a
visitor, write/correct/lock a journal entry, collect a ration, or sleep.

The character bible has one record per shipped visitor, not per unreferenced
prototype. Each record contains: stable ID, public role, immediate want, what
they know, what they misremember, one concrete recurring object/action, sentence
shape, delivery channel (`door`, `letterbox`, `wireless`, `wall`, etc.), and
forbidden voice habits. It must not add private lore that never appears in play.

### Story improvements to make before lock

Preserve the current strengths: the Board's administrative language gradually
edits reality; domestic care is more consequential than heroic action; the
journal makes memory playable; and the final answer stays unresolved. Improve
clarity and payoff without making the horror louder or more explanatory.

1. **Establish the playable premise by Day 1.** The player must understand that
   they are confined to this house, expected to keep a record, and able to act
   on ordinary routines before any anomaly occurs. The first broadcast, a
   physical compliance card, and one visitor should each teach a different part
   of that premise without repeating exposition.
2. **Give each week a concrete dramatic job.** Days 1-7 establish routines and
   people; Days 8-14 turn conflicting paperwork into a burden; Days 15-17 turn
   an anonymous system personal through missing names and Mrs Ayling; Days 18-21
   force the player to decide what record can be kept. The matrix must show a
   visible escalation in player responsibility, not merely stranger prose.
3. **Make every important claim triangulable.** An official claim should have
   one possible human echo and one possible observation or journal response.
   It does not need a single correct answer. Each anomaly needs a credible
   ordinary reading, and no final scene should invalidate that restraint.
4. **Turn reactions into remembered actions.** All 12 current reactions already
   have immediate replies. Before story lock, give every option either one
   later variant/residue/ending afterimage or an explicit editorial reason for
   deliberately having no callback. Do not convert choices into a hidden
   morality score; they change testimony, objects, and emotional texture.
5. **Strengthen the final-week payoff.** The ending resolver remains driven by
   journal accuracy, locks, and rupture, because that makes the core record
   mechanic meaningful. Relationship choices alter a small truthful afterimage,
   not the ending type. By Day 20 the player must be able to identify at least
   three specific things they chose to preserve, correct, conceal, or hand on.
6. **Use physical aftermath as evidence, not collectibles.** A later residue
   must attach to an existing focus target, carry its original choice ID, and
   say something new in one or two lines. It must never spawn a fetch quest or
   silently disappear because a visual artist replaced a prop.
7. **Keep character voices distinct on the page.** The child is literal and
   observant, Sowerby procedural but not villainous, Mrs Ayling courteous with
   an exposed plea beneath it, Denise object-led and capable of self-correction,
   Marchant clinically careful, and the stranger intimate without explaining
   how he knows. Audit all other visitors using the same concrete rule.
8. **Protect silence.** Days 19-21 intentionally reduce street life. Do not
   fill those days with extra visitors, lore, or music. Let absence, routine,
   and the house's own sounds do narrative work.

### Proposed 21-day spine

Use this as the first concrete beat-matrix draft, then let the writers revise
the wording while preserving the player actions and escalation. Every day has
one playable verb and one question the player can carry into the next day.

| Act | Days | Dramatic job | Required turn |
| --- | --- | --- | --- |
| I. Routine becomes record | 1-7 | Teach confinement, rationing, the journal, and the three evidence channels | A small official correction conflicts with a visitor's ordinary memory; the Day-7 response becomes the first later callback |
| II. Paperwork becomes burden | 8-14 | Make contradictory instructions costly without adding spectacle | The player must correct, preserve, or conceal a record and see a domestic consequence before sleep |
| III. The system gets a face | 15-17 | Shift from anonymous administration to personal responsibility | Missing names and altered addresses culminate in Mrs Ayling's Day-17 appointment and a choice about who may read the record |
| IV. What can be handed on | 18-21 | Converge journal locks, residues, visitors, and the quieting street | Days 19-20 echo at least three earlier player decisions; Day 21 resolves the player's action while leaving the cause unknowable |

For each row in `day-beat-matrix.csv`, specify the action before drafting the
scene. A useful implementation invariant is: `one action -> one new piece of
evidence -> one changed relationship or object -> one future callback`. If a
day only adds lore, move that information into a visitor, document, or
physical observation that the player can choose to engage with.

### Small-agent prose rules

These rules keep future content patches deterministic and easy to review:

- Preserve existing IDs and parser markers; never invent a key in prose alone.
- Keep broadcast chunks short enough for one caption page and retain their
  existing five-part structure unless the story bible approves a change.
- Keep visitor tiers contiguous (`off`, `hint`, `full`) and make each tier
  playable without voice. No tier may require a previous clip to be heard.
- Use one concrete object or action per visitor appearance; avoid introducing
  a new proper noun unless it is added to the character and claim ledgers.
- Every choice records its intended immediate effect and later payoff in the
  matrix. A deliberately consequence-free choice must say why.
- Do not use a new ending flag, residue focus, or vocabulary term without a
  schema change, fixture, and audit rule in the same commit.
- Write captions first. TTS is a generated representation of locked text, not
  a place to hide timing, exposition, or alternate canon.

### Editorial and technical gates

Add a `narrative-audit` command to `tools/unity/`. It first runs the existing
text compiler, then fails on semantic failures the current parser does not
check:

- a reaction/variant/residue effect whose flag is never produced by a reaction,
  ignored-visit rule, or documented system rule;
- a residue focus ID absent from the imported house/inventory focus catalogue;
- a character named in a line but missing from the shipped character bible;
- a day with no player action or no route to the stated ending relevance;
- a claim marked "verified" in the claim ledger without an authored observation
  path; and
- a duplicate narrative fact with conflicting canon status.

The output is a readable `narrative-report.md` with a 21-day table, all flags,
every choice's callback, unresolved claims, and orphaned audio keys. This report
is part of review, not a player build.

Run three text-only playtests before story lock:

1. **Cold read:** a new reader summarizes the premise, the central question,
   Mrs Ayling's significance, and their actions at Days 7, 14, and 21.
2. **Continuity read:** an editor follows two opposed choice paths and checks
   every callback, residue, record, and ending afterimage.
3. **Restraint read:** an editor removes any line that over-explains the house,
   names an unsupported cause, or repeats a previous line's function.

Story lock is a reviewed commit, not a feeling. `story-lock.json` is generated
only after the three reads and contains the SHA-256 hashes of every playable
text file, compiled `text.json`, `text_choices.json`, character bible,
claim ledger, choice-payoff matrix, and the audit report. Any change to one of
those invalidates the lock and all production voice for affected text.

## Domain Port

### Design

Port the *rules*, not the Dart syntax. Start with the existing values in
`lib/config.dart`; put ported constants in `Quarantine.Domain/GameRules.cs`
and test them. Important current rules include:

- 480 real seconds per game day, sunrise at 06:00 and sunset at 18:00.
- Daily budget: 16 hours, 6 gas; ration days: 2, 5, 9, 12, 16, 19.
- Player: 2.0 m/s, 1.65 m eye height, 0.3 m capsule radius, 4.5 m interaction
  distance, 30-degree interaction cone.
- Four journal locks, journal drift on sleep, difficulty accumulation, and
  deterministic run seeds.
- Synchronisation ending thresholds: accuracy >= 0.6 and at least three locked
  entries.

The domain entry point should look roughly like this:

```csharp
public sealed class GameSession
{
    public GameState State { get; private set; }

    public IReadOnlyList<GameEvent> Advance(double elapsedSeconds);
    public ActionResult WriteJournal(JournalLine line, double shakiness);
    public ActionResult ChooseReaction(ReactionKey reaction, string optionId);
    public ActionResult Interact(InteractionCommand command);
    public IReadOnlyList<GameEvent> Sleep(SleepQuality quality, SleepLocation location);
    public SaveSnapshot CreateSave(SessionMeta meta);
}
```

`GameSession` owns mutable state. Everything else receives immutable snapshots
or domain events. `Update()` only calls `session.Advance(Time.deltaTime)` and
routes player commands. It must not directly change journal, door, economy, or
narrative state.

### State to persist

Create an explicit, versioned `SaveSnapshot` compatible in shape with the
current `version/run/meta` format:

```json
{
  "version": 1,
  "run": {
    "houseSeed": 42,
    "runSeed": 42017,
    "time": { "day": 1, "hour": 10.0 },
    "dayLoop": {},
    "journal": {},
    "difficulty": {},
    "narrative": {},
    "house": {}
  },
  "meta": { "player": {}, "settings": {} }
}
```

Store it beneath `Application.persistentDataPath`, write to `*.tmp`, then atomically
replace the old file. Save after an accepted state-changing action, before scene
unload, and on application focus loss. Keep a rolling backup. A malformed save
must start a recoverable new session, never crash boot.

### Domain implementation order

1. `GameTime`, `DayLoop`, `DifficultyState`, `WeatherSchedule`.
2. `Journal`, `Entry`, vocabulary validation, correction, locks, and drift.
3. `NarrativeState`, reactions, variants, and frozen journal quotations.
4. `HouseState`, portal/shutter/mantle state, inventory inspection state.
5. Visitor schedule, arrival/ambient events, and ending selection.
6. Save serialize/restore and deterministic state digest.

Do not start Unity scene work until steps 1-3 have passing EditMode tests.

## House Integration Contract

### Coordinate and scale contract

The existing house JSON is canonical, local, Y-up metre data. Unity uses the
same numeric coordinate order:

```text
JSON [x, y, z] -> Unity world (x, y, z)
world position = canonical position * house.modelScale
```

`house.json` stores canonical values and `modelScale` is 2.25. Never apply
2.25 in both the importer and a parent transform. The Unity `HouseRoot` must
have position `(0,0,0)`, rotation `(0,0,0)`, and scale `(1,1,1)`; the importer
creates already-scaled markers and generated placement transforms.

Before accepting the human house, verify these known runtime anchors against
the imported layout:

- player eye starts in the hall at the scaled spawn anchor;
- front-door and hall portal boundaries align to layout markers;
- first floor starts at the scaled 4.2 m datum;
- all four route fixtures in `assets/house/verification/routes.json` pass with
  the 0.3 m-radius player controller;
- the fixed 960x540 camera fixtures in
  `assets/house/verification/captures.json` land in the intended rooms.

Do not negate Z, rotate the entire house, or "make it fit" by scaling an import
until those fixture tests fail in a documented way. If a DCC exporter changes
axes, fix it in that model's import preset and retest its markers.

### What the human house modeller delivers

The modeller owns visual architecture. The Unity project owns gameplay marker
objects, trigger volumes, and simple collision. Deliver one `House.fbx` (or a
documented equivalent) plus source files, textures, and a prefab. The deliverable
must have this hierarchy:

```text
HouseRoot                         # transform identity
├── Visual                         # render meshes only
│   ├── Rooms/Room__living-room
│   ├── Rooms/Room__hall
│   ├── ... eight stable room IDs
│   └── Exterior/Cell__front ... seven stable cell IDs
├── DoorVisuals/Portal__hall-living
├── ShutterVisuals/Window__living-north-west
└── Anchors                         # empty transforms, exact IDs below
    ├── Room__living-room
    ├── Portal__hall-living
    ├── Window__living-north-west
    ├── Focus__journal-desk
    └── Emitter__hall-clock
```

The model must not include gameplay colliders, triggers, cameras, lights,
scripts, or a non-unit root transform. Unity adds those as separate prefab
layers. The model can be replaced without breaking a save.

Required modelling conventions:

- metres, Y-up, baked transforms, normal scale of 1;
- pivots at the documented floor/wall anchor, not arbitrary object centre;
- named material slots, no unreferenced duplicate materials;
- separate door leaves, shutters, windows, and breakable/stateful meshes;
- authored LOD0/LOD1 for whole rooms/exterior cells; do not merge doors or
  shutters into static room geometry;
- source `.blend` or equivalent checked into the art source location, and a
  deterministic exported interchange file checked into Unity;
- visual mesh has no collision obligation; keep doorways and routes visibly
  clear of the separate collision proxy.

The existing `assets/house/MODELING_PLAN.md` is the detailed artistic and
architectural brief. It is more specific than this plan about Victorian/Edwardian
construction, room composition, exterior window facts, kits, and visual review.

### Unity scene layers

Use a single additive `House.unity` scene initially, with these independent
root objects:

```text
HouseRoot/Visuals                 # human model
HouseRoot/Collision               # simple BoxCollider/MeshCollider proxies
HouseRoot/RoomVolumes             # one trigger per room, stable RoomId
HouseRoot/Portals                 # PortalController + door collider/animation
HouseRoot/Interactions            # Interactable targets, stable FocusId
HouseRoot/Audio                   # emitter positions from soundscape JSON
HouseRoot/Lighting                # lights and reflection probes
HouseRoot/Debug                   # editor-only labels and route gizmos
```

Use `CharacterController`, not `Rigidbody`, for the player. Keep its radius at
0.3 m and height at 1.8 m. Model stairs normally and let the controller climb
them; preserve the `hall` to `landing` room transition using room-volume
triggers. Do not preserve the Dart implementation's bespoke stair interpolation
unless the real stair cannot be traversed reliably.

`RoomVolume` owns only `RoomId`. `PortalController` owns only `PortalId`, its
visual animator references, and collider references. It subscribes to domain
events to open/close/lock, sets collision and animation, then reports no state
back except explicit player commands. This prevents the visual door and the
saved door from diverging.

### Interaction

Each target uses an `Interactable` component with exactly one stable key and a
typed action:

```text
Focus__journal-desk       -> OpenJournal
Focus__front-door         -> Door(portalId: front-door)
Focus__mantle-living      -> ToggleMantle(mantleId: mantle-living)
Focus__ration-book        -> Inspect(recordId: ration-book)
Focus__bathroom-mirror    -> Inspect(focusId: bathroom-mirror)
```

Raycast from the camera, reject targets beyond 4.5 m or outside the 30-degree
cone, then call the domain command. Prefer collider hit points and one
highlight outline; do not use a constantly visible ring or a giant invisible
trigger. The interaction prompt is presentation-only and must disappear when a
modal UI is open.

When `inventory.json` is imported, make a prefab mapping `assetId -> Prefab`.
Instantiate its 60 placements from data and parent each one under its room.
The JSON's source paths are an acquisition backlog, not proof that each model
already exists. The current porcelain mermaid OBJ is the only binary house model
present; use it as an import pilot before bulk asset work.

## Player, UI, and Accessibility

### Input

Create one Input Actions asset with these maps:

```text
Gameplay: Move, Look, Interact, AlternateInteract, Journal, Pause
Dialogue: Next, Choose1, Choose2, Choose3, Cancel
UI: Navigate, Submit, Cancel, Point, Click, Scroll
```

Support keyboard/mouse and standard gamepad from the first playable slice.
Cursor lock belongs to `PlayerInputRouter`, not each panel. Opening journal,
dialogue, pause, settings, ending, or sleep UI switches to the appropriate map,
pauses player movement, and restores the previous map on close.

### UI architecture

Use one persistent `UIRoot` with these panels:

- `HudPanel`: day/time/resources, reticle, interaction prompt, transient notice.
- `DialoguePanel`: speaker, typewriter text, response options, skip/advance.
- `JournalPanel`: vocabulary composition, entries, correction, lock, records.
- `BroadcastPanel`: date/status/sighting/instructions/closing text and captions.
- `PausePanel`: controls, graphics, audio, accessibility, credits, quit.
- `SleepPanel` and `EndingPanel`.

UI Toolkit is the recommended implementation for settings, journal, and pause
panels because they are data-heavy; a screen-space uGUI Canvas is acceptable for
the reticle and dialogue if it makes typewriter/canvas effects materially
simpler. Pick one owner per panel and do not rebuild the same modal in both
systems.

Port current accessibility features as requirements, not later polish:

- captions for speech, non-speech, and directions;
- text pacing and prompt density;
- full remapping and conflict handling;
- separate master/music/effects/voice controls, mono output, dynamic range;
- reduced motion and photosensitivity-safe mode;
- legible focus state and keyboard/gamepad navigation;
- no important information conveyed only by flicker, colour, or positional
  audio.

## Rendering and Lighting

The Dart renderer contains custom WebGL passes, PS1-scale options, visual
quality negotiation, and shaders. Unity should reproduce the *look and player
readability*, not each GLSL pass.

### First render target

Start with one URP renderer asset and one high-quality profile:

- baked indirect light for static geometry, mixed warm practical lights;
- real-time shadow only for player-near/stateful lights;
- reflection probes per major room; one exterior probe;
- URP Volume for restrained bloom, vignette, film grain, colour adjustment,
  depth of field only where it helps focus;
- low-key cool ambient colour with warm fireplace/candle accents;
- no forced fog, VHS, SSR, volumetric fog, or custom full-screen shader in
  the first playable slice.

Match the current fixed captures before adding deliberate degradation. If the
pixelated presentation is required, add a dedicated optional `PixelPresentation`
feature that renders the game camera to a 384x216 `RenderTexture` and point
upscales it. Keep UI at display resolution and disable the effect for readable
menus/accessibility modes.

Later create `Low`, `Medium`, and `High` URP assets. Use URP render scale,
shadow distance, texture mip bias, anti-aliasing, probe density, and post
processing toggles instead of carrying over the old renderer's capability code.
Profile on target hardware before adding a custom `RendererFeature`. Unity
documents that URP performance is controlled by the renderer path and settings,
and should be measured with the Profiler or platform tools.

### Day/night, weather, and rupture

`DayNightController` observes domain time and sets sun rotation, ambient
intensity, exterior light, and interior practical state. `WeatherController`
uses the seeded schedule from the domain. It controls rain audio/particles,
window wetness, thunder, and exterior exposure only.

Create a `RupturePresentationController` that listens to rupture events. It can
temporarily change a Volume profile, camera jitter, door behaviour, and lights.
It must never decide when rupture occurs or write directly to journal/narrative
state.

## Audio and Voice

### Audio structure

Create an `AudioMixer` with groups:

```text
Master
├── Music
├── Voice
├── Broadcast
├── Ambience
├── Interaction
└── Footsteps
```

Import music, SFX, and IR first. Retain the current SFX names as content keys.
Configure short effects as decompressed samples and music as streaming/compressed
clips after measuring load time and memory. Do not make legacy or newly generated
voice part of the first playable build; dialogue is caption-complete before any
TTS work begins.

Import `soundscape.json` into `SoundEmitterDefinition` components. It already
binds eight stable emitters to placements, rooms, gains, and cue keys. Create
one spatial `AudioSource` per active emitter and position it from the scaled
house layout. The listener's current room comes from `RoomVolume`.

For cross-room audio, port the existing simple portal-graph approach before
using expensive physics occlusion:

1. Find the portal path from source room to listener room.
2. Each portal contributes gain and low-pass attenuation according to open,
   closed, or locked state.
3. Apply the summed gain and low-pass filter to the event's `AudioSource`.
4. Recalculate when room or door state changes, not every frame for every sound.

This matches the current design better than line-of-sight-only occlusion and
makes closed doors narratively meaningful.

### Text-to-Speech After Story Lock

**Text comes first. TTS begins only after story lock.** During story work, use
captions, room tone, SFX, and a neutral advance sound. Do not create "temporary"
production VO, because teams start protecting the timing and wording of audio
that should still be easy to revise.

The 291 files under `web/res/vo/` are reference material. They may be auditioned
privately to understand the existing treatment, but are not automatically copied
to Unity or assumed current. If a line's source hash differs from the approved
story lock, its old clip is invalid.

The current `scripts/tts.py` remains the single production reference after lock.
It parses broadcasts and visitors, uses Edge neural TTS when available with a
gTTS fallback, separates performance (`voice`/`tone`) from transmission (`set`),
uses ffmpeg for radio/door/wall treatment, then emits loudness-checked 24 kHz
mono OGG. Do not write a second TTS engine in C# and never synthesize in a
player build.

#### Voice production gate

The `voice-batch` command must refuse to run unless all are true:

1. `docs/story/story-lock.json` exists and its file hashes match the current
   playable corpus and editorial ledgers.
2. `narrative-audit` passes with zero errors.
3. A `voice-cast.yaml` exists for each spoken visitor and broadcast announcer.
   It gives only delivery metadata: TTS provider/voice, tone, transmission set,
   pronunciation notes, and accessibility-sensitive wording. It never contains
   alternate story text.
4. The chosen provider's terms, synthetic-voice rights, and any cloning consent
   are recorded in `docs/audio/voice-provenance.md`.
5. The batch has a stable seed and an explicit output version.

Once these pass, generate *only* a staged batch:

```text
python scripts/tts.py <locked-selection> --out /tmp/quarantine-vo-stage \
  --unity-manifest /tmp/voice-index.json --seed story-lock-v1
node tools/unity/validate-voice-batch.mjs /tmp/quarantine-vo-stage
node tools/unity/promote-voice-batch.mjs /tmp/voice-index.json
```

`<locked-selection>` is an explicit day/speaker selection supported by the
script. Add a tested `--all-locked` switch before using it for a full production
batch; do not rely on the current ambiguous `--all` help text. The commands
above describe the contract, not shell syntax that must be copied literally.

`promote-voice-batch.mjs` copies approved OGGs to Unity, writes a read-only
`voice-index.json`, and writes `voice-lock.json`. It is the only process allowed
to populate `Assets/_Quarantine/Audio/Voice/`.

```json
{
  "schemaVersion": 1,
  "storyLockSha256": "...",
  "generator": { "script": "scripts/tts.py", "version": "...", "seed": "story-lock-v1" },
  "clips": [
    {
      "id": "visitor:sibling:14:full:chunk:2",
      "textKeys": ["visitor:sibling:14:full.2"],
      "textSha256": "...",
      "audioPath": "Voice/sibling-day14-full-2.ogg",
      "audioSha256": "...",
      "durationSeconds": 12.4,
      "speaker": "sibling",
      "tone": "confiding",
      "transmission": "door"
    }
  ]
}
```

Use `broadcast:<day>:chunk:<n>` for the assembled broadcast clips and
`visitor:<id>:<day>:<tier>:chunk:<n>` for visitor clips. A clip can contain
multiple text keys when the existing chunking process combines short lines; its
index must list every contributing key. Do not derive a runtime key from the
filename alone.

#### Text-to-voice QA

Review the staged batch before promotion. The review order is:

1. **Text accuracy:** an editor compares the spoken script with the locked
   source, including drift alternative chosen for the batch seed.
2. **Pronunciation and performance:** check names, addresses, dates, numbers,
   clipped Board language, child speech, and the distinction between every
   recurring visitor. Fix pronunciation metadata, not approved prose, unless a
   real story error was found.
3. **Treatment:** ensure wireless/broadcast clips are intelligible beneath
   degradation; door and letterbox clips feel located outside the room; do not
   double-apply room reverb to a voice treatment that already has it baked in.
4. **Accessibility:** captions remain the original locked prose, can be read
   independently of the voice, and are never timed only from a remote TTS API.
   Store optional word/line timing from the Edge boundary output when available;
   otherwise reveal caption blocks at measured clip boundaries.
5. **Technical checks:** all indexed files exist, duration is within the line
   budget, integrated loudness/true peak meet the script's limits, audio hashes
   match, and every scheduled dialogue event resolves to a clip or an explicit
   caption-only fallback.

Any text change invalidates only clips whose `textSha256` changed, but it also
invalidates `story-lock.json`; re-run the editorial gate before regenerating.
This makes late corrections cheap without letting audio become a parallel script.

At runtime, start caption and clip together, permit advance/skip, and use a
measured text-duration fallback if a clip fails to load. Keep voice and
broadcast mixer levels separate, captions independently toggleable, and ensure
the game remains complete with voice disabled.

There is an existing provenance warning: `web/res/manifest.json` labels `vo/**`
as unverified. The new voice index and provenance document close that gap. Human
voice replacement later uses the same IDs and text hashes, so it can replace one
clip without changing story or scene code.

## Asset Acquisition and Import

### Rule of acquisition

Use human-authored hero architecture and story props where the player examines
them. Use licensed or CC0 material/prop libraries for non-hero filling, then
normalize them into the same contract. Poly Haven is a useful source for PBR
materials, HDRIs, and occasional props because its assets are CC0 and usable
commercially; record the exact asset page and download hash, not merely
"Poly Haven". See its [licence](https://polyhaven.com/license).

Unity Asset Store purchases are allowed only after recording the exact licence
type, publisher, invoice/receipt location, version, and permitted team use.
Unity distinguishes Extension, Single Entity, and Multi-Entity asset licences;
do not assume an asset can be copied between contractors without checking the
[current licence guidance](https://support.unity.com/hc/en-us/articles/208601846-A-package-I-want-to-purchase-on-the-Asset-Store-says-Editor-Extension-one-license-per-seat-under-the-requirements-section-What-does-this-mean-).

Never use an asset downloaded from search results without a source URL and
licence record. Do not use AI-generated visual assets as final hero art unless
their provenance and commercial rights have been reviewed separately.

### Asset handling toolchain

Use a small, inspectable toolchain. Each tool has one job and its output is
committed or reproducible; do not hide asset decisions inside individual Unity
Inspector sessions.

| Tool | Use it for | Required project rule |
| --- | --- | --- |
| Blender 4.5 LTS Asset Browser | source house kits, prop collections, material lookup, previewing | use shared `Quarantine/Architecture`, `Quarantine/Props`, `Quarantine/Materials`, and `Quarantine/Reference` catalog paths; catalog ID is not the gameplay ID |
| Blender export preset | FBX/GLB handoff from the modeller | metres, Y-up, applied transforms, no scene lights/cameras, one documented preset per export type |
| `tools/unity/asset-intake.mjs` | register a vendor/CC0 download before import | writes source hash and licence record; refuses incomplete provenance |
| `tools/unity/audit-assets.mjs` | CI inventory, missing files, duplicate hashes, unbound inventory IDs | emits Markdown and JSON; fails release on unapproved/orphaned assets |
| Unity `AssetPostprocessor` | enforce import settings by folder and reject bad model roots | version the postprocessor; never rely on an artist remembering import toggles |
| Unity `QuarantineAssetBrowser` editor window | search registry, preview accepted prefab, place it by `assetId`, open provenance | uses registry data only; cannot create an unregistered asset |
| Unity `HouseBindingValidator` | compare markers, prefab bounds, colliders, routes, and focus IDs to source JSON | runs in CI and from an editor menu before accepting a room |
| Unity `CaptureRunner` | apply house fixture, then capture clean/final views | always writes fixture ID, state digest, and asset-index hash beside the PNG |
| Git + Git LFS | `.blend`, source FBX/GLB, EXR, large textures, approved audio | track the source plus Unity `.meta`; never version `Library/` |

Blender's Asset Browser is appropriate for the human modeler because it indexes
asset libraries, supports nested catalogs, tags, previews, and reuse of linked
or instanced collections. Keep its catalogs as authoring organization only;
runtime references still use stable IDs in the registry. See the
[Blender Asset Browser documentation](https://docs.blender.org/manual/en/4.3/files/asset_libraries/introduction.html).

Unity's built-in importer is sufficient if it is made deterministic.
`AssetPostprocessor` can set model, texture, material, and audio import settings
at import time, and its version must change when policy changes. Unity's model
importer supports unit and axis conversion; choose one policy, bake it at import
when necessary, and reject non-unit root scale instead of compensating with a
scene transform. See Unity's [AssetPostprocessor API](https://docs.unity3d.com/6000.0/ScriptReference/AssetPostprocessor.html)
and [model importer settings](https://docs.unity3d.com/6000.0/Manual/FBXImporter-Model.html).

#### Required editor utilities

Implement the following small tools before bulk prop import. They remove the
repetitive, error-prone work that otherwise falls on artists and small agents.

1. **Asset Intake Wizard**
   - Inputs: source URL, downloaded file/folder, licence, author/attribution,
     intended `assetId`, and target category.
   - Checks: licence is allow-listed, SHA-256 exists, source file is outside
     generated Unity content, and `assetId` is unused.
   - Output: vendor snapshot path, registry row, `.meta`/LFS reminder, and an
     empty prefab slot. It never downloads arbitrary URLs itself.
2. **Import Policy Postprocessor**
   - `Art/House/**`: disable cameras/lights, preserve named materials, enable
     read/write only when a tool requires it, and reject non-identity root scale.
   - `Art/Props/**`: disable animation unless explicitly declared; enforce
     correct normals/tangents and maximum texture size by category.
   - `Audio/Voice/**`: mono, streaming/compressed after the voice batch validator
     accepts the file; no implicit sample-rate conversion in the promotion step.
   - `Content/Imported/**`: reject manual edits by recreating assets from raw
     source on import.
3. **Asset Registry Window**
   - Filter by `assetId`, room, source licence, category, model status
     (`proxy`, `review`, `accepted`, `deprecated`), and missing prefab.
   - Show source thumbnail, prefab preview, dimensions, triangles/materials,
     texture memory estimate, and every inventory placement using the asset.
   - Buttons: open provenance, select prefab, run validation, generate a
     turntable, and place a temporary preview. No button may silently change
     the registry or a source model.
4. **Prefab Binding Tool**
   - Reads `inventory.json`, assigns a registry-approved prefab to each
     `assetId`, and creates/upgrades only generated placement children.
   - Preserves authored room-local position/rotation/scale, records source
     bounds versus prefab bounds, and refuses a replacement that blocks a
     required route.
   - Separates `visual prefab`, `simple collider proxy`, and `Interactable`
     binding so a changed art prefab cannot erase gameplay.
5. **House Handoff Validator**
   - Reads `house.json`, inventories required room/portal/window/anchor names
     from the model prefab, and reports missing, duplicate, rotated, or
     off-layout transforms in metres.
   - Draws room boxes, portal apertures, route capsules, and focus rays in the
     Scene view. It also produces a simple CSV a modeler can use without
     opening code.
6. **Asset Audit and Report**
   - Checks every registry asset has source, licence, hash, status, prefab
     binding, and no unexpected material duplication.
   - Checks every `inventory.json` asset has exactly one accepted prefab or a
     consciously retained proxy; checks every prefab has a matching registry row.
   - Produces a sorted report grouped by room and by missing dependency, with
     triangle/material/texture totals. Treat it as a review aid, not an
     arbitrary polycount gate.

Use labels such as `quarantine`, `room-living-room`, `architecture`, `story`,
`proxy`, and `accepted` for project searches. `AssetDatabase.FindAssets` can
query labels, names, and types within a scoped folder, which is enough to power
the registry validator without adding a marketplace asset. See
[AssetDatabase.FindAssets](https://docs.unity3d.com/ScriptReference/AssetDatabase.FindAssets.html).

Set Unity's version-control mode to visible meta files and commit every asset
with its `.meta`; otherwise GUID references will break across machines. Unity
documents visible meta files as the setup for external version control, and the
`Library` directory remains an ignored local cache. See Unity's
[version-control guidance](https://docs.unity3d.com/6000.0/Manual/Versioncontrolintegration.html).

### Asset record

Every imported model, texture, HDRI, SFX, and font gets a committed record in
`assets/house/asset-registry.json` (or an equivalent Unity raw content file):

```json
{
  "id": "prop-kitchen-kettle",
  "sourceUrl": "<approved source URL>",
  "sourceFile": "vendor/kettle-v2.fbx",
  "license": "CC0-1.0",
  "author": "Required when licence requires it",
  "downloadedAt": "2026-08-13",
  "sha256": "...",
  "unityPrefab": "Assets/_Quarantine/Art/Props/Kettle.prefab",
  "notes": "scaled, pivot normalized, texture channels repacked"
}
```

The registry checks that each `inventory.json` `assetId` resolves to an
accepted prefab or a deliberately marked proxy. It must reject an unknown
licence or an orphaned prefab in a release build.

### Normalization checklist

For every acquired asset:

1. Keep original download unchanged under a vendor/source folder outside the
   Unity-imported final-art location.
2. Confirm licence and write the asset record before it enters a scene.
3. Normalize units to metres, rotation to Y-up, scale to 1, and pivot to the
   inventory declaration (`floor-center`, `wall-back`, etc.).
4. Export or configure the Unity importer deterministically; commit the import
   preset when it cannot be represented by source settings.
5. Create `LOD0` and only add lower LODs when profiler data warrants them.
6. Assign one material family with packed PBR maps and sensible texture sizes.
7. Make a prefab with visual mesh, optional simple collider, and no story
   behaviour. Story behaviour belongs on the imported placement object.
8. Compare bounds against the existing inventory bounds and rerun route tests.

Acquisition order is deliberately practical:

1. Human house shell, doors, windows, stair, exterior envelope.
2. Story/interaction props: desk, journal, front door, hall clock, ration book,
   bathroom mirror, fireplace/mantles, radio.
3. Large room silhouettes from `inventory.json`.
4. Repeated domestic props, textiles, and exterior context.
5. Material replacements and controlled weathering.

Do not fill rooms with random downloads before routes, sight lines, and focal
story objects are fixed.

## Testing and Parity

### Tests to create first

Use NUnit EditMode tests for pure domain/content and PlayMode tests for scene
behaviour. Unity's Test Framework supports both modes; keep scene-dependent
tests out of the pure domain assembly. See Unity's
[EditMode/PlayMode guidance](https://docs.unity3d.com/Packages/com.unity.test-framework@2.0/manual/edit-mode-vs-play-mode-tests.html).

Port the intent of the current tests, not all 220 file names mechanically:

| Test group | Minimum assertions |
| --- | --- |
| Content validation | all JSON parses; stable IDs unique; references resolve; 21 days and required records exist |
| Narrative audit | exactly one canonical corpus; every day has a dramatic job; choice effects/callbacks/residues resolve; no stale prototype fact enters runtime |
| Day loop | time never crosses day without sleep; resources reset correctly; ration eligibility correct |
| Journal | vocabulary rejection, correction, lock, drift, insertion/deletion, deterministic seeds |
| Narrative | reactions mutate only their declared flags; variants select deterministically; endings select correctly |
| Save | round trip exactness, malformed-save recovery, schema migration, player position safety |
| Layout | eight rooms/nine portals, 2.25 scale applied once, all inventory/soundscape IDs resolve |
| Movement | 0.3 m controller completes ground, upper, cellar, and front-threshold routes both directions |
| Interaction | each required target can be focused and dispatches the expected typed command |
| Audio | portal transmission becomes more muffled from open to closed to locked; all cue keys load |
| Voice | voice-lock hash equals story-lock hash; every clip text/hash/key resolves; no stale or orphaned clip reaches a player build |
| Asset registry | every inventory item is accepted or an explicit proxy; provenance/prefab/bounds/routes all validate |
| Presentation | fixed fixture applies the recorded time/weather/door/shutter/mantle state and renders a nonblank capture |

### Fixtures and visual review

Import `assets/house/verification/routes.json`, scenario JSON, and
`captures.json` directly. Build an editor-only `FixtureRunner` that can:

1. start a new deterministic session using fixture seed/day/hour;
2. set player room/position, portals, shutters, mantles, and weather;
3. apply the specified camera transform/FOV;
4. run route and target assertions;
5. capture the requested 960x540 PNG plus metadata and domain digest.

Do not compare an early Unity capture byte-for-byte with WebGL output. First
use it as a human-approved composition baseline. Once the Unity presentation is
stable, approve Unity goldens and set per-capture image-difference tolerances.

Every visual change must preserve a clean-light and final-light screenshot for
each affected fixture. The existing capture set has clean/final pairs; retain
that distinction so post effects cannot hide geometry errors.

## Delivery Sequence

Work in small, independently buildable vertical slices. Each phase ends in a
playable or testable state.

### Phase 0: Scaffold

- Create the Unity project, lock Unity 6.3 LTS patch version, add URP/Input/Test
  Framework, set up asmdefs and code style.
- Add `sync-content.mjs`, raw content folders, `content-index.json`, and a menu
  item to import/validate content.
- Enable visible meta files, configure Git LFS, add the asset registry schema,
  and create an empty `Asset Intake Wizard`.
- Create `Bootstrap` scene with a logging `GameBootstrap` only.

Exit: a clean clone can sync content, open Unity, compile all assemblies, and
run an empty Bootstrap scene without missing-reference errors.

### Phase 1: Rules before scene

- Port `GameTime`, `DayLoop`, `DifficultyState`, journal, narrative state, and
  save records into `Quarantine.Domain`.
- Import compiled story/house JSON into strongly typed definitions.
- Port the highest-value existing behavioural tests into EditMode NUnit tests.
- Audit all Dart narrative helpers against `text/` and mark each one
  `adopt`, `migrate`, or `retire` in `docs/story/content-source-audit.md`.

Exit: domain tests pass with no Unity scene loaded; same seed and command
sequence produces the same digest every run.

### Phase 2: Greybox playable loop

- Generate a greybox house from `HouseLayout`, including room volumes, portals,
  collision, doors, windows, markers, and required focus targets.
- Add first-person input, CharacterController, focus raycast, HUD prompt,
  pause gate, and one action of each type: door, mantle, inspect, journal.
- Implement fixture route/target tests.

Exit: player can complete every required route, inspect journal desk/ration
book, open/close doors, save/restore safely, and cannot walk through a closed
door.

### Phase 3: Text-only narrative and UI

- Add journal composition/correction/lock, broadcast display, visitor dialogue,
  reactions, sleep, records, endings, settings, and captions.
- Wire every visible action through typed domain commands and events.
- Add the full 21-day test fixture sweep.
- Replace the hard-coded aftermath path with corpus-driven `@residue` data and
  validate every residue focus target against the greybox.
- Use only text, SFX, and room tone. No new TTS, no imported legacy VO in the
  player build, and no dialogue design dependent on exact recording duration.

Exit: a full deterministic 21-day playthrough reaches all endings and every
authored text record can be presented and captioned with voice disabled.

### Phase 4: Narrative revision and story lock

- Complete `STORY_BIBLE.md`, the 21-day beat matrix, character/claim ledgers,
  and choice-payoff matrix.
- Apply approved prose revisions in `text/`, regenerate compiled text, and run
  `narrative-audit` until it has zero errors.
- Complete the cold, continuity, and restraint text-only reads. Record only
  material editorial decisions, not informal impressions.
- Generate and commit `story-lock.json`.

Exit: one agreed playable corpus exists; the Player is not confused with Mrs
Ayling; every choice has declared consequences; all endings remain deliberately
unresolved; and the voice production gate can verify the lock.

### Phase 5: Human house and asset integration

- Import the human house using the modelling contract; replace greybox visuals
  only, keeping collision/markers separate.
- Bind inventory placements to accepted prop prefabs and bind sound emitters.
- Build the Asset Intake, Registry, Prefab Binding, Handoff Validator, and
  audit report before bulk prop dressing.
- Run every route, target, and fixed camera fixture after each room import.

Exit: all eight rooms and exterior cells render with no scale/axis drift, and
the player still passes the greybox route suite.

### Phase 6: Sound without voice

- Sync current SFX, music, and IR; build mixer groups, spatial emitters, portal
  attenuation, broadcast source position, subtitles, and caption timing
  fallbacks.
- Run closed-door, room transition, mute, mono, and dynamic-range tests.

Exit: the complete game is playable and understandable with no voice clips;
audio settings and closed-door muffling work.

### Phase 7: Text-to-speech production

- Verify the story lock and cast/provenance gate, then render an audition batch
  for representative broadcast, door, letterbox, wall, and direct channels.
- Approve voice direction and transmission treatment without changing locked
  story text. Render the full staged batch only after that approval.
- Run text/performance/treatment/accessibility/technical QA, promote the batch,
  and verify every indexed clip against its text hash.

Exit: `voice-lock.json` matches the exact story lock, all scheduled voice is
available or explicitly caption-only, and disabling voice leaves every scene
fully playable.

### Phase 8: Presentation and performance

- Establish clean lighting, then final lighting/post processing, then optional
  pixel presentation/rupture effects.
- Profile target PC hardware; configure Low/Medium/High only from measurements.
- Approve Unity visual goldens and add build smoke tests.

Exit: all capture fixtures complete, baseline frame time is within the chosen
budget, no audio or rendering effect prevents gameplay, and a release build
passes a clean-machine smoke test.

## Implementation Handoff Cookbook

This section is the execution order for a coding agent working from a clean
branch. It converts the architecture above into small, reviewable changes. An
agent must complete a row, run its stated checks, and leave the project
compiling before starting the next row. Do not merge several rows as one opaque
"Unity setup" change.

### Initial file map

Create only these files for the first vertical slice. Add a file when a real
responsibility appears; do not create empty manager classes to predict future
features.

```text
unity/Assets/_Quarantine/Scripts/
├── Domain/
│   ├── GameRules.cs
│   ├── GameSession.cs
│   ├── GameState.cs
│   ├── GameCommand.cs
│   ├── GameEvent.cs
│   ├── Time/GameTime.cs
│   ├── Journal/JournalState.cs
│   └── Narrative/NarrativeState.cs
├── Content/
│   ├── StoryCatalog.cs
│   ├── HouseLayout.cs
│   ├── ContentValidator.cs
│   └── ImportedContentLoader.cs
├── Runtime/
│   ├── Bootstrap/GameBootstrap.cs
│   ├── Bootstrap/DomainEventRouter.cs
│   ├── Save/SaveCoordinator.cs
│   ├── House/PortalController.cs
│   ├── House/RoomVolume.cs
│   ├── Player/PlayerInteractor.cs
│   └── Audio/AudioCuePlayer.cs
├── Presentation/
│   ├── Hud/HudPresenter.cs
│   ├── Dialogue/DialoguePresenter.cs
│   └── Journal/JournalPresenter.cs
├── Editor/
│   ├── ImportContentMenu.cs
│   ├── HouseBindingValidator.cs
│   └── AssetIntakeWindow.cs
└── Tests/
    ├── EditMode/
    └── PlayMode/
```

`GameCommand` and `GameEvent` are typed records/classes, not strings and not
UnityEvents. A `PortalChanged` event contains its `PortalId` and new domain
state; a `ReactionChosen` event contains its reaction key, option ID, and
declared effects. Unity components use those types only at the runtime boundary.

### First ten changes

| Change | Add or modify | Acceptance check before the next change |
| --- | --- | --- |
| 1. Project lock | `ProjectVersion.txt`, `manifest.json`, asmdefs, `.gitignore`, LFS rules | Unity opens with no package resolution drift and visible `.meta` files are enabled |
| 2. Raw sync | `tools/unity/sync-content.mjs`, raw folders, content index schema | running it twice produces identical hashes and touches only generated content |
| 3. Schema validation | raw JSON readers and `ContentValidator` | malformed ID, duplicate ID, missing portal, and missing focus each produce an actionable error |
| 4. Pure clock | `GameRules`, `GameTime`, `DayLoop`, EditMode tests | the ported day/ration tests pass without loading any Unity scene |
| 5. Journal core | journal state, commands/events, EditMode tests | correction, lock, drift, and save round-trip work from a deterministic seed |
| 6. Bootstrap shell | `Bootstrap.unity`, `GameBootstrap`, `SaveCoordinator` | a new session is created, advanced one frame, saved, restored, and logged without `House.unity` |
| 7. Greybox house | imported layout, `House.unity`, room/portal/route components | all source route fixtures pass using a 0.3 m CharacterController |
| 8. Interaction seam | player interactor, one door, one inspect target, HUD prompt | click/keyboard input produces one typed command and visual state changes only after its domain event |
| 9. Text path | story importer, dialogue/journal presenters, caption timing fallback | a broadcast, visitor, reaction, sleep, and journal record complete with voice disabled |
| 10. Fixture gate | `FixtureRunner`, PlayMode tests, capture metadata | a fixed scenario can load, apply state, reach its target, and write a digest-backed capture |

The first eight changes establish the porting seam. After that, adding an
additional visitor, room prop, audio cue, or visual mesh should be a data or
presenter extension, not an architectural rewrite.

### Exact bootstrap order

`Bootstrap.unity` stays loaded for the lifetime of a run. `House.unity` is
loaded additively only after content and the domain session are valid. The
following order is intentional:

1. `GameBootstrap.Awake` loads only generated `StoryCatalog`, `HouseLayout`,
   rules, and the content index. It calls `ContentValidator` before creating a
   player or loading the house.
2. `GameBootstrap` asks `SaveCoordinator` for a validated snapshot. On missing
   or invalid save it creates a new `GameSession` from the selected seed. It
   never deserializes directly into `MonoBehaviour` fields.
3. It creates the pure `GameSession`, subscribes `DomainEventRouter`, and
   loads `House.unity` additively.
4. After the house scene signals ready, `HouseBindingValidator` verifies room,
   portal, focus, and emitter IDs. In development builds it fails closed and
   shows a concise diagnostics panel; it must never silently substitute an
   arbitrary scene object.
5. The player is spawned from the restored safe position or the source spawn
   marker. Then input, HUD, audio, and presentation presenters are enabled.
6. Each frame, the bootstrap passes elapsed time to `GameSession.Advance`,
   dispatches resulting events in order, and renders an immutable snapshot.
   If a modal panel is open, the input layer suppresses movement commands but
   time behaviour follows the existing pause rule, not UI visibility.
7. After an accepted state-changing command, `SaveCoordinator` writes the next
   snapshot. Presentation failures such as a missing clip must not prevent the
   save or mutate domain state.

On return to main menu, remove listeners, flush a completed save, unload the
house scene, and destroy presentation objects. Keep no static mutable session,
catalogue, or `DontDestroyOnLoad` singleton except the one bootstrap object.
This makes fixture runs and fresh-start tests reliable.

### Graphics profile transaction rule

Keep profile-to-allocation mapping in one renderer adapter, not in individual
house, lighting, or UI components. The adapter must turn the requested profile
and current drawable size into one effective internal extent, shadow budget,
light capacity, material capacity, texture residency budget, and diagnostic
record. A resize or settings change performs `prepare -> warm -> swap ->
dispose`, and retains the last valid graph if preparation fails. Window resize
events are coalesced while a transaction is in flight; scene code must never
start overlapping GPU reconfigures or update its own copy of the effective
resolution. This keeps Unity's requested/effective settings honest and makes
the same transition sequence reproducible in fixtures.

### Command and event boundary

Use this mapping for the first implementation. New actions must add a row here,
a domain test, and a fixture only when they have a spatial consequence.

| Player/system source | Typed domain command | Domain event(s) | Runtime/presentation listener | Persistence |
| --- | --- | --- | --- | --- |
| front/interior door | `SetPortalState(portalId, requestedState)` | `PortalStateChanged` | `PortalController` changes animation and collider | accepted portal state |
| inspect focus | `InspectFocus(focusId)` | `FocusInspected`, optional `RecordUnlocked` | `DialoguePresenter`, `JournalPresenter` | inspected records/focus state |
| journal edit | `WriteJournal`, `CorrectJournal`, `LockJournal` | `JournalChanged`, `JournalLocked` | `JournalPresenter`, HUD summary | full journal state |
| visitor option | `ChooseReaction(reactionKey, optionId)` | `ReactionChosen`, `NarrativeFlagsChanged`, optional `ResidueScheduled` | dialogue closeout, later `ResidueResolver` | choices and flags |
| sleep | `Sleep(quality, location)` | time/day/journal/narrative events in declared order | fade, night text, next-day setup | complete session snapshot |
| scheduled broadcast | `Advance(elapsed)` | `BroadcastStarted`, `BroadcastChunk`, `BroadcastEnded` | captions and `AudioCuePlayer` | current narrative progress |
| scheduled visitor | `Advance(elapsed)` | arrival/dialogue events | door/letterbox/wall presenter plus captions | current narrative progress |
| settings change | no `GameSession` command unless it affects rules | `SettingsChanged` in meta layer | mixer, captions, input, display | `SaveSnapshot.meta.settings` |

No listener may call a different command while handling an event. For example,
the door animation completion must not emit a second "door opened" command;
the already accepted event is authoritative. A deferred visual effect may listen
to events, but must be cancel-safe when a fixture reloads or a scene unloads.

### Data import transaction

Treat each sync as a transaction rather than a collection of copies:

1. Compile `text/` and verify the generated text files are current.
2. Read all authoritative JSON into plain validation DTOs; do not write Unity
   assets yet.
3. Validate global IDs, references, parser records, house scale, inventory
   bounds, sound cue keys, and approved voice index if it exists.
4. Compute the new `content-index.json` and compare it to the prior index.
   Report additions, removals, changed hashes, and any requested manual review.
5. Write raw files and generated ScriptableObjects to a temporary generated
   location, then replace only the importer-owned destination after all writes
   succeed.
6. Delete stale generated assets only when their source key disappeared from
   the index. Never delete a hand-authored prefab, art source, capture, or
   registry record.
7. Re-run the Unity-side validator after import and emit one report that links
   source IDs to imported asset GUIDs.

Generated ScriptableObjects store stable IDs and source hashes, not asset paths
as their primary identity. A source-path move with unchanged content must not
break saves or a scene binding. A source content change does require a new hash
and the relevant verification sweep.

### Asset intake lane

Use one short lifecycle for every downloaded or human-delivered art asset:

```text
candidate -> provenance record -> source snapshot -> normalized export
          -> deterministic import -> accepted prefab -> registry binding
          -> route/capture verification -> release approval
```

An asset stops at the first failed step. In particular, an attractive model
without a licence record is not a temporary scene prop, and a registered model
without correct scale/pivot is not eligible for inventory placement. The Asset
Intake Wizard should show these statuses explicitly: `candidate`, `blocked`,
`normalizing`, `validated`, `accepted`, and `deprecated`.

For the human house, use a separate `house-handoff.json` containing export
version, FBX hash, Blender source hash, unit/axis preset version, all expected
visual anchors, and the date the route/capture validation passed. A new house
export cannot replace the previous one until this file is regenerated and the
fixture suite is green.

### Post-lock text-to-speech mini-runbook

TTS work has exactly two outcomes: an approved, hash-matched voice batch or no
new voice files. It must never leave partially approved clips in the player
build.

1. Confirm `story-lock.json`, `narrative-report.md`, `voice-cast.yaml`, and
   voice provenance are reviewed at the same commit. Record the commit SHA in
   the staged batch manifest.
2. Render an audition set that includes a Board broadcast, a quiet door line,
   a letterbox line, a wall/transmission line, and a recurring visitor. Review
   pronunciation, dynamics, and caption readability before generating the full
   corpus.
3. Render to a fresh staging directory. The validator must reject unindexed
   files, duplicate runtime IDs, clipped audio, mismatched text hashes, and
   unavailable scheduled clips without a caption-only declaration.
4. Promote atomically: write the immutable voice index and lock first, then
   import the accepted files. If promotion fails, leave the prior approved
   batch untouched and keep captions active.
5. Run one voice-on and one voice-off 21-day fixture sweep. Voice-on checks
   routing and timing; voice-off proves the game still communicates every
   required action and consequence.
6. Any prose revision returns the affected material to Step 1. Do not patch a
   waveform, filename, or subtitle independently to avoid a story-lock review.

### Pull-request handoff format

Every implementation change supplies this short completion record in its PR or
agent handoff. It keeps review factual and makes the next small agent safe to
continue from the branch:

```text
Scope: [one owned responsibility]
Source inputs: [IDs/files read]
Files changed: [paths]
New or changed IDs/schema: [none, or exact list]
Behaviour: [what command/event/data path now works]
Verification: [commands and result]
Known limits: [explicitly deferred work]
```

Do not state "ported" without naming the source rule and acceptance check.
If a source rule is ambiguous or conflicts with the canonical corpus, stop at
the data boundary, record it in `docs/story/content-source-audit.md`, and let
the editorial decision decide it. Small agents must not resolve canon by
inventing a branch of story logic.

## Small-Agent Work Rules

Give each coding agent one owned directory, one test target, and one explicit
definition of done. Do not ask an agent to "port the game."

| Task | Owns | Inputs | Done when |
| --- | --- | --- | --- |
| `domain-time` | `Scripts/Domain/Time` | `lib/sim/time.dart`, `day.dart` | NUnit tests prove day boundary and resource reset |
| `domain-journal` | `Scripts/Domain/Journal` | `lib/journal/`, vocabulary JSON | drift/lock/correction tests pass |
| `content-import` | `Scripts/Content`, `Scripts/Editor` | compiled JSON and schemas | import is idempotent and all references validate |
| `house-greybox` | `Scripts/Runtime/House` | house/routes JSON | all routes/targets pass in PlayMode |
| `first-person` | `Scripts/Runtime/Player` | config constants | move/look/interact works with mouse and gamepad |
| `dialogue-ui` | `Scripts/Presentation/Dialogue` | story catalogue | text/reaction/caption flow handles no-audio fallback |
| `audio-graph` | `Scripts/Runtime/Audio` | soundscape, manifest | cue lookup and portal attenuation tests pass |
| `voice-sync` | `tools/unity`, `scripts/tts.py` | VO files/source text | voice index hashes all clips and no runtime synthesis exists |
| `house-art-bind` | `Art/House`, `Prefabs` | modeller handoff, inventory | replacement passes route/capture validation |
| `fixtures` | `Scripts/Editor`, tests | verification JSON | fixtures set state/camera and write capture metadata |

Every agent must:

1. Read this plan plus the referenced current source before changing code.
2. Avoid edits outside its owned area except for a narrowly necessary interface.
3. Add or update tests in the same change.
4. Use content IDs, never scene-name inference.
5. Leave the Unity project compiling even if its feature is incomplete.
6. Report changed files, test command/result, content assumptions, and any
   newly introduced ID or schema.

## Risks to Manage Explicitly

- **Double scaling:** the existing layout importer and human model can each
  apply 2.25. Keep the house root identity and assert marker coordinates.
- **Procedural/current visual mismatch:** human art will replace only visuals;
  collision and state remain data-driven until validation passes.
- **Voice drift:** files may exist without matching manifest/provenance. Generate
  a stable `voice-index.json` and validate hashes before relying on them.
- **UI logic leak:** panels must dispatch commands; they must not mutate session
  state directly.
- **Early rendering work:** achieving a stylized post effect before routes,
  story, and save work will hide regressions and waste time.
- **Asset licensing:** any download without a committed provenance record is a
  blocked asset, not a temporary shortcut.
- **Content fork:** never edit Unity-generated story/house assets by hand;
  update source JSON/text and regenerate.

## First Milestone Definition

The first milestone is not a beautiful house. It is a deterministic vertical
slice: greybox hall/living room, first-person movement, front door and one
interior door, journal desk, one broadcast/visitor dialogue, captions, save/load,
and a fixture test that proves it. Keep voice disabled in this milestone; the
text path must be complete before any TTS batch is generated. Once that works,
every later task is a bounded replacement or extension rather than a second
game.

## Renderer Epiphanies (2026-08)

These discoveries are binding for the Unity implementation:

1. **GUI meaning and GUI rendering stay separate.** Gameplay publishes a plain
   `GuiFrame`; a renderer-owned surface owns composition, clipping, scaling,
   draw order, hit regions, and resize behavior.
2. **The renderer resolves geometry before gameplay applies meaning.** Return a
   single semantic `GuiHit` from the UI surface. Story/session code decides what
   that hit does, so layout changes never leak into narrative logic.
3. **Every bounded surface needs overflow policy.** Dialogue choices and Shader
   Lab settings use clipped viewports, wheel/drag scroll, keyboard/controller
   auto-scroll, and explicit overflow cues. Labels are measured before panel
   width is chosen and width is clamped to safe-area margins.
4. **Pixeldart is the sole canonical runtime renderer.** Do not create or
   maintain a second visual implementation. The current web legacy adapter has
   been removed from startup; Unity should have one render-feature stack and
   diagnostic profiles, with initialization failures visible rather than hidden
   behind fallback rendering.
5. **Debug controls map to real renderer state.** Stable IDs, ranges, defaults,
   reset behavior, and serialized override snapshots are required. Useful
   controls include fog, exposure, bloom threshold, dither, contact light,
   TAA/SSR/shadows, and time/rain locks; unknown controls must fail visibly.
6. **Minute precision belongs at the presentation boundary.** Keep fractional
   simulation hours authoritative for saves, schedules, and lighting. Format
   `HH:MM` (or optional 12-hour time) only in the renderer/UI layer.
7. **Quality changes are renderer transactions.** A graphics setting request
   must negotiate against capabilities, allocate the new profile, warm its
   graph, swap it atomically, and publish the effective internal extent,
   shadow-map budget, light capacity, and downgrade reason. If allocation fails,
   retain the last valid graph and return the settings UI to the last effective
   profile; never leave simulation state coupled to a partially configured
   renderer.
8. **GUI uses one logical viewport.** Layout, clipping, animation, diagnostics,
   and pointer hit testing all use CSS/logical pixels; the renderer alone maps
   that viewport to the device-pixel backing store. Never mix canvas backing
   dimensions into hit testing. Keep a 4% safe-area margin, clamp panels to the
   viewport, and preserve minimum touch targets even when the visual treatment
   is compact.
9. **Scrolling changes placement, not only visibility.** A clipped list must
   position each visible row from `visibleIndex = absoluteIndex - scrollOffset`,
   keep keyboard focus in view, and expose an explicit overflow cue. Measure
   labels before allocating control columns; ellipsize or wrap text rather than
   letting it collide with sliders, badges, or neighboring panels.
10. **Persona energy must not reduce comprehension.** Use skew, crimson/amber
    focus states, staggered motion, and asymmetric badges only around a stable
    information hierarchy: speaker/source first, content second, action third.
    Keep choice hit regions at least 40 px high, retain visible keyboard order,
    and ensure selected/hovered states remain distinct in reduced-motion and
    high-contrast modes.
