varying float Vnoise;
varying vec2 vUv;
uniform sampler2D oceanTexture;
uniform float time;


float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float cnoise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}


void main(){

    vec3 color1 = vec3(1.,0.,0.);
    vec3 color2 = vec3(1.,1.,1.);
    vec3 finalColor = mix(color1,color2,0.5*(Vnoise*1.));

    vec2 newUv = vUv;



    newUv = vec2(newUv.x ,newUv.y + 0.01*sin(newUv.x*10.+time));

//    vec4 oceanView = texture2D(oceanTexture,vUv);
    vec4 oceanView = texture2D(oceanTexture,newUv);

    gl_FragColor = vec4(finalColor,1.);
    gl_FragColor = vec4(vUv,0.,1.);
    gl_FragColor = oceanView;

}