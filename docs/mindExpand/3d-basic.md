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




