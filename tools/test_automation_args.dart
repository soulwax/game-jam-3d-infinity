import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_args.dart';

void main() {
  _defaultsAndModes();
  _parsesExplicitValues();
  _rejectsInvalidValues();
  _rejectsConflictingHeadlessFlags();
  _helpListsCanonicalRendererNames();
  _roundTripsResolvedJson();
  _runnerPropagatesResolvedConfig();
  _circuitScenariosRegistered();
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
    '--renderer=pixeldart',
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
  final auto = parseAutomationArgs(['validate', '--port', 'auto']);
  _expect(auto.isSuccess && auto.args!.port == 0, 'auto port');
  _expect(args.seed == -9 && args.fixedDelta == 0.02, 'numeric values');
  _expect(
    !args.headless && args.browser == AutomationBrowser.chromium,
    'headed browser',
  );
  _expect(
    args.renderer == AutomationRenderer.pixeldart &&
        args.renderer == AutomationRenderer.next,
    'Pixeldart renderer uses canonical enum identity',
  );
  _expect(
    args.profile == AutomationProfile.high &&
        args.profile == AutomationProfile.clean,
    'high profile uses canonical enum identity and clean alias equality',
  );
  final resolved = jsonDecode(args.encode()) as Map<String, dynamic>;
  _expect(
    resolved['renderer'] == 'pixeldart',
    'canonical renderer remains canonical in the resolved handoff',
  );
  _expect(
    resolved['profile'] == 'clean',
    'existing automation wire schema retains the clean alias during migration',
  );
  final resolvedRun = resolved['resolvedRun'] as Map<String, dynamic>;
  final canonical = resolvedRun['canonical'] as Map<String, dynamic>;
  final aliases = resolvedRun['compatibilityAliases'] as Map<String, dynamic>;
  _expect(resolvedRun['schemaVersion'] == 2, 'resolved run schema version');
  _expect(
    canonical['renderer'] == 'pixeldart' && canonical['profile'] == 'high',
    'resolved run stores canonical renderer/profile names',
  );
  _expect(
    !aliases.containsKey('renderer') && aliases['profile'] == 'clean',
    'resolved run records the profile compatibility alias',
  );
  final rejectedAlias = parseAutomationArgs(const [
    'validate',
    '--renderer=next',
  ]);
  _expect(!rejectedAlias.isSuccess, 'next renderer alias must be rejected');
  _expect(args.serverRoot == 'dist/web release', 'path with spaces');
}

void _rejectsInvalidValues() {
  for (final argv in const [
    ['wat'],
    ['validate', '--scenario', 'Days-1'],
    ['validate', '--scenario', 'missing'],
    ['validate', '--port', '-1'],
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

void _helpListsCanonicalRendererNames() {
  _expect(
    automationHelp.contains('pixeldart') &&
        !automationHelp.contains('next alias') &&
        automationHelp.contains('standard, high') &&
        automationHelp.contains('clean alias'),
    'help lists canonical renderer/profile names and compatibility aliases',
  );
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
  final canonical = ((json['resolvedRun'] as Map)['canonical'] as Map);
  _expect(canonical['renderer'] == 'pixeldart', 'resolved run default renderer');
  _expect(canonical['profile'] == 'safe', 'resolved run default profile');
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void _runnerPropagatesResolvedConfig() {
  final source = File('tools/automation.dart').readAsStringSync();
  _expect(
    source.contains("'AUTOMATION_ARGS': args.encode()"),
    'runner passes resolved arguments to browser smoke',
  );
  _expect(
    source.contains("'runner.config'"),
    'runner reports resolved arguments before browser launch',
  );
}

// T-03: ground-circuit and upper-circuit are registered and resolve via
// parseAutomationArgs; unregistered names are still rejected.
void _circuitScenariosRegistered() {
  _expect(
    registeredAutomationScenarios.contains('ground-circuit'),
    'ground-circuit is in the registered scenario list',
  );
  _expect(
    registeredAutomationScenarios.contains('upper-circuit'),
    'upper-circuit is in the registered scenario list',
  );
  final ground = parseAutomationArgs(
    const ['validate', '--scenario=ground-circuit'],
  );
  _expect(ground.isSuccess, 'ground-circuit resolves: ${ground.error}');
  _expect(
    ground.args!.scenario == 'ground-circuit',
    'resolved scenario ID is ground-circuit',
  );
  final upper = parseAutomationArgs(
    const ['validate', '--scenario=upper-circuit'],
  );
  _expect(upper.isSuccess, 'upper-circuit resolves: ${upper.error}');
  _expect(
    upper.args!.scenario == 'upper-circuit',
    'resolved scenario ID is upper-circuit',
  );
  final unknown = parseAutomationArgs(
    const ['validate', '--scenario=cellar-circuit'],
  );
  _expect(!unknown.isSuccess, 'unregistered circuit ID is rejected');
}
