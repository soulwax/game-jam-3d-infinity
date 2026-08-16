import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/engine/master_acoustic_simulator.dart';
import 'house_fixture.dart';

Never _fail(String message) =>
    throw StateError('Audio Acoustic Mixdown test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing Master Acoustic Mixdown & Spatial Simulation...');

  // 1. Engine self-validation
  _expect(MasterAcousticSimulator.validate(), 'MasterAcousticSimulator self-validation failed');

  final house = loadAuthoredHouse(seed: 42);

  // 2. Direct in-room acoustic path
  final directPath = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'hall',
    emitterPos: Vec3(11, 1, 2),
    listenerPos: Vec3(12, 1, 3),
  );
  _expect(directPath.isDirectPath, 'Same-room sound must be direct path');
  _expect(directPath.lowPassCutoffHz == 20000.0, 'In-room cutoff should be 20 kHz');
  _expect(directPath.attenuationDb == 0.0, 'In-room attenuation should be 0 dB');

  // 3. Closed door occlusion
  final hallLiving = house.portals.firstWhere((p) =>
      (p.a == 'hall' && p.b == 'living-room') || (p.b == 'hall' && p.a == 'living-room'));
  hallLiving.open = false;

  final closedDoor = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'living-room',
    emitterPos: Vec3(11, 1, 2),
    listenerPos: Vec3(3, 1, 2),
  );
  _expect(!closedDoor.isDirectPath, 'Closed door must not be direct path');
  _expect(closedDoor.lowPassCutoffHz <= 750.0, 'Closed door should apply low-pass cutoff <= 750 Hz');
  _expect(closedDoor.attenuationDb <= -10.0, 'Closed door should attenuate sound by >= 10 dB');

  // 4. Open door diffraction
  final frontDoorPortal = house.portals.firstWhere((p) =>
      (p.a == 'hall' && p.b == 'living-room') || (p.b == 'hall' && p.a == 'living-room'));
  frontDoorPortal.open = true;

  final openDoor = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'living-room',
    emitterPos: Vec3(11, 1, 2),
    listenerPos: Vec3(3, 1, 2),
  );
  _expect(openDoor.isDirectPath, 'Open door should provide direct acoustic portal path');
  _expect(openDoor.lowPassCutoffHz >= 10000.0, 'Open door cutoff should be >= 10 kHz');

  // 5. Multi-bus gain staging & dialogue ducking
  final normalGains = MasterAcousticSimulator.calculateBusGains(
    isVoiceActive: false,
    isRadioActive: false,
  );
  _expect(normalGains[AudioBusType.ambience] == 1.0, 'Ambience should be at full gain when voice inactive');

  final duckedGains = MasterAcousticSimulator.calculateBusGains(
    isVoiceActive: true,
    isRadioActive: false,
  );
  _expect(duckedGains[AudioBusType.ambience]! < 0.6, 'Ambience should duck during voice');
  _expect(duckedGains[AudioBusType.music]! < 0.6, 'Music should duck during voice');

  // 6. 21-Day Dynamic Soundscape Profiles
  for (var day = 1; day <= 21; day++) {
    final soundscape = MasterAcousticSimulator.evaluateDailyAtmosphere(day);
    _expect(soundscape.dayIndex == day, 'Soundscape day index mismatch');
    _expect(soundscape.primaryAcousticMood.isNotEmpty, 'Day $day must have acoustic mood string');
  }

  // 7. Room Reverb Profiles
  for (final entry in MasterAcousticSimulator.roomReverbProfiles.entries) {
    final profile = entry.value;
    _expect(profile.rt60Seconds > 0.3, 'Room ${profile.roomId} RT60 must be > 0.3s');
    _expect(profile.wetDryMix > 0.0 && profile.wetDryMix < 1.0, 'Wet/dry mix must be between 0 and 1');
  }

  print('All Master Acoustic Mixdown & Spatial Simulation tests passed successfully!');
}
