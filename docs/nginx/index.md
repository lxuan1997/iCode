---
title: Nginx
---

## Tips
- nginx 有 if 没有 else

## 反向代理到 Apache
nginx 监听 8000 端口，转发到 Apache 8081 端口

```conf
server {
  listen 8000;
  location / {
    proxy_pass http://localhost:8081;
  }
}
```

## cookie path 
``` conf
server {
    listen   8080;
    serve_name localhost

    location /api/ {
      proxy_pass  https://demo.kingpointshow.com/cloudbeaver/api/;
      proxy_cookie_path  /cloudbeaver /;
    }
}
```

## sub_filter 注入 js
``` conf
server {
  listen 8000;
  location / {
    #开启gzip的情况下，sub_filter将会失效，所以需置空
    proxy_set_header Accept-Encoding "";
    proxy_pass http://localhost:8081;
    sub_filter '<body/>'
    '
    <script>
      alert(123)
    </script>
    </body>
    ';
    sub_filter_types *;
    sub_filter_once off;
  }
}
```

## proxy_cookie_flags 修改cookie设置

``` conf
server {
  listen 8000;
  location / {
    # 去除 PHPSESSID 的 httponly 标志
    proxy_cookie_flags PHPSESSID nohttponly;
    proxy_pass http://localhost:8081;
  }
}
```
