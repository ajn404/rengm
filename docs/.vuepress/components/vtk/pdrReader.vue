<template>
  <div class="pdr-reader">
    <div class="vtk-container" ref="vtkContainer" />
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import { isClient } from "@vueuse/core";
let vtkFullScreenRenderWindow,
  vtkActor,
  vtkPDBReader,
  vtkSphereMapper,
  vtkStickMapper,
  vtkMoleculeToRepresentation;
const vtkContainer = ref(null);
const context = ref(null);
onMounted(() => {
  if (isClient && window.vtk) {
    vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
    vtkActor = vtk.Rendering.Core.vtkActor;
    vtkPDBReader = vtk.IO.Misc.vtkPDBReader;
    vtkSphereMapper = vtk.Rendering.Core.vtkSphereMapper;
    vtkMoleculeToRepresentation = vtk.Filters.General.vtkMoleculeToRepresentation;
    vtkStickMapper = vtk.Rendering.Core.vtkStickMapper;

    nextTick(() => {
      if (!context.value) {
        const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
                        rootContainer: vtkContainer.value,
        });
        const renderer = fullScreenRenderer.getRenderer();
        const renderWindow = fullScreenRenderer.getRenderWindow();

        const reader = vtkPDBReader.newInstance();
        const filter = vtkMoleculeToRepresentation.newInstance();
        const sphereMapper = vtkSphereMapper.newInstance();
        const stickMapper = vtkStickMapper.newInstance();
        const sphereActor = vtkActor.newInstance();
        const stickActor = vtkActor.newInstance();

        filter.setInputConnection(reader.getOutputPort());
        filter.setHideElements(["H"]);

        // render sphere
        sphereMapper.setInputConnection(filter.getOutputPort(0));
        sphereMapper.setScaleArray(filter.getSphereScaleArrayName());
        sphereActor.setMapper(sphereMapper);

        // render sticks
        stickMapper.setInputConnection(filter.getOutputPort(1));
        stickMapper.setScaleArray("stickScales");
        stickMapper.setOrientationArray("orientation");
        stickActor.setMapper(stickMapper);

        reader.setUrl(`/data/2LYZ.pdb`).then(() => {
          renderer.resetCamera();
          renderWindow.render();
        });

        renderer.addActor(sphereActor);
        renderer.addActor(stickActor);
        renderer.resetCamera();
        renderWindow.render();

        context.value = {
          fullScreenRenderer,
          renderWindow,
          renderer,
          reader,
          filter,
          sphereMapper,
          stickMapper,
          sphereActor,
          stickActor,
        };
      }
    });
  }
});

onBeforeUnmount(() => {
  if (context.value && isClient) {
    const {
      fullScreenRenderer,
      renderWindow,
      renderer,
      reader,
      filter,
      sphereMapper,
      stickMapper,
      sphereActor,
      stickActor,
    } = context.value;

    renderer.delete();
    filter.delete();
    sphereMapper.delete();
    stickMapper.delete();
    sphereActor.delete()
    stickActor.delete();
    reader.delete();
    renderWindow.delete();
    fullScreenRenderer.delete();


    context.value = null;
  }
});
</script>

<style lang="scss" scoped>
@import url("/style/vtkLayout.scss");
.controls {
  position: absolute;
  top: 25px;
  left: 25px;
  background: white;
  padding: 12px;
}
</style>
