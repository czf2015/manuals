#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.1415926535;
uniform vec2 u_resolution;

float polyShape(vec2 pos,float radius,float sideCount){
  pos=pos-.5;
  
  float angle=atan(pos.y,pos.x);
  float slice=PI*2./sideCount;
  float poly=.5+angle/slice; // 将 angle 除以 slice，并将结果加上 0.5，得到 poly 的初始值。这个值表示多边形形状的相对位置
  // 
  poly=floor(poly);
  // 将 poly 乘以 slice，再减去 angle，将多边形的角度调整为与原点相对的角度。
  poly*=slice;
  poly-=angle;
  // 使用余弦函数 cos 计算多边形的形状，将结果赋给 poly，此时 poly 的取值范围为 [-1, 1]。
  poly=cos(poly);
  // 将 poly 乘以位置向量 pos 的长度，得到多边形形状的大小。
  poly*=length(pos);
  // 使用 step 函数将多边形形状中小于给定半径 radius 的部分置为 0，大于等于 radius 的部分保持原样
  poly=step(radius,poly);
  return poly;
}

void main(){
  // 计算归一化的坐标值
  vec2 pos=gl_FragCoord.xy/u_resolution;
  // 计算位置 pos 处多边形形状的值，并将其赋给颜色向量的红色分量
  vec3 color=vec3(polyShape(pos,.2,6.),0,0);
  gl_FragColor=vec4(color,1);
}