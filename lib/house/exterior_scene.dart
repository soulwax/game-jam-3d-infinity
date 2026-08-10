import 'house.dart';
import 'room.dart';
import 'exterior_mesh.dart';

/// Builds the first detailed exterior pass from the runtime-scaled house.
/// The interior planes remain collision truth; this scene wraps them with the
/// documented 0.63 m exterior wall thickness and keeps all exterior additions
/// view-only.
HouseExteriorMesh buildHouseExteriorMesh(House house) {
  const width = 10.5 * houseSpatialScale;
  const depth = 10.5 * houseSpatialScale;
  const eaves = 8.03 * houseSpatialScale;
  const ridge = 10.88 * houseSpatialScale;
  const wall = 0.42 * houseSpatialScale;
  final builder = HouseExteriorMeshBuilder();

  for (final facing in Facing.values) {
    _facade(builder, house, facing, width, depth, eaves, wall);
  }
  _stringCourses(builder, width, depth);
  _plinth(builder, width, depth);
  _roof(builder, width, depth, eaves, ridge);
  _roofDetails(builder, width, depth, eaves, ridge);
  _chimneys(builder, width, depth, ridge);
  _drainage(builder, width, depth, eaves);
  _frontThreshold(builder, house, width);
  _serviceDetails(builder, width, depth);
  _boundaryAndStreet(builder, width);
  return builder.build();
}

class _Opening {
  final double u0;
  final double u1;
  final double v0;
  final double v1;
  final bool door;

  const _Opening(this.u0, this.u1, this.v0, this.v1, {this.door = false});

  bool contains(double u, double v) => u > u0 && u < u1 && v > v0 && v < v1;
}

void _facade(
  HouseExteriorMeshBuilder builder,
  House house,
  Facing facing,
  double width,
  double depth,
  double eaves,
  double wall,
) {
  final openings = <_Opening>[];
  for (final room in house.rooms) {
    final roomSize = house.effectiveSize(room);
    final roomOnEdge = switch (facing) {
      Facing.north => room.origin.z == 0,
      Facing.south => (room.origin.z + roomSize.z - depth).abs() < 0.001,
      Facing.west => room.origin.x == 0,
      Facing.east => (room.origin.x + roomSize.x - width).abs() < 0.001,
    };
    if (!roomOnEdge) continue;
    for (final window in room.windows) {
      if (window.facing != facing) continue;
      final globalOffset = switch (facing) {
        Facing.north || Facing.south => room.origin.x + window.offset,
        Facing.east || Facing.west => room.origin.z + window.offset,
      };
      openings.add(
        _Opening(
          globalOffset,
          globalOffset + window.w,
          room.origin.y + window.sill,
          room.origin.y + window.sill + window.h,
        ),
      );
    }
    for (final portal in house.portalsFor(room.id)) {
      if (!portal.exterior || portal.facingFor(room.id) != facing) continue;
      final globalOffset = switch (facing) {
        Facing.north ||
        Facing.south => room.origin.x + portal.offsetFor(room.id),
        Facing.east || Facing.west => room.origin.z + portal.offsetFor(room.id),
      };
      openings.add(
        _Opening(
          globalOffset,
          globalOffset + portal.width,
          room.origin.y,
          room.origin.y + portal.height,
          door: true,
        ),
      );
    }
  }
  final horizontal = <double>{
    0,
    facing == Facing.north || facing == Facing.south ? width : depth,
  };
  final vertical = <double>{0, eaves};
  for (final opening in openings) {
    horizontal
      ..add(opening.u0)
      ..add(opening.u1);
    vertical
      ..add(opening.v0)
      ..add(opening.v1);
  }
  final uValues = horizontal.toList()..sort();
  final vValues = vertical.toList()..sort();
  final brick = 0;
  for (var i = 0; i + 1 < uValues.length; i++) {
    for (var j = 0; j + 1 < vValues.length; j++) {
      final u0 = uValues[i];
      final u1 = uValues[i + 1];
      final v0 = vValues[j];
      final v1 = vValues[j + 1];
      if (openings.any(
        (opening) => opening.contains((u0 + u1) * 0.5, (v0 + v1) * 0.5),
      )) {
        continue;
      }
      switch (facing) {
        case Facing.north:
          builder.box(
            minX: u0,
            minY: v0,
            minZ: -wall,
            maxX: u1,
            maxY: v1,
            maxZ: 0,
            material: brick,
          );
        case Facing.south:
          builder.box(
            minX: u0,
            minY: v0,
            minZ: depth,
            maxX: u1,
            maxY: v1,
            maxZ: depth + wall,
            material: brick,
          );
        case Facing.west:
          builder.box(
            minX: -wall,
            minY: v0,
            minZ: u0,
            maxX: 0,
            maxY: v1,
            maxZ: u1,
            material: brick,
          );
        case Facing.east:
          builder.box(
            minX: width,
            minY: v0,
            minZ: u0,
            maxX: width + wall,
            maxY: v1,
            maxZ: u1,
            material: brick,
          );
      }
    }
  }
  _facadeOpenings(builder, openings, facing, width, depth, wall);
  _facadeDressings(builder, openings, facing, width, depth, wall);
  _facadeMasonry(builder, openings, facing, width, depth, eaves, wall);
}

/// Adds restrained recessed-looking course joints to the broad brick fields.
///
/// The shell intentionally keeps one brick material slot, so these are shallow
/// engineering-brick shadow lines rather than a new texture/material. They are
/// split around windows and doors, which keeps the masonry bond believable at
/// openings and avoids drawing geometry through the view-only apertures.
void _facadeMasonry(
  HouseExteriorMeshBuilder builder,
  List<_Opening> openings,
  Facing facing,
  double width,
  double depth,
  double eaves,
  double wall,
) {
  const mortar = 1;
  final span = facing == Facing.north || facing == Facing.south ? width : depth;
  final uValues = <double>{0, span};
  for (final opening in openings) {
    uValues
      ..add(opening.u0)
      ..add(opening.u1);
  }
  final sorted = uValues.toList()..sort();
  // A 0.72 m course cadence reads as hand-laid masonry at the gameplay scale.
  // The string course at roughly 4 m is left clear as a proper construction
  // break rather than being covered by a shadow strip.
  for (var course = 0; course < 5; course++) {
    final y = 0.68 + course * 0.72;
    if (y > eaves - 0.28) continue;
    for (var i = 0; i + 1 < sorted.length; i++) {
      final u0 = sorted[i] + 0.012;
      final u1 = sorted[i + 1] - 0.012;
      if (u1 - u0 < 0.08 ||
          openings.any((opening) => opening.contains((u0 + u1) * 0.5, y))) {
        continue;
      }
      switch (facing) {
        case Facing.north:
          builder.box(
            minX: u0,
            minY: y - 0.018,
            minZ: -wall - 0.026,
            maxX: u1,
            maxY: y + 0.018,
            maxZ: -wall + 0.004,
            material: mortar,
          );
        case Facing.south:
          builder.box(
            minX: u0,
            minY: y - 0.018,
            minZ: depth + wall - 0.004,
            maxX: u1,
            maxY: y + 0.018,
            maxZ: depth + wall + 0.026,
            material: mortar,
          );
        case Facing.west:
          builder.box(
            minX: -wall - 0.026,
            minY: y - 0.018,
            minZ: u0,
            maxX: -wall + 0.004,
            maxY: y + 0.018,
            maxZ: u1,
            material: mortar,
          );
        case Facing.east:
          builder.box(
            minX: width + wall - 0.004,
            minY: y - 0.018,
            minZ: u0,
            maxX: width + wall + 0.026,
            maxY: y + 0.018,
            maxZ: u1,
            material: mortar,
          );
      }
    }
  }
}

void _facadeDressings(
  HouseExteriorMeshBuilder builder,
  List<_Opening> openings,
  Facing facing,
  double width,
  double depth,
  double wall,
) {
  const stone = 2;
  const timber = 3;
  for (final opening in openings) {
    if (opening.door) continue;
    switch (facing) {
      case Facing.north:
        builder.box(
          minX: opening.u0 - 0.08,
          minY: opening.v0 - 0.08,
          minZ: -wall - 0.08,
          maxX: opening.u1 + 0.08,
          maxY: opening.v0 - 0.02,
          maxZ: -wall,
          material: stone,
        );
        if (opening.v0 < 3.0) {
          builder.box(
            minX: opening.u0 - 0.10,
            minY: opening.v0 - 0.24,
            minZ: -wall - 0.20,
            maxX: opening.u1 + 0.10,
            maxY: opening.v0 - 0.14,
            maxZ: -wall - 0.05,
            material: timber,
          );
          for (final x in [opening.u0 - 0.04, opening.u1 + 0.04]) {
            builder.box(
              minX: x - 0.025,
              minY: opening.v0 - 0.16,
              minZ: -wall - 0.25,
              maxX: x + 0.025,
              maxY: opening.v0 - 0.04,
              maxZ: -wall - 0.17,
              material: 6,
            );
          }
        }
      case Facing.south:
        builder.box(
          minX: opening.u0 - 0.08,
          minY: opening.v0 - 0.08,
          minZ: depth + wall,
          maxX: opening.u1 + 0.08,
          maxY: opening.v0 - 0.02,
          maxZ: depth + wall + 0.08,
          material: stone,
        );
      case Facing.west:
        builder.box(
          minX: -wall - 0.08,
          minY: opening.v0 - 0.08,
          minZ: opening.u0 - 0.08,
          maxX: -wall,
          maxY: opening.v0 - 0.02,
          maxZ: opening.u1 + 0.08,
          material: stone,
        );
      case Facing.east:
        builder.box(
          minX: width + wall,
          minY: opening.v0 - 0.08,
          minZ: opening.u0 - 0.08,
          maxX: width + wall + 0.08,
          maxY: opening.v0 - 0.02,
          maxZ: opening.u1 + 0.08,
          material: stone,
        );
    }
  }
  if (facing != Facing.north) return;
  // Alternating dressed corner blocks make the front read as a maintained
  // end-terrace facade instead of a procedural flat wall.
  for (var i = 0; i < 10; i++) {
    final y = 0.28 + i * 0.72;
    final depthOffset = i.isEven ? 0.02 : 0.10;
    for (final x in [-0.08, width - 0.10]) {
      builder.box(
        minX: x,
        minY: y,
        minZ: -wall - depthOffset,
        maxX: x + 0.18,
        maxY: y + 0.28,
        maxZ: -wall + 0.02,
        material: stone,
      );
    }
  }
}

void _stringCourses(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
) {
  const stone = 2;
  const y0 = 3.96;
  const y1 = 4.08;
  builder.box(
    minX: -0.06,
    minY: y0,
    minZ: -0.05,
    maxX: width + 0.06,
    maxY: y1,
    maxZ: 0.04,
    material: stone,
  );
  builder.box(
    minX: -0.06,
    minY: y0,
    minZ: depth - 0.04,
    maxX: width + 0.06,
    maxY: y1,
    maxZ: depth + 0.05,
    material: stone,
  );
  builder.box(
    minX: -0.05,
    minY: y0,
    minZ: -0.04,
    maxX: 0.04,
    maxY: y1,
    maxZ: depth + 0.04,
    material: stone,
  );
  builder.box(
    minX: width - 0.04,
    minY: y0,
    minZ: -0.04,
    maxX: width + 0.05,
    maxY: y1,
    maxZ: depth + 0.04,
    material: stone,
  );
}

void _facadeOpenings(
  HouseExteriorMeshBuilder builder,
  List<_Opening> openings,
  Facing facing,
  double width,
  double depth,
  double wall,
) {
  for (final opening in openings) {
    final stone = opening.door ? 3 : 2;
    final outer = wall + 0.06;
    switch (facing) {
      case Facing.north:
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v0,
          minZ: -outer,
          maxX: opening.u0,
          maxY: opening.v1,
          maxZ: -wall,
          material: stone,
        );
        builder.box(
          minX: opening.u1,
          minY: opening.v0,
          minZ: -outer,
          maxX: opening.u1 + 0.06,
          maxY: opening.v1,
          maxZ: -wall,
          material: stone,
        );
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v0 - 0.06,
          minZ: -outer,
          maxX: opening.u1 + 0.06,
          maxY: opening.v0,
          maxZ: -wall,
          material: stone,
        );
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v1,
          minZ: -outer,
          maxX: opening.u1 + 0.06,
          maxY: opening.v1 + 0.06,
          maxZ: -wall,
          material: stone,
        );
        if (opening.door) {
          builder.box(
            minX: opening.u0,
            minY: opening.v0,
            minZ: -wall,
            maxX: opening.u0 + 0.07,
            maxY: opening.v1,
            maxZ: 0.65,
            material: 3,
          );
        }
      case Facing.south:
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v0,
          minZ: depth + wall,
          maxX: opening.u0,
          maxY: opening.v1,
          maxZ: depth + outer,
          material: stone,
        );
        builder.box(
          minX: opening.u1,
          minY: opening.v0,
          minZ: depth + wall,
          maxX: opening.u1 + 0.06,
          maxY: opening.v1,
          maxZ: depth + outer,
          material: stone,
        );
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v0 - 0.06,
          minZ: depth + wall,
          maxX: opening.u1 + 0.06,
          maxY: opening.v0,
          maxZ: depth + outer,
          material: stone,
        );
        builder.box(
          minX: opening.u0 - 0.06,
          minY: opening.v1,
          minZ: depth + wall,
          maxX: opening.u1 + 0.06,
          maxY: opening.v1 + 0.06,
          maxZ: depth + outer,
          material: stone,
        );
        if (opening.door) {
          builder.box(
            minX: opening.u0,
            minY: opening.v0,
            minZ: depth - 0.65,
            maxX: opening.u0 + 0.07,
            maxY: opening.v1,
            maxZ: depth + wall,
            material: 3,
          );
        }
      case Facing.west:
        builder.box(
          minX: -outer,
          minY: opening.v0,
          minZ: opening.u0 - 0.06,
          maxX: -wall,
          maxY: opening.v1,
          maxZ: opening.u0,
          material: stone,
        );
        builder.box(
          minX: -outer,
          minY: opening.v0,
          minZ: opening.u1,
          maxX: -wall,
          maxY: opening.v1,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        builder.box(
          minX: -outer,
          minY: opening.v0 - 0.06,
          minZ: opening.u0 - 0.06,
          maxX: -wall,
          maxY: opening.v0,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        builder.box(
          minX: -outer,
          minY: opening.v1,
          minZ: opening.u0 - 0.06,
          maxX: -wall,
          maxY: opening.v1 + 0.06,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        if (opening.door) {
          builder.box(
            minX: -wall,
            minY: opening.v0,
            minZ: opening.u0,
            maxX: 0.65,
            maxY: opening.v1,
            maxZ: opening.u0 + 0.07,
            material: 3,
          );
        }
      case Facing.east:
        builder.box(
          minX: width + wall,
          minY: opening.v0,
          minZ: opening.u0 - 0.06,
          maxX: width + outer,
          maxY: opening.v1,
          maxZ: opening.u0,
          material: stone,
        );
        builder.box(
          minX: width + wall,
          minY: opening.v0,
          minZ: opening.u1,
          maxX: width + outer,
          maxY: opening.v1,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        builder.box(
          minX: width + wall,
          minY: opening.v0 - 0.06,
          minZ: opening.u0 - 0.06,
          maxX: width + outer,
          maxY: opening.v0,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        builder.box(
          minX: width + wall,
          minY: opening.v1,
          minZ: opening.u0 - 0.06,
          maxX: width + outer,
          maxY: opening.v1 + 0.06,
          maxZ: opening.u1 + 0.06,
          material: stone,
        );
        if (opening.door) {
          builder.box(
            minX: width - 0.65,
            minY: opening.v0,
            minZ: opening.u0,
            maxX: width + wall,
            maxY: opening.v1,
            maxZ: opening.u0 + 0.07,
            material: 3,
          );
        }
    }
    if (!opening.door) {
      _sashBars(builder, opening, facing, width, depth, wall, outer);
    }
  }
}

void _sashBars(
  HouseExteriorMeshBuilder builder,
  _Opening opening,
  Facing facing,
  double width,
  double depth,
  double wall,
  double outer,
) {
  const timber = 3;
  final centre = (opening.u0 + opening.u1) * 0.5;
  final meeting = (opening.v0 + opening.v1) * 0.5;
  switch (facing) {
    case Facing.north:
      builder.box(
        minX: centre - 0.025,
        minY: opening.v0,
        minZ: -outer,
        maxX: centre + 0.025,
        maxY: opening.v1,
        maxZ: -wall,
        material: timber,
      );
      builder.box(
        minX: opening.u0,
        minY: meeting - 0.025,
        minZ: -outer,
        maxX: opening.u1,
        maxY: meeting + 0.025,
        maxZ: -wall,
        material: timber,
      );
    case Facing.south:
      builder.box(
        minX: centre - 0.025,
        minY: opening.v0,
        minZ: depth + wall,
        maxX: centre + 0.025,
        maxY: opening.v1,
        maxZ: depth + outer,
        material: timber,
      );
      builder.box(
        minX: opening.u0,
        minY: meeting - 0.025,
        minZ: depth + wall,
        maxX: opening.u1,
        maxY: meeting + 0.025,
        maxZ: depth + outer,
        material: timber,
      );
    case Facing.west:
      builder.box(
        minX: -outer,
        minY: opening.v0,
        minZ: centre - 0.025,
        maxX: -wall,
        maxY: opening.v1,
        maxZ: centre + 0.025,
        material: timber,
      );
      builder.box(
        minX: -outer,
        minY: meeting - 0.025,
        minZ: opening.u0,
        maxX: -wall,
        maxY: meeting + 0.025,
        maxZ: opening.u1,
        material: timber,
      );
    case Facing.east:
      builder.box(
        minX: width + wall,
        minY: opening.v0,
        minZ: centre - 0.025,
        maxX: width + outer,
        maxY: opening.v1,
        maxZ: centre + 0.025,
        material: timber,
      );
      builder.box(
        minX: width + wall,
        minY: meeting - 0.025,
        minZ: opening.u0,
        maxX: width + outer,
        maxY: meeting + 0.025,
        maxZ: opening.u1,
        material: timber,
      );
  }
}

void _plinth(HouseExteriorMeshBuilder builder, double width, double depth) {
  const material = 1;
  builder.box(
    minX: -0.5,
    minY: -0.35,
    minZ: -0.5,
    maxX: width + 0.5,
    maxY: 0,
    maxZ: -0.08,
    material: material,
  );
  builder.box(
    minX: -0.5,
    minY: -0.35,
    minZ: depth + 0.08,
    maxX: width + 0.5,
    maxY: 0,
    maxZ: depth + 0.5,
    material: material,
  );
  builder.box(
    minX: -0.5,
    minY: -0.35,
    minZ: -0.08,
    maxX: -0.08,
    maxY: 0,
    maxZ: depth + 0.08,
    material: material,
  );
  builder.box(
    minX: width + 0.08,
    minY: -0.35,
    minZ: -0.08,
    maxX: width + 0.5,
    maxY: 0,
    maxZ: depth + 0.08,
    material: material,
  );
}

void _roof(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double eaves,
  double ridge,
) {
  const overhang = 0.42;
  const xLeft = -overhang;
  final xRight = width + overhang;
  final xRidge = width * 0.5;
  final slate = 4;
  builder.quad(
    _vertex(xLeft, eaves, -overhang, 0.86, 0.51, -0.04, 0, 0, slate),
    _vertex(xRidge, ridge, -overhang, 0.86, 0.51, -0.04, 0.5, 1, slate),
    _vertex(xRidge, ridge, depth + overhang, 0.86, 0.51, -0.04, 0.5, 1, slate),
    _vertex(xLeft, eaves, depth + overhang, 0.86, 0.51, -0.04, 0, 0, slate),
  );
  builder.quad(
    _vertex(xRidge, ridge, -overhang, -0.86, 0.51, -0.04, 0.5, 1, slate),
    _vertex(xRight, eaves, -overhang, -0.86, 0.51, -0.04, 1, 0, slate),
    _vertex(xRight, eaves, depth + overhang, -0.86, 0.51, -0.04, 1, 0, slate),
    _vertex(xRidge, ridge, depth + overhang, -0.86, 0.51, -0.04, 0.5, 1, slate),
  );
  builder.box(
    minX: xRidge - 0.12,
    minY: ridge - 0.12,
    minZ: -overhang,
    maxX: xRidge + 0.12,
    maxY: ridge + 0.12,
    maxZ: depth + overhang,
    material: 5,
  );
  _gableEnds(builder, width, depth, eaves, ridge);
}

void _gableEnds(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double eaves,
  double ridge,
) {
  const brick = 0;
  const wall = 0.42 * houseSpatialScale;
  final left = 0.0;
  final right = width;
  final apex = width * 0.5;
  // Close the two triangular end walls under the roof. The front/back faces
  // use explicit winding and the three narrow returns preserve the period
  // masonry silhouette from oblique exterior views.
  final front = -wall - 0.003;
  final back = depth + wall + 0.003;
  builder
    ..triangle(
      _vertex(left, eaves, front, 0, 0, -1, 0, 0, brick),
      _vertex(apex, ridge, front, 0, 0, -1, 0.5, 1, brick),
      _vertex(right, eaves, front, 0, 0, -1, 1, 0, brick),
    )
    ..triangle(
      _vertex(left, eaves, back, 0, 0, 1, 0, 0, brick),
      _vertex(right, eaves, back, 0, 0, 1, 1, 0, brick),
      _vertex(apex, ridge, back, 0, 0, 1, 0.5, 1, brick),
    )
    ..quad(
      _vertex(left, eaves, front, -1, 0, 0, 0, 0, brick),
      _vertex(left, eaves, back, -1, 0, 0, 1, 0, brick),
      _vertex(apex, ridge, back, -1, 0, 0, 1, 1, brick),
      _vertex(apex, ridge, front, -1, 0, 0, 0, 1, brick),
    )
    ..quad(
      _vertex(apex, ridge, front, 1, 0, 0, 0, 1, brick),
      _vertex(apex, ridge, back, 1, 0, 0, 1, 1, brick),
      _vertex(right, eaves, back, 1, 0, 0, 1, 0, brick),
      _vertex(right, eaves, front, 1, 0, 0, 0, 0, brick),
    );
}

void _roofDetails(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double eaves,
  double ridge,
) {
  const slate = 4;
  const lead = 5;
  const fascia = 3;
  const overhang = 0.42;
  // Heavy timber fascia and lead edge at the two visible roof ends.
  for (final z in [-overhang - 0.03, depth + overhang - 0.09]) {
    builder.box(
      minX: -overhang,
      minY: eaves - 0.14,
      minZ: z,
      maxX: width + overhang,
      maxY: eaves + 0.02,
      maxZ: z + 0.12,
      material: fascia,
    );
  }
  for (final z in [-overhang - 0.01, depth + overhang - 0.06]) {
    builder.box(
      minX: width * 0.5 - 0.16,
      minY: ridge - 0.16,
      minZ: z,
      maxX: width * 0.5 + 0.16,
      maxY: ridge - 0.05,
      maxZ: z + 0.12,
      material: lead,
    );
  }
  // Short slate starter courses provide a readable eave rhythm without
  // exploding the broad roof plane into thousands of individual slates.
  for (var i = 0; i < 12; i++) {
    final x0 = -overhang + i * (width + 2 * overhang) / 12;
    final x1 = -overhang + (i + 1) * (width + 2 * overhang) / 12 - 0.015;
    builder.box(
      minX: x0,
      minY: eaves - 0.025,
      minZ: -overhang - 0.02,
      maxX: x1,
      maxY: eaves + 0.015,
      maxZ: -overhang + 0.04,
      material: slate,
    );
    builder.box(
      minX: x0,
      minY: eaves - 0.025,
      minZ: depth + overhang - 0.04,
      maxX: x1,
      maxY: eaves + 0.015,
      maxZ: depth + overhang + 0.02,
      material: slate,
    );
  }
  _roofSlateCourses(builder, width, depth, eaves, ridge, overhang);
  for (final x in [width * 0.25, width * 0.75]) {
    // Lead flashing collars where each stack pierces the slate field.
    builder.box(
      minX: x - 0.50,
      minY: ridge - 0.63,
      minZ: depth * 0.14,
      maxX: x + 0.50,
      maxY: ridge - 0.56,
      maxZ: depth * 0.32,
      material: lead,
    );
  }
}

void _roofSlateCourses(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double eaves,
  double ridge,
  double overhang,
) {
  const slate = 4;
  const leftNx = 0.86;
  const rightNx = -0.86;
  const ny = 0.51;
  const nz = -0.04;
  final xLeft = -overhang;
  final xRidge = width * 0.5;
  final xRight = width + overhang;
  final zStart = -overhang + 0.18;
  final zSpan = depth + 2 * overhang - 0.36;
  // Course strips follow the long roof fall. Their tiny lifted offset keeps
  // the authored slate face readable without introducing a second roof layer.
  for (var i = 0; i < 10; i++) {
    final z0 = zStart + zSpan * i / 10;
    final z1 = zStart + zSpan * (i + 1) / 10 - 0.018;
    final yOffset = 0.014;
    builder
      ..quad(
        _vertex(xLeft, eaves + yOffset, z0, leftNx, ny, nz, 0, 0, slate),
        _vertex(xRidge, ridge + yOffset, z0, leftNx, ny, nz, 0.5, 1, slate),
        _vertex(xRidge, ridge + yOffset, z1, leftNx, ny, nz, 0.5, 1, slate),
        _vertex(xLeft, eaves + yOffset, z1, leftNx, ny, nz, 0, 0, slate),
      )
      ..quad(
        _vertex(xRidge, ridge + yOffset, z0, rightNx, ny, nz, 0.5, 1, slate),
        _vertex(xRight, eaves + yOffset, z0, rightNx, ny, nz, 1, 0, slate),
        _vertex(xRight, eaves + yOffset, z1, rightNx, ny, nz, 1, 0, slate),
        _vertex(xRidge, ridge + yOffset, z1, rightNx, ny, nz, 0.5, 1, slate),
      );
  }
}

void _chimneys(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double ridge,
) {
  for (final x in [width * 0.25, width * 0.75]) {
    builder.box(
      minX: x - 0.35,
      minY: ridge - 0.6,
      minZ: depth * 0.18,
      maxX: x + 0.35,
      maxY: ridge + 1.15,
      maxZ: depth * 0.28,
      material: 0,
    );
    builder.box(
      minX: x - 0.47,
      minY: ridge + 1.15,
      minZ: depth * 0.14,
      maxX: x + 0.47,
      maxY: ridge + 1.28,
      maxZ: depth * 0.32,
      material: 5,
    );
    for (final potOffset in [-0.2, 0.2]) {
      builder.box(
        minX: x + potOffset - 0.1,
        minY: ridge + 1.28,
        minZ: depth * 0.18 + 0.03,
        maxX: x + potOffset + 0.1,
        maxY: ridge + 1.72,
        maxZ: depth * 0.28 - 0.03,
        material: 5,
      );
    }
  }
}

void _drainage(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
  double eaves,
) {
  const iron = 6;
  for (final z in [-0.48, depth + 0.48]) {
    builder.box(
      minX: -0.1,
      minY: eaves - 0.16,
      minZ: z - 0.08,
      maxX: width + 0.1,
      maxY: eaves,
      maxZ: z + 0.08,
      material: iron,
    );
  }
  for (final x in [0.0, width]) {
    for (final z in [-0.52, depth + 0.52]) {
      builder.box(
        minX: x - 0.07,
        minY: 0.0,
        minZ: z - 0.07,
        maxX: x + 0.07,
        maxY: eaves,
        maxZ: z + 0.07,
        material: iron,
      );
      for (final y in [2.0, 4.0, 6.0]) {
        builder.box(
          minX: x - 0.11,
          minY: y,
          minZ: z - 0.11,
          maxX: x + 0.11,
          maxY: y + 0.06,
          maxZ: z + 0.11,
          material: iron,
        );
      }
      // The downpipe shoe turns the vertical run into the paving rather than
      // ending as a raw pipe above the foundation line.
      builder.box(
        minX: x - 0.10,
        minY: -0.10,
        minZ: z - 0.13,
        maxX: x + 0.10,
        maxY: 0.10,
        maxZ: z + 0.13,
        material: iron,
      );
    }
  }
}

void _frontThreshold(
  HouseExteriorMeshBuilder builder,
  House house,
  double width,
) {
  const wallOffset = 0.42 * houseSpatialScale;
  final hall = house.byId('hall')!;
  final door = house.portalById('front-door')!;
  final u0 = hall.origin.x + door.offsetFor('hall');
  final u1 = u0 + door.width;
  for (var i = 0; i < 3; i++) {
    builder.box(
      minX: u0 - 0.28 - i * 0.1,
      minY: -0.08 - i * 0.12,
      minZ: -0.7 - i * 0.25,
      maxX: u1 + 0.28 + i * 0.1,
      maxY: 0.02 - i * 0.12,
      maxZ: -0.42 - i * 0.25,
      material: 2,
    );
  }
  builder.box(
    minX: u0 - 0.38,
    minY: 0,
    minZ: -1.12,
    maxX: u0 - 0.27,
    maxY: 1.15,
    maxZ: -0.98,
    material: 6,
  );
  builder.box(
    minX: u1 + 0.27,
    minY: 0,
    minZ: -1.12,
    maxX: u1 + 0.38,
    maxY: 1.15,
    maxZ: -0.98,
    material: 6,
  );
  // A small gas/electric lantern and backplate give the entrance a period
  // scale cue while remaining entirely outside the canonical portal volume.
  builder.box(
    minX: u1 + 0.16,
    minY: 1.55,
    minZ: -wallOffset,
    maxX: u1 + 0.28,
    maxY: 1.95,
    maxZ: -wallOffset + 0.05,
    material: 6,
  );
  builder.box(
    minX: u1 + 0.12,
    minY: 1.42,
    minZ: -wallOffset - 0.06,
    maxX: u1 + 0.32,
    maxY: 1.50,
    maxZ: -wallOffset + 0.08,
    material: 3,
  );
  // A cast-iron boot scraper sits just outside the step line. It is a
  // silhouette/detail cue only and deliberately stays clear of the portal.
  final scraperX = u0 - 0.18;
  builder.box(
    minX: scraperX,
    minY: 0.04,
    minZ: -1.34,
    maxX: scraperX + 0.46,
    maxY: 0.10,
    maxZ: -1.24,
    material: 6,
  );
  for (var i = 0; i < 3; i++) {
    final x = scraperX + 0.06 + i * 0.16;
    builder.box(
      minX: x,
      minY: 0.10,
      minZ: -1.34,
      maxX: x + 0.035,
      maxY: 0.24,
      maxZ: -1.25,
      material: 6,
    );
  }
}

void _serviceDetails(
  HouseExteriorMeshBuilder builder,
  double width,
  double depth,
) {
  const stone = 2;
  const iron = 6;
  const timber = 3;

  // Side-yard coal hatch and grate, set into the plinth rather than the
  // collision wall. The bars are deliberately sparse so the detail reads at
  // normal gameplay distance.
  builder.box(
    minX: width + 0.02,
    minY: -0.03,
    minZ: 2.25,
    maxX: width + 0.10,
    maxY: 0.18,
    maxZ: 3.35,
    material: stone,
  );
  builder.box(
    minX: width + 0.10,
    minY: 0.02,
    minZ: 2.34,
    maxX: width + 0.14,
    maxY: 0.13,
    maxZ: 3.26,
    material: iron,
  );
  for (var i = 0; i < 5; i++) {
    final z = 2.42 + i * 0.18;
    builder.box(
      minX: width + 0.14,
      minY: 0.03,
      minZ: z,
      maxX: width + 0.18,
      maxY: 0.12,
      maxZ: z + 0.07,
      material: iron,
    );
  }

  // Rear service corner: a timber water butt, lid and two iron hoops.
  final buttX = width + 0.58;
  final buttZ = depth - 1.15;
  builder.box(
    minX: buttX - 0.34,
    minY: 0,
    minZ: buttZ - 0.34,
    maxX: buttX + 0.34,
    maxY: 1.05,
    maxZ: buttZ + 0.34,
    material: timber,
  );
  for (final y in [0.26, 0.76]) {
    builder.box(
      minX: buttX - 0.37,
      minY: y,
      minZ: buttZ - 0.37,
      maxX: buttX + 0.37,
      maxY: y + 0.06,
      maxZ: buttZ + 0.37,
      material: iron,
    );
  }
  builder.box(
    minX: buttX - 0.36,
    minY: 1.05,
    minZ: buttZ - 0.36,
    maxX: buttX + 0.36,
    maxY: 1.12,
    maxZ: buttZ + 0.36,
    material: iron,
  );

  // Low ventilation bricks above the engineering plinth on the rear face.
  for (var i = 0; i < 6; i++) {
    final x = 0.65 + i * 1.55;
    builder.box(
      minX: x,
      minY: 0.10,
      minZ: depth + 0.02,
      maxX: x + 0.34,
      maxY: 0.22,
      maxZ: depth + 0.08,
      material: iron,
    );
  }
}

void _boundaryAndStreet(HouseExteriorMeshBuilder builder, double width) {
  const brick = 0;
  builder.box(
    minX: -2.5,
    minY: 0,
    minZ: -4.4,
    maxX: 6.7,
    maxY: 1.0,
    maxZ: -4.05,
    material: brick,
  );
  builder.box(
    minX: 9.4,
    minY: 0,
    minZ: -4.4,
    maxX: width + 2.5,
    maxY: 1.0,
    maxZ: -4.05,
    material: brick,
  );
  const iron = 6;
  for (var i = 0; i < 7; i++) {
    final x = 6.7 + i * 0.45;
    builder.box(
      minX: x,
      minY: 0,
      minZ: -4.35,
      maxX: x + 0.07,
      maxY: 1.25,
      maxZ: -4.12,
      material: iron,
    );
  }
  builder.box(
    minX: -3.0,
    minY: -0.08,
    minZ: -5.2,
    maxX: width + 3.0,
    maxY: 0,
    maxZ: -4.55,
    material: 7,
  );
}

ExteriorVertex _vertex(
  double x,
  double y,
  double z,
  double nx,
  double ny,
  double nz,
  double u,
  double v,
  int material,
) => ExteriorVertex(
  x: x,
  y: y,
  z: z,
  nx: nx,
  ny: ny,
  nz: nz,
  u: u,
  v: v,
  material: material,
);
