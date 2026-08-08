import 'package:quarantine/game/gaslight_state.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final state = GaslightState.compose(
    mantleRooms: const {'mantle-living': 'living', 'mantle-hall': 'hall'},
    roomFlow: const {'living': 0.25, 'hall': 1.0},
    litMantles: {'mantle-living', 'mantle-hall'},
  );
  _expect(
    state.facts.first.mantleId == 'mantle-hall',
    'facts have stable ID order',
  );
  _expect(state.facts.first.flame == 1.0, 'flame follows room flow');
  _expect(state.facts[1].hiss == 0.75, 'hiss reflects draught attenuation');
  _expect(
    state.events.length == 2 && state.events[1].sequence == 2,
    'events are ordered',
  );
  final bytes = state.toJson().toString();
  final repeat = GaslightState.compose(
    mantleRooms: const {'mantle-hall': 'hall', 'mantle-living': 'living'},
    roomFlow: const {'hall': 1.0, 'living': 0.25},
    litMantles: {'mantle-hall', 'mantle-living'},
  );
  _expect(
    bytes == repeat.toJson().toString(),
    'equivalent facts are canonical',
  );
  final dark = GaslightState.compose(
    mantleRooms: const {'mantle-hall': 'hall'},
    roomFlow: const {'hall': 0.0},
    litMantles: {'mantle-hall'},
  );
  _expect(
    dark.facts.single.flame == 0.0 && dark.facts.single.hiss == 1.0,
    'zero flow remains finite',
  );
  print('gaslight state: pure facts and semantic events pass');
}
