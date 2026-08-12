import 'package:web/web.dart' hide Float32List;
import 'package:web/web.dart' as web;
import 'shadow.dart';
import 'gl.dart';
import 'shaders.dart' as shader_sources;

class RenderPasses {
  final ShadowMap? shadows;
  final Gl gl;
  final WebGL2RenderingContext ctx;

  Target? _ssaoTarget;
  Target? _ssaoBlurA;
  Target? _ssaoBlurB;
  Target? _vhsHistory;
  late final WebGLProgram _ssaoProgram;
  late final WebGLProgram _ssaoBlurProgram;
  late final WebGLUniformLocation? _ssaoUDepth;
  late final WebGLUniformLocation? _ssaoUDepthSize;
  late final WebGLUniformLocation? _ssaoURadius;
  late final WebGLUniformLocation? _ssaoUBias;
  late final WebGLUniformLocation? _blurUTex;
  late final WebGLUniformLocation? _blurUDir;

  int _ssaoWidth = 192;
  int _ssaoHeight = 108;
  late final WebGLVertexArrayObject _ssaoVao;

  RenderPasses({this.shadows, required this.gl, required this.ctx}) {
    _initializeSSAO();
    _initializeVHS();
  }

  void _initializeSSAO() {
    try {
      _ssaoProgram = gl.compileProgram(
        _ssaoVertSrc,
        shader_sources.ssaoFragSrc,
      );
      _ssaoBlurProgram = gl.compileProgram(_postVertSrc, _ssaoBlurFragSrc);

      _ssaoUDepth = ctx.getUniformLocation(_ssaoProgram, 'uDepth');
      _ssaoUDepthSize = ctx.getUniformLocation(_ssaoProgram, 'uDepthSize');
      _ssaoURadius = ctx.getUniformLocation(_ssaoProgram, 'uRadius');
      _ssaoUBias = ctx.getUniformLocation(_ssaoProgram, 'uBias');
      _blurUTex = ctx.getUniformLocation(_ssaoBlurProgram, 'uTex');
      _blurUDir = ctx.getUniformLocation(_ssaoBlurProgram, 'uDir');

      _ssaoTarget = gl.makeTarget(_ssaoWidth, _ssaoHeight, depth: false);
      _ssaoBlurA = gl.makeTarget(_ssaoWidth, _ssaoHeight, depth: false);
      _ssaoBlurB = gl.makeTarget(_ssaoWidth, _ssaoHeight, depth: false);
      _ssaoVao = ctx.createVertexArray()!;
    } catch (_) {
      _ssaoTarget = null;
      _ssaoBlurA = null;
      _ssaoBlurB = null;
    }
  }

  void _initializeVHS() {
    try {
      _vhsHistory = gl.makeTarget(384, 216, depth: false);
    } catch (_) {
      _vhsHistory = null;
    }
  }

  bool beginFrame() {
    return shadows != null && shadows!.activeCasterCount > 0;
  }

  void beginShadowPass(int casterIdx) {
    if (shadows == null) return;
    shadows!.beginShadowPass(casterIdx);
    shadows!.bindShadowProgram();
    shadows!.configureDepthOnlyState();
  }

  void endShadowPass() {
    if (shadows == null) return;
    shadows!.restoreColorState();
    shadows!.endShadowPass();
  }

  int getActiveCasterCount() => shadows?.activeCasterCount ?? 0;

  void resize(int w, int h) {
    _ssaoWidth = (w ~/ 2);
    _ssaoHeight = (h ~/ 2);
    if (_ssaoTarget != null) {
      gl.resizeTarget(_ssaoTarget!, _ssaoWidth, _ssaoHeight);
    }
    if (_ssaoBlurA != null) {
      gl.resizeTarget(_ssaoBlurA!, _ssaoWidth, _ssaoHeight);
    }
    if (_ssaoBlurB != null) {
      gl.resizeTarget(_ssaoBlurB!, _ssaoWidth, _ssaoHeight);
    }
    if (_vhsHistory != null) {
      gl.resizeTarget(_vhsHistory!, 384, 216);
    }
  }

  Target? getSSAOTarget() => _ssaoTarget;
  Target? getSSAOBlurATarget() => _ssaoBlurA;
  Target? getSSAOBlurBTarget() => _ssaoBlurB;
  WebGLProgram getSSAOProgram() => _ssaoProgram;
  WebGLProgram getSSAOBlurProgram() => _ssaoBlurProgram;
  WebGLVertexArrayObject getSSAOVao() => _ssaoVao;

  WebGLUniformLocation? getSSAOUDepth() => _ssaoUDepth;
  WebGLUniformLocation? getSSAOUDepthSize() => _ssaoUDepthSize;
  WebGLUniformLocation? getSSAOURadius() => _ssaoURadius;
  WebGLUniformLocation? getSSAOUBias() => _ssaoUBias;
  WebGLUniformLocation? getBlurUTex() => _blurUTex;
  WebGLUniformLocation? getBlurUDir() => _blurUDir;

  Target? getVHSHistory() => _vhsHistory;

  void swapVHSHistory(Target current) {
    if (_vhsHistory == null) return;
    gl.copyTarget(current, _vhsHistory!);
  }

  WebGLTexture? renderSSAO(Target worldTarget, double radius) {
    final a = _ssaoTarget, b = _ssaoBlurA, c = _ssaoBlurB;
    if (a == null || b == null || c == null || worldTarget.depthTex == null) {
      return null;
    }

    ctx.useProgram(_ssaoProgram);
    ctx.activeTexture(33984);
    ctx.bindTexture(3553, worldTarget.depthTex!);
    ctx.uniform1i(_ssaoUDepth, 0);
    ctx.uniform2f(_ssaoUDepthSize, a.w.toDouble(), a.h.toDouble());
    ctx.uniform1f(_ssaoURadius, radius);
    ctx.uniform1f(_ssaoUBias, 0.0025);
    gl.bindTarget(a);
    ctx.bindVertexArray(_ssaoVao);
    ctx.drawArrays(4, 0, 3);

    ctx.useProgram(_ssaoBlurProgram);
    ctx.activeTexture(33984);
    ctx.uniform1i(_blurUTex, 0);
    gl.bindTarget(c);
    ctx.bindTexture(3553, a.color);
    ctx.uniform2f(_blurUDir, 1.0 / a.w, 0.0);
    ctx.drawArrays(4, 0, 3);
    gl.bindTarget(b);
    ctx.bindTexture(3553, c.color);
    ctx.uniform2f(_blurUDir, 0.0, 1.0 / a.h);
    ctx.drawArrays(4, 0, 3);
    return b.color;
  }

  static const String _ssaoVertSrc = '''#version 300 es
out vec2 vUv;
void main(){
  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));
  vUv=p;
  gl_Position=vec4(p*2.0-1.0,0.0,1.0);
}''';

  static const String _postVertSrc = '''#version 300 es
out vec2 vUv;
void main(){
  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));
  vUv=p;
  gl_Position=vec4(p*2.0-1.0,0.0,1.0);
}''';

  static const String ssaoFragSrcLegacy = '''#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uDepth;
uniform vec2 uDepthSize;
uniform float uRadius;
uniform float uBias;
out vec4 oColor;

vec3 reconstructNormal(vec2 uv, float depth) {
  vec2 texel = 1.0 / uDepthSize;
  float c = depth;
  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;
  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;
  float ddx = r - c;
  float ddy = u - c;
  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));
  return normal;
}

void main() {
  float depth = texture(uDepth, vUv).r;
  if (depth >= 1.0) {
    oColor = vec4(1.0);
    return;
  }

  vec3 normal = reconstructNormal(vUv, depth);
  vec2 texel = 1.0 / uDepthSize;
  float occlusion = 0.0;
  float sampleRadius = uRadius * texel.x;

  const float angles[8] = float[](
    0.0, 0.785398, 1.570796, 2.356194,
    3.141593, 3.926991, 4.712389, 5.497787
  );

  for (int i = 0; i < 8; i++) {
    float angle = angles[i];
    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;
    vec2 sampleUv = vUv + offset;
    float sampleDepth = texture(uDepth, sampleUv).r;
    float depthDiff = depth - sampleDepth;
    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {
      occlusion += 1.0;
    }
  }

  float ao = 1.0 - (occlusion / 8.0);
  oColor = vec4(vec3(ao), 1.0);
}''';

  static const String _ssaoBlurFragSrc = '''#version 300 es
precision mediump float;
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uDir;
out vec4 oColor;

void main() {
  vec4 c = texture(uTex, vUv) * 0.5;
  c += texture(uTex, vUv + uDir) * 0.25;
  c += texture(uTex, vUv - uDir) * 0.25;
  oColor = c;
}''';
}
