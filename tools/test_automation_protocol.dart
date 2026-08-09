import 'dart:convert';
import 'dart:io';

import 'package:quarantine/automation/automation_protocol.dart';

void main() {
  final disabled = AutomationProtocolServer(
    enabled: false,
    buildId: 'game-build',
    scenarioIds: const ['days-1-3'],
  );
  final request = _request();
  _expect(
    disabled.handshake(request).code == 'unsupported',
    'release build is closed',
  );
  _expect(
    disabled.command(_command(1, 0, AutomationCommandKind.queryState)).code ==
        'unsupported',
    'release command surface is closed',
  );

  final server = AutomationProtocolServer(
    enabled: true,
    buildId: 'game-build',
    capabilities: const ['ready', 'fixed-tick'],
    scenarioIds: const ['days-1-3'],
  );
  _expect(server.handshake(request).code == 'ready', 'handshake');
  _expect(
    server.handshake(_request(expectedBuildId: 'other-build')).code ==
        'build-mismatch',
    'build mismatch',
  );
  _expect(
    server.command(_command(1, 0, AutomationCommandKind.loadFixture)).code ==
        'loadFixture',
    'fixture command',
  );
  _expect(
    server.command(_command(2, 0, AutomationCommandKind.beginEmbodied)).code ==
        'beginEmbodied',
    'embodied barrier',
  );
  _expect(
    server.command(_command(2, 0, AutomationCommandKind.queryState)).code ==
        'command-order',
    'duplicate command rejected',
  );
  _expect(
    server.command(_command(3, 1, AutomationCommandKind.queryState)).code ==
        'stale-tick',
    'stale tick rejected',
  );
  _expect(
    server.advanceTicks(2).code == 'advanced' && server.tick == 2,
    'tick advance',
  );
  final json =
      jsonDecode(
            server
                .command(_command(3, 2, AutomationCommandKind.heartbeat))
                .encode(),
          )
          as Map<String, Object?>;
  _expect(json['phase'] == 'embodied', 'response JSON');
  stdout.writeln(
    'automation protocol: release gate, handshake, nonce, ordering, ticks pass',
  );
}

AutomationHandshakeRequest _request({String expectedBuildId = 'game-build'}) =>
    AutomationHandshakeRequest(
      protocolVersion: automationProtocolVersion,
      schemaVersion: automationSchemaVersion,
      expectedBuildId: expectedBuildId,
      runNonce: 'nonce-1',
      scenarioId: 'days-1-3',
    );

AutomationCommand _command(int id, int tick, AutomationCommandKind kind) =>
    AutomationCommand(
      protocolVersion: automationProtocolVersion,
      schemaVersion: automationSchemaVersion,
      runNonce: 'nonce-1',
      commandId: id,
      expectedTick: tick,
      kind: kind,
    );

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
