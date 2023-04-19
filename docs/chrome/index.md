# Chrome

## Resource Scheduling

### Queueing 排队

浏览器在以下情况下将请求排队

- 请求被渲染引擎推迟，因为它被认为比关键资源（如脚本/样式）的优先级低。这经常发生在 images（图像） 上
- 请求被搁置，在等待一个即将被释放的不可用的 TCP socket
- 请求被搁置，浏览器对同一域名下的 TCP 同时连接数有限制，Chrome 通常是 6
- 生成磁盘缓存条目所用的时间

### 解决方法

- [域名分片](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain_sharding)
- http/2

### 参考资料
https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation

## QuotaExceededError: The quota has been exceeded
### 可能原因
`sessionStorage` 内存超出限制

### 测试 storage大小
经测试，iphone的safari浏览器和windows10 的google浏览器 [测试](http://dev-test.nemikor.com/web-storage/support-test/)的`sessionStorage` 容量都为5m，但是safari会报错，google不会
