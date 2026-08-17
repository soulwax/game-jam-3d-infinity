import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/sim/rain_flow.dart';

void main() {
  final network = RainFlowNetwork(
    roofs: [
      RainRoofCatchment(
        id: 'west-slope',
        highPoint: Vec3(0, 8, 0),
        drainPoint: Vec3(0, 6, 4),
        areaM2: 20,
        runoffCoefficient: 1,
        flowCapacityKgPerSecond: 0.5,
        drainId: 'north-downpipe',
      ),
    ],
    drains: [
      RainDrain(
        id: 'north-downpipe',
        inlet: Vec3(0, 6, 4),
        outlet: Vec3(0, 0, 4),
        capacityKgPerSecond: 0.2,
      ),
    ],
  );
  final state = RainFlowState();
  final step = network.step(
    state: state,
    precipitationMassFluxKgM2S: 0.1,
    dtSeconds: 1,
  );
  _require(
    step.capturedMassKg == 2,
    'roof capture must conserve incoming mass',
  );
  _require(step.routedMassKg == 0.5, 'roof capacity must bound routed mass');
  _require(
    step.drainedMassKg == 0.2,
    'drain capacity must bound accepted mass',
  );
  _require(
    step.overflowMassKg == 0.3,
    'blocked drain must expose overflow mass',
  );
  _require(
    step.segments.any((segment) => segment.id == 'west-slope:slope'),
    'roof slope segment missing',
  );
  _require(
    step.segments.any((segment) => segment.id == 'north-downpipe:overflow'),
    'overflow segment missing',
  );
  _require(
    state.roofFilmKg['west-slope'] == 1.5,
    'unrouted roof film must linger instead of disappearing',
  );

  final sheltered = network.step(
    state: state,
    precipitationMassFluxKgM2S: 0.1,
    dtSeconds: 1,
    exposure01: 0,
  );
  _require(sheltered.capturedMassKg == 0, 'shelter must block new capture');
  print(
    'rain flow: roof interception, slope routing, drain capacity and overflow pass',
  );
}

void _require(bool condition, String message) {
  if (!condition) throw StateError(message);
}
