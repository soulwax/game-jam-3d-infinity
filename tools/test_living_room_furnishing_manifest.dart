import 'package:quarantine/house/living_room_furnishing_manifest.dart';

void main() {
  assert(LivingRoomFurnishingManifest.validate(), 'Validation failed');
  assert(LivingRoomFurnishingManifest.findProp('living_room.wireless-set') != null);
  assert(LivingRoomFurnishingManifest.findProp('missing') == null);
  assert(LivingRoomFurnishingManifest.interactiveProps().isNotEmpty);
  assert(LivingRoomFurnishingManifest.toJson().containsKey('props'));

  print('LivingRoomFurnishingManifest tests passed.');
}
