---
title: Pinia
---
# Pinia 

## Pinia是什么？

Vue的专属状态管理库，同时支持 Vue2 和 Vue3。代替Vuex的官方推荐方案。

更简单的API，支持组合式API风格，提供可靠的 TypeScript 类型推断支持。

## 对比Vuex

- 弃用 `mutation`
- 无需要创建自定义的复杂包装器来支持 TypeScript
- 无需要动态添加 Store，它们默认都是动态的
- 没有可命名模块（namespaced：true）
- 可以使用多个 store（目录一般命名文 `stores`），而不是 Vuex 的单一 store（Pinia和Vuex可以同时使用）。

## 核心概念

### Store
::: tip
推荐使用Store的名字，组合式函数风格命名，如 `useUserStore`
:::
```js
import {defineStore} from 'pinia'

// user 应该是你的应用中的唯一id
export const useUserStore = defineStore('user', {
    // 其他配置...
})
```

#### 选项式/组合式 语法
|Store|选项式（data）|组合式（setup）|
|-|-|-|
|state|data|ref()|
|getters|computed|computed()|
|action|methods|function()|

### Getter

### Action
