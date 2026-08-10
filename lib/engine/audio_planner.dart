import 'math3.dart';
import '../house/house.dart';
import '../house/room.dart';

enum AudioCategory { voice, broadcast, interaction, footsteps, ambience, music }

final class AudioEvent {
  final String id;
  final int sequence;
  final String cueFamily;
  final String sourceRoom;
  final Vec3 position;
  final int seed;
  final AudioCategory category;
  final int priority;

  AudioEvent({
    required this.id,
    required this.sequence,
    required this.cueFamily,
    required this.sourceRoom,
    required Vec3 position,
    required this.seed,
    required this.category,
    this.priority = 0,
  }) : position = Vec3(position.x, position.y, position.z) {
    if (id.isEmpty || cueFamily.isEmpty || sourceRoom.isEmpty) {
      throw const FormatException('audio event identity is empty');
    }
    if (sequence < 0 || priority < 0) {
      throw const FormatException('audio event ordering is invalid');
    }
    if (![position.x, position.y, position.z].every((v) => v.isFinite)) {
      throw const FormatException('audio event position is not finite');
    }
  }
}

final class AcousticListener {
  final String roomId;
  final Vec3 position;

  AcousticListener({required this.roomId, required Vec3 position})
    : position = Vec3(position.x, position.y, position.z) {
    if (roomId.isEmpty) throw const FormatException('listener room is empty');
    if (![position.x, position.y, position.z].every((v) => v.isFinite)) {
      throw const FormatException('listener position is not finite');
    }
  }
}

final class AcousticPortalProfile {
  final double openGainDb;
  final double closedGainDb;
  final double sealedGainDb;
  final double openCutoffHz;
  final double closedCutoffHz;
  final double sealedCutoffHz;
  final double openMuffle01;
  final double closedMuffle01;
  final double sealedMuffle01;

  const AcousticPortalProfile({
    this.openGainDb = -1.5,
    this.closedGainDb = -12.0,
    this.sealedGainDb = -28.0,
    this.openCutoffHz = 20000.0,
    this.closedCutoffHz = 1100.0,
    this.sealedCutoffHz = 320.0,
    this.openMuffle01 = 0.0,
    this.closedMuffle01 = 0.55,
    this.sealedMuffle01 = 1.0,
  });

  void validate() {
    final values = [
      openGainDb,
      closedGainDb,
      sealedGainDb,
      openCutoffHz,
      closedCutoffHz,
      sealedCutoffHz,
      openMuffle01,
      closedMuffle01,
      sealedMuffle01,
    ];
    if (values.any((value) => !value.isFinite)) {
      throw const FormatException('acoustic portal profile is not finite');
    }
    if (openGainDb > 0 ||
        closedGainDb > openGainDb ||
        sealedGainDb > closedGainDb) {
      throw const FormatException('acoustic portal gain order is invalid');
    }
    if (openCutoffHz < closedCutoffHz ||
        closedCutoffHz < sealedCutoffHz ||
        sealedCutoffHz <= 0) {
      throw const FormatException('acoustic portal cutoff order is invalid');
    }
    if ([
          openMuffle01,
          closedMuffle01,
          sealedMuffle01,
        ].any((value) => value < 0 || value > 1) ||
        openMuffle01 > closedMuffle01 ||
        closedMuffle01 > sealedMuffle01) {
      throw const FormatException('acoustic portal muffle order is invalid');
    }
  }

  (double, double) transmission(Portal portal) {
    validate();
    if (portal.passable) return (openGainDb, openCutoffHz);
    if (portal.locked) return (sealedGainDb, sealedCutoffHz);
    return (closedGainDb, closedCutoffHz);
  }

  double muffle01(Portal portal) {
    validate();
    if (portal.passable) return openMuffle01;
    if (portal.locked) return sealedMuffle01;
    return closedMuffle01;
  }
}

final class AudioCueSet {
  final Map<String, List<String>> variants;

  AudioCueSet(Map<String, List<String>> variants)
    : variants = Map<String, List<String>>.unmodifiable({
        for (final entry in variants.entries)
          entry.key: List<String>.unmodifiable(entry.value),
      }) {
    if (variants.keys.any((key) => key.isEmpty) ||
        variants.values.any(
          (values) => values.isEmpty || values.any((v) => v.isEmpty),
        )) {
      throw const FormatException('audio cue variants are empty');
    }
  }

  String select(String family, int seed) {
    final values = variants[family];
    if (values == null) throw StateError('audio cue family missing: $family');
    final index = _stableHash(family, seed) % values.length;
    return values[index];
  }
}

final class AudioPlan {
  final String eventId;
  final String cue;
  final AudioCategory category;
  final String sourceRoom;
  final Vec3 position;
  final List<String> portalPath;
  final double gainDb;
  final double lowPassHz;
  final double muffle01;
  final bool unreachable;
  final int priority;

  AudioPlan({
    required this.eventId,
    required this.cue,
    required this.category,
    required this.sourceRoom,
    required Vec3 position,
    required List<String> portalPath,
    required this.gainDb,
    required this.lowPassHz,
    required this.muffle01,
    required this.unreachable,
    required this.priority,
  }) : position = Vec3(position.x, position.y, position.z),
       portalPath = List.unmodifiable(portalPath);
}

final class AudioTransmission {
  final List<String> portalPath;
  final double gainDb;
  final double lowPassHz;
  final double muffle01;
  final bool reachable;

  AudioTransmission({
    required List<String> portalPath,
    required this.gainDb,
    required this.lowPassHz,
    required this.muffle01,
    required this.reachable,
  }) : portalPath = List.unmodifiable(portalPath) {
    if (!muffle01.isFinite || muffle01 < 0 || muffle01 > 1) {
      throw const FormatException('audio transmission muffle is invalid');
    }
  }
}

final class AudioPlanner {
  final House house;
  final Map<String, AcousticPortalProfile> portalProfiles;
  final AudioCueSet cues;

  AudioPlanner({
    required this.house,
    required this.cues,
    Map<String, AcousticPortalProfile> portalProfiles = const {},
  }) : portalProfiles = Map.unmodifiable(portalProfiles) {
    for (final profile in this.portalProfiles.values) {
      profile.validate();
    }
  }

  AudioPlan plan(AudioEvent event, AcousticListener listener) {
    if (house.byId(event.sourceRoom) == null) {
      throw StateError('audio source room missing: ${event.sourceRoom}');
    }
    if (house.byId(listener.roomId) == null) {
      throw StateError('audio listener room missing: ${listener.roomId}');
    }
    final transmission = this.transmission(event.sourceRoom, listener.roomId);
    return AudioPlan(
      eventId: event.id,
      cue: cues.select(event.cueFamily, event.seed),
      category: event.category,
      sourceRoom: event.sourceRoom,
      position: event.position,
      portalPath: transmission.portalPath,
      gainDb: transmission.gainDb,
      lowPassHz: transmission.lowPassHz,
      muffle01: transmission.muffle01,
      unreachable:
          !transmission.reachable && event.sourceRoom != listener.roomId,
      priority: event.priority,
    );
  }

  AudioTransmission transmission(String sourceRoom, String listenerRoom) {
    if (house.byId(sourceRoom) == null) {
      throw StateError('audio source room missing: $sourceRoom');
    }
    if (house.byId(listenerRoom) == null) {
      throw StateError('audio listener room missing: $listenerRoom');
    }
    final route = _route(sourceRoom, listenerRoom);
    var gainDb = 0.0;
    var lowPassHz = 20000.0;
    var muffle01 = 0.0;
    for (final portal in route.portals) {
      final profile =
          portalProfiles[portal.id] ?? const AcousticPortalProfile();
      final (edgeGain, edgeCutoff) = profile.transmission(portal);
      gainDb += edgeGain;
      if (edgeCutoff < lowPassHz) lowPassHz = edgeCutoff;
      // Independent barriers combine monotonically but saturate at one; a
      // second closed door still matters without allowing arbitrary path
      // length to produce an invalid meter.
      muffle01 = 1 - ((1 - muffle01) * (1 - profile.muffle01(portal)));
    }
    if (!route.reachable && sourceRoom != listenerRoom) {
      gainDb = -48.0;
      lowPassHz = 240.0;
      muffle01 = 1.0;
    }
    return AudioTransmission(
      portalPath: [for (final portal in route.portals) portal.id],
      gainDb: gainDb.clamp(-60.0, 0.0),
      lowPassHz: lowPassHz.clamp(120.0, 20000.0),
      muffle01: muffle01.clamp(0.0, 1.0),
      reachable: route.reachable || sourceRoom == listenerRoom,
    );
  }

  _AcousticRoute _route(String sourceRoom, String listenerRoom) {
    if (sourceRoom == listenerRoom) return const _AcousticRoute([], true);
    final distances = <String, double>{sourceRoom: 0};
    final paths = <String, List<Portal>>{sourceRoom: const []};
    final pending = <String>{sourceRoom};
    while (pending.isNotEmpty) {
      final current = pending.toList()
        ..sort((a, b) {
          final distance = distances[a]!.compareTo(distances[b]!);
          return distance == 0 ? a.compareTo(b) : distance;
        });
      final roomId = current.first;
      pending.remove(roomId);
      if (roomId == listenerRoom) {
        return _AcousticRoute(paths[roomId]!, true);
      }
      final portals = house.portalsFor(roomId).toList()
        ..sort((a, b) => a.id.compareTo(b.id));
      for (final portal in portals) {
        final next = portal.other(roomId);
        if (next == null || house.byId(next) == null) continue;
        final profile =
            portalProfiles[portal.id] ?? const AcousticPortalProfile();
        final (gain, _) = profile.transmission(portal);
        final edgeCost = -gain;
        final candidate = distances[roomId]! + edgeCost;
        if (candidate < (distances[next] ?? double.infinity)) {
          distances[next] = candidate;
          paths[next] = [...paths[roomId]!, portal];
          pending.add(next);
        }
      }
    }
    return const _AcousticRoute([], false);
  }
}

final class _AcousticRoute {
  final List<Portal> portals;
  final bool reachable;

  const _AcousticRoute(this.portals, this.reachable);
}

int _stableHash(String value, int seed) {
  var hash = seed & 0xFFFFFFFF;
  for (final unit in value.codeUnits) {
    hash = hashCombine(hash, unit);
  }
  return hash & 0x7FFFFFFF;
}
