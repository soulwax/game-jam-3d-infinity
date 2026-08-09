import 'dart:convert';
import 'dart:math' as math;

import 'automation_scenario.dart';
import '../engine/math3.dart';
import '../house/house.dart';

const visualCaptureManifestSchemaVersion = 1;

enum VisualCaptureOwner { embodied, synthetic }

enum VisualCaptureMode { clean, finalMode, debug }

final class VisualCaptureCamera {
  final Vec3 position;
  final double yaw;
  final double pitch;
  final double fov;

  const VisualCaptureCamera({
    required this.position,
    required this.yaw,
    required this.pitch,
    required this.fov,
  });
}

final class VisualCaptureFixture {
  final int seed;
  final int day;
  final double hour;
  final String weather;
  final String room;
  final Map<String, String> portals;
  final Map<String, String> shutters;
  final Map<String, String> mantles;

  const VisualCaptureFixture({
    required this.seed,
    required this.day,
    required this.hour,
    required this.weather,
    required this.room,
    required this.portals,
    required this.shutters,
    required this.mantles,
  });
}

final class VisualCaptureEntry {
  final String id;
  final String pairId;
  final VisualCaptureOwner owner;
  final VisualCaptureMode mode;
  final String scenarioId;
  final String sourceWaypoint;
  final VisualCaptureCamera camera;
  final int viewportWidth;
  final int viewportHeight;
  final String profile;
  final VisualCaptureFixture fixture;
  final List<String> requiredMetadata;

  const VisualCaptureEntry({
    required this.id,
    required this.pairId,
    required this.owner,
    required this.mode,
    required this.scenarioId,
    required this.sourceWaypoint,
    required this.camera,
    required this.viewportWidth,
    required this.viewportHeight,
    required this.profile,
    required this.fixture,
    required this.requiredMetadata,
  });
}

final class VisualCaptureManifest {
  final int schemaVersion;
  final String houseId;
  final List<VisualCaptureEntry> captures;

  const VisualCaptureManifest({
    required this.schemaVersion,
    required this.houseId,
    required this.captures,
  });

  static VisualCaptureManifest decode(String source) {
    final decoded = jsonDecode(source);
    if (decoded is! Map) {
      throw const FormatException('capture manifest root must be an object');
    }
    final map = Map<String, Object?>.from(decoded);
    final rawCaptures = _list(map['captures'], 'captures');
    return VisualCaptureManifest(
      schemaVersion: _int(map['schemaVersion'], 'schemaVersion'),
      houseId: _string(map['houseId'], 'houseId'),
      captures: List.unmodifiable(rawCaptures.map(_decodeCapture)),
    );
  }

  List<String> validate({
    required House house,
    required Set<String> scenarioIds,
    required String expectedHouseId,
    Map<String, Set<String>> scenarioWaypoints = const {},
    Set<String> profiles = const {'safe', 'standard', 'high'},
  }) {
    final errors = <String>[];
    if (schemaVersion != visualCaptureManifestSchemaVersion) {
      errors.add('schemaVersion must be $visualCaptureManifestSchemaVersion');
    }
    if (houseId != expectedHouseId) {
      errors.add('manifest houseId does not match expected house');
    }
    final houseRoomIds = house.rooms.map((room) => room.id).toSet();
    final housePortalIds = house.portals.map((portal) => portal.id).toSet();
    final windowIds = {
      for (final room in house.rooms)
        for (final window in room.windows) window.id,
    };
    final mantleIds = {
      for (final room in house.rooms)
        for (final mantle in room.mantles) mantle.id,
    };
    _unique(captures.map((capture) => capture.id), 'capture', errors);
    for (final capture in captures) {
      if (!_stableId(capture.id) || !_stableId(capture.pairId)) {
        errors.add('capture ${capture.id} has an invalid ID');
      }
      if (!scenarioIds.contains(capture.scenarioId)) {
        errors.add('capture ${capture.id} references unknown scenario');
      } else if (scenarioWaypoints.containsKey(capture.scenarioId) &&
          !scenarioWaypoints[capture.scenarioId]!.contains(
            capture.sourceWaypoint,
          )) {
        errors.add('capture ${capture.id} references unknown source waypoint');
      }
      if (!profiles.contains(capture.profile)) {
        errors.add('capture ${capture.id} references unknown profile');
      }
      if (!houseRoomIds.contains(capture.fixture.room)) {
        errors.add('capture ${capture.id} references unknown room');
      }
      if (capture.fixture.day < 1 ||
          capture.fixture.hour < 0 ||
          capture.fixture.hour >= 24 ||
          !capture.fixture.hour.isFinite ||
          capture.fixture.weather.trim().isEmpty) {
        errors.add('capture ${capture.id} has invalid fixture time/weather');
      }
      _validateStateMap(
        capture.id,
        'portal',
        capture.fixture.portals,
        housePortalIds,
        const {'open', 'closed'},
        errors,
      );
      _validateStateMap(
        capture.id,
        'shutter',
        capture.fixture.shutters,
        windowIds,
        const {'open', 'closed'},
        errors,
      );
      _validateStateMap(
        capture.id,
        'mantle',
        capture.fixture.mantles,
        mantleIds,
        const {'on', 'off'},
        errors,
      );
      final camera = capture.camera;
      if (!_finiteVec3(camera.position) ||
          camera.position.x.abs() > 1000 ||
          camera.position.y.abs() > 1000 ||
          camera.position.z.abs() > 1000 ||
          !camera.yaw.isFinite ||
          !camera.pitch.isFinite ||
          camera.pitch.abs() > math.pi / 2 ||
          !camera.fov.isFinite ||
          camera.fov <= 0 ||
          camera.fov >= math.pi) {
        errors.add('capture ${capture.id} has an invalid camera transform');
      }
      if (capture.viewportWidth <= 0 || capture.viewportHeight <= 0) {
        errors.add('capture ${capture.id} has an invalid viewport');
      }
      if (capture.requiredMetadata.isEmpty) {
        errors.add('capture ${capture.id} has no required metadata');
      }
    }
    final byPair = <String, List<VisualCaptureEntry>>{};
    for (final capture in captures) {
      byPair.putIfAbsent(capture.pairId, () => []).add(capture);
    }
    for (final entry in byPair.entries) {
      final modes = entry.value.map((capture) => capture.mode).toSet();
      if (modes.length != 2 ||
          !modes.contains(VisualCaptureMode.clean) ||
          !modes.contains(VisualCaptureMode.finalMode)) {
        errors.add('capture pair ${entry.key} must contain clean and final');
      }
      if (entry.value.length != 2) {
        errors.add(
          'capture pair ${entry.key} must contain exactly two entries',
        );
      } else if (!_samePair(entry.value[0], entry.value[1])) {
        errors.add(
          'capture pair ${entry.key} has mismatched camera or fixture',
        );
      }
    }
    return errors;
  }

  /// Validates source waypoint provenance against decoded scenario files, so
  /// callers do not have to maintain a second hand-written waypoint catalog.
  List<String> validateAgainstScenarios({
    required House house,
    required Iterable<AutomationScenario> scenarios,
    required String expectedHouseId,
    Set<String> profiles = const {'safe', 'standard', 'high'},
  }) {
    final scenarioList = scenarios.toList(growable: false);
    final waypointMap = <String, Set<String>>{};
    for (final scenario in scenarioList) {
      final waypoints = <String>{};
      for (final route in scenario.routes) {
        waypoints.addAll(route.waypoints.map((waypoint) => waypoint.id));
      }
      waypointMap[scenario.id] = waypoints;
    }
    return validate(
      house: house,
      scenarioIds: waypointMap.keys.toSet(),
      expectedHouseId: expectedHouseId,
      scenarioWaypoints: waypointMap,
      profiles: profiles,
    );
  }
}

bool _samePair(VisualCaptureEntry a, VisualCaptureEntry b) {
  final aCamera = a.camera;
  final bCamera = b.camera;
  return a.owner == b.owner &&
      a.scenarioId == b.scenarioId &&
      a.sourceWaypoint == b.sourceWaypoint &&
      a.profile == b.profile &&
      a.viewportWidth == b.viewportWidth &&
      a.viewportHeight == b.viewportHeight &&
      aCamera.position.x == bCamera.position.x &&
      aCamera.position.y == bCamera.position.y &&
      aCamera.position.z == bCamera.position.z &&
      aCamera.yaw == bCamera.yaw &&
      aCamera.pitch == bCamera.pitch &&
      aCamera.fov == bCamera.fov &&
      _sameFixture(a.fixture, b.fixture);
}

bool _sameFixture(VisualCaptureFixture a, VisualCaptureFixture b) =>
    a.seed == b.seed &&
    a.day == b.day &&
    a.hour == b.hour &&
    a.weather == b.weather &&
    a.room == b.room &&
    _sameMap(a.portals, b.portals) &&
    _sameMap(a.shutters, b.shutters) &&
    _sameMap(a.mantles, b.mantles);

bool _sameMap(Map<String, String> a, Map<String, String> b) {
  if (a.length != b.length) return false;
  for (final entry in a.entries) {
    if (b[entry.key] != entry.value) return false;
  }
  return true;
}

VisualCaptureEntry _decodeCapture(Object? value) {
  final map = _map(value, 'capture');
  final source = _map(map['source'], 'capture.source');
  final camera = _map(map['camera'], 'capture.camera');
  final viewport = _map(map['viewport'], 'capture.viewport');
  final fixture = _map(map['fixture'], 'capture.fixture');
  return VisualCaptureEntry(
    id: _string(map['id'], 'capture.id'),
    pairId: _string(map['pairId'], 'capture.pairId'),
    owner: _enumValue(map['owner'], 'capture.owner', VisualCaptureOwner.values),
    mode: _captureMode(map['mode']),
    scenarioId: _string(source['scenario'], 'capture.source.scenario'),
    sourceWaypoint: _string(source['waypoint'], 'capture.source.waypoint'),
    camera: VisualCaptureCamera(
      position: _vec3(camera['position'], 'capture.camera.position'),
      yaw: _double(camera['yaw'], 'capture.camera.yaw'),
      pitch: _double(camera['pitch'], 'capture.camera.pitch'),
      fov: _double(camera['fov'], 'capture.camera.fov'),
    ),
    viewportWidth: _int(viewport['width'], 'capture.viewport.width'),
    viewportHeight: _int(viewport['height'], 'capture.viewport.height'),
    profile: _string(map['profile'], 'capture.profile'),
    fixture: VisualCaptureFixture(
      seed: _int(fixture['seed'], 'capture.fixture.seed'),
      day: _int(fixture['day'], 'capture.fixture.day'),
      hour: _double(fixture['hour'], 'capture.fixture.hour'),
      weather: _string(fixture['weather'], 'capture.fixture.weather'),
      room: _string(fixture['room'], 'capture.fixture.room'),
      portals: _stringMap(fixture['portals'], 'capture.fixture.portals'),
      shutters: _stringMap(fixture['shutters'], 'capture.fixture.shutters'),
      mantles: _stringMap(fixture['mantles'], 'capture.fixture.mantles'),
    ),
    requiredMetadata: _strings(
      map['requiredMetadata'],
      'capture.requiredMetadata',
    ),
  );
}

VisualCaptureMode _captureMode(Object? value) {
  if (value == 'final') return VisualCaptureMode.finalMode;
  return _enumValue(value, 'capture.mode', [
    VisualCaptureMode.clean,
    VisualCaptureMode.debug,
  ]);
}

void _validateStateMap(
  String captureId,
  String kind,
  Map<String, String> values,
  Set<String> known,
  Set<String> allowed,
  List<String> errors,
) {
  for (final entry in values.entries) {
    if (!known.contains(entry.key)) {
      errors.add('capture $captureId references unknown $kind ${entry.key}');
    }
    if (!allowed.contains(entry.value)) {
      errors.add('capture $captureId has invalid $kind state ${entry.value}');
    }
  }
}

bool _finiteVec3(Vec3 value) =>
    value.x.isFinite && value.y.isFinite && value.z.isFinite;

bool _stableId(String value) =>
    RegExp(r'^[a-z0-9][a-z0-9._-]*$').hasMatch(value);

void _unique(Iterable<String> values, String kind, List<String> errors) {
  final seen = <String>{};
  for (final value in values) {
    if (!seen.add(value)) errors.add('duplicate $kind ID $value');
  }
}

T _enumValue<T extends Enum>(Object? value, String name, List<T> values) {
  if (value is! String) throw FormatException('$name must be a string');
  for (final item in values) {
    if (item.name == value) return item;
  }
  throw FormatException('$name has an unsupported value');
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
  if (value is! num || !value.toDouble().isFinite) {
    throw FormatException('$name must be finite');
  }
  return value.toDouble();
}

Vec3 _vec3(Object? value, String name) {
  final list = _list(value, name);
  if (list.length != 3) throw FormatException('$name must have three values');
  return Vec3(
    _double(list[0], '$name.x'),
    _double(list[1], '$name.y'),
    _double(list[2], '$name.z'),
  );
}
