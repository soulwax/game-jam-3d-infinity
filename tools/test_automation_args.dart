import 'dart:convert';

import 'package:quarantine/automation/automation_args.dart';

void main() {
  _defaultsAndModes();
  _parsesExplicitValues();
  _rejectsInvalidValues();
  _rejectsConflictingHeadlessFlags();
  _roundTripsResolvedJson();
  print('automation args: contract, validation, modes, and JSON pass');
}

void _defaultsAndModes() {
  final defaults = parseAutomationArgs(const ['validate']);
  _expect(defaults.isSuccess, 'default validate must parse');
  _expect(defaults.args!.scenario == 'days-1-3', 'default scenario');
  _expect(defaults.args!.headless, 'default must be headless');
  _expect(
    parseAutomationArgs(const ['help']).args!.mode == AutomationMode.help,
    'help mode',
  );
  _expect(
    parseAutomationArgs(const ['list']).args!.mode == AutomationMode.list,
    'list mode',
  );
}

void _parsesExplicitValues() {
  final result = parseAutomationArgs(const [
    'validate',
    '--scenario=days-1-3',
    '--server-root',
    'dist/web release',
    '--port=8181',
    '--base-url',
    'http://localhost:8181/',
    '--browser',
    'chromium',
    '--renderer=next',
    '--profile',
    'clean',
    '--viewport=1280x720',
    '--seed=-9',
    '--fixed-delta=0.02',
    '--timeout-ticks=42',
    '--artifacts',
    'tmp/run one',
    '--headed',
  ]);
  _expect(result.isSuccess, 'explicit values must parse: ${result.error}');
  final args = result.args!;
  _expect(args.port == 8181, 'port');
  _expect(args.viewportWidth == 1280 && args.viewportHeight == 720, 'viewport');
  _expect(args.seed == -9 && args.fixedDelta == 0.02, 'numeric values');
  _expect(
    !args.headless && args.browser == AutomationBrowser.chromium,
    'headed browser',
  );
  _expect(args.serverRoot == 'dist/web release', 'path with spaces');
}

void _rejectsInvalidValues() {
  for (final argv in const [
    ['wat'],
    ['validate', '--scenario', 'Days-1'],
    ['validate', '--scenario', 'missing'],
    ['validate', '--port', '0'],
    ['validate', '--port', '65536'],
    ['validate', '--base-url', 'file:///tmp/release'],
    ['validate', '--base-url', 'http://localhost/?bad=1'],
    ['validate', '--viewport', '800'],
    ['validate', '--viewport', '0x500'],
    ['validate', '--fixed-delta', '0'],
    ['validate', '--unknown', 'x'],
    ['validate', '--'],
  ]) {
    _expect(!parseAutomationArgs(argv).isSuccess, 'must reject $argv');
  }
}

void _rejectsConflictingHeadlessFlags() {
  final result = parseAutomationArgs(const [
    'validate',
    '--headed',
    '--headless',
  ]);
  _expect(!result.isSuccess && result.exitCode == 2, 'headless conflict');
}

void _roundTripsResolvedJson() {
  final args = parseAutomationArgs(const [
    'validate',
    '--port=8123',
    '--viewport=640x480',
  ]).args!;
  final json = jsonDecode(args.encode()) as Map<String, dynamic>;
  _expect(json['mode'] == 'validate', 'JSON mode');
  _expect(json['port'] == 8123, 'JSON port');
  _expect((json['viewport'] as Map)['width'] == 640, 'JSON viewport');
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
