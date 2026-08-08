import 'package:quarantine/presentation/backend_factory.dart';
import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const factory = BackendFactory();
  final legacy = factory.create(
    const BackendSelection(RendererBackendKind.legacy, explicit: false),
  );
  _expect(legacy is LegacyBackend, 'legacy selection creates legacy backend');
  final next = factory.create(
    const BackendSelection(RendererBackendKind.next, explicit: true),
  );
  _expect(next is PixeldartBackend, 'explicit next creates Pixeldart backend');
  final fallback = factory.create(
    const BackendSelection(
      RendererBackendKind.legacy,
      explicit: true,
      fallback: true,
      fallbackReason: 'test',
    ),
  );
  _expect(
    fallback is LegacyBackend && fallback.diagnostics.fallback,
    'fallback remains observable on legacy backend',
  );
  print('backend factory: explicit selection and fallback pass');
}
