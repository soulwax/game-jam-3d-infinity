import 'package:quarantine/presentation/backend_factory.dart';
import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/legacy_backend.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/renderer_diagnostics.dart';
import 'package:quarantine/presentation/renderer_runtime.dart';

final class _FactoryRuntime implements RendererRuntime {
  int initializes = 0;

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics(
    backend: 'legacy',
    profile: 'legacy',
    buildId: 'factory-probe',
    capabilities: const [],
  );

  @override
  bool contextLost = false;

  @override
  void initialize() => initializes++;

  @override
  void resize(int width, int height) {}

  @override
  void submit(RendererFrame frame) {}

  @override
  void handleInput(RendererInputAction action) {}

  @override
  void loseContext() {}

  @override
  void recover() {}

  @override
  void dispose() {}
}

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
  final legacyRuntime = _FactoryRuntime();
  final runtimeLegacy = factory.create(
    const BackendSelection(RendererBackendKind.legacy, explicit: false),
    runtime: legacyRuntime,
  )..initialize();
  _expect(
    runtimeLegacy.diagnostics.buildId == 'factory-probe' &&
        legacyRuntime.initializes == 1,
    'legacy selection must forward its neutral runtime',
  );
  final next = factory.create(
    const BackendSelection(RendererBackendKind.pixeldart, explicit: true),
  );
  _expect(
    next is PixeldartBackend,
    'explicit Pixeldart creates Pixeldart backend',
  );
  final nextSelection = next.diagnostics.toJson()['selection'];
  _expect(
    nextSelection is Map &&
        nextSelection['kind'] == 'pixeldart' &&
        nextSelection['rejected'] == false,
    'Pixeldart diagnostics publish canonical selection facts',
  );
  final aliasRequest = const BackendSelector().select('next');
  final aliasBackend = factory.create(aliasRequest);
  final aliasSelection = aliasBackend.diagnostics.toJson()['selection'];
  _expect(
    aliasSelection is Map &&
        aliasSelection['kind'] == 'pixeldart' &&
        aliasSelection['aliasUsed'] == true &&
        aliasSelection['aliasReason'] ==
            'renderer query "next" is a compatibility alias; use "pixeldart"',
    'next alias guidance reaches adapter diagnostics',
  );
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
  final unknownSelection = const BackendSelector().select('typo');
  final unknown = factory.create(unknownSelection);
  final unknownDiagnostics = unknown.diagnostics.toJson()['selection'];
  _expect(
    unknownDiagnostics is Map &&
        unknownDiagnostics['rejected'] == true &&
        unknownDiagnostics['rejectionReason'] ==
            'unsupported renderer query "typo"',
    'legacy fallback diagnostics publish rejected query facts',
  );
  print('backend factory: explicit selection and fallback pass');
}
