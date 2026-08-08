# TODO — PHY-01 (G-PHY-01) sparse moved-state + replay/recovery

- [x] Update `lib/game/player_state.dart` to persist capsule moved-state (stair progress) alongside room/eye/yaw/pitch; keep backward-compatible JSON parsing.
- [x] Update `lib/house/collision.dart` (`Capsule`) to expose moved-state capture/restore for the active stair (stair ID + progress), without leaking runtime handles.
- [x] Update `web/main.dart` save/restore wiring:
  - [x] when saving, write sparse moved-state into `meta.player`
  - [x] when restoring, reconstruct capsule moved-state before first frame.
- [x] Add/extend a deterministic pure test for PHY-01 under `tools/`:
  - [x] simulate fixed-step movement deterministically into a stair transition
  - [x] save sparse moved-state
  - [x] restore into a fresh capsule/house
  - [x] verify replay/recovery produces identical eye/room/stair progress outcomes.
- [x] Run `dart analyze`
- [x] Run the new PHY-01 test (`dart run tools/test_phy_01.dart`)

## Follow-on verification completed

- [x] Run `dart run tools/test_player_state.dart`
- [x] Run `dart run tools/test_session.dart`
- [x] Run `dart run tools/test_house.dart`
