import 'package:quarantine/config.dart';
import 'package:quarantine/game/player_state.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError(message);
void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  final house = loadAuthoredHouse(seed: 42);
  final state = PlayerState(
    roomId: 'hall',
    eye: house.defaultPlayerEye(playerEyeHeight),
    yaw: 0.4,
    pitch: -0.2,
  );
  final decoded = PlayerState.tryFromJson(state.toJson());
  _expect(
    decoded != null && decoded.isCollisionSafe(house),
    'valid player restores',
  );
  _expect(
    PlayerState.tryFromJson({
          'roomId': 'hall',
          'eye': {'x': 999, 'y': 1.65, 'z': 3.5},
          'yaw': 0,
          'pitch': 0,
        })!.isCollisionSafe(house) ==
        false,
    'out-of-bounds player placement is rejected',
  );
  _expect(
    PlayerState.tryFromJson({'roomId': 'hall'}) == null,
    'partial state fails closed',
  );
  print('player state is serializable and collision-checked');
}
