#version 300 es
precision mediump float;
precision mediump sampler2DArray;
in float vDepth;
in vec4 vColor;
in float vAlpha;
in vec3 vNormal;
in highp vec3 vUv;
in float vW;
in vec3 vLight;
in vec3 vWorldPos;
in vec4 vShadowCoord[3];
in vec4 vMaterialTint;
uniform vec3 uFog;
uniform sampler2D uWall,uGlass,uSoft,uNoise;
uniform sampler2DArray uMaterialAlbedo;
uniform sampler2D uShadow0,uShadow1,uShadow2;
uniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;
uniform float uColorQuantize;
uniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;
uniform float uShadowCasters;
uniform vec3 uShadowBias;
uniform bool uInstanced;
uniform int uMaterialCount;
uniform int uStaticMaterial;
uniform float uMaterialEmissive[32];
uniform float uMaterialUvScale[32];
uniform int uMaterialLayer[32];
uniform int uMaterialFlags[32];
layout(location=0) out vec4 oColor;
layout(location=1) out vec4 oGlow;
vec3 quantizeColor(vec3 c){
  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);
  float n=0.0;
  if(uNoiseOn>0.0){
    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;
  }
  vec3 q=round((c*31.0+n*31.0))/31.0;
  return clamp(q,0.0,1.0);
}
struct MaterialProps{
  float emissive;
  float uvScale;
  int layer;
  int flags;
};
MaterialProps getMaterialProps(int idx){
  MaterialProps p;
  if(idx>=0&&idx<uMaterialCount){
    p.emissive=uMaterialEmissive[idx];
    p.uvScale=uMaterialUvScale[idx];
    p.layer=uMaterialLayer[idx];
    p.flags=uMaterialFlags[idx];
  }else{
    p.emissive=0.0;
    p.uvScale=1.0;
    p.layer=0;
    p.flags=0;
  }
  return p;
}
float sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){
  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;
  projCoords=projCoords*0.5+0.5;
  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;
  float currentDepth=projCoords.z;
  float bias=max(uShadowBias.x, uShadowBias.y*abs(dFdy(currentDepth)));
  vec2 texelSize=vec2(1.0/512.0);
  float shadowSum=0.0;
  for(int x=-1;x<=1;x++){
    for(int y=-1;y<=1;y++){
      float pcfDepth=texture(shadowTex,projCoords.xy+vec2(x,y)*texelSize).r;
      shadowSum+=(currentDepth-bias>pcfDepth)?0.15:1.0;
    }
  }
  return shadowSum/9.0;
}
void main(){
  vec3 uv=vUv/vW;
  if(uv.z>1.5){
    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r
                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));
    if(uv.z>3.5){
      vec3 c=quantizeColor(vColor.rgb);
      oColor=vec4(c,m*vAlpha);
      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);
      return;
    }
    if(uv.z>2.5){
      vec3 c=quantizeColor(vColor.rgb);
      oColor=vec4(c*m*vAlpha,0.0);
      oGlow=vec4(0.0);
      return;
    }
  }
  float shadow=1.0;
  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));
  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));
  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));
  vec3 c=vColor.rgb*vLight*shadow;
  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;
  MaterialProps material=getMaterialProps(materialIndex);
  if(uInstanced){
    c*=vMaterialTint.yzw;
  }
  if(materialIndex>=0&&materialIndex<uMaterialCount){
    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;
  }
  float a=vAlpha;
  float fog=smoothstep(uFogStart,uFogEnd,vDepth);
  if(uv.z>1.5){
    if(uGlassOn>0.0){
      vec4 g=texture(uGlass,uv.xy);
      c=vColor.rgb*g.rgb*uGlassGain;
      a*=g.a;
      fog*=uGlassFog;
    }
  }else if(uv.z>0.5&&uWallOn>0.0){
    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;
  }
  c+=vColor.rgb*material.emissive;
  c=mix(c,uFog,fog);
  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;
  c=quantizeColor(c);
  oColor=vec4(c,a);
  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);
}
