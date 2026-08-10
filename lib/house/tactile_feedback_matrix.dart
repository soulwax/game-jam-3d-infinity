/// Enum of interactive house element types for I-05.
enum InteractiveElementType {
  gaslightMantle,
  doorLeaf,
  radioWireless,
  grandfatherClock,
  journal,
  mirrorSurface,
  cabinetValve,
  deskDrawer,
}

/// Representation of atomic state for an interactive house element in I-05.
class ElementTactileState {
  final String elementId;
  final InteractiveElementType type;
  bool active;
  double progressFraction; // 0.0 to 1.0 (e.g. door opening, valve turning)
  double emissiveIntensity;
  int particleCount;
  String audioIntentEvent;

  ElementTactileState({
    required this.elementId,
    required this.type,
    this.active = false,
    this.progressFraction = 0.0,
    this.emissiveIntensity = 0.0,
    this.particleCount = 0,
    required this.audioIntentEvent,
  });

  Map<String, dynamic> toJson() => {
        'elementId': elementId,
        'type': type.name,
        'active': active,
        'progressFraction': progressFraction,
        'emissiveIntensity': emissiveIntensity,
        'particleCount': particleCount,
        'audioIntentEvent': audioIntentEvent,
      };

  factory ElementTactileState.fromJson(Map<String, dynamic> json) {
    return ElementTactileState(
      elementId: json['elementId'] as String,
      type: InteractiveElementType.values.firstWhere((e) => e.name == json['type']),
      active: json['active'] as bool? ?? false,
      progressFraction: (json['progressFraction'] as num? ?? 0.0).toDouble(),
      emissiveIntensity: (json['emissiveIntensity'] as num? ?? 0.0).toDouble(),
      particleCount: json['particleCount'] as int? ?? 0,
      audioIntentEvent: json['audioIntentEvent'] as String? ?? '',
    );
  }
}

/// I-05 Interactive Element State & Tactile Feedback Matrix.
class TactileFeedbackMatrix {
  final Map<String, ElementTactileState> _elements = {};

  int get registeredElementCount => _elements.length;

  void registerElement(ElementTactileState element) {
    _elements[element.elementId] = element;
  }

  ElementTactileState? getElement(String elementId) => _elements[elementId];

  /// Interacts with an element, updating atomic state, audio intent, emissive intensity, and particles.
  ElementTactileState interact({
    required String elementId,
    required double targetProgress,
    required bool reducedEffects,
  }) {
    final state = _elements[elementId];
    if (state == null) {
      throw StateError('Unknown interactive element: $elementId');
    }

    state.progressFraction = targetProgress.clamp(0.0, 1.0);
    state.active = state.progressFraction > 0.0;

    // Apply tactile feedback state transitions based on element type
    switch (state.type) {
      case InteractiveElementType.gaslightMantle:
        state.emissiveIntensity = state.active ? 1.0 : 0.0;
        state.particleCount = state.active ? (reducedEffects ? 4 : 12) : 0;
        state.audioIntentEvent = state.active ? 'gaslight_ignite_hiss' : 'gaslight_extinguish';
        break;
      case InteractiveElementType.doorLeaf:
        state.emissiveIntensity = 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = state.progressFraction > 0.5 ? 'door_latch_open' : 'door_latch_close';
        break;
      case InteractiveElementType.radioWireless:
        state.emissiveIntensity = state.active ? 0.6 : 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = 'radio_static_tuning';
        break;
      case InteractiveElementType.grandfatherClock:
        state.emissiveIntensity = 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = 'clock_chime_tick';
        break;
      case InteractiveElementType.journal:
        state.emissiveIntensity = 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = 'journal_page_turn';
        break;
      case InteractiveElementType.mirrorSurface:
        state.emissiveIntensity = state.active ? 0.3 : 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = 'mirror_reflection_shimmer';
        break;
      case InteractiveElementType.cabinetValve:
        state.emissiveIntensity = 0.0;
        state.particleCount = state.active ? (reducedEffects ? 2 : 6) : 0;
        state.audioIntentEvent = 'valve_steam_release';
        break;
      case InteractiveElementType.deskDrawer:
        state.emissiveIntensity = 0.0;
        state.particleCount = 0;
        state.audioIntentEvent = 'drawer_wood_slide';
        break;
    }

    return state;
  }

  /// Exports current state matrix to JSON for save/restore serialization.
  List<Map<String, dynamic>> exportSaveState() {
    return _elements.values.map((e) => e.toJson()).toList();
  }

  /// Restores state matrix from JSON save state.
  void importSaveState(List<dynamic> jsonList) {
    _elements.clear();
    for (final item in jsonList) {
      final state = ElementTactileState.fromJson(item as Map<String, dynamic>);
      _elements[state.elementId] = state;
    }
  }

  void cleanup() {
    _elements.clear();
  }
}
