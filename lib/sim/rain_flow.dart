import '../engine/math3.dart';

bool _finiteVec(Vec3 value) =>
    value.x.isFinite && value.y.isFinite && value.z.isFinite;

/// A roof catchment authored by the host. The renderer never infers roofs
/// from triangles: a catchment declares the gravity-aligned path that water
/// follows and the drain it feeds.
final class RainRoofCatchment {
  final String id;
  final Vec3 highPoint;
  final Vec3 drainPoint;
  final double areaM2;
  final double runoffCoefficient;
  final double flowCapacityKgPerSecond;
  final String drainId;

  const RainRoofCatchment({
    required this.id,
    required this.highPoint,
    required this.drainPoint,
    required this.areaM2,
    required this.runoffCoefficient,
    required this.flowCapacityKgPerSecond,
    required this.drainId,
  });

  void validate() {
    if (id.isEmpty ||
        drainId.isEmpty ||
        !_finiteVec(highPoint) ||
        !_finiteVec(drainPoint) ||
        !areaM2.isFinite ||
        areaM2 <= 0 ||
        !runoffCoefficient.isFinite ||
        runoffCoefficient < 0 ||
        runoffCoefficient > 1 ||
        !flowCapacityKgPerSecond.isFinite ||
        flowCapacityKgPerSecond <= 0 ||
        drainPoint.y >= highPoint.y) {
      throw ArgumentError('invalid rain roof catchment $id');
    }
  }
}

/// An authored gutter/downpipe outlet. Capacity is expressed as a mass rate
/// so a blocked or undersized drain naturally produces visible overflow.
final class RainDrain {
  final String id;
  final Vec3 inlet;
  final Vec3 outlet;
  final double capacityKgPerSecond;

  const RainDrain({
    required this.id,
    required this.inlet,
    required this.outlet,
    required this.capacityKgPerSecond,
  });

  void validate() {
    if (id.isEmpty ||
        !_finiteVec(inlet) ||
        !_finiteVec(outlet) ||
        !capacityKgPerSecond.isFinite ||
        capacityKgPerSecond <= 0 ||
        outlet.y > inlet.y + 0.001) {
      throw ArgumentError('invalid rain drain $id');
    }
  }
}

final class RainFlowSegment {
  final String id;
  final Vec3 start;
  final Vec3 end;
  final double massFlowKgPerSecond;
  final double widthM;

  const RainFlowSegment({
    required this.id,
    required this.start,
    required this.end,
    required this.massFlowKgPerSecond,
    required this.widthM,
  });

  void validate() {
    if (id.isEmpty ||
        !_finiteVec(start) ||
        !_finiteVec(end) ||
        !massFlowKgPerSecond.isFinite ||
        massFlowKgPerSecond < 0 ||
        !widthM.isFinite ||
        widthM <= 0 ||
        (end - start).length < 1e-5) {
      throw ArgumentError('invalid rain flow segment $id');
    }
  }
}

/// Mutable host-owned accumulation. Keeping film mass outside Pixeldart lets
/// gameplay, audio, saves, and alternate renderers observe the same water.
final class RainFlowState {
  final Map<String, double> roofFilmKg;

  RainFlowState([Map<String, double>? roofFilmKg])
    : roofFilmKg = {...?roofFilmKg};
}

final class RainFlowStep {
  final List<RainFlowSegment> segments;
  final double capturedMassKg;
  final double routedMassKg;
  final double drainedMassKg;
  final double overflowMassKg;
  final double retainedFilmKg;

  const RainFlowStep({
    required this.segments,
    required this.capturedMassKg,
    required this.routedMassKg,
    required this.drainedMassKg,
    required this.overflowMassKg,
    required this.retainedFilmKg,
  });
}

/// Deterministic, capacity-limited roof runoff. It is deliberately small:
/// this is a stable visual/physical bridge, not a CFD solver. Mass is
/// conserved, roof slope is explicit, and drain back-pressure becomes an
/// overflow segment rather than disappearing.
final class RainFlowNetwork {
  final List<RainRoofCatchment> roofs;
  final Map<String, RainDrain> drains;

  RainFlowNetwork({
    required Iterable<RainRoofCatchment> roofs,
    required Iterable<RainDrain> drains,
  }) : roofs = List.unmodifiable(roofs),
       drains = {for (final drain in drains) drain.id: drain} {
    for (final roof in this.roofs) {
      roof.validate();
      if (!this.drains.containsKey(roof.drainId)) {
        throw ArgumentError(
          'roof ${roof.id} references missing drain ${roof.drainId}',
        );
      }
    }
    for (final drain in this.drains.values) {
      drain.validate();
    }
  }

  RainFlowStep step({
    required RainFlowState state,
    required double precipitationMassFluxKgM2S,
    required double dtSeconds,
    double exposure01 = 1,
  }) {
    if (!precipitationMassFluxKgM2S.isFinite ||
        precipitationMassFluxKgM2S < 0 ||
        !dtSeconds.isFinite ||
        dtSeconds < 0 ||
        !exposure01.isFinite ||
        exposure01 < 0 ||
        exposure01 > 1) {
      throw ArgumentError('invalid rain flow step inputs');
    }
    final segments = <RainFlowSegment>[];
    var captured = 0.0;
    var routed = 0.0;
    var drained = 0.0;
    var overflow = 0.0;
    var retained = 0.0;
    final drainLoad = <String, double>{};
    for (final roof in roofs) {
      final film = (state.roofFilmKg[roof.id] ?? 0).clamp(0.0, double.infinity);
      final incoming =
          precipitationMassFluxKgM2S *
          roof.areaM2 *
          roof.runoffCoefficient *
          exposure01 *
          dtSeconds;
      final available = film + incoming;
      captured += incoming;
      final roofRouted = (roof.flowCapacityKgPerSecond * dtSeconds)
          .clamp(0.0, available)
          .toDouble();
      final remaining = available - roofRouted;
      state.roofFilmKg[roof.id] = remaining;
      retained += remaining;
      routed += roofRouted;
      if (roofRouted > 0) {
        segments.add(
          RainFlowSegment(
            id: '${roof.id}:slope',
            start: roof.highPoint,
            end: roof.drainPoint,
            massFlowKgPerSecond:
                roofRouted / (dtSeconds <= 1e-6 ? 1 : dtSeconds),
            widthM: 0.018 + roofRouted.clamp(0.0, 0.02) * 0.6,
          ),
        );
      }
      drainLoad[roof.drainId] = (drainLoad[roof.drainId] ?? 0) + roofRouted;
    }
    for (final roof in roofs) {
      final load = drainLoad[roof.drainId] ?? 0;
      if (load <= 0) continue;
      final drain = drains[roof.drainId]!;
      final accepted = load
          .clamp(0.0, drain.capacityKgPerSecond * dtSeconds)
          .toDouble();
      final rejected = load - accepted;
      drained += accepted;
      overflow += rejected;
      if (accepted > 0) {
        segments.add(
          RainFlowSegment(
            id: '${drain.id}:downpipe',
            start: drain.inlet,
            end: drain.outlet,
            massFlowKgPerSecond: accepted / (dtSeconds <= 1e-6 ? 1 : dtSeconds),
            widthM: 0.014 + accepted.clamp(0.0, 0.02) * 0.5,
          ),
        );
      }
      if (rejected > 0) {
        segments.add(
          RainFlowSegment(
            id: '${drain.id}:overflow',
            start: drain.inlet,
            end: drain.inlet + Vec3(0, -0.55, 0),
            massFlowKgPerSecond: rejected / (dtSeconds <= 1e-6 ? 1 : dtSeconds),
            widthM: 0.012 + rejected.clamp(0.0, 0.02) * 0.4,
          ),
        );
      }
      drainLoad[roof.drainId] = 0;
    }
    for (final segment in segments) {
      segment.validate();
    }
    return RainFlowStep(
      segments: List.unmodifiable(segments),
      capturedMassKg: captured,
      routedMassKg: routed,
      drainedMassKg: drained,
      overflowMassKg: overflow,
      retainedFilmKg: retained,
    );
  }
}
