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