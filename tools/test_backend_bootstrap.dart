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

  final noWebgl = policy.fallback(
    selector.select('pixeldart'),
    BackendFallbackReason.webglUnavailable,
  );
  _expect(
    noWebgl.kind == RendererBackendKind.legacy &&
        noWebgl.fallback &&
        noWebgl.fallbackReason == 'webgl2 unavailable',
    'WebGL absence produces a typed legacy fallback',
  );

  final initFailed = policy.fallback(
    selector.select('next'),
    BackendFallbackReason.pixeldartInitializationFailed,
  );
  _expect(
    initFailed.kind == RendererBackendKind.legacy &&
        initFailed.fallback &&
        initFailed.aliasUsed &&
        initFailed.aliasReason ==
            'renderer query "next" is a compatibility alias; use "pixeldart"' &&
        initFailed.fallbackReason == 'pixeldart initialization failed',
    'Pixeldart init fallback preserves next alias guidance',
  );

  final rejected = selector.select('typo');
  final rejectedFallback = policy.fallback(
    rejected,
    BackendFallbackReason.webglUnavailable,
  );
  _expect(
    identical(rejectedFallback, rejected) &&
        rejectedFallback.rejected &&
        rejectedFallback.rejectionReason == 'unsupported renderer query "typo"',
    'rejected legacy fallback is not rewritten by bootstrap policy',
  );

  final explicitLegacy = selector.select('legacy');
  _expect(
    identical(
      policy.fallback(explicitLegacy, BackendFallbackReason.webglUnavailable),
      explicitLegacy,
    ),
    'explicit legacy remains an intentional choice',
  );
  print('backend bootstrap: typed fallback preservation passes');
}
