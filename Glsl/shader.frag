/* This animation is the material of my first youtube tutorial about creative
coding, which is a video in which I try to introduce programmers to GLSL
and to the wonderful world of shaders, while also trying to share my recent
passion for this community.
Video URL: https://youtu.be/f4s1h2YETNY
*/
#ifdef GL_ES
precision mediump float;
#endif

// 着色器输入
uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform float     iFrameRate;            // shader frame rate
uniform int       iFrame;                // shader playback frame
uniform float     iChannelTime[4];       // channel playback time (in seconds)
uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube
uniform vec4      iDate;                 // (year, month, day, time in seconds)
uniform float     iSampleRate;           // sound sample rate (i.e., 44100)
                

//https://iquilezles.org/articles/palettes/
vec3 palette(float t){
  vec3 a=vec3(.5,.5,.5);
  vec3 b=vec3(.5,.5,.5);
  vec3 c=vec3(1.,1.,1.);
  vec3 d=vec3(.263,.416,.557);
  
  return a+b*cos(6.28318*(c*t+d));
}

//https://www.shadertoy.com/view/mtyGWy
void mainImage(out vec4 fragColor,in vec2 fragCoord){
  vec2 uv=(fragCoord*2.-iResolution.xy)/iResolution.y;
  vec2 uv0=uv;
  vec3 finalColor=vec3(0.);
  
  for(float i=0.;i<4.;i++){
    uv=fract(uv*1.5)-.5;
    
    float d=length(uv)*exp(-length(uv0));
    
    vec3 col=palette(length(uv0)+i*.4+iTime*.4);
    
    d=sin(d*8.+iTime)/8.;
    d=abs(d);
    
    d=pow(.01/d,1.2);
    
    finalColor+=col*d;
  }
  
  fragColor=vec4(finalColor,1.);
}