import 'dart:typed_data';

import 'package:pixeldart/pixeldart_testing.dart';

import 'fbx_runtime_package.dart';

/// Legacy offline binding for the generated FBX package shape.
///
/// It remains available to migration tests only. New integrations must bind a
/// validated `ModelPackage` through Pixeldart's neutral scene-binding API.
final class FbxSceneBinding {
  final ResourceLibrary resources;
  final RenderWorld world;
  final ModelCache cache;
  final MaterialHandle material;
  final MaterialHandle Function(int? materialSlot)? materialForSlot;
  final List<MeshHandle> _meshes = [];
  final List<InstanceId> _items = [];
  final List<CachedMesh> _cached = [];
  bool _disposed = false;
  bool _attached = false;
  String? _activeLod;
  FbxRuntimePackage? _package;
  Future<Uint8List> Function(String path)? _load;

  FbxSceneBinding({
    required this.resources,
    required this.world,
    required this.cache,
    required this.material,
    this.materialForSlot,
  });

  int get itemCount => _items.length;
  String? get activeLod => _activeLod;
  bool get isAttached => _attached;

  Map<String, Object?> diagnostics() => {
    'attached': _attached,
    'disposed': _disposed,
    'assetId': _package?.assetId,
    'activeLod': _activeLod,
    'itemCount': _items.length,
    'meshCount': _meshes.length,
    'cacheReferenceCount': _cached.length,
    'materialSlotCount': _package == null
        ? 0
        : _package!.parts.map((part) => part.materialSlot).toSet().length,
  };

  Future<void> attach(
    FbxRuntimePackage package,
    Future<Uint8List> Function(String path) load,
  ) async {
    if (_disposed) throw StateError('FBX scene binding is disposed');
    if (_attached) throw StateError('FBX scene binding is already attached');
    _package = package;
    _load = load;
    await _attachLod('LOD0');
  }

  Future<void> switchLod(String lod) async {
    if (_disposed) throw StateError('FBX scene binding is disposed');
    if (!_attached || _package == null || _load == null) {
      throw StateError('FBX scene binding is not attached');
    }
    if (lod == _activeLod) return;
    _releasePartial();
    await _attachLod(lod);
  }

  Future<void> _attachLod(String lod) async {
    final package = _package!;
    final load = _load!;
    final decoded = await package.decodeLod(cache, lod, load);
    try {
      for (var i = 0; i < decoded.length; i++) {
        final mesh = decoded[i];
        _cached.add(mesh);
        final handle = resources.registerMesh(
          mesh.deduplicated,
          debugLabel: 'fbx:${package.assetId}:${package.parts[i].id}:$lod',
        );
        final item = world.addItem(
          RetainedItemDescriptor(
            mesh: handle,
            material:
                materialForSlot?.call(package.parts[i].materialSlot) ??
                material,
          ),
        );
        _meshes.add(handle);
        _items.add(item);
      }
      _attached = true;
      _activeLod = lod;
    } catch (_) {
      final owned = Set<CachedMesh>.of(_cached);
      _releasePartial();
      for (final mesh in decoded) {
        if (!owned.contains(mesh)) cache.release(mesh);
      }
      rethrow;
    }
  }

  void dispose() {
    if (_disposed) return;
    _disposed = true;
    _releasePartial();
  }

  /// Removes the diagnostic room while keeping the binding reusable.
  void detach() {
    if (_disposed) return;
    _releasePartial();
  }

  void _releasePartial() {
    for (final item in _items) {
      world.removeItem(item);
    }
    for (final mesh in _meshes) {
      resources.releaseMesh(mesh);
    }
    for (final cached in _cached) {
      cache.release(cached);
    }
    _items.clear();
    _meshes.clear();
    _cached.clear();
    _attached = false;
    _activeLod = null;
  }
}
