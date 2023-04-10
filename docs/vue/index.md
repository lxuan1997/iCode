# Hello Vue

## 一些技巧
####  使用 keep-alive 和 路由的 meta 属性 进行页面缓存

:::warning
`v-if` 不要设置在 `<keep-alive>` 上
:::
:::: code-group
::: code-group-item App.vue
```vue
<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </div>
</template>
```
:::
::: code-group-item router.js
```js
const routes = [
  {
    path: '/cache',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/no-cache',
    meta: {
      keepAlive: false
    }
  }
]
```
:::

::::

## 一些报错
### vue-cli 依赖 webpack5 后 Can't resolve 'path'

```shell
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
        - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "path": false }
```

#### 原因
从 Webpack 5 开始不再自动填充Node.js 核心模块的 polyfills，而会专注于前端模块兼容，提高 web 平台的兼容性。([官方解释](https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed))

#### 解决方法
1. 安装 `path-browserify` 模块
``` bash
npm install path-browserify
```
2. 修改 `vue.config.js` 配置
``` js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify")
      }
    }
  }
})

```

### 安裝sass、sass-loader 时报错 getOptions ..
调整sass 、sass-loader 版本，参考vue cli 初始化项目配置sass(dart-sass)时的配置
```json
{
  "devDependencies": {
    "sass": "^1.26.5",
    "sass-loader": "^8.0.2"
  }
}

```

### ant-design-vue less Inline JavaScript is not enabled
```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true // ✅
      }
    }
  }
}
```

### 打包时报错 Invalid regular expression
将相关正则表达式的双斜线格式写法 改为 new RegExp() 写法


### 使用dart-sass后，elementui 打包后的图标乱码
``` js vue.config.js
module.exports = {
  css: {
    // 避免dart-sass将伪元素中的字符集转义
    loaderOptions: {
      sass: {
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  }
}
```


## 官方文档

- [vue2](https://cn.vuejs.org/index.html)
- [vue3](https://v3.cn.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/zh/)
- [Vue Router](https://router.vuejs.org/zh/)
