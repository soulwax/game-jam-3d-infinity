import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:pixeldart/rendering/api/materials.dart';
import 'package:pixeldart/rendering/core/render_world_impl.dart';
import 'package:pixeldart/rendering/core/scene_renderer_impl.dart';
import 'package:pixeldart/rendering/assets/model_cache.dart';
import 'package:quarantine/engine/fbx_runtime_package.dart';
import 'package:quarantine/engine/fbx_scene_binding.dart';

import '../external/pixeldart/tools/renderer/fake_gpu_device.dart';

Future<void> main(List<String> args) async {
  if (args.length != 1) throw ArgumentError('usage: ... <generated-dir>');
  final root = Directory(args.single);
  final manifest =
      jsonDecode(
            File('${root.path}/generated-manifest.json').readAsStringSync(),
          )
          as Map<String, dynamic>;
  final package = FbxRuntimePackage.fromManifest(manifest);
  final resources = ResourceLibraryImpl(FakeGpuDevice());
  final world = RenderWorldImpl(resources.meshes.registry);
  final material = resources.registerMaterial(
    const MaterialDefinition(key: 'fbx-binding-test'),
  );
  final binding = FbxSceneBinding(
    resources: resources,
    world: world,
    cache: ModelCache(),
    material: material,
  );
  Future<Uint8List> load(String path) async =>
      Uint8List.fromList(File('${root.path}/$path').readAsBytesSync());

  await binding.attach(package, load);
  if (binding.activeLod != 'LOD0' ||
      binding.itemCount != package.parts.length) {
    throw StateError(
      'LOD0 attach diagnostics are incorrect: ${binding.diagnostics()}',
    );
  }
  if (binding.diagnostics()['assetId'] != package.assetId) {
    throw StateError('binding asset telemetry is incorrect');
  }
  await binding.switchLod('LOD1');
  if (binding.activeLod != 'LOD1' ||
      binding.itemCount != package.parts.length) {
    throw StateError(
      'LOD1 switch diagnostics are incorrect: ${binding.diagnostics()}',
    );
  }
  binding.dispose();
  if (binding.isAttached ||
      world.liveItemCount != 0 ||
      resources.meshes.liveCount != 0) {
    throw StateError(
      'binding disposal leaked retained resources: ${binding.diagnostics()}',
    );
  }
  resources.releaseMaterial(material);
  world.dispose();
  resources.dispose();
  print('FBX scene binding passed: attach -> LOD0 -> LOD1 -> dispose');
}
