import 'package:quarantine/house/kitchen_furnishing_manifest.dart';

void main() {
  assert(KitchenFurnishingManifest.validate(), 'Validation failed');
  assert(KitchenFurnishingManifest.findProp('kitchen.plate-rack') != null);
  assert(KitchenFurnishingManifest.findProp('missing') == null);
  assert(KitchenFurnishingManifest.interactiveProps().isNotEmpty);
  assert(KitchenFurnishingManifest.toJson().containsKey('props'));

  print('KitchenFurnishingManifest tests passed.');
}
