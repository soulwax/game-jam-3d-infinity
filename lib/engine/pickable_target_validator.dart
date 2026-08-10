import 'vec3.dart';

final class PickableStateRecord {
  final String targetId;
  final bool isCollected;
  final bool isPlacedOnMantle;
  final Vec3 position;

  const PickableStateRecord({
    required this.targetId,
    this.isCollected = false,
    this.isPlacedOnMantle = false,
    required this.position,
  });

  PickableStateRecord copyWith({
    bool? isCollected,
    bool? isPlacedOnMantle,
    Vec3? position,
  }) => PickableStateRecord(
        targetId: targetId,
        isCollected: isCollected ?? this.isCollected,
        isPlacedOnMantle: isPlacedOnMantle ?? this.isPlacedOnMantle,
        position: position ?? this.position,
      );

  Map<String, Object> toJson() => {
        'targetId': targetId,
        'isCollected': isCollected,
        'isPlacedOnMantle': isPlacedOnMantle,
        'position': [position.x, position.y, position.z],
      };

  factory PickableStateRecord.fromJson(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('unsupported pickable state record');
    }
    final posRaw = raw['position'] as List;
    return PickableStateRecord(
      targetId: raw['targetId'] as String,
      isCollected: raw['isCollected'] as bool? ?? false,
      isPlacedOnMantle: raw['isPlacedOnMantle'] as bool? ?? false,
      position: Vec3(
        (posRaw[0] as num).toDouble(),
        (posRaw[1] as num).toDouble(),
        (posRaw[2] as num).toDouble(),
      ),
    );
  }
}

/// Pickable target focus & save-restore contract validator for VIS-008 / I-03.
class PickableTargetValidator {
  final Map<String, PickableStateRecord> _records = {};

  void registerTarget(PickableStateRecord record) {
    _records[record.targetId] = record;
  }

  PickableStateRecord? getRecord(String targetId) => _records[targetId];

  bool collectTarget(String targetId) {
    final record = _records[targetId];
    if (record == null) return false;
    if (record.isCollected) return true; // Idempotent check

    _records[targetId] = record.copyWith(isCollected: true);
    return true;
  }

  Map<String, Object> exportSaveState() => {
        'version': 1,
        'records': _records.map((k, v) => MapEntry(k, v.toJson())),
      };

  void restoreSaveState(Map raw) {
    if (raw['version'] != 1 || raw['records'] is! Map) {
      throw const FormatException('invalid save state version/format');
    }
    final recordsMap = raw['records'] as Map;
    _records.clear();
    for (final entry in recordsMap.entries) {
      final record = PickableStateRecord.fromJson(entry.value);
      _records[record.targetId] = record;
    }
  }
}
