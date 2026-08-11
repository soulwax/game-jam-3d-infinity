/// The UI package provides the user interface controllers.
library ui;

/// Represents the phase of the current conversation.
enum ConversationPhase {
  /// No active conversation.
  idle,

  /// Footsteps or door knock — no UI visible.
  approaching,

  /// Speaker identified, first line reveals.
  greeting,

  /// Multi-turn back-and-forth.
  exchange,

  /// Choice or silence options visible.
  playerResponse,

  /// NPC responds to player choice.
  reaction,

  /// Farewell line, footsteps recede.
  departure,

  /// Post-departure silence, residue placed.
  lingering,
}

/// A line of dialogue delivered by an NPC.
class DialogueLine {
  /// Roster ID of the speaker.
  final String speakerId;

  /// Display name of the speaker.
  final String speakerName;

  /// The text content of the line.
  final String text;

  /// Estimated delivery time in milliseconds.
  final int durationMs;

  /// Whether the player can interrupt this line.
  final bool isInterruptible;

  /// Creates a new [DialogueLine].
  const DialogueLine({
    required this.speakerId,
    required this.speakerName,
    required this.text,
    required this.durationMs,
    this.isInterruptible = true,
  });

  /// Converts this line to a JSON-compatible map.
  Map<String, dynamic> toJson() => {
        'speakerId': speakerId,
        'speakerName': speakerName,
        'text': text,
        'durationMs': durationMs,
        'isInterruptible': isInterruptible,
      };
}

/// A player response option.
class DialogueResponseOption {
  /// Unique option ID for narrative tracking.
  final String id;

  /// Display text for this option.
  final String text;

  /// Whether this option represents silence.
  final bool isSilence;

  /// Duration of silence in milliseconds if this is a silence option.
  final int silenceDurationMs;

  /// Creates a new [DialogueResponseOption].
  const DialogueResponseOption({
    required this.id,
    required this.text,
    this.isSilence = false,
    this.silenceDurationMs = 8000,
  });

  /// Converts this option to a JSON-compatible map.
  Map<String, dynamic> toJson() => {
        'id': id,
        'text': text,
        'isSilence': isSilence,
        'silenceDurationMs': silenceDurationMs,
      };
}

/// The state of the dialogue controller.
class DialogueControllerState {
  /// Current conversation phase.
  final ConversationPhase phase;

  /// Currently displaying line, if any.
  final DialogueLine? currentLine;

  /// Lines waiting to be displayed.
  final List<DialogueLine> pendingLines;

  /// Available player response options.
  final List<DialogueResponseOption> responseOptions;

  /// The ID of the selected response, if any.
  final String? selectedResponseId;

  /// Whether the player walked away during this encounter.
  final bool walkAwayRecorded;

  /// Number of times the player interrupted.
  final int interruptCount;

  /// Elapsed time in milliseconds since encounter start.
  final int elapsedMs;

  /// Creates a new [DialogueControllerState].
  const DialogueControllerState({
    this.phase = ConversationPhase.idle,
    this.currentLine,
    this.pendingLines = const [],
    this.responseOptions = const [],
    this.selectedResponseId,
    this.walkAwayRecorded = false,
    this.interruptCount = 0,
    this.elapsedMs = 0,
  });

  /// Converts this state to a JSON-compatible map.
  Map<String, dynamic> toJson() => {
        'phase': phase.name,
        'currentLine': currentLine?.toJson(),
        'pendingLines': pendingLines.map((e) => e.toJson()).toList(),
        'responseOptions': responseOptions.map((e) => e.toJson()).toList(),
        'selectedResponseId': selectedResponseId,
        'walkAwayRecorded': walkAwayRecorded,
        'interruptCount': interruptCount,
        'elapsedMs': elapsedMs,
      };

  /// Creates a copy of this state with updated fields.
  DialogueControllerState copyWith({
    ConversationPhase? phase,
    DialogueLine? currentLine,
    bool clearCurrentLine = false,
    List<DialogueLine>? pendingLines,
    List<DialogueResponseOption>? responseOptions,
    String? selectedResponseId,
    bool clearSelectedResponseId = false,
    bool? walkAwayRecorded,
    int? interruptCount,
    int? elapsedMs,
  }) {
    return DialogueControllerState(
      phase: phase ?? this.phase,
      currentLine: clearCurrentLine ? null : (currentLine ?? this.currentLine),
      pendingLines: pendingLines ?? this.pendingLines,
      responseOptions: responseOptions ?? this.responseOptions,
      selectedResponseId: clearSelectedResponseId
          ? null
          : (selectedResponseId ?? this.selectedResponseId),
      walkAwayRecorded: walkAwayRecorded ?? this.walkAwayRecorded,
      interruptCount: interruptCount ?? this.interruptCount,
      elapsedMs: elapsedMs ?? this.elapsedMs,
    );
  }
}

/// Controls dialogue interactions during an encounter.
class DialogueController {
  DialogueControllerState _state = const DialogueControllerState();

  String? _visitorId;

  /// Current state of the dialogue controller.
  DialogueControllerState get state => _state;

  /// Never blocks modals.
  bool get isModalBlocking => false;

  /// Begins a new encounter with a visitor.
  void beginEncounter(String visitorId, String visitorName) {
    _visitorId = visitorId;
    _state = const DialogueControllerState(
      phase: ConversationPhase.approaching,
    );
  }

  /// Delivers a knock while in the approaching phase.
  void deliverKnock() {
    if (_state.phase == ConversationPhase.approaching) {
      // Remains in approaching
    }
  }

  /// Delivers the greeting line and transitions to greeting phase.
  void deliverGreeting(DialogueLine line) {
    _state = _state.copyWith(
      phase: ConversationPhase.greeting,
      currentLine: line,
    );
  }

  /// Queues a line for the exchange phase.
  void queueLine(DialogueLine line) {
    final pending = List<DialogueLine>.from(_state.pendingLines)..add(line);
    _state = _state.copyWith(
      phase: _state.phase == ConversationPhase.greeting ||
              _state.phase == ConversationPhase.exchange
          ? ConversationPhase.exchange
          : _state.phase,
      pendingLines: pending,
    );
  }

  /// Advances to the next pending line, or playerResponse if empty.
  void advanceLine() {
    if (_state.pendingLines.isNotEmpty) {
      final next = _state.pendingLines.first;
      final remaining = _state.pendingLines.skip(1).toList();
      _state = _state.copyWith(
        phase: ConversationPhase.exchange,
        currentLine: next,
        pendingLines: remaining,
      );
    } else {
      _state = _state.copyWith(
        phase: ConversationPhase.playerResponse,
        clearCurrentLine: true,
      );
    }
  }

  /// Presents response options to the player.
  void presentResponses(List<DialogueResponseOption> options) {
    _state = _state.copyWith(
      phase: ConversationPhase.playerResponse,
      responseOptions: options,
    );
  }

  /// Selects a response option.
  void selectResponse(String optionId) {
    _state = _state.copyWith(
      phase: ConversationPhase.reaction,
      selectedResponseId: optionId,
    );
  }

  /// Records that the player walked away.
  void playerWalkAway() {
    _state = _state.copyWith(
      walkAwayRecorded: true,
      phase: ConversationPhase.departure,
    );
  }

  /// Interrupts the current line.
  void playerInterrupt() {
    _state = _state.copyWith(
      interruptCount: _state.interruptCount + 1,
    );
    advanceLine();
  }

  /// Delivers a reaction line to the player's choice.
  void deliverReaction(DialogueLine line) {
    _state = _state.copyWith(
      phase: ConversationPhase.reaction,
      currentLine: line,
    );
  }

  /// Begins the departure phase with an optional farewell line.
  void beginDeparture(DialogueLine? farewellLine) {
    _state = _state.copyWith(
      phase: ConversationPhase.departure,
      currentLine: farewellLine,
      clearCurrentLine: farewellLine == null,
    );
  }

  /// Completes the departure phase.
  void completeDeparture() {
    _state = _state.copyWith(
      phase: ConversationPhase.lingering,
      clearCurrentLine: true,
    );
  }

  /// Ends the encounter and resets state.
  void endEncounter() {
    _visitorId = null;
    _state = const DialogueControllerState();
  }

  /// Returns the player's selected response in NarrativeState compatible format.
  /// First element is a reactionId placeholder, second is optionId.
  (String, String)? getChoiceForNarrative() {
    final optionId = _state.selectedResponseId;
    if (optionId != null) {
      return ('reaction_$optionId', optionId);
    }
    return null;
  }

  /// Returns the walk away flag data. (visitor, day) - dummy day 1 used since not tracked here
  (String, int)? getWalkAwayFlag() {
    if (_state.walkAwayRecorded && _visitorId != null) {
      return (_visitorId!, 1);
    }
    return null;
  }

  /// Returns the interrupt count.
  int getInterruptCount() => _state.interruptCount;

  /// Returns a JSON-compatible map of the current controller state.
  Map<String, dynamic> toJson() => _state.toJson();

  /// Validates a full encounter lifecycle and returns true if successful.
  static bool validate() {
    final controller = DialogueController();
    assert(controller.state.phase == ConversationPhase.idle);

    controller.beginEncounter('v1', 'Visitor');
    assert(controller.state.phase == ConversationPhase.approaching);

    controller.deliverKnock();
    assert(controller.state.phase == ConversationPhase.approaching);

    const line1 = DialogueLine(
      speakerId: 'v1',
      speakerName: 'Visitor',
      text: 'Hello',
      durationMs: 1000,
    );
    controller.deliverGreeting(line1);
    assert(controller.state.phase == ConversationPhase.greeting);
    assert(controller.state.currentLine == line1);

    const line2 = DialogueLine(
      speakerId: 'v1',
      speakerName: 'Visitor',
      text: 'Are you there?',
      durationMs: 1000,
    );
    controller.queueLine(line2);
    assert(controller.state.phase == ConversationPhase.exchange);

    controller.advanceLine();
    assert(controller.state.phase == ConversationPhase.exchange);
    assert(controller.state.currentLine == line2);

    controller.advanceLine();
    assert(controller.state.phase == ConversationPhase.playerResponse);

    const options = [
      DialogueResponseOption(id: 'opt1', text: 'Yes'),
      DialogueResponseOption(id: 'opt2', text: 'No'),
    ];
    controller.presentResponses(options);
    assert(controller.state.responseOptions == options);

    controller.selectResponse('opt1');
    assert(controller.state.phase == ConversationPhase.reaction);
    assert(controller.state.selectedResponseId == 'opt1');
    assert(controller.getChoiceForNarrative() != null);

    controller.beginDeparture(null);
    assert(controller.state.phase == ConversationPhase.departure);

    controller.completeDeparture();
    assert(controller.state.phase == ConversationPhase.lingering);

    controller.endEncounter();
    assert(controller.state.phase == ConversationPhase.idle);

    return true;
  }
}
