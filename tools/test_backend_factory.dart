import 'package:quarantine/presentation/backend_factory.dart';
import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/pixeldart_backend.dart';
import 'package:quarantine/presentation/renderer_backend.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  const factory = BackendFactory();
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
            'renderer query "next" is retired; use pixeldart' &&
        aliasSelection['rejected'] == true,
    'retired alias rejection reaches adapter diagnostics',
  );
  final unknownSelection = const BackendSelector().select('typo');
  final unknown = factory.create(unknownSelection);
  final unknownDiagnostics = unknown.diagnostics.toJson()['selection'];
  _expect(
    unknownDiagnostics is Map &&
        unknownDiagnostics['rejected'] == true &&
        unknownDiagnostics['kind'] == 'pixeldart' &&
        unknownDiagnostics['rejectionReason'] ==
            'unsupported renderer query "typo"; use pixeldart',
    'canonical backend diagnostics publish rejected query facts',
  );
  print('backend factory: Pixeldart selection and legacy retirement pass');
}
