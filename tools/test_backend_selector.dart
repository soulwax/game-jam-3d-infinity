import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const selector = BackendSelector();
  final legacy = selector.select(null);
  _expect(
    legacy.kind == RendererBackendKind.legacy && !legacy.explicit,
    'legacy is default',
  );
  final next = selector.select('next');
  _expect(
    next.kind == RendererBackendKind.next && next.explicit,
    'next requires explicit opt-in',
  );
  _expect(
    selector.select(' NEXT ').kind == RendererBackendKind.next,
    'query is normalized',
  );
  _expect(
    selector.select('unknown').kind == RendererBackendKind.legacy,
    'unknown query falls back safely',
  );
  print('backend selector: explicit next opt-in and legacy fallback pass');
}
