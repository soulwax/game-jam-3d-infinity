import 'package:web/web.dart' hide Float32List;

import 'gl.dart';
import 'shaders.dart';

/// Owns shader-program lifetime. Uniform and attribute bindings deliberately
/// remain with the passes that consume them until their draw state is split.
class RendererPrograms {
  final Gl _gl;

  WebGLProgram world;
  WebGLProgram post;
  WebGLProgram blur;
  final WebGLProgram dof;
  final WebGLProgram vhs;

  RendererPrograms._(
    this._gl, {
    required this.world,
    required this.post,
    required this.blur,
    required this.dof,
    required this.vhs,
  });

  factory RendererPrograms.create(Gl gl) {
    return RendererPrograms._(
      gl,
      world: gl.compileProgram(worldVertSrc, worldFragSrc),
      post: gl.compileProgram(postVertSrc, postFragSrc),
      blur: gl.compileProgram(postVertSrc, blurFragSrc),
      dof: gl.compileProgram(postVertSrc, dofFragSrc),
      vhs: gl.compileProgram(postVertSrc, vhsFragSrc),
    );
  }

  /// Compiles every live-reloadable program before replacing any current one.
  /// This preserves the last known-good frame path if one source is invalid.
  void recompileLive(Map<String, String> shaders) {
    final nextWorld = _compile(
      'world.vert/world.frag',
      shaders['world.vert']!,
      shaders['world.frag']!,
    );
    final nextPost = _compile(
      'post.vert/post.frag',
      shaders['post.vert']!,
      shaders['post.frag']!,
    );
    final nextBlur = _compile(
      'post.vert/blur.frag',
      shaders['post.vert']!,
      shaders['blur.frag']!,
    );
    world = nextWorld;
    post = nextPost;
    blur = nextBlur;
  }

  WebGLProgram _compile(String label, String vertex, String fragment) {
    try {
      return _gl.compileProgram(vertex, fragment);
    } catch (error) {
      throw Exception('$label: $error');
    }
  }
}
