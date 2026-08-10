import 'dart:math' as math;
import 'package:quarantine/engine/math3.dart';

/// Distance attenuation model for 3D spatialized sound sources.
enum DistanceModel {
  inverseSquare,
  linearClamp,
}

/// Evaluated 3D spatial audio presentation parameters for WebAudio nodes.
class SpatialAudioState {
  final double gainDb;
  final double gainLinear;
  final double pan;
  final double cutoffHz;
  final double reflectionDelayMs;
  final String sourceRoom;
  final String listenerRoom;

  const SpatialAudioState({
    required this.gainDb,
    required this.gainLinear,
    required this.pan,
    required this.cutoffHz,
    required this.reflectionDelayMs,
    required this.sourceRoom,
    required this.listenerRoom,
  });

  Map<String, dynamic> toJson() => {
        'gainDb': gainDb,
        'gainLinear': gainLinear,
        'pan': pan,
        'cutoffHz': cutoffHz,
        'reflectionDelayMs': reflectionDelayMs,
        'sourceRoom': sourceRoom,
        'listenerRoom': listenerRoom,
      };
}

/// Evaluates 3D spatial positioning, distance attenuation, and acoustic occlusion.
class SpatialAudioOcclusionCoordinator {
  final DistanceModel distanceModel;
  final double refDistance;
  final double maxDistance;
  final double rolloffFactor;

  const SpatialAudioOcclusionCoordinator({
    this.distanceModel = DistanceModel.inverseSquare,
    this.refDistance = 1.0,
    this.maxDistance = 15.0,
    this.rolloffFactor = 1.0,
  });

  /// Computes spatial audio gain, panning, and occlusion cutoff frequency.
  SpatialAudioState evaluate({
    required Vec3 sourcePos,
    required String sourceRoom,
    required Vec3 listenerPos,
    required double listenerYaw,
    required String listenerRoom,
    required double doorMuffleFraction,
    required bool isSameRoom,
  }) {
    // 1. Distance calculation and attenuation
    final delta = sourcePos - listenerPos;
    final dist = math.max(refDistance, delta.length);

    double gainLinear = 1.0;
    if (distanceModel == DistanceModel.inverseSquare) {
      gainLinear = refDistance / (refDistance + rolloffFactor * (dist - refDistance));
    } else {
      final clampedDist = math.min(dist, maxDistance);
      gainLinear = 1.0 - (clampedDist - refDistance) / (maxDistance - refDistance);
    }
    gainLinear = gainLinear.clamp(0.0, 1.0);

    // 2. Spatial stereo panning (-1.0 left, +1.0 right)
    final cosYaw = math.cos(listenerYaw);
    final sinYaw = math.sin(listenerYaw);
    // Transform delta to listener relative coordinates
    final relX = delta.x * cosYaw - delta.z * sinYaw;
    final relZ = delta.x * sinYaw + delta.z * cosYaw;
    final relAngle = math.atan2(relX, relZ);
    final pan = math.sin(relAngle).clamp(-1.0, 1.0);

    // 3. Acoustic occlusion filter cutoff calculation
    double cutoffHz = 20000.0; // Unoccluded full bandwidth
    if (!isSameRoom) {
      // Cross-room wall & portal muffle interpolation
      final muffleFactor = (1.0 - doorMuffleFraction).clamp(0.0, 1.0);
      cutoffHz = 500.0 + muffleFactor * 7500.0;
      gainLinear *= (0.4 + 0.6 * doorMuffleFraction);
    }

    final gainDb = 20.0 * (gainLinear > 1e-4 ? math.log(gainLinear) / math.ln10 : -4.0);
    final reflectionDelayMs = isSameRoom ? 15.0 : 45.0;

    return SpatialAudioState(
      gainDb: gainDb,
      gainLinear: gainLinear,
      pan: pan,
      cutoffHz: cutoffHz,
      reflectionDelayMs: reflectionDelayMs,
      sourceRoom: sourceRoom,
      listenerRoom: listenerRoom,
    );
  }
}
