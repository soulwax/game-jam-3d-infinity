import '../engine/vec3.dart';

enum TransientType {
  spark,
  dustParticle,
  rainStreak,
  breathFog,
}

class TransientItem {
  final String id;
  final TransientType type;
  final Vec3 position;
  final double durationSec;
  double _elapsedSec = 0.0;

  TransientItem({
    required this.id,
    required this.type,
    required this.position,
    required this.durationSec,
  }) {
    if (durationSec <= 0) {
      throw ArgumentError('durationSec must be positive');
    }
  }

  double get elapsedSec => _elapsedSec;
  double get progress => (_elapsedSec / durationSec).clamp(0.0, 1.0);
  bool get isExpired => progress >= 1.0;
  double get alpha => (1.0 - progress).clamp(0.0, 1.0);

  void step(double deltaSec) {
    _elapsedSec += deltaSec;
  }

  Map<String, Object> toJson() => {
        'id': id,
        'type': type.name,
        'position': [position.x, position.y, position.z],
        'durationSec': durationSec,
        'progress': progress,
        'alpha': alpha,
      };
}

/// Frame queue transient rendering route & lifetime manager for VIS-016 / R-07.
class FrameQueueTransients {
  final List<TransientItem> _items = [];
  int _nextId = 1;

  List<TransientItem> get activeItems => List.unmodifiable(_items);
  int get activeCount => _items.length;

  String spawn({
    required TransientType type,
    required Vec3 position,
    required double durationSec,
  }) {
    final id = 'transient_${_nextId++}';
    final item = TransientItem(
      id: id,
      type: type,
      position: position,
      durationSec: durationSec,
    );
    _items.add(item);
    return id;
  }

  void step(double deltaSec) {
    if (deltaSec < 0) return;
    for (final item in _items) {
      item.step(deltaSec);
    }
    _items.removeWhere((item) => item.isExpired);
  }

  void clear() {
    _items.clear();
  }
}
