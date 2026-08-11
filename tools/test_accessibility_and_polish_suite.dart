import 'package:quarantine/ui/accessibility_excellence_coordinator.dart';
import 'package:quarantine/presentation/cinematic_immersion_director.dart';
import 'package:quarantine/journal/victorian_archive_browser.dart';

Never _fail(String message) =>
    throw StateError('Accessibility & Polish test failed: $message');

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void main() {
  print('Testing Accessibility Excellence & Immersion Polish Suite...');

  // 1. Accessibility Coordinator Tests
  _expect(AccessibilityExcellenceCoordinator.validate(), 'Accessibility coordinator validate failed');

  // Test speed scaling
  AccessibilityExcellenceCoordinator.updateState(
    const AccessibilitySettingsState(textSpeedMultiplier: 0.5),
  );
  final slowDelay = AccessibilityExcellenceCoordinator.calculateTypewriterDelayMs(baseDelayMs: 30);
  _expect(slowDelay == 60, '0.5x speed should double typewriter delay (60ms)');

  AccessibilityExcellenceCoordinator.updateState(
    const AccessibilitySettingsState(textSpeedMultiplier: 2.0),
  );
  final fastDelay = AccessibilityExcellenceCoordinator.calculateTypewriterDelayMs(baseDelayMs: 30);
  _expect(fastDelay == 15, '2.0x speed should halve typewriter delay (15ms)');

  // 2. Cinematic Immersion Director Tests
  _expect(CinematicImmersionDirector.validate(), 'Cinematic immersion director validate failed');

  final cinematicState = CinematicImmersionDirector.update(
    deltaTimeSeconds: 0.1,
    currentDay: 15,
    isInDialogueEncounter: true,
    exhaustion01: 0.8,
  );
  _expect(cinematicState.fovOffsetDegrees < 0.0, 'Encounter tension should apply negative FOV offset');
  _expect(cinematicState.eyeOffset.y.abs() > 0.0, 'Breathing should produce vertical eye displacement');

  // 3. Victorian Archive Browser Tests
  _expect(VictorianArchiveBrowser.validate(), 'Victorian archive browser validate failed');

  final civicRecords = VictorianArchiveBrowser.search(category: ArchiveCategory.civic);
  _expect(civicRecords.isNotEmpty, 'Civic archive records must be present');
  _expect(civicRecords.first.signatory.contains('Sylvia'), 'Must match Sylvia Ashworth signatory');

  final brothSearch = VictorianArchiveBrowser.search(query: 'broth');
  _expect(brothSearch.isNotEmpty, 'Search for broth must return Mrs Ashworth note');

  print('All Accessibility Excellence & Immersion Polish tests passed successfully!');
}
