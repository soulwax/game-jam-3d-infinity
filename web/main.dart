import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/audio.dart';
import 'package:quarantine/engine/audio_planner.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/fps_motion.dart';
import 'package:quarantine/engine/hud.dart';
import 'package:quarantine/engine/input.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/renderer.dart';
import 'package:quarantine/engine/vertex_format.dart';
import 'package:quarantine/game/ambient_audio.dart';
import 'package:quarantine/game/browser_save_store.dart';
import 'package:quarantine/game/ending.dart';
import 'package:quarantine/game/player_state.dart';
import 'package:quarantine/game/rupture_gate.dart';
import 'package:quarantine/game/session.dart';
import 'package:quarantine/presentation/backend_selector.dart';
import 'package:quarantine/presentation/backend_factory.dart';
import 'package:quarantine/presentation/pixeldart_capability_bridge.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/renderer_diagnostics.dart';
import 'package:quarantine/presentation/renderer_runtime.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/emitter.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/house/soundscape.dart';
import 'package:quarantine/house/exterior_mesh_adapter.dart';
import 'package:quarantine/house/exterior_pvs.dart';
import 'package:quarantine/house/exterior_scene.dart';
import 'package:quarantine/house/interaction.dart';
import 'package:quarantine/house/lighting.dart' as house_lighting;
import 'package:quarantine/house/room.dart';
import 'package:quarantine/journal/entry.dart' show Vocabulary;
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/time.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/story/schema.dart' show vocabularyFields;
import 'package:quarantine/story/text.dart';
import 'package:quarantine/story/unverifiable_notice.dart';
import 'package:quarantine/ui/ambient_notice.dart';
import 'package:quarantine/ui/broadcast.dart';
import 'package:quarantine/ui/door.dart';
import 'package:quarantine/ui/ending_panel.dart';
import 'package:quarantine/ui/help_panel.dart';
import 'package:quarantine/ui/journal_panel.dart';
import 'package:quarantine/ui/panel.dart';
import 'package:quarantine/ui/prompt.dart';
import 'package:quarantine/ui/sleep_panel.dart';
import 'package:quarantine/ui/settings_panel.dart';
import 'package:quarantine/visitors/ambient.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/stand_ins.dart';
import 'package:quarantine/visitors/state.dart';
import 'package:pixeldart/rendering/rendering.dart' as px;
import 'package:pixeldart/rendering/webgl/device_api.dart' as pxdevice;
import 'package:pixeldart/rendering/webgl/webgl2_device.dart' as pxgl;
import 'package:web/web.dart' as web;

@JS('Object.keys')
external JSArray<JSString> _keysOf(JSObject o);

const double _fixedDt = 1 / 120;
const int _maxSteps = 10;
const double _maxFrameTime = 0.25;

const double _bgHue = 0.0;

bool get _legacyRenderProfile => Uri.base.queryParameters['render'] == 'legacy';
final BackendSelector _backendSelector = BackendSelector();
late BackendSelection _backendSelection;
late RendererBackend _presentationBackend;
_PixeldartWebRuntime? _pixeldartRuntime;
_LegacyWebRuntime? _legacyRuntime;

final class _PixeldartWebRuntime implements RendererRuntime {
  static const _capabilityBridge = PixeldartCapabilityBridge();
  final web.WebGL2RenderingContext context;
  int width;
  int height;
  late pxgl.WebGl2Device _device;
  late px.SceneRendererImpl _renderer;
  late px.RenderWorld _world;
  late px.RenderCapabilities _queriedCapabilities;
  late px.QualityProfile _profile;
  String? _profileFallbackReason;
  final List<px.MeshHandle> _sceneMeshes = [];
  final Map<String, px.MeshHandle> _roomMeshesById = {};
  final List<px.InstanceId> _sceneItems = [];
  final Map<String, px.InstanceId> _sceneItemsByRoom = {};
  final Map<String, px.RetainedItemDescriptor> _sceneDescriptors = {};
  final Map<String, px.InstanceId> _inventoryItemsById = {};
  final Map<String, px.RetainedItemDescriptor> _inventoryDescriptors = {};
  final List<px.MeshHandle> _inventoryMeshes = [];
  px.InstanceId? _exteriorShellItem;
  px.RetainedItemDescriptor? _exteriorShellDescriptor;
  final List<_PixeldartDecoration> _decorations = [];
  List<InventoryPlacement> _inventoryPlacements = const [];
  final Map<String, px.TextureHandle> _textures = {};
  final Map<String, px.MaterialHandle> _roomMaterials = {};
  final Map<String, px.MaterialHandle> _inventoryMaterials = {};
  px.MaterialHandle? _sceneMaterial;
  px.MaterialHandle? _exteriorMaterial;
  px.CameraView? _cameraView;
  px.FrameEnvironment _environment = const px.FrameEnvironment();
  px.PostProcessState _post = px.PostProcessState.off;
  px.FrameStats? _lastFrameStats;
  double _lastFrameMs = 0;
  double _timeSeconds = 0;
  int _historyEpoch = 0;
  int _noiseSeed = 0;
  int _frameIndex = 0;
  bool _initialized = false;

  _PixeldartWebRuntime(this.context, this.width, this.height);

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics.fromEnvironment(
    backend: 'next',
    profile: _initialized ? _profile.kind.name : 'safe',
    capabilities: _initialized ? capabilityLabels : const ['uninitialized'],
    fallback: false,
  );

  @override
  bool get contextLost =>
      _initialized && _device.status == pxdevice.GpuDeviceStatus.lost;

  Iterable<String> get capabilityLabels {
    if (!_initialized) return const [];
    return _capabilityBridge.capabilityLabels(
      _queriedCapabilities,
      profile: _profile,
    );
  }

  String get profileName => _profile.kind.name;

  String get surfaceLabel => '${width}x$height';

  String? get frameStatsLabel {
    final stats = _lastFrameStats;
    if (stats == null) return null;
    return 'draws=${stats.drawCalls};triangles=${stats.trianglesSubmitted};'
        'instances=${stats.instancesSubmitted};gpuBytes=${stats.liveGpuBytes};'
        'creates=${stats.resourceCreateCount};deletes=${stats.resourceDeleteCount};'
        'frameMs=${_lastFrameMs.toStringAsFixed(3)}';
  }

  bool get frameBudgetWithinLimits {
    final stats = _lastFrameStats;
    if (stats == null) return false;
    return stats.drawCalls <= 64 &&
        stats.trianglesSubmitted <= 100000 &&
        stats.liveGpuBytes <= 64 * 1024 * 1024 &&
        _lastFrameMs <= 100;
  }

  String? get profileFallbackReason => _profileFallbackReason;

  @override
  void initialize() {
    _device = pxgl.WebGl2Device(context);
    _queriedCapabilities = _device.queryCapabilities();
    _profile = _capabilityBridge.runtimeProfile(_queriedCapabilities);
    final surface = px.SurfaceMetrics(
      cssWidth: width,
      cssHeight: height,
      pixelWidth: width,
      pixelHeight: height,
    );
    _renderer = px.SceneRendererImpl(_device);
    try {
      _renderer.initialize(_configurationForProfile(_profile), surface);
    } catch (error) {
      if (_profile == px.QualityProfile.safe) rethrow;
      _profileFallbackReason =
          '${_profile.kind.name} profile failed; using safe graph: $error';
      _profile = px.QualityProfile.safe;
      _renderer = px.SceneRendererImpl(_device)
        ..initialize(px.RendererConfiguration.safe, surface);
    }
    _world = _renderer.createWorld();
    _initialized = true;
  }

  @override
  void resize(int nextWidth, int nextHeight) {
    if (nextWidth <= 0 || nextHeight <= 0) {
      throw ArgumentError('Pixeldart surface size must be positive');
    }
    if (!_initialized) {
      width = nextWidth;
      height = nextHeight;
      return;
    }
    _renderer.resize(
      px.SurfaceMetrics(
        cssWidth: nextWidth,
        cssHeight: nextHeight,
        pixelWidth: nextWidth,
        pixelHeight: nextHeight,
      ),
    );
    width = nextWidth;
    height = nextHeight;
  }

  px.RendererConfiguration _configurationForProfile(
    px.QualityProfile profile,
  ) => px.RendererConfiguration(
    profile: profile,
    internalWidth: 384,
    internalHeight: 216,
    shadowMapCount: profile.installs(px.PipelineFeatures.shadows) ? 1 : 0,
  );

  /// Installs the retained room shells once. Simulation-owned room facts are
  /// read here, while the Pixeldart world owns only renderer handles.
  void attachHouse(House house) {
    if (!_initialized || _sceneItems.isNotEmpty) return;
    _houseForInventory = house;
    _textures['wall-plaster'] = _renderer.resources.registerTexture(
      width: 256,
      height: 256,
      debugLabel: 'texture:wall-plaster',
    );
    _textures['grime'] = _renderer.resources.registerTexture(
      width: 512,
      height: 512,
      debugLabel: 'texture:grime',
    );
    _sceneMaterial = _renderer.resources.registerMaterial(
      px.MaterialDefinition(
        key: 'quarantine-house-safe',
        albedoTexture: _textures['wall-plaster'],
        tintR: 0.46,
        tintG: 0.44,
        tintB: 0.48,
        uvScaleU: 1.0,
        uvScaleV: 1.0,
      ),
    );
    _roomMaterials['cellar'] = _renderer.resources.registerMaterial(
      px.MaterialDefinition(
        key: 'quarantine-house-cellar',
        albedoTexture: _textures['grime'],
        tintR: 0.29,
        tintG: 0.28,
        tintB: 0.30,
        uvScaleU: 1.0,
        uvScaleV: 1.0,
      ),
    );
    for (final room in house.rooms.where((room) => room.id != 'cellar')) {
      final tint = _roomTint(room.id);
      _roomMaterials[room.id] = _renderer.resources.registerMaterial(
        px.MaterialDefinition(
          key: 'quarantine-house-${room.id}-gothic',
          albedoTexture: _textures['wall-plaster'],
          tintR: tint.$1,
          tintG: tint.$2,
          tintB: tint.$3,
          uvScaleU: 1.0,
          uvScaleV: 1.0,
        ),
      );
    }
    for (final kind in const [
      'architecture',
      'furniture',
      'fixture',
      'service',
      'story',
      'decor',
      'micro',
    ]) {
      final isService = kind == 'service';
      _inventoryMaterials[kind] = _renderer.resources.registerMaterial(
        px.MaterialDefinition(
          key: 'quarantine-inventory-$kind',
          albedoTexture: isService
              ? _textures['grime']
              : _textures['wall-plaster'],
          tintR: _inventoryTint(kind).$1,
          tintG: _inventoryTint(kind).$2,
          tintB: _inventoryTint(kind).$3,
          receivesShadow: true,
        ),
      );
    }
    for (final room in house.rooms) {
      final mesh = _roomMesh(house, room);
      final handle = _renderer.resources.registerMesh(
        mesh,
        debugLabel: 'room:${room.id}',
      );
      _sceneMeshes.add(handle);
      _roomMeshesById[room.id] = handle;
      final descriptor = px.RetainedItemDescriptor(
        mesh: handle,
        material: _materialForRoom(room.id),
      );
      final item = _world.addItem(descriptor);
      _sceneItems.add(item);
      _sceneItemsByRoom[room.id] = item;
      _sceneDescriptors[room.id] = descriptor;
    }
    for (final room in house.rooms) {
      for (final window in room.windows) {
        _addDecoration(
          room.id,
          _windowMesh(room, window),
          () => !window.shutterOpen,
        );
      }
    }
    for (final portal in house.portals) {
      if (portal.stair) continue;
      final room = house.byId(portal.a);
      if (room == null) continue;
      _addDecoration(
        room.id,
        _portalMesh(room, portal),
        () => !portal.passable,
      );
    }
    final exteriorMesh = toPixeldartMeshData(buildHouseExteriorMesh(house));
    _exteriorMaterial = _renderer.resources.registerMaterial(
      px.MaterialDefinition(
        key: 'quarantine-house-exterior-shell',
        albedoTexture: _textures['grime'],
        tintR: 0.5,
        tintG: 0.5,
        tintB: 0.5,
        doubleSided: true,
      ),
    );
    final exteriorHandle = _renderer.resources.registerMesh(
      exteriorMesh,
      debugLabel: 'exterior:main-shell',
    );
    _sceneMeshes.add(exteriorHandle);
    final exteriorDescriptor = px.RetainedItemDescriptor(
      mesh: exteriorHandle,
      material: _exteriorMaterial!,
      visibilityMask: -1,
    );
    _exteriorShellDescriptor = exteriorDescriptor;
    _exteriorShellItem = _world.addItem(exteriorDescriptor);
  }

  /// Records the authored placement index for this runtime. Geometry remains
  /// renderer-neutral; model handles can be swapped in later without
  /// changing room visibility or simulation ownership.
  void setInventory(HouseInventory inventory) {
    _inventoryPlacements = List<InventoryPlacement>.unmodifiable(
      inventory.placements,
    );
    if (!_initialized) return;
    for (final entry in _inventoryItemsById.entries) {
      _world.removeItem(entry.value);
      final descriptor = _inventoryDescriptors[entry.key];
      if (descriptor != null) {
        _renderer.resources.releaseMesh(descriptor.mesh);
      }
    }
    _inventoryItemsById.clear();
    _inventoryDescriptors.clear();
    _inventoryMeshes.clear();
    for (final placement in _inventoryPlacements) {
      final room = _houseForInventory?.byId(placement.roomId);
      if (room == null) continue;
      final asset = inventory.assetFor(placement.assetId);
      final mesh = _renderer.resources.registerMesh(
        _inventoryProxyMesh(asset, placement, inventory.modelScale),
        debugLabel: 'inventory:${placement.id}',
      );
      final position = placement.runtimePosition(inventory.modelScale);
      final rotation = px.Quat.axisAngle(
        const px.Vec3(0, 1, 0),
        placement.transform.rotation.y * math.pi / 180,
      );
      final descriptor = px.RetainedItemDescriptor(
        mesh: mesh,
        material: _inventoryMaterial(asset.kind),
        transform: px.Transform(
          translation: px.Vec3(
            room.origin.x + position.x,
            room.origin.y + position.y,
            room.origin.z + position.z,
          ),
          rotation: rotation,
        ),
        visibilityMask: -1,
        castsShadow: false,
      );
      _inventoryMeshes.add(mesh);
      _inventoryDescriptors[placement.id] = descriptor;
      _inventoryItemsById[placement.id] = _world.addItem(descriptor);
    }
    _canvas.setAttribute(
      'data-renderer-inventory-items',
      '${_inventoryItemsById.length}',
    );
  }

  House? _houseForInventory;

  Iterable<InventoryPlacement> inventoryForRoom(String roomId) =>
      _inventoryPlacements.where((placement) => placement.roomId == roomId);

  void setVisibleRooms(House house, String currentRoomId) {
    final current = house.byId(currentRoomId);
    if (current == null) return;
    final visible = <String>{current.id};
    for (final portal in house.portalsFor(current.id)) {
      final adjacent = portal.other(current.id);
      if (portal.passable && adjacent != null && house.byId(adjacent) != null) {
        visible.add(adjacent);
      }
    }
    for (final entry in _sceneItemsByRoom.entries) {
      final base = _sceneDescriptors[entry.key]!;
      final descriptor = _withVisibility(
        base,
        visible.contains(entry.key) ? -1 : 0,
      );
      _world.updateItem(entry.value, descriptor);
      _sceneDescriptors[entry.key] = descriptor;
    }
    for (final decoration in _decorations) {
      final mask = visible.contains(decoration.roomId) && decoration.isVisible()
          ? -1
          : 0;
      _world.updateItem(
        decoration.item,
        _withVisibility(decoration.base, mask),
      );
    }
    for (final placement in _inventoryPlacements) {
      final item = _inventoryItemsById[placement.id];
      final base = _inventoryDescriptors[placement.id];
      if (item == null || base == null) continue;
      _world.updateItem(
        item,
        _withVisibility(base, visible.contains(placement.roomId) ? -1 : 0),
      );
    }
    final exteriorVisible = ExteriorPvs()
        .cellsForRoom(currentRoomId)
        .isNotEmpty;
    final exteriorItem = _exteriorShellItem;
    final exteriorBase = _exteriorShellDescriptor;
    if (exteriorItem != null && exteriorBase != null) {
      final descriptor = _withVisibility(
        exteriorBase,
        exteriorVisible ? -1 : 0,
      );
      _world.updateItem(exteriorItem, descriptor);
      _exteriorShellDescriptor = descriptor;
    }
  }

  /// Rebuilds one retained room after an authoritative overnight drift. The
  /// simulation owns the changed room dimensions; Pixeldart only replaces the
  /// renderer-owned mesh and keeps the stable scene item/material identity.
  /// Releasing the old mesh in the same operation prevents a sleep cycle from
  /// accumulating GPU resources.
  void refreshRoomGeometry(House house, String roomId) {
    if (!_initialized) return;
    final item = _sceneItemsByRoom[roomId];
    final descriptor = _sceneDescriptors[roomId];
    final oldMesh = _roomMeshesById[roomId];
    final room = house.byId(roomId);
    if (item == null || descriptor == null || oldMesh == null || room == null) {
      return;
    }
    final nextMesh = _renderer.resources.registerMesh(
      _roomMesh(house, room),
      debugLabel: 'room:$roomId:drift-${house.drift.landedCount}',
    );
    final nextDescriptor = px.RetainedItemDescriptor(
      mesh: nextMesh,
      material: descriptor.material,
      transform: descriptor.transform,
      visibilityMask: descriptor.visibilityMask,
      drawMode: descriptor.drawMode,
      blendMode: descriptor.blendMode,
      castsShadow: descriptor.castsShadow,
      receivesShadow: descriptor.receivesShadow,
      sortTiebreaker: descriptor.sortTiebreaker,
      instanceFamilyKey: descriptor.instanceFamilyKey,
    );
    _world.updateItem(item, nextDescriptor);
    _sceneDescriptors[roomId] = nextDescriptor;
    _roomMeshesById[roomId] = nextMesh;
    _sceneMeshes
      ..remove(oldMesh)
      ..add(nextMesh);
    _renderer.resources.releaseMesh(oldMesh);
    _canvas.setAttribute(
      'data-renderer-geometry-refreshes',
      '${_geometryRefreshes + 1}',
    );
    _geometryRefreshes++;
  }

  int _geometryRefreshes = 0;

  void setLighting(
    House house,
    String currentRoomId,
    Vec3 eye,
    double sunAngle,
    double daylight,
  ) {
    final visible = <String>{currentRoomId};
    final current = house.byId(currentRoomId);
    if (current != null) {
      for (final portal in house.portalsFor(current.id)) {
        final adjacent = portal.other(current.id);
        if (portal.passable &&
            adjacent != null &&
            house.byId(adjacent) != null) {
          visible.add(adjacent);
        }
      }
    }
    final mantleLights = house_lighting.HouseLighting(
      house,
    ).visibleMantles(visible, eye);
    final points = <px.PointLight>[];
    for (var i = 0; i < mantleLights.length; i++) {
      final light = mantleLights[i];
      final color = _color(light.color);
      points.add(
        px.PointLight(
          id: i,
          position: px.Vec3(
            light.position.x,
            light.position.y,
            light.position.z,
          ),
          color: color,
          intensity: light.intensity,
          radius: light.radius,
        ),
      );
    }
    final sun = sunDirection(sunAngle);
    _environment = px.FrameEnvironment(
      // Cool desaturated fill keeps moonlit plaster and old paint distinct
      // while warm mantle lights remain the only saturated practicals.
      ambientColor: const px.LinearColor(0.34, 0.39, 0.50),
      ambientIntensity: math.max(ambientFloor, ambientPeak * daylight),
      directionalLight: sunAngle == 0
          ? null
          : px.DirectionalLight(
              direction: px.Vec3(sun.x, sun.y, sun.z),
              color: _color(sunColor(sunAngle)),
              intensity: 0.72 + daylight * 0.18,
            ),
      pointLights: points,
      clearColor: const px.LinearColor(0.008, 0.012, 0.024),
      fogColor: const px.LinearColor(0.012, 0.016, 0.028),
      fogStart: fogStart,
      fogEnd: fogEnd,
    );
  }

  void setCamera(Camera camera) {
    final eye = px.Vec3(camera.eye.x, camera.eye.y, camera.eye.z);
    final forward = px.Vec3(camera.fwd.x, camera.fwd.y, camera.fwd.z);
    final up = px.Vec3(camera.up.x, camera.up.y, camera.up.z);
    final aspect = width / height;
    final view = px.Mat4.lookAt(eye: eye, forward: forward, up: up);
    final projection = px.Mat4.perspective(
      fovYRadians: math.pi / 3,
      aspect: aspect,
      near: glDepthNear,
      far: glDepthFar,
    );
    _cameraView = px.CameraView(
      view: view,
      projection: projection,
      viewProjection: projection * view,
      eye: eye,
      forward: forward,
      near: glDepthNear,
      far: glDepthFar,
      aspect: aspect,
    );
  }

  /// Maps simulation-owned rupture stages into renderer effect weights without
  /// teaching Pixeldart game rules.
  void setPostProcess(RuptureState rupture, {required bool reducedMotion}) {
    final step = rupture.step;
    final duration = rupture.stageDuration;
    final progress = duration > 0
        ? (rupture.stepElapsed / duration).clamp(0.0, 1.0)
        : 0.0;
    final afterGrade = step.index >= RuptureStep.gradeLUT.index;
    final afterWarp = step.index >= RuptureStep.affineWarp.index;
    final afterSnap = step.index >= RuptureStep.vertexSnap.index;
    final tape = step == RuptureStep.tapeGiveup;
    final lightsOut = step == RuptureStep.lightsOut;
    _post = px.PostProcessState(
      exposure: lightsOut ? 0.45 : 1.0,
      bloomStrength: bloomStrength,
      ssaoStrength: ssaoStrength,
      vignette: postVignette,
      grain: postGrain,
      colorGradeStrength: afterGrade
          ? (step == RuptureStep.gradeLUT ? progress : 1.0)
          : 0.0,
      affineWarpStrength: afterWarp
          ? (step == RuptureStep.affineWarp ? progress : 1.0)
          : 0.0,
      vertexSnapGrid: afterSnap ? 320.0 : 0.0,
      quantizationBits: afterSnap ? 5 : 8,
      vhsChromaWeight: tape ? 1.0 : 0.0,
      vhsTrackingWeight: tape ? progress : 0.0,
      vhsNoiseWeight: tape ? progress : 0.0,
      vhsHeadSwitchWeight: tape ? progress : 0.0,
      vhsDropoutWeight: tape ? progress : 0.0,
      vhsGhostWeight: tape ? progress : 0.0,
      reducedMotion: reducedMotion,
    );
  }

  void setFrameClock({
    required double timeSeconds,
    required int historyEpoch,
    required int noiseSeed,
  }) {
    if (!timeSeconds.isFinite || timeSeconds < 0) {
      throw ArgumentError.value(timeSeconds, 'timeSeconds');
    }
    if (historyEpoch < 0 || noiseSeed < 0) {
      throw ArgumentError('frame clock seeds must be non-negative');
    }
    _timeSeconds = timeSeconds;
    _historyEpoch = historyEpoch;
    _noiseSeed = noiseSeed;
  }

  @override
  void submit(RendererFrame frame) {
    if (!_initialized) throw StateError('Pixeldart runtime is not initialized');
    final input = px.FrameInput(
      camera: _cameraView ?? _defaultCamera(),
      environment: _environment,
      post: _post,
      frameIndex: _frameIndex++,
      historyEpoch: _historyEpoch,
      noiseSeed: _noiseSeed,
      timeSeconds: _timeSeconds,
    );
    final stopwatch = Stopwatch()..start();
    _renderer.beginFrame(_world, input);
    _lastFrameStats = _renderer.endFrame();
    stopwatch.stop();
    _lastFrameMs =
        stopwatch.elapsedMicroseconds / Duration.microsecondsPerMillisecond;
  }

  @override
  void handleInput(RendererInputAction action) {}

  @override
  void loseContext() {}

  @override
  void recover() {
    _historyEpoch++;
  }

  @override
  void dispose() {
    if (!_initialized) return;
    _renderer.dispose();
    _device.disposeListeners();
    _initialized = false;
  }

  px.CameraView _defaultCamera() {
    final eye = px.Vec3.zero;
    final view = px.Mat4.identity();
    final projection = px.Mat4.perspective(
      fovYRadians: math.pi / 3,
      aspect: width / height,
      near: glDepthNear,
      far: glDepthFar,
    );
    return px.CameraView(
      view: view,
      projection: projection,
      viewProjection: projection * view,
      eye: eye,
      forward: const px.Vec3(0, 0, 1),
      near: glDepthNear,
      far: glDepthFar,
      aspect: width / height,
    );
  }

  px.MeshData _roomMesh(House house, Room room) {
    final vertices = buildRoomGeometry(house, room).combined;
    final points = <px.Vec3>[];
    for (var i = 0; i < vertices.length; i += vertexStride) {
      points.add(px.Vec3(vertices[i], vertices[i + 1], vertices[i + 2]));
    }
    return px.MeshData(
      layout: px.VertexLayoutDescriptor.compatibility14,
      vertices: vertices,
      localBounds: px.Aabb.fromPoints(points),
    );
  }

  void _addDecoration(
    String roomId,
    px.MeshData mesh,
    bool Function() visible,
  ) {
    final handle = _renderer.resources.registerMesh(
      mesh,
      debugLabel: 'decoration:$roomId',
    );
    _sceneMeshes.add(handle);
    final base = px.RetainedItemDescriptor(
      mesh: handle,
      material: _materialForRoom(roomId),
      visibilityMask: 0,
    );
    final item = _world.addItem(base);
    _decorations.add(
      _PixeldartDecoration(
        roomId: roomId,
        item: item,
        base: base,
        isVisible: visible,
      ),
    );
  }

  px.MaterialHandle _materialForRoom(String roomId) =>
      _roomMaterials[roomId] ?? _sceneMaterial!;

  px.MeshData _inventoryProxyMesh(
    InventoryAsset asset,
    InventoryPlacement placement,
    double modelScale,
  ) {
    final scale = placement.transform.scale;
    final min = Vec3(
      asset.bounds.min.x * scale.x * modelScale,
      asset.bounds.min.y * scale.y * modelScale,
      asset.bounds.min.z * scale.z * modelScale,
    );
    final max = Vec3(
      asset.bounds.max.x * scale.x * modelScale,
      asset.bounds.max.y * scale.y * modelScale,
      asset.bounds.max.z * scale.z * modelScale,
    );
    final builder = StaticMeshBuilder();
    _inventoryBox(builder, min, max, _inventoryColor(asset.kind));
    final vertices = builder.build();
    return px.MeshData(
      layout: px.VertexLayoutDescriptor.compatibility14,
      vertices: vertices,
      localBounds: px.Aabb.fromPoints([
        for (var i = 0; i < vertices.length; i += vertexStride)
          px.Vec3(vertices[i], vertices[i + 1], vertices[i + 2]),
      ]),
    );
  }

  int _inventoryColor(String kind) => switch (kind) {
    'architecture' => 0x84715D,
    'fixture' => 0x9C978B,
    'service' => 0x5F5B55,
    'story' => 0xA69A83,
    'micro' => 0x6D6257,
    _ => 0x75665B,
  };

  px.MaterialHandle _inventoryMaterial(String kind) =>
      _inventoryMaterials[kind] ?? _inventoryMaterials['furniture']!;

  (double, double, double) _inventoryTint(String kind) => switch (kind) {
    'architecture' => (0.48, 0.40, 0.34),
    'furniture' => (0.38, 0.25, 0.19),
    'fixture' => (0.52, 0.50, 0.44),
    'service' => (0.28, 0.27, 0.25),
    'story' => (0.44, 0.37, 0.28),
    'decor' => (0.37, 0.33, 0.31),
    'micro' => (0.31, 0.28, 0.24),
    _ => (0.38, 0.25, 0.19),
  };

  (double, double, double) _roomTint(String roomId) => switch (roomId) {
    'living-room' => (0.43, 0.38, 0.43),
    'hall' => (0.36, 0.39, 0.46),
    'kitchen' => (0.45, 0.42, 0.35),
    'bedroom' => (0.34, 0.36, 0.45),
    'landing' => (0.31, 0.34, 0.40),
    'bathroom' => (0.42, 0.44, 0.43),
    'spare-room' => (0.34, 0.30, 0.36),
    _ => (0.46, 0.44, 0.48),
  };

  void _inventoryBox(StaticMeshBuilder builder, Vec3 min, Vec3 max, int color) {
    final p000 = Vec3(min.x, min.y, min.z);
    final p100 = Vec3(max.x, min.y, min.z);
    final p110 = Vec3(max.x, max.y, min.z);
    final p010 = Vec3(min.x, max.y, min.z);
    final p001 = Vec3(min.x, min.y, max.z);
    final p101 = Vec3(max.x, min.y, max.z);
    final p111 = Vec3(max.x, max.y, max.z);
    final p011 = Vec3(min.x, max.y, max.z);
    builder
      ..quad(p100, p000, p010, p110, color)
      ..quad(p001, p101, p111, p011, color)
      ..quad(p000, p001, p011, p010, color)
      ..quad(p101, p100, p110, p111, color)
      ..quad(p000, p100, p101, p001, color)
      ..quad(p010, p011, p111, p110, color);
  }

  /// Loads authored RGBA pixels into the already-declared retained textures.
  /// Declaring handles during [attachHouse] means geometry and materials stay
  /// stable while the browser performs image decoding; missing art keeps the
  /// renderer's white fallback instead of removing the scene.
  Future<void> loadTextures(Map<String, String> urls) async {
    if (!_initialized) return;
    await Future.wait([
      for (final key in const ['wall-plaster', 'grime'])
        if (urls[key] case final url?) _loadTexture(key, url),
    ]);
  }

  Future<void> _loadTexture(String key, String url) async {
    final handle = _textures[key];
    if (handle == null) return;
    try {
      final image = web.HTMLImageElement()..src = url;
      await image.decode().toDart;
      final canvas = web.HTMLCanvasElement()
        ..width = image.naturalWidth
        ..height = image.naturalHeight;
      final context = canvas.getContext('2d');
      if (context is! web.CanvasRenderingContext2D) {
        throw StateError('2D canvas context unavailable for $key');
      }
      context.drawImage(image, 0, 0);
      final pixels = context
          .getImageData(0, 0, image.naturalWidth, image.naturalHeight)
          .data
          .toDart;
      _renderer.resources.updateTexturePixels(
        handle,
        Uint8List.fromList(pixels),
      );
      _canvas.setAttribute('data-renderer-texture-$key', 'loaded');
    } catch (error) {
      _canvas.setAttribute('data-renderer-texture-$key', 'fallback');
      web.console.warn('Pixeldart texture $key unavailable: $error'.toJS);
    }
  }

  px.RetainedItemDescriptor _withVisibility(
    px.RetainedItemDescriptor base,
    int visibilityMask,
  ) => px.RetainedItemDescriptor(
    mesh: base.mesh,
    material: base.material,
    transform: base.transform,
    visibilityMask: visibilityMask,
    drawMode: base.drawMode,
    blendMode: base.blendMode,
    castsShadow: base.castsShadow,
    receivesShadow: base.receivesShadow,
    sortTiebreaker: base.sortTiebreaker,
    instanceFamilyKey: base.instanceFamilyKey,
  );

  px.MeshData _windowMesh(Room room, Window window) {
    return _panelMesh(
      room,
      window.facing,
      window.offset,
      window.offset + window.w,
      window.sill,
      window.sill + window.h,
      0x7895A8,
    );
  }

  px.MeshData _portalMesh(Room room, Portal portal) => _panelMesh(
    room,
    portal.facingFor(room.id),
    portal.offsetFor(room.id),
    portal.offsetFor(room.id) + portal.width,
    0,
    portal.height,
    0x5A4335,
  );

  px.MeshData _panelMesh(
    Room room,
    Facing facing,
    double u0,
    double u1,
    double v0,
    double v1,
    int color,
  ) {
    final size = _house.effectiveSize(room);
    final x = room.origin.x;
    final y = room.origin.y;
    final z = room.origin.z;
    final inset = 0.002;
    final points = switch (facing) {
      Facing.north => [
        Vec3(x + u0, y + v0, z + inset),
        Vec3(x + u1, y + v0, z + inset),
        Vec3(x + u1, y + v1, z + inset),
        Vec3(x + u0, y + v1, z + inset),
      ],
      Facing.south => [
        Vec3(x + u1, y + v0, z + size.z - inset),
        Vec3(x + u0, y + v0, z + size.z - inset),
        Vec3(x + u0, y + v1, z + size.z - inset),
        Vec3(x + u1, y + v1, z + size.z - inset),
      ],
      Facing.east => [
        Vec3(x + size.x - inset, y + v1, z + u1),
        Vec3(x + size.x - inset, y + v1, z + u0),
        Vec3(x + size.x - inset, y + v0, z + u0),
        Vec3(x + size.x - inset, y + v0, z + u1),
      ],
      Facing.west => [
        Vec3(x + inset, y + v1, z + u0),
        Vec3(x + inset, y + v1, z + u1),
        Vec3(x + inset, y + v0, z + u1),
        Vec3(x + inset, y + v0, z + u0),
      ],
    };
    final builder = StaticMeshBuilder()
      ..quad(points[0], points[1], points[2], points[3], color);
    final vertices = builder.build();
    return px.MeshData(
      layout: px.VertexLayoutDescriptor.compatibility14,
      vertices: vertices,
      localBounds: px.Aabb.fromPoints([
        for (var i = 0; i < vertices.length; i += vertexStride)
          px.Vec3(vertices[i], vertices[i + 1], vertices[i + 2]),
      ]),
    );
  }

  px.LinearColor _color(int rgb) => px.LinearColor(
    ((rgb >> 16) & 0xff) / 255,
    ((rgb >> 8) & 0xff) / 255,
    (rgb & 0xff) / 255,
  );
}

/// Browser-owned legacy runtime. The legacy engine remains unchanged, but its
/// concrete draw is now entered through the same neutral backend lifecycle as
/// Pixeldart. Renderer and DOM handles never leave this web-only runtime.
final class _LegacyWebRuntime implements RendererRuntime {
  final web.WebGL2RenderingContext context;
  int width;
  int height;
  final bool imageEffects;
  final bool fallback;
  final String? fallbackReason;
  late final Renderer renderer;
  bool _initialized = false;
  bool _contextLost = false;
  int _submittedFrames = 0;

  int get submittedFrames => _submittedFrames;

  _LegacyWebRuntime(
    this.context,
    this.width,
    this.height, {
    required this.imageEffects,
    this.fallback = false,
    this.fallbackReason,
  });

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics.fromEnvironment(
    backend: 'legacy',
    profile: 'legacy',
    capabilities: const [],
    fallback: fallback,
    fallbackReason: fallbackReason,
  );

  @override
  bool get contextLost => _contextLost;

  @override
  void initialize() {
    if (_initialized) return;
    renderer = Renderer(context, width, height);
    renderer.configureImageEffects(
      affineTexture: imageEffects,
      vertexSnapping: imageEffects,
      colorQuantize: imageEffects,
    );
    _initialized = true;
  }

  @override
  void resize(int nextWidth, int nextHeight) {
    if (nextWidth <= 0 || nextHeight <= 0) {
      throw ArgumentError('legacy surface size must be positive');
    }
    width = nextWidth;
    height = nextHeight;
    if (_initialized) renderer.resize(nextWidth, nextHeight);
  }

  @override
  void submit(RendererFrame frame) {
    if (!_initialized) {
      throw StateError('legacy runtime is not initialized');
    }
    if (_contextLost || _emitter == null) return;
    _submittedFrames++;
    _canvas.setAttribute('data-renderer-frame-submits', '$_submittedFrames');
    _render(renderer, _legacyFrameTime, _rupture);
  }

  @override
  void handleInput(RendererInputAction action) {}

  @override
  void loseContext() {
    _contextLost = true;
  }

  @override
  void recover() {
    _contextLost = false;
  }

  @override
  void dispose() {
    _initialized = false;
    _contextLost = false;
  }
}

final class _PixeldartDecoration {
  final String roomId;
  final px.InstanceId item;
  final px.RetainedItemDescriptor base;
  final bool Function() isVisible;

  const _PixeldartDecoration({
    required this.roomId,
    required this.item,
    required this.base,
    required this.isVisible,
  });
}

BackendSelection _selectRuntimeBackend() {
  return _backendSelector.select(Uri.base.queryParameters['renderer']);
}

int _mintRunSeed() => 1 + math.Random().nextInt(0x7FFFFFFF);

late web.HTMLCanvasElement _canvas;
late Camera _camera;
late Input _input;
late Hud<Object> _hud;
Renderer? _renderer;
late House _house;
RoomEmitter? _emitter;
late GameTime _time;
late GameSession _session;
late BrowserSaveStore _saveStore;

web.Element? _fpsDiv;

Audio? _audio;
bool _audioArmed = false;
bool _reducedMotion = false;
const _audioPreferencePrefix = 'quarantine.audio.';
const _displayPreferencePrefix = 'quarantine.display.';
HouseSoundscape? _houseSoundscape;
HouseInventory? _houseInventory;
AudioPlanner? _audioPlanner;
int _audioEventSequence = 0;
final HouseClock _houseClock = HouseClock();
final HouseServiceSoundScheduler _houseServiceSounds =
    HouseServiceSoundScheduler();

bool _paused = false;
bool _haveLastTime = false;
double _lastTime = 0;
double _legacyFrameTime = 0;
double _accumulator = 0;
bool _shadersLive = false;
String _bootPhase = 'booting';

Vec3 _simEye = Vec3(0, 0, 0);
Vec3 _prevEye = Vec3(0, 0, 0);
Vec3 _viewEye = Vec3(0, 0, 0);
double _simYaw = 0;
double _simPitch = 0;

String _currentRoom = 'hall';
late Capsule _playerCapsule;
late ExamineState _examineState;
late RuptureState _rupture;
RuptureStep? _lastRendererRuptureStep;
int _rendererHistoryEpoch = 0;
final FpsMotion _motion = FpsMotion();

Panel? _activePanel;
late JournalPanel _journal;
late InteractionEngine _interactionEngine;
late Prompt _prompt;
late Broadcast _broadcast;
late Door _door;
late SleepPanel _sleepPanel;
late HelpPanel _helpPanel;
late SettingsPanel _settingsPanel;
late EndingPanel _endingPanel;
late VisitorDirector _visitorDirector;
late AmbientDirector _ambientDirector;
late AmbientNotice _ambientNotice;
final Set<int> _unverifiableDaysShown = {};

final List<String> _pendingSounds = [];
EndingState? _ending;
bool _runEnded = false;

Future<void> main() async {
  final canvas = web.document.getElementById('game') as web.HTMLCanvasElement?;
  if (canvas == null) return;
  _canvas = canvas;
  _fpsDiv = web.document.getElementById('fps');
  _backendSelection = _selectRuntimeBackend();
  _installBootDiagnostics();
  _canvas.width = web.window.innerWidth > 0 ? web.window.innerWidth : 800;
  _canvas.height = web.window.innerHeight > 0 ? web.window.innerHeight : 600;
  final ctx = canvas.getContext('webgl2') as web.WebGL2RenderingContext?;
  if (ctx == null) {
    _backendSelection = BackendSelection(
      RendererBackendKind.legacy,
      explicit: _backendSelection.explicit,
      automatic: _backendSelection.automatic,
      fallback: true,
      fallbackReason: 'webgl2 unavailable',
    );
    _presentationBackend = const BackendFactory().create(_backendSelection)
      ..initialize();
    _publishRendererDiagnostics();
    _setBootPhase('no-webgl2');
    web.document.getElementById('credits')?.textContent =
        'this browser has no webgl2.';
    return;
  }
  try {
    final runtime = _backendSelection.kind == RendererBackendKind.next
        ? _PixeldartWebRuntime(ctx, _canvas.width, _canvas.height)
        : _LegacyWebRuntime(
            ctx,
            _canvas.width,
            _canvas.height,
            imageEffects: _legacyRenderProfile,
            fallback: _backendSelection.fallback,
            fallbackReason: _backendSelection.fallbackReason,
          );
    _pixeldartRuntime = runtime is _PixeldartWebRuntime ? runtime : null;
    _legacyRuntime = runtime is _LegacyWebRuntime ? runtime : null;
    _presentationBackend = const BackendFactory().create(
      _backendSelection,
      runtime: runtime,
    )..initialize();
  } catch (error) {
    _backendSelection = BackendSelection(
      RendererBackendKind.legacy,
      explicit: true,
      automatic: _backendSelection.automatic,
      fallback: true,
      fallbackReason: 'pixeldart initialization failed',
    );
    _legacyRuntime = _LegacyWebRuntime(
      ctx,
      _canvas.width,
      _canvas.height,
      imageEffects: _legacyRenderProfile,
      fallback: true,
      fallbackReason: _backendSelection.fallbackReason,
    );
    _presentationBackend = const BackendFactory().create(
      _backendSelection,
      runtime: _legacyRuntime,
    )..initialize();
    _canvas.setAttribute('data-renderer-error', '$error');
  }
  _publishRendererDiagnostics();
  try {
    _setBootPhase('initializing');
    _camera = Camera();
    _reducedMotion = web.window
        .matchMedia('(prefers-reduced-motion: reduce)')
        .matches;
    _camera.breathScale = _reducedMotion ? 0.5 : 1.0;
    _input = Input(web.window);
    _hud = Hud<Object>();

    _canvas.width = web.window.innerWidth > 0 ? web.window.innerWidth : 800;
    _canvas.height = web.window.innerHeight > 0 ? web.window.innerHeight : 600;
    _setBootPhase('renderer');
    if (_backendSelection.kind == RendererBackendKind.legacy) {
      _renderer = _legacyRuntime?.renderer;
      if (_renderer == null) {
        throw StateError('legacy runtime did not initialize its renderer');
      }
    }

    _setBootPhase('text');
    await textLibrary.load();
    final visitorStory = textLibrary.visitorStory();
    final visitorBuild = VisitorDirector.build(visitorStory);
    if (visitorBuild is! VisitorDirectorBuilt) {
      final issue = (visitorBuild as VisitorUnavailable).issue;
      throw 'Failed to build visitors: ${issue.message}';
    }
    _visitorDirector = visitorBuild.director;
    _ambientDirector = AmbientDirector.build(visitorStory);
    final vocabulary = Vocabulary({
      for (final field in vocabularyFields)
        field: textLibrary.getVocabulary(field),
    });
    _saveStore = BrowserSaveStore();
    final saved = _saveStore.read(
      isUsable: (snapshot) {
        try {
          GameSession.restore(vocabulary: vocabulary, snapshot: snapshot);
          return true;
        } on FormatException {
          return false;
        }
      },
    );
    _session = saved.snapshot == null
        ? GameSession.create(
            vocabulary: vocabulary,
            houseSeed: 42,
            runSeed: _mintRunSeed(),
            startHour: initialDayHour,
          )
        : GameSession.restore(
            vocabulary: vocabulary,
            snapshot: saved.snapshot!,
          );
    _presentationBackend.submit(
      RendererFrame(snapshot: _session.presentationSnapshot),
    );
    if (saved.recovery != null) _showSaveStatus(saved.recovery!);
    _visitorDirector.standIns = drawStandIns(
      _session.runSeed,
      eligibleStandIns(visitorStory.visitors),
    ).toSet();
    _setBootPhase('house');
    _house = _session.house;
    _pixeldartRuntime?.attachHouse(_house);
    _time = _session.time;

    _simEye = Vec3(5.5, 1.65, 3.5);
    _prevEye = _simEye;
    _viewEye = _simEye;
    final initialCapsuleBase =
        _simEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
    _playerCapsule = Capsule(
      base: initialCapsuleBase,
      tip:
          initialCapsuleBase +
          Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
    );
    _examineState = ExamineState();
    _rupture = RuptureState();
    _currentRoom = 'hall';
    final savedPlayer = PlayerState.tryFromJson(saved.snapshot?.meta['player']);
    if (savedPlayer != null && savedPlayer.isCollisionSafe(_house)) {
      _simEye = savedPlayer.eye;
      _prevEye = _simEye;
      _viewEye = _simEye;
      _simYaw = savedPlayer.yaw;
      _simPitch = savedPlayer.pitch;
      _currentRoom = savedPlayer.roomId;
      final restoredBase =
          _simEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
      _playerCapsule
        ..base = restoredBase
        ..tip =
            restoredBase +
            Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0);

      _playerCapsule.restoreActiveStair(
        house: _house,
        stairId: savedPlayer.activeStairId,
        progress: savedPlayer.activeStairProgress,
        currentRoom: _currentRoom,
        eye: _simEye,
      );

      _showSaveStatus('restored position');
    }

    _interactionEngine = InteractionEngine(
      journal: _session.journal,
      time: _time,
      runSeed: _session.runSeed,
    );
    _journal = JournalPanel(
      web.document,
      _session.journal,
      _time,
      _interactionEngine,
    );
    _journal.onClose = () {
      _activePanel = null;
      _input.requestPointerLock(_canvas);
    };
    _prompt = Prompt(web.document);
    _broadcast = Broadcast(web.document);
    _ambientNotice = AmbientNotice(web.document);
    _door = Door(web.document)
      ..onChoice = _chooseDoorResponse
      ..onContinue = _continueDoorConversation
      ..onCite = _citeDuringVisit;
    final savedVisitors = VisitorDirectorState.tryFromJson(
      saved.snapshot?.meta['visitors'],
    );
    if (savedVisitors != null && _visitorDirector.restore(savedVisitors)) {
      _restoreVisitorDoor();
    }
    _ambientDirector.restoreDelivered(saved.snapshot?.meta['ambient']);
    final savedUnverifiables = saved.snapshot?.meta['unverifiables'];
    if (savedUnverifiables is List) {
      for (final day in savedUnverifiables) {
        if (day is int) _unverifiableDaysShown.add(day);
      }
    }
    _sleepPanel = SleepPanel(web.document)
      ..onSleep = (quality, location) {
        if (_session.snapshot.day == 21) {
          _resolveEnding();
          return;
        }
        final driftedBefore = _house.drift.landedCount;
        _session.sleep(quality, location, currentRoom: _currentRoom);
        final driftedAfter = _house.drift.landedCount;
        for (var i = driftedBefore; i < driftedAfter; i++) {
          final roomId = _house.drift.schedule[i].roomId;
          _emitter?.rebuildRoom(roomId);
          _pixeldartRuntime?.refreshRoomGeometry(_house, roomId);
        }
        _saveSession('saved after sleep');
      }
      ..onClose = () {
        _activePanel = null;
        _input.requestPointerLock(_canvas);
      };
    _helpPanel = HelpPanel(web.document)
      ..onClose = () {
        _activePanel = null;
        _input.requestPointerLock(_canvas);
      };
    _settingsPanel = SettingsPanel(web.document)
      ..onLevel = (key, value) {
        _storeAudioPreference(key, '$value');
        switch (key) {
          case 'master':
            _audio?.setMix(master: value);
          case 'voice':
            _audio?.setMix(voice: value);
          case 'effects':
            _audio?.setMix(effects: value);
          case 'ambience':
            _audio?.setMix(ambience: value);
          case 'music':
            _audio?.setMix(music: value);
        }
      }
      ..onMute = (muted) {
        _storeAudioPreference('muted', '$muted');
        _audio?.setMix(muted: muted);
      }
      ..onMono = (mono) {
        _storeAudioPreference('mono', '$mono');
        _audio?.setMono(mono);
      }
      ..onDisplay = (key, value) {
        _storeDisplayPreference(key, '$value');
        _applyDisplayPreference(key, value);
      }
      ..onHighContrast = (value) {
        _storeDisplayPreference('high-contrast', '$value');
        _applyDisplayToggle('high-contrast', value);
      }
      ..onStrongHighlights = (value) {
        _storeDisplayPreference('strong-highlights', '$value');
        _applyDisplayToggle('strong-highlights', value);
      }
      ..onClose = () {
        _activePanel = null;
        _input.requestPointerLock(_canvas);
      };
    _endingPanel = EndingPanel(web.document)
      ..onClose = () {
        _activePanel = null;
      }
      ..onDismiss = () {
        _activePanel = null;
      };
    final savedEnding = EndingState.tryFromJson(saved.snapshot?.meta['ending']);
    if (savedEnding != null) _presentEnding(savedEnding);

    final renderer = _renderer;
    if (renderer != null) {
      _setBootPhase('world');
      _emitter = RoomEmitter(_house, renderer);
    }

    _shadersLive = web.window.location.search.contains('shaders=live');
    if (_shadersLive) {
      _renderer?.reloadShadersLive();
    }

    _resize();
    web.window.addEventListener('resize', ((web.Event _) => _resize()).toJS);
    web.window.addEventListener(
      'keydown',
      ((web.KeyboardEvent e) {
        if (!e.repeat) {
          _presentationBackend.handleInput(
            RendererInputAction(id: e.code, pressed: true, value: 1),
          );
        }
        if (e.code == 'KeyP' && !e.repeat) _paused = !_paused;
        if (e.code == 'KeyR' && !e.repeat && _shadersLive) {
          _renderer?.reloadShadersLive();
        }
        if (e.code == 'KeyJ' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _journal;
            _journal.open();
          } else if (_activePanel == _journal) {
            _journal.close();
          }
        }
        if (e.code == 'KeyL' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _sleepPanel;
            _sleepPanel.open();
          } else if (_activePanel == _sleepPanel) {
            _sleepPanel.close();
          }
        }
        if (e.code == 'KeyH' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _helpPanel;
            _helpPanel.open();
          } else if (_activePanel == _helpPanel) {
            _helpPanel.close();
          }
        }
        if (e.code == 'KeyO' && !e.repeat && !_door.visitorPresent) {
          if (_activePanel == null) {
            _activePanel = _settingsPanel;
            _settingsPanel.open();
          } else if (_activePanel == _settingsPanel) {
            _settingsPanel.close();
          }
        }
        if (e.code == 'KeyK' && !e.repeat) _saveSession('saved');
      }).toJS,
    );
    web.window.addEventListener(
      'keyup',
      ((web.KeyboardEvent e) {
        _presentationBackend.handleInput(
          RendererInputAction(id: e.code, value: 0),
        );
      }).toJS,
    );
    web.window.addEventListener('keydown', ((web.Event _) => _armAudio()).toJS);
    web.window.addEventListener('click', ((web.Event _) => _armAudio()).toJS);
    _canvas.addEventListener(
      'click',
      ((web.Event _) => _input.requestPointerLock(_canvas)).toJS,
    );

    _loadManifest();
    _setBootPhase('raf');
    web.window.requestAnimationFrame(_raf.toJS);
  } catch (error, stack) {
    _reportBootError(error, stack);
  }
}

void _installBootDiagnostics() {
  web.window.addEventListener(
    'error',
    ((web.Event event) {
      final message = event is web.ErrorEvent ? event.message : event.type;
      _reportBootError(message);
    }).toJS,
  );
  web.window.addEventListener(
    'unhandledrejection',
    ((web.Event event) {
      final reason = event is web.PromiseRejectionEvent ? event.reason : null;
      _reportBootError('unhandled rejection: ${reason ?? event.type}');
    }).toJS,
  );
}

void _setBootPhase(String phase) {
  if (_bootPhase == phase) return;
  _bootPhase = phase;
  _canvas.setAttribute('data-boot-phase', phase);
}

void _publishRendererDiagnostics() {
  final diagnostics = _presentationBackend.diagnostics;
  _canvas
    ..setAttribute(
      'data-renderer-request',
      Uri.base.queryParameters['renderer'] ?? 'legacy',
    )
    ..setAttribute('data-renderer-backend', diagnostics.backend)
    ..setAttribute('data-renderer-profile', diagnostics.profile)
    ..setAttribute('data-renderer-fallback', diagnostics.fallback.toString())
    ..setAttribute('data-renderer-diagnostics', diagnostics.encode());
  final profileFallback = _pixeldartRuntime?.profileFallbackReason;
  if (profileFallback != null) {
    _canvas.setAttribute('data-renderer-profile-fallback', profileFallback);
  }
  final legacyFrames = _legacyRuntime?.submittedFrames;
  if (legacyFrames != null) {
    _canvas.setAttribute('data-renderer-frame-submits', '$legacyFrames');
  }
}

void _saveSession(String status) {
  if (_rupture.isActive) {
    _showSaveStatus('save unavailable during rupture');
    return;
  }
  try {
    _saveStore.write(
      _session.toSaveSnapshot(
        meta: {
          'player': PlayerState(
            roomId: _currentRoom,
            eye: _simEye,
            yaw: _simYaw,
            pitch: _simPitch,
            activeStairId: _playerCapsule.activeStairId,
            activeStairProgress: _playerCapsule.activeStairProgress,
          ).toJson(),
          'visitors': _visitorDirector.snapshot.toJson(),
          'ambient': _ambientDirector.deliveredIds,
          'unverifiables': _unverifiableDaysShown.toList()..sort(),
          if (_ending != null) 'ending': _ending!.toJson(),
        },
      ),
    );
    _showSaveStatus(status);
  } catch (_) {
    _showSaveStatus('save failed');
  }
}

void _showSaveStatus(String message) {
  final status = web.document.getElementById('save-status');
  if (status == null) return;
  status.textContent = message;
  status.className = 'visible';
  Future<void>.delayed(const Duration(milliseconds: 2400), () {
    status.className = '';
  });
}

void _reportBootError(Object error, [StackTrace? stack]) {
  _setBootPhase('error');
  final message = '$error'.replaceAll('\n', ' ');
  _fpsDiv?.textContent = 'boot: $message';
  web.document.getElementById('credits')?.textContent = 'boot error: $message';
  final detail = stack == null ? '$error' : '$error\n$stack';
  _canvas.setAttribute('data-boot-error', detail);
  web.console.error(detail.toJS);
}

void _armAudio() {
  if (_audioArmed) return;
  _audioArmed = true;
  final audio = _audio;
  audio?.resume();
  audio?.startMusicLoop('music');
  _pendingSounds.add('arm');
}

void _loadManifest() async {
  await _loadAuthoredHouseManifest();
  JSObject? data;
  try {
    final resp = await web.window.fetch('res/manifest.json'.toJS).toDart;
    data = await resp.json().toDart as JSObject;
  } catch (_) {}
  _applyCredits(data);

  await Future.wait([_loadTextures(data), _initAudio(data)]);
}

Future<void> _loadAuthoredHouseManifest() async {
  const urls = ['res/house/house.json', 'assets/house/house.json'];
  Object? lastError;
  for (final url in urls) {
    try {
      final response = await web.window.fetch(url.toJS).toDart;
      final source = (await response.text().toDart).toString();
      final manifest = AuthoredHouseManifest.decode(source);
      manifest.validateAgainst(_house);
      _canvas.setAttribute('data-house-manifest', 'validated');
      _canvas.setAttribute('data-house-manifest-source', url);
      await _loadAuthoredHouseInventory();
      await _loadAuthoredHouseSoundscape();
      return;
    } catch (error) {
      lastError = error;
    }
  }
  _canvas.setAttribute('data-house-manifest', 'unavailable');
  web.console.warn('authored house manifest unavailable: $lastError'.toJS);
}

Future<void> _loadAuthoredHouseInventory() async {
  const urls = ['res/house/inventory.json', 'assets/house/inventory.json'];
  Object? lastError;
  for (final url in urls) {
    try {
      final response = await web.window.fetch(url.toJS).toDart;
      final source = (await response.text().toDart).toString();
      final inventory = HouseInventory.decode(source);
      inventory.validateAgainst(_house);
      _houseInventory = inventory;
      _pixeldartRuntime?.setInventory(inventory);
      _canvas.setAttribute('data-house-inventory', 'validated');
      _canvas.setAttribute('data-house-inventory-source', url);
      _canvas.setAttribute(
        'data-house-inventory-count',
        '${inventory.placements.length}',
      );
      return;
    } catch (error) {
      lastError = error;
    }
  }
  _canvas.setAttribute('data-house-inventory', 'unavailable');
  web.console.warn('authored house inventory unavailable: $lastError'.toJS);
}

Future<void> _loadAuthoredHouseSoundscape() async {
  final inventory = _houseInventory;
  if (inventory == null) return;
  const urls = ['res/house/soundscape.json', 'assets/house/soundscape.json'];
  Object? lastError;
  for (final url in urls) {
    try {
      final response = await web.window.fetch(url.toJS).toDart;
      final source = (await response.text().toDart).toString();
      final soundscape = HouseSoundscape.decode(source);
      soundscape.validateAgainst(_house, inventory);
      _houseSoundscape = soundscape;
      final variants = <String, List<String>>{};
      for (final emitter in soundscape.emitters) {
        for (final entry in emitter.cues.entries) {
          variants['${emitter.id}:${entry.key}'] = [entry.value];
        }
      }
      _audioPlanner = AudioPlanner(house: _house, cues: AudioCueSet(variants));
      _audio?.setAcousticPlanner(_audioPlanner);
      _canvas.setAttribute('data-audio-planner', 'validated');
      _canvas.setAttribute('data-house-soundscape', 'validated');
      _canvas.setAttribute('data-house-soundscape-source', url);
      _canvas.setAttribute(
        'data-house-sound-emitter-count',
        '${soundscape.emitters.length}',
      );
      return;
    } catch (error) {
      lastError = error;
    }
  }
  _audioPlanner = null;
  _canvas.setAttribute('data-audio-planner', 'unavailable');
  _canvas.setAttribute('data-house-soundscape', 'unavailable');
  web.console.warn('authored house soundscape unavailable: $lastError'.toJS);
}

void _collectUrls(
  JSObject? group,
  Map<String, String> into, {
  String prefix = '',
}) {
  if (group == null) return;
  for (final k in _keysOf(group).toDart) {
    final key = k.toDart;
    final v = group[key];
    if (v.isA<JSString>()) {
      into['$prefix$key'] = 'res/${(v as JSString).toDart}';
    }
  }
}

Future<void> _initAudio(JSObject? data) async {
  final urls = <String, String>{};
  _collectUrls(data?['sfx'] as JSObject?, urls);

  _collectUrls(data?['ir'] as JSObject?, urls, prefix: 'ir-');
  final loop = (data?['music'] as JSObject?)?['loop'];
  if (loop.isA<JSString>()) urls['music'] = 'res/${(loop as JSString).toDart}';
  final audio = await Audio.load(urls, house: _house);
  _audio = audio;
  audio.setAcousticPlanner(_audioPlanner);
  _restoreAudioPreferences(audio);
  _restoreDisplayPreferences();
  if (_audioArmed) {
    audio.resume();
    audio.startMusicLoop('music');
  }
}

void _storeDisplayPreference(String key, String value) {
  try {
    web.window.localStorage.setItem('$_displayPreferencePrefix$key', value);
  } catch (_) {}
}

String? _readDisplayPreference(String key) {
  try {
    return web.window.localStorage.getItem('$_displayPreferencePrefix$key');
  } catch (_) {
    return null;
  }
}

void _applyDisplayPreference(String key, double value) {
  if (key != 'brightness') return;
  final root = web.document.documentElement;
  if (root is web.HTMLElement) {
    root.style.setProperty('filter', 'brightness(${value.clamp(0.6, 1.4)})');
  }
}

void _applyDisplayToggle(String key, bool value) {
  final className = key == 'high-contrast'
      ? 'high-contrast'
      : 'strong-highlights';
  web.document.documentElement?.classList.toggle(className, value);
}

void _restoreDisplayPreferences() {
  final brightness = double.tryParse(
    _readDisplayPreference('brightness') ?? '',
  );
  final highContrast = _readDisplayPreference('high-contrast') == 'true';
  final strongHighlights =
      _readDisplayPreference('strong-highlights') == 'true';
  if (brightness != null) {
    _settingsPanel.setLevel('brightness', brightness);
    _applyDisplayPreference('brightness', brightness);
  }
  _settingsPanel
    ..setHighContrast(highContrast)
    ..setStrongHighlights(strongHighlights);
  _applyDisplayToggle('high-contrast', highContrast);
  _applyDisplayToggle('strong-highlights', strongHighlights);
}

void _storeAudioPreference(String key, String value) {
  try {
    web.window.localStorage.setItem('$_audioPreferencePrefix$key', value);
  } catch (_) {
    // Audio preferences are optional and must not block boot or save flow.
  }
}

String? _readAudioPreference(String key) {
  try {
    return web.window.localStorage.getItem('$_audioPreferencePrefix$key');
  } catch (_) {
    return null;
  }
}

void _restoreAudioPreferences(Audio audio) {
  final values = <String, double>{};
  for (final key in const ['master', 'voice', 'effects', 'ambience', 'music']) {
    final value = double.tryParse(_readAudioPreference(key) ?? '');
    if (value != null) values[key] = value.clamp(0.0, 1.0).toDouble();
  }
  final muted = _readAudioPreference('muted') == 'true';
  final mono = _readAudioPreference('mono') == 'true';
  audio.setMix(
    master: values['master'],
    voice: values['voice'],
    effects: values['effects'],
    ambience: values['ambience'],
    music: values['music'],
    muted: muted,
  );
  audio.setMono(mono);
  for (final entry in values.entries) {
    _settingsPanel.setLevel(entry.key, entry.value);
  }
  _settingsPanel
    ..setMute(muted)
    ..setMono(mono);
}

Future<void> _loadTextures(JSObject? data) async {
  final urls = <String, String>{};
  _collectUrls(data?['tex'] as JSObject?, urls);
  await Future.wait([
    _renderer?.loadTextures(urls) ?? Future<void>.value(),
    _pixeldartRuntime?.loadTextures(urls) ?? Future<void>.value(),
  ]);
}

void _applyCredits(JSObject? data) {
  final credits = data?['credits'];
  if (credits.isA<JSString>()) {
    web.document.getElementById('credits')?.textContent =
        (credits as JSString).toDart;
  }
}

void _resize() {
  final w = web.window.innerWidth;
  final h = web.window.innerHeight;
  _canvas.width = w > 0 ? w : 800;
  _canvas.height = h > 0 ? h : 600;
  _renderer?.resize(_canvas.width, _canvas.height);
  _presentationBackend.resize(_canvas.width, _canvas.height);
  final surface = _pixeldartRuntime?.surfaceLabel;
  if (surface != null) _canvas.setAttribute('data-renderer-surface', surface);
}

void _raf(num ts) {
  try {
    final now = ts.toDouble();
    if (!_haveLastTime) {
      _lastTime = now;
      _haveLastTime = true;
    }
    var frameTime = (now - _lastTime) / 1000.0;
    _lastTime = now;
    if (frameTime < 0) frameTime = 0;
    if (frameTime > _maxFrameTime) frameTime = _maxFrameTime;

    _updateFps(frameTime);

    if (!_paused) {
      _accumulator += frameTime;
      var steps = 0;
      while (_accumulator >= _fixedDt && steps < _maxSteps) {
        _prevEye = _simEye;
        _session.advance(_fixedDt);
        for (final event in _houseClock.advance(
          day: _session.snapshot.day,
          hour: _session.snapshot.hour,
        )) {
          _pendingSounds.add('clock:${event.event}');
        }
        for (final event in _houseServiceSounds.advance(
          day: _session.snapshot.day,
          hour: _session.snapshot.hour,
        )) {
          _pendingSounds.add('service:${event.emitterId}:${event.event}');
        }
        _updateVisitorSchedule();
        _syncDifficultySeam();
        _updateAmbientEvents();
        _updateUnverifiableNotice();
        _updateMantles();
        _update(_fixedDt);
        _examineState.update(_fixedDt);
        final ruptureWasActive = _rupture.isActive;
        _rupture.advance(_fixedDt, _house);
        if (ruptureWasActive && _rupture.completed) {
          _resolveEnding(ruptureCompleted: true);
        }
        _accumulator -= _fixedDt;
        steps++;
      }
      final alpha = (_accumulator / _fixedDt).clamp(0.0, 1.0);
      _viewEye = Vec3.lerp(_prevEye, _simEye, alpha);

      final audio = _audio;
      if (audio != null) {
        audio
          ..setListener(
            _viewEye,
            Vec3(math.sin(_simYaw), 0, math.cos(_simYaw)),
            Vec3(0, 1, 0),
          )
          ..setListenerRoom(_currentRoom);
        for (final s in _pendingSounds) {
          _dispatchSound(audio, s);
        }
        _pendingSounds.clear();
        _canvas.setAttribute(
          'data-audio-spatial-active',
          '${audio.activeSpatialSources}',
        );
        _canvas.setAttribute(
          'data-audio-music-started',
          audio.musicStarted ? 'true' : 'false',
        );
        _canvas.setAttribute('data-audio-room-ir', audio.roomIr);
      }
    }

    final renderer = _renderer;
    if (renderer != null) {
      _camera.lookFrom(_viewEye, _simYaw, _simPitch);
      renderer.depthOfFieldStrength = _activePanel == _journal
          ? depthOfFieldStrength
          : 0;
      _legacyFrameTime = frameTime;
      _presentationBackend.submit(
        RendererFrame(snapshot: _session.presentationSnapshot),
      );
    } else if (_backendSelection.kind == RendererBackendKind.next) {
      _camera.lookFrom(_viewEye, _simYaw, _simPitch);
      _pixeldartRuntime?.setCamera(_camera);
      _pixeldartRuntime?.setVisibleRooms(_house, _currentRoom);
      _pixeldartRuntime?.setLighting(
        _house,
        _currentRoom,
        _viewEye,
        _time.sunAngle,
        _time.daylight,
      );
      if (_lastRendererRuptureStep != _rupture.step) {
        _lastRendererRuptureStep = _rupture.step;
        _rendererHistoryEpoch++;
      }
      _pixeldartRuntime?.setFrameClock(
        timeSeconds: now / 1000.0,
        historyEpoch: _rendererHistoryEpoch,
        noiseSeed: math.max(0, _session.runSeed),
      );
      _pixeldartRuntime?.setPostProcess(
        _rupture,
        reducedMotion: _reducedMotion,
      );
      _presentationBackend.submit(
        RendererFrame(snapshot: _session.presentationSnapshot),
      );
      final runtime = _pixeldartRuntime;
      if (runtime != null) {
        final stats = runtime.frameStatsLabel;
        if (stats != null) {
          _canvas.setAttribute('data-renderer-frame-stats', stats);
          _canvas.setAttribute(
            'data-renderer-budget',
            runtime.frameBudgetWithinLimits ? 'ok' : 'exceeded',
          );
        }
      }
    }

    _setBootPhase('running');
    _input.endFrame();
    web.window.requestAnimationFrame(_raf.toJS);
  } catch (error, stack) {
    _reportBootError(error, stack);
  }
}

void _dispatchSound(Audio audio, String name) {
  switch (name) {
    case 'arm':
      audio.play('confirm');
      break;
    case 'ambient-winnow':
      audio.play('winnow', gain: 0.28);
      break;
    case 'ambient-gate':
      audio.play('gate', gain: 0.22);
      break;
    case 'clock:tick':
      _playHouseCue(audio, 'hall-clock', 'tick');
      break;
    case 'clock:chime':
      _playHouseCue(audio, 'hall-clock', 'chime');
      break;
    default:
      if (name.startsWith('service:')) {
        final parts = name.split(':');
        if (parts.length == 3) _playHouseCue(audio, parts[1], parts[2]);
      }
  }
}

void _playHouseCue(Audio audio, String emitterId, String event) {
  final soundscape = _houseSoundscape;
  final inventory = _houseInventory;
  if (soundscape == null || inventory == null) return;
  final emitter = soundscape.emitterFor(emitterId);
  final position = soundscape.worldPosition(
    emitter,
    _house,
    inventory.modelScale,
  );
  final planner = _audioPlanner;
  if (planner == null) {
    audio.playAt(
      emitter.cue(event),
      position,
      sourceRoom: emitter.roomId,
      gain: emitter.gain,
    );
    return;
  }
  final plan = planner.plan(
    AudioEvent(
      id: '$emitterId:$event:$_audioEventSequence',
      sequence: _audioEventSequence++,
      cueFamily: '$emitterId:$event',
      sourceRoom: emitter.roomId,
      position: position,
      seed: _audioSeed(emitterId, event),
      category: AudioCategory.ambience,
    ),
    AcousticListener(roomId: _currentRoom, position: _viewEye),
  );
  audio.playPlanned(plan, gain: emitter.gain);
}

int _audioSeed(String emitterId, String event) {
  var seed = _session.runSeed;
  for (final unit in '$emitterId:$event'.codeUnits) {
    seed = hashCombine(seed, unit);
  }
  return seed;
}

void _updateFps(double frameTime) {
  final div = _fpsDiv;
  if (div == null) return;
  final fps = frameTime > 0 ? 1.0 / frameTime : 0.0;
  div.textContent = '${fps.round()} fps';
}

void _update(double dt) {
  if (_runEnded || _activePanel != null || _door.visitorPresent) {
    _motion.stop();
    return;
  }

  final moveDir = _input.moveVector;
  final mouseDx = _input.mouseDx;
  final mouseDy = _input.mouseDy;

  _simYaw += mouseDx * mouseSensitivity;
  _simPitch -= mouseDy * mouseSensitivity;
  _simPitch = _simPitch.clamp(-Camera.pitchLimit, Camera.pitchLimit);

  final desiredVelocity =
      Vec3(
        moveDir.x * math.cos(_simYaw) + moveDir.z * math.sin(_simYaw),
        0,
        moveDir.z * math.cos(_simYaw) - moveDir.x * math.sin(_simYaw),
      ).normalized *
      playerSpeed;
  final moveWorld = _motion.advance(
    desiredVelocity,
    dt,
    acceleration: playerAcceleration,
    drag: playerDrag,
  );

  final movement = _playerCapsule.move(
    _house,
    _currentRoom,
    _simEye,
    moveWorld * dt,
  );
  _simEye = movement.eye;
  if (_rupture.step != RuptureStep.portalFail &&
      _rupture.step != RuptureStep.lightsOut) {
    _currentRoom = movement.roomId;
  }

  _camera.lookFrom(_simEye, _simYaw, _simPitch);

  // UI prompt / watched-object focus (deterministic resolver)
  final focus = resolveFocus(
    camera: _camera,
    house: _house,
    currentRoom: _currentRoom,
  );
  _prompt.show(focus.prompt);

  // Interaction target selection is gated by the deterministic focus resolver.
  // This keeps interaction effects aligned with the same watched-object contract
  // that drives the UI prompt.
  Mantle? mantle;
  Portal? portal;
  Window? window;

  switch (focus.kind) {
    case FocusKind.mantle:
      mantle = raycastMantle(_camera, _house, _currentRoom);
      break;
    case FocusKind.portal:
      portal = raycastPortal(_camera, _house, _currentRoom);
      break;
    case FocusKind.window:
      window = raycastWindow(_camera, _house, _currentRoom);
      break;
    case FocusKind.none:
      break;
  }

  _broadcast.update(
    textLibrary.getBroadcastPart(_session.snapshot.day, 'status'),
    _currentRoom == 'living-room',
  );

  if (_input.interactPressed) {
    if (_canBeginRupture(portal)) {
      _rupture.startRupture(_house);
      _pendingSounds.add('collapse');
      _showSaveStatus('the front door opens on itself');
    } else if (mantle != null && !mantle.broken) {
      if (mantle.lit) {
        mantle.lit = false;
      } else if (_session.spendHoursAndGas(1, 1)) {
        mantle.lit = true;
        _examineState.startExamine(mantle);
      }
    } else if (portal != null && !portal.sticks && !portal.locked) {
      portal.open = !portal.open;
      _audio?.onDoorStateChanged();
    } else if (window != null) {
      if (window.shutterOpen) {
        if (_session.spendHours(1)) {
          window.shutterOpen = false;
        }
      } else {
        window.shutterOpen = true;
      }
    }
  }

  if (_examineState.active) {
    final m = _examineState.current;
    if (m != null && raycastMantle(_camera, _house, _currentRoom) != m) {
      _examineState.breakExamine();
    }
  }
}

void _syncDifficultySeam() {
  _visitorDirector.exposureElevated = _session.isolationElevatesExposure;
  final facts = _visitorDirector.drainFacts();
  if (facts.isNotEmpty) _session.recordVisitorFacts(facts);
}

void _updateVisitorSchedule() {
  if (_door.visitorPresent ||
      _activePanel != null ||
      _visitorDirector.active != null) {
    return;
  }
  final snapshot = _session.snapshot;
  for (final arrival in _visitorDirector.arrivalsForDay(snapshot.day)) {
    if (_visitorDirector.isResolved(arrival) || snapshot.hour < arrival.hour) {
      continue;
    }
    final started = _visitorDirector.begin(arrival);
    if (started is! VisitStarted) return;
    final line = started.state.currentLine;
    if (line == null) return;
    web.document.callMethod<JSAny?>('exitPointerLock'.toJS);
    _motion.stop();
    _door.showArrival(arrival.visitor, line);
    return;
  }
}

void _restoreVisitorDoor() {
  final state = _visitorDirector.active;
  final line = state?.currentLine;
  if (state == null || line == null) return;
  _door.showArrival(state.arrival.visitor, line);
  if (state.phase != VisitPhase.waiting) {
    _door.showConversation(line);
    _showDoorCitationOptions();
  }
  _showSaveStatus('restored visitor');
}

void _updateAmbientEvents() {
  final snapshot = _session.snapshot;
  final due = _ambientDirector.due(snapshot.day, snapshot.hour);
  if (due.isEmpty) return;
  final event = due.first;
  _ambientDirector.markDelivered(event);
  final source = event.channel == 'letterbox'
      ? 'through the letterbox'
      : 'from the street';
  _ambientNotice.show(source, event.text);
  final sound = ambientSoundForChannel(event.channel);
  if (sound != null) _pendingSounds.add('ambient-$sound');
}

void _updateUnverifiableNotice() {
  final snapshot = _session.snapshot;
  if (snapshot.hour < unverifiableNoticeHour) return;
  if (!_unverifiableDaysShown.add(snapshot.day)) return;
  final line = pickUnverifiable(
    textLibrary.getUnverifiables(snapshot.day),
    _session.runSeed,
    snapshot.day,
  );
  if (line != null) _ambientNotice.show('noticed', line);
}

bool _canBeginRupture(Portal? portal) => RuptureGate.canBegin(
  day: _session.snapshot.day,
  atFrontDoor: portal?.id == 'front-door',
  finalArrivalResolved: _visitorDirector
      .arrivalsForDay(21)
      .every(_visitorDirector.isResolved),
);

void _resolveEnding({bool ruptureCompleted = false}) {
  if (_ending != null) return;
  final snapshot = _session.snapshot;
  final ending = EndingResolver.resolve(
    EndingInputs(
      day: snapshot.day,
      accuracy: _session.recordAccuracy,
      lockedEntries: _session.journal.entries
          .where((entry) => entry.locked)
          .length,
      complianceFloorTripped: _session.complianceFloorTripped,
      ruptureCompleted: ruptureCompleted,
    ),
  );
  if (ending == null) return;
  _presentEnding(ending);
  _saveSession('ending recorded');
}

void _presentEnding(EndingState ending) {
  _ending = ending;
  _runEnded = true;
  _motion.stop();
  _activePanel = _endingPanel;
  _endingPanel.showEnding(ending, textLibrary.getEnding(ending.kind.name));
}

void _chooseDoorResponse(String rawChoice) {
  final choice = switch (rawChoice) {
    'open' => DoorChoice.open,
    'chain' => DoorChoice.chain,
    'through-door' => DoorChoice.throughDoor,
    'letterbox' => DoorChoice.letterbox,
    _ => DoorChoice.ignore,
  };
  final response = _visitorDirector.choose(choice);
  if (choice == DoorChoice.open) {
    final portal = _house.portalById('front-door');
    if (portal != null) {
      portal.open = true;
      _audio?.onDoorStateChanged();
    }
  }
  if (response is! VisitChoiceResult || choice == DoorChoice.ignore) {
    _endVisitorDoor();
    return;
  }
  final line = response.state.currentLine;
  if (line == null) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  _door.showConversation(line);
  _showDoorCitationOptions();
}

void _continueDoorConversation() {
  final progress = _visitorDirector.advanceLine();
  if (progress is! VisitProgress || progress.resolved) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  final line = progress.state.currentLine;
  if (line == null) {
    _closeFrontDoorIfOpen();
    _endVisitorDoor();
    return;
  }
  _door.showConversation(line);
  _showDoorCitationOptions();
}

void _endVisitorDoor() {
  _door.hide();
  _input.requestPointerLock(_canvas);
}

void _showDoorCitationOptions() {
  _door.showCitableEntries(web.document, [
    for (final entry in _interactionEngine.getSelectableEntries())
      (entry.ordinal, entry.current.toString()),
  ]);
}

void _citeDuringVisit(int ordinal) {
  final result = _visitorDirector.cite(ordinal, true, _interactionEngine);
  if (result == null) return;
  final event = _interactionEngine.createHumiliationEvent(
    result,
    InteractionType.visitor,
  );
  _door.showCiteResult(event?.contradictionText ?? 'Confirmed.');
}

void _closeFrontDoorIfOpen() {
  final portal = _house.portalById('front-door');
  if (portal != null && portal.open) {
    portal.open = false;
    _audio?.onDoorStateChanged();
  }
}

void _updateMantles() {
  for (final room in _house.rooms) {
    for (int i = 0; i < room.mantles.length; i++) {
      final mantle = room.mantles[i];
      if (mantle.broken) {
        mantle.lit = false;
        continue;
      }
      if (_rupture.isMantleExtinguished(room.id, i)) {
        mantle.lit = false;
        continue;
      }
    }
  }
}

bool roomIsLit(String roomId) {
  final room = _house.byId(roomId);
  if (room == null || _time.sunAngle == 0.0) return false;

  for (final w in room.windows) {
    if (!w.shutterOpen) continue;

    bool isLit = false;
    if (w.facing == Facing.north && _time.currentHour < 12) {
      isLit = true;
    } else if (w.facing == Facing.south && _time.currentHour > 12) {
      isLit = true;
    } else if (w.facing == Facing.east && _time.currentHour < 9) {
      isLit = true;
    } else if (w.facing == Facing.west && _time.currentHour > 15) {
      isLit = true;
    }

    if (isLit) return true;
  }
  return false;
}

void _updateLighting(Renderer renderer) {
  renderer.lightDir = sunDirection(_time.sunAngle);
  renderer.lightColor = sunColor(_time.sunAngle);
  renderer.ambient = math.max(ambientFloor, ambientPeak * _time.daylight);
}

void _render(Renderer renderer, double dt, RuptureState rupture) {
  _updateLighting(renderer);
  _camera.breathe(dt);
  renderer.begin(_camera, _bgHue);

  final emitter = _emitter;
  if (emitter != null) {
    emitter.draw(_currentRoom, _viewEye);
  }

  renderer.flush(dt, rupture);
  _hud.update(const Object(), dt);
}
