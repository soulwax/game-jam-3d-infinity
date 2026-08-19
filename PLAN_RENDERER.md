# THE QUARANTINE — RENDERER COMPLETION PLAN

> Status: proposed engineering plan, not yet ratified
>
> Repository audit: 2026-08-19 (game `main` @ `a71b726`, `external/pixeldart` submodule)
>
> Scope: the Dart/WebGL2 rendering runtime only
>
> Audience: developers working directly on `external/pixeldart` and on the
> game's `lib/presentation/` seam

This document takes the renderer from the state it is actually in today to a
full-fledged renderer: one that shades, lights, shadows, composites, animates
and profiles a Victorian domestic interior at a stable frame budget, with every
claimed feature reachable from a real frame rather than from a unit test.

---

## 0. Authority, scope, and one open question

### 0.1 Authority order for this document

1. `external/docs/MASTERPLAN.md` owns product intent and human acceptance.
2. `external/docs/RENDERER-ELEVATION-PLAN.md` owns the renderer architecture
   vocabulary (§6.2 graph rules, §8.x per-feature sections). This plan uses that
   vocabulary and does not redefine it.
3. `external/docs/RENDERER-HANDOFF.md` owns the working rules: **the renderer
   lives in `external/pixeldart` and nowhere else.** Re-creating renderer files
   in the game tree is a rule violation.
4. This file owns the gap list, the packet order, and the acceptance checks for
   reaching "full-fledged".

### 0.2 The Unity question — must be answered before Phase B

`UNITY_PLAN.md` (committed 2026-08-18, one day before this audit) declares a
Unity 6.3 greenfield the production runtime and demotes the Dart/WebGL project
to "an algorithm and content reference only". If that decision stands, Phases B
through E below are wasted effort and this plan should be reduced to Phase A
(hygiene and truthful documentation) plus a reference-extraction pass.

**This plan assumes the Dart/WebGL renderer remains a shipping target.** That
assumption is stated here rather than buried, because it is the single largest
lever on whether any of this work is worth doing. Resolve it with the project
owner before Phase B opens. Phase A is worth doing under either answer.

### 0.3 Non-goals

- Moving game rules into the renderer. The simulation stays authoritative;
  the renderer consumes immutable frames.
- A deferred or clustered-forward rewrite. The forward path is adequate for a
  house-scale scene; the gaps below are about correctness and coverage, not
  about the shading architecture being wrong.
- Ray tracing, hardware mesh shaders, or WebGPU. WebGL2 is the target.

---

## 1. Where the renderer actually is

There are three distinct bodies of rendering code in this tree. Only one of them
runs.

### 1.1 Production: `external/pixeldart` (~23 300 LOC under `lib/rendering/`)

A retained-mode scene renderer with a validated pass graph. The game reaches it
through `web/main.dart` → `lib/presentation/backend_factory.dart` →
`PixeldartBackend` → a `RendererRuntime` implemented in `web/main.dart` that
calls `beginFrame`/`endFrame` directly against the package.

`lib/presentation/backend_factory.dart:12-19` now *throws* for any non-Pixeldart
selection. There is no second live backend.

### 1.2 Dead: the legacy renderer in the game tree (~3 400 LOC + 11 shaders)

| File | LOC | Reachable? |
| --- | --- | --- |
| `lib/engine/renderer_core.dart` | 1676 | no |
| `lib/engine/shaders.dart` | 614 | no |
| `lib/engine/gl.dart` | 350 | no |
| `lib/engine/passes.dart` | 236 | no |
| `lib/engine/world_program_bindings.dart` | 227 | no |
| `lib/engine/shadow.dart` | 185 | no |
| `lib/engine/programs.dart` | 67 | no |
| `lib/engine/renderer.dart` | 7 | no |
| `shaders/*.vert`, `shaders/*.frag` | 11 files | no |

The only importer of `lib/engine/renderer.dart` is `lib/house/emitter.dart`,
and `RoomEmitter` has **zero call sites** anywhere in `lib/`, `web/`, or
`tools/`. The whole subtree is unreachable from a running frame.

It is also actively misleading, because it still contains defects that a reader
will assume are live problems:

- `lib/engine/renderer_core.dart:557` allocates a `Uint16List` index buffer of
  `0..n-1` — no deduplication benefit, and silent wraparound above 65 535
  vertices.
- `lib/engine/renderer_core.dart:740,771` creates **and deletes a GL buffer per
  instanced draw, per frame**.
- `_bindInstanceAttributes` leaves `vertexAttribDivisor(…, 1)` set on the shared
  static VAO; a later non-instanced `drawStatic` on the same handle inherits it.
- `enableFrustumCull = false` in `lib/config.dart:110`, so its frustum code
  never runs.

None of this matters to the shipping build. All of it costs reader time and
`dart analyze` surface. See packet **R-A1**.

### 1.3 Inert: 62 pure-Dart "feature" modules under `lib/presentation/`

Of 63 files in `lib/presentation/`, exactly one (`renderer_gui_surface.dart`)
imports `package:web` or `dart:js_interop`. The rest are parameter objects and
policy calculators with unit tests and no binding to any shader, pass, or GL
object:

`screen_space_reflections.dart`, `cascaded_shadow_maps.dart`,
`volumetric_fog_inscattering.dart`, `temporal_anti_aliasing_jitter.dart`,
`pbr_material_shading_pipeline.dart`, `motion_blur_velocity_field.dart`,
`parallax_occlusion_mapping.dart`, `physical_sky_atmospheric_scattering.dart`,
`contact_shadows_ssdo.dart`, `screen_space_subsurface_scattering.dart`,
`dynamic_resolution_scaler.dart`, `lut_color_grading_policy.dart`,
`tone_mapping_policy.dart`, `post_process_pipeline.dart`, and others.

Their only consumers are `tools/test_*.dart` and `tools/release_validator.dart`.
A green run of `tools/run_all_master_tests.dart` therefore proves that these
*policies* are internally consistent. It proves nothing about pixels. Any
roadmap that reads those green suites as "SSR is done" is reading them wrong.

This is the central honesty problem in the renderer today, and packet **R-A2**
addresses it before any new feature work starts.

---

## 2. Capability audit — what the production pipeline actually does

### 2.1 Frame graph, in execution order

Assembled by `external/pixeldart/lib/rendering/passes/shadow_graph.dart` when
the profile installs `shadows`; otherwise the much smaller
`safe_graph.dart` runs. Stages come from `core/graph_resource.dart:3-14`.

| Stage | Pass | Source |
| --- | --- | --- |
| `beforeShadow` → | shadow caster depth | `passes/shadow.dart` |
| `beforeDepth` | depth prepass | `passes/depth_prepass.dart` |
| `afterDepth` | SSAO occlusion + separable blur | `passes/ssao.dart` |
| `beforeWorld` | shadowed forward world | `passes/shadowed_world.dart` |
| `afterWorld` | MSAA resolve | `passes/msaa_resolve.dart` |
| `afterResolve` | volumetric light | `passes/volumetric_light.dart` |
| `afterResolve` | bloom blur H/V + composite | `passes/bloom.dart` |
| `afterResolve` | DOF blur H/V + composite | `passes/dof.dart` |
| `afterResolve` | LUT grade | `passes/grade.dart` |
| `afterResolve` | PS1 quantize | `passes/ps1.dart` |
| `afterResolve` | VHS | `passes/vhs.dart` |
| `beforePresent` | sky, clouds, exposure, tonemap, encode | `passes/present.dart` |

Resources are typed and versioned (`core/graph_resource.dart`), the graph
validates before execution (`scene_renderer_graph.dart:180-190` throws on an
invalid graph), and per-pass GPU timing exists
(`webgl/webgl2_device_timing.dart`, gated on `EXT_disjoint_timer_query_webgl2`).

**This is a real render graph.** It is the strongest part of the codebase and
nothing below proposes replacing it.

### 2.2 Shading — `shaders/rendering/world/shadowed_world.frag`

Genuinely substantial for a hand-written forward shader:

- Cook-Torrance GGX specular with Smith geometry and Schlick Fresnel.
- Normal mapping from an authored `aTangent` (vec4, handedness in `w`) with a
  screen-derivative fallback frame for legacy meshes.
- Toksvig-style normal-variance widening to suppress minification sparkle.
- ORM (occlusion/roughness/metallic) map, emissive map, second-UV lightmap.
- A dielectric clearcoat lobe.
- Analytic height-fog optical depth along the actual camera→surface segment.
- Weather response: rain wetness (darkening + second specular lobe), snow
  coverage by surface normal, and a 1/r thermal dissolution field with four
  sources.
- Alpha cutout, agreeing with `depth_prepass.frag` and `shadow_caster.frag`.
- SSAO modulates **ambient only**, never the direct term — correct.
- MRT: `oColor` plus a declared `oGlow` emissive attachment. Bloom reads the
  declared attachment, so a bright-but-not-emissive surface never blooms.

### 2.3 Lighting budget — the hard ceiling

From `shadowed_world.frag` uniforms and
`external/pixeldart/lib/rendering/api/lights.dart`:

| Light kind | Count | Shadows |
| --- | --- | --- |
| Directional (sun/moon) | 1 | **none** |
| Point | 4 fixed | none |
| Spot, unshadowed | 3, ranked by `selectSpotLights` | none |
| Spot, shadowed | 1 (`spotLights.first`) | one 2D map |

There is exactly **one shadow map resource** in the whole pipeline
(`passes/pipeline_resource_layout.dart:31,86-89`), sized 512–1024 px square.

Note the contradiction: `lib/presentation/pixeldart_renderer_profile_policy.dart:44-48`
advertises `shadowCount` of 1/2/3 by quality tier, and
`lib/presentation/light_table_capacity_ledger.dart:15-16` defaults to 8 dynamic
lights and 3 shadow casters. The runtime honours none of that. Fixed by **R-B2**.

### 2.4 Post chain and output

- **SSAO** (`ssao/ssao_occlusion.frag`): correct view-space reconstruction from
  linearised depth, 8-tap kernel with a deterministic per-pixel hash rotation,
  separable blur. Sound.
- **Bloom**: single-resolution H/V Gaussian on `oGlow`, then additive
  composite. No mip pyramid, no threshold/knee — acceptable only because the
  glow buffer is already emissive-gated.
- **DOF**: separable blur + depth-driven composite.
- **Present** (`post/present.frag`): procedural three-band sky with horizon
  glow and a deterministic star field, a 24-sample raymarched volumetric cloud
  layer, optional equirectangular skybox texture, exposure, Reinhard tone map,
  vignette, film grain, and a correct `linearToSrgb` transfer.

### 2.5 Assets, scene, and submission

- Frustum culling with typed stats (`core/visibility.dart`).
- Deterministic sort keys — opaque by pipeline/material/mesh, blended
  back-to-front by view depth (`core/sort_key.dart`).
- Authored LOD selection with distance hysteresis (`core/lod_selection.dart`).
- Instance batching by family key (`core/batching.dart`).
- Mesh/material/texture stores with residency prewarm and dedup
  (`rendering/assets/`).
- glTF/OBJ/FBX import and a validated `.qmesh` model-package format.
- `FrameStats`: draw calls, triangles submitted/culled, instances
  submitted/culled, live and peak GPU bytes, resource create/delete counts.

---

## 3. Gap analysis

Ranked by impact on this specific game — a dim Victorian interior, candle and
hearth practicals, a 21-day light cycle, and human visitors at a door.

### G1 — No HDR. Every render target is `RGBA8`

`webgl/webgl2_device_targets.dart` allocates `RGBA8` for every colour
attachment. `RenderCapabilities.halfFloatRenderTarget` and `floatRenderTarget`
are probed and stored, and then **never read anywhere in the package** (verified
by grep across `lib/rendering/`).

Consequence: scene colour clamps to `[0,1]` in the world pass. The exposure and
Reinhard tone map in `present.frag` therefore operate on already-clipped data,
and `shadowed_world.frag`'s comment about letting "the final composite perform
the intentional HDR compression once" describes something that cannot happen.
Candle flames, the hearth, and window daylight all flatten to white before any
tone curve sees them. Bloom inherits the same clipping.

This is the single highest-value fix in the plan.

### G2 — One shadow map, and the sun does not cast

The directional light contributes `N·L` and a specular lobe with no occlusion
term at all. In a house, this means daylight through a window lights the far
wall of an interior room through the intervening geometry. Only one spot light
in the entire scene shadows.

`lib/presentation/cascaded_shadow_maps.dart` models exactly the fix (cascade
splits, slope-scaled and normal-offset bias) and is wired to nothing.

### G3 — No skeletal animation

There is no `aJoint`/`aWeight` attribute, no skinning matrix palette, and no
animation sampler anywhere in `external/pixeldart`. Verified by grep across both
`lib/rendering/` and `shaders/`.

The game's premise is people arriving at a door — `text/visitors/` holds 22
authored characters. Without skinning they can only ever be static props or
billboards. This is a content-blocking gap, not a fidelity gap.

### G4 — Three declared passes have no shader and are never installed

`passes/taa.dart` (144 LOC), `passes/ssss.dart` (174 LOC), and
`passes/lens_flare.dart` (130 LOC) declare programs whose sources are absent
from `shaders/rendering/manifest.json` and from `webgl/generated_shaders.dart`.
`shadow_graph.dart` never references them. They cannot execute.

TAA additionally has no prerequisites: there is no projection jitter and no
motion-vector attachment, so even with a shader it would have nothing to
reproject against.

### G5 — Ambient is a flat colour; there is no environment specular

`uAmbientColor * uAmbientIntensity * ao`. No irradiance probes, no prefiltered
specular cube, no reflection captures. Metal and low-roughness dielectrics have
nothing to reflect: `uReflectionColor` is a single host-supplied constant with a
confidence weight, deliberately bounded so it "never masquerades as SSR"
(the shader's own comment).

For a candle-lit interior with brass, glass, and glazed tile, this is what makes
surfaces read as plastic.

### G6 — Instancing is capped at 16 per draw by uniform arrays

`core/batching.dart:16` — `maxInstanceCount = 16`, because
`uInstanceModels[16]` plus `uInstanceNormalMatrices[16]` already consume 128
uniform vectors. A room of 200 identical balusters or floorboards costs 13 draw
calls instead of 1. Attribute-divisor instancing removes the cap entirely and
frees the uniform budget.

### G7 — Bloom has no mip pyramid

Single-resolution blur cannot produce a wide, soft halo. For candle and lamp
bloom — the signature look of this art direction — a 5–6 level downsample/upsample
chain is the standard fix and is cheap.

### G8 — No dynamic resolution, no adaptive quality

`lib/presentation/dynamic_resolution_scaler.dart` models it; nothing consumes
it. The renderer has per-pass GPU timings and a frame budget ledger and does not
close the loop between them.

### G9 — No decals, no contact shadows in the runtime

`contact_shadows_ssdo.dart` is inert. Grounding of small props relies entirely
on the single spot shadow and SSAO.

### G10 — Documentation and test suites overstate the runtime

Covered in §1.3. `tools/run_all_master_tests.dart` names suites like
`test_pbr_shading_pipeline.dart` and `test_ssdo_csm_weathering.dart` that
exercise pure-Dart policy objects. Nothing in the battery asserts a pixel.

---

## 4. Definition of done — what "full-fledged" means here

The renderer is complete when all of the following hold in a real browser frame,
not in a unit test:

1. **Dynamic range.** Scene colour is `RGBA16F` where the device supports it,
   with a documented `RGBA8` fallback path. A candle flame at 8× the ambient
   level survives to the tone mapper without clipping.
2. **Shadowing.** The directional light casts through a 2–3 cascade CSM. At
   least four additional shadow-casting lights are supported, allocated from a
   shadow atlas with a per-frame ranking and a documented downgrade order.
3. **Animation.** Skinned meshes render with a joint palette, LOD-aware, with
   shadow and depth-prepass variants that agree with the world pass.
4. **Environment response.** Ambient comes from at least a per-room irradiance
   term and a prefiltered specular source. Metals reflect the room, not a
   constant.
5. **Temporal stability.** Either TAA is complete (jitter, motion vectors,
   YCoCg neighbourhood clipping, history rejection) or it is deleted. No
   half-declared pass remains in the tree.
6. **Scale.** 200 instances of one mesh cost one draw call. A furnished room
   renders inside the frame budget on the `standard` profile.
7. **Adaptivity.** The renderer measures its own GPU cost and moves resolution
   or feature level to hold the target frame time, and reports what it did.
8. **Honesty.** Every module under `lib/presentation/` either drives the
   runtime or is deleted. Every pass in `external/pixeldart/lib/rendering/passes/`
   is reachable from an installed profile. Every green test names what it
   actually proves.
9. **Evidence.** A golden-image suite covers the pass matrix and runs in CI.
   The existing `.github/screenshots/renderer/` set (18 captures) becomes a
   maintained baseline rather than a snapshot in time.

---

## 5. Target architecture

The current architecture is kept. Three structural additions:

**Shadow atlas.** Replace the single `shadowMap` resource with one atlas texture
plus a per-frame tile allocator. Cascades and spot/point casters draw into
tiles; the world shader receives a small array of `(viewProj, tileRect, kind)`
records. This makes G2 and the extra casters one mechanism rather than two.

**Environment block.** A per-frame uniform block carrying an SH-9 or 3-band
irradiance term plus a bound prefiltered specular cube and BRDF LUT. Rooms
supply their own probe; the PVS partition in `lib/house/exterior_pvs.dart`
already knows which room the camera is in.

**Vertex stream v3.** Extend the surface format with an optional
`aJoints`/`aWeights` pair behind a pipeline variant, exactly as `aTangent` and
`aUv1` were added for surface-v2. Program permutation stays in
`core/program_set_planner.dart`.

Everything else — graph, stages, resource typing, sort keys, LOD, batching,
stores — absorbs these without redesign.

---

## 6. Roadmap

Packet format: **ID — title.** *Outcome* (observable), *Files*, *Steps*,
*Checks*, *Evidence*. A packet closes only when its check passes in the
assembled build, never because a class exists.

Repos: packets prefixed `PD-` land in `external/pixeldart`; packets prefixed
`GM-` land in the game tree. Per `RENDERER-HANDOFF.md`, no renderer file is
created in the game tree.

---

### Phase A — Truth and hygiene

Cheap, unblocks everything, and is worth doing even if §0.2 resolves toward Unity.

**R-A1 (GM) — delete the dead legacy renderer.**
*Outcome:* `lib/engine/renderer*.dart`, `gl.dart`, `passes.dart`, `programs.dart`,
`shaders.dart`, `shadow.dart`, `world_program_bindings.dart`, `lib/house/emitter.dart`,
and the root `shaders/` directory are gone; the build and every test still pass.
*Steps:* confirm zero live call sites (already true for `RoomEmitter`); check
whether any `tools/test_*.dart` imports them and retire those too; take a tagged
snapshot commit first so the code remains recoverable from history.
*Checks:* `dart analyze` clean; `tools/run_all_master_tests.dart` green;
`dart compile js` output byte-comparable modulo the removal.
*Note:* `RENDERER-HANDOFF.md` already records that the duplicated renderer tree
was deleted once. This finishes that job.

**R-A2 (GM) — classify every `lib/presentation/` module.** — **DONE (classification + mandated deletions), remainder awaiting owner decision.**
*Outcome:* each module is labelled `DRIVES-RUNTIME`, `PLANNED (packet R-xx)`, or
`DELETE`. See §10 for the completed classification table and its method.
*Steps:* for each module, grep for a non-test consumer; where the only consumers
are `tools/test_*` and `release_validator.dart`, it is not driving anything.
*Checks:* no module is labelled `PLANNED` without a packet ID that exists below.
*Rationale:* this is what stops a future reader from believing SSR ships.

**R-A3 (GM) — rename the misleading test suites.**
*Outcome:* `test_pbr_shading_pipeline.dart` → `test_pbr_policy_objects.dart`,
`test_ssdo_csm_weathering.dart` → `test_ssdo_csm_policy_objects.dart`, and the
`run_all_master_tests.dart` banner states that the battery covers policy and
simulation, not rendering output.
*Checks:* battery still green; names now describe what they assert.

**R-A4 (PD) — delete or complete the three phantom passes.**
*Outcome:* `passes/taa.dart`, `passes/ssss.dart`, `passes/lens_flare.dart` are
either removed with their resource files, or carry shaders in
`shaders/rendering/manifest.json` and are installable.
*Decision:* delete SSSS and lens flare now (no content needs them); keep TAA's
file only if **R-D1** is scheduled, otherwise delete it too and re-add later.
*Checks:* `tools/renderer/check_boundary.dart`; every `RenderFeature` in the
package is referenced by at least one graph builder.

**R-A5 (PD) — reconcile the advertised shadow/light budget.**
*Outcome:* `lib/presentation/pixeldart_renderer_profile_policy.dart` and
`light_table_capacity_ledger.dart` report the numbers the runtime can honour
(today: 1 shadow caster), or the runtime honours theirs. Until **R-B2** lands,
the honest direction is to lower the claims.
*Checks:* `tools/test_pixeldart_renderer_profile_policy.dart` asserts against
the graph's actual resource layout, not against a constant.

---

### Phase B — Fidelity core

The three changes that most alter what a player sees.

**R-B1 (PD) — HDR scene colour.** *Addresses G1.*
*Outcome:* `sceneColor`, `sceneColorResolved`, `sceneColorPostBloom`,
`sceneColorPostVolumetric` and the bloom chain allocate `RGBA16F` when
`RenderCapabilities.halfFloatRenderTarget` is true; `RGBA8` otherwise, selected
once at configuration time and reported in diagnostics.
*Files:* `webgl/webgl2_device_targets.dart`, `passes/pipeline_resource_layout.dart`,
`webgl/capability_selection.dart`, `api/settings.dart`.
*Steps:* thread a colour-format field through the resource descriptor; verify
`EXT_color_buffer_half_float` before promoting; keep MSAA renderbuffer formats
in step; confirm the blit in `msaa_resolve` matches formats.
*Checks:* new `tools/renderer/test_hdr_targets.dart` against the fake GPU device
asserts format selection on both capability paths; a browser capture of the
hearth shows a tone-mapped rolloff instead of a clipped white core.
*Risk:* half-float MSAA is not universal. Fall back to non-MSAA HDR before
falling back to LDR MSAA, and record the choice in `RendererDiagnostics`.

**R-B2 (PD) — shadow atlas and cascaded directional shadows.** *Addresses G2.*
*Outcome:* the directional light casts through 2 cascades on `standard` and 3 on
`high`; up to 4 additional casters share the atlas; the world shader samples
from tile rects.
*Files:* new `passes/shadow_atlas.dart`, `passes/shadow.dart`,
`passes/shadow_graph.dart`, `passes/pipeline_resource_layout.dart`,
`shaders/rendering/world/shadowed_world.{vert,frag}`,
`core/shadow_caster_lod.dart`.
*Steps:* (1) atlas resource + tile allocator with a deterministic ranking;
(2) move the existing single spot caster onto the atlas with no visual change —
this is the regression gate; (3) add cascade split computation, reusing the
maths already modelled in `lib/presentation/cascaded_shadow_maps.dart`;
(4) slope-scaled + normal-offset bias per cascade; (5) blend band at cascade
boundaries.
*Checks:* `tools/renderer/test_shadow_atlas.dart` (allocation determinism,
eviction order); the step-2 capture is pixel-identical to the pre-change
baseline; a daylight interior capture shows correct window shafts and no
light leak through the far wall.
*Then:* retire `lib/presentation/cascaded_shadow_maps.dart` per **R-A2**.

**R-B3 (PD) — environment lighting.** *Addresses G5.*
*Outcome:* ambient is an SH-9 irradiance term per room plus a prefiltered
specular cube and a BRDF LUT; metals reflect their surroundings.
*Files:* new `atmosphere/environment_probe.dart`, `passes/probe_bake.dart`
(offline or first-frame bake), `shaders/rendering/world/shadowed_world.frag`,
`api/scene.dart` for the per-frame probe binding.
*Steps:* bake one probe per room from the authored lighting rigs in
`lib/house/per_room_lighting_rigs.dart`; supply the active room's probe from the
PVS partition; add the split-sum approximation to the fragment shader.
*Checks:* `tools/renderer/test_environment_probe.dart` for bake determinism; a
brass/glass capture with the same direct lighting before and after shows a
visible environment response.
*Note:* this subsumes most of what SSR would deliver in an interior, at a
fraction of the cost and with none of SSR's screen-edge artefacts. Do this
before considering `screen_space_reflections.dart`.

---

### Phase C — Content capability

**R-C1 (PD) — skeletal animation.** *Addresses G3.* **Content-blocking.**
*Outcome:* a skinned glTF character renders, animates, casts a shadow, and
appears correctly in the depth prepass.
*Files:* `assets/qmesh.dart` (vertex stream v3), `assets/importers/gltf_*.dart`,
new `core/skinning.dart`, `shaders/rendering/world/shadowed_world.vert`,
`shaders/rendering/depth/depth_prepass.vert`,
`shaders/rendering/shadow/shadow_caster.vert`, `core/program_set_planner.dart`.
*Steps:* (1) extend the mesh format with optional joints/weights and validate;
(2) glTF skin + animation-sampler import; (3) joint palette as a uniform array
(cap 64) or a joint texture — prefer the texture, it lifts the cap and matches
the instancing direction of **R-E1**; (4) a pipeline variant per skinned/static;
(5) skinned variants of prepass and shadow-caster vertex shaders so all three
passes agree on where the surface is.
*Checks:* `tools/renderer/test_skinning.dart` (palette determinism, bind-pose
identity); a browser capture of one visitor animating at the door with a correct
shadow.
*Dependency:* content — at least one rigged character must exist.

**R-C2 (PD) — bloom mip pyramid.** *Addresses G7.*
*Outcome:* 5-level progressive downsample/upsample bloom with a configurable
knee, replacing the single-resolution blur.
*Files:* `passes/bloom.dart`, `passes/bloom_resources.dart`,
`shaders/rendering/bloom/*`.
*Checks:* `tools/renderer/test_bloom_chain.dart` for level allocation; a candle
capture shows a wide soft halo rather than a tight ring.
*Note:* cheap, high visual return, and much better once **R-B1** gives it real
HDR input. Sequence it after R-B1.

**R-C3 (PD) — contact shadows.** *Addresses G9.*
*Outcome:* a short screen-space ray march grounds small props against the
depth buffer, at `afterDepth`.
*Files:* new `passes/contact_shadows.dart` + shader, `shadow_graph.dart`.
*Checks:* a capture of the mantel clutter shows contact darkening that SSAO
alone does not provide.
*Then:* retire `lib/presentation/contact_shadows_ssdo.dart`.

---

### Phase D — Temporal (optional, gated)

**R-D1 (PD) — complete TAA, or confirm the deletion from R-A4.**
*Outcome:* projection jitter from a Halton sequence, a motion-vector attachment
written by the world pass, YCoCg neighbourhood clipping, and history rejection
on disocclusion.
*Files:* `passes/taa.dart`, new `shaders/rendering/taa/taa_resolve.frag`,
`api/frame.dart` (previous-frame view-projection),
`shaders/rendering/world/shadowed_world.{vert,frag}` (motion vectors),
`passes/pipeline_resource_layout.dart`.
*Checks:* `tools/renderer/test_taa_jitter.dart` (sequence determinism, history
epoch invalidation); a slow-pan capture shows stable edges with no ghosting on
the moving visitor.
*Gate:* TAA fights the PS1/VHS art direction. **Do not open this packet without
an explicit art-direction decision.** If the answer is no, close R-A4 by
deletion and skip Phase D entirely. `lib/presentation/motion_blur_velocity_field.dart`
depends on the same motion vectors and shares this gate.

---

### Phase E — Scale and adaptivity

**R-E1 (PD) — attribute-divisor instancing.** *Addresses G6.*
*Outcome:* `InstanceBatch.maxInstanceCount` is removed; instance transforms come
from a per-instance vertex buffer with `vertexAttribDivisor`, and the freed
uniform vectors go to the lighting block.
*Files:* `core/batching.dart`, `core/instance_transforms.dart`,
`webgl/draw_encoder.dart`, all three world/prepass/shadow vertex shaders.
*Checks:* `tools/renderer/test_instance_transforms.dart` extended — 200
instances render in one draw call and are pixel-identical to 13 batched draws;
`FrameStats.drawCalls` proves it.
*Note:* keep the instance buffer persistent and orphan-updated. Do not repeat
the per-draw create/delete defect from the legacy path (§1.2).

**R-E2 (PD+GM) — close the dynamic-resolution loop.** *Addresses G8.*
*Outcome:* the renderer reads its own per-pass GPU timings and moves the
internal render scale between authored bounds to hold the target frame time,
reporting the current scale and the reason in `RendererDiagnostics`.
*Files:* `core/scene_renderer_timing.dart`, `api/configuration_coordinator.dart`,
`lib/presentation/dynamic_resolution_scaler.dart` (becomes `DRIVES-RUNTIME`),
`lib/presentation/render_scale_coordinator.dart`.
*Steps:* hysteresis and a minimum dwell time, so the scale does not oscillate;
never change scale during a captured golden frame.
*Checks:* a forced-load scenario drops the scale and recovers, with both
transitions in diagnostics; golden captures pin the scale.

**R-E3 (PD) — PVS-driven submission.**
*Outcome:* the room partition in `lib/house/exterior_pvs.dart` supplies a
visibility mask so occluded rooms are never submitted, on top of frustum
culling.
*Checks:* `FrameStats.trianglesCulled` rises sharply when the camera is in an
interior room; no visible popping at a threshold.

---

### Phase F — Evidence

**R-F1 (PD) — golden-image suite in CI.**
*Outcome:* the 18 captures in `.github/screenshots/renderer/` become a generated,
compared baseline. A headless Chromium (ANGLE/SwiftShader — the same setup
`external/docs/RENDER_BUGS.md` used successfully) renders the pass matrix and
compares against committed goldens with a perceptual threshold.
*Files:* new `tools/renderer/test_golden_images.dart`,
`tools/golden_scene_camera_registry.dart` (already exists — reuse it),
`lib/presentation/perceptual_golden_evaluator.dart` (becomes `DRIVES-RUNTIME`).
*Checks:* the suite fails on a deliberately introduced one-line shader change.
*Rationale:* every packet above claims a "browser capture" check. Without this,
those checks are manual and will rot. **This packet is what makes the rest of
the plan enforceable, and it should run early — consider pulling it forward to
sit beside R-A4 and act as the regression gate for R-B2 step 2.**

**R-F2 (PD) — frame-budget enforcement.**
*Outcome:* `tools/renderer/budgets.json` gains per-pass GPU-time budgets, and
CI fails a regression beyond a tolerance on the reference scene.

---

## 7. Verification protocol

Per packet, in order — this is the loop `RENDERER-HANDOFF.md` already
establishes, unchanged:

```
cd external/pixeldart
dart analyze
dart run tools/renderer/test_all.dart
dart run tools/renderer/check_boundary.dart
dart run tools/renderer/shaders.dart          # regenerate generated_shaders.dart
dart compile js web/renderer_test/main.dart -o web/renderer_test/main.dart.js
# serve web/renderer_test/ on :8090, capture
```

Then in the game tree:

```
dart analyze
dart run tools/run_all_master_tests.dart
```

Rules:

- A shader edit is not landed until `tools/renderer/shaders.dart` has
  regenerated `webgl/generated_shaders.dart`. The manifest is the contract; a
  shader absent from it does not exist (this is precisely how G4 happened).
- Visual acceptance is the orchestrator's, per `GROUND_RULES.md`. Packets
  produce captures; they do not self-certify appearance.
- When `external/pixeldart` advances, bump the game repo's gitlink as its own
  one-line commit.

---

## 8. Sequencing summary

| Order | Packet | Repo | Blocks | Effort |
| --- | --- | --- | --- | --- |
| 1 | R-A1 delete legacy | GM | — | S |
| 2 | R-A2 classify presentation | GM | all | S |
| 3 | R-A3 rename suites | GM | — | XS |
| 4 | R-A4 phantom passes | PD | R-D1 | S |
| 5 | R-A5 reconcile budget claims | PD/GM | R-B2 | S |
| 6 | **R-F1 golden images** | PD | gates B–E | M |
| 7 | R-B1 HDR targets | PD | R-C2 | M |
| 8 | R-B2 shadow atlas + CSM | PD | — | L |
| 9 | R-C2 bloom pyramid | PD | — | S |
| 10 | R-B3 environment probes | PD | — | L |
| 11 | R-E1 attribute instancing | PD | R-C1 | M |
| 12 | R-C1 skeletal animation | PD | visitor content | L |
| 13 | R-C3 contact shadows | PD | — | M |
| 14 | R-E3 PVS submission | PD | — | M |
| 15 | R-E2 dynamic resolution | PD/GM | — | M |
| 16 | R-F2 budget enforcement | PD | — | S |
| — | R-D1 TAA | PD | art gate | L |

Phase A is roughly a week. Phase B is the bulk of the work and the bulk of the
visible change. Phases C–E are additive and can be reordered against content
readiness — R-C1 in particular should move earlier the moment a rigged
character exists.

---

## 9. What this plan deliberately does not do

- **No SSR.** R-B3 delivers most of its value in an interior for less cost and
  no screen-edge artefacts. `lib/presentation/screen_space_reflections.dart`
  should be labelled `DELETE` in R-A2 unless an exterior scene demands it.
- **No parallax occlusion mapping.** Normal maps plus the existing Toksvig
  widening carry the surface detail this art direction needs.
  `parallax_occlusion_mapping.dart` → `DELETE`.
- **No physical sky model.** The three-band gradient plus raymarched clouds in
  `present.frag` already looks right for an overcast quarantine street.
  `physical_sky_atmospheric_scattering.dart` → `DELETE`.
- **No deferred rendering.** Light counts here do not justify a G-buffer, and it
  would cost the MSAA path.
- **No renderer files in the game tree.** Not once, not temporarily.

---

## 10. R-A2 — `lib/presentation/` classification

*Produced 2026-08-19, after R-A1. Method below the tables; re-run the method
after any packet lands, because the labels are only as current as the imports.*

### 10.1 Method — reachability, not grep

A module "drives the runtime" if and only if it is in the transitive `import` /
`export` closure of **`web/main.dart`**, the sole browser entrypoint. Grepping
for "is it mentioned anywhere" is what produced the false confidence this packet
exists to remove: a module named only by `tools/test_*.dart` and
`tools/release_validator.dart` has no effect on a single pixel.

Closure at time of writing: 134 Dart files, of which 24 of the then-63
`lib/presentation/` modules were reachable.

### 10.2 `DRIVES-RUNTIME` (24)

In the `web/main.dart` closure. These are the renderer seam that actually exists.

| Module | Role |
| --- | --- |
| `backend_factory.dart` | constructs the one live backend |
| `backend_selector.dart` | selection input to the factory |
| `capability_policy.dart` | capability gating fed by the bridge |
| `day_night_atmosphere.dart` | 21-day cycle → atmosphere values |
| `model_package_index.dart` | promoted-package index |
| `model_package_registry.dart` | package registry |
| `pixeldart_backend.dart` | the live backend |
| `pixeldart_capability_bridge.dart` | device caps → policy |
| `pixeldart_capability_matrix.dart` | capability matrix |
| `pixeldart_renderer_profile_policy.dart` | quality-tier profile (see **R-A5**) |
| `pixeldart_resource_governor.dart` | resource budget governor |
| `pixeldart_shader_pipeline_exporter.dart` | pipeline export |
| `presentation_inventory_adapter.dart` | package inventory |
| `presentation_model_package_loader.dart` | package load |
| `presentation_package_binding_adapter.dart` | package → scene binding |
| `presentation_package_promotion_coordinator.dart` | promotion |
| `realistic_thunderstorm_engine.dart` | weather drive |
| `renderer_backend.dart` | backend interface |
| `renderer_diagnostics.dart` | diagnostics channel |
| `renderer_gui_surface.dart` | the one module touching `package:web` |
| `renderer_runtime.dart` | frame runtime seam |
| `shader_tuning_bridge.dart` | tuning menu → renderer |
| `shader_tuning_state.dart` | tuning state |
| `solar_daylight.dart` | sun position |

### 10.3 `PLANNED` — unreachable today, claimed by a packet (12)

Each is inert. Each has a packet that either makes it drive the runtime or
retires it. **No entry here without a packet ID that exists in §6.**

| Module | Packet | Disposition when the packet lands |
| --- | --- | --- |
| `tone_mapping_policy.dart` | R-B1 | drives HDR/tonemap selection, or retires |
| `cascaded_shadow_maps.dart` | R-B2 | split maths reused, then retired |
| `shadow_tile_cache_manager.dart` | R-B2 | atlas tile invalidation |
| `contact_shadows_ssdo.dart` | R-C3 | retired once the pass ships |
| `temporal_anti_aliasing_jitter.dart` | R-D1 (art-gated) | delete if the gate says no |
| `motion_blur_velocity_field.dart` | R-D1 (art-gated) | delete if the gate says no |
| `dynamic_resolution_scaler.dart` | R-E2 | becomes `DRIVES-RUNTIME` |
| `render_scale_coordinator.dart` | R-E2 | becomes `DRIVES-RUNTIME` |
| `perceptual_golden_evaluator.dart` | R-F1 | becomes `DRIVES-RUNTIME` |
| `performance_budget_ledger.dart` | R-F2 | becomes `DRIVES-RUNTIME` |
| `visual_performance_harness.dart` | R-F2 | frame telemetry source |
| `light_table_capacity_ledger.dart` | R-A5 | claims lowered to what the runtime honours |
| `graphics_profile_negotiator.dart` | R-A5 | claims reconciled with the graph |

### 10.4 `DELETE` — executed

Removed in the R-A2 commit. Recoverable from tag `legacy-renderer-snapshot`'s
descendants in history.

| Module | Reason |
| --- | --- |
| `screen_space_reflections.dart` | §9 — R-B3 environment probes deliver more in an interior, without screen-edge artefacts |
| `parallax_occlusion_mapping.dart` | §9 — normal maps + Toksvig widening carry this art direction |
| `physical_sky_atmospheric_scattering.dart` | §9 — `present.frag`'s gradient + raymarched clouds already look right |
| `screen_space_subsurface_scattering.dart` | R-A4 deletes the SSSS pass; the policy object outlives nothing |
| `cinematic_lens_optics.dart` | R-A4 deletes the lens-flare pass |

Cascade handled in the same commit: `pbr_material_shading_pipeline.dart` lost
its SSR term and import; `tools/release_validator.dart` lost its
`ScreenSpaceReflectionEngine` / `POMEngine` gates; five dedicated test suites
and three master-battery entries were removed with their subjects.

### 10.5 `DELETE` — proposed, **needs owner sign-off** (21)

These are unreachable from `web/main.dart` and no packet in §6 claims them, so
§4.8 makes them `DELETE`. They are listed rather than deleted because two of
them are load-bearing for master-battery suites that also assert unrelated
things, and because the plan itself never itemised them. **This is the one open
decision left in Phase A.**

*Renderer-fidelity policy objects duplicating what the live shader already does:*
`pbr_material_shading_pipeline.dart` (consumed by `test_performance_and_frame_pacing.dart`
and `test_playability_and_fluidity.dart` — battery surgery required),
`procedural_surface_weathering.dart`, `subsurface_scattering_params.dart`,
`volumetric_light_shaft.dart`, `volumetric_fog_inscattering.dart`,
`lut_color_grading_policy.dart`, `post_process_pipeline.dart`.

*Unused seam plumbing:* `backend_bootstrap.dart`, `build_provenance.dart`,
`environment_facts.dart`, `feature_fact_mappers.dart`, `feature_frame_adapter.dart`,
`frame_coalescer.dart`, `frame_queue_transients.dart`, `pixeldart_scene_contract.dart`,
`query_smoke.dart`, `resource_lifecycle.dart`, `transient_depth_route.dart`,
`transient_facts_mapper.dart`.

*Camera policy, unwired:* `camera_inertia_controller.dart`,
`cinematic_immersion_director.dart`.

A defensible alternative for the seam-plumbing group is to keep it and open a
packet that wires it, since it is plumbing rather than a fidelity claim — it
misleads nobody about pixels. The fidelity-policy group has no such defence.
