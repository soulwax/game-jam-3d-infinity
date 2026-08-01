/// The rupture may only begin as a final, player-initiated front-door act.
class RuptureGate {
  static bool canBegin({
    required int day,
    required bool atFrontDoor,
    required bool finalArrivalResolved,
  }) => day == 21 && atFrontDoor && finalArrivalResolved;
}
