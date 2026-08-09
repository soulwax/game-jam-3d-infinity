/// Pure navigation contract for the pause and modal UI.
///
/// This file deliberately has no DOM or renderer dependency. The browser
/// shell can use the same transitions as a semantic automation driver, and a
/// future pause surface can replace the current flat panel without changing
/// pause semantics.
library;

enum PauseReason { pauseMenu, settings, journal, sleep, help, visitor, ending }

enum PausePage {
  root,
  settings,
  visual,
  graphics,
  gameplay,
  controls,
  audio,
  accessibility,
  help,
}

enum PauseTransitionKind {
  opened,
  pushed,
  backed,
  resumed,
  dismissed,
  unchanged,
}

class PauseEntry {
  final PausePage page;
  final PauseReason reason;
  final String? focusId;

  const PauseEntry({required this.page, required this.reason, this.focusId});

  Map<String, Object?> toJson() => {
    'page': page.name,
    'reason': reason.name,
    if (focusId != null) 'focusId': focusId,
  };

  @override
  bool operator ==(Object other) =>
      other is PauseEntry &&
      other.page == page &&
      other.reason == reason &&
      other.focusId == focusId;

  @override
  int get hashCode => Object.hash(page, reason, focusId);
}

class PauseLedgerState {
  final List<PauseEntry> stack;
  final List<PauseReason> modalReasons;
  final String? restoreFocusId;

  const PauseLedgerState({
    this.stack = const [],
    this.modalReasons = const [],
    this.restoreFocusId,
  });

  bool get isPaused => stack.isNotEmpty || modalReasons.isNotEmpty;
  bool get atRoot => stack.length == 1 && stack.first.page == PausePage.root;
  PauseEntry? get current => stack.isEmpty ? null : stack.last;
  List<PauseEntry> get pages => List.unmodifiable(stack);
  List<PauseReason> get modals => List.unmodifiable(modalReasons);

  PauseLedgerState copyWith({
    List<PauseEntry>? stack,
    List<PauseReason>? modalReasons,
    String? restoreFocusId,
    bool clearRestoreFocus = false,
  }) => PauseLedgerState(
    stack: List.unmodifiable(stack ?? this.stack),
    modalReasons: List.unmodifiable(modalReasons ?? this.modalReasons),
    restoreFocusId: clearRestoreFocus
        ? null
        : (restoreFocusId ?? this.restoreFocusId),
  );

  Map<String, Object?> toJson() => {
    'pages': stack.map((entry) => entry.toJson()).toList(growable: false),
    'modalReasons': modalReasons.map((reason) => reason.name).toList(),
    if (restoreFocusId != null) 'restoreFocusId': restoreFocusId,
  };
}

class PauseTransition {
  final PauseTransitionKind kind;
  final PauseLedgerState before;
  final PauseLedgerState after;
  final String? focusTargetId;

  const PauseTransition({
    required this.kind,
    required this.before,
    required this.after,
    this.focusTargetId,
  });

  bool get changed => kind != PauseTransitionKind.unchanged;
}

/// State machine for pause pages and preserved modal reasons.
class PauseLedger {
  PauseLedger([PauseLedgerState initial = const PauseLedgerState()])
    : _state = initial;

  PauseLedgerState _state;
  PauseLedgerState get state => _state;

  PauseTransition openRoot({String? restoreFocusId}) {
    final before = _state;
    if (_state.atRoot) {
      return _transition(PauseTransitionKind.unchanged, before);
    }
    _state = PauseLedgerState(
      stack: const [
        PauseEntry(page: PausePage.root, reason: PauseReason.pauseMenu),
      ],
      modalReasons: _state.modalReasons,
      restoreFocusId: restoreFocusId ?? _state.restoreFocusId,
    );
    return _transition(
      PauseTransitionKind.opened,
      before,
      focusTargetId: 'pause.resume',
    );
  }

  PauseTransition push(
    PausePage page, {
    PauseReason reason = PauseReason.settings,
    String? triggerFocusId,
    String? focusTargetId,
  }) {
    final before = _state;
    if (_state.stack.isEmpty) {
      openRoot(restoreFocusId: triggerFocusId);
    }
    final entry = PauseEntry(
      page: page,
      reason: reason,
      focusId: triggerFocusId,
    );
    _state = PauseLedgerState(
      stack: [..._state.stack, entry],
      modalReasons: _state.modalReasons,
      restoreFocusId: _state.restoreFocusId,
    );
    return _transition(
      PauseTransitionKind.pushed,
      before,
      focusTargetId: focusTargetId ?? _defaultFocus(page),
    );
  }

  PauseTransition back() {
    final before = _state;
    if (_state.stack.length > 1) {
      final removed = _state.stack.last;
      _state = PauseLedgerState(
        stack: _state.stack.sublist(0, _state.stack.length - 1),
        modalReasons: _state.modalReasons,
        restoreFocusId: _state.restoreFocusId,
      );
      return _transition(
        PauseTransitionKind.backed,
        before,
        focusTargetId: removed.focusId,
      );
    }
    if (_state.atRoot && _state.modalReasons.isEmpty) return resume();
    return _transition(PauseTransitionKind.unchanged, before);
  }

  PauseTransition resume() {
    final before = _state;
    if (_state.stack.isEmpty) {
      return _transition(PauseTransitionKind.unchanged, before);
    }
    if (_state.modalReasons.isNotEmpty) {
      return _transition(PauseTransitionKind.unchanged, before);
    }
    final focus = _state.restoreFocusId;
    _state = const PauseLedgerState();
    return _transition(
      PauseTransitionKind.resumed,
      before,
      focusTargetId: focus,
    );
  }

  PauseTransition openModal(PauseReason reason) {
    final before = _state;
    if (_state.modalReasons.contains(reason)) {
      return _transition(PauseTransitionKind.unchanged, before);
    }
    _state = PauseLedgerState(
      stack: _state.stack,
      modalReasons: [..._state.modalReasons, reason],
      restoreFocusId: _state.restoreFocusId,
    );
    return _transition(PauseTransitionKind.opened, before);
  }

  PauseTransition dismissModal(PauseReason reason) {
    final before = _state;
    if (!_state.modalReasons.contains(reason)) {
      return _transition(PauseTransitionKind.unchanged, before);
    }
    _state = PauseLedgerState(
      stack: _state.stack,
      modalReasons: _state.modalReasons
          .where((item) => item != reason)
          .toList(),
      restoreFocusId: _state.restoreFocusId,
    );
    return _transition(
      PauseTransitionKind.dismissed,
      before,
      focusTargetId: _state.restoreFocusId,
    );
  }

  PauseTransition _transition(
    PauseTransitionKind kind,
    PauseLedgerState before, {
    String? focusTargetId,
  }) => PauseTransition(
    kind: kind,
    before: before,
    after: _state,
    focusTargetId: focusTargetId,
  );

  String _defaultFocus(PausePage page) => switch (page) {
    PausePage.root => 'pause.resume',
    PausePage.settings => 'settings.visual',
    PausePage.visual => 'settings.visual.first',
    PausePage.graphics => 'settings.graphics.first',
    PausePage.gameplay => 'settings.gameplay.first',
    PausePage.controls => 'settings.controls.first',
    PausePage.audio => 'settings.audio.first',
    PausePage.accessibility => 'settings.accessibility.first',
    PausePage.help => 'help.close',
  };
}
