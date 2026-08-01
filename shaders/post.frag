#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;
uniform vec2 uNoiseOff;
uniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;
out vec4 oColor;
vec3 slice(float s,vec2 rg){
  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;
}
void main(){
  vec4 c=texture(uTex,vUv);
  if(uDepthViz>0.0){
    float d=texture(uDepth,vUv).r;
    c=vec4(vec3(d),1.0);
  }else if(uBlur>0.0){
    vec2 d=(vec2(0.5)-vUv)*uBlur;
    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));
    c/=6.0;
  }
  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);
  c.rgb*=v;
  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));
  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));
  float g;
  if(uNoiseOn>0.0){
    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;
  }else{
    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;
  }
  c.rgb+=g*uGrain;
  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;
  if(uLutOn>0.0){
    vec3 q=clamp(c.rgb,0.0,1.0);
    float b=q.b*15.0;
    float s0=floor(b);
    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);
  }
  float ssao=texture(uSSAO,vUv).r;
  c.rgb*=mix(1.0,ssao,uSSAOStrength);
  if(uFlash>0.0){
    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;
    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;
    c.rgb*=1.0-0.5*uFlash;
  }
  oColor=c;
}
