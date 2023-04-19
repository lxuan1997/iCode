# 💡Tips 

## 数据类型
#### 基本类型/简单类型/原始类型
string、number、boolean、undefined、null、symbol

#### 复杂类型
object

## 判断是否为空对象

```js
JSON.stringify({}) === '{}'
Object.keys({}).length === 0
```

## 判断是否为数组

```js
Object.prototype.toString.call([]) === '[object Array]'

Array.isArray([]) // true
```

## encodeURI 与 encodeURIComponent

encodeURI 一般用于完整的URI，encodeURIComponent 一般用于 URI 组件

```
: , ; @ / ? & = + $  // 保留字符
- _ . ! ~ * ' ( )    // 不转义字符 🎯
A-Z a-z 0-9          // 字母、数字 🎯
#                	 // 数字标志
```

对于以上字符，encodeURI 都不会进行编码；encodeURIComponent 除不转义字符、字母、数字外，其余的都会被编码；对于空格，两种方法编码一个空格时都会转换成
%20；

## ios系统使用new Date显示NaN

将分隔符`-` 替换成 `/`

```js
// 2022-09-01 08:00:00 => 2022/09/01 08:00:00
str.replace('-', '/')
```

## video 停止播放

> video有`play`播放，`pause`暂停，没有`stop`事件，可以通过`pause`事件模拟实现

```js
function stop() {
    video.pause()
    video.currentTime = 0
}
```

## 如何监听浏览器打开了控制台

```js
const re = new RegExp();
console.log(re);
re.toString = function () {
    alert("请关闭控制台");
};
```
