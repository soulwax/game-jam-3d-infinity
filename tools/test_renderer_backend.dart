import 'package:quarantine/game/presentation_snapshot.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final frame = RendererFrame(
    snapshot: PresentationSnapshot(values: const {'roomId': 'hall'}),
    interpolation: 0.5,
  );
  _expect(
    frame.snapshot.values['roomId'] == 'hall',
    'frame carries immutable facts',
  );
  const action = RendererInputAction(id: 'use', pressed: true);
  _expect(action.pressed && action.value == 0, 'input boundary is structural');
  var rejected = false;
  try {
    RendererFrame(snapshot: frame.snapshot, interpolation: 2.0);
  } catch (error) {
    rejected = error is ArgumentError;
  }
  _expect(rejected, 'invalid interpolation rejects');

  // V-02: DebugViewMode
  _expect(DebugViewMode.values.length == 5, '5 debug view modes exist');
  _expect(DebugViewMode.baseColor.name == 'baseColor', 'baseColor debug view mode');
  _expect(DebugViewMode.shadowFactor.name == 'shadowFactor', 'shadowFactor debug view mode');
  _expect(DebugViewMode.routeOverlay.name == 'routeOverlay', 'routeOverlay debug view mode');

  // R-01: RenderResolutionProfile
  final resFull = RenderResolutionProfile.calculate(
    displayWidth: 1280,
    displayHeight: 720,
    scaleOption: '1.00',
  );
  _expect(resFull.renderWidth == 1280 && resFull.renderHeight == 720, '1.00 scale retains 1280x720');

  final resHalf = RenderResolutionProfile.calculate(
    displayWidth: 1280,
    displayHeight: 720,
    scaleOption: '0.50',
  );
  _expect(resHalf.renderWidth == 640 && resHalf.renderHeight == 360, '0.50 scale scales to 640x360');

  final res75 = RenderResolutionProfile.calculate(
    displayWidth: 1280,
    displayHeight: 720,
    scaleOption: '0.75',
  );
  _expect(res75.renderWidth == 960 && res75.renderHeight == 540, '0.75 scale scales to 960x540');

  print('renderer backend: neutral lifecycle/input boundary, V-02 debug views, and R-01 render extents pass');
}
