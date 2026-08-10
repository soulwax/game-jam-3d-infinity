/// Depth level of narrative reference immersion for Section 21.11.
enum ReferenceDepth {
  ordinaryTexture,
  attentivePattern,
  specialistHistorical,
}

/// Representation of an obscure historical/narrative reference entry.
class ReferenceEntry {
  final String referenceId;
  final String title;
  final ReferenceDepth depth;
  final String sourceDescription;
  final String inGameLocation;
  final int day;

  const ReferenceEntry({
    required this.referenceId,
    required this.title,
    required this.depth,
    required this.sourceDescription,
    required this.inGameLocation,
    required this.day,
  });

  Map<String, dynamic> toJson() => {
        'referenceId': referenceId,
        'title': title,
        'depth': depth.name,
        'sourceDescription': sourceDescription,
        'inGameLocation': inGameLocation,
        'day': day,
      };
}

/// Structured wireless radio broadcast liturgy (Section 21.11 item 5).
class WirelessBroadcastLiturgy {
  final int day;
  final String warningStatus;
  final String generalCondition;
  final List<String> activeSectors;
  final String instruction;
  final bool hasOmittedSectorAnomaly;

  const WirelessBroadcastLiturgy({
    required this.day,
    required this.warningStatus,
    required this.generalCondition,
    required this.activeSectors,
    required this.instruction,
    this.hasOmittedSectorAnomaly = false,
  });

  Map<String, dynamic> toJson() => {
        'day': day,
        'warningStatus': warningStatus,
        'generalCondition': generalCondition,
        'activeSectors': activeSectors,
        'instruction': instruction,
        'hasOmittedSectorAnomaly': hasOmittedSectorAnomaly,
      };
}

/// Obscure Reference Lattice & Wireless Liturgy Manager (Section 21.11).
class ObscureReferenceLattice {
  static const List<ReferenceEntry> canonicalReferences = [
    ReferenceEntry(
      referenceId: 'ref-01-mass-obs',
      title: 'Mass-Observation Directive Form',
      depth: ReferenceDepth.attentivePattern,
      sourceDescription: 'Volunteer questionnaires about domestic health & rationing',
      inGameLocation: 'hall-table',
      day: 1,
    ),
    ReferenceEntry(
      referenceId: 'ref-02-spr-census',
      title: 'Census of Hallucinations Question',
      depth: ReferenceDepth.specialistHistorical,
      sourceDescription: 'SPR 1889 dry enquiry regarding non-present impressions',
      inGameLocation: 'parlor-desk',
      day: 4,
    ),
    ReferenceEntry(
      referenceId: 'ref-03-dunne-time',
      title: 'J.W.D. Experiment with Time Card',
      depth: ReferenceDepth.specialistHistorical,
      sourceDescription: '1927 dream recording comparison note',
      inGameLocation: 'study-bookshelf',
      day: 7,
    ),
    ReferenceEntry(
      referenceId: 'ref-04-stone-tape',
      title: 'Residual Sound Retention',
      depth: ReferenceDepth.ordinaryTexture,
      sourceDescription: 'Stone Tape style repeated room footsteps without machinery',
      inGameLocation: 'cellar-stair',
      day: 11,
    ),
    ReferenceEntry(
      referenceId: 'ref-05-shipping-forecast',
      title: 'Board Liturgical Broadcast',
      depth: ReferenceDepth.ordinaryTexture,
      sourceDescription: 'Fixed meteorological region liturgy with omitted sector',
      inGameLocation: 'living-wireless',
      day: 18,
    ),
    ReferenceEntry(
      referenceId: 'ref-06-energy-crisis',
      title: 'Fuel Conservation Order',
      depth: ReferenceDepth.ordinaryTexture,
      sourceDescription: 'Power restrictions & early street lamp extinction',
      inGameLocation: 'front-porch',
      day: 14,
    ),
    ReferenceEntry(
      referenceId: 'ref-07-bach-cryptogram',
      title: 'B-A-C-H Piano Sequence',
      depth: ReferenceDepth.specialistHistorical,
      sourceDescription: 'Bb-A-C-B musical motif played with domestic room timing',
      inGameLocation: 'parlor-piano',
      day: 17,
    ),
    ReferenceEntry(
      referenceId: 'ref-08-gpo-transition',
      title: 'GPO Postal Stamp',
      depth: ReferenceDepth.attentivePattern,
      sourceDescription: 'Post Office transition institutional habit',
      inGameLocation: 'letterbox',
      day: 9,
    ),
  ];

  /// Generates the canonical wireless broadcast for a given day.
  static WirelessBroadcastLiturgy generateBroadcast(int day) {
    if (day == 18) {
      // Day 18 has the omitted sector anomaly (Humber omitted from Tyne-Dogger-Humber-Thames)
      return const WirelessBroadcastLiturgy(
        day: 18,
        warningStatus: 'Gale warning in Tyne, Dogger, Thames.',
        generalCondition: 'Pressure 1008 falling slowly. Visibility moderate in drizzle.',
        activeSectors: ['Tyne', 'Dogger', 'Thames'], // Humber omitted
        instruction: 'All coastal households remain within secondary perimeter.',
        hasOmittedSectorAnomaly: true,
      );
    }

    return WirelessBroadcastLiturgy(
      day: day,
      warningStatus: 'Quarantine advisory active across northern coastal sectors.',
      generalCondition: 'Pressure 1016 steady. North-easterly wind force 4.',
      activeSectors: const ['Tyne', 'Dogger', 'Humber', 'Thames'],
      instruction: 'Observe curfew hours 18:00 to 06:00 without exception.',
      hasOmittedSectorAnomaly: false,
    );
  }

  /// Verifies that no day exceeds the reference budget (<= 2 references per day).
  static bool verifyDailyBudget() {
    final counts = <int, int>{};
    for (final ref in canonicalReferences) {
      counts[ref.day] = (counts[ref.day] ?? 0) + 1;
      if (counts[ref.day]! > 2) return false;
    }
    return true;
  }
}
