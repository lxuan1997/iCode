import{_ as a,p as s,q as n,a1 as e}from"./framework-9bc128ed.js";const t={},r=e(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><h2 id="拉取" tabindex="-1"><a class="header-anchor" href="#拉取" aria-hidden="true">#</a> 拉取</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre></div><h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推动&lt;branch&gt;分支代码至&lt;remote&gt;仓库，如 git push origin master </span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># 推送所有分支代码</span>
<span class="token function">git</span> push

<span class="token comment">##</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span>
</code></pre></div><h2 id="查看git所有配置" tabindex="-1"><a class="header-anchor" href="#查看git所有配置" aria-hidden="true">#</a> 查看git所有配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre></div><h2 id="检查文件状态" tabindex="-1"><a class="header-anchor" href="#检查文件状态" aria-hidden="true">#</a> 检查文件状态</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
<span class="token function">git</span> status <span class="token parameter variable">-s</span>
</code></pre></div><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>shortname 仓库简写 url 仓库地址</p></div><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre></div><h3 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
</code></pre></div><h3 id="重命名" tabindex="-1"><a class="header-anchor" href="#重命名" aria-hidden="true">#</a> 重命名</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>old_shortname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new_shortname<span class="token operator">&gt;</span>
</code></pre></div><h3 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote remove <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span>
</code></pre></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><h3 id="查看分支列表" tabindex="-1"><a class="header-anchor" href="#查看分支列表" aria-hidden="true">#</a> 查看分支列表</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre></div><h3 id="创建并切换分支" tabindex="-1"><a class="header-anchor" href="#创建并切换分支" aria-hidden="true">#</a> 创建并切换分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地删除</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># 远程删除</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre></div>`,32),o=[r];function c(p,l){return s(),n("div",null,o)}const d=a(t,[["render",c],["__file","commands.html.vue"]]);export{d as default};
