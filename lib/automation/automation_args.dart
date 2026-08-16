import 'dart:convert';

enum AutomationMode { help, list, validate, run }

enum AutomationRenderer {
  auto,
  legacy,
  pixeldart;

  /// Compatibility symbol for the pre-C-01 automation identity.
  @Deprecated('Use AutomationRenderer.pixeldart instead.')
  static const AutomationRenderer next = AutomationRenderer.pixeldart;

  /// Existing runner/report consumers still accept `next` for one schema
  /// version while the in-memory enum uses the canonical Pixeldart identity.
  String get wireName => this == AutomationRenderer.pixeldart ? 'next' : name;
}

enum AutomationProfile {
  safe,
  standard,
  high;

  /// Compatibility symbol for the pre-T-00 profile identity.
  @Deprecated('Use AutomationProfile.high instead.')
  static const AutomationProfile clean = AutomationProfile.high;

  /// Existing capture/report consumers retain `clean` for one schema window.
  String get wireName => this == AutomationProfile.high ? 'clean' : name;
}

enum AutomationBrowser { firefox, chromium }

final class AutomationArgs {
  static const defaultScenario = 'days-1-3';
  static const defaultServerRoot = 'dist/web';
  static const defaultPort = 8090;
  static const defaultBaseUrl = 'http://127.0.0.1:8090';
  static const defaultBrowser = AutomationBrowser.firefox;
  static const defaultRenderer = AutomationRenderer.pixeldart;
  static const defaultProfile = AutomationProfile.safe;
  static const defaultViewportWidth = 800;
  static const defaultViewportHeight = 500;
  static const defaultSeed = 7;
  static const defaultFixedDelta = 1 / 60;
  static const defaultTimeoutTicks = 900;
  static const defaultArtifacts = 'artifacts/automation';

  final AutomationMode mode;
  final String scenario;
  final String serverRoot;
  final int port;
  final Uri baseUrl;
  final AutomationBrowser browser;
  final AutomationRenderer renderer;
  final AutomationProfile profile;
  final int viewportWidth;
  final int viewportHeight;
  final int seed;
  final double fixedDelta;
  final int timeoutTicks;
  final String artifacts;
  final bool headless;
  final bool rendererAliasUsed;
  final bool profileAliasUsed;

  const AutomationArgs({
    required this.mode,
    required this.scenario,
    required this.serverRoot,
    required this.port,
    required this.baseUrl,
    required this.browser,
    required this.renderer,
    required this.profile,
    required this.viewportWidth,
    required this.viewportHeight,
    required this.seed,
    required this.fixedDelta,
    required this.timeoutTicks,
    required this.artifacts,
    required this.headless,
    this.rendererAliasUsed = false,
    this.profileAliasUsed = false,
  });

  static AutomationArgs defaults({AutomationMode mode = AutomationMode.run}) =>
      AutomationArgs(
        mode: mode,
        scenario: defaultScenario,
        serverRoot: defaultServerRoot,
        port: defaultPort,
        baseUrl: Uri.parse(defaultBaseUrl),
        browser: defaultBrowser,
        renderer: defaultRenderer,
        profile: defaultProfile,
        viewportWidth: defaultViewportWidth,
        viewportHeight: defaultViewportHeight,
        seed: defaultSeed,
        fixedDelta: defaultFixedDelta,
        timeoutTicks: defaultTimeoutTicks,
        artifacts: defaultArtifacts,
        headless: true,
      );

  Map<String, Object> toJson() => {
    'mode': mode.name,
    'scenario': scenario,
    'serverRoot': serverRoot,
    'port': port,
    'baseUrl': baseUrl.toString(),
    'browser': browser.name,
    'renderer': rendererAliasUsed ? renderer.wireName : renderer.name,
    'profile': profileAliasUsed ? profile.wireName : profile.name,
    'viewport': {'width': viewportWidth, 'height': viewportHeight},
    'seed': seed,
    'fixedDelta': fixedDelta,
    'timeoutTicks': timeoutTicks,
    'artifacts': artifacts,
    'headless': headless,
    'resolvedRun': _resolvedRunJson(),
  };

  Map<String, Object> _resolvedRunJson() => {
    'schemaVersion': 2,
    'canonical': {
      'mode': mode.name,
      'scenario': scenario,
      'serverRoot': serverRoot,
      'port': port,
      'baseUrl': baseUrl.toString(),
      'browser': browser.name,
      'renderer': renderer.name,
      'profile': profile.name,
      'viewport': {'width': viewportWidth, 'height': viewportHeight},
      'seed': seed,
      'fixedDelta': fixedDelta,
      'timeoutTicks': timeoutTicks,
      'artifacts': artifacts,
      'headless': headless,
    },
    'compatibilityAliases': {
      if (rendererAliasUsed) 'renderer': 'next',
      if (profileAliasUsed) 'profile': 'clean',
    },
  };

  String encode() => const JsonEncoder.withIndent('  ').convert(toJson());

  AutomationArgs copyWith({
    AutomationMode? mode,
    String? scenario,
    String? serverRoot,
    int? port,
    Uri? baseUrl,
    AutomationBrowser? browser,
    AutomationRenderer? renderer,
    AutomationProfile? profile,
    int? viewportWidth,
    int? viewportHeight,
    int? seed,
    double? fixedDelta,
    int? timeoutTicks,
    String? artifacts,
    bool? headless,
    bool? rendererAliasUsed,
    bool? profileAliasUsed,
  }) => AutomationArgs(
    mode: mode ?? this.mode,
    scenario: scenario ?? this.scenario,
    serverRoot: serverRoot ?? this.serverRoot,
    port: port ?? this.port,
    baseUrl: baseUrl ?? this.baseUrl,
    browser: browser ?? this.browser,
    renderer: renderer ?? this.renderer,
    profile: profile ?? this.profile,
    viewportWidth: viewportWidth ?? this.viewportWidth,
    viewportHeight: viewportHeight ?? this.viewportHeight,
    seed: seed ?? this.seed,
    fixedDelta: fixedDelta ?? this.fixedDelta,
    timeoutTicks: timeoutTicks ?? this.timeoutTicks,
    artifacts: artifacts ?? this.artifacts,
    headless: headless ?? this.headless,
    rendererAliasUsed: rendererAliasUsed ?? this.rendererAliasUsed,
    profileAliasUsed: profileAliasUsed ?? this.profileAliasUsed,
  );
}

final class AutomationParseResult {
  final AutomationArgs? args;
  final String? error;
  final int exitCode;

  const AutomationParseResult.success(this.args) : error = null, exitCode = 0;

  const AutomationParseResult.failure(this.error, {this.exitCode = 2})
    : args = null;

  bool get isSuccess => args != null;
}

const automationHelp = '''Usage: dart run tools/automation.dart <mode> [options]

Modes:
  help       Print this contract.
  list       List registered scenarios.
  validate   Print resolved arguments without starting a process.
  run        Execute a registered scenario (runner lifecycle is T-01).

Options:
  --scenario <id>       Scenario ID (default: days-1-3).
  --server-root <path>  Packaged server root (default: dist/web).
  --port <n|auto>       Server port (default: 8090; auto selects a free port).
  --base-url <url>      HTTP base URL (default: http://127.0.0.1:8090).
  --browser <name>      firefox or chromium (default: firefox).
  --renderer <name>     pixeldart (default: pixeldart).
  --profile <name>      safe, standard, high, or clean alias (default: safe).
  --viewport <WxH>      Viewport size (default: 800x500).
  --seed <integer>      Deterministic scenario seed (default: 7).
  --fixed-delta <secs>  Fixed simulation delta (default: 0.0166667).
  --timeout-ticks <n>   Bounded scenario timeout (default: 900).
  --artifacts <path>    Artifact directory (default: artifacts/automation).
  --headed              Launch a visible browser.
  --headless            Launch a headless browser (default).
''';

const registeredAutomationScenarios = <String>[
  'days-1-3',
  'ground-circuit',
  'upper-circuit',
];

AutomationParseResult parseAutomationArgs(List<String> argv) {
  if (argv.isEmpty) {
    return AutomationParseResult.success(
      AutomationArgs.defaults(mode: AutomationMode.help),
    );
  }
  final mode = switch (argv.first) {
    'help' || '--help' || '-h' => AutomationMode.help,
    'list' => AutomationMode.list,
    'validate' => AutomationMode.validate,
    'run' => AutomationMode.run,
    _ => null,
  };
  if (mode == null) {
    return const AutomationParseResult.failure(
      'unknown mode; expected help, list, validate, or run',
    );
  }
  var args = AutomationArgs.defaults(mode: mode);
  if (mode == AutomationMode.help || mode == AutomationMode.list) {
    if (argv.length > 1) {
      return const AutomationParseResult.failure(
        'help/list do not accept options',
      );
    }
    return AutomationParseResult.success(args);
  }
  var i = 1;
  var headed = false;
  var headless = false;
  while (i < argv.length) {
    final raw = argv[i];
    if (raw == '--') {
      return const AutomationParseResult.failure(
        'positional arguments are not supported after --',
      );
    }
    final split = raw.indexOf('=');
    final name = split < 0 ? raw : raw.substring(0, split);
    String? value = split < 0 ? null : raw.substring(split + 1);
    const valueFlags = {
      '--scenario',
      '--server-root',
      '--serve-root',
      '--port',
      '--base-url',
      '--browser',
      '--renderer',
      '--profile',
      '--viewport',
      '--seed',
      '--fixed-delta',
      '--timeout-ticks',
      '--artifacts',
    };
    if (name == '--headed' || name == '--headless') {
      if (value != null) return _failure('$name does not take a value');
      if (name == '--headed') {
        headed = true;
      }
      if (name == '--headless') {
        headless = true;
      }
      i++;
      continue;
    }
    if (!valueFlags.contains(name)) {
      return _failure('unknown option "$name"');
    }
    if (value == null) {
      if (i + 1 >= argv.length) return _failure('$name requires a value');
      value = argv[++i];
      if (value.startsWith('--')) return _failure('$name requires a value');
    }
    final parsed = _applyOption(args, name, value);
    if (parsed.error != null) return _failure(parsed.error!);
    args = parsed.args!;
    if (name == '--renderer') {
      args = args.copyWith(rendererAliasUsed: value == 'next');
    }
    if (name == '--profile') {
      args = args.copyWith(profileAliasUsed: value == 'clean');
    }
    i++;
  }
  if (headed && headless) return _failure('--headed and --headless conflict');
  args = args.copyWith(headless: !headed);
  final validation = validateAutomationArgs(args);
  return validation == null
      ? AutomationParseResult.success(args)
      : _failure(validation);
}

AutomationParseResult _failure(String message) =>
    AutomationParseResult.failure(message);

({AutomationArgs? args, String? error}) _applyOption(
  AutomationArgs args,
  String name,
  String value,
) {
  try {
    return switch (name) {
      '--scenario' => (args: args.copyWith(scenario: value), error: null),
      '--server-root' => (args: args.copyWith(serverRoot: value), error: null),
      '--port' => (args: args.copyWith(port: _parsePort(value)), error: null),
      '--serve-root' => (args: args.copyWith(serverRoot: value), error: null),
      '--base-url' => (
        args: args.copyWith(baseUrl: Uri.parse(value)),
        error: null,
      ),
      '--browser' => (
        args: args.copyWith(browser: _parseBrowser(value)),
        error: null,
      ),
      '--renderer' => (
        args: args.copyWith(renderer: _parseRenderer(value)),
        error: null,
      ),
      '--profile' => (
        args: args.copyWith(profile: _parseProfile(value)),
        error: null,
      ),
      '--viewport' => _viewport(args, value),
      '--seed' => (args: args.copyWith(seed: int.parse(value)), error: null),
      '--fixed-delta' => (
        args: args.copyWith(fixedDelta: double.parse(value)),
        error: null,
      ),
      '--timeout-ticks' => (
        args: args.copyWith(timeoutTicks: int.parse(value)),
        error: null,
      ),
      '--artifacts' => (args: args.copyWith(artifacts: value), error: null),
      _ => (args: null, error: 'unknown option "$name"'),
    };
  } on FormatException {
    return (args: null, error: '$name has an invalid value "$value"');
  }
}

AutomationBrowser _parseBrowser(String value) => switch (value) {
  'firefox' => AutomationBrowser.firefox,
  'chromium' => AutomationBrowser.chromium,
  _ => throw FormatException('unsupported browser'),
};

int _parsePort(String value) => value == 'auto' ? 0 : int.parse(value);

AutomationRenderer _parseRenderer(String value) => switch (value) {
  'pixeldart' => AutomationRenderer.pixeldart,
  _ => throw FormatException(
    'unsupported renderer; production automation requires pixeldart',
  ),
};

AutomationProfile _parseProfile(String value) => switch (value) {
  'safe' => AutomationProfile.safe,
  'standard' => AutomationProfile.standard,
  'high' => AutomationProfile.high,
  'clean' => AutomationProfile.high,
  _ => throw FormatException('unsupported profile'),
};

({AutomationArgs? args, String? error}) _viewport(
  AutomationArgs args,
  String value,
) {
  final parts = value.toLowerCase().split('x');
  if (parts.length != 2) {
    return (args: null, error: '--viewport must be WIDTHxHEIGHT');
  }
  return (
    args: args.copyWith(
      viewportWidth: int.parse(parts[0]),
      viewportHeight: int.parse(parts[1]),
    ),
    error: null,
  );
}

String? validateAutomationArgs(AutomationArgs args) {
  if (!RegExp(r'^[a-z0-9][a-z0-9._-]*$').hasMatch(args.scenario)) {
    return 'scenario must be a lowercase stable ID';
  }
  if (!registeredAutomationScenarios.contains(args.scenario)) {
    return 'unknown scenario "${args.scenario}"';
  }
  if (args.serverRoot.trim().isEmpty) return 'server-root must not be empty';
  if (args.port < 0 || args.port > 65535) {
    return 'port must be auto or 1..65535';
  }
  if (args.baseUrl.scheme != 'http' && args.baseUrl.scheme != 'https') {
    return 'base-url must use http or https';
  }
  if (args.baseUrl.hasQuery || args.baseUrl.hasFragment) {
    return 'base-url must not contain a query or fragment';
  }
  if (args.viewportWidth < 1 || args.viewportHeight < 1) {
    return 'viewport dimensions must be positive';
  }
  if (!args.fixedDelta.isFinite || args.fixedDelta <= 0) {
    return 'fixed-delta must be finite and positive';
  }
  if (args.timeoutTicks < 1) return 'timeout-ticks must be positive';
  if (args.artifacts.trim().isEmpty) return 'artifacts must not be empty';
  return null;
}
