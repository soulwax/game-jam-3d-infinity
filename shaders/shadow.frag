#version 300 es
precision highp float;
in float vDepth;

void main(){
  gl_FragDepth=vDepth*0.5+0.5;
}
