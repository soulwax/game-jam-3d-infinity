import 'package:quarantine/engine/material_family_library.dart';

/// Specifies the different channels available for a PBR texture material.
enum TextureChannelSpec {
  /// sRGB, 512x512 hero / 256x256 standard
  baseColor,
  /// Linear, tangent-space, OpenGL Y+ convention
  normalMap,
  /// Linear, R=AO, G=Roughness, B=Metalness
  orm,
  /// sRGB, 256x256
  emissive,
  /// Linear grayscale
  alphaMask,
  /// Linear grayscale, 256x256
  heightPom,
}

/// A validation rule for a specific texture channel.
class TextureValidationRule {
  /// The texture channel this rule applies to.
  final TextureChannelSpec channel;

  /// The expected color space ('sRGB' or 'linear').
  final String expectedColorSpace;

  /// Allowed resolutions for the texture, as a list of (width, height) tuples.
  final List<(int, int)> allowedResolutions;

  /// Whether the channel is mandatory for a valid PBR material.
  final bool isRequired;

  /// A human-readable description of the rule.
  final String description;

  /// Creates a [TextureValidationRule].
  const TextureValidationRule({
    required this.channel,
    required this.expectedColorSpace,
    required this.allowedResolutions,
    required this.isRequired,
    required this.description,
  });

  /// Serializes the rule to JSON.
  Map<String, dynamic> toJson() => {
        'channel': channel.name,
        'expectedColorSpace': expectedColorSpace,
        'allowedResolutions':
            allowedResolutions.map((r) => {'width': r.$1, 'height': r.$2}).toList(),
        'isRequired': isRequired,
        'description': description,
      };
}

/// The result of evaluating a validation rule against a material's texture channel.
class TextureValidationResult {
  /// The texture channel evaluated.
  final TextureChannelSpec channel;

  /// The identifier of the material being validated.
  final String materialId;

  /// Whether the validation passed.
  final bool passed;

  /// A list of human-readable issues found during validation.
  final List<String> issues;

  /// Creates a [TextureValidationResult].
  const TextureValidationResult({
    required this.channel,
    required this.materialId,
    required this.passed,
    required this.issues,
  });

  /// Serializes the validation result to JSON.
  Map<String, dynamic> toJson() => {
        'channel': channel.name,
        'materialId': materialId,
        'passed': passed,
        'issues': issues,
      };
}

/// Validates PBR textures against a set of rules for The Quarantine project.
class PBRTextureValidator {
  /// The canonical set of texture validation rules.
  static const List<TextureValidationRule> rules = [
    TextureValidationRule(
      channel: TextureChannelSpec.baseColor,
      expectedColorSpace: 'sRGB',
      allowedResolutions: [(512, 512), (256, 256)],
      isRequired: true,
      description: 'sRGB, 512x512 hero / 256x256 standard',
    ),
    TextureValidationRule(
      channel: TextureChannelSpec.normalMap,
      expectedColorSpace: 'linear',
      allowedResolutions: [(512, 512), (256, 256)],
      isRequired: true,
      description: 'Linear, tangent-space, OpenGL Y+ convention',
    ),
    TextureValidationRule(
      channel: TextureChannelSpec.orm,
      expectedColorSpace: 'linear',
      allowedResolutions: [(512, 512), (256, 256)],
      isRequired: true,
      description: 'Linear, R=AO, G=Roughness, B=Metalness',
    ),
    TextureValidationRule(
      channel: TextureChannelSpec.emissive,
      expectedColorSpace: 'sRGB',
      allowedResolutions: [(256, 256)],
      isRequired: false,
      description: 'sRGB, 256x256',
    ),
    TextureValidationRule(
      channel: TextureChannelSpec.alphaMask,
      expectedColorSpace: 'linear',
      // Will check exact match with baseColor separately; allowing both here.
      allowedResolutions: [(512, 512), (256, 256)],
      isRequired: false,
      description: 'Linear grayscale',
    ),
    TextureValidationRule(
      channel: TextureChannelSpec.heightPom,
      expectedColorSpace: 'linear',
      allowedResolutions: [(256, 256)],
      isRequired: false,
      description: 'Linear grayscale, 256x256',
    ),
  ];

  /// Validates a single texture channel.
  static TextureValidationResult validateChannel({
    required TextureChannelSpec channel,
    required String materialId,
    required String declaredColorSpace,
    required int width,
    required int height,
    bool hasAlpha = false,
    bool isOpenGLYPlus = true,
    bool hasOrmSemantics = true,
  }) {
    final rule = rules.firstWhere((r) => r.channel == channel);
    final issues = <String>[];

    if (declaredColorSpace != rule.expectedColorSpace) {
      issues.add(
          'Expected color space ${rule.expectedColorSpace} but got $declaredColorSpace');
    }

    bool validRes = false;
    for (final res in rule.allowedResolutions) {
      if (res.$1 == width && res.$2 == height) {
        validRes = true;
        break;
      }
    }
    if (!validRes) {
      issues.add('Resolution ${width}x$height not allowed for ${channel.name}');
    }

    if (channel == TextureChannelSpec.normalMap && !isOpenGLYPlus) {
      issues.add('Normal map must be OpenGL Y+ convention');
    }

    if (channel == TextureChannelSpec.orm && !hasOrmSemantics) {
      issues.add('ORM map must have R=AO, G=Roughness, B=Metalness semantics');
    }

    return TextureValidationResult(
      channel: channel,
      materialId: materialId,
      passed: issues.isEmpty,
      issues: issues,
    );
  }

  /// Validates all texture channels associated with a material.
  static List<TextureValidationResult> validateMaterial({
    required String materialId,
    required Map<TextureChannelSpec,
            ({String colorSpace, int width, int height, bool hasAlpha})>
        channels,
    bool isOpenGLYPlus = true,
    bool hasOrmSemantics = true,
  }) {
    final results = <TextureValidationResult>[];

    // Check required channels
    for (final rule in rules) {
      if (rule.isRequired && !channels.containsKey(rule.channel)) {
        results.add(TextureValidationResult(
          channel: rule.channel,
          materialId: materialId,
          passed: false,
          issues: ['Required channel ${rule.channel.name} is missing'],
        ));
      }
    }

    int? baseWidth;
    int? baseHeight;

    if (channels.containsKey(TextureChannelSpec.baseColor)) {
      baseWidth = channels[TextureChannelSpec.baseColor]!.width;
      baseHeight = channels[TextureChannelSpec.baseColor]!.height;
    }

    channels.forEach((channel, spec) {
      final res = validateChannel(
        channel: channel,
        materialId: materialId,
        declaredColorSpace: spec.colorSpace,
        width: spec.width,
        height: spec.height,
        hasAlpha: spec.hasAlpha,
        isOpenGLYPlus: isOpenGLYPlus,
        hasOrmSemantics: hasOrmSemantics,
      );

      final extraIssues = List<String>.from(res.issues);

      if (channel == TextureChannelSpec.normalMap) {
        if (baseWidth != null && baseHeight != null) {
          if (spec.width != baseWidth || spec.height != baseHeight) {
            extraIssues.add(
                'normalMap resolution (${spec.width}x${spec.height}) does not match baseColor resolution (${baseWidth}x$baseHeight)');
          }
        }
      }

      if (channel == TextureChannelSpec.alphaMask) {
        if (baseWidth != null && baseHeight != null) {
          if (spec.width != baseWidth || spec.height != baseHeight) {
            extraIssues.add(
                'alphaMask resolution (${spec.width}x${spec.height}) does not match baseColor resolution (${baseWidth}x$baseHeight)');
          }
        }
      }

      results.add(TextureValidationResult(
        channel: channel,
        materialId: materialId,
        passed: extraIssues.isEmpty,
        issues: extraIssues,
      ));
    });

    return results;
  }

  /// Serializes all rules to JSON.
  static Map<String, dynamic> toJson() => {
        'rules': rules.map((r) => r.toJson()).toList(),
      };

  /// Validates that the rules themselves are self-consistent.
  static bool validateRuleIntegrity() {
    for (final channel in TextureChannelSpec.values) {
      final matches = rules.where((r) => r.channel == channel);
      if (matches.length != 1) return false;
    }
    return true;
  }

  /// Validates all material families defined in the [MaterialFamilyLibrary].
  static List<TextureValidationResult> validateAllFamilies() {
    final library = MaterialFamilyLibrary();
    final results = <TextureValidationResult>[];

    for (final mat in library.allMaterials) {
      final isHero = mat.id.contains('hero');
      final res = isHero ? 512 : 256;

      final channels = <TextureChannelSpec,
          ({String colorSpace, int width, int height, bool hasAlpha})>{
        TextureChannelSpec.baseColor: (
          colorSpace: 'sRGB',
          width: res,
          height: res,
          hasAlpha: mat.alpha < 1.0
        ),
        TextureChannelSpec.normalMap: (
          colorSpace: 'linear',
          width: res,
          height: res,
          hasAlpha: false
        ),
        TextureChannelSpec.orm: (
          colorSpace: 'linear',
          width: res,
          height: res,
          hasAlpha: false
        ),
      };

      if (mat.emissive > 0) {
        channels[TextureChannelSpec.emissive] = (
          colorSpace: 'sRGB',
          width: 256,
          height: 256,
          hasAlpha: false
        );
      }
      if (mat.alpha < 1.0) {
        channels[TextureChannelSpec.alphaMask] = (
          colorSpace: 'linear',
          width: res,
          height: res,
          hasAlpha: false
        );
      }

      results.addAll(validateMaterial(
        materialId: mat.id,
        channels: channels,
        isOpenGLYPlus: true,
        hasOrmSemantics: true,
      ));
    }

    return results;
  }
}

void main() {
  int passCount = 0;
  int failCount = 0;

  void runTest(String name, bool Function() testFn) {
    try {
      if (testFn()) {
        print('PASS: $name');
        passCount++;
      } else {
        print('FAIL: $name');
        failCount++;
      }
    } catch (e) {
      print('FAIL (Exception): $name - $e');
      failCount++;
    }
  }

  runTest('Rule Integrity', () => PBRTextureValidator.validateRuleIntegrity());

  runTest('Validate Channel - Correct baseColor', () {
    final res = PBRTextureValidator.validateChannel(
      channel: TextureChannelSpec.baseColor,
      materialId: 'test',
      declaredColorSpace: 'sRGB',
      width: 256,
      height: 256,
    );
    return res.passed;
  });

  runTest('Validate Channel - Incorrect baseColor (Linear)', () {
    final res = PBRTextureValidator.validateChannel(
      channel: TextureChannelSpec.baseColor,
      materialId: 'test',
      declaredColorSpace: 'linear',
      width: 256,
      height: 256,
    );
    return !res.passed && res.issues.any((i) => i.contains('color space'));
  });

  runTest('Validate Material - Complete', () {
    final results = PBRTextureValidator.validateMaterial(
      materialId: 'complete_mat',
      channels: {
        TextureChannelSpec.baseColor: (
          colorSpace: 'sRGB',
          width: 512,
          height: 512,
          hasAlpha: false
        ),
        TextureChannelSpec.normalMap: (
          colorSpace: 'linear',
          width: 512,
          height: 512,
          hasAlpha: false
        ),
        TextureChannelSpec.orm: (
          colorSpace: 'linear',
          width: 512,
          height: 512,
          hasAlpha: false
        ),
      },
    );
    return results.every((r) => r.passed) && results.length == 3;
  });

  runTest('Validate Material - Incomplete (missing ORM)', () {
    final results = PBRTextureValidator.validateMaterial(
      materialId: 'incomplete_mat',
      channels: {
        TextureChannelSpec.baseColor: (
          colorSpace: 'sRGB',
          width: 256,
          height: 256,
          hasAlpha: false
        ),
        TextureChannelSpec.normalMap: (
          colorSpace: 'linear',
          width: 256,
          height: 256,
          hasAlpha: false
        ),
      },
    );
    final failed = results.where((r) => !r.passed);
    return failed.isNotEmpty &&
        failed.any((r) => r.issues.any((i) => i.contains('Required channel')));
  });

  runTest('Validate Material - Mismatched resolution', () {
    final results = PBRTextureValidator.validateMaterial(
      materialId: 'mismatch_mat',
      channels: {
        TextureChannelSpec.baseColor: (
          colorSpace: 'sRGB',
          width: 512,
          height: 512,
          hasAlpha: false
        ),
        TextureChannelSpec.normalMap: (
          colorSpace: 'linear',
          width: 256,
          height: 256,
          hasAlpha: false
        ),
        TextureChannelSpec.orm: (
          colorSpace: 'linear',
          width: 512,
          height: 512,
          hasAlpha: false
        ),
      },
    );
    final normalRes = results.firstWhere(
        (r) => r.channel == TextureChannelSpec.normalMap);
    return !normalRes.passed &&
        normalRes.issues.any((i) => i.contains('resolution'));
  });

  runTest('Validate All Families', () {
    final results = PBRTextureValidator.validateAllFamilies();
    return results.isNotEmpty && results.every((r) => r.passed);
  });

  print('\nSummary: $passCount passed, $failCount failed.');
}
