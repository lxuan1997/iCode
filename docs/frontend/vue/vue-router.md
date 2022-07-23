# Vue Router

#### 空路径嵌套路由
```js
const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/user',
        name: 'user'
        component: User
      }
    ]
  }
]
```
这种情况下，`/user` 作为一个空路径的子路由，将会展示在 `Layout` 组件的 `<router-view>` 标签内

#### 通配符写法调整
```js
const routes = [
  {
    // path: '*',              // vue2
    path: '/:pathMatch(.*)*',  // vue3
    name: 'NotFound',
    component: () => import('./404.vue')
  }
]
