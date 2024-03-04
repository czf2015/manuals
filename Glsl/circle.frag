#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution-.5;
  float lengthV=length(st);
  float stepV=1.-step(.5,lengthV);
  gl_FragColor=vec4(stepV,stepV,stepV,1.);
}