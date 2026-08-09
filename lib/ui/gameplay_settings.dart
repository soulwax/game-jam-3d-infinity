/// Presentation and comfort preferences for gameplay surfaces.
///
/// These values may change effort, timing, or explanation, but never change a
/// simulation action, cost, inventory result, or story branch.
enum GameplayInteractionMode { press, hold }

enum GameplayPromptDensity { minimal, standard, detailed }

enum GameplayTextPacing { instant, readable, slow }

enum GameplayJournalLayout { compact, spacious }

enum GameplayConfirmationLevel { important, always }

enum GameplaySaveFeedback { toast, detailed }

enum GameplayFocusLossBehavior { pauseAndMute, pauseOnly, continuePlayback }

final class GameplaySettingsProfile {
  static const int schemaVersion = 1;

  final int version;
  final GameplayInteractionMode interactionMode;
  final GameplayPromptDensity promptDensity;
  final GameplayTextPacing textPacing;
  final GameplayJournalLayout journalLayout;
  final GameplayConfirmationLevel confirmations;
  final GameplaySaveFeedback saveFeedback;
  final GameplayFocusLossBehavior focusLossBehavior;
  final bool contextualReminders;

  GameplaySettingsProfile({
    this.version = schemaVersion,
    this.interactionMode = GameplayInteractionMode.press,
    this.promptDensity = GameplayPromptDensity.standard,
    this.textPacing = GameplayTextPacing.readable,
    this.journalLayout = GameplayJournalLayout.spacious,
    this.confirmations = GameplayConfirmationLevel.important,
    this.saveFeedback = GameplaySaveFeedback.toast,
    this.focusLossBehavior = GameplayFocusLossBehavior.pauseAndMute,
    this.contextualReminders = true,
  }) {
    if (version != schemaVersion) {
      throw ArgumentError('unsupported gameplay settings version $version');
    }
  }

  static final firstRun = GameplaySettingsProfile();

  GameplaySettingsProfile copyWith({
    GameplayInteractionMode? interactionMode,
    GameplayPromptDensity? promptDensity,
    GameplayTextPacing? textPacing,
    GameplayJournalLayout? journalLayout,
    GameplayConfirmationLevel? confirmations,
    GameplaySaveFeedback? saveFeedback,
    GameplayFocusLossBehavior? focusLossBehavior,
    bool? contextualReminders,
  }) => GameplaySettingsProfile(
    interactionMode: interactionMode ?? this.interactionMode,
    promptDensity: promptDensity ?? this.promptDensity,
    textPacing: textPacing ?? this.textPacing,
    journalLayout: journalLayout ?? this.journalLayout,
    confirmations: confirmations ?? this.confirmations,
    saveFeedback: saveFeedback ?? this.saveFeedback,
    focusLossBehavior: focusLossBehavior ?? this.focusLossBehavior,
    contextualReminders: contextualReminders ?? this.contextualReminders,
  );

  Map<String, Object> toJson() => {
    'version': version,
    'interactionMode': interactionMode.name,
    'promptDensity': promptDensity.name,
    'textPacing': textPacing.name,
    'journalLayout': journalLayout.name,
    'confirmations': confirmations.name,
    'saveFeedback': saveFeedback.name,
    'focusLossBehavior': focusLossBehavior.name,
    'contextualReminders': contextualReminders,
  };

  factory GameplaySettingsProfile.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != schemaVersion) {
      throw const FormatException('unsupported gameplay settings profile');
    }
    T enumValue<T extends Enum>(String key, Iterable<T> values) {
      final rawValue = raw[key];
      if (rawValue is! String) {
        throw FormatException('invalid gameplay setting: $key');
      }
      return values.firstWhere(
        (value) => value.name == rawValue,
        orElse: () => throw FormatException('invalid gameplay setting: $key'),
      );
    }

    final reminders = raw['contextualReminders'];
    if (reminders is! bool) {
      throw const FormatException('invalid gameplay setting: contextualReminders');
    }
    return GameplaySettingsProfile(
      interactionMode: enumValue(
        'interactionMode',
        GameplayInteractionMode.values,
      ),
      promptDensity: enumValue('promptDensity', GameplayPromptDensity.values),
      textPacing: enumValue('textPacing', GameplayTextPacing.values),
      journalLayout: enumValue('journalLayout', GameplayJournalLayout.values),
      confirmations: enumValue(
        'confirmations',
        GameplayConfirmationLevel.values,
      ),
      saveFeedback: enumValue('saveFeedback', GameplaySaveFeedback.values),
      focusLossBehavior: enumValue(
        'focusLossBehavior',
        GameplayFocusLossBehavior.values,
      ),
      contextualReminders: reminders,
    );
  }
}

/// Requested/effective holder for gameplay presentation preferences.
/// Effective negotiation is intentionally identity today: unlike graphics,
/// these choices do not depend on device capability.
final class GameplaySettingsStore {
  GameplaySettingsProfile requested;
  GameplaySettingsProfile effective;

  GameplaySettingsStore({
    GameplaySettingsProfile? requested,
    GameplaySettingsProfile? effective,
  }) : requested = requested ?? GameplaySettingsProfile.firstRun,
       effective = effective ?? GameplaySettingsProfile.firstRun;

  void setRequested(GameplaySettingsProfile profile) {
    requested = profile;
  }

  void setEffective(GameplaySettingsProfile profile) {
    effective = profile;
  }

  void reset() {
    requested = GameplaySettingsProfile.firstRun;
    effective = GameplaySettingsProfile.firstRun;
  }

  Map<String, Object> toJson() => {
    'version': GameplaySettingsProfile.schemaVersion,
    'requested': requested.toJson(),
    'effective': effective.toJson(),
  };

  factory GameplaySettingsStore.fromJson(Object? raw) {
    if (raw is! Map || raw['version'] != GameplaySettingsProfile.schemaVersion) {
      throw const FormatException('unsupported gameplay settings store');
    }
    return GameplaySettingsStore(
      requested: GameplaySettingsProfile.fromJson(raw['requested']),
      effective: GameplaySettingsProfile.fromJson(raw['effective']),
    );
  }
}
