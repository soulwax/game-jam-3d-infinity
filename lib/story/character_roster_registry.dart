/// Character tier classification according to Section 21.6.
enum CharacterTier {
  principal,
  supporting,
  institutional,
}

/// Detailed character profile containing wants, talents, flaws, private facts,
/// and voice fingerprint constraints as defined in Section 21.6 and 21.7.
class CharacterProfile {
  final String id;
  final String name;
  final CharacterTier tier;
  final String immediateWant;
  final String talent;
  final String flaw;
  final String privateFact;
  final String sentenceBehavior;
  final List<String> favoredConcreteFields;
  final List<String> forbiddenPatterns;

  const CharacterProfile({
    required this.id,
    required this.name,
    required this.tier,
    required this.immediateWant,
    required this.talent,
    required this.flaw,
    required this.privateFact,
    required this.sentenceBehavior,
    required this.favoredConcreteFields,
    required this.forbiddenPatterns,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'tier': tier.name,
        'immediateWant': immediateWant,
        'talent': talent,
        'flaw': flaw,
        'privateFact': privateFact,
        'sentenceBehavior': sentenceBehavior,
        'favoredConcreteFields': favoredConcreteFields,
        'forbiddenPatterns': forbiddenPatterns,
      };
}

/// Registry of the complete 23-character roster and Voice Separation Matrix (Section 21.6 & 21.7).
class CharacterRosterRegistry {
  static const List<CharacterProfile> roster = [
    // 1. Principals (9)
    CharacterProfile(
      id: 'protagonist',
      name: 'Protagonist (Dr. Ayling)',
      tier: CharacterTier.principal,
      immediateWant: 'Keep the house, remain independent, and produce a record without relying on Denise.',
      talent: 'Precise spatial observation, small repairs, patient comparison.',
      flaw: 'Converts hurt into evidence; would rather prove a date than admit a choice.',
      privateFact: 'The flu eased on the last day their father lived and they still did not go after a quarrel.',
      sentenceBehavior: 'Precise declaratives, spatial measurements, suppressed admissions.',
      favoredConcreteFields: ['threshold', 'meter', 'clock', 'date', 'shutter'],
      forbiddenPatterns: ['vague emotional pleas', 'mystical speculation'],
    ),
    CharacterProfile(
      id: 'iris',
      name: 'Iris Pethick (No. 10)',
      tier: CharacterTier.principal,
      immediateWant: 'Keep the wall-knock compact and the appearance of an ordinary two-person household.',
      talent: 'Knows domestic rhythms, who needs tea, which sound belongs to which house.',
      flaw: 'Seeks agreement so strongly that she edits a memory while telling it.',
      privateFact: 'Ron left after a row just before Day 1; she continues quoting him in the present.',
      sentenceBehavior: 'Paired assurances, domestic predictions, quotes Ron constantly.',
      favoredConcreteFields: ['cups', 'windows', 'knocks', 'errands'],
      forbiddenPatterns: ['administrative nouns unless borrowed deliberately'],
    ),
    CharacterProfile(
      id: 'denise',
      name: 'Denise',
      tier: CharacterTier.principal,
      immediateWant: 'Make the protagonist acknowledge the missed death, discover if relationship remains.',
      talent: 'Remembers care through objects, routes, food, practical acts; admits proven mistakes.',
      flaw: 'Uses factual tests when she wants an emotional answer; rehearses sincerity.',
      privateFact: 'Brought a pocket list of disputed family memories, crossed out Rhyl after checking ticket.',
      sentenceBehavior: 'Blunt fact, pause, self-correction; emotion arrives through an object.',
      favoredConcreteFields: ['journeys', 'family rooms', 'food', 'injuries'],
      forbiddenPatterns: ['Board administrative cadence except the one designed copied line'],
    ),
    CharacterProfile(
      id: 'ronnie',
      name: 'Ronnie',
      tier: CharacterTier.principal,
      immediateWant: 'Keep the temporary Board wage and be treated as old enough to finish the round.',
      talent: 'Memorizes a script exactly, notices equipment and body fit, keeps promises.',
      flaw: 'Hides every question behind the approved answer.',
      privateFact: 'Seventeen years old; suit and identity card belonged to an older absent worker.',
      sentenceBehavior: 'Exact script followed by one young, bodily observation.',
      favoredConcreteFields: ['suit fit', 'route order', 'time off shift'],
      forbiddenPatterns: ['mature euphemism', 'mystical implication'],
    ),
    CharacterProfile(
      id: 'sowerby',
      name: 'Mr. Sowerby',
      tier: CharacterTier.principal,
      immediateWant: 'Complete every box because an incomplete household may lose allocation.',
      talent: 'Method, neat corrections, calm under accusation.',
      flaw: 'Treats procedure as moral cover and mistakes consistency for fairness.',
      privateFact: 'Backdated or prefilled boxes to keep elderly or absent residents eligible.',
      sentenceBehavior: 'Sequence and boxes; sentences shed personal pronouns under pressure.',
      favoredConcreteFields: ['card', 'margin', 'date', 'initial'],
      forbiddenPatterns: ['jokes', 'threats', 'near enough'],
    ),
    CharacterProfile(
      id: 'ashworth',
      name: 'Peter Ashworth',
      tier: CharacterTier.principal,
      immediateWant: 'Return Eileen\'s sewing case and see if protagonist recognizes him without forcing it.',
      talent: 'Remembers posture, handwriting, household habits, quiet preferences.',
      flaw: 'Withholds the one fact that would let the other person accept or reject his intimacy.',
      privateFact: 'Eileen made him promise not to insist on being remembered; was present during bad winter.',
      sentenceBehavior: 'Warm declaratives, no questions, no defense of his knowledge.',
      favoredConcreteFields: ['habits', 'handwriting', 'touch', 'furniture orientation'],
      forbiddenPatterns: ['exposition about where he learned it'],
    ),
    CharacterProfile(
      id: 'mrs_ayling',
      name: 'Mrs. Ayling (No. 9)',
      tier: CharacterTier.principal,
      immediateWant: 'Be useful enough that nobody is omitted; survive being made responsible for neighbors.',
      talent: 'Routes, names, timing, turning anxiety into work.',
      flaw: 'Accepts a correction too readily when it lets action continue; lets duty speak for choice.',
      privateFact: 'Returned an absent household as present before appointment to keep them registered.',
      sentenceBehavior: 'Courtesy formula, then a small plea she wishes she had not made.',
      favoredConcreteFields: ['names', 'visits', 'who still lives here'],
      forbiddenPatterns: ['relish in authority'],
    ),
    CharacterProfile(
      id: 'sylvia',
      name: 'Sylvia (No. 3)',
      tier: CharacterTier.principal,
      immediateWant: 'Obtain a pencil and an honest answer; make a map of lit windows.',
      talent: 'Patient observation, exact clock timing, fearless direct questions.',
      flaw: 'Confuses dates and house numbers; tests people after they stop answering.',
      privateFact: 'Mother suggested window counting as a game to manage fear; Sylvia thinks it is her own.',
      sentenceBehavior: 'Direct question after literal visual fact.',
      favoredConcreteFields: ['shoes', 'wrists', 'windows', 'weather', 'pencil length'],
      forbiddenPatterns: ['riddles', 'nursery-horror voice', 'adult abstraction'],
    ),
    CharacterProfile(
      id: 'marchant',
      name: 'Dr. Marchant',
      tier: CharacterTier.principal,
      immediateWant: 'Assess people without making the assessment itself isolate them.',
      talent: 'Notices fatigue and shame without dramatizing either; asks repeatable questions.',
      flaw: 'Records distress instead of responding to it; calls neutrality kindness.',
      privateFact: 'Own copies disagree about households; carries forward last week\'s answers from distrust.',
      sentenceBehavior: 'Paired clinical prompts and careful permission.',
      favoredConcreteFields: ['sleep', 'appetite', 'sequence', 'handwriting pressure'],
      forbiddenPatterns: ['diagnosis', 'ominous withholding'],
    ),

    // 2. Supporting Lives (14)
    CharacterProfile(
      id: 'hallow',
      name: 'Mrs. Hallow',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants her mother\'s dish back more than two pounds; ashamed grief is an errand.',
      talent: 'Remembers appointments precisely; circles absent person\'s name instead of saying it.',
      flaw: 'Grief manifests as persistent financial and heirloom transactions.',
      privateFact: 'The debt is real but irrelevant compared to the missing family dish.',
      sentenceBehavior: 'Circles the point through price and provenance.',
      favoredConcreteFields: ['dish', 'debt', 'calendar'],
      forbiddenPatterns: ['teasing ambiguity'],
    ),
    CharacterProfile(
      id: 'wren',
      name: 'Miss Wren',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants every body counted because a crossed-off name loses practical rights.',
      talent: 'Excellent mental arithmetic; rapid household enumeration.',
      flaw: 'Reduces a person to household status when hurried.',
      privateFact: 'Keeps a pocket duplicate of names removed from the official sheet.',
      sentenceBehavior: 'Totals spoken aloud, corrections stated cleanly.',
      favoredConcreteFields: ['names', 'occupancy', 'rows'],
      forbiddenPatterns: ['ornamental period phrasing'],
    ),
    CharacterProfile(
      id: 'voss',
      name: 'Mr. Voss',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants a traceable paper trail so blame cannot erase what he saw.',
      talent: 'Beautiful copying and version recall.',
      flaw: 'Trusts his transcription over lived testimony.',
      privateFact: 'Makes unauthorized carbons of corrected sheets.',
      sentenceBehavior: 'Clauses qualify the status of a copy.',
      favoredConcreteFields: ['versions', 'carbons', 'figures'],
      forbiddenPatterns: ['generic "the whole of it" repetition'],
    ),
    CharacterProfile(
      id: 'fairhurst',
      name: 'Nurse Fairhurst',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants isolated residents to be seen after official round is shortened.',
      talent: 'Reads posture, skin, breath, whether a cup was actually drunk.',
      flaw: 'Softens hard news until it becomes vague.',
      privateFact: 'Performs off-the-books return visits not authorized by Marchant.',
      sentenceBehavior: 'Bodily noticing plus a soft imperative.',
      favoredConcreteFields: ['tea drunk', 'breath', 'sleeves', 'sleep'],
      forbiddenPatterns: ['Board passive voice except when quoting'],
    ),
    CharacterProfile(
      id: 'liddell',
      name: 'Mr. Liddell',
      tier: CharacterTier.supporting,
      immediateWant: 'Close one stale line order before retirement makes it someone else\'s job.',
      talent: 'Traces dead circuits by continuity and wall routes.',
      flaw: 'Persists with obsolete systems past their usefulness.',
      privateFact: 'Carries old GPO bag and traces a pair of dead wires in the wall.',
      sentenceBehavior: 'Work-order language with plain trade metaphors.',
      favoredConcreteFields: ['pair', 'junction', 'continuity', 'wall route'],
      forbiddenPatterns: ['invented technobabble'],
    ),
    CharacterProfile(
      id: 'corrigan',
      name: 'Mrs. Corrigan',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants a room she can unpack in and influence over decisions made about her.',
      talent: 'Packs, mends, reads a queue quickly.',
      flaw: 'Floats a guess as news when powerlessness becomes unbearable.',
      privateFact: 'Her speculation about changed ration hours originated the street rumor.',
      sentenceBehavior: 'Present tense slips around packed belongings.',
      favoredConcreteFields: ['case', 'room', 'queue', 'key', 'borrowed shelf'],
      forbiddenPatterns: ['vague spectral language'],
    ),
    CharacterProfile(
      id: 'reeve',
      name: 'Mr. Reeve',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants households to retain light while keeping his own book defensible.',
      talent: 'Reads consumption patterns instantly; familiar with every kitchen.',
      flaw: 'Records the lower of two plausible meter readings to shield neighbors.',
      privateFact: 'Merciful falsification makes his exactness harder to treat as truth.',
      sentenceBehavior: 'Economical workman\'s wit, exact numbers.',
      favoredConcreteFields: ['reading', 'mantle', 'allowance', 'sink'],
      forbiddenPatterns: ['uncertainty on a true meter value'],
    ),
    CharacterProfile(
      id: 'askew',
      name: 'Harold Askew',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants milk round to remain a round rather than a list of cancellations.',
      talent: 'Counts households through bottles and remembers doorstep habits.',
      flaw: 'Overlooks people when their pattern looks superficially normal.',
      privateFact: 'Leaves an unauthorized bottle at No. 3 after allocation changes.',
      sentenceBehavior: 'Count and route rhythm.',
      favoredConcreteFields: ['bottles', 'empties', 'time', 'doorstep'],
      forbiddenPatterns: ['knowledge of indoor life'],
    ),
    CharacterProfile(
      id: 'dalgleish',
      name: 'Ken Dalgleish',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants delivery to continue because post crossing line proves outside functions.',
      talent: 'Knows houses by mail and route; converts business into gossip.',
      flaw: 'Circulates previous-tenant letters rather than returning them "not known".',
      privateFact: 'Refuses to officially close a person he never met.',
      sentenceBehavior: 'Route gossip in address order.',
      favoredConcreteFields: ['postmark', 'box', 'round', 'handwriting'],
      forbiddenPatterns: ['knowing letter contents'],
    ),
    CharacterProfile(
      id: 'kettering',
      name: 'Mr. Kettering',
      tier: CharacterTier.supporting,
      immediateWant: 'Wants recoverable items saved before cleared streets are stripped.',
      talent: 'Reads material, repair, and imminent disposal.',
      flaw: 'Treats other people\'s attachment as weight and price.',
      privateFact: 'Round doubles as a search for tools belonging to his son on a cleared street.',
      sentenceBehavior: 'Material verbs and estimates.',
      favoredConcreteFields: ['iron', 'cloth', 'glue', 'weight'],
      forbiddenPatterns: ['grand indifference without the son\'s trace'],
    ),
    CharacterProfile(
      id: 'prentice',
      name: 'Mr. Prentice',
      tier: CharacterTier.supporting,
      immediateWant: 'Honor a standing appointment because repetition outlived client and wife.',
      talent: 'Hears pitch, resonance, changed room acoustics.',
      flaw: 'Politeness lets him preserve a useless routine.',
      privateFact: 'The tuning visit itself is a quiet memorial to his deceased wife.',
      sentenceBehavior: 'Restrained listening vocabulary.',
      favoredConcreteFields: ['pitch', 'season', 'room resonance'],
      forbiddenPatterns: ['spooky-musician aphorisms'],
    ),
    CharacterProfile(
      id: 'bells',
      name: 'The Bell Sisters',
      tier: CharacterTier.supporting,
      immediateWant: 'Remain distinct persons while relying on each other to survive the order.',
      talent: 'Coordinate errands and remember different halves of events.',
      flaw: 'Exploit twin confusion to avoid blame; official cards never recovered.',
      privateFact: 'Answered to each other\'s names to collect medicine during illness.',
      sentenceBehavior: 'Pronoun and hand corrections; turn-taking without comic bickering.',
      favoredConcreteFields: ['scar', 'hand', 'turn-taking'],
      forbiddenPatterns: ['creepy twins register'],
    ),
    CharacterProfile(
      id: 'cole',
      name: 'Cole',
      tier: CharacterTier.supporting,
      immediateWant: 'Finish the watch, collect the wage, go somewhere called home.',
      talent: 'Records negative facts precisely—door shut, nobody seen.',
      flaw: 'Refuses any inference outside his literal duty line.',
      privateFact: 'Home is a bunk at the depot because actual address is beyond boundary.',
      sentenceBehavior: 'Short negative clauses and end-of-shift facts.',
      favoredConcreteFields: ['shut/open', 'seen/not seen', 'signed'],
      forbiddenPatterns: ['sadism', 'institutional speeches'],
    ),
    CharacterProfile(
      id: 'attercliffe',
      name: 'Mrs. Attercliffe',
      tier: CharacterTier.supporting,
      immediateWant: 'Husband remains part of household so daily life retains shape.',
      talent: 'Maintains domestic sequence and notices what a room needs.',
      flaw: 'Refuses the past tense; did not report pre-order death.',
      privateFact: 'Receives two-person allowance; extra plate is grief, fraud, and comfort.',
      sentenceBehavior: 'Domestic present tense and repeated placement.',
      favoredConcreteFields: ['plate', 'chair', 'fire', 'portion'],
      forbiddenPatterns: ['treating grief as secret knowledge'],
    ),
  ];

  /// Look up a character profile by identifier.
  static CharacterProfile? getProfile(String id) {
    try {
      return roster.firstWhere((p) => p.id == id);
    } catch (_) {
      return null;
    }
  }

  /// Verifies that all 23 characters exist and adhere to roster rules.
  static bool verifyRosterIntegrity() {
    if (roster.length != 23) return false;
    final ids = <String>{};
    for (final p in roster) {
      if (ids.contains(p.id)) return false;
      ids.add(p.id);
      if (p.immediateWant.isEmpty || p.talent.isEmpty || p.flaw.isEmpty) return false;
      if (p.favoredConcreteFields.isEmpty) return false;
    }
    return true;
  }
}
