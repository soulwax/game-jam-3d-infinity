/// Golden Scene Camera Registry for The Quarantine.
/// 
/// Contains canonical camera poses for all rooms to ensure visual consistency
/// across engine changes and material updates.
library quarantine.tools.golden_scene_camera_registry;

/// Defines a canonical camera pose for visual validation.
class GoldenCameraPose {
  /// The unique identifier for this pose.
  final String poseId;
  /// The room this pose is located in.
  final String roomId;
  /// The X position of the camera.
  final double posX;
  /// The Y position of the camera.
  final double posY;
  /// The Z position of the camera.
  final double posZ;
  /// The yaw angle of the camera in degrees.
  final double yawDeg;
  /// The pitch angle of the camera in degrees.
  final double pitchDeg;
  /// The field of view in degrees.
  final double fovDeg;
  /// A description of what this pose captures.
  final String description;
  /// The target Structural Similarity Index (SSIM) for visual validation.
  final double targetSSIM;

  /// Creates a golden camera pose.
  const GoldenCameraPose({
    required this.poseId,
    required this.roomId,
    required this.posX,
    required this.posY,
    required this.posZ,
    required this.yawDeg,
    required this.pitchDeg,
    required this.fovDeg,
    required this.description,
    this.targetSSIM = 0.95,
  });

  /// Converts the pose to a JSON representation.
  Map<String, dynamic> toJson() {
    return {
      'poseId': poseId,
      'roomId': roomId,
      'posX': posX,
      'posY': posY,
      'posZ': posZ,
      'yawDeg': yawDeg,
      'pitchDeg': pitchDeg,
      'fovDeg': fovDeg,
      'description': description,
      'targetSSIM': targetSSIM,
    };
  }
}

/// A registry of all golden scene camera poses.
class GoldenSceneCameraRegistry {
  /// The canonical list of all 32 camera poses (4 per room, 8 rooms).
  static const List<GoldenCameraPose> canonicalPoses = [
    // Hall (4)
    GoldenCameraPose(poseId: 'hall.front_door.hero', roomId: 'hall', posX: 0.0, posY: 1.6, posZ: 0.0, yawDeg: 180.0, pitchDeg: 0.0, fovDeg: 75.0, description: 'Facing the front door.'),
    GoldenCameraPose(poseId: 'hall.stairs.angle', roomId: 'hall', posX: 2.0, posY: 1.6, posZ: 1.0, yawDeg: 45.0, pitchDeg: 10.0, fovDeg: 75.0, description: 'Looking up the stairs.'),
    GoldenCameraPose(poseId: 'hall.radiator.close', roomId: 'hall', posX: -1.0, posY: 1.0, posZ: -2.0, yawDeg: 90.0, pitchDeg: -15.0, fovDeg: 60.0, description: 'Close-up on the radiator.'),
    GoldenCameraPose(poseId: 'hall.corridor.wide', roomId: 'hall', posX: 0.0, posY: 1.6, posZ: 4.0, yawDeg: 0.0, pitchDeg: 0.0, fovDeg: 90.0, description: 'Wide shot of the corridor.'),
    
    // Kitchen (4)
    GoldenCameraPose(poseId: 'kitchen.counter.hero', roomId: 'kitchen', posX: 0.0, posY: 1.6, posZ: 0.0, yawDeg: 90.0, pitchDeg: -5.0, fovDeg: 75.0, description: 'Looking at the kitchen counter.'),
    GoldenCameraPose(poseId: 'kitchen.sink.close', roomId: 'kitchen', posX: 1.0, posY: 1.4, posZ: 0.5, yawDeg: 100.0, pitchDeg: -20.0, fovDeg: 60.0, description: 'Close-up on the sink and dishes.'),
    GoldenCameraPose(poseId: 'kitchen.window.glare', roomId: 'kitchen', posX: -1.5, posY: 1.6, posZ: -1.0, yawDeg: 180.0, pitchDeg: 5.0, fovDeg: 75.0, description: 'Facing the window.'),
    GoldenCameraPose(poseId: 'kitchen.fridge.angle', roomId: 'kitchen', posX: 2.0, posY: 1.6, posZ: 2.0, yawDeg: -45.0, pitchDeg: 0.0, fovDeg: 80.0, description: 'Looking at the fridge.'),

    // Living Room (4)
    GoldenCameraPose(poseId: 'living_room.fireplace.hero', roomId: 'living_room', posX: 0.0, posY: 1.5, posZ: 0.0, yawDeg: 0.0, pitchDeg: 0.0, fovDeg: 75.0, description: 'Looking at the fireplace.'),
    GoldenCameraPose(poseId: 'living_room.sofa.wide', roomId: 'living_room', posX: 3.0, posY: 1.6, posZ: 3.0, yawDeg: -135.0, pitchDeg: -5.0, fovDeg: 85.0, description: 'Wide shot of the seating area.'),
    GoldenCameraPose(poseId: 'living_room.tv.glare', roomId: 'living_room', posX: -2.0, posY: 1.2, posZ: 1.0, yawDeg: 45.0, pitchDeg: 5.0, fovDeg: 70.0, description: 'Looking at the TV screen.'),
    GoldenCameraPose(poseId: 'living_room.bookshelf.close', roomId: 'living_room', posX: 1.0, posY: 1.8, posZ: -3.0, yawDeg: -90.0, pitchDeg: 0.0, fovDeg: 60.0, description: 'Close-up of the bookshelf.'),

    // Cellar (4)
    GoldenCameraPose(poseId: 'cellar.coal_heap.angle', roomId: 'cellar', posX: -1.0, posY: 1.0, posZ: -1.0, yawDeg: -45.0, pitchDeg: -10.0, fovDeg: 75.0, description: 'Looking at the coal heap.'),
    GoldenCameraPose(poseId: 'cellar.stairs_bottom.wide', roomId: 'cellar', posX: 0.0, posY: 0.5, posZ: 2.0, yawDeg: 180.0, pitchDeg: 20.0, fovDeg: 90.0, description: 'Looking up from the bottom of the stairs.'),
    GoldenCameraPose(poseId: 'cellar.fusebox.hero', roomId: 'cellar', posX: 2.0, posY: 1.5, posZ: 0.0, yawDeg: 90.0, pitchDeg: 0.0, fovDeg: 70.0, description: 'Facing the fuse box.'),
    GoldenCameraPose(poseId: 'cellar.corner.dark', roomId: 'cellar', posX: 3.0, posY: 1.2, posZ: 3.0, yawDeg: -135.0, pitchDeg: -5.0, fovDeg: 80.0, description: 'Looking into a dark corner.'),

    // Bedroom (4)
    GoldenCameraPose(poseId: 'bedroom.bed.hero', roomId: 'bedroom', posX: 0.0, posY: 1.5, posZ: 0.0, yawDeg: 0.0, pitchDeg: -10.0, fovDeg: 75.0, description: 'Looking at the bed.'),
    GoldenCameraPose(poseId: 'bedroom.wardrobe.wide', roomId: 'bedroom', posX: -2.0, posY: 1.6, posZ: 2.0, yawDeg: 135.0, pitchDeg: 0.0, fovDeg: 85.0, description: 'Looking towards the wardrobe.'),
    GoldenCameraPose(poseId: 'bedroom.window.moonlight', roomId: 'bedroom', posX: 2.0, posY: 1.6, posZ: -1.0, yawDeg: -90.0, pitchDeg: 5.0, fovDeg: 75.0, description: 'Looking out the window.'),
    GoldenCameraPose(poseId: 'bedroom.desk.close', roomId: 'bedroom', posX: 1.0, posY: 1.4, posZ: 2.5, yawDeg: -45.0, pitchDeg: -15.0, fovDeg: 65.0, description: 'Close-up of the desk and papers.'),

    // Landing (4)
    GoldenCameraPose(poseId: 'landing.stairs_top.hero', roomId: 'landing', posX: 0.0, posY: 1.6, posZ: 0.0, yawDeg: 180.0, pitchDeg: -20.0, fovDeg: 75.0, description: 'Looking down the stairs.'),
    GoldenCameraPose(poseId: 'landing.doors.wide', roomId: 'landing', posX: 0.0, posY: 1.6, posZ: -2.0, yawDeg: 0.0, pitchDeg: 0.0, fovDeg: 90.0, description: 'Wide shot showing all doors.'),
    GoldenCameraPose(poseId: 'landing.window.hero', roomId: 'landing', posX: 2.0, posY: 1.6, posZ: 0.0, yawDeg: 90.0, pitchDeg: 0.0, fovDeg: 75.0, description: 'Looking at the landing window.'),
    GoldenCameraPose(poseId: 'landing.attic_hatch.up', roomId: 'landing', posX: 0.0, posY: 1.6, posZ: 0.0, yawDeg: 0.0, pitchDeg: 80.0, fovDeg: 70.0, description: 'Looking straight up at the attic hatch.'),

    // Bathroom (4)
    GoldenCameraPose(poseId: 'bathroom.mirror.hero', roomId: 'bathroom', posX: 0.0, posY: 1.5, posZ: 0.0, yawDeg: 0.0, pitchDeg: 0.0, fovDeg: 70.0, description: 'Facing the mirror over the sink.'),
    GoldenCameraPose(poseId: 'bathroom.bathtub.angle', roomId: 'bathroom', posX: -1.0, posY: 1.6, posZ: 1.0, yawDeg: 135.0, pitchDeg: -10.0, fovDeg: 75.0, description: 'Looking at the bathtub.'),
    GoldenCameraPose(poseId: 'bathroom.tiles.close', roomId: 'bathroom', posX: 1.0, posY: 1.2, posZ: -0.5, yawDeg: -90.0, pitchDeg: -20.0, fovDeg: 60.0, description: 'Close-up of the wall tiles.'),
    GoldenCameraPose(poseId: 'bathroom.window.wide', roomId: 'bathroom', posX: 0.0, posY: 1.6, posZ: 2.0, yawDeg: 180.0, pitchDeg: 0.0, fovDeg: 90.0, description: 'Wide shot showing the whole bathroom.'),

    // Spare Room (4)
    GoldenCameraPose(poseId: 'spare_room.boxes.hero', roomId: 'spare_room', posX: 0.0, posY: 1.5, posZ: 0.0, yawDeg: 45.0, pitchDeg: -5.0, fovDeg: 75.0, description: 'Looking at the stack of cardboard boxes.'),
    GoldenCameraPose(poseId: 'spare_room.dust.sunlight', roomId: 'spare_room', posX: -1.5, posY: 1.6, posZ: -1.5, yawDeg: 135.0, pitchDeg: 10.0, fovDeg: 75.0, description: 'Looking towards the window with dust motes.'),
    GoldenCameraPose(poseId: 'spare_room.mattress.angle', roomId: 'spare_room', posX: 2.0, posY: 1.4, posZ: 1.0, yawDeg: -90.0, pitchDeg: -15.0, fovDeg: 80.0, description: 'Looking at the old mattress on the floor.'),
    GoldenCameraPose(poseId: 'spare_room.corner.wide', roomId: 'spare_room', posX: -2.0, posY: 1.6, posZ: 2.0, yawDeg: 135.0, pitchDeg: 0.0, fovDeg: 90.0, description: 'Wide shot from the corner of the room.'),
  ];

  /// Gets all poses for a specific room.
  static List<GoldenCameraPose> posesForRoom(String roomId) {
    return canonicalPoses.where((p) => p.roomId == roomId).toList();
  }

  /// Finds a specific pose by ID.
  static GoldenCameraPose? findPose(String poseId) {
    for (final pose in canonicalPoses) {
      if (pose.poseId == poseId) {
        return pose;
      }
    }
    return null;
  }

  /// Validates the registry to ensure all constraints are met.
  static bool validateRegistry() {
    bool isValid = true;
    
    // 1. Ensure exactly 32 poses
    if (canonicalPoses.length != 32) {
      print('FAIL: Registry has ${canonicalPoses.length} poses, expected 32.');
      isValid = false;
    }

    // 2. Check room coverage (8 rooms, 4 poses each)
    final rooms = ['hall', 'kitchen', 'living_room', 'cellar', 'bedroom', 'landing', 'bathroom', 'spare_room'];
    for (final room in rooms) {
      final poses = posesForRoom(room);
      if (poses.length != 4) {
        print('FAIL: Room $room has ${poses.length} poses, expected 4.');
        isValid = false;
      }
    }

    // 3. Target SSIM >= 0.90 and unique pose IDs
    final seenIds = <String>{};
    for (final pose in canonicalPoses) {
      if (pose.targetSSIM < 0.90) {
        print('FAIL: Pose ${pose.poseId} has targetSSIM < 0.90 (${pose.targetSSIM}).');
        isValid = false;
      }
      if (seenIds.contains(pose.poseId)) {
        print('FAIL: Duplicate pose ID found: ${pose.poseId}');
        isValid = false;
      }
      seenIds.add(pose.poseId);
    }

    return isValid;
  }
}

void main() {
  print('Running GoldenSceneCameraRegistry tests...');
  
  if (GoldenSceneCameraRegistry.validateRegistry()) {
    print('PASS: Registry validation succeeded.');
  } else {
    print('FAIL: Registry validation failed.');
  }

  print('\nTesting queries...');
  
  // Test posesForRoom
  final hallPoses = GoldenSceneCameraRegistry.posesForRoom('hall');
  assert(hallPoses.length == 4, 'Should return exactly 4 poses for hall');
  print('PASS: posesForRoom("hall") returned 4 poses.');

  // Test findPose
  final pose = GoldenSceneCameraRegistry.findPose('bedroom.bed.hero');
  assert(pose != null, 'Pose should exist');
  assert(pose!.roomId == 'bedroom', 'Pose room should match');
  print('PASS: findPose("bedroom.bed.hero") succeeded.');
  
  final missing = GoldenSceneCameraRegistry.findPose('nonexistent.pose');
  assert(missing == null, 'Missing pose should return null');
  print('PASS: findPose("nonexistent.pose") returned null.');

  // Test serialization
  final json = pose!.toJson();
  assert(json['poseId'] == 'bedroom.bed.hero', 'toJson() should work');
  assert(json['posX'] == 0.0, 'toJson() should serialize double');
  print('PASS: JSON serialization succeeded.');
  
  print('\nAll tests completed successfully!');
}
