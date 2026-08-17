import 'dart:convert';

import 'package:quarantine/story/screenplay.dart';

void main() {
  final base = {
    'version': 1,
    'sources': ['text/story.screenplay'],
    'scenes': <Object>[],
    'events': [
      {'id': 'wake', 'kind': 'broadcast', 'day': 1, 'hour': 7, 'label': 'Wake'},
      {
        'id': 'wake',
        'kind': 'visitor',
        'day': 1,
        'hour': 10,
        'label': 'Duplicate',
      },
    ],
  };
  var rejected = false;
  try {
    StoryScreenplay.fromJson(jsonEncode(base));
  } on FormatException {
    rejected = true;
  }
  if (!rejected) throw StateError('duplicate screenplay event was accepted');
  print('screenplay integrity: duplicate event IDs fail closed');
}
