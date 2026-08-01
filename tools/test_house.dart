import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/house.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) {
    _fail(message);
  }
}

void main() {
  final house = House(42);
  _expect(house.rooms.length == 8, 'house must contain eight rooms');
  _expect(
    house.portals.length == 9,
    'house must own each physical opening once',
  );
  _expect(
    house.windowsFromInside == 9 && house.windowsFromOutside == 11,
    'window discrepancy must remain authored',
  );
  _expect(
    house.stairs.single.landingHeights.join(',') == '1.4,2.8,4.2',
    'stair landing heights must remain stable',
  );

  for (final room in house.rooms) {
    for (final portalId in room.portalIds) {
      final portal = house.portalById(portalId);
      _expect(
        portal != null && portal.touches(room.id),
        '${room.id} must reference only canonical portal endpoints',
      );
    }
  }

  final bedroom = house.byId('bedroom')!;
  final bedside = bedroom.mantles.singleWhere((m) => m.id == 'mantle-bedroom');
  _expect(
    bedroom.toWorld(bedside.localAt).y == 4.1,
    'fixture coordinates must be room-local before world conversion',
  );

  final hallCapsule = Capsule(
    base: Vec3(5.5, 0.3, 3.5),
    tip: Vec3(5.5, 1.5, 3.5),
  );
  _expect(
    !hallCapsule.intersectsStaticGeometry(house, 'hall'),
    'an in-room capsule must not collide with the room volume',
  );
  final tooTall = Capsule(base: Vec3(5.5, 0.3, 3.5), tip: Vec3(5.5, 3.0, 3.5));
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
