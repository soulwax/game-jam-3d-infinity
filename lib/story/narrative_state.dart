import 'schema.dart';

/// Small, save-friendly memory for authored visitor beats.
///
/// It intentionally stores facts rather than a relationship score. The house
/// remembers what was done at a particular threshold, which lets later text
/// call back to a pear left in the rain or a record shown too quickly without
/// turning kindness into a meter.
class NarrativeState {
  NarrativeState({
    Map<String, String>? choices,
    Map<String, String>? flags,
    Map<String, FrozenJournalQuote>? frozenQuotes,
  }) : choices = {...?choices},
       flags = {...?flags},
       frozenQuotes = {...?frozenQuotes};

  final Map<String, String> choices;
  final Map<String, String> flags;
  final Map<String, FrozenJournalQuote> frozenQuotes;

  String? choiceFor(String reactionId) => choices[reactionId];
  String? flag(String key) => flags[key];
  bool hasFlag(String key, [String? expected]) =>
      flags.containsKey(key) && (expected == null || flags[key] == expected);

  FrozenJournalQuote? quoteFor(String sceneId) => frozenQuotes[sceneId];

  void rememberQuote(FrozenJournalQuote quote) {
    frozenQuotes[quote.sceneId] = quote;
  }

  void rememberIgnoredVisit(String visitor, int day) {
    flags['ignored.$visitor.$day'] = 'true';
  }

  void apply(VisitorReaction reaction, ReactionOption option) {
    choices[reaction.id] = option.id;
    flags['last-reaction'] = reaction.id;
    for (final effect in option.effects.entries) {
      flags[effect.key] = effect.value;
    }
  }

  Map<String, dynamic> toJson() => {
    'schemaVersion': 1,
    'choices': Map<String, String>.fromEntries(
      choices.entries.toList()..sort((a, b) => a.key.compareTo(b.key)),
    ),
    'flags': Map<String, String>.fromEntries(
      flags.entries.toList()..sort((a, b) => a.key.compareTo(b.key)),
    ),
    'frozenQuotes': {
      for (final entry
          in frozenQuotes.entries.toList()
            ..sort((a, b) => a.key.compareTo(b.key)))
        entry.key: entry.value.toJson(),
    },
  };

  static NarrativeState? tryFromJson(Object? raw) {
    if (raw is! Map) return null;
    final schemaVersion = raw['schemaVersion'];
    if (schemaVersion is! int || schemaVersion != 1) return null;
    final choices = _stringMap(raw['choices']);
    final flags = _stringMap(raw['flags']);
    if (choices == null || flags == null) return null;
    final quotes = <String, FrozenJournalQuote>{};
    final rawQuotes = raw['frozenQuotes'];
    if (rawQuotes is Map) {
      for (final entry in rawQuotes.entries) {
        final quote = FrozenJournalQuote.tryFromJson(entry.value);
        if (entry.key is! String ||
            quote == null ||
            quote.sceneId != entry.key) {
          return null;
        }
        quotes[entry.key as String] = quote;
      }
    }
    return NarrativeState(choices: choices, flags: flags, frozenQuotes: quotes);
  }

  static Map<String, String>? _stringMap(Object? raw) {
    if (raw is! Map) return null;
    final result = <String, String>{};
    for (final entry in raw.entries) {
      if (entry.key is! String || entry.value is! String) return null;
      result[entry.key as String] = entry.value as String;
    }
    return result;
  }
}

class FrozenJournalQuote {
  const FrozenJournalQuote({
    required this.sceneId,
    required this.ordinal,
    required this.revision,
    required this.text,
  });

  final String sceneId;
  final int ordinal;
  final int revision;
  final String text;

  Map<String, dynamic> toJson() => {
    'sceneId': sceneId,
    'ordinal': ordinal,
    'revision': revision,
    'text': text,
  };

  static FrozenJournalQuote? tryFromJson(Object? raw) {
    if (raw is! Map) return null;
    final sceneId = raw['sceneId'];
    final ordinal = raw['ordinal'];
    final revision = raw['revision'];
    final text = raw['text'];
    if (sceneId is! String ||
        sceneId.isEmpty ||
        ordinal is! int ||
        ordinal < 1 ||
        revision is! int ||
        revision < 0 ||
        text is! String ||
        text.isEmpty) {
      return null;
    }
    return FrozenJournalQuote(
      sceneId: sceneId,
      ordinal: ordinal,
      revision: revision,
      text: text,
    );
  }
}
