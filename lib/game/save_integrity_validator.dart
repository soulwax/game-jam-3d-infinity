import 'dart:convert';

/// Save integrity and migration validator for 21-day quarantine persistence.
class SaveIntegrityValidator {
  static const int currentSchemaVersion = 2;

  /// Computes a simple deterministic checksum for save data payload string.
  static int computeChecksum(String payload) {
    var hash = 0x811c9dc5;
    for (var i = 0; i < payload.length; i++) {
      hash ^= payload.codeUnitAt(i);
      hash = (hash * 0x01000193) & 0xFFFFFFFF;
    }
    return hash;
  }

  /// Validates and migrates raw JSON save data to current schema version.
  static Map<String, dynamic> validateAndMigrate(Map<String, dynamic> rawSave) {
    final save = Map<String, dynamic>.from(rawSave);

    // 1. Version migration
    final version = save['schemaVersion'] is int ? save['schemaVersion'] as int : 1;
    if (version < currentSchemaVersion) {
      // Migrate v1 -> v2: Ensure narrative flags, journal entries, and day progress exist
      save['schemaVersion'] = currentSchemaVersion;
      save['narrativeFlags'] ??= <String, String>{};
      save['journalEntries'] ??= <Map<String, dynamic>>[];
      save['aftermathResidues'] ??= <String>[];
    }

    // 2. Structural integrity guarantees
    save['day'] = (save['day'] is int ? (save['day'] as int).clamp(1, 21) : 1);
    save['hour'] = (save['hour'] is int ? (save['hour'] as int).clamp(0, 24) : 8);
    save['gasSupply'] = (save['gasSupply'] is num ? (save['gasSupply'] as num).toDouble() : 100.0);

    return save;
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final legacySave = {
      'schemaVersion': 1,
      'day': 5,
      'gasSupply': 85.0,
    };

    final migrated = validateAndMigrate(legacySave);
    if (migrated['schemaVersion'] != currentSchemaVersion) return false;
    if (!migrated.containsKey('narrativeFlags')) return false;

    final jsonStr = jsonEncode(migrated);
    final checksum = computeChecksum(jsonStr);
    if (checksum == 0) return false;

    return true;
  }
}
