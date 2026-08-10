/// Representation of a scenario execution result in T-12.
class ScenarioExecutionResult {
  final String scenarioId;
  final bool isPass;
  final double durationMs;
  final int seed;
  final String? errorMessage;
  final String replayCommand;

  const ScenarioExecutionResult({
    required this.scenarioId,
    required this.isPass,
    required this.durationMs,
    required this.seed,
    this.errorMessage,
    required this.replayCommand,
  });

  Map<String, dynamic> toJson() => {
        'scenarioId': scenarioId,
        'isPass': isPass,
        'durationMs': durationMs,
        'seed': seed,
        'errorMessage': errorMessage,
        'replayCommand': replayCommand,
      };
}

/// T-12 Packaged Core Scenario Suite & Execution Manager.
class ScenarioSuiteRunner {
  static const List<String> canonicalScenarios = [
    'canonical-boot',
    'ground-circuit',
    'upper-circuit',
    'cellar-circuit',
    'days-1-3-flow',
    'save-restore-check',
    'settings-esc-matrix',
    '100-transition-soak',
  ];

  final List<ScenarioExecutionResult> _results = [];

  void recordResult(ScenarioExecutionResult result) {
    _results.add(result);
  }

  int get totalCount => _results.length;
  int get passedCount => _results.where((r) => r.isPass).length;
  int get failedCount => _results.where((r) => !r.isPass).length;

  static String generateReplayCommand({required String scenarioId, required int seed}) {
    return 'dart run tools/run_scenario.dart --scenario=$scenarioId --seed=$seed';
  }

  Map<String, dynamic> generateReport() => {
        'totalCount': totalCount,
        'passedCount': passedCount,
        'failedCount': failedCount,
        'isOverallSuccess': failedCount == 0 && totalCount > 0,
        'results': _results.map((r) => r.toJson()).toList(),
      };
}
