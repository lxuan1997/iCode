import {defineUserConfig} from 'vuepress'
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
import {commentPlugin} from "vuepress-plugin-comment2";
import {docsearchPlugin} from '@vuepress/plugin-docsearch';
import {sitemapPlugin} from "vuepress-plugin-sitemap2";
import {copyCodePlugin} from "vuepress-plugin-copy-code2";
import {componentsPlugin} from "vuepress-plugin-components";
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import {sidebar, navbar, head} from './configs'
import {defaultTheme} from 'vuepress'
import {getDirname, path} from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/iCode/',
    lang: 'zh-CN',
    title: 'iCode',
    description: '',
    head,
    theme: defaultTheme({
        logo: '/images/logo.png',
        logoDark: '/images/logo-dark.png',
        sidebar,
        navbar,
        docsRepo: 'https://github.com/lxuan1997/iCode',
        docsBranch: 'master',
        docsDir: 'docs',
        contributors: false,
        themePlugins: {
            backToTop: false
        }
    }),
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    plugins: [
        // markdown 增强
        mdEnhancePlugin({
            // vue 交互演示
            vuePlayground: true,
            // 代码块分组
            codetabs: true,
            tasklist: true,
            // 卡片
            card: true,
        }),
        // comment-Waline
        // commentPlugin({
        //     provider: "Waline",
        //     serverURL: 'https://waline-for-i-code-k0ivbhlhv-lxuan1997.vercel.app/',
        //     emoji: [
        //         // 'https://unpkg.com/@waline/emojis@1.1.0/alus',
        //         // 'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
        //         // 'https://unpkg.com/@waline/emojis@1.1.0/qq',
        //         'https://unpkg.com/@waline/emojis@1.1.0/bmoji',
        //         // 'https://unpkg.com/@waline/emojis@1.1.0/tw-emoji',
        //         // 'https://unpkg.com/@waline/emojis@1.1.0/weibo'
        //     ],
        //     meta: [],
        //     search: false
        // }),
        // comment-Giscus
        // commentPlugin({
        //     provider: 'Giscus',
        //     repo: 'lxuan1997/iCode',
        //     repoId: 'R_kgDOHsAibQ',
        //     category: 'General',
        //     categoryId: 'DIC_kwDOHsAibc4CVvDA'
        // }),
        // docsearch 文档搜索
        docsearchPlugin({
            // 配置项
            appId: '4L8Y7NNA9W',
            apiKey: 'cd766f9a5a652a136b3b3ddb26e7e475',
            indexName: 'icode',
        }),
        copyCodePlugin({}),
        sitemapPlugin({
            hostname: 'https://lxuan1997.github.io/iCode/'
        }),
        componentsPlugin({
            components: [],
            rootComponents: {
                backToTop: true
            }
        }),
        // 注册组件
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
    ]
})
