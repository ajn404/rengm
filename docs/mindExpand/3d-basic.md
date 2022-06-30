---
title: 3d基础(p5示例)
sidebarDepth: 4
---

[[toc]]

::: tip 前置
- 页面动画需要点击触发
:::

# 3d基础

## 坐标系统

- webGL使用右手坐标系统

## 物体
- 物体的几何形状由顶点和面构成，材质使用的是一张纹理贴图，将几何体和材质连接组成`网络`

<ClientOnly>
<basic3d renderType="p5" renderFunc="coordinate"></basic3d>
</ClientOnly>

## 渲染流程

 **vertices=>primitives=>fragments=>processed fragments=>pixels**

渲染一个绕x轴旋转的茶壶 :point_down:
<ClientOnly>
<basic3d renderType="p5" renderFunc="renderSteps"></basic3d>
</ClientOnly>

## 顶点处理

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

## 栅格化
**primitives=>fragments**
顶点信息转换而来的原始数据转换成一系列的片段

## 片段合成
**fragments=>processed fragments**
基于给定参数计算最终的颜色

### 纹理
在渲染流程的片段处理阶段添加纹理到模型上允许我们使用`包装`和`过滤`进行适配

<ClientOnly>
<basic3d renderType="p5" renderFunc="textureDemo"></basic3d>
</ClientOnly>
纹理包装允许你在3d模型上重复使用2D图片
纹理过滤是原始分辨率与片段分辨率不同时，根据情况对纹理进行过滤

### 光照
webGl实现的标准phong光照模型有四种关照参数
<br/>
**漫反射** defuse reflection
<br/>
**高光**
<br/>
**环境色**
<br/>
**自发光**

#### ambient light
::: tip ambient light
- ambient light 环境光 模拟漫反射的一种光源，将灯光均匀的照射在场景的每个物体上
<br/>
灯光是绿色的，材质只要不包含绿色就不会反射任何颜色
:::
<ClientOnly>
<basic3d renderType="p5" renderFunc="ambientLight"></basic3d>
</ClientOnly>

#### directional light
:::tip directional light
- directional light 平形光 
:::
<ClientOnly>
<basic3d renderType="p5" renderFunc="directionalLight"></basic3d>
</ClientOnly>

#### point light
<ClientOnly>
<basic3d renderType="p5" renderFunc="pointLight"></basic3d>
</ClientOnly>












