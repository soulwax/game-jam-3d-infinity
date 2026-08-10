import 'package:quarantine/engine/pickable_target_validator.dart';
import 'package:quarantine/engine/vec3.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  final validator = PickableTargetValidator();

  final record1 = PickableStateRecord(
    targetId: 'ration-book',
    position: Vec3(7.5, 0.9, 5.5),
  );
  validator.registerTarget(record1);

  check(validator.getRecord('ration-book') != null, 'ration-book registered');
  check(!validator.getRecord('ration-book')!.isCollected, 'starts uncollected');

  // Collect idempotently
  check(validator.collectTarget('ration-book'), 'collect returns true');
  check(validator.getRecord('ration-book')!.isCollected, 'ration-book is collected');
  check(validator.collectTarget('ration-book'), 'idempotent collect returns true');

  // Export save state & restore
  final saveState = validator.exportSaveState();
  final newValidator = PickableTargetValidator();
  newValidator.restoreSaveState(saveState);

  check(newValidator.getRecord('ration-book') != null, 'restored ration-book');
  check(newValidator.getRecord('ration-book')!.isCollected, 'restored isCollected == true');

  print('pickable target validator VIS-008 / I-03: registration, idempotent collection, save/restore pass');
}
