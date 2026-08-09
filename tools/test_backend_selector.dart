import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const selector = BackendSelector();
  final canonical = selector.select(null);
  _expect(
    canonical.kind == RendererBackendKind.pixeldart &&
        !canonical.explicit &&
        canonical.automatic,
    'Pixeldart is query-free default',
  );
  final next = selector.select('next');
  _expect(
    next.kind == RendererBackendKind.pixeldart &&
        next.explicit &&
        next.aliasUsed,
    'next alias remains explicit',
  );
  _expect(
    next.aliasReason ==
        'renderer query "next" is a compatibility alias; use "pixeldart"',
    'next alias exposes migration guidance',
  );
  _expect(
    selector.select(' NEXT ').kind == RendererBackendKind.pixeldart,
    'query is normalized',
  );
  _expect(
    selector.select(' pixeldart ').kind == RendererBackendKind.pixeldart &&
        selector.select(' pixeldart ').explicit,
    'canonical Pixeldart query is accepted',
  );
  final automatic = selector.select(' auto ');
  _expect(
    automatic.kind == RendererBackendKind.pixeldart &&
        !automatic.explicit &&
        automatic.automatic,
    'auto selects the capability-aware next candidate',
  );
  _expect(
    selector.select('unknown').kind == RendererBackendKind.legacy,
    'unknown query falls back safely',
  );
  _expect(selector.select('unknown').fallback, 'fallback is observable');
  _expect(selector.select('unknown').rejected, 'unknown query is rejected');
  _expect(
    selector.select('unknown').fallbackReason != null,
    'fallback reason is observable',
  );
  _expect(
    selector.select('unknown').rejectionReason ==
        'unsupported renderer query "unknown"',
    'rejection reason preserves the unsupported value',
  );
  _expect(
    RendererBackendKind.next == RendererBackendKind.pixeldart,
    'next enum symbol remains a compatibility alias',
  );
  final aliasJson = next.toJson();
  _expect(
    aliasJson['kind'] == 'pixeldart' &&
        aliasJson['aliasUsed'] == true &&
        aliasJson['aliasReason'] ==
            'renderer query "next" is a compatibility alias; use "pixeldart"',
    'alias selection serializes canonical identity and guidance',
  );
  final rejectedJson = selector.select('unknown').toJson();
  _expect(
    rejectedJson['kind'] == 'legacy' &&
        rejectedJson['rejected'] == true &&
        rejectedJson['rejectionReason'] ==
            'unsupported renderer query "unknown"',
    'rejected selection serializes explicit failure state',
  );
  final aliasFallback = next.withLegacyFallback(
    'pixeldart initialization failed',
  );
  final aliasFallbackJson = aliasFallback.toJson();
  _expect(
    aliasFallbackJson['kind'] == 'legacy' &&
        aliasFallbackJson['fallback'] == true &&
        aliasFallbackJson['aliasUsed'] == true &&
        aliasFallbackJson['aliasReason'] ==
            'renderer query "next" is a compatibility alias; use "pixeldart"',
    'legacy fallback preserves next alias guidance',
  );
  print(
    'backend selector: canonical Pixeldart, alias, auto, and legacy fallback pass',
  );
}
