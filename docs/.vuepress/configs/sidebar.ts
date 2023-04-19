import type {SidebarConfig, SidebarConfigArray, SidebarConfigObject} from "vuepress";

export const sidebar: false | 'auto' | SidebarConfigArray | SidebarConfigObject | SidebarConfig = {
    '/javascript/': [
        {
            text: 'JavaScript', // JavaScript
            // collapsible: true,
            children: [
                '/javascript/tips.md',
                '/javascript/关于元素尺寸、鼠标坐标.md'
            ]
        }
    ],
    '/css/': [
        {
            text: 'CSS', // CSS
            // collapsible: true,
            children: [
                // '/css/index.md',
                '/css/tips.md',
            ]
        }
    ],
    '/vue/': [
        {
            text: 'Vue',
            children: [
                '/vue/index.md',
                '/vue/vue-router.md',
                '/vue/vuex.md',
                '/vue/Pinia.md',
                '/vue/packages.md',
            ]
        },
        {
            text: 'Vue Book',
            children: [
                '/vue/Vue.js的设计与实现',
            ]
        },
        {
            text: 'Vue Tip & Bug', // Vue Tip
            children: [
                '/vue/tips.md',
                '/vue/bugs.md'
            ]
        }
    ],
    '/wx/': [
        {
            text: '微信小程序',
            children: [
                '/wx/index.md',
            ]
        }
    ],
    '/echarts/': [
        {
            text: 'Echarts',
            children: [
                '/echarts/index.md',
                '/echarts/BMap.md',
            ]
        }
    ],
    '/nginx/': [
        {
            text: 'Nginx',
            children: [
                '/nginx/index.md',
            ]
        }
    ],
    '/fabric/': [
        {
            text: 'fabric',
            children: [
                '/fabric/index.md',
                '/fabric/vue.md',
            ]
        }
    ],
    '/windows/': [
        {
            text: 'Windows',
            children: [
                '/windows/index.md'
            ]
        }
    ],
    '/git/': [
        {
            text: 'Git',
            children: [
                '/git/index.md',
                '/git/commands.md',
                '/git/actions.md',
                '/git/IDEA.md'
            ]
        }
    ],
    '/github/': [
        {
            text: 'GitHub',
            children: [
                '/github/index.md',
                '/github/github-pages.md',
                '/github/github-actions.md',
            ]
        }
    ],
    '/shell/': [
        {
            text: 'Shell',
            children: [
                '/shell/index.md',
            ]
        }
    ],
    '/chrome/': [
        {
            text: 'Chrome',
            children: []
        }
    ],
}
