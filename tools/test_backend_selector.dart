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
    canonical.kind == RendererBackendKind.next &&
        !canonical.explicit &&
        canonical.automatic,
    'Pixeldart is query-free default',
  );
  final next = selector.select('next');
  _expect(
    next.kind == RendererBackendKind.next && next.explicit,
    'next alias remains explicit',
  );
  _expect(
    selector.select(' NEXT ').kind == RendererBackendKind.next,
    'query is normalized',
  );
  final automatic = selector.select(' auto ');
  _expect(
    automatic.kind == RendererBackendKind.next &&
        !automatic.explicit &&
        automatic.automatic,
    'auto selects the capability-aware next candidate',
  );
  _expect(
    selector.select('unknown').kind == RendererBackendKind.legacy,
    'unknown query falls back safely',
  );
  _expect(selector.select('unknown').fallback, 'fallback is observable');
  _expect(
    selector.select('unknown').fallbackReason != null,
    'fallback reason is observable',
  );
  print(
    'backend selector: explicit next, auto candidate, and legacy fallback pass',
  );
}
