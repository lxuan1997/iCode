import{_ as t,M as p,p as o,q as l,R as s,t as a,N as c,a1 as n}from"./framework-9bc128ed.js";const r={},i=n(`<h1 id="bugs" tabindex="-1"><a class="header-anchor" href="#bugs" aria-hidden="true">#</a> Bugs</h1><h2 id="vue-cli-依赖-webpack5-后-can-t-resolve-path" tabindex="-1"><a class="header-anchor" href="#vue-cli-依赖-webpack5-后-can-t-resolve-path" aria-hidden="true">#</a> vue-cli 依赖 webpack5 后 Can&#39;t resolve &#39;path&#39;</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>BREAKING CHANGE: webpack <span class="token operator">&lt;</span> <span class="token number">5</span> used to include polyfills <span class="token keyword">for</span> node.js core modules by default.
This is no longer the case. Verify <span class="token keyword">if</span> you need this module and configure a polyfill <span class="token keyword">for</span> it.

If you want to include a polyfill, you need to:
        - <span class="token function">add</span> a fallback <span class="token string">&#39;resolve.fallback: { &quot;path&quot;: require.resolve(&quot;path-browserify&quot;) }&#39;</span>
        - <span class="token function">install</span> <span class="token string">&#39;path-browserify&#39;</span>
If you don&#39;t want to include a polyfill, you can use an empty module like this:
        resolve.fallback: <span class="token punctuation">{</span> <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
</code></pre></div><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4>`,4),u={href:"https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed",target:"_blank",rel:"noopener noreferrer"},d=n(`<h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><ol><li>安装 <code>path-browserify</code> 模块</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> path-browserify
</code></pre></div><ol start="2"><li>修改 <code>vue.config.js</code> 配置</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vue/cli-service&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;path-browserify&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="安裝sass、sass-loader-时报错-getoptions" tabindex="-1"><a class="header-anchor" href="#安裝sass、sass-loader-时报错-getoptions" aria-hidden="true">#</a> 安裝sass、sass-loader 时报错 getOptions ..</h2><p>调整sass 、sass-loader 版本，参考vue cli 初始化项目配置sass(dart-sass)时的配置</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.26.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sass-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="ant-design-vue-less-inline-javascript-is-not-enabled" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-less-inline-javascript-is-not-enabled" aria-hidden="true">#</a> ant-design-vue less Inline JavaScript is not enabled</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// ✅</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="打包时报错-invalid-regular-expression" tabindex="-1"><a class="header-anchor" href="#打包时报错-invalid-regular-expression" aria-hidden="true">#</a> 打包时报错 Invalid regular expression</h2><p>将相关正则表达式的双斜线格式写法 改为 new RegExp() 写法</p><h2 id="element-ui-使用dart-sass-打包后页面图标乱码" tabindex="-1"><a class="header-anchor" href="#element-ui-使用dart-sass-打包后页面图标乱码" aria-hidden="true">#</a> Element-UI 使用dart-sass，打包后页面图标乱码</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 避免dart-sass将伪元素中的字符集转义</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sassOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">outputStyle</span><span class="token operator">:</span> <span class="token string">&#39;expanded&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14);function k(h,g){const e=p("ExternalLinkIcon");return o(),l("div",null,[i,s("p",null,[a("从 Webpack 5 开始不再自动填充Node.js 核心模块的 polyfills，而会专注于前端模块兼容，提高 web 平台的兼容性。("),s("a",u,[a("官方解释"),c(e)]),a(")")]),d])}const y=t(r,[["render",k],["__file","bugs.html.vue"]]);export{y as default};
