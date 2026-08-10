import 'package:quarantine/engine/exterior_material_partition.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final partition = ExteriorMaterialPartition();
  check(partition.rangeCount == 0, 'starts empty');

  // Register all 8 exterior parts
  int idx = 0;
  for (final part in ExteriorPartType.values) {
    partition.registerRange(
      partType: part,
      materialId: idx + 1,
      startIndex: idx * 300,
      indexCount: 300,
      roomId: 'exterior',
    );
    idx++;
  }

  check(partition.rangeCount == 8, '8 exterior material ranges registered');

  // When exterior is visible
  final visible = partition.filterVisibleRanges(const {'hall', 'exterior'});
  check(visible.length == 8, '8 ranges visible when exterior is in PVS');

  // When exterior is NOT visible
  final hidden = partition.filterVisibleRanges(const {'cellar'});
  check(hidden.isEmpty, '0 ranges visible when exterior is omitted from PVS');

  print('exterior material partition VIS-005 / H-23: 8 exterior parts, material ranges, PVS cell filtering pass');
}
