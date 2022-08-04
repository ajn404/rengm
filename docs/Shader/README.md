## shader 基础

[shader demo](./shader.md)

### [your first shader](./helloShader/first.md)

::: tip vs shader
```glsl
void main(){
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*0.5,1.0);
}
```
:::


使用uniform传递颜色的值

```glsl
uniform vec3 u_color;
void main(){
    gl_FragColor = vec4(u_color ,1.0 );
}
```
```ts

const uniforms = {
            u_color:{
                value: new THREE.Color(0x00ff00)
            }
        }
        this.material = new THREE.ShaderMaterial(
            {
                // wireframe: true,
                uniforms:uniforms,
                fragmentShader: firstFs,
                vertexShader:firstVs,
            }
        )
```


### [鼠标控制颜色](./helloShader/mouseColor.md)


```glsl
uniform vec3 u_color;

uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main(){
    vec3 color = vec3(u_mouse.x/u_resolution.x,0.6,u_mouse.y/u_resolution.y);
    gl_FragColor = vec4(color ,1.0 );
}
```