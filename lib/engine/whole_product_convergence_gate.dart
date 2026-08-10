/// Representation of whole-product system convergence status for PF-07.
class WholeProductConvergenceReport {
  final bool visualSystemVerified;
  final bool menuSystemVerified;
  final bool inputSystemVerified;
  final bool storySystemVerified;
  final bool spatialAudioSystemVerified;
  final bool saveResumeSystemVerified;
  final String diagnostic;

  const WholeProductConvergenceReport({
    required this.visualSystemVerified,
    required this.menuSystemVerified,
    required this.inputSystemVerified,
    required this.storySystemVerified,
    required this.spatialAudioSystemVerified,
    required this.saveResumeSystemVerified,
    required this.diagnostic,
  });

  bool get isAllSystemsConverged =>
      visualSystemVerified &&
      menuSystemVerified &&
      inputSystemVerified &&
      storySystemVerified &&
      spatialAudioSystemVerified &&
      saveResumeSystemVerified;

  Map<String, dynamic> toJson() => {
        'visualSystemVerified': visualSystemVerified,
        'menuSystemVerified': menuSystemVerified,
        'inputSystemVerified': inputSystemVerified,
        'storySystemVerified': storySystemVerified,
        'spatialAudioSystemVerified': spatialAudioSystemVerified,
        'saveResumeSystemVerified': saveResumeSystemVerified,
        'isAllSystemsConverged': isAllSystemsConverged,
        'diagnostic': diagnostic,
      };
}

/// PF-07 Whole-Product Convergence Gate Evaluator.
class WholeProductConvergenceGate {
  /// Evaluates whole-product convergence across all 6 core engine systems.
  static WholeProductConvergenceReport evaluateConvergence({
    required bool hasVisualEvidence,
    required bool hasMenuEvidence,
    required bool hasInputEvidence,
    required bool hasStoryEvidence,
    required bool hasAudioEvidence,
    required bool hasSaveEvidence,
  }) {
    final pass = hasVisualEvidence &&
        hasMenuEvidence &&
        hasInputEvidence &&
        hasStoryEvidence &&
        hasAudioEvidence &&
        hasSaveEvidence;

    final diag = pass
        ? 'PF-07 Whole-Product Convergence Gate PASSED: All 6 systems agree without bypasses.'
        : 'PF-07 Whole-Product Convergence Gate FAILED: System evidence missing.';

    return WholeProductConvergenceReport(
      visualSystemVerified: hasVisualEvidence,
      menuSystemVerified: hasMenuEvidence,
      inputSystemVerified: hasInputEvidence,
      storySystemVerified: hasStoryEvidence,
      spatialAudioSystemVerified: hasAudioEvidence,
      saveResumeSystemVerified: hasSaveEvidence,
      diagnostic: diag,
    );
  }
}
