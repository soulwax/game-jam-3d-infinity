#version 300 es
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
}
