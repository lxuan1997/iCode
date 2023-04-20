import{_ as e,p as a,q as n,a1 as o}from"./framework-9bc128ed.js";const t={},c=o(`<h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1><blockquote><p>nginx 有 if 没有 else</p></blockquote><h2 id="反向代理到-apache" tabindex="-1"><a class="header-anchor" href="#反向代理到-apache" aria-hidden="true">#</a> 反向代理到 Apache</h2><p>nginx 监听 8000 端口，转发到 Apache 8081 端口</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>server {
  listen 8000;
  location / {
    proxy_pass http://localhost:8081;
  }
}
</code></pre></div><h2 id="cookie-path" tabindex="-1"><a class="header-anchor" href="#cookie-path" aria-hidden="true">#</a> cookie path</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>server {
    listen   8080;
    serve_name localhost

    location /api/ {
      proxy_pass  https://demo.kingpointshow.com/cloudbeaver/api/;
      proxy_cookie_path  /cloudbeaver /;
    }
}
</code></pre></div><h2 id="sub-filter-注入-js" tabindex="-1"><a class="header-anchor" href="#sub-filter-注入-js" aria-hidden="true">#</a> sub_filter 注入 js</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>server {
  listen 8000;
  location / {
    #开启gzip的情况下，sub_filter将会失效，所以需置空
    proxy_set_header Accept-Encoding &quot;&quot;;
    proxy_pass http://localhost:8081;
    sub_filter &#39;&lt;body/&gt;&#39;
    &#39;
    &lt;script&gt;
      alert(123)
    &lt;/script&gt;
    &lt;/body&gt;
    &#39;;
    sub_filter_types *;
    sub_filter_once off;
  }
}
</code></pre></div><h2 id="proxy-cookie-flags-修改cookie设置" tabindex="-1"><a class="header-anchor" href="#proxy-cookie-flags-修改cookie设置" aria-hidden="true">#</a> proxy_cookie_flags 修改cookie设置</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>server {
  listen 8000;
  location / {
    # 去除 PHPSESSID 的 httponly 标志
    proxy_cookie_flags PHPSESSID nohttponly;
    proxy_pass http://localhost:8081;
  }
}
</code></pre></div>`,11),s=[c];function i(r,l){return a(),n("div",null,s)}const p=e(t,[["render",i],["__file","index.html.vue"]]);export{p as default};
