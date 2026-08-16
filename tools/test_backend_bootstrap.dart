import 'package:quarantine/presentation/backend_bootstrap.dart';
import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  const policy = BackendBootstrapPolicy();
  const selector = BackendSelector();

  var fallbackRejected = false;
  try {
    policy.fallback(
      selector.select('pixeldart'),
      BackendFallbackReason.webglUnavailable,
    );
  } catch (_) {
    fallbackRejected = true;
  }
  _expect(fallbackRejected, 'WebGL absence must not create a legacy backend');

  final rejected = selector.select('typo');
  final rejectedFallback = policy.fallback(
    rejected,
    BackendFallbackReason.webglUnavailable,
  );
  _expect(
    identical(rejectedFallback, rejected) &&
        rejectedFallback.rejected &&
        rejectedFallback.rejectionReason ==
            'unsupported renderer query "typo"; use pixeldart',
    'rejected legacy fallback is not rewritten by bootstrap policy',
  );

  final explicitLegacy = selector.select('legacy');
  _expect(
    explicitLegacy.kind == RendererBackendKind.pixeldart &&
        explicitLegacy.rejected &&
        explicitLegacy.aliasUsed,
    'legacy query is rejected as a retired alias',
  );
  print('backend bootstrap: legacy fallback retirement passes');
}
