/// Enum of CI Execution Tiers for T-14.
enum CiExecutionTier {
  pullRequest,
  nightly,
  release,
}

/// T-14 CI Pipeline Enforcement & Leaf-Test Discovery.
class CiPipelineEnforcer {
  static const List<String> prTierTests = [
    'test_day_night_atmosphere.dart',
    'test_light_ranking_controller_r00.dart',
    'test_room_probe_ssao_r05.dart',
    'test_model_cache_rehydration_r06.dart',
    'test_transient_depth_route_r07.dart',
    'test_post_process_pipeline_r10.dart',
    'test_tactile_feedback_matrix_i05.dart',
    'test_transient_facts_mapper_i06.dart',
    'test_visual_performance_harness_v03.dart',
    'test_perceptual_golden_evaluator_v04.dart',
    'test_room_probe_builder_a04.dart',
    'test_texture_residency_manifest_a05.dart',
    'test_exterior_vignette_composition_h23.dart',
    'test_house_wear_and_drift_variants_h24.dart',
    'test_house_room_compositions_h20_h22.dart',
  ];

  /// Validates that an unclassified test script is properly registered in the CI test manifest.
  static bool isTestDiscoveredAndRegistered(String testFilename) {
    return prTierTests.contains(testFilename);
  }
}
