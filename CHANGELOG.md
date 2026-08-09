# Changelog

This is the canonical project history. I keep entries short and focused
on changes players or contributors can feel. Detailed renderer notes belong in
`tmp/RENFERER_WORK.md`; planning decisions belong in `tmp/MASTERPLAN.md`.

## Unreleased

- Added the original brush-cut UI contract: stable palette/scale/motion tokens
  and semantic component states for the upcoming pause-root specimen.
- Added native semantic brush component wrappers and applied the first
  brush-cut treatment to pause-root actions without changing their DOM order.
- Added an executable PF-01 state matrix for ordinary/keybind states and the
  100/150/200% text-scale, high-contrast, narrow, and reduced-motion paths.
- Completed PF-01's selected and destructive semantic states with structural,
  typographic, and contrast distinctions that do not rely on red alone.
- Added a backward-compatible Controls v2 multi-binding contract with v1
  migration, reserved/conflict validation, and transactional alternative-key
  capture.
- Extended the public input seam to consume alternative movement and interaction
  bindings while preserving one-shot hold behavior and primary-map compatibility.
- Added the named PF-03 action vocabulary—directional movement, interact,
  secondary, run, crouch, rotate, reach, journal, rest, and pause—to the
  Controls/Input semantic surfaces.
- Added stable mouse-button and wheel binding tokens with accessible labels,
  validation, and transactional conflict capture in the Controls editor.
- Added the renderer-neutral S-05 gameplay presentation profile for interaction
  comfort, prompt/text pacing, journal layout, confirmations, save feedback,
  focus-loss behavior, and contextual reminders, with strict JSON validation.
- Exposed S-05 gameplay preferences through the semantic Settings panel with
  stable `settings.gameplay.*` control IDs and profile callbacks.
- Added requested/effective persistence for gameplay presentation preferences,
  with independent reset and versioned store round-tripping.
- Added a typed gameplay presentation policy projection with focus-loss,
  prompt, pacing, journal, confirmation, save-feedback, and reminder decisions;
  its outcome-neutral guard is executable.
- Added screen-reader verbosity with system-default precedence, a semantic
  accessibility control, versioned persistence, and an always-available
  essential-cue guard.
- Added the shared accessibility announcement policy and connected AmbientNotice
  to verbosity-aware status/caption formatting without suppressing essential
  context.
- Connected Prompt and Broadcast to the same announcement policy; interaction
  prompts retain essential text while optional broadcast context follows the
  selected verbosity.
- Connected the visitor Door dialogue and citation result status to the same
  policy, preserving essential spoken/text cues at every verbosity level.
- Added requested/effective accessibility profile persistence with explicit
  reset semantics, keeping platform-default resolution separate from user
  overrides.
- Added the first clearance-aware ground-circuit waypoint chain from canonical house geometry, with capsule validation and malformed-waypoint coverage.
- Added the canonical living-room-to-kitchen crossing with validated portal approaches.
- Added explicit scenario readiness diagnostics: invalid, draft, and runnable entries now stay distinct.
- Added typed route failure diagnostics with waypoint identity, sample position, and obstruction labels for future overlays.
- Added two fixed embodied hero capture pairs with canonical camera, fixture, profile, and metadata validation.
- Bound capture source waypoints to the decoded scenario so manifest provenance cannot drift silently.
- Added the authored upper-circuit route with both-way bedroom, bathroom, and spare-room checkpoints.
- Route validation now rejects waypoint chains that omit a declared portal room crossing.
- Route validation now reports the canonical non-passable cellar portal as an explicit blocker (VIS-038).
- Browser automation now validates the fixed capture manifest and records its hash in capture sidecars.
- Browser capture selection now accepts a manifest ID, checks request compatibility, and records when pose evidence is still absent.
- Automation builds now expose a validated live player pose/room snapshot for movement-settle evidence.
- Added a bounded visual-capture dispatcher that plans real mouse/keyboard input and fails on stalled pose arrival.
- Browser gate diagnostics now retain renderer initialization stacks; Firefox exposed the open optional-extension null-check blocker (VIS-039) instead of producing a false Pixeldart capture.
- The automation runner now forwards visual-capture selection into the browser child and rejects selected captures on renderer fallback.
- Renderer fixture evidence is green across all 44 scripts; the remaining Firefox blocker is isolated to real optional-extension interop.
- Pixeldart's aggregate runner now discovers all 44 fixtures and works from either repository root or package root.
- Turned the `days-1-3` browser scenario into a playable Day 1 → Day 2 → Day 3
  loop through the real Rest panel, with save-backed checkpoints and captures.
- Day-cycle evidence now rejects missing checkpoints or mismatched capture
  sidecars before it enters an automation report.
- Day-cycle evidence now requires the ordered authored Rest transitions, so a
  mislabeled or synthetic day advance cannot look like playable progress.
- Added authored inventory focus and inspection feedback, so pickable house
  objects can participate in the normal focus path.
- Made repeated release builds safe when generated house manifests are present,
  and added deterministic environment/versioning fixtures.
- Made the local package build embed the canonical project version in renderer
  diagnostics, matching the hosted build path.
- Made automation runs forward their validated scenario, renderer, profile, and
  viewport instead of silently using the smoke test defaults.
- Added a deterministic embodied-controller fixture covering route arrival,
  focus settling, one interaction edge, and exactly one resulting cost.
- Automation runs now retain bounded browser logs and structured child-exit
  evidence in each report bundle.
- Automation runs now capture and register a bounded screenshot of the selected
  renderer route and viewport.
- Captures now include a sidecar manifest distinguishing requested and negotiated
  renderer profiles.
- Capture bundles now include SHA-256 digests for the screenshot and manifest,
  making repeated runs easy to compare without assuming cross-GPU pixel identity.
- Digest values are now surfaced directly in the structured automation trace for
  machine-readable comparison.
- Digest trace entries now validate both hashes before a run can finish, so
  malformed capture evidence fails visibly.
- Added direct fixtures for valid, missing, short, uppercase, and non-object
  capture digest payloads.
- Capture digests now validate schema version and safe artifact names before
  entering the run trace.
- Capture digests now reject bundles missing their referenced screenshot or
  metadata sidecar.
- Automation browser children now have a bounded wall-clock watchdog derived
  from the fixed-tick budget, with explicit timeout evidence.
- Watchdog termination now gives children a bounded two-second graceful-stop
  window before falling back to a hard kill.
- Browser automation now resolves repeated visitor prompts, drives bounded
  keyboard movement, and verifies the saved player position and room changed.
- The browser replay now reaches the living-room mantle, sends KeyE, and
  verifies the lit/examined state survives into the authoritative save.
- It also walks away, proves focus clears, and verifies a follow-up KeyE cannot
  mutate the previously examined mantle.
- Embodied runs now package and validate a schema-versioned route evidence file
  with poses, renderer profile negotiation, focus, action, and denial results.
- Replay artifacts now retain exact pose diagnostics alongside a declared
  half-metre semantic key, so bounded browser timing drift is visible but does
  not invalidate an otherwise identical route.
- Embodied evidence now links to and validates its screenshot, metadata, and
  digest sidecars before they enter the automation trace.
- Capture and embodied artifacts now distinguish honored profiles from
  capability-negotiated requests, so a safe-to-high fallback is auditable.
- Added negative fixtures that reject unexplained or falsely negotiated profile
  changes before they enter an automation report.
- Embodied replays now verify movement during the approach leg, preventing a
  later probe from masking a stuck authored-target route.
- Capture metadata is now validated and cross-checked against embodied route
  evidence, rejecting contradictory route, screenshot, viewport, or profile
  identities before report registration.
- Embodied route evidence now includes a separate post-action screenshot bundle,
  so visual proof reflects the interacted scene rather than only the boot state.
- Focus acquisition and focus-clear now use bounded prompt-settle checks, with
  observed timings preserved for failure diagnosis.
- Embodied artifacts now include an ordered timestamped browser input trace,
  making the real-key sequence auditable instead of declarative only.
- Input-trace timestamps now have monotonic-order validation with a direct
  reordered-trace regression fixture.
- Embodied verification now reloads the packaged page and proves the player
  pose and mantle state survive save/restore before accepting the final capture.
- Capture digests now verify SHA-256 values against the actual screenshot and
  metadata bytes, rejecting stale or tampered hashes.
- Embodied evidence now checks that screenshot, metadata, and digest sidecars
  form one referentially consistent capture triplet; direct mismatch fixtures
  cover the failure path.
- Settings smoke failures now include bounded panel/focus/door/boot diagnostics
  instead of an opaque 30-second timeout.
- Browser smoke now follows semantic Pause and Settings child IDs; it records
  the current pause-stack focus handoff as VIS-037 when Escape collapses to play.
- Recorded an inventory reachability blocker: the post-mantle room/pose handoff
  can leave the player outside the living-room boundary, so inventory coverage
  is not reported as passing yet.
- Added the first semantic pause-root surface with accessible Resume, Settings,
  Controls, Save now, Help, and Back actions backed by the typed pause ledger.
- Added a semantic settings-category index for Visual, Graphics, Gameplay,
  Controls, Audio, and Accessibility, while retaining the existing settings
  persistence consumer during the staged navigation migration.
- Added filtered Visual and Accessibility settings pages backed by the same
  typed settings store, with restored values synchronized across page instances.
- Wired Visual and Accessibility into the typed pause child stack so Back and
  Escape restore the settings index and the triggering category focus.
- Added a capability-safe Graphics child page with requested/effective profile
  persistence and explicit fallback explanations for unsupported options.
- Added typed Controls and filtered Audio child pages with persisted control
  comfort settings, reserved-key validation, and the existing audio store path.
- Added persisted Audio output/comfort options with live mono, dynamic-range,
  and room-reverb application through the existing Web Audio graph.
- Added transactional Controls remapping with reserved-key protection,
  Swap/Replace/Cancel conflict handling, and gameplay-effective bindings.
- Added accessibility preference precedence for system defaults versus explicit
  reduced-motion, photosensitivity-safe, UI-scale, and caption settings.
- Accessibility preferences now react to live reduced-motion/transparency system
  changes, and existing ambient/audio cues can surface as non-speech captions.
- Completed the accessibility precedence matrix, added a follow-system reset,
  and captioned authored door, shutter, mantle, rupture, and service cues.
- Made the persisted Controls “hold to interact” option gameplay-effective with
  a single thresholded action edge and no held-key repeats.

## [0.1.2.0] — 2026-08-09

- Added authored inventory focus and bounded inspection feedback to the house.
- Wired weather, temperature, shutter, and fog facts into the renderer paths.
- Made repeated packaged builds ignore generated house data in external-asset
  orphan checks.
- Added project-version provenance to packaged renderer diagnostics and corrected
  the query-free renderer report to say `auto`.

## [0.1.1.0] — 2026-08-09

- Made temperature phase follow each authored weather day's daylight duration,
  so seasonal shortening affects cold-room and breath facts deterministically.
- Rejected malformed weather days with daylight durations above 24 hours.
- Tightened version checks so `Unreleased` stays first and numbered headings
  are dated; added focused version-tool boundary coverage.

## [0.1.0.1] — 2026-08-09

- Added the project’s four-part version contract and a checked-in `VERSION` file,
  so small housekeeping packets can be identified without pretending to be a
  player-facing release.
- Added a small version checker/bump tool and documented the human changelog
  workflow in the masterplan, including the `1.0.0.0` finished-game gate.

## [0.1.0.0] — 2026-08-09

- 2026-08-09 — Made query-free startup choose Pixeldart automatically, while
  keeping `?renderer=legacy` as a deliberate rollback and `?renderer=next` as
  a temporary compatibility alias. The selector and browser smoke now say that
  plainly.
- Made Pixeldart the default renderer, with legacy kept as an explicit fallback.
- Added deterministic movement, interaction, scenario, clock, and reporting
  tools for automated playthroughs.
- Improved house rendering with per-slot exterior materials and hero practical
  lighting.
- Added weather and temperature facts to ambient lighting, fog, shutters, and
  cold-room presentation.
- Fixed modal input leaks, Escape settings access, brightness persistence, and
  simulation time advancing behind menus.
- Expanded the renderer and house verification fixtures; rebuilt the packaged
  web release.
