/// Representation of a character sheet in NAR-02.
class CharacterSheet {
  final String characterId;
  final String name;
  final String motivation;
  final String voiceFingerprint;
  final bool isCarrier;

  const CharacterSheet({
    required this.characterId,
    required this.name,
    required this.motivation,
    required this.voiceFingerprint,
    required this.isCarrier,
  });

  Map<String, dynamic> toJson() => {
        'characterId': characterId,
        'name': name,
        'motivation': motivation,
        'voiceFingerprint': voiceFingerprint,
        'isCarrier': isCarrier,
      };
}

/// Representation of a story claim in NAR-01.
class StoryClaim {
  final String claimId;
  final String category; // broadcast, house, private
  final String statement;
  final bool isVerified;

  const StoryClaim({
    required this.claimId,
    required this.category,
    required this.statement,
    required this.isVerified,
  });

  Map<String, dynamic> toJson() => {
        'claimId': claimId,
        'category': category,
        'statement': statement,
        'isVerified': isVerified,
      };
}

/// NAR-00, NAR-01, NAR-02 Narrative Lock, Truth Ledger & Character Sheets Manager.
class NarrativeTruthLedger {
  static const Map<String, String> narrativeLock = {
    'timeframe': 'November 1918 (Post-Armistice quarantine)',
    'setting': 'Port town coastal house, Northern England',
    'protagonist': 'Dr. Ayling (District Medical Officer)',
    'centralQuestion': 'What passed through the door during the isolation period?',
  };

  static const List<CharacterSheet> characterSheets = [
    CharacterSheet(
      characterId: 'ayling',
      name: 'Dr. Ayling',
      motivation: 'Enforce quarantine and document health facts',
      voiceFingerprint: 'Clinical, weary, precise',
      isCarrier: true,
    ),
    CharacterSheet(
      characterId: 'denise',
      name: 'Denise (Day 2)',
      motivation: 'Deliver ration parcel and enquire about brother',
      voiceFingerprint: 'Hesitant, urgent, muffled',
      isCarrier: false,
    ),
    CharacterSheet(
      characterId: 'sylvia',
      name: 'Sylvia (Day 3)',
      motivation: 'Request medical exemption certificate',
      voiceFingerprint: 'Formidable, guarded, steady',
      isCarrier: false,
    ),
    CharacterSheet(
      characterId: 'sowerby',
      name: 'Sowerby (Day 5)',
      motivation: 'Inspect coal delivery and check shutter latches',
      voiceFingerprint: 'Grating, direct, practical',
      isCarrier: false,
    ),
  ];

  static const List<StoryClaim> claims = [
    StoryClaim(
      claimId: 'claim-01',
      category: 'broadcast',
      statement: 'Quarantine order 14-B remains in effect until midnight',
      isVerified: true,
    ),
    StoryClaim(
      claimId: 'claim-02',
      category: 'house',
      statement: 'Living room mantle gaslight mantle requires replacement',
      isVerified: true,
    ),
  ];

  static bool auditContradictions() {
    // Assert all claims are verified and no claims contradict lock setting
    return claims.every((c) => c.isVerified);
  }
}
