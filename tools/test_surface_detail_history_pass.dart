import 'package:quarantine/house/surface_detail_history_pass.dart';

void main() {
  print('Running SurfaceDetailHistoryPass tests...');

  // Test validation
  final isValid = SurfaceDetailHistoryPass.validate();
  assert(isValid, 'Validation failed: Invalid surface history pass definitions');
  print('PASS: All surface history definitions are valid.');

  // Test specific properties
  final hall = SurfaceDetailHistoryPass.findRoomHistory('hall');
  assert(hall != null, 'Hall profile not found');
  final nonNullHall = hall!;
  assert(nonNullHall.paintGenerationsCount == 3, 'Hall paint generations should be 3');
  assert(nonNullHall.wallpaperPasteShadows == true, 'Hall should have wallpaper paste shadows');
  assert(nonNullHall.wearPathIntensity01 == 0.85, 'Hall wear path should be 0.85');
  assert(nonNullHall.nailHolesCount == 4, 'Hall nail holes should be 4');
  print('PASS: Hall profile has expected properties.');

  // Test cellar special case
  final cellar = SurfaceDetailHistoryPass.findRoomHistory('cellar');
  assert(cellar != null, 'Cellar profile not found');
  final nonNullCellar = cellar!;
  assert(nonNullCellar.paintGenerationsCount == 1, 'Cellar paint generations should be 1');
  assert(nonNullCellar.wearPathIntensity01 == 0.60, 'Cellar wear path should be 0.6');
  assert(nonNullCellar.activeStateVariant == 'flaking-whitewash', 'Cellar variant should be flaking-whitewash');
  print('PASS: Cellar profile has expected properties.');
  
  // Test JSON serialization
  final json = SurfaceDetailHistoryPass.toJson();
  assert(json.containsKey('kitchen'), 'JSON should contain kitchen');
  final spareRoomMap = json['spare-room'] as Map<String, dynamic>;
  assert(spareRoomMap['paintGenerationsCount'] == 1, 'Spare-room JSON paint gen should be 1');
  print('PASS: JSON serialization works correctly.');

  print('All SurfaceDetailHistoryPass tests completed successfully.');
}
