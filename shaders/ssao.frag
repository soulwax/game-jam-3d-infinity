#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uDepth;
uniform vec2 uDepthSize;
uniform float uRadius;
uniform float uBias;
out vec4 oColor;

vec3 reconstructPos(vec2 uv, float depth) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc, depth);
}

float linearDepth(float z) {
  return z;
}

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
    0.0,
    0.785398,
    1.570796,
    2.356194,
    3.141593,
    3.926991,
    4.712389,
    5.497787
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
}
