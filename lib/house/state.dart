import 'house.dart';

/// The mutable subset of canonical house geometry. Static geometry is rebuilt
/// from the seed; this state is deliberately keyed by stable authored IDs.
class HouseState {
  HouseState({
    required this.portals,
    required this.windows,
    required this.mantles,
    required this.driftLandedCount,
    Map<String, String> overrides = const {},
    List<String> mantleHistory = const [],
  }) : overrides = Map.unmodifiable(Map<String, String>.from(overrides)),
       mantleHistory = List.unmodifiable(mantleHistory);

  final Map<String, PortalState> portals;
  final Map<String, bool> windows;
  final Map<String, MantleState> mantles;
  final int driftLandedCount;

  /// Authored Q24/geometry variant IDs, never emitted geometry.
  final Map<String, String> overrides;

  /// Append-only first-light order, kept separate from current mantle state.
  final List<String> mantleHistory;

  factory HouseState.capture(House house) => HouseState(
    portals: {
      for (final portal in house.portals)
        portal.id: PortalState(open: portal.open, locked: portal.locked),
    },
    windows: {
      for (final room in house.rooms)
        for (final window in room.windows) window.id: window.shutterOpen,
    },
    mantles: {
      for (final room in house.rooms)
        for (final mantle in room.mantles)
          mantle.id: MantleState(lit: mantle.lit, examined: mantle.examined),
    },
    driftLandedCount: house.drift.landedCount,
  );

  Map<String, dynamic> toJson() => {
    'portals': {
      for (final entry in portals.entries) entry.key: entry.value.toJson(),
    },
    'windows': windows,
    'mantles': {
      for (final entry in mantles.entries) entry.key: entry.value.toJson(),
    },
    'driftLandedCount': driftLandedCount,
    'overrides': overrides,
    'mantleHistory': mantleHistory,
  };

  static HouseState fromJson(Map<String, dynamic> json) {
    final rawPortals = json['portals'];
    final rawWindows = json['windows'];
    final rawMantles = json['mantles'];
    final rawDriftLandedCount = json['driftLandedCount'] ?? 0;
    final rawOverrides = json['overrides'] ?? const {};
    final rawMantleHistory = json['mantleHistory'] ?? const [];
    if (rawPortals is! Map ||
        rawWindows is! Map ||
        rawMantles is! Map ||
        rawDriftLandedCount is! int ||
        rawOverrides is! Map ||
        rawMantleHistory is! List) {
      throw const FormatException('saved house state is malformed');
    }
    final portals = <String, PortalState>{};
    for (final entry in rawPortals.entries) {
      if (entry.key is! String || entry.value is! Map) {
        throw const FormatException('saved portal state is malformed');
      }
      portals[entry.key as String] = PortalState.fromJson(
        Map<String, dynamic>.from(entry.value as Map),
      );
    }
    final windows = <String, bool>{};
    for (final entry in rawWindows.entries) {
      if (entry.key is! String || entry.value is! bool) {
        throw const FormatException('saved window state is malformed');
      }
      windows[entry.key as String] = entry.value as bool;
    }
    final mantles = <String, MantleState>{};
    for (final entry in rawMantles.entries) {
      if (entry.key is! String || entry.value is! Map) {
        throw const FormatException('saved mantle state is malformed');
      }
      mantles[entry.key as String] = MantleState.fromJson(
        Map<String, dynamic>.from(entry.value as Map),
      );
    }
    final overrides = <String, String>{};
    for (final entry in rawOverrides.entries) {
      if (entry.key is! String || entry.value is! String) {
        throw const FormatException('saved house overrides are malformed');
      }
      overrides[entry.key as String] = entry.value as String;
    }
    final mantleHistory = <String>[];
    for (final value in rawMantleHistory) {
      if (value is! String || value.isEmpty) {
        throw const FormatException('saved mantle history is malformed');
      }
      mantleHistory.add(value);
    }
    return HouseState(
      portals: portals,
      windows: windows,
      mantles: mantles,
      driftLandedCount: rawDriftLandedCount,
      overrides: overrides,
      mantleHistory: mantleHistory,
    );
  }

  void applyTo(House house) {
    final expectedPortals = {for (final portal in house.portals) portal.id};
    final expectedWindows = {
      for (final room in house.rooms)
        for (final window in room.windows) window.id,
    };
    final expectedMantles = {
      for (final room in house.rooms)
        for (final mantle in room.mantles) mantle.id,
    };
    if (!_sameKeys(portals.keys, expectedPortals) ||
        !_sameKeys(windows.keys, expectedWindows) ||
        !_sameKeys(mantles.keys, expectedMantles)) {
      throw const FormatException(
        'saved house state does not match this house',
      );
    }
    house.drift.restoreLandedCount(driftLandedCount);
    for (final portal in house.portals) {
      final state = portals[portal.id]!;
      portal.open = state.open;
      portal.locked = state.locked;
    }
    for (final room in house.rooms) {
      for (final window in room.windows) {
        window.shutterOpen = windows[window.id]!;
      }
      for (final mantle in room.mantles) {
        final state = mantles[mantle.id]!;
        mantle.lit = state.lit;
        mantle.examined = state.examined;
      }
    }
  }
}

class PortalState {
  const PortalState({required this.open, required this.locked});
  final bool open;
  final bool locked;

  Map<String, bool> toJson() => {'open': open, 'locked': locked};

  static PortalState fromJson(Map<String, dynamic> json) {
    final open = json['open'];
    final locked = json['locked'];
    if (open is! bool || locked is! bool) {
      throw const FormatException('saved portal state is malformed');
    }
    return PortalState(open: open, locked: locked);
  }
}

class MantleState {
  const MantleState({required this.lit, required this.examined});
  final bool lit;
  final bool examined;

  Map<String, bool> toJson() => {'lit': lit, 'examined': examined};

  static MantleState fromJson(Map<String, dynamic> json) {
    final lit = json['lit'];
    final examined = json['examined'];
    if (lit is! bool || examined is! bool) {
      throw const FormatException('saved mantle state is malformed');
    }
    return MantleState(lit: lit, examined: examined);
  }
}

bool _sameKeys(Iterable<String> actual, Set<String> expected) =>
    actual.length == expected.length && actual.every(expected.contains);
