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
  })  : currentValue = defaultValue,
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
        description: 'Microfacet distribution alpha scaling (0=Mirror, 1=Matte)',
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
        id: 'pbr_wrap_diffuse',
        label: 'Wrap Lighting Subsurface',
        description: 'Wrap lighting factor for soft skin/wax/candle bleed',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.0,
        max: 1.0,
        step: 0.05,
        defaultValue: 0.25,
      ),
      ShaderTuningItem(
        id: 'pbr_fresnel_f0',
        label: 'Dielectric Fresnel F0',
        description: 'Base specular reflectance at normal incidence',
        category: ShaderTuningCategory.pbrMaterial,
        min: 0.01,
        max: 0.30,
        step: 0.01,
        defaultValue: 0.04,
      ),

      // 2. Shadows & Occlusion
      ShaderTuningItem(
        id: 'shadow_ssdo_enable',
        label: 'SSDO Ambient Occlusion',
        description: 'Enable directional contact shadows and SSDO occlusion pass',
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
        defaultValue: 0.035,
      ),
      ShaderTuningItem(
        id: 'post_bloom',
        label: 'Threshold Bloom Glow',
        description: 'Emissive luminance bloom spread and intensity',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 2.0,
        step: 0.1,
        defaultValue: 0.8,
      ),
      ShaderTuningItem(
        id: 'post_vignette',
        label: 'Optical Vignette',
        description: 'Darkened frame perimeter lens curvature falloff',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 1.5,
        step: 0.05,
        defaultValue: 0.60,
      ),
      ShaderTuningItem(
        id: 'post_chromatic_aberration',
        label: 'Chromatic Lens Aberration',
        description: 'Radial RGB channel displacement on outer optics',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.02,
        step: 0.001,
        defaultValue: 0.003,
      ),
      ShaderTuningItem(
        id: 'post_film_grain',
        label: 'Analog Film Grain',
        description: 'Atmospheric temporal noise for late-Victorian grain',
        category: ShaderTuningCategory.atmosphereAndPost,
        min: 0.0,
        max: 0.30,
        step: 0.01,
        defaultValue: 0.06,
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
    selectedCategoryIndex = (selectedCategoryIndex + 1) % ShaderTuningCategory.values.length;
    selectedItemIndex = 0;
  }

  void previousCategory() {
    selectedCategoryIndex = (selectedCategoryIndex - 1 + ShaderTuningCategory.values.length) %
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
      final prevIdx = (debugMode.index - 1 + ShaderDebugMode.values.length) %
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
