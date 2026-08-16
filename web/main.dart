import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/audio.dart';
import 'package:quarantine/engine/audio_planner.dart';
import 'package:quarantine/engine/camera.dart';
import 'package:quarantine/engine/fps_motion.dart';
import 'package:quarantine/engine/locomotion_controller.dart';
import 'package:quarantine/engine/input.dart';
import 'package:quarantine/engine/light_ranking_controller.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/mesh.dart';
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
import 'package:quarantine/presentation/pixeldart_renderer_profile_policy.dart';
import 'package:quarantine/presentation/pixeldart_capability_matrix.dart';
import 'package:quarantine/presentation/pixeldart_resource_governor.dart';
import 'package:quarantine/presentation/pixeldart_shader_pipeline_exporter.dart';
import 'package:quarantine/presentation/renderer_backend.dart';
import 'package:quarantine/presentation/day_night_atmosphere.dart';
import 'package:quarantine/presentation/realistic_thunderstorm_engine.dart';
import 'package:quarantine/presentation/shader_tuning_bridge.dart';
import 'package:quarantine/presentation/shader_tuning_state.dart';
import 'package:quarantine/presentation/renderer_runtime.dart';
import 'package:quarantine/presentation/renderer_diagnostics.dart';
import 'package:quarantine/presentation/renderer_gui_surface.dart';
import 'package:quarantine/ui/gui_flow_coordinator.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/focus.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/house/inventory_interaction.dart';
import 'package:quarantine/house/soundscape.dart';
import 'package:quarantine/house/exterior_mesh_adapter.dart';
import 'package:quarantine/house/exterior_pvs.dart';
import 'package:quarantine/house/exterior_scene.dart';
import 'package:quarantine/house/interaction.dart';
import 'package:quarantine/house/lighting.dart' as house_lighting;
import 'package:quarantine/house/room.dart';
import 'package:quarantine/house/scale_profile.dart';
import 'package:quarantine/house/surface_materials.dart';
import 'package:quarantine/journal/entry.dart' show Vocabulary;
import 'package:quarantine/sim/interaction.dart';
import 'package:quarantine/sim/rupture.dart';
import 'package:quarantine/sim/time.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/story/schema.dart' show vocabularyFields;
import 'package:quarantine/story/text.dart';
import 'package:quarantine/story/game_event_orchestrator.dart';
import 'package:quarantine/story/unverifiable_notice.dart';
import 'package:quarantine/story/physical_aftermath_manager.dart';
import 'package:quarantine/ui/ambient_notice.dart';
import 'package:quarantine/ui/accessibility_settings.dart';
import 'package:quarantine/ui/accessibility_presentation.dart';
import 'package:quarantine/ui/audio_settings.dart';
import 'package:quarantine/ui/gameplay_settings.dart';
import 'package:quarantine/ui/gameplay_presentation_policy.dart';
import 'package:quarantine/ui/broadcast.dart';
import 'package:quarantine/ui/door.dart';
import 'package:quarantine/ui/ending_panel.dart';
import 'package:quarantine/ui/graphics_settings.dart';
import 'package:quarantine/ui/graphics_settings_panel.dart';
import 'package:quarantine/ui/controls_settings.dart';
import 'package:quarantine/ui/controls_settings_panel.dart';
import 'package:quarantine/ui/credits_panel.dart';
import 'package:quarantine/ui/help_panel.dart';
import 'package:quarantine/ui/journal_panel.dart';
import 'package:quarantine/ui/panel.dart';
import 'package:quarantine/ui/pause_ledger.dart';
import 'package:quarantine/ui/pause_root_panel.dart';
import 'package:quarantine/ui/pause_settings_contract.dart';
import 'package:quarantine/ui/prompt.dart';
import 'package:quarantine/ui/sleep_panel.dart';
import 'package:quarantine/ui/settings_panel.dart';
import 'package:quarantine/ui/settings_index_panel.dart';
import 'package:quarantine/ui/settings_registry.dart';
import 'package:quarantine/ui/settings_store.dart';
import 'package:quarantine/ui/gameplay_dialogue_coordinator.dart';
import 'package:quarantine/visitors/ambient.dart';
import 'package:quarantine/visitors/director.dart';
import 'package:quarantine/visitors/stand_ins.dart';
import 'package:quarantine/visitors/state.dart';
import 'package:pixeldart/pixeldart_advanced.dart' as px;
import 'package:pixeldart/rendering/webgl/webgl2_renderer_factory.dart' as pxweb;
import 'package:web/web.dart' as web;

@JS('Object.keys')
external JSArray<JSString> _keysOf(JSObject o);

const double _fixedDt = 1 / 120;
const int _maxSteps = 10;
const double _maxFrameTime = 0.25;

const double _bgHue = 0.0;

final BackendSelector _backendSelector = BackendSelector();
late BackendSelection _backendSelection;
late RendererBackend _presentationBackend;
_PixeldartWebRuntime? _pixeldartRuntime;
late WeatherSchedule _weatherSchedule;
Future<void>? _graphicsProfileTransaction;

final class _RoomSurfaceSpec {
  final String surface;
  final Float32List vertices;

  const _RoomSurfaceSpec(this.surface, this.vertices);
}

final class _PixeldartWebRuntime implements RendererRuntime {
  static const _capabilityBridge = PixeldartCapabilityBridge();
  static const _profilePolicy = PixeldartRendererProfilePolicy();
  final pxweb.WebGl2DeviceLease deviceLease;
  int width;
  int height;
  late pxweb.WebGl2DeviceLease _device;
  late px.SceneRendererImpl _renderer;
  late px.RenderWorld _world;
  late px.RenderCapabilities _queriedCapabilities;
  late px.QualityProfile _profile;
  String? _profileFallbackReason;
  final List<px.MeshHandle> _sceneMeshes = [];
  final Map<String, List<px.MeshHandle>> _roomMeshesById = {};
  final List<px.InstanceId> _sceneItems = [];
  final Map<String, px.InstanceId> _sceneItemsByRoom = {};
  final Map<String, px.RetainedItemDescriptor> _sceneDescriptors = {};
  final Map<String, List<px.InstanceId>> _roomSurfaceItemsByRoom = {};
  final Map<String, List<px.RetainedItemDescriptor>>
  _roomSurfaceDescriptorsByRoom = {};
  final Map<String, px.InstanceId> _inventoryItemsById = {};
  final Map<String, px.RetainedItemDescriptor> _inventoryDescriptors = {};
  final List<px.MeshHandle> _inventoryMeshes = [];
  final Map<String, px.InstanceId> _exteriorShellItems = {};
  final Map<String, px.RetainedItemDescriptor> _exteriorShellDescriptors = {};
  final Map<String, String> _exteriorShellCells = {};
  final Map<int, px.MaterialHandle> _exteriorMaterials = {};
  final Map<String, _PixeldartPortalLeaf> _portalLeaves = {};
  late LightRankingController _lightRanking;
  int _lightSelectionRevision = 0;
  final List<_PixeldartDecoration> _decorations = [];
  List<InventoryPlacement> _inventoryPlacements = const [];
  final Map<String, px.TextureHandle> _textures = {};
  final Map<String, String> _exteriorTextureKeys = {};
  final Map<String, px.MaterialHandle> _roomMaterials = {};
  final Map<String, Map<String, px.MaterialHandle>> _roomSurfaceMaterials = {};
  final Map<String, px.MaterialHandle> _inventoryMaterials = {};
  final Map<String, px.MaterialDefinition> _materialDefinitions = {};
  px.MaterialHandle? _sceneMaterial;
  px.CameraView? _cameraView;
  px.FrameEnvironment _environment = const px.FrameEnvironment();
  px.PostProcessState _post = px.PostProcessState.off;
  px.FrameStats? _lastFrameStats;
  double _lastFrameMs = 0;
  double _timeSeconds = 0;
  int _historyEpoch = 0;
  int _noiseSeed = 0;
  int _frameIndex = 0;
  int _textureResidencyRevision = 0;
  bool _initialized = false;
  Future<void>? _surfaceReconfigure;
  int _configuredWidth = 0;
  int _configuredHeight = 0;
  int? _failedSurfaceWidth;
  int? _failedSurfaceHeight;
  late PixeldartCapabilityMatrix capabilityMatrix;
  late PixeldartResourceGovernor resourceGovernor;
  late PixeldartShaderPipelineExporter shaderExporter;

  _PixeldartWebRuntime(this.deviceLease, this.width, this.height);

  @override
  RendererDiagnostics get diagnostics => RendererDiagnostics.fromEnvironment(
    backend: 'pixeldart',
    profile: _initialized ? _profile.kind.name : 'safe',
    capabilities: _initialized ? capabilityLabels : const ['uninitialized'],
    fallback: false,
  );

  @override
  bool get contextLost =>
      _initialized && _device.device.status == pxweb.GpuDeviceStatus.lost;

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
        'shadowDraws=${stats.pass('shadowCaster').drawCalls};'
        'shadowTriangles=${stats.pass('shadowCaster').trianglesSubmitted};'
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

  Map<String, Object> get effectiveConfiguration =>
      _renderer.configuration.toMap();

  @override
  void initialize() {
    _device = deviceLease;
    _queriedCapabilities = _device.device.queryCapabilities();
    _profile = _capabilityBridge.runtimeProfile(_queriedCapabilities);
    final surface = px.SurfaceMetrics(
      cssWidth: width,
      cssHeight: height,
      pixelWidth: width,
      pixelHeight: height,
    );
    _renderer = px.SceneRendererImpl(_device.device);
    try {
      _renderer.initialize(
        _configurationForProfile(_profile, width, height),
        surface,
      );
    } catch (error) {
      if (_profile == px.QualityProfile.safe) rethrow;
      _profileFallbackReason =
          '${_profile.kind.name} profile failed; using safe graph: $error';
      _profile = px.QualityProfile.safe;
      _renderer = px.SceneRendererImpl(_device.device)
        ..initialize(px.RendererConfiguration.safe, surface);
    }
    _world = _renderer.createWorld();
    _configuredWidth = width;
    _configuredHeight = height;
    _configureLightRanking();
    capabilityMatrix = PixeldartCapabilityMatrix.negotiate(
      isWebGL2Available: true,
      float16Supported: true,
      instancingSupported: true,
    );
    resourceGovernor = PixeldartResourceGovernor(matrix: capabilityMatrix);
    shaderExporter = PixeldartShaderPipelineExporter(matrix: capabilityMatrix);
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
    width = nextWidth;
    height = nextHeight;
    if (_failedSurfaceWidth != nextWidth ||
        _failedSurfaceHeight != nextHeight) {
      _failedSurfaceWidth = null;
      _failedSurfaceHeight = null;
    }
    _renderer.resize(
      px.SurfaceMetrics(
        cssWidth: nextWidth,
        cssHeight: nextHeight,
        pixelWidth: nextWidth,
        pixelHeight: nextHeight,
      ),
    );
    _surfaceReconfigure ??= _drainSurfaceReconfigure();
  }

  Future<void> _drainSurfaceReconfigure() async {
    try {
      while (_configuredWidth != width || _configuredHeight != height) {
        final targetWidth = width;
        final targetHeight = height;
        await _renderer.configure(
          _configurationForProfile(_profile, targetWidth, targetHeight),
        );
        _configuredWidth = targetWidth;
        _configuredHeight = targetHeight;
        _failedSurfaceWidth = null;
        _failedSurfaceHeight = null;
        _publishRendererDiagnostics();
      }
    } catch (error) {
      // SceneRendererImpl keeps the previous valid graph when configure fails.
      // Preserve that graph and expose the reason instead of leaving a future
      // resize with an unhandled asynchronous error.
      _profileFallbackReason =
          '${_profile.kind.name} surface reconfigure failed: $error';
      _failedSurfaceWidth = width;
      _failedSurfaceHeight = height;
    } finally {
      _surfaceReconfigure = null;
      final failedCurrentSurface =
          _failedSurfaceWidth == width && _failedSurfaceHeight == height;
      if (!failedCurrentSurface &&
          (_configuredWidth != width || _configuredHeight != height)) {
        _surfaceReconfigure = _drainSurfaceReconfigure();
      }
    }
  }

  px.RendererConfiguration _configurationForProfile(
    px.QualityProfile profile,
    int surfaceWidth,
    int surfaceHeight, {
    String renderScale = 'auto',
    String antialiasing = 'auto',
    String outputEncoding = 'srgb',
    String diagnosticLevel = 'full',
    String shadowQuality = 'profile',
  }) => _profilePolicy.configuration(
    profile: profile,
    surfaceWidth: surfaceWidth,
    surfaceHeight: surfaceHeight,
    renderScale: renderScale,
    antialiasing: antialiasing,
    outputEncoding: outputEncoding,
    diagnosticLevel: diagnosticLevel,
    shadowQuality: shadowQuality,
  );

  void _configureLightRanking() {
    _lightRanking = LightRankingController(
      maxPointLights: switch (_profile.kind) {
        px.QualityProfileKind.high => 7,
        px.QualityProfileKind.standard => 3,
        _ => 0,
      },
      maxSpotLights: switch (_profile.kind) {
        px.QualityProfileKind.high => 2,
        px.QualityProfileKind.standard => 1,
        _ => 0,
      },
    );
  }

  /// Applies a graphics profile as one renderer-owned configuration
  /// transaction. Pixeldart keeps the previous valid graph if allocation or
  /// shader preparation fails, so settings never leave a half-configured world.
  Future<void> applyGraphicsProfile(GraphicsSettingsProfile settings) async {
    if (!_initialized) return;
    final requestedProfile = switch (settings.preset) {
      GraphicsPreset.high => px.QualityProfile.clean,
      GraphicsPreset.safe => px.QualityProfile.safe,
      GraphicsPreset.standard => px.QualityProfile.minimal,
      GraphicsPreset.custom => _profile,
    };
    final previousProfile = _profile;
    final configuration = _configurationForProfile(
      requestedProfile,
      width,
      height,
      renderScale: settings.renderScale,
      antialiasing: settings.antialiasing,
      outputEncoding: settings.outputEncoding,
      diagnosticLevel: settings.diagnosticLevel,
      shadowQuality: settings.shadowQuality,
    );
    try {
      await _renderer.configure(configuration);
      _profile = requestedProfile;
      _configureLightRanking();
      _configuredWidth = width;
      _configuredHeight = height;
      _profileFallbackReason = null;
      _publishRendererDiagnostics();
    } catch (error) {
      _profile = previousProfile;
      _profileFallbackReason =
          'graphics transaction rejected; previous graph retained: $error';
      _publishRendererDiagnostics();
      rethrow;
    }
  }

  /// Installs the retained room shells once. Simulation-owned room facts are
  /// read here, while the Pixeldart world owns only renderer handles.
  void attachHouse(House house) {
    if (!_initialized || _sceneItems.isNotEmpty) return;
    _houseForInventory = house;
    _textures['wall-plaster'] = _renderer.resources.registerTexture(
      width: 256,
      height: 256,
      hasMips: true,
      minFilter: pxweb.GpuTextureFilter.linearMipmapLinear,
      anisotropy: 8,
      debugLabel: 'texture:wall-plaster',
    );
    _textures['grime'] = _renderer.resources.registerTexture(
      width: 512,
      height: 512,
      hasMips: true,
      minFilter: pxweb.GpuTextureFilter.linearMipmapLinear,
      anisotropy: 8,
      debugLabel: 'texture:grime',
    );
    // Keep the authored texture keys resident even when an optional image is
    // absent. Materials can therefore retain their handles and use the
    // renderer's neutral fallback until the manifest image arrives.
    for (final key in const ['floor-linoleum', 'ceiling-stained']) {
      _textures[key] = _renderer.resources.registerTexture(
        width: 256,
        height: 256,
        hasMips: true,
      minFilter: pxweb.GpuTextureFilter.linearMipmapLinear,
        anisotropy: 8,
        debugLabel: 'texture:$key',
      );
    }
    _publishTextureResidency();
    _publishMaterialResidency();
    _sceneMaterial = _registerMaterial(
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
    for (final room in house.rooms) {
      final surfaces = <String, px.MaterialHandle>{};
      for (final entry in <String, String>{
        'wall': room.surfaceWall,
        'floor': room.surfaceFloor,
        'ceiling': room.surfaceCeiling,
      }.entries) {
        final authored = HouseSurfaceMaterials.forId(entry.value);
        final tint = _surfaceTint(authored.tint);
        final material = _registerMaterial(
          px.MaterialDefinition(
            key: 'quarantine-house-${room.id}-${entry.key}-${authored.id}',
            albedoTexture: _textures[authored.textureKey],
            tintR: tint.$1,
            tintG: tint.$2,
            tintB: tint.$3,
            roughness: authored.roughness,
            // Geometry owns authored metre-density UVs; retain a neutral
            // renderer scale so this binding cannot double-repeat the art.
            uvScaleU: 1.0,
            uvScaleV: 1.0,
          ),
        );
        surfaces[entry.key] = material;
      }
      _roomSurfaceMaterials[room.id] = surfaces;
      // Existing decorations and portal leaves intentionally use the wall
      // surface variant as their room presentation material.
      _roomMaterials[room.id] = surfaces['wall']!;
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
      _inventoryMaterials[kind] = _registerMaterial(
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
    _publishMaterialResidency();
    for (final room in house.rooms) {
      _installRoomSurfaces(house, room);
    }
    _publishHouseMaterialBindings(house);
    _canvas.setAttribute(
      'data-renderer-house-model-scale',
      houseModelScale.toStringAsFixed(2),
    );
    for (final room in house.rooms) {
      for (final window in room.windows) {
        if (sparseTestChambers) continue;
        _addDecoration(
          room.id,
          _windowMesh(room, window),
          () => !window.shutterOpen,
        );
      }
    }
    for (final portal in house.portals) {
      if (portal.doorKit == null || portal.stair) continue;
      final room = house.byId(portal.a);
      if (room == null) continue;
      final mesh = _doorLeafMesh(house, room, portal);
      final handle = _renderer.resources.registerMesh(
        mesh,
        debugLabel: 'door-leaf:${portal.id}',
      );
      _sceneMeshes.add(handle);
      final descriptor = px.RetainedItemDescriptor(
        mesh: handle,
        material: _materialForRoom(room.id),
        visibilityMask: 0,
      );
      final item = _world.addItem(descriptor);
      _portalLeaves[portal.id] = _PixeldartPortalLeaf(
        portalId: portal.id,
        roomId: room.id,
        item: item,
        mesh: handle,
        descriptor: descriptor,
      );
    }
    for (final portal in house.portals) {
      if (portal.stair || portal.doorKit != null) continue;
      final room = house.byId(portal.a);
      if (room == null) continue;
      _addDecoration(
        room.id,
        _portalMesh(room, portal),
        () => !portal.passable,
      );
    }
    final exteriorMesh = buildHouseExteriorMesh(house);
    for (final part in toPixeldartCellMeshParts(exteriorMesh)) {
      final textureKey = part.material == 4 ? 'grime' : 'wall-plaster';
      final material = _exteriorMaterials[part.material] ??= _registerMaterial(
        px.MaterialDefinition(
          key: 'quarantine-house-exterior-slot-${part.material}',
          albedoTexture: _textures[textureKey],
          tintR: _exteriorTint(part.material).$1,
          tintG: _exteriorTint(part.material).$2,
          tintB: _exteriorTint(part.material).$3,
          doubleSided: true,
        ),
      );
      final exteriorHandle = _renderer.resources.registerMesh(
        part.mesh,
        debugLabel: 'exterior:${part.cellId}:slot-${part.material}',
      );
      _sceneMeshes.add(exteriorHandle);
      final itemKey = '${part.cellId}:${part.material}';
      _exteriorTextureKeys[itemKey] = textureKey;
      final exteriorDescriptor = px.RetainedItemDescriptor(
        mesh: exteriorHandle,
        material: material,
        visibilityMask: -1,
        castsShadow: ExteriorPvs.castsShadowForCell(part.cellId),
      );
      _exteriorShellCells[itemKey] = part.cellId;
      _exteriorShellDescriptors[itemKey] = exteriorDescriptor;
      _exteriorShellItems[itemKey] = _world.addItem(exteriorDescriptor);
    }
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
      final assetKey = placement.assetId.toLowerCase();
      if (sparseTestChambers && assetKey.contains('stair')) {
        continue;
      }
      if (sparseTestChambers &&
          placement.visibilityLayer != 'story' &&
          placement.visibilityLayer != 'architecture') {
        continue;
      }
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
        // Keep the hero route's furniture in the single practical shadow
        // budget; micro props remain non-casters so the map stays stable.
        castsShadow: asset.kind != 'micro',
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
    for (final entry in _roomSurfaceItemsByRoom.entries) {
      final mask = visible.contains(entry.key) ? -1 : 0;
      final items = entry.value;
      final bases = _roomSurfaceDescriptorsByRoom[entry.key]!;
      final descriptors = <px.RetainedItemDescriptor>[];
      for (var i = 0; i < items.length; i++) {
        final descriptor = _withVisibility(bases[i], mask);
        _world.updateItem(items[i], descriptor);
        descriptors.add(descriptor);
      }
      _roomSurfaceDescriptorsByRoom[entry.key] = descriptors;
      // Keep the wall alias used by decorations and compatibility diagnostics.
      if (descriptors.isNotEmpty) {
        _sceneDescriptors[entry.key] = descriptors.first;
      }
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
    for (final portalId in _portalLeaves.keys.toList()) {
      final leaf = _portalLeaves[portalId]!;
      final descriptor = _withVisibility(
        leaf.descriptor,
        visible.contains(leaf.roomId) ? -1 : 0,
      );
      _world.updateItem(leaf.item, descriptor);
      _portalLeaves[leaf.portalId] = leaf.copyWith(descriptor: descriptor);
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
    final exteriorVisible = ExteriorPvs().cellsForRoom(currentRoomId);
    _canvas.setAttribute(
      'data-renderer-exterior-cells',
      (exteriorVisible.toList()..sort()).join(','),
    );
    final submittedExteriorKeys = ExteriorPvs()
        .filterItems(
          items: _exteriorShellCells.keys,
          requestedCells: exteriorVisible,
          cellOf: (partKey) => _exteriorShellCells[partKey]!,
        )
        .toSet();
    var submittedExteriorItems = 0;
    var submittedExteriorShadowCasters = 0;
    var totalExteriorShadowCasters = 0;
    for (final partKey in _exteriorShellDescriptors.keys.toList()) {
      final exteriorItem = _exteriorShellItems[partKey];
      if (exteriorItem == null) continue;
      final base = _exteriorShellDescriptors[partKey]!;
      if (base.castsShadow) totalExteriorShadowCasters++;
      final cellVisible = submittedExteriorKeys.contains(partKey);
      if (cellVisible) submittedExteriorItems++;
      if (cellVisible && base.castsShadow) submittedExteriorShadowCasters++;
      final descriptor = _withVisibility(base, cellVisible ? -1 : 0);
      _world.updateItem(exteriorItem, descriptor);
      _exteriorShellDescriptors[partKey] = descriptor;
    }
    _canvas.setAttribute(
      'data-renderer-exterior-items',
      '$submittedExteriorItems/${_exteriorShellDescriptors.length}',
    );
    _canvas.setAttribute(
      'data-renderer-shadow-casters',
      '$submittedExteriorShadowCasters/$totalExteriorShadowCasters',
    );
    final exteriorTextureBindings = submittedExteriorKeys.map((partKey) {
      final textureKey = _exteriorTextureKeys[partKey];
      final handle = textureKey == null ? null : _textures[textureKey];
      if (textureKey == null || handle == null) {
        throw StateError(
          'exterior item $partKey has no retained texture binding',
        );
      }
      return '$partKey=$textureKey:${handle.slot}.${handle.generation}';
    }).toList()..sort();
    _canvas.setAttribute(
      'data-renderer-exterior-texture-bindings',
      exteriorTextureBindings.join(','),
    );
  }

  /// Rebuilds one retained room after an authoritative overnight drift. The
  /// simulation owns the changed room dimensions; Pixeldart only replaces the
  /// renderer-owned mesh and keeps the stable scene item/material identity.
  /// Releasing the old mesh in the same operation prevents a sleep cycle from
  /// accumulating GPU resources.
  void refreshRoomGeometry(House house, String roomId) {
    if (!_initialized) return;
    final items = _roomSurfaceItemsByRoom[roomId];
    final descriptors = _roomSurfaceDescriptorsByRoom[roomId];
    final oldMeshes = _roomMeshesById[roomId];
    final room = house.byId(roomId);
    if (items == null ||
        descriptors == null ||
        oldMeshes == null ||
        room == null) {
      return;
    }
    final specs = _roomSurfaceSpecs(house, room);
    if (specs.length != items.length || specs.length != oldMeshes.length) {
      return;
    }
    final nextMeshes = <px.MeshHandle>[];
    final nextDescriptors = <px.RetainedItemDescriptor>[];
    for (var i = 0; i < specs.length; i++) {
      final spec = specs[i];
      final nextMesh = _renderer.resources.registerMesh(
        _meshFromVertices(spec.vertices),
        debugLabel:
            'room:$roomId:${spec.surface}-drift-${house.drift.landedCount}',
      );
      final base = descriptors[i];
      final nextDescriptor = px.RetainedItemDescriptor(
        mesh: nextMesh,
        material: base.material,
        transform: base.transform,
        visibilityMask: base.visibilityMask,
        drawMode: base.drawMode,
        blendMode: base.blendMode,
        castsShadow: base.castsShadow,
        receivesShadow: base.receivesShadow,
        sortTiebreaker: base.sortTiebreaker,
        instanceFamilyKey: base.instanceFamilyKey,
      );
      _world.updateItem(items[i], nextDescriptor);
      nextMeshes.add(nextMesh);
      nextDescriptors.add(nextDescriptor);
      final oldMesh = oldMeshes[i];
      _sceneMeshes
        ..remove(oldMesh)
        ..add(nextMesh);
      _renderer.resources.releaseMesh(oldMesh);
    }
    _roomMeshesById[roomId] = nextMeshes;
    _roomSurfaceDescriptorsByRoom[roomId] = nextDescriptors;
    if (nextDescriptors.isNotEmpty) {
      _sceneDescriptors[roomId] = nextDescriptors.first;
    }
    _canvas.setAttribute(
      'data-renderer-geometry-refreshes',
      '${_geometryRefreshes + 1}',
    );
    _geometryRefreshes++;
  }

  /// Rebuilds only a portal's stateful leaf. The room shell keeps its frame
  /// and hardware, so opening/closing cannot duplicate or leave a stale leaf.
  void refreshPortalGeometry(House house, String portalId) {
    if (!_initialized) return;
    final leaf = _portalLeaves[portalId];
    final portal = house.portalById(portalId);
    final room = portal == null ? null : house.byId(leaf?.roomId ?? '');
    if (leaf == null || portal == null || room == null) return;
    final nextMesh = _renderer.resources.registerMesh(
      _doorLeafMesh(house, room, portal),
      debugLabel: 'door-leaf:$portalId:state',
    );
    final nextDescriptor = px.RetainedItemDescriptor(
      mesh: nextMesh,
      material: leaf.descriptor.material,
      transform: leaf.descriptor.transform,
      visibilityMask: leaf.descriptor.visibilityMask,
      drawMode: leaf.descriptor.drawMode,
      blendMode: leaf.descriptor.blendMode,
      castsShadow: leaf.descriptor.castsShadow,
      receivesShadow: leaf.descriptor.receivesShadow,
      sortTiebreaker: leaf.descriptor.sortTiebreaker,
      instanceFamilyKey: leaf.descriptor.instanceFamilyKey,
    );
    _world.updateItem(leaf.item, nextDescriptor);
    _portalLeaves[portalId] = leaf.copyWith(
      mesh: nextMesh,
      descriptor: nextDescriptor,
    );
    _sceneMeshes
      ..remove(leaf.mesh)
      ..add(nextMesh);
    _renderer.resources.releaseMesh(leaf.mesh);
  }

  int _geometryRefreshes = 0;

  void setLighting(
    House house,
    String currentRoomId,
    Vec3 eye,
    double sunAngle,
    double daylight,
    WeatherDay weather,
    bool daylightThroughWindow, {
    double? currentHour,
  }) {
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
    final pointCandidates = <CandidateLight>[];
    final spotCandidates = <CandidateLight>[];
    for (var i = 0; i < mantleLights.length; i++) {
      final light = mantleLights[i];
      final candidate = CandidateLight(
        id: i,
        type: i == 0 ? 'spot' : 'point',
        position: light.position,
        color: _lightColorVector(light.color),
        intensity: light.intensity,
        radius: light.radius,
      );
      (i == 0 ? spotCandidates : pointCandidates).add(candidate);
    }
    final ranked = _lightRanking.rankLights(
      cameraPosition: eye,
      points: pointCandidates,
      spots: spotCandidates,
    );
    final mantleById = <int, house_lighting.PointLight>{
      for (var i = 0; i < mantleLights.length; i++) i: mantleLights[i],
    };
    final points = [
      for (final candidate in ranked.acceptedPoints)
        _pointLightFromMantle(candidate, mantleById[candidate.id]!),
    ];
    final spots = [
      for (final candidate in ranked.acceptedSpots)
        _spotLightFromMantle(candidate, mantleById[candidate.id]!),
    ];
    _lightSelectionRevision++;
    _canvasLightDiagnostics(ranked, revision: _lightSelectionRevision);

    final requestedHour = _shaderTuning.getValue('time_override');
    final hour = requestedHour >= 0.0
        ? requestedHour.clamp(0.0, 23.999)
        : (currentHour ?? (sunAngle > 0 ? (7.0 + sunAngle * 12.0) : 22.0));
    final atmos = DayNightAtmosphereEngine.evaluateAtmosphere(
      hour: hour,
      rainIntensity: weather.rainIntensity,
      shutterOpen: daylightThroughWindow,
      daylightHours: weather.daylightHours,
    );

    // Wire atmosphere facts & CapsLock shader tuning overrides directly to renderer uniforms
    _tuningBridge.applyState(_shaderTuning);
    _canvas.setAttribute(
      'data-renderer-shader-overrides',
      jsonEncode(_tuningBridge.activeOverrides),
    );

    final effectiveRain = (_shaderTuning.getValue('rain_override') >= 0.0)
        ? _shaderTuning.getValue('rain_override')
        : weather.rainIntensity;
    final effectiveWetness = (_shaderTuning.getValue('wetness_override') >= 0.0)
        ? _shaderTuning.getValue('wetness_override')
        : atmos.windowSurfaceWetness;

    _thunderstormEngine.update(0.0166, rainIntensity: effectiveRain);
    final flash = _thunderstormEngine.flashState;

    final solarDaylight =
        (math.sin(math.max(0.0, atmos.sunElevationDegrees) * math.pi / 180.0) /
                math.sin(65.0 * math.pi / 180.0))
            .clamp(0.0, 1.0)
            .toDouble();
    final isDay = solarDaylight > 0.001;
    final dirVec = isDay
        ? px.Vec3(
            atmos.sunDirection.x,
            atmos.sunDirection.y,
            atmos.sunDirection.z,
          )
        : px.Vec3(
            atmos.moonDirection.x,
            atmos.moonDirection.y,
            atmos.moonDirection.z,
          );
    final baseDirCol = isDay
        ? px.LinearColor(atmos.sunColor.r, atmos.sunColor.g, atmos.sunColor.b)
        : px.LinearColor(
            atmos.moonColor.r,
            atmos.moonColor.g,
            atmos.moonColor.b,
          );

    final dirCol = flash.active
        ? px.LinearColor(
            baseDirCol.r + flash.colorR * flash.intensity * 2.0,
            baseDirCol.g + flash.colorG * flash.intensity * 2.0,
            baseDirCol.b + flash.colorB * flash.intensity * 2.5,
          )
        : baseDirCol;

    final dirIntensity = flash.active
        ? (atmos.directionalIntensity * atmos.windowLightLeakFactor +
              flash.intensity * 4.5)
        : (atmos.directionalIntensity * atmos.windowLightLeakFactor);

    _environment = px.FrameEnvironment(
      ambientColor: px.LinearColor(
        atmos.skyAmbientColor.r,
        atmos.skyAmbientColor.g,
        atmos.skyAmbientColor.b,
      ),
      ambientIntensity: math.max(
        ambientFloor,
        atmos.ambientIntensity *
            (isDay ? solarDaylight : 1.0) *
            atmos.windowLightLeakFactor,
      ),
      directionalLight: px.DirectionalLight(
        direction: dirVec,
        color: dirCol,
        intensity: dirIntensity,
      ),
      pointLights: points,
      spotLights: spots,
      clearColor: const px.LinearColor(0.008, 0.012, 0.024),
      fogColor: px.LinearColor(
        atmos.fogColor.r * 0.08,
        atmos.fogColor.g * 0.08,
        atmos.fogColor.b * 0.08,
      ),
      fogStart: fogStart / (1.0 + effectiveRain * 0.45),
      fogEnd: fogEnd / (1.0 + effectiveRain * 0.16),
      fogHeightFalloff: _shaderTuning.getValue('fog_height_falloff'),
      fogDensity: _shaderTuning.getValue('fog_density'),
    );
  }

  void setCamera(Camera camera) {
    final eye = px.Vec3(camera.eye.x, camera.eye.y, camera.eye.z);
    final forward = px.Vec3(camera.fwd.x, camera.fwd.y, camera.fwd.z);
    final up = px.Vec3(camera.up.x, camera.up.y, camera.up.z);
    final aspect = width / height;
    final view = px.Mat4.lookAt(eye: eye, forward: forward, up: up);
    final projection = px.Mat4.perspective(
      fovYRadians: camera.lens.fovYRadians,
      aspect: aspect,
      near: camera.lens.near,
      far: camera.lens.far,
    );
    _cameraView = px.CameraView(
      view: view,
      projection: projection,
      viewProjection: projection * view,
      eye: eye,
      forward: forward,
      near: camera.lens.near,
      far: camera.lens.far,
      aspect: aspect,
    );
  }

  /// Maps simulation-owned rupture stages into renderer effect weights without
  /// teaching Pixeldart game rules.
  void setPostProcess(
    RuptureState rupture, {
    required bool reducedMotion,
    double rainIntensity = 0,
    double rainWindowVisibility = 1,
  }) {
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
    final tuningExposure = _shaderTuning.getValue('post_exposure');
    final tuningBloom = _shaderTuning.getValue('post_bloom');
    final tuningVignette = _shaderTuning.getValue('post_vignette');
    final tuningGrain = _shaderTuning.getValue('post_film_grain');
    final tuningDither = _shaderTuning.getValue('post_dither');
    final tuningDof = _shaderTuning.getValue('post_depth_of_field');
    final tuningGrade = _shaderTuning.getValue('post_color_grade');
    final tuningWarp = _shaderTuning.getValue('post_affine_warp');
    final tuningSnap = _shaderTuning.getValue('post_vertex_snap');
    final tuningQuantization = _shaderTuning
        .getValue('post_quantization_bits')
        .round();
    final tuningVhsChroma = _shaderTuning.getValue('post_vhs_chroma');
    final tuningVhsNoise = _shaderTuning.getValue('post_vhs_noise');
    final tuningSsao = _shaderTuning.getValue('shadow_ao_intensity');
    _post = px.PostProcessState(
      exposure: lightsOut ? 0.45 : tuningExposure,
      bloomStrength: tuningBloom,
      ssaoStrength: _shaderTuning.getBool('shadow_ssdo_enable')
          ? tuningSsao
          : 0.0,
      depthOfFieldStrength: tuningDof,
      vignette: tuningVignette,
      grain: tuningGrain,
      ditherStrength: tuningDither,
      rainIntensity: rainIntensity,
      rainWindowVisibility: rainWindowVisibility,
      colorGradeStrength: math.max(
        tuningGrade,
        afterGrade ? (step == RuptureStep.gradeLUT ? progress : 1.0) : 0.0,
      ),
      affineWarpStrength: math.max(
        tuningWarp,
        afterWarp ? (step == RuptureStep.affineWarp ? progress : 1.0) : 0.0,
      ),
      vertexSnapGrid: math.max(tuningSnap, afterSnap ? 320.0 : 0.0),
      quantizationBits: afterSnap ? 5 : tuningQuantization,
      vhsChromaWeight: math.max(tuningVhsChroma, tape ? 1.0 : 0.0),
      vhsTrackingWeight: tape ? progress : 0.0,
      vhsNoiseWeight: math.max(tuningVhsNoise, tape ? progress : 0.0),
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
    _device.dispose();
    _initialized = false;
  }

  px.CameraView _defaultCamera() {
    final eye = px.Vec3.zero;
    final view = px.Mat4.identity();
    final projection = px.Mat4.perspective(
      fovYRadians: _cameraLens.fovYRadians,
      aspect: width / height,
      near: _cameraLens.near,
      far: _cameraLens.far,
    );
    return px.CameraView(
      view: view,
      projection: projection,
      viewProjection: projection * view,
      eye: eye,
      forward: const px.Vec3(0, 0, 1),
      near: _cameraLens.near,
      far: _cameraLens.far,
      aspect: width / height,
    );
  }

  List<_RoomSurfaceSpec> _roomSurfaceSpecs(House house, Room room) {
    final geometry = buildRoomGeometry(house, room);
    final staticDoors = buildDoorStaticGeometry(house, room);
    return [
      _RoomSurfaceSpec(
        'wall',
        Float32List.fromList([...geometry.walls, ...staticDoors]),
      ),
      _RoomSurfaceSpec('floor', geometry.floor),
      _RoomSurfaceSpec('ceiling', geometry.ceiling),
    ];
  }

  px.MeshData _meshFromVertices(Float32List vertices) {
    final points = <px.Vec3>[];
    for (var i = 0; i < vertices.length; i += vertexStride) {
      points.add(px.Vec3(vertices[i], vertices[i + 1], vertices[i + 2]));
    }
    if (points.isEmpty) {
      throw StateError('house surface mesh cannot be empty');
    }
    return px.MeshData(
      layout: px.VertexLayoutDescriptor.compatibility14,
      vertices: vertices,
      localBounds: px.Aabb.fromPoints(points),
    );
  }

  void _installRoomSurfaces(House house, Room room) {
    final specs = _roomSurfaceSpecs(house, room);
    final materials = _roomSurfaceMaterials[room.id];
    if (materials == null) {
      throw StateError('surface materials missing for room ${room.id}');
    }
    final meshes = <px.MeshHandle>[];
    final items = <px.InstanceId>[];
    final descriptors = <px.RetainedItemDescriptor>[];
    for (final spec in specs) {
      final mesh = _renderer.resources.registerMesh(
        _meshFromVertices(spec.vertices),
        debugLabel: 'room:${room.id}:${spec.surface}',
      );
      final descriptor = px.RetainedItemDescriptor(
        mesh: mesh,
        material: materials[spec.surface]!,
        visibilityMask: -1,
        castsShadow: true,
        receivesShadow: true,
      );
      final item = _world.addItem(descriptor);
      _sceneMeshes.add(mesh);
      _sceneItems.add(item);
      meshes.add(mesh);
      items.add(item);
      descriptors.add(descriptor);
    }
    _roomMeshesById[room.id] = meshes;
    _roomSurfaceItemsByRoom[room.id] = items;
    _roomSurfaceDescriptorsByRoom[room.id] = descriptors;
    if (items.isNotEmpty) _sceneItemsByRoom[room.id] = items.first;
    if (descriptors.isNotEmpty) _sceneDescriptors[room.id] = descriptors.first;
  }

  void _publishHouseMaterialBindings(House house) {
    final bindings = <String>[];
    final handleBindings = <String>[];
    for (final room in house.rooms) {
      final roomMaterials = _roomSurfaceMaterials[room.id];
      if (roomMaterials == null) continue;
      for (final entry in <String, String>{
        'wall': room.surfaceWall,
        'floor': room.surfaceFloor,
        'ceiling': room.surfaceCeiling,
      }.entries) {
        final material = HouseSurfaceMaterials.forId(entry.value);
        bindings.add(
          '${room.id}:${entry.key}=${material.id}:${material.textureKey}',
        );
        final handle = roomMaterials[entry.key];
        if (handle != null) {
          handleBindings.add(
            '${room.id}.${entry.key}=${handle.slot}.${handle.generation}',
          );
        }
      }
    }
    handleBindings.sort();
    _canvas.setAttribute(
      'data-renderer-house-materials',
      (bindings..sort()).join(','),
    );
    _canvas.setAttribute(
      'data-renderer-house-surface-bindings',
      handleBindings.join(','),
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

  (double, double, double) _exteriorTint(int slot) => switch (slot) {
    0 => (0.46, 0.25, 0.20), // weathered red brick
    1 => (0.31, 0.25, 0.23), // splash-darkened plinth brick
    2 => (0.58, 0.56, 0.50), // pale stone
    3 => (0.20, 0.12, 0.10), // stained front door
    4 => (0.12, 0.15, 0.20), // blue-black slate
    5 => (0.34, 0.32, 0.29), // ceramic and lead
    6 => (0.18, 0.20, 0.21), // painted cast iron
    7 => (0.24, 0.25, 0.27), // wet street cobbles
    _ => (0.42, 0.40, 0.38),
  };

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

  (double, double, double) _surfaceTint(int tint) => (
    ((tint >> 16) & 0xff) / 255.0,
    ((tint >> 8) & 0xff) / 255.0,
    (tint & 0xff) / 255.0,
  );

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
      for (final key in const [
        'wall-plaster',
        'grime',
        'floor-linoleum',
        'ceiling-stained',
      ])
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
      _renderer.resources.finalizeTextureMips(handle);
      _canvas.setAttribute('data-renderer-texture-$key', 'loaded');
      _publishTextureResidency();
      _publishMaterialResidency();
    } catch (error) {
      _canvas.setAttribute('data-renderer-texture-$key', 'fallback');
      _publishTextureResidency();
      _publishMaterialResidency();
      web.console.warn('Pixeldart texture $key unavailable: $error'.toJS);
    }
  }

  /// Publishes the renderer's ownership-neutral residency probe as DOM
  /// diagnostics. The first report is intentionally retained: it records the
  /// declared-but-unloaded (pending) state even when image decoding finishes
  /// before a browser probe starts. Handle identities are slot+generation
  /// pairs, so a transition can prove that pixels arrived without replacing
  /// material references or re-registering GPU resources.
  void _publishTextureResidency() {
    if (!_initialized || _textures.isEmpty) return;
    final requests = _textures.entries
        .map(
          (entry) => px.TextureResidencyRequest(
            key: entry.key,
            handle: entry.value,
            priority: entry.key == 'wall-plaster' ? 2 : 1,
          ),
        )
        .toList();
    final report = _renderer.resources.textureResidency.prewarm(requests);
    final ordered = report.results.toList()
      ..sort((a, b) => a.request.key.compareTo(b.request.key));
    final states = ordered
        .map((result) => '${result.request.key}=${result.status.name}')
        .join(',');
    final handles = ordered
        .map(
          (result) =>
              '${result.request.key}=${result.request.handle.slot}.${result.request.handle.generation}',
        )
        .join(',');
    final counts =
        'resident=${report.residentCount};pending=${report.pendingCount};'
        'missing=${report.missingCount};evicted=${report.evictedCount};'
        'unique=${report.uniqueHandleCount}';
    _textureResidencyRevision++;
    _canvas
      ..setAttribute('data-renderer-texture-residency', states)
      ..setAttribute('data-renderer-texture-residency-counts', counts)
      ..setAttribute('data-renderer-texture-residency-handles', handles)
      ..setAttribute(
        'data-renderer-texture-residency-revision',
        '$_textureResidencyRevision',
      );
    if (!_canvas.hasAttribute('data-renderer-texture-residency-initial')) {
      _canvas.setAttribute('data-renderer-texture-residency-initial', states);
    }
  }

  void _publishMaterialResidency() {
    if (!_initialized || _materialDefinitions.isEmpty) return;
    final requests = [
      for (final entry in _materialDefinitions.entries)
        px.MaterialResidencyRequest(
          key: entry.key,
          material: entry.value,
          priority: entry.key.contains('wall') ? 2 : 1,
        ),
    ];
    final report = _renderer.resources.materialResidency.prewarm(requests);
    final ordered = report.results.toList()
      ..sort((a, b) => a.request.key.compareTo(b.request.key));
    final states = ordered
        .map((result) => '${result.request.key}=${result.status.name}')
        .join(',');
    _canvas
      ..setAttribute('data-renderer-material-residency', states)
      ..setAttribute(
        'data-renderer-material-residency-counts',
        'resident=${report.residentCount};pending=${report.pendingCount};'
            'missing=${report.missingCount};evicted=${report.evictedCount}',
      );
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

  px.MeshData _doorLeafMesh(House house, Room room, Portal portal) {
    final vertices = buildDoorLeafGeometry(house, room, portal);
    if (vertices.isEmpty) {
      throw StateError('door ${portal.id} produced no leaf geometry');
    }
    return px.MeshData(
      layout: px.VertexLayoutDescriptor.compatibility14,
      vertices: vertices,
      localBounds: px.Aabb.fromPoints([
        for (var i = 0; i < vertices.length; i += vertexStride)
          px.Vec3(vertices[i], vertices[i + 1], vertices[i + 2]),
      ]),
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

  Vec3 _lightColorVector(int rgb) => Vec3(
    ((rgb >> 16) & 0xff) / 255,
    ((rgb >> 8) & 0xff) / 255,
    (rgb & 0xff) / 255,
  );

  px.PointLight _pointLightFromMantle(
    CandidateLight candidate,
    house_lighting.PointLight source,
  ) => px.PointLight(
    id: candidate.id,
    position: px.Vec3(source.position.x, source.position.y, source.position.z),
    color: px.LinearColor(
      candidate.color.x,
      candidate.color.y,
      candidate.color.z,
    ),
    intensity: candidate.intensity,
    radius: candidate.radius,
  );

  px.SpotLight _spotLightFromMantle(
    CandidateLight candidate,
    house_lighting.PointLight source,
  ) => px.SpotLight(
    id: candidate.id,
    position: px.Vec3(source.position.x, source.position.y, source.position.z),
    direction: px.Vec3(
      (source.direction ?? Vec3(0, -1, 0)).x,
      (source.direction ?? Vec3(0, -1, 0)).y,
      (source.direction ?? Vec3(0, -1, 0)).z,
    ),
    color: px.LinearColor(
      candidate.color.x,
      candidate.color.y,
      candidate.color.z,
    ),
    intensity: candidate.intensity,
    range: candidate.radius,
    innerConeRadians: 1.05,
    outerConeRadians: 1.40,
    castsShadow: true,
  );

  void _canvasLightDiagnostics(
    LightRankingResult result, {
    required int revision,
  }) {
    final rejected = result.rejectionReasons.entries.toList()
      ..sort((a, b) => a.key.compareTo(b.key));
    _canvas
      ..setAttribute(
        'data-renderer-light-selection',
        'points=${result.acceptedPoints.map((light) => light.id).join(':')};'
            'spots=${result.acceptedSpots.map((light) => light.id).join(':')}',
      )
      ..setAttribute(
        'data-renderer-light-rejections',
        rejected.map((entry) => '${entry.key}=${entry.value}').join('|'),
      )
      ..setAttribute('data-renderer-light-selection-revision', '$revision');
  }

  px.MaterialHandle _registerMaterial(px.MaterialDefinition definition) {
    final handle = _renderer.resources.registerMaterial(definition);
    _materialDefinitions[definition.key] = definition;
    return handle;
  }

  px.LinearColor _color(int rgb) => px.LinearColor(
    ((rgb >> 16) & 0xff) / 255,
    ((rgb >> 8) & 0xff) / 255,
    (rgb & 0xff) / 255,
  );
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

final class _PixeldartPortalLeaf {
  final String portalId;
  final String roomId;
  final px.InstanceId item;
  final px.MeshHandle mesh;
  final px.RetainedItemDescriptor descriptor;

  const _PixeldartPortalLeaf({
    required this.portalId,
    required this.roomId,
    required this.item,
    required this.mesh,
    required this.descriptor,
  });

  _PixeldartPortalLeaf copyWith({
    px.MeshHandle? mesh,
    px.RetainedItemDescriptor? descriptor,
  }) => _PixeldartPortalLeaf(
    portalId: portalId,
    roomId: roomId,
    item: item,
    mesh: mesh ?? this.mesh,
    descriptor: descriptor ?? this.descriptor,
  );
}

BackendSelection _selectRuntimeBackend() {
  return _backendSelector.select(Uri.base.queryParameters['renderer']);
}

int _mintRunSeed() => 1 + math.Random().nextInt(0x7FFFFFFF);

late web.HTMLCanvasElement _canvas;
late Camera _camera;
late Input _input;
late House _house;
late GameTime _time;
late GameSession _session;
late BrowserSaveStore _saveStore;
GameEventCursor? _authoredEventCursor;

web.Element? _fpsDiv;

Audio? _audio;
bool _audioArmed = false;
bool _reducedMotion = false;
const _audioPreferencePrefix = 'quarantine.audio.';
const _displayPreferencePrefix = 'quarantine.display.';
const _settingsProfileKey = 'quarantine.settings.profile';
const _graphicsSettingsKey = 'quarantine.graphics.profile';
const _controlsSettingsKey = 'quarantine.controls.profile';
const _audioOptionsKey = 'quarantine.audio.options';
const _gameplayOptionsKey = 'quarantine.gameplay.options';
const _accessibilityProfileKey = 'quarantine.accessibility.profile';
SettingsStore _settingsStore = SettingsStore();
GraphicsSettingsStore _graphicsSettingsStore = GraphicsSettingsStore();
ControlsSettingsProfile _controlsSettings = ControlsSettingsProfile();
AudioSettingsProfile _audioOptions = const AudioSettingsProfile();
GameplaySettingsProfile _gameplayOptions = GameplaySettingsProfile.firstRun;
AccessibilitySettingsProfile _accessibilityProfile =
    const AccessibilitySettingsProfile();
bool _systemReducedMotion = false;
bool _systemPhotosensitivitySafe = false;
HouseSoundscape? _houseSoundscape;
HouseInventory? _houseInventory;
AudioPlanner? _audioPlanner;
int _audioEventSequence = 0;
String? _lastPlayedVisitorVoice;
final HouseClock _houseClock = HouseClock();
final HouseServiceSoundScheduler _houseServiceSounds =
    HouseServiceSoundScheduler();
final InventoryInspectionLedger _inventoryInspections =
    InventoryInspectionLedger();

bool _paused = false;
final bool _debugPauseEnabled = Uri.base.queryParameters['debugPause'] == '1';
bool _haveLastTime = false;
double _lastTime = 0;
double _accumulator = 0;
String _bootPhase = 'booting';
final bool _automationDiagnosticsEnabled =
    Uri.base.queryParameters['automation'] == '1';

final class _AutomationCaptureFixture {
  final int seed;
  final int day;
  final double hour;
  final String weather;
  final String? shutters;
  final Map<String, String>? shutterMap;

  const _AutomationCaptureFixture({
    required this.seed,
    required this.day,
    required this.hour,
    required this.weather,
    this.shutters,
    this.shutterMap,
  });
}

_AutomationCaptureFixture? _readAutomationCaptureFixture() {
  if (!_automationDiagnosticsEnabled) return null;
  final params = Uri.base.queryParameters;
  final seed = int.tryParse(params['captureSeed'] ?? '');
  final day = int.tryParse(params['captureDay'] ?? '');
  final hour = double.tryParse(params['captureHour'] ?? '');
  final weather = params['captureWeather'];
  final shutters = params['captureShutters'];
  final rawShutterMap = params['captureShutterMap'];
  Map<String, String>? shutterMap;
  if (rawShutterMap != null) {
    try {
      final decoded = jsonDecode(rawShutterMap);
      if (decoded is Map) {
        final entries = <String, String>{};
        for (final entry in decoded.entries) {
          if (entry.key is! String ||
              entry.value is! String ||
              !const {'open', 'closed'}.contains(entry.value)) {
            return null;
          }
          entries[entry.key as String] = entry.value as String;
        }
        shutterMap = entries;
      } else {
        return null;
      }
    } on FormatException {
      return null;
    }
  }
  if (seed == null ||
      seed < 0 ||
      day == null ||
      day < 1 ||
      day > 21 ||
      hour == null ||
      !hour.isFinite ||
      hour < 0 ||
      hour >= 24 ||
      weather == null ||
      !const {'overcast', 'rain'}.contains(weather)) {
    return null;
  }
  if (shutters != null &&
      !const {'open', 'closed', 'mixed'}.contains(shutters)) {
    return null;
  }
  return _AutomationCaptureFixture(
    seed: seed,
    day: day,
    hour: hour,
    weather: weather,
    shutters: shutters,
    shutterMap: shutterMap,
  );
}

final _AutomationCaptureFixture? _automationCaptureFixture =
    _readAutomationCaptureFixture();
final bool _automationCaptureClockFrozen = _automationCaptureFixture != null;
final String? _automationCaptureMantleId = _automationDiagnosticsEnabled
    ? Uri.base.queryParameters['captureMantleId']
    : null;
final bool _automationCaptureMantleLit =
    Uri.base.queryParameters['captureMantleLit'] == '1';

CameraLens _readCameraLens() {
  final profile = switch (Uri.base.queryParameters['cameraProfile']) {
    'wide' => CameraLens.wide,
    'intimate' => CameraLens.intimate,
    _ => CameraLens.standard,
  };
  final fovDegrees = double.tryParse(
    Uri.base.queryParameters['cameraFov'] ?? '',
  );
  if (fovDegrees == null || !fovDegrees.isFinite) return profile;
  return profile.withFovDegrees(fovDegrees.clamp(35.0, 100.0).toDouble());
}

Vec3 _simEye = Vec3(0, 0, 0);
Vec3 _prevEye = Vec3(0, 0, 0);
Vec3 _viewEye = Vec3(0, 0, 0);
double _simYaw = 0;
double _simPitch = 0;

// The house applies its 1.5x horizontal scale at construction time. Keep the
// playable start on the authored ground-circuit hall-entry waypoint instead of
// the pre-scale living-room coordinate.
final CameraLens _cameraLens = _readCameraLens();

String _currentRoom = 'hall';
late Capsule _playerCapsule;
late ExamineState _examineState;
late RuptureState _rupture;
RuptureStep? _lastRendererRuptureStep;
int _rendererHistoryEpoch = 0;
final FpsMotion _motion = FpsMotion();
final LocomotionController _locomotionController = LocomotionController();
double _smoothEyeY = playerEyeHeight;
RendererGuiSurface? _rendererGui;
final GameplayDialogueCoordinator _dialogueCoordinator =
    GameplayDialogueCoordinator();
final ShaderTuningState _shaderTuning = ShaderTuningState();
final ShaderTuningBridge _tuningBridge = ShaderTuningBridge();
final RealisticThunderstormEngine _thunderstormEngine =
    RealisticThunderstormEngine();
final GuiFlowCoordinator _guiFlowCoordinator = GuiFlowCoordinator();

Panel? _activePanel;
final PauseLedger _pauseLedger = PauseLedger();
bool _pausePanelTransitioning = false;
late PauseRootPanel _pauseRoot;
late SettingsIndexPanel _settingsIndex;
late JournalPanel _journal;
late InteractionEngine _interactionEngine;
late Prompt _prompt;
late Broadcast _broadcast;
late Door _door;
late SleepPanel _sleepPanel;
late HelpPanel _helpPanel;
late CreditsPanel _creditsPanel;
late SettingsPanel _settingsPanel;
late SettingsPanel _visualSettingsPanel;
late SettingsPanel _accessibilitySettingsPanel;
late GraphicsSettingsPanel _graphicsSettingsPanel;
late SettingsPanel _audioSettingsPanel;
late SettingsPanel _gameplaySettingsPanel;
late ControlsSettingsPanel _controlsSettingsPanel;
late EndingPanel _endingPanel;
late VisitorDirector _visitorDirector;
late AmbientDirector _ambientDirector;
late AmbientNotice _ambientNotice;
final Set<int> _unverifiableDaysShown = {};

final List<String> _pendingSounds = [];
EndingState? _ending;
bool _runEnded = false;

void _openPanel(Panel panel) {
  if (_activePanel == panel && panel.isOpen) return;
  _activePanel?.close();
  _activePanel = panel;
  if (panel == _pauseRoot) {
    _pauseLedger.openRoot(restoreFocusId: 'gameplay.viewport');
  } else {
    _pauseLedger.openModal(_pauseReasonForPanel(panel));
  }
  _input.suspendGameplay();
  _accumulator = 0;
  panel.open();
}

void _openPauseChild(Panel panel, PausePage page, String triggerFocusId) {
  _pausePanelTransitioning = true;
  _activePanel?.close();
  _activePanel = panel;
  _pauseLedger.push(page, triggerFocusId: triggerFocusId);
  _input.suspendGameplay();
  _accumulator = 0;
  panel.open();
  _pausePanelTransitioning = false;
}

void _activatePausePanel(Panel panel, {String? focusId}) {
  _activePanel = panel;
  _input.suspendGameplay();
  _accumulator = 0;
  panel.open();
  final target = focusId == null ? null : web.document.getElementById(focusId);
  if (target is web.HTMLElement) target.focus();
}

void _returnFromPausePage(Panel pagePanel) {
  if (_pausePanelTransitioning) return;
  _pausePanelTransitioning = true;
  pagePanel.close();
  _activePanel = null;
  final transition = _pauseLedger.back();
  _pausePanelTransitioning = false;
  if (transition.kind == PauseTransitionKind.resumed) {
    _accumulator = 0;
    _input.resumeGameplay();
    final game = web.document.getElementById('game');
    if (game is web.HTMLElement) game.focus();
    return;
  }
  if (transition.kind != PauseTransitionKind.backed) return;
  final parent = switch (transition.after.current?.page) {
    PausePage.root => _pauseRoot,
    PausePage.settings => _settingsIndex,
    _ => null,
  };
  if (parent != null) {
    _activatePausePanel(parent, focusId: transition.focusTargetId);
  }
}

void _togglePanel(Panel panel) {
  if (_activePanel == panel && panel.isOpen) {
    panel.close();
  } else {
    _openPanel(panel);
  }
}

void _panelClosed(Panel panel) {
  if (_pausePanelTransitioning) return;
  if (_activePanel == panel) _activePanel = null;
  if (panel == _pauseRoot) {
    _pauseLedger.resume();
  } else {
    _pauseLedger.dismissModal(_pauseReasonForPanel(panel));
  }
  _accumulator = 0;
  _input.resumeGameplay();
}

PauseReason _pauseReasonForPanel(Panel panel) {
  if (panel == _pauseRoot) return PauseReason.pauseMenu;
  if (panel == _settingsIndex) return PauseReason.settings;
  if (panel is SettingsPanel) return PauseReason.settings;
  if (panel is GraphicsSettingsPanel) return PauseReason.settings;
  if (panel is ControlsSettingsPanel) return PauseReason.settings;
  if (panel == _journal) return PauseReason.journal;
  if (panel == _sleepPanel) return PauseReason.sleep;
  if (panel == _helpPanel) return PauseReason.help;
  if (panel == _creditsPanel) return PauseReason.settings;
  if (panel == _endingPanel) return PauseReason.ending;
  return PauseReason.visitor;
}

void _configureSettingsPanel(SettingsPanel panel, {bool nested = false}) {
  panel
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
    ..onResetCategory = (category) {
      _settingsStore.resetCategory(category);
      _persistSettingsStore();
      _applySettingsStore();
    }
    ..onResetAll = () {
      _settingsStore.resetAll();
      _persistSettingsStore();
      _applySettingsStore();
    };
  panel.onBack = nested
      ? () {
          _returnFromPausePage(panel);
        }
      : () {
          panel.close();
        };
  panel.onClose = nested
      ? () {
          _returnFromPausePage(panel);
        }
      : () {
          _panelClosed(panel);
        };
  if (panel.page == PauseSettingsCategory.audio) {
    panel.onAudioOptions = (profile) {
      _audioOptions = profile;
      _persistAudioOptions();
      _applyAudioOptions();
    };
  }
  if (panel.page == PauseSettingsCategory.gameplay) {
    panel.onGameplayOptions = (profile) {
      final storyWasEnabled = _gameplayOptions.storyMode;
      _gameplayOptions = profile;
      if (!storyWasEnabled && profile.storyMode) {
        // Story Mode is a clean narrative start, never a continuation of a
        // renderer showcase clock or a partially observed visitor schedule.
        _time.dayNumber = 1;
        _time.restoreHour(sunriseHour.toDouble());
        _door.hide();
        _dialogueCoordinator.clear();
      }
      _persistGameplayOptions();
      _applyGameplayOptions();
    };
  }
  if (panel.page == PauseSettingsCategory.accessibility) {
    panel.onAccessibilityProfile = (profile) {
      _accessibilityProfile = profile;
      _persistAccessibilityProfile();
      _applyAccessibilityProfile();
    };
    panel.onResetAccessibilityProfile = () {
      _accessibilityProfile = AccessibilitySettingsProfile.firstRun;
      _accessibilitySettingsPanel.setAccessibilityProfile(
        _accessibilityProfile,
      );
      _persistAccessibilityProfile();
      _applyAccessibilityProfile();
    };
  }
}

void _configureGraphicsSettingsPanel() {
  _graphicsSettingsPanel
    ..onChanged = (requested) {
      final negotiation = negotiateGraphics(requested, _graphicsCapabilities());
      _graphicsSettingsStore = GraphicsSettingsStore(
        requested: requested,
        effective: _graphicsSettingsStore.effective,
      );
      _graphicsSettingsPanel.setState(
        requested,
        _graphicsSettingsStore.effective,
        downgradeReasons: negotiation.downgradeReasons,
      );
      _canvas.setAttribute(
        'data-graphics-fallback',
        negotiation.downgradeReasons.join('|'),
      );
      _graphicsProfileTransaction = _commitGraphicsProfile(
        requested,
        negotiation,
        _graphicsProfileTransaction,
      );
    }
    ..onBack = () {
      _returnFromPausePage(_graphicsSettingsPanel);
    }
    ..onClose = () {
      _returnFromPausePage(_graphicsSettingsPanel);
    };
}

Future<void> _commitGraphicsProfile(
  GraphicsSettingsProfile requested,
  GraphicsNegotiation negotiation,
  Future<void>? previous,
) async {
  if (previous != null) await previous.catchError((_) {});
  final previousEffective = _graphicsSettingsStore.effective;
  final runtime = _pixeldartRuntime;
  try {
    if (runtime != null) {
      await runtime.applyGraphicsProfile(negotiation.effective);
    }
    _graphicsSettingsStore = GraphicsSettingsStore(
      requested: requested,
      effective: negotiation.effective,
    );
    _graphicsSettingsPanel.setState(
      requested,
      negotiation.effective,
      downgradeReasons: negotiation.downgradeReasons,
    );
    _persistGraphicsSettings();
    _publishRendererDiagnostics();
  } catch (error) {
    _graphicsSettingsStore = GraphicsSettingsStore(
      requested: previousEffective,
      effective: previousEffective,
    );
    _graphicsSettingsPanel.setState(
      previousEffective,
      previousEffective,
      downgradeReasons: ['renderer transaction rejected: $error'],
    );
    _persistGraphicsSettings();
  }
}

void _loadGraphicsSettings() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_graphicsSettingsKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _graphicsSettingsStore = GraphicsSettingsStore.fromJson(
        jsonDecode(encoded),
      );
    } catch (_) {
      _graphicsSettingsStore = GraphicsSettingsStore();
    }
  }
  final requested = _graphicsSettingsStore.requested;
  final negotiation = negotiateGraphics(requested, _graphicsCapabilities());
  _graphicsSettingsStore = GraphicsSettingsStore(
    requested: requested,
    effective: negotiation.effective,
  );
  _graphicsSettingsPanel.setState(
    requested,
    negotiation.effective,
    downgradeReasons: negotiation.downgradeReasons,
  );
  _persistGraphicsSettings();
  _publishRendererDiagnostics();
}

GraphicsCapabilitySnapshot _graphicsCapabilities() {
  final labels = _presentationBackend.diagnostics.capabilities;
  var maxSamples = 1;
  for (final label in labels) {
    if (!label.startsWith('max-samples-')) continue;
    maxSamples = int.tryParse(label.substring('max-samples-'.length)) ?? 1;
  }
  return GraphicsCapabilitySnapshot(
    maxSamples: maxSamples,
    disjointTimerQuery: labels.contains('disjoint-timer-query'),
  );
}

void _persistGraphicsSettings() {
  try {
    web.window.localStorage.setItem(
      _graphicsSettingsKey,
      jsonEncode(_graphicsSettingsStore.toJson()),
    );
  } catch (_) {}
}

void _configureControlsSettingsPanel() {
  _controlsSettingsPanel
    ..onChanged = (profile) {
      _controlsSettings = profile;
      _input.setActionBindings(profile.bindingsByAction);
      _input.setHoldToInteract(profile.holdToInteract);
      _persistControlsSettings();
    }
    ..onBack = () {
      _returnFromPausePage(_controlsSettingsPanel);
    }
    ..onClose = () {
      _returnFromPausePage(_controlsSettingsPanel);
    };
}

void _loadControlsSettings() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_controlsSettingsKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _controlsSettings = ControlsSettingsProfile.fromJson(jsonDecode(encoded));
    } catch (_) {
      _controlsSettings = ControlsSettingsProfile();
    }
  }
  _controlsSettingsPanel.setProfile(_controlsSettings);
  _input.setActionBindings(_controlsSettings.bindingsByAction);
  _input.setHoldToInteract(_controlsSettings.holdToInteract);
  _persistControlsSettings();
}

void _persistControlsSettings() {
  try {
    web.window.localStorage.setItem(
      _controlsSettingsKey,
      jsonEncode(_controlsSettings.toJson()),
    );
  } catch (_) {}
}

void _loadAudioOptions() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_audioOptionsKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _audioOptions = AudioSettingsProfile.fromJson(jsonDecode(encoded));
    } catch (_) {
      _audioOptions = const AudioSettingsProfile();
    }
  }
  _audioSettingsPanel.setAudioOptions(_audioOptions);
  _persistAudioOptions();
  _applyAudioOptions();
}

void _persistAudioOptions() {
  try {
    web.window.localStorage.setItem(
      _audioOptionsKey,
      jsonEncode(_audioOptions.toJson()),
    );
  } catch (_) {}
}

void _applyAudioOptions() {
  final audio = _audio;
  if (audio == null) return;
  audio.setPresentationOptions(_audioOptions);
}

void _loadGameplayOptions() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_gameplayOptionsKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _gameplayOptions = GameplaySettingsProfile.fromJson(jsonDecode(encoded));
    } catch (_) {
      _gameplayOptions = GameplaySettingsProfile.firstRun;
    }
  }
  _gameplaySettingsPanel.setGameplayProfile(_gameplayOptions);
  _persistGameplayOptions();
  _applyGameplayOptions();
}

void _persistGameplayOptions() {
  try {
    web.window.localStorage.setItem(
      _gameplayOptionsKey,
      jsonEncode(_gameplayOptions.toJson()),
    );
  } catch (_) {}
}

void _applyGameplayOptions() {
  // GameplayPresentationPolicy is the runtime-facing projection; for now we
  // expose the resolved policy on the automation attribute so browser drivers
  // and future consumers (prompt, journal, save feedback, focus-loss handler)
  // can read it without importing the policy class directly.
  final policy = GameplayPresentationPolicy.fromProfile(_gameplayOptions);
  final root = web.document.documentElement;
  if (root == null) return;
  root
    ..setAttribute(
      'data-gameplay-interaction',
      policy.interactionUsesHold ? 'hold' : 'press',
    )
    ..setAttribute(
      'data-gameplay-prompts',
      policy.showDetailedPrompts ? 'detailed' : 'standard',
    )
    ..setAttribute(
      'data-gameplay-text-pacing',
      policy.textPacingMultiplier == 0
          ? 'instant'
          : policy.textPacingMultiplier > 1
          ? 'slow'
          : 'readable',
    )
    ..setAttribute(
      'data-gameplay-journal',
      policy.compactJournal ? 'compact' : 'spacious',
    )
    ..setAttribute(
      'data-gameplay-confirmations',
      policy.confirmRoutineActions ? 'always' : 'important',
    )
    ..setAttribute(
      'data-gameplay-save-feedback',
      policy.detailedSaveFeedback ? 'detailed' : 'toast',
    )
    ..setAttribute('data-gameplay-focus-loss', policy.focusLossBehavior.name)
    ..setAttribute(
      'data-gameplay-reminders',
      policy.contextualReminders ? '1' : '0',
    );
  root.setAttribute('data-story-mode', _gameplayOptions.storyMode ? '1' : '0');
  root.setAttribute(
    'data-simulation-speed',
    _gameplayOptions.storyMode ? '1x' : '20x',
  );
}

void _loadAccessibilityProfile() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_accessibilityProfileKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _accessibilityProfile = AccessibilitySettingsProfile.fromJson(
        jsonDecode(encoded),
      );
    } catch (_) {
      _accessibilityProfile = const AccessibilitySettingsProfile();
    }
  }
  _accessibilitySettingsPanel.setAccessibilityProfile(_accessibilityProfile);
  _persistAccessibilityProfile();
  _applyAccessibilityProfile();
}

void _persistAccessibilityProfile() {
  try {
    web.window.localStorage.setItem(
      _accessibilityProfileKey,
      jsonEncode(_accessibilityProfile.toJson()),
    );
  } catch (_) {}
}

void _applyAccessibilityProfile() {
  final resolved = _accessibilityProfile.resolve(
    systemReducedMotion: _systemReducedMotion,
    systemPhotosensitivitySafe: _systemPhotosensitivitySafe,
  );
  _reducedMotion = resolved.reducedMotion;
  _camera.breathScale = _reducedMotion ? 0.5 : 1.0;
  final root = web.document.documentElement;
  final highContrast = root?.classList.contains('high-contrast') ?? false;
  final strongHighlights =
      root?.classList.contains('strong-highlights') ?? false;
  final uiPolicy = AccessibilityUiPolicy.fromResolved(
    resolved,
    highContrast: highContrast,
    strongHighlights: strongHighlights,
  );

  root?.classList.toggle('reduced-motion', resolved.reducedMotion);
  root?.classList.toggle(
    'photosensitivity-safe',
    resolved.photosensitivitySafe,
  );
  root?.classList.toggle('captions-enabled', resolved.captions);
  root?.classList.toggle('reduced-effects', uiPolicy.reducedEffects);
  root?.classList.toggle('focus-visible-enhanced', uiPolicy.focusVisible);
  if (root is web.HTMLElement) {
    root.style.setProperty('font-size', '${resolved.uiScale * 100}%');
  }
  _canvas
    ..setAttribute(
      'data-accessibility-reduced-motion',
      '${resolved.reducedMotion}',
    )
    ..setAttribute(
      'data-accessibility-photosensitivity-safe',
      '${resolved.photosensitivitySafe}',
    )
    ..setAttribute('data-accessibility-ui-scale', '${resolved.uiScale}')
    ..setAttribute('data-accessibility-captions', '${resolved.captions}')
    ..setAttribute(
      'data-accessibility-screen-reader-verbosity',
      resolved.screenReaderVerbosity.name,
    )
    ..setAttribute(
      'data-accessibility-reduced-effects',
      '${uiPolicy.reducedEffects}',
    )
    ..setAttribute(
      'data-accessibility-focus-visible',
      '${uiPolicy.focusVisible}',
    )
    ..setAttribute(
      'data-accessibility-essential-cues',
      '${uiPolicy.essentialCues}',
    );
  if (_ambientNoticeInitialized) {
    _ambientNotice.setAccessibilityProfile(_accessibilityProfile);
    _ambientNotice.setCaptionsEnabled(resolved.captions);
  }
}

bool _ambientNoticeInitialized = false;

void _installAccessibilityMediaListeners() {
  final reducedMotion = web.window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  );
  final photosensitivity = web.window.matchMedia(
    '(prefers-reduced-transparency: reduce)',
  );
  void refresh() {
    _systemReducedMotion = reducedMotion.matches;
    _systemPhotosensitivitySafe = photosensitivity.matches;
    _applyAccessibilityProfile();
  }

  reducedMotion.addEventListener('change', ((JSAny? _) => refresh()).toJS);
  photosensitivity.addEventListener('change', ((JSAny? _) => refresh()).toJS);
}

Future<void> main() async {
  final canvas = web.document.getElementById('game') as web.HTMLCanvasElement?;
  if (canvas == null) return;
  _canvas = canvas;
  _fpsDiv = web.document.getElementById('fps');
  _backendSelection = _selectRuntimeBackend();
  _installBootDiagnostics();
  _canvas.width = web.window.innerWidth > 0 ? web.window.innerWidth : 800;
  _canvas.height = web.window.innerHeight > 0 ? web.window.innerHeight : 600;
  final uiCanvas =
      web.document.getElementById('ui-canvas') as web.HTMLCanvasElement?;
  if (uiCanvas != null) {
    uiCanvas.width = _canvas.width;
    uiCanvas.height = _canvas.height;
    _rendererGui = RendererGuiSurface(uiCanvas);
    _rendererGui!.resize(_canvas.width, _canvas.height);
  }
  final deviceLease = const pxweb.WebGl2RendererFactory().createLease(canvas);
  if (deviceLease == null) {
    // Keep the constrained-browser contract observable without entering the
    // renderer or throwing across the WASM boundary. The smoke runner can
    // verify the explicit fallback state and the page remains inspectable.
    _setBootPhase('no-webgl2');
    _canvas
      ..setAttribute('data-renderer-backend', 'legacy')
      ..setAttribute('data-renderer-fallback', 'true')
      ..setAttribute(
        'data-renderer-diagnostics',
        jsonEncode({
          'backend': 'legacy',
          'fallback': true,
          'fallbackReason': 'webgl2 unavailable',
          'capabilities': const <String>[],
          'selection': {
            'kind': 'legacy',
            'explicit': true,
            'automatic': false,
            'fallback': true,
            'fallbackReason': 'webgl2 unavailable',
            'rejected': false,
            'aliasUsed': false,
          },
        }),
      );
    return;
  }
  try {
    final runtime = _PixeldartWebRuntime(
      deviceLease,
      _canvas.width,
      _canvas.height,
    );
    _pixeldartRuntime = runtime;
    _presentationBackend = const BackendFactory().create(
      _backendSelection,
      runtime: runtime,
    )..initialize();
  } catch (error, stack) {
    _canvas.setAttribute('data-renderer-error', '$error');
    if (_automationDiagnosticsEnabled) {
      _canvas.setAttribute('data-renderer-error-stack', '$stack');
    }
    // A context can exist while the adapter still cannot satisfy the
    // renderer's surface/profile contract (for example constrained
    // capability mode). Keep this failure observable and recoverable rather
    // than allowing a WASM exception to terminate the page.
    _setBootPhase('no-webgl2');
    _canvas
      ..setAttribute('data-renderer-backend', 'legacy')
      ..setAttribute('data-renderer-fallback', 'true')
      ..setAttribute(
        'data-renderer-diagnostics',
        jsonEncode({
          'backend': 'legacy',
          'fallback': true,
          'fallbackReason': 'webgl2 initialization failed',
          'capabilities': const <String>[],
          'selection': {
            'kind': 'legacy',
            'explicit': true,
            'automatic': false,
            'fallback': true,
            'fallbackReason': 'webgl2 initialization failed',
            'rejected': false,
            'aliasUsed': false,
          },
        }),
      );
    return;
  }
  _publishRendererDiagnostics();
  try {
    _setBootPhase('initializing');
    _camera = Camera(lens: _cameraLens);
    _systemReducedMotion = web.window
        .matchMedia('(prefers-reduced-motion: reduce)')
        .matches;
    _systemPhotosensitivitySafe = web.window
        .matchMedia('(prefers-reduced-transparency: reduce)')
        .matches;
    _reducedMotion = _systemReducedMotion;
    _camera.breathScale = _reducedMotion ? 0.5 : 1.0;
    _input = Input(web.window);

    _canvas.width = web.window.innerWidth > 0 ? web.window.innerWidth : 800;
    _canvas.height = web.window.innerHeight > 0 ? web.window.innerHeight : 600;
    _setBootPhase('renderer');

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
    final captureFixture = _automationCaptureFixture;
    _session = saved.snapshot == null
        ? GameSession.create(
            vocabulary: vocabulary,
            houseSeed: 42,
            runSeed: captureFixture?.seed ?? _mintRunSeed(),
            startDay: captureFixture?.day ?? 1,
            startHour: captureFixture?.hour.floor() ?? initialDayHour,
          )
        : GameSession.restore(
            vocabulary: vocabulary,
            snapshot: saved.snapshot!,
          );
    final eventPlan = textLibrary.gameEvents;
    _authoredEventCursor = eventPlan == null
        ? null
        : GameEventCursor.fromJson(
            eventPlan,
            saved.snapshot?.meta['authoredEvents'],
            runSeed: _session.runSeed,
          );
    _visitorDirector.narrative = _session.narrative;
    _weatherSchedule = WeatherSchedule(seed: _session.runSeed);
    _inventoryInspections.restore(saved.snapshot?.meta['inventoryInspections']);
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
    final captureShutters = _automationCaptureFixture?.shutters;
    final captureShutterMap = _automationCaptureFixture?.shutterMap;
    if (captureShutterMap != null) {
      for (final room in _house.rooms) {
        for (final window in room.windows) {
          final state = captureShutterMap[window.id];
          if (state != null) window.shutterOpen = state == 'open';
        }
      }
    } else if (captureShutters == 'open' || captureShutters == 'closed') {
      final open = captureShutters == 'open';
      for (final room in _house.rooms) {
        for (final window in room.windows) {
          window.shutterOpen = open;
        }
      }
    }
    final captureMantleId = _automationCaptureMantleId;
    if (captureMantleId != null && captureMantleId.isNotEmpty) {
      for (final room in _house.rooms) {
        for (final mantle in room.mantles) {
          if (mantle.id == captureMantleId) {
            mantle.lit = _automationCaptureMantleLit;
          }
        }
      }
    }
    _pixeldartRuntime?.attachHouse(_house);
    _time = _session.time;

    _simEye = _house.defaultPlayerEye(playerEyeHeight);
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

    _settingsIndex = SettingsIndexPanel(web.document)
      ..onCategory = (category) {
        final target = switch (category) {
          PauseSettingsCategory.visual => _visualSettingsPanel,
          PauseSettingsCategory.accessibility => _accessibilitySettingsPanel,
          PauseSettingsCategory.graphics => _graphicsSettingsPanel,
          PauseSettingsCategory.audio => _audioSettingsPanel,
          PauseSettingsCategory.gameplay => _gameplaySettingsPanel,
          PauseSettingsCategory.controls => _controlsSettingsPanel,
        };
        final page = switch (category) {
          PauseSettingsCategory.visual => PausePage.visual,
          PauseSettingsCategory.accessibility => PausePage.accessibility,
          PauseSettingsCategory.graphics => PausePage.graphics,
          PauseSettingsCategory.audio => PausePage.audio,
          PauseSettingsCategory.gameplay => PausePage.gameplay,
          PauseSettingsCategory.controls => PausePage.controls,
        };
        _openPauseChild(target, page, PauseSettingsContract.ids[category]!);
      }
      ..onBack = () {
        _returnFromPausePage(_settingsIndex);
      }
      ..onClose = () => _returnFromPausePage(_settingsIndex);
    _pauseRoot = PauseRootPanel(web.document)
      ..onResume = () {
        _pauseRoot.close();
      }
      ..onBack = () {
        _pauseRoot.close();
      }
      ..onSettings = () {
        _openPauseChild(_settingsIndex, PausePage.settings, 'pause.settings');
      }
      ..onControls = () {
        _pauseRoot.close();
        _openPanel(_helpPanel);
      }
      ..onSave = () {
        _saveSession('saved');
      }
      ..onHelp = () {
        _pauseRoot.close();
        _openPanel(_helpPanel);
      }
      ..onCredits = () {
        _openPauseChild(_creditsPanel, PausePage.credits, 'pause.credits');
      }
      ..onClose = () => _panelClosed(_pauseRoot);
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
    _journal.onClose = () => _panelClosed(_journal);
    _prompt = Prompt(web.document);
    _broadcast = Broadcast(web.document);
    _ambientNotice = AmbientNotice(web.document);
    _ambientNoticeInitialized = true;
    _door = Door(web.document)
      ..onContinue = _continueDoorConversation
      ..onCite = _citeDuringVisit;
    _dialogueCoordinator.onChoiceSelected = (int index, String choice) {
      if (_door.visitorPresent) {
        final reaction = _visitorDirector.currentReaction;
        if (reaction != null) {
          if (index >= 0 && index < reaction.options.length) {
            _chooseNarrativeReaction(reaction.options[index].id);
          }
        } else {
          if (index >= 0 && index < Door.choices.length) {
            _chooseDoorResponse(Door.choices[index]);
          }
        }
      }
    };
    _dialogueCoordinator.onDialogueAdvanced = _continueDoorConversation;
    final savedVisitors = VisitorDirectorState.tryFromJson(
      saved.snapshot?.meta['visitors'],
    );
    if (_gameplayOptions.storyMode &&
        savedVisitors != null &&
        _visitorDirector.restore(savedVisitors)) {
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
          _pixeldartRuntime?.refreshRoomGeometry(_house, roomId);
        }
        _saveSession('saved after sleep');
      }
      ..onClose = () => _panelClosed(_sleepPanel);
    _helpPanel = HelpPanel(web.document)
      ..onClose = () => _panelClosed(_helpPanel);
    _creditsPanel = CreditsPanel(web.document)
      ..onClose = () => _returnFromPausePage(_creditsPanel);
    _settingsPanel = SettingsPanel(web.document);
    _visualSettingsPanel = SettingsPanel(
      web.document,
      page: PauseSettingsCategory.visual,
    );
    _accessibilitySettingsPanel = SettingsPanel(
      web.document,
      page: PauseSettingsCategory.accessibility,
    );
    _configureSettingsPanel(_settingsPanel);
    _configureSettingsPanel(_visualSettingsPanel, nested: true);
    _configureSettingsPanel(_accessibilitySettingsPanel, nested: true);
    _loadAccessibilityProfile();
    _installAccessibilityMediaListeners();
    _graphicsSettingsPanel = GraphicsSettingsPanel(web.document);
    _configureGraphicsSettingsPanel();
    _loadGraphicsSettings();
    _audioSettingsPanel = SettingsPanel(
      web.document,
      page: PauseSettingsCategory.audio,
    );
    _configureSettingsPanel(_audioSettingsPanel, nested: true);
    _loadAudioOptions();
    _gameplaySettingsPanel = SettingsPanel(
      web.document,
      page: PauseSettingsCategory.gameplay,
    );
    _configureSettingsPanel(_gameplaySettingsPanel, nested: true);
    _loadGameplayOptions();
    _controlsSettingsPanel = ControlsSettingsPanel(web.document);
    _configureControlsSettingsPanel();
    _loadControlsSettings();
    _endingPanel = EndingPanel(web.document)
      ..onClose = () {
        _panelClosed(_endingPanel);
      }
      ..onDismiss = () {
        _panelClosed(_endingPanel);
      };
    final savedEnding = EndingState.tryFromJson(saved.snapshot?.meta['ending']);
    if (savedEnding != null) _presentEnding(savedEnding);

    _setBootPhase('world');

    _resize();
    web.window.addEventListener('resize', ((JSAny? _) => _resize()).toJS);
    web.document.addEventListener(
      'visibilitychange',
      ((JSAny? _) {
        if (web.document.visibilityState == 'hidden') {
          _onFocusLoss();
        }
      }).toJS,
    );
    web.window.addEventListener(
      'keydown',
      ((JSAny? evt) {
        final e = evt as web.KeyboardEvent;
        if (e.code == 'CapsLock' && !e.repeat) {
          e.preventDefault();
          _shaderTuning.toggle();
          if (_shaderTuning.isOpen) {
            web.document.callMethod<JSAny?>('exitPointerLock'.toJS);
          } else {
            _input.requestPointerLock(_canvas);
          }
          return;
        }
        if (_shaderTuning.isOpen && !e.repeat) {
          if (e.code == 'Escape') {
            e.preventDefault();
            _shaderTuning.isOpen = false;
            _input.requestPointerLock(_canvas);
            return;
          }
          if (e.code == 'ArrowUp' || e.code == 'KeyW') {
            e.preventDefault();
            _shaderTuning.previousItem();
            _rendererGui?.scrollShaderMenu(
              -1,
              _shaderTuning.itemsInCurrentCategory.length,
            );
            return;
          }
          if (e.code == 'ArrowDown' || e.code == 'KeyS') {
            e.preventDefault();
            _shaderTuning.nextItem();
            _rendererGui?.scrollShaderMenu(
              1,
              _shaderTuning.itemsInCurrentCategory.length,
            );
            return;
          }
          if (e.code == 'ArrowLeft' || e.code == 'KeyA') {
            e.preventDefault();
            _shaderTuning.decrementCurrent();
            return;
          }
          if (e.code == 'ArrowRight' || e.code == 'KeyD') {
            e.preventDefault();
            _shaderTuning.incrementCurrent();
            return;
          }
          if (e.code == 'KeyQ') {
            e.preventDefault();
            _shaderTuning.currentSelectedItem?.decrementFine();
            return;
          }
          if (e.code == 'KeyE') {
            e.preventDefault();
            _shaderTuning.currentSelectedItem?.incrementFine();
            return;
          }
          if (e.code == 'KeyR') {
            e.preventDefault();
            if (e.shiftKey) {
              _shaderTuning.resetAll();
            } else {
              _shaderTuning.resetCurrentCategory();
            }
            return;
          }
          if (e.code.startsWith('Digit') || e.code.startsWith('Numpad')) {
            final char = e.code
                .replaceAll('Digit', '')
                .replaceAll('Numpad', '');
            final num = int.tryParse(char);
            if (num != null && num >= 1 && num <= 5) {
              e.preventDefault();
              _shaderTuning.selectCategory(num - 1);
              return;
            }
          }
          return;
        }
        if (_door.visitorPresent && !e.repeat) {
          if (_dialogueCoordinator.handleKey(e.code)) {
            e.preventDefault();
            return;
          }
        }
        if (e.code == 'Escape' && !e.repeat) {
          if (_activePanel == null) {
            _openPanel(_pauseRoot);
          } else {
            _activePanel!.close();
          }
          return;
        }
        final gameplayShortcutsEnabled =
            _activePanel == null && !_shaderTuning.isOpen;
        if (!e.repeat && gameplayShortcutsEnabled) {
          _presentationBackend.handleInput(
            RendererInputAction(id: e.code, pressed: true, value: 1),
          );
        }
        if (e.code == 'KeyP' && !e.repeat && _debugPauseEnabled) {
          _paused = !_paused;
        }
        if ((e.code == 'KeyJ' || e.code == 'Tab') &&
            !e.repeat &&
            !_door.visitorPresent) {
          e.preventDefault();
          _togglePanel(_journal);
        }
        if (e.code == 'KeyL' && !e.repeat && !_door.visitorPresent) {
          _togglePanel(_sleepPanel);
        }
        if (e.code == 'KeyH' && !e.repeat && !_door.visitorPresent) {
          _togglePanel(_helpPanel);
        }
        if (e.code == 'KeyO' && !e.repeat && !_door.visitorPresent) {
          _togglePanel(_settingsPanel);
        }
        if (e.code == 'KeyK' && !e.repeat && gameplayShortcutsEnabled) {
          _saveSession('saved');
        }
      }).toJS,
    );
    web.window.addEventListener(
      'keyup',
      ((JSAny? evt) {
        final e = evt as web.KeyboardEvent;
        if (_activePanel == null) {
          _presentationBackend.handleInput(
            RendererInputAction(id: e.code, value: 0),
          );
        }
      }).toJS,
    );
    web.window.addEventListener('keydown', ((JSAny? _) => _armAudio()).toJS);
    web.window.addEventListener('click', ((JSAny? _) => _armAudio()).toJS);
    _canvas.addEventListener(
      'mousemove',
      ((JSAny? evt) => _handleRenderedDialogueHover(
        evt as web.MouseEvent,
      )).toJS,
    );
    _canvas.addEventListener(
      'click',
      ((JSAny? evt) {
        final e = evt as web.MouseEvent;
        if (_door.visitorPresent) {
          e.preventDefault();
          _handleRenderedDialogueClick(e);
          return;
        }
        _input.requestPointerLock(_canvas);
      }).toJS,
    );
    _canvas.addEventListener(
      'wheel',
      ((JSAny? evt) {
        final e = evt as web.WheelEvent;
        if (!_shaderTuning.isOpen || _rendererGui == null) return;
        e.preventDefault();
        final items = _shaderTuning.itemsInCurrentCategory;
        final delta = e.deltaY > 0 ? 1 : -1;
        _rendererGui!.scrollShaderMenu(delta, items.length);
      }).toJS,
    );

    _loadManifest();
    _setBootPhase('raf');
    web.window.requestAnimationFrame(_raf.toJS);
  } catch (error, stack) {
    _reportBootError(error, stack);
  }
}

void _handleRenderedDialogueHover(web.MouseEvent event) {
  final gui = _rendererGui;
  if (!_door.visitorPresent || gui == null) return;
  final point = _canvasPoint(event);
  if (point == null) return;
  _dialogueCoordinator.handleMouseMoveHit(gui.hitTest(point.$1, point.$2));
}

bool _handleRenderedDialogueClick(web.MouseEvent event) {
  final gui = _rendererGui;
  if (!_door.visitorPresent || gui == null) return false;
  final point = _canvasPoint(event);
  if (point == null) return false;
  return _dialogueCoordinator.handleMouseClickHit(
    gui.hitTest(point.$1, point.$2),
  );
}

(double, double)? _canvasPoint(web.MouseEvent event) {
  final rect = _canvas.getBoundingClientRect();
  final rectW = rect.width.toDouble();
  final rectH = rect.height.toDouble();
  if (rectW <= 0 || rectH <= 0) return null;
  final x = event.clientX.toDouble() - rect.left.toDouble();
  final y = event.clientY.toDouble() - rect.top.toDouble();
  return (x, y);
}

void _installBootDiagnostics() {
  web.window.addEventListener(
    'error',
    ((JSAny? evt) {
      final event = evt as web.Event;
      final message = event is web.ErrorEvent ? event.message : event.type;
      _reportBootError(message);
    }).toJS,
  );
  web.window.addEventListener(
    'unhandledrejection',
    ((JSAny? evt) {
      final event = evt as web.Event;
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
      Uri.base.queryParameters['renderer'] ?? 'auto',
    )
    ..setAttribute('data-renderer-backend', diagnostics.backend)
    ..setAttribute('data-renderer-fallback', diagnostics.fallback ? 'true' : 'false')
    ..setAttribute('data-renderer-profile', diagnostics.profile)
    ..setAttribute('data-renderer-diagnostics', diagnostics.encode())
    ..setAttribute(
      'data-renderer-configuration',
      _pixeldartRuntime == null
          ? '{}'
          : jsonEncode(_pixeldartRuntime!.effectiveConfiguration),
    )
    ..setAttribute('data-renderer-shadow-pcf-kernel', 'low-discrepancy-9tap')
    ..setAttribute('data-renderer-shadow-penumbra-floor', '0.15')
    ..setAttribute(
      'data-renderer-lighting-falloff',
      'inverse-square-smooth-cutoff',
    )
    ..setAttribute('data-renderer-dof-focal-distance', '2.5m')
    ..setAttribute('data-renderer-camera-inertia', 'exponential-smoothing')
    ..setAttribute(
      'data-renderer-model-package-diagnostics',
      jsonEncode(const {
        'schema': 'pixeldart-model-package-diagnostic-v1',
        'enabled': false,
        'attached': false,
        'activeLod': null,
        'itemCount': 0,
      }),
    );
  final profileFallback = _pixeldartRuntime?.profileFallbackReason;
  if (profileFallback != null) {
    _canvas.setAttribute('data-renderer-profile-fallback', profileFallback);
  }
}

void _publishAutomationPlayerState() {
  if (!_automationDiagnosticsEnabled) return;
  final captureMantleId = _automationCaptureMantleId;
  if (captureMantleId != null && captureMantleId.isNotEmpty) {
    _canvas.setAttribute(
      'data-automation-capture-mantle',
      '$captureMantleId:${_automationCaptureMantleLit ? 'on' : 'off'}',
    );
  }
  final weather = _weatherSchedule.forDay(_session.snapshot.day);
  _canvas.setAttribute(
    'data-automation-capture-weather',
    weather.rain ? 'rain' : 'overcast',
  );
  final shutters = _automationCaptureFixture?.shutters;
  if (shutters != null) {
    _canvas.setAttribute('data-automation-capture-shutters', shutters);
  }
  _canvas.setAttribute(
    'data-automation-rain-window-visibility',
    _rainWindowVisibility(_currentRoom).toStringAsFixed(3),
  );
  _canvas.setAttribute(
    'data-automation-player',
    jsonEncode({
      'schemaVersion': 1,
      'phase': _bootPhase,
      'roomId': _currentRoom,
      'eye': {'x': _simEye.x, 'y': _simEye.y, 'z': _simEye.z},
      'yaw': _simYaw,
      'pitch': _simPitch,
      'modal': _activePanel != null,
      'dialogueOverlay': _door.visitorPresent,
      'inputEnabled': _input.gameplayEnabled,
      'day': _session.snapshot.day,
      'hour': _session.snapshot.hour,
    }),
  );
  final portals = <String, Object?>{};
  for (final portal in _house.portals) {
    portals[portal.id] = {
      'a': portal.a,
      'b': portal.b,
      'open': portal.open,
      'locked': portal.locked,
      'sticks': portal.sticks,
      'passable': portal.passable,
    };
  }
  _canvas.setAttribute('data-automation-portals', jsonEncode(portals));
  final planner = _audioPlanner;
  if (planner != null &&
      _house.byId('cellar') != null &&
      _house.byId(_currentRoom) != null) {
    final transmission = planner.transmission('cellar', _currentRoom);
    _canvas.setAttribute(
      'data-audio-transmission-cellar',
      jsonEncode({
        'sourceRoom': 'cellar',
        'listenerRoom': _currentRoom,
        'portalPath': transmission.portalPath,
        'gainDb': transmission.gainDb,
        'lowPassHz': transmission.lowPassHz,
        'muffle01': transmission.muffle01,
        'barrierIds': transmission.barrierIds,
        'reasonTrace': transmission.reasonTrace,
        'reachable': transmission.reachable,
      }),
    );
  } else {
    _canvas.setAttribute('data-audio-transmission-cellar', 'unavailable');
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
          if (_authoredEventCursor != null)
            'authoredEvents': _authoredEventCursor!.toJson(),
          'unverifiables': _unverifiableDaysShown.toList()..sort(),
          'inventoryInspections': _inventoryInspections.toJson(),
          if (_ending != null) 'ending': _ending!.toJson(),
        },
      ),
    );
    _showSaveStatus(status);
  } catch (_) {
    _showSaveStatus('save failed');
  }
}

void _onFocusLoss() {
  final attr = web.document.documentElement?.getAttribute(
    'data-gameplay-focus-loss',
  );
  final behavior = GameplayFocusLossBehavior.values
      .where((e) => e.name == attr)
      .firstOrNull;
  switch (behavior ?? GameplayFocusLossBehavior.pauseAndMute) {
    case GameplayFocusLossBehavior.pauseAndMute:
      _paused = true;
      _audio?.setMix(muted: true);
    case GameplayFocusLossBehavior.pauseOnly:
      _paused = true;
    case GameplayFocusLossBehavior.continuePlayback:
      break;
  }
}

void _showSaveStatus(String message) {
  final status = web.document.getElementById('save-status');
  if (status == null) return;
  final detailed =
      web.document.documentElement?.getAttribute(
        'data-gameplay-save-feedback',
      ) ==
      'detailed';
  status.textContent = message;
  status.className = detailed ? 'visible detailed' : 'visible';
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
  if (_automationDiagnosticsEnabled && stack != null) {
    _canvas.setAttribute('data-boot-stack', '$stack');
  }
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
  if (_house.isRendererShowcase) {
    _canvas.setAttribute('data-house-manifest', 'renderer-showcase');
    _canvas.setAttribute('data-house-manifest-source', 'runtime-showcase');
    // The former domestic inventory/soundscape are intentionally stale after
    // the house replacement. Do not probe their legacy URLs in showcase mode:
    // a missing old asset must not appear as a runtime network failure.
    _canvas.setAttribute('data-house-inventory', 'showcase-bypassed');
    _canvas.setAttribute('data-house-soundscape', 'showcase-bypassed');
    _canvas.setAttribute('data-audio-planner', 'showcase-bypassed');
    return;
  }
  const urls = ['res/house/house.json', 'assets/house/house.json'];
  Object? lastError;
  var validated = false;
  for (final url in urls) {
    try {
      final response = await web.window.fetch(url.toJS).toDart;
      final source = (await response.text().toDart).toString();
      final manifest = AuthoredHouseManifest.decode(source);
      manifest.validateAgainst(_house);
      _canvas.setAttribute('data-house-manifest', 'validated');
      _canvas.setAttribute('data-house-manifest-source', url);
      validated = true;
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!validated) {
    _canvas.setAttribute('data-house-manifest', 'unavailable');
    web.console.warn('authored house manifest unavailable: $lastError'.toJS);
  }
  // Inventory and soundscape validation use the runtime House as their
  // authority and must remain observable even when an older geometry manifest
  // is rejected. Keeping these loads independent prevents a stale manifest
  // from silently disabling the game's acoustic planner.
  await _loadAuthoredHouseInventory();
  await _loadAuthoredHouseSoundscape();
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
  _canvas.setAttribute('data-house-inventory-error', '$lastError');
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
  _canvas.setAttribute('data-house-soundscape-error', '$lastError');
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
  _loadSettingsStore();
  _restoreAudioPreferences(audio);
  _applyAudioOptions();
  _restoreDisplayPreferences();
  if (_audioArmed) {
    audio.resume();
    audio.startMusicLoop('music');
  }
}

void _storeDisplayPreference(String key, String value) {
  _updateSetting(key, value);
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
  _applyAccessibilityProfile();
}

void _restoreDisplayPreferences() {
  final brightness = _settingsStore.requested.valueFor('brightness') as num;
  final highContrast =
      _settingsStore.requested.valueFor('high-contrast') as bool;
  final strongHighlights =
      _settingsStore.requested.valueFor('strong-highlights') as bool;
  for (final panel in [
    _settingsPanel,
    _visualSettingsPanel,
    _accessibilitySettingsPanel,
    _audioSettingsPanel,
    _gameplaySettingsPanel,
  ]) {
    panel.setLevel('brightness', brightness.toDouble());
  }
  _applyDisplayPreference('brightness', brightness.toDouble());
  for (final panel in [
    _settingsPanel,
    _visualSettingsPanel,
    _accessibilitySettingsPanel,
    _audioSettingsPanel,
    _gameplaySettingsPanel,
  ]) {
    panel
      ..setHighContrast(highContrast)
      ..setStrongHighlights(strongHighlights);
  }
  _applyDisplayToggle('high-contrast', highContrast);
  _applyDisplayToggle('strong-highlights', strongHighlights);
}

void _storeAudioPreference(String key, String value) {
  _updateSetting(key, value);
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
  final values = <String, double>{
    for (final key in const ['master', 'voice', 'effects', 'ambience', 'music'])
      key: (_settingsStore.requested.valueFor(key) as num).toDouble(),
  };
  final muted = _settingsStore.requested.valueFor('muted') as bool;
  final mono = _settingsStore.requested.valueFor('mono') as bool;
  audio.setMix(
    master: values['master'],
    voice: values['voice'],
    effects: values['effects'],
    ambience: values['ambience'],
    music: values['music'],
    muted: muted,
  );
  audio.setMono(mono);
  for (final panel in [
    _settingsPanel,
    _visualSettingsPanel,
    _accessibilitySettingsPanel,
    _audioSettingsPanel,
  ]) {
    for (final entry in values.entries) {
      panel.setLevel(entry.key, entry.value);
    }
    panel
      ..setMute(muted)
      ..setMono(mono);
  }
}

void _applySettingsStore() {
  final audio = _audio;
  if (audio != null) _restoreAudioPreferences(audio);
  _restoreDisplayPreferences();
}

void _loadSettingsStore() {
  String? encoded;
  try {
    encoded = web.window.localStorage.getItem(_settingsProfileKey);
  } catch (_) {}
  if (encoded != null) {
    try {
      _settingsStore = SettingsStore.fromJson(jsonDecode(encoded));
      return;
    } catch (_) {
      // Fall through to legacy migration and typed defaults.
    }
  }
  _settingsStore = SettingsStore.fromLegacy(
    audio: {
      for (final definition in SettingsRegistry.definitions)
        if (definition.persistenceNamespace == 'audio')
          definition.key: _readAudioPreference(definition.key),
    },
    display: {
      for (final definition in SettingsRegistry.definitions)
        if (definition.persistenceNamespace == 'display')
          definition.key: _readDisplayPreference(definition.key),
    },
  );
  _persistSettingsStore();
}

void _persistSettingsStore() {
  try {
    web.window.localStorage.setItem(
      _settingsProfileKey,
      jsonEncode(_settingsStore.toJson()),
    );
  } catch (_) {}
}

void _updateSetting(String key, String raw) {
  final definition = SettingsRegistry.definitionFor(key);
  final value = switch (definition.kind) {
    SettingKind.level => double.tryParse(raw),
    SettingKind.toggle =>
      raw == 'true'
          ? true
          : raw == 'false'
          ? false
          : null,
  };
  if (value == null) return;
  try {
    _settingsStore
      ..setRequested(key, value)
      ..setEffective(key, value);
    _persistSettingsStore();
  } on FormatException {
    // UI values are already bounded; invalid external values are ignored.
  }
}

Future<void> _loadTextures(JSObject? data) async {
  final urls = <String, String>{};
  _collectUrls(data?['tex'] as JSObject?, urls);
  await Future.wait([
    _pixeldartRuntime?.loadTextures(urls) ?? Future<void>.value(),
  ]);
}

void _applyCredits(JSObject? data) {
  final credits = data?['credits'];
  if (credits.isA<JSString>()) {
    final text = (credits as JSString).toDart;
    web.document.getElementById('credits')?.textContent = text;
    _creditsPanel.setCreditsText(text);
  }
}

void _resize() {
  final w = web.window.innerWidth;
  final h = web.window.innerHeight;
  _canvas.width = w > 0 ? w : 800;
  _canvas.height = h > 0 ? h : 600;
  _rendererGui?.resize(_canvas.width, _canvas.height);
  _presentationBackend.resize(_canvas.width, _canvas.height);
  final surface = _pixeldartRuntime?.surfaceLabel;
  if (surface != null) _canvas.setAttribute('data-renderer-surface', surface);
}

void _handleControllerActions() {
  final panel = _activePanel;
  if (panel != null) {
    if (_input.wasControllerActionPressed('pause') ||
        _input.wasControllerActionPressed('secondary')) {
      _controllerBack(panel);
      return;
    }
    if (_input.wasControllerCodePressed('GamepadDpadUp')) {
      _movePanelFocus(panel, -1);
      return;
    }
    if (_input.wasControllerCodePressed('GamepadDpadDown')) {
      _movePanelFocus(panel, 1);
      return;
    }
    if (_input.wasControllerActionPressed('interact')) {
      final active = web.document.activeElement;
      if (active is web.HTMLElement && panel.root.contains(active)) {
        active.callMethod<JSAny?>('click'.toJS);
      }
    }
    return;
  }
  if (_input.wasControllerActionPressed('pause')) {
    _openPanel(_pauseRoot);
    return;
  }
  if (_door.visitorPresent) return;
  if (_input.wasControllerActionPressed('journal')) {
    _togglePanel(_journal);
  } else if (_input.wasControllerActionPressed('sleep')) {
    _togglePanel(_sleepPanel);
  }
}

void _controllerBack(Panel panel) {
  if (panel == _pauseRoot) {
    panel.close();
    return;
  }
  if (panel == _settingsIndex ||
      panel is SettingsPanel ||
      panel is GraphicsSettingsPanel ||
      panel is ControlsSettingsPanel) {
    _returnFromPausePage(panel);
    return;
  }
  panel.close();
}

void _movePanelFocus(Panel panel, int direction) {
  final nodes = panel.root.querySelectorAll(
    'button:not([disabled]),input:not([disabled]),select:not([disabled]),'
    'textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
  );
  final focusable = <web.HTMLElement>[
    for (var i = 0; i < nodes.length; i++)
      if (nodes.item(i) case final web.HTMLElement element) element,
  ];
  if (focusable.isEmpty) return;
  final active = web.document.activeElement;
  final index = focusable.indexOf(
    active is web.HTMLElement ? active : panel.root,
  );
  final next = index < 0
      ? (direction < 0 ? focusable.length - 1 : 0)
      : (index + direction + focusable.length) % focusable.length;
  focusable[next].focus();
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
    _input.pollGamepad();
    _canvas.setAttribute(
      'data-controller',
      _input.gamepadConnected ? 'standard' : 'none',
    );
    final controllerId = _input.gamepadId;
    if (controllerId != null) {
      _canvas.setAttribute('data-controller-id', controllerId);
    } else {
      _canvas.removeAttribute('data-controller-id');
    }
    _handleControllerActions();

    if (!_paused && _activePanel == null) {
      _accumulator += frameTime;
      var steps = 0;
      while (_accumulator >= _fixedDt && steps < _maxSteps) {
        _prevEye = _simEye;
        if (!_automationCaptureClockFrozen) {
          _session.advance(
            _fixedDt * (_gameplayOptions.storyMode ? 1.0 : 20.0),
          );
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
        }
        _updateVisitorSchedule();
        _updateAuthoredEvents();
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
          'data-audio-muffle01',
          audio.maxActiveMuffle01.toStringAsFixed(3),
        );
        _canvas.setAttribute(
          'data-audio-music-started',
          audio.musicStarted ? 'true' : 'false',
        );
        _canvas.setAttribute('data-audio-room-ir', audio.roomIr);
      }
    }

    {
      _camera.lookFrom(_viewEye, _simYaw, _simPitch);
      _pixeldartRuntime?.setCamera(_camera);
      _pixeldartRuntime?.setVisibleRooms(_house, _currentRoom);
      _pixeldartRuntime?.setLighting(
        _house,
        _currentRoom,
        _viewEye,
        _time.sunAngle,
        _time.daylight,
        _weatherSchedule.forDay(_session.snapshot.day),
        roomIsLit(_currentRoom),
        currentHour: _time.currentHour,
      );
      if (_lastRendererRuptureStep != _rupture.step) {
        _lastRendererRuptureStep = _rupture.step;
        _rendererHistoryEpoch++;
      }
      _pixeldartRuntime?.setFrameClock(
        timeSeconds: _automationCaptureClockFrozen ? 0 : now / 1000.0,
        historyEpoch: _rendererHistoryEpoch,
        noiseSeed: math.max(0, _session.runSeed),
      );
      _pixeldartRuntime?.setPostProcess(
        _rupture,
        reducedMotion: _reducedMotion,
        rainIntensity: _weatherSchedule
            .forDay(_session.snapshot.day)
            .rainIntensity,
        rainWindowVisibility: _rainWindowVisibility(_currentRoom),
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
    _publishAutomationPlayerState();
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
      _ambientNotice.showCaption('interface confirmation');
      break;
    case 'ambient-winnow':
      audio.play('winnow', gain: 0.28);
      _ambientNotice.showCaption('wind moving through the house');
      break;
    case 'ambient-gate':
      audio.play('gate', gain: 0.22);
      _ambientNotice.showCaption('distant gate');
      break;
    case 'collapse':
      audio.play('collapse');
      _ambientNotice.showCaption('front door shudders and collapses');
      break;
    case 'clock:tick':
      _playHouseCue(audio, 'hall-clock', 'tick');
      break;
    case 'clock:chime':
      _playHouseCue(audio, 'hall-clock', 'chime');
      break;
    case 'clock:cuckoo':
      _playHouseCue(audio, 'hall-clock', 'cuckoo');
      break;
    case 'clock:bell':
      _playHouseCue(audio, 'hall-clock', 'bell');
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
  final cueCaption = switch ('$emitterId:$event') {
    'hall-clock:tick' => 'clock ticking',
    'hall-clock:cuckoo' => 'clock cuckoo call',
    'hall-clock:bell' => 'clock bell',
    'hall-clock:chime' => 'clock chime',
    'front-door-knocker:knock' => 'knock at the front door',
    'landing-window:wind' => 'wind at the landing window',
    'bedroom-timber:creak' => 'timber settling upstairs',
    'kitchen-pipe:tick' => 'kitchen pipe ticking',
    'kitchen-range:settle' => 'kitchen range settling',
    'cellar-drain:drip' => 'water dripping in the cellar',
    'bathroom-cistern:settle' => 'bathroom cistern settling',
    _ => null,
  };
  if (cueCaption != null) _ambientNotice.showCaption(cueCaption);
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
  // Visitor dialogue is a non-blocking renderer overlay. World simulation,
  // lighting and ambience continue while the player considers a reply.
  if (_runEnded || _activePanel != null) {
    _motion.stop();
    return;
  }

  final moveDir = _input.moveVector;
  _input.step(dt);
  final mouseDx = _input.mouseDx;
  final mouseDy = _input.mouseDy;

  final sensX =
      mouseSensitivity *
      _controlsSettings.horizontalSensitivity *
      (_controlsSettings.invertX ? -1.0 : 1.0);
  final sensY =
      mouseSensitivity *
      _controlsSettings.verticalSensitivity *
      (_controlsSettings.invertY ? -1.0 : 1.0);

  _simYaw +=
      mouseDx * sensX +
      _input.gamepadLookX *
          gamepadLookRadiansPerSecond *
          _controlsSettings.horizontalSensitivity *
          (_controlsSettings.invertX ? -1.0 : 1.0) *
          dt;
  _simPitch -=
      mouseDy * sensY +
      _input.gamepadLookY *
          gamepadLookRadiansPerSecond *
          _controlsSettings.verticalSensitivity *
          (_controlsSettings.invertY ? -1.0 : 1.0) *
          dt;
  _simPitch = _simPitch.clamp(-Camera.pitchLimit, Camera.pitchLimit);

  final desiredVelocity =
      Vec3(
        moveDir.x * math.cos(_simYaw) + moveDir.z * math.sin(_simYaw),
        0,
        -moveDir.x * math.sin(_simYaw) + moveDir.z * math.cos(_simYaw),
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

  final speedFraction = (_motion.velocity.length / playerSpeed).clamp(0.0, 1.0);
  _smoothEyeY = _locomotionController.smoothStepHeight(
    _smoothEyeY,
    _simEye.y,
    dt,
  );
  final bobOffset = _locomotionController.advanceHeadBob(
    moveSpeedFraction: speedFraction,
    dt: dt,
  );
  final renderEye = Vec3(
    _simEye.x + bobOffset.x,
    _smoothEyeY + bobOffset.y,
    _simEye.z + bobOffset.z,
  );

  _camera.lookFrom(renderEye, _simYaw, _simPitch);

  final aftermathManager = PhysicalAftermathManager(state: _session.narrative);

  // UI prompt / watched-object focus (deterministic resolver)
  final focus = resolveFocus(
    camera: _camera,
    house: _house,
    currentRoom: _currentRoom,
    inventory: _houseInventory,
    aftermathManager: aftermathManager,
  );
  _prompt.show(focus.prompt);
  final crosshairEl = web.document.getElementById('crosshair');
  if (crosshairEl != null) {
    crosshairEl.className = focus.prompt != null
        ? 'crosshair-active'
        : 'crosshair-dot';
  }

  // Interaction target selection is gated by the deterministic focus resolver.
  // This keeps interaction effects aligned with the same watched-object contract
  // that drives the UI prompt.
  Mantle? mantle;
  Portal? portal;
  Window? window;
  InventoryPlacement? inventoryPlacement;

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
    case FocusKind.inventory:
      inventoryPlacement = raycastInventory(
        camera: _camera,
        house: _house,
        inventory: _houseInventory,
        currentRoom: _currentRoom,
      );
      break;
    case FocusKind.aftermath:
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
        _ambientNotice.showCaption('mantle flame extinguished');
      } else if (_session.spendHoursAndGas(1, 1)) {
        mantle.lit = true;
        _examineState.startExamine(mantle);
        _ambientNotice.showCaption('mantle flame catches');
      }
    } else if (portal != null && !portal.sticks && !portal.locked) {
      portal.open = !portal.open;
      _ambientNotice.showCaption(portal.open ? 'door opens' : 'door closes');
      _pixeldartRuntime?.refreshRoomGeometry(_house, portal.a);
      _pixeldartRuntime?.refreshPortalGeometry(_house, portal.id);
      _audio?.onDoorStateChanged();
    } else if (window != null) {
      if (window.shutterOpen) {
        if (_session.spendHours(1)) {
          window.shutterOpen = false;
          _ambientNotice.showCaption('shutter closes');
        }
      } else {
        window.shutterOpen = true;
        _ambientNotice.showCaption('shutter opens');
      }
    } else if (focus.kind == FocusKind.aftermath) {
      final activeItems = aftermathManager.getActiveResidues();
      final item =
          activeItems.where((i) => i.id == focus.id).firstOrNull ??
          activeItems.firstOrNull;
      if (item != null) {
        _ambientNotice.show('noticed', item.description);
      }
    } else if (inventoryPlacement != null) {
      final event = _inventoryInspections.inspect(inventoryPlacement);
      _canvas
        ..setAttribute('data-inventory-last-focus', event.focusId)
        ..setAttribute('data-inventory-last-event', event.semanticId)
        ..setAttribute(
          'data-inventory-inspections',
          '${_inventoryInspections.counts.length}',
        );
      final residue = _narrativeResidueFor(event.focusId);
      _ambientNotice.show('noticed', residue ?? 'you inspect ${event.focusId}');
    }
  }

  if (_examineState.active) {
    final m = _examineState.current;
    if (m != null && raycastMantle(_camera, _house, _currentRoom) != m) {
      _examineState.breakExamine();
    }
  }

  _renderCanvasGui(dt, focus);
}

void _renderCanvasGui(double dt, FocusSnapshot focus) {
  final gui = _rendererGui;
  if (gui == null) return;

  final canvasRect = _canvas.getBoundingClientRect();
  final screenW = canvasRect.width.toDouble();
  final screenH = canvasRect.height.toDouble();
  if (screenW <= 0 || screenH <= 0) return;
  _dialogueCoordinator.update(dt);
  _guiFlowCoordinator.update(dt);
  final hints = _guiFlowCoordinator.getActiveActionHints(
    isHoveringInteractable: focus.prompt != null,
    interactableLabel: focus.prompt,
    isVisitorPresent: _door.visitorPresent,
  );
  _shaderTuning.update(dt);
  final room = _house.byId(_currentRoom);
  gui.render(
    RendererGuiFrame(
      dt: dt,
      width: screenW,
      height: screenH,
      showGameplayReticle: !_door.visitorPresent && _activePanel == null,
      interactable: focus.prompt != null,
      prompt: focus.prompt,
      dialogue: _dialogueCoordinator.toRenderState(),
      day: _session.snapshot.day,
      hour: _time.currentHour,
      twelveHourClock:
          _gameplayOptions.clockFormat == GameplayClockFormat.twelveHour,
      roomName: room?.id ?? _currentRoom,
      objective: _gameplayOptions.showObjective
          ? textLibrary.getBroadcastPart(_session.snapshot.day, 'status')
          : null,
      hints: hints,
      shaderTuning: _shaderTuning,
    ),
  );
  gui.publishDiagnostics(_canvas);
}

String? _narrativeResidueFor(String focusId) {
  final flags = _session.narrative.flags.entries.toList()
    ..sort((a, b) => a.key.compareTo(b.key));
  for (final entry in flags) {
    final residue = textLibrary.getResidue(entry.key, entry.value, focusId);
    if (residue != null) return residue;
  }
  return null;
}

void _syncDifficultySeam() {
  _visitorDirector.exposureElevated = _session.isolationElevatesExposure;
  final facts = _visitorDirector.drainFacts();
  if (facts.isNotEmpty) _session.recordVisitorFacts(facts);
}

void _updateVisitorSchedule() {
  if (!_gameplayOptions.storyMode) return;
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
    _dialogueCoordinator.setDialogue(
      speaker: arrival.visitor,
      text: line,
      responseChoices: Door.choiceLabels,
      isVisitor: true,
    );
    _playVisitorVoice();
    _showStrangerCaseNote(arrival);
    return;
  }
}

/// Hands compiled screenplay events to the game session without making the
/// renderer or editor responsible for narrative state.
void _updateAuthoredEvents() {
  final cursor = _authoredEventCursor;
  if (cursor == null) return;
  final snapshot = _session.snapshot;
  for (final event in cursor.advance(day: snapshot.day, hour: snapshot.hour)) {
    if (!_session.applyAuthoredEvent(event)) continue;
    _canvas
      ..setAttribute('data-story-last-event', event.id)
      ..setAttribute('data-story-last-event-kind', event.kind);
  }
}

void _restoreVisitorDoor() {
  final state = _visitorDirector.active;
  final line = state?.currentLine;
  if (state == null || line == null) return;
  _door.showArrival(state.arrival.visitor, line);
  _dialogueCoordinator.setDialogue(
    speaker: state.arrival.visitor,
    text: line,
    responseChoices: Door.choiceLabels,
    isVisitor: true,
  );
  _playVisitorVoice();
  _showStrangerCaseNote(state.arrival);
  if (state.phase != VisitPhase.waiting) {
    _presentDoorLine();
  }
  _showSaveStatus('restored visitor');
}

void _showStrangerCaseNote(VisitArrival arrival) {
  if (arrival.visitor != 'stranger' || arrival.day != 17) return;
  final quote = _session.freezeJournalQuote('stranger-17-eileen-case');
  final lead = textLibrary.getRecord('eileen-case-note').firstOrNull;
  if (quote == null || lead == null) return;
  _ambientNotice.show('inside the case', '$lead “${quote.text}”');
}

void _updateAmbientEvents() {
  if (!_gameplayOptions.storyMode) return;
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
  _openPanel(_endingPanel);
  final lines = [
    ...textLibrary.getEnding(ending.kind.name),
    ...NarrativeEndingTexture.forRun(_session.narrative, ending.kind),
  ];
  _endingPanel.showEnding(ending, lines);
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
      _pixeldartRuntime?.refreshRoomGeometry(_house, portal.a);
      _pixeldartRuntime?.refreshPortalGeometry(_house, portal.id);
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
  _presentDoorLine();
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
  _presentDoorLine();
}

void _presentDoorLine() {
  final state = _visitorDirector.active;
  final line = state?.currentLine;
  if (state == null || line == null) return;
  final reaction = _visitorDirector.currentReaction;
  if (reaction == null) {
    _door.showConversation(line);
    _dialogueCoordinator.setDialogue(
      speaker: state.arrival.visitor,
      text: line,
      responseChoices: const [],
      isVisitor: true,
    );
  } else {
    final selected = state.reactionChoiceId;
    _door.showConversation(line, requiresReaction: selected == null);
    final reactionLabels = [
      for (final option in reaction.options) option.label,
    ];
    _door.showReactionChoices([
      for (final option in reaction.options) (option.id, option.label),
    ], selectedId: selected);
    _dialogueCoordinator.setDialogue(
      speaker: state.arrival.visitor,
      text: line,
      responseChoices: selected == null ? reactionLabels : const [],
      isVisitor: true,
    );
    if (selected != null) {
      final option = reaction.options
          .where((candidate) => candidate.id == selected)
          .firstOrNull;
      if (option != null) {
        _door.showReactionReply(line, option.reply);
        _dialogueCoordinator.setDialogue(
          speaker: state.arrival.visitor,
          text: '$line\n\n${option.reply}',
          responseChoices: const [],
          isVisitor: true,
        );
      }
    }
  }
  _showDoorCitationOptions();
  _playVisitorVoice();
}

/// Plays a manifest-backed visitor clip when one exists. Text remains the
/// authoritative fallback, so missing or newly generated audio never blocks a
/// conversation.
void _playVisitorVoice() {
  final state = _visitorDirector.active;
  final line = state?.currentLine;
  final audio = _audio;
  if (state == null || line == null || audio == null) return;
  final key =
      'vo-${state.arrival.visitor}-day${state.arrival.day.toString().padLeft(2, '0')}'
      '-${state.tier.name}-${state.lineIndex + 1}';
  if (_lastPlayedVisitorVoice == key) return;
  _lastPlayedVisitorVoice = key;
  audio.play(key, gain: 1.0);
}

void _chooseNarrativeReaction(String optionId) {
  final result = _visitorDirector.chooseReaction(optionId);
  if (result is! VisitReactionResult) return;
  if (!_session.applyNarrativeReaction(result.reaction, result.option)) return;
  final replyText = result.option.reply;
  _door.showReactionReply(result.state.currentLine ?? '', replyText);
  final current = result.state.currentLine ?? '';
  _dialogueCoordinator.setDialogue(
    speaker: result.state.arrival.visitor,
    text: '$current\n\n$replyText',
    responseChoices: const [],
    isVisitor: true,
  );
  _showDoorCitationOptions();
  _saveSession('saved after visitor answer');
}

void _endVisitorDoor() {
  _door.hide();
  _dialogueCoordinator.clear();
  _lastPlayedVisitorVoice = null;
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
    _pixeldartRuntime?.refreshRoomGeometry(_house, portal.a);
    _pixeldartRuntime?.refreshPortalGeometry(_house, portal.id);
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

/// Maps authored aperture state to a restrained presentation weight. This is
/// deliberately not a visibility or portal rule: gameplay collision, audio,
/// and room membership retain their own canonical state. A closed room keeps
/// a faint exterior glint so rain does not disappear as if the window were an
/// opaque post-process mask.
double _rainWindowVisibility(String roomId) {
  final room = _house.byId(roomId);
  final windows = room?.windows ?? const [];
  if (windows.isEmpty) return 0.12;
  final open = windows.where((window) => window.shutterOpen).length;
  return (open / windows.length).clamp(0.12, 1.0).toDouble();
}
