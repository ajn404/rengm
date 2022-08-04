import{_ as l,o as u,c as i,b as n,w as p,a as s,d as o,e as c,r as e}from"./app.8137842b.js";const k={},r=s("h2",{id:"demo-1-flex-\u5E03\u5C40",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo-1-flex-\u5E03\u5C40","aria-hidden":"true"},"#"),o(" demo-1 flex \u5E03\u5C40")],-1),d=s("p",null,"flexbox \u662F \u4E00\u79CD\u4E00\u7EF4\u5E03\u5C40\uFF0C\u53EA\u80FD\u5904\u7406\u4E00\u884C\u6216\u8005\u4E00\u5217\u3002",-1),g=c(`<h2 id="\u5199\u57FA\u7840\u7684\u597D\u751F\u65E0\u8DA3-\u653E\u98DE\u4E86" tabindex="-1"><a class="header-anchor" href="#\u5199\u57FA\u7840\u7684\u597D\u751F\u65E0\u8DA3-\u653E\u98DE\u4E86" aria-hidden="true">#</a> \u5199\u57FA\u7840\u7684\u597D\u751F\u65E0\u8DA3\uFF0C\u653E\u98DE\u4E86</h2><details class="custom-container details"><summary>scss\u6838\u5FC3\u4EE3\u7801</summary><div class="language-scss ext-scss"><pre class="language-scss"><code>&lt;template lang=<span class="token string">&quot;pug&quot;</span>&gt;
.container
    <span class="token operator">-</span> for <span class="token punctuation">(</span>var i = 1<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> 25<span class="token punctuation">;</span> i++<span class="token punctuation">)</span>
        <span class="token selector">.square 
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.container </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotate 5s infinite<span class="token punctuation">;</span>
    <span class="token property">perspective</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token comment">// &amp;:hover { animation-play-state: paused; }</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 2em auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.square </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 18%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 18%<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotate 10s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span>25<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$n</span> &gt; 0 </span><span class="token punctuation">{</span>
    .<span class="token property">square</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$n}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span>0s+200ms*<span class="token variable">$n</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>10 <span class="token operator">*</span> <span class="token variable">$n</span><span class="token punctuation">,</span>255 <span class="token operator">-</span> 10 <span class="token operator">*</span> <span class="token variable">$n</span><span class="token punctuation">,</span>255<span class="token punctuation">,</span> <span class="token variable">$n</span> <span class="token operator">*</span> 0.02<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> <span class="token variable">$n</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
    <span class="token selector">25% </span><span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token selector">50% </span><span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token selector">75% </span><span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token selector">100% </span><span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

&lt;/style&gt;
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div></details>`,2),h=s("h2",{id:"grid\u5E03\u5C40-\u778E\u5199",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#grid\u5E03\u5C40-\u778E\u5199","aria-hidden":"true"},"#"),o(" grid\u5E03\u5C40 \u778E\u5199")],-1),v=s("h2",{id:"css-\u6E10\u53D8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#css-\u6E10\u53D8","aria-hidden":"true"},"#"),o(" css \u6E10\u53D8")],-1),m=s("p",null,"\u6E10\u53D8\u8272\u5F69\u5B9E\u9645\u4E0A\u4E0D\u662F\u989C\u8272\uFF08color\uFF09\uFF0C\u800C\u662F\u56FE\u50CF\uFF08image\uFF09\u5BF9\u8C61\uFF0C\u901A\u5E38\u7528\u6765\u4F5C\u4E3A\u5143\u7D20\u80CC\u666F\u3002",-1),f=c(`<div class="custom-container tip"><p class="custom-container-title">linear-gradient\u8BED\u6CD5</p><pre>linear-gradient( 
  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ,]? &lt;color-stop&gt; [, &lt;color-stop&gt;]+ )
  \\---------------------------------/ \\----------------------------/
              \u6E10\u53D8\u8F74\u7EBF\u7684\u5B9A\u4E49                 \u989C\u8272\u505C\u6B62\u70B9\u7684\u5B9A\u4E49  

<code>&lt;side-or-corner&gt;</code> = [left | right] || [top | bottom]
<code>&lt;color-stop&gt;</code> = &lt;color&gt; [ &lt;percentage&gt; | &lt;length&gt; ]?
</pre></div><details class="custom-container details"><summary>\u56FE\u4E8C</summary><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pug<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
.demo3-1 
    p linear-gradient(to left ,red,green)
center \u56FE\u4E00
.degbox
    - for (var i = 1; i &lt;= 36; i++)
            .deg 
center \u56FE\u4E8C
.moreColor
center \u56FE\u4E09 \u6DFB\u52A0\u66F4\u591A\u7684\u989C\u8272
.moreColor.percent background: linear-gradient(45deg, #000000 0 ,#111111 10%,#222222 20%,#333333 30%,#444444 40%,#555555 50%,#aaaaaa 100%);
.moreColor.same background: linear-gradient(45deg, #000000 0 ,#111111 10%,#aaaaaa 100%);
center \u4E0A\u9762\u4E24\u4E2A\u56FE\u4E0D\u4E00\u6837

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.demo3-1,.moreColor</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left <span class="token punctuation">,</span>red<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.moreColor</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>red<span class="token punctuation">,</span>blue<span class="token punctuation">,</span>green<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>pink<span class="token punctuation">,</span>gray<span class="token punctuation">,</span>black<span class="token punctuation">,</span>white<span class="token punctuation">,</span>#ff00ff<span class="token punctuation">,</span>#665544<span class="token punctuation">,</span>#123456<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> .5<span class="token punctuation">;</span>
    <span class="token selector">&amp;.percent</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
            45deg<span class="token punctuation">,</span> #000000 0 <span class="token punctuation">,</span>#111111 10%<span class="token punctuation">,</span>#222222 20%<span class="token punctuation">,</span>#333333 30%<span class="token punctuation">,</span>#444444 40%<span class="token punctuation">,</span>#555555 50%<span class="token punctuation">,</span>#aaaaaa 100%
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;.same</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
            45deg<span class="token punctuation">,</span> #000000 0 <span class="token punctuation">,</span>#111111 10%<span class="token punctuation">,</span>#aaaaaa 100%
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.degbox</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.deg</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 6em<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 16.6%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

$<span class="token property">n</span><span class="token punctuation">:</span> 36<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@while</span> $n &gt; 0</span> <span class="token punctuation">{</span>
    <span class="token selector">.deg:nth-child(#</span><span class="token punctuation">{</span>$n<span class="token punctuation">}</span><span class="token selector">)</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>$n * 10deg<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">rgba</span><span class="token punctuation">(</span>10 * $n<span class="token punctuation">,</span> 255 - 10 * $n<span class="token punctuation">,</span> <span class="token function">random</span><span class="token punctuation">(</span>255<span class="token punctuation">)</span><span class="token punctuation">,</span> $n * 0.02<span class="token punctuation">)</span><span class="token punctuation">,</span>#ff99ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    $<span class="token property">n</span><span class="token punctuation">:</span> $n - 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h2 id="\u900F\u660E\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u900F\u660E\u8FB9\u6846" aria-hidden="true">#</a> \u900F\u660E\u8FB9\u6846</h2>`,3);function y(b,_){const a=e("css-demo"),t=e("ClientOnly");return u(),i("div",null,[r,d,n(t,null,{default:p(()=>[n(a,{cssPractice:"demo1-1"})]),_:1}),g,n(t,null,{default:p(()=>[n(a,{cssPractice:"demo2-1"})]),_:1}),h,n(t,null,{default:p(()=>[n(a,{cssPractice:"demo2-2"})]),_:1}),v,m,n(t,null,{default:p(()=>[n(a,{cssPractice:"demo3-1"})]),_:1}),f,n(t,null,{default:p(()=>[n(a,{cssPractice:"demo3-2"})]),_:1})])}var $=l(k,[["render",y],["__file","cssDemo.html.vue"]]);export{$ as default};
