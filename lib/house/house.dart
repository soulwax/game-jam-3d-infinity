import '../engine/math3.dart';
import 'drift.dart';
import 'room.dart';

class House {
  final int seed;
  final List<Room> rooms = [];
  final List<Portal> portals = [];
  final List<StairTransition> stairs = [];
  final Map<String, Room> _byId = {};
  final Map<String, Portal> _portalById = {};

  House(this.seed) {
    _buildRooms();
    _buildPortals();
    _index();
    _validate();
  }

  void _buildRooms() {
    rooms.addAll([
      Room(
        id: 'living-room',
        floor: Floor.ground,
        size: Vec3(4.5, 2.6, 4.0),
        origin: Vec3(0, 0, 0),
        windows: [
          Window(
            id: 'living-north-west',
            facing: Facing.north,
            offset: 0.5,
            sill: 0.6,
            w: 1.2,
            h: 1.2,
          ),
          Window(
            id: 'living-north-east',
            facing: Facing.north,
            offset: 2.7,
            sill: 0.6,
            w: 1.2,
            h: 1.2,
          ),
        ],
        portalIds: ['hall-living', 'kitchen-living'],
        mantles: [
          Mantle(
            id: 'mantle-living',
            name: 'the mantle by the door',
            localAt: Vec3(1.0, 1.3, 1.0),
            examineTag: 'mantle-living',
          ),
          Mantle(
            id: 'mantle-living-second',
            name: 'the mantle by the window',
            localAt: Vec3(3.0, 1.3, 3.0),
            examineTag: 'mantle-living-second',
          ),
        ],
        objects: const [],
        surfaceWall: 'wallpaper-stripes',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'hall',
        floor: Floor.ground,
        size: Vec3(2.5, 2.6, 7.0),
        origin: Vec3(4.5, 0, 0),
        windows: [
          Window(
            id: 'hall-fanlight',
            facing: Facing.north,
            offset: 0.85,
            sill: 2.15,
            w: 0.8,
            h: 0.35,
          ),
        ],
        portalIds: [
          'front-door',
          'hall-living',
          'hall-kitchen',
          'hall-cellar',
          'hall-landing',
        ],
        mantles: [
          Mantle(
            id: 'mantle-hall',
            name: 'the hall mantle',
            localAt: Vec3(1.0, 1.3, 3.5),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'compliance-card',
            examineTag: 'compliance-card',
            localAt: Vec3(0.2, 1.45, 0.35),
          ),
          PlacedObject(
            id: 'hall-clock',
            examineTag: 'hall-clock',
            localAt: Vec3(2.2, 1.7, 3.0),
          ),
          PlacedObject(
            id: 'ration-book',
            examineTag: 'ration-book',
            localAt: Vec3(0.4, 0.9, 4.1),
          ),
        ],
        surfaceWall: 'wallpaper-damask',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'kitchen',
        floor: Floor.ground,
        size: Vec3(4.5, 2.5, 3.0),
        origin: Vec3(0, 0, 4.0),
        windows: [
          Window(
            id: 'kitchen-south',
            facing: Facing.south,
            offset: 1.5,
            sill: 0.7,
            w: 1.2,
            h: 1.1,
          ),
          Window(
            id: 'kitchen-west',
            facing: Facing.west,
            offset: 1.0,
            sill: 0.8,
            w: 0.9,
            h: 1.0,
          ),
        ],
        portalIds: ['hall-kitchen', 'kitchen-living'],
        mantles: [
          Mantle(
            id: 'mantle-kitchen',
            name: 'the mantle by the stove',
            localAt: Vec3(0.8, 1.2, 0.5),
            examineTag: 'mantle-kitchen',
          ),
          Mantle(
            id: 'mantle-kitchen-second',
            name: 'the mantle by the door',
            localAt: Vec3(2.2, 1.2, 2.0),
          ),
          Mantle(
            id: 'mantle-kitchen-third',
            name: 'the mantle by the window',
            localAt: Vec3(3.8, 1.2, 1.2),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'shopping-list',
            examineTag: 'shopping-list',
            localAt: Vec3(1.2, 1.1, 2.65),
          ),
        ],
        doorframeHeightMarks: const [
          DoorframeHeightMark(label: 'A.J.', heightMetres: 0.85),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.02),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.18),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.35),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 3.2),
        ],
        surfaceWall: 'wallpaper-floral',
        surfaceFloor: 'floor-linoleum',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'cellar',
        floor: Floor.ground,
        size: Vec3(4.0, 2.0, 4.0),
        origin: Vec3(1.0, -2.0, 2.0),
        windows: const [],
        portalIds: ['hall-cellar'],
        mantles: const [],
        objects: const [],
        surfaceWall: 'wallpaper-damp',
        surfaceFloor: 'floor-concrete',
        surfaceCeiling: 'ceiling-pipes',
      ),
      Room(
        id: 'bedroom',
        floor: Floor.first,
        size: Vec3(4.5, 2.4, 4.0),
        origin: Vec3(0, 2.8, 0),
        windows: [
          Window(
            id: 'bedroom-north-west',
            facing: Facing.north,
            offset: 0.7,
            sill: 0.7,
            w: 1.1,
            h: 1.1,
          ),
          Window(
            id: 'bedroom-north-east',
            facing: Facing.north,
            offset: 2.7,
            sill: 0.7,
            w: 1.0,
            h: 1.1,
          ),
        ],
        portalIds: ['landing-bedroom'],
        mantles: [
          Mantle(
            id: 'mantle-bedroom',
            name: 'the bedroom mantle',
            localAt: Vec3(1.0, 1.3, 1.0),
            examineTag: 'mantle-bedroom',
          ),
          Mantle(
            id: 'mantle-bedroom-bedside',
            name: 'the bedside mantle',
            localAt: Vec3(3.5, 1.0, 3.0),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'journal-desk',
            examineTag: 'journal-desk',
            localAt: Vec3(2.2, 0.75, 2.5),
          ),
          PlacedObject(
            id: 'half-written-letter',
            examineTag: 'half-written-letter',
            localAt: Vec3(2.4, 0.76, 2.45),
          ),
        ],
        surfaceWall: 'wallpaper-faded',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'landing',
        floor: Floor.first,
        size: Vec3(2.5, 2.4, 3.0),
        origin: Vec3(4.5, 2.8, 0),
        windows: const [],
        portalIds: [
          'hall-landing',
          'landing-bedroom',
          'landing-bathroom',
          'landing-spare',
        ],
        mantles: [
          Mantle(
            id: 'mantle-landing',
            name: 'the landing mantle',
            localAt: Vec3(1.0, 1.2, 1.5),
          ),
        ],
        objects: const [],
        surfaceWall: 'wallpaper-damask',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'bathroom',
        floor: Floor.first,
        size: Vec3(2.5, 2.4, 2.5),
        origin: Vec3(4.5, 2.8, 3.0),
        windows: [
          Window(
            id: 'bathroom-east',
            facing: Facing.east,
            offset: 0.9,
            sill: 1.0,
            w: 0.7,
            h: 1.0,
            frosted: true,
          ),
        ],
        portalIds: ['landing-bathroom'],
        mantles: [
          Mantle(
            id: 'mantle-bathroom',
            name: 'the bathroom mantle',
            localAt: Vec3(1.5, 1.2, 1.0),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'bathroom-mirror',
            examineTag: 'bathroom-mirror',
            localAt: Vec3(2.35, 1.45, 1.2),
          ),
        ],
        surfaceWall: 'wallpaper-tiles',
        surfaceFloor: 'floor-tiles',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'spare-room',
        floor: Floor.first,
        size: Vec3(4.5, 2.1, 3.0),
        origin: Vec3(0, 2.8, 4.0),
        windows: [
          Window(
            id: 'spare-south',
            facing: Facing.south,
            offset: 1.8,
            sill: 0.7,
            w: 0.9,
            h: 0.9,
          ),
        ],
        portalIds: ['landing-spare'],
        mantles: [
          Mantle(
            id: 'mantle-spare',
            name: 'the broken mantle',
            localAt: Vec3(2.0, 1.3, 1.0),
            broken: true,
          ),
        ],
        objects: [
          PlacedObject(
            id: 'previous-tenant-post',
            examineTag: 'previous-tenant-post',
            localAt: Vec3(0.5, 1.2, 0.3),
          ),
          PlacedObject(
            id: 'calendar',
            examineTag: 'calendar',
            localAt: Vec3(3.7, 1.4, 2.7),
          ),
          PlacedObject(
            id: 'undone-task',
            examineTag: 'undone-task',
            localAt: Vec3(3.5, 0.75, 1.8),
          ),
        ],
        surfaceWall: 'wallpaper-peeling',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
    ]);
  }

  void _buildPortals() {
    portals.addAll([
      Portal(
        id: 'front-door',
        a: 'hall',
        b: 'outside',
        facingA: Facing.north,
        facingB: Facing.south,
        offsetA: 0.8,
        offsetB: 0,
        width: 0.9,
        height: 2.1,
        exterior: true,
      ),
      Portal(
        id: 'hall-living',
        a: 'hall',
        b: 'living-room',
        facingA: Facing.west,
        facingB: Facing.east,
        offsetA: 1.8,
        offsetB: 1.8,
        width: 0.9,
        height: 2.1,
      ),
      Portal(
        id: 'hall-kitchen',
        a: 'hall',
        b: 'kitchen',
        facingA: Facing.west,
        facingB: Facing.east,
        offsetA: 4.9,
        offsetB: 1.0,
        width: 0.9,
        height: 2.1,
      ),
      Portal(
        id: 'kitchen-living',
        a: 'kitchen',
        b: 'living-room',
        facingA: Facing.north,
        facingB: Facing.south,
        offsetA: 2.0,
        offsetB: 2.0,
        width: 0.9,
        height: 2.1,
      ),
      Portal(
        id: 'hall-cellar',
        a: 'hall',
        b: 'cellar',
        facingA: Facing.south,
        facingB: Facing.east,
        offsetA: 0.5,
        offsetB: 1.5,
        width: 0.9,
        height: 2.0,
        sticks: true,
        open: false,
      ),
      Portal(
        id: 'hall-landing',
        a: 'hall',
        b: 'landing',
        facingA: Facing.east,
        facingB: Facing.east,
        offsetA: 4.0,
        offsetB: 0.7,
        width: 1.2,
        height: 2.1,
        stair: true,
      ),
      Portal(
        id: 'landing-bedroom',
        a: 'landing',
        b: 'bedroom',
        facingA: Facing.west,
        facingB: Facing.east,
        offsetA: 1.0,
        offsetB: 1.0,
        width: 0.9,
        height: 2.1,
      ),
      Portal(
        id: 'landing-bathroom',
        a: 'landing',
        b: 'bathroom',
        facingA: Facing.south,
        facingB: Facing.north,
        offsetA: 1.0,
        offsetB: 0.8,
        width: 0.9,
        height: 2.1,
      ),
      Portal(
        id: 'landing-spare',
        a: 'landing',
        b: 'spare-room',
        facingA: Facing.south,
        facingB: Facing.north,
        offsetA: 0.1,
        offsetB: 2.0,
        width: 0.9,
        height: 2.1,
      ),
    ]);
    stairs.add(
      StairTransition(
        id: 'hall-stairs',
        portalId: 'hall-landing',
        landingHeights: const [1.4, 2.8, 4.2],
        min: Vec3(5.0, 0, 2.8),
        max: Vec3(6.5, 4.2, 6.0),
        lowerEye: Vec3(5.75, 1.65, 5.8),
        upperEye: Vec3(5.75, 4.45, 2.2),
      ),
    );
  }

  void _index() {
    for (final room in rooms) {
      if (_byId.containsKey(room.id)) {
        throw StateError('duplicate room ${room.id}');
      }
      _byId[room.id] = room;
    }
    for (final portal in portals) {
      if (_portalById.containsKey(portal.id)) {
        throw StateError('duplicate portal ${portal.id}');
      }
      _portalById[portal.id] = portal;
    }
  }

  void _validate() {
    if (rooms.length != 8) {
      throw StateError('expected eight rooms, got ${rooms.length}');
    }
    if (windowsFromInside != 9 || windowsFromOutside != 11) {
      throw StateError('window discrepancy must be 9 inside / 11 outside');
    }
    if (landings != 3 || stairs.single.landingHeights.last != 4.2) {
      throw StateError('stairs must expose landings at 1.4, 2.8 and 4.2');
    }
    if (portals.length != 9) throw StateError('expected nine physical portals');
    _validateNoOverlaps();
    _validateApertures();
  }

  void _validateNoOverlaps() {
    for (var i = 0; i < rooms.length; i++) {
      for (var j = i + 1; j < rooms.length; j++) {
        final a = rooms[i];
        final b = rooms[j];
        final x =
            a.origin.x < b.origin.x + b.size.x &&
            b.origin.x < a.origin.x + a.size.x;
        final y =
            a.origin.y < b.origin.y + b.size.y &&
            b.origin.y < a.origin.y + a.size.y;
        final z =
            a.origin.z < b.origin.z + b.size.z &&
            b.origin.z < a.origin.z + a.size.z;
        if (x && y && z) {
          throw StateError('3D room overlap: ${a.id} and ${b.id}');
        }
      }
    }
  }

  void _validateApertures() {
    final openingsByWall = <String, List<(double, double, double, double)>>{};
    for (final room in rooms) {
      for (final window in room.windows) {
        _validateOpening(
          room,
          window.facing,
          window.offset,
          window.w,
          window.sill,
          window.h,
        );
        _addOpening(
          openingsByWall,
          room.id,
          window.facing,
          window.offset,
          window.offset + window.w,
          window.sill,
          window.sill + window.h,
        );
      }
      for (final id in room.portalIds) {
        final portal = portalById(id);
        if (portal == null || !portal.touches(room.id)) {
          throw StateError('${room.id} references invalid portal $id');
        }
        _validateOpening(
          room,
          portal.facingFor(room.id),
          portal.offsetFor(room.id),
          portal.width,
          0,
          portal.height,
        );
        _addOpening(
          openingsByWall,
          room.id,
          portal.facingFor(room.id),
          portal.offsetFor(room.id),
          portal.offsetFor(room.id) + portal.width,
          0,
          portal.height,
        );
      }
    }
    for (final entry in openingsByWall.entries) {
      final values = entry.value..sort((a, b) => a.$1.compareTo(b.$1));
      for (var i = 0; i < values.length; i++) {
        for (var j = i + 1; j < values.length; j++) {
          final horizontalOverlap =
              values[i].$1 < values[j].$2 && values[j].$1 < values[i].$2;
          final verticalOverlap =
              values[i].$3 < values[j].$4 && values[j].$3 < values[i].$4;
          if (horizontalOverlap && verticalOverlap) {
            throw StateError('overlapping apertures on ${entry.key}');
          }
        }
      }
    }
  }

  void _validateOpening(
    Room room,
    Facing facing,
    double offset,
    double width,
    double sill,
    double height,
  ) {
    if (offset < 0 ||
        width <= 0 ||
        offset + width > room.wallLength(facing) ||
        sill < 0 ||
        height <= 0 ||
        sill + height > room.size.y) {
      throw StateError('aperture outside ${room.id} ${facing.name} wall');
    }
  }

  void _addOpening(
    Map<String, List<(double, double, double, double)>> values,
    String roomId,
    Facing facing,
    double from,
    double to,
    double bottom,
    double top,
  ) {
    values.putIfAbsent('$roomId:${facing.name}', () => []).add((
      from,
      to,
      bottom,
      top,
    ));
  }

  final HouseDrift drift = HouseDrift();

  Vec3 effectiveSize(Room room) => Vec3(
    room.size.x + drift.sizeXDelta(room.id),
    room.size.y + drift.sizeYDelta(room.id),
    room.size.z,
  );

  Room? byId(String id) => _byId[id];
  Portal? portalById(String id) => _portalById[id];
  Iterable<Room> onFloor(Floor floor) =>
      rooms.where((room) => room.floor == floor);
  Iterable<Portal> portalsFor(String roomId) =>
      portals.where((portal) => portal.touches(roomId));

  Vec3 portalCenter(String roomId, Portal portal) {
    final room = byId(roomId);
    if (room == null || !portal.touches(roomId)) {
      throw ArgumentError.value(roomId, 'roomId', 'not a portal endpoint');
    }
    final size = effectiveSize(room);
    final along = portal.offsetFor(roomId) + portal.width * 0.5;
    final y = room.origin.y + portal.height * 0.5;
    return switch (portal.facingFor(roomId)) {
      Facing.north => Vec3(room.origin.x + along, y, room.origin.z),
      Facing.south => Vec3(room.origin.x + along, y, room.origin.z + size.z),
      Facing.east => Vec3(room.origin.x + size.x, y, room.origin.z + along),
      Facing.west => Vec3(room.origin.x, y, room.origin.z + along),
    };
  }

  Room? roomAt(Vec3 point) {
    for (final room in rooms) {
      final size = effectiveSize(room);
      if (point.x >= room.origin.x &&
          point.x <= room.origin.x + size.x &&
          point.y >= room.origin.y &&
          point.y <= room.origin.y + size.y &&
          point.z >= room.origin.z &&
          point.z <= room.origin.z + size.z) {
        return room;
      }
    }
    return null;
  }

  int get windowsFromOutside => 11;
  int get windowsFromInside =>
      rooms.fold(0, (count, room) => count + room.windows.length);
  int get landings => stairs.single.landingHeights.length;
  int get stairCreakIndex => (hashNoise(1, seed) * 10).toInt() % 8;

  List<Portal> pathBetweenRooms(String sourceId, String listenerId) {
    if (sourceId == listenerId) return const [];
    final queue = <(String, List<Portal>)>[(sourceId, const [])];
    final visited = <String>{sourceId};
    while (queue.isNotEmpty) {
      final (current, path) = queue.removeAt(0);
      for (final portal in portalsFor(current)) {
        final next = portal.other(current);
        if (next == null || byId(next) == null) {
          continue;
        }
        if (next == listenerId) {
          return [...path, portal];
        }
        if (visited.add(next)) {
          queue.add((next, [...path, portal]));
        }
      }
    }
    return const [];
  }
}
