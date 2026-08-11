/// Normal Map Baking Validator for The Quarantine.
/// 
/// Validates normal maps to ensure they follow the openGL convention (Y+),
/// maintain unit length across mip levels, and agree with tangent space bases.
library quarantine.tools.normal_map_baking_validator;

/// The normal map convention used.
enum NormalMapConvention {
  /// OpenGL convention (Y+) - Green channel is up.
  openGL,
  /// DirectX convention (Y-) - Green channel is down.
  directX,
}

/// A report generated after validating a normal map.
class NormalMapValidationReport {
  /// The identifier for the texture.
  final String textureId;
  /// The inferred convention of the normal map.
  final NormalMapConvention convention;
  /// Whether the convention is valid for the project.
  final bool isValidConvention;
  /// Whether the unit length is preserved across mipmaps.
  final bool unitLengthPreservedAcrossMips;
  /// Whether the tangent space aligns with the mesh basis.
  final bool tangentSpaceAgreement;
  /// A list of issues found during validation.
  final List<String> issues;

  /// Creates a normal map validation report.
  const NormalMapValidationReport({
    required this.textureId,
    required this.convention,
    required this.isValidConvention,
    required this.unitLengthPreservedAcrossMips,
    required this.tangentSpaceAgreement,
    required this.issues,
  });

  /// Converts the report to a JSON representation.
  Map<String, dynamic> toJson() {
    return {
      'textureId': textureId,
      'convention': convention.name,
      'isValidConvention': isValidConvention,
      'unitLengthPreservedAcrossMips': unitLengthPreservedAcrossMips,
      'tangentSpaceAgreement': tangentSpaceAgreement,
      'issues': issues,
    };
  }
}

/// A validator for normal map baking conventions.
class NormalMapBakingValidator {
  /// Validates a normal map texture.
  /// 
  /// Provide [allowDirectX] to override the default OpenGL requirement.
  static NormalMapValidationReport validateNormalMap({
    required String textureId,
    required List<double> greenChannelPixels,
    required List<double> mipLengthSamples,
    required bool tangentAligned,
    bool allowDirectX = false,
  }) {
    final issues = <String>[];
    
    // Check green-channel polarity (naive check for demonstration)
    final isDirectX = greenChannelPixels.isNotEmpty && greenChannelPixels.first < 0.0;
    final convention = isDirectX ? NormalMapConvention.directX : NormalMapConvention.openGL;
    
    bool isValidConvention = true;
    if (convention == NormalMapConvention.directX && !allowDirectX) {
      isValidConvention = false;
      issues.add('Invalid convention: DirectX (Y-) is not allowed by default. Use OpenGL (Y+).');
    }
    
    // Check vector renormalization across mipmap chain (length within 0.98..1.02)
    bool unitLengthPreservedAcrossMips = true;
    for (int i = 0; i < mipLengthSamples.length; i++) {
      final len = mipLengthSamples[i];
      if (len < 0.98 || len > 1.02) {
        unitLengthPreservedAcrossMips = false;
        issues.add('Mip level $i has invalid average normal length: $len (expected ~1.0).');
      }
    }
    
    // Check tangent-space alignment against mesh basis
    bool tangentSpaceAgreement = tangentAligned;
    if (!tangentSpaceAgreement) {
      issues.add('Tangent space is not aligned with mesh basis.');
    }
    
    return NormalMapValidationReport(
      textureId: textureId,
      convention: convention,
      isValidConvention: isValidConvention,
      unitLengthPreservedAcrossMips: unitLengthPreservedAcrossMips,
      tangentSpaceAgreement: tangentSpaceAgreement,
      issues: issues,
    );
  }

  /// Validates all known materials.
  static List<NormalMapValidationReport> validateAllKnownMaterials() {
    // Simulated validation for materials in the project.
    return [
      validateNormalMap(
        textureId: 'wall_plaster_n',
        greenChannelPixels: [0.5], // OpenGL
        mipLengthSamples: [1.0, 0.99, 1.01],
        tangentAligned: true,
      ),
      validateNormalMap(
        textureId: 'floor_wood_n',
        greenChannelPixels: [-0.2], // DirectX (invalid)
        mipLengthSamples: [1.0, 1.0, 1.0],
        tangentAligned: true,
      ),
      validateNormalMap(
        textureId: 'door_metal_n',
        greenChannelPixels: [0.8], // OpenGL
        mipLengthSamples: [1.0, 0.95, 0.94], // Invalid mips
        tangentAligned: true,
      ),
      validateNormalMap(
        textureId: 'ceiling_tiles_n',
        greenChannelPixels: [0.1], // OpenGL
        mipLengthSamples: [1.0, 1.0],
        tangentAligned: false, // Invalid tangents
      ),
    ];
  }
}

void main() {
  print('Running NormalMapBakingValidator tests...');
  final reports = NormalMapBakingValidator.validateAllKnownMaterials();
  int failed = 0;
  for (final report in reports) {
    if (report.issues.isNotEmpty) {
      print('FAIL: ${report.textureId} -> ${report.issues.join(' | ')}');
      failed++;
    } else {
      print('PASS: ${report.textureId}');
    }
  }
  
  if (failed == 0) {
    print('All materials passed validation (except intentionally failed tests).');
  } else {
    print('$failed materials failed validation.');
  }

  // Self-tests for validation logic
  print('\nRunning unit tests...');
  
  final r1 = NormalMapBakingValidator.validateNormalMap(
    textureId: 'test_valid',
    greenChannelPixels: [0.5],
    mipLengthSamples: [1.0],
    tangentAligned: true,
  );
  assert(r1.isValidConvention == true, 'Valid OpenGL texture should pass convention check');
  assert(r1.unitLengthPreservedAcrossMips == true, 'Valid mip lengths should pass');
  assert(r1.tangentSpaceAgreement == true, 'Valid tangents should pass');
  assert(r1.issues.isEmpty, 'Should have no issues');
  print('Unit test 1 PASS');

  final r2 = NormalMapBakingValidator.validateNormalMap(
    textureId: 'test_invalid',
    greenChannelPixels: [-0.5],
    mipLengthSamples: [0.5],
    tangentAligned: false,
  );
  assert(r2.isValidConvention == false, 'DirectX texture should fail convention check');
  assert(r2.unitLengthPreservedAcrossMips == false, 'Invalid mip lengths should fail');
  assert(r2.tangentSpaceAgreement == false, 'Invalid tangents should fail');
  assert(r2.issues.length == 3, 'Should have 3 issues');
  
  // Test serialization
  final json = r1.toJson();
  assert(json['textureId'] == 'test_valid', 'toJson() should work');
  assert(json['convention'] == 'openGL', 'toJson() should serialize convention correctly');
  print('Unit test 2 PASS');

  print('All tests completed successfully!');
}
