import 'math3.dart';

/// Descriptor for a candidate light source being submitted to the renderer.
class CandidateLight {
  final int id;
  final String type; // 'point' or 'spot'
  final Vec3 position;
  final Vec3 color;
  final double intensity;
  final double radius;

  CandidateLight({
    required this.id,
    required this.type,
    required this.position,
    required this.color,
    required this.intensity,
    required this.radius,
  }) {
    if (id < 0) throw ArgumentError.value(id, 'id', 'must be non-negative');
    if (type != 'point' && type != 'spot') {
      throw ArgumentError.value(type, 'type', 'must be point or spot');
    }
    if (!intensity.isFinite || intensity < 0) {
      throw ArgumentError.value(
        intensity,
        'intensity',
        'must be finite and >= 0',
      );
    }
    if (!radius.isFinite || radius <= 0) {
      throw ArgumentError.value(radius, 'radius', 'must be finite and > 0');
    }
  }

  /// Calculates distance-attenuated importance score relative to [cameraPos].
  double calculateImportanceScore(Vec3 cameraPos) {
    final dist = (position - cameraPos).length;
    final distFactor = 1.0 / (1.0 + 0.1 * dist + 0.05 * dist * dist);
    return intensity * radius * distFactor;
  }
}

/// Evaluated light selection result per frame for R-00.
class LightRankingResult {
  final List<CandidateLight> acceptedPoints;
  final List<CandidateLight> rejectedPoints;
  final List<CandidateLight> acceptedSpots;
  final List<CandidateLight> rejectedSpots;
  final Map<int, String> rejectionReasons;

  const LightRankingResult({
    required this.acceptedPoints,
    required this.rejectedPoints,
    required this.acceptedSpots,
    required this.rejectedSpots,
    required this.rejectionReasons,
  });
}

/// R-00 Light Ranking & Hysteresis Controller.
/// Enforces GPU light capacity limits and hysteresis (+15% score threshold to swap active lights)
/// to eliminate frame-to-frame light popping.
class LightRankingController {
  final int maxPointLights;
  final int maxSpotLights;
  final double hysteresisThreshold;

  final Set<int> _activePointIds = {};
  final Set<int> _activeSpotIds = {};
  final Map<int, double> _lastScores = {};

  LightRankingController({
    this.maxPointLights = 4,
    this.maxSpotLights = 2,
    this.hysteresisThreshold =
        0.15, // 15% hysteresis advantage required to evict
  }) {
    if (maxPointLights < 0 || maxSpotLights < 0) {
      throw ArgumentError('light capacities must be >= 0');
    }
    if (!hysteresisThreshold.isFinite || hysteresisThreshold < 0) {
      throw ArgumentError('hysteresisThreshold must be finite and >= 0');
    }
  }

  LightRankingResult rankLights({
    required Vec3 cameraPosition,
    required List<CandidateLight> points,
    required List<CandidateLight> spots,
  }) {
    final ids = <int>{};
    for (final candidate in [...points, ...spots]) {
      if (!ids.add(candidate.id)) {
        throw ArgumentError(
          'light IDs must be unique per ranking pass: ${candidate.id}',
        );
      }
    }
    final acceptedP = <CandidateLight>[];
    final rejectedP = <CandidateLight>[];
    final acceptedS = <CandidateLight>[];
    final rejectedS = <CandidateLight>[];
    final reasons = <int, String>{};

    // Rank Points
    _evaluateCategory(
      candidates: points,
      maxCount: maxPointLights,
      activeIds: _activePointIds,
      cameraPosition: cameraPosition,
      accepted: acceptedP,
      rejected: rejectedP,
      reasons: reasons,
    );

    // Rank Spots
    _evaluateCategory(
      candidates: spots,
      maxCount: maxSpotLights,
      activeIds: _activeSpotIds,
      cameraPosition: cameraPosition,
      accepted: acceptedS,
      rejected: rejectedS,
      reasons: reasons,
    );

    return LightRankingResult(
      acceptedPoints: acceptedP,
      rejectedPoints: rejectedP,
      acceptedSpots: acceptedS,
      rejectedSpots: rejectedS,
      rejectionReasons: reasons,
    );
  }

  void _evaluateCategory({
    required List<CandidateLight> candidates,
    required int maxCount,
    required Set<int> activeIds,
    required Vec3 cameraPosition,
    required List<CandidateLight> accepted,
    required List<CandidateLight> rejected,
    required Map<int, String> reasons,
  }) {
    final scored = candidates.map((light) {
      final score = light.calculateImportanceScore(cameraPosition);
      final wasActive = activeIds.contains(light.id);
      // Hysteresis boost for currently active lights
      final effectiveScore = wasActive
          ? score * (1.0 + hysteresisThreshold)
          : score;
      return (light: light, score: score, effectiveScore: effectiveScore);
    }).toList();

    scored.sort((a, b) {
      final score = b.effectiveScore.compareTo(a.effectiveScore);
      return score == 0 ? a.light.id.compareTo(b.light.id) : score;
    });

    final nextActive = <int>{};
    for (var i = 0; i < scored.length; i++) {
      final item = scored[i];
      if (i < maxCount && item.score > 0.01) {
        accepted.add(item.light);
        nextActive.add(item.light.id);
        _lastScores[item.light.id] = item.score;
      } else {
        rejected.add(item.light);
        reasons[item.light.id] = i >= maxCount
            ? 'Exceeded maximum capacity ($maxCount)'
            : 'Importance score below threshold';
      }
    }

    activeIds
      ..clear()
      ..addAll(nextActive);
  }

  void reset() {
    _activePointIds.clear();
    _activeSpotIds.clear();
    _lastScores.clear();
  }
}
