# Tips
## 使用 keep-alive 和 路由的 meta 属性 进行页面缓存
:::warning
`v-if` 不要设置在 `<keep-alive>` 上
:::
::: code-tabs
@tab App.vue
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

@tab router.js
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
