import 'backend_selector.dart';

/// Reasons used when publishing a Pixeldart-unavailable browser state.
enum BackendFallbackReason {
  webglUnavailable('webgl2 unavailable'),
  pixeldartInitializationFailed('pixeldart initialization failed');

  final String message;

  const BackendFallbackReason(this.message);
}

/// Legacy renderer fallback is retired. The web entrypoint publishes an
/// unavailable Pixeldart state directly instead of manufacturing a backend.
final class BackendBootstrapPolicy {
  const BackendBootstrapPolicy();

  BackendSelection fallback(
    BackendSelection selection,
    BackendFallbackReason reason,
  ) {
    if (selection.rejected) {
      return selection;
    }
    throw StateError(
      'renderer fallback is retired (${reason.message}); publish Pixeldart unavailable',
    );
  }
}
