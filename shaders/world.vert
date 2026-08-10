#version 300 es
layout(location=0) in vec3 aPos;
layout(location=1) in vec4 aColor;
layout(location=2) in float aAlpha;
layout(location=3) in vec3 aNormal;
layout(location=4) in vec3 aUv;
// Instance attributes for model matrix (instancing support)
layout(location=5) in vec4 aModelRow0;
layout(location=6) in vec4 aModelRow1;
layout(location=7) in vec4 aModelRow2;
layout(location=8) in vec4 aModelRow3;
layout(location=9) in vec4 aMaterialTint;
uniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;
uniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;
uniform float uAffineTexture;
uniform vec2 uInternal;
uniform mat4 uModel;
uniform bool uInstanced;
uniform mat4 uLightProj0,uLightProj1,uLightProj2;
uniform int uPointLightCount;
uniform vec3 uPointLightPos[4],uPointLightColor[4];
uniform float uPointLightRadius[4],uPointLightIntensity[4];
out float vDepth;
out vec4 vColor;
out float vAlpha;
out vec3 vNormal;
out highp vec3 vUv;
out float vW;
out vec3 vLight;
out vec3 vWorldPos;
out vec4 vShadowCoord[3];
out vec4 vMaterialTint;
void main(){
  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;

  vec3 worldPos=vec3(model*vec4(aPos,1.0));
  vec3 p=worldPos-uEye;
  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));
  float depth=dot(p,uFwd);
  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;
  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);
  if(uInternal.x>0.0){
    vec2 g=uInternal;
    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;
  }
  vDepth=depth;
  vColor=aColor;
  vAlpha=aAlpha;
  vNormal=worldNormal;
  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);
  vW=mix(1.0,gl_Position.w,uAffineTexture);
  vWorldPos=worldPos;
  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);
  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);
  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);
  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);
  float ndl=max(0.0,dot(worldNormal,uLight));
  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);
  for(int i=0;i<4;i++){
    if(i>=uPointLightCount)break;
    vec3 toLight=uPointLightPos[i]-worldPos;
    float distanceToLight=length(toLight);
    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){
      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));
      float falloff=smoothstep(uPointLightRadius[i],0.0,distanceToLight);
      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);
    }
  }
}
