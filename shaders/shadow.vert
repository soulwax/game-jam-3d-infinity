#version 300 es
in vec3 aPos;
in vec3 aNormal;
uniform mat4 uLightProj;
uniform mat4 uModel;
out float vDepth;

void main(){
  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));
  vec4 lightPos=uLightProj*vec4(worldPos,1.0);
  gl_Position=lightPos;
  vDepth=lightPos.z/lightPos.w;
}
