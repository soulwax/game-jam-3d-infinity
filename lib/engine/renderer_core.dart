import 'dart:js_interop';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:web/web.dart' hide Float32List;
import 'package:web/web.dart' as web;

import 'camera.dart';
import 'gl.dart';
import 'programs.dart';
import 'math3.dart';
import 'vertex_format.dart';
import 'shadow.dart';
import 'materials.dart';
import 'passes.dart';
import '../config.dart';
import '../house/lighting.dart';
import '../sim/rupture.dart';

part 'world_program_bindings.dart';

const int _stride = vertexStride;
const int _vertsPerItem = vertsPerQuad;

const Map<String, int> _texUnits = {
  'bluenoise': texUnitNoise,
  'lut-gothic': texUnitLut,
  'grime': texUnitWall,
  'glass': texUnitGlass,
  'soft': texUnitSoft,
};

class _Aabb {
  double minX, minY, minZ, maxX, maxY, maxZ;
  _Aabb(this.minX, this.minY, this.minZ, this.maxX, this.maxY, this.maxZ);
}

class _FrustumPlane {
  double nx, ny, nz, d;
  _FrustumPlane(this.nx, this.ny, this.nz, this.d);
}

class _Static {
  final WebGLBuffer vertexBuf;
  final WebGLBuffer? indexBuf;
  final WebGLVertexArrayObject vao;
  final int indexCount;
  final int vertexCount;
  final _Aabb aabb;
  final int materialIndex;

  _Static(
    this.vertexBuf,
    this.vao,
    this.vertexCount,
    this.aabb,
    this.materialIndex, {
    this.indexBuf,
    this.indexCount = 0,
  });
}

class _Pending {
  bool isQuad = false;
  Vec3 p0 = Vec3(0, 0, 0),
      p1 = Vec3(0, 0, 0),
      p2 = Vec3(0, 0, 0),
      p3 = Vec3(0, 0, 0);
  double size = 0;
  int rgb = 0;
  bool glow = false;
  double alpha = 1;
  double ao = 1;
  double u = 0, v = 0, mat = 0;
  double depth = 0;
  Mat4? model;
}

class _OpaqueQuadData {
  Vec3 p0, p1, p2, p3;
  int rgb;
  double ao, u, v, mat;

  _OpaqueQuadData(
    this.p0,
    this.p1,
    this.p2,
    this.p3,
    this.rgb,
    this.ao,
    this.u,
    this.v,
    this.mat,
  );
}

class RendererCore extends WorldProgramBindings {
  final WebGL2RenderingContext _ctx;
  final Gl _gl;
  int _width, _height;
  double _scale = 1;
  double _aspect = 1;

  late final RendererPrograms _programs;
  WebGLProgram get _world => _programs.world;
  WebGLProgram get _post => _programs.post;
  WebGLProgram get _blur => _programs.blur;
  WebGLProgram get _dof => _programs.dof;
  WebGLProgram get _vhs => _programs.vhs;
  late WebGLUniformLocation? _uTex,
      _uTime,
      _uFlash,
      _uVignette,
      _uGrain,
      _uDesat;
  late WebGLUniformLocation? _uBloom, _uBloomStrength, _bTex, _bDir, _uBlur;
  late WebGLUniformLocation? _uDepth, _uDepthViz;
  late final WebGLUniformLocation? _uDofTex,
      _uDofDepth,
      _uFocusDistance,
      _uDofBlurScale,
      _uDofBlurRadius,
      _uDofStrength,
      _uDofTexel;
  late WebGLUniformLocation? _uNoise,
      _uNoiseOn,
      _uNoiseOff,
      _uLut,
      _uLutOn,
      _uLutMix;
  late final ShadowMap _shadowMap;
  late Materials materials;
  WebGLTexture? _materialAlbedo;
  final Set<String> _enabledTextures = {};
  late final RenderPasses _passes;
  late WebGLUniformLocation? _uSSAO, _uSSAOStrength;
  late final WebGLUniformLocation? _uVHSTexelSize, _uVHSTime, _uVHSNoiseOff;
  late final WebGLUniformLocation? _uVHSChromaLuma,
      _uVHSChromaLag,
      _uVHSTapeNoise;
  late final WebGLUniformLocation? _uVHSHeadSwitch,
      _uVHSTracking,
      _uVHSDropouts,
      _uVHSGhosting;
  late final WebGLUniformLocation? _uVHSChromaBlurI,
      _uVHSChromaBlurQ,
      _uVHSChromaLagAmount;
  late final WebGLUniformLocation? _uVHSNoiseScale,
      _uVHSHeadSwitchHeight,
      _uVHSHeadSwitchJitter;
  late final WebGLUniformLocation? _uVHSJitterAmount,
      _uVHSJitterFreq,
      _uVHSDropoutRate;
  late final WebGLUniformLocation? _uVHSGhostAmount, _uVHSGhostOffset;
  late final WebGLUniformLocation? _uVHSTex,
      _uVHSNoise,
      _uVHSGhostTarget,
      _uVHSHasGhost;

  final double _focusDistance = dofFocusDistance;
  final double _dofBlurScale = dofBlurScale;
  final double _dofBlurRadius = dofBlurRadius;
  double _dofStrength = 0;

  late final WebGLBuffer _opaqueBuf;
  late final WebGLBuffer _blendedBuf;
  late final WebGLBuffer _shaftBuf;
  late final WebGLVertexArrayObject _opaqueVao;
  late final WebGLVertexArrayObject _blendedVao;
  late final WebGLVertexArrayObject _shaftVao;
  late final WebGLVertexArrayObject _postVao;
  Target? _target;
  Target? _ms;
  Target? _bloomA;
  Target? _bloomB;
  Target? _dofTarget;
  Target? _ps1Target;
  Target? _vhsTarget;
  late final bool _reduced;
  bool _affineTexture = ps1AffineTexture;
  bool _vertexSnapping = ps1VertexSnapping;
  bool _colorQuantize = ps1ColorQuantize;
  double _flicker = 1;
  RuptureState _rupture = RuptureState();

  final Float32List _opaqueFloats = Float32List(
    maxOpaqueQuads * _vertsPerItem * _stride,
  );
  int _opaqueUsed = 0;
  final Float32List _blendedFloats = Float32List(
    maxBlendedQuads * _vertsPerItem * _stride,
  );
  final List<_Pending> _pending = List.generate(
    maxBlendedQuads,
    (_) => _Pending(),
  );
  int _pendingCount = 0;
  final List<int> _order = List<int>.filled(maxBlendedQuads, 0);
  final Float32List _shaftFloats = Float32List(
    maxShaftQuads * _vertsPerItem * _stride,
  );
  int _shaftUsed = 0;

  final Map<int, _Static> _statics = {};
  int _nextStatic = 1;
  bool _worldPassOpen = false;
  int _drawCallCount = 0;

  late List<_FrustumPlane> _frustumPlanes;
  final List<_OpaqueQuadData> _pendingOpaqueQuads = List.generate(
    maxOpaqueQuads,
    (_) => _OpaqueQuadData(
      Vec3(0, 0, 0),
      Vec3(0, 0, 0),
      Vec3(0, 0, 0),
      Vec3(0, 0, 0),
      0,
      1,
      0,
      0,
      0,
    ),
  );
  int _pendingOpaqueCount = 0;
  final List<int> _opaqueOrder = List<int>.filled(maxOpaqueQuads, 0);

  Vec3 _lightDir = Vec3(lightDirX, lightDirY, lightDirZ).normalized;
  double _lightR = 1, _lightG = 1, _lightB = 1;
  double _ambient = shadeAmbient;
  List<PointLight> _pointLights = const [];

  Vec3 _eye = Vec3(0, 0, 0),
      _fwd = Vec3(0, 0, 1),
      _up = Vec3(0, 1, 0),
      _right = Vec3(1, 0, 0);
  double _bgR = 0, _bgG = 0, _bgB = 0;
  double _time = 0;
  int _frame = 0;
  double flash = 0;
  double speed01 = 0;
  double depthViz = 0;
  Mat4? _currentModel;
  final Mat4 _identityModel = Mat4.identity();

  RendererCore(super._worldCtx, this._width, this._height)
    : _ctx = _worldCtx,
      _gl = Gl(_worldCtx) {
    materials = Materials([
      Material(0, 0, 1, 0),
      Material(1, 0, 1, 0),
      Material(2, 0, 1, 0),
    ]);
    _scale = 2 * projectionScale;
    _aspect = _height / _width;
    _frustumPlanes = List.generate(6, (_) => _FrustumPlane(0, 0, 0, 0));
    _programs = RendererPrograms.create(_gl);
    _attachWorldProgram(() => _programs.world);
    _resolveWorldLocations();
    _resolvePostLocations();
    _resolveVHSLocations();
    _uDofTex = _ctx.getUniformLocation(_programs.dof, 'uTex');
    _uDofDepth = _ctx.getUniformLocation(_programs.dof, 'uDepth');
    _uFocusDistance = _ctx.getUniformLocation(_programs.dof, 'uFocusDistance');
    _uDofBlurScale = _ctx.getUniformLocation(_programs.dof, 'uDofBlurScale');
    _uDofBlurRadius = _ctx.getUniformLocation(_programs.dof, 'uBlurRadius');
    _uDofStrength = _ctx.getUniformLocation(_programs.dof, 'uDofStrength');
    _uDofTexel = _ctx.getUniformLocation(_programs.dof, 'uTexel');
    _reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    lightColor = lightColorRgb;

    _shadowMap = ShadowMap(_ctx, _gl);
    _passes = RenderPasses(shadows: _shadowMap, gl: _gl, ctx: _ctx);

    _opaqueBuf = _gl.makeBuffer();
    _blendedBuf = _gl.makeBuffer();
    _shaftBuf = _gl.makeBuffer();
    _opaqueVao = _ctx.createVertexArray()!;
    _blendedVao = _ctx.createVertexArray()!;
    _shaftVao = _ctx.createVertexArray()!;
    _postVao = _ctx.createVertexArray()!;
    _ctx.bindVertexArray(_opaqueVao);
    _bindLayout(_opaqueBuf);
    _ctx.bindVertexArray(_blendedVao);
    _bindLayout(_blendedBuf);
    _ctx.bindVertexArray(_shaftVao);
    _bindLayout(_shaftBuf);
    _ctx.bindVertexArray(null);

    if (ps1Enabled) {
      try {
        _ps1Target = _gl.makeTarget(
          ps1InternalWidth,
          ps1InternalHeight,
          depth: true,
          mrt: true,
        );
      } catch (_) {
        _ps1Target = null;
      }
    }
    if (vhsEnabled) {
      try {
        _vhsTarget = _gl.makeTarget(
          ps1InternalWidth,
          ps1InternalHeight,
          depth: false,
        );
      } catch (_) {
        _vhsTarget = null;
      }
    }
    final s = msaaSamples < _gl.maxSamples ? msaaSamples : _gl.maxSamples;
    if (s > 1) {
      try {
        _ms = _gl.makeTarget(_width, _height, samples: s, mrt: true);
      } catch (_) {
        _ms = null;
      }
    }
    try {
      _target = _gl.makeTarget(_width, _height, depth: true, mrt: true);
    } catch (_) {
      _target = null;
      _ms = null;
    }
    if (_target != null) {
      try {
        _bloomA = _gl.makeTarget(_bw, _bh, depth: false);
        _bloomB = _gl.makeTarget(_bw, _bh, depth: false);
        _dofTarget = _gl.makeTarget(_width, _height, depth: false);
      } catch (_) {
        _bloomA = null;
        _bloomB = null;
        _dofTarget = null;
      }
    }
  }

  int get _bw => _width ~/ bloomDivisor < 1 ? 1 : _width ~/ bloomDivisor;
  int get _bh => _height ~/ bloomDivisor < 1 ? 1 : _height ~/ bloomDivisor;

  void configureImageEffects({
    required bool affineTexture,
    required bool vertexSnapping,
    required bool colorQuantize,
  }) {
    _affineTexture = affineTexture;
    _vertexSnapping = vertexSnapping;
    _colorQuantize = colorQuantize;
  }

  Future<void> loadTextures(Map<String, String> urls) async {
    for (final e in urls.entries) {
      final k = e.key;
      final unit = _texUnits[k];
      if (unit == null) continue;
      final t = await _gl.loadTexture(
        e.value,
        unit,
        mip: (k == 'grime' || k == 'glass') && !ps1PointSampled,
        linear: (k != 'bluenoise' && k != 'lut-gothic') && !ps1PointSampled,
        repeat: k == 'grime',
        aniso: k == 'grime' && !ps1PointSampled,
      );
      if (t != null) _enableTexture(k, unit);
    }
    final albedoUrls = [
      'wall-plaster',
      'floor-linoleum',
      'ceiling-stained',
    ].map((key) => urls[key]).whereType<String>().toList();
    if (albedoUrls.length == 3) {
      _materialAlbedo = await _gl.loadTextureArray(
        albedoUrls,
        texUnitMaterialAlbedo,
        linear: !ps1PointSampled,
      );
    }
  }

  Future<void> reloadShadersLive() async {
    try {
      final shaders = <String, String>{};
      for (final name in [
        'world.vert',
        'world.frag',
        'post.vert',
        'blur.frag',
        'post.frag',
      ]) {
        try {
          final resp = await web.window.fetch('shaders/$name'.toJS).toDart;
          if (!resp.ok) throw Exception('HTTP ${resp.status}');
          shaders[name] = (await resp.text().toDart).toString();
        } catch (e) {
          throw Exception('shaders/$name: fetch failed - $e');
        }
      }
      _recompilePrograms(shaders);
    } catch (e) {
      web.console.error('shader reload failed: $e'.toJS);
    }
  }

  void _recompilePrograms(Map<String, String> shaders) {
    try {
      _programs.recompileLive(shaders);

      _resolveWorldLocations();
      _resolvePostLocations();
      for (final key in _enabledTextures.toList()) {
        _enableTexture(key, _texUnits[key]!);
      }

      web.console.log('shaders recompiled successfully'.toJS);
    } catch (e) {
      web.console.error('shader recompile failed: $e'.toJS);
    }
  }

  void _resolvePostLocations() {
    _uTex = _ctx.getUniformLocation(_post, 'uTex');
    _uTime = _ctx.getUniformLocation(_post, 'uTime');
    _uFlash = _ctx.getUniformLocation(_post, 'uFlash');
    _uVignette = _ctx.getUniformLocation(_post, 'uVignette');
    _uGrain = _ctx.getUniformLocation(_post, 'uGrain');
    _uDesat = _ctx.getUniformLocation(_post, 'uDesat');
    _uBloom = _ctx.getUniformLocation(_post, 'uBloom');
    _uBloomStrength = _ctx.getUniformLocation(_post, 'uBloomStrength');
    _uNoiseOff = _ctx.getUniformLocation(_post, 'uNoiseOff');
    _uLutMix = _ctx.getUniformLocation(_post, 'uLutMix');
    _uDepth = _ctx.getUniformLocation(_post, 'uDepth');
    _uDepthViz = _ctx.getUniformLocation(_post, 'uDepthViz');
    _uSSAO = _ctx.getUniformLocation(_post, 'uSSAO');
    _uSSAOStrength = _ctx.getUniformLocation(_post, 'uSSAOStrength');
    _uNoise = _ctx.getUniformLocation(_post, 'uNoise');
    _uNoiseOn = _ctx.getUniformLocation(_post, 'uNoiseOn');
    _uLut = _ctx.getUniformLocation(_post, 'uLut');
    _uLutOn = _ctx.getUniformLocation(_post, 'uLutOn');
    _bTex = _ctx.getUniformLocation(_blur, 'uTex');
    _bDir = _ctx.getUniformLocation(_blur, 'uDir');
    _uBlur = _ctx.getUniformLocation(_post, 'uBlur');
  }

  void _resolveVHSLocations() {
    _uVHSTex = _ctx.getUniformLocation(_vhs, 'uTex');
    _uVHSNoise = _ctx.getUniformLocation(_vhs, 'uNoise');
    _uVHSTime = _ctx.getUniformLocation(_vhs, 'uTime');
    _uVHSTexelSize = _ctx.getUniformLocation(_vhs, 'uTexelSize');
    _uVHSNoiseOff = _ctx.getUniformLocation(_vhs, 'uNoiseOff');
    _uVHSChromaLuma = _ctx.getUniformLocation(_vhs, 'uChromaLuma');
    _uVHSChromaLag = _ctx.getUniformLocation(_vhs, 'uChromaLag');
    _uVHSTapeNoise = _ctx.getUniformLocation(_vhs, 'uTapeNoise');
    _uVHSHeadSwitch = _ctx.getUniformLocation(_vhs, 'uHeadSwitch');
    _uVHSTracking = _ctx.getUniformLocation(_vhs, 'uTracking');
    _uVHSDropouts = _ctx.getUniformLocation(_vhs, 'uDropouts');
    _uVHSGhosting = _ctx.getUniformLocation(_vhs, 'uGhosting');
    _uVHSChromaBlurI = _ctx.getUniformLocation(_vhs, 'uChromaBlurI');
    _uVHSChromaBlurQ = _ctx.getUniformLocation(_vhs, 'uChromaBlurQ');
    _uVHSChromaLagAmount = _ctx.getUniformLocation(_vhs, 'uChromaLagAmount');
    _uVHSNoiseScale = _ctx.getUniformLocation(_vhs, 'uNoiseScale');
    _uVHSHeadSwitchHeight = _ctx.getUniformLocation(_vhs, 'uHeadSwitchHeight');
    _uVHSHeadSwitchJitter = _ctx.getUniformLocation(_vhs, 'uHeadSwitchJitter');
    _uVHSJitterAmount = _ctx.getUniformLocation(_vhs, 'uJitterAmount');
    _uVHSJitterFreq = _ctx.getUniformLocation(_vhs, 'uJitterFreq');
    _uVHSDropoutRate = _ctx.getUniformLocation(_vhs, 'uDropoutRate');
    _uVHSGhostAmount = _ctx.getUniformLocation(_vhs, 'uGhostAmount');
    _uVHSGhostOffset = _ctx.getUniformLocation(_vhs, 'uGhostOffset');
    _uVHSGhostTarget = _ctx.getUniformLocation(_vhs, 'uGhostTarget');
    _uVHSHasGhost = _ctx.getUniformLocation(_vhs, 'uHasGhost');
  }

  void _enableTexture(String key, int unit) {
    _enabledTextures.add(key);
    switch (key) {
      case 'bluenoise':
        _sampler(_post, _uNoise, _uNoiseOn, unit);
      case 'lut-gothic':
        _sampler(_post, _uLut, _uLutOn, unit);
      case 'grime':
        _sampler(_world, _uWall, _uWallOn, unit);
      case 'glass':
        _sampler(_world, _uGlass, _uGlassOn, unit);
      case 'soft':
        _sampler(_world, _uSoft, _uSoftOn, unit);
    }
  }

  void _sampler(
    WebGLProgram prog,
    WebGLUniformLocation? s,
    WebGLUniformLocation? flag,
    int unit,
  ) {
    _ctx.useProgram(prog);
    _ctx.uniform1i(s, unit);
    _ctx.uniform1f(flag, 1);
  }

  set lightDir(Vec3 v) => _lightDir = v.normalized;

  set lightColor(int rgb) {
    final (r, g, b) = _unpack(rgb);
    _lightR = r;
    _lightG = g;
    _lightB = b;
  }

  set ambient(double a) => _ambient = a < 0 ? 0 : a;

  double fogDensity = 0.035;
  double fogHeightFalloff = 0.6;
  double fogGroundHeight = 0.0;
  double rainIntensity = 0.0;
  double surfaceWetness = 0.0;
  double windowWetness = 0.0;
  (double, double, double)? overrideFogColor;

  void setPointLights(List<PointLight> lights) {
    _pointLights = lights.length <= maxMantlePointLights
        ? List<PointLight>.unmodifiable(lights)
        : List<PointLight>.unmodifiable(lights.take(maxMantlePointLights));
  }

  set depthOfFieldStrength(double s) =>
      _dofStrength = s < 0 ? 0 : (s > 1 ? 1 : s);

  int addStaticMesh(Float32List verts, {required int materialIndex}) {
    if (verts.length % _stride != 0) {
      throw ArgumentError(
        'static mesh needs a multiple of $_stride floats, got ${verts.length}',
      );
    }
    final vertexCount = verts.length ~/ _stride;

    double minX = double.maxFinite,
        minY = double.maxFinite,
        minZ = double.maxFinite,
        maxX = -double.maxFinite,
        maxY = -double.maxFinite,
        maxZ = -double.maxFinite;
    for (int i = 0; i < vertexCount; i++) {
      final idx = i * _stride;
      final x = verts[idx];
      final y = verts[idx + 1];
      final z = verts[idx + 2];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (z < minZ) minZ = z;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (z > maxZ) maxZ = z;
    }

    final aabb = _Aabb(minX, minY, minZ, maxX, maxY, maxZ);

    final indices = Uint16List(vertexCount);
    for (int i = 0; i < vertexCount; i++) {
      indices[i] = i;
    }

    final vao = _ctx.createVertexArray()!;
    final vertexBuf = _ctx.createBuffer()!;
    final indexBuf = _ctx.createBuffer()!;

    _ctx.bindVertexArray(vao);
    _ctx.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, vertexBuf);
    _ctx.bufferData(
      WebGL2RenderingContext.ARRAY_BUFFER,
      verts.toJS,
      WebGL2RenderingContext.STATIC_DRAW,
    );
    _bindStaticLayout(vertexBuf, null);

    _ctx.bindBuffer(WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER, indexBuf);
    _ctx.bufferData(
      WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
      indices.toJS,
      WebGL2RenderingContext.STATIC_DRAW,
    );

    _ctx.bindVertexArray(null);
    final handle = _nextStatic++;
    _statics[handle] = _Static(
      vertexBuf,
      vao,
      vertexCount,
      aabb,
      materialIndex,
      indexBuf: indexBuf,
      indexCount: vertexCount,
    );
    return handle;
  }

  void _computeFrustumPlanes() {
    final halfH = 1.0 / _scale;
    final halfW = _aspect / _scale;

    final right = _right;
    final up = _up;
    final fwd = _fwd;
    final eye = _eye;

    _frustumPlanes[0].nx = (fwd + right * halfW).x;
    _frustumPlanes[0].ny = (fwd + right * halfW).y;
    _frustumPlanes[0].nz = (fwd + right * halfW).z;
    _frustumPlanes[0].d =
        -_frustumPlanes[0].nx * eye.x -
        _frustumPlanes[0].ny * eye.y -
        _frustumPlanes[0].nz * eye.z;

    _frustumPlanes[1].nx = (fwd - right * halfW).x;
    _frustumPlanes[1].ny = (fwd - right * halfW).y;
    _frustumPlanes[1].nz = (fwd - right * halfW).z;
    _frustumPlanes[1].d =
        -_frustumPlanes[1].nx * eye.x -
        _frustumPlanes[1].ny * eye.y -
        _frustumPlanes[1].nz * eye.z;

    _frustumPlanes[2].nx = (fwd + up * halfH).x;
    _frustumPlanes[2].ny = (fwd + up * halfH).y;
    _frustumPlanes[2].nz = (fwd + up * halfH).z;
    _frustumPlanes[2].d =
        -_frustumPlanes[2].nx * eye.x -
        _frustumPlanes[2].ny * eye.y -
        _frustumPlanes[2].nz * eye.z;

    _frustumPlanes[3].nx = (fwd - up * halfH).x;
    _frustumPlanes[3].ny = (fwd - up * halfH).y;
    _frustumPlanes[3].nz = (fwd - up * halfH).z;
    _frustumPlanes[3].d =
        -_frustumPlanes[3].nx * eye.x -
        _frustumPlanes[3].ny * eye.y -
        _frustumPlanes[3].nz * eye.z;

    _frustumPlanes[4].nx = fwd.x;
    _frustumPlanes[4].ny = fwd.y;
    _frustumPlanes[4].nz = fwd.z;
    _frustumPlanes[4].d =
        -_frustumPlanes[4].nx * (eye.x + fwd.x * glDepthNear) -
        _frustumPlanes[4].ny * (eye.y + fwd.y * glDepthNear) -
        _frustumPlanes[4].nz * (eye.z + fwd.z * glDepthNear);

    _frustumPlanes[5].nx = -fwd.x;
    _frustumPlanes[5].ny = -fwd.y;
    _frustumPlanes[5].nz = -fwd.z;
    _frustumPlanes[5].d =
        -_frustumPlanes[5].nx * (eye.x + fwd.x * glDepthFar) -
        _frustumPlanes[5].ny * (eye.y + fwd.y * glDepthFar) -
        _frustumPlanes[5].nz * (eye.z + fwd.z * glDepthFar);
  }

  bool _aabbOutsidePlane(_Aabb aabb, _FrustumPlane plane) {
    final px = plane.nx > 0 ? aabb.maxX : aabb.minX;
    final py = plane.ny > 0 ? aabb.maxY : aabb.minY;
    final pz = plane.nz > 0 ? aabb.maxZ : aabb.minZ;
    return plane.nx * px + plane.ny * py + plane.nz * pz < -plane.d;
  }

  bool _aabbInFrustum(_Aabb aabb) {
    for (int i = 0; i < 6; i++) {
      if (_aabbOutsidePlane(aabb, _frustumPlanes[i])) return false;
    }
    return true;
  }

  void drawStatic(int handle, {Mat4? model}) {
    final s = _statics[handle];
    if (s == null) return;
    // The world pass computes this frame's frustum before any static mesh tests it.
    _openWorldPass();
    if (enableFrustumCull && !_aabbInFrustum(s.aabb)) return;
    if (model != null && model != _currentModel) {
      _setModel(model);
    } else if (model == null && _currentModel != _identityModel) {
      _setModel(_identityModel);
    }
    _ctx.uniform1i(_uInstanced, 0);
    _ctx.uniform1i(_uStaticMaterial, s.materialIndex);
    _ctx.bindVertexArray(s.vao);
    if (s.indexCount > 0) {
      _ctx.drawElements(
        WebGL2RenderingContext.TRIANGLES,
        s.indexCount,
        WebGL2RenderingContext.UNSIGNED_SHORT,
        0,
      );
    } else {
      _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, s.vertexCount);
    }
    _drawCallCount++;
  }

  void drawStaticInstanced(
    int handle,
    List<Mat4> models, {
    List<int>? materialIds,
    List<int>? tintColors,
  }) {
    final s = _statics[handle];
    if (s == null || models.isEmpty) return;
    _openWorldPass();

    final instanceCount = models.length;
    final instanceData = Float32List(instanceCount * instanceFloatsPerInstance);
    for (int i = 0; i < instanceCount; i++) {
      final mat = models[i];
      final offset = i * instanceFloatsPerInstance;
      instanceData[offset + 0] = mat.m[0];
      instanceData[offset + 1] = mat.m[1];
      instanceData[offset + 2] = mat.m[2];
      instanceData[offset + 3] = mat.m[3];
      instanceData[offset + 4] = mat.m[4];
      instanceData[offset + 5] = mat.m[5];
      instanceData[offset + 6] = mat.m[6];
      instanceData[offset + 7] = mat.m[7];
      instanceData[offset + 8] = mat.m[8];
      instanceData[offset + 9] = mat.m[9];
      instanceData[offset + 10] = mat.m[10];
      instanceData[offset + 11] = mat.m[11];
      instanceData[offset + 12] = mat.m[12];
      instanceData[offset + 13] = mat.m[13];
      instanceData[offset + 14] = mat.m[14];
      instanceData[offset + 15] = mat.m[15];

      final materialIndex = materialIds != null && i < materialIds.length
          ? materials.shaderIndexForId(materialIds[i]) ?? 0
          : 0;
      final tintColor = tintColors != null && i < tintColors.length
          ? tintColors[i]
          : 0xFFFFFF;
      final (tr, tg, tb) = _unpack(tintColor);
      instanceData[offset + 16] = materialIndex.toDouble();
      instanceData[offset + 17] = tr;
      instanceData[offset + 18] = tg;
      instanceData[offset + 19] = tb;
    }

    final instanceBuf = _ctx.createBuffer()!;
    _ctx.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, instanceBuf);
    _ctx.bufferData(
      WebGL2RenderingContext.ARRAY_BUFFER,
      instanceData.toJS,
      WebGL2RenderingContext.DYNAMIC_DRAW,
    );

    _ctx.uniform1i(_uInstanced, 1);
    _ctx.uniform1i(_uStaticMaterial, 0);
    _ctx.bindVertexArray(s.vao);
    _bindInstanceAttributes(instanceBuf);

    if (s.indexCount > 0) {
      _ctx.drawElementsInstanced(
        WebGL2RenderingContext.TRIANGLES,
        s.indexCount,
        WebGL2RenderingContext.UNSIGNED_SHORT,
        0,
        instanceCount,
      );
    } else {
      _ctx.drawArraysInstanced(
        WebGL2RenderingContext.TRIANGLES,
        0,
        s.vertexCount,
        instanceCount,
      );
    }
    _drawCallCount++;

    _ctx.deleteBuffer(instanceBuf);
  }

  void freeStatic(int handle) {
    final s = _statics.remove(handle);
    if (s == null) return;
    _ctx.deleteBuffer(s.vertexBuf);
    if (s.indexBuf != null) {
      _ctx.deleteBuffer(s.indexBuf!);
    }
    _ctx.deleteVertexArray(s.vao);
  }

  int get drawCallCount => _drawCallCount;

  void _openWorldPass() {
    if (_worldPassOpen) return;
    _worldPassOpen = true;
    if (enableFrustumCull) _computeFrustumPlanes();

    _ctx.useProgram(_world);
    _ctx.uniform3f(_uEye, _eye.x, _eye.y, _eye.z);
    _ctx.uniform3f(_uFwd, _fwd.x, _fwd.y, _fwd.z);
    _ctx.uniform3f(_uUp, _up.x, _up.y, _up.z);
    _ctx.uniform3f(_uRight, _right.x, _right.y, _right.z);
    _ctx.uniform1f(_uScale, _scale);
    _ctx.uniform1f(_uAspect, _aspect);
    _ctx.uniform1f(_uDepthNear, glDepthNear);
    _ctx.uniform1f(_uDepthFar, glDepthFar);
    _ctx.uniform1f(_uAffineTexture, _affineTexture ? 1 : 0);
    final fogR = overrideFogColor != null ? overrideFogColor!.$1 : (_bgR / 255 * fogDarkness);
    final fogG = overrideFogColor != null ? overrideFogColor!.$2 : (_bgG / 255 * fogDarkness);
    final fogB = overrideFogColor != null ? overrideFogColor!.$3 : (_bgB / 255 * fogDarkness);
    _ctx.uniform3f(_uFog, fogR, fogG, fogB);
    _ctx.uniform1f(_uFogDensity, fogDensity);
    _ctx.uniform1f(_uFogHeightFalloff, fogHeightFalloff);
    _ctx.uniform1f(_uFogGroundHeight, fogGroundHeight);
    _ctx.uniform1f(_uRainIntensity, rainIntensity);
    _ctx.uniform1f(_uSurfaceWetness, surfaceWetness);
    _ctx.uniform1f(_uWindowWetness, windowWetness);
    _ctx.uniform3f(_uLight, _lightDir.x, _lightDir.y, _lightDir.z);
    _ctx.uniform3f(_uLightColor, _lightR, _lightG, _lightB);
    _ctx.uniform1f(_uFogStart, fogStart);
    _ctx.uniform1f(_uFogEnd, fogEnd);
    _ctx.uniform1f(_uAmbient, _ambient);
    _ctx.uniform1f(_uDiffuse, shadeDiffuse);
    _ctx.uniform1i(_uPointLightCount, _pointLights.length);
    for (int i = 0; i < maxMantlePointLights; i++) {
      final light = i < _pointLights.length ? _pointLights[i] : null;
      if (light == null) {
        _ctx.uniform1f(_uPointLightIntensity[i], 0);
        continue;
      }
      final (r, g, b) = _unpack(light.color);
      final flicker = _reduced
          ? 1
          : 1 + (smoothNoise(_time * 8, 0x6A5D + i) * 2 - 1) * light.flicker;
      _ctx.uniform3f(
        _uPointLightPos[i],
        light.position.x,
        light.position.y,
        light.position.z,
      );
      _ctx.uniform3f(_uPointLightColor[i], r, g, b);
      _ctx.uniform1f(_uPointLightRadius[i], light.radius);
      _ctx.uniform1f(_uPointLightIntensity[i], light.intensity * flicker);
    }
    _flicker = _reduced
        ? 1
        : 1 + (smoothNoise(_time * flickerRate, 0x9E37) * 2 - 1) * flickerDepth;
    _ctx.uniform1f(_uFlicker, _flicker);
    _ctx.uniform1f(_uBloomThreshold, bloomThreshold);
    _ctx.uniform1f(_uColorQuantize, _colorQuantize ? 1 : 0);
    _ctx.uniform1f(_uWallMid, wallTexMid);
    _ctx.uniform1f(_uWallAmt, wallTexAmount);
    _ctx.uniform1f(_uWallScale, wallTexScale);
    _ctx.uniform1f(_uGlassGain, glassGain);
    _ctx.uniform1f(_uGlassFog, glassFog);
    double snapWidth = _vertexSnapping ? ps1InternalWidth.toDouble() : 0;
    double snapHeight = _vertexSnapping ? ps1InternalHeight.toDouble() : 0;
    if (_rupture.step == RuptureStep.vertexSnap) {
      final progress = (_rupture.stepElapsed / ruptureVertexDuration).clamp(
        0.0,
        1.0,
      );
      final drift = _reduced
          ? ruptureVertexSnapDrift * 0.5
          : ruptureVertexSnapDrift;
      final driftFactor = 1.0 - progress * drift;
      snapWidth *= driftFactor;
      snapHeight *= driftFactor;
    } else if (_rupture.step.index > RuptureStep.vertexSnap.index) {
      snapWidth = 0;
      snapHeight = 0;
    }
    _ctx.uniform2f(_uInternal, snapWidth, snapHeight);

    final numCasters = _shadowMap.activeCasterCount;
    _ctx.uniform1f(_uShadowCasters, numCasters.toDouble());
    _ctx.uniform3f(_uShadowBias, shadowBiasConstant, shadowBiasSlope, 0);
    if (_uLightProj0 != null && _shadowMap.getProjection(0) != null) {
      _ctx.uniformMatrix4fv(
        _uLightProj0,
        false,
        _shadowMap.getProjection(0)!.m.toJS,
      );
    }
    if (_uLightProj1 != null && _shadowMap.getProjection(1) != null) {
      _ctx.uniformMatrix4fv(
        _uLightProj1,
        false,
        _shadowMap.getProjection(1)!.m.toJS,
      );
    }
    if (_uLightProj2 != null && _shadowMap.getProjection(2) != null) {
      _ctx.uniformMatrix4fv(
        _uLightProj2,
        false,
        _shadowMap.getProjection(2)!.m.toJS,
      );
    }
    final shadowTex0 = _shadowMap.getShadowTexture(0);
    final shadowTex1 = _shadowMap.getShadowTexture(1);
    final shadowTex2 = _shadowMap.getShadowTexture(2);
    if (shadowTex0 != null && _uShadow0 != null) {
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE8);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, shadowTex0);
      _ctx.uniform1i(_uShadow0, 8);
    }
    if (shadowTex1 != null && _uShadow1 != null) {
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE9);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, shadowTex1);
      _ctx.uniform1i(_uShadow1, 9);
    }
    if (shadowTex2 != null && _uShadow2 != null) {
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE10);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, shadowTex2);
      _ctx.uniform1i(_uShadow2, 10);
    }
    _ctx.uniform1i(
      _uMaterialCount,
      _materialAlbedo == null ? 0 : materials.table.length,
    );
    if (_materialAlbedo != null) {
      _ctx.activeTexture(
        WebGL2RenderingContext.TEXTURE0 + texUnitMaterialAlbedo,
      );
      _ctx.bindTexture(
        WebGL2RenderingContext.TEXTURE_2D_ARRAY,
        _materialAlbedo,
      );
      _ctx.uniform1i(_uMaterialAlbedo, texUnitMaterialAlbedo);
    }
    for (int i = 0; i < materials.table.length; i++) {
      final m = materials.table[i];
      if (_uMaterialEmissive[i] != null) {
        _ctx.uniform1f(_uMaterialEmissive[i]!, m.emissiveStrength);
      }
      if (_uMaterialUvScale[i] != null) {
        _ctx.uniform1f(_uMaterialUvScale[i]!, m.uvScale);
      }
      if (_uMaterialLayer[i] != null) {
        _ctx.uniform1i(_uMaterialLayer[i]!, m.atlasLayer);
      }
      if (_uMaterialFlags[i] != null) {
        _ctx.uniform1i(_uMaterialFlags[i]!, m.flags);
      }
    }
    _setModel(_identityModel);
    _ctx.uniform1i(_uInstanced, 0);
    _ctx.uniform1i(_uStaticMaterial, 0);

    _ctx.enable(WebGL2RenderingContext.DEPTH_TEST);
    _ctx.depthMask(true);
    _ctx.disable(WebGL2RenderingContext.BLEND);
  }

  void _setModel(Mat4 m) {
    _currentModel = m;
    _ctx.uniformMatrix4fv(_uModel, false, m.m.toJS);
  }

  void resize(int w, int h) {
    _width = w;
    _height = h;
    _aspect = h / w;
    _passes.resize(w, h);
    final t = _target, m = _ms, a = _bloomA, b = _bloomB, d = _dofTarget;
    if (t != null) _gl.resizeTarget(t, w, h);
    if (m != null) _gl.resizeTarget(m, w, h);
    if (a != null) _gl.resizeTarget(a, _bw, _bh);
    if (b != null) _gl.resizeTarget(b, _bw, _bh);
    if (d != null) _gl.resizeTarget(d, w, h);
  }

  int addShadowCaster(Vec3 pos) => _shadowMap.addCaster(pos);

  void updateShadowCasterPosition(int idx, Vec3 pos) =>
      _shadowMap.updateCasterPosition(idx, pos);

  void disableShadowCaster(int idx) => _shadowMap.disableCaster(idx);

  int get activeShadowCasters => _shadowMap.activeCasterCount;

  void beginShadowPass(int casterIdx) {
    _shadowMap.beginShadowPass(casterIdx);
    _shadowMap.bindShadowProgram();
    _shadowMap.configureDepthOnlyState();
  }

  void endShadowPass() {
    _shadowMap.restoreColorState();
    _shadowMap.endShadowPass();
  }

  void begin(Camera cam, double hue) {
    _eye = cam.eye;
    _fwd = cam.fwd;
    _up = cam.up;
    _right = cam.right;

    final bg = _hsvToRgb(hue, bgSaturation, bgValue);
    _bgR = bg.$1.toDouble();
    _bgG = bg.$2.toDouble();
    _bgB = bg.$3.toDouble();

    final renderTarget = ps1Enabled
        ? (_ps1Target ?? _ms ?? _target)
        : (_ms ?? _target);
    _gl.bindTarget(renderTarget);
    _ctx.depthMask(true);
    _gl.clearScene(renderTarget, _bgR / 255, _bgG / 255, _bgB / 255);
    _opaqueUsed = 0;
    _pendingCount = 0;
    _shaftUsed = 0;
    _worldPassOpen = false;
    _drawCallCount = 0;
  }

  void addShaft(
    Vec3 center,
    double size,
    int rgb,
    double strength, {
    double reach = 1,
    Mat4? model,
  }) {
    if (_shaftUsed + _vertsPerItem * _stride > _shaftFloats.length) return;
    final dir = center - _eye;
    final dist = dir.length;
    final maxDist = shaftMaxDist * reach;
    if (dist < 1 || dist > maxDist) return;
    final facing = dir.dot(_fwd) / dist;
    if (facing <= 0) return;
    final fade = 1 - dist / maxDist;
    final gain = strength * fade * math.pow(facing, shaftFocus).toDouble();
    if (gain < 0.01) return;
    final (a, b, c, d) = _billboardCorners(center, size);
    final n = _fwd * -1.0;
    final (r, g, bl) = _unpack(rgb);
    if (model != null && model != _identityModel) {
      _openWorldPass();
      _setModel(model);
    }
    _shaftUsed = _putQuad(
      _shaftFloats,
      _shaftUsed,
      a,
      b,
      c,
      d,
      n,
      r,
      g,
      bl,
      0,
      gain,
      0,
      0,
      3,
    );
  }

  void addQuad(
    Vec3 a,
    Vec3 b,
    Vec3 c,
    Vec3 d,
    int baseRgb, {
    bool glow = false,
    double alpha = 1,
    double ao = 1,
    double u = 0,
    double v = 0,
    double mat = 0,
    Mat4? model,
  }) {
    final centroid = (a + b + c + d) * 0.25;
    final depth = (centroid - _eye).dot(_fwd);
    if (glow || alpha < 1 || model != null) {
      if (_pendingCount >= maxBlendedQuads) return;
      final p = _pending[_pendingCount++];
      p.isQuad = true;
      p.p0 = a;
      p.p1 = b;
      p.p2 = c;
      p.p3 = d;
      p.rgb = baseRgb;
      p.glow = glow;
      p.alpha = alpha;
      p.ao = ao;
      p.u = u;
      p.v = v;
      p.mat = mat;
      p.depth = depth;
      p.model = model;
      return;
    }
    if (_pendingOpaqueCount >= maxOpaqueQuads) return;
    final q = _pendingOpaqueQuads[_pendingOpaqueCount++];
    q.p0 = a;
    q.p1 = b;
    q.p2 = c;
    q.p3 = d;
    q.rgb = baseRgb;
    q.ao = ao;
    q.u = u;
    q.v = v;
    q.mat = mat;
  }

  void addBillboard(
    Vec3 center,
    double size,
    int rgb, {
    double alpha = 1,
    double mat = 0,
    bool glow = false,
    Mat4? model,
  }) {
    final depth = (center - _eye).dot(_fwd);
    if (alpha < 1 || glow || model != null) {
      if (_pendingCount >= maxBlendedQuads) return;
      final p = _pending[_pendingCount++];
      p.isQuad = false;
      p.p0 = center;
      p.size = size;
      p.rgb = rgb;
      p.glow = glow;
      p.alpha = alpha;
      p.ao = 1;
      p.u = 0;
      p.v = 0;
      p.mat = mat;
      p.depth = depth;
      p.model = model;
      return;
    }
    if (_opaqueUsed + _vertsPerItem * _stride > _opaqueFloats.length) return;
    final (a, b, c, d) = _billboardCorners(center, size);
    final n = _fwd * -1.0;
    final (r, g, bl) = _unpack(rgb);
    _opaqueUsed = _putQuad(
      _opaqueFloats,
      _opaqueUsed,
      a,
      b,
      c,
      d,
      n,
      r,
      g,
      bl,
      0,
      1,
      0,
      0,
      mat,
    );
  }

  (Vec3, Vec3, Vec3, Vec3) _billboardCorners(Vec3 center, double size) {
    final rt = _right * size, up = _up * size;
    return (
      center - rt - up,
      center + rt - up,
      center + rt + up,
      center - rt + up,
    );
  }

  void _sortPending(int n) {
    for (var i = 1; i < n; i++) {
      final v = _order[i];
      final d = _pending[v].depth;
      var j = i - 1;
      while (j >= 0 && _pending[_order[j]].depth < d) {
        _order[j + 1] = _order[j];
        j--;
      }
      _order[j + 1] = v;
    }
  }

  void _sortOpaqueQuads(int n) {
    for (var i = 1; i < n; i++) {
      final v = _opaqueOrder[i];
      final m = _pendingOpaqueQuads[v].mat;
      var j = i - 1;
      while (j >= 0 && _pendingOpaqueQuads[_opaqueOrder[j]].mat > m) {
        _opaqueOrder[j + 1] = _opaqueOrder[j];
        j--;
      }
      _opaqueOrder[j + 1] = v;
    }
  }

  void flush(double dt, RuptureState? rupture) {
    _rupture = rupture ?? RuptureState();
    var opaqueUsed = 0;
    if (enableDrawSorting && _pendingOpaqueCount > 0) {
      for (var i = 0; i < _pendingOpaqueCount; i++) {
        _opaqueOrder[i] = i;
      }
      _sortOpaqueQuads(_pendingOpaqueCount);
      for (var k = 0; k < _pendingOpaqueCount; k++) {
        final q = _pendingOpaqueQuads[_opaqueOrder[k]];
        opaqueUsed = _packQuad(
          _opaqueFloats,
          opaqueUsed,
          q.p0,
          q.p1,
          q.p2,
          q.p3,
          q.rgb,
          false,
          1,
          q.ao,
          q.u,
          q.v,
          q.mat,
        );
      }
    } else {
      for (var i = 0; i < _pendingOpaqueCount; i++) {
        final q = _pendingOpaqueQuads[i];
        opaqueUsed = _packQuad(
          _opaqueFloats,
          opaqueUsed,
          q.p0,
          q.p1,
          q.p2,
          q.p3,
          q.rgb,
          false,
          1,
          q.ao,
          q.u,
          q.v,
          q.mat,
        );
      }
    }
    _pendingOpaqueCount = 0;

    for (var i = 0; i < _pendingCount; i++) {
      _order[i] = i;
    }
    _sortPending(_pendingCount);

    var used = 0;
    for (var k = 0; k < _pendingCount; k++) {
      final p = _pending[_order[k]];
      if (p.isQuad) {
        used = _packQuad(
          _blendedFloats,
          used,
          p.p0,
          p.p1,
          p.p2,
          p.p3,
          p.rgb,
          p.glow,
          p.alpha,
          p.ao,
          p.u,
          p.v,
          p.mat,
        );
      } else {
        var (r, g, bl) = _unpack(p.rgb);
        r *= p.ao;
        g *= p.ao;
        bl *= p.ao;
        final glowVal = p.glow ? glowScale - 1 : 0.0;
        final (a, b, c, d) = _billboardCorners(p.p0, p.size);
        final n = _fwd * -1.0;
        used = _putQuad(
          _blendedFloats,
          used,
          a,
          b,
          c,
          d,
          n,
          r,
          g,
          bl,
          glowVal,
          p.alpha,
          p.u,
          p.v,
          p.mat,
        );
      }
    }
    _pendingCount = 0;

    _gl.uploadFloats(_opaqueBuf, _opaqueFloats, opaqueUsed);
    _gl.uploadFloats(_blendedBuf, _blendedFloats, used);

    _openWorldPass();
    _ctx.uniform1i(_uInstanced, 0);
    _ctx.bindVertexArray(_opaqueVao);
    _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, opaqueUsed ~/ _stride);
    _drawCallCount++;

    _ctx.depthMask(false);
    _ctx.enable(WebGL2RenderingContext.BLEND);
    _ctx.blendFunc(
      WebGL2RenderingContext.SRC_ALPHA,
      WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
    );
    _ctx.bindVertexArray(_blendedVao);
    _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, used ~/ _stride);
    _drawCallCount++;

    if (_shaftUsed > 0) {
      _gl.uploadFloats(_shaftBuf, _shaftFloats, _shaftUsed);
      _ctx.blendFunc(WebGL2RenderingContext.ONE, WebGL2RenderingContext.ONE);
      _ctx.bindVertexArray(_shaftVao);
      _ctx.drawArrays(
        WebGL2RenderingContext.TRIANGLES,
        0,
        _shaftUsed ~/ _stride,
      );
      _drawCallCount++;
    }

    if (ps1Enabled && _ps1Target != null) {
      final v = _vhsTarget;
      if (vhsEnabled && v != null) {
        _renderVHS(_ps1Target!, v, _rupture);
        final dst = _target;
        if (dst != null) _gl.resolve(v, dst);
        _passes.swapVHSHistory(v);
      } else {
        final dst = _target;
        if (dst != null) _gl.resolve(_ps1Target!, dst);
      }
    }

    final t = _target;
    if (t == null) return;
    final m = _ms;
    if (m != null && !ps1Enabled) _gl.resolve(m, t);

    _ctx.disable(WebGL2RenderingContext.DEPTH_TEST);
    _ctx.disable(WebGL2RenderingContext.BLEND);
    _ctx.bindVertexArray(_postVao);

    final a = _bloomA, b = _bloomB, g = t.glow;
    if (a != null && b != null && g != null) {
      _ctx.useProgram(_blur);
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE0);
      _ctx.uniform1i(_bTex, 0);
      _gl.bindTarget(b);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, g);
      _ctx.uniform2f(_bDir, 1 / b.w, 0);
      _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, 3);
      _gl.bindTarget(a);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, b.color);
      _ctx.uniform2f(_bDir, 0, 1 / b.h);
      _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, 3);
    }

    final d = _dofTarget;
    if (_dofStrength > 0 && d != null) {
      _gl.bindTarget(d);
      _ctx.useProgram(_dof);
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE0);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, t.color);
      _ctx.uniform1i(_uDofTex, 0);
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE7);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, t.depthTex);
      _ctx.uniform1i(_uDofDepth, 7);
      _ctx.uniform1f(
        _uFocusDistance,
        (_focusDistance - glDepthNear) / (glDepthFar - glDepthNear),
      );
      _ctx.uniform1f(_uDofBlurScale, _dofBlurScale);
      _ctx.uniform1f(_uDofBlurRadius, _dofBlurRadius);
      _ctx.uniform1f(_uDofStrength, _dofStrength);
      _ctx.uniform2f(_uDofTexel, 1.0 / _width, 1.0 / _height);
      _ctx.bindVertexArray(_postVao);
      _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, 3);
    }

    final ssaoTex = _passes.renderSSAO(t, ssaoRadius);

    _gl.bindTarget(null);
    _ctx.useProgram(_post);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE1);
    _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, a?.color);
    _ctx.uniform1i(_uBloom, 1);
    _ctx.uniform1f(_uBloomStrength, a == null ? 0 : bloomStrength);
    _ctx.uniform1f(_uBlur, _reduced ? 0 : speed01 * blurStrength);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE7);
    _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, t.depthTex);
    _ctx.uniform1i(_uDepth, 7);
    _ctx.uniform1f(_uDepthViz, depthViz);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE11);
    _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, ssaoTex);
    _ctx.uniform1i(_uSSAO, 11);
    _ctx.uniform1f(_uSSAOStrength, ssaoStrength);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE0);
    _ctx.bindTexture(
      WebGL2RenderingContext.TEXTURE_2D,
      d != null && _dofStrength > 0 ? d.color : t.color,
    );
    _ctx.uniform1i(_uTex, 0);
    _time += dt;
    _frame++;
    _ctx.uniform1f(_uTime, _time);
    _ctx.uniform2f(
      _uNoiseOff,
      (_frame * noiseStepX % noiseTile).toDouble(),
      (_frame * noiseStepY % noiseTile).toDouble(),
    );
    _ctx.uniform1f(_uFlash, flash);
    _ctx.uniform1f(_uVignette, postVignette);
    _ctx.uniform1f(_uGrain, postGrain);
    _ctx.uniform1f(_uDesat, postDesat);

    double effectiveLutMix = lutMix;
    if (_rupture.step == RuptureStep.gradeLUT) {
      final progress = _rupture.stepElapsed / ruptureLUTDuration;
      effectiveLutMix = lutMix * (1.0 - progress);
    } else if (_rupture.step.index > RuptureStep.gradeLUT.index) {
      effectiveLutMix = 0.0;
    }
    _ctx.uniform1f(_uLutMix, effectiveLutMix);
    _ctx.disable(WebGL2RenderingContext.DEPTH_TEST);
    _ctx.disable(WebGL2RenderingContext.BLEND);
    _ctx.bindVertexArray(_postVao);
    _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, 3);
  }

  void _renderVHS(Target src, Target dst, RuptureState rupture) {
    _gl.bindTarget(dst);
    _ctx.useProgram(_vhs);
    _ctx.disable(WebGL2RenderingContext.DEPTH_TEST);
    _ctx.disable(WebGL2RenderingContext.BLEND);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE0);
    _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, src.color);
    _ctx.uniform1i(_uVHSTex, 0);
    _ctx.activeTexture(WebGL2RenderingContext.TEXTURE0 + texUnitNoise);
    _ctx.uniform1i(_uVHSNoise, texUnitNoise);
    _ctx.uniform1f(_uVHSTime, _time);
    _ctx.uniform2f(_uVHSTexelSize, 1.0 / 384.0, 1.0 / 216.0);
    _ctx.uniform2f(
      _uVHSNoiseOff,
      (_frame * noiseStepX % noiseTile).toDouble(),
      (_frame * noiseStepY % noiseTile).toDouble(),
    );

    double tapeProgress = rupture.step == RuptureStep.tapeGiveup
        ? (rupture.stepElapsed / ruptureTapeDuration).clamp(0.0, 1.0)
        : rupture.step.index > RuptureStep.tapeGiveup.index
        ? 1.0
        : 0.0;

    if (_reduced) tapeProgress *= 0.5;

    _ctx.uniform1i(
      _uVHSChromaLuma,
      vhsChromaLumaSeparation || tapeProgress > 0.0 ? 1 : 0,
    );
    _ctx.uniform1i(_uVHSChromaLag, vhsChromaLag || tapeProgress > 0.0 ? 1 : 0);
    _ctx.uniform1i(_uVHSTapeNoise, vhsTapeNoise || tapeProgress > 0.0 ? 1 : 0);
    _ctx.uniform1i(
      _uVHSHeadSwitch,
      vhsHeadSwitchBand || tapeProgress > 0.5 ? 1 : 0,
    );
    _ctx.uniform1i(
      _uVHSTracking,
      vhsTrackingJitter || tapeProgress > 0.3 ? 1 : 0,
    );
    _ctx.uniform1i(_uVHSDropouts, vhsDropouts || tapeProgress > 0.6 ? 1 : 0);
    _ctx.uniform1i(_uVHSGhosting, vhsGhosting || tapeProgress > 0.4 ? 1 : 0);

    final chromaMax = _reduced
        ? ruptureTapeChromaMax * 0.5
        : ruptureTapeChromaMax;
    final jitterMax = _reduced
        ? ruptureTapeJitterMax * 0.5
        : ruptureTapeJitterMax;
    final chromaBlurI = vhsChromaBlurI * (1.0 + tapeProgress * chromaMax);
    final chromaBlurQ = vhsChromaBlurI * (1.0 + tapeProgress * chromaMax);
    final jitterAmount = vhsJitterAmount * (1.0 + tapeProgress * jitterMax);

    _ctx.uniform1f(_uVHSChromaBlurI, chromaBlurI);
    _ctx.uniform1f(_uVHSChromaBlurQ, chromaBlurQ);
    _ctx.uniform1f(_uVHSChromaLagAmount, vhsChromaLagAmount);
    _ctx.uniform1f(_uVHSNoiseScale, vhsNoiseScale);
    _ctx.uniform1f(_uVHSHeadSwitchHeight, vhsHeadSwitchHeight);
    _ctx.uniform1f(_uVHSHeadSwitchJitter, vhsHeadSwitchJitter);
    _ctx.uniform1f(_uVHSJitterAmount, jitterAmount);
    _ctx.uniform1f(_uVHSJitterFreq, vhsJitterFreq);
    _ctx.uniform1f(_uVHSDropoutRate, vhsDropoutRate);
    _ctx.uniform1f(_uVHSGhostAmount, vhsGhostAmount);
    _ctx.uniform1f(_uVHSGhostOffset, vhsGhostOffset);
    final ghostTarget = _passes.getVHSHistory();
    if (ghostTarget != null && (vhsGhosting || tapeProgress > 0.4)) {
      _ctx.activeTexture(WebGL2RenderingContext.TEXTURE3);
      _ctx.bindTexture(WebGL2RenderingContext.TEXTURE_2D, ghostTarget.color);
      _ctx.uniform1i(_uVHSGhostTarget, 3);
      _ctx.uniform1i(_uVHSHasGhost, 1);
    } else {
      _ctx.uniform1i(_uVHSHasGhost, 0);
    }
    _ctx.bindVertexArray(_postVao);
    _ctx.drawArrays(WebGL2RenderingContext.TRIANGLES, 0, 3);
  }
}

int _packQuad(
  Float32List out,
  int at,
  Vec3 a,
  Vec3 b,
  Vec3 c,
  Vec3 d,
  int rgb,
  bool glow,
  double alpha,
  double ao,
  double u,
  double v,
  double effect, [
  double uScale = 1,
  double vScale = 1,
]) {
  final n = (b - a).cross(d - a).normalized;
  var (r, g, bl) = _unpack(rgb);
  r *= ao;
  g *= ao;
  bl *= ao;
  return _putQuad(
    out,
    at,
    a,
    b,
    c,
    d,
    n,
    r,
    g,
    bl,
    glow ? glowScale - 1 : 0.0,
    alpha,
    u,
    v,
    effect,
    uScale,
    vScale,
  );
}

int _putVert(
  Float32List buf,
  int c,
  Vec3 p,
  Vec3 n,
  double r,
  double g,
  double b,
  double glow,
  double a,
  double u,
  double v,
  double m,
) {
  buf[c] = p.x;
  buf[c + 1] = p.y;
  buf[c + 2] = p.z;
  buf[c + 3] = n.x;
  buf[c + 4] = n.y;
  buf[c + 5] = n.z;
  buf[c + 6] = r;
  buf[c + 7] = g;
  buf[c + 8] = b;
  buf[c + 9] = glow;
  buf[c + 10] = a;
  buf[c + 11] = u;
  buf[c + 12] = v;
  buf[c + 13] = m;
  return c + _stride;
}

int _putQuad(
  Float32List buf,
  int c,
  Vec3 a,
  Vec3 b,
  Vec3 cc,
  Vec3 d,
  Vec3 n,
  double r,
  double g,
  double bl,
  double glow,
  double alpha,
  double u,
  double v,
  double effect, [
  double uScale = 1,
  double vScale = 1,
]) {
  c = _putVert(buf, c, a, n, r, g, bl, glow, alpha, u, v, effect);
  c = _putVert(buf, c, b, n, r, g, bl, glow, alpha, u + uScale, v, effect);
  c = _putVert(
    buf,
    c,
    cc,
    n,
    r,
    g,
    bl,
    glow,
    alpha,
    u + uScale,
    v + vScale,
    effect,
  );
  c = _putVert(buf, c, a, n, r, g, bl, glow, alpha, u, v, effect);
  c = _putVert(
    buf,
    c,
    cc,
    n,
    r,
    g,
    bl,
    glow,
    alpha,
    u + uScale,
    v + vScale,
    effect,
  );
  c = _putVert(buf, c, d, n, r, g, bl, glow, alpha, u, v + vScale, effect);
  return c;
}

(double, double, double) _unpack(int rgb) => (
  ((rgb >> 16) & 0xFF) / 255.0,
  ((rgb >> 8) & 0xFF) / 255.0,
  (rgb & 0xFF) / 255.0,
);

(int, int, int) _hsvToRgb(double h, double s, double v) {
  final hh = (h - h.floorToDouble()) * 6;
  final i = hh.floor();
  final f = hh - i;
  final p = v * (1 - s);
  final q = v * (1 - f * s);
  final t = v * (1 - (1 - f) * s);
  late double r, g, b;
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
    case 1:
      r = q;
      g = v;
      b = p;
    case 2:
      r = p;
      g = v;
      b = t;
    case 3:
      r = p;
      g = q;
      b = v;
    case 4:
      r = t;
      g = p;
      b = v;
    default:
      r = v;
      g = p;
      b = q;
  }
  return ((r * 255).round(), (g * 255).round(), (b * 255).round());
}
