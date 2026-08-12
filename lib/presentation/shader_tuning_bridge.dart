import 'shader_tuning_state.dart';

/// Bridges ShaderTuningState values directly to WebGL program uniforms every frame.
class ShaderTuningBridge {
  final Map<String, dynamic> activeOverrides = {};

  /// Applies active shader tuning state parameters to a map of uniform locations and setters.
  void applyState(ShaderTuningState state) {
    activeOverrides['pbrRoughnessScale'] = state.getValue('pbr_roughness');
    activeOverrides['pbrMetallicScale'] = state.getValue('pbr_metallic');
    activeOverrides['pbrSpecularMult'] = state.getValue('pbr_specular');
    activeOverrides['pbrWrapDiffuse'] = state.getValue('pbr_wrap_diffuse');
    activeOverrides['pbrFresnelF0'] = state.getValue('pbr_fresnel_f0');
    activeOverrides['ambientLightScale'] = state.getValue('light_ambient_mult');
    activeOverrides['directLightScale'] = state.getValue('light_direct_mult');

    activeOverrides['ssdoEnabled'] = state.getBool('shadow_ssdo_enable');
    activeOverrides['aoIntensity'] = state.getValue('shadow_ao_intensity');
    activeOverrides['csmEnabled'] = state.getBool('shadow_csm_enable');
    activeOverrides['csmHardness'] = state.getValue('shadow_csm_hardness');
    activeOverrides['shadowBias'] = state.getValue('shadow_bias');

    activeOverrides['weatheringEnabled'] = state.getBool('weathering_enable');
    activeOverrides['normalBumpStrength'] = state.getValue('normal_bump_strength');
    activeOverrides['grimeAccumulation'] = state.getValue('grime_accumulation');
    activeOverrides['wetnessOverride'] = state.getValue('wetness_override');

    activeOverrides['fogEnabled'] = state.getBool('fog_enable');
    activeOverrides['fogDensity'] = state.getValue('fog_density');
    activeOverrides['fogHeightFalloff'] = state.getValue('fog_height_falloff');
    activeOverrides['timeOverride'] = state.getValue('time_override');
    activeOverrides['rainOverride'] = state.getValue('rain_override');
    activeOverrides['postBloom'] = state.getValue('post_bloom');
    activeOverrides['postVignette'] = state.getValue('post_vignette');
    activeOverrides['postChromaticAberration'] = state.getValue('post_chromatic_aberration');
    activeOverrides['postFilmGrain'] = state.getValue('post_film_grain');
    activeOverrides['postExposure'] = state.getValue('post_exposure');
    activeOverrides['postSaturation'] = state.getValue('post_saturation');

    activeOverrides['debugViewMode'] = state.debugMode;
  }
}
