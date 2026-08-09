import 'dart:convert';
import 'dart:math' as math;

import '../house/inventory.dart';

const automationScenarioSchemaVersion = 1;

enum AutomationStepPhase { fixture, embodied }

enum AutomationStepKind {
  awaitReady,
  loadFixture,
  moveRoute,
  lookAt,
  awaitFocus,
  interact,
  assertState,
  assertRooms,
  capture,
}

final class AutomationVec3 {
  final double x;
  final double y;
  final double z;

  const AutomationVec3(this.x, this.y, this.z);

  static AutomationVec3? parse(Object? value) {
    if (value is! List || value.length != 3) return null;
    final numbers = value.map(_finiteDouble).toList();
    if (numbers.any((number) => number == null)) return null;
    return AutomationVec3(numbers[0]!, numbers[1]!, numbers[2]!);
  }
}

final class AutomationPose {
  final String id;
  final AutomationVec3 position;
  final double yaw;
  final double pitch;
  final String room;

  const AutomationPose({
    required this.id,
    required this.position,
    required this.yaw,
    required this.pitch,
    required this.room,
  });
}

final class AutomationRoute {
  final String id;
  final List<String> rooms;
  final List<String> portals;
  final int tickBudget;

  const AutomationRoute({
    required this.id,
    required this.rooms,
    required this.portals,
    required this.tickBudget,
  });
}

final class AutomationFixture {
  final int seed;
  final String startPose;
  final Map<String, String> doors;

  const AutomationFixture({
    required this.seed,
    required this.startPose,
    this.doors = const {},
  });
}

final class AutomationRuntime {
  final double fixedDt;
  final int maxTicks;

  const AutomationRuntime({required this.fixedDt, required this.maxTicks});
}

final class AutomationStep {
  final String id;
  final AutomationStepKind kind;
  final AutomationStepPhase phase;
  final String? reference;
  final String? mode;
  final int tickBudget;

  const AutomationStep({
    required this.id,
    required this.kind,
    required this.phase,
    this.reference,
    this.mode,
    this.tickBudget = 1,
  });
}

final class AutomationScenario {
  final int schemaVersion;
  final String id;
  final Set<String> tags;
  final AutomationFixture fixture;
  final AutomationRuntime runtime;
  final List<AutomationPose> poses;
  final List<AutomationRoute> routes;
  final List<AutomationStep> steps;

  const AutomationScenario({
    required this.schemaVersion,
    required this.id,
    required this.tags,
    required this.fixture,
    required this.runtime,
    required this.poses,
    required this.routes,
    required this.steps,
  });

  static AutomationScenario decode(String source) {
    final value = jsonDecode(source);
    if (value is! Map) {
      throw const FormatException('scenario root must be an object');
    }
    return _decodeMap(Map<String, Object?>.from(value));
  }

  static AutomationScenario _decodeMap(Map<String, Object?> json) {
    final fixture = _map(json['fixture'], 'fixture');
    final runtime = _map(json['runtime'], 'runtime');
    final rawPoses = _list(json['poses'], 'poses');
    final rawRoutes = _list(json['routes'], 'routes');
    final rawSteps = _list(json['steps'], 'steps');
    return AutomationScenario(
      schemaVersion: _int(json['schemaVersion'], 'schemaVersion'),
      id: _string(json['id'], 'id'),
      tags: _strings(json['tags'] ?? const [], 'tags').toSet(),
      fixture: AutomationFixture(
        seed: _int(fixture['seed'], 'fixture.seed'),
        startPose: _string(fixture['startPose'], 'fixture.startPose'),
        doors: _stringMap(fixture['doors'] ?? const {}, 'fixture.doors'),
      ),
      runtime: AutomationRuntime(
        fixedDt: _double(runtime['fixedDt'], 'runtime.fixedDt'),
        maxTicks: _int(runtime['maxTicks'], 'runtime.maxTicks'),
      ),
      poses: rawPoses.map(_decodePose).toList(),
      routes: rawRoutes.map(_decodeRoute).toList(),
      steps: rawSteps.map(_decodeStep).toList(),
    );
  }
}

final class AutomationScenarioCatalog {
  final Set<String> rooms;
  final Set<String> portals;
  final Set<String> targets;
  final Set<String> cameras;
  final Map<String, AutomationRoute> routes;

  const AutomationScenarioCatalog({
    required this.rooms,
    required this.portals,
    required this.targets,
    required this.cameras,
    required this.routes,
  });

  factory AutomationScenarioCatalog.fromInventory({
    required Set<String> rooms,
    required Set<String> portals,
    required Set<String> cameras,
    required Map<String, AutomationRoute> routes,
    required HouseInventory inventory,
    Set<String> additionalTargets = const {},
  }) => AutomationScenarioCatalog(
    rooms: rooms,
    portals: portals,
    cameras: cameras,
    routes: routes,
    targets: {
      ...additionalTargets,
      for (final placement in inventory.pickablePlacements)
        placement.focusId ?? placement.id,
    },
  );
}

final class AutomationScenarioCompiler {
  final AutomationScenarioCatalog catalog;

  const AutomationScenarioCompiler(this.catalog);

  List<String> validate(AutomationScenario scenario) {
    final errors = <String>[];
    if (scenario.schemaVersion != automationScenarioSchemaVersion) {
      errors.add('schemaVersion must be $automationScenarioSchemaVersion');
    }
    if (!_stableId(scenario.id)) errors.add('id must be a stable lowercase ID');
    if (scenario.runtime.fixedDt <= 0 || !scenario.runtime.fixedDt.isFinite) {
      errors.add('runtime.fixedDt must be finite and positive');
    }
    if (scenario.runtime.maxTicks <= 0) {
      errors.add('runtime.maxTicks must be positive');
    }
    _unique(scenario.poses.map((pose) => pose.id), 'pose', errors);
    _unique(scenario.routes.map((route) => route.id), 'route', errors);
    _unique(scenario.steps.map((step) => step.id), 'step', errors);
    final poseIds = scenario.poses.map((pose) => pose.id).toSet();
    final routeIds = scenario.routes.map((route) => route.id).toSet();
    if (!poseIds.contains(scenario.fixture.startPose)) {
      errors.add('fixture.startPose is unknown');
    }
    for (final pose in scenario.poses) {
      if (!_stableId(pose.id)) errors.add('pose ${pose.id} has an invalid ID');
      if (!_finitePose(pose)) {
        errors.add('pose ${pose.id} contains a non-finite value');
      }
      if (!catalog.rooms.contains(pose.room)) {
        errors.add('pose ${pose.id} has an unknown room');
      }
    }
    for (final route in scenario.routes) {
      if (route.rooms.length != route.portals.length + 1) {
        errors.add('route ${route.id} must have rooms = portals + 1');
      }
      if (route.tickBudget <= 0) {
        errors.add('route ${route.id} tickBudget must be positive');
      }
      for (final room in route.rooms) {
        if (!catalog.rooms.contains(room)) {
          errors.add('route ${route.id} has unknown room $room');
        }
      }
      for (final portal in route.portals) {
        if (!catalog.portals.contains(portal)) {
          errors.add('route ${route.id} has unknown portal $portal');
        }
      }
      final authored = catalog.routes[route.id];
      if (authored != null && authored.rooms.length != route.rooms.length) {
        errors.add('route ${route.id} conflicts with authored route topology');
      }
    }
    var totalTicks = 0;
    for (final step in scenario.steps) {
      if (step.tickBudget <= 0) {
        errors.add('step ${step.id} tickBudget must be positive');
      }
      totalTicks += step.tickBudget;
      if (step.phase == AutomationStepPhase.embodied &&
          step.kind == AutomationStepKind.loadFixture) {
        errors.add('step ${step.id} loads a fixture during embodied phase');
      }
      if (step.kind == AutomationStepKind.moveRoute) {
        if (step.reference == null || !routeIds.contains(step.reference)) {
          errors.add('step ${step.id} references an unknown route');
        }
      } else if (step.kind == AutomationStepKind.lookAt ||
          step.kind == AutomationStepKind.awaitFocus ||
          step.kind == AutomationStepKind.assertState) {
        if (step.reference == null ||
            !catalog.targets.contains(step.reference)) {
          errors.add('step ${step.id} references an unknown target');
        }
      } else if (step.kind == AutomationStepKind.capture &&
          (step.reference == null ||
              !catalog.cameras.contains(step.reference))) {
        errors.add('step ${step.id} references an unknown camera');
      }
      if (step.kind == AutomationStepKind.interact &&
          !const ['press', 'hold'].contains(step.mode)) {
        errors.add('step ${step.id} has an invalid interaction mode');
      }
    }
    if (totalTicks > scenario.runtime.maxTicks) {
      errors.add('step tick budgets exceed runtime.maxTicks');
    }
    return errors;
  }

  AutomationScenario compile(AutomationScenario scenario) {
    final errors = validate(scenario);
    if (errors.isNotEmpty) throw FormatException(errors.join('; '));
    return scenario;
  }
}

AutomationPose _decodePose(Object? value) {
  final map = _map(value, 'pose');
  final position = AutomationVec3.parse(map['position']);
  if (position == null) {
    throw const FormatException('pose.position must be finite [x,y,z]');
  }
  return AutomationPose(
    id: _string(map['id'], 'pose.id'),
    position: position,
    yaw: _double(map['yaw'], 'pose.yaw'),
    pitch: _double(map['pitch'], 'pose.pitch'),
    room: _string(map['room'], 'pose.room'),
  );
}

AutomationRoute _decodeRoute(Object? value) {
  final map = _map(value, 'route');
  return AutomationRoute(
    id: _string(map['id'], 'route.id'),
    rooms: _strings(map['rooms'], 'route.rooms'),
    portals: _strings(map['portals'], 'route.portals'),
    tickBudget: _int(map['tickBudget'] ?? 1, 'route.tickBudget'),
  );
}

AutomationStep _decodeStep(Object? value) {
  final map = _map(value, 'step');
  final rawKind = _string(map['do'] ?? map['assert'], 'step.do');
  final kind = switch (rawKind) {
    'awaitReady' => AutomationStepKind.awaitReady,
    'loadFixture' => AutomationStepKind.loadFixture,
    'moveRoute' => AutomationStepKind.moveRoute,
    'lookAt' => AutomationStepKind.lookAt,
    'awaitFocus' => AutomationStepKind.awaitFocus,
    'interact' => AutomationStepKind.interact,
    'state' => AutomationStepKind.assertState,
    'rooms' => AutomationStepKind.assertRooms,
    'capture' => AutomationStepKind.capture,
    _ => throw FormatException('unknown step command/assertion $rawKind'),
  };
  final phase = switch (map['phase'] ?? 'embodied') {
    'fixture' => AutomationStepPhase.fixture,
    'embodied' => AutomationStepPhase.embodied,
    _ => throw const FormatException('step.phase must be fixture or embodied'),
  };
  return AutomationStep(
    id: _string(map['id'], 'step.id'),
    kind: kind,
    phase: phase,
    reference:
        map['route'] as String? ??
        map['target'] as String? ??
        map['camera'] as String?,
    mode: map['mode'] as String?,
    tickBudget: _int(map['tickBudget'] ?? 1, 'step.tickBudget'),
  );
}

Map<String, Object?> _map(Object? value, String name) {
  if (value is! Map) throw FormatException('$name must be an object');
  return Map<String, Object?>.from(value);
}

List<Object?> _list(Object? value, String name) {
  if (value is! List) throw FormatException('$name must be an array');
  return value.cast<Object?>();
}

String _string(Object? value, String name) {
  if (value is! String || value.trim().isEmpty) {
    throw FormatException('$name must be a non-empty string');
  }
  return value;
}

List<String> _strings(Object? value, String name) {
  if (value is! List || value.any((item) => item is! String)) {
    throw FormatException('$name must be an array of strings');
  }
  return value.cast<String>();
}

Map<String, String> _stringMap(Object? value, String name) {
  final map = _map(value, name);
  if (map.values.any((item) => item is! String)) {
    throw FormatException('$name values must be strings');
  }
  return map.map((key, value) => MapEntry(key, value as String));
}

int _int(Object? value, String name) {
  if (value is! int) throw FormatException('$name must be an integer');
  return value;
}

double _double(Object? value, String name) {
  final result = _finiteDouble(value);
  if (result == null) throw FormatException('$name must be finite');
  return result;
}

double? _finiteDouble(Object? value) {
  final result = value is num ? value.toDouble() : null;
  return result != null && result.isFinite ? result : null;
}

bool _stableId(String value) =>
    RegExp(r'^[a-z0-9][a-z0-9._-]*$').hasMatch(value);

bool _finitePose(AutomationPose pose) =>
    pose.yaw.isFinite &&
    pose.pitch.isFinite &&
    [
      pose.position.x,
      pose.position.y,
      pose.position.z,
    ].every((value) => value.isFinite) &&
    pose.position.x.abs() <= 1000 &&
    pose.position.y.abs() <= 1000 &&
    pose.position.z.abs() <= 1000 &&
    pose.yaw.abs() <= math.pi * 100 &&
    pose.pitch.abs() <= math.pi * 100;

void _unique(Iterable<String> values, String kind, List<String> errors) {
  final seen = <String>{};
  for (final value in values) {
    if (!seen.add(value)) errors.add('duplicate $kind ID $value');
  }
}
