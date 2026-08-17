import 'package:quarantine/game/session.dart';
import 'package:quarantine/journal/entry.dart';
import 'package:quarantine/story/screenplay.dart';
import 'package:quarantine/story/physical_aftermath_manager.dart';

void main() {
  final vocabulary = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['parcel'],
    'place': ['threshold'],
    'time': ['morning'],
  });
  final session = GameSession.create(vocabulary: vocabulary, daySeconds: 24);
  if (!session.waitHours(2) || session.snapshot.hour != 9) {
    throw StateError('bounded wait did not advance the authoritative clock');
  }
  var rejected = false;
  try {
    session.waitHours(4);
  } catch (error) {
    if (error is! ArgumentError) rethrow;
    rejected = true;
  }
  if (!rejected) throw StateError('unbounded wait was accepted');
  final event = ScreenplayEvent(
    id: 'aftermath-test',
    kind: 'aftermath',
    day: 1,
    hour: 9,
    label: 'Placed',
  );
  session.applyAuthoredEvent(event);
  if (session.narrative.flag('aftermath.aftermath-test') != 'placed') {
    throw StateError(
      'aftermath event did not persist a physical consequence seam',
    );
  }
  final residues = PhysicalAftermathManager(
    state: session.narrative,
    events: [event],
  ).getActiveResidues();
  if (residues.length != 1 || residues.single.id != 'residue-aftermath-test') {
    throw StateError('authored aftermath was not materialized for inspection');
  }
  print('session pacing/aftermath: bounded wait and consequence seam pass');
}
