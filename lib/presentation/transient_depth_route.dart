import 'package:quarantine/engine/math3.dart';

/// Enum of transient object types for R-07.
enum TransientType {
  glass,
  flame,
  dust,
  rain,
  smoke,
  breath,
  lightShaft,
}

/// Representation of a depth-sorted transient visual item for R-07.
class TransientDepthItem {
  final int id;
  final TransientType type;
  final Vec3 position;
  final double boundsRadius;
  final double depthDistance;
  double lifetimeProgress; // 0.0 (fresh) to 1.0 (expired)
  final double baseOpacity;

  TransientDepthItem({
    required this.id,
    required this.type,
    required this.position,
    required this.boundsRadius,
    required this.depthDistance,
    this.lifetimeProgress = 0.0,
    this.baseOpacity = 1.0,
  });

  /// Calculates effective opacity alpha based on lifetime progress and reduced motion mode.
  double calculateOpacity(bool reducedMotion) {
    if (lifetimeProgress >= 1.0) return 0.0;
    final decay = (1.0 - lifetimeProgress).clamp(0.0, 1.0);
    // Reduced motion dampens transient opacity to minimize visual distractions
    final motionFactor = reducedMotion ? 0.5 : 1.0;
    return baseOpacity * decay * motionFactor;
  }

  /// Returns true if the item is rejected by opaque scene depth (behind opaque geometry).
  bool isDepthRejected(double opaqueDepthAtPosition) {
    return depthDistance > (opaqueDepthAtPosition + boundsRadius);
  }
}

/// R-07 Depth-Aware Transient Route & Back-to-Front Alpha Sorting Queue.
class TransientDepthQueue {
  final List<TransientDepthItem> _items = [];

  int get itemCount => _items.length;

  void enqueue(TransientDepthItem item) {
    _items.add(item);
  }

  /// Advances lifetimes by [deltaSeconds], sorts back-to-front by depth distance, and prunes expired items.
  List<TransientDepthItem> processFrame({
    required double deltaSeconds,
    required double opaqueDepth,
    required bool reducedMotion,
  }) {
    final active = <TransientDepthItem>[];

    for (final item in _items) {
      item.lifetimeProgress += deltaSeconds * 0.5; // 2-second nominal lifetime
      if (item.lifetimeProgress < 1.0 && !item.isDepthRejected(opaqueDepth)) {
        active.add(item);
      }
    }

    // Sort back-to-front (furthest depth distance first) for standard alpha blending
    active.sort((a, b) => b.depthDistance.compareTo(a.depthDistance));

    _items
      ..clear()
      ..addAll(active);

    return active;
  }

  void clear() {
    _items.clear();
  }
}
