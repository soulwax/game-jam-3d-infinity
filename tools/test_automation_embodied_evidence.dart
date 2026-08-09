import 'dart:convert';
import 'dart:io';

import 'automation.dart' as runner;

Future<void> main() async {
  final root = await Directory.systemTemp.createTemp('embodied evidence ');
  try {
    final valid = File('${root.path}/browser-valid-embodied.json')
      ..writeAsStringSync(jsonEncode(_payload()));
    for (final name in const ['browser-valid.png']) {
      File('${root.path}/$name').writeAsStringSync('{}');
    }
    File('${root.path}/browser-valid.json').writeAsStringSync(
      jsonEncode({
        'schemaVersion': 1,
        'scenario': 'days-1-3',
        'requestedRenderer': 'next',
        'requestedProfile': 'safe',
        'negotiatedProfile': 'high',
        'profileNegotiation': 'capability-negotiated',
        'viewport': {'width': 640, 'height': 480},
        'routeName': 'pixeldart-next',
        'routePath': '/?renderer=next',
        'screenshot': 'browser-valid.png',
      }),
    );
    File('${root.path}/browser-valid.digest.json').writeAsStringSync(
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-valid.png',
        'metadata': 'browser-valid.json',
        'screenshotSha256': await runner.sha256File(
          File('${root.path}/browser-valid.png'),
        ),
        'metadataSha256': await runner.sha256File(
          File('${root.path}/browser-valid.json'),
        ),
      }),
    );
    for (var day = 1; day <= 3; day++) {
      final screenshot = File('${root.path}/browser-day-$day.png')
        ..writeAsStringSync('{}');
      final metadata = File('${root.path}/browser-day-$day.json')
        ..writeAsStringSync(
          jsonEncode({
            'schemaVersion': 1,
            'scenario': 'days-1-3',
            'requestedRenderer': 'next',
            'requestedProfile': 'safe',
            'negotiatedProfile': 'high',
            'profileNegotiation': 'capability-negotiated',
            'viewport': {'width': 640, 'height': 480},
            'routeName': 'pixeldart-next',
            'routePath': '/?renderer=next',
            'screenshot': screenshot.uri.pathSegments.last,
          }),
        );
      File('${root.path}/browser-day-$day.digest.json').writeAsStringSync(
        jsonEncode({
          'schemaVersion': 1,
          'screenshot': screenshot.uri.pathSegments.last,
          'metadata': metadata.uri.pathSegments.last,
          'screenshotSha256': await runner.sha256File(screenshot),
          'metadataSha256': await runner.sha256File(metadata),
        }),
      );
    }
    final metadata = await runner.parseCaptureMetadata(
      File('${root.path}/browser-valid.json'),
    );
    _expect(
      metadata['captureNegotiatedProfile'] == 'high',
      'capture metadata parses',
    );
    final parsed = await runner.parseEmbodiedEvidence(valid);
    _expect(parsed['embodiedKind'] == 'embodied-route-v1', 'kind parses');
    _expect(
      parsed['embodiedRequestedProfile'] == 'safe',
      'requested profile parses',
    );
    _expect(
      parsed['embodiedEffectiveProfile'] == 'high',
      'effective profile parses',
    );
    _expect(parsed['embodiedFocusCleared'] == true, 'focus clear parses');
    _expect(parsed['embodiedDenialStable'] == true, 'denial stability parses');
    _expect(
      parsed['embodiedCaptureScreenshot'] == 'browser-valid.png',
      'capture screenshot binding parses',
    );
    _expect(
      parsed['embodiedFocusSettleMs'] == 120,
      'focus settle timing parses',
    );
    _expect(parsed['embodiedInputTraceCount'] == 5, 'input trace parses');
    _expect(
      parsed['embodiedRestoreStable'] == true,
      'restore checkpoint parses',
    );
    _expect(parsed['embodiedDayCycleDays'] == 3, 'three-day cycle parses');
    _expect(
      (parsed['embodiedMovementDistance'] as double) > 0.005,
      'movement distance parses',
    );

    final canonicalPayload = Map<String, Object?>.from(_payload())
      ..['routeName'] = 'pixeldart-canonical'
      ..['routePath'] = '/?renderer=pixeldart'
      ..['requestedRenderer'] = 'pixeldart'
      ..['effectiveRenderer'] = 'pixeldart';
    final canonicalResolvedRun = <String, Object?>{
      'schemaVersion': 2,
      'canonical': {
        'scenario': 'days-1-3',
        'renderer': 'pixeldart',
        'profile': 'safe',
        'viewport': {'width': 640, 'height': 480},
      },
      'compatibilityAliases': <String, Object?>{},
    };
    canonicalPayload['resolvedRun'] = canonicalResolvedRun;
    final canonicalMetadata = File('${root.path}/browser-canonical.json')
      ..writeAsStringSync(
        jsonEncode({
          'schemaVersion': 1,
          'scenario': 'days-1-3',
          'requestedRenderer': 'pixeldart',
          'requestedProfile': 'safe',
          'negotiatedProfile': 'high',
          'profileNegotiation': 'capability-negotiated',
          'viewport': {'width': 640, 'height': 480},
          'routeName': 'pixeldart-canonical',
          'routePath': '/?renderer=pixeldart',
          'screenshot': 'browser-valid.png',
          'resolvedRun': canonicalResolvedRun,
        }),
      );
    final canonicalDigest = File('${root.path}/browser-canonical.digest.json')
      ..writeAsStringSync(
        jsonEncode({
          'schemaVersion': 1,
          'screenshot': 'browser-valid.png',
          'metadata': 'browser-canonical.json',
          'screenshotSha256': await runner.sha256File(
            File('${root.path}/browser-valid.png'),
          ),
          'metadataSha256': await runner.sha256File(canonicalMetadata),
        }),
      );
    final capture = canonicalPayload['capture'] as Map<String, Object?>;
    capture['metadata'] = canonicalMetadata.uri.pathSegments.last;
    capture['digest'] = canonicalDigest.uri.pathSegments.last;
    final canonicalCycle =
        (canonicalPayload['evidence'] as Map)['dayCycle'] as Map;
    final canonicalCheckpoints = canonicalCycle['checkpoints'] as List;
    for (var index = 0; index < canonicalCheckpoints.length; index++) {
      final checkpoint = canonicalCheckpoints[index] as Map;
      final checkpointCapture = checkpoint['capture'] as Map<String, Object?>;
      final day = index + 1;
      final screenshot = checkpointCapture['screenshot'] as String;
      final metadataName = 'browser-canonical-day-$day.json';
      final digestName = 'browser-canonical-day-$day.digest.json';
      final metadataFile = File('${root.path}/$metadataName')
        ..writeAsStringSync(
          jsonEncode({
            'schemaVersion': 1,
            'scenario': 'days-1-3',
            'requestedRenderer': 'pixeldart',
            'requestedProfile': 'safe',
            'negotiatedProfile': 'high',
            'profileNegotiation': 'capability-negotiated',
            'viewport': {'width': 640, 'height': 480},
            'routeName': 'pixeldart-canonical',
            'routePath': '/?renderer=pixeldart',
            'screenshot': screenshot,
            'resolvedRun': canonicalResolvedRun,
          }),
        );
      final digestFile = File('${root.path}/$digestName')
        ..writeAsStringSync(
          jsonEncode({
            'schemaVersion': 1,
            'screenshot': screenshot,
            'metadata': metadataName,
            'screenshotSha256': await runner.sha256File(
              File('${root.path}/$screenshot'),
            ),
            'metadataSha256': await runner.sha256File(metadataFile),
          }),
        );
      checkpointCapture['metadata'] = metadataName;
      checkpointCapture['digest'] = digestFile.uri.pathSegments.last;
    }
    final canonicalFile = File('${root.path}/browser-canonical-embodied.json')
      ..writeAsStringSync(jsonEncode(canonicalPayload));
    final canonicalParsed = await runner.parseEmbodiedEvidence(canonicalFile);
    _expect(
      canonicalParsed['embodiedRequestedRenderer'] == 'pixeldart' &&
          canonicalParsed['embodiedEffectiveRenderer'] == 'pixeldart' &&
          canonicalParsed['resolvedRunSchemaVersion'] == '2' &&
          canonicalParsed['resolvedRenderer'] == 'pixeldart',
      'canonical Pixeldart renderer evidence parses',
    );
    final malformedResolved = jsonDecode(jsonEncode(canonicalPayload)) as Map;
    ((malformedResolved['resolvedRun'] as Map)['canonical']
        as Map)['viewport'] = {
      'width': 1,
      'height': 480,
    };
    await _expectFormatFailure(
      root,
      'browser-malformed-resolved-run-embodied.json',
      jsonEncode(malformedResolved),
      'resolved-run viewport drift rejects',
    );

    await _expectFormatFailure(
      root,
      'browser-list-embodied.json',
      jsonEncode(const []),
      'non-object evidence rejects',
    );
    final unsupported = _payload()..['kind'] = 'wrong-kind';
    await _expectFormatFailure(
      root,
      'browser-kind-embodied.json',
      jsonEncode(unsupported),
      'unsupported kind rejects',
    );
    final noMovement = _payload();
    (noMovement['evidence'] as Map)['after'] = Map<String, Object?>.from(
      (noMovement['evidence'] as Map)['before'] as Map,
    );
    await _expectFormatFailure(
      root,
      'browser-no-movement-embodied.json',
      jsonEncode(noMovement),
      'zero movement rejects',
    );
    final noApproachMovement = _payload();
    (noApproachMovement['evidence']
        as Map)['approach'] = Map<String, Object?>.from(
      (noApproachMovement['evidence'] as Map)['before'] as Map,
    );
    await _expectFormatFailure(
      root,
      'browser-no-approach-movement-embodied.json',
      jsonEncode(noApproachMovement),
      'zero approach movement rejects',
    );
    final missingSettle = _payload();
    final missingEvidence = Map<String, Object?>.from(
      missingSettle['evidence'] as Map,
    )..remove('settle');
    missingSettle['evidence'] = missingEvidence;
    await _expectFormatFailure(
      root,
      'browser-missing-settle-embodied.json',
      jsonEncode(missingSettle),
      'missing prompt settle timing rejects',
    );
    final missingTrace = _payload();
    (missingTrace['evidence'] as Map).remove('inputTrace');
    await _expectFormatFailure(
      root,
      'browser-missing-input-trace-embodied.json',
      jsonEncode(missingTrace),
      'missing input trace rejects',
    );
    final nonMonotonicTrace = _payload();
    final trace = (nonMonotonicTrace['evidence'] as Map)['inputTrace'] as List;
    (trace[2] as Map)['elapsedMs'] = 5;
    await _expectFormatFailure(
      root,
      'browser-non-monotonic-input-trace-embodied.json',
      jsonEncode(nonMonotonicTrace),
      'non-monotonic input trace rejects',
    );
    final missingRestore = _payload();
    (missingRestore['evidence'] as Map).remove('restore');
    await _expectFormatFailure(
      root,
      'browser-missing-restore-embodied.json',
      jsonEncode(missingRestore),
      'missing restore checkpoint rejects',
    );
    final uncleared = _payload();
    ((uncleared['evidence'] as Map)['denial'] as Map)['prompt'] = 'mantle';
    await _expectFormatFailure(
      root,
      'browser-uncleared-embodied.json',
      jsonEncode(uncleared),
      'uncleared focus rejects',
    );
    final mutated = _payload();
    ((mutated['evidence'] as Map)['denial'] as Map)['after'] = {
      'lit': false,
      'examined': true,
    };
    await _expectFormatFailure(
      root,
      'browser-mutated-embodied.json',
      jsonEncode(mutated),
      'denial mutation rejects',
    );
    final badIdentity = _payload()..['replayKey'] = '';
    await _expectFormatFailure(
      root,
      'browser-bad-identity-embodied.json',
      jsonEncode(badIdentity),
      'empty replay identity rejects',
    );
    final missingCapture = _payload();
    (missingCapture['capture'] as Map)['screenshot'] = 'browser-missing.png';
    await _expectFormatFailure(
      root,
      'browser-missing-capture-embodied.json',
      jsonEncode(missingCapture),
      'missing capture reference rejects',
    );
    final contradictoryMetadata = _payload();
    (contradictoryMetadata['capture'] as Map)['metadata'] =
        'browser-other.json';
    File('${root.path}/browser-other.json').writeAsStringSync(
      jsonEncode({
        'schemaVersion': 1,
        'scenario': 'days-1-3',
        'requestedRenderer': 'next',
        'requestedProfile': 'safe',
        'negotiatedProfile': 'safe',
        'profileNegotiation': 'honored',
        'viewport': {'width': 640, 'height': 480},
        'routeName': 'pixeldart-next',
        'routePath': '/?renderer=next',
        'screenshot': 'browser-valid.png',
      }),
    );
    await _expectFormatFailure(
      root,
      'browser-contradictory-metadata-embodied.json',
      jsonEncode(contradictoryMetadata),
      'contradictory capture metadata rejects',
    );
    final contradictoryDigest = _payload();
    (contradictoryDigest['capture'] as Map)['digest'] =
        'browser-other.digest.json';
    File('${root.path}/browser-other.digest.json').writeAsStringSync(
      jsonEncode({
        'schemaVersion': 1,
        'screenshot': 'browser-valid.png',
        'metadata': 'browser-other.json',
        'screenshotSha256': await runner.sha256File(
          File('${root.path}/browser-valid.png'),
        ),
        'metadataSha256': await runner.sha256File(
          File('${root.path}/browser-other.json'),
        ),
      }),
    );
    await _expectFormatFailure(
      root,
      'browser-contradictory-digest-embodied.json',
      jsonEncode(contradictoryDigest),
      'contradictory capture digest rejects',
    );
    final unexplainedProfile = _payload()..['profileNegotiation'] = 'honored';
    await _expectFormatFailure(
      root,
      'browser-unexplained-profile-embodied.json',
      jsonEncode(unexplainedProfile),
      'unexplained profile change rejects',
    );
    final falseNegotiation = _payload()..['requestedProfile'] = 'high';
    await _expectFormatFailure(
      root,
      'browser-false-negotiation-embodied.json',
      jsonEncode(falseNegotiation),
      'same profile cannot be capability-negotiated',
    );
    final missingDayCheckpoint = _payload();
    final dayEvidence = missingDayCheckpoint['evidence'] as Map;
    final dayCycle = dayEvidence['dayCycle'] as Map;
    (dayCycle['checkpoints'] as List).removeLast();
    await _expectFormatFailure(
      root,
      'browser-missing-day-checkpoint-embodied.json',
      jsonEncode(missingDayCheckpoint),
      'three-day playable evidence requires all checkpoints',
    );
    final mislabeledDayTransition = _payload();
    final mislabeledEvidence = mislabeledDayTransition['evidence'] as Map;
    final mislabeledCycle = mislabeledEvidence['dayCycle'] as Map;
    (mislabeledCycle['transitions'] as List)[0] = 'teleport:day-1→day-2';
    await _expectFormatFailure(
      root,
      'browser-mislabeled-day-transition-embodied.json',
      jsonEncode(mislabeledDayTransition),
      'day-cycle evidence requires the authored Rest transitions',
    );
    stdout.writeln(
      'automation embodied evidence: valid and failure fixtures pass',
    );
  } finally {
    await root.delete(recursive: true);
  }
}

Map<String, Object?> _payload() => {
  'schemaVersion': 1,
  'kind': 'embodied-route-v1',
  'scenario': 'days-1-3',
  'routeName': 'pixeldart-next',
  'routePath': '/?renderer=next',
  'requestedRenderer': 'next',
  'requestedProfile': 'safe',
  'effectiveRenderer': 'next',
  'effectiveProfile': 'high',
  'profileNegotiation': 'capability-negotiated',
  'capture': {
    'screenshot': 'browser-valid.png',
    'metadata': 'browser-valid.json',
    'digest': 'browser-valid.digest.json',
  },
  'actions': ['KeyE:mantle-living-second'],
  'assertions': {
    'focus': 'mantle-living-second',
    'positiveAction': 'lit-and-examined',
    'negativeAction': 'no-mutation-after-clear',
    'saveAuthoritative': true,
    'movementAuthoritative': true,
  },
  'evidence': {
    'before': _pose('living-room', 5.5, 1.65, 3.5),
    'approach': _pose('living-room', 4.2, 1.65, 2.4),
    'positive': {
      'before': {'lit': false, 'examined': false},
      'after': {'lit': true, 'examined': true},
    },
    'after': _pose('living-room', 4.2, 1.65, 0.8),
    'denial': {
      'before': {'lit': true, 'examined': true},
      'after': {'lit': true, 'examined': true},
      'prompt': '',
    },
    'settle': {'positiveMs': 120, 'denialClearMs': 80},
    'inputTrace': [
      {'label': 'visitor.ignore-until-clear', 'elapsedMs': 0},
      {'label': 'KeyS:down', 'elapsedMs': 10},
      {'label': 'KeyS:up', 'elapsedMs': 20},
      {'label': 'KeyE:mantle-living-second', 'elapsedMs': 30},
      {'label': 'KeyE:denied-after-focus-clear', 'elapsedMs': 40},
    ],
    'restore': {
      'player': _pose('living-room', 4.2, 1.65, 0.8),
      'mantle': {'lit': true, 'examined': true},
      'distance': 0.0,
    },
    'dayCycle': {
      'schemaVersion': 1,
      'startDay': 1,
      'endDay': 3,
      'transitions': ['Rest:day-1→day-2', 'Rest:day-2→day-3'],
      'checkpoints': [
        _dayCheckpoint(1, 'browser-day-1'),
        _dayCheckpoint(2, 'browser-day-2'),
        _dayCheckpoint(3, 'browser-day-3'),
      ],
    },
  },
  'evidenceNormalized': {
    'before': _pose('living-room', 5.5, 1.7, 3.5),
    'approach': _pose('living-room', 4.2, 1.7, 2.4),
    'after': _pose('living-room', 4.2, 1.7, 0.8),
    'positive': {
      'before': {'lit': false, 'examined': false},
      'after': {'lit': true, 'examined': true},
    },
    'denial': {
      'before': {'lit': true, 'examined': true},
      'after': {'lit': true, 'examined': true},
      'prompt': '',
    },
    'movementDistance': 2.9,
  },
  'normalizationMeters': 0.5,
  'replayKey': 'fixture-replay-key',
};

Map<String, Object?> _dayCheckpoint(int day, String stem) => {
  'day': day,
  'hour': 6.0,
  'capture': {
    'screenshot': '$stem.png',
    'metadata': '$stem.json',
    'digest': '$stem.digest.json',
  },
};

Map<String, Object?> _pose(String roomId, double x, double y, double z) => {
  'roomId': roomId,
  'eye': {'x': x, 'y': y, 'z': z},
  'yaw': 0.0,
  'pitch': 0.0,
};

Future<void> _expectFormatFailure(
  Directory root,
  String name,
  String content,
  String message,
) async {
  final file = File('${root.path}/$name')..writeAsStringSync(content);
  try {
    await runner.parseEmbodiedEvidence(file);
  } on FormatException {
    return;
  }
  throw StateError(message);
}

void _expect(bool condition, String message) {
  if (!condition) throw StateError(message);
}
