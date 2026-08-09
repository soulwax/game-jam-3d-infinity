import 'automation_movement.dart';

enum AutomationInteractionPhase {
  awaitingFocus,
  settling,
  pressing,
  holding,
  releasing,
  awaitingResult,
  completed,
  failed,
}

final class AutomationInteractionObservation {
  final int tick;
  final String? focusId;
  final Set<String> semanticEvents;
  final String? stateValue;
  final int costCount;

  const AutomationInteractionObservation({
    required this.tick,
    required this.focusId,
    this.semanticEvents = const {},
    this.stateValue,
    this.costCount = 0,
  });
}

final class AutomationInteractionOutput {
  final AutomationInteractionPhase phase;
  final PlayerActionFrame action;
  final String? failure;

  const AutomationInteractionOutput({
    required this.phase,
    required this.action,
    this.failure,
  });
}

/// Encodes approach → stable focus → action edge → expected effect.
/// It never writes focus, state, or cost; those arrive through observations.
final class AutomationInteractionController {
  final String targetId;
  final String expectedEvent;
  final String expectedState;
  final bool hold;
  final int settleTicks;
  final int timeoutTicks;
  final int initialCostCount;

  AutomationInteractionPhase _phase = AutomationInteractionPhase.awaitingFocus;
  int _stableFocusTicks = 0;
  int _startTick = -1;
  String? _failure;

  AutomationInteractionController({
    required this.targetId,
    required this.expectedEvent,
    required this.expectedState,
    required this.initialCostCount,
    this.hold = false,
    this.settleTicks = 2,
    this.timeoutTicks = 120,
  }) {
    if (targetId.trim().isEmpty ||
        expectedEvent.trim().isEmpty ||
        expectedState.trim().isEmpty) {
      throw ArgumentError(
        'interaction IDs and expected state must be non-empty',
      );
    }
    if (initialCostCount < 0 || settleTicks <= 0 || timeoutTicks <= 0) {
      throw ArgumentError('interaction bounds are invalid');
    }
  }

  AutomationInteractionPhase get phase => _phase;
  String? get failure => _failure;

  AutomationInteractionOutput next(
    AutomationInteractionObservation observation,
  ) {
    if (_startTick < 0) _startTick = observation.tick;
    if (_phase == AutomationInteractionPhase.completed ||
        _phase == AutomationInteractionPhase.failed) {
      return _output(
        observation.tick,
        PlayerActionFrame.neutral(observation.tick),
      );
    }
    if (observation.tick - _startTick > timeoutTicks) {
      return _fail(observation.tick, 'interaction timeout for $targetId');
    }
    if (observation.focusId != targetId &&
        (_phase == AutomationInteractionPhase.awaitingFocus ||
            _phase == AutomationInteractionPhase.settling)) {
      _phase = AutomationInteractionPhase.awaitingFocus;
      _stableFocusTicks = 0;
      return _output(
        observation.tick,
        PlayerActionFrame.neutral(observation.tick),
      );
    }
    if (_phase == AutomationInteractionPhase.awaitingFocus) {
      _phase = AutomationInteractionPhase.settling;
    }
    if (_phase == AutomationInteractionPhase.settling) {
      _stableFocusTicks++;
      if (_stableFocusTicks < settleTicks) {
        return _output(
          observation.tick,
          PlayerActionFrame.neutral(observation.tick),
        );
      }
      _phase = AutomationInteractionPhase.pressing;
      return _output(
        observation.tick,
        PlayerActionFrame.neutral(observation.tick),
      );
    }
    if (_phase == AutomationInteractionPhase.pressing) {
      _phase = hold
          ? AutomationInteractionPhase.holding
          : AutomationInteractionPhase.awaitingResult;
      return _output(observation.tick, _press(observation.tick));
    }
    if (_phase == AutomationInteractionPhase.holding) {
      _phase = AutomationInteractionPhase.releasing;
      return _output(
        observation.tick,
        PlayerActionFrame(tick: observation.tick, held: const {'KeyE'}),
      );
    }
    if (_phase == AutomationInteractionPhase.releasing) {
      _phase = AutomationInteractionPhase.awaitingResult;
      return _output(
        observation.tick,
        PlayerActionFrame(tick: observation.tick, released: const {'KeyE'}),
      );
    }
    if (observation.semanticEvents.contains(expectedEvent) &&
        observation.stateValue == expectedState) {
      if (observation.costCount != initialCostCount + 1) {
        return _fail(
          observation.tick,
          'expected exactly one cost for $targetId',
        );
      }
      _phase = AutomationInteractionPhase.completed;
    }
    return _output(
      observation.tick,
      PlayerActionFrame.neutral(observation.tick),
    );
  }

  PlayerActionFrame _press(int tick) => PlayerActionFrame(
    tick: tick,
    pressed: const {'KeyE'},
    held: hold ? const {'KeyE'} : const {},
  );

  AutomationInteractionOutput _fail(int tick, String message) {
    _phase = AutomationInteractionPhase.failed;
    _failure = message;
    return _output(tick, PlayerActionFrame.neutral(tick));
  }

  AutomationInteractionOutput _output(int tick, PlayerActionFrame action) =>
      AutomationInteractionOutput(
        phase: _phase,
        action: action,
        failure: _failure,
      );
}
