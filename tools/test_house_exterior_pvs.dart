import 'package:quarantine/house/exterior_pvs.dart';
import 'package:quarantine/house/house.dart';

Never fail(String message) => throw StateError('house exterior PVS: $message');

void require(bool condition, String message) {
  if (!condition) fail(message);
}

void main() {
  final house = House(42);
  const pvs = ExteriorPvs();
  pvs.validateAgainst(house);
  for (final band in ExteriorCameraBand.values) {
    final cells = pvs.cellsForBand(band);
    require(cells.isNotEmpty, '${band.name} band has no cells');
    require(
      cells.every(ExteriorPvs.allCells.contains),
      '${band.name} has unknown cell',
    );
  }
  require(
    pvs.cellsForRoom('hall').contains('front'),
    'hall must retain front elevation context',
  );
  require(
    pvs.cellsForRoom('kitchen').contains('rear-service'),
    'kitchen must retain rear service context',
  );
  require(
    pvs.cellsForRoom('spare-room').contains('neighbor-roofs'),
    'spare room must retain roof context',
  );
  print(
    'house exterior PVS: ${ExteriorCameraBand.values.length} bands and 8 room mappings pass',
  );
}
