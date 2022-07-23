# Nginx 
### cookie path 
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