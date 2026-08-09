import 'backend_selector.dart';
import 'legacy_backend.dart';
import 'pixeldart_backend.dart';
import 'renderer_backend.dart';
import 'renderer_runtime.dart';

final class BackendFactory {
  const BackendFactory();

  RendererBackend create(
    BackendSelection selection, {
    RendererRuntime? runtime,
  }) {
    if (selection.kind == RendererBackendKind.pixeldart &&
        !selection.fallback) {
      return PixeldartBackend(
        runtime: runtime,
        selectionDiagnostics: selection.toJson(),
      );
    }
    return LegacyBackend(
      runtime: runtime,
      fallback: selection.fallback,
      fallbackReason: selection.fallbackReason,
      selectionDiagnostics: selection.toJson(),
    );
  }
}
