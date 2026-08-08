# THE QUARANTINE — MASTERPLAN

> [!IMPORTANT]
> **This is the single source of truth for current scope, priority, status,
> dependencies, blockers, acceptance, and the ship decision.** Its canonical home
> is this docs checkout as `MASTERPLAN.md` (normally
> `<game-root>/tmp/MASTERPLAN.md`). The root-level file is only a locator after
> cutover. It was reconciled against the three live repositories on **2026-08-01**.

The project is **THE QUARANTINE**, a pure-Dart/WebGL2 21-day chamber game. The
repository name `3D-Infinity` and the `MANYFOLD-*` documents are historical.
MANYFOLD is closed and is not part of this plan.

---

## 1. How to use this file

This file answers five questions: what must ship, what is true now, what happens
next, what blocks it, and what evidence is required to call it done.

| Question | Authority |
| --- | --- |
| Current status, order, blockers, scope, product requirements, and ship gates | **This file** (`MASTERPLAN.md` in the docs checkout) |
| Repository behavior, Git, comments, and durable-memory rules | `GROUND_RULES.md` beside this file (operational rules; not a second plan) |
| `PLAN.md`, `TODO.md`, renderer boards, prior cue/design notes, `MANYFOLD-*` | Frozen archives/provenance only; never dispatch or read them as machine truth |

Supporting documents remain durable memory. Their old status tables, checkboxes,
“next” lists, line-budget blockers, and critical paths are snapshots; they never
override this file. The current master absorbs every still-normative requirement
needed for implementation. The docs checkout is never deleted or treated as scratch.
Unless a path says otherwise, code/data paths are relative to the game root; docs
filenames are relative to this checkout.

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

`tools/plan.dart snapshot --json` is the only dispatch snapshot. It is generated from
the validated register, decisions, frozen worksets, leases and evidence; no copied
state table belongs here. Until AUT-01 lands, an orchestrator reads the register and
lease table directly. Unknown ownership, dirty-path overlap, stale base SHA, an
unaccepted hard dependency, or a red deterministic gate means stop before writing.

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
  licensed model through the real asset path first, then the curated 240–300-model
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

- Inspect at least **580 credible 3D source members** plus **80 open painting/print/
  map/paper images** and **100 open surface materials**; hard-screen at least 406,
  56 and 70 respectively. Approve **240–300 reusable 3D models**, **40–56 art
  images**, and **48–72 materials**. The shipped 3D set should contain 50–65
  interior-architecture, 50–65 furniture/fixture, 60–75 decor/tool/textile/movable,
  40–50 exterior-envelope, and 40–45 garden/street/context definitions. Image records and
  reusable frame models are separate; art textures never inflate the 3D count.
- Author **604–922 active interior furnishing/decor/frame placements**, **260–410
  active architectural-kit instances**, and **455–720 active exterior/context
  placements**. The resulting approximately **1,300–2,050 active authored placements** are a
  composition target, not permission to render everything at once: room/portal
  visibility, exterior cells, LOD/importance and measured budgets remain mandatory.
- Build a modular late-Victorian architectural kit: skirting, dado/picture rails,
  cornices, ceiling roses, architraves, thresholds, window reveals/sills, fireplace
  and chimney-breast pieces, alcoves, stair strings, newels, balusters, handrails,
  panelling, and deliberate wall/floor transitions.
- Remodel the whole visible envelope: all house elevations, roof/chimneys, gutters/
  downpipes, foundations, front steps/porch, cellar light wells, back/service yard,
  coal access, drains, railings/gates, boundary walls, paths, planting, street
  furniture, neighboring roof/facade silhouettes, and the deliberately visible
  opposite-house window/interior vignette. Interior thresholds, reveals, cupboard/
  drawer insides, wall thickness, ceiling transitions and service details receive
  the same care as room-centre furniture.
- Give each major room one focal composition, 5–12 furniture-scale pieces, and
  15–35 small dressing placements. Reuse is expected; obvious repetition and
  evenly sprayed clutter are not.
- Preserve clear routes and meaningful negative space. Density may not block a
  portal, obscure a required story object, change a corroborating measurement, or
  make the swept player capsule unable to reach an interaction.
- Judge the clean daylight image at 384×216. Silhouette, layering, spacing,
  material contrast, wear, and light response matter more than texture resolution.

The room/exterior BOM below is canonical; no archived planning document is required
to interpret it.

The exterior is richly modeled but **view-only** through windows, door/cellar
thresholds, fixed ration-run presentation and approval cameras. This does not add a
walkable street, garden, porch, new room or outbuilding. Canonical aperture truth is
immutable: the house has 11 exterior windows, 9 observable from inside; the opposite
house has 10 until the Day-20 Q24 variant visibly makes 11.

| Source group | Inspected | Hard-screen pass | Shipped logical 3D |
| --- | ---: | ---: | ---: |
| Interior architecture/openings/services | 120 | 84 | 50–65 |
| Furniture and large fixtures | 120 | 84 | 50–65 |
| Interior decor/tools/textiles/movable props | 140 | 98 | 60–75 |
| Exterior envelope/roof/threshold/hardscape | 100 | 70 | 40–50 |
| Garden/street/vegetation/neighbor context | 100 | 70 | 40–45 |
| **Typed 3D total** | **580** | **406** | **240–300** |

Every asset and placement records two period axes: `construction` is British late
Victorian (normally 1880–1900 fabric), while `occupancy` is inherited Victorian/
Edwardian furnishing mixed with the setting-period wireless, ration goods, repairs
and Board paperwork. Catalogue/BOM records require `eraRole`, `dateMin`, `dateMax`,
region, period-evidence URL/note and anachronism disposition so “Victorian” cannot
collapse into a pristine museum set.

| Zone | Required identity and high-detail anchors |
| --- | --- |
| Hall | Fanlight/front-door surround, cornice/dado/skirting, runner, umbrella stand, hall table, mirror, clock, coat hooks, threshold wear and Board papers. |
| Living | Chimney breast, mantle/grate/hearth, reveals, sofa, mismatched chairs, tables, wireless cabinet, bookcase, rug/curtains/screens, books, photographs and clustered art. |
| Kitchen | Range/flue, sink, worktable/stools, dresser/cupboards/pantry, pans, kettle, crockery, jars, baskets, ration tins, cloths, cleaning tools and used storage interiors. |
| Cellar | Rough masonry, beams/pipes, coal bin, shelves, crates/bottles, hand tools, damp staining, drain, service apertures and debris. |
| Bedroom | Brass/iron bed, desk/chair, wardrobe, washstand, trunk, bedside table, layered textiles, photographs and unfinished personal objects. |
| Landing | Stair strings/newels/balusters/handrail, runner, narrow table, picture group and displaced domestic objects while preserving both stair directions. |
| Bathroom | Roll-top bath, basin, high cistern, cabinet, mirror, visible plumbing, tile transitions, towels, bottles and credible service access. |
| Spare room | Sheet-covered furniture, trunks/boxes, unused frames, wardrobe, repair items and prior-tenant residue with purposeful negative space. |
| Front envelope | Brick/stone courses, bay/sash/lintel/sill/corbel modules, porch/steps/fanlight, boot scraper, cellar grilles and causal rain/soot wear. |
| Roof/drainage | Slate/ridge/flashing modules, chimneys/pots, gutters/downpipes, moss/soot variation and correct connection to ground drainage. |
| Grounds/service | Gate/fence/wall/path/hedge/tree/shrubs/ivy plus coal hatch, water butt, crates, wheelbarrow, tools, kitchen steps, clothes line, yard drain and outbuilding silhouette only. |
| Street/context | Curb/paving/drains, period-compatible lamp/sign/bollard, sparse vehicle silhouettes, opposite facade/windows/curtains/interior vignette and layered neighboring roofs/chimneys. |

Do not add a conservatory, traversable porch/garden/street, new door/window/room, or
usable outbuilding without a canonical-geometry decision. Exterior layers are
`envelope`, `roofDrainage`, `hardscape`, `planting`, `serviceClutter`, `street` and
`context`; interior layers are `architecture`, `furniture`, `surface`, `floor`,
`wall`, `micro` and `story`.

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
assets/catalog/candidates/<category>/<batch-id>.json
assets/catalog/inspections/<category>/<batch-id>.json
assets/catalog/amendments/<candidate-id>/<nn>.json
assets/catalog/evidence/<candidate-id>/source.json
assets/catalog/room_bom/<room-id>.json
assets/catalog/selection/proposals/<batch-id>.json
assets/catalog/accepted.json
assets/runtime-manifest.d/<domain>.json
assets/house/schema.json
assets/house/kits/<family-id>.json
assets/house/rooms/<room-id>/base.json
assets/house/rooms/<room-id>/dress/<layer-id>.json
assets/house/exterior/<cell-id>/<layer-id>.json
assets/house/verification/routes.json
assets/house/verification/targets.json
assets/house/verification/cameras/<room-or-exterior-cell>.json
assets-src/models/<stable-id>/...
assets-src/art/<stable-id>/...
web/res/models/<stable-id>/*.qmsh
web/res/models/<stable-id>/model.json
web/res/models/<stable-id>/textures/<content-hash>.*
web/res/textures/art/<stable-id>.*
```

Candidate discovery, inspection overlay, BOM, selection-proposal, kit-family, and
room-placement fragments are deliberately disjoint write leases. A scout owns one
immutable discovery batch and never opens a shared category file; a later inspector
owns the matching immutable overlay, not the discovery bytes. Validators fold base
records, overlays, and explicit amendments in normalized-path/event order and emit
merged views only under ignored `build/catalog/`; generated merges are never hand-
edited or used as status. The asset lead alone promotes entries into `accepted.json`
in one serial integration leaf.

Every candidate record carries at least:

```text
id, category, roomTags, exteriorTags, periodTags, eraRole, dateMin, dateMax,
region, periodEvidence, sourceUrl, downloadUrl, creator,
licenseId, licenseUrl, attribution, retrievedAt, sourceSha256,
archiveMember, sourceFormat, units, upAxis, triangleCount, materialCount,
textureFiles/resolutions, previewUrl, proposedUse, status, rejectionReason
```

Candidate state is progressive and machine-checked across immutable events.
`discovered` requires the
original item/licence pages, creator, exact licence marker, proposed use, and room/
period tags; `inspected` additionally requires pinned source bytes, SHA-256, archive
member, format/axis/units, geometry/material/texture metadata, and bundled-term
review plus a hard-screen result. A unique immutable score-proposal event folds an
inspected hard-screen pass to `eligible` or `rejected`; scouts never claim
eligibility. `accepted` is valid only when `accepted.json` names an eligible record
and the lead records a selection reason. `rejected` always keeps a normalized reason
code plus note. Null
technical fields are allowed only before `inspected`; the strict shipped audit
rejects any accepted record that is not fully inspected and pinned.

Stable identity is source-derived, not invented from a local filename. A source
package may lawfully contain many candidate members:

```text
packageId = <provider>-<provider-object-id-or-slug>-<first-8-sha256(canonical-page-url)>
id        = <packageId>-<first-8-sha256(normalized-archive-member-or-root)>
sourceKey = <canonical-page-url>#<normalized-archive-member-or-root>
```

The global validator rejects duplicate base `id`, `sourceKey`, or `(archive SHA,
member)`. Repeated page URL/download hash is allowed only under the identical
`packageId` with byte-identical package/licence metadata and distinct normalized
members; conflicting package declarations fail. Inspection/amendment events target
one existing base ID and never redeclare identity; sequence numbers are contiguous
and `supersedes` names the immediately prior event. A handed-off fragment is
immutable, and the old value remains auditable. Raw fetch bytes use
`.asset-cache/sha256/<first-2>/<sha256>` and per-hash lock files under
`.asset-cache/locks/`; a unique partial is hash-checked then atomically renamed.
There is no shared mutable fetch-state JSON.

The catalogue validator rejects duplicate member identities, conflicting package
metadata, missing original source pages, unapproved licences, unpinned bytes,
unknown formats, path traversal,
non-finite metadata, missing bundled texture licences, and accepted entries with no
room or architectural purpose.

#### Normalize once; build deterministically forever

Raw downloads live in a hash-addressed ignored cache. Accepted assets are
normalized once into tracked, redistributable source inputs with explicit metres,
Y-up orientation, pivot, material split, normals, UVs, and modification record.
A clean production build must not require Blender, a logged-in marketplace, a
network request, or anything under `tmp/`.

The normalized directory contract is exact:

```text
assets-src/models/<id>/source.json
assets-src/models/<id>/model.obj
assets-src/models/<id>/materials.json
assets-src/models/<id>/normalization.json
assets-src/models/<id>/textures/<content-hash>.<ext>
```

`source.json` pins package/member/licence/input hashes. `normalization.json` pins
importer/version, units, axis/handedness, category pivot policy (`floorCenter`,
`wallBack`, `openingOrigin`, or explicit preserved point), transforms, triangulation,
normal generation, material/texture edits, and output hashes. OBJ is deterministic,
triangulated, finite and stable-ordered; winding/normals follow any handedness
change. Units/axis are never guessed. Decimation, baking or topology repair is never
automatic: it is a separately recorded deterministic transform with tool/version and
before/after metrics, or the asset is rejected.

`materials.json` reduces source materials to the accepted pixeldart contract:
base-colour texture/factor, emissive factor, `opaque|mask|blend`, alpha cutoff,
double-sided flag and stable part key. Unsupported PBR/normal/metallic channels are
explicitly baked, dropped with approved rationale, or rejected. Base-colour/emissive
images are sRGB, data is linear; EXIF/ancillary timestamps are stripped; dimensions
are deterministic 64–128 px with 256 absolute maximum unless PERF-01 records a
specific exception. Sampling is point/NEAREST with **no mipmaps**, matching the PS1
art contract. Every emitted texture uses content-addressed names.

`assets/budgets.json` starts with these provisional per-model caps; PERF-01 may
change them only with dated named-hardware evidence:

| Class | LOD0 tris | LOD1 | LOD2/cull | Material parts |
| --- | ---: | ---: | ---: | ---: |
| Micro prop | 800 | 250 | 4 px cull/cluster | 1 |
| Standard prop | 2,500 | 800 | 250 | 2 |
| Furniture/fixture | 5,000 | 1,500 | 400 | 4 |
| Hero/story | 8,000 | 2,500 | 600 | 6 |
| Architecture module | 3,000 | 900 | 200 | 3 |
| Vegetation | 3,500 | 900 | 150/impostor | 2 |
| Context shell | 2,000 per cell | 800 | silhouette | 2 |

At 384×216 the provisional high-density p95 view caps are 180 visible authored
roots, 240 expanded render instances, 140 draws, 110k submitted triangles, 96
material switches and 64 MiB resident model/art textures. The low-density caps are
110/150/90/60k/56/40 MiB. Density/LOD may not remove story, collision, evidence,
interaction or pickable availability. A visible first cell targets ≤12 MiB compressed,
transition delta ≤6 MiB and full model/art payload ≤96 MiB. Standard LOD0→1 starts
near 64 px then 1→2 near 20 px; hero 96/32 px; every transition uses 15% hysteresis
and a fixed-camera two-sided probe.

The bulk producer consumes normalized OBJ plus material/texture sidecars and emits
pixeldart's existing QMSH/model contracts. Do **not** add a new legacy
`lib/engine/mesh_asset.dart`. One multi-material model becomes multiple QMSH mesh
parts referenced by a deterministic `model.json` matching pixeldart
`ModelDefinition`; collision proxies and story meaning stay in game data, never in
renderer mesh files.

Framed art is two assets, not a baked mystery mesh: a reusable frame model plus a
catalogued CC0/approved image derivative. A deterministic art step applies the
recorded crop/rotation/colour-space/downscale settings, preserves aspect ratio,
emits one content-hashed point-sampled texture with no mipmaps, and records source/
output hashes. It never
scrapes an arbitrary search thumbnail or makes the museum page itself a build input.

QMSH v1 is the pilot path. Before bulk conversion, measure expanded source bytes,
deduplicated runtime vertices, index counts, and package size across a representative
30-asset sample. If v1's expanded encoding breaches the ratified payload/resource
budget, design and test an indexed/material-aware QMSH v2 **before** converting the
whole catalogue. Never hand-edit generated QMSH.

The planned tool contract is:

```text
dart run tools/models.dart catalog --check
dart run tools/models.dart acquire --inspection <fragment>
dart run tools/models.dart fetch --missing
dart run tools/models.dart normalize --check
dart run tools/models.dart convert --changed
dart run tools/models.dart art --check
dart run tools/models.dart turntable --all
dart run tools/models.dart house --check
dart run tools/models.dart report --json build/model-report.json
```

`acquire` and `fetch` are the only networked commands. `acquire` is the one-time
quarantine transition for an unpinned discovered URL: enforce byte/archive/member/
decompression limits, download to a unique partial, compute the hash, validate
media/archive structure and member paths, atomically CAS-ingest, and emit an
immutable inspection event. It never makes output eligible by itself. Subsequent
`fetch` requires the already recorded hash and refuses byte drift. Every check/build/
release command is offline and consumes pinned tracked inputs or the verified hash
cache. `convert --changed`
uses content hashes and atomic replacement; two cold conversions must produce the
same bytes, paths, model descriptors, and report.

#### House data and placement contract

- Canonical rooms, portals, windows, stairs, mantles, corroborating dimensions,
  and Q24 overrides remain in `lib/house/` and own simulation truth.
- Decorative architecture and placements are authored room-locally in validated
  data. Each record names a stable ID, model key, local transform, material variant,
  visibility group, collision policy, interaction tag if any, and importance/LOD.
- A framed-art wall placement additionally names `artId`, reusable `frameModelKey`,
  exact derivative SHA/path, normalized crop, `contain|cover` fit, visible aspect,
  wall anchor and inset. It resolves to one active placement/material instance; the
  source image and frame remain separately licensed/catalogued assets.
- Collision is explicit and machine-enforced. `solidProxy` requires one or more
  finite box/capsule/convex proxy shapes, blocks player sweeps and route navigation,
  reserves placement occupancy, and occludes interaction rays unless the hit is the
  target. `softBlocker` reserves visitor/prop/authoring occupancy and adds route cost
  but does not stop the player capsule or an interaction ray. `nonBlocking` is
  render-only and participates in none of those queries. `interactionOnly` never
  blocks movement/navigation but contributes exactly one named interaction target
  and cannot occlude another target. Runtime triangle soup never silently becomes
  collision, navigation, or physics.
- A proxy record names stable ID, owner placement, `box|capsule|convex`, local pose,
  full extents/radius/height, query masks and optional support sockets. A socket names
  stable ID, `floor|wall|surface|inside|hand`, local pose, clearance shape/extents,
  allowed tags, capacity, and `exclusive|shared` occupancy. Occupancy is derived in
  sorted placement-ID order; duplicate or unsupported claims fail instead of moving
  an existing object.
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

The enumerable verification inputs are tracked before fan-out. `routes.json` names
every portal traversal in both directions, both stair directions, room-to-room and
front/back/cellar-threshold routes, Q24 variants, ordered waypoints and the canonical
player-controller dimensions (`radius`, `totalHeight`, `segmentHeight`, `stepHeight`,
`maxSlope`, `skinWidth`, and source symbol). `targets.json` names every door, shutter,
mantle, journal, wireless, bed, visitor, examined object, pickable prop and recovery
pose with reach/line-of-sight rules. Fixed camera files cover every wall, focal point,
portal, stair, facade elevation, yard/context cell and opposite-house vignette. The
validator reads the actual player-controller constants and rejects a duplicated or
stale dimension. ART-03 freezes these matrices; ART-05 consumes them and writes only
ignored result shards.

Count reports use one formula everywhere. A **3D model** is one shipped model
descriptor regardless of mesh/material parts; a mesh part is never another model.
An **active placement** is one base-variant runtime instance. A frame plus its image
is one active placement but two separately licensed assets. Architectural-kit
instances, inactive Q24 alternatives and seeded-equivalent alternatives are reported
in separate columns and never inflate the 604–922 interior furnishing count. Reports
also state the maximum simultaneously active/visible variant set, not the sum of all
mutually exclusive states.

### Amnesia-like controls, watched-object affordance, and physical props

The control feel follows the direct-manipulation grammar documented in the
[Amnesia: The Dark Descent manual](https://cdn.akamai.steamstatic.com/steam/apps/239200/manuals/Manual.pdf?t=1670246309),
without copying its fiction, tuning, or UI. Controls are action IDs, fully remappable,
and prompts always render the active binding rather than hard-coded key names.

| Action | Default mouse/keyboard behavior | Required alternate |
| --- | --- | --- |
| Move/look | `W/A/S/D`, pointer-locked mouse; `Shift` run; `Ctrl` crouch; `Space` jump only where the canonical controller permits | Arrow/controller axes, sensitivity/invert options, reduced head motion |
| Focus/use | Centre gaze on an in-range, unobscured target; press left mouse for one-shot use/examine | `E` and controller action; toggle/hold choice |
| Grab/carry/drop | Hold left mouse on a `pickup` target; release for a gentle drop | Toggle-grab accessibility mode with explicit drop action |
| Rotate held object | Hold `R` or middle mouse and move mouse | Keyboard/controller yaw/pitch/roll actions |
| Carry distance | Mouse wheel adjusts within the object's min/max range | Bound keyboard/controller near/far actions |
| Throw | Right mouse while carrying releases one clamped forward impulse | Bound keyboard/controller throw; separate from cancel |
| Door/drawer/lever | Hold left mouse and move along the constrained hinge/slider/lever axis; release to stop | Digital open/close steps and toggle mode |
| Cancel/recover | `Esc` closes UI; explicit cancel releases manipulation without an impulse | Remappable controller/back action |

No default binding may make a required story action mouse-only. Hints may introduce
the grammar once, but the persistent affordance is quiet and diegetic enough for the
horror tone. Jump, run and crouch do not silently change existing canonical movement
measurements; if the current controller lacks one, INP-01 records it disabled rather
than inventing geometry assumptions.

#### Watched-object focus and highlight contract

“Watched” means the deterministic focus winner, not every object inside a sphere.
Each interactable declares stable ID, `examine|use|pickup|hinge|slider|lever`, maximum
reach, focus cone, line-of-sight mask, priority, prompt key, highlight class, blocked
reason key and optional recovery pose. Each tick, the pure resolver:

1. filters by enabled state, room/visibility, reach and camera-facing cone;
2. ray/sweeps against the same house/physics proxies used by interaction;
3. sorts by explicit semantic priority, nearest line-of-sight hit distance,
   normalized angular error, then stable ID, so an off-centre prop cannot beat the
   watched surface;
4. applies enter/leave hysteresis so adjacent props do not flicker; and
5. emits one renderer-neutral `InteractionFocusSnapshot` or none.

The focused object is highlighted only while close enough and unobscured. The
default is a restrained warm rim/value lift plus a small icon/bound prompt; it cannot
be a full-screen flash, color-only cue, through-wall silhouette, emissive blowout, or
extra material/program allocation per object per frame. `unavailable` targets may
show the prompt plus reason but never look usable. Text/icon/outline strength,
high-contrast mode and highlight disable are independent accessibility settings;
disabling the visual highlight leaves a semantic prompt and focus diagnostics.

#### Bounded deterministic physics contract

This is a small-prop/door manipulation system, not a general destructible world or
combat engine. Authored modes are `static`, `pickup`, `hinge`, `slider`, `lever`, and
`kinematicInteractable`; breakage, ragdolls, character damage and arbitrary triangle-
mesh rigid bodies remain deferred. Story/corroborator objects are either fixed or
have explicit recovery/persistence rules and can never be thrown into an unwinnable
state.

Each physical body declares stable placement/model IDs, sphere, capsule, or compound
box shapes (at most four boxes for a dynamic body), mass kg, centre of mass, friction, restitution,
linear/angular damping, sleep thresholds, collision/query masks, carry-distance
bounds, spring/force/torque/throw clamps, impact material, persistence class and an
in-bounds recovery transform. Dimensions and mass are authored facts or recorded
proposals approved by the physics integrator; they are never inferred silently from
render triangles. An approved convex proxy is static-query-only in v1.

Tracked authoring data uses integer units so shards cannot invent float conventions:
mass is `massGrams`; positions/extents/carry ranges are millimetres; coefficients and
damping are `[0,1000]` milli-units; canonical quaternion components are signed int16
with `w >= 0`. Each ≤4-body shard records `schemaVersion`, body/placement/model IDs,
mode, shapes, centre of mass, materials/coefficients/sleep/masks, carry or joint,
impact material, persistence, story role, recovery and interaction. A
`storyRole: evidence|progression` body rejects `pickup` unless an owner decision names
the precise recovery contract.

The pure kernel runs exactly once on the existing canonical **120 Hz game tick**—it
does not add a second accumulator or hidden phase. It uses swept motion for carried/
thrown bodies, stable-ID broadphase/contact ordering, fixed solver
iterations, finite clamps, sleeping, and one active carry constraint. A carried body
continues colliding with the house/player/other physical props, cannot be pulled
through a wall or camera, drops safely when the constraint stretches/occludes, and
cannot launch the player. Throw impulse is clamped from camera forward plus bounded
player velocity; mass changes carry lag/movement penalty without changing reach.
Impacts emit renderer/audio-neutral events with body/material/other ID and quantized
severity. They do not directly call WebAudio or renderer APIs.

The target collection is **70–110 deliberately movable props**, plus authored doors,
drawers and levers. Only the current room and adjacent visible cell activate; at most
24 non-sleeping free bodies are budgeted in the representative view. Saves store
sparse, quantized deltas for moved persistent bodies (pose, velocity, sleep and
constraint-free state) keyed by stable ID plus body-schema/default-transform digest;
cosmetic-reset bodies say so explicitly. Saving while held performs a zero-impulse
safe drop on the save tick, emits `physics.carryReleasedForSave`, and never serializes
a live carry constraint.
Loading rejects unknown/non-finite/out-of-bounds state and restores an authored safe
pose. Replay/scenario reports hash physics state but never serialize GPU/audio handles.

Automation must prove focus tie-breaking/hysteresis/occlusion, grab/drop/rotate/range,
door and drawer limits, wall/camera anti-clipping, swept high-speed collision,
sleep/wake, bounded energy, impact-event thresholds, sparse save/resume equality,
out-of-bounds recovery, story-route preservation and fixed-step frame-partition
equivalence. Browser scenarios use real pointer lock, mouse buttons/wheel and keyboard
alternates; mutation fixtures remove one proxy, clamp, save field, highlight cue or
recovery pose and must fail. Named-hardware evidence records awake bodies, contacts,
solver time, allocations and renderer resource deltas over 600 frames.

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

**Post-cutover continuation checkpoint — 2026-08-01:** the initial planning packet
was committed as game `f7a151d` (`MASTERPLAN.md`, `tools/card.dart`) and docs
`35b919f` (`PLAN.md`, `TODO.md`). The current micro-agent optimization pass is a new
tracked working-tree delta in those same files. Pixeldart remains at `9ffedf4` with
exactly the same five modified RP-3 paths. This checkpoint updates dispatch truth;
it does not promote `CTL-01` until the new delta is committed and clean-replayed.

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
| **R — renderer** | Existing `external/pixeldart` integration checkout after RP-3 is checkpointed | Pixeldart RP packets, then renderer-facing game adapters. RP-3 through RP-8 remain one serialized integration queue because their demo, pipeline, and lifecycle surfaces overlap. |
| **C — content/assets/audio** | Coordinator integration branch in `_worktrees/game-c` after `CTL-03` | Asset catalogue/provenance, model normalization/QMSH production, room/exterior dressing data, SFX, VO, and generated manifests. |
| **G — game/verification** | Coordinator integration branch in `_worktrees/game-g` after `CTL-03` | Save/domain/physics/input state, scenarios, content consumers, weather/rupture/tape/audio event contracts, UI/accessibility, plan/gate tooling, and browser diagnostics. |

The coordinator worktrees are merge queues, not shared worker sandboxes. Every
materialized `W` or `I` mutation leaf receives its own ignored
`_worktrees/<lane>/<packet-id>` worktree and branch at the recorded parent-integration
SHA. For a pixeldart packet, Git creates the leaf worktree from the pixeldart repo at
that path; it never copies the dirty submodule checkout. C and G do not initialize or
alter pixeldart unless O explicitly routes a packet there. If a leaf worktree cannot
be created and preflighted safely, that lane runs sequentially; shared index, HEAD,
or dirty state is never described as parallel isolation.

### Hot-file ownership and handoffs

| Path/area | Owner and rule |
| --- | --- |
| `tmp/MASTERPLAN.md`, its compact evidence index, archive banners and root locator | O only. Workers return a handoff; O applies status/evidence; archive bodies are never rewritten for current status. |
| `dist/**`, `.githooks/**`, lockfiles, gitlinks, `_worktrees/**` metadata | O only. Only O rebuilds/stages generated release output on the integration tree. |
| `external/pixeldart/**` | R through `REN-08`; explicit temporary handoff to C for `INT-02`, then back to R. |
| `external/pixeldart/web/renderer_test/main.dart`, `lib/rendering/passes/pipeline_builder.dart` | Never parallel. One renderer packet owns both or neither. |
| `assets/catalog/**`, `assets/house/**`, `assets-src/**`, `web/res/models/**`, asset/manifests/model/TTS tools | C. O owns the final manifest/dist convergence commit. |
| `assets/catalog/candidates/<category>/<batch-id>.json`, matching `inspections/**`, `amendments/**`, evidence | One C leaf owns one immutable bound fragment and only enumerated evidence prefixes; discovery and inspection never rewrite each other. |
| `assets/catalog/room_bom/<room-id>.json`, `assets/house/rooms/<room-id>/**` | One C room sublease per exact room; shared schema/cameras/index output remains with the C integrator. |
| `assets/catalog/accepted.json`, generated merged catalogue/manifests | C lead/integrator only after fragments pass; workers never append to/regenerate aggregates. Each schema has one dedicated foundation `W` lease, then freezes. Domain integrators write unique `assets/runtime-manifest.d/<domain>.json`; only O/build compiles `web/res/manifest.json`. |
| `lib/game/session.dart` | Serial G queue only: `GAM-00` → `GAM-09` → `CNT-01` → `PHY-02`; other feature/audio/physics workers use new modules/events and never reopen it. |
| `lib/game/save.dart` | Serial G queue only: `GAM-00` → `GAM-09` → `PHY-01`; later code consumes the frozen sparse physics codec/migration without reopening old fixtures. |
| Other `lib/game/**`, `lib/sim/**`, non-presentation `lib/house/**`, `lib/engine/audio.dart` | G until the domain snapshot is frozen; `lib/engine/audio.dart` has exactly one runtime writer in `AUD-03B`. |
| New `lib/presentation/**`, `lib/house/emitter.dart`, renderer adapters | R after the explicit `INT-01` handoff. |
| `web/main.dart` | Serial queue: `AUT-06` diagnostics → `CNT-01` content → `AUD-03B` audio → `PHY-02` physical controls → `GAM-07` final UI → `ACC-01A` freeze → `INT-00` G→R handoff → renderer integration. |
| `lib/config.dart` | `GAM-09` is the sole feature-default writer; R consumes its frozen typed immutable configuration and never edits it concurrently. |

One active lease owns a path prefix. O refuses a claim if the expected base SHA is
stale, a dirty path overlaps, or a prefix intersects an existing lease. Leases do
not expire or get stolen automatically. They close by accepted handoff, explicit
release, or owner intervention.

### Commit and convergence protocol

1. A leaf starts from its recorded parent-integration SHA in its private worktree and
   changes only its leased paths. It does not
   rebuild/stage `dist`, edit the master, bump the gitlink, or fold unrelated dirt
   into its commit.
2. Every code/data mutation leaf creates one packet-authorized signed feature commit
   (`git commit -S`) and a handoff containing task/attempt IDs, base/result commit and
   tree, exact changed paths, commands/results, artifact hashes, exact gate proved,
   adjacent scope not proved, and any blocker. Candidate feature evidence may be
   dirty; acceptance evidence may not.
   The sole exception is a state-inventory control gate such as `CTL-02`, whose
   measured object is the dirty-path set itself; it proves preservation only, never
   implementation correctness. A read-only/evidence-only `O` leaf records
   `resultCommit: null` and cannot smuggle a dirty patch.
3. The lane coordinator imports signed leaf commits in leaf-DAG order, verifies the
   commit parent/diff/tree manifest, reruns the leaf gate, and advances the recorded
   parent-integration SHA. O then merges isolated feature commits → shared seams/adapters → generated manifests
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
dart run tools/plan.dart leaves ART-01A --json
dart run tools/plan.dart dispatch ART-01A --leaf L-ART01A-DISCOVER --bind batch=arch-trim-surfaces-01
dart run tools/plan.dart claim ART-01A --leaf L-ART01A-DISCOVER --bind batch=arch-trim-surfaces-01 --owner <id> --expect-sha <sha> --expect-master <revision>
dart run tools/plan.dart handoff ART-01A --leaf L-ART01A-DISCOVER --result <handoff.json>
dart run tools/plan.dart accept ART-01A --evidence <EV-id>
dart run tools/plan.dart workset freeze ART-01A --input <gap-report.json>
dart run tools/plan.dart packet preflight <packet-id>
dart run tools/plan.dart abort <packet-id> --reason <reason>
dart run tools/plan.dart release <packet-id> --expect-lease <revision>
dart run tools/plan.dart doctor
dart run tools/plan.dart archive-audit
dart run tools/plan.dart impact --changed-from <sha> --proposal
dart run tools/plan.dart reconcile --proposal
dart run tools/plan.dart format --check
```

It validates IDs, statuses, dependencies, cycles, decision reverse edges, ready-state truth,
accepted evidence, active lease fields, leaf recipes/bindings, and path-prefix
overlap. `claim` uses an OS file lock plus compare-and-swap of the whole-file
`masterRevision` and repository SHA, performs the bounded lease edit, then returns a
per-lease `leaseRevision`, stable `specDigest`, private worktree and monotonic
`attemptId`. Recipe placeholders must be fully bound to normalized
repository-relative paths before claim; a wildcard or unresolved token is rejected.
`dispatch` prints only the ground rules, selected parent and leaf, direct dependency
evidence/decisions, exact read/write/deny sets and gates, relevant card/design
extracts, dirty overlap, first command, numbered procedure, and stop/handoff rules.
Both plan and card tooling resolve the canonical master in this order:
`QUARANTINE_MASTERPLAN`, `tmp/MASTERPLAN.md` from the game root, then
`MASTERPLAN.md` beside a docs checkout. They never fall back to an archive or root
locator. A game-only checkout fails clearly with one exact companion-docs checkout
instruction; a materialized packet stays self-contained after dispatch.

Every fan-out is frozen before any member is claimed. A workset records
`worksetId`, sorted member bindings, a membership digest, the exact source input
digest, and a closure predicate such as “all four assigned candidates inspected.”
`ALL(recipe)` always means every member of that frozen workset—not every
expansion that happens to exist later. A rejection or gap creates a new numbered
workset with a new digest; it cannot silently shrink a quota or reopen an accepted
parent. Only O can materialize a typed `needs-split` proposal into replacement
leaves.

Attempts have one terminal state: `pass`, `failed`, `blocked`,
`needs-split`, `spec-drift`, `cancelled`, or `infra-flaky`. A failed,
blocked, or flaky attempt preserves its immutable record and never overwrites a
successful sibling. `plan abort` writes a cancelled attempt with reason and
observed tree state; `plan release` revokes only its matching lease after proving
the owned worktree is clean or already imported. Leases never quietly expire or get
stolen. Dependency acceptance, evidence fingerprint, signature, and source tree are
rechecked at claim, handoff collection, and immediately before integration.

All deterministic packet, workset, handoff, evidence, and generated-report JSON uses
UTF-8, LF, sorted object keys, normalized slash-separated relative paths, NFC text,
and finite canonical number formatting. Timestamps, machine-specific absolute paths,
environment secrets, random IDs, and unordered map output are excluded from a
digest. A changed-tree digest is SHA-256 of the LF-delimited, lexically sorted
`path\tmode\tblob-sha\n` manifest for exactly the committed changed paths.
Path admission resolves final paths and rejects `..`, UNC/device paths, alternate
data streams, reserved device names, trailing-dot/space aliases, symlink or
junction/reparse escapes, and case- or Unicode-equivalent collisions on Windows.

A handoff stored only under a disposable worker worktree is not delivered. Each
packet names a worker outbox, an O-owned coordinator inbox and a content-addressed
artifact root outside every leaf worktree. The worker atomically seals a bundle
manifest containing the attempt JSON and declared artifacts; collection reads only
that sealed inbox copy, verifies hashes/signature/author identity, then records the
attempt as immutable.

`tools/verify.dart` is the only aggregate runner:

```text
dart run tools/verify.dart --profile quick|full|release|renderer|browser [--only GATE] [--resume RUN] [--json]
```

It executes direct argument arrays, never shell-composed strings. Full/release
profiles continue independent gates and return nonzero if any fail; `--fail-fast`
is local-only. Parent integrators author one disjoint
`tools/verify/gates.d/<task-id>.json` fragment. AUT-02 deterministically validates/
sorts those fragments into `tools/verify/gates.json`; the aggregate is generated and
never hand-edited. The resulting versioned implementation DAG—not a second status
board—carries stable gate ID, cwd/repository, argv, dependencies, profiles, input
globs, timeout, retry class, exact/nonzero discovery expectations, artifacts, and
master task IDs. Root and pixeldart tests are discovered in sorted order and exact-
set checked so zero or silently omitted tests fail.

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

#### Bounded closed-loop automation

`tools/autopilot.dart` is a safe coordinator, not an autonomous product owner. It
turns already-admitted recipes into parallel work without granting broader authority:

```text
dart run tools/autopilot.dart inventory --json
dart run tools/autopilot.dart batch --lane C --max-workers 6 --budget budgets/asset-authoring.json
dart run tools/autopilot.dart prepare <batch-id>
dart run tools/autopilot.dart collect <batch-id>
dart run tools/autopilot.dart converge <parent> --proposal
dart run tools/autopilot.dart audit --orphans --stale --leases --worktrees
dart run tools/autopilot.dart gc --verified-only --dry-run
```

The loop is deliberately finite:

1. **Inventory:** validate the master, repositories, leases, direct evidence, input
   digests and machine-generated gap reports. No valid gap means no packet.
2. **Select:** choose a deterministic maximal set of dependency-ready `W` leaves
   whose exact write sets and hot-file queues are disjoint. Fairness order is
   priority, oldest ready timestamp, parent ID, leaf ID; fixed `--max-workers`, wall-
   clock, byte, network/provider and attempt budgets prevent runaway fan-out.
3. **Prepare:** under the plan lock, CAS each claim, mint attempt IDs, create/private-
   preflight worktrees and emit self-contained NDJSON packets. Partial preparation
   rolls back only worktrees/claims created by that batch.
4. **Execute externally:** the agent runner consumes packets. The repository tool
   never invents credentials, accepts terms, chooses art/product policy or bypasses a
   stop condition merely to keep the queue full.
5. **Collect:** schema/path/commit/tree/artifact/spec-validate every immutable attempt,
   quarantine invalid returns, and produce a stable integration proposal. A failed
   shard leaves siblings usable.
6. **Converge:** in a fresh temporary integration worktree, cherry-pick valid commits
   in leaf-DAG order, compile unique fragments, rerun focused gates after each import
   and the parent gate at the end. Conflict or red gate stops before the coordinator
   branch. Only an O-approved command advances the integration branch/status/evidence.
7. **Learn mechanically:** accepted reports emit typed gap inputs—never prose tasks.
   Asset BOM holes, rejected formats, unfilled sockets, route failures, content IDs,
   VO units and test discovery become new deterministic shard bindings until the
   explicit quota/gate closes. Three identical blocker signatures trip a circuit
   breaker and require one named unblock condition.
8. **Retire safely:** after commit import and evidence hash verification, list owned
   clean leaf branches/worktrees as GC candidates. `--verified-only` refuses active,
   dirty, unmerged, unknown-path or preservation worktrees; deletion remains a
   separately logged O action.

Asset authoring gets its own automated funnel. BOMs generate normalized query
manifests; provider adapters may use only documented anonymous/search/download APIs
whose terms permit automation. Results are immutable URL/licence snapshots, then
CAS acquisition performs size/archive/path/hash checks, metadata inspection produces
hard-screen events, and deterministic previews expose scale/material/style problems.
The machine proposes duplicate groups, pivots, material reduction, LODs and simple
collision/physics proxies; a human curator accepts art fit, licence meaning and proxy
safety. Pinned Blender/converter containers may run one-time authoring transforms,
but tracked normalized source remains sufficient for every offline release build.
Contact sheets, route/target sweeps, socket occupancy, visible-set resource budgets,
Q24 rebuilds and physics recovery are regenerated from tracked matrices on every
relevant input change.

Automation invariants are mutation-tested: same inputs produce identical packet IDs,
worktree paths, generated fragments, build bytes and reports; missing/extra/stale/
duplicate shards fail; provider/network errors obey the retry table; a changed source
hash never repins itself; no command reads ignored historical docs for machine truth;
and no generated green result may edit its own expectation, master status or budget.

### Canonical build, browser, and CI methods

- One tracked graph owns enforced locks, text, legacy and pixeldart shaders,
  QMSH/models, deterministic sorted runtime-manifest fragment compilation, strict
  assets/VO, compilation, static copy, and a no-timestamp
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

### Small-agent execution layer

The register remains outcome-sized; the recipes below make each outcome executable
by agents with very little context. A **parent task** owns readiness and acceptance.
A **leaf recipe** owns one bounded implementation move. A **materialized leaf** is a
recipe whose variables, repository, base SHA, reads, writes, denies, commands, and
expected artifacts have been resolved by O. Recipes are not a second status board.
Their live state exists only as an active lease and a returned handoff; the parent
stays **ACTIVE** until its aggregate gate passes.

#### Leaf classes and sizing

| Class | May be delegated to a small agent? | Contract |
| --- | --- | --- |
| `W` worker | Yes | One behavior/data batch, one repository/worktree, normally 1–3 production paths plus 1–3 focused test/fixture paths, no shared aggregate or architectural decision. |
| `I` integrator | Only to the lane integrator | Serial shared seam, CLI/export barrel, generated aggregate, `web/main.dart`, renderer demo/pipeline/lifecycle, manifest, lock/gitlink, or parent-wide gate. |
| `O` owner/control | No ordinary worker | Decision, lease/worktree/status/evidence, release output, deploy, or destructive/irreversible transition. |

The path/line figures are dispatch-sizing signals, not product quality or acceptance
budgets. If a worker leaf is likely to exceed six changed paths or roughly 250
logical changed lines, O splits it unless a named invariant makes the change
indivisible. A worker never widens its own packet. It returns `needs-split` or
`spec-drift` with the exact reason.

#### Mandatory materialized packet

Every dispatch is self-contained and prints these fields in this order:

```text
schemaVersion, packetId, attemptId, parentTask, leafRecipe, class, owner, lane
repository, worktree, baseSha, masterRevisionAtClaim, leaseRevision, specDigest
worksetId, worksetMembershipDigest, worksetClosure, batchId, integrationQueue,
integrationBaseSha
dependencyEvidence[]
bindings{}, requiredReads[], writeExact[], createExact[], denyPrefixes[]
invariants[], numberedSteps[], firstCommand, testCommands[]
gate, expectedArtifacts[], completionAssertions[], stopConditions[]
handoffOutbox, coordinatorInbox, artifactRoot, resultMode: signedCommit|evidenceOnly,
expires: never
```

`writeExact`/`createExact` contain normalized repository-relative files or private
new-directory prefixes. They never contain an unbound placeholder, `..`, drive
letter, symlink escape, broad repository root, or ambiguous glob. Reads are not
writes. The packet includes only direct evidence and exact excerpts needed by the
leaf; an ordinary worker does not load this whole master or unrelated design/history
sections. `specDigest` hashes the selected parent row, recipe, resolved bindings/
paths, direct dependency evidence/decisions, required excerpts and gate. Unrelated
claims, evidence, or lease-table edits do not change it. `masterRevisionAtClaim` is
used only for the claim CAS; a worker later checks its own stable lease revision plus
recomputed spec digest.

The supplied workset values are mandatory even for a one-member packet. They bind
aggregation to a closed set and make later rescout batches plainly separate work.
`integrationBaseSha` is the coordinator SHA from which this leaf worktree was made;
`baseSha` is the leaf commit parent. `batchId` and `integrationQueue` explain
ordering but never grant a worker permission to import another worker's result.

#### Worker algorithm

1. Run the printed preflight: confirm private worktree/HEAD/lease revision/spec digest, list dirty files,
   prove every dirty path is inside the lease or predeclared preservation set, and
   confirm every dependency evidence ID exists.
2. Read only `requiredReads`. Restate the expected observable in the handoff scratch
   file before editing. If source contradicts the packet, stop as `spec-drift`.
3. Add or select the smallest focused failing assertion/fixture when the leaf changes
   behavior. Data-only scouting instead validates the empty skeleton before filling
   it. Never weaken an existing assertion to obtain green.
4. Implement the numbered steps in order. After each production path, run the
   cheapest named focused check. Do not format or generate outside the lease.
5. Run every `testCommands` entry exactly once for deterministic failures. Apply only
   the retry classes in §4; capture stdout/stderr and artifact hashes.
6. Run a diff audit: exact changed-path set, no deny-prefix change, no unrelated
   whitespace, no secret/absolute path/timestamp, and no unexplained generated byte.
7. For a mutation leaf, create the required packet-authorized signed feature commit,
   calculate its exact changed-tree manifest hash, write the attempt and artifacts to
   `handoffOutbox`, then atomically seal/copy its content-addressed bundle to
   `coordinatorInbox`. An evidence-only leaf writes the same immutable attempt
   record with no commit. Stop. Do not merge, update the master, regenerate shared
   output, move a gitlink, or claim acceptance.

#### Machine handoff and parent aggregation

The ignored handoff JSON contains:

```text
schemaVersion, packetId, attemptId, terminalState, parentTask, leafRecipe, class,
owner, lane, repository, worktree, worksetId, worksetMembershipDigest, batchId,
integrationQueue, integrationBaseSha, bindings{}, baseSha, leaseRevision, specDigest,
resultCommit, resultTree, changedTreeSha256, changedPaths[],
commands[{argv,cwd,exitCode,durationMs}],
artifacts[{path,sha256,size}], assertions[], gateResult, proves[],
doesNotProve[], findings[], blocker, suggestedNextLeaf, sealedBundleSha256
```

`tools/plan.dart handoff` rejects a result when its parent/leaf/attempt/workset/
bindings differ from the active lease, changed paths exceed the resolved set, the
base/lease/spec or dependency evidence is stale, the sealed bundle/signature/expected
author/commit/tree/path manifest differs, a command or required artifact is absent,
or the result claims parent-level acceptance. O validates and imports leaf commits in
dependency order, then verifies the post-import tree manifest. An `I` leaf then runs
the parent aggregate gate against the merged SHA. Only that gate produces promotable
`EV-*` evidence and allows the parent row to become **ACCEPTED**.

#### Collision-free fan-out and automatic sharding

- Repeated work writes **immutable fragments**, never a shared append target:
  catalogue batches, room BOMs, source evidence, VO render batches, model pilot
  reports, room placement files, scenario fixtures, and screenshots each get a
  bound stable ID and private path. A serial integrator validates and merges them.
- `tools/plan.dart leaves TASK --json` expands deterministic recipe families from
  tracked inputs such as room IDs, BOM gaps, selected model IDs, visitor/day units,
  and test files. It sorts by normalized ID, emits the same packet IDs for the same
  input digest, and refuses duplicate output paths.
- Default shard sizes are four discovery/inspection records, **one** normalized or
  converted model, two art derivatives, four VO clips, one ≤3-piece architectural
  kit workset, one room layer, one scenario fixture, or one UI surface. O may bind a
  smaller shard; any larger exception must be class `I` with a named indivisible
  invariant and cannot be silently assigned to a tiny worker.
- A failed shard does not poison siblings. Deterministic/content/licence failure is
  fixed in a new monotonic attempt (`<packet-id>-a0001`, `a0002`, …) of the same
  stable packet ID; attempt files are immutable and any `current` index is generated.
  Infrastructure-only retry also keeps every attempt. Aggregation refuses a missing,
  duplicate, extra, stale, or differently fingerprinted shard.
- `tools/plan.dart next --leaf --lane <lane>` selects only leaves whose parent is
  admitted and whose leaf prerequisites are present. Multiple worker subleases may
  coexist within or across ACTIVE parents when their exact leases/private worktrees
  are disjoint. Lane integrators and their coordinator import queue remain serial and
  ordered; the parent coordinator and one later aggregate integrator remain named.

#### Tiny-agent prohibitions

Unless the packet class is `I` or `O` and says otherwise, a leaf agent does not:

- choose product/art/licence/performance/save-schema policy or resolve a decision;
- edit `MASTERPLAN.md`, `tmp/**`, `dist/**`, lockfiles, gitlinks, shared manifests,
  shared generated indexes, `web/main.dart`, or pixeldart's shared demo/pipeline;
- launch a browser/server, access a marketplace account, deploy, delete/move broad
  paths, change canonical geometry, or modify the active five-file RP-3 patch;
- add dependencies, invent public interfaces, refactor adjacent code, or convert a
  discovered asset whose licence/source-byte state has not reached `eligible`.

The orchestrator treats a clean, precise stop as useful evidence. It never asks a
small agent to “finish the rest,” “fix whatever breaks,” or infer a write set from a
large parent row.

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
  G: GAM-03A | GAM-04A | GAM-05A | GAM-08A -> GAM-09; GAM-06 runner kernel
     CNT-01 pure leaves in parallel; after GAM-09, CNT-01 join -> CNT-02 -> GAM-10
     CNT-01 -> AUD-03B -> GAM-07 -> ACC-01A (last G/C entrypoint baseline)
  O/owner: DEC-Q24-00 -> DEC-Q24-17 | DEC-Q24-18 | DEC-Q24-20
  CONVERGENCE B: renderer M1, curated asset set, frozen domain snapshots

W2 ADAPTERS AND HOUSE
  O: INT-00 entrypoint handoff; R: INT-01; C/R handoff: INT-02; R: INT-03 -> INT-04
  C: ART-04 after INT-03; G/R: GAM-03B | GAM-04B | GAM-05B | GAM-08B after INT-04
  R: INT-05 -> INT-06A; G/C: ART-05A; GAM-02 -> ART-05B
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

This is the only live status register and specification. Archives may explain why a
past choice existed but cannot add a requirement, status, command or dependency. Each
row maps to one gate ID; detailed commands live in disjoint `tools/verify/gates.d/*.json`
fragments and their deterministic generated `gates.json`, and master-local task/leaf/
spec excerpts are printed by `tools/plan.dart dispatch`.

### Leaf recipe catalogue

This catalogue is the implementation-depth layer, not a second backlog. Backticked
`L-*` IDs are recipe IDs and therefore must not be parsed as canonical task rows.
`—` means no additional leaf prerequisite after the parent is admitted;
`ALL(recipe)` means every deterministic expansion of that recipe; `SAME(recipe)`
means the expansion with the identical binding map; `TASK(task)` is an explicit
acceptance-only convergence prerequisite that does not block earlier leaves;
multiple expressions are comma-separated. Braced variables are recipe parameters
and must be bound to exact values/paths before claim. The last leaf of each parent
is normally class `I` and owns its aggregate gate.

The dispatcher expands the probe into direct argv. Default leaf gates are:

```text
ROOT-DART: git diff --check; format --output=none --set-exit-if-changed only leased
           Dart paths; dart analyze; run the one focused Dart test.
PIX-DART:  the same from external/pixeldart, then the named renderer test.
DATA:      validate the empty/synthetic bad fixture, validate the completed exact
           fragment, then rerun with one required field/hash/reference mutated.
PYTHON:    run the named unittest module with network/provider calls disabled.
BROWSER:   no worker launch; the integrator invokes the named AUT-06 scenario via
           tools/verify and verifies expected build/backend/artifact fingerprints.
PARENT:    run the canonical G-* gate, exact changed-path check, and handoff import.
```

Materialization substitutes concrete paths/tests/scenarios; the shorthands are
never literal shell strings. Whole-repository formatting is forbidden for a leaf.
Whole-repository analyze/read-only aggregate checks are allowed when named and may
not expand the write lease.

Mixed-parent routing is explicit so `next --lane` never guesses. A single-lane
parent derives lane/repository from its register row. Every recipe under a mixed row
must match exactly one selector below; zero or multiple matches fail validation.
The leaf lease—not the parent status row—owns its exact base/worktree/repository.

| Parent | Leaf selector(s) | Lane/repository |
| --- | --- | --- |
| CTL-01 | `L-CTL01-DOC-CHECK`, `L-CTL01-DOC-COMMIT` | O/docs |
| CTL-01 | `L-CTL01-ROOT-COMMIT`, `L-CTL01-CLEAN-PROOF` | O/game |
| AUT-07 | `L-AUT07-*` | O/game |
| AUT-09 | `L-AUT09-BATCH`, `L-AUT09-COLLECT`, `L-AUT09-GAPS`, `L-AUT09-TRANSPORT`, `L-AUT09-RECONCILE`, `L-AUT09-CLI` | G/game |
| AUT-09 | `L-AUT09-PREPARE`, `L-AUT09-CONVERGE`, `L-AUT09-GC` | O/game |
| DOC-01 | `L-DOC01-MASTER`, `L-DOC01-ARCHIVES` | O/docs |
| DOC-01 | `L-DOC01-LOCATOR`, `L-DOC01-CARD`, `L-DOC01-GATE` | O/game |
| DOC-02 | `L-DOC02-DOCS` | O/docs |
| DOC-02 | `L-DOC02-GAME`, `L-DOC02-GATE` | O/game |
| DOC-02 | `L-DOC02-RENDERER` | O/pixeldart |
| PERF-01 | `L-PERF01-FIXTURE`, `L-PERF01-MEASURE` | G/game |
| PERF-01 | `L-PERF01-RATIFY` | O/game |
| REN-00 | no recipes; already accepted | R/pixeldart |
| ART-03 | `L-ART03-ROOM-BASE`, `L-ART03-EXTERIOR-BASE`, `L-ART03-THRESHOLD`, `L-ART03-HOUSE-BASE` | C/game |
| ART-03 | `L-ART03-ROOM-BOUNDS`, `L-ART03-PVS`, `L-ART03-VERIFY-MATRIX`, `L-ART03-GATE` | G/game |
| PHY-02 | `L-PHY02-ROOM` | C/game |
| PHY-02 | `L-PHY02-PROFILE`, `L-PHY02-LOAD`, `L-PHY02-REGISTRY`, `L-PHY02-PREFERENCES`, `L-PHY02-SETTINGS-UI`, `L-PHY02-CONTROLLER`, `L-PHY02-JOINT-BRIDGE`, `L-PHY02-SESSION`, `L-PHY02-MAIN`, `L-PHY02-GATE` | G/game |
| ART-04 | `L-ART04-BULK-MODELS`, `L-ART04-ART-*`, `L-ART04-ROOM-*`, `L-ART04-EXTERIOR-*`, `L-ART04-MERGE` | C/game |
| ART-04 | `L-ART04-COLLISION`, `L-ART04-GATE` | G/game |
| ART-05A | `L-ART05A-*` | G/game |
| ART-05B | `L-ART05B-OVERRIDE` | C/game |
| ART-05B | `L-ART05B-GATE` | G/game |
| AUD-03B | `L-AUD03B-CONTENT-MAP` | C/game |
| AUD-03B | `L-AUD03B-ENGINE`, `L-AUD03B-WIRE`, `L-AUD03B-BROWSER` | G/game |
| AST-01B | `L-AST01B-*` | O/game |
| DEC-Q24-00 | `L-DECQ24-*` | O/game |
| GAM-03B | `L-GAM03B-MODULE` | R/game |
| GAM-03B | `L-GAM03B-GATE` | G/game |
| GAM-04B | `L-GAM04B-MODULE` | R/game |
| GAM-04B | `L-GAM04B-GATE` | G/game |
| GAM-05B | `L-GAM05B-MODULE` | R/game |
| GAM-05B | `L-GAM05B-GATE` | G/game |
| GAM-08B | `L-GAM08B-VIDEO` | R/game |
| GAM-08B | `L-GAM08B-AUDIO`, `L-GAM08B-GATE` | G/game |
| PHY-03 | `L-PHY03-PROP` | C/game |
| PHY-03 | `L-PHY03-DYNAMIC`, `L-PHY03-JOINT-SCENE`, `L-PHY03-HIGHLIGHT` | R/game |
| PHY-03 | `L-PHY03-MERGE`, `L-PHY03-IMPACT`, `L-PHY03-GATE` | G/game |
| PHY-04 | `L-PHY04-*` (read-only final evidence only) | G/game |
| INT-02 | `L-INT02-DESCRIPTOR`, `L-INT02-CACHE`, `L-INT02-LIFECYCLE`, `L-INT02-BROWSER` | R/pixeldart |
| INT-02 | `L-INT02-HANDBACK` | O/game |
| INT-06A | `L-INT06A-PREVIEW` | R/game |
| INT-06A | `L-INT06A-FREEZE` | O/game |
| INT-06C | `L-INT06C-DELETE` | R/game |
| INT-06C | `L-INT06C-GATE` | O/game |
| ACC-01B | `L-ACC01B-*` | G/game |
| ACC-03 | `L-ACC03-*` | G/game |
| REL-03 | `L-REL03-*` | O/game |

#### W0 control, automation, build, and baseline recipes

| Leaf recipe | Parent | Class | After | Write/create boundary | Exact completion probe |
| --- | --- | --- | --- | --- | --- |
| `L-CTL01-DOC-CHECK` | CTL-01 | O | — | Planning files already leased by `RESERVE-O`; no feature path | Master/register/card/link/diff validators pass; record root/docs dirty sets. |
| `L-CTL01-DOC-COMMIT` | CTL-01 | O | `L-CTL01-DOC-CHECK` | Docs `MASTERPLAN.md` plus archive authority banners only | Signed docs commit contains the canonical master and non-destructive archive markers; capture SHA. |
| `L-CTL01-ROOT-COMMIT` | CTL-01 | O | `L-CTL01-DOC-COMMIT` | Root locator `MASTERPLAN.md`, `tools/card.dart` only | Signed root commit excludes RP-3/unrelated dirt; locator/tool resolve the companion master, record root/docs SHAs as evidence pair, not a gitlink. |
| `L-CTL01-CLEAN-PROOF` | CTL-01 | O | `L-CTL01-ROOT-COMMIT` | Evidence scratch only | Paired root+docs checkout validates/master-dispatches; game-only checkout emits exact docs instruction; plan/card/link/table/DAG checks emit `EV-PLAN-*`. |
| `L-CTL03-PREFLIGHT` | CTL-03 | O | — | `.gitignore` only if `_worktrees/` is not already ignored | Resolve absolute targets, branch names and base SHA; prove neither target exists or overlaps dirt. |
| `L-CTL03-C-WORKTREE` | CTL-03 | O | `L-CTL03-PREFLIGHT` | `_worktrees/game-c/**` metadata via Git only | Worktree/branch HEAD equals base; no copied dirty file; root discovery excludes it. |
| `L-CTL03-G-WORKTREE` | CTL-03 | O | `L-CTL03-PREFLIGHT` | `_worktrees/game-g/**` metadata via Git only | Same proof as C with a distinct branch/path. |
| `L-CTL03-LEAF-FACTORY` | CTL-03 | O | `L-CTL03-C-WORKTREE`, `L-CTL03-G-WORKTREE` | `tools/worktrees.dart`, focused path/branch/cleanup fixtures | Create one disposable private leaf worktree at an expected SHA, refuse collision/escape/dirty reuse, then retire only the verified owned path. |
| `L-CTL03-GATE` | CTL-03 | O | `L-CTL03-LEAF-FACTORY` | Evidence scratch only | Recursive analyze/test/build sees each intended repo once; coordinator bases/branches and disposable leaf lifecycle are recorded. |
| `L-AUT01-MODEL` | AUT-01 | W | — | `tools/plan/model.dart`, `tools/plan/test_model.dart` | Parse/serialize every allowed status, task, decision, evidence, recipe and lease value losslessly. |
| `L-AUT01-CANONICAL` | AUT-01 | W | `L-AUT01-MODEL` | `tools/plan/canonical.dart`, canonical JSON/tree-manifest fixtures | UTF-8/LF/NFC/sorted-key/finite-number bytes and sorted path/mode/blob manifests are reproducible; timestamp/absolute-path/invalid-number mutants fail. |
| `L-AUT01-PARSE` | AUT-01 | W | `L-AUT01-MODEL` | `tools/plan/parser.dart`, `tools/plan/test_parser.dart`, private parser fixtures | Valid master yields exact sets; malformed headings/tables/columns/IDs fail with line numbers. |
| `L-AUT01-VALIDATE` | AUT-01 | W | `L-AUT01-PARSE` | `tools/plan/validate.dart`, `tools/plan/test_validate.dart`, private semantic fixtures | Mutation suite catches duplicate/unknown/cycle/false-ready/evidence-free accepted/bad leaf grammar. |
| `L-AUT01-LEASE` | AUT-01 | W | `L-AUT01-CANONICAL` | `tools/plan/lease.dart`, `tools/plan/test_lease.dart`, private lease fixtures | Windows/case/slash/Unicode-equivalent overlaps, device/ADS/reparse escapes, stale SHA/digest and lock contention all fail. |
| `L-AUT01-EXPAND` | AUT-01 | W | `L-AUT01-PARSE`, `L-AUT01-CANONICAL` | `tools/plan/expand.dart`, focused deterministic shard/binding fixtures | `leaves` expands tracked domains to stable packet IDs, exact paths and one routing row; duplicate/unbound/ambiguous output fails. |
| `L-AUT01-WORKSET` | AUT-01 | W | `L-AUT01-EXPAND` | `tools/plan/workset.dart`, frozen-membership/closure fixtures | Freeze/materialize validates member list, source/membership digest and closure; `ALL` excludes later expansions and rejected work creates a new typed workset. |
| `L-AUT01-NEXT` | AUT-01 | W | `L-AUT01-VALIDATE`, `L-AUT01-EXPAND` | `tools/plan/scheduler.dart`, focused readiness/fairness fixtures | `next` returns only dependency-ready, nonoverlapping routed leaves in deterministic priority/age/ID order and cannot deadlock disjoint ACTIVE parents. |
| `L-AUT01-DISPATCH` | AUT-01 | W | `L-AUT01-WORKSET`, `L-AUT01-LEASE` | `tools/plan/dispatch.dart`, `tools/plan/test_dispatch.dart`, golden packet fixtures | Bound packet has no placeholder/glob, names outbox/inbox/artifact roots, contains only authoritative direct context, and round-trips JSON deterministically. |
| `L-AUT01-CLAIM` | AUT-01 | I | `L-AUT01-NEXT`, `L-AUT01-LEASE` | `tools/plan/claim.dart`, CAS/attempt/worktree fixtures | `claim` CASes master+repo, mints stable lease/spec plus monotonic attempt, creates private worktree, and loses cleanly under contention. |
| `L-AUT01-ABORT` | AUT-01 | W | `L-AUT01-LEASE` | `tools/plan/abort.dart`, terminal-state/release/worktree fixtures | Abort/release preserves a cancelled immutable attempt, refuses dirty/unknown/active paths and never silently expires or steals a lease. |
| `L-AUT01-HANDOFF` | AUT-01 | W | `L-AUT01-WORKSET`, `L-AUT01-ABORT` | `tools/plan/handoff.dart`, `tools/plan/test_handoff.dart` | Reject extra path, stale lease/spec/evidence, wrong workset/bundle/author/signature/tree, absent command/artifact and parent-acceptance claim. |
| `L-AUT01-DOCTOR` | AUT-01 | W | `L-AUT01-VALIDATE` | `tools/plan/doctor.dart`, master/archive/locator fixtures | `doctor`, `archive-audit` and `format --check` locate one canonical master, reject archive readers/NUL/locator drift and report deterministic format errors. |
| `L-AUT01-IMPACT` | AUT-01 | W | `L-AUT01-PARSE`, `L-AUT01-CANONICAL` | `tools/plan/impact.dart`, changed-path/schema-key fixtures | `impact --changed-from` and `reconcile --proposal` map changed inputs to gates/tasks/downstream demotions without self-editing status. |
| `L-AUT01-ACCEPT` | AUT-01 | I | `L-AUT01-HANDOFF`, `L-AUT01-VALIDATE` | `tools/plan/promote.dart`, focused evidence/demotion fixtures | `accept` proposes only exact merged gate evidence; dependency mutation demotes affected downstream rows and no worker edits status. |
| `L-AUT01-CLI` | AUT-01 | I | `L-AUT01-NEXT`, `L-AUT01-DISPATCH`, `L-AUT01-CLAIM`, `L-AUT01-ABORT`, `L-AUT01-HANDOFF`, `L-AUT01-DOCTOR`, `L-AUT01-IMPACT`, `L-AUT01-ACCEPT` | `tools/plan.dart`, `tools/plan/test_all.dart` | All documented commands and exit codes pass; `validate` accepts the committed master and deterministic probes need no redundant rerun unless their gate says so. |
| `L-AUT02-GATE-MODEL` | AUT-02 | W | — | `tools/verify/gate.dart`, `tools/verify/gates.schema.json`, `tools/verify/test_gate.dart`, schema fixtures | Reject bad cwd/argv/dependency/profile/input/retry/discovery/artifact/task fields and graph cycles. |
| `L-AUT02-EXECUTOR` | AUT-02 | W | `L-AUT02-GATE-MODEL` | `tools/verify/executor.dart`, `tools/verify/test_executor.dart`, process fixtures | Direct argv pass/fail/timeout/kill/cleanup classification works without shell composition. |
| `L-AUT02-FINGERPRINT` | AUT-02 | W | `L-AUT02-GATE-MODEL` | `tools/verify/fingerprint.dart`, `tools/verify/test_fingerprint.dart` | Stable sorted input/tool/repo/spec fingerprints change on every mutation and omit secrets. |
| `L-AUT02-RESUME` | AUT-02 | W | `L-AUT02-EXECUTOR`, `L-AUT02-FINGERPRINT` | `tools/verify/resume.dart`, `tools/verify/test_resume.dart` | Killed run resumes only matching PASS nodes; stale definitions/inputs rerun. |
| `L-AUT02-DISCOVERY` | AUT-02 | W | `L-AUT02-GATE-MODEL` | `tools/verify/discovery.dart`, `tools/verify/test_discovery.dart` | Sorted exact/minimum sets reject zero, missing, duplicate and unexpected tests/assets/clips. |
| `L-AUT02-REPORT` | AUT-02 | W | `L-AUT02-EXECUTOR`, `L-AUT02-FINGERPRINT` | `tools/verify/report.dart`, `tools/verify/test_report.dart` | Crash-safe NDJSON, JSON/Markdown/JUnit and artifact SHA output validate against their schemas. |
| `L-AUT02-GRAPH` | AUT-02 | I | `L-AUT02-RESUME`, `L-AUT02-DISCOVERY`, `L-AUT02-REPORT` | `tools/verify.dart`, seed `tools/verify/gates.d/*.json`, generated `gates.json`, `tools/verify/test_all.dart` | Fragment compiler rejects duplicate IDs/outputs/cycles; quick/full profiles continue, skip truthfully and resume. |
| `L-BLD01-LOCKS` | BLD-01 | O | — | `pubspec.lock`, `.gitignore`, pinned toolchain config only | `dart pub get --enforce-lockfile` works; no ignored lock or floating compiler/tool fallback remains. |
| `L-BLD01-GRAPH` | BLD-01 | W | — | `tools/build/graph.dart`, `tools/build/test_graph.dart` | Graph includes locks, text, both shader trees, assets/models/VO, compile/static/manifest in stable order. |
| `L-BLD01-GENERATORS` | BLD-01 | W | `L-BLD01-GRAPH` | `tools/build/generators.dart`, `tools/build/test_generators.dart` | Missing/stale/non-idempotent text, shader, model, asset or VO output fails offline. |
| `L-BLD01-TREE` | BLD-01 | W | `L-BLD01-GRAPH` | `tools/build/artifact_tree.dart`, `tools/build/test_artifact_tree.dart` | Exact path/size/SHA comparison catches missing/extra/mutated file, map and stale app. |
| `L-BLD01-CACHE-HOOK` | BLD-01 | O | `L-BLD01-GRAPH` | `vercel.json`, `.githooks/pre-commit`, narrow build config | Stable `/res/*` revalidates; hook watches all graph inputs and invokes the canonical quick gate. |
| `L-BLD01-CLI` | BLD-01 | I | `L-BLD01-LOCKS`, `L-BLD01-GENERATORS`, `L-BLD01-TREE`, `L-BLD01-CACHE-HOOK` | `tools/build.dart`, `tools/vercel_build.mjs`, build schema/fixtures | One offline production command emits sorted no-time manifest; two fresh roots are byte-identical. |
| `L-BLD01-ASSET-CONVERGE` | BLD-01 | I | `L-BLD01-CLI`, `TASK(AST-01A)` | Build graph/strict asset gate fragment only; no catalogue edit | Canonical build consumes tracked catalogue/tooling, has no `tmp/tools/fetch_assets.dart` or network dependency, and fails a stale/missing asset mutation. |
| `L-AUT06-DIAG-MODEL` | AUT-06 | W | — | `lib/verification/diagnostics.dart`, `tools/browser/test_diagnostics.dart` | Versioned public JSON rejects non-finite/private values and exposes every §4 field. |
| `L-AUT06-SCENARIO` | AUT-06 | W | — | `tools/browser/scenario.dart`, `tools/browser/test_scenario.dart`, scenario schema/fixtures | Versioned preload/actions/assertions parse deterministically; unknown/private action fails. |
| `L-AUT06-PROCESS` | AUT-06 | W | `L-AUT06-SCENARIO` | `tools/browser/process_owner.dart`, `tools/browser/test_process_owner.dart` | Dynamic ports/profile, owned PID tracking and `finally` cleanup survive timeout/interruption. |
| `L-AUT06-PROBES` | AUT-06 | W | `L-AUT06-SCENARIO` | `tools/browser/probes.dart`, `tools/browser/test_probes.dart` | Wrong build/backend, console/page/GL error, dark frame and disallowed software adapter fail by name. |
| `L-AUT06-READBACK` | AUT-06 | I | `L-AUT06-DIAG-MODEL` | Exact legacy end-of-frame readback seam and focused test named at dispatch | Public request yields framebuffer hash/luminance/black pixels only after a completed frame. |
| `L-AUT06-RUNNER` | AUT-06 | I | `L-AUT06-PROCESS`, `L-AUT06-PROBES`, `L-AUT06-READBACK` | `tools/browser.dart`, diagnostic HTML/entrypoint seam, browser gate entries | Source/package scenarios use real input, expected build ID, artifact capture and owned cleanup. |
| `L-AUT08-PLAN-MUTANTS` | AUT-08 | W | — | `tools/verify/fixtures/plan/**`, `tools/verify/self_test_plan.dart` | Every invalid-plan/CAS/lease mutation fails for its named assertion. |
| `L-AUT08-RUNNER-MUTANTS` | AUT-08 | W | — | `tools/verify/fixtures/runner/**`, `tools/verify/self_test_runner.dart` | Pass/fail/timeout/retry/skip/resume/discovery/artifact mutations are discriminated. |
| `L-AUT08-BUILD-MUTANTS` | AUT-08 | W | — | `tools/verify/fixtures/build/**`, `tools/verify/self_test_build.dart` | Missing/extra/mutated/nondeterministic dist and unsafe cache headers fail. |
| `L-AUT08-BROWSER-MUTANTS` | AUT-08 | W | — | `tools/verify/fixtures/browser/**`, `tools/verify/self_test_browser.dart` | Wrong build/error/dark/software/cleanup fixtures prove browser false positives are rejected. |
| `L-AUT08-GATE` | AUT-08 | I | `L-AUT08-PLAN-MUTANTS`, `L-AUT08-RUNNER-MUTANTS`, `L-AUT08-BUILD-MUTANTS`, `L-AUT08-BROWSER-MUTANTS` | `tools/verify/self_test.dart`, self-test gate entry | Mutation suite passes twice and fails when any expected-failure assertion is disabled. |
| `L-AUT09-BATCH` | AUT-09 | W | — | `tools/autopilot/batch.dart`, deterministic scheduling/budget fixtures | Maximal disjoint ready set obeys priority/age/ID fairness and fixed worker/time/byte/network/attempt budgets. |
| `L-AUT09-PREPARE` | AUT-09 | I | `L-AUT09-BATCH` | `tools/autopilot/prepare.dart`, partial-CAS/worktree fixtures | Batch claims/preflights private worktrees atomically; partial failure releases only batch-owned clean claims/paths. |
| `L-AUT09-TRANSPORT` | AUT-09 | W | — | `tools/autopilot/transport.dart`, outbox/inbox/seal/tamper fixtures | Worker outbox to O-owned inbox transfer is atomic/content-addressed; missing, duplicate, unsealed, cross-worktree or tampered bundles fail closed. |
| `L-AUT09-COLLECT` | AUT-09 | W | `L-AUT09-TRANSPORT` | `tools/autopilot/collect.dart`, invalid/duplicate/attempt fixtures | Immutable attempts validate terminal state, workset/spec/lease/evidence/commit/tree/path/artifact/author truth; invalid returns quarantine without poisoning siblings. |
| `L-AUT09-GAPS` | AUT-09 | W | — | `tools/autopilot/gaps.dart`, typed asset/content/VO/route fixture schemas | Accepted machine reports produce stable bounded bindings; prose, quota reduction and unchanged blocker loops cannot self-create work. |
| `L-AUT09-RECONCILE` | AUT-09 | W | `L-AUT09-COLLECT` | `tools/autopilot/reconcile.dart`, repo/lease/evidence drift fixtures | Read-only proposal compares register claims with actual SHAs, dirt, worksets, leases, handoffs and generated counts; it never self-promotes state. |
| `L-AUT09-CONVERGE` | AUT-09 | I | `L-AUT09-COLLECT`, `L-AUT09-RECONCILE` | `tools/autopilot/converge.dart`, temporary-integration/conflict fixtures | Signed commits import in leaf-DAG order into a fresh proposal tree; focused/parent red or conflict cannot advance coordinator branch. |
| `L-AUT09-GC` | AUT-09 | O | `L-AUT09-CONVERGE` | `tools/autopilot/gc.dart`, owned-worktree audit fixtures | Dry-run inventory refuses active/dirty/unmerged/unknown/preservation paths; only O can retire a verified owned path. |
| `L-AUT09-CLI` | AUT-09 | I | `L-AUT09-PREPARE`, `L-AUT09-TRANSPORT`, `L-AUT09-GAPS`, `L-AUT09-RECONCILE`, `L-AUT09-CONVERGE`, `L-AUT09-GC` | `tools/autopilot.dart`, focused end-to-end fixtures and gate fragment | Inventory→batch→prepare→collect→proposal→audit is deterministic, circuit-bounded and never self-approves status/policy/deploy. |
| `L-AUT07-PR` | AUT-07 | I | — | `.github/workflows/verify.yml` | Pinned PR workflow runs quick/full software lanes and always uploads structured artifacts. |
| `L-AUT07-HARDWARE` | AUT-07 | I | `L-AUT07-PR` | `.github/workflows/hardware.yml`, hardware runner docs/config | Manual named-adapter 600-frame/audio/offline lane emits required signed evidence. |
| `L-AUT07-RELEASE` | AUT-07 | O | `L-AUT07-HARDWARE` | `.github/workflows/release.yml`, release config | Tag lane consumes the already accepted artifact and cannot silently rebuild a different candidate. |
| `L-BASE02-DOUBLE-BUILD` | BASE-02 | O | — | Fresh ignored output roots only | Two offline production builds have identical exact trees and manifest build ID. |
| `L-BASE02-DIST` | BASE-02 | O | `L-BASE02-DOUBLE-BUILD` | `dist/web/**` only | One replacement makes tracked dist exact; third compare reports no missing/extra/mutated output. |
| `L-BASE03-SOURCE` | BASE-03 | I | — | Scenario artifacts only | Source boot reaches 120 frames with expected build/backend/input/readback and no errors. |
| `L-BASE03-PACKAGE` | BASE-03 | I | `L-BASE03-SOURCE` | Scenario artifacts only | Packaged boot repeats the frozen actions/assertions and identifies its exact build. |
| `L-BASE04-ALPHA-SPLIT` | BASE-04 | W | — | `tools/renderer/test_alpha_mask.dart`, one exact new split test only | Behavior assertions are unchanged/mutation-live and each file is at or below ratified test cap. |
| `L-BASE04-ZERO-SPLIT` | BASE-04 | W | — | `tools/renderer/test_zero_cost.dart`, one exact new split test only | All zero-cost cases preserved/mutation-live and both files pass the cap. |
| `L-BASE04-DISCOVERY` | BASE-04 | I | `L-BASE04-ALPHA-SPLIT`, `L-BASE04-ZERO-SPLIT` | `tools/renderer/test_all.dart`, new discovery self-test only | Runner discovers sorted exact nonempty `test_*.dart` set, excludes only itself, and catches missing/extra/zero tests. |
| `L-BASE04-GATE` | BASE-04 | I | `L-BASE04-DISCOVERY` | `tools/renderer/budgets.json` only if explicitly ratified | Exact format/analyze/tests/boundary/size/shader suite passes from clean pixeldart SHA. |
| `L-DOC01-MASTER` | DOC-01 | O | — | Docs `MASTERPLAN.md` only | The sole live authority is complete, schema-valid, archive-independent and has no copied status snapshot. |
| `L-DOC01-ARCHIVES` | DOC-01 | O | `L-DOC01-MASTER` | Docs `PLAN.md` and `TODO.md` authority banners only | Archive bodies remain intact, point to the local master and are not machine-dispatch inputs. |
| `L-DOC01-LOCATOR` | DOC-01 | O | `L-DOC01-ARCHIVES` | Game-root `MASTERPLAN.md` locator only | The root file contains no plan/status/task data and gives the one exact companion-checkout path. |
| `L-DOC01-CARD` | DOC-01 | O | `L-DOC01-MASTER` | `tools/card.dart` plus focused canonical-master fixtures | Exact task/leaf/decision extraction accepts only the canonical master, never archive cards or the root locator. |
| `L-DOC01-GATE` | DOC-01 | O | `L-DOC01-LOCATOR`, `L-DOC01-CARD` | Read-only paired-checkout evidence | Docs-present dispatch/card/link/table/DAG checks pass; docs-absent mode emits one actionable diagnostic; no second status board survives. |
| `L-DOC02-DOCS` | DOC-02 | O | — | Final docs/operator files named after accepted behavior | Public docs link to source commands/manifests and reference generated counts rather than copying mutable state. |
| `L-DOC02-GAME` | DOC-02 | O | — | Final game README/operator instructions named after accepted behavior | Clean-checkout/build/run/support instructions match the accepted candidate exactly and contain no unverified benchmark or task status. |
| `L-DOC02-RENDERER` | DOC-02 | O | — | Final pixeldart README/package instructions named after accepted behavior | Public lifecycle/profile/build/test instructions match accepted package behavior and interface guarantees. |
| `L-DOC02-GATE` | DOC-02 | O | `L-DOC02-DOCS`, `L-DOC02-GAME`, `L-DOC02-RENDERER` | Read-only documentation evidence | Links, commands, compatibility/profile language, asset/audio/count provenance and archive boundaries match accepted implementation; no copied status survives. |
| `L-PERF01-FIXTURE` | PERF-01 | W | — | `tools/browser/scenarios/perf.json`, metric schema | Fixed camera/route/profile/warm-up/600-frame workload and resource counters are deterministic. |
| `L-PERF01-MEASURE` | PERF-01 | I | `L-PERF01-FIXTURE` | Evidence artifacts only | Exactly three named-hardware runs report CPU/GPU p50/p95, draws, triangles, textures/resources, package. |
| `L-PERF01-RATIFY` | PERF-01 | O | `L-PERF01-MEASURE` | Decision/evidence rows via O only | Owner records supported browsers/adapters and binary ceilings; no silent “reasonable” defaults remain. |

#### Serialized pixeldart recipes

The current `REN-03A` patch is an atomic preservation exception: only its existing R
owner may finish its five files. That lease does not silently widen to a test file.
After the production handoff, a new test-only lease may mutation-check it; the five
production paths remain untouched during that leaf.

| Leaf recipe | Parent | Class | After | Write/create boundary | Exact completion probe |
| --- | --- | --- | --- | --- | --- |
| `L-REN03A-FINISH` | REN-03A | I | — | The exact five paths in `LEASE-RP3-A` only | Existing owner finishes audited vocabulary/parameter propagation and analyze; handoff preserves exact diff scope. |
| `L-REN03A-TEST` | REN-03A | W | `L-REN03A-FINISH` | New `tools/renderer/test_post_chain_parameters.dart` only | Exact/custom profile resources and DOF/grade/PS1/VHS parameters are mutation-live; no leased production byte changes. |
| `L-REN03A-GATE` | REN-03A | I | `L-REN03A-TEST` | Evidence only | Focused test plus exact pixeldart static suite passes from the combined clean result SHA. |
| `L-REN03B-DECLARE` | REN-03B | W | — | `lib/rendering/core/render_feature.dart`, `tools/renderer/test_feature_graph.dart` | Every resource/program/pass group has explicit dependency closure and invalid graphs fail. |
| `L-REN03B-ASSEMBLER` | REN-03B | I | `L-REN03B-DECLARE` | New `lib/rendering/passes/pipeline_builder.dart`, new focused test | Minimal/full declared groups build stable ordered graphs; excluded groups are absent. |
| `L-REN03B-OWNERSHIP` | REN-03B | W | `L-REN03B-ASSEMBLER` | New focused zero-install/resource-count fixture only | Each excluded feature yields zero programs, targets, passes and store resources under mutation. |
| `L-REN03B-INTEGRATE` | REN-03B | I | `L-REN03B-OWNERSHIP` | Shared pipeline exports/demo/test aggregate only | Package exact suite and repeated install/dispose return resources to baseline. |
| `L-REN03C-PROFILES` | REN-03C | W | — | `lib/rendering/api/settings.dart`, new `tools/renderer/test_profiles.dart` | Minimal/full/named profiles serialize to explicit feature/parameter sets with no hidden default. |
| `L-REN03C-SELECTION` | REN-03C | W | `L-REN03C-PROFILES` | `lib/rendering/webgl/capability_selection.dart`, focused selection test | Unsupported and invalid combinations fail or select the documented conservative path deterministically. |
| `L-REN03C-RECONFIGURE` | REN-03C | I | `L-REN03C-SELECTION` | Renderer/pipeline lifecycle paths named after reread, focused lifecycle test | Configure is between-frame atomic; stale encoders reject; repeated cycles keep exact counts. |
| `L-REN03C-AB` | REN-03C | I | `L-REN03C-RECONFIGURE` | `web/renderer_test/main.dart`, scenario artifact only | Minimal/full/invalid A/B proves installed groups and live resources through public diagnostics. |
| `L-REN04-POLICY` | REN-04 | W | — | New `lib/rendering/api/internal_resolution.dart`, focused policy test | Matrix covers CSS size, DPR, fixed/adaptive mode and zero/odd/extreme dimensions. |
| `L-REN04-TARGETS` | REN-04 | W | `L-REN04-POLICY` | `lib/rendering/webgl/webgl2_device_targets.dart`, focused allocation test | Every scene/history/post target uses resolved internal size; UI/canvas contract stays separate. |
| `L-REN04-RESIZE` | REN-04 | W | `L-REN04-TARGETS` | `lib/rendering/webgl/device.dart` or exact resize seam, focused resize test | Repeated resize/DPR changes free old targets, preserve NEAREST policy and return to baseline. |
| `L-REN04-INTEGRATE` | REN-04 | I | `L-REN04-RESIZE` | Shared demo/pipeline and browser scenario only | 384×216 default and matrix cases show correct canvas/readback/resource dimensions. |
| `L-REN05-SHADERS` | REN-05 | I | — | World `.vert` shader sources, shader manifest, shader-focused test | Serialized R integration keeps default variant bytes stable; enabled variant uses explicit vertex-light inputs and finite clamps. |
| `L-REN05-PROGRAM` | REN-05 | W | `L-REN05-SHADERS` | `lib/rendering/core/program_library.dart`, exact generated shader output, focused program test | Only selected profiles compile/install variant; cache keys distinguish it; default owns zero extra program. |
| `L-REN05-SELECT` | REN-05 | I | `L-REN05-PROGRAM` | Profile/pipeline selection seam, focused mutation fixture | Turning the feature off removes program/resource/draw state and preserves old clean output hash. |
| `L-REN05-AB` | REN-05 | I | `L-REN05-SELECT` | Demo toggle/browser artifacts only | Clean/on fixed scene A/B plus cost/resource report; default stays off absent `DEC-RP5`. |
| `L-REN06-CLOCK` | REN-06 | W | — | New `lib/rendering/core/frame_clock.dart`, focused determinism test | Explicit time/epoch/frame/seed inputs produce identical 120-frame command/state summaries. |
| `L-REN06-HISTORY` | REN-06 | W | `L-REN06-CLOCK` | Temporal/history ownership seam and focused reset test | Resize/reconfigure/loss/restore resets or preserves each history exactly as specified. |
| `L-REN06-MOTION` | REN-06 | W | `L-REN06-CLOCK` | `lib/rendering/api/settings.dart` motion fields plus focused test | Live reduced-motion update measurably reduces every temporal/jitter/history consumer without restart. |
| `L-REN06-INTEGRATE` | REN-06 | I | `L-REN06-HISTORY`, `L-REN06-MOTION` | Shared demo/scenario only | Two public 120-frame replays match; reduced-motion metrics differ in the intended direction. |
| `L-REN07-FOG` | REN-07 | W | — | Fog factor API/shader/debug graph paths named at dispatch, focused test | Debug output monotonically represents finite clamped fog factor and disabled mode owns zero extras. |
| `L-REN07-PROBES` | REN-07 | W | `L-REN07-FOG` | `tools/renderer/comfort_probe.dart`, pure probe tests | Synthetic NaN/dark/flash/luminance-frequency mutants fail exact thresholds. |
| `L-REN07-INTEGRATE` | REN-07 | I | `L-REN07-PROBES` | Demo toggle plus browser artifacts only | 600-frame named-adapter run passes finite/luminance/mostly-black/photosensitivity and cleanup gates. |
| `L-REN08-API` | REN-08 | W | — | New public `lib/rendering/api/scene_renderer.dart`, API compile tests | Minimal lifecycle/submit/configure/resize/dispose/loss/restore API exposes no WebGL implementation type. |
| `L-REN08-IMPLEMENT` | REN-08 | I | `L-REN08-API` | Exact renderer implementation/lifecycle paths, focused fake-device tests | Ownership table is executable; configure is atomic; dispose returns every live count to baseline. |
| `L-REN08-LOSS` | REN-08 | W | `L-REN08-API` | New loss/restore fixture and narrowly named device seam | Lost renderer rejects work; restore recreates each owned resource once and stale handles/encoders fail. |
| `L-REN08-PUBLIC` | REN-08 | I | `L-REN08-IMPLEMENT`, `L-REN08-LOSS` | Export barrel, shared demo/browser scenario only | Consumer uses only public facade across resize/reconfigure/loss/restore/dispose; exact package suite passes. |

#### Asset discovery, conversion, house-remodel, art, voice, and audio recipes

Room expansions bind exactly `living-room`, `hall`, `kitchen`, `cellar`, `bedroom`,
`landing`, `bathroom`, or `spare-room`. The following seed role IDs preserve a
useful first partition; the generated frozen workset manifest owns every exact member:

```text
architecture: arch-trim-surfaces-01, arch-openings-01,
              arch-hearth-alcove-01, arch-stair-rail-01,
              arch-cellar-service-01
furniture:    furn-seating-tables-01, furn-storage-display-01,
              furn-bedroom-private-01, furn-kitchen-work-01,
              furn-bath-utility-01
decor:        decor-textiles-rugs-curtains-01, decor-books-clocks-paper-01,
              decor-crockery-pans-jars-01, decor-tools-coal-storage-01,
              decor-frames-personal-01
art:          art-met-open-01, art-aic-open-01, art-smithsonian-open-01
```

Each workset deterministically expands to three four-record shards (`-01`…`-03`).
The seed capacity is deliberately not the whole hunt. Before any scout is dispatched,
`ART-00-WORKSETS` freezes this minimum quota manifest:

| Group | Numbered frozen worksets | Candidate capacity |
| --- | ---: | ---: |
| Architecture | `arch-01`…`arch-10` | 120 |
| Furniture | `furn-01`…`furn-10` | 120 |
| Decor/movable | `decor-01`…`decor-12` | 144 |
| Exterior envelope | `exterior-01`…`exterior-09` | 108 |
| Garden/street/context | `context-01`…`context-09` | 108 |
| Open art images | `art-01`…`art-07` | 84 |
| Surface materials | `surface-01`…`surface-09` | 108 |

The 600 3D slots intentionally exceed the 580 inspection target so rejection never
forces filler. O materializes a new numbered rescout workset whenever the report
shows a viable-count, quantity-band, BOM, style/scale, licence confidence,
average-score, pilot-format, physics, or exterior-view deficit—not only an empty
category. Agents report shortfall and never pad a shard. Normalization/conversion
shards bind one accepted **3D** ID and art-derivative shards bind two accepted image
IDs. Quotas are verified by typed folded records, not filenames.

| Leaf recipe | Parent | Class | After | Write/create boundary | Exact completion probe |
| --- | --- | --- | --- | --- | --- |
| `L-AST01A-SCHEMA` | AST-01A | W | — | `assets/catalog/schema.json`, schema fixtures only | Valid progressive states round-trip; unknown fields/status/licence/path/non-finite values fail. |
| `L-AST01A-LICENCE` | AST-01A | W | `L-AST01A-SCHEMA` | `tools/assets/licence.dart`, focused tests, tracked full licence texts | Allowlist rejects NC/ND/SA/unknown/custom-without-decision and detects missing bundled terms. |
| `L-AST01A-CATALOG` | AST-01A | W | `L-AST01A-SCHEMA`, `L-AST01A-LICENCE` | `tools/assets/catalog.dart`, focused tests/fixtures | Sorted fragment scan rejects duplicate ID/URL/hash, bad state transition, missing source page and escape. |
| `L-AST01A-ACQUIRE` | AST-01A | W | `L-AST01A-CATALOG` | `tools/assets/acquire.dart`, focused quarantine/HTTP/archive fixtures | Unpinned URL is size/type/path/bomb checked, hash-computed and CAS-ingested atomically; interruption leaves no event/partial. |
| `L-AST01A-FETCH` | AST-01A | W | `L-AST01A-CATALOG` | `tools/assets/fetch.dart`, focused pinned HTTP/cache fixtures | Recorded expected hash is mandatory; CAS/atomic rename pass; auth/4xx/hash/parse never retry or repin. |
| `L-AST01A-INGEST` | AST-01A | W | `L-AST01A-CATALOG` | One bound ≤4-entry `assets/catalog/candidates/existing/{batch}.json`, matching inspection overlay and enumerated evidence prefixes | Assigned current manifest files become truthful discovered/inspected/rejected catalogue events without invented provenance. |
| `L-AST01A-RUNTIME-FRAGMENT` | AST-01A | I | `ALL(L-AST01A-INGEST)` | `assets/runtime-manifest.d/core.json`, fragment compiler fixture | Existing non-model/non-voice runtime entries migrate exactly once; sorted fragment compilation reproduces current logical keys. |
| `L-AST01A-CLI` | AST-01A | I | `L-AST01A-ACQUIRE`, `L-AST01A-FETCH`, `L-AST01A-RUNTIME-FRAGMENT` | `tools/models.dart`, `tools/assets/test_all.dart`, catalogue gate entries | `acquire`/pinned `fetch` are distinct; catalogue/offline audit reject zero/extras/orphans and pass good/bad fixtures. |
| `L-ART00-BOM-ROOM` | ART-00 | W | — | `assets/catalog/room_bom/{room}.json` only | Schema check proves required/optional categories, quantity/dimensions/material/search/reuse/exclusion fields and no duplicate key. |
| `L-ART00-BOM-THRESHOLD` | ART-00 | W | — | `assets/catalog/threshold_bom/{threshold}.json` only | One canonical window/door/cellar/stair threshold names fixed aperture, view/interact rules and needed fabric/detail without adding traversal. |
| `L-ART00-BOM-EXTERIOR` | ART-00 | W | — | `assets/catalog/exterior_bom/{zone}.json` only | One view-only facade/roof/garden/service/street/context zone has quantity, era, dimensions, PVS/LOD, camera and exclusion fields. |
| `L-ART00-WORKSETS` | ART-00 | I | `ALL(L-ART00-BOM-ROOM)`, `ALL(L-ART00-BOM-THRESHOLD)`, `ALL(L-ART00-BOM-EXTERIOR)` | Deterministic four-candidate query worksets and gap report only | Exact BOM holes/source diversity/pilot/physics/exterior-view needs become stable bounded search worksets; no quota is silently reduced. |
| `L-ART00-BOM-GATE` | ART-00 | I | `L-ART00-WORKSETS` | BOM validator/report only; no placement edits | Eight rooms plus every threshold/exterior zone and typed quota are covered once, with era/aperture/physics/LOD/performance exclusions explicit. |
| `L-ART01A-DISCOVER` | ART-01A | W | — | One four-record `assets/catalog/candidates/architecture/{batch}.json` plus enumerated private evidence prefixes | Four original-page candidates cover the assigned structure workset honestly with valid discovered fields. |
| `L-ART01A-INSPECT` | ART-01A | W | `SAME(L-ART01A-DISCOVER)` | One matching `assets/catalog/inspections/architecture/{batch}.json`, pinned cache and enumerated evidence only | Download/hash/format/axis/units/triangles/materials/textures/terms overlay or normalized rejection is complete; discovery stays unchanged. |
| `L-ART01A-GATE` | ART-01A | I | `ALL(L-ART01A-INSPECT)` | Interior-architecture screening report only | Exactly ≥120 interior architecture/opening/service members are inspected and ≥84 pass hard screening; every pass fills a BOM use, else rescout. |
| `L-ART01B-DISCOVER` | ART-01B | W | — | One four-record `assets/catalog/candidates/furniture/{batch}.json` plus enumerated private evidence prefixes | Four original-page functional furniture/fixture candidates satisfy the assigned workset without padding. |
| `L-ART01B-INSPECT` | ART-01B | W | `SAME(L-ART01B-DISCOVER)` | One matching `assets/catalog/inspections/furniture/{batch}.json`, pinned cache and evidence only | Technical/licence overlay is complete or rejection explicit; scale/silhouette preview recorded and discovery unchanged. |
| `L-ART01B-GATE` | ART-01B | I | `ALL(L-ART01B-INSPECT)` | Furniture screening report only | ≥120 furniture/fixture members are inspected and ≥84 pass hard screening with credible functional/scale coverage, else rescout. |
| `L-ART01C-DISCOVER` | ART-01C | W | — | One four-record `assets/catalog/candidates/{decor-or-art}/{batch}.json` plus enumerated private evidence prefixes | Four original-page decor or open-art records satisfy the assigned workset without weak filler. |
| `L-ART01C-INSPECT` | ART-01C | W | `SAME(L-ART01C-DISCOVER)` | One matching `assets/catalog/inspections/{decor-or-art}/{batch}.json`, pinned cache/evidence only | Technical/licence/art metadata overlay is complete or rejection explicit; object ID/open marker recorded; discovery unchanged. |
| `L-ART01C-GATE` | ART-01C | I | `ALL(L-ART01C-INSPECT)` | Typed decor/art screening report only | ≥140 inspected 3D decor/physics props with ≥98 passes, plus 80 inspected art with ≥56 passes and no lived-detail hole, else rescout. |
| `L-ART01E-DISCOVER` | ART-01E | W | — | One four-record `assets/catalog/candidates/exterior/{batch}.json` plus evidence prefixes | Four original-page envelope/roof/threshold/hardscape candidates fill the assigned view/BOM workset honestly. |
| `L-ART01E-INSPECT` | ART-01E | W | `SAME(L-ART01E-DISCOVER)` | Matching immutable inspection overlay/cache/evidence only | Licence/format/scale/material/LOD/aperture suitability is complete or normalized rejection explicit. |
| `L-ART01E-GATE` | ART-01E | I | `ALL(L-ART01E-INSPECT)` | Exterior-envelope screening report only | ≥100 members inspected, ≥70 pass, and every facade/roof/drainage/hardscape BOM/view need has viable source coverage. |
| `L-ART01F-DISCOVER` | ART-01F | W | — | One four-record `assets/catalog/candidates/context/{batch}.json` plus evidence prefixes | Four original-page vegetation/garden/street/neighbor-context candidates fill one assigned workset without padding. |
| `L-ART01F-INSPECT` | ART-01F | W | `SAME(L-ART01F-DISCOVER)` | Matching immutable inspection overlay/cache/evidence only | Licence/format/scale/alpha/LOD/context suitability is complete or normalized rejection explicit. |
| `L-ART01F-GATE` | ART-01F | I | `ALL(L-ART01F-INSPECT)` | Context screening report only | ≥100 members inspected, ≥70 pass, and every garden/service/street/neighbour PVS layer has viable coverage. |
| `L-ART01D-SCORE` | ART-01D | W | — | One `assets/catalog/selection/proposals/{batch}.json` for four disjoint inspected hard-screen-pass IDs | Compute score from recorded facts, cite BOM uses/edit cost/reuse/case value, and emit immutable eligible/rejected score events; no acceptance write. |
| `L-ART01D-GAP` | ART-01D | I | `ALL(L-ART01D-SCORE)` | Deterministic selection/gap report only | Ranked candidates reveal every required BOM hole, style/scale outlier, licence risk and import-case coverage gap. |
| `L-ART01D-CURATE` | ART-01D | I | `L-ART01D-GAP` | `assets/catalog/accepted.json` only | Lead selects 240–300 coherent 3D IDs, 40–56 art-image IDs and 48–72 materials with reasons/room/exterior/physics uses; exactly 40 3D records carry pilot flags. |
| `L-ART01D-GATE` | ART-01D | I | `L-ART01D-CURATE` | Curation evidence/report only | Typed accepted sets validate separately, source bytes are pinned, category/room/exterior/material/physics quotas hold and the 40-model pilot spans real cases. |
| `L-AST02A-MATRIX` | AST-02A | I | — | `assets/catalog/selection/pilot-40.json` only | Exactly 40 accepted IDs cover importer edge cases plus ≥8 exterior, ≥6 foliage/context and ≥6 movable models. |
| `L-AST02A-QMSH-WRITER` | AST-02A | W | `L-AST02A-MATRIX` | `tools/assets/qmsh_writer.dart`, focused fixtures/tests | Minimal deterministic v1 finite/bounds/index/material encoding matches pixeldart's decoder and rejects corrupt/overflow/pathological input. |
| `L-AST02A-MODEL-WRITER` | AST-02A | W | `L-AST02A-QMSH-WRITER` | `tools/assets/model_writer.dart`, focused descriptors/tests | Stable multi-part `model.json` paths/materials/bounds/hash schema round-trips with sorted fields. |
| `L-AST02A-NORMALIZE` | AST-02A | W | `L-AST02A-MODEL-WRITER` | One enumerated `assets-src/models/{id}/**`, `build/model-pilot/{id}.json` | One source becomes metres/Y-up/explicit-pivot/normals/UV/material split with transformation and input/output hashes. |
| `L-AST02A-CONVERT` | AST-02A | W | `SAME(L-AST02A-NORMALIZE)` | One enumerated pilot QMSH/model output under ignored pilot root plus shard report | QMSH v1 decodes to finite expected bounds/counts/material parts twice byte-identically; corruption mutants fail. |
| `L-AST02A-REPORT` | AST-02A | I | `ALL(L-AST02A-CONVERT)` | `build/model-pilot/report.json`, format recommendation evidence only | Expanded/deduped vertices, indices, materials/textures, output/package bytes/time and turntables decide v1 versus explicit v2 work. |
| `L-AST02A-BRIDGE` | AST-02A | I | `L-AST02A-REPORT` | Exactly one selected tracked `assets-src/models/{id}/**`, `web/res/models/{id}/**`, `assets/runtime-manifest.d/model-pilot.json` | After the report ratifies the format, one accepted representative model is rebuilt into final tracked paths and decodes byte-identically; a required v2 keeps the parent blocked until its separately bounded writer amendment lands. |
| `L-AST02B-INCREMENTAL` | AST-02B | W | — | `tools/assets/incremental.dart`, focused cache/atomic fixtures | Content-keyed changed-only output reuses accepted AST-02A writers, uses atomic replace, deletes known stale outputs and never touches unknown file. |
| `L-AST02B-PREVIEW` | AST-02B | W | — | `tools/assets/turntable.dart`, fixed camera/light metadata/tests | Stable model turntable manifest and metrics generate without vendor-fragile pixel equality. |
| `L-AST02B-LOD-PROPOSE` | AST-02B | W | — | One immutable `assets/catalog/production/lod-proposals/{id}.json`, tool fixture | Deterministic tool/version records projected-size LOD candidates and before/after bounds/triangles/error; it never mutates or accepts source automatically. |
| `L-AST02B-PROXY-PROPOSE` | AST-02B | W | — | One immutable `assets/catalog/production/proxy-proposals/{id}.json`, tool fixture | Bounds/volume/COM/inertia plus ≤4-box/sphere/capsule static/dynamic proxy suggestion is finite, conservative and requires C/G acceptance. |
| `L-AST02B-CLI` | AST-02B | I | `L-AST02B-INCREMENTAL`, `L-AST02B-PREVIEW`, `ALL(L-AST02B-LOD-PROPOSE)`, `ALL(L-AST02B-PROXY-PROPOSE)` | `tools/models.dart`, converter gate entries only | `normalize`, `convert --changed`, `lod --propose`, `collision --propose`, `turntable`, `report` pass two cold trees and corruption/unknown-output fixtures. |
| `L-ART02-SCHEMA` | ART-02 | W | — | `assets/house/schema.json`, `tools/assets/house_schema.dart`, fixtures | Kit/placement transforms, snap, material, bounds, scale, collision and importance fields validate finitely. |
| `L-ART02-KIT-WORKSET` | ART-02 | W | `L-ART02-SCHEMA` | One immutable `assets/house/kits.d/{family}/{workset}.json` plus ≤3 enumerated normalized model dirs | One measured end/corner/straight or exterior-detail workset has explicit snap/material/proxy/LOD rules and turntables. |
| `L-ART02-KIT-MERGE` | ART-02 | I | `ALL(L-ART02-KIT-WORKSET)` | Six sorted `assets/house/kits/{family}.json` aggregates and exact-set report | Trim, openings, fireplace/alcove, stair, panels/surfaces, cellar/services/exterior families contain every required workset once. |
| `L-ART02-KIT-GATE` | ART-02 | I | `L-ART02-KIT-MERGE` | Kit report/contact sheet only | All families snap without forbidden gap/overlap/z-fight, preserve opening dimensions and read at 384×216. |
| `L-ART03-ROOM-BASE` | ART-03 | W | — | `assets/house/rooms/{room}/base.json`, private fixed camera record | One room has focal composition, architecture, proxy furniture, clear portal/stair/opening sweeps and stable visibility groups. |
| `L-ART03-ROOM-BOUNDS` | ART-03 | W | `SAME(L-ART03-ROOM-BASE)` | New `lib/house/art_bounds/{room}.dart`, matching pure test | Only genuinely structural projections create simple finite canonical bounds; trim/clutter stay nonblocking. |
| `L-ART03-EXTERIOR-BASE` | ART-03 | W | — | One `assets/house/exterior/{cell}/base.json` only | One view-only envelope/roof/ground/service/street/context cell has measured bounds, PVS/LOD group and no invented aperture/traversal. |
| `L-ART03-THRESHOLD` | ART-03 | W | — | One `assets/house/thresholds/{id}.json` only | Canonical window/door/cellar threshold matches immutable opening dimensions, inside/outside layers, collision/query and view rules. |
| `L-ART03-PVS` | ART-03 | W | `ALL(L-ART03-EXTERIOR-BASE)`, `ALL(L-ART03-THRESHOLD)` | One `assets/house/verification/pvs/{camera}.json` | A frozen room/window/threshold/ration-run camera names exactly required cells, preload neighbors and LOD ranges; invisible cells are absent. |
| `L-ART03-HOUSE-BASE` | ART-03 | I | `ALL(L-ART03-ROOM-BASE)`, `ALL(L-ART03-ROOM-BOUNDS)`, `ALL(L-ART03-EXTERIOR-BASE)`, `ALL(L-ART03-THRESHOLD)` | House-art loader/barrel, shared camera index and base report | Eight rooms plus view-only exterior cells compose deterministically; canonical rooms/portals/windows/stairs/apertures/measurements remain unchanged. |
| `L-ART03-VERIFY-MATRIX` | ART-03 | I | `L-ART03-HOUSE-BASE`, `ALL(L-ART03-PVS)` | `assets/house/verification/routes.json`, `targets.json`, sorted cameras/PVS/aperture facts | Every portal/stair is bidirectional; full capsule, thresholds, interactions, 11/9/10→11 windows, cells and Q24 variants are enumerable before fan-out. |
| `L-ART03-GATE` | ART-03 | I | `L-ART03-VERIFY-MATRIX` | Base-house collision/route/contact evidence only | Offline bounds and runtime collision agree; every frozen route/target/camera resolves against the same canonical geometry. |
| `L-ART04-BULK-MODELS` | ART-04 | W | — | One enumerated accepted `assets-src/models/{id}/**`, `web/res/models/{id}/**`, shard report | One final model normalizes/converts/turntables twice byte-identically and meets per-asset bounds/material/resource checks. |
| `L-ART04-ART-SOURCE` | ART-04 | W | — | Bound `assets-src/art/{id}/source.*`, `source.json`, tracked `recipe.json` for each enumerated ID | Open item bytes/hash/object metadata/crop/fit/frame intent are build-reproducible; no private recipe or search thumbnail. |
| `L-ART04-ART-DERIVE` | ART-04 | W | `SAME(L-ART04-ART-SOURCE)` | Enumerated `web/res/textures/art/{id}.*`, derivative reports only | EXIF/crop/rotate/sRGB/downscale preserve aspect, emit one point-sampled no-mip content hash and reproduce exact bytes. |
| `L-ART04-ROOM-SHARD` | ART-04 | W | — | One immutable `assets/house/rooms/{room}/dress/{layer}/{shard}.json` containing ≤4 bound placements | Assigned architecture/furniture/surface/floor/wall/micro/story items claim named anchors/sockets once, meet BOM intent and preserve focal/route/story hierarchy. |
| `L-ART04-ROOM-PHYSICS` | ART-04 | W | — | One immutable `assets/house/rooms/{room}/dress/physics.d/{batch}.json` containing ≤4 accepted placement IDs | Integer body/joint/interaction/recovery facts match model pivot/proxy, start clear, settle/recover safely and never make progression pickable without decision. |
| `L-ART04-ROOM-GATE` | ART-04 | I | `ALL(L-ART04-ROOM-SHARD)`, `ALL(L-ART04-ROOM-PHYSICS)` | Per-room exact-set/composition/contact metadata only | Combined room meets typed BOM/density bands, unique anchors/IDs/proxies, ≥2 safe pickups where applicable, credible reuse and no repeated spray. |
| `L-ART04-EXTERIOR-CELL` | ART-04 | W | — | One immutable `assets/house/exterior/{cell}/{layer}/{shard}.json` with ≤4 bound placements | Assigned facade/roof/front-step/service-yard/garden/street/neighbor shard has measured authored detail, visibility/LOD, no fake traversal and no repeated spray. |
| `L-ART04-EXTERIOR-GATE` | ART-04 | I | `ALL(L-ART04-EXTERIOR-CELL)` | Exterior exact-count/contact/resource report only | All frozen exterior cameras and window/threshold views have a coherent late-Victorian envelope within cell budgets. |
| `L-ART04-MERGE` | ART-04 | I | `ALL(L-ART04-BULK-MODELS)`, `ALL(L-ART04-ART-DERIVE)`, `ALL(L-ART04-ROOM-GATE)`, `L-ART04-EXTERIOR-GATE` | `assets/runtime-manifest.d/models-house.json` and house report only | Exact 240–300 models, 604–922 interior dress/frame, 260–410 architecture and 455–720 exterior/context placements resolve to accepted hashes with separate variant/expanded counts. |
| `L-ART04-COLLISION` | ART-04 | I | `L-ART04-MERGE`, `TASK(PHY-02)` | `lib/house/furnishing_collision.dart`, `lib/house/collision.dart`, focused mutation test | Extend the frozen player/physics query API; runtime/offline consume identical sorted solid/soft/interaction proxies and sockets without replacing controller truth. |
| `L-ART04-GATE` | ART-04 | I | `L-ART04-COLLISION` | Furnished-house aggregate evidence only | Models, placements, exterior cells, sockets, runtime proxies and exact count formulas fingerprint one merged build. |
| `L-ART05A-ROUTE` | ART-05A | W | — | One ignored route result shard for a bound record from `routes.json` | Bound named route uses the frozen full capsule through both directions/variants with deterministic first collision; it never authors the route. |
| `L-ART05A-INTERACTION` | ART-05A | W | — | One ignored reachability result for a bound record from `targets.json` | Assigned target is reachable, visible and unobscured from a valid player pose under every frozen relevant variant. |
| `L-ART05A-PHYSICS` | ART-05A | W | — | One ignored manipulation result for a bound pickable/joint/recovery record from `targets.json` | Public focus→grab/use→move/rotate→drop/throw→recover succeeds and the assigned route/story target remains reachable. |
| `L-ART05A-APERTURE` | ART-05A | W | — | One ignored aperture/Q24 result shard | Bound window/door/stair fact preserves house 11, inside-observable 9 and opposite 10→11 truth across data/collision/PVS/render. |
| `L-ART05A-VIEW` | ART-05A | W | — | One ignored artifact/result for a frozen camera/PVS record | Expected cells/LOD layers are visible, unexpected cells absent, and clean-daylight image includes the required foreground/midground/background anchors. |
| `L-ART05A-LOD` | ART-05A | W | — | One ignored two-sided LOD transition artifact | Bound model class is captured above/below projected-size threshold plus hysteresis return, with stable silhouette/material/resource counts. |
| `L-ART05A-STATS` | ART-05A | W | — | `tools/house/resource_report.dart`, focused synthetic tests | Per-room-pair placements/draws/triangles/materials/textures/live handles and package totals exact-match fixture. |
| `L-ART05A-CONTACT` | ART-05A | I | `L-ART05A-STATS` | Contact artifacts driven by tracked camera files only | Clean daylight first, then gas/final profile captures every room wall/focal point and exterior elevation/cell; expected build/camera IDs embedded. |
| `L-ART05A-GATE` | ART-05A | I | `ALL(L-ART05A-ROUTE)`, `ALL(L-ART05A-INTERACTION)`, `ALL(L-ART05A-PHYSICS)`, `ALL(L-ART05A-APERTURE)`, `ALL(L-ART05A-VIEW)`, `ALL(L-ART05A-LOD)`, `L-ART05A-CONTACT` | Evidence only | Route, interaction/physics, aperture, PVS/LOD, resource/perf and approved art artifacts all fingerprint the same furnished build. |
| `L-ART05B-OVERRIDE` | ART-05B | W | — | One Q24-specific house rebuild fixture and artifact shard | Bound override removes old detail, regenerates affected architecture/dress/bounds and preserves corroborators/reachability. |
| `L-ART05B-GATE` | ART-05B | I | `ALL(L-ART05B-OVERRIDE)` | Q24 comparison report/contact artifacts only | All five states and save/resume variants agree across data, collision, interaction and render with no stale placement. |
| `L-AST03-SOURCE` | AST-03 | W | — | One immutable `assets/catalog/audio/{family}/{batch}.json`, enumerated source dirs | Assigned door/knock/footstep/room-ambience or wood/metal/ceramic/glass/paper/cloth impact-intensity family has lawful source/hash/metadata and usable variants. |
| `L-AST03-MAP` | AST-03 | W | `ALL(L-AST03-SOURCE)` | One logical-family mapping fragment | Surface/door/room and material-pair light/medium/hard impact keys map deterministic variants/cooldowns/fallbacks with no unused clip. |
| `L-AST03-GATE` | AST-03 | I | `ALL(L-AST03-MAP)` | `assets/runtime-manifest.d/audio.json`, strict audio report only | Exact nonempty source/catalog/fragment/files equality, decode/duration/loudness/channel/rate checks pass offline. |
| `L-AUD01-PLAN` | AUD-01 | W | — | `scripts/tts/plan.py` or exact existing planner, plan fixtures | Pure `--plan-json` emits nonempty stable visitor unit IDs, speaker/tone/text/settings/source digests. |
| `L-AUD01-CHECK` | AUD-01 | W | `L-AUD01-PLAN` | `scripts/tts/check.py` or exact existing checker, audio fixtures | Plan/clip manifest/files exact equality catches empty/extra/missing/stale/silent/undecodable/wrong metadata. |
| `L-AUD01-GATE` | AUD-01 | I | `L-AUD01-CHECK` | VO gate configuration only | Queue hash and expected clip set derive from plan; 291 existing files cannot pass through a zero-plan loophole. |
| `L-AUD02-RENDER` | AUD-02 | W | — | Four enumerated `web/res/vo/{clip}.ogg`, one immutable attempt result fragment | Render only missing bound units; each output decodes, matches voice/settings/text digest and records hash/metrics. |
| `L-AUD02-REVIEW` | AUD-02 | W | `SAME(L-AUD02-RENDER)` | One batch review fragment only | Cue/tone/set coverage and audible clipping/silence/pronunciation outliers are accepted or specifically rerendered. |
| `L-AUD02-MERGE` | AUD-02 | I | `ALL(L-AUD02-REVIEW)` | `assets/runtime-manifest.d/voice.json`, consolidated voice-plan report only | Frozen queue hash equals exact files; all visitor-only units have one valid clip and no unplanned output remains. |
| `L-AUD03A-EVENT` | AUD-03A | W | — | New `lib/game/audio_event.dart`, focused pure test | Immutable event has logical key, sequence, source room/position, seed and no WebAudio/runtime handle. |
| `L-AUD03A-SELECT` | AUD-03A | W | `L-AUD03A-EVENT` | New `lib/game/audio_selector.dart`, focused fixtures | Same event/catalog snapshot selects same variant; absent family uses named fallback without consuming extra RNG. |
| `L-AUD03A-OCCLUSION` | AUD-03A | W | `L-AUD03A-EVENT` | New `lib/house/acoustics.dart`, focused portal tests | Open/closed/multi-portal attenuation and reverb-room facts are finite, monotonic and renderer-neutral. |
| `L-AUD03A-STATE` | AUD-03A | W | `L-AUD03A-EVENT` | New `lib/game/audio_state.dart`, focused save/state tests | Gesture/mute/focus/music/last-event snapshot is deterministic and contains no node/buffer. |
| `L-AUD03A-GATE` | AUD-03A | I | `L-AUD03A-SELECT`, `L-AUD03A-OCCLUSION`, `L-AUD03A-STATE` | Audio-event export and evidence only; no `session.dart` write | Pure event sequence/selection/occlusion/save fixtures pass with mutation coverage; GAM-09 alone joins any session-facing semantic event. |
| `L-AUD03B-CONTENT-MAP` | AUD-03B | I | — | `assets/runtime-manifest.d/audio-map.json` plus exact validator | Every runtime key resolves, every shipped clip is reachable or explicitly non-runtime, and fallbacks are complete. |
| `L-AUD03B-ENGINE` | AUD-03B | I | `L-AUD03B-CONTENT-MAP` | `lib/engine/audio.dart`, narrowly named WebAudio adapter test | Gesture creates graph once; listener/source/filter/reverb updates change only on events/room state, not per frame. |
| `L-AUD03B-WIRE` | AUD-03B | I | `L-AUD03B-ENGINE` | `web/main.dart` audio event seam and no other entrypoint code | Canonical events alone trigger voice/music/knock/step/ambience; mute/focus/resume/fallback stay observable. |
| `L-AUD03B-BROWSER` | AUD-03B | I | `L-AUD03B-WIRE` | Audio browser scenarios/artifacts only | Near/far, same/other room, open/closed, gesture/mute/focus and all visitor families measured on real audio path. |
| `L-AST01B-RECONCILE` | AST-01B | I | — | O/build-generated `web/res/manifest.json`, strict audit report only | Sorted domain fragments compile exactly; catalogue/accepted/manifest/files/hash/licence/provenance are nonempty/exact with zero unknown orphan. |
| `L-AST01B-OFFLINE` | AST-01B | O | `L-AST01B-RECONCILE` | Clean ignored cache/output roots only | Clean accepted checkout builds/boots offline without `tmp`, Blender, login, source site or unhashed byte. |

#### Save/domain, pure systems, content, and UI recipes

`lib/game/session.dart`, `lib/config.dart`, and `web/main.dart` are serial join seams.
Worker leaves create narrowly named modules/tests; only the listed integrator leaf
may join them. Frozen old save fixtures are append-only. A later migration adds new
fixtures rather than rewriting historical bytes.

| Leaf recipe | Parent | Class | After | Write/create boundary | Exact completion probe |
| --- | --- | --- | --- | --- | --- |
| `L-GAM00-CODEC` | GAM-00 | W | — | `lib/game/save.dart`, `tools/test_save_v2.dart`, frozen v1/v2 fixtures | v1→v2 is idempotent; canonical equivalent JSON is byte-identical; future/non-finite/runtime types fail closed. |
| `L-GAM00-STORE` | GAM-00 | W | `L-GAM00-CODEC` | `lib/game/save_store.dart`, `lib/game/browser_save_store.dart`, focused transaction test | Active/previous rotation is atomic; encode/write failure changes neither slot; corrupt recovery is deterministic. |
| `L-GAM00-DOMAIN` | GAM-00 | W | `L-GAM00-CODEC` | New `lib/game/domain_snapshot.dart`, focused snapshot test | Immutable canonical facts cover calendar/economy/journal/house/content/features/second-run with stable order. |
| `L-GAM00-PRESENTATION` | GAM-00 | W | `L-GAM00-DOMAIN` | New `lib/game/presentation_snapshot.dart`, focused boundary test | Deep finite immutable scalars/IDs only; no engine/web/WebGL/WebAudio/pixeldart import or object. |
| `L-GAM00-EVENT` | GAM-00 | W | `L-GAM00-DOMAIN` | New `lib/game/domain_event.dart`, focused codec test | Stable event kind/sequence/room/position/selection seed round-trip canonically without handle/timer/closure. |
| `L-GAM00-HOUSE` | GAM-00 | W | `L-GAM00-CODEC`, `L-GAM00-DOMAIN` | `lib/house/state.dart`, focused save-v2 house fixture | Exact authored ID sets, overrides and mantle history round-trip; missing/extra IDs and emitted geometry fail. |
| `L-GAM00-SESSION` | GAM-00 | I | `L-GAM00-STORE`, `L-GAM00-PRESENTATION`, `L-GAM00-EVENT`, `L-GAM00-HOUSE` | `lib/game/session.dart`, focused session-v2 integration test | Fresh/save/restore snapshots match; all existing Q15/session/stand-in/Q24 tests stay green. |
| `L-GAM00-GATE` | GAM-00 | I | `L-GAM00-SESSION` | Gate record/evidence only | Exact save/session suite passes twice; removed-field/reordered-event/runtime-handle mutants fail. |
| `L-PHY00-SHAPES` | PHY-00 | W | — | New `lib/physics/shapes.dart`, focused finite/overlap/sweep tests | Sphere/capsule/dynamic compounds of ≤4 boxes validate finite poses/bounds/sweeps; convex is static-query-only and render meshes are forbidden. |
| `L-PHY00-MATH` | PHY-00 | W | — | New `lib/physics/math.dart`, focused transform/inertia/quaternion tests | Canonical quaternion sign, inertia, transforms and tick quantization are finite/idempotent at coincident and extreme inputs. |
| `L-PHY00-BROADPHASE` | PHY-00 | W | `L-PHY00-SHAPES` | New `lib/physics/broadphase.dart`, focused cell/order tests | Stable-ID spatial cells emit the same unique candidate pairs independent of insertion/map order. |
| `L-PHY00-CONTACT-ROUND` | PHY-00 | W | `L-PHY00-MATH`, `L-PHY00-SHAPES` | New `lib/physics/contact_round.dart`, analytic fixtures | Sphere/capsule against sphere/capsule/box returns stable finite normal/depth/point at coincident/zero-speed cases. |
| `L-PHY00-CONTACT-BOX` | PHY-00 | W | `L-PHY00-MATH`, `L-PHY00-SHAPES` | New `lib/physics/contact_box.dart`, SAT/tie fixtures | Box/compound/static proxy contacts choose deterministic minimum axis/tie-break and reject true separation. |
| `L-PHY00-SWEEP` | PHY-00 | W | `L-PHY00-CONTACT-ROUND`, `L-PHY00-CONTACT-BOX` | New `lib/physics/sweep.dart`, tunnelling/earliest-TOI fixtures | Fast carried/thrown supported shapes stop at the earliest finite hit against walls/floor/props on one 120 Hz tick. |
| `L-PHY00-SOLVER` | PHY-00 | I | `L-PHY00-BROADPHASE`, `L-PHY00-SWEEP` | New `lib/physics/solver.dart`, focused contact/energy tests | One step per canonical 120 Hz tick uses fixed iterations, finite clamps/friction/restitution and bounded energy with deterministic ordering. |
| `L-PHY00-JOINTS` | PHY-00 | W | `L-PHY00-SOLVER` | New `lib/physics/joints.dart`, focused hinge/slider/lever-limit tests | Constrained bodies respect authored axes/limits and cannot gain energy or cross a blocked house proxy. |
| `L-PHY00-CARRY` | PHY-00 | W | `L-PHY00-SOLVER`, `L-PHY00-SWEEP` | New `lib/physics/carry_constraint.dart`, focused grab/drop/throw tests | One spring carry anchor obeys reach/force/torque/distance/throw clamps, swept collision and safe blocked release. |
| `L-PHY00-SLEEP-RECOVER` | PHY-00 | W | `L-PHY00-SOLVER` | New `lib/physics/recovery.dart`, sleep/OOB/forbidden-route tests | Stable thresholds sleep/wake bodies; NaN/OOB/stuck/route-blocking states recover by authored policy without energy or story soft-lock. |
| `L-PHY00-GATE` | PHY-00 | I | `L-PHY00-JOINTS`, `L-PHY00-CARRY`, `L-PHY00-SLEEP-RECOVER` | Physics kernel gate fragment/evidence only | Frame-partition, insertion-order, anti-tunnelling, sleep/wake/recovery, limit and mutation suites pass with zero non-finite state. |
| `L-INP01-ACTIONS` | INP-01 | W | — | New `lib/engine/input_actions.dart`, focused action-edge tests | Remappable move/look/run/crouch/jump/use/grab/drop/rotate/range/throw/cancel actions emit one stable edge/held/value stream. |
| `L-INP01-PROFILE` | INP-01 | W | `L-INP01-ACTIONS` | New `lib/engine/control_profile.dart`, binding schema/tests | Mouse/keyboard/controller defaults and hold/toggle/accessibility alternatives validate with no required mouse-only action or duplicate chord. |
| `L-INP01-SAMPLER` | INP-01 | I | `L-INP01-ACTIONS` | `lib/engine/input.dart`, focused RAF/fixed-tick/focus tests | Mouse delta and action edges are consumed exactly once across 120 Hz substeps; focus loss/pointer unlock clears held state; debug shader reload cannot steal context-bound `R`. |
| `L-INP01-TARGET` | INP-01 | W | — | New `lib/game/interaction_target.dart`, strict descriptor/snapshot tests | Kind/state/reach/query/prompt/binding/highlight/recovery IDs are immutable finite data with no DOM/renderer type. |
| `L-INP01-RAY` | INP-01 | W | `L-INP01-TARGET`, `TASK(PHY-00)` | New `lib/house/query_shape.dart`, pairwise ray/sweep tests | Reuse PHY-00 box/sphere/capsule/static-convex query truth; surface hitT/masks/occlusion are finite and no duplicate geometry math appears. |
| `L-INP01-FOCUS` | INP-01 | W | `L-INP01-RAY` | New `lib/sim/interaction_focus.dart`, focus/LOS/hysteresis tests | Direct centre-ray hits precede cone assist; semantic priority→hitT→angle→ID ordering emits exactly one stable snapshot or none. |
| `L-INP01-CONTROLLER` | INP-01 | W | `L-INP01-SAMPLER` | New `lib/game/player_control.dart`, focused capability tests | Walk/run/crouch/jump capabilities are explicit; unsupported motion is disabled and camera bob never changes authoritative aim. |
| `L-INP01-PROMPT` | INP-01 | I | `L-INP01-PROFILE`, `L-INP01-CONTROLLER`, `L-INP01-FOCUS` | `lib/ui/prompt.dart`, focused semantic/highlight model tests | Prompt uses current binding, icon/text/state/reason and non-color semantic cue; unavailable/disabled/high-contrast cases remain truthful. |
| `L-INP01-GATE` | INP-01 | I | `L-INP01-PROMPT` | Input/focus gate fragment/evidence only | Keyboard, mouse and controller traces agree at action level; occlusion/tie/flicker/binding/semantic mutants fail. |
| `L-DECQ24-DIAGRAM` | DEC-Q24-00 | O | — | Decision artifacts only, no code | For each unresolved beat, diagram observable event, mundane explanation, data/save/collision/render/detail consequences. |
| `L-DECQ24-COMPARE` | DEC-Q24-00 | O | `L-DECQ24-DIAGRAM` | Decision comparison only | Options explicitly score deniability, recognizability, canonical-geometry risk, art rebuild and testability. |
| `L-DECQ24-PUBLISH` | DEC-Q24-00 | O | `L-DECQ24-COMPARE` | Immutable unbiased option packet/evidence only | Packet exposes complete Days 17/18/20 choices and consequences without selecting them; its gate can accept before it becomes the prerequisite for separate owner decisions. |
| `L-GAM02-OVERRIDE` | GAM-02 | W | — | One new `lib/house/overrides/day_{day}.dart`, matching pure fixture | Bound Day 15/17/18/19/20 override is unobserved, idempotent, finite, keyed by authored IDs and renderer-neutral. |
| `L-GAM02-STATE` | GAM-02 | W | `ALL(L-GAM02-OVERRIDE)` | `lib/house/drift.dart`, `lib/house/state.dart`, focused persistence test | Apply/rebuild/save/resume order is canonical; missing/duplicate/inapplicable override fails visibly. |
| `L-GAM02-GATE` | GAM-02 | I | `L-GAM02-STATE` | Q24 pure integration fixture/report only | All five overrides agree across effective data/collision/interaction/save; decorative render proof remains ART-05B. |
| `L-GAM03A-DRAUGHT` | GAM-03A | W | — | New `lib/sim/draught.dart`, focused graph test | One portal-derived connected-space stream handles door/window/open/closed and zero-distance cases finitely. |
| `L-GAM03A-MANTLE` | GAM-03A | W | — | New `lib/sim/mantle_economy.dart`, focused transaction test | Hour/gas/light transaction is atomic; unaffordable/spare/duplicate actions refuse with stable semantic events. |
| `L-GAM03A-EVENTS` | GAM-03A | W | `L-GAM03A-DRAUGHT`, `L-GAM03A-MANTLE` | New `lib/game/gaslight_state.dart`, focused snapshot/event test | Logical flame/light/shadow/mote/hiss weights derive from one stream and survive canonical save/resume. |
| `L-GAM03A-GATE` | GAM-03A | I | `L-GAM03A-EVENTS` | Gaslight feature export and pure integration test only; no `session.dart` | Door/mantle actions emit one ordered event set with no renderer/audio handle or duplicated RNG. |
| `L-GAM04A-WEATHER` | GAM-04A | W | — | `lib/sim/weather.dart`, focused 21-day schedule test | Seeded rain/daylight schedule is finite and identical across fresh/save/resume; all 21 days covered. |
| `L-GAM04A-TEMPERATURE` | GAM-04A | W | `L-GAM04A-WEATHER` | New `lib/sim/temperature.dart`, focused room/outside test | Outside/room temperature and breath threshold derive deterministically without renderer/audio state. |
| `L-GAM04A-DAYLIGHT` | GAM-04A | W | `L-GAM04A-WEATHER` | `lib/sim/time.dart`, focused dawn/dusk/colour-fact test | Shortening-day and morning/noon/evening facts are monotonic/bounded and use saved simulation time only. |
| `L-GAM04A-GATE` | GAM-04A | I | `L-GAM04A-TEMPERATURE`, `L-GAM04A-DAYLIGHT` | Climate feature export and pure resume fixture only; no `session.dart` | Days 1–21 and checkpoints emit identical climate facts/events; presentation remains GAM-04B. |
| `L-GAM05A-HISTORY` | GAM-05A | W | — | New `lib/sim/mantle_history.dart`, focused append-only test | First-light order appends once, duplicate light is idempotent and canonical bytes survive 21-day save/resume. |
| `L-GAM05A-RUPTURE` | GAM-05A | W | `L-GAM05A-HISTORY` | `lib/sim/rupture.dart`, focused six-stage FSM test | Six ordered stages/durations/guard conditions/portal query/light order are exact and cannot trigger early. |
| `L-GAM05A-ENDING` | GAM-05A | W | `L-GAM05A-RUPTURE` | `lib/game/rupture_gate.dart`, focused earned-ending test | Only earned ending plus required state starts rupture once; resume continues same stage/time/order. |
| `L-GAM05A-GATE` | GAM-05A | I | `L-GAM05A-ENDING` | Rupture feature export and pure save fixture only; no `session.dart` | Full state machine and mantle history are deterministic; no geometry/renderer mutation occurs. |
| `L-GAM08A-WEIGHTS` | GAM-08A | W | — | New `lib/sim/tape.dart`, focused state-table test | Named video/audio weights derive from week/exhaustion/isolation with mostly-clean defaults and finite clamps. |
| `L-GAM08A-TRACKING` | GAM-08A | W | `L-GAM08A-WEIGHTS` | New `lib/game/tape_state.dart`, focused event/save test | Exactly one post-drift tracking event is sequence-ID stable and reduced motion changes declared weights only. |
| `L-GAM08A-GATE` | GAM-08A | I | `L-GAM08A-TRACKING` | Tape feature export and pure resume fixture only; no `session.dart` | Same state/save yields same weights/event; changed source dimension mutates only specified channels. |
| `L-GAM09-CONFIG` | GAM-09 | I | — | `lib/config.dart`, focused typed-feature-config test | All frozen feature defaults are finite, immutable and named once; later G/R workers consume without editing. |
| `L-GAM09-COMPOSE` | GAM-09 | W | `L-GAM09-CONFIG` | New `lib/game/feature_snapshot.dart`, focused composition test | Gas/climate/rupture/tape facts compose one immutable snapshot/event sequence without order-dependent mutation. |
| `L-GAM09-SESSION` | GAM-09 | I | `L-GAM09-COMPOSE` | `lib/game/session.dart`, `lib/game/save.dart`, one migration/feature-session integration test | Public actions/ticks update all four pure features once; save-v2 codecs/migrations persist their already-declared facts, and resume/event/snapshot bytes are canonical. |
| `L-GAM09-GATE` | GAM-09 | I | `L-GAM09-SESSION` | Aggregate pure/save mutation evidence only | Removing a field/event/config or reordering a feature fails; all prior session/save suites remain green. |
| `L-PHY01-BODY-SCHEMA` | PHY-01 | W | — | New `lib/game/physics_body.dart`, body/profile fixtures | Static/pickup/hinge/slider/lever records require stable IDs, simple shapes, mass/material/damping/sleep/carry/impact/persistence/recovery facts. |
| `L-PHY01-WORLD` | PHY-01 | W | `L-PHY01-BODY-SCHEMA` | New `lib/game/physics_world.dart`, focused activation/contact tests | Current+adjacent cell activation, max-awake policy and sorted events wrap PHY-00 without renderer/audio/session handles. |
| `L-PHY01-SNAPSHOT` | PHY-01 | W | `L-PHY01-WORLD` | New `lib/game/physics_snapshot.dart`, focused canonical-byte test | Previous/current quantized transforms, joints, active/sleep flags and focus-independent body IDs serialize canonically for presentation only. |
| `L-PHY01-EVENT` | PHY-01 | W | `L-PHY01-WORLD` | New `lib/game/physics_event.dart`, threshold/cooldown tests | Grab/drop/throw/impact/recover/joint events carry tick/sequence/IDs/room/quantized severity only, without renderer/audio handles or resting chatter. |
| `L-PHY01-STATE` | PHY-01 | I | `L-PHY01-WORLD` | New `lib/game/physics_state.dart`, `lib/game/save.dart`, migration/recovery tests | Sparse quantized deltas plus schema/default-transform digest round-trip; save-held safely drops/emits event; unknown/non-finite/out-of-bounds state rejects or recovers. |
| `L-PHY01-REPLAY` | PHY-01 | W | `L-PHY01-STATE`, `L-PHY01-EVENT` | New `lib/game/physics_replay.dart`, 30/60/144-RAF partition tests | Tick+sequence logical actions reproduce identical state/event digests; expected target IDs are checked and raw browser timing is absent. |
| `L-PHY01-CLI` | PHY-01 | I | `L-PHY01-REPLAY`, `L-PHY01-SNAPSHOT` | `tools/physics.dart`, deterministic synthetic/fuzz/minimize fixtures | `validate|matrix|simulate|fuzz|replay|minimize|report` emits stable digests and smallest failing seed/command/body subset. |
| `L-PHY01-GATE` | PHY-01 | I | `L-PHY01-CLI` | Physics state/save/replay gate fragment/evidence only | Two cold runs kill contact/carry/joint/order/save/default-digest/recovery/event/frame-partition mutants; old save fixtures stay green. |
| `L-PHY02-PROFILE` | PHY-02 | W | — | `assets/house/physics.schema.json`, initial profile fixtures | Interaction and body data validate class-specific fields, query masks, carry/joint limits, persistence and recovery. |
| `L-PHY02-ROOM` | PHY-02 | W | `L-PHY02-PROFILE` | One `assets/house/rooms/{room}/physics/{shard}.json` with ≤4 bound proxy placements | Assigned proxy props/doors/drawers/levers have honest modes, simple shapes and no story/route hazard. |
| `L-PHY02-LOAD` | PHY-02 | I | `ALL(L-PHY02-ROOM)` | New `lib/house/physics_loader.dart`, exact-set/runtime-collision test | Sorted authored bodies resolve to ART-03 placements and identical HouseCollision proxies; missing/extra/duplicate IDs fail. |
| `L-PHY02-REGISTRY` | PHY-02 | I | `L-PHY02-LOAD` | New `lib/house/interaction_registry.dart`, exact-set/collision tests | Canonical mantle/portal/window, CNT examination and physical targets merge once; cross-domain duplicate/orphan/proxy/recovery IDs fail. |
| `L-PHY02-PREFERENCES` | PHY-02 | W | — | New `lib/game/control_preferences.dart`, codec/default/reset tests | Remaps, sensitivity/invert, hold/toggle modes, highlight/high-contrast and reduced-motion override persist outside simulation saves. |
| `L-PHY02-SETTINGS-UI` | PHY-02 | W | `L-PHY02-PREFERENCES` | New `lib/ui/control_settings_panel.dart`, keyboard/focus tests | Every required action rebinds/resets with explicit conflict resolution and remains operable at 200% text without pointer lock. |
| `L-PHY02-CONTROLLER` | PHY-02 | W | `L-PHY02-REGISTRY` | New `lib/game/interaction_controller.dart`, focused public-action tests | Focus/use/grab/rotate/range/drop/throw/joint actions update PHY-01 once and emit stable interaction/impact events. |
| `L-PHY02-JOINT-BRIDGE` | PHY-02 | I | `L-PHY02-CONTROLLER` | New `lib/house/physical_joint_bridge.dart`, portal/draught/audio mutation tests | Hinge/slider state is the sole source for portal/drawer open/passable aperture, collision, acoustics, draught and door-audio thresholds; no parallel bool truth. |
| `L-PHY02-SESSION` | PHY-02 | I | `L-PHY02-JOINT-BRIDGE` | `lib/game/session.dart`, focused integration test | Session exposes physical interaction actions/snapshot/events without GPU/WebAudio handles or duplicated focus/physics state. |
| `L-PHY02-MAIN` | PHY-02 | I | `L-PHY02-SESSION`, `L-PHY02-SETTINGS-UI` | `web/main.dart`, one source browser scenario | Real pointer lock/buttons/wheel/keyboard alternate drive public actions; DOM only renders prompt/focus/settings snapshots and canvas context-menu is scoped. |
| `L-PHY02-GATE` | PHY-02 | I | `L-PHY02-MAIN` | Interaction browser/gate fragment only | Proxy-room focus, door, drawer, pickup, rotate, carry distance, drop, throw and reload pass with real input and no route block. |
| `L-GAM06-KERNEL` | GAM-06 | W | — | New `lib/game/scenario.dart`, focused kernel test | Public actions only, no wall time/private mutation, bounded step/day termination and first invalid action error. |
| `L-GAM06-REPORT` | GAM-06 | W | `L-GAM06-KERNEL` | New `lib/game/scenario_report.dart`, focused canonical report test | Machine/human reports have stable order/diffs and no timestamp, map-order leak or absolute path. |
| `L-GAM06-SYNTHETIC` | GAM-06 | W | `L-GAM06-REPORT` | One miniature deterministic scenario fixture/test | Synthetic actions/checkpoint/ending exercise the runner without claiming unfinished production content or feature coverage. |
| `L-GAM06-CLI` | GAM-06 | I | `L-GAM06-SYNTHETIC` | `tools/scenario_runner.dart`, focused CLI test and gate fragment | Two cold synthetic executions emit byte-identical summaries; mutations catch seed/action/checkpoint/event/day/termination changes. |
| `L-CNT01-SOURCE` | CNT-01 | W | — | New `lib/story/content_source.dart`, `lib/story/runtime_content.dart`, focused ID test | Every compiled content unit exposes a stable typed ID; duplicate/unknown/missing family fails. |
| `L-CNT01-LEDGER` | CNT-01 | W | `L-CNT01-SOURCE` | New `lib/game/content_ledger.dart`, focused save test | Pending/delivered IDs serialize canonically and a unit cannot silently disappear or double-deliver. |
| `L-CNT01-DOCUMENTS` | CNT-01 | W | `L-CNT01-SOURCE` | New `lib/game/document_runtime.dart`, focused documents/records test | `getDocument`/`getRecord` resolve only canonical IDs and record delivery/examination exactly once. |
| `L-CNT01-DAY` | CNT-01 | W | `L-CNT01-SOURCE` | New `lib/game/day_content.dart`, focused street/night test | `getStreet`/`getNights` selection/delivery is seed/day deterministic and survives resume. |
| `L-CNT01-EXAMINE` | CNT-01 | W | `L-CNT01-SOURCE`, `TASK(INP-01)` | New `lib/house/examination_catalog.dart`, focused target-descriptor test | Every examinable placement contributes one INP-01 target descriptor to the later unified registry; it never implements a second raycast/resolver. |
| `L-CNT01-MEMORY` | CNT-01 | W | `L-CNT01-SOURCE` | New `lib/game/memory_content.dart`, focused Day-17/19/return/second-run test | Citation, replay, journal return and intended carryover fire once under exact conditions. |
| `L-CNT01-TEXT-ADAPTER` | CNT-01 | W | `L-CNT01-SOURCE` | `lib/story/text.dart`, focused pure adapter test | Existing browser-loaded corpus implements content source without authoring/duplicating prose in Dart. |
| `L-CNT01-SESSION` | CNT-01 | I | `L-CNT01-LEDGER`, `L-CNT01-DOCUMENTS`, `L-CNT01-DAY`, `L-CNT01-EXAMINE`, `L-CNT01-MEMORY`, `L-CNT01-TEXT-ADAPTER`, `TASK(GAM-09)` | `lib/game/session.dart`, focused session-content test | Serially extends accepted feature session; public actions own delivery/examination and scenario sees every consumed ID. |
| `L-CNT01-MAIN` | CNT-01 | I | `L-CNT01-SESSION`, `TASK(BASE-03)` | `web/main.dart`, one unique runtime-content browser scenario only | Extend the accepted diagnostics baseline; real input reaches all content/object routes with no private state injection/readback. |
| `L-CNT02-AUDIT` | CNT-02 | W | — | `tools/content_reachability.dart`, mutation fixtures/test | Deterministic report names every unreachable/missing/duplicate content/drift gap and fails nonempty required gaps. |
| `L-CNT02-GAP` | CNT-02 | W | `L-CNT02-AUDIT` | One exact source file and bound `{day,family,gapIds}` from the report, no generated JSON | Close only one assigned content/reachability gap unit; corpus/parser/report pass without prose in Dart or collateral edits. |
| `L-CNT02-DRIFT` | CNT-02 | W | `L-CNT02-AUDIT` | `lib/journal/drift.dart`, focused Days 8–21 behavior test | Authored drift behavior exists/reaches intended days; no runtime prose or generated selection. |
| `L-CNT02-BUILD` | CNT-02 | I | `ALL(L-CNT02-GAP)`, `L-CNT02-DRIFT` | Generated text JSON through canonical build only | Text build is idempotent; exact Days 8–21 content set and reachability report have zero unexplained required gap. |
| `L-GAM10-ENDING` | GAM-10 | W | — | One bound production ending/second-run fixture | Compliance, erasure or synchronisation reaches exactly its ending and expected carryover through public actions. |
| `L-GAM10-CHECKPOINT` | GAM-10 | W | — | One bound Day 3/8/14/20 checkpoint fixture | Uninterrupted and resumed canonical state/event bytes match at the assigned checkpoint. |
| `L-GAM10-CONTENT` | GAM-10 | W | — | One bound visitor/arrival/content/feature coverage expectation shard | Assigned production IDs are observed exactly through reachable public flow, never a minimum-only count. |
| `L-GAM10-ECONOMY` | GAM-10 | W | — | One bound degenerate-choice fixture | Assigned gas/ration/hour/sleep/scrutiny/exhaustion/isolation extreme terminates without negative state, loop or soft-lock. |
| `L-GAM10-GATE` | GAM-10 | I | `ALL(L-GAM10-ENDING)`, `ALL(L-GAM10-CHECKPOINT)`, `ALL(L-GAM10-CONTENT)`, `ALL(L-GAM10-ECONOMY)` | Final canonical scenario gate fragment/evidence only | Two cold 21-day runs prove 22 visitors, 74 arrivals, all content/features/Q24/audio events, three endings, resume, second run and bounded degenerate choices. |
| `L-GAM07-SURFACE` | GAM-07 | W | — | One bound `lib/ui/{surface}.dart`, one unique keyboard/focus scenario | Journal/door/sleep/help/ending/broadcast/notice/prompt surface has semantics, tab order, Escape and no focus trap. |
| `L-GAM07-INPUT` | GAM-07 | I | — | Read-only input/a11y test and one pointer-lock recovery scenario | Verify accepted INP/PHY action sampling, keyboard/mouse/controller equivalence and focus/pointer recovery; do not reopen `lib/engine/input.dart`. |
| `L-GAM07-PANEL` | GAM-07 | W | — | `lib/ui/panel.dart`, focused pure/DOM contract test | Shared modal lifecycle restores prior focus, prevents hidden interaction and exposes readable semantics. |
| `L-GAM07-STYLES` | GAM-07 | I | `ALL(L-GAM07-SURFACE)`, `L-GAM07-PANEL` | `web/index.html`, `web/styles.css`, scale/reduced-motion scenario only | 100–200% text, narrow viewport and reduced motion remain readable without clipping/hidden information. |
| `L-GAM07-MAIN` | GAM-07 | I | `L-GAM07-INPUT`, `L-GAM07-STYLES` | `web/main.dart`, aggregate a11y scenario only | Every surface/action and door equivalence works through real input; diagnostics report focus/UI/pointer state. |
| `L-GAM07-GATE` | GAM-07 | I | `L-GAM07-MAIN` | Browser artifacts/evidence only | Source/package matrix passes keyboard, focus, scale, pointer recovery, semantics, reduced motion and comfort. |

#### Renderer/game adapters, feature presentation, acceptance, and release recipes

The entrypoint handoff is one-way: G finishes content/UI/audio baseline work, O
freezes `ACC-01A`, then `INT-00` grants `web/main.dart` to R. No G/C worker writes
the entrypoint after that point. Pixeldart's shared pipeline/demo remains a serialized
R seam. Feature-presentation workers own separate modules and scenario inputs only.

| Leaf recipe | Parent | Class | After | Write/create boundary | Exact completion probe |
| --- | --- | --- | --- | --- | --- |
| `L-INT00-FREEZE` | INT-00 | O | — | Baseline scenario/expectation hashes and evidence only | Accepted legacy SHA/build/actions/assertions/artifacts are immutable and all active G entrypoint leases are closed. |
| `L-INT00-HANDOFF` | INT-00 | O | `L-INT00-FREEZE` | Lease table via O only | Exact `web/main.dart`/adapter write set moves G→R at recorded SHA; UI scope and expected baseline stay fixed. |
| `L-INT01-DEPENDENCY` | INT-01 | O | — | `pubspec.yaml`, `pubspec.lock`, pixeldart gitlink only | Enforced lock resolves exact local pixeldart SHA; legacy build still compiles before adapter code. |
| `L-INT01-INTERFACE` | INT-01 | W | `L-INT01-DEPENDENCY` | New `lib/presentation/renderer_backend.dart`, boundary test | Renderer-neutral lifecycle/scene/frame/input types contain no legacy or pixeldart implementation type. |
| `L-INT01-LEGACY` | INT-01 | W | `L-INT01-INTERFACE` | New `lib/presentation/legacy_backend.dart`, mapping fixture | Existing renderer consumes identical snapshots/actions and preserves frozen baseline state/resource semantics. |
| `L-INT01-NEXT` | INT-01 | W | `L-INT01-INTERFACE` | New `lib/presentation/pixeldart_backend.dart`, mapping fixture | Pixeldart facade consumes the same boundary without simulation branch, hidden default or leaked GPU handle. |
| `L-INT01-SELECT` | INT-01 | W | `L-INT01-LEGACY`, `L-INT01-NEXT` | New `lib/presentation/backend_selector.dart`, focused query test | Default legacy and exact `?renderer=next` selection are explicit; unknown value fails/falls back as specified. |
| `L-INT01-MAIN` | INT-01 | I | `L-INT01-SELECT` | `web/main.dart`, two backend smoke scenarios only | Both backends boot from same public entry/actions/save; diagnostics identify backend/profile/build. |
| `L-INT02-DESCRIPTOR` | INT-02 | W | — | Pixeldart `assets/model_definition.dart`, focused descriptor/corruption test | Multi-part paths/materials/bounds/hashes parse strictly and cannot escape base URL. |
| `L-INT02-CACHE` | INT-02 | W | `L-INT02-DESCRIPTOR` | Pixeldart `assets/model_cache.dart`, focused fetch/dedup test | Concurrent identical load fetches once; hash/part failure is atomic and leaves no half-cached model. |
| `L-INT02-LIFECYCLE` | INT-02 | I | `L-INT02-CACHE` | Exact pixeldart mesh/material/texture store seams, focused loss/release test | Load/draw/release/restore returns exact live counts and rebuilds accepted model exactly once. |
| `L-INT02-BROWSER` | INT-02 | I | `L-INT02-LIFECYCLE` | Renderer demo scenario/artifacts only | One accepted multi-part model draws with provenance/materials/bounds under load/reload/loss/restore. |
| `L-INT02-HANDBACK` | INT-02 | O | `L-INT02-BROWSER` | Lease/evidence only | C/R changed paths and package SHA are accepted; pixeldart ownership returns exclusively to R. |
| `L-INT03-LOADER` | INT-03 | W | — | New `lib/presentation/house_scene.dart`, focused authored-data loader test | Base kit/room/model/placement IDs resolve deterministically with no duplicated canonical room geometry. |
| `L-INT03-CELLS` | INT-03 | W | `L-INT03-LOADER` | New `lib/presentation/house_cells.dart`, cache/readiness/eviction tests | Current+adjacent/PVS cells preload on portal approach, share model-cache references, evict exactly at zero owners, and keep readiness out of saves. |
| `L-INT03-ROOM` | INT-03 | W | `L-INT03-LOADER` | One `tools/browser/scenarios/house/{room}.json`, expected aperture/visibility fixture | Bound room proxy renders required focal/architecture pieces and matches canonical portal/window/stair IDs. |
| `L-INT03-ROUTE` | INT-03 | I | `L-INT03-CELLS`, `ALL(L-INT03-ROOM)` | Representative route scenario and house adapter seam only | Hall→kitchen→living→hall→landing→bedroom traverses actual collision/interaction apertures with correct portal/PVS cell loading and no state coupling. |
| `L-INT04-CONFIG-CHECK` | INT-04 | I | — | Read-only `lib/config.dart` boundary fixture | Accepted GAM-09 config contains every mapper input, no renderer type, and its digest is frozen for all sibling leaves. |
| `L-INT04-ENV` | INT-04 | W | `L-INT04-CONFIG-CHECK` | New `lib/presentation/environment_mapper.dart`, pure mapping test | Camera/daylight/fog/climate snapshot maps to pixeldart settings without simulation or renderer readback. |
| `L-INT04-GAS` | INT-04 | W | `L-INT04-CONFIG-CHECK` | New `lib/presentation/gaslight_mapper.dart`, pure mapping test | Mantle/draught facts map to light/flame/shadow/mote/hiss parameters with finite zero-distance behavior. |
| `L-INT04-WEATHER` | INT-04 | W | `L-INT04-CONFIG-CHECK` | New `lib/presentation/weather_mapper.dart`, pure mapping test | Rain/light-colour/breath facts map deterministically and cannot modify calendar/temperature. |
| `L-INT04-RUPTURE` | INT-04 | W | `L-INT04-CONFIG-CHECK` | New `lib/presentation/rupture_mapper.dart`, pure mapping test | Six-stage state maps to portal/light/effect parameters but never changes stage/order/earned state. |
| `L-INT04-TAPE` | INT-04 | W | `L-INT04-CONFIG-CHECK` | New `lib/presentation/tape_mapper.dart`, pure mapping test | Named video weights map to pixeldart VHS/history settings; audio weights remain semantic outputs. |
| `L-INT04-ADAPTER` | INT-04 | I | `L-INT04-ENV`, `L-INT04-GAS`, `L-INT04-WEATHER`, `L-INT04-RUPTURE`, `L-INT04-TAPE` | Pixeldart backend presentation seam, aggregate snapshot test | One immutable snapshot produces one between-frame configuration/event set with no duplicated game/audio logic. |
| `L-GAM03B-MODULE` | GAM-03B | W | — | New `lib/presentation/gaslight.dart`, isolated A/B scenario | Uses INT-04 mapping for flame warmth/locality/shadow/motes; no sim/config/entrypoint write. |
| `L-GAM03B-GATE` | GAM-03B | I | `L-GAM03B-MODULE` | Browser artifacts only | Daylight/gas/open/closed/cost/zero-distance/reduced-motion A/B passes on real adapter. |
| `L-GAM04B-MODULE` | GAM-04B | W | — | New `lib/presentation/climate.dart`, isolated A/B scenario | Three time colours, rain locality and cold-room breath consume climate facts only. |
| `L-GAM04B-GATE` | GAM-04B | I | `L-GAM04B-MODULE` | Browser artifacts only | Days/time/rain/cold cases are legible, local, comfortable and match pure schedule after resume. |
| `L-GAM05B-MODULE` | GAM-05B | W | — | New `lib/presentation/rupture.dart`, isolated stage scenario | Each stage uses existing geometry/portal override and first-light order; no state-machine logic duplicated. |
| `L-GAM05B-GATE` | GAM-05B | I | `L-GAM05B-MODULE` | Browser artifacts/resource report only | Six stages are ordered/legible, wrong portal works, personal lights extinguish correctly, no spike, reduced motion passes. |
| `L-GAM08B-VIDEO` | GAM-08B | W | — | New `lib/presentation/tape.dart`, isolated video A/B scenario | Chroma/jitter/noise/dropout/ghosting are individually switchable and mostly-clean defaults match pure weights. |
| `L-GAM08B-AUDIO` | GAM-08B | W | — | New tape-audio command mapper, focused pure/WebAudio command test | Bandwidth/wow/hiss commands derive only from audio weights, update on state events and honor mute/reduced motion. |
| `L-GAM08B-GATE` | GAM-08B | I | `L-GAM08B-VIDEO`, `L-GAM08B-AUDIO` | Browser/audio artifacts and cost report only | Fair tracking heartbeat, video/audio restraint, switches, comfort and measured resource/frame cost pass. |
| `L-PHY03-PROP` | PHY-03 | W | — | One immutable `assets/house/physics.d/{model-or-group}.json` for ≤4 final placements | Final model bounds/mass/material/proxy/socket/persistence/recovery facts match accepted source and authored transforms without widening routes. |
| `L-PHY03-MERGE` | PHY-03 | I | `ALL(L-PHY03-PROP)` | `assets/house/physics.json`, `assets/runtime-manifest.d/physics.json`, exact-set/body-digest report | Exactly 70–110 pickable placements plus authored joints resolve once into shipped data; all initial PHY-02 proxy IDs migrate or retain an explicit fixed reason. |
| `L-PHY03-DYNAMIC` | PHY-03 | W | `L-PHY03-MERGE` | New `lib/presentation/prop_scene.dart`, retained-lifecycle/interpolation test | Previous/current snapshots interpolate visually; only changed awake retained items update, sleeping/off-cell bodies allocate/update nothing and release exactly. |
| `L-PHY03-JOINT-SCENE` | PHY-03 | W | `L-PHY03-MERGE` | New `lib/presentation/joint_scene.dart`, mapping/lifecycle test | Door/drawer/lever visuals follow normalized authoritative joint state; render interpolation/readback never changes collision or passability. |
| `L-PHY03-HIGHLIGHT` | PHY-03 | W | `L-PHY03-MERGE` | New `lib/presentation/interaction_highlight.dart`, pure mapping/resource test | Pre-register one restrained tint/value-lift material variant per base material and update retained items only on focus transitions; no x-ray/pass/allocation. |
| `L-PHY03-IMPACT` | PHY-03 | W | `L-PHY03-MERGE` | New `lib/game/physics_audio_command.dart`, pure semantic-command test | Quantized impact/material events map to bounded logical audio commands with cooldown/priority and no solver/WebAudio/presentation coupling. |
| `L-PHY03-GATE` | PHY-03 | I | `L-PHY03-DYNAMIC`, `L-PHY03-JOINT-SCENE`, `L-PHY03-HIGHLIGHT`, `L-PHY03-IMPACT` | Final physics/presentation gate fragment only | Final body/runtime digest, retained dynamics/joints, focus material and impact mapping/resource ownership pass before full-scene aggregation. |
| `L-INT05-STATIC` | INT-05 | W | — | New `lib/presentation/static_scene.dart`, focused batching/resource test | House architecture/furniture share model/material handles, portal-cull by room and allocate nothing per frame. |
| `L-INT05-TRANSIENT` | INT-05 | W | — | New `lib/presentation/transient_scene.dart`, focused event-lifetime test | Visitors/particles/short effects are event-driven, bounded, released and absent from save/domain state. |
| `L-INT05-LIGHT` | INT-05 | W | — | New `lib/presentation/light_scene.dart`, focused light/material cap test | Day/gas/weather/rupture lights/material variants obey stable IDs, finite caps and no duplicate simulation. |
| `L-INT05-DIAGNOSTICS` | INT-05 | W | — | Pixeldart resource diagnostics adapter, 600-frame scenario | Public counts explain every live target/program/buffer/texture and stay flat across steady representative frames. |
| `L-INT05-MAIN` | INT-05 | I | `L-INT05-STATIC`, `L-INT05-TRANSIENT`, `L-INT05-LIGHT`, `L-INT05-DIAGNOSTICS` | `web/main.dart`, representative Days 1–3 pixeldart source/package scenarios | Full scene/event/presentation aggregation passes with stable resources, no unexplained allocation and no audio coupling. |
| `L-PHY04-FOCUS` | PHY-04 | I | — | Ignored real-input focus/highlight artifacts only | Near/far, cone edge, occluded, competing, disabled, high-contrast and text-only cases select/render the same target truthfully. |
| `L-PHY04-MANIPULATE` | PHY-04 | I | — | Ignored grab/rotate/range/drop/throw/door/drawer artifacts only | Mouse and keyboard/controller alternatives exercise all actions without clipping, stuck state, repeated edge or accidental debug command. |
| `L-PHY04-STATE` | PHY-04 | I | — | Ignored fixed-tick/save/recovery artifacts only | Frame partition, save-held drop, reload, room transition, Q24 rebuild and out-of-bounds recovery preserve exact body/story/route state. |
| `L-PHY04-PERF` | PHY-04 | I | — | Named-hardware 600-frame physics/resource evidence only | 70–110 authored pickables with ≤24 awake meet solver/allocation/draw/resource budgets in representative dense views. |
| `L-PHY04-GATE` | PHY-04 | I | `L-PHY04-FOCUS`, `L-PHY04-MANIPULATE`, `L-PHY04-STATE`, `L-PHY04-PERF` | Physics/controls acceptance evidence only | Source/package, legacy/next, input alternatives, save/replay, audio/highlight, route safety and performance fingerprint one build. |
| `L-INT06A-PREVIEW` | INT-06A | I | — | Preview selector/docs/diagnostic scenario only | Legacy remains default; next preview is documented, observable and frozen at one candidate SHA/build. |
| `L-INT06B-SWITCH` | INT-06B | O | — | Backend default selector only in isolated commit | Next becomes default; legacy query/deployment rollback remains; no feature/refactor rides the switch. |
| `L-INT06B-MATRIX1` | INT-06B | O | `L-INT06B-SWITCH` | Evidence only | First unchanged-scope full RC matrix passes source/package/save/art/audio/a11y/perf. |
| `L-INT06B-MATRIX2` | INT-06B | O | `L-INT06B-MATRIX1` | Evidence only | Second consecutive matrix passes from later clean candidate with same scope and retained rollback. |
| `L-INT06C-DELETE` | INT-06C | I | — | Exact legacy renderer/dead flag/dependency paths resolved by reference audit | Remove only old backend code after proving zero non-rollback reference; no pixeldart refactor. |
| `L-INT06C-GATE` | INT-06C | O | `L-INT06C-DELETE` | Verification/rollback evidence only | Static/browser/package/save and prior deployment rollback smoke pass; deletion commit is independently revertible. |
| `L-ACC01A-SPEC` | ACC-01A | W | — | `tools/browser/scenarios/acc01-days1-3.json`, immutable expectations | Frozen route uses public actions and asserts simulation/input/save/UI/build/readback facts without backend-private state. |
| `L-ACC01A-SOURCE` | ACC-01A | I | `L-ACC01A-SPEC` | Ignored source artifacts only | Legacy source run passes exact frozen scenario with expected build/backend and no errors. |
| `L-ACC01A-PACKAGE` | ACC-01A | I | `L-ACC01A-SOURCE` | Ignored package artifacts only | Same actions/expectations pass packaged; no scenario edit after source result. |
| `L-ACC01B-SOURCE` | ACC-01B | I | — | Ignored next-source artifacts only | Replay exact ACC-01A input/expectation digest; simulation/input/save identical and visual deltas explicitly measured. |
| `L-ACC01B-PACKAGE` | ACC-01B | I | `L-ACC01B-SOURCE` | Ignored next-package artifacts only | Package replay matches source/build identity and only O-approved visual/perf differences. |
| `L-ACC02-FULLRUN` | ACC-02 | I | — | Full-run/ending evidence namespace only | Three endings, exact visitors/arrivals/content/Q24/weather/tape/rupture coverage pass pure runner. |
| `L-ACC02-RESUME` | ACC-02 | I | — | Save/checkpoint/corruption evidence namespace only | Days 3/8/14/20, previous/corrupt recovery and second-run carryover match uninterrupted state/events. |
| `L-ACC02-REACH` | ACC-02 | I | — | Route/interaction/soft-lock evidence namespace only | Every required content/interaction/ending remains reachable under degenerate choices and furnished/Q24 variants. |
| `L-ACC02-BROWSER` | ACC-02 | I | `L-ACC02-FULLRUN`, `L-ACC02-RESUME`, `L-ACC02-REACH` | Representative transition scenarios/artifacts only | Critical week/ending/second-run transitions agree with pure reports through public browser input. |
| `L-ACC03-AUDIO` | ACC-03 | I | — | Spatial/voice/music evidence namespace only | Real gesture/mute/focus/fallback/near/far/open/closed and visitor coverage meet named thresholds. |
| `L-ACC03-A11Y` | ACC-03 | I | — | Keyboard/focus/text-scale/accessibility evidence namespace only | Every surface/route passes 100–200% text, semantics, no trap and pointer recovery. |
| `L-ACC03-COMFORT` | ACC-03 | I | — | Reduced-motion/photosensitivity/600-frame evidence namespace only | Motion deltas, finite/luminance/black/flash probes and no unexplained resource drift pass. |
| `L-ACC03-PERF` | ACC-03 | I | — | Named-hardware performance evidence namespace only | Exactly three post-warm-up runs meet ratified CPU/GPU/draw/triangle/texture/resource/package ceilings. |
| `L-ACC03-PARITY` | ACC-03 | I | `L-ACC03-AUDIO`, `L-ACC03-A11Y`, `L-ACC03-COMFORT`, `L-ACC03-PERF` | Dev/package comparison report only | Same build/input/state across modes; every difference classified and linked to an approved cause. |
| `L-REL00-CLOSURE` | REL-00 | O | — | Read-only validator report/evidence | Every non-deferred P0/P1/P2 row except release successors is accepted or has explicit owner waiver and rationale. |
| `L-REL01-CLEAN` | REL-01 | O | — | Fresh clean worktree and ignored outputs only | Enforced locks, offline double build, exact dist, no maps/network/tmp/floating tool and correct build ID. |
| `L-REL01-STATE` | REL-01 | O | `L-REL01-CLEAN` | Save/offline scenario artifacts only | Fresh/clear/corrupt/previous/three endings/second run and cache-offline boot pass exact accepted artifact. |
| `L-REL01-CANDIDATE` | REL-01 | O | `L-REL01-STATE` | Signed candidate evidence only | Candidate path/hash/tree/build ID and rollback point are immutable; no later gate recompiles it. |
| `L-REL02-TOOLING` | REL-02 | O | — | External CLI install/link state only, no secret-bearing tracked file | Install Vercel CLI, authenticate/link/pull safely and record sanitized versions/project without exposing credentials. |
| `L-REL02-PREBUILT` | REL-02 | O | `L-REL02-TOOLING` | Exact production prebuilt wrapper/output from accepted candidate only | Prebuilt tree references the accepted bytes/build ID and does not start a second compile path. |
| `L-REL02-DEPLOY` | REL-02 | O | `L-REL02-PREBUILT` | External deployment and ignored evidence only | Deploy prebuilt; smoke build ID/assets/headers/save/offline/cache/logs and capture deployment/artifact hashes. |
| `L-REL03-REVIEW` | REL-03 | O | — | Owner review artifact only | Required closure, waivers, limitations, rollback and exact deployment/candidate are presented without hidden red gate. |
| `L-REL03-RELEASE` | REL-03 | O | `L-REL03-REVIEW` | Tag/release metadata only after explicit owner approval | Signed tag/release references exact accepted commit/deployment; no rebuild or scope change. |

### Active and reserved leases

| Lease | Task/owner | Repository/worktree/base | Exact write set | State |
| --- | --- | --- | --- | --- |
| `LEASE-RP3-A` | `REN-03A`, lane R | pixeldart existing checkout at `9ffedf4` | `lib/rendering/api/capabilities.dart`; `lib/rendering/passes/dof.dart`; `grade.dart`; `ps1.dart`; `vhs.dart` | **ACTIVE**—preserve current bytes; no overlapping format/reset/edit. |
| `RESERVE-O` | O | primary game/docs worktrees | `tmp/MASTERPLAN.md`; root locator; archive banners; compact evidence; `dist/**`; locks; gitlinks | Permanent exclusive integration reservation. |

No other implementation lease is active. A `READY` task is still not admitted if
its lane already has an active task or its proposed write prefix overlaps a
reservation.

### Control and baseline

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CTL-01 | Durable master-plan cutover | O/game+docs | P0 | **LANDED–VERIFY** | — | `G-CTL-01` | `EV-PLAN-LOCAL-20260801` | Review and separately commit the current depth deltas on top of root `f7a151d` and docs `35b919f`, then rerun plan/card/link/diff/DAG checks from a clean extraction and promote compact evidence. |
| CTL-02 | Three-repository state and RP-3 preservation hold | O/all | P0 | **ACCEPTED** | — | `G-CTL-02` | `EV-STATE-20260801` | — |
| CTL-03 | Isolated C/G worktrees and base/branch checkpoint | O/game | P0 | **BLOCKED** | CTL-01, CTL-02 | `G-CTL-03` | — | Create ignored worktrees, exclude them from recursive tooling, record branches/base SHAs, and prove no shared dirty path was copied. |
| BASE-01 | Dated pure game baseline | G/game | P0 | **ACCEPTED** | — | `G-BASE-01` | `EV-GAME-PURE-20260801` | — |
| AUT-01 | Plan parser, validator, lease CAS, frozen worksets and minimal dispatcher | G/game | P0 | **BLOCKED** | CTL-03 | `G-AUT-01` | — | Implement the §4 command/schema contract, master locator and mutation-checked invalid states. |
| AUT-02 | Gate DAG, aggregate verifier, resumable structured evidence | G/game | P0 | **BLOCKED** | AUT-01 | `G-AUT-02` | — | Implement direct-argv execution, fingerprints, independent-gate continuation, artifacts and promotion rules. |
| BLD-01 | Singular tracked build graph, enforced locks, cache policy, double-build/dist guard | O/game | P0 | **BLOCKED** | CTL-03 | `G-BLD-01` | — | Remove ignored-doc/network/global-tool/floating-compiler dependencies and make all generated checks mandatory. |
| AUT-06 | Public diagnostics and owned-process browser scenario runner | G/game | P0 | **BLOCKED** | AUT-02, BLD-01 | `G-AUT-06` | — | Add versioned diagnostics/readback and source/package scenarios that fail on wrong build, errors, darkness, or disallowed software adapters. |
| AUT-08 | Cross-harness self-tests and mutation fixtures | G/game | P0 | **BLOCKED** | AUT-01, AUT-02, AUT-06, BLD-01 | `G-AUT-08` | — | Prove every failure/retry/resume/cleanup/dist/browser branch named in §4. |
| AUT-09 | Bounded autopilot batch/worktree/collection/convergence loop | O+G/game | P1 | **BLOCKED** | AUT-02, AUT-08, CTL-03 | `G-AUT-09` | — | Automate deterministic disjoint batch preparation, immutable handoff collection, proposal convergence, typed gaps and verified worktree retirement without self-approval. |
| AUT-07 | Shared CI plus manual hardware release lane | O/game+pixeldart | P1 | **BLOCKED** | AUT-08, AUT-09 | `G-AUT-07` | — | Make CI call the same profiles, pin inputs/actions, upload artifacts always, and require hardware evidence for release. |
| BASE-02 | Truthful deterministic packaged artifact | O/game | P0 | **BLOCKED** | AUT-02, AUT-08, BLD-01 | `G-BASE-02` | — | Build twice, compare trees, replace `dist/web` once, and prove tracked dist exactly represents committed inputs. |
| BASE-03 | Dev/package browser baseline | G/game | P0 | **BLOCKED** | AUT-06, AUT-08, BASE-02 | `G-BASE-03` | — | Prove both builds reach 120 frames with build/adapter/readback/input evidence and no uncaught or stale-bundle fault. |
| BASE-04 | Pixeldart full static/size gate | R/pixeldart | P0 | **READY** | CTL-02 | `G-BASE-04` | — | After the active R packet yields, split the two oversized tests or ratify a test-only cap; run exact-set format/analyze/test/boundary/size/shader checks. |
| DOC-01 | Canonical-master/archive/root-locator cutover | O/docs+game | P0 | **BLOCKED** | CTL-01 | `G-DOC-01` | — | Make `tmp/MASTERPLAN.md` the sole authority, preserve archives with banners, and make root/tool discovery fail clearly when companion docs are absent. |
| DOC-02 | Final public/operator documentation reconciliation | O/docs+game+pixeldart | P2 | **BLOCKED** | AST-01B, AUD-03B, BLD-01, PHY-04, REN-08 | `G-DOC-02` | — | Update public/runtime/package instructions only after final behavior, commands, counts and archives are accepted; no copied status survives. |
| PERF-01 | Supported browser/adapter and measured payload/frame/resource budget | O+G/game | P1 | **BLOCKED** | BASE-03 | `G-PERF-01` | — | Record target hardware/engines and binary CPU/GPU p50/p95, draw, triangle, texture, live-resource, warm-up, and package ceilings before final dressing. |

### Pixeldart completion

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REN-00 | RP-0 single renderer tree | R/pixeldart+game | P1 | **ACCEPTED** | — | `G-REN-00` | `EV-RP0` | — |
| REN-01 | RP-1 skip-path draw assertions | R/pixeldart | P1 | **ACCEPTED** | REN-00 | `G-REN-01` | `EV-RP1` | — |
| REN-02 | RP-2 `TextureStore` | R/pixeldart | P1 | **ACCEPTED** | REN-00 | `G-REN-02` | `EV-RP2` | — |
| REN-03A | RP-3 parameterized post-chain/capability patch | R/pixeldart | P0 | **ACTIVE** | REN-01, REN-02 | `G-REN-03A` | `LEASE-RP3-A` | Existing owner finishes/hands off only the five leased files; then grant a separate test-only lease and run the combined clean gate without reopening those bytes. |
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
| AST-01A | Tracked asset catalogue/fetch/licence foundation | C/game | P0 | **BLOCKED** | CTL-03 | `G-AST-01A` | — | Define exact catalogue↔manifest↔filesystem checks, pin current bytes and ship full licence texts without archived-tool dependencies. |
| ART-00 | Late-Victorian construction/occupancy art bible and room/threshold/exterior BOM | C/game | P1 | **BLOCKED** | AST-01A | `G-ART-00` | — | Turn every canonical zone into required/optional categories, quantity bands, dimensions, era evidence, material palette, hero/story exclusions and search terms. |
| ART-01A | Scout interior architecture/opening/service candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01A` | — | Inspect 120 members and hard-screen 84 across trim/stairs/fireplaces/windows/doors/panels/tile/cellar services with original-page evidence. |
| ART-01B | Scout furniture/large-fixture candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01B` | — | Inspect 120 members and hard-screen 84 across seating/tables/beds/storage/range/bath/washstand/lighting/utility functions. |
| ART-01C | Scout interior decor/clutter/movable props and open art | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01C` | — | Inspect 140 3D members/98 passes plus 80 art sources/56 passes across lived detail, physics suitability and every room layer. |
| ART-01E | Scout exterior envelope/roof/threshold/hardscape candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01E` | — | Inspect 100 source members and hard-screen 70 covering facade, sash/bay/porch, roof/chimney/drainage, paths/walls/railings and service thresholds. |
| ART-01F | Scout garden/street/vegetation/neighbor-context candidates | C/game | P1 | **BLOCKED** | ART-00 | `G-ART-01F` | — | Inspect 100 source members and hard-screen 70 covering planting, service-yard residue, street furniture and view-only neighboring silhouettes/interiors. |
| ART-01D | Curate and pin the coherent shipped collection | C/game | P1 | **BLOCKED** | ART-01A, ART-01B, ART-01C, ART-01E, ART-01F | `G-ART-01D` | — | Score era/region fit, silhouette, purpose, licence, format/material/physics cases, size, reuse and edit cost; accept 240–300 typed 3D, 40–56 art and 48–72 materials without BOM/PVS holes. |
| AST-02A | Representative 40-model normalization/QMSH pilot, tracked bridge and format recommendation | C/game | P1 | **BLOCKED** | ART-01D | `G-AST-02A` | — | Land minimal writers, cover importer/exterior/foliage/movable cases, measure v1, and track one accepted bridge only after the format is ratified. |
| AST-02B | Incremental bulk normalization/conversion/turntable producer | C/game | P1 | **BLOCKED** | AST-02A, PERF-01 | `G-AST-02B` | — | Apply the ratified payload/resource decision, then implement hash-keyed atomic `models.dart` commands, multi-material descriptors, corruption fixtures, changed-only builds, and two-cold-run byte equality. |
| ART-02 | Modular late-Victorian interior/exterior architectural kit | C/game | P1 | **BLOCKED** | ART-01D, AST-02A | `G-ART-02` | — | Build/normalize trim, openings, reveals, cornices, fireplaces, stairs, panels, facade/roof/drainage and boundary modules with measured snap/variant rules. |
| ART-03 | Renderer-neutral room/exterior base compositions, collision proxies, verification matrices and PVS | C+G/game | P1 | **BLOCKED** | ART-02, GAM-00, INP-01, PHY-00 | `G-ART-03` | — | Author eight proxy rooms plus view-only exterior cells/thresholds, clearances, canonical apertures/PVS, simple collision policies and fixed cameras before full dressing. |
| ART-04 | Full model conversion and authored interior/exterior dressing | C+G/game | P1 | **BLOCKED** | AST-02B, ART-03, INT-03, PHY-02 | `G-ART-04` | — | Land 240–300 reusable models and 1,300–2,050 purposeful typed placements with coherent era layering, shared resources, physics proxies, LOD/cell visibility and no procedural spray. |
| ART-05A | Furnished-house/exterior navigation, interaction, PVS/LOD/contact-sheet, and performance proof | C+G/game | P1 | **BLOCKED** | ART-04, INT-05, PERF-01 | `G-ART-05A` | — | Consume frozen matrices to sweep routes/targets/views, prove aperture/PVS/LOD/resource truth, and review clean-daylight interior/exterior contact sheets. |
| ART-05B | Q24-aware detail rebuild and evidence preservation | C+G/game | P1 | **BLOCKED** | ART-05A, GAM-02 | `G-ART-05B` | — | Prove each house override rebuilds affected detail/collision consistently without moving, hiding, or invalidating authored corroborators. |
| AST-03 | Licensed door/knock/footstep/ambience/prop-impact vocabulary | C/game | P1 | **BLOCKED** | AST-01A | `G-AST-03` | — | Source/author, pin, measure, manifest and map deterministic surface/door/room plus material-pair impact/intensity families. |
| AUD-01 | Non-vacuous frozen VO plan/checker | C/game | P0 | **BLOCKED** | CTL-03 | `G-AUD-01` | — | Add pure `--plan-json`, nonempty exact plan↔clip-manifest↔files checks, source/settings digests, decode/audio metadata and empty/extra/silent/stale fixtures. |
| AUD-02 | Final visitor-only VO corpus | C/game | P1 | **BLOCKED** | AST-01A, AUD-01 | `G-AUD-02` | — | Freeze the queue hash, render missing units in bounded batches, inspect the cue/tone/set matrix, pin outputs, and derive truth from the plan—not a hand-maintained count. |
| AUD-03A | Deterministic semantic audio event/runtime contract | G/game | P1 | **BLOCKED** | GAM-00, PHY-00 | `G-AUD-03A` | — | Define logical keys, listener/room snapshots, source position, portal occlusion, deterministic variants, physics impacts, music/mute/gesture state, and pure event tests using fixtures. |
| AUD-03B | Final voice/spatial/music/knock/footstep browser wiring | C+G/game | P1 | **BLOCKED** | AST-03, AUD-02, AUD-03A, BASE-03, CNT-01 | `G-AUD-03B` | — | After runtime-content wiring, join canonical audio events and measure near/far/open/closed, fallback, gesture, mute/focus and visitor coverage without per-frame churn. |
| AST-01B | Final strict shipped-asset reconciliation | C+O/game | P0 | **BLOCKED** | ART-04, AST-03, AUD-02, BLD-01, PHY-03 | `G-AST-01B` | — | Require exact nonempty catalogue↔runtime manifests including physics↔filesystem equality, hashes/licences/generated provenance, no unverified orphan, and offline build/boot. |

### Game completion

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAM-01 | Existing pure simulation spine | G/game | P1 | **ACCEPTED** | — | `G-GAM-01` | `EV-GAME-PURE-20260801` | — |
| GAM-00 | Save-v2 migration plus renderer-neutral domain/presentation/audio snapshots | G/game | P0 | **BLOCKED** | CTL-03, GAM-01 | `G-GAM-00` | — | Version atomic saves and freeze immutable facts/events before weather, rupture, Q24, audio and adapters compete for the same state. |
| PHY-00 | Canonical-tick constrained small-body physics kernel | G/game | P0 | **BLOCKED** | GAM-00 | `G-PHY-00` | — | Implement finite stable-order simple-shape contacts, sweeps, joints, carry constraint, sleeping and recovery on the existing 120 Hz tick. |
| INP-01 | Remappable player actions, fixed-tick sampling, watched-target focus and prompt contract | G/game | P0 | **BLOCKED** | GAM-00 | `G-INP-01` | — | Replace hard-coded key/query priority with one action stream and shared reach/LOS/hysteresis resolver; consume mouse/wheel edges exactly once. |
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
| GAM-09 | Serial pure-feature/config/session convergence — consolidated design | G/game | P0 | **BLOCKED** | GAM-03A, GAM-04A, GAM-05A, GAM-08A | `G-GAM-09` | — | Freeze typed config once, compose feature snapshots/events, and make one session/save join so parallel pure parents never collide on `session.dart` or `config.dart`. |
| PHY-01 | Persistent physics bodies/events/replay and sparse save-v2 convergence | G/game | P0 | **BLOCKED** | GAM-09, INP-01, PHY-00 | `G-PHY-01` | — | Bind authored body profiles to the pure kernel, persist sparse moved-state safely, and prove replay/recovery without runtime handles. |
| GAM-06 | Deterministic scenario-runner kernel/report/CLI — consolidated design | G/game | P0 | **BLOCKED** | GAM-00 | `G-GAM-06` | — | Land the pure bounded runner against a miniature synthetic fixture without prematurely claiming final production coverage. |
| CNT-01 | Runtime content consumers and examination seams | G/game | P1 | **BLOCKED** | GAM-00, INP-01 | `G-CNT-01` | — | Wire documents/records/street/nights and register placed examination targets with the shared focus query; add Day-17 citation, Day-19 replay, journal return, and second-run text through canonical APIs. |
| CNT-02 | Days 8–21 drift/content coverage and reachability | G/game | P1 | **BLOCKED** | CNT-01, GAM-06 | `G-CNT-02` | — | Author/validate remaining drift behavior and prove every intended content unit has a reachable consumer in deterministic full-run summaries. |
| GAM-10 | Final production scenario, ending, checkpoint, physics, and content closure | G/game | P0 | **BLOCKED** | AUD-03A, CNT-02, GAM-02, GAM-06, GAM-09, PHY-01 | `G-GAM-10` | — | Materialize bounded production coverage shards, then prove exact visitors/arrivals/content/features/physics events, checkpoints, endings, second run and degenerate-choice termination. |
| PHY-02 | Amnesia-like browser controls, focus affordance, joints, pickup/drop/throw and session join | C+G/game | P0 | **BLOCKED** | ART-03, AUD-03B, BASE-03, GAM-09, INP-01, PHY-01 | `G-PHY-02` | — | Bind proxy bodies, then wire real pointer-lock/mouse/wheel/keyboard alternatives and the one pre-handoff physical-control entrypoint. |
| GAM-07 | Keyboard/focus/text-scale/reduced-motion/a11y browser suite | G/game | P1 | **BLOCKED** | BASE-03, PHY-02 | `G-GAM-07` | — | Verify the final G entrypoint after content/audio/physics controls, exercising every surface, pointer recovery, equivalence, scale, semantics, traps/escape and comfort. |

### Renderer/game convergence

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INT-00 | Freeze legacy web/UI/audio/content baseline and hand `web/main.dart` from G to R | O/game | P0 | **BLOCKED** | ACC-01A | `G-INT-00` | — | Record the accepted post-content/UI/audio baseline SHA/scenarios, close every G/C entrypoint lease, then grant R the exact adapter write set without reopening their scope. |
| INT-01 | RV-11 game renderer adapter and `?renderer=next` switch, legacy default | R/game | P1 | **BLOCKED** | GAM-00, INT-00, REN-08 | `G-INT-01` | — | Add the path dependency and map immutable snapshots behind unchanged/documented game seams; smoke both backends. |
| INT-02 | RV-13A representative QMSH/material asset bridge | C+R/pixeldart | P1 | **BLOCKED** | AST-02A, REN-08 | `G-INT-02` | — | Load/draw/release/restore one accepted multi-part model with provenance and exact resource counts, then hand ownership back to R. |
| INT-03 | RV-10 representative furnished house route | R/game | P1 | **BLOCKED** | ART-03, INT-01, INT-02 | `G-INT-03` | — | Render hall→kitchen→living→hall→landing→bedroom with proxy architecture/furniture and prove apertures agree with interaction/collision. |
| INT-04 | RV-12 renderer-neutral presentation adapter | R/game | P1 | **BLOCKED** | GAM-09, INT-03 | `G-INT-04` | — | Consume the serially integrated immutable feature snapshot and map camera/environment/post/weather/tape/rupture into pixeldart with no simulation/audio logic. |
| PHY-03 | Final physical-prop, joint, watched-highlight, and impact presentation | C+G+R/game | P1 | **BLOCKED** | ART-04, INT-04, PHY-02 | `G-PHY-03` | — | Reconcile 70–110 final pickable placements, map retained transforms/joints/focus/impacts, and prove resource ownership before full-scene aggregation. |
| INT-05 | RV-13B full production scene/asset/transient/light/physics aggregation | R/game | P1 | **BLOCKED** | ART-04, GAM-03B, GAM-04B, GAM-05B, GAM-08B, INT-04, PHY-03 | `G-INT-05` | — | Pass representative Days 1–3 on pixeldart in dev/package with stable scene/physics resources, no unexplained frame allocation, and no renderer/audio coupling. |
| INT-06A | Complete next-renderer preview | R+O/game | P0 | **BLOCKED** | INT-05 | `G-INT-06A` | — | Keep legacy default; expose documented preview/backend diagnostics and freeze an acceptance candidate. |
| INT-06B | Make next default while retaining legacy rollback; observe two RC matrices | O/game | P0 | **BLOCKED** | ACC-01B, ACC-02, ACC-03 | `G-INT-06B` | — | Switch default in a separate commit, retain rollback query/deployment point, and accept two consecutive unchanged-scope matrices. |
| INT-06C | Separate legacy renderer deletion | R+O/game | P0 | **BLOCKED** | INT-06B | `G-INT-06C` | — | Remove old renderer/dead flags/dependencies only, then rerun static, browser, package, save, and rollback-point smoke. |

### Final acceptance and release

| ID | Outcome / detailed source | Lane | P | Status | Depends | Gate | Evidence | One next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACC-01A | Final pre-handoff legacy Days 1–3 dev/package baseline | G/game | P0 | **BLOCKED** | GAM-07 | `G-ACC-01A` | — | After content/audio/UI entrypoint joins, run the critical legacy route and freeze its scenario/actions/assertions/artifacts. |
| ACC-01B | Next-backend Days 1–3 parity | G+R/game | P0 | **BLOCKED** | ACC-01A, INT-06A | `G-ACC-01B` | — | Replay the frozen route in dev/package; accept only approved visual/perf differences and identical simulation/input/save outcomes. |
| PHY-04 | Final physical-controls/highlight/save/recovery/performance acceptance | G+R/game | P0 | **BLOCKED** | ART-05A, GAM-07, INT-05, PHY-03 | `G-PHY-04` | — | Run real-input focus/manipulation/joint/save/recovery and 600-frame dense-body evidence across source/package and legacy/next semantics. |
| ACC-02 | Full 21-day/three-ending/second-run player proof | G/game | P0 | **BLOCKED** | ART-05B, GAM-04B, GAM-05B, GAM-10, INT-06A, PHY-04 | `G-ACC-02` | — | Combine final production scenario/physics closure with representative browser transitions and prove M4 without dead content, state loss, or soft-lock. |
| ACC-03 | Presentation/audio/accessibility/comfort/physics/performance proof | G+C+R/game | P1 | **BLOCKED** | ART-05A, AUD-03B, GAM-03B, GAM-07, GAM-08B, INT-06A, PERF-01, PHY-04 | `G-ACC-03` | — | Run isolated A/B, real-adapter/audio/physics, 600-frame, keyboard/focus/text/reduced-motion, resource, and package parity gates. |
| REL-00 | All pre-release required-scope closure audit | O/all | P0 | **BLOCKED** | ACC-01B, ACC-02, ACC-03, AST-01B, AUT-07, BASE-01, DOC-01, INT-06C | `G-REL-00` | — | Have the plan validator reject any non-deferred P0/P1/P2 row other than REL-00, REL-01, REL-02, and REL-03 without accepted evidence or an explicit owner waiver. |
| REL-01 | Clean-checkout offline release candidate | O/game | P0 | **BLOCKED** | REL-00 | `G-REL-01` | — | Enforce locks, build twice, compare dist, serve offline, clear/corrupt/restore saves, run endings/second run, and prove no production source maps. |
| REL-02 | Vercel prebuilt deployment and production smoke | O/game | P1 | **BLOCKED** | REL-01 | `G-REL-02` | — | Install CLI, link/pull safely, emit the exact production prebuilt artifact, deploy it, and verify build ID, assets, headers, saves, offline/cache behavior, and logs. |
| REL-03 | Owner ship decision/tag/release | O+Owner/all | P0 | **BLOCKED** | REL-02 | `G-REL-03` | — | Review required closure, waivers, limitations and rollback; release only the exact accepted candidate. |

### Evidence index

| Evidence | Scope and location |
| --- | --- |
| `EV-PLAN-LOCAL-20260801` | Local candidate: initial root/docs cutover commits are `f7a151d`/`35b919f`; current depth deltas pass local master/PLAN/TODO authority, 79-task/6-decision/281-leaf grammar/DAG/coverage, card extraction, table/link and diff checks. It supports `LANDED–VERIFY`; current-delta SHAs plus a clean rerun are still required. |
| `EV-STATE-20260801` | Initial state: game `65f30da`, docs `16c992e`, pixeldart `9ffedf4` plus the exact five dirty paths. Planning advanced to game `f7a151d`/docs `35b919f`; the current depth delta touches only the named planning/card files, while pixeldart remains the same five-path preservation set. |
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
- The curated house/context contains 240–300 reusable models and approximately
  1,300–2,050 typed active placements, with the master-local room/exterior identities,
  architectural kit, PVS/LOD and physical-prop contracts;
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
| A large asset hunt becomes an untraceable download folder | 580 inspected 3D members plus art/material sources | Frozen four-member worksets, original-page licence capture before download, lead-only promotion, CAS cache, typed BOM/gap reports and circuit-bounded rescout. |
| More house/exterior detail breaks play or performance | 240–300 models and about 1,300–2,050 placements surround an eight-room chamber game | Proxy/PVS layouts first; explicit collision/physics classes; route/target/window/LOD sweeps; cell budgets/streaming; clean-daylight contacts; Q24 rebuild. |
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
   owner, worktree/base SHA, plan digest, bound leaf, exact read/write/create/deny
   sets, steps, and gate. Use the compare-and-swap claim once `AUT-01` exists; set
   exactly the parent row to **ACTIVE** and add the materialized leaf lease.
3. One write set has one owner. Parallelize only disjoint materialized leaves; a
   recipe without complete bindings is not dispatchable.
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
    return the bound-leaf handoff schema in §4; O validates source/input/spec
    fingerprints and exact changed paths, integrates leaves, runs the parent gate,
    promotes compact evidence, releases leases, and then admits the next packet.
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
