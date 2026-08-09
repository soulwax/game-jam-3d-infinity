# Changelog

This is the canonical project history. I keep entries short and focused
on changes players or contributors can feel. Detailed renderer notes belong in
`tmp/RENFERER_WORK.md`; planning decisions belong in `tmp/MASTERPLAN.md`.

## Unreleased

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
