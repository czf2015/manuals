#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main()
{
  // 计算屏幕空间坐标
  vec2 st=gl_FragCoord.xy/u_resolution-.5;
  vec3 color=vec3(1.);// 初始化颜色为白色
  
  // 计算当前像素点到屏幕中心的距离
  float lengthV=length(st);
  
  // 计算一个球体的效果，根据像素到屏幕中心的距离来确定颜色的透明度
  // 首先计算了一个球体的半径，然后使用step函数来将半径小于0.5的像素点设为不透明，大于等于0.5的设为透明。最后使用clamp函数限制透明度的范围在0-0.75之间。
  float sphere=max(0.,lengthV*2.);
  float sphereAlpha=step(.5,sphere);
  color*=clamp(sphereAlpha,0.,.75);
  
  // 亮光
  color+=(1.-length(st-vec2(-.12,.12))*3.)*(1.-sphereAlpha);
  
  // 暗光
  float refLight=1.-sphereAlpha;
  refLight*=smoothstep(.3,.5,(length(st*.5+vec2(.05,-.08)))*2.);
  refLight=clamp(refLight,0.,1.)*.45;
  // color = vec3(refLight);
  color+=vec3(refLight);
  
  // 添加阴影
  // 使用两个smoothstep函数来计算一个类似于阴影的效果，然后使用clamp函数来限制颜色的范围。最后将调整后的颜色乘到之上.
  float sha=smoothstep(.5,.65,length(st*vec2(.2,1.)+vec2(-.05,.22))*8.);
  sha+=(1.-smoothstep(.7,.05,length(st*vec2(.2,1.)+vec2(-.02,.22))*6.))*.5;
  sha=clamp(sha+(1.-sphereAlpha),0.,1.);
  color*=sha;
  
  // 最终调整颜色并输出
  color=color*.8+.1;
  gl_FragColor=vec4(color,1.);
}
