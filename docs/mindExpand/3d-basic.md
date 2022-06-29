---
title: 3d基础(p5示例)
sidebar: false
---

[[toc]]

## 3d基础

### 坐标系统

- webGL使用右手坐标系统

### 物体
- 物体的几何形状由顶点和面构成，材质使用的是一张纹理贴图，将几何体和材质连接组成`网络`

<ClientOnly>
<basic3d renderType="p5" renderFunc="coordinate"></basic3d>
</ClientOnly>

### 渲染流程

 **vertices=>primitives=>fragments=>processed fragments=>pixels**

渲染一个绕x轴旋转的茶壶 :point_down:
<ClientOnly>
<basic3d renderType="p5" renderFunc="renderSteps"></basic3d>
</ClientOnly>

### 顶点处理

- model transformation 模型转换:筹备世界坐标中的物体
- view transformation 视图转换:关心位置和空间中摄像机的朝向设置
- projection transformation 投影转换，定义摄像机设置（视野，宽高比例，近裁剪，远裁剪）
- viewport transformation 视图窗口转换，将一切输出给渲染流程的下一步

`new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])`
::: tip 第三个参数
`camera(0,0,200+sin(frameCount*0.01)*100,0,0,0,0,1,0)`
:::
<ClientOnly>
<basic3d renderType="p5" renderFunc="pointHandle"></basic3d>
</ClientOnly>
### 栅格化


