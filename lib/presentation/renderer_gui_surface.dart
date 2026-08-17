import 'package:web/web.dart' as web;

import '../ui/canvas_p5_gui_engine.dart';
import '../ui/gui_flow_coordinator.dart';

/// Renderer-facing GUI frame. Gameplay supplies meaning; this layer owns
/// composition, draw order, hit regions, and the display surface contract.
final class RendererGuiFrame {
  final double dt;
  final double width;
  final double height;
  final bool showGameplayReticle;
  final bool interactable;
  final String? prompt;
  final P5DialogueState dialogue;
  final int day;
  final double hour;
  final double temperatureCelsius;
  final bool twelveHourClock;
  final String roomName;
  final String? objective;
  final List<ContextualPromptHint> hints;
  final ShaderTuningState shaderTuning;

  const RendererGuiFrame({
    required this.dt,
    required this.width,
    required this.height,
    required this.showGameplayReticle,
    required this.interactable,
    required this.prompt,
    required this.dialogue,
    required this.day,
    required this.hour,
    required this.temperatureCelsius,
    this.twelveHourClock = false,
    required this.roomName,
    required this.objective,
    required this.hints,
    required this.shaderTuning,
  });
}

/// Owns visible GUI rendering for the active renderer surface.
///
/// This deliberately does not own dialogue, save, or gameplay state. It is a
/// renderer capability: a backend can replace this surface without changing
/// authored content or input policy.
final class RendererGuiSurface {
  final CanvasP5GuiEngine _engine;
  int _frameNumber = 0;
  int _surfaceWidth = 0;
  int _surfaceHeight = 0;
  double _lastTemperatureCelsius = 0.0;

  RendererGuiSurface(web.HTMLCanvasElement canvas)
    : _engine = CanvasP5GuiEngine(canvas);

  List<CanvasHitBox> get hitBoxes => _engine.currentChoiceHitBoxes;

  void resize(int width, int height) {
    if (width <= 0 || height <= 0) {
      throw ArgumentError('GUI surface dimensions must be positive');
    }
    _surfaceWidth = width;
    _surfaceHeight = height;
  }

  void scrollShaderMenu(int delta, int itemCount) {
    _engine.scrollShaderMenu(delta, itemCount);
  }

  CanvasHitBox? hitTest(double x, double y) {
    for (final hitBox in hitBoxes.reversed) {
      if (hitBox.contains(x, y)) return hitBox;
    }
    return null;
  }

  void render(RendererGuiFrame frame) {
    _lastTemperatureCelsius = frame.temperatureCelsius;
    _engine.beginFrame(frame.dt, frame.width, frame.height);
    if (frame.showGameplayReticle) {
      _engine.drawReticle(
        screenWidth: frame.width,
        screenHeight: frame.height,
        isHoveringInteractable: frame.interactable,
      );
      _engine.drawPromptBanner(
        screenWidth: frame.width,
        screenHeight: frame.height,
        promptText: frame.prompt,
      );
    }
    _engine.drawDialogueAndChoices(
      screenWidth: frame.width,
      screenHeight: frame.height,
      state: frame.dialogue,
    );
    _engine.drawHUD(
      screenWidth: frame.width,
      screenHeight: frame.height,
      currentDay: frame.day,
      currentHour: frame.hour,
      twelveHourClock: frame.twelveHourClock,
      currentRoomName: frame.roomName,
      objectiveText: frame.objective,
    );
    _engine.drawTemperatureGauge(
      screenWidth: frame.width,
      screenHeight: frame.height,
      temperatureCelsius: frame.temperatureCelsius,
    );
    _engine.drawContextualHUDActionPrompts(
      screenWidth: frame.width,
      screenHeight: frame.height,
      hints: frame.hints,
    );
    _engine.drawShaderTuningMenu(
      screenWidth: frame.width,
      screenHeight: frame.height,
      state: frame.shaderTuning,
    );
    _engine.endFrame();
    _frameNumber++;
  }

  /// Publishes a small, stable renderer-owned probe for automation and visual
  /// regression tooling without exposing the engine's internal objects.
  void publishDiagnostics(web.HTMLCanvasElement target) {
    target.setAttribute('data-renderer-gui-frame', '$_frameNumber');
    target.setAttribute('data-renderer-gui-hitboxes', '${hitBoxes.length}');
    target.setAttribute('data-renderer-gui-owner', 'renderer');
    target.setAttribute(
      'data-renderer-gui-temperature-c',
      _lastTemperatureCelsius.toStringAsFixed(2),
    );
    target.setAttribute(
      'data-renderer-gui-surface',
      '${_surfaceWidth}x$_surfaceHeight',
    );
  }
}
