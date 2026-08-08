import '../game/feature_snapshot.dart';
import 'renderer_backend.dart';

/// Adapts one canonical simulation feature snapshot into the shared renderer
/// frame contract. It does not select or instantiate a backend.
class FeatureFrameAdapter {
  const FeatureFrameAdapter();

  RendererFrame frame(FeatureSnapshot snapshot, {double interpolation = 0.0}) =>
      RendererFrame(snapshot: snapshot.facts, interpolation: interpolation);

  RendererInputAction input(
    String id, {
    bool pressed = false,
    double value = 0.0,
  }) => RendererInputAction(id: id, pressed: pressed, value: value);
}
