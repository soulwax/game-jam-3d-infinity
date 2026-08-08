import 'package:quarantine/sim/draught.dart';
import 'package:quarantine/sim/mantle_economy.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final graph = DraughtGraph([
    const DraughtEdge(
      id: 'window-kitchen',
      fromRoom: 'kitchen',
      toRoom: 'outside',
      kind: DraughtOpeningKind.window,
      open: true,
      strength: 0.5,
    ),
    const DraughtEdge(
      id: 'door-hall-kitchen',
      fromRoom: 'hall',
      toRoom: 'kitchen',
      kind: DraughtOpeningKind.door,
      open: true,
    ),
    const DraughtEdge(
      id: 'door-hall-living',
      fromRoom: 'hall',
      toRoom: 'living',
      kind: DraughtOpeningKind.door,
      open: false,
    ),
  ]);
  final flow = graph.flowFrom('hall', distance: 0);
  _expect(flow['kitchen'] == 1.0, 'open door carries full flow');
  _expect(!flow.containsKey('living'), 'closed door blocks flow');
  _expect(flow['outside'] == 0.5, 'window carries attenuated flow');
  _expect(
    graph.flowFrom('hall', distance: 0)['outside']!.isFinite,
    'zero distance finite',
  );

  final economy = MantleEconomy(hours: 2, gas: 1);
  final lit = economy.light('mantle-hall');
  _expect(
    lit.accepted && lit.eventKind == 'mantle.lit',
    'affordable light commits',
  );
  final duplicate = economy.light('mantle-hall');
  _expect(
    !duplicate.accepted && duplicate.eventKind == 'mantle.refused.alreadyLit',
    'duplicate refuses',
  );
  final refused = economy.light('mantle-living');
  _expect(
    !refused.accepted && economy.hours == 1 && economy.gas == 0,
    'gas refusal is atomic',
  );
  final noGas = economy.light('mantle-kitchen');
  _expect(
    noGas.reason == MantleActionReason.insufficientGas && economy.hours == 1,
    'unaffordable gas preserves hours',
  );
  print('gaslight pure graph and atomic mantle economy pass');
}
