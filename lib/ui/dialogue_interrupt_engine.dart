/// The type of dialogue interruption.
enum InterruptType {
  /// The player barged in and skipped the rest of the line.
  playerBargeIn,

  /// The NPC became impatient due to player silence.
  npcImpatience,

  /// The player walked away during dialogue.
  walkAway,
}

/// Represents a dialogue interrupt event.
class DialogueInterruptEvent {
  /// The type of interrupt.
  final InterruptType type;

  /// Timestamp of the interrupt in milliseconds.
  final int timestampMs;

  /// The ID of the speaker who was interrupted.
  final String speakerId;

  /// The ID of the line being spoken.
  final String lineId;

  /// The text that was truncated.
  final String truncatedText;

  /// The duration of silence before the interrupt.
  final int silenceDurationAtInterruptMs;

  /// Creates a new [DialogueInterruptEvent].
  const DialogueInterruptEvent({
    required this.type,
    required this.timestampMs,
    required this.speakerId,
    required this.lineId,
    required this.truncatedText,
    required this.silenceDurationAtInterruptMs,
  });

  /// Converts the event to a JSON map.
  Map<String, dynamic> toJson() {
    return {
      'type': type.name,
      'timestampMs': timestampMs,
      'speakerId': speakerId,
      'lineId': lineId,
      'truncatedText': truncatedText,
      'silenceDurationAtInterruptMs': silenceDurationAtInterruptMs,
    };
  }
}

/// Configuration policy for dialogue interrupts.
class DialogueInterruptPolicy {
  /// When player remains silent for this long (in ms), NPC delivers an impatient remark.
  final int npcBargeInThresholdMs;

  /// Player pressing Enter/Space after this many chars skips the rest of the line.
  final int playerBargeInMinChars;

  /// Creates a new [DialogueInterruptPolicy].
  const DialogueInterruptPolicy({
    this.npcBargeInThresholdMs = 4000,
    this.playerBargeInMinChars = 5,
  });
}

/// Engine to evaluate and track dialogue interrupts.
class DialogueInterruptEngine {
  /// Evaluates whether an NPC impatience interrupt should occur.
  static DialogueInterruptEvent? evaluateNpcImpatience({
    required DialogueInterruptPolicy policy,
    required int silenceDurationMs,
    required int timestampMs,
    required String speakerId,
    required String lineId,
    required String currentText,
  }) {
    if (silenceDurationMs >= policy.npcBargeInThresholdMs) {
      return DialogueInterruptEvent(
        type: InterruptType.npcImpatience,
        timestampMs: timestampMs,
        speakerId: speakerId,
        lineId: lineId,
        truncatedText: currentText,
        silenceDurationAtInterruptMs: silenceDurationMs,
      );
    }
    return null;
  }

  /// Evaluates a player barge-in interrupt.
  static DialogueInterruptEvent evaluatePlayerBargeIn({
    required DialogueInterruptPolicy policy,
    required int timestampMs,
    required String speakerId,
    required String lineId,
    required String truncatedText,
    required int charsShown,
    required int silenceDurationMs,
  }) {
    // If not enough chars shown, it might just be skipped but we still return an event.
    // The policy could dictate whether we allow it, but we'll assume the engine
    // calls this when a barge in occurs.
    return DialogueInterruptEvent(
      type: InterruptType.playerBargeIn,
      timestampMs: timestampMs,
      speakerId: speakerId,
      lineId: lineId,
      truncatedText: truncatedText,
      silenceDurationAtInterruptMs: silenceDurationMs,
    );
  }

  /// Exports narrative facts from a list of interrupt events.
  static Map<String, String> exportNarrativeFacts(List<DialogueInterruptEvent> events) {
    final Map<String, String> facts = {};
    facts['dialogue.interrupt.count'] = events.length.toString();

    final Set<String> interruptedNpcs = {};
    for (final event in events) {
      if (event.type == InterruptType.playerBargeIn) {
        interruptedNpcs.add(event.speakerId);
      }
    }

    for (final npc in interruptedNpcs) {
      facts['dialogue.interrupted.$npc'] = 'true';
    }

    return facts;
  }

  /// Validates the engine functionality.
  static bool validate() {
    const policy = DialogueInterruptPolicy();
    final npcEvent = evaluateNpcImpatience(
      policy: policy,
      silenceDurationMs: 4500,
      timestampMs: 100,
      speakerId: 'npc1',
      lineId: 'line1',
      currentText: 'hello',
    );
    if (npcEvent == null) return false;

    final playerEvent = evaluatePlayerBargeIn(
      policy: policy,
      timestampMs: 200,
      speakerId: 'npc2',
      lineId: 'line2',
      truncatedText: 'world',
      charsShown: 6,
      silenceDurationMs: 100,
    );

    final facts = exportNarrativeFacts([npcEvent, playerEvent]);
    if (facts['dialogue.interrupt.count'] != '2') return false;
    if (facts['dialogue.interrupted.npc2'] != 'true') return false;

    return true;
  }
}
