import{_ as S,I as x,R as h,a3 as A,a7 as y,a5 as B,a8 as P,o as W,c as E,a as V}from"./app.8137842b.js";import{l as L}from"./utils.266f51da.js";const M={class:"cube-axes"},T={__name:"cubeAxes",setup(U){let v,l,u,k,_,p,C,w,I;const R=x(null),t=x(null);return h(()=>{if(A){const n=L();y(()=>import("https://unpkg.com/vtk.js@25.1.0/vtk.js"),[]).then(()=>{n.close(),v=vtk.Rendering.Core.vtkActor,l=vtk.Rendering.Core.vtkCubeAxesActor,u=vtk.Filters.Sources.vtkConeSource,k=vtk.Interaction.Style.vtkInteractorStyleTrackballCamera,_=vtk.Rendering.Core.vtkMapper,p=vtk.Rendering.Core.vtkRenderWindow,C=vtk.Rendering.Core.vtkRenderWindowInteractor,w=vtk.Rendering.Core.vtkRenderer,I=vtk.Common.Core.vtkURLExtract,B(()=>{if(!t.value){const r=I.extractURLParameters(),a=p.newInstance(),e=w.newInstance({background:[.2,.3,.4]});a.addRenderer(e);const g=u.newInstance({height:1}),m=_.newInstance();m.setInputConnection(g.getOutputPort());const s=v.newInstance();s.setMapper(m),e.addActor(s),e.resetCamera();const i=l.newInstance();i.setCamera(e.getActiveCamera()),i.setDataBounds(s.getBounds()),e.addActor(i);const o=a.newAPISpecificView(r.viewAPI);a.addView(o);const d=R.value;o.setContainer(d);const{width:f,height:b}=d.getBoundingClientRect();o.setSize(f,b);const c=C.newInstance();c.setView(o),c.initialize(),c.bindEvents(d),c.setInteractorStyle(k.newInstance()),t.value={renderWindow:a,renderer:e}}})})}}),P(()=>{if(t.value&&A){const{renderWindow:n,renderer:r}=t.value;r.delete(),n.delete(),t.value=null}}),(n,r)=>(W(),E("div",M,[V("div",{class:"vtk-container",ref_key:"vtkContainer",ref:R},null,512)]))}};var O=S(T,[["__scopeId","data-v-5d7a938a"],["__file","cubeAxes.vue"]]);export{O as default};