import '../game/presentation_snapshot.dart';
import 'renderer_diagnostics.dart';

enum RendererBackendKind {
  legacy,
  pixeldart;

  /// Compatibility symbol for callers that still use the pre-C-01 name.
  @Deprecated('Use RendererBackendKind.pixeldart instead.')
  static const RendererBackendKind next = RendererBackendKind.pixeldart;
}

enum RendererBackendState { constructed, ready, lost, disposed }

/// Authored debug visualization passes for V-02.
enum DebugViewMode {
  none,
  baseColor,
  directLight,
  shadowFactor,
  routeOverlay,
}

/// Render resolution and scaling extent calculation for R-01.
final class RenderResolutionProfile {
  final int displayWidth;
  final int displayHeight;
  final String scaleOption;
  final int renderWidth;
  final int renderHeight;

  RenderResolutionProfile._({
    required this.displayWidth,
    required this.displayHeight,
    required this.scaleOption,
    required this.renderWidth,
    required this.renderHeight,
  });

  factory RenderResolutionProfile.calculate({
    required int displayWidth,
    required int displayHeight,
    required String scaleOption,
  }) {
    if (displayWidth <= 0 || displayHeight <= 0) {
      throw ArgumentError('display dimensions must be positive');
    }
    final scaleMultiplier = switch (scaleOption) {
      '0.50' => 0.50,
      '0.67' => 0.67,
      '0.75' => 0.75,
      '0.85' => 0.85,
      '1.00' => 1.00,
      'auto' || _ => 1.00,
    };
    final rw = (displayWidth * scaleMultiplier).round().clamp(320, displayWidth);
    final rh = (displayHeight * scaleMultiplier).round().clamp(180, displayHeight);
    return RenderResolutionProfile._(
      displayWidth: displayWidth,
      displayHeight: displayHeight,
      scaleOption: scaleOption,
      renderWidth: rw,
      renderHeight: rh,
    );
  }

  double get scaleFactor => renderWidth / displayWidth;
  double get aspectRatio => renderWidth / renderHeight;

  Map<String, Object> toJson() => {
        'displayWidth': displayWidth,
        'displayHeight': displayHeight,
        'scaleOption': scaleOption,
        'renderWidth': renderWidth,
        'renderHeight': renderHeight,
        'scaleFactor': scaleFactor,
        'aspectRatio': aspectRatio,
      };
}

class RendererFrame {
  final PresentationSnapshot snapshot;
  final double interpolation;

  RendererFrame({required this.snapshot, this.interpolation = 0.0}) {
    if (!interpolation.isFinite || interpolation < 0 || interpolation > 1) {
      throw ArgumentError.value(interpolation, 'interpolation');
    }
  }
}

class RendererInputAction {
  final String id;
  final bool pressed;
  final double value;

  const RendererInputAction({
    required this.id,
    this.pressed = false,
    this.value = 0.0,
  }) : assert(id != ''),
       assert(
         value == value &&
             value != double.infinity &&
             value != double.negativeInfinity,
       );
}

/// Renderer-neutral lifecycle contract. Implementations own GPU/DOM handles;
/// none may cross this interface.
abstract interface class RendererBackend {
  RendererBackendKind get kind;
  RendererBackendState get state;
  RendererDiagnostics get diagnostics;
  RendererFrame? get lastFrame;
  String? get lastFrameEncoding;
  String? get lastInputEncoding;

  void initialize();

  /// Updates backend-owned surface metrics between frames. Dimensions are
  /// structural values; DOM/GPU surface handles stay behind the adapter.
  void resize(int width, int height);

  void loseContext();

  void recover();

  void submit(RendererFrame frame);

  void handleInput(RendererInputAction action);

  void dispose();
}
