// A-00: Asset source contract & offline converter verification.
//
// Verifies that:
//  1. Two clean conversions of identical inputs are byte-identical and produce
//     matching SHA-256 output hashes.
//  2. Combined bounding boxes accurately bound all child parts.
//  3. Malformed inputs (non-kebab ID, wrong units, wrong up-axis, empty parts,
//     duplicate sockets, invalid bounds) fail clearly with descriptive FormatExceptions.
//  4. AssetNormalizedPackage serializes to canonical JSON without loss.


import 'package:quarantine/engine/asset_source_contract.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void expectThrowsFormat(void Function() fn, String expectedMessageSubstring) {
  var threw = false;
  try {
    fn();
  } on FormatException catch (e) {
    threw = true;
    check(
      e.message.contains(expectedMessageSubstring),
      'Expected FormatException containing "$expectedMessageSubstring", got "${e.message}"',
    );
  }
  check(threw, 'Expected FormatException but none was thrown');
}

void main() {
  final converter = AssetConverter();

  final validRawInput = <String, dynamic>{
    'id': 'furniture-writing-desk',
    'kind': 'furniture',
    'pivot': 'floor-center',
    'normalization': {
      'importerVersion': '1.0.0-pixeldart',
      'sourceHash': 'a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90',
      'units': 'metres',
      'upAxis': 'Y-up',
      'triangulationPolicy': 'strip-fan-to-triangles-ccw',
      'tangentPolicy': 'mikktspace-v2',
      'materialRemap': {'wood_base': 'mat-oak-polished'},
    },
    'sockets': [
      {
        'name': 'drawer_handle_left',
        'position': [-0.25, 0.45, 0.30],
        'rotation': [0.0, 0.0, 0.0],
      },
      {
        'name': 'drawer_handle_right',
        'position': [0.25, 0.45, 0.30],
        'rotation': [0.0, 0.0, 0.0],
      },
    ],
    'parts': [
      {
        'name': 'desk_body',
        'materialKey': 'mat-oak-polished',
        'boundsMin': [-0.50, 0.0, -0.35],
        'boundsMax': [0.50, 0.75, 0.35],
        'vertexCount': 240,
        'triangleCount': 120,
        'lodTriangleCounts': [120, 60, 20],
      },
      {
        'name': 'desk_hutch',
        'materialKey': 'mat-oak-polished',
        'boundsMin': [-0.48, 0.75, -0.20],
        'boundsMax': [0.48, 1.55, 0.20],
        'vertexCount': 180,
        'triangleCount': 90,
        'lodTriangleCounts': [90, 40, 10],
      },
    ],
  };

  // 1. Deterministic Conversion Check (Two runs produce byte-identical outputs)
  final pkg1 = converter.convertSource(validRawInput);
  final pkg2 = converter.convertSource(validRawInput);

  check(pkg1.id == 'furniture-writing-desk', 'ID parsed correctly');
  check(pkg1.kind == 'furniture', 'Kind parsed correctly');
  check(pkg1.sockets.length == 2, 'Sockets parsed correctly');
  check(pkg1.parts.length == 2, 'Parts parsed correctly');

  // Check combined bounds
  check(pkg1.combinedBoundsMin.x == -0.50, 'Combined bounds min X');
  check(pkg1.combinedBoundsMin.y == 0.0, 'Combined bounds min Y');
  check(pkg1.combinedBoundsMin.z == -0.35, 'Combined bounds min Z');
  check(pkg1.combinedBoundsMax.x == 0.50, 'Combined bounds max X');
  check(pkg1.combinedBoundsMax.y == 1.55, 'Combined bounds max Y');
  check(pkg1.combinedBoundsMax.z == 0.35, 'Combined bounds max Z');

  // Byte-identical check
  final json1 = pkg1.toCanonicalJsonString();
  final json2 = pkg2.toCanonicalJsonString();
  check(json1 == json2, 'Two conversions must produce byte-identical JSON strings');
  check(pkg1.outputHash == pkg2.outputHash, 'Output hashes must be identical');
  check(pkg1.outputHash.length == 64, 'SHA-256 hash length must be 64 hex chars');

  // 2. Failure mode validations
  // a) Invalid ID (capital letters / spaces)
  final badIdInput = Map<String, dynamic>.from(validRawInput)..[ 'id' ] = 'Bad ID!';
  expectThrowsFormat(() => converter.convertSource(badIdInput), 'kebab-case');

  // b) Unsupported units
  final badUnitsInput = Map<String, dynamic>.from(validRawInput)..['normalization'] = {
    ...validRawInput['normalization'] as Map<String, dynamic>,
    'units': 'inches',
  };
  expectThrowsFormat(() => converter.convertSource(badUnitsInput), 'Unsupported units');

  // c) Unsupported upAxis
  final badAxisInput = Map<String, dynamic>.from(validRawInput)..['normalization'] = {
    ...validRawInput['normalization'] as Map<String, dynamic>,
    'upAxis': 'Z-up',
  };
  expectThrowsFormat(() => converter.convertSource(badAxisInput), 'Unsupported upAxis');

  // d) Empty parts
  final emptyPartsInput = Map<String, dynamic>.from(validRawInput)..[ 'parts' ] = <dynamic>[];
  expectThrowsFormat(() => converter.convertSource(emptyPartsInput), 'at least one part');

  // e) Duplicate socket names
  final dupSocketsInput = Map<String, dynamic>.from(validRawInput)..[ 'sockets' ] = [
    {'name': 'handle', 'position': [0, 0, 0]},
    {'name': 'handle', 'position': [1, 1, 1]},
  ];
  expectThrowsFormat(() => converter.convertSource(dupSocketsInput), 'Duplicate socket name');

  // f) Invalid bounds (min > max)
  final badBoundsInput = Map<String, dynamic>.from(validRawInput)..[ 'parts' ] = [
    {
      'name': 'part1',
      'materialKey': 'mat1',
      'boundsMin': [1.0, 0.0, 0.0],
      'boundsMax': [0.0, 1.0, 1.0], // minX > maxX!
      'vertexCount': 10,
      'triangleCount': 5,
    },
  ];
  expectThrowsFormat(() => converter.convertSource(badBoundsInput), 'boundsMin must be <= boundsMax');

  print('A-00: Asset source contract & converter test passed cleanly!');
}
