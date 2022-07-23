# 微信小程序

#### 动态绑定style、class只能是字符串，不可以为对象
``` wxml
<view style="color: 'red'; 'backgroundColor': 'green'"></view>
```

### 使用sass、less
// project.config.json
``` json
{
  "setting": {
    "useCompilerPlugins": [
      "less"
    ]
  }
}
```