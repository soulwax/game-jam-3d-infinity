/// Archival category for historical 1918 documents.
enum ArchiveCategory {
  medical,
  civic,
  letters,
  domestic,
}

/// A historical 1918 archival record entry.
class VictorianArchiveRecord {
  final String id;
  final String title;
  final String dateString;
  final ArchiveCategory category;
  final String excerpt;
  final String fullText;
  final String signatory;

  const VictorianArchiveRecord({
    required this.id,
    required this.title,
    required this.dateString,
    required this.category,
    required this.excerpt,
    required this.fullText,
    required this.signatory,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'dateString': dateString,
        'category': category.name,
        'excerpt': excerpt,
        'fullText': fullText,
        'signatory': signatory,
      };
}

/// Victorian Archival Record Browser for collected case notes and historical evidence.
class VictorianArchiveBrowser {
  static final List<VictorianArchiveRecord> canonicalRecords = [
    const VictorianArchiveRecord(
      id: 'rec-dr-hallow-case-01',
      title: 'Dr Hallow Case Observation — Nov 4, 1918',
      dateString: '4th November 1918',
      category: ArchiveCategory.medical,
      excerpt: 'Sub-lingual cyanosis present. Flue ventilation ordered.',
      fullText: 'Patient exhibits persistent dry cough with localized bronchial rales. Recommended carbolic vapour and three-day seclusion.',
      signatory: 'Dr E. Hallow, M.D.',
    ),
    const VictorianArchiveRecord(
      id: 'rec-ministry-exemption-carbon',
      title: 'Ministry of Munitions Essential Exemption Slip',
      dateString: '6th November 1918',
      category: ArchiveCategory.civic,
      excerpt: 'Form 4B: Spindle maintenance exempt from isolation curfew.',
      fullText: 'Under order of the War Office, Sylvia Ashworth is hereby granted access to Mill No. 4 for essential drive-belt maintenance.',
      signatory: 'Sylvia Ashworth, Mill Overseer',
    ),
    const VictorianArchiveRecord(
      id: 'rec-ashworth-parchment',
      title: 'Handwritten Flue Note from Mrs Ashworth',
      dateString: '2nd November 1918',
      category: ArchiveCategory.domestic,
      excerpt: 'Keep the damp cloth in the register. Tap twice if you hear the kettle.',
      fullText: 'The broth jug is left upon the lower step. Do not come down until the milk cart has turned the corner.',
      signatory: 'Mrs Ashworth (Neighbour)',
    ),
    const VictorianArchiveRecord(
      id: 'rec-denise-botanical-letter',
      title: 'Botanical Drawing & Note from Denise',
      dateString: '8th November 1918',
      category: ArchiveCategory.letters,
      excerpt: 'Pears from the lower espalier. Keep them in dark paper.',
      fullText: 'They are cold from the frost. Wrap them in flannel if the scullery freezes tonight.',
      signatory: 'Denise (Cousin)',
    ),
  ];

  /// Searches archive records matching a query string and optional category filter.
  static List<VictorianArchiveRecord> search({
    String query = '',
    ArchiveCategory? category,
  }) {
    final q = query.trim().toLowerCase();
    return canonicalRecords.where((rec) {
      if (category != null && rec.category != category) return false;
      if (q.isEmpty) return true;
      return rec.title.toLowerCase().contains(q) ||
          rec.excerpt.toLowerCase().contains(q) ||
          rec.fullText.toLowerCase().contains(q) ||
          rec.signatory.toLowerCase().contains(q);
    }).toList(growable: false);
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final all = search();
    if (all.length < 4) return false;

    final medical = search(category: ArchiveCategory.medical);
    if (medical.isEmpty || medical.first.signatory != 'Dr E. Hallow, M.D.') return false;

    final querySearch = search(query: 'broth');
    if (querySearch.isEmpty) return false;

    return true;
  }
}
