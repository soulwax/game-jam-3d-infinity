import 'inventory.dart';

/// Save-safe record of authored inventory inspections.
///
/// The ledger is deliberately separate from rendering and story state: a
/// physical KeyE edge creates one event, and restoring a save restores only
/// the observed inspection counts.
final class InventoryInspectionLedger {
  final Map<String, int> _counts = <String, int>{};

  Map<String, int> get counts => Map.unmodifiable(_counts);

  int countFor(String id) => _counts[id] ?? 0;

  InventoryInspectionEvent inspect(InventoryPlacement placement) {
    final contract = inventoryInspectionContract(placement);
    final count = (_counts[placement.id] ?? 0) + 1;
    _counts[placement.id] = count;
    return InventoryInspectionEvent(
      placementId: placement.id,
      focusId: contract.targetId,
      semanticId: contract.eventId,
      stateValue: contract.stateValue,
      count: count,
    );
  }

  Map<String, dynamic> toJson() => {
    for (final id in (_counts.keys.toList()..sort())) id: _counts[id],
  };

  void restore(Object? raw) {
    if (raw == null) return;
    if (raw is! Map) {
      throw const FormatException('inventory inspections must be an object');
    }
    final map = Map<Object?, Object?>.from(raw);
    _counts.clear();
    for (final entry in map.entries) {
      final value = entry.value;
      if (entry.key is! String || value is! int || value < 0) {
        throw const FormatException('inventory inspection counts are invalid');
      }
      _counts[entry.key as String] = value;
    }
  }
}

final class InventoryInspectionEvent {
  final String placementId;
  final String focusId;
  final String semanticId;
  final String stateValue;
  final int count;

  const InventoryInspectionEvent({
    required this.placementId,
    required this.focusId,
    required this.semanticId,
    required this.stateValue,
    required this.count,
  });
}

final class InventoryInspectionContract {
  final String targetId;
  final String eventId;
  final String stateValue;

  const InventoryInspectionContract({
    required this.targetId,
    required this.eventId,
    required this.stateValue,
  });
}

InventoryInspectionContract inventoryInspectionContract(
  InventoryPlacement placement,
) {
  if (!placement.pickable) {
    throw StateError('inventory placement is not pickable: ${placement.id}');
  }
  final targetId = placement.focusId ?? placement.id;
  return InventoryInspectionContract(
    targetId: targetId,
    eventId: 'inventory-inspected:$targetId',
    stateValue: 'inspected',
  );
}
