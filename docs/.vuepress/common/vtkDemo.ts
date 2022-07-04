export const vtkDemo = (
    vtk,vtkContainer
) => {
    let vtkFullScreenRenderWindow, vtkActor, vtkMapper, vtkConeSource;

    vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
    vtkActor = vtk.Rendering.Core.vtkActor;
    vtkMapper = vtk.Rendering.Core.vtkMapper;
    vtkConeSource = vtk.Filters.Sources.vtkConeSource
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
}