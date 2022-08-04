import{_ as d,f as s,p as l,I as c,a3 as L,a5 as u,Y as f,o as m,c as g,a as D}from"./app.8137842b.js";const n=o=>{let e=o.mouseX,r=o.mouseY,a=o.width,t=o.height;return e>0&&e<a&&r>0&&r<t},h=o=>{let e=o,r=window.p5DrawLoop;e.setup=()=>{e.createCanvas(500,200,e.WEBGL),e.normalMaterial()},e.draw=()=>{e.background(250),e.orbitControl(),e.rotateY(.003*e.PI*e.frameCount),e.box(100),window&&window.p5DrawLoop!==r&&e.noLoop()},e.mousePressed=()=>{n(e)&&(window.p5DrawLoop=r,e.isLooping()||(e.redraw(),e.loop()))}},b=o=>{let e=o,r,a=window.p5DrawLoop;e.setup=()=>{e.createCanvas(500,500,e.WEBGL),e.fill("red"),e.normalMaterial(),r=e.createSlider(0,255,200),r.style("width","500px")},e.draw=()=>{e.orbitControl(),e.background(255);let t=r.value();e.rotateZ(e.frameCount*.002),e.rotateX(e.frameCount*.002),e.rotateY(e.frameCount*.002),e.box(t),window&&window.p5DrawLoop!==a&&e.noLoop()},e.mousePressed=()=>{n(e)&&(window.p5DrawLoop=a,e.isLooping()||e.loop())}},C=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(500,200,o.WEBGL),o.normalMaterial()};let r;o.preload=()=>{r=o.loadModel("/rengm/model/teapot.obj",!0)},o.draw=()=>{o.background(250),o.orbitControl(),o.rotateZ(o.PI),o.rotateX(o.frameCount*o.PI*.01),o.model(r),window&&window.p5DrawLoop!==e&&(o.redraw(),o.noLoop())},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||o.loop())}},v=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(500,200,o.WEBGL)},o.draw=()=>{o.background(255),o.camera(0,0,160+o.sin(o.frameCount*.01)*100,0,0,0,0,1,0),o.rotateX(o.PI/3),o.torus(30,10),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},k=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(500,200,o.WEBGL)};let r,a;o.preload=()=>{r=o.loadImage("/rengm/images/logo.png")},o.draw=()=>{o.background(255),a=o.PI*o.frameCount*.001,o.rotateX(a),o.rotateY(a),o.rotateZ(a),o.texture(r),o.box(100),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},P=o=>{let e=window.p5DrawLoop,r,a,t;o.setup=()=>{o.createCanvas(500,200,o.WEBGL),a=o.createColorPicker("#ffffff"),t=o.createColorPicker("#ff00ff"),a.style("margin-top","1em"),t.style("margin-top","1em")},o.draw=()=>{o.background(255),r=o.PI*o.frameCount*.001,o.rotateX(r),o.rotateY(r),o.rotateZ(r),o.ambientLight(a.color()),o.ambientMaterial(t.color()),o.cone(30,70),o.translate(0,0,-100),o.box(50),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},x=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(200,200,o.WEBGL)};let r,a;o.draw=()=>{o.background(0),r=(o.mouseX/o.width-.5)*2,a=(o.mouseY/o.height-.5)*2,o.directionalLight(255,255,255,-r,-a,-1),o.noStroke(),o.sphere(80),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},B=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(200,200,o.WEBGL)},o.draw=()=>{o.background(0);let r=o.mouseX-o.width/2,a=o.mouseY-o.height/2;o.pointLight(250,250,250,r,a,100),o.noStroke(),o.sphere(80),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},X=o=>{let e=window.p5DrawLoop,r;o.setup=()=>{o.createCanvas(200,200,o.WEBGL),o.noStroke(),r=o.createColorPicker("#00ff00")};let a,t;o.draw=()=>{o.background(0),a=o.mouseX-o.width/2,t=o.mouseY-o.height/2,o.ambientLight(50),o.spotLight(r.color(),a,t,200,0,0,-1,Math.PI/16),o.sphere(80),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}},Y=o=>{let e=window.p5DrawLoop;o.setup=()=>{o.createCanvas(200,200,o.WEBGL)},o.draw=()=>{o.background(255),window&&window.p5DrawLoop!==e&&o.noLoop()},o.mousePressed=()=>{n(o)&&(window.p5DrawLoop=e,o.isLooping()||(o.redraw(),o.loop()))}};var w=Object.freeze(Object.defineProperty({__proto__:null,coordinate:h,defaultFunc:b,renderSteps:C,pointHandle:v,textureDemo:k,ambientLight:P,directionalLight:x,pointLight:B,spotLight:X,demo:Y},Symbol.toStringTag,{value:"Module"}));const E={class:"basic-3d"},y=s({__name:"basic3d",props:{renderType:String,renderFunc:String},setup(o){const r=l(o),a=c(null);let t="defaultFunc";w[r.renderFunc.value]&&(t=r.renderFunc.value);let i;return L&&(i=window.p5,i&&u(()=>{let p=a._value;p.id=r.renderFunc.value,window.p5DrawLoop=t,new i(w[t],p.id),window.p5DrawLoop=""})),f(()=>{window.p5DrawLoop=""}),(p,G)=>(m(),g("div",E,[D("div",{ref_key:"box",ref:a},null,512)]))}});var S=d(y,[["__scopeId","data-v-092b1c0d"],["__file","basic3d.vue"]]);export{S as default};
