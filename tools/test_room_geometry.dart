import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house.dart';

Never _fail(String message) => throw StateError(message);

void main() {
  final house = House(42);
  for (final room in house.rooms) {
    final geometry = buildRoomGeometry(house, room);
    if (geometry.floor.isEmpty || geometry.ceiling.isEmpty) {
      _fail('room ${room.id} has no floor or ceiling geometry');
    }
    if (geometry.walls.isEmpty ||
        geometry.walls.any((value) => !value.isFinite)) {
      _fail('room ${room.id} has invalid wall geometry');
    }
  }
  print('room geometry: shared legacy/Pixeldart opening mesh fixture passes');
}
