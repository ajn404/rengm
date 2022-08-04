import{_ as p,o as c,c as l,a as n,b as e,w as t,d as s,e as o,r as i}from"./app.8137842b.js";const u={},r=n("h2",{id:"shader-\u57FA\u7840",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shader-\u57FA\u7840","aria-hidden":"true"},"#"),s(" shader \u57FA\u7840")],-1),d=s("shader demo"),k={id:"your-first-shader",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#your-first-shader","aria-hidden":"true"},"#",-1),m=s(),h=s("your first shader"),_=o(`<div class="custom-container tip"><p class="custom-container-title">vs shader</p><div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    gl_Position <span class="token operator">=</span> projectionMatrix <span class="token operator">*</span> modelViewMatrix <span class="token operator">*</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>position<span class="token operator">*</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>\u4F7F\u7528uniform\u4F20\u9012\u989C\u8272\u7684\u503C</p><div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>u_color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">const</span> uniforms <span class="token operator">=</span> <span class="token punctuation">{</span>
            u_color<span class="token operator">:</span><span class="token punctuation">{</span>
                value<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0x00ff00</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">ShaderMaterial</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// wireframe: true,</span>
                uniforms<span class="token operator">:</span>uniforms<span class="token punctuation">,</span>
                fragmentShader<span class="token operator">:</span> firstFs<span class="token punctuation">,</span>
                vertexShader<span class="token operator">:</span>firstVs<span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={id:"\u9F20\u6807\u63A7\u5236\u989C\u8272",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#\u9F20\u6807\u63A7\u5236\u989C\u8272","aria-hidden":"true"},"#",-1),g=s(),y=s("\u9F20\u6807\u63A7\u5236\u989C\u8272"),w=o(`<div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span>u_mouse<span class="token punctuation">.</span>x<span class="token operator">/</span>u_resolution<span class="token punctuation">.</span>x<span class="token punctuation">,</span><span class="token number">0.6</span><span class="token punctuation">,</span>u_mouse<span class="token punctuation">.</span>y<span class="token operator">/</span>u_resolution<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(S,C){const a=i("RouterLink");return c(),l("div",null,[r,n("p",null,[e(a,{to:"/Shader/shader.html"},{default:t(()=>[d]),_:1})]),n("h3",k,[v,m,e(a,{to:"/Shader/helloShader/first.html"},{default:t(()=>[h]),_:1})]),_,n("h3",b,[f,g,e(a,{to:"/Shader/helloShader/mouseColor.html"},{default:t(()=>[y]),_:1})]),w])}var E=p(u,[["render",x],["__file","index.html.vue"]]);export{E as default};
