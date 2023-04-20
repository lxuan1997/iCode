import{_ as n,p as a,q as s,a1 as t}from"./framework-9bc128ed.js";const p={},e=t(`<h2 id="css-变量" tabindex="-1"><a class="header-anchor" href="#css-变量" aria-hidden="true">#</a> css 变量</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/** 定义 */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--theme-color</span><span class="token punctuation">:</span> #1abc9c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/** 使用 */</span>
<span class="token selector">.theme-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="网页变灰" tabindex="-1"><a class="header-anchor" href="#网页变灰" aria-hidden="true">#</a> 网页变灰</h2><blockquote><p>利用 css3 的 <code>filter</code> 属性</p></blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#文本溢出显示省略号" aria-hidden="true">#</a> 文本溢出显示省略号</h2><blockquote><p>需指定容器的宽度</p></blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 单行 */</span>
<span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 多行只兼容 webkit 内核浏览器*/</span>
<span class="token selector">.multline-ellipsis</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> // 指定行数
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> normal <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="filter-与-backdrop-filter" tabindex="-1"><a class="header-anchor" href="#filter-与-backdrop-filter" aria-hidden="true">#</a> filter 与 backdrop-filter</h2><blockquote><p>模糊或颜色偏移等图形效果</p></blockquote><table><thead><tr><th>-</th><th>-</th></tr></thead><tbody><tr><td>filter</td><td>应用至该元素</td></tr><tr><td>backdrop-filter</td><td>应用至该元素的后面区域</td></tr></tbody></table><h2 id="去除input自动填充底色" tabindex="-1"><a class="header-anchor" href="#去除input自动填充底色" aria-hidden="true">#</a> 去除input自动填充底色</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="position-fixed不生效" tabindex="-1"><a class="header-anchor" href="#position-fixed不生效" aria-hidden="true">#</a> position: fixed不生效？</h2><p>position: fixed 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 transform、perspective 或者 filter 样式属性。</p><h2 id="transition-不生效" tabindex="-1"><a class="header-anchor" href="#transition-不生效" aria-hidden="true">#</a> transition 不生效?</h2><p>height/width 为auto值时，使用transition无法产生动画</p>`,17),o=[e];function c(i,l){return a(),s("div",null,o)}const u=n(p,[["render",c],["__file","tips.html.vue"]]);export{u as default};
