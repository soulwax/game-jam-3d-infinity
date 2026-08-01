import '../house/house.dart';

enum RuptureStep {
  inactive,
  gradeLUT,
  affineWarp,
  vertexSnap,
  tapeGiveup,
  portalFail,
  lightsOut,
}

class RuptureState {
  RuptureStep step = RuptureStep.inactive;
  double stepElapsed = 0.0;
  List<String> lmantleIds = [];
  Set<String> extinguishedMantles = {};
  bool completed = false;

  bool get isActive => step != RuptureStep.inactive;

  void startRupture(House house) {
    if (isActive) return;
    step = RuptureStep.gradeLUT;
    stepElapsed = 0.0;
    completed = false;
    _recordMantleOrder(house);
  }

  void _recordMantleOrder(House house) {
    lmantleIds.clear();
    for (final room in house.rooms) {
      for (final mantle in room.mantles) {
        if (mantle.lit && !mantle.broken) {
          lmantleIds.add('${room.id}:${room.mantles.indexOf(mantle)}');
        }
      }
    }
  }

  void advance(double dt, House house) {
    if (!isActive) return;

    stepElapsed += dt;

    switch (step) {
      case RuptureStep.gradeLUT:
        if (stepElapsed >= 1.0) {
          step = RuptureStep.affineWarp;
          stepElapsed = 0.0;
        }
      case RuptureStep.affineWarp:
        if (stepElapsed >= 1.5) {
          step = RuptureStep.vertexSnap;
          stepElapsed = 0.0;
        }
      case RuptureStep.vertexSnap:
        if (stepElapsed >= 1.5) {
          step = RuptureStep.tapeGiveup;
          stepElapsed = 0.0;
        }
      case RuptureStep.tapeGiveup:
        if (stepElapsed >= 2.0) {
          step = RuptureStep.portalFail;
          stepElapsed = 0.0;
        }
      case RuptureStep.portalFail:
        if (stepElapsed >= 2.0) {
          step = RuptureStep.lightsOut;
          stepElapsed = 0.0;
        }
      case RuptureStep.lightsOut:
        if (stepElapsed >= 4.0) {
          step = RuptureStep.inactive;
          stepElapsed = 0.0;
          completed = true;
        }
      case RuptureStep.inactive:
        break;
    }

    if (step == RuptureStep.lightsOut) {
      _extinguishLights(stepElapsed, house);
    }
  }

  void _extinguishLights(double elapsed, House house) {
    extinguishedMantles.clear();

    if (lmantleIds.isEmpty) return;

    final perMantle = 4.0 / lmantleIds.length;
    final count = (elapsed / perMantle).toInt().clamp(0, lmantleIds.length);

    for (int i = 0; i < count; i++) {
      extinguishedMantles.add(lmantleIds[i]);
    }
  }

  bool isMantleExtinguished(String roomId, int mantleIndex) {
    return extinguishedMantles.contains('$roomId:$mantleIndex');
  }
}
