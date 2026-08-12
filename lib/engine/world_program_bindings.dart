part of 'renderer_core.dart';

/// World-program locations and vertex-layout setup.
///
/// This stays in the renderer library so the existing private renderer API is
/// preserved while program location ownership is separated from frame control.
class WorldProgramBindings {
  final WebGL2RenderingContext _worldCtx;
  late WebGLProgram Function() _worldProgram;

  late int _aPos, _aColor, _aAlpha, _aNormal, _aUv;
  late int _aModelRow0, _aModelRow1, _aModelRow2, _aModelRow3, _aMaterialTint;
  late WebGLUniformLocation? _uEye,
      _uFwd,
      _uUp,
      _uRight,
      _uScale,
      _uAspect,
      _uDepthNear,
      _uDepthFar;
  late WebGLUniformLocation? _uAffineTexture;
  late WebGLUniformLocation? _uModel, _uInstanced;
  late WebGLUniformLocation? _uFog,
      _uLight,
      _uLightColor,
      _uFogStart,
      _uFogEnd,
      _uAmbient,
      _uDiffuse;
  late WebGLUniformLocation? _uPointLightCount;
  final List<WebGLUniformLocation?> _uPointLightPos = [];
  final List<WebGLUniformLocation?> _uPointLightColor = [];
  final List<WebGLUniformLocation?> _uPointLightRadius = [];
  final List<WebGLUniformLocation?> _uPointLightIntensity = [];
  late WebGLUniformLocation? _uFlicker, _uBloomThreshold, _uColorQuantize;
  late WebGLUniformLocation? _uFogDensity, _uFogHeightFalloff, _uFogGroundHeight;
  late WebGLUniformLocation? _uRainIntensity, _uSurfaceWetness, _uWindowWetness;
  late WebGLUniformLocation? _uWall,
      _uWallOn,
      _uWallMid,
      _uWallAmt,
      _uWallScale;
  late WebGLUniformLocation? _uGlass, _uGlassOn, _uGlassGain, _uGlassFog;
  late WebGLUniformLocation? _uSoft, _uSoftOn, _uInternal;
  late WebGLUniformLocation? _uLightProj0, _uLightProj1, _uLightProj2;
  late WebGLUniformLocation? _uShadow0, _uShadow1, _uShadow2;
  late WebGLUniformLocation? _uShadowCasters, _uShadowBias;
  late WebGLUniformLocation? _uMaterialAlbedo, _uStaticMaterial;
  late WebGLUniformLocation? _uMaterialCount;
  final List<WebGLUniformLocation?> _uMaterialEmissive = [];
  final List<WebGLUniformLocation?> _uMaterialUvScale = [];
  final List<WebGLUniformLocation?> _uMaterialLayer = [];
  final List<WebGLUniformLocation?> _uMaterialFlags = [];

  WorldProgramBindings(this._worldCtx);

  void _attachWorldProgram(WebGLProgram Function() program) {
    _worldProgram = program;
  }

  void _resolveWorldLocations() {
    final program = _worldProgram();
    _aPos = _worldCtx.getAttribLocation(program, 'aPos');
    _aColor = _worldCtx.getAttribLocation(program, 'aColor');
    _aAlpha = _worldCtx.getAttribLocation(program, 'aAlpha');
    _aNormal = _worldCtx.getAttribLocation(program, 'aNormal');
    _aUv = _worldCtx.getAttribLocation(program, 'aUv');
    _aModelRow0 = _worldCtx.getAttribLocation(program, 'aModelRow0');
    _aModelRow1 = _worldCtx.getAttribLocation(program, 'aModelRow1');
    _aModelRow2 = _worldCtx.getAttribLocation(program, 'aModelRow2');
    _aModelRow3 = _worldCtx.getAttribLocation(program, 'aModelRow3');
    _aMaterialTint = _worldCtx.getAttribLocation(program, 'aMaterialTint');
    _uEye = _worldCtx.getUniformLocation(program, 'uEye');
    _uFwd = _worldCtx.getUniformLocation(program, 'uFwd');
    _uUp = _worldCtx.getUniformLocation(program, 'uUp');
    _uRight = _worldCtx.getUniformLocation(program, 'uRight');
    _uScale = _worldCtx.getUniformLocation(program, 'uScale');
    _uAspect = _worldCtx.getUniformLocation(program, 'uAspect');
    _uDepthNear = _worldCtx.getUniformLocation(program, 'uDepthNear');
    _uDepthFar = _worldCtx.getUniformLocation(program, 'uDepthFar');
    _uAffineTexture = _worldCtx.getUniformLocation(program, 'uAffineTexture');
    _uModel = _worldCtx.getUniformLocation(program, 'uModel');
    _uInstanced = _worldCtx.getUniformLocation(program, 'uInstanced');
    _uFog = _worldCtx.getUniformLocation(program, 'uFog');
    _uLight = _worldCtx.getUniformLocation(program, 'uLight');
    _uLightColor = _worldCtx.getUniformLocation(program, 'uLightColor');
    _uFogStart = _worldCtx.getUniformLocation(program, 'uFogStart');
    _uFogEnd = _worldCtx.getUniformLocation(program, 'uFogEnd');
    _uAmbient = _worldCtx.getUniformLocation(program, 'uAmbient');
    _uDiffuse = _worldCtx.getUniformLocation(program, 'uDiffuse');
    _uPointLightCount = _worldCtx.getUniformLocation(
      program,
      'uPointLightCount',
    );
    _uPointLightPos.clear();
    _uPointLightColor.clear();
    _uPointLightRadius.clear();
    _uPointLightIntensity.clear();
    for (int i = 0; i < maxMantlePointLights; i++) {
      _uPointLightPos.add(
        _worldCtx.getUniformLocation(program, 'uPointLightPos[$i]'),
      );
      _uPointLightColor.add(
        _worldCtx.getUniformLocation(program, 'uPointLightColor[$i]'),
      );
      _uPointLightRadius.add(
        _worldCtx.getUniformLocation(program, 'uPointLightRadius[$i]'),
      );
      _uPointLightIntensity.add(
        _worldCtx.getUniformLocation(program, 'uPointLightIntensity[$i]'),
      );
    }
    _uFlicker = _worldCtx.getUniformLocation(program, 'uFlicker');
    _uBloomThreshold = _worldCtx.getUniformLocation(program, 'uBloomThreshold');
    _uColorQuantize = _worldCtx.getUniformLocation(program, 'uColorQuantize');
    _uFogDensity = _worldCtx.getUniformLocation(program, 'uFogDensity');
    _uFogHeightFalloff = _worldCtx.getUniformLocation(program, 'uFogHeightFalloff');
    _uFogGroundHeight = _worldCtx.getUniformLocation(program, 'uFogGroundHeight');
    _uRainIntensity = _worldCtx.getUniformLocation(program, 'uRainIntensity');
    _uSurfaceWetness = _worldCtx.getUniformLocation(program, 'uSurfaceWetness');
    _uWindowWetness = _worldCtx.getUniformLocation(program, 'uWindowWetness');
    _uWall = _worldCtx.getUniformLocation(program, 'uWall');
    _uWallOn = _worldCtx.getUniformLocation(program, 'uWallOn');
    _uWallMid = _worldCtx.getUniformLocation(program, 'uWallMid');
    _uWallAmt = _worldCtx.getUniformLocation(program, 'uWallAmt');
    _uWallScale = _worldCtx.getUniformLocation(program, 'uWallScale');
    _uGlass = _worldCtx.getUniformLocation(program, 'uGlass');
    _uGlassOn = _worldCtx.getUniformLocation(program, 'uGlassOn');
    _uGlassGain = _worldCtx.getUniformLocation(program, 'uGlassGain');
    _uGlassFog = _worldCtx.getUniformLocation(program, 'uGlassFog');
    _uSoft = _worldCtx.getUniformLocation(program, 'uSoft');
    _uSoftOn = _worldCtx.getUniformLocation(program, 'uSoftOn');
    _uInternal = _worldCtx.getUniformLocation(program, 'uInternal');
    _uLightProj0 = _worldCtx.getUniformLocation(program, 'uLightProj0');
    _uLightProj1 = _worldCtx.getUniformLocation(program, 'uLightProj1');
    _uLightProj2 = _worldCtx.getUniformLocation(program, 'uLightProj2');
    _uShadow0 = _worldCtx.getUniformLocation(program, 'uShadow0');
    _uShadow1 = _worldCtx.getUniformLocation(program, 'uShadow1');
    _uShadow2 = _worldCtx.getUniformLocation(program, 'uShadow2');
    _uShadowCasters = _worldCtx.getUniformLocation(program, 'uShadowCasters');
    _uMaterialAlbedo = _worldCtx.getUniformLocation(program, 'uMaterialAlbedo');
    _uStaticMaterial = _worldCtx.getUniformLocation(program, 'uStaticMaterial');
    _uShadowBias = _worldCtx.getUniformLocation(program, 'uShadowBias');
    _uMaterialCount = _worldCtx.getUniformLocation(program, 'uMaterialCount');
    _uMaterialEmissive.clear();
    _uMaterialUvScale.clear();
    _uMaterialLayer.clear();
    _uMaterialFlags.clear();
    for (int i = 0; i < 32; i++) {
      _uMaterialEmissive.add(
        _worldCtx.getUniformLocation(program, 'uMaterialEmissive[$i]'),
      );
      _uMaterialUvScale.add(
        _worldCtx.getUniformLocation(program, 'uMaterialUvScale[$i]'),
      );
      _uMaterialLayer.add(
        _worldCtx.getUniformLocation(program, 'uMaterialLayer[$i]'),
      );
      _uMaterialFlags.add(
        _worldCtx.getUniformLocation(program, 'uMaterialFlags[$i]'),
      );
    }
    _worldCtx.useProgram(program);
    _worldCtx.uniform1i(_uMaterialAlbedo, texUnitMaterialAlbedo);
  }

  void _bindLayout(WebGLBuffer buffer) {
    _worldCtx.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, buffer);
    const stride = _stride * 4;
    _bindVertexAttributes(stride);
  }

  void _bindStaticLayout(WebGLBuffer vertexBuffer, WebGLBuffer? indexBuffer) {
    _worldCtx.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, vertexBuffer);
    const stride = _stride * 4;
    _bindVertexAttributes(stride);
    if (indexBuffer != null) {
      _worldCtx.bindBuffer(
        WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER,
        indexBuffer,
      );
    }
  }

  void _bindVertexAttributes(int stride) {
    _vertex(_aPos, 3, stride, 0);
    _vertex(_aNormal, 3, stride, 12);
    _vertex(_aColor, 4, stride, 24);
    _vertex(_aAlpha, 1, stride, 40);
    _vertex(_aUv, 3, stride, 44);
  }

  void _vertex(int attribute, int size, int stride, int offset) {
    _worldCtx.vertexAttribPointer(
      attribute,
      size,
      WebGL2RenderingContext.FLOAT,
      false,
      stride,
      offset,
    );
    _worldCtx.enableVertexAttribArray(attribute);
  }

  void _bindInstanceAttributes(WebGLBuffer instanceBuffer) {
    _worldCtx.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, instanceBuffer);
    const stride = instanceBytesPerInstance;
    _instance(_aModelRow0, stride, 0);
    _instance(_aModelRow1, stride, 16);
    _instance(_aModelRow2, stride, 32);
    _instance(_aModelRow3, stride, 48);
    _instance(_aMaterialTint, stride, 64);
  }

  void _instance(int attribute, int stride, int offset) {
    _worldCtx.vertexAttribPointer(
      attribute,
      4,
      WebGL2RenderingContext.FLOAT,
      false,
      stride,
      offset,
    );
    _worldCtx.enableVertexAttribArray(attribute);
    _worldCtx.vertexAttribDivisor(attribute, 1);
  }
}
