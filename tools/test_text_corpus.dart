import 'dart:io';

import 'package:quarantine/story/corpus.dart';
import 'package:quarantine/story/drift_resolve.dart';
import 'package:quarantine/story/schema.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool value, String message) {
  if (!value) _fail(message);
}

void main() {
  final corpus = decodeTextCorpus(File('web/res/text.json').readAsStringSync());
  _expect(corpus['broadcasts']!['1'] is Map, 'Day 1 broadcast must decode');
  _expect(corpus['visitors']!['ayling'] is Map, 'visitor corpus must decode');
  _expect(corpus['vocabulary']!['who'] is List, 'vocabulary must decode');
  var rejectedRoot = false;
  try {
    decodeTextCorpus('[]');
  } on FormatException {
    rejectedRoot = true;
  }
  _expect(rejectedRoot, 'a non-object root must be rejected');
  var rejectedSection = false;
  try {
    decodeTextCorpus('{"broadcasts":[]}');
  } on FormatException {
    rejectedSection = true;
  }
  _expect(rejectedSection, 'a non-object section must be rejected');

  // §57.3 / Q27: drift spans are resolved once at build time, so the shipped
  // corpus never carries a literal `{a|b}`.
  bool hasBrace(Object? value) {
    if (value is String) return value.contains('{') || value.contains('}');
    if (value is List) return value.any(hasBrace);
    if (value is Map) return value.values.any(hasBrace);
    return false;
  }

  _expect(
    !hasBrace(corpus['broadcasts']),
    'the compiled broadcast section must be brace-free',
  );
  _expect(
    !hasBrace(corpus['visitors']),
    'the compiled visitor section must be brace-free',
  );

  // A span outside broadcasts/visitor dialogue must fail the build, not
  // silently ship a literal brace somewhere nobody voices it.
  final strayInNight = StoryText()
    ..nights[1] = ['A door {opens|closes} on its own.'];
  var rejectedStraySpan = false;
  try {
    resolveDriftSpans(strayInNight);
  } on TextError {
    rejectedStraySpan = true;
  }
  _expect(
    rejectedStraySpan,
    'a drift span outside broadcasts/visitor dialogue must fail resolution',
  );

  // Resolution is a stable hash of the span's address, not a coin flip: the
  // same corpus always resolves to the same picks.
  StoryText twoAlternatives() => StoryText()
    ..broadcasts[1] = {'status': 'All routes {remain|stay} closed.'};
  final firstChoices = resolveDriftSpans(twoAlternatives());
  final secondChoices = resolveDriftSpans(twoAlternatives());
  _expect(
    firstChoices.length == 1 &&
        firstChoices['broadcast-day01:status:0'] ==
            secondChoices['broadcast-day01:status:0'],
    'resolving the same span twice must pick the same alternative',
  );

  print('text corpus decoding is browser-runtime independent');
}
