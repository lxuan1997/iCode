# GitHub Actions

## 使用示例

### 从bing.com抓取每日一图

::: code-tabs
@tab node.yml

```yml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '30 0 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [ 14.x ]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm run start --if-present
      - name: Commit git
        run: |
          git config --local user.email 'lxuan2497@gmail.com'
          git config --local user.name 'lxuan'
          git pull
          git add README.md
          git commit -m 'update README.md'
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: main

```

@tab fileUtils.js

```js
const fs = require('fs');
const README_PATH = 'README.md'

// 获取今天日期
function getToday() {
    let T = new Date(),
        year = T.getFullYear(),
        month = T.getMonth() + 1,
        day = T.getDate();
    month = month >= 10 ? month : '0' + month
    day = day > 10 ? day : '0' + day
    return `${year}-${month}-${day}`
}

// 壁纸更新
function updateWallPaper(url, copyright) {
    fs.readFile(README_PATH, {
        encoding: 'utf-8',
        flag: 'r+'
    }, (err, data) => {
        if (err) throw err;
        console.log('data', data)
        let day = getToday()
        let md = `## ${day}\n![image](${url})[${copyright}](${url})\n`
        fs.writeFile(README_PATH, md + data, (err) => {
            if (err) throw err;
        })
    })
}

module.exports = {
    updateWallPaper
}
```

@tab index.js

```js
const fetch = require('node-fetch');
const {updateWallPaper} = require('./fileUtil.js');
const BASE_URL = 'https://www.bing.com';

fetch('https://www.bing.com/HPImageArchive.aspx?idx=0&n=1&format=js&pid=HpEdgeAn&mkt=zh-cn')
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        let data = json.images[0]
        const {
            url,
            copyright
        } = data
        updateWallPaper(BASE_URL + url, copyright)
    })

```

:::
