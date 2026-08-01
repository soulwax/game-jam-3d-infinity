class DifficultyState {
  double scrutiny;
  double exhaustion;
  double isolation;
  bool complianceTriggered;

  DifficultyState({
    this.scrutiny = 0.0,
    this.exhaustion = 0.0,
    this.isolation = 0.0,
    this.complianceTriggered = false,
  });

  Map<String, dynamic> toJson() => {
    'scrutiny': scrutiny,
    'exhaustion': exhaustion,
    'isolation': isolation,
    'complianceTriggered': complianceTriggered,
  };

  static DifficultyState fromJson(Map<String, dynamic> json) {
    final scrutiny = json['scrutiny'];
    final exhaustion = json['exhaustion'];
    final isolation = json['isolation'];
    final complianceTriggered = json['complianceTriggered'];
    if (scrutiny is! num ||
        exhaustion is! num ||
        isolation is! num ||
        complianceTriggered is! bool) {
      throw const FormatException('saved difficulty state is malformed');
    }
    return DifficultyState(
      scrutiny: scrutiny.toDouble(),
      exhaustion: exhaustion.toDouble(),
      isolation: isolation.toDouble(),
      complianceTriggered: complianceTriggered,
    );
  }
}
