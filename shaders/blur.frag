#version 300 es
precision mediump float;
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uDir;
out vec4 oColor;
void main(){
  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);
  vec4 c=texture(uTex,vUv)*w[0];
  for(int i=1;i<5;i++){
    vec2 o=uDir*float(i);
    c+=texture(uTex,vUv+o)*w[i];
    c+=texture(uTex,vUv-o)*w[i];
  }
  oColor=c;
}
