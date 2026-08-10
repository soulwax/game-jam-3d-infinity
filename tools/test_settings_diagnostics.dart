import 'package:quarantine/ui/audio_settings.dart';
import 'package:quarantine/ui/gameplay_presentation_policy.dart';
import 'package:quarantine/ui/gameplay_settings.dart';
import 'package:quarantine/ui/graphics_settings.dart';
import 'package:quarantine/ui/settings_diagnostics.dart';
import 'package:quarantine/ui/visual_settings.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final visualStore = VisualSettingsStore();
  final graphicsStore = GraphicsSettingsStore();
  final audioStore = AudioSettingsStore();
  final gameplayProfile = GameplaySettingsProfile();

  final visualPolicy = VisualPresentationPolicy.fromProfile(visualStore.effective);
  final audioPolicy = AudioPresentationPolicy.fromProfile(audioStore.effective);
  const capabilities = GraphicsCapabilitySnapshot.safe;

  final report = SettingsDiagnosticsReport(
    visualStore: visualStore,
    graphicsStore: graphicsStore,
    audioStore: audioStore,
    gameplayProfile: gameplayProfile,
    visualPolicy: visualPolicy,
    audioPolicy: audioPolicy,
    capabilities: capabilities,
  );

  final json = report.toJson();
  check(json.containsKey('timestamp'), 'report has timestamp');
  check(json.containsKey('visual'), 'report has visual section');
  check(json.containsKey('graphics'), 'report has graphics section');
  check(json.containsKey('audio'), 'report has audio section');
  check(json.containsKey('gameplay'), 'report has gameplay section');

  final visualSection = json['visual'] as Map<String, Object?>;
  final visualPolicyMap = visualSection['policy'] as Map<String, Object?>;
  check(visualPolicyMap['exposureMultiplier'] == 1.0, 'visual policy exposureMultiplier is 1.0');
  check(visualPolicyMap['fovDegrees'] == 75.0, 'visual policy fovDegrees is 75.0');

  final audioSection = json['audio'] as Map<String, Object?>;
  final audioPolicyMap = audioSection['policy'] as Map<String, Object?>;
  check(audioPolicyMap['isMono'] == false, 'audio policy isMono is false');
  check(audioPolicyMap['stereoSpread'] == 1.0, 'audio policy stereoSpread is 1.0');

  print('settings diagnostics S-09: report aggregation, nested policy resolution, and JSON export pass');
}
