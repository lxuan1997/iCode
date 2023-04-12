# 在vue3中使用fabric

## 基本用法

::: vue-playground Demo

@file App.vue

```vue
<script setup>
import {onMounted, ref, markRaw} from 'vue'
import {fabric} from 'fabric'

const canvas = ref()

onMounted(() => {
  // 💡需使用markRaw
  canvas.value = markRaw(new fabric.Canvas('canvas', {
    width: 300,
    height: 200,
    backgroundColor: '#f1f1f1'
  }))
  addTextbox()
})

function addTextbox() {
  const text = new fabric.Textbox('Hello fabric', {
    top: 10,
    left: 10,
    width: 100,
    fontSize: 16,
    fill: '#3eaf7c',
  })
  canvas.value.add(text)
}
</script>
<template>
  <canvas id="canvas"/>
</template>
```

@import

```json
{
  "imports": {
    "fabric": "https://cdn.jsdelivr.net/npm/fabric@5.3.0/+esm"
  }
}
```

:::

## 功能扩展

### 画布添加元素
```js
// 只能生成一种类型 如Rect
function addRect() {
    const rect = new fabric.Rect({
        // options
    })
    canvas.add(rect)
}

// 可批量生成各种类型
function addObjectbyType(type, data) {
    const klass = fabric.util.getKlass(type, '')
    klass.fromObject(data, (obj) => {
        canvas.add(obj)
        canvas.requestRenderAll()
    })
}
```

### 画布元素编组、取消编组

```js
// 编组
function group() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    if (activeObject.type !== 'activeSelection') {
        return
    }
    activeObject.toGroup()
    canvas.requestRenderAll()
}

// 取消编组
function unGroup() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    if (activeObject.type !== 'group') {
        return
    }
    activeObject.toActiveSelection()
    canvas.requestRenderAll()
}
```

### 调整画布元素层级

```js
// 移至顶层
function bringToFront() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    activeObject.bringToFront()
}

// 移至底层
function sendToBack() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    const index = canvas.freeLayerIndexMinLimit || 0
    activeObject.sendToBack()
}

// 往上一层
function bringForward() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    activeObject.bringForward()
}

// 往下一层
function sendBackwards() {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    activeObject.sendBackwards()
}

// 指定层级
function moveTo(index) {
    const activeObject = canvas.getActiveObject()
    if (!activeObject) {
        return
    }
    activeObject.moveTo(index)
}
```

### 画布视图自适应
::: tip
参考：[https://www.hangge.com/blog/cache/detail_1861.html](https://www.hangge.com/blog/cache/detail_1861.html)
:::
```js
import {fabric} from 'fabric'

export const useZoomToFit = (canvas) => {
    const objects = canvas.getObjects()
    let minX, minY, maxX, maxY
    if (objects.length > 0) {
        let rect = objects[0].getBoundingRect()
        minX = rect.left
        minY = rect.top
        maxX = rect.left + rect.width
        maxY = rect.top + rect.height
        for (let i = 1; i < objects.length; i++) {
            rect = objects[i].getBoundingRect()
            minX = Math.min(minX, rect.left)
            minY = Math.min(minY, rect.top)
            maxX = Math.max(maxX, rect.left + rect.width)
            maxY = Math.max(maxY, rect.top + rect.height)
        }
    }

    // 计算平移坐标
    const panX = (maxX - minX - canvas.width) / 2 + minX
    const panY = (maxY - minY - canvas.height) / 2 + minY
    // 开始平移
    canvas.absolutePan({
        x: panX,
        y: panY
    })

    // 计算缩放比例
    const zoom = Math.min(canvas.width / (maxX - minX), canvas.height / (maxY - minY))
    // 计算缩放中心
    const zoomPoint = new fabric.Point(canvas.width / 2, canvas.height / 2)
    console.log('zoom', zoom, zoomPoint)
    // 开始缩放
    canvas.zoomToPoint(zoomPoint, zoom)
}
```
