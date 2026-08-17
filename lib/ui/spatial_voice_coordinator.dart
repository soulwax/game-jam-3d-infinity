import 'dart:math' as math;

/// Defines the voice transmission mode.
enum VoiceTransmissionMode {
  /// Voice is transmitted directly.
  directThreshold,

  /// Voice is transmitted through a closed door.
  throughDoorClosed,

  /// Voice is transmitted through a letterbox.
  throughLetterbox,

  /// Voice is transmitted across a room with occlusion.
  crossRoomOccluded,
}

/// Parameters for spatial voice evaluation.
class SpatialVoiceParams {
  /// X position of the door/source.
  final double doorPositionX;

  /// Y position of the door/source.
  final double doorPositionY;

  /// Z position of the door/source.
  final double doorPositionZ;

  /// X position of the player camera.
  final double playerCameraX;

  /// Y position of the player camera.
  final double playerCameraY;

  /// Z position of the player camera.
  final double playerCameraZ;

  /// Yaw of the player camera in degrees.
  final double playerCameraYawDegrees;

  /// The transmission mode.
  final VoiceTransmissionMode transmissionMode;

  /// Whether accessibility voice clarity is enabled.
  final bool isAccessibilityVoiceClarityEnabled;

  /// Creates a new [SpatialVoiceParams].
  const SpatialVoiceParams({
    required this.doorPositionX,
    required this.doorPositionY,
    required this.doorPositionZ,
    required this.playerCameraX,
    required this.playerCameraY,
    required this.playerCameraZ,
    required this.playerCameraYawDegrees,
    required this.transmissionMode,
    this.isAccessibilityVoiceClarityEnabled = false,
  });
}

/// Audio settings for spatial voice.
class SpatialVoiceAudioSettings {
  /// Stereo pan, -1.0 (left) to 1.0 (right).
  final double stereoPan;

  /// Lowpass cutoff frequency in Hz.
  final double lowpassCutoffHz;

  /// Bandpass low cutoff frequency in Hz.
  final double bandpassLowCutoffHz;

  /// Bandpass high cutoff frequency in Hz.
  final double bandpassHighCutoffHz;

  /// Distance volume, 0.0 to 1.0.
  final double distanceVolume01;

  /// Whether the transmission is direct.
  final bool isDirect;

  /// Creates a new [SpatialVoiceAudioSettings].
  const SpatialVoiceAudioSettings({
    required this.stereoPan,
    required this.lowpassCutoffHz,
    required this.bandpassLowCutoffHz,
    required this.bandpassHighCutoffHz,
    required this.distanceVolume01,
    required this.isDirect,
  });

  /// Converts the settings to a JSON map.
  Map<String, dynamic> toJson() {
    return {
      'stereoPan': stereoPan,
      'lowpassCutoffHz': lowpassCutoffHz,
      'bandpassLowCutoffHz': bandpassLowCutoffHz,
      'bandpassHighCutoffHz': bandpassHighCutoffHz,
      'distanceVolume01': distanceVolume01,
      'isDirect': isDirect,
    };
  }
}

/// Coordinator for evaluating spatial voice settings.
class SpatialVoiceCoordinator {
  /// Evaluates spatial voice settings based on given parameters.
  static SpatialVoiceAudioSettings evaluateSpatialVoice(SpatialVoiceParams params) {
    // 1. Calculate distance (Euclidean in 3D)
    final double dx = params.doorPositionX - params.playerCameraX;
    final double dy = params.doorPositionY - params.playerCameraY;
    final double dz = params.doorPositionZ - params.playerCameraZ;
    final double dist = math.sqrt(dx * dx + dy * dy + dz * dz);

    // 2. Calculate distance volume using inverse square law with a scaling factor
    double distanceVolume01 = 1.0 / (1.0 + dist * dist * 0.15);
    distanceVolume01 = distanceVolume01.clamp(0.05, 1.0);

    // 3. Calculate azimuth angle for panning
    // atan2(dx, dz) gives angle in XZ plane.
    final double angleToSourceRad = math.atan2(dx, dz);
    final double cameraYawRad = params.playerCameraYawDegrees * math.pi / 180.0;
    
    // Relative angle: angle from camera to source
    double relativeAngle = angleToSourceRad - cameraYawRad;
    
    // Normalize to [-pi, pi]
    while (relativeAngle > math.pi) {
      relativeAngle -= 2 * math.pi;
    }
    while (relativeAngle < -math.pi) {
      relativeAngle += 2 * math.pi;
    }

    // Pan follows the game's authored listener convention: at yaw zero,
    // world +X is the left channel and world -X is the right channel.
    double stereoPan = -math.sin(relativeAngle).clamp(-1.0, 1.0);

    // 4. Determine filtering based on transmission mode
    double lowpass = 20000.0;
    double bpLow = 0.0;
    double bpHigh = 20000.0;
    bool isDirect = false;

    if (params.isAccessibilityVoiceClarityEnabled) {
      lowpass = 20000.0;
      bpLow = 0.0;
      bpHigh = 20000.0;
      isDirect = params.transmissionMode == VoiceTransmissionMode.directThreshold;
    } else {
      switch (params.transmissionMode) {
        case VoiceTransmissionMode.directThreshold:
          lowpass = 20000.0;
          isDirect = true;
          break;
        case VoiceTransmissionMode.throughDoorClosed:
          lowpass = 1100.0;
          break;
        case VoiceTransmissionMode.throughLetterbox:
          bpLow = 300.0;
          bpHigh = 3000.0;
          break;
        case VoiceTransmissionMode.crossRoomOccluded:
          lowpass = 5000.0;
          break;
      }
    }

    return SpatialVoiceAudioSettings(
      stereoPan: stereoPan,
      lowpassCutoffHz: lowpass,
      bandpassLowCutoffHz: bpLow,
      bandpassHighCutoffHz: bpHigh,
      distanceVolume01: distanceVolume01,
      isDirect: isDirect,
    );
  }

  /// Validates the spatial voice coordinator.
  static bool validate() {
    final params = SpatialVoiceParams(
      doorPositionX: 10.0,
      doorPositionY: 0.0,
      doorPositionZ: 0.0,
      playerCameraX: 0.0,
      playerCameraY: 0.0,
      playerCameraZ: 0.0,
      playerCameraYawDegrees: 0.0,
      transmissionMode: VoiceTransmissionMode.throughDoorClosed,
    );

    final result = evaluateSpatialVoice(params);
    if (result.lowpassCutoffHz != 1100.0) return false;
    
    // Check distance scaling logic
    // Dist = 10, dist*dist = 100. 1.0 / (1.0 + 100*0.15) = 1.0 / 16.0 = 0.0625
    if ((result.distanceVolume01 - 0.0625).abs() > 0.001) return false;

    return true;
  }
}
