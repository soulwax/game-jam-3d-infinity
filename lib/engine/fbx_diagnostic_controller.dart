import 'dart:typed_data';

import 'fbx_runtime_package.dart';
import 'fbx_scene_binding.dart';

/// Opt-in debug owner for inspecting a normalized FBX room in Pixeldart.
/// Disabled by default so diagnostics can never replace the simulation room
/// or add geometry to a normal play session.
final class FbxDiagnosticController {
  final FbxSceneBinding binding;
  bool _enabled = false;

  FbxDiagnosticController(this.binding);

  bool get enabled => _enabled;
  String? get activeLod => binding.activeLod;

  Future<void> enable(
    FbxRuntimePackage package,
    Future<Uint8List> Function(String path) load,
  ) async {
    if (_enabled) return;
    await binding.attach(package, load);
    _enabled = true;
  }

  Future<void> setLod(String lod) async {
    if (!_enabled) {
      throw StateError('FBX diagnostics are disabled');
    }
    await binding.switchLod(lod);
  }

  void disable() {
    if (!_enabled) return;
    binding.detach();
    _enabled = false;
  }

  Map<String, Object?> diagnostics() => {
    'schema': 'pixeldart-fbx-diagnostic-v1',
    'enabled': _enabled,
    ...binding.diagnostics(),
  };
}
