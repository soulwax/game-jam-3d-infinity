import 'package:quarantine/game/feature_snapshot.dart';
import 'package:quarantine/presentation/feature_frame_adapter.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final feature = FeatureSnapshot(
    facts: const {'roomId': 'hall'},
    events: const [],
  );
  const adapter = FeatureFrameAdapter();
  final frame = adapter.frame(feature, interpolation: 0.5);
  _expect(
    frame.snapshot.encode() == feature.facts.encode(),
    'frame preserves canonical facts',
  );
  final action = adapter.input('use', pressed: true);
  _expect(
    action.id == 'use' && action.pressed,
    'input maps without backend branching',
  );
  print('feature frame adapter: shared transition seam passes');
}
