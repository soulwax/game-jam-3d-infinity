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
}

/// Central state coordinator for CapsLock shader tuning menu.
class ShaderTuningState {
  bool isOpen = false;
  int selectedCategoryIndex = 0;
  int selectedItemIndex = 0;
  double menuAnimProgress = 0.0; // 0.0 closed, 1.0 open

  ShaderDebugMode debugMode = ShaderDebugMode.none;

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
        defaultValue: 0.01,
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
      final nextIdx = (debugMode.index + 1) % ShaderDebugMode.values.length;
      debugMode = ShaderDebugMode.values[nextIdx];
    } else {
      currentSelectedItem?.increment();
    }
  }

  void decrementCurrent() {
    if (selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      final prevIdx =
          (debugMode.index - 1 + ShaderDebugMode.values.length) %
          ShaderDebugMode.values.length;
      debugMode = ShaderDebugMode.values[prevIdx];
    } else {
      currentSelectedItem?.decrement();
    }
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

  double getValue(String id) {
    final item = items.where((i) => i.id == id).firstOrNull;
    return item?.currentValue ?? 1.0;
  }

  bool getBool(String id) {
    final item = items.where((i) => i.id == id).firstOrNull;
    return item?.boolValue ?? true;
  }
}
