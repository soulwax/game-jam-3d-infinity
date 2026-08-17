import 'dart:math' as math;

import '../engine/math3.dart';
import 'weather.dart';

bool _finiteVec(Vec3 value) =>
    value.x.isFinite && value.y.isFinite && value.z.isFinite;

/// Immutable facts needed to evaluate local weather exposure and heat flow.
///
/// `shelterFactor` is authored by the host from obstacles, overhangs and room
/// apertures: zero is fully exposed and one is strongly sheltered. The
/// renderer consumes the resulting facts, but never decides whether a wall
/// blocks wind or precipitation.
final class WeatherPhysicsInput {
  final WeatherDay weather;
  final double roomTemperatureCelsius;
  final double relativeHumidity;
  final double shelterFactor;
  final double insulationResistance;
  final double internalHeatWatts;
  final double thermalMassJoulesPerKelvin;
  final double surfaceAreaM2;
  final double dtSeconds;

  const WeatherPhysicsInput({
    required this.weather,
    required this.roomTemperatureCelsius,
    required this.relativeHumidity,
    required this.shelterFactor,
    required this.insulationResistance,
    required this.internalHeatWatts,
    required this.thermalMassJoulesPerKelvin,
    required this.surfaceAreaM2,
    required this.dtSeconds,
  });

  void validate() {
    _finite(roomTemperatureCelsius, 'roomTemperatureCelsius');
    _finite(relativeHumidity, 'relativeHumidity');
    _finite(shelterFactor, 'shelterFactor');
    _finite(insulationResistance, 'insulationResistance');
    _finite(internalHeatWatts, 'internalHeatWatts');
    _finite(thermalMassJoulesPerKelvin, 'thermalMassJoulesPerKelvin');
    _finite(surfaceAreaM2, 'surfaceAreaM2');
    _finite(dtSeconds, 'dtSeconds');
    if (relativeHumidity < 0 || relativeHumidity > 1) {
      throw ArgumentError.value(
        relativeHumidity,
        'relativeHumidity',
        'must be in [0, 1]',
      );
    }
    if (shelterFactor < 0 || shelterFactor > 1) {
      throw ArgumentError.value(
        shelterFactor,
        'shelterFactor',
        'must be in [0, 1]',
      );
    }
    if (insulationResistance <= 0) {
      throw ArgumentError.value(
        insulationResistance,
        'insulationResistance',
        'must be > 0',
      );
    }
    if (thermalMassJoulesPerKelvin <= 0) {
      throw ArgumentError.value(
        thermalMassJoulesPerKelvin,
        'thermalMassJoulesPerKelvin',
        'must be > 0',
      );
    }
    if (surfaceAreaM2 <= 0) {
      throw ArgumentError.value(surfaceAreaM2, 'surfaceAreaM2', 'must be > 0');
    }
    if (dtSeconds < 0) {
      throw ArgumentError.value(dtSeconds, 'dtSeconds', 'must be >= 0');
    }
  }

  static void _finite(double value, String name) {
    if (!value.isFinite) {
      throw ArgumentError.value(value, name, 'must be finite');
    }
  }
}

/// A host-authored warm object such as a stove, radiator, or occupied hearth.
/// Heat is expressed as watts so the clearance model can use a bounded
/// spherical conductive falloff rather than a visual-distance heuristic.
final class WarmObjectSource {
  final Vec3 position;
  final double radiusM;
  final double surfaceTemperatureCelsius;
  final double heatOutputWatts;

  const WarmObjectSource({
    required this.position,
    required this.radiusM,
    required this.surfaceTemperatureCelsius,
    required this.heatOutputWatts,
  });

  void validate() {
    if (!_finiteVec(position) ||
        !radiusM.isFinite ||
        !surfaceTemperatureCelsius.isFinite ||
        !heatOutputWatts.isFinite) {
      throw ArgumentError('warm source values must be finite');
    }
    if (radiusM <= 0 || heatOutputWatts < 0) {
      throw ArgumentError('warm source radius must be > 0 and heat >= 0');
    }
  }
}

final class WarmClearanceSnapshot {
  final double temperatureIncreaseCelsius;
  final double localTemperatureCelsius;
  final double clearanceRadiusM;
  final double condensationSuppression01;
  final bool frostFree;

  const WarmClearanceSnapshot({
    required this.temperatureIncreaseCelsius,
    required this.localTemperatureCelsius,
    required this.clearanceRadiusM,
    required this.condensationSuppression01,
    required this.frostFree,
  });

  Map<String, dynamic> toJson() => {
    'temperatureIncreaseCelsius': temperatureIncreaseCelsius,
    'localTemperatureCelsius': localTemperatureCelsius,
    'clearanceRadiusM': clearanceRadiusM,
    'condensationSuppression01': condensationSuppression01,
    'frostFree': frostFree,
  };
}

/// One deterministic weather/thermal step for a location in the world.
final class WeatherPhysicsSnapshot {
  final PrecipitationKind precipitationKind;
  final Vec3 windVelocityMps;
  final double effectiveWindSpeedMps;
  final double exposureFactor;
  final double precipitationMassFluxKgM2S;
  final double terminalFallSpeedMps;
  final double snowAccumulationRateMps;
  final double impactEnergyFluxWattsPerM2;
  final double convectiveConductanceWPerM2K;
  final double nextRoomTemperatureCelsius;
  final double dewPointCelsius;
  final bool condensationRisk;

  WeatherParticleProfile get particleProfile =>
      WeatherParticleProfile.forKind(precipitationKind);

  const WeatherPhysicsSnapshot({
    required this.precipitationKind,
    required this.windVelocityMps,
    required this.effectiveWindSpeedMps,
    required this.exposureFactor,
    required this.precipitationMassFluxKgM2S,
    required this.terminalFallSpeedMps,
    required this.snowAccumulationRateMps,
    required this.impactEnergyFluxWattsPerM2,
    required this.convectiveConductanceWPerM2K,
    required this.nextRoomTemperatureCelsius,
    required this.dewPointCelsius,
    required this.condensationRisk,
  });

  Map<String, dynamic> toJson() => {
    'precipitationKind': precipitationKind.name,
    'windVelocityMps': {
      'x': windVelocityMps.x,
      'y': windVelocityMps.y,
      'z': windVelocityMps.z,
    },
    'effectiveWindSpeedMps': effectiveWindSpeedMps,
    'exposureFactor': exposureFactor,
    'precipitationMassFluxKgM2S': precipitationMassFluxKgM2S,
    'terminalFallSpeedMps': terminalFallSpeedMps,
    'snowAccumulationRateMps': snowAccumulationRateMps,
    'impactEnergyFluxWattsPerM2': impactEnergyFluxWattsPerM2,
    'convectiveConductanceWPerM2K': convectiveConductanceWPerM2K,
    'nextRoomTemperatureCelsius': nextRoomTemperatureCelsius,
    'dewPointCelsius': dewPointCelsius,
    'condensationRisk': condensationRisk,
  };
}

/// Renderer-neutral motion/material hints for a precipitation phase.
///
/// These values describe the particle representation, not a draw API. A host
/// may use them with Pixeldart's generic field or with another renderer.
final class WeatherParticleProfile {
  final PrecipitationKind kind;
  final double initialFallSpeedMps;
  final double terminalFallSpeedMps;
  final double dragCoefficient;
  final double lifetimeSeconds;
  final double particleScale;
  final bool alignToVelocity;
  final double particleMassKg;

  const WeatherParticleProfile({
    required this.kind,
    required this.initialFallSpeedMps,
    required this.terminalFallSpeedMps,
    required this.dragCoefficient,
    required this.lifetimeSeconds,
    required this.particleScale,
    required this.alignToVelocity,
    this.particleMassKg = 0.00005,
  });

  static WeatherParticleProfile forKind(PrecipitationKind kind) {
    return switch (kind) {
      PrecipitationKind.none => const WeatherParticleProfile(
        kind: PrecipitationKind.none,
        initialFallSpeedMps: 0,
        terminalFallSpeedMps: 0,
        dragCoefficient: 0,
        lifetimeSeconds: 1,
        particleScale: 1,
        alignToVelocity: false,
        particleMassKg: 0,
      ),
      PrecipitationKind.rain => const WeatherParticleProfile(
        kind: PrecipitationKind.rain,
        initialFallSpeedMps: -2,
        terminalFallSpeedMps: 8.8,
        dragCoefficient: 4.5,
        lifetimeSeconds: 0.9,
        particleScale: 1,
        alignToVelocity: true,
        particleMassKg: 0.00005,
      ),
      PrecipitationKind.sleet => const WeatherParticleProfile(
        kind: PrecipitationKind.sleet,
        initialFallSpeedMps: -1.5,
        terminalFallSpeedMps: 5.5,
        dragCoefficient: 3.5,
        lifetimeSeconds: 1.1,
        particleScale: 1.1,
        alignToVelocity: true,
        particleMassKg: 0.0001,
      ),
      PrecipitationKind.snow => const WeatherParticleProfile(
        kind: PrecipitationKind.snow,
        initialFallSpeedMps: -0.2,
        terminalFallSpeedMps: 0.9,
        dragCoefficient: 1.6,
        lifetimeSeconds: 2.5,
        particleScale: 1.8,
        alignToVelocity: false,
        particleMassKg: 0.00001,
      ),
      PrecipitationKind.hail => const WeatherParticleProfile(
        kind: PrecipitationKind.hail,
        initialFallSpeedMps: -5,
        terminalFallSpeedMps: 18,
        dragCoefficient: 5.5,
        lifetimeSeconds: 0.65,
        particleScale: 1.35,
        alignToVelocity: true,
        particleMassKg: 0.001,
      ),
    };
  }
}

/// Host-authored solid surface used for swept precipitation impacts. The
/// renderer does not derive these boxes from meshes: a room, awning, sill, or
/// roof must explicitly provide its physical bounds and surface temperature.
final class WeatherCollisionBox {
  final String id;
  final Vec3 min;
  final Vec3 max;
  final double surfaceTemperatureCelsius;
  final double restitution;

  const WeatherCollisionBox({
    required this.id,
    required this.min,
    required this.max,
    required this.surfaceTemperatureCelsius,
    this.restitution = 0.35,
  });

  /// Builds a box from an authored centre and positive half extents. Keeping
  /// this conversion in the simulation contract prevents individual hosts
  /// from disagreeing about which side of a surface a particle can hit.
  factory WeatherCollisionBox.fromCenter({
    required String id,
    required Vec3 center,
    required Vec3 halfExtents,
    required double surfaceTemperatureCelsius,
    double restitution = 0.35,
  }) {
    if (!_finiteVec(center) ||
        !_finiteVec(halfExtents) ||
        halfExtents.x < 0 ||
        halfExtents.y < 0 ||
        halfExtents.z < 0) {
      throw ArgumentError('collision box centre/extents must be finite');
    }
    return WeatherCollisionBox(
      id: id,
      min: center - halfExtents,
      max: center + halfExtents,
      surfaceTemperatureCelsius: surfaceTemperatureCelsius,
      restitution: restitution,
    );
  }

  void validate() {
    if (id.isEmpty ||
        !_finiteVec(min) ||
        !_finiteVec(max) ||
        !surfaceTemperatureCelsius.isFinite ||
        !restitution.isFinite ||
        min.x > max.x ||
        min.y > max.y ||
        min.z > max.z ||
        restitution < 0 ||
        restitution > 1) {
      throw ArgumentError('invalid weather collision box $id');
    }
  }
}

enum WeatherImpactResponse { none, splash, settle, melt, rebound }

/// Result of one swept particle segment against one authored surface.
final class WeatherImpactSnapshot {
  final bool hit;
  final String? obstacleId;
  final Vec3 position;
  final Vec3 normal;
  final Vec3 outgoingVelocityMps;
  final double kineticEnergyJoules;
  final double depositedMassKg;
  final WeatherImpactResponse response;

  const WeatherImpactSnapshot({
    required this.hit,
    required this.obstacleId,
    required this.position,
    required this.normal,
    required this.outgoingVelocityMps,
    required this.kineticEnergyJoules,
    required this.depositedMassKg,
    required this.response,
  });

  static WeatherImpactSnapshot miss(Vec3 position, Vec3 velocity) =>
      WeatherImpactSnapshot(
        hit: false,
        obstacleId: null,
        position: position,
        normal: Vec3(0, 1, 0),
        outgoingVelocityMps: velocity,
        kineticEnergyJoules: 0,
        depositedMassKg: 0,
        response: WeatherImpactResponse.none,
      );
}

/// Deterministic swept collision and phase response for one particle.
final class WeatherImpactResolver {
  static WeatherImpactSnapshot evaluate({
    required PrecipitationKind kind,
    required Vec3 startPosition,
    required Vec3 endPosition,
    required Vec3 velocityMps,
    required double particleRadiusM,
    required double particleMassKg,
    required Iterable<WeatherCollisionBox> obstacles,
  }) {
    if (!_finiteVec(startPosition) ||
        !_finiteVec(endPosition) ||
        !_finiteVec(velocityMps) ||
        !particleRadiusM.isFinite ||
        !particleMassKg.isFinite ||
        particleRadiusM < 0 ||
        particleMassKg < 0) {
      throw ArgumentError('weather impact inputs must be finite and valid');
    }
    if (kind == PrecipitationKind.none) {
      return WeatherImpactSnapshot.miss(endPosition, velocityMps);
    }
    WeatherCollisionBox? bestBox;
    var bestT = double.infinity;
    Vec3? bestNormal;
    for (final box in obstacles) {
      box.validate();
      final hit = _segmentBoxHit(
        startPosition,
        endPosition,
        box,
        particleRadiusM,
      );
      if (hit != null && hit.$1 < bestT) {
        bestT = hit.$1;
        bestBox = box;
        bestNormal = hit.$2;
      }
    }
    if (bestBox == null || bestNormal == null) {
      return WeatherImpactSnapshot.miss(endPosition, velocityMps);
    }
    final impactPosition =
        startPosition + (endPosition - startPosition) * bestT;
    final speedSquared = velocityMps.dot(velocityMps);
    final energy = 0.5 * particleMassKg * speedSquared;
    final response = switch (kind) {
      PrecipitationKind.rain ||
      PrecipitationKind.sleet => WeatherImpactResponse.splash,
      PrecipitationKind.snow =>
        bestBox.surfaceTemperatureCelsius > 0.5
            ? WeatherImpactResponse.melt
            : WeatherImpactResponse.settle,
      PrecipitationKind.hail =>
        speedSquared > 1.0
            ? WeatherImpactResponse.rebound
            : WeatherImpactResponse.settle,
      PrecipitationKind.none => WeatherImpactResponse.none,
    };
    final outgoing = response == WeatherImpactResponse.rebound
        ? _reflect(velocityMps, bestNormal, bestBox.restitution)
        : Vec3(0, 0, 0);
    return WeatherImpactSnapshot(
      hit: true,
      obstacleId: bestBox.id,
      position: impactPosition,
      normal: bestNormal,
      outgoingVelocityMps: outgoing,
      kineticEnergyJoules: energy,
      depositedMassKg: response == WeatherImpactResponse.settle
          ? particleMassKg
          : 0,
      response: response,
    );
  }

  static Vec3 _reflect(Vec3 velocity, Vec3 normal, double restitution) {
    final reflected = velocity - normal * (2 * velocity.dot(normal));
    return reflected * restitution;
  }

  static (double, Vec3)? _segmentBoxHit(
    Vec3 start,
    Vec3 end,
    WeatherCollisionBox box,
    double radius,
  ) {
    final min = box.min - Vec3(radius, radius, radius);
    final max = box.max + Vec3(radius, radius, radius);
    final delta = end - start;
    var enter = 0.0;
    var exit = 1.0;
    var normal = Vec3(0, 0, 0);
    for (final axis in [0, 1, 2]) {
      final s = _axis(start, axis);
      final d = _axis(delta, axis);
      final lo = _axis(min, axis);
      final hi = _axis(max, axis);
      if (d.abs() < 1e-12) {
        if (s < lo || s > hi) return null;
        continue;
      }
      var t0 = (lo - s) / d;
      var t1 = (hi - s) / d;
      var candidateNormal = _axisNormal(axis, d > 0);
      if (t0 > t1) {
        final swap = t0;
        t0 = t1;
        t1 = swap;
        candidateNormal = _axisNormal(axis, false);
      }
      if (t0 > enter) {
        enter = t0;
        normal = candidateNormal;
      }
      exit = math.min(exit, t1);
      if (enter > exit) return null;
    }
    if (enter < 0) {
      final speed = delta.length;
      if (speed < 1e-12) return null;
      normal = _axisNormalFromVelocity(delta);
      enter = 0;
    }
    if (normal.length < 1e-12) {
      if (delta.length < 1e-12) return null;
      normal = _axisNormalFromVelocity(delta);
    }
    if (enter > 1) return null;
    return (enter, normal);
  }

  static double _axis(Vec3 value, int axis) => switch (axis) {
    0 => value.x,
    1 => value.y,
    _ => value.z,
  };

  static Vec3 _axisNormal(int axis, bool positive) {
    final sign = positive ? -1.0 : 1.0;
    return switch (axis) {
      0 => Vec3(sign, 0, 0),
      1 => Vec3(0, sign, 0),
      _ => Vec3(0, 0, sign),
    };
  }

  static Vec3 _axisNormalFromVelocity(Vec3 velocity) {
    final absX = velocity.x.abs();
    final absY = velocity.y.abs();
    final absZ = velocity.z.abs();
    if (absY >= absX && absY >= absZ) {
      return Vec3(0, velocity.y > 0 ? -1 : 1, 0);
    }
    if (absX >= absZ) return Vec3(velocity.x > 0 ? -1 : 1, 0, 0);
    return Vec3(0, 0, velocity.z > 0 ? -1 : 1);
  }
}

/// Renderer-neutral surface state for snow and meltwater. The host advances
/// this state at its simulation cadence and may later bind it to room-local
/// decals, accumulated meshes, audio, or gameplay. Energy is explicit: snow
/// melts only when a host supplies positive heat flux.
final class WeatherSurfaceAccumulator {
  static const double snowBulkDensityKgM3 = 120.0;
  static const double snowLatentHeatJPerKg = 334000.0;

  double snowDepthM;
  double waterFilmDepthM;

  /// Slow material-memory term for thawed/slushy appearance. It relaxes back
  /// toward zero over fifteen minutes, so a warm source dissolves snow
  /// gradually and the wet residue lingers after the heat moves away.
  double materialDissolution01;

  WeatherSurfaceAccumulator({
    this.snowDepthM = 0,
    this.waterFilmDepthM = 0,
    this.materialDissolution01 = 0,
  }) {
    _validateState();
  }

  WeatherSurfaceSnapshot advance({
    required WeatherPhysicsSnapshot weather,
    required double surfaceTemperatureCelsius,
    required double netHeatFluxWattsPerM2,
    required double dtSeconds,
    double warmClearanceSuppression01 = 0,
    double maxSnowDepthM = 0.5,
    double relativeHumidity = 0.8,
  }) {
    if (!surfaceTemperatureCelsius.isFinite ||
        !netHeatFluxWattsPerM2.isFinite ||
        !dtSeconds.isFinite ||
        !warmClearanceSuppression01.isFinite ||
        !maxSnowDepthM.isFinite ||
        !relativeHumidity.isFinite ||
        dtSeconds < 0 ||
        warmClearanceSuppression01 < 0 ||
        warmClearanceSuppression01 > 1 ||
        relativeHumidity < 0 ||
        relativeHumidity > 1 ||
        materialDissolution01 < 0 ||
        materialDissolution01 > 1 ||
        maxSnowDepthM <= 0) {
      throw ArgumentError('invalid weather surface step inputs');
    }
    final beforeSnow = snowDepthM;
    final beforeWater = waterFilmDepthM;
    final canSettle =
        weather.precipitationKind == PrecipitationKind.snow &&
        surfaceTemperatureCelsius <= 0.5;
    final requestedDeposit = canSettle
        ? math.max(0.0, weather.snowAccumulationRateMps) *
              (1.0 - warmClearanceSuppression01) *
              (1.0 - materialDissolution01 * 0.4) *
              dtSeconds
        : 0.0;
    final deposited = math.min(
      math.max(0.0, maxSnowDepthM - snowDepthM),
      requestedDeposit,
    );
    snowDepthM += math.max(0.0, deposited);
    final availableEnergy = math.max(0.0, netHeatFluxWattsPerM2) * dtSeconds;
    final meltDepth = surfaceTemperatureCelsius > 0.5
        ? math.min(
            snowDepthM,
            availableEnergy / (snowBulkDensityKgM3 * snowLatentHeatJPerKg),
          )
        : 0.0;
    snowDepthM -= meltDepth;
    waterFilmDepthM += meltDepth;
    // A thin film evaporates slowly only when the surface is above freezing.
    // The humidity term keeps a damp cold room wet while allowing a heated,
    // ventilated surface to dry over hours rather than snapping to zero.
    final evaporationRateMps = surfaceTemperatureCelsius > 0.5
        ? ((surfaceTemperatureCelsius - 0.5) * (1.0 - relativeHumidity) * 2e-8)
              .clamp(0.0, 2e-6)
              .toDouble()
        : 0.0;
    final evaporated = math.min(
      waterFilmDepthM,
      evaporationRateMps * dtSeconds,
    );
    waterFilmDepthM -= evaporated;
    final thermalTarget = math.max(
      warmClearanceSuppression01 * 0.8,
      math.max(
        surfaceTemperatureCelsius > 0.5
            ? ((surfaceTemperatureCelsius - 0.5) / 12.0)
                  .clamp(0.0, 1.0)
                  .toDouble()
            : 0.0,
        (netHeatFluxWattsPerM2 / 250.0).clamp(0.0, 1.0).toDouble(),
      ),
    );
    final memoryBlend = 1.0 - math.exp(-dtSeconds / 900.0);
    materialDissolution01 +=
        (thermalTarget - materialDissolution01) * memoryBlend;
    final overflow = math.max(0.0, requestedDeposit - deposited);
    _validateState();
    return WeatherSurfaceSnapshot(
      snowDepthM: snowDepthM,
      waterFilmDepthM: waterFilmDepthM,
      depositedDepthM: snowDepthM - beforeSnow + meltDepth,
      meltedDepthM: meltDepth,
      evaporatedDepthM: evaporated,
      meltEnergyJoulesPerM2:
          meltDepth * snowBulkDensityKgM3 * snowLatentHeatJPerKg,
      overflowDepthM: overflow,
      previousWaterFilmDepthM: beforeWater,
      materialDissolution01: materialDissolution01,
    );
  }

  void _validateState() {
    if (!snowDepthM.isFinite ||
        !waterFilmDepthM.isFinite ||
        !materialDissolution01.isFinite ||
        snowDepthM < 0 ||
        waterFilmDepthM < 0 ||
        materialDissolution01 < 0 ||
        materialDissolution01 > 1) {
      throw ArgumentError('weather surface state must be finite and >= 0');
    }
  }
}

final class WeatherSurfaceSnapshot {
  final double snowDepthM;
  final double waterFilmDepthM;
  final double depositedDepthM;
  final double meltedDepthM;
  final double evaporatedDepthM;
  final double meltEnergyJoulesPerM2;
  final double overflowDepthM;
  final double previousWaterFilmDepthM;
  final double materialDissolution01;

  const WeatherSurfaceSnapshot({
    required this.snowDepthM,
    required this.waterFilmDepthM,
    required this.depositedDepthM,
    required this.meltedDepthM,
    required this.evaporatedDepthM,
    required this.meltEnergyJoulesPerM2,
    required this.overflowDepthM,
    required this.previousWaterFilmDepthM,
    required this.materialDissolution01,
  });

  Map<String, double> toJson() => {
    'snowDepthM': snowDepthM,
    'waterFilmDepthM': waterFilmDepthM,
    'depositedDepthM': depositedDepthM,
    'meltedDepthM': meltedDepthM,
    'evaporatedDepthM': evaporatedDepthM,
    'meltEnergyJoulesPerM2': meltEnergyJoulesPerM2,
    'overflowDepthM': overflowDepthM,
    'previousWaterFilmDepthM': previousWaterFilmDepthM,
    'materialDissolution01': materialDissolution01,
  };
}

/// Small, renderer-independent model for precipitation, wind and heat flow.
///
/// The coefficients are deliberately explicit and bounded. They are not a
/// full CFD solver; they provide stable, explainable inputs for particles,
/// fog, audio and room temperature while preserving conservation direction:
/// shelter reduces exposure, insulation reduces heat exchange, and internal
/// heat raises the room temperature.
final class WeatherPhysics {
  static const _rainTerminalMps = 8.8;
  static const _sleetTerminalMps = 5.5;
  static const _snowTerminalMps = 0.9;
  static const _hailTerminalMps = 18.0;
  static const _snowBulkDensityKgM3 = 120.0;

  static WeatherPhysicsSnapshot evaluate(WeatherPhysicsInput input) {
    input.validate();
    final weather = input.weather;
    final shelter = input.shelterFactor;
    final exposure = 1.0 - shelter * 0.85;
    final windExposure = 1.0 - shelter * 0.9;
    final windSpeed = weather.windSpeedMps * windExposure;
    final windVelocity = Vec3(
      math.cos(weather.windDirectionRadians) * windSpeed,
      0,
      math.sin(weather.windDirectionRadians) * windSpeed,
    );
    final kind = weather.effectivePrecipitationKind;
    final intensity = weather.rainIntensity.clamp(0.0, 1.0).toDouble();
    final massFlux = _massFlux(kind, intensity) * exposure;
    final terminal = _terminalSpeed(kind);
    final snowRate = kind == PrecipitationKind.snow
        ? massFlux / _snowBulkDensityKgM3
        : 0.0;
    final impactEnergy = kind == PrecipitationKind.none
        ? 0.0
        : 0.5 * massFlux * terminal * terminal;
    final convective = 5.7 + 3.8 * windSpeed;
    final heatConductance =
        convective *
        input.surfaceAreaM2 *
        exposure /
        input.insulationResistance;
    // Exact solution of dT/dt = k * (equilibrium - T). Unlike a forward
    // Euler step this cannot overshoot when a host advances a long frame.
    final equilibrium =
        weather.outsideTemperatureCelsius +
        input.internalHeatWatts / heatConductance;
    final relaxation = heatConductance / input.thermalMassJoulesPerKelvin;
    final nextRoom =
        equilibrium +
        (input.roomTemperatureCelsius - equilibrium) *
            math.exp(-relaxation * input.dtSeconds);
    final dewPoint = _dewPoint(
      input.roomTemperatureCelsius,
      input.relativeHumidity,
    );
    return WeatherPhysicsSnapshot(
      precipitationKind: kind,
      windVelocityMps: windVelocity,
      effectiveWindSpeedMps: windSpeed,
      exposureFactor: exposure,
      precipitationMassFluxKgM2S: massFlux,
      terminalFallSpeedMps: terminal,
      snowAccumulationRateMps: snowRate,
      impactEnergyFluxWattsPerM2: impactEnergy,
      convectiveConductanceWPerM2K: convective,
      nextRoomTemperatureCelsius: nextRoom,
      dewPointCelsius: dewPoint,
      condensationRisk: input.roomTemperatureCelsius <= dewPoint,
    );
  }

  /// Evaluates conductive warm-air clearance at one world point.
  ///
  /// Outside each source radius, steady spherical conduction gives
  /// `deltaT = Q / (4 * pi * k * r)`. The source temperature caps that rise,
  /// so a tiny heater cannot create an unbounded hot halo. The returned radius
  /// is the largest source radius at which the local temperature reaches the
  /// supplied dew point.
  static WarmClearanceSnapshot evaluateWarmClearance({
    required Vec3 samplePosition,
    required double ambientTemperatureCelsius,
    required double dewPointCelsius,
    required Iterable<WarmObjectSource> sources,
    double airThermalConductivityWPerMK = 0.026,
  }) {
    if (!_finiteVec(samplePosition) ||
        !ambientTemperatureCelsius.isFinite ||
        !dewPointCelsius.isFinite ||
        !airThermalConductivityWPerMK.isFinite ||
        airThermalConductivityWPerMK <= 0) {
      throw ArgumentError('warm-clearance inputs must be finite and valid');
    }
    var temperatureRise = 0.0;
    var clearanceRadius = 0.0;
    final threshold = dewPointCelsius - ambientTemperatureCelsius;
    for (final source in sources) {
      source.validate();
      final offset = samplePosition - source.position;
      final distance = math.max(source.radiusM, offset.length);
      final sourceRise = math.max(
        0.0,
        source.surfaceTemperatureCelsius - ambientTemperatureCelsius,
      );
      final conductiveRise =
          source.heatOutputWatts /
          (4.0 * math.pi * airThermalConductivityWPerMK * distance);
      temperatureRise += math.min(sourceRise, conductiveRise);
      if (threshold > 0) {
        final radius =
            source.heatOutputWatts /
            (4.0 * math.pi * airThermalConductivityWPerMK * threshold);
        clearanceRadius = math.max(
          clearanceRadius,
          math.min(radius, source.radiusM * 100.0),
        );
      }
    }
    final localTemperature = ambientTemperatureCelsius + temperatureRise;
    final suppression = threshold <= 0
        ? 1.0
        : ((localTemperature - dewPointCelsius) / math.max(1.0, threshold))
              .clamp(0.0, 1.0)
              .toDouble();
    return WarmClearanceSnapshot(
      temperatureIncreaseCelsius: temperatureRise,
      localTemperatureCelsius: localTemperature,
      clearanceRadiusM: clearanceRadius,
      condensationSuppression01: suppression,
      frostFree: localTemperature > dewPointCelsius,
    );
  }

  static double _massFlux(PrecipitationKind kind, double intensity) {
    if (kind == PrecipitationKind.none) return 0.0;
    // 0.18..1.8 mm/h water equivalent, expressed as kg/m²/s.
    final waterEquivalent = 0.00005 + intensity * 0.00045;
    return kind == PrecipitationKind.hail
        ? waterEquivalent * 0.75
        : waterEquivalent;
  }

  static double _terminalSpeed(PrecipitationKind kind) {
    return switch (kind) {
      PrecipitationKind.none => 0.0,
      PrecipitationKind.rain => _rainTerminalMps,
      PrecipitationKind.sleet => _sleetTerminalMps,
      PrecipitationKind.snow => _snowTerminalMps,
      PrecipitationKind.hail => _hailTerminalMps,
    };
  }

  static double _dewPoint(double temperatureCelsius, double humidity) {
    const a = 17.62;
    const b = 243.12;
    final relative = humidity.clamp(0.0001, 1.0).toDouble();
    final gamma =
        math.log(relative) + a * temperatureCelsius / (b + temperatureCelsius);
    return b * gamma / (a - gamma);
  }
}
