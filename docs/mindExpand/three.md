### example

### [initThree](./three/initThree)

### [extraModuleUse](./three/extraModuleUse)

### [css3DSprites](./three/css3DSprites)

### 文档

#### 图元

```js
const width = 1;
const height = 1;
const depth = 0.5;
const geometry = new THREE.BoxGeometry(width, height, depth);
```

[盒子](./three/doc/geometry)

```js
   const width = 8;
    const height = 8;
    const depth = 8 ;
    const widthSegments = 4;
    const heightSegments = 4;
    const depthSegments= 4;
    const geometry = new THREE.BoxGeometry(width,height,depth,widthSegments,heightSegments,depthSegments)
```

[分割盒子](./three/doc/geometrySegments)


```js
    const radius = 7;
    const segments = 24;
    const geometry = new THREE.CircleGeometry(radius,segments)
```

[平面圆](./three/doc/circleGeometry)

```js
    const radius = 7;
    const segments = 24;
    const thetaStart = 0;
    const thetaEnd = Math.PI
    const geometry = new THREE.CircleGeometry(radius,segments,thetaStart,thetaEnd);
```
[带起始角度的平面圆](./three/doc/circleGeometryTheta)



```js
const radius =6;
const height = 8;
const radialSegments =16;
const geometry = new THREE.ConeGeometry(radius,height,radialSegments);
```

[圆锥](./three/doc/coneGeometry)

[带起始角度的圆锥（高度分割为2，开放底部）]

### 视频（合并WebGL和HTML世界）的demo

[play_demo](./three/doc/play_demo.md)


#### 第五章部分 

##### 更改着色器 中心🌊显示noise
[glsl_demo](./three/doc/glslDemo.md)

##### fragment shader effect

[shader](./three//shader/fragmentShaderEffect.md)


##### merging basics

[three in html ](./three/shader/threeInHtml.md)



