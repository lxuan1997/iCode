---
title: Tips
---

## css 变量
```css
/** 定义 */
:root {
  --theme-color: #1abc9c;
}

/** 使用 */
.theme-text {
  color: var(--theme-color);
}
```

## 网页变灰
> 利用 css3 的 `filter` 属性
```css
html {
  filter: grayscale(100%);
}
```

## 文本溢出显示省略号
> 需指定容器的宽度
```css
/* 单行 */
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行只兼容 webkit 内核浏览器*/
.multline-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 指定行数
    -webkit-box-orient: vertical;
    white-space: normal !important;
    word-wrap: break-word;
}
```

## filter 与 backdrop-filter
> 模糊或颜色偏移等图形效果

|-|-|
|-|-|
|filter| 应用至该元素 |
|backdrop-filter| 应用至该元素的后面区域 |

## 去除input自动填充底色
```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  -webkit-background-clip: text;
}
```

## position: fixed不生效？
position: fixed 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 transform、perspective 或者 filter 样式属性。

## transition 不生效?
height/width 为auto值时，使用transition无法产生动画
