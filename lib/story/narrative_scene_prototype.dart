import 'package:quarantine/story/narrative_state.dart';

/// Representation of a story reaction prototype in NAR-04 and NAR-05.
class NarrativeScenePrototype {
  final String sceneId;
  final String visitorName;
  final int arrivalDay;
  final List<String> reactionOptionIds;

  const NarrativeScenePrototype({
    required this.sceneId,
    required this.visitorName,
    required this.arrivalDay,
    required this.reactionOptionIds,
  });

  Map<String, dynamic> toJson() => {
        'sceneId': sceneId,
        'visitorName': visitorName,
        'arrivalDay': arrivalDay,
        'reactionOptionIds': reactionOptionIds,
      };
}

/// NAR-04, NAR-05 Story Reaction Schema & Scene Prototype Manager.
class NarrativeScenePrototypeManager {
  static const Map<String, NarrativeScenePrototype> prototypeScenes = {
    'scene-denise-d2': NarrativeScenePrototype(
      sceneId: 'scene-denise-d2',
      visitorName: 'Denise',
      arrivalDay: 2,
      reactionOptionIds: ['accept-parcel', 'refuse-parcel', 'ask-brother'],
    ),
    'scene-sylvia-d3': NarrativeScenePrototype(
      sceneId: 'scene-sylvia-d3',
      visitorName: 'Sylvia',
      arrivalDay: 3,
      reactionOptionIds: ['grant-exemption', 'deny-exemption', 'inspect-papers'],
    ),
    'scene-sowerby-d5': NarrativeScenePrototype(
      sceneId: 'scene-sowerby-d5',
      visitorName: 'Sowerby',
      arrivalDay: 5,
      reactionOptionIds: ['inspect-coal', 'check-latches', 'dismiss-caller'],
    ),
  };

  /// Validates reaction choice reachability against a NarrativeState instance.
  static bool validateChoiceReachability({
    required String sceneId,
    required String optionId,
    required NarrativeState state,
  }) {
    final prototype = prototypeScenes[sceneId];
    if (prototype == null) return false;
    return prototype.reactionOptionIds.contains(optionId);
  }
}
