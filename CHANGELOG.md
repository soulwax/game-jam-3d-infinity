# Changelog

This is the canonical project history. I keep entries short and focused
on changes players or contributors can feel. Detailed renderer notes belong in
`tmp/RENFERER_WORK.md`; planning decisions belong in `tmp/MASTERPLAN.md`.

## Unreleased

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
