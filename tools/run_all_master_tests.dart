import 'dart:io';

/// Master regression runner for the repository's policy and simulation suites.
///
/// SCOPE: this battery covers pure-Dart policy objects, simulation rules,
/// narrative data, and UI state. It asserts nothing about rendered pixels.
/// A green run here does NOT mean a renderer feature ships — renderer evidence
/// comes from `external/pixeldart`'s own suites and, once R-F1 lands, from the
/// golden-image comparison. See PLAN_RENDERER.md §1.3 and §10.
void main() async {
  print('========================================================================');
  print(' THE QUARANTINE — POLICY & SIMULATION REGRESSION BATTERY');
  print(' Scope: policy objects, simulation, narrative, UI state.');
  print(' NOT covered: rendered output. See PLAN_RENDERER.md §1.3.');
  print('========================================================================\n');

  final testSuites = [
    'tools/test_gold_master_certification.dart',
    'tools/test_accessibility_and_polish_suite.dart',
    'tools/test_performance_and_frame_pacing.dart',
    'tools/test_audio_acoustic_mixdown.dart',
    'tools/test_full_runtime_gameplay_loop.dart',
    'tools/test_21day_narrative_matrix.dart',
    'tools/test_raycast_wall_occlusion.dart',
    'tools/test_dialogue_ui_system.dart',
    'tools/test_brush_theme.dart',
    'tools/test_brush_components.dart',
    'tools/test_dialogue_encounter_bridge.dart',
    'tools/test_house_manifests_and_lighting.dart',
    'tools/test_ssdo_csm_policy_objects.dart',
    'tools/test_lod_mesh_pipeline.dart',
    'tools/test_surface_detail_history_pass.dart',
    'tools/test_pixeldart_capabilities_and_governance.dart',
    'tools/test_playability_and_fluidity.dart',
    'tools/test_canvas_p5_gui.dart',
    'tools/test_house_test_room_primitives.dart',
    'tools/test_shader_tuning_menu.dart',
    'tools/test_temporal_anti_aliasing_jitter.dart',
    'tools/test_motion_blur_velocity_field.dart',
    'tools/test_pixeldart_volumetric_light_pass.dart',
    'tools/test_masterplan_final_verification.dart',
  ];

  var passedCount = 0;
  final stopwatch = Stopwatch()..start();

  for (var i = 0; i < testSuites.length; i++) {
    final suite = testSuites[i];
    final sw = Stopwatch()..start();
    final result = await Process.run('dart', ['run', suite]);
    sw.stop();

    if (result.exitCode == 0) {
      passedCount++;
      print('[✓] [${i + 1}/${testSuites.length}] $suite (${sw.elapsedMilliseconds}ms)');
    } else {
      print('[✗] [${i + 1}/${testSuites.length}] $suite FAILED:');
      print(result.stdout);
      print(result.stderr);
      exit(1);
    }
  }

  stopwatch.stop();
  print('\n========================================================================');
  print(' MASTER REGRESSION SUMMARY: $passedCount / ${testSuites.length} TEST SUITES PASSED');
  print(' Total Execution Time: ${stopwatch.elapsedMilliseconds} ms');
  print('========================================================================\n');
}
