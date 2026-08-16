import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) {
    _fail(message);
  }
}

void main() {
  final house = loadAuthoredHouse(seed: 42);
  _expect(house.rooms.length == 8, 'house must contain eight rooms');
  _expect(
    house.portals.length == 9,
    'house must own each physical opening once',
  );
  _expect(
    house.windowsFromInside == 9 && house.windowsFromOutside == 11,
    'window discrepancy must remain authored',
  );
  _expect(house.stairs.single.landingHeights.every((height) => height > 0), 'authored stair landings must be positive');
  final living = house.byId('living-room')!;
  _expect(living.size.x > 0 && living.size.y > 0 && living.size.z > 0, 'authored room dimensions must be positive');

  for (final room in house.rooms) {
    for (final portalId in room.portalIds) {
      final portal = house.portalById(portalId);
      _expect(
        portal != null && portal.touches(room.id),
        '${room.id} must reference only canonical portal endpoints',
      );
    }
  }

  final hall = house.byId('hall')!;
  final hallCapsule = Capsule(
    base: hall.origin + Vec3(hall.size.x * 0.5, 0.3, hall.size.z * 0.5),
    tip: hall.origin + Vec3(hall.size.x * 0.5, 1.5, hall.size.z * 0.5),
  );
  _expect(
    !hallCapsule.intersectsStaticGeometry(house, 'hall'),
    'an in-room capsule must not collide with the room volume',
  );
  final tooTall = Capsule(
    base: hall.origin + Vec3(hall.size.x * 0.5, 0.3, hall.size.z * 0.5),
    tip: hall.origin + Vec3(hall.size.x * 0.5, 6.0, hall.size.z * 0.5),
  );
  _expect(
    tooTall.intersectsStaticGeometry(house, 'hall'),
    'capsule height must respect the room ceiling',
  );

  final cellar = house.portalById('hall-cellar')!;
  _expect(
    !cellar.passable && cellar.sticks,
    'the cellar portal starts closed and sticks',
  );
  print(
    'house contract, local fixtures, portals, stairs, and capsule bounds pass',
  );
}
