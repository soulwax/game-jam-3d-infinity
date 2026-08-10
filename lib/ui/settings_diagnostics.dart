import 'package:quarantine/ui/audio_settings.dart';
import 'package:quarantine/ui/gameplay_settings.dart';
import 'package:quarantine/ui/graphics_settings.dart';
import 'package:quarantine/ui/visual_settings.dart';

/// Diagnostics snapshot summarizing requested vs effective settings and active policies.
class SettingsDiagnosticsReport {
  final DateTime timestamp;
  final VisualSettingsStore visualStore;
  final GraphicsSettingsStore graphicsStore;
  final AudioSettingsStore audioStore;
  final GameplaySettingsProfile gameplayProfile;
  final VisualPresentationPolicy visualPolicy;
  final AudioPresentationPolicy audioPolicy;
  final GraphicsCapabilitySnapshot capabilities;

  SettingsDiagnosticsReport({
    DateTime? timestamp,
    required this.visualStore,
    required this.graphicsStore,
    required this.audioStore,
    required this.gameplayProfile,
    required this.visualPolicy,
    required this.audioPolicy,
    required this.capabilities,
  }) : timestamp = timestamp ?? DateTime.now();

  Map<String, Object> toJson() => {
        'timestamp': timestamp.toIso8601String(),
        'visual': {
          'requested': visualStore.requested.toJson(),
          'effective': visualStore.effective.toJson(),
          'policy': {
            'brightnessFilter': visualPolicy.brightnessFilter,
            'exposureMultiplier': visualPolicy.exposureMultiplier,
            'fovDegrees': visualPolicy.fovDegrees,
            'cameraBreathScale': visualPolicy.cameraBreathScale,
            'reticleMode': visualPolicy.reticleMode.name,
            'colorGrade': visualPolicy.colorGrade.name,
          },
        },
        'graphics': {
          'requested': graphicsStore.requested.toJson(),
          'effective': graphicsStore.effective.toJson(),
          'capabilities': {
            'maxSamples': capabilities.maxSamples,
            'disjointTimerQuery': capabilities.disjointTimerQuery,
          },
        },
        'audio': {
          'requested': audioStore.requested.toJson(),
          'effective': audioStore.effective.toJson(),
          'policy': {
            'isMono': audioPolicy.isMono,
            'stereoSpread': audioPolicy.stereoSpread,
            'dynamicRangeScale': audioPolicy.dynamicRangeScale,
            'quietBoostDb': audioPolicy.quietBoostDb,
            'compressionThresholdDb': audioPolicy.compressionThresholdDb,
            'wetReverbScale': audioPolicy.wetReverbScale,
            'duckingAmountDb': audioPolicy.duckingAmountDb,
          },
        },
        'gameplay': gameplayProfile.toJson(),
      };
}
