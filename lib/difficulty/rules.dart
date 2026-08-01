import 'dart:math';

import '../config.dart';
import 'state.dart';

extension DifficultyRules on DifficultyState {
  void addVerifications(int count) {
    if (count <= 0) return;
    scrutiny = min(scrutinyCap, scrutiny + scrutinyPerCheck * count);
  }

  void addShortSleep() {
    exhaustion = min(exhaustionCap, exhaustion + exhaustionPerShortSleep);
  }

  void addDeflectedVisitor() {
    isolation = min(isolationCap, isolation + isolationPerDeflect);
  }

  void addShutRooms(int count) {
    if (count <= 0) return;
    isolation = min(isolationCap, isolation + isolationPerShutRoom * count);
  }

  void addSkippedRation() {
    isolation = min(isolationCap, isolation + isolationPerShutRoom);
  }

  void decayOvernight() {
    scrutiny = max(0.0, scrutiny - scrutinyDecay);
    exhaustion = max(0.0, exhaustion - exhaustionDecay);
    isolation = max(0.0, isolation - isolationDecay);
  }

  int get extraDriftsFromScrutiny =>
      (scrutiny / scrutinyCap * maxScrutinyExtraDrifts).round();

  int get hoursLostToExhaustion =>
      (exhaustion / exhaustionCap * maxExhaustionHourCost).round();

  double get shakinessBonus => exhaustion * exhaustionShakinessScale;

  bool get exposesVisitorsToCompression =>
      isolation >= isolationExposureThreshold;

  double get accuracy => 1.0 - isolation;
}
