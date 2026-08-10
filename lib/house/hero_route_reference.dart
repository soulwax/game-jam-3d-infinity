import 'house.dart';

/// Representation of a canonical hero camera waypoint along the main route for H-00.
class HeroCameraWaypoint {
  final String id;
  final String roomId;
  final ({double x, double y, double z}) position;
  final ({double x, double y, double z}) lookAt;
  final double fovYDegrees;
  final String label;

  HeroCameraWaypoint({
    required this.id,
    required this.roomId,
    required this.position,
    required this.lookAt,
    this.fovYDegrees = 65.0,
    required this.label,
  }) {
    final localEye = position.y % 3.9;
    if (localEye < 1.4 || localEye > 1.8) {
      throw ArgumentError('Player eye height must be within human bounds [1.4m, 1.8m] above floor');
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'roomId': roomId,
        'position': [position.x, position.y, position.z],
        'lookAt': [lookAt.x, lookAt.y, lookAt.z],
        'fovYDegrees': fovYDegrees,
        'label': label,
      };
}

/// Representation of a collision corridor requirement along the hero route.
class HeroCollisionCorridor {
  final String id;
  final String fromRoomId;
  final String toRoomId;
  final double minWidthMetres;
  final double minHeightMetres;

  HeroCollisionCorridor({
    required this.id,
    required this.fromRoomId,
    required this.toRoomId,
    this.minWidthMetres = 0.9,
    this.minHeightMetres = 2.2,
  }) {
    if (minWidthMetres < 0.8) {
      throw ArgumentError('Corridor width must be at least 0.8m for navigation clearance');
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'fromRoomId': fromRoomId,
        'toRoomId': toRoomId,
        'minWidthMetres': minWidthMetres,
        'minHeightMetres': minHeightMetres,
      };
}

/// Original aesthetic reference board specifications for H-00.
class HeroReferenceBoard {
  final String title;
  final String architecturalStyle;
  final Map<String, String> materialIntent;
  final Map<String, String> lightingIntent;
  final Map<String, String> atmosphericDensity;

  const HeroReferenceBoard({
    this.title = 'The Quarantine — 1930s Edwardian Terrace Reference Packet',
    this.architecturalStyle = 'English Domestic Revival / Interwar Edwardian Terrace',
    this.materialIntent = const {
      'walls': 'Distressed lime plaster over brick; faded striped floral paper; damp tidemarks',
      'floors': 'Dark stained pine floorboards; linoleum in kitchen/bathroom; concrete cellar',
      'fixtures': 'Cast-iron gas mantles; brass door furniture; enamelled sink and roll-top bath',
    },
    this.lightingIntent = const {
      'daylight': 'Overcast 6500K skylight through grimy sash windows',
      'practicals': 'Warm 2200K incandescent gas mantles creating tight directional pools',
      'shadows': 'Soft PCF contact shadows grounding furniture without total black-crush',
    },
    this.atmosphericDensity = const {
      'fog': 'Subtle cool interior haze deepening with distance (fogStart 4m, fogEnd 22m)',
      'wetness': 'Depth-weighted condensation on glass panes and cellar masonry',
    },
  });

  Map<String, dynamic> toJson() => {
        'title': title,
        'architecturalStyle': architecturalStyle,
        'materialIntent': materialIntent,
        'lightingIntent': lightingIntent,
        'atmosphericDensity': atmosphericDensity,
      };
}

/// H-00 Hero Route Camera, Collision Corridor, and Reference Board Specification.
class HeroRouteReference {
  final List<HeroCameraWaypoint> waypoints;
  final List<HeroCollisionCorridor> corridors;
  final HeroReferenceBoard referenceBoard;

  const HeroRouteReference({
    required this.waypoints,
    required this.corridors,
    required this.referenceBoard,
  });

  /// Factory providing frozen canonical hero waypoints, corridors, and reference board for H-00.
  factory HeroRouteReference.canonical() {
    return HeroRouteReference(
      waypoints: [
        HeroCameraWaypoint(
          id: 'waypoint-hall-start',
          roomId: 'hall',
          position: (x: 12.0, y: 1.65, z: 2.0),
          lookAt: (x: 12.0, y: 1.65, z: 8.0),
          label: 'Front door entry view looking down central hall',
        ),
        HeroCameraWaypoint(
          id: 'waypoint-living-room',
          roomId: 'living-room',
          position: (x: 5.0, y: 1.65, z: 4.5),
          lookAt: (x: 5.0, y: 1.20, z: 1.8),
          label: 'Living room hearth and wireless cabinet view',
        ),
        HeroCameraWaypoint(
          id: 'waypoint-kitchen-threshold',
          roomId: 'kitchen',
          position: (x: 3.0, y: 1.65, z: 12.0),
          lookAt: (x: 5.0, y: 1.40, z: 14.0),
          label: 'Kitchen range and sink worktable view',
        ),
        HeroCameraWaypoint(
          id: 'waypoint-bedroom-upper',
          roomId: 'bedroom',
          position: (x: 5.0, y: 5.55, z: 4.5),
          lookAt: (x: 3.0, y: 5.00, z: 2.0),
          label: 'Upper bedroom writing desk and wardrobe view',
        ),
      ],
      corridors: [
        HeroCollisionCorridor(
          id: 'corridor-front-door-hall',
          fromRoomId: 'exterior',
          toRoomId: 'hallway',
          minWidthMetres: 1.0,
          minHeightMetres: 2.4,
        ),
        HeroCollisionCorridor(
          id: 'corridor-hall-living',
          fromRoomId: 'hallway',
          toRoomId: 'living-room',
          minWidthMetres: 0.95,
          minHeightMetres: 2.2,
        ),
        HeroCollisionCorridor(
          id: 'corridor-hall-kitchen',
          fromRoomId: 'hallway',
          toRoomId: 'kitchen',
          minWidthMetres: 0.90,
          minHeightMetres: 2.2,
        ),
        HeroCollisionCorridor(
          id: 'corridor-stair-flight',
          fromRoomId: 'hallway',
          toRoomId: 'bedroom',
          minWidthMetres: 0.90,
          minHeightMetres: 2.2,
        ),
      ],
      referenceBoard: const HeroReferenceBoard(),
    );
  }

  /// Verifies all waypoints are located within playable room bounds of the given [house].
  bool validateAgainstHouse(House house) {
    for (final wp in waypoints) {
      final room = house.byId(wp.roomId);
      if (room == null) return false;
      final origin = room.origin;
      final size = room.size;
      // Position must fall inside room X/Z origin + size
      if (wp.position.x < origin.x || wp.position.x > origin.x + size.x ||
          wp.position.z < origin.z || wp.position.z > origin.z + size.z) {
        return false;
      }
    }
    return true;
  }

  Map<String, dynamic> toJson() => {
        'waypoints': waypoints.map((w) => w.toJson()).toList(),
        'corridors': corridors.map((c) => c.toJson()).toList(),
        'referenceBoard': referenceBoard.toJson(),
      };
}
