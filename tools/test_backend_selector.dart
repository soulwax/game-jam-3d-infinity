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
        !canonical.rejected,
    'Pixeldart is query-free default',
  );
  final next = selector.select('next');
  _expect(
    next.kind == RendererBackendKind.pixeldart &&
        !next.explicit &&
        next.rejected &&
        next.aliasUsed,
    'next alias is rejected visibly',
  );
  _expect(
    next.aliasReason == 'renderer query "next" is retired; use pixeldart',
    'next alias exposes retirement guidance',
  );
  _expect(selector.select(' NEXT ').rejected, 'query is normalized');
  _expect(
    selector.select(' pixeldart ').kind == RendererBackendKind.pixeldart &&
        selector.select(' pixeldart ').explicit,
    'canonical Pixeldart query is accepted',
  );
  final automatic = selector.select(' auto ');
  _expect(
    automatic.kind == RendererBackendKind.pixeldart &&
        automatic.rejected &&
        automatic.aliasUsed,
    'auto is retired and rejected',
  );
  _expect(
    selector.select('unknown').kind == RendererBackendKind.pixeldart,
    'unknown query retains the canonical backend identity',
  );
  _expect(selector.select('unknown').rejected, 'unknown query is rejected');
  _expect(
    selector.select('unknown').rejected,
    'rejected query remains explicitly rejected',
  );
  _expect(
    selector.select('unknown').rejectionReason ==
        'unsupported renderer query "unknown"; use pixeldart',
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
            'renderer query "next" is retired; use pixeldart' &&
        aliasJson['rejected'] == true,
    'retired alias serializes canonical identity and rejection guidance',
  );
  final rejectedJson = selector.select('unknown').toJson();
  _expect(
    rejectedJson['kind'] == 'pixeldart' &&
        rejectedJson['rejected'] == true &&
        rejectedJson['rejectionReason'] ==
            'unsupported renderer query "unknown"; use pixeldart',
    'rejected selection serializes canonical failure state',
  );
  print(
    'backend selector: canonical Pixeldart and retired query rejection pass',
  );
}
