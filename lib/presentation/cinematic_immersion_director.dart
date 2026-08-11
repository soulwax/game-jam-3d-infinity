import 'dart:math' as math;

import 'package:quarantine/engine/math3.dart';

/// Cinematic state and camera breathing parameters.
class CinematicImmersionState {
  final double letterboxHeight01;
  final double fovOffsetDegrees;
  final Vec3 eyeOffset;
  final bool isCinematicActive;

  const CinematicImmersionState({
    required this.letterboxHeight01,
    required this.fovOffsetDegrees,
    required this.eyeOffset,
    required this.isCinematicActive,
  });

  Map<String, dynamic> toJson() => {
        'letterboxHeight01': letterboxHeight01,
        'fovOffsetDegrees': fovOffsetDegrees,
        'eyeOffset': {'x': eyeOffset.x, 'y': eyeOffset.y, 'z': eyeOffset.z},
        'isCinematicActive': isCinematicActive,
      };
}

/// Director for cinematic letterboxing and organic camera breathing physics.
class CinematicImmersionDirector {
  static double _respiratoryPhase = 0.0;
  static double _currentLetterboxHeight = 0.0;

  /// Updates cinematic camera physics and letterbox transitions.
  static CinematicImmersionState update({
    required double deltaTimeSeconds,
    required int currentDay,
    required bool isInDialogueEncounter,
    double exhaustion01 = 0.2,
  }) {
    // 1. Advance breathing oscillator (rate increases with exhaustion)
    final breathRate = 1.8 + exhaustion01 * 1.2;
    _respiratoryPhase += deltaTimeSeconds * breathRate;

    // Organic vertical and subtle lateral breathing displacement
    final breathY = math.sin(_respiratoryPhase) * (0.015 + exhaustion01 * 0.025);
    final breathX = math.cos(_respiratoryPhase * 0.5) * (0.006 + exhaustion01 * 0.010);
    final eyeOffset = Vec3(breathX, breathY, 0.0);

    // 2. Anamorphic 2.39:1 letterboxing during pivotal encounters
    final targetLetterbox = isInDialogueEncounter ? 0.08 : 0.0; // 8% top and bottom bars
    _currentLetterboxHeight += (targetLetterbox - _currentLetterboxHeight) * math.min(1.0, deltaTimeSeconds * 6.0);

    // 3. Dynamic FOV constriction for tension
    final fovOffset = isInDialogueEncounter ? -4.0 : 0.0;

    return CinematicImmersionState(
      letterboxHeight01: _currentLetterboxHeight,
      fovOffsetDegrees: fovOffset,
      eyeOffset: eyeOffset,
      isCinematicActive: _currentLetterboxHeight > 0.01,
    );
  }

  /// Self-validation for unit tests.
  static bool validate() {
    _respiratoryPhase = 0.0;
    _currentLetterboxHeight = 0.0;

    // Test idle breathing
    final idle = update(
      deltaTimeSeconds: 0.5,
      currentDay: 5,
      isInDialogueEncounter: false,
      exhaustion01: 0.1,
    );
    if (idle.eyeOffset.y.abs() < 1e-5) return false;

    // Test encounter letterboxing transition
    for (var i = 0; i < 20; i++) {
      update(
        deltaTimeSeconds: 0.05,
        currentDay: 10,
        isInDialogueEncounter: true,
      );
    }
    if (_currentLetterboxHeight < 0.05) return false;

    _respiratoryPhase = 0.0;
    _currentLetterboxHeight = 0.0;
    return true;
  }
}
