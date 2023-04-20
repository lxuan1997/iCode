import{_ as a,p as e,q as n,a1 as s}from"./framework-9bc128ed.js";const t={},r=s(`<h1 id="相关插件" tabindex="-1"><a class="header-anchor" href="#相关插件" aria-hidden="true">#</a> 相关插件</h1><h2 id="vue-draggable" tabindex="-1"><a class="header-anchor" href="#vue-draggable" aria-hidden="true">#</a> vue-draggable</h2><h4 id="设置元素不可拖动" tabindex="-1"><a class="header-anchor" href="#设置元素不可拖动" aria-hidden="true">#</a> 设置元素不可拖动</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;.draggable-item&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="vue-treeselect" tabindex="-1"><a class="header-anchor" href="#vue-treeselect" aria-hidden="true">#</a> vue-treeselect</h2><h4 id="限制只能选择叶子节点" tabindex="-1"><a class="header-anchor" href="#限制只能选择叶子节点" aria-hidden="true">#</a> 限制只能选择叶子节点</h4><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-treeselect</span> <span class="token attr-name">:disabled-branch-nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="qrcode" tabindex="-1"><a class="header-anchor" href="#qrcode" aria-hidden="true">#</a> qrcode</h2><h2 id="html2canvas" tabindex="-1"><a class="header-anchor" href="#html2canvas" aria-hidden="true">#</a> html2canvas</h2><h2 id="jspdf" tabindex="-1"><a class="header-anchor" href="#jspdf" aria-hidden="true">#</a> jsPDF</h2><h4 id="宽高问题" tabindex="-1"><a class="header-anchor" href="#宽高问题" aria-hidden="true">#</a> 宽高问题</h4><p>按照 <code>new jsPDF()</code> 默认创建的文档，当图片宽度大于高度时，使用 <code>addImage</code> 向文档中添加图片会导致图片的宽度显示不完全，需要在初始化文档时，根据图片宽高调整 <code>orientation</code> ，宽度 &gt; 高度 时，使用 <code>l (landscape)</code>，高度 &gt; 宽度 时，使用 <code>p (portrait)</code></p><h4 id="px-pt单位转换问题" tabindex="-1"><a class="header-anchor" href="#px-pt单位转换问题" aria-hidden="true">#</a> px pt单位转换问题</h4><p>1pt = 1/72 英寸 1px = 1/96 英寸 大约 0.75 换算比例，即 <code>1pt = 0.75px</code></p><h2 id="cron-表达式" tabindex="-1"><a class="header-anchor" href="#cron-表达式" aria-hidden="true">#</a> cron 表达式</h2><h4 id="vue-cron" tabindex="-1"><a class="header-anchor" href="#vue-cron" aria-hidden="true">#</a> vue-cron</h4><h4 id="vcrontab-✅支持反向解析" tabindex="-1"><a class="header-anchor" href="#vcrontab-✅支持反向解析" aria-hidden="true">#</a> VCrontab(✅支持反向解析)</h4><h2 id="luckysheet" tabindex="-1"><a class="header-anchor" href="#luckysheet" aria-hidden="true">#</a> luckysheet</h2>`,18),c=[r];function d(o,p){return e(),n("div",null,c)}const i=a(t,[["render",d],["__file","packages.html.vue"]]);export{i as default};