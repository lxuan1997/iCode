# Css

#### css 变量

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

#### backdrop-filter 与 filter

`backdrop-filter` 将模糊或颜色偏移等图形效果添加至该元素的后面区域

`filter` 将模糊或颜色偏移等图形效果添加至该元素

#### flex 与 text-overflow: ellipsis 冲突

#### 网页变灰

> 利用 css3 的 `filter` 属性

```css
html {
  filter: grayscale(100%);
}
```

#### 文本溢出显示省略号

##### 单行

> 需指定容器的宽度

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

##### 多行（只兼容 webkit 内核浏览器）

```css
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

