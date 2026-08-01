import 'renderer_core.dart';
export 'mesh.dart';

/// Stable rendering facade. Implementation lives in focused engine modules.
class Renderer extends RendererCore {
  Renderer(super.ctx, super.width, super.height);
}
