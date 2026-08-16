import 'package:quarantine/engine/audio_planner.dart';
import 'package:quarantine/engine/math3.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError('audio planner: $message');

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final house = loadAuthoredHouse(seed: 42);
  final cues = AudioCueSet(<String, List<String>>{
    'clock': ['clock-a', 'clock-b', 'clock-c'],
  });
  final planner = AudioPlanner(
    house: house,
    cues: cues,
    portalProfiles: {
      'hall-living': const AcousticPortalProfile(
        openGainDb: -2,
        closedGainDb: -18,
        sealedGainDb: -40,
        closedCutoffHz: 900,
        sealedCutoffHz: 180,
      ),
    },
  );
  for (final candidate in house.portals) {
    if (candidate.id != 'hall-living') candidate.locked = true;
  }
  final event = AudioEvent(
    id: 'clock-1',
    sequence: 1,
    cueFamily: 'clock',
    sourceRoom: 'hall',
    position: Vec3(5, 2, 2),
    seed: 17,
    category: AudioCategory.ambience,
    priority: 2,
  );
  final sameRoom = planner.plan(
    event,
    AcousticListener(roomId: 'hall', position: Vec3(5, 1, 3)),
  );
  _expect(sameRoom.portalPath.isEmpty, 'same-room source crossed a portal');
  _expect(
    sameRoom.gainDb == 0 && !sameRoom.unreachable,
    'same-room route changed',
  );
  _expect(
    sameRoom.cue ==
        planner
            .plan(
              event,
              AcousticListener(roomId: 'hall', position: Vec3(5, 1, 3)),
            )
            .cue,
    'cue selection is not deterministic',
  );

  final living = planner.plan(
    event,
    AcousticListener(roomId: 'living-room', position: Vec3(1, 1, 1)),
  );
  _expect(
    living.portalPath.contains('hall-living'),
    'route omitted hall-living',
  );
  _expect(
    living.gainDb == -2 && living.lowPassHz == 20000,
    'open portal transmission is wrong',
  );
  final openTransmission = planner.transmission('hall', 'living-room');
  _expect(
    openTransmission.portalPath.join(',') == 'hall-living' &&
        openTransmission.reachable &&
        openTransmission.muffle01 == 0.0,
    'public transmission route is wrong: ${openTransmission.portalPath}',
  );

  final portal = house.portalById('hall-living')!;
  portal.open = false;
  final closed = planner.plan(
    event,
    AcousticListener(roomId: 'living-room', position: Vec3(1, 1, 1)),
  );
  _expect(
    closed.gainDb == -18 && closed.lowPassHz == 900,
    'closed portal transmission is wrong',
  );
  final closedTransmission = planner.transmission('hall', 'living-room');
  _expect(
    closedTransmission.gainDb == -18 &&
        closedTransmission.lowPassHz == 900 &&
        closedTransmission.muffle01 == 0.55,
    'public transmission did not observe portal state',
  );
  portal.locked = true;
  final sealed = planner.plan(
    event,
    AcousticListener(roomId: 'living-room', position: Vec3(1, 1, 1)),
  );
  _expect(
    sealed.gainDb == -40 && sealed.lowPassHz == 180 && sealed.muffle01 == 1.0,
    'locked portal transmission is wrong',
  );
  portal.locked = false;
  portal.open = true;

  var rejected = false;
  try {
    planner.plan(
      event,
      AcousticListener(roomId: 'missing', position: Vec3(0, 0, 0)),
    );
  } catch (_) {
    rejected = true;
  }
  _expect(rejected, 'missing listener room was accepted');

  var invalidMuffle = false;
  try {
    const AcousticPortalProfile(closedMuffle01: 1.2).validate();
  } catch (_) {
    invalidMuffle = true;
  }
  _expect(invalidMuffle, 'out-of-range muffle should have thrown');
  // PF-06: Continuous opening fraction transmission & muffle curve tests.
  final partialTransmission = planner.transmission(
    'hall',
    'living-room',
    doorOpeningFractions: {'hall-living': 0.4},
  );
  _expect(
    partialTransmission.muffle01 > 0.0 && partialTransmission.muffle01 < 0.55,
    'partial door opening interpolates muffle fraction',
  );
  _expect(
    partialTransmission.barrierIds.contains('hall-living'),
    'barrierIds tracks crossed portals',
  );
  _expect(
    partialTransmission.reasonTrace.contains('opening:0.40'),
    'reasonTrace includes opening fraction',
  );

  // Muffle curve helpers
  _expect(AcousticPortalProfile.muffleToGainDb(0.0) == 0.0, 'muffleToGainDb(0) is 0 dB');
  _expect(AcousticPortalProfile.muffleToGainDb(1.0) == -28.0, 'muffleToGainDb(1) is -28 dB');
  final midCutoff = AcousticPortalProfile.muffleToCutoffHz(0.5);
  _expect(midCutoff > 320 && midCutoff < 20000, 'muffleToCutoffHz(0.5) interpolates in log space');

  print(
    'audio planner: deterministic cues, portal transmission, continuous PF-06 muffle meter pass',
  );
}
