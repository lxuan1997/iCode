import {defineUserConfig} from 'vuepress'
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
import { commentPlugin } from "vuepress-plugin-comment2";
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
        }),
        // waline
        commentPlugin({
            provider: "Waline",
            serverURL: 'https://waline-for-i-code-k0ivbhlhv-lxuan1997.vercel.app/',
            emoji: [
                'https://unpkg.com/@waline/emojis@1.1.0/alus',
                'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
                'https://unpkg.com/@waline/emojis@1.1.0/qq',
                'https://unpkg.com/@waline/emojis@1.1.0/bmoji',
                'https://unpkg.com/@waline/emojis@1.1.0/tw-emoji',
                'https://unpkg.com/@waline/emojis@1.1.0/weibo'
            ],
            // meta: [],
            // reaction: [
            //     'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
            //     'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
            //     'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
            //     'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png',
            // ]
            pageview: true
        })
    ]
})
