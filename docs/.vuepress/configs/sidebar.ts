import type {SidebarConfig, SidebarConfigArray, SidebarConfigObject} from "vuepress";

export const sidebar: false | 'auto' | SidebarConfigArray | SidebarConfigObject | SidebarConfig = {
    '/javascript/': [
        {
            text: '', // JavaScript
            // collapsible: true,
            children: [
                '/javascript/tips.md',
                '/javascript/关于元素尺寸、鼠标坐标.md'
            ]
        }
    ],
    '/css/': [
        {
            text: '', // CSS
            // collapsible: true,
            children: [
                // '/css/index.md',
                '/css/tips.md',
            ]
        }
    ],
    '/vue/': [
        {
            text: '', // Vue
            children: [
                // '/vue/index.md',
                '/vue/vue-router.md',
                '/vue/vuex.md',
                '/vue/packages.md',
                '/vue/Vue.js的设计与实现'
            ]
        }
    ],
    '/wx/': [
        {
            text: '', // 微信小程序
            children: [
                '/wx/index.md',
            ]
        }
    ],
    '/echarts/': [
        {
            text: '', // Echarts
            children: [
                '/echarts/index.md',
                '/echarts/BMap.md',
            ]
        }
    ],
    '/nginx/': [
        {
            text: '', // Nginx
            children: [
                '/nginx/index.md',
            ]
        }
    ],
    '/tools/git/': [
        {
            text: 'Git',
            children: [
                '/tools/git/README.md',
                '/tools/git/common-commands.md',
                '/tools/git/common-actions.md',
                '/tools/git/IDEA.md'
            ]
        }
    ],
    '/tools/github/': [
        {
            text: 'Github',
            children: [
                '/tools/github/README.md',
                '/tools/github/github-pages.md',
                '/tools/github/github-actions.md',
            ]
        }
    ],
    '/tools/shell/': [
        {
            text: 'Shell',
            children: [
                '/tools/shell/README.md',
            ]
        }
    ],
    '/tools/chrome/': [
        {
            text: 'Chrome',
            children: [
                '/tools/chrome/README.md',
            ]
        }
    ],
    '/system/windows': [
        {
            text: 'Windows',
            children: [
                '/system/windows/README.md'
            ]
        }
    ]
}
