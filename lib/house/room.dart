import '../engine/math3.dart';

enum Floor { ground, first, hidden }

enum Facing { north, east, south, west }

Facing opposite(Facing facing) => switch (facing) {
  Facing.north => Facing.south,
  Facing.east => Facing.west,
  Facing.south => Facing.north,
  Facing.west => Facing.east,
};

class Window {
  final String id;
  final Facing facing;
  final double offset;
  final double sill;
  final double w;
  final double h;
  final bool frosted;
  bool shutterOpen;

  Window({
    required this.id,
    required this.facing,
    required this.offset,
    required this.sill,
    required this.w,
    required this.h,
    this.frosted = false,
    this.shutterOpen = true,
  });
}

class Portal {
  final String id;
  final String a;
  final String b;
  final Facing facingA;
  final Facing facingB;
  final double offsetA;
  final double offsetB;
  final double width;
  final double height;
  final bool hingeAtStart;
  final bool sticks;
  final bool exterior;
  final bool stair;
  bool open;
  bool locked;

  Portal({
    required this.id,
    required this.a,
    required this.b,
    required this.facingA,
    required this.facingB,
    required this.offsetA,
    required this.offsetB,
    required this.width,
    required this.height,
    this.hingeAtStart = false,
    this.sticks = false,
    this.exterior = false,
    this.stair = false,
    this.open = true,
    this.locked = false,
  });

  bool touches(String roomId) => a == roomId || b == roomId;

  String? other(String roomId) {
    if (a == roomId) return b;
    if (b == roomId) return a;
    return null;
  }

  Facing facingFor(String roomId) {
    if (a == roomId) return facingA;
    if (b == roomId) return facingB;
    throw ArgumentError.value(roomId, 'roomId', 'not an endpoint of $id');
  }

  double offsetFor(String roomId) {
    if (a == roomId) return offsetA;
    if (b == roomId) return offsetB;
    throw ArgumentError.value(roomId, 'roomId', 'not an endpoint of $id');
  }

  bool get passable => open && !locked && !sticks;
}

class Mantle {
  final String id;
  final String name;
  final Vec3 localAt;
  bool lit;
  final bool broken;
  final String? examineTag;
  bool examined = false;

  Mantle({
    required this.id,
    required this.name,
    required this.localAt,
    this.lit = false,
    this.broken = false,
    this.examineTag,
  });
}

class PlacedObject {
  final String id;
  final String examineTag;
  final Vec3 localAt;

  const PlacedObject({
    required this.id,
    required this.examineTag,
    required this.localAt,
  });
}

class DoorframeHeightMark {
  final String label;
  final double heightMetres;

  const DoorframeHeightMark({required this.label, required this.heightMetres});
}

class StairTransition {
  final String id;
  final String portalId;
  final List<double> landingHeights;
  final Vec3 min;
  final Vec3 max;
  final Vec3 lowerEye;
  final Vec3 upperEye;

  const StairTransition({
    required this.id,
    required this.portalId,
    required this.landingHeights,
    required this.min,
    required this.max,
    required this.lowerEye,
    required this.upperEye,
  });
}

class Room {
  final String id;
  final Floor floor;
  final Vec3 size;
  final Vec3 origin;
  final List<Window> windows;
  final List<String> portalIds;
  final List<Mantle> mantles;
  final List<PlacedObject> objects;
  final String surfaceWall;
  final String surfaceFloor;
  final String surfaceCeiling;
  final List<DoorframeHeightMark> doorframeHeightMarks;

  Room({
    required this.id,
    required this.floor,
    required this.size,
    required this.origin,
    required this.windows,
    required this.portalIds,
    required this.mantles,
    required this.objects,
    required this.surfaceWall,
    required this.surfaceFloor,
    required this.surfaceCeiling,
    this.doorframeHeightMarks = const [],
  });

  Vec3 toWorld(Vec3 local) => origin + local;

  double wallLength(Facing facing) =>
      facing == Facing.north || facing == Facing.south ? size.x : size.z;
}
