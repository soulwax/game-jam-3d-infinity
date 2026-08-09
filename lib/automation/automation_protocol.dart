import 'dart:convert';

/// Only an explicit automation build may expose the in-page protocol.
const bool automationBuildEnabled = bool.fromEnvironment(
  'QUARANTINE_AUTOMATION',
  defaultValue: false,
);

const automationProtocolVersion = 1;
const automationSchemaVersion = 1;

enum AutomationPhase { unsupported, booting, ready, fixture, embodied, stopped }

enum AutomationCommandKind {
  queryReady,
  heartbeat,
  loadFixture,
  beginEmbodied,
  inputFrame,
  queryState,
  pumpTicks,
  capture,
  contextLoss,
  reset,
}

final class AutomationHandshakeRequest {
  final int protocolVersion;
  final int schemaVersion;
  final String expectedBuildId;
  final String runNonce;
  final String scenarioId;

  const AutomationHandshakeRequest({
    required this.protocolVersion,
    required this.schemaVersion,
    required this.expectedBuildId,
    required this.runNonce,
    required this.scenarioId,
  });
}

final class AutomationResponse {
  final bool accepted;
  final String code;
  final AutomationPhase phase;
  final int protocolVersion;
  final int schemaVersion;
  final String buildId;
  final int tick;
  final String? message;
  final Set<String> capabilities;

  const AutomationResponse({
    required this.accepted,
    required this.code,
    required this.phase,
    required this.protocolVersion,
    required this.schemaVersion,
    required this.buildId,
    required this.tick,
    this.message,
    this.capabilities = const <String>{},
  });

  Map<String, Object?> toJson() => {
    'accepted': accepted,
    'code': code,
    'phase': phase.name,
    'protocolVersion': protocolVersion,
    'schemaVersion': schemaVersion,
    'buildId': buildId,
    'tick': tick,
    if (message != null) 'message': message,
    'capabilities': capabilities.toList()..sort(),
  };

  String encode() => jsonEncode(toJson());
}

final class AutomationCommand {
  final int protocolVersion;
  final int schemaVersion;
  final String runNonce;
  final int commandId;
  final int expectedTick;
  final AutomationCommandKind kind;

  const AutomationCommand({
    required this.protocolVersion,
    required this.schemaVersion,
    required this.runNonce,
    required this.commandId,
    required this.expectedTick,
    required this.kind,
  });
}

/// Closed, stateful protocol authority for the automation-only build.
///
/// This class deliberately accepts typed commands rather than maps, JSON
/// patches, property paths, JavaScript, or filesystem instructions.
final class AutomationProtocolServer {
  final bool enabled;
  final String buildId;
  final Set<String> capabilities;
  final Set<String> scenarioIds;

  AutomationPhase _phase = AutomationPhase.booting;
  String? _runNonce;
  int _tick = 0;
  int _lastCommandId = 0;

  AutomationProtocolServer({
    required this.enabled,
    required this.buildId,
    Iterable<String> capabilities = const [],
    Iterable<String> scenarioIds = const [],
  }) : capabilities = Set.unmodifiable(capabilities),
       scenarioIds = Set.unmodifiable(scenarioIds);

  AutomationPhase get phase => _phase;
  int get tick => _tick;

  AutomationResponse handshake(AutomationHandshakeRequest request) {
    if (!enabled) {
      return _reject(
        code: 'unsupported',
        phase: AutomationPhase.unsupported,
        message: 'automation protocol is not compiled into this build',
      );
    }
    if (request.protocolVersion != automationProtocolVersion) {
      return _reject(
        code: 'protocol-mismatch',
        message: 'protocol version mismatch',
      );
    }
    if (request.schemaVersion != automationSchemaVersion) {
      return _reject(
        code: 'schema-mismatch',
        message: 'schema version mismatch',
      );
    }
    if (request.expectedBuildId != buildId) {
      return _reject(
        code: 'build-mismatch',
        message: 'runner and package build IDs differ',
      );
    }
    if (request.runNonce.trim().isEmpty) {
      return _reject(
        code: 'invalid-nonce',
        message: 'run nonce must not be empty',
      );
    }
    if (!scenarioIds.contains(request.scenarioId)) {
      return _reject(
        code: 'unsupported-scenario',
        message: 'scenario is not registered',
      );
    }
    _runNonce = request.runNonce;
    _phase = AutomationPhase.ready;
    _tick = 0;
    _lastCommandId = 0;
    return _accept(code: 'ready');
  }

  AutomationResponse command(AutomationCommand command) {
    if (!enabled) {
      return _reject(
        code: 'unsupported',
        phase: AutomationPhase.unsupported,
        message: 'automation protocol is not compiled into this build',
      );
    }
    if (_runNonce == null) return _reject(code: 'not-handshaken');
    if (command.protocolVersion != automationProtocolVersion) {
      return _reject(code: 'protocol-mismatch');
    }
    if (command.schemaVersion != automationSchemaVersion) {
      return _reject(code: 'schema-mismatch');
    }
    if (command.runNonce != _runNonce) return _reject(code: 'nonce-mismatch');
    if (command.commandId <= _lastCommandId) {
      return _reject(code: 'command-order');
    }
    if (command.expectedTick != _tick) return _reject(code: 'stale-tick');
    if (!_allowed(command.kind)) return _reject(code: 'command-not-allowed');
    _lastCommandId = command.commandId;
    if (command.kind == AutomationCommandKind.loadFixture) {
      _phase = AutomationPhase.fixture;
    } else if (command.kind == AutomationCommandKind.beginEmbodied) {
      _phase = AutomationPhase.embodied;
    } else if (command.kind == AutomationCommandKind.reset) {
      _phase = AutomationPhase.ready;
      _tick = 0;
    }
    return _accept(code: command.kind.name);
  }

  AutomationResponse advanceTicks(int ticks) {
    if (ticks < 0) return _reject(code: 'invalid-ticks');
    if (_phase != AutomationPhase.fixture &&
        _phase != AutomationPhase.embodied) {
      return _reject(code: 'not-running');
    }
    _tick += ticks;
    return _accept(code: 'advanced');
  }

  bool _allowed(AutomationCommandKind kind) {
    if (_phase == AutomationPhase.stopped) return false;
    if (kind == AutomationCommandKind.loadFixture) {
      return _phase == AutomationPhase.ready;
    }
    if (kind == AutomationCommandKind.beginEmbodied) {
      return _phase == AutomationPhase.fixture;
    }
    if (kind == AutomationCommandKind.reset) return true;
    if (kind == AutomationCommandKind.queryReady ||
        kind == AutomationCommandKind.heartbeat ||
        kind == AutomationCommandKind.queryState) {
      return true;
    }
    return _phase == AutomationPhase.embodied ||
        _phase == AutomationPhase.fixture;
  }

  AutomationResponse _accept({required String code}) => AutomationResponse(
    accepted: true,
    code: code,
    phase: _phase,
    protocolVersion: automationProtocolVersion,
    schemaVersion: automationSchemaVersion,
    buildId: buildId,
    tick: _tick,
    capabilities: capabilities,
  );

  AutomationResponse _reject({
    required String code,
    AutomationPhase? phase,
    String? message,
  }) => AutomationResponse(
    accepted: false,
    code: code,
    phase: phase ?? _phase,
    protocolVersion: automationProtocolVersion,
    schemaVersion: automationSchemaVersion,
    buildId: buildId,
    tick: _tick,
    message: message,
    capabilities: capabilities,
  );
}
