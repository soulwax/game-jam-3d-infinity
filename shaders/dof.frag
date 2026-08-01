#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex, uDepth;
uniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;
uniform vec2 uTexel;
out vec4 oColor;

vec4 sampleBlur(vec2 uv, float radius) {
  if (radius < 0.01) return texture(uTex, uv);
  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);
  vec4 c = texture(uTex, uv) * w[0];
  for (int i = 1; i < 5; i++) {
    vec2 o = uTexel * float(i) * radius;
    c += texture(uTex, uv + o) * w[i];
    c += texture(uTex, uv - o) * w[i];
  }
  return c;
}

void main() {
  float depth = texture(uDepth, vUv).r;
  float coc = abs(depth - uFocusDistance) * uDofBlurScale;
  coc = clamp(coc, 0.0, uBlurRadius);
  coc *= uDofStrength;
  oColor = sampleBlur(vUv, coc);
}
