import 'package:quarantine/house/state.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void _reject(Map<String, dynamic> value, String message) {
  var rejected = false;
  try {
    HouseState.fromJson(value);
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

void _rejectApply(Map<String, dynamic> value, String message) {
  var rejected = false;
  try {
    HouseState.fromJson(value).applyTo(loadAuthoredHouse(seed: 42));
  } on FormatException {
    rejected = true;
  }
  _expect(rejected, message);
}

void main() {
  final house = loadAuthoredHouse(seed: 42);
  final captured = HouseState.capture(house);
  final json = captured.toJson();
  final restored = HouseState.fromJson(json);
  _expect(
    restored.portals.keys.toSet().length == house.portals.length &&
        restored.windows.keys.length == house.windowsFromInside &&
        restored.mantles.isEmpty,
    'captured state contains every authored ID',
  );

  final withHistory = HouseState(
    portals: restored.portals,
    windows: restored.windows,
    mantles: restored.mantles,
    driftLandedCount: 1,
    overrides: const {'opposite-window': 'day20'},
    mantleHistory: const ['mantle-hall', 'mantle-living'],
  );
  final roundTrip = HouseState.fromJson(withHistory.toJson());
  _expect(
    roundTrip.overrides['opposite-window'] == 'day20' &&
        roundTrip.mantleHistory.join(',') == 'mantle-hall,mantle-living',
    'overrides and mantle history round trip',
  );

  final missingPortal = Map<String, dynamic>.from(json);
  (missingPortal['portals'] as Map).remove(captured.portals.keys.first);
  _rejectApply(missingPortal, 'missing authored portal ID rejects on apply');
  final badOverride = Map<String, dynamic>.from(json)
    ..['overrides'] = {'opposite-window': DateTime.utc(2026)};
  _reject(badOverride, 'runtime override values reject');
  print('house state: authored IDs, overrides, and mantle history pass');
}
