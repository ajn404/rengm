<template>
  <div class="vtk-demo">
    <div class="vtk-container" ref="vtkContainer" />
    <table class="controls">
      <tbody>
        <tr>
          <td>
            <select
              style="width: 100%"
              :value="representation"
              @change="setRepresentation($event.target.value)"
            >
              <option value="0">Points 点</option>
              <option value="1">Wireframe网格图</option>
              <option value="2">Surface 层面</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="range"
              min="4"
              max="80"
              :value="coneResolution"
              @input="setConeResolution($event.target.value)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {
  ref,
  unref,
  onMounted,
  onBeforeUnmount,
  watchEffect,
  nextTick,
} from "vue";
import { isClient } from "@vueuse/core";
let vtkFullScreenRenderWindow, vtkActor, vtkMapper, vtkConeSource;

const vtkContainer = ref(null);
const context = ref(null);
const coneResolution = ref(6);
const representation = ref(2);
function setConeResolution(res) {
  coneResolution.value = Number(res);
}
function setRepresentation(rep) {
  representation.value = Number(rep);
}
watchEffect(() => {
  const res = unref(coneResolution);
  const rep = unref(representation);
  if (context.value) {
    const { actor, coneSource, renderWindow } = context.value;
    coneSource.setResolution(res);
    actor.getProperty().setRepresentation(rep);
    renderWindow.render();
  }
});

onMounted(() => {
  if (isClient) {
    import("https://unpkg.com/vtk.js@25.1.0/vtk.js").then(() => {
      vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
      vtkActor = vtk.Rendering.Core.vtkActor;
      vtkMapper = vtk.Rendering.Core.vtkMapper;
      vtkConeSource = vtk.Filters.Sources.vtkConeSource;
      nextTick(() => {
        if (!context.value) {
          const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
            rootContainer: vtkContainer.value,
          });

          const coneSource = vtkConeSource.newInstance({ height: 1 });

          const mapper = vtkMapper.newInstance();
          mapper.setInputConnection(coneSource.getOutputPort());

          const actor = vtkActor.newInstance();
          actor.setMapper(mapper);

          const renderer = fullScreenRenderer.getRenderer();
          const renderWindow = fullScreenRenderer.getRenderWindow();

          renderer.addActor(actor);
          renderer.resetCamera();
          renderWindow.render();

          context.value = {
            fullScreenRenderer,
            renderWindow,
            renderer,
            coneSource,
            actor,
            mapper,
          };
        }
      });
    });
  }
});

onBeforeUnmount(() => {
  if (context.value && isClient) {
    const { fullScreenRenderer, coneSource, actor, mapper } = context.value;
    actor.delete();
    mapper.delete();
    coneSource.delete();
    //清除resize绑定时间
    window.removeEventListener("resize", fullScreenRenderer.resize);
    fullScreenRenderer.delete();
    context.value = null;
  }
});
</script>

<style lang="scss" scoped>
.vtk-demo {
  :deep(.vtk-container) {
    position: relative;
    & > div {
      position: fixed !important;
      z-index: 1000;
    }
  }
}

.controls {
  position: fixed;
  z-index: 1000;
  top: 25px;
  left: 25px;
  background: white;
  padding: 12px;
}
</style>
