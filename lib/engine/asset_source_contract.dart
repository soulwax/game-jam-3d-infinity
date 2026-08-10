import 'dart:convert';


/// Represents a named socket in a normalized model for prop attachment or light points.
class ModelSocketDescriptor {
  final String name;
  final ({double x, double y, double z}) position;
  final ({double rx, double ry, double rz}) rotation;

  const ModelSocketDescriptor({
    required this.name,
    required this.position,
    this.rotation = (rx: 0.0, ry: 0.0, rz: 0.0),
  }) : assert(name.length > 0, 'Socket name must be non-empty');

  factory ModelSocketDescriptor.fromJson(Map<String, dynamic> json) {
    final name = json['name'] as String? ?? '';
    if (name.isEmpty) throw const FormatException('Socket name is required');

    final posList = (json['position'] as List?)?.cast<num>();
    if (posList == null || posList.length != 3) {
      throw const FormatException('Socket position must be 3 numbers');
    }
    final rotList = (json['rotation'] as List?)?.cast<num>() ?? [0, 0, 0];
    if (rotList.length != 3) {
      throw const FormatException('Socket rotation must be 3 numbers');
    }

    return ModelSocketDescriptor(
      name: name,
      position: (
        x: posList[0].toDouble(),
        y: posList[1].toDouble(),
        z: posList[2].toDouble(),
      ),
      rotation: (
        rx: rotList[0].toDouble(),
        ry: rotList[1].toDouble(),
        rz: rotList[2].toDouble(),
      ),
    );
  }

  Map<String, dynamic> toJson() => {
        'name': name,
        'position': [position.x, position.y, position.z],
        'rotation': [rotation.rx, rotation.ry, rotation.rz],
      };
}

/// Represents a single sub-mesh part in a normalized model.
class ModelPartDescriptor {
  final String name;
  final String materialKey;
  final ({double x, double y, double z}) boundsMin;
  final ({double x, double y, double z}) boundsMax;
  final int vertexCount;
  final int triangleCount;
  final List<int> lodTriangleCounts;

  const ModelPartDescriptor({
    required this.name,
    required this.materialKey,
    required this.boundsMin,
    required this.boundsMax,
    required this.vertexCount,
    required this.triangleCount,
    this.lodTriangleCounts = const [],
  }) : assert(name.length > 0, 'Part name must be non-empty'),
       assert(vertexCount > 0, 'vertexCount must be positive'),
       assert(triangleCount > 0, 'triangleCount must be positive');

  factory ModelPartDescriptor.fromJson(Map<String, dynamic> json) {
    final name = json['name'] as String? ?? '';
    if (name.isEmpty) throw const FormatException('Part name is required');

    final matKey = json['materialKey'] as String? ?? '';
    if (matKey.isEmpty) throw const FormatException('Part materialKey is required');

    final minList = (json['boundsMin'] as List?)?.cast<num>();
    final maxList = (json['boundsMax'] as List?)?.cast<num>();
    if (minList == null || minList.length != 3 || maxList == null || maxList.length != 3) {
      throw const FormatException('Part boundsMin and boundsMax must be 3 numbers');
    }

    if (minList[0] > maxList[0] || minList[1] > maxList[1] || minList[2] > maxList[2]) {
      throw const FormatException('Part boundsMin must be <= boundsMax');
    }

    final vCount = json['vertexCount'] as int? ?? 0;
    final tCount = json['triangleCount'] as int? ?? 0;
    if (vCount <= 0 || tCount <= 0) {
      throw const FormatException('Part vertexCount and triangleCount must be positive');
    }

    final lods = (json['lodTriangleCounts'] as List?)?.cast<int>() ?? [];

    return ModelPartDescriptor(
      name: name,
      materialKey: matKey,
      boundsMin: (
        x: minList[0].toDouble(),
        y: minList[1].toDouble(),
        z: minList[2].toDouble(),
      ),
      boundsMax: (
        x: maxList[0].toDouble(),
        y: maxList[1].toDouble(),
        z: maxList[2].toDouble(),
      ),
      vertexCount: vCount,
      triangleCount: tCount,
      lodTriangleCounts: lods,
    );
  }

  Map<String, dynamic> toJson() => {
        'name': name,
        'materialKey': materialKey,
        'boundsMin': [boundsMin.x, boundsMin.y, boundsMin.z],
        'boundsMax': [boundsMax.x, boundsMax.y, boundsMax.z],
        'vertexCount': vertexCount,
        'triangleCount': triangleCount,
        'lodTriangleCounts': lodTriangleCounts,
      };
}

/// Normalization metadata record per A-00.
class NormalizationRecord {
  final String importerVersion;
  final String sourceHash;
  final String units;
  final String upAxis;
  final String triangulationPolicy;
  final String tangentPolicy;
  final Map<String, String> materialRemap;

  const NormalizationRecord({
    this.importerVersion = '1.0.0-pixeldart',
    required this.sourceHash,
    this.units = 'metres',
    this.upAxis = 'Y-up',
    this.triangulationPolicy = 'strip-fan-to-triangles-ccw',
    this.tangentPolicy = 'mikktspace-v2',
    this.materialRemap = const {},
  });

  factory NormalizationRecord.fromJson(Map<String, dynamic> json) {
    final srcHash = json['sourceHash'] as String? ?? '';
    if (srcHash.isEmpty) throw const FormatException('Normalization sourceHash is required');

    final u = json['units'] as String? ?? 'metres';
    if (u != 'metres') {
      throw FormatException('Unsupported units "$u"; expected "metres"');
    }

    final axis = json['upAxis'] as String? ?? 'Y-up';
    if (axis != 'Y-up') {
      throw FormatException('Unsupported upAxis "$axis"; expected "Y-up"');
    }

    return NormalizationRecord(
      importerVersion: json['importerVersion'] as String? ?? '1.0.0-pixeldart',
      sourceHash: srcHash,
      units: u,
      upAxis: axis,
      triangulationPolicy: json['triangulationPolicy'] as String? ?? 'strip-fan-to-triangles-ccw',
      tangentPolicy: json['tangentPolicy'] as String? ?? 'mikktspace-v2',
      materialRemap: (json['materialRemap'] as Map?)?.cast<String, String>() ?? const {},
    );
  }

  Map<String, dynamic> toJson() => {
        'importerVersion': importerVersion,
        'sourceHash': sourceHash,
        'units': units,
        'upAxis': upAxis,
        'triangulationPolicy': triangulationPolicy,
        'tangentPolicy': tangentPolicy,
        'materialRemap': materialRemap,
      };
}

/// A complete, normalized asset package output for A-00.
class AssetNormalizedPackage {
  final String id;
  final String kind;
  final String pivot;
  final NormalizationRecord normalization;
  final List<ModelSocketDescriptor> sockets;
  final List<ModelPartDescriptor> parts;
  final ({double x, double y, double z}) combinedBoundsMin;
  final ({double x, double y, double z}) combinedBoundsMax;
  final String outputHash;

  const AssetNormalizedPackage({
    required this.id,
    required this.kind,
    required this.pivot,
    required this.normalization,
    required this.sockets,
    required this.parts,
    required this.combinedBoundsMin,
    required this.combinedBoundsMax,
    required this.outputHash,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'kind': kind,
        'pivot': pivot,
        'normalization': normalization.toJson(),
        'sockets': sockets.map((s) => s.toJson()).toList(),
        'parts': parts.map((p) => p.toJson()).toList(),
        'combinedBoundsMin': [combinedBoundsMin.x, combinedBoundsMin.y, combinedBoundsMin.z],
        'combinedBoundsMax': [combinedBoundsMax.x, combinedBoundsMax.y, combinedBoundsMax.z],
        'outputHash': outputHash,
      };

  String toCanonicalJsonString() {
    final map = toJson();
    return const JsonEncoder.withIndent('  ').convert(map);
  }
}

/// A-00 Offline Asset Converter Engine.
/// Converts raw source models / specifications into byte-identical normalized packages.
class AssetConverter {
  static const _kSha256K = <int>[
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  static int _u32(int value) => value & 0xffffffff;
  static int _rotr(int value, int count) => _u32((value >>> count) | (value << (32 - count)));

  /// Computes a SHA-256 hash string for raw bytes.
  static String computeSha256(List<int> input) {
    final bytes = List<int>.from(input)..add(0x80);
    while (bytes.length % 64 != 56) {
      bytes.add(0);
    }
    final bitLength = input.length * 8;
    for (var shift = 56; shift >= 0; shift -= 8) {
      bytes.add((bitLength >>> shift) & 0xff);
    }
    var h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
    var h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
    final w = List<int>.filled(64, 0);
    for (var offset = 0; offset < bytes.length; offset += 64) {
      for (var i = 0; i < 16; i++) {
        final j = offset + i * 4;
        w[i] = (bytes[j] << 24) | (bytes[j + 1] << 16) | (bytes[j + 2] << 8) | bytes[j + 3];
      }
      for (var i = 16; i < 64; i++) {
        final s0 = _rotr(w[i - 15], 7) ^ _rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        final s1 = _rotr(w[i - 2], 17) ^ _rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = _u32(w[i - 16] + s0 + w[i - 7] + s1);
      }
      var a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
      for (var i = 0; i < 64; i++) {
        final s1 = _rotr(e, 6) ^ _rotr(e, 11) ^ _rotr(e, 25);
        final ch = (e & f) ^ (_u32(~e) & g);
        final t1 = _u32(h + s1 + ch + _kSha256K[i] + w[i]);
        final s0 = _rotr(a, 2) ^ _rotr(a, 13) ^ _rotr(a, 22);
        final maj = (a & b) ^ (a & c) ^ (b & c);
        final t2 = _u32(s0 + maj);
        h = g; g = f; f = e; e = _u32(d + t1); d = c; c = b; b = a; a = _u32(t1 + t2);
      }
      h0 = _u32(h0 + a); h1 = _u32(h1 + b); h2 = _u32(h2 + c); h3 = _u32(h3 + d);
      h4 = _u32(h4 + e); h5 = _u32(h5 + f); h6 = _u32(h6 + g); h7 = _u32(h7 + h);
    }
    return [h0, h1, h2, h3, h4, h5, h6, h7]
        .map((x) => x.toRadixString(16).padLeft(8, '0'))
        .join();
  }

  /// Normalizes and converts raw input into an [AssetNormalizedPackage].
  /// Throws [FormatException] if validation fails.
  AssetNormalizedPackage convertSource(Map<String, dynamic> rawInput) {
    final id = rawInput['id'] as String? ?? '';
    if (id.isEmpty) throw const FormatException('Asset id is required');

    final idPattern = RegExp(r'^[a-z0-9]+(-[a-z0-9]+)*$');
    if (!idPattern.hasMatch(id)) {
      throw FormatException('Asset id "$id" must be lowercase kebab-case');
    }

    final kind = rawInput['kind'] as String? ?? '';
    if (kind.isEmpty) throw const FormatException('Asset kind is required');

    final pivot = rawInput['pivot'] as String? ?? 'floor-center';

    final normRaw = rawInput['normalization'] as Map<String, dynamic>?;
    if (normRaw == null) throw const FormatException('normalization object is required');
    final normalization = NormalizationRecord.fromJson(normRaw);

    final rawSockets = (rawInput['sockets'] as List?)?.cast<Map<String, dynamic>>() ?? [];
    final sockets = rawSockets.map(ModelSocketDescriptor.fromJson).toList();

    // Check unique socket names
    final socketNames = <String>{};
    for (final s in sockets) {
      if (!socketNames.add(s.name)) {
        throw FormatException('Duplicate socket name "${s.name}" in asset $id');
      }
    }

    final rawParts = (rawInput['parts'] as List?)?.cast<Map<String, dynamic>>() ?? [];
    if (rawParts.isEmpty) {
      throw FormatException('Asset $id must contain at least one part');
    }
    final parts = rawParts.map(ModelPartDescriptor.fromJson).toList();

    // Compute combined bounds
    var minX = double.infinity, minY = double.infinity, minZ = double.infinity;
    var maxX = -double.infinity, maxY = -double.infinity, maxZ = -double.infinity;
    for (final p in parts) {
      if (p.boundsMin.x < minX) minX = p.boundsMin.x;
      if (p.boundsMin.y < minY) minY = p.boundsMin.y;
      if (p.boundsMin.z < minZ) minZ = p.boundsMin.z;
      if (p.boundsMax.x > maxX) maxX = p.boundsMax.x;
      if (p.boundsMax.y > maxY) maxY = p.boundsMax.y;
      if (p.boundsMax.z > maxZ) maxZ = p.boundsMax.z;
    }

    final combinedMin = (x: minX, y: minY, z: minZ);
    final combinedMax = (x: maxX, y: maxY, z: maxZ);

    // Compute output hash deterministically from JSON payload
    final preHashPayload = {
      'id': id,
      'kind': kind,
      'pivot': pivot,
      'normalization': normalization.toJson(),
      'sockets': sockets.map((s) => s.toJson()).toList(),
      'parts': parts.map((p) => p.toJson()).toList(),
      'combinedBoundsMin': [combinedMin.x, combinedMin.y, combinedMin.z],
      'combinedBoundsMax': [combinedMax.x, combinedMax.y, combinedMax.z],
    };

    final canonicalString = jsonEncode(preHashPayload);
    final outputHash = computeSha256(utf8.encode(canonicalString));

    return AssetNormalizedPackage(
      id: id,
      kind: kind,
      pivot: pivot,
      normalization: normalization,
      sockets: sockets,
      parts: parts,
      combinedBoundsMin: combinedMin,
      combinedBoundsMax: combinedMax,
      outputHash: outputHash,
    );
  }
}
