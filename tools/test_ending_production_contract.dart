import 'dart:io';

import 'package:quarantine/game/ending.dart';

void main() {
  final source = File('web/main.dart').readAsStringSync();
  for (final marker in [
    'EndingResolver.resolve',
    'data-ending-kind',
    'data-ending-texture-count',
    'ending recorded',
  ]) {
    if (!source.contains(marker)) {
      throw StateError('production ending seam is missing: $marker');
    }
  }
  const base = EndingInputs(
    day: 21,
    accuracy: 0,
    lockedEntries: 0,
    complianceFloorTripped: true,
    ruptureCompleted: false,
  );
  if (EndingResolver.resolve(base)?.kind != EndingKind.compliance ||
      EndingResolver.resolve(
            const EndingInputs(
              day: 21,
              accuracy: 1,
              lockedEntries: 3,
              complianceFloorTripped: false,
              ruptureCompleted: false,
            ),
          )?.kind !=
          EndingKind.synchronisation ||
      EndingResolver.resolve(
            const EndingInputs(
              day: 21,
              accuracy: 0,
              lockedEntries: 0,
              complianceFloorTripped: false,
              ruptureCompleted: true,
            ),
          )?.kind !=
          EndingKind.rupture) {
    throw StateError(
      'ending production resolver does not expose all three routes',
    );
  }
  print(
    'ending production contract: three fact-derived routes and telemetry pass',
  );
}
