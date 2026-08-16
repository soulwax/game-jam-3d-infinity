import 'dart:io';

import 'package:quarantine/config.dart';
import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/game/player_state.dart';
import 'package:quarantine/house/collision.dart';
import 'house_fixture.dart';

Never _fail(String message) => throw StateError(message);

void _expect(bool condition, String message) {
  if (!condition) _fail(message);
}

void _expectVecClose(Vec3 a, Vec3 b, String label, {double eps = 1e-6}) {
  _expect(
    (a.x - b.x).abs() < eps &&
        (a.y - b.y).abs() < eps &&
        (a.z - b.z).abs() < eps,
    '$label mismatch: expected (${b.x}, ${b.y}, ${b.z}) got (${a.x}, ${a.y}, ${a.z})',
  );
}

int _usage() {
  stderr.writeln('Usage: dart run tools/physics.dart <command>');
  stderr.writeln('');
  stderr.writeln('Commands:');
  stderr.writeln(
    '  validate   Run deterministic sparse moved-state validation',
  );
  stderr.writeln(
    '  replay     Run deterministic replay and print stable summary digest',
  );
  stderr.writeln(
    '  matrix     Run deterministic scenario matrix with per-case digest',
  );
  return 64;
}

class _ReplaySummary {
  final String room;
  final Vec3 eye;
  final double stairProgress;

  const _ReplaySummary({
    required this.room,
    required this.eye,
    required this.stairProgress,
  });

  String toDigest() =>
      'room=$room eye=(${eye.x.toStringAsFixed(6)},${eye.y.toStringAsFixed(6)},${eye.z.toStringAsFixed(6)}) stair=${stairProgress.toStringAsFixed(6)}';
}

class _ReplayResult {
  final _ReplaySummary a;
  final _ReplaySummary b;

  const _ReplayResult({required this.a, required this.b});
}

_ReplayResult _runReplayScenario({
  required int houseSeed,
  required double stepScale,
  required double startOffset,
  required int warmupSteps,
  required int replaySteps,
}) {
  final house = loadAuthoredHouse(seed: houseSeed);
  final stair = house.stairs.single;

  final path = stair.upperEye - stair.lowerEye;
  final axis = path.length < 1e-9 ? Vec3(0, 0, 0) : path.normalized;
  final startEye = stair.lowerEye + axis * startOffset;
  final startBase =
      startEye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);

  final capsuleA = Capsule(
    base: startBase,
    tip: startBase + Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  final delta = axis * -stepScale;

  var room = 'hall';
  var eye = startEye;

  for (var i = 0; i < warmupSteps; i++) {
    final move = capsuleA.move(house, room, eye, delta);
    eye = move.eye;
    room = move.roomId;
  }

  final saved = PlayerState(
    roomId: room,
    eye: eye,
    yaw: 0.0,
    pitch: 0.0,
    activeStairId: capsuleA.activeStairId,
    activeStairProgress: capsuleA.activeStairProgress,
  );

  final decoded = PlayerState.tryFromJson(saved.toJson());
  _expect(decoded != null, 'saved state did not round-trip');

  var eyeA = eye;
  var roomA = room;
  for (var i = 0; i < replaySteps; i++) {
    final move = capsuleA.move(house, roomA, eyeA, delta);
    eyeA = move.eye;
    roomA = move.roomId;
  }

  final baseB =
      decoded!.eye - Vec3(0, playerEyeHeight - playerCapsuleRadius, 0);
  final capsuleB = Capsule(
    base: baseB,
    tip: baseB + Vec3(0, playerCapsuleHeight - playerCapsuleRadius * 2, 0),
  );

  capsuleB.restoreActiveStair(
    house: house,
    stairId: decoded.activeStairId,
    progress: decoded.activeStairProgress,
    currentRoom: decoded.roomId,
    eye: decoded.eye,
  );

  var eyeB = decoded.eye;
  var roomB = decoded.roomId;
  for (var i = 0; i < replaySteps; i++) {
    final move = capsuleB.move(house, roomB, eyeB, delta);
    eyeB = move.eye;
    roomB = move.roomId;
  }

  final summaryA = _ReplaySummary(
    room: roomA,
    eye: eyeA,
    stairProgress: capsuleA.activeStairProgress ?? -1.0,
  );
  final summaryB = _ReplaySummary(
    room: roomB,
    eye: eyeB,
    stairProgress: capsuleB.activeStairProgress ?? -1.0,
  );
  return _ReplayResult(a: summaryA, b: summaryB);
}

int _validateSparseMovedState() {
  final result = _runReplayScenario(
    houseSeed: 42,
    stepScale: 0.08,
    startOffset: 0.0,
    warmupSteps: 5,
    replaySteps: 4,
  );
  _expect(result.a.room == result.b.room, 'room mismatch after restore/replay');
  _expectVecClose(result.a.eye, result.b.eye, 'eye');
  _expect(
    result.a.stairProgress == result.b.stairProgress,
    'stair progress mismatch after restore/replay',
  );

  stdout.writeln(
    'physics validate: sparse moved-state replay/recovery is deterministic',
  );
  return 0;
}

int _replaySparseMovedState() {
  final result = _runReplayScenario(
    houseSeed: 42,
    stepScale: 0.08,
    startOffset: 0.0,
    warmupSteps: 5,
    replaySteps: 4,
  );
  _expect(result.a.room == result.b.room, 'room mismatch after restore/replay');
  _expectVecClose(result.a.eye, result.b.eye, 'eye');
  _expect(
    result.a.stairProgress == result.b.stairProgress,
    'stair progress mismatch after restore/replay',
  );

  stdout.writeln('physics replay digest: ${result.a.toDigest()}');
  return 0;
}

int _matrixSparseMovedState() {
  const configs =
      <
        ({
          int seed,
          double stepScale,
          double startOffset,
          int warmup,
          int replay,
        })
      >[
        (seed: 42, stepScale: 0.08, startOffset: 0.0, warmup: 5, replay: 4),
        (seed: 7, stepScale: 0.06, startOffset: 0.05, warmup: 6, replay: 5),
        (seed: 99, stepScale: 0.10, startOffset: -0.03, warmup: 4, replay: 6),
      ];

  var passed = 0;
  for (var i = 0; i < configs.length; i++) {
    final c = configs[i];
    try {
      final result = _runReplayScenario(
        houseSeed: c.seed,
        stepScale: c.stepScale,
        startOffset: c.startOffset,
        warmupSteps: c.warmup,
        replaySteps: c.replay,
      );
      _expect(result.a.room == result.b.room, 'room mismatch');
      _expectVecClose(result.a.eye, result.b.eye, 'eye');
      _expect(
        result.a.stairProgress == result.b.stairProgress,
        'stair progress mismatch',
      );
      passed++;
      stdout.writeln(
        'matrix case ${i + 1}/${configs.length} PASS '
        'seed=${c.seed} step=${c.stepScale.toStringAsFixed(3)} '
        'offset=${c.startOffset.toStringAsFixed(3)} '
        'digest=${result.a.toDigest()}',
      );
    } on Object catch (e) {
      stdout.writeln(
        'matrix case ${i + 1}/${configs.length} FAIL '
        'seed=${c.seed} step=${c.stepScale.toStringAsFixed(3)} '
        'offset=${c.startOffset.toStringAsFixed(3)} error=$e',
      );
    }
  }

  stdout.writeln('matrix summary: $passed/${configs.length} passed');
  return passed == configs.length ? 0 : 1;
}

void main(List<String> args) {
  if (args.length != 1) {
    exit(_usage());
  }

  final command = args.single;
  switch (command) {
    case 'validate':
      exit(_validateSparseMovedState());
    case 'replay':
      exit(_replaySparseMovedState());
    case 'matrix':
      exit(_matrixSparseMovedState());
    default:
      stderr.writeln('Unknown command: $command');
      exit(_usage());
  }
}
