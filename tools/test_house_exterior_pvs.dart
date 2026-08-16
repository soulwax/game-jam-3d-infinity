import 'package:quarantine/house/exterior_pvs.dart';
import 'package:quarantine/house/exterior_mesh_adapter.dart';
import 'package:quarantine/house/exterior_scene.dart';
import 'house_fixture.dart';

Never fail(String message) => throw StateError('house exterior PVS: $message');

void require(bool condition, String message) {
  if (!condition) fail(message);
}

void main() {
  final house = loadAuthoredHouse(seed: 42);
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
  require(
    ExteriorPvs.castsShadowForCell('front') &&
        ExteriorPvs.castsShadowForCell('rear-service'),
    'facade cells must retain hero shadow casting',
  );
  require(
    !ExteriorPvs.castsShadowForCell('street') &&
        !ExteriorPvs.castsShadowForCell('roof-drainage'),
    'distant context cells must use shadow-caster LOD',
  );
  final generated = buildHouseExteriorMesh(house);
  final parts = toPixeldartCellMeshParts(generated);
  require(parts.isNotEmpty, 'cell partition produced no exterior parts');
  require(
    parts.every((part) => ExteriorPvs.allCells.contains(part.cellId)),
    'cell partition produced an unknown PVS cell',
  );
  require(
    parts.map((part) => '${part.cellId}:${part.material}').toSet().length ==
        parts.length,
    'cell/material partition keys are not unique',
  );
  require(
    parts.fold<int>(0, (sum, part) => sum + part.mesh.indices!.length ~/ 3) ==
        generated.triangleCount,
    'cell partition changed the authored triangle count',
  );
  final hallCells = pvs.cellsForRoom('hall');
  final hallParts = pvs
      .filterItems(
        items: parts,
        requestedCells: hallCells,
        cellOf: (part) => part.cellId,
      )
      .toList(growable: false);
  require(
    hallParts.isNotEmpty && hallParts.length < parts.length,
    'hall PVS did not filter the exterior cell working set',
  );
  require(
    hallParts.every((part) => hallCells.contains(part.cellId)),
    'hall submission included an unrequested exterior cell',
  );
  var badRequestedRejected = false;
  try {
    pvs
        .filterItems(
          items: const ['front'],
          requestedCells: const {'not-authored'},
          cellOf: (cell) => cell,
        )
        .toList();
  } catch (error) {
    if (error is! ArgumentError) rethrow;
    badRequestedRejected = true;
  }
  require(badRequestedRejected, 'unknown requested PVS cell was accepted');
  var badItemRejected = false;
  try {
    pvs
        .filterItems(
          items: const ['not-authored'],
          requestedCells: const {'front'},
          cellOf: (cell) => cell,
        )
        .toList();
  } catch (error) {
    if (error is! StateError) rethrow;
    badItemRejected = true;
  }
  require(badItemRejected, 'unknown retained-item PVS cell was accepted');
  print(
    'house exterior PVS: ${ExteriorCameraBand.values.length} bands and 8 room mappings pass',
  );
}
