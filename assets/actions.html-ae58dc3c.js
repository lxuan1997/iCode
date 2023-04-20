import{_ as s,M as e,p as t,q as o,R as a,t as p,N as c,a1 as r}from"./framework-9bc128ed.js";const i={},l=r(`<h1 id="一些操作" tabindex="-1"><a class="header-anchor" href="#一些操作" aria-hidden="true">#</a> 一些操作</h1><h2 id="将本地仓库上传至git" tabindex="-1"><a class="header-anchor" href="#将本地仓库上传至git" aria-hidden="true">#</a> 将本地仓库上传至git</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地仓库初始化</span>
<span class="token function">git</span> init

<span class="token comment"># 添加全部修改文件至暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交更改并备注相关提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;项目初始化&#39;</span>

<span class="token comment"># 连接到远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># 提交</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>shortname<span class="token operator">&gt;</span> master
</code></pre></div><h2 id="创建一个空分支" tabindex="-1"><a class="header-anchor" href="#创建一个空分支" aria-hidden="true">#</a> 创建一个空分支</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> switch <span class="token parameter variable">--orphan</span> <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
<span class="token function">git</span> commit --allow-empty <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit on orphan branch&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>

<span class="token comment"># 早些时候的操作</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> empty-branch
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit --allow-empty <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit on orphan branch&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
</code></pre></div><h2 id="查看-修改本地git用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#查看-修改本地git用户名和邮箱" aria-hidden="true">#</a> 查看/修改本地git用户名和邮箱</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看用户名</span>
<span class="token function">git</span> config user.name
<span class="token comment"># 修改用户名</span>
<span class="token function">git</span> config user.name <span class="token string">&#39;xxx&#39;</span>

<span class="token comment"># 查看邮箱</span>
<span class="token function">git</span> config user.name
<span class="token comment"># 修改邮箱</span>
<span class="token function">git</span> config user.email <span class="token string">&#39;xxx&#39;</span>
</code></pre></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>`,8),m={href:"https://gitee.com/help/articles/4284",target:"_blank",rel:"noopener noreferrer"};function h(k,u){const n=e("ExternalLinkIcon");return t(),o("div",null,[l,a("ul",null,[a("li",null,[a("a",m,[p("GitHub仓库快速导入Gitee及同步更新"),c(n)])])])])}const g=s(i,[["render",h],["__file","actions.html.vue"]]);export{g as default};
