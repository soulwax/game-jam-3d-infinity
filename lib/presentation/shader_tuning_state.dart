import 'dart:convert';
import 'dart:math' as math;

/// Discrete debug visualization modes for inspecting shader passes.
enum ShaderDebugMode {
  none,
  albedoOnly,
  normalsOnly,
  roughnessOnly,
  metallicOnly,
  aoOnly,
  wireframeOnly;

  String get displayName => switch (this) {
    ShaderDebugMode.none => 'Standard Shaded (Off)',
    ShaderDebugMode.albedoOnly => 'Base Albedo Only',
    ShaderDebugMode.normalsOnly => 'World Normal Vectors',
    ShaderDebugMode.roughnessOnly => 'Roughness Channel',
    ShaderDebugMode.metallicOnly => 'Metallic Channel',
    ShaderDebugMode.aoOnly => 'Ambient Occlusion Only',
    ShaderDebugMode.wireframeOnly => 'Geometric Wireframe',
  };
}

/// A lab control is editable only when the active renderer profile resolves it
/// into a real frame field or installed pass. This prevents a development
/// panel from presenting metadata-only controls as working renderer features.
enum ShaderTuningAvailability { live, unavailable }

/// Category grouping for shader tuning items.
enum ShaderTuningCategory {
  pbrMaterial,
  shadowsAndOcclusion,
  surfaceWeathering,
  atmosphereAndPost,
  debugView;

  String get title => switch (this) {
    ShaderTuningCategory.pbrMaterial => 'PBR Materials & BRDF',
    ShaderTuningCategory.shadowsAndOcclusion => 'Shadows & Ambient Occlusion',
    ShaderTuningCategory.surfaceWeathering => 'Surface Weathering & Normals',
    ShaderTuningCategory.atmosphereAndPost => 'Atmosphere & Post-Processing',
    ShaderTuningCategory.debugView => 'Diagnostic Shader Passes',
  };
}

/// Individual adjustable tuning parameter (slider or boolean toggle).
class ShaderTuningItem {
  final String id;
  final String label;
  final String description;
  final ShaderTuningCategory category;
  final bool isToggle;
  final double min;
  final double max;
  final double step;
  final double defaultValue;
  double currentValue;
  bool boolValue;
  ShaderTuningAvailability availability = ShaderTuningAvailability.unavailable;
  String? availabilityReason;
  double? effectiveValue;
  bool? effectiveBoolValue;

  ShaderTuningItem({
    required this.id,
    required this.label,
    required this.description,
    required this.category,
    this.isToggle = false,
    this.min = 0.0,
    this.max = 1.0,
    this.step = 0.05,
    required this.defaultValue,
    bool defaultBool = true,
  }) : currentValue = defaultValue,
       boolValue = defaultBool;

  void increment() {
    if (isToggle) {
      boolValue = !boolValue;
    } else {
      currentValue = (currentValue + step).clamp(min, max);
    }
  }

  void decrement() {
    if (isToggle) {
      boolValue = !boolValue;
    } else {
      currentValue = (currentValue - step).clamp(min, max);
    }
  }

  void incrementFine() {
    if (isToggle) {
      boolValue = !boolValue;
    } else {
      currentValue = (currentValue + step * 0.2).clamp(min, max);
    }
  }

  void decrementFine() {
    if (isToggle) {
      boolValue = !boolValue;
    } else {
      currentValue = (currentValue - step * 0.2).clamp(min, max);
    }
  }

  void reset() {
    currentValue = defaultValue;
    if (isToggle) {
      boolValue = defaultValue > 0.5;
    }
  }

  bool get isLive => availability == ShaderTuningAvailability.live;

  bool get differsFromBaseline => isToggle
      ? boolValue != (defaultValue > 0.5)
      : (currentValue - defaultValue).abs() > 1e-9;

  void resolve({
    required bool live,
    String? reason,
    double? effectiveNumeric,
    bool? effectiveToggle,
  }) {
    availability = live
        ? ShaderTuningAvailability.live
        : ShaderTuningAvailability.unavailable;
    availabilityReason = live
        ? null
        : reason ?? 'Not installed by this profile';
    effectiveValue = live ? (effectiveNumeric ?? currentValue) : null;
    effectiveBoolValue = live ? (effectiveToggle ?? boolValue) : null;
  }

  String get formattedValue {
    if (isToggle) {
      return boolValue ? '[ON]' : '[OFF]';
    }
    if (step >= 0.1) {
      return currentValue.toStringAsFixed(1);
    } else if (step >= 0.01) {
      return currentValue.toStringAsFixed(2);
    } else {
      return currentValue.toStringAsFixed(3);
    }
  }

  String get effectiveFormattedValue {
    if (!isLive) return 'N/A';
    if (isToggle) return (effectiveBoolValue ?? boolValue) ? '[ON]' : '[OFF]';
    final value = effectiveValue ?? currentValue;
    if (step >= 0.1) return value.toStringAsFixed(1);
    if (step >= 0.01) return value.toStringAsFixed(2);
    return value.toStringAsFixed(3);
  }
}

/// Central state coordinator for CapsLock shader tuning menu.
class ShaderTuningState {
  static const String schema = 'pixeldart-shader-lab-v1';
  bool isOpen = false;
  int selectedCategoryIndex = 0;
  int selectedItemIndex = 0;
  double menuAnimProgress = 0.0; // 0.0 closed, 1.0 open

  ShaderDebugMode debugMode = ShaderDebugMode.none;
  bool debugViewsAvailable = false;
  String debugViewsReason = 'No renderer debug attachments are installed';

  late final List<ShaderTuningItem> items;

  ShaderTuningState() {
    _initItems();
  }

  void _initItems() {
    items = [
      // 1. PBR Materials
      ShaderTuningItem(
        id: 'pbr_roughness',
        label: 'Roughness Scale',
        description:
            'Microfacet distribution alpha scaling (0=Mirror, 1=Matte)',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'pbr_metallic',
        label: 'Metallic Intensity',
        description: 'Conductor reflectance multiplier (0=Dielectric, 1=Metal)',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'pbr_specular',
        label: 'Specular Multiplier',
        description: 'Cook-Torrance specular lobe weight multiplier',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 3.0,
        step: 0.1,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'light_ambient_mult',
        label: 'Ambient Light Scale',
        description:
            'Global ambient fill multiplier for sky and room environment',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 3.0,
        step: 0.1,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'light_direct_mult',
        label: 'Direct Light Scale',
        description:
            'Global directional key light and mantle intensity multiplier',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 3.0,
        step: 0.1,
        defaultValue: 1.0,
      ),

      // 2. Shadows & Occlusion
      ShaderTuningItem(
        id: 'shadow_ssdo_enable',
        label: 'SSDO Ambient Occlusion',
        description:
            'Enable directional contact shadows and SSDO occlusion pass',
        category: ShaderTuningCategory.shadowsAndOcclusion,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'shadow_ao_intensity',
        label: 'AO Occlusion Weight',
        description: 'Darkness and radius intensity for ambient corner shading',
        category: ShaderTuningCategory.shadowsAndOcclusion,
        min: 0.0,
        max: 2.5,
        step: 0.1,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'shadow_csm_enable',
        label: 'Cascaded Shadows (CSM)',
        description: 'Enable real-time cascaded directional shadow maps',
        category: ShaderTuningCategory.shadowsAndOcclusion,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'shadow_csm_hardness',
        label: 'Shadow Penumbra Sharpness',
        description: 'Shadow filter kernel radius and edge falloff',
        category: ShaderTuningCategory.shadowsAndOcclusion,
        min: 0.1,
        max: 3.0,
        step: 0.1,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'shadow_bias',
        label: 'Shadow Depth Bias',
        description: 'Depth offset bias to eliminate shadow acne artifacts',
        category: ShaderTuningCategory.shadowsAndOcclusion,
        min: 0.0001,
        max: 0.01,
        step: 0.0005,
        defaultValue: 0.003,
      ),

      // 3. Surface Weathering & Normals
      ShaderTuningItem(
        id: 'weathering_enable',
        label: 'Procedural Weathering Pass',
        description: 'Enable procedural wear, edge chips, and history grime',
        category: ShaderTuningCategory.surfaceWeathering,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'normal_bump_strength',
        label: 'Normal Map Depth',
        description: 'Perturbed normal vector scale and tangent displacement',
        category: ShaderTuningCategory.surfaceWeathering,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'grime_accumulation',
        label: 'Grime & Soot Weight',
        description: 'Accumulation layer in crevices and low-air pockets',
        category: ShaderTuningCategory.surfaceWeathering,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.20,
      ),
      ShaderTuningItem(
        id: 'wetness_override',
        label: 'Surface Wetness Lock',
        description: 'Force surface wetness lock (-0.1 = simulation driven)',
        category: ShaderTuningCategory.surfaceWeathering,
        min: -0.1,
        max: 1.0,
        step: 0.05,
        defaultValue: -0.1,
      ),

      // 4. Atmosphere & Post-Processing
      ShaderTuningItem(
        id: 'fog_enable',
        label: 'Atmospheric Fog',
        description: 'Enable distance depth haze and volumetric fogging',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'fog_density',
        label: 'Fog Extinction Density',
        description: 'Exponential height and distance extinction coefficient',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.15,
        step: 0.005,
        defaultValue: 0.012,
      ),
      ShaderTuningItem(
        id: 'fog_height_falloff',
        label: 'Fog Height Decay',
        description: 'Exponential vertical falloff rate along Y axis',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 0.60,
      ),
      ShaderTuningItem(
        id: 'time_override',
        label: 'Time of Day Lock',
        description: 'Override simulation time (-1.0 = normal clock)',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: -1.0,
        max: 24.0,
        step: 0.25,
        defaultValue: -1.0,
      ),
      ShaderTuningItem(
        id: 'rain_override',
        label: 'Rain Intensity Lock',
        description: 'Override weather rain (-0.1 = schedule driven)',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: -0.1,
        max: 1.0,
        step: 0.05,
        defaultValue: -0.1,
      ),
      ShaderTuningItem(
        id: 'post_bloom',
        label: 'Threshold Bloom Glow',
        description: 'Emissive luminance bloom spread and intensity',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 2.0,
        step: 0.1,
        defaultValue: 0.20,
      ),
      ShaderTuningItem(
        id: 'post_vignette',
        label: 'Optical Vignette',
        description: 'Darkened frame perimeter lens curvature falloff',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.5,
        step: 0.05,
        defaultValue: 0.20,
      ),
      ShaderTuningItem(
        id: 'volumetric_light_enable',
        label: 'Volumetric God-Rays',
        description: 'Ray-marched atmospheric light shaft in-scattering pass',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'volumetric_shaft_intensity',
        label: 'Light Shaft Intensity',
        description: 'In-scattering brightness for window sunlight god-rays',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.10,
      ),
      ShaderTuningItem(
        id: 'ssr_enable',
        label: 'Screen-Space Reflections (SSR)',
        description: 'Ray-marched screen-space reflections for glossy surfaces',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'tonemap_mode',
        label: 'Tone-Mapping Curve',
        description:
            'Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 2.0,
        step: 1.0,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'volumetric_scattering',
        label: 'Mie Scattering Anisotropy',
        description: 'Forward scattering phase function asymmetry factor (g)',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.9,
        step: 0.05,
        defaultValue: 0.45,
      ),
      ShaderTuningItem(
        id: 'ssss_enable',
        label: 'Subsurface Scattering (SSSS)',
        description: 'Screen-space organic diffusion blur for skin and fabric',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'taa_enable',
        label: 'Temporal AA Subpixel Jitter',
        description: 'Halton subpixel camera jitter and temporal accumulation',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 1.0,
        defaultBool: true,
      ),
      ShaderTuningItem(
        id: 'lens_flare_enable',
        label: 'Anamorphic Lens Flare',
        description:
            'Horizontal optical streak and anamorphic glare reflections',
        category: ShaderTuningCategory.atmosphereAndPost,
        isToggle: true,
        defaultValue: 0.0,
        defaultBool: false,
      ),
      ShaderTuningItem(
        id: 'post_chromatic_aberration',
        label: 'Chromatic Lens Aberration',
        description: 'Radial RGB channel displacement on outer optics',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.02,
        step: 0.001,
        defaultValue: 0.000,
      ),
      ShaderTuningItem(
        id: 'post_film_grain',
        label: 'Analog Film Grain',
        description: 'Atmospheric temporal noise for late-Victorian grain',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.30,
        step: 0.01,
        // Clean renderer output is the baseline; grain is an explicit lens.
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_exposure',
        label: 'Exposure / Tonemapping',
        description: 'Camera exposure value driving ACES filmic tonemap curve',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.2,
        max: 3.0,
        step: 0.05,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'post_saturation',
        label: 'Colour Saturation',
        description: 'Global chroma desaturation or saturation multiplier',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'post_bloom_threshold',
        label: 'Bloom Threshold',
        description: 'Luminance threshold at which warm highlights bloom',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 4.0,
        step: 0.1,
        defaultValue: 1.0,
      ),
      ShaderTuningItem(
        id: 'post_dither',
        label: 'Film Dither',
        description: 'Subtle ordered dither to prevent low-light banding',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_depth_of_field',
        label: 'Depth Of Field',
        description: 'Depth-aware focus blur around the selected focal plane',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_color_grade',
        label: 'Rupture Colour Grade',
        description: 'LUT-style cinematic colour transform strength',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_affine_warp',
        label: 'Affine Lens Warp',
        description: 'Screen-space geometric warp used by the rupture lens',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_vertex_snap',
        label: 'Vertex Snap Grid',
        description: 'Pixel-era vertex quantization grid size (0 disables)',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 640.0,
        step: 32.0,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_quantization_bits',
        label: 'Colour Quantization',
        description: 'Output colour precision in bits per channel',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 1.0,
        max: 8.0,
        step: 1.0,
        defaultValue: 8.0,
      ),
      ShaderTuningItem(
        id: 'post_vhs_chroma',
        label: 'VHS Chroma Split',
        description: 'Chromatic separation lens from the analogue tape pass',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'post_vhs_noise',
        label: 'VHS Tracking Noise',
        description: 'Animated tape noise and scanline instability',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
      ShaderTuningItem(
        id: 'light_contact_boost',
        label: 'Contact Light Lift',
        description: 'Raises the readable edge light around nearby objects',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 2.0,
        step: 0.05,
        defaultValue: 0.0,
      ),
    ];
  }

  /// Toggles menu visibility on CapsLock.
  void toggle() {
    isOpen = !isOpen;
  }

  /// Updates smooth slide-in/slide-out animation.
  void update(double dt) {
    if (isOpen) {
      menuAnimProgress = math.min(1.0, menuAnimProgress + dt * 8.0);
    } else {
      menuAnimProgress = math.max(0.0, menuAnimProgress - dt * 8.0);
    }
  }

  List<ShaderTuningItem> get itemsInCurrentCategory {
    final cat = ShaderTuningCategory.values[selectedCategoryIndex];
    return items.where((i) => i.category == cat).toList();
  }

  ShaderTuningItem? get currentSelectedItem {
    final currentList = itemsInCurrentCategory;
    if (currentList.isEmpty) return null;
    final clampedIdx = selectedItemIndex.clamp(0, currentList.length - 1);
    return currentList[clampedIdx];
  }

  void selectCategory(int index) {
    if (index >= 0 && index < ShaderTuningCategory.values.length) {
      selectedCategoryIndex = index;
      selectedItemIndex = 0;
    }
  }

  void nextCategory() {
    selectedCategoryIndex =
        (selectedCategoryIndex + 1) % ShaderTuningCategory.values.length;
    selectedItemIndex = 0;
  }

  void previousCategory() {
    selectedCategoryIndex =
        (selectedCategoryIndex - 1 + ShaderTuningCategory.values.length) %
        ShaderTuningCategory.values.length;
    selectedItemIndex = 0;
  }

  void nextItem() {
    final count = itemsInCurrentCategory.length;
    if (count > 0) {
      selectedItemIndex = (selectedItemIndex + 1) % count;
    }
  }

  void previousItem() {
    final count = itemsInCurrentCategory.length;
    if (count > 0) {
      selectedItemIndex = (selectedItemIndex - 1 + count) % count;
    }
  }

  void incrementCurrent() {
    if (selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      if (!debugViewsAvailable) return;
      final nextIdx = (debugMode.index + 1) % ShaderDebugMode.values.length;
      debugMode = ShaderDebugMode.values[nextIdx];
    } else {
      final item = currentSelectedItem;
      if (item?.isLive ?? false) item!.increment();
    }
  }

  void decrementCurrent() {
    if (selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      if (!debugViewsAvailable) return;
      final prevIdx =
          (debugMode.index - 1 + ShaderDebugMode.values.length) %
          ShaderDebugMode.values.length;
      debugMode = ShaderDebugMode.values[prevIdx];
    } else {
      final item = currentSelectedItem;
      if (item?.isLive ?? false) item!.decrement();
    }
  }

  void incrementFineCurrent() {
    final item = currentSelectedItem;
    if (item?.isLive ?? false) item!.incrementFine();
  }

  void decrementFineCurrent() {
    final item = currentSelectedItem;
    if (item?.isLive ?? false) item!.decrementFine();
  }

  void resetCurrentCategory() {
    if (selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      debugMode = ShaderDebugMode.none;
    } else {
      for (final item in itemsInCurrentCategory) {
        item.reset();
      }
    }
  }

  void resetAll() {
    debugMode = ShaderDebugMode.none;
    for (final item in items) {
      item.reset();
    }
  }

  /// Updates control truth from the active profile and the latest resolved
  /// frame. Callers pass only generic renderer facts; this state does not
  /// infer game meaning from a control name.
  void resolveFrame({
    required Set<String> liveItemIds,
    Map<String, double> effectiveValues = const {},
    Map<String, bool> effectiveToggles = const {},
    Map<String, String> unavailableReasons = const {},
    bool debugViewsAvailable = false,
    String? debugViewsReason,
  }) {
    for (final item in items) {
      final live = liveItemIds.contains(item.id);
      item.resolve(
        live: live,
        reason: unavailableReasons[item.id],
        effectiveNumeric: effectiveValues[item.id],
        effectiveToggle: effectiveToggles[item.id],
      );
    }
    this.debugViewsAvailable = debugViewsAvailable;
    this.debugViewsReason = debugViewsAvailable
        ? ''
        : (debugViewsReason ?? 'No renderer debug attachments are installed');
    if (!debugViewsAvailable) debugMode = ShaderDebugMode.none;
  }

  Map<String, Object?> diagnosticSnapshot() => {
    'liveCount': items.where((item) => item.isLive).length,
    'unavailableCount': items.where((item) => !item.isLive).length,
    'debugViewsAvailable': debugViewsAvailable,
    'selectedCategory': ShaderTuningCategory.values[selectedCategoryIndex].name,
    'selectedItem': currentSelectedItem?.id,
  };

  /// Stable grouped counts for the developer diagnostics panel.
  Map<String, Map<String, int>> diagnosticGroups() {
    final result = <String, Map<String, int>>{};
    for (final item in items) {
      final group = item.category.name;
      final counts = result.putIfAbsent(
        group,
        () => {'live': 0, 'unavailable': 0},
      );
      counts[item.isLive ? 'live' : 'unavailable'] =
          counts[item.isLive ? 'live' : 'unavailable']! + 1;
    }
    return {
      for (final entry in result.entries)
        entry.key: Map.unmodifiable(entry.value),
    };
  }

  /// Returns a stable, requested-value-only experiment document. Effective
  /// values are included as evidence when available, but are never imported
  /// as requests because they may be profile- or frame-dependent.
  Map<String, Object?> toMap() {
    final ordered = [...items]..sort((a, b) => a.id.compareTo(b.id));
    return {
      'schema': schema,
      'version': 1,
      'debugMode': debugMode.name,
      'controls': [
        for (final item in ordered)
          {
            'id': item.id,
            'requested': item.isToggle ? item.boolValue : item.currentValue,
            'effective': item.isLive
                ? (item.isToggle
                      ? (item.effectiveBoolValue ?? item.boolValue)
                      : (item.effectiveValue ?? item.currentValue))
                : null,
          },
      ],
    };
  }

  String encode() => jsonEncode(toMap());

  /// Canonical untouched document used as a reproducible comparison baseline.
  /// It is constructed independently so calling this never resets live state.
  String baselineEncode() => ShaderTuningState().encode();

  /// IDs whose requested values differ from their authored baseline.
  List<String> get modifiedControlIds => ([
    for (final item in items)
      if (item.differsFromBaseline) item.id,
  ]..sort());

  /// Imports requested values atomically. Unknown, missing, malformed, or
  /// out-of-range controls reject before any existing lab state changes.
  void importJson(String source) {
    final decoded = jsonDecode(source);
    if (decoded is! Map) {
      throw const FormatException('Shader Lab document must be an object');
    }
    if (decoded['schema'] != schema || decoded['version'] != 1) {
      throw const FormatException('unsupported Shader Lab document schema');
    }
    final rawControls = decoded['controls'];
    if (rawControls is! List || rawControls.length != items.length) {
      throw const FormatException(
        'Shader Lab document controls are incomplete',
      );
    }

    final byId = {for (final item in items) item.id: item};
    final stagedValues = <String, Object?>{};
    for (final raw in rawControls) {
      if (raw is! Map ||
          raw['id'] is! String ||
          !raw.containsKey('requested')) {
        throw const FormatException('malformed Shader Lab control');
      }
      final id = raw['id'] as String;
      final item = byId[id];
      if (item == null || stagedValues.containsKey(id)) {
        throw FormatException('unknown or duplicate Shader Lab control: $id');
      }
      final requested = raw['requested'];
      if (item.isToggle) {
        if (requested is! bool) {
          throw FormatException('toggle $id requires a boolean request');
        }
        stagedValues[id] = requested;
      } else {
        if (requested is! num || !requested.toDouble().isFinite) {
          throw FormatException('numeric control $id requires a finite number');
        }
        final value = requested.toDouble();
        if (value < item.min || value > item.max) {
          throw FormatException(
            'numeric control $id is outside [${item.min}, ${item.max}]',
          );
        }
        stagedValues[id] = value;
      }
    }

    final debugName = decoded['debugMode'];
    if (debugName is! String ||
        !ShaderDebugMode.values.any((mode) => mode.name == debugName)) {
      throw const FormatException('invalid Shader Lab debug mode');
    }
    if (debugName != ShaderDebugMode.none.name && !debugViewsAvailable) {
      throw const FormatException('requested debug mode is not available');
    }

    for (final item in items) {
      final value = stagedValues[item.id]!;
      if (item.isToggle) {
        item.boolValue = value as bool;
      } else {
        item.currentValue = value as double;
      }
    }
    debugMode = ShaderDebugMode.values.firstWhere(
      (mode) => mode.name == debugName,
    );
  }

  double getValue(String id) {
    final item = items.where((i) => i.id == id).firstOrNull;
    return item?.currentValue ?? 1.0;
  }

  bool getBool(String id) {
    final item = items.where((i) => i.id == id).firstOrNull;
    return item?.boolValue ?? true;
  }
}
