import{_ as p,M as u,p as l,q as i,N as k,U as a,a1 as r,R as n,t as s}from"./framework-9bc128ed.js";const d={},m=r('<h1 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h1><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><h3 id="从bing-com抓取每日一图" tabindex="-1"><a class="header-anchor" href="#从bing-com抓取每日一图" aria-hidden="true">#</a> 从bing.com抓取每日一图</h3>',3),g=n("div",{class:"language-yaml","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Node.js CI

`),n("span",{class:"token key atrule"},"on"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"push"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"branches"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),s(" main "),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token key atrule"},"pull_request"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"branches"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),s(" main "),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token key atrule"},"schedule"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"cron"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'30 0 * * *'"),s(`

`),n("span",{class:"token key atrule"},"jobs"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"build"),n("span",{class:"token punctuation"},":"),s(`

    `),n("span",{class:"token key atrule"},"runs-on"),n("span",{class:"token punctuation"},":"),s(" ubuntu"),n("span",{class:"token punctuation"},"-"),s(`latest

    `),n("span",{class:"token key atrule"},"strategy"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"matrix"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"node-version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),s(" 14.x "),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token comment"},"# See supported Node.js release schedule at https://nodejs.org/en/about/releases/"),s(`

    `),n("span",{class:"token key atrule"},"steps"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(` actions/checkout@v2
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" Use Node.js $"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" matrix.node"),n("span",{class:"token punctuation"},"-"),s("version "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(" actions/setup"),n("span",{class:"token punctuation"},"-"),s(`node@v1
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"node-version"),n("span",{class:"token punctuation"},":"),s(" $"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" matrix.node"),n("span",{class:"token punctuation"},"-"),s("version "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),s(` npm install
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),s(" npm run start "),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),s("if"),n("span",{class:"token punctuation"},"-"),s(`present
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Commit git
        `),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"|"),n("span",{class:"token scalar string"},`
          git config --local user.email 'lxuan2497@gmail.com'
          git config --local user.name 'lxuan'
          git pull
          git add README.md
          git commit -m 'update README.md'`),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Push changes
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(" ad"),n("span",{class:"token punctuation"},"-"),s("m/github"),n("span",{class:"token punctuation"},"-"),s("push"),n("span",{class:"token punctuation"},"-"),s(`action@master
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"github_token"),n("span",{class:"token punctuation"},":"),s(" $"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" secrets.GITHUB_TOKEN "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token key atrule"},"branch"),n("span",{class:"token punctuation"},":"),s(` main

`)])])],-1),y=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" fs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fs'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"README_PATH"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'README.md'"),s(`

`),n("span",{class:"token comment"},"// 获取今天日期"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getToday"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        year `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFullYear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        month `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        day `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    month `),n("span",{class:"token operator"},"="),s(" month "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" month "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),s(),n("span",{class:"token operator"},"+"),s(` month
    day `),n("span",{class:"token operator"},"="),s(" day "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" day "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),s(),n("span",{class:"token operator"},"+"),s(` day
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("year"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("month"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("day"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 壁纸更新"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"updateWallPaper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("url"),n("span",{class:"token punctuation"},","),s(" copyright")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"README_PATH"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"encoding"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'utf-8'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"flag"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'r+'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("err"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(" err"),n("span",{class:"token punctuation"},";"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'data'"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" day "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getToday"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" md "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"## "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("day"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\\n![image]("),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("url"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},")["),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("copyright"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"]("),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("url"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},")\\n"),n("span",{class:"token template-punctuation string"},"`")]),s(`
        fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"writeFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"README_PATH"),n("span",{class:"token punctuation"},","),s(" md "),n("span",{class:"token operator"},"+"),s(" data"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(" err"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    updateWallPaper
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),h=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" fetch "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node-fetch'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s("updateWallPaper"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./fileUtil.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"BASE_URL"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'https://www.bing.com'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://www.bing.com/HPImageArchive.aspx?idx=0&n=1&format=js&pid=HpEdgeAn&mkt=zh-cn'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"json"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// console.log(json)"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" data "),n("span",{class:"token operator"},"="),s(" json"),n("span",{class:"token punctuation"},"."),s("images"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
            url`),n("span",{class:"token punctuation"},","),s(`
            copyright
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` data
        `),n("span",{class:"token function"},"updateWallPaper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"BASE_URL"),s(),n("span",{class:"token operator"},"+"),s(" url"),n("span",{class:"token punctuation"},","),s(" copyright"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])])],-1);function f(b,w){const c=u("CodeTabs");return l(),i("div",null,[m,k(c,{id:"9",data:[{title:"node.yml"},{title:"fileUtils.js"},{title:"index.js"}]},{tab0:a(({title:t,value:o,isActive:e})=>[g]),tab1:a(({title:t,value:o,isActive:e})=>[y]),tab2:a(({title:t,value:o,isActive:e})=>[h]),_:1},8,["data"])])}const v=p(d,[["render",f],["__file","github-actions.html.vue"]]);export{v as default};
