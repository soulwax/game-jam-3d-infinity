import 'dart:js_interop';
import 'dart:math' as math;

import 'package:web/web.dart' hide Float32List;

import 'gl.dart';
import 'math3.dart';
import 'shaders.dart';
import '../config.dart';




class ShadowMap {
  final WebGL2RenderingContext _ctx;
  final Gl _gl;
  late final WebGLProgram _shadowProgram;
  late final WebGLUniformLocation? _uLightProj, _uModel;

  final List<Target> _targets = [];
  final List<bool> _enabled = [];
  final List<Vec3> _lightPos = [];
  final List<Mat4> _lightProj = [];

  int _activeCasters = 0;

  ShadowMap(this._ctx, this._gl) {
    _shadowProgram = _gl.compileProgram(shadowVertSrc, shadowFragSrc);
    _uLightProj = _ctx.getUniformLocation(_shadowProgram, 'uLightProj');
    _uModel = _ctx.getUniformLocation(_shadowProgram, 'uModel');
  }

  
  
  int addCaster(Vec3 pos) {
    final idx = _activeCasters < maxShadowCasters ? _activeCasters++ : 0;
    _ensureCapacity(idx + 1);
    _lightPos[idx] = pos;
    _enabled[idx] = true;
    _updateProjection(idx);
    return idx;
  }

  
  void disableCaster(int idx) {
    if (idx >= 0 && idx < _enabled.length) {
      _enabled[idx] = false;
      _activeCasters = _enabled.where((e) => e).length;
    }
  }

  
  void updateCasterPosition(int idx, Vec3 pos) {
    if (idx >= 0 && idx < _lightPos.length) {
      _lightPos[idx] = pos;
      _updateProjection(idx);
    }
  }

  
  Mat4? getProjection(int idx) => idx >= 0 && idx < _lightProj.length ? _lightProj[idx] : null;

  
  WebGLTexture? getShadowTexture(int idx) {
    if (idx >= 0 && idx < _targets.length) {
      return _targets[idx].depthTex;
    }
    return null;
  }

  
  int get activeCasterCount => _activeCasters;

  
  
  void beginShadowPass(int idx) {
    if (idx < 0 || idx >= _targets.length) return;
    final t = _targets[idx];
    _gl.bindTarget(t);
    _ctx.clearColor(1, 1, 1, 1);
    _ctx.clear(WebGL2RenderingContext.DEPTH_BUFFER_BIT);
  }

  
  void endShadowPass() {
    _gl.bindTarget(null);
  }

  
  void bindShadowProgram() {
    _ctx.useProgram(_shadowProgram);
  }

  
  void configureDepthOnlyState() {
    _ctx.colorMask(false, false, false, false);
    _ctx.enable(WebGL2RenderingContext.CULL_FACE);
    _ctx.cullFace(WebGL2RenderingContext.FRONT);
    _ctx.enable(WebGL2RenderingContext.DEPTH_TEST);
    _ctx.depthMask(true);
  }

  
  void restoreColorState() {
    _ctx.colorMask(true, true, true, true);
    _ctx.cullFace(WebGL2RenderingContext.BACK);
    _ctx.disable(WebGL2RenderingContext.CULL_FACE);
  }

  
  
  void setShadowUniforms(int casterIdx) {
    if (casterIdx >= 0 && casterIdx < _lightProj.length && _uLightProj != null) {
      _ctx.uniformMatrix4fv(_uLightProj, false, _lightProj[casterIdx].m.toJS);
    }
  }

  
  void setModelUniform(Mat4 m) {
    if (_uModel != null) {
      _ctx.uniformMatrix4fv(_uModel, false, m.m.toJS);
    }
  }

  void _ensureCapacity(int count) {
    while (_targets.length < count) {
      try {
        final size = _targets.length >= 2 ? shadowMapSizeSmall : shadowMapSize;
        final t = _gl.makeTarget(size, size, depth: true, mrt: false);
        _targets.add(t);
      } catch (_) {
        break;
      }
      _enabled.add(false);
      _lightPos.add(Vec3(0, 0, 0));
      _lightProj.add(Mat4.identity());
    }
  }

  void _updateProjection(int idx) {
    if (idx >= _lightProj.length) return;
    final pos = _lightPos[idx];

    
    
    const fovRad = shadowFov * math.pi / 180.0;
    const near = shadowNear;
    const far = shadowFar;

    
    final f = 1.0 / math.tan(fovRad / 2.0);
    final range = far - near;

    final proj = Mat4();
    proj.m[0] = f;      
    proj.m[5] = f;      
    proj.m[10] = (far + near) / -range;  
    proj.m[11] = -1;    
    proj.m[14] = (2 * far * near) / -range;  

    
    final up = Vec3(0, 1, 0);
    final target = Vec3(0, 0, 0);
    final fwd = (target - pos).normalized;
    final right = fwd.cross(up).normalized;
    final upAdjusted = right.cross(fwd).normalized;

    final view = Mat4();
    view.m[0] = right.x;
    view.m[1] = upAdjusted.x;
    view.m[2] = -fwd.x;
    view.m[4] = right.y;
    view.m[5] = upAdjusted.y;
    view.m[6] = -fwd.y;
    view.m[8] = right.z;
    view.m[9] = upAdjusted.z;
    view.m[10] = -fwd.z;
    view.m[12] = -right.dot(pos);
    view.m[13] = -upAdjusted.dot(pos);
    view.m[14] = fwd.dot(pos);
    view.m[15] = 1;

    _lightProj[idx] = proj * view;
  }
}
