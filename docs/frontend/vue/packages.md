# Vue 相关插件

## vue-draggable

#### 设置元素不可拖动
```js
data() {
  return {
    options: {
      draggable: '.draggable-item'
    }
  }
}
```

## vue-treeselect

#### 限制只能选择叶子节点
``` vue
<vue-treeselect :disabled-branch-nodes="true" />
```

## qrcode

## html2canvas

## jsPDF

#### 宽高问题
按照 `new jsPDF()` 默认创建的文档，当图片宽度大于高度时，使用 `addImage` 向文档中添加图片会导致图片的宽度显示不完全，需要在初始化文档时，根据图片宽高调整 `orientation` ，宽度 > 高度 时，使用 `l (landscape)`，高度 > 宽度 时，使用 `p (portrait)`


#### px pt单位转换问题
1pt = 1/72 英寸
1px = 1/96 英寸
大约 0.75 换算比例，即 `1pt = 0.75px`


## cron 表达式

#### vue-cron

#### VCrontab(✅支持反向解析)

## luckysheet