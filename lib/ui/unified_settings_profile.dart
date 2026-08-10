import 'audio_settings.dart';
import 'graphics_settings.dart';
import 'visual_settings.dart';

/// Gameplay settings category profile.
class GameplaySettingsProfile {
  final double lookSensitivity;
  final bool invertY;
  final bool headBob;

  const GameplaySettingsProfile({
    this.lookSensitivity = 1.0,
    this.invertY = false,
    this.headBob = true,
  });

  Map<String, Object> toJson() => {
        'lookSensitivity': lookSensitivity,
        'invertY': invertY,
        'headBob': headBob,
      };

  factory GameplaySettingsProfile.fromJson(Object? raw) {
    if (raw is! Map) return const GameplaySettingsProfile();
    return GameplaySettingsProfile(
      lookSensitivity: (raw['lookSensitivity'] as num?)?.toDouble() ?? 1.0,
      invertY: raw['invertY'] as bool? ?? false,
      headBob: raw['headBob'] as bool? ?? true,
    );
  }
}

/// Unified Settings Profile V2 for PF-01 / S-01.
/// Combines graphics, visual, audio, and gameplay category profiles into a single
/// versioned struct with backward-compatible migration from v1 flat storage.
class SettingsProfileV2 {
  final int version;
  final GraphicsSettingsProfile graphics;
  final VisualSettingsProfile visual;
  final AudioSettingsProfile audio;
  final GameplaySettingsProfile gameplay;

  const SettingsProfileV2({
    this.version = 2,
    this.graphics = const GraphicsSettingsProfile(),
    this.visual = const VisualSettingsProfile(),
    this.audio = const AudioSettingsProfile(),
    this.gameplay = const GameplaySettingsProfile(),
  });

  Map<String, Object> toJson() => {
        'version': version,
        'graphics': graphics.toJson(),
        'visual': visual.toJson(),
        'audio': audio.toJson(),
        'gameplay': gameplay.toJson(),
      };

  factory SettingsProfileV2.fromJson(Object? raw) {
    if (raw is! Map) return const SettingsProfileV2();
    final v = raw['version'] as int? ?? 1;

    // Migrate from v1 flat json if version == 1
    if (v == 1) {
      return SettingsProfileV2.migrateV1(raw);
    }

    return SettingsProfileV2(
      version: 2,
      graphics: GraphicsSettingsProfile.fromJson(raw['graphics']),
      visual: VisualSettingsProfile.fromJson(raw['visual']),
      audio: AudioSettingsProfile.fromJson(raw['audio']),
      gameplay: GameplaySettingsProfile.fromJson(raw['gameplay']),
    );
  }

  /// Migrates flat v1 settings dictionary into typed v2 sections.
  static SettingsProfileV2 migrateV1(Map raw) {
    final g = GraphicsSettingsProfile(
      renderScale: raw['renderScale'] as String? ?? 'auto',
    );
    final v = VisualSettingsProfile(
      brightness: (raw['brightness'] as num?)?.toDouble() ?? 1.0,
      fov: (raw['fov'] as num?)?.toDouble() ?? 75.0,
    );
    final a = const AudioSettingsProfile();
    final gp = GameplaySettingsProfile(
      lookSensitivity: (raw['lookSensitivity'] as num?)?.toDouble() ?? 1.0,
    );

    return SettingsProfileV2(
      version: 2,
      graphics: g,
      visual: v,
      audio: a,
      gameplay: gp,
    );
  }
}
