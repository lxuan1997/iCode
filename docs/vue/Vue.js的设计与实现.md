--- 
title: Vue.js设计与实现 📖
---

## 学习笔记

### Chrome devtools
- console.warn

### dead code 永远不会被执行的代码
```js
if (false) {
  // ...
}
```

### Tree-Shaking 消除那些永远不会被执行的代码
想要实现 Tree-Shaking，必须满足一个条件，即模块必须是 ESM（ES Module），因为 Tree-Shaking 依赖 ESM 的静态结构

#### `__DEV__`
构建工具预定义的常量，表示是否为开发环境

#### 副作用
> 如果一个函数调用会产生副作用，那么就不能将其移除

简单地说，副作用就是，当调用函数的时候会对外部产生影响，例如修改了全局变量。
JavsScript本身是动态语言，想要静态分析哪些代码是 dead code 很有难度，到底会不会产生副作用，只有代码真正运行的时候才能知道

手动在代码前添加注释 `/*#__PURE__*/`，rollup.js、webpack等工具就能识别此段代码不会产生副作用


### 框架产物

#### 根据环境区分
- 开发环境
- 生产环境

#### 根据使用场景区分
- 在HTML页面使用 `<script>` 标签引入使用 —— IIFE（立即调用的函数表达式）
```js
(function () {
  // ...
})()
```

- 在HTML页面使用 `<script type="module">` 标签引入 —— ESM（-browser）
> 带有 -browser 的ESM资源是直接给 `<script type="module">` 使用的

```html
<script type="module" src="/path/to/vue.esm-browser.js"></script>
```


- 在rollup.js、webpack等构建工具使用 —— ESM（-bundler）
>带有 -bundler 的ESM资源是给 rollup.js 或 webpack 等打包工具使用的

rollup.js 或者 webpack，在寻找资源时，如果package.json 中存在 module 字段，那么会优先使用 module 字段指向的资源来代替 main 字段指向的资源
```json
{
  "main": "index.js",
  "module": "dist/vue.runtime.esm-bundler.js"
}
```

- 在Node.js 中通过 require 引用 - CommonJS


### 特性开关

### 错误处理
