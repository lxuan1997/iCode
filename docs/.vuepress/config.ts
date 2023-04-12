import {defineUserConfig} from 'vuepress'
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
import {sidebar, navbar, head} from './configs'
import {defaultTheme} from 'vuepress'
// import { localTheme } from './theme'
export default defineUserConfig({
    base: '/iCode/',
    lang: 'zh-CN',
    title: '',
    description: 'Hello Code',
    head,
    theme: defaultTheme({
        logo: '/images/logo.png',
        logoDark: '/images/logo-dark.png',
        sidebar,
        navbar,
        // repo: 'https://github.com/lxuan1997/iCode',
        docsRepo: 'https://github.com/lxuan1997/iCode',
        docsBranch: 'master',
        docsDir: 'docs',
        contributors: false,
        // editLinkText: '编辑此页',
        // lastUpdatedText: '最近更新'
    }),
    plugins: [
        mdEnhancePlugin({
            // vue 交互演示
            vuePlayground: true,
            // 代码块分组
            codetabs: true,
            tasklist: true
        })
    ]
})
