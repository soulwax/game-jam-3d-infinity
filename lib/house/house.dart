import '../engine/math3.dart';
import 'drift.dart';
import 'room.dart';
import 'scale_profile.dart';

/// The authored blueprint is already represented at 1.5× in the runtime MVP.
/// This second seam makes the house 50% larger relative to the unchanged
/// player capsule, producing the spacious presentation profile.
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
    _applyMvpHorizontalScale();
    _applySpaciousScale();
    _index();
    _validate();
  }

  /// Spawn anchor derived from the same profile that scales the house.
  Vec3 defaultPlayerEye(double eyeHeight) => houseScaleProfile.spawn(eyeHeight);

  /// The first authored-house MVP uses a 1.5x wider/deeper envelope. The
  /// spacious profile then scales all room axes by 1.5. Vertical
  /// room values are authored explicitly above; this pass keeps every x/z
  /// origin, opening, placement, and stair landmark proportional without
  /// duplicating a second hand-maintained house graph.
  void _applyMvpHorizontalScale() {
    final scale = houseScaleProfile.authoredScale;
    Vec3 xz(Vec3 value) => houseScaleProfile.scaleHorizontal(value, scale);
    final originalRooms = List<Room>.from(rooms);
    rooms
      ..clear()
      ..addAll([
        for (final room in originalRooms)
          Room(
            id: room.id,
            floor: room.floor,
            size: xz(room.size),
            origin: xz(room.origin),
            windows: [
              for (final window in room.windows)
                Window(
                  id: window.id,
                  facing: window.facing,
                  offset: window.offset * scale,
                  sill: window.sill,
                  w: window.w * scale,
                  h: window.h,
                  frosted: window.frosted,
                  shutterOpen: window.shutterOpen,
                ),
            ],
            portalIds: room.portalIds,
            mantles: [
              for (final mantle in room.mantles)
                Mantle(
                  id: mantle.id,
                  name: mantle.name,
                  localAt: xz(mantle.localAt),
                  lit: mantle.lit,
                  broken: mantle.broken,
                  examineTag: mantle.examineTag,
                ),
            ],
            objects: [
              for (final object in room.objects)
                PlacedObject(
                  id: object.id,
                  examineTag: object.examineTag,
                  localAt: xz(object.localAt),
                ),
            ],
            surfaceWall: room.surfaceWall,
            surfaceFloor: room.surfaceFloor,
            surfaceCeiling: room.surfaceCeiling,
            doorframeHeightMarks: room.doorframeHeightMarks,
          ),
      ]);
    final originalPortals = List<Portal>.from(portals);
    portals
      ..clear()
      ..addAll([
        for (final portal in originalPortals)
          Portal(
            id: portal.id,
            a: portal.a,
            b: portal.b,
            facingA: portal.facingA,
            facingB: portal.facingB,
            offsetA: portal.offsetA * scale,
            offsetB: portal.offsetB * scale,
            width: portal.width * scale,
            height: portal.height,
            hingeAtStart: portal.hingeAtStart,
            sticks: portal.sticks,
            exterior: portal.exterior,
            stair: portal.stair,
            doorKit: portal.doorKit,
            open: portal.open,
            locked: portal.locked,
          ),
      ]);
    for (var i = 0; i < stairs.length; i++) {
      final stair = stairs[i];
      stairs[i] = StairTransition(
        id: stair.id,
        portalId: stair.portalId,
        landingHeights: stair.landingHeights,
        min: xz(stair.min),
        max: xz(stair.max),
        lowerEye: xz(stair.lowerEye),
        upperEye: xz(stair.upperEye),
      );
    }
  }

  void _applySpaciousScale() {
    Vec3 all(Vec3 value) =>
        houseScaleProfile.scaleAll(value, houseSpatialScale);
    final originalRooms = List<Room>.from(rooms);
    rooms
      ..clear()
      ..addAll([
        for (final room in originalRooms)
          Room(
            id: room.id,
            floor: room.floor,
            size: all(room.size),
            origin: all(room.origin),
            windows: [
              for (final window in room.windows)
                Window(
                  id: window.id,
                  facing: window.facing,
                  offset: window.offset * houseSpatialScale,
                  sill: window.sill * houseSpatialScale,
                  w: window.w * houseSpatialScale,
                  h: window.h * houseSpatialScale,
                  frosted: window.frosted,
                  shutterOpen: window.shutterOpen,
                ),
            ],
            portalIds: room.portalIds,
            mantles: [
              for (final mantle in room.mantles)
                Mantle(
                  id: mantle.id,
                  name: mantle.name,
                  localAt: all(mantle.localAt),
                  lit: mantle.lit,
                  broken: mantle.broken,
                  examineTag: mantle.examineTag,
                ),
            ],
            objects: [
              for (final object in room.objects)
                PlacedObject(
                  id: object.id,
                  examineTag: object.examineTag,
                  localAt: all(object.localAt),
                ),
            ],
            surfaceWall: room.surfaceWall,
            surfaceFloor: room.surfaceFloor,
            surfaceCeiling: room.surfaceCeiling,
            doorframeHeightMarks: [
              for (final mark in room.doorframeHeightMarks)
                DoorframeHeightMark(
                  label: mark.label,
                  heightMetres: mark.heightMetres * houseSpatialScale,
                ),
            ],
          ),
      ]);
    final originalPortals = List<Portal>.from(portals);
    portals
      ..clear()
      ..addAll([
        for (final portal in originalPortals)
          Portal(
            id: portal.id,
            a: portal.a,
            b: portal.b,
            facingA: portal.facingA,
            facingB: portal.facingB,
            offsetA: portal.offsetA * houseSpatialScale,
            offsetB: portal.offsetB * houseSpatialScale,
            width: portal.width * houseSpatialScale,
            height: portal.height * houseSpatialScale,
            hingeAtStart: portal.hingeAtStart,
            sticks: portal.sticks,
            exterior: portal.exterior,
            stair: portal.stair,
            doorKit: portal.doorKit,
            open: portal.open,
            locked: portal.locked,
          ),
      ]);
    for (var i = 0; i < stairs.length; i++) {
      final stair = stairs[i];
      stairs[i] = StairTransition(
        id: stair.id,
        portalId: stair.portalId,
        landingHeights: [
          for (final height in stair.landingHeights) height * houseSpatialScale,
        ],
        min: all(stair.min),
        max: all(stair.max),
        lowerEye: all(stair.lowerEye),
        upperEye: all(stair.upperEye),
      );
    }
  }

  void _buildRooms() {
    rooms.addAll([
      Room(
        id: 'living-room',
        floor: Floor.ground,
        size: Vec3(4.5, 3.9, 4.0),
        origin: Vec3(0, 0, 0),
        windows: [
          Window(
            id: 'living-north-west',
            facing: Facing.north,
            offset: 0.5,
            sill: 0.9,
            w: 1.2,
            h: 1.8,
          ),
          Window(
            id: 'living-north-east',
            facing: Facing.north,
            offset: 2.7,
            sill: 0.9,
            w: 1.2,
            h: 1.8,
          ),
        ],
        portalIds: ['hall-living', 'kitchen-living'],
        mantles: [
          Mantle(
            id: 'mantle-living',
            name: 'the mantle by the door',
            localAt: Vec3(1.0, 1.95, 1.0),
            examineTag: 'mantle-living',
          ),
          Mantle(
            id: 'mantle-living-second',
            name: 'the mantle by the window',
            localAt: Vec3(3.0, 1.95, 3.0),
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
        size: Vec3(2.5, 3.9, 7.0),
        origin: Vec3(4.5, 0, 0),
        windows: [
          Window(
            id: 'hall-fanlight',
            facing: Facing.north,
            offset: 0.85,
            sill: 3.225,
            w: 0.8,
            h: 0.525,
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
            localAt: Vec3(1.0, 1.95, 3.5),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'compliance-card',
            examineTag: 'compliance-card',
            localAt: Vec3(0.2, 2.175, 0.35),
          ),
          PlacedObject(
            id: 'hall-clock',
            examineTag: 'hall-clock',
            localAt: Vec3(2.2, 2.55, 3.0),
          ),
          PlacedObject(
            id: 'ration-book',
            examineTag: 'ration-book',
            localAt: Vec3(0.4, 1.35, 4.1),
          ),
          PlacedObject(
            id: 'under-stair-cupboard',
            examineTag: 'under-stair-cupboard',
            localAt: Vec3(0.92, 0.82, 5.55),
          ),
        ],
        surfaceWall: 'wallpaper-damask',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'kitchen',
        floor: Floor.ground,
        size: Vec3(4.5, 3.75, 3.0),
        origin: Vec3(0, 0, 4.0),
        windows: [
          Window(
            id: 'kitchen-south',
            facing: Facing.south,
            offset: 1.5,
            sill: 1.05,
            w: 1.2,
            h: 1.65,
          ),
          Window(
            id: 'kitchen-west',
            facing: Facing.west,
            offset: 1.0,
            sill: 1.2,
            w: 0.9,
            h: 1.5,
          ),
        ],
        portalIds: ['hall-kitchen', 'kitchen-living'],
        mantles: [
          Mantle(
            id: 'mantle-kitchen',
            name: 'the mantle by the stove',
            localAt: Vec3(0.8, 1.8, 0.5),
            examineTag: 'mantle-kitchen',
          ),
          Mantle(
            id: 'mantle-kitchen-second',
            name: 'the mantle by the door',
            localAt: Vec3(2.2, 1.8, 2.0),
          ),
          Mantle(
            id: 'mantle-kitchen-third',
            name: 'the mantle by the window',
            localAt: Vec3(3.8, 1.8, 1.2),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'shopping-list',
            examineTag: 'shopping-list',
            localAt: Vec3(1.2, 1.65, 2.65),
          ),
        ],
        doorframeHeightMarks: const [
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.275),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.53),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 1.77),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 2.025),
          DoorframeHeightMark(label: 'A.J.', heightMetres: 4.8),
        ],
        surfaceWall: 'wallpaper-floral',
        surfaceFloor: 'floor-linoleum',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'cellar',
        floor: Floor.ground,
        size: Vec3(4.0, 3.0, 4.0),
        origin: Vec3(1.0, -3.0, 2.0),
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
        size: Vec3(4.5, 3.6, 4.0),
        origin: Vec3(0, 4.2, 0),
        windows: [
          Window(
            id: 'bedroom-north-west',
            facing: Facing.north,
            offset: 0.7,
            sill: 1.05,
            w: 1.1,
            h: 1.65,
          ),
          Window(
            id: 'bedroom-north-east',
            facing: Facing.north,
            offset: 2.7,
            sill: 1.05,
            w: 1.0,
            h: 1.65,
          ),
        ],
        portalIds: ['landing-bedroom'],
        mantles: [
          Mantle(
            id: 'mantle-bedroom',
            name: 'the bedroom mantle',
            localAt: Vec3(1.0, 1.95, 1.0),
            examineTag: 'mantle-bedroom',
          ),
          Mantle(
            id: 'mantle-bedroom-bedside',
            name: 'the bedside mantle',
            localAt: Vec3(3.5, 1.5, 3.0),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'journal-desk',
            examineTag: 'journal-desk',
            localAt: Vec3(2.2, 1.125, 2.5),
          ),
          PlacedObject(
            id: 'half-written-letter',
            examineTag: 'half-written-letter',
            localAt: Vec3(2.4, 1.14, 2.45),
          ),
        ],
        surfaceWall: 'wallpaper-faded',
        surfaceFloor: 'floor-wood',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'landing',
        floor: Floor.first,
        size: Vec3(2.5, 3.6, 3.0),
        origin: Vec3(4.5, 4.2, 0),
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
            localAt: Vec3(1.0, 1.8, 1.5),
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
        size: Vec3(2.5, 3.6, 2.5),
        origin: Vec3(4.5, 4.2, 3.0),
        windows: [
          Window(
            id: 'bathroom-east',
            facing: Facing.east,
            offset: 0.9,
            sill: 1.5,
            w: 0.7,
            h: 1.5,
            frosted: true,
          ),
        ],
        portalIds: ['landing-bathroom'],
        mantles: [
          Mantle(
            id: 'mantle-bathroom',
            name: 'the bathroom mantle',
            localAt: Vec3(1.5, 1.8, 1.0),
          ),
        ],
        objects: [
          PlacedObject(
            id: 'bathroom-mirror',
            examineTag: 'bathroom-mirror',
            localAt: Vec3(2.35, 2.175, 1.2),
          ),
        ],
        surfaceWall: 'wallpaper-tiles',
        surfaceFloor: 'floor-tiles',
        surfaceCeiling: 'ceiling-plaster',
      ),
      Room(
        id: 'spare-room',
        floor: Floor.first,
        size: Vec3(4.5, 3.15, 3.0),
        origin: Vec3(0, 4.2, 4.0),
        windows: [
          Window(
            id: 'spare-south',
            facing: Facing.south,
            offset: 1.8,
            sill: 1.05,
            w: 0.9,
            h: 1.35,
          ),
        ],
        portalIds: ['landing-spare'],
        mantles: [
          Mantle(
            id: 'mantle-spare',
            name: 'the broken mantle',
            localAt: Vec3(2.0, 1.95, 1.0),
            broken: true,
          ),
        ],
        objects: [
          PlacedObject(
            id: 'previous-tenant-post',
            examineTag: 'previous-tenant-post',
            localAt: Vec3(0.5, 1.8, 0.3),
          ),
          PlacedObject(
            id: 'calendar',
            examineTag: 'calendar',
            localAt: Vec3(3.7, 2.1, 2.7),
          ),
          PlacedObject(
            id: 'undone-task',
            examineTag: 'undone-task',
            localAt: Vec3(3.5, 1.125, 1.8),
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
        height: 3.15,
        exterior: true,
        doorKit: 'kit-front-door-recessed',
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
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
        height: 3.0,
        sticks: true,
        open: false,
        doorKit: 'kit-cellar-door-grille',
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
        height: 3.15,
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
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
        height: 3.15,
        doorKit: 'kit-internal-four-panel-door',
      ),
    ]);
    stairs.add(
      StairTransition(
        id: 'hall-stairs',
        portalId: 'hall-landing',
        landingHeights: const [2.1, 4.2, 6.3],
        min: Vec3(5.0, 0, 2.8),
        max: Vec3(6.5, 6.3, 6.0),
        lowerEye: Vec3(5.75, 2.475, 5.8),
        upperEye: Vec3(5.75, 6.675, 2.2),
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
    if (landings != 3 || stairs.single.landingHeights.last != 9.45) {
      throw StateError('stairs must expose landings at 3.15, 6.3 and 9.45');
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
          const epsilon = 0.000001;
          final horizontalOverlap =
              values[i].$1 + epsilon < values[j].$2 &&
              values[j].$1 + epsilon < values[i].$2;
          final verticalOverlap =
              values[i].$3 + epsilon < values[j].$4 &&
              values[j].$3 + epsilon < values[i].$4;
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
