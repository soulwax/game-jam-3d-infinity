import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart' hide Float32List;

typedef _G = WebGL2RenderingContext;

class Target {
  final WebGLFramebuffer fbo;
  final WebGLTexture? color, glow;
  WebGLTexture? depthTex;
  final WebGLRenderbuffer? colorRb, glowRb, depth;
  final int samples;
  int w, h;
  Target(this.fbo, this.color, this.glow, this.colorRb, this.glowRb, this.depth, this.depthTex, this.samples, this.w, this.h);
}

const int _texMaxAniso = 0x84FE;
const int _maxTexMaxAniso = 0x84FF;

class Gl {
  final WebGL2RenderingContext gl;
  final Map<WebGLBuffer, int> _cap = {};
  double anisoMax = 0;
  bool _anisoTried = false;

  Gl(this.gl);

  void _ensureAniso() {
    if (_anisoTried) return;
    _anisoTried = true;
    final e = gl.getExtension('EXT_texture_filter_anisotropic') ??
        gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ??
        gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
    if (e == null) return;
    final v = gl.getParameter(_maxTexMaxAniso).dartify();
    if (v is num) anisoMax = v.toDouble();
  }

  Future<WebGLTexture?> loadTexture(String url, int unit,
      {bool mip = false, bool linear = true, bool repeat = false, bool aniso = false}) async {
    try {
      final img = HTMLImageElement();
      img.src = url;
      await img.decode().toDart;
      final t = gl.createTexture()!;
      gl.activeTexture(_G.TEXTURE0 + unit);
      gl.bindTexture(_G.TEXTURE_2D, t);
      gl.pixelStorei(_G.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(_G.TEXTURE_2D, 0, _G.RGBA8, _G.RGBA.toJS, _G.UNSIGNED_BYTE.toJS, img);
      final wrap = repeat ? _G.REPEAT : _G.CLAMP_TO_EDGE;
      gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_S, wrap);
      gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_T, wrap);
      gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MAG_FILTER, linear ? _G.LINEAR : _G.NEAREST);
      if (mip) gl.generateMipmap(_G.TEXTURE_2D);
      gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MIN_FILTER,
          mip ? _G.LINEAR_MIPMAP_LINEAR : (linear ? _G.LINEAR : _G.NEAREST));
      if (aniso) {
        _ensureAniso();
        if (anisoMax > 1) gl.texParameterf(_G.TEXTURE_2D, _texMaxAniso, anisoMax);
      }
      return t;
    } catch (_) {
      return null;
    }
  }

  Future<WebGLTexture?> loadTextureArray(List<String> urls, int unit,
      {bool mip = false, bool linear = true}) async {
    WebGLTexture? texture; var complete = false;
    try {
      final images = <HTMLImageElement>[];
      for (final url in urls) {
        final img = HTMLImageElement();
        img.src = url;
        await img.decode().toDart;
        images.add(img);
      }

      if (images.isEmpty) {
        throw StateError('texture array needs at least one layer');
      }
      final w = images[0].width, h = images[0].height;
      if (w == 0 || h == 0 || images.any((img) => img.width != w || img.height != h)) {
        throw StateError('texture-array layers must have matching nonzero dimensions');
      }
      final depth = images.length; var levels = 1;
      if (mip) {
        for (var size = w > h ? w : h; size > 1; size = (size + 1) ~/ 2) {
          levels++;
        }
      }

      texture = gl.createTexture();
      if (texture == null) {
        throw StateError('could not create texture array');
      }
      gl.activeTexture(_G.TEXTURE0 + unit);
      gl.bindTexture(_G.TEXTURE_2D_ARRAY, texture);
      gl.pixelStorei(_G.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texStorage3D(_G.TEXTURE_2D_ARRAY, levels, _G.RGBA8, w, h, depth);
      var error = gl.getError();
      if (error != _G.NO_ERROR) {
        throw StateError('texture-array storage failed (WebGL error 0x${error.toRadixString(16)})');
      }

      for (int i = 0; i < images.length; i++) {
        gl.texSubImage3D(_G.TEXTURE_2D_ARRAY, 0, 0, 0, i, w, h, 1,
                        _G.RGBA, _G.UNSIGNED_BYTE, images[i]);
        error = gl.getError();
        if (error != _G.NO_ERROR) {
          throw StateError('texture-array layer $i failed (WebGL error 0x${error.toRadixString(16)})');
        }
      }

      gl.texParameteri(_G.TEXTURE_2D_ARRAY, _G.TEXTURE_WRAP_S, _G.CLAMP_TO_EDGE);
      gl.texParameteri(_G.TEXTURE_2D_ARRAY, _G.TEXTURE_WRAP_T, _G.CLAMP_TO_EDGE);
      gl.texParameteri(_G.TEXTURE_2D_ARRAY, _G.TEXTURE_MAG_FILTER,
                       linear ? _G.LINEAR : _G.NEAREST);
      if (mip) {
        gl.generateMipmap(_G.TEXTURE_2D_ARRAY);
        error = gl.getError();
        if (error != _G.NO_ERROR) {
          throw StateError('texture-array mip generation failed (WebGL error 0x${error.toRadixString(16)})');
        }
        gl.texParameteri(_G.TEXTURE_2D_ARRAY, _G.TEXTURE_MIN_FILTER,
                        _G.LINEAR_MIPMAP_LINEAR);
      } else {
        gl.texParameteri(_G.TEXTURE_2D_ARRAY, _G.TEXTURE_MIN_FILTER,
                        linear ? _G.LINEAR : _G.NEAREST);
      }

      complete = true;
      return texture;
    } catch (error) {
      console.error('texture array load failed: $error'.toJS);
      return null;
    } finally {
      if (!complete && texture != null) {
        gl.bindTexture(_G.TEXTURE_2D_ARRAY, null);
        gl.deleteTexture(texture);
      }
    }
  }

  WebGLShader _stage(int type, String src) {
    final s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (gl.getShaderParameter(s, _G.COMPILE_STATUS).dartify() != true) {
      throw Exception('shader compile failed: ${gl.getShaderInfoLog(s)}\n$src');
    }
    return s;
  }

  WebGLProgram compileProgram(String vertSrc, String fragSrc) {
    final v = _stage(_G.VERTEX_SHADER, vertSrc);
    final f = _stage(_G.FRAGMENT_SHADER, fragSrc);
    final p = gl.createProgram()!;
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    if (gl.getProgramParameter(p, _G.LINK_STATUS).dartify() != true) {
      throw Exception('program link failed: ${gl.getProgramInfoLog(p)}');
    }
    return p;
  }

  int get maxSamples {
    final v = gl.getParameter(_G.MAX_SAMPLES).dartify();
    return v is num ? v.toInt() : 0;
  }

  WebGLBuffer makeBuffer() => gl.createBuffer()!;

  void uploadFloats(WebGLBuffer buffer, Float32List data, int usedFloats) {
    gl.bindBuffer(_G.ARRAY_BUFFER, buffer);
    final bytes = data.length * 4;
    if ((_cap[buffer] ?? 0) < bytes) {
      gl.bufferData(_G.ARRAY_BUFFER, data.toJS, _G.DYNAMIC_DRAW);
      _cap[buffer] = bytes;
    } else if (usedFloats > 0) {
      gl.bufferSubData(_G.ARRAY_BUFFER, 0, Float32List.sublistView(data, 0, usedFloats).toJS);
    }
  }

  void _texStorage(WebGLTexture tex, int w, int h) {
    gl.bindTexture(_G.TEXTURE_2D, tex);
    gl.texImage2D(_G.TEXTURE_2D, 0, _G.RGBA8, w.toJS, h.toJS, 0.toJS, _G.RGBA, _G.UNSIGNED_BYTE, Uint8List(w * h * 4).toJS);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MIN_FILTER, _G.LINEAR);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MAG_FILTER, _G.LINEAR);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_S, _G.CLAMP_TO_EDGE);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_T, _G.CLAMP_TO_EDGE);
  }

  WebGLRenderbuffer _rb(int w, int h, int samples, int fmt, int attach) {
    final r = gl.createRenderbuffer()!;
    gl.bindRenderbuffer(_G.RENDERBUFFER, r);
    if (samples > 0) {
      gl.renderbufferStorageMultisample(_G.RENDERBUFFER, samples, fmt, w, h);
    } else {
      gl.renderbufferStorage(_G.RENDERBUFFER, fmt, w, h);
    }
    gl.framebufferRenderbuffer(_G.FRAMEBUFFER, attach, _G.RENDERBUFFER, r);
    return r;
  }

  WebGLTexture _tex(int w, int h, int attach) {
    final t = gl.createTexture()!;
    _texStorage(t, w, h);
    gl.framebufferTexture2D(_G.FRAMEBUFFER, attach, _G.TEXTURE_2D, t, 0);
    return t;
  }

  WebGLTexture _depthTex(int w, int h) {
    final t = gl.createTexture()!;
    gl.bindTexture(_G.TEXTURE_2D, t);
    
    gl.texStorage2D(_G.TEXTURE_2D, 1, _G.DEPTH_COMPONENT24, w, h);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MIN_FILTER, _G.NEAREST);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_MAG_FILTER, _G.NEAREST);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_S, _G.CLAMP_TO_EDGE);
    gl.texParameteri(_G.TEXTURE_2D, _G.TEXTURE_WRAP_T, _G.CLAMP_TO_EDGE);
    gl.framebufferTexture2D(_G.FRAMEBUFFER, _G.DEPTH_ATTACHMENT, _G.TEXTURE_2D, t, 0);
    return t;
  }

  Target makeTarget(int w, int h, {int samples = 0, bool depth = true, bool mrt = false}) {
    final fbo = gl.createFramebuffer()!;
    gl.bindFramebuffer(_G.FRAMEBUFFER, fbo);
    WebGLTexture? c0, c1, dt;
    WebGLRenderbuffer? r0, r1, db;
    if (samples > 0) {
      r0 = _rb(w, h, samples, _G.RGBA8, _G.COLOR_ATTACHMENT0);
      if (mrt) r1 = _rb(w, h, samples, _G.RGBA8, _G.COLOR_ATTACHMENT1);
    } else {
      c0 = _tex(w, h, _G.COLOR_ATTACHMENT0);
      if (mrt) c1 = _tex(w, h, _G.COLOR_ATTACHMENT1);
    }
    if (depth) {
      if (samples > 0) {
        
        db = _rb(w, h, samples, _G.DEPTH_COMPONENT24, _G.DEPTH_ATTACHMENT);
      } else {
        
        dt = _depthTex(w, h);
      }
    }
    if (mrt) gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS, _G.COLOR_ATTACHMENT1.toJS].toJS);
    final ok = gl.checkFramebufferStatus(_G.FRAMEBUFFER) == _G.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(_G.FRAMEBUFFER, null);
    if (!ok) throw Exception('framebuffer incomplete');
    return Target(fbo, c0, c1, r0, r1, db, dt, samples, w, h);
  }

  void _restore(Target t, WebGLRenderbuffer? r, int fmt, int w, int h) {
    if (r == null) {
      return;
    }
    gl.bindRenderbuffer(_G.RENDERBUFFER, r);
    if (t.samples > 0) {
      gl.renderbufferStorageMultisample(_G.RENDERBUFFER, t.samples, fmt, w, h);
    } else {
      gl.renderbufferStorage(_G.RENDERBUFFER, fmt, w, h);
    }
  }

  void resizeTarget(Target t, int w, int h) {
    if (t.w == w && t.h == h) return;
    t.w = w;
    t.h = h;
    gl.bindFramebuffer(_G.FRAMEBUFFER, t.fbo);
    final c0 = t.color, c1 = t.glow;
    if (c0 != null) _texStorage(c0, w, h);
    if (c1 != null) _texStorage(c1, w, h);
    _restore(t, t.colorRb, _G.RGBA8, w, h);
    _restore(t, t.glowRb, _G.RGBA8, w, h);
    _restore(t, t.depth, _G.DEPTH_COMPONENT24, w, h);
    final dt = t.depthTex;
    if (dt != null) {
      gl.deleteTexture(dt);
      t.depthTex = _depthTex(w, h);
    }
    gl.bindFramebuffer(_G.FRAMEBUFFER, null);
  }

  void resolve(Target src, Target dst) {
    gl.bindFramebuffer(_G.READ_FRAMEBUFFER, src.fbo);
    gl.bindFramebuffer(_G.DRAW_FRAMEBUFFER, dst.fbo);
    gl.readBuffer(_G.COLOR_ATTACHMENT0);
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS, _G.NONE.toJS].toJS);
    gl.blitFramebuffer(0, 0, src.w, src.h, 0, 0, dst.w, dst.h, _G.COLOR_BUFFER_BIT, _G.NEAREST);
    if (src.glowRb != null && dst.glow != null) {
      gl.readBuffer(_G.COLOR_ATTACHMENT1);
      gl.drawBuffers([_G.NONE.toJS, _G.COLOR_ATTACHMENT1.toJS].toJS);
      gl.blitFramebuffer(0, 0, src.w, src.h, 0, 0, dst.w, dst.h, _G.COLOR_BUFFER_BIT, _G.NEAREST);
    }
    // MSAA targets render into a depth renderbuffer; the resolved target owns
    // the sampleable depth texture. Both depth attachments use NEAREST here.
    if ((src.depth != null || src.depthTex != null) && dst.depthTex != null) {
      gl.blitFramebuffer(0, 0, src.w, src.h, 0, 0, dst.w, dst.h, _G.DEPTH_BUFFER_BIT, _G.NEAREST);
    }
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS, _G.COLOR_ATTACHMENT1.toJS].toJS);
    gl.bindFramebuffer(_G.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(_G.FRAMEBUFFER, null);
  }

  void copyTarget(Target src, Target dst) {
    gl.bindFramebuffer(_G.READ_FRAMEBUFFER, src.fbo);
    gl.bindFramebuffer(_G.DRAW_FRAMEBUFFER, dst.fbo);
    gl.readBuffer(_G.COLOR_ATTACHMENT0);
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS].toJS);
    gl.blitFramebuffer(0, 0, src.w, src.h, 0, 0, dst.w, dst.h, _G.COLOR_BUFFER_BIT, _G.NEAREST);
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS].toJS);
    gl.bindFramebuffer(_G.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(_G.FRAMEBUFFER, null);
  }

  void deleteTarget(Target? t) {
    if (t == null) return;
    gl.deleteFramebuffer(t.fbo);
    if (t.color != null) gl.deleteTexture(t.color);
    if (t.glow != null) gl.deleteTexture(t.glow);
    if (t.depthTex != null) gl.deleteTexture(t.depthTex);
    if (t.colorRb != null) gl.deleteRenderbuffer(t.colorRb);
    if (t.glowRb != null) gl.deleteRenderbuffer(t.glowRb);
    if (t.depth != null) gl.deleteRenderbuffer(t.depth);
  }

  void clearScene(Target? t, double r, double g, double b) {
    final bits = _G.COLOR_BUFFER_BIT | _G.DEPTH_BUFFER_BIT;
    if (t == null || (t.glow == null && t.glowRb == null)) {
      gl.clearColor(r, g, b, 1);
      gl.clear(bits);
      return;
    }
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS, _G.NONE.toJS].toJS);
    gl.clearColor(r, g, b, 1);
    gl.clear(bits);
    gl.drawBuffers([_G.NONE.toJS, _G.COLOR_ATTACHMENT1.toJS].toJS);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(_G.COLOR_BUFFER_BIT);
    gl.drawBuffers([_G.COLOR_ATTACHMENT0.toJS, _G.COLOR_ATTACHMENT1.toJS].toJS);
  }

  void bindTarget(Target? t) {
    gl.bindFramebuffer(_G.FRAMEBUFFER, t?.fbo);
    gl.viewport(0, 0, t?.w ?? gl.drawingBufferWidth, t?.h ?? gl.drawingBufferHeight);
  }
}
