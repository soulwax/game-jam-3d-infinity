import 'package:web/web.dart' as web;

import 'shader_tuning_state.dart';
import '../ui/canvas_p5_gui_engine.dart';
import '../ui/gui_flow_coordinator.dart';
import '../ui/p5_gui_models.dart';

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
  final int hour;
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

  RendererGuiSurface(web.HTMLCanvasElement canvas)
    : _engine = CanvasP5GuiEngine(canvas);

  List<CanvasHitBox> get hitBoxes => _engine.currentChoiceHitBoxes;

  void render(RendererGuiFrame frame) {
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
      currentRoomName: frame.roomName,
      objectiveText: frame.objective,
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
  }
}
