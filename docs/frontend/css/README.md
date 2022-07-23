# Css

#### css 变量
``` css
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