#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rectShape(vec2 pos, float scale) {
  vec2 rect = vec2(smoothstep(0., scale, pos.x), smoothstep(0., scale, pos.y));
  rect *= vec2(smoothstep(0., scale, 1. - pos.x), smoothstep(0., scale, 1. - pos.y));
  return rect.x * rect.y;
}

void main() {
  vec2 pos = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(rectShape(pos, 0.3));
  gl_FragColor = vec4(color, 1);
}