import 'automation_movement.dart';

/// Modal UI routes recognized by the T-10 semantic driver.
enum AutomationUiRoute {
  none,
  pauseRoot,
  settingsIndex,
  visualSettings,
  graphicsSettings,
  gameplaySettings,
  controlsSettings,
  audioSettings,
  accessibilitySettings,
  journal,
  sleep,
  help,
  credits,
}

/// Semantic driver for navigating the pause root, settings index, category panels,
/// journal, sleep, help, credits, and verifying focus restoration & input clearing.
class AutomationUiDriver {
  AutomationUiRoute _currentRoute = AutomationUiRoute.none;
  final List<AutomationUiRoute> _backStack = <AutomationUiRoute>[];

  AutomationUiRoute get currentRoute => _currentRoute;
  List<AutomationUiRoute> get backStack => List.unmodifiable(_backStack);
  bool get isModalActive => _currentRoute != AutomationUiRoute.none;

  /// Simulates opening a top-level panel from unpaused gameplay (e.g. Esc, O, J, L, H).
  PlayerActionFrame openRoute(AutomationUiRoute route, {required int tick}) {
    if (route == AutomationUiRoute.none) {
      throw ArgumentError('cannot open route none');
    }
    _backStack.clear();
    _currentRoute = route;
    _backStack.add(route);
    final key = _keyForRoute(route);
    return PlayerActionFrame(
      tick: tick,
      pressed: key != null ? {key} : const {},
    );
  }

  /// Pushes a child panel onto the settings back stack.
  PlayerActionFrame pushChild(AutomationUiRoute childRoute, {required int tick}) {
    if (!isModalActive) {
      throw StateError('cannot push child when no modal is active');
    }
    _currentRoute = childRoute;
    _backStack.add(childRoute);
    return PlayerActionFrame.neutral(tick);
  }

  /// Pops the top panel off the back stack (simulating Esc or Back button).
  PlayerActionFrame pop({required int tick}) {
    if (_backStack.isEmpty) {
      return PlayerActionFrame.neutral(tick);
    }
    _backStack.removeLast();
    if (_backStack.isEmpty) {
      _currentRoute = AutomationUiRoute.none;
    } else {
      _currentRoute = _backStack.last;
    }
    return PlayerActionFrame(
      tick: tick,
      pressed: const {'Escape'},
    );
  }

  /// Closes all modals and restores unpaused gameplay.
  PlayerActionFrame closeAll({required int tick}) {
    _backStack.clear();
    _currentRoute = AutomationUiRoute.none;
    return PlayerActionFrame(
      tick: tick,
      pressed: const {'Escape'},
    );
  }

  static String? _keyForRoute(AutomationUiRoute route) => switch (route) {
        AutomationUiRoute.pauseRoot || AutomationUiRoute.settingsIndex => 'Escape',
        AutomationUiRoute.journal => 'KeyJ',
        AutomationUiRoute.sleep => 'KeyL',
        AutomationUiRoute.help => 'KeyH',
        _ => null,
      };
}
