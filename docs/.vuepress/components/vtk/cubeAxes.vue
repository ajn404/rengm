<template>
    <div class="cube-axes">
        <div class="vtk-container" ref="vtkContainer" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { isClient } from "@vueuse/core";

let vtkActor,
    vtkCubeAxesActor,
    vtkConeSource,
    vtkInteractorStyleTrackballCamera,
    vtkMapper,
    vtkRenderWindow,
    vtkRenderWindowInteractor,
    vtkRenderer,
    vtkURLExtract;


const vtkContainer = ref(null);
const context = ref(null);

import { loading } from '@/common/utils'

onMounted(() => {
    if (isClient) {
        const loadInstance = loading()

        import("https://unpkg.com/vtk.js@25.1.0/vtk.js").then(() => {
            loadInstance.close()
            vtkActor = vtk.Rendering.Core.vtkActor;
            vtkCubeAxesActor = vtk.Rendering.Core.vtkCubeAxesActor;
            vtkConeSource = vtk.Filters.Sources.vtkConeSource;
            vtkInteractorStyleTrackballCamera = vtk.Interaction.Style.vtkInteractorStyleTrackballCamera;
            vtkMapper = vtk.Rendering.Core.vtkMapper;
            vtkRenderWindow = vtk.Rendering.Core.vtkRenderWindow;
            vtkRenderWindowInteractor = vtk.Rendering.Core.vtkRenderWindowInteractor;
            vtkRenderer = vtk.Rendering.Core.vtkRenderer;
            vtkURLExtract = vtk.Common.Core.vtkURLExtract;

            nextTick(() => {
                if (!context.value) {

                    const userParams = vtkURLExtract.extractURLParameters();


                    const renderWindow = vtkRenderWindow.newInstance();
                    const renderer = vtkRenderer.newInstance({ background: [0.2, 0.3, 0.4] });
                    renderWindow.addRenderer(renderer);

                    const coneSource = vtkConeSource.newInstance({ height: 1.0 });

                    const mapper = vtkMapper.newInstance();
                    mapper.setInputConnection(coneSource.getOutputPort());

                    const actor = vtkActor.newInstance();
                    actor.setMapper(mapper);

                    // ----------------------------------------------------------------------------
                    // Add the actor to the renderer and set the camera based on it
                    // ----------------------------------------------------------------------------

                    renderer.addActor(actor);
                    renderer.resetCamera();

                    const cubeAxes = vtkCubeAxesActor.newInstance();
                    cubeAxes.setCamera(renderer.getActiveCamera());
                    cubeAxes.setDataBounds(actor.getBounds());
                    renderer.addActor(cubeAxes);

                    // ----------------------------------------------------------------------------
                    // Use OpenGL as the backend to view the all this
                    // ----------------------------------------------------------------------------

                    const apiSpecificRenderWindow = renderWindow.newAPISpecificView(
                        userParams.viewAPI
                    );
                    renderWindow.addView(apiSpecificRenderWindow);

                    // ----------------------------------------------------------------------------
                    // Create a div section to put this into
                    // ----------------------------------------------------------------------------

                    const container = vtkContainer.value;
                    // vtkContainer.value.appendChild(container);
                    apiSpecificRenderWindow.setContainer(container);

                    // ----------------------------------------------------------------------------
                    // Capture size of the container and set it to the renderWindow
                    // ----------------------------------------------------------------------------

                    const { width, height } = container.getBoundingClientRect();
                    apiSpecificRenderWindow.setSize(width, height);

                    // ----------------------------------------------------------------------------
                    // Setup an interactor to handle mouse events
                    // ----------------------------------------------------------------------------

                    const interactor = vtkRenderWindowInteractor.newInstance();
                    interactor.setView(apiSpecificRenderWindow);
                    interactor.initialize();
                    interactor.bindEvents(container);

                    // ----------------------------------------------------------------------------
                    // Setup interactor style to use
                    // ----------------------------------------------------------------------------

                    interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());

                    context.value = {
                        renderWindow,
                        renderer,

                    };
                }
            });
        });
    }
});

onBeforeUnmount(() => {
    if (context.value && isClient) {
        const {
            renderWindow,
            renderer,

        } = context.value;
        renderer.delete();
        renderWindow.delete();
        context.value = null;
    }
});
</script>

<style lang="scss" scoped>
.cube-axes {
    :deep(.vtk-container) {
        position: relative;
        width: 100vw;
        height: 100vh;
        & > div {
            position: fixed !important;
            z-index: 1000;
        }
    }
}
</style>
