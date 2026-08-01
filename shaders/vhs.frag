#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
uniform sampler2D uNoise;
uniform float uTime;
uniform vec2 uTexelSize;
uniform vec2 uNoiseOff;

uniform bool uChromaLuma;
uniform bool uChromaLag;
uniform bool uTapeNoise;
uniform bool uHeadSwitch;
uniform bool uTracking;
uniform bool uDropouts;
uniform bool uGhosting;

uniform float uChromaBlurI;
uniform float uChromaBlurQ;
uniform float uChromaLagAmount;
uniform float uNoiseScale;
uniform float uHeadSwitchHeight;
uniform float uHeadSwitchJitter;
uniform float uJitterAmount;
uniform float uJitterFreq;
uniform float uDropoutRate;
uniform float uGhostAmount;
uniform float uGhostOffset;

uniform sampler2D uGhostTarget;
uniform bool uHasGhost;

out vec4 oColor;

vec3 rgbToYiq(vec3 rgb) {
  return vec3(
    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,
    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,
    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b
  );
}

vec3 yiqToRgb(vec3 yiq) {
  return vec3(
    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,
    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,
    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b
  );
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float smoothHash(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec2 uv = vUv;
  vec4 base = texture(uTex, uv);
  vec3 col = base.rgb;

  float ny = float(uv.y * 216.0);

  if (uChromaLuma || uChromaLag) {
    vec3 yiq = rgbToYiq(col);
    float y = yiq.r;
    float i = yiq.g;
    float q = yiq.b;

    if (uChromaLuma) {
      float yBlur = uChromaBlurI * 0.1;
      float cBlur = uChromaBlurI;

      float samples = 0.0;
      float iSum = 0.0;
      float qSum = 0.0;
      for (float x = -cBlur; x <= cBlur; x += 1.0) {
        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);
        iSum += sampleYiq.g;
        qSum += sampleYiq.b;
        samples += 1.0;
      }
      i = iSum / samples;
      q = qSum / samples;

      float ySamples = 0.0;
      float ySum = 0.0;
      for (float x = -yBlur; x <= yBlur; x += 1.0) {
        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);
        ySum += sampleYiq.r;
        ySamples += 1.0;
      }
      y = ySum / ySamples;
    }

    if (uChromaLag) {
      float lagPixels = uChromaLagAmount;
      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);
      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);
      i = mix(i, lagYiq.g, 0.7);
      q = mix(q, lagYiq.b, 0.3);
    }

    yiq = vec3(y, i, q);
    col = yiqToRgb(yiq);
  }

  if (uTapeNoise) {
    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;
    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;
    noise = noise * 2.0 - 1.0;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;
    col += vec3(noise * noiseBias);
  }

  float scanline = floor(ny);

  if (uHeadSwitch) {
    float headSwitchStart = 214.0;
    if (ny >= headSwitchStart) {
      float headDist = ny - headSwitchStart;
      if (headDist < uHeadSwitchHeight) {
        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;
        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;
        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);
        col = texture(uTex, shiftedUv).rgb;
        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;
      }
    }
  }

  if (uTracking) {
    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;
    float jitterOffset = jitterNoise * uJitterAmount;

    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));
    if (bandNoise > 0.85) {
      float bandPhase = fract(uTime * 0.3);
      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;
    }

    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);
    col = texture(uTex, jitteredUv).rgb;
  }

  if (uDropouts) {
    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));
    if (dropoutChance < uDropoutRate) {
      float dropoutPhase = fract(uTime * 200.0);
      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {
        col = vec3(1.0);
      }
    }
  }

  if (uGhosting && uHasGhost) {
    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);
    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;
    col = mix(col, ghost, uGhostAmount);
  }

  oColor = vec4(col, base.a);
}
