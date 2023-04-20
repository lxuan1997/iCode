import{_ as a,p as n,q as s,a1 as t}from"./framework-9bc128ed.js";const p={},e=t(`<h1 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h1><h4 id="空路径嵌套路由" tabindex="-1"><a class="header-anchor" href="#空路径嵌套路由" aria-hidden="true">#</a> 空路径嵌套路由</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> User
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>这种情况下，<code>/user</code> 作为一个空路径的子路由，将会展示在 <code>Layout</code> 组件的 <code>&lt;router-view&gt;</code> 标签内</p><h4 id="通配符写法调整" tabindex="-1"><a class="header-anchor" href="#通配符写法调整" aria-hidden="true">#</a> 通配符写法调整</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// path: &#39;*&#39;,              // vue2</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// vue3</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./404.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,6),o=[e];function r(c,l){return n(),s("div",null,o)}const i=a(p,[["render",r],["__file","vue-router.html.vue"]]);export{i as default};
