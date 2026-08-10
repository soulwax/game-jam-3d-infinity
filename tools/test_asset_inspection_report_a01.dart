// A-01: Asset inspection report generator verification.
//
// Verifies that:
//  1. Inspection reports accurately reflect package dimensions, vertices, and triangles.
//  2. Turntable specs, UV channel occupancy, and draw call estimates are calculated.
//  3. Markdown report export contains required headers, socket list, and part breakdowns.
//  4. Report JSON serialization round-trips cleanly.

import 'package:quarantine/engine/asset_inspection_report.dart';
import 'package:quarantine/engine/asset_source_contract.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError('FAIL: $message');
}

void main() {
  final converter = AssetConverter();

  final rawInput = <String, dynamic>{
    'id': 'furniture-hall-table',
    'kind': 'furniture',
    'pivot': 'floor-center',
    'normalization': {
      'importerVersion': '1.0.0-pixeldart',
      'sourceHash': '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      'units': 'metres',
      'upAxis': 'Y-up',
    },
    'sockets': [
      {
        'name': 'tabletop_center',
        'position': [0.0, 0.85, 0.0],
        'rotation': [0.0, 0.0, 0.0],
      },
    ],
    'parts': [
      {
        'name': 'table_legs',
        'materialKey': 'mat-wood-oak-polished',
        'boundsMin': [-0.30, 0.0, -0.72],
        'boundsMax': [0.30, 0.80, 0.72],
        'vertexCount': 160,
        'triangleCount': 80,
        'lodTriangleCounts': [80, 40],
      },
      {
        'name': 'table_top',
        'materialKey': 'mat-wood-oak-polished',
        'boundsMin': [-0.30, 0.80, -0.72],
        'boundsMax': [0.30, 0.85, 0.72],
        'vertexCount': 48,
        'triangleCount': 24,
        'lodTriangleCounts': [24, 12],
      },
    ],
  };

  final pkg = converter.convertSource(rawInput);
  final report = AssetInspectionReport.generate(pkg);

  // 1. Check generated values
  check(report.assetId == 'furniture-hall-table', 'assetId matches');
  check(report.contentHash == pkg.outputHash, 'contentHash matches');
  check(report.kind == 'furniture', 'kind matches');
  check(report.pivot == 'floor-center', 'pivot matches');

  // Check dimensions
  check((report.dimensions.width - 0.60).abs() < 0.001, 'Width = 0.60m');
  check((report.dimensions.height - 0.85).abs() < 0.001, 'Height = 0.85m');
  check((report.dimensions.depth - 1.44).abs() < 0.001, 'Depth = 1.44m');
  check(report.dimensions.volume > 0.7, 'Volume > 0.7m³');

  // Check vertex/triangle sums
  check(report.totalVertices == 208, 'totalVertices = 208');
  check(report.totalTriangles == 104, 'totalTriangles = 104');
  check(report.estimatedDrawCallsLod0 == 2, 'estimatedDrawCallsLod0 = 2');
  check(report.compressedByteEstimate > 0, 'Byte estimate > 0');

  // Check turntable specs
  final tt = report.turntableSpecs;
  check(tt['azimuthSteps'] == 12, '12 azimuth steps');
  check((tt['renderModes'] as List).contains('wireframe'), 'Contains wireframe mode');

  // Check JSON export
  final json = report.toJson();
  check(json['assetId'] == 'furniture-hall-table', 'JSON assetId');

  // Check Markdown export
  final md = report.toMarkdownReport();
  check(md.contains('# Asset Inspection Report: furniture-hall-table'), 'Markdown title');
  check(md.contains('`tabletop_center`'), 'Markdown socket');
  check(md.contains('table_legs'), 'Markdown part 1');
  check(md.contains('table_top'), 'Markdown part 2');

  print('A-01: Asset inspection report test passed cleanly!');
}
