import 'package:quarantine/ui/accessibility_presentation.dart';
import 'package:quarantine/ui/accessibility_settings.dart';

void main() {
  const concise = AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.concise,
  );
  check(
    concise.format(channel: 'house', text: 'door opened') == 'door opened',
    'concise announcements omit optional channel context',
  );
  check(
    concise.format(channel: 'house', text: 'door opened', essential: true) ==
        'house: door opened',
    'essential announcements retain channel context',
  );
  const standard = AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.standard,
  );
  check(
    standard.format(channel: 'house', text: 'door opened') ==
        'house: door opened',
    'standard announcements include context',
  );
  const verbose = AccessibilityAnnouncementPolicy(
    AccessibilityScreenReaderVerbosity.verbose,
  );
  check(
    verbose.format(channel: 'house', text: 'door opened') ==
        'house: door opened',
    'verbose announcements include context',
  );
  check(verbose.format(channel: 'house', text: '').isEmpty,
      'empty announcements are suppressed');
  print('accessibility presentation: verbosity and essential-cue policy pass');
}

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}
