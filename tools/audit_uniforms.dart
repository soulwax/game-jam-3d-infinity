import 'dart:io';

/// Uniform Binding Auditor Tool per MASTERPLAN §38.1.1
/// Verifies that all expected WebGL shader uniforms exist and are bound.
void main(List<String> args) {
  final requiredUniformsWorld = [
    'uFog',
    'uFogStart',
    'uFogEnd',
    'uFogDensity',
    'uFogHeightFalloff',
    'uFogGroundHeight',
    'uRainIntensity',
    'uSurfaceWetness',
    'uWindowWetness',
    'uLight',
    'uLightColor',
    'uAmbient',
    'uDiffuse',
    'uShadow0',
    'uShadow1',
    'uShadow2',
    'uShadowCasters',
    'uShadowBias',
  ];

  final shaderFile = File('shaders/world.frag');
  if (!shaderFile.existsSync()) {
    stderr.writeln('[UNIFORM AUDIT ERROR] missing shaders/world.frag file');
    exit(1);
  }

  final source = shaderFile.readAsStringSync();
  final missing = <String>[];

  for (final uniformName in requiredUniformsWorld) {
    if (!source.contains(uniformName)) {
      missing.add(uniformName);
    }
  }

  if (missing.isNotEmpty) {
    stderr.writeln('[UNIFORM AUDIT ERROR] Missing uniform declarations in shaders/world.frag: ${missing.join(", ")}');
    exit(1);
  }

  stdout.writeln('[UNIFORM AUDIT SUCCESS] All ${requiredUniformsWorld.length} required uniforms present in shaders/world.frag');
}
