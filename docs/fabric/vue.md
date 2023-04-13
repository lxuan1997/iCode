# 在vue中使用fabric

## 基本用法

::: vue-playground vue@3.2.47 + fabric@5.3.0

@file App.vue

```vue

<script setup>
import {onMounted, ref, markRaw} from 'vue'
import {fabric} from 'fabric'

let canvas

onMounted(() => {
  // 💡需使用markRaw
  canvas = markRaw(new fabric.Canvas('canvas', {
    width: 350,
    height: 242,
    backgroundColor: '#f1f1f1'
  }))
  addTextbox()
  addRect()
  addCircle()
})

function addTextbox() {
  const text = new fabric.Textbox('Hello fabric', {
    top: 20,
    left: 20,
    width: 100,
    fontSize: 16,
    fill: '#3eaf7c',
  })
  canvas.add(text)
}

function addRect() {
  const rect = new fabric.Rect({
    top: 100,
    left: 100,
    fill: 'orange',
    width: 50,
    height: 50
  })
  canvas.add(rect)
}

function addCircle() {
  const circle = new fabric.Circle({
    radius: 30,
    fill: '#4FC3F7',
    top: 30,
    left: 100,
    opacity: 0.7,
    stroke: 'blue',
    strokeWidth: 3,
    strokeUniform: true
  })
  canvas.add(circle)
  canvas.requestRenderAll()
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

## 常用功能

### 添加元素

```js
// 只能生成一种类型 如Rect
function addRect() {
    const rect = new fabric.Rect({
        // options
    })
    canvas.add(rect)
    canvas.requestRenderAll()
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

### 添加svg

```js
// svg地址加载
function loadSVGFromURL(url) {
    fabric.loadSVGFromURL(url, (objects) => {
        const group = new fabric.Group(objects, {
            // options
        })
        canvas.add(group)
        canvas.requestRenderAll()
    })
}

// svg字符串加载
function loadSVGFromString(str) {
    fabric.loadSVGFromString(str, (objects) => {
        const group = new fabric.Group(objects, {
            // options
        })
        canvas.add(group)
        canvas.requestRenderAll()
    })
}
```

### 添加图片

```js
function addImage(url) {
    fabric.Image.fromURL(url, (image) => {
        const {width} = image
        const initialScale = 200 / width
        image.set({
            scaleX: initialScale,
            scaleY: initialScale,
            // options
        })
        canvas.add(image)
        canvas.setActiveObject(image)
    })
}
```

### 画布数据导入、导出

```js
// 导入
function dataImport(data) {
    canvas.loadFromJSON(data, () => {
        // callback
    })
}

// 导出
function dataExport() {
    return canvas.toJSON()
}
```

### 画布保存为图片

```js
// 图片形式
function saveAsImage() {
    const dataUrl = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.download = '画布.png'
    link.href = dataUrl
    link.click()
}
```

### 元素编组、取消编组

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

### 调整元素层级

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

### 视图自适应

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

## 拓展功能

### 自定义Control

```js
// 统一隐藏控制  ['mb', 'ml', 'mr', 'mt', 'mtr']
const hiddenControls = ['mtr']
hiddenControls.forEach(item => {
    fabric.Object.prototype.controls[item].visible = false
})
fabric.Object.prototype.transparentCorners = false
fabric.Object.prototype.cornerSize = 8


fabric.Textbox.prototype.controls = {}

// 类型单独设置
fabric.Rect.prototype.controls = {}
fabric.Textbox.prototype.controls = {}
```

### 自定义属性导出

::: tip
参考：[https://github.com/fabricjs/fabric.js/wiki/How-to-set-additional-properties-in-all-fabric.Objects](https://github.com/fabricjs/fabric.js/wiki/How-to-set-additional-properties-in-all-fabric.Objects)
:::

```js
const originalToObject = fabric.Object.prototype.toObject;
const myAdditional = ['id'];
fabric.Object.prototype.toObject = function (additionalProperties) {
    return originalToObject.call(this, myAdditional.concat(additionalProperties));
}

```

### 文本组合图形

::: tip
组合图形本质上是通过`fabric.Group`实现，以文本框加矩形`Textbox + Rect`为例

需要注意的是`Textbox`在`Group`内是无法进行编辑的，需要另外编写代码实现组合图形内的文本编辑；

- [x] [JELLY | 图形编程 Fabric.js 复合图形实现记录](https://jelly.jd.com/article/6151e9512685d0019947558d)
- [x] [JELLY | 聊聊 fabric.js Group 对象](https://jelly.jd.com/article/62bd77e952d2600188a9fdac)
- [x] v6版本`Group`将重写，`Group`内`Textbox`编辑功能不受影响，[beta预览](http://jsfiddle.net/qxdk4h9L/2/)

:::

::: code-tabs#js
@tab RectText.class.js

```js
import {fabric} from 'fabric'
import {v4 as uuid} from "uuid";
import {TempText} from './tempText.mixin'

const DEFAULT_SHAPE_PADDING_X = 8

fabric.RectText = fabric.util.createClass(fabric.Group, {
    type: 'rect-text',
    width: 60,
    height: 40,
    fill: '#666666',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 1,
    stroke: '#000000',
    subTargetCheck: true,
    initialize: function (options, isAlreadyGrouped) {
        options = options || {}
        options.id = options.id || uuid()
        options.width = options.width || this.width
        options.height = options.height || this.height
        options.fill = options.fill || this.fill
        options.fontSize = options.fontSize || this.fontSize
        options.textAlign = options.textAlign || this.textAlign
        options.lineHeight = options.lineHeight || this.lineHeight
        options.stroke = options.stroke || this.stroke
        options.strokeWidth = options.strokeWidth || 2
        const {objects, ...restOptions} = options || {}

        const {
            id, width, height, fill, fontSize, textAlign, lineHeight, stroke, strokeWidth
        } = options
        const defaultShapeOptions = {
            type: 'rect',
            width,
            height,
            fill: '',
            stroke,
            strokeWidth
        }
        const defaultTextOptions = {
            type: 'textbox',
            width: width - DEFAULT_SHAPE_PADDING_X,
            fontSize,
            fill,
            textAlign,
            lineHeight,
            stroke: null,
            strokeWidth: 0,
            originX: 'center',
            originY: 'center'
        }
        options.objects = options.objects || [
            defaultShapeOptions,
            defaultTextOptions
        ]

        const shapeOptions = objects[0] || defaultShapeOptions
        const textOptions = objects[1] || defaultTextOptions

        shapeOptions.width = width
        shapeOptions.height = height
        shapeOptions.fill = shapeOptions.fill || ''
        shapeOptions.stroke = shapeOptions.stroke || stroke
        shapeOptions.strokeWidth = shapeOptions.strokeWidth || strokeWidth

        let shape = new fabric.Rect({
            ...shapeOptions,
            id: id + '_rect',
            left: 0,
            top: 0,
            strokeUniform: true,
        })

        textOptions.text = textOptions.text || ''
        textOptions.width = width - strokeWidth * 2
        textOptions.fill = textOptions.fill || fill
        textOptions.fontSize = textOptions.fontSize || fontSize
        textOptions.textAlign = textOptions.textAlign || textAlign
        textOptions.lineHeight = textOptions.lineHeight || lineHeight

        let text = new fabric.Textbox(textOptions.text, {
            ...textOptions,
            id: id + '_text',
            top: (height + strokeWidth) / 2,
            left: (width + strokeWidth) / 2,
            stroke: null,
            strokeWidth: 0,
            splitByGrapheme: true,
            strokeUniform: true,
            originX: 'center',
            originY: 'center'
        })
        let group = [shape, text]
        this.callSuper('initialize', group, {
            ...restOptions,
            strokeWidth: 0,
            strokeUniform: true,
            // useSetOnGroup: true,
        }, isAlreadyGrouped)

        this.on('mousedblclick', () => this.dblclickEditing())
    },
    _set: function (key, value) {
        var i = this._objects.length;
        if (this.useSetOnGroup) {
            while (i--) {
                this._objects[i].setOnGroup(key, value);
            }
        }
        if (key === 'canvas') {
            while (i--) {
                this._objects[i]._set(key, value);
            }
        }
        fabric.Object.prototype._set.call(this, key, value);
    },
    set: function (key, value) {
        this.callSuper('set', key, value)
    },
})
fabric.util.object.extend(fabric.RectText.prototype, TempText)
fabric.RectText.fromObject = function (object, callback) {
    return fabric.Object._fromObject('RectText', object, callback)
}
```

@tab tempText.mixin.js

```js
import {fabric} from "fabric";

export const TempText = {
    // 文字样式相关属性
    textStyleProperties: ['fill', 'fontSize', 'lineHeight', 'textAlign'],
    // 计算临时文本对象的变换
    calcTempTextTransform() {
        // const text = this.items(1)
        const text = this.getObjects('textbox')[0]
        // 便签矩阵
        const groupMatrix = this.calcTransformMatrix()
        // 便签矩阵逆变换
        const invertMatrix = fabric.util.invertTransform(groupMatrix)
        // 文本矩阵
        const textMatrix = text.calcTransformMatrix()
        // 矩阵嵌套
        const desiredMatrix = fabric.util.multiplyTransformMatrices(invertMatrix, textMatrix, false)
        // 新的矩阵
        const newMatrix = fabric.util.multiplyTransformMatrices(groupMatrix, desiredMatrix, false)
        // 矩阵分解为变换量
        const qr = fabric.util.qrDecompose(newMatrix)
        return qr
    },
    // 计算临时文本对象的位置
    calcTempTextPosition() {
        let absoluteLeft, absoluteTop
        const text = this.getObjects('textbox')[0]
        const center = this.getCenterPoint()
        const textCenter = text.getCenterPoint()
        console.log('thisCenter', center)
        console.log('textCenter', textCenter)
        absoluteLeft = center.x + textCenter.x * text.scaleX
        absoluteTop = center.y + textCenter.y * text.scaleY
        const group = this.group
        if (group) {
            const {scaleX, scaleY} = group
            const groupCenter = group.getCenterPoint()
            console.log('groupCenter', groupCenter)
            absoluteLeft = absoluteLeft * scaleX + groupCenter.x
            absoluteTop = absoluteTop * scaleY + groupCenter.y
        }
        return {
            left: absoluteLeft,
            top: absoluteTop
        }
    },
    // 双击编辑文本方法
    dblclickEditing() {
        const text = this.getObjects('textbox')[0]
        // console.log('text', text)

        // 创建临时编辑文本复制对象
        let cloneText
        text.clone((obj) => {
            // console.log('clone', obj)
            let tempPath = '/' + this.id + '/' + obj.id
            let tempType = this.type
            if (this.group) {
                tempPath = '/' + this.group.id + tempPath
                tempType = this.group.type
            }
            // 标识为临时文本对象
            obj.id = 'temp_' + obj.id
            // 临时文本元素层级路径
            obj.tempPath = tempPath
            // 临时文本类型（顶层元素类型）
            obj.tempType = tempType
            const pos = this.calcTempTextPosition()
            const qr = this.calcTempTextTransform()
            obj.set({
                ...pos,
                ...qr
            })
            cloneText = obj
            // 原始文本对象暂时隐藏
            text.set('visible', false)
            // 开始编辑
            cloneText.on('editing:entered', () => {
                this.fireEvent('editing:entered', {
                    target: cloneText,
                    path: tempPath
                })
            })

            // 编辑中
            cloneText.on('changed', () => {
                const value = cloneText.text
                text.set('text', value)
                this.fireEvent('changed', {value})

            })
            cloneText.on('editing:exited', (e) => {
                // 退出编辑状态， 将临时文本对象text值赋给原始文本对象
                // console.log('editing:exited', cloneText.text)
                const {fontSize, fill} = cloneText
                text.set({
                    fontSize,
                    fill,
                    visible: true
                })
                // 移除临时文本对象
                this.canvas.remove(cloneText)
                this.canvas.requestRenderAll()

                this.fireEvent('editing:exited')
            })

            // 将临时文本对象加入画布，并激活，选中进入编辑态
            this.canvas.add(cloneText)
            this.canvas.setActiveObject(cloneText)
            cloneText.set('hasBorders', false)
            cloneText.selectAll()
            cloneText.enterEditing()
        })
    },
    fireEvent(type, payload) {
        this.canvas.fire('temp:text:' + type, payload)
    },
    setText(key, value) {
        if (typeof key === 'string') {
            if (['text', ...this.textStyleProperties].includes(key)) {
                if (!value) return
                if (key === 'text') {
                    this.setTextValue(value)
                }
                if (this.textStyleProperties.includes(key)) {
                    this.setTextStyle(key, value)
                }
            }
        } else if (typeof key === 'object') {
            for (const _key in key) {
                if (['text', ...this.textStyleProperties].includes(_key)) {
                    if (!key[_key]) return
                    if (_key === 'text') {
                        this.setTextValue(key[_key]);
                    }
                    if (this.textStyleProperties.includes(_key)) {
                        this.setTextStyle(_key, key[_key])
                    }
                }
            }
        }
    },
    /**
     * 设置文本值
     */
    setTextValue: function (value) {
        const text = this.getObjects('textbox')[0]
        text && text.set('text', value)
    },
    /**
     * 设置文本样式
     * @param key fill | fontSize
     * @param value
     */
    setTextStyle: function (key, value) {
        if (!value) return
        const text = this.getObjects('textbox')[0]
        text && text.set(key, value)
    },
}
```

:::
