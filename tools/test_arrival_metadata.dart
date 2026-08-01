import 'package:quarantine/story/schema.dart';
import 'package:quarantine/story/validate.dart'
    show validateVisitorArrivalSchedule;

Never _fail(String message) =>
    throw StateError('arrival metadata test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  final story = parseStory({
    'visitor.txt': '''
@visitor warden
@day 2
@arrival 14 3
@tier full.1
The warden waits outside.
''',
  }, complete: false);
  final arrival = story.visitorArrivals['warden']?[2];
  _expect(arrival?.hour == 14 && arrival?.order == 3, 'metadata is parsed');
  final visitorJson = story.toJson()['visitors'] as Map<String, dynamic>;
  final metadata =
      ((visitorJson['warden'] as Map)['_arrival'] as Map)['2'] as Map;
  _expect(
    metadata['hour'] == 14 && metadata['order'] == 3,
    'metadata reaches JSON',
  );

  final ambientStory = parseStory({
    'visitor.txt': '''
@visitor ragman
@day 13
@ambient 17 street full.1
@tier full.1
The cart passes after dark.
''',
  }, complete: false);
  final ambient = ambientStory.visitorAmbient['ragman']?[13];
  _expect(
    ambient?.hour == 17 &&
        ambient?.channel == 'street' &&
        ambient?.lineKey == 'full.1',
    'ambient metadata is parsed',
  );

  final crowded = StoryText();
  for (var index = 0; index < 5; index++) {
    crowded.visitors['visitor-$index'] = {
      2: {'full.1': 'Line.'},
    };
    crowded.visitorArrivals['visitor-$index'] = {
      2: VisitorArrivalMetadata(hour: 8 + index, order: 0),
    };
  }
  var crowdedRejected = false;
  try {
    validateVisitorArrivalSchedule(crowded);
  } on TextError {
    crowdedRejected = true;
  }
  _expect(crowdedRejected, 'more than four daily arrivals is rejected');

  final colliding = StoryText()
    ..visitors['a'] = {
      2: {'full.1': 'Line.'},
    }
    ..visitors['b'] = {
      2: {'full.1': 'Line.'},
    }
    ..visitorArrivals['a'] = {
      2: const VisitorArrivalMetadata(hour: 9, order: 0),
    }
    ..visitorArrivals['b'] = {
      2: const VisitorArrivalMetadata(hour: 9, order: 0),
    };
  var collisionRejected = false;
  try {
    validateVisitorArrivalSchedule(colliding);
  } on TextError {
    collisionRejected = true;
  }
  _expect(collisionRejected, 'duplicate arrival slot is rejected');

  final withoutMetadata = parseStory({
    'visitor.txt': '''
@visitor warden
@day 2
@tier full.1
The warden waits outside.
''',
  }, complete: false);
  final cleanVisitor =
      (withoutMetadata.toJson()['visitors'] as Map)['warden'] as Map;
  _expect(
    !cleanVisitor.containsKey('_arrival'),
    'absence remains explicit in JSON',
  );

  for (final source in [
    '@arrival 24 0',
    '@arrival 12 -1',
    '@arrival noon 0',
    '@arrival 12',
  ]) {
    var rejected = false;
    try {
      parseStory({
        'visitor.txt': '@visitor warden\n@day 2\n$source\n@tier full.1\nLine.',
      }, complete: false);
    } on TextError {
      rejected = true;
    }
    _expect(rejected, 'invalid metadata is rejected: $source');
  }
  print('arrival metadata parsing and JSON seam passed');
}
