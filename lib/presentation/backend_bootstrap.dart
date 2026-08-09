import 'backend_selector.dart';
import 'renderer_backend.dart';

/// Reasons the bootstrap boundary may downgrade a Pixeldart selection.
enum BackendFallbackReason {
  webglUnavailable('webgl2 unavailable'),
  pixeldartInitializationFailed('pixeldart initialization failed');

  final String message;

  const BackendFallbackReason(this.message);
}

/// Keeps renderer-selection explanations intact across bootstrap downgrades.
///
/// The web entrypoint owns the concrete context/runtime work. It should call
/// [fallback] instead of constructing a fresh legacy selection so alias and
/// rejection diagnostics remain visible to the existing publisher.
final class BackendBootstrapPolicy {
  const BackendBootstrapPolicy();

  BackendSelection fallback(
    BackendSelection selection,
    BackendFallbackReason reason,
  ) {
    if (selection.kind != RendererBackendKind.pixeldart) return selection;
    return selection.withLegacyFallback(reason.message);
  }
}
