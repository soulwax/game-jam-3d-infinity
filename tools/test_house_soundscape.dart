import 'dart:io';

import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/inventory.dart';
import 'package:quarantine/house/soundscape.dart';

Never fail(String message) => throw StateError('house soundscape: $message');

void main() {
  final root = Directory.current.path;
  final inventory = HouseInventory.decode(
    File('$root/assets/house/inventory.json').readAsStringSync(),
  );
  final house = House(42);
  final soundscape = HouseSoundscape.decode(
    File('$root/assets/house/soundscape.json').readAsStringSync(),
  );
  soundscape.validateAgainst(house, inventory);
  if (soundscape.emitters.length != 8) fail('expected eight authored emitters');
  final clock = soundscape.emitterFor('hall-clock');
  if (clock.cue('tick') != 'clock-tick' ||
      clock.cue('cuckoo') != 'clock-cuckoo' ||
      clock.cue('bell') != 'clock-bell' ||
      clock.cue('chime') != 'clock-chime') {
    fail('clock cues drifted');
  }
  final clockLogic = HouseClock()..reset(day: 1, hour: 11.98);
  final events = clockLogic.advance(day: 1, hour: 12.02);
  if (events.map((event) => event.event).join(',') !=
      'tick,cuckoo,bell,chime') {
    fail('six-hour clock crossing did not emit tick, cuckoo, bell, and chime');
  }
  if (clockLogic.advance(day: 2, hour: 6).isNotEmpty) {
    fail('day transition replayed historical clock events');
  }
  final service = HouseServiceSoundScheduler()..advance(day: 1, hour: 9.98);
  final serviceEvents = service.advance(day: 1, hour: 10.02);
  if (serviceEvents.length != 5 ||
      serviceEvents[0].emitterId != 'kitchen-range' ||
      serviceEvents[1].emitterId != 'cellar-drain' ||
      serviceEvents[2].emitterId != 'front-door-knocker' ||
      serviceEvents[3].emitterId != 'landing-window' ||
      serviceEvents[4].emitterId != 'kitchen-pipe') {
    fail('service sound schedule drifted');
  }
  print(
    'house soundscape: ${soundscape.emitters.length} emitters and clock '
    'scheduler pass',
  );
}
