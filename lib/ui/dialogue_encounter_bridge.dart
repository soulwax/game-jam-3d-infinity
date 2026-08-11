/// The UI package provides the user interface controllers.
library ui;

import '../story/character_roster_registry.dart';
import '../story/narrative_state.dart';
import 'dialogue_controller.dart';
import 'spatial_voice_coordinator.dart';

/// Bridge between dialogue systems, narratives, and spatial audio.
class DialogueEncounterBridge {
  /// The underlying dialogue controller.
  final DialogueController controller;

  /// The character roster registry.
  final CharacterRosterRegistry registry;

  SpatialVoiceAudioSettings? _currentAudioSettings;

  /// Creates a new [DialogueEncounterBridge].
  DialogueEncounterBridge({
    required this.controller,
    required this.registry,
  });

  /// The current state of the underlying dialogue controller.
  DialogueControllerState get controllerState => controller.state;

  /// The current spatial audio settings, if evaluated.
  SpatialVoiceAudioSettings get currentAudioSettings {
    return _currentAudioSettings ?? const SpatialVoiceAudioSettings(
      stereoPan: 0.0,
      lowpassCutoffHz: 20000.0,
      bandpassLowCutoffHz: 0.0,
      bandpassHighCutoffHz: 20000.0,
      distanceVolume01: 1.0,
      isDirect: true,
    );
  }

  /// Whether an encounter is currently active.
  bool get isEncounterActive => controller.state.phase != ConversationPhase.idle;

  /// Starts a visitor encounter, sets up spatial audio, and begins the dialogue.
  void startVisitorEncounter({
    required String visitorId,
    required String openingLine,
    List<DialogueResponseOption>? responseOptions,
    required double doorX,
    required double doorY,
    required double doorZ,
    required double playerX,
    required double playerY,
    required double playerZ,
    required double playerYawDeg,
    VoiceTransmissionMode transmissionMode = VoiceTransmissionMode.throughDoorClosed,
    bool isAccessibilityClarity = false,
  }) {
    String visitorName = visitorId;
    for (final profile in CharacterRosterRegistry.roster) {
      if (profile.id == visitorId) {
        visitorName = profile.name;
        break;
      }
    }

    controller.beginEncounter(visitorId, visitorName);
    controller.deliverKnock();
    
    final line = DialogueLine(
      speakerId: visitorId,
      speakerName: visitorName,
      text: openingLine,
      durationMs: 3000,
    );
    
    controller.deliverGreeting(line);
    
    if (responseOptions != null && responseOptions.isNotEmpty) {
      controller.advanceLine();
      controller.presentResponses(responseOptions);
    }

    final params = SpatialVoiceParams(
      doorPositionX: doorX,
      doorPositionY: doorY,
      doorPositionZ: doorZ,
      playerCameraX: playerX,
      playerCameraY: playerY,
      playerCameraZ: playerZ,
      playerCameraYawDegrees: playerYawDeg,
      transmissionMode: transmissionMode,
      isAccessibilityVoiceClarityEnabled: isAccessibilityClarity,
    );
    _currentAudioSettings = SpatialVoiceCoordinator.evaluateSpatialVoice(params);
  }

  /// Submits the player's response and updates the narrative state.
  void submitPlayerResponse(
    String optionId, {
    required NarrativeState narrativeState,
    String? reactionId,
  }) {
    controller.selectResponse(optionId);
    
    if (reactionId != null) {
      narrativeState.choices[reactionId] = optionId;
      narrativeState.flags['last-reaction'] = reactionId;
    }
  }

  /// Handles the player walking away from the encounter.
  void handlePlayerWalkAway({
    required NarrativeState narrativeState,
    required int currentDay,
  }) {
    controller.playerWalkAway();
    
    final flag = controller.getWalkAwayFlag();
    if (flag != null) {
      narrativeState.rememberIgnoredVisit(flag.$1, currentDay);
    }
  }

  /// Handles an interrupt and updates narrative telemetry.
  void handleInterrupt({required NarrativeState narrativeState}) {
    controller.playerInterrupt();
    final count = controller.getInterruptCount();
    narrativeState.flags['dialogue.interrupt.count'] = count.toString();
  }

  /// Converts the bridge state to a JSON-compatible map.
  Map<String, dynamic> toJson() => {
        'controllerState': controller.toJson(),
        if (_currentAudioSettings != null)
          'audioSettings': _currentAudioSettings!.toJson(),
      };

  /// Self-test validation.
  static bool validate() {
    final controller = DialogueController();
    final registry = CharacterRosterRegistry();
    final bridge = DialogueEncounterBridge(
      controller: controller,
      registry: registry,
    );

    assert(!bridge.isEncounterActive);

    bridge.startVisitorEncounter(
      visitorId: 'iris',
      openingLine: 'Hello?',
      doorX: 10,
      doorY: 0,
      doorZ: 0,
      playerX: 0,
      playerY: 0,
      playerZ: 0,
      playerYawDeg: 0,
    );

    assert(bridge.isEncounterActive);
    assert(bridge.currentAudioSettings.lowpassCutoffHz == 1100.0);

    final state = NarrativeState();
    bridge.submitPlayerResponse('opt1', narrativeState: state, reactionId: 'r1');
    assert(state.choiceFor('r1') == 'opt1');

    bridge.handleInterrupt(narrativeState: state);
    assert(state.flag('dialogue.interrupt.count') == '1');

    bridge.handlePlayerWalkAway(narrativeState: state, currentDay: 2);
    assert(state.hasFlag('ignored.iris.2'));

    return true;
  }
}
