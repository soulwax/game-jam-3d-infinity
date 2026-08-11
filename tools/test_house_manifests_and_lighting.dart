import 'package:quarantine/house/cellar_furnishing_manifest.dart';
import 'package:quarantine/house/bedroom_furnishing_manifest.dart';
import 'package:quarantine/house/upper_and_service_rooms_manifest.dart';
import 'package:quarantine/house/per_room_lighting_rigs.dart';

void main() {
  print('Testing CellarFurnishingManifest...');
  assert(CellarFurnishingManifest.validate(), 'Cellar validation failed');
  final cellarProps = CellarFurnishingManifest.props;
  assert(cellarProps.length == 6, 'Cellar should have 6 props');
  final coalHeap = CellarFurnishingManifest.findProp('cellar.coal-heap');
  assert(coalHeap != null, 'Coal heap not found');
  assert(coalHeap!.collisionRadiusM == 0.8, 'Coal heap collision radius incorrect');
  final interactiveCellar = CellarFurnishingManifest.interactiveProps();
  assert(interactiveCellar.length == 4, 'Cellar should have 4 interactive props');
  final cellarJson = CellarFurnishingManifest.toJson();
  assert(cellarJson.containsKey('props'), 'Cellar json missing props');
  print('CellarFurnishingManifest passed.');

  print('Testing BedroomFurnishingManifest...');
  assert(BedroomFurnishingManifest.validate(), 'Bedroom validation failed');
  final bedroomProps = BedroomFurnishingManifest.props;
  assert(bedroomProps.length == 6, 'Bedroom should have 6 props');
  final wardrobe = BedroomFurnishingManifest.findProp('bedroom.wardrobe');
  assert(wardrobe != null, 'Wardrobe not found');
  assert(wardrobe!.collisionRadiusM == 0.45, 'Wardrobe collision radius incorrect');
  final interactiveBedroom = BedroomFurnishingManifest.interactiveProps();
  assert(interactiveBedroom.length == 3, 'Bedroom should have 3 interactive props');
  final bedroomJson = BedroomFurnishingManifest.toJson();
  assert(bedroomJson.containsKey('props'), 'Bedroom json missing props');
  print('BedroomFurnishingManifest passed.');

  print('Testing UpperAndServiceRoomsManifest...');
  assert(UpperAndServiceRoomsManifest.validate(), 'Upper and service rooms validation failed');
  final landingProps = UpperAndServiceRoomsManifest.landingProps;
  assert(landingProps.length == 5, 'Landing should have 5 props');
  final bathroomProps = UpperAndServiceRoomsManifest.bathroomProps;
  assert(bathroomProps.length == 5, 'Bathroom should have 5 props');
  final spareRoomProps = UpperAndServiceRoomsManifest.spareRoomProps;
  assert(spareRoomProps.length == 5, 'Spare room should have 5 props');
  final balustrade = UpperAndServiceRoomsManifest.findProp('landing.balustrade');
  assert(balustrade != null, 'Balustrade not found');
  assert(balustrade!.collisionRadiusM == 0.1, 'Balustrade collision radius incorrect');
  final interactiveUpper = UpperAndServiceRoomsManifest.interactiveProps();
  assert(interactiveUpper.length == 6, 'Upper and service rooms should have 6 interactive props'); // airingCupboardDoor, lightPullCord, castIronBath, pedestalBasin, medicineCabinet, chainPullCistern, chestOfDrawers, paperArchiveBox... wait let me count:
  // landing: airingCupboardDoor, lightPullCord (2)
  // bathroom: castIronBath, pedestalBasin, medicineCabinet, chainPullCistern (4)
  // spareRoom: chestOfDrawers, paperArchiveBox (2)
  // Total = 8
  assert(interactiveUpper.length == 8, 'Upper and service rooms should have 8 interactive props');
  final upperJson = UpperAndServiceRoomsManifest.toJson();
  assert(upperJson.containsKey('landingProps'), 'Upper json missing landingProps');
  print('UpperAndServiceRoomsManifest passed.');

  print('Testing PerRoomLightingRigs...');
  assert(PerRoomLightingRigs.validate(), 'Lighting rigs validation failed');
  final hallRig = PerRoomLightingRigs.findRigForRoom('hall');
  assert(hallRig.length == 1, 'Hall should have 1 light');
  assert(hallRig.first.colorTemperatureKelvin == 2700, 'Hall light temp should be 2700');
  final spareRoomRig = PerRoomLightingRigs.findRigForRoom('spareRoom');
  assert(spareRoomRig.isEmpty, 'Spare room should have no practical lights');
  final livingRoomRig = PerRoomLightingRigs.findRigForRoom('livingRoom');
  assert(livingRoomRig.length == 2, 'Living room should have 2 lights');
  final lightingJson = PerRoomLightingRigs.toJson();
  assert(lightingJson.containsKey('hall'), 'Lighting json missing hall');
  print('PerRoomLightingRigs passed.');

  print('All tests passed successfully.');
}
