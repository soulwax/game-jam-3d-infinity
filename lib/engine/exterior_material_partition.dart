enum ExteriorPartType {
  roof,
  siding,
  trim,
  chimney,
  foundation,
  porch,
  doorframe,
  glazing,
}

class ExteriorMaterialRange {
  final ExteriorPartType partType;
  final int materialId;
  final int startIndex;
  final int indexCount;
  final String roomId;

  const ExteriorMaterialRange({
    required this.partType,
    required this.materialId,
    required this.startIndex,
    required this.indexCount,
    this.roomId = 'exterior',
  }) : assert(startIndex >= 0, 'startIndex must be non-negative'),
       assert(indexCount > 0, 'indexCount must be positive');

  Map<String, Object> toJson() => {
        'partType': partType.name,
        'materialId': materialId,
        'startIndex': startIndex,
        'indexCount': indexCount,
        'roomId': roomId,
      };
}

/// Exterior shell indexed material partition & cell range filter for VIS-005 / H-23.
class ExteriorMaterialPartition {
  final List<ExteriorMaterialRange> _ranges = [];

  List<ExteriorMaterialRange> get ranges => List.unmodifiable(_ranges);
  int get rangeCount => _ranges.length;

  void registerRange({
    required ExteriorPartType partType,
    required int materialId,
    required int startIndex,
    required int indexCount,
    String roomId = 'exterior',
  }) {
    _ranges.add(ExteriorMaterialRange(
      partType: partType,
      materialId: materialId,
      startIndex: startIndex,
      indexCount: indexCount,
      roomId: roomId,
    ));
  }

  /// Filters material ranges by visible cell set.
  List<ExteriorMaterialRange> filterVisibleRanges(Set<String> visibleRooms) =>
      _ranges.where((range) => visibleRooms.contains(range.roomId)).toList();
}
