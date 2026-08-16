import 'backend_selector.dart';
import 'pixeldart_backend.dart';
import 'renderer_backend.dart';
import 'renderer_runtime.dart';

final class BackendFactory {
  const BackendFactory();

  RendererBackend create(
    BackendSelection selection, {
    RendererRuntime? runtime,
  }) {
    if (selection.kind != RendererBackendKind.pixeldart) {
      throw StateError(
        'legacy renderer backend is retired; production requires Pixeldart',
      );
    }
    return PixeldartBackend(
      runtime: runtime,
      selectionDiagnostics: selection.toJson(),
    );
  }
}
