
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


uniform float time;
varying float Vnoise;
varying vec2 vUv;

void main(){
	vec3 newposition = position;
	float Pi = 3.14159265;
	// float noise = cnoise(vec3(position.x*4.,position.y*4. + time/5.,0.));
	 float noise = cnoise(2.*vec3(position.x,position.y,position.z*time/10.));



//	newposition.z += 0.1*sin( (newposition.x + 0.25 * time/10.)*2.*Pi);
//	newposition.z += .2* noise;


// float dist = distance(uv,vec2(0.5));
// newposition.z+= 0.1*sin(dist*30. - time);

//    Vnoise = dist;

        //不规则的圆
        newposition += 0.5* noise *normal;

	Vnoise = noise;
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition,1.0);
}