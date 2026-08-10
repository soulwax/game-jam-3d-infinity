import 'dart:convert';

import '../engine/math3.dart';
import 'house.dart';
import 'inventory.dart';

/// Authored sound emitters paired with precise inventory placements.
///
/// Positions are room-local metres in the same canonical coordinate space as
/// [HouseInventory]. The runtime model scale is applied exactly once when an
/// emitter is resolved to world space.
final class HouseSoundscape {
  final int schemaVersion;
  final String sourceRef;
  final List<HouseSoundEmitter> emitters;

  const HouseSoundscape({
    required this.schemaVersion,
    required this.sourceRef,
    required this.emitters,
  });

  factory HouseSoundscape.decode(String source) =>
      HouseSoundscape.fromJson(jsonDecode(source));

  factory HouseSoundscape.fromJson(Object? raw) {
    final map = _object(raw, 'house soundscape');
    final emitters = _list(
      map,
      'emitters',
    ).map(HouseSoundEmitter.fromJson).toList(growable: false);
    return HouseSoundscape(
      schemaVersion: _integer(map, 'schemaVersion'),
      sourceRef: _string(map, 'sourceRef'),
      emitters: emitters,
    );
  }

  HouseSoundEmitter emitterFor(String id) => emitters.firstWhere(
    (emitter) => emitter.id == id,
    orElse: () => throw StateError('sound emitter missing: $id'),
  );

  void validateAgainst(House house, HouseInventory inventory) {
    if (schemaVersion != 1) {
      throw StateError('unsupported house soundscape schema $schemaVersion');
    }
    if (sourceRef != 'assets/house/house.json') {
      throw StateError('soundscape source changed: $sourceRef');
    }
    final ids = <String>{};
    final placements = {
      for (final placement in inventory.placements) placement.id: placement,
    };
    for (final emitter in emitters) {
      if (!ids.add(emitter.id)) {
        throw StateError('duplicate sound emitter ${emitter.id}');
      }
      final room = house.byId(emitter.roomId);
      if (room == null) {
        throw StateError(
          'sound emitter ${emitter.id} references ${emitter.roomId}',
        );
      }
      final placement = placements[emitter.placementId];
      if (placement == null) {
        throw StateError(
          'sound emitter ${emitter.id} references missing placement '
          '${emitter.placementId}',
        );
      }
      if (placement.roomId != emitter.roomId) {
        throw StateError(
          'sound emitter ${emitter.id} room differs from placement',
        );
      }
      if (emitter.cues.isEmpty ||
          emitter.cues.values.any((cue) => cue.trim().isEmpty)) {
        throw StateError('sound emitter ${emitter.id} has no usable cues');
      }
      if (!emitter.gain.isFinite || emitter.gain < 0 || emitter.gain > 1) {
        throw StateError('sound emitter ${emitter.id} has invalid gain');
      }
      if (emitter.position.x < -0.5 ||
          emitter.position.x > room.size.x + 0.5 ||
          emitter.position.y < -0.5 ||
          emitter.position.y > room.size.y + 0.5 ||
          emitter.position.z < -0.5 ||
          emitter.position.z > room.size.z + 0.5) {
        throw StateError('sound emitter ${emitter.id} escapes ${room.id}');
      }
    }
  }

  Vec3 worldPosition(HouseSoundEmitter emitter, House house, double scale) {
    final room = house.byId(emitter.roomId);
    if (room == null) throw StateError('sound room missing: ${emitter.roomId}');
    return room.origin + emitter.position * scale;
  }
}

final class HouseSoundEmitter {
  final String id;
  final String roomId;
  final String placementId;
  final Vec3 position;
  final double gain;
  final Map<String, String> cues;

  const HouseSoundEmitter({
    required this.id,
    required this.roomId,
    required this.placementId,
    required this.position,
    required this.gain,
    required this.cues,
  });

  factory HouseSoundEmitter.fromJson(Object? raw) {
    final map = _object(raw, 'sound emitter');
    final rawCues = _object(map['cues'], 'sound emitter cues');
    final cues = <String, String>{};
    for (final entry in rawCues.entries) {
      final value = entry.value;
      if (value is! String || value.isEmpty) {
        throw const FormatException('sound cue must be a non-empty string');
      }
      cues[entry.key] = value;
    }
    return HouseSoundEmitter(
      id: _string(map, 'id'),
      roomId: _string(map, 'roomId'),
      placementId: _string(map, 'placementId'),
      position: _vec3(map['position'], 'sound emitter position'),
      gain: _number(map, 'gain'),
      cues: Map.unmodifiable(cues),
    );
  }

  String cue(String event) =>
      cues[event] ??
      (throw StateError('sound emitter $id has no cue for $event'));
}

final class HouseClock {
  int? _day;
  double? _hour;

  void reset({required int day, required double hour}) {
    _day = day;
    _hour = hour;
  }

  /// Emits one restrained tick per crossed in-game hour. Every third hour the
  /// clock calls with a cuckoo and bell; six-hour marks retain the deeper
  /// house chime. Sleeping or restoring a later day resets the baseline so a
  /// time jump never floods the room with missed historical sounds.
  List<HouseClockEvent> advance({required int day, required double hour}) {
    if (!hour.isFinite || hour < 0 || hour >= 24) {
      throw ArgumentError.value(hour, 'hour', 'must be in [0, 24)');
    }
    final previousDay = _day;
    final previousHour = _hour;
    if (previousDay == null ||
        previousHour == null ||
        day != previousDay ||
        hour < previousHour) {
      reset(day: day, hour: hour);
      return const [];
    }
    final events = <HouseClockEvent>[];
    final firstHour = previousHour.floor() + 1;
    final lastHour = hour.floor();
    for (var crossed = firstHour; crossed <= lastHour; crossed++) {
      final mark = crossed % 24;
      events.add(HouseClockEvent('tick', mark));
      if (mark % 3 == 0) {
        events
          ..add(HouseClockEvent('cuckoo', mark))
          ..add(HouseClockEvent('bell', mark));
      }
      if (mark % 6 == 0) events.add(HouseClockEvent('chime', mark));
    }
    _hour = hour;
    return events;
  }
}

final class HouseClockEvent {
  final String event;
  final int hour;

  const HouseClockEvent(this.event, this.hour);
}

/// Sparse, deterministic service noises keep the larger house from feeling
/// acoustically empty without turning ambience into a constant loop.
final class HouseServiceSoundScheduler {
  int? _day;
  double? _hour;

  List<HouseServiceSoundEvent> advance({
    required int day,
    required double hour,
  }) {
    if (!hour.isFinite || hour < 0 || hour >= 24) {
      throw ArgumentError.value(hour, 'hour', 'must be in [0, 24)');
    }
    final previousDay = _day;
    final previousHour = _hour;
    if (previousDay == null ||
        previousHour == null ||
        day != previousDay ||
        hour < previousHour) {
      _day = day;
      _hour = hour;
      return const [];
    }
    final events = <HouseServiceSoundEvent>[];
    for (
      var crossed = previousHour.floor() + 1;
      crossed <= hour.floor();
      crossed++
    ) {
      final mark = crossed % 24;
      if (mark % 4 == 2) {
        events.add(const HouseServiceSoundEvent('kitchen-range', 'settle'));
      }
      if (mark % 3 == 1) {
        events.add(const HouseServiceSoundEvent('cellar-drain', 'drip'));
      }
      if (mark % 8 == 5) {
        events.add(const HouseServiceSoundEvent('bathroom-cistern', 'settle'));
      }
      if (mark % 5 == 0) {
        events.add(const HouseServiceSoundEvent('front-door-knocker', 'knock'));
      }
      if (mark % 7 == 3) {
        events.add(const HouseServiceSoundEvent('landing-window', 'wind'));
      }
      if (mark % 4 == 1) {
        events.add(const HouseServiceSoundEvent('bedroom-timber', 'creak'));
      }
      if (mark % 6 == 4) {
        events.add(const HouseServiceSoundEvent('kitchen-pipe', 'tick'));
      }
    }
    _hour = hour;
    return events;
  }
}

final class HouseServiceSoundEvent {
  final String emitterId;
  final String event;

  const HouseServiceSoundEvent(this.emitterId, this.event);
}

Map<String, dynamic> _object(Object? raw, String label) =>
    raw is Map<String, dynamic> ? raw : _bad('$label is not an object');

List<Object?> _list(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is List ? List<Object?>.from(value) : _bad('$key is not a list');
}

String _string(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is String && value.isNotEmpty
      ? value
      : _bad('$key is not a string');
}

int _integer(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is int ? value : _bad('$key is not an integer');
}

double _number(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is num ? value.toDouble() : _bad('$key is not a number');
}

Vec3 _vec3(Object? raw, String label) {
  if (raw is! List || raw.length != 3 || raw.any((value) => value is! num)) {
    throw FormatException('$label must be a numeric vec3');
  }
  return Vec3(
    (raw[0] as num).toDouble(),
    (raw[1] as num).toDouble(),
    (raw[2] as num).toDouble(),
  );
}

Never _bad(String message) => throw FormatException(message);
