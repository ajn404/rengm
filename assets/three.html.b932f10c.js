import{_ as o,o as p,c,a as s,b as e,w as t,e as r,d as n,r as i}from"./app.8137842b.js";const l={},d=r(`<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h3><h3 id="initthree" tabindex="-1"><a class="header-anchor" href="#initthree" aria-hidden="true">#</a> <a href="./three/initThree">initThree</a></h3><h3 id="extramoduleuse" tabindex="-1"><a class="header-anchor" href="#extramoduleuse" aria-hidden="true">#</a> <a href="./three/extraModuleUse">extraModuleUse</a></h3><h3 id="css3dsprites" tabindex="-1"><a class="header-anchor" href="#css3dsprites" aria-hidden="true">#</a> <a href="./three/css3DSprites">css3DSprites</a></h3><h3 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h3><h4 id="\u56FE\u5143" tabindex="-1"><a class="header-anchor" href="#\u56FE\u5143" aria-hidden="true">#</a> \u56FE\u5143</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> depth <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./three/doc/geometry">\u76D2\u5B50</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> depth <span class="token operator">=</span> <span class="token number">8</span> <span class="token punctuation">;</span>
    <span class="token keyword">const</span> widthSegments <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> heightSegments <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> depthSegments<span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">,</span>depth<span class="token punctuation">,</span>widthSegments<span class="token punctuation">,</span>heightSegments<span class="token punctuation">,</span>depthSegments<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./three/doc/geometrySegments">\u5206\u5272\u76D2\u5B50</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> segments <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CircleGeometry</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span>segments<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./three/doc/circleGeometry">\u5E73\u9762\u5706</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> segments <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> thetaStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> thetaEnd <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span>
    <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CircleGeometry</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span>segments<span class="token punctuation">,</span>thetaStart<span class="token punctuation">,</span>thetaEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./three/doc/circleGeometryTheta">\u5E26\u8D77\u59CB\u89D2\u5EA6\u7684\u5E73\u9762\u5706</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> radius <span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> radialSegments <span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>ConeGeometry</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span>height<span class="token punctuation">,</span>radialSegments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./three/doc/coneGeometry">\u5706\u9525</a></p><p>[\u5E26\u8D77\u59CB\u89D2\u5EA6\u7684\u5706\u9525\uFF08\u9AD8\u5EA6\u5206\u5272\u4E3A2\uFF0C\u5F00\u653E\u5E95\u90E8\uFF09]</p><h3 id="\u89C6\u9891-\u5408\u5E76webgl\u548Chtml\u4E16\u754C-\u7684demo" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891-\u5408\u5E76webgl\u548Chtml\u4E16\u754C-\u7684demo" aria-hidden="true">#</a> \u89C6\u9891\uFF08\u5408\u5E76WebGL\u548CHTML\u4E16\u754C\uFF09\u7684demo</h3>`,18),u=n("play_demo"),h=s("h4",{id:"\u7B2C\u4E94\u7AE0\u90E8\u5206",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B2C\u4E94\u7AE0\u90E8\u5206","aria-hidden":"true"},"#"),n(" \u7B2C\u4E94\u7AE0\u90E8\u5206")],-1),k=s("h5",{id:"\u66F4\u6539\u7740\u8272\u5668-\u4E2D\u5FC3\u{1F30A}\u663E\u793Anoise",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u66F4\u6539\u7740\u8272\u5668-\u4E2D\u5FC3\u{1F30A}\u663E\u793Anoise","aria-hidden":"true"},"#"),n(" \u66F4\u6539\u7740\u8272\u5668 \u4E2D\u5FC3\u{1F30A}\u663E\u793Anoise")],-1),m=n("glsl_demo"),v=s("h5",{id:"fragment-shader-effect",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fragment-shader-effect","aria-hidden":"true"},"#"),n(" fragment shader effect")],-1),b=n("shader"),g=s("h5",{id:"merging-basics",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#merging-basics","aria-hidden":"true"},"#"),n(" merging basics")],-1),y=n("three in html "),f=s("h2",{id:"glsl",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#glsl","aria-hidden":"true"},"#"),n(" glsl")],-1);function w(_,x){const a=i("RouterLink");return p(),c("div",null,[d,s("p",null,[e(a,{to:"/mindExpand/three/doc/play_demo.html"},{default:t(()=>[u]),_:1})]),h,k,s("p",null,[e(a,{to:"/mindExpand/three/doc/glslDemo.html"},{default:t(()=>[m]),_:1})]),v,s("p",null,[e(a,{to:"/mindExpand/three/shader/fragmentShaderEffect.html"},{default:t(()=>[b]),_:1})]),g,s("p",null,[e(a,{to:"/mindExpand/three/shader/threeInHtml.html"},{default:t(()=>[y]),_:1})]),f])}var j=o(l,[["render",w],["__file","three.html.vue"]]);export{j as default};