import 'package:quarantine/ui/caption_cue.dart';

void main() {
  const speech = CaptionCue(
    kind: CaptionCueKind.speech,
    speaker: 'Visitor',
    text: 'The door is open.',
  );
  check(speech.formatted == 'Visitor: The door is open.',
      'speech captions retain speaker identity');
  const direction = CaptionCue(
    kind: CaptionCueKind.direction,
    direction: 'left, nearby',
    text: 'knock',
  );
  check(direction.formatted == '(left, nearby): knock',
      'direction captions retain spatial cue');
  const nonSpeech = CaptionCue(
    kind: CaptionCueKind.nonSpeech,
    text: 'wind through shutters',
  );
  check(nonSpeech.formatted == 'wind through shutters',
      'non-speech captions remain readable');
  const empty = CaptionCue(kind: CaptionCueKind.speech, text: '  ');
  check(empty.formatted.isEmpty, 'empty captions are suppressed');
  check(speech.toJson()['kind'] == 'speech', 'caption kind is serializable');
  final source = CaptionCueSource(
    sourceId: 'visitor.mara.day01.arrival',
    lineId: 'visitor.mara.day01.arrival.open',
    cue: speech,
  );
  check(
    source.toJson()['sourceId'] == 'visitor.mara.day01.arrival',
    'caption source identity is serializable',
  );
  expectThrows(() => CaptionCueSource(sourceId: '', cue: speech));
  expectThrows(() => CaptionCueSource(sourceId: 'ambient.wind', lineId: '', cue: nonSpeech));
  final catalog = CaptionCueCatalog([source]);
  check(catalog.sourceFor(source.sourceId)?.cue.formatted == speech.formatted,
      'caption catalog resolves authored source');
  check(catalog.toJson()['sources'] is List,
      'caption catalog is serializable');
  final restoredCatalog = CaptionCueCatalog.fromJson(catalog.toJson());
  check(restoredCatalog.sourceFor(source.sourceId) != null,
      'caption catalog restores from authored JSON');
  expectThrows(() => CaptionCueCatalog([source, source]));
  expectThrows(() => CaptionCueCatalog([
    source,
    CaptionCueSource(
      sourceId: 'visitor.mara.day01.reply',
      lineId: source.lineId,
      cue: nonSpeech,
    ),
  ]));
  expectThrows(() => CaptionCueCatalog.fromJson({
    'sources': [
      {'sourceId': 'bad', 'cue': {'kind': 'unknown', 'text': 'x'}},
    ],
  }));
  print('caption cue: speech, direction, non-speech, and empty guards pass');
}

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void expectThrows(void Function() action) {
  try {
    action();
  } on FormatException {
    return;
  }
  throw StateError('expected caption source validation failure');
}
