/// Representation of a sharded test assignment in T-13.
class ShardedTestAssignment {
  final int shardIndex;
  final int totalShards;
  final List<String> assignedScenarios;

  const ShardedTestAssignment({
    required this.shardIndex,
    required this.totalShards,
    required this.assignedScenarios,
  });
}

/// T-13 Matrix / Sharding / Retry Policy Coordinator.
class TestMatrixSharding {
  /// Assigns a list of scenario IDs deterministically into N disjoint shards.
  static ShardedTestAssignment assignShard({
    required List<String> scenarioIds,
    required int shardIndex,
    required int totalShards,
  }) {
    if (totalShards <= 0 || shardIndex < 0 || shardIndex >= totalShards) {
      throw ArgumentError('Invalid shardIndex ($shardIndex) or totalShards ($totalShards)');
    }

    final sortedScenarios = List<String>.from(scenarioIds)..sort();
    final assigned = <String>[];

    for (var i = 0; i < sortedScenarios.length; i++) {
      if (i % totalShards == shardIndex) {
        assigned.add(sortedScenarios[i]);
      }
    }

    return ShardedTestAssignment(
      shardIndex: shardIndex,
      totalShards: totalShards,
      assignedScenarios: assigned,
    );
  }

  /// Evaluates retries: retries are used ONLY to diagnose reproducible vs infrastructure failures,
  /// and NEVER turn a first failure green in overall reporting.
  static bool isReproducibleFailure({
    required bool firstRunPassed,
    required bool retryPassed,
  }) {
    // If first run failed and retry also failed -> reproducible failure
    // If first run failed and retry passed -> infrastructure flake (still counted as failure)
    return !firstRunPassed && !retryPassed;
  }
}
