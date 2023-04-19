import type {NavbarConfig} from "vuepress";

export const navbar: NavbarConfig = [
    {
        text: 'JavaScript',
        link: '/javascript/'
    },
    {
        text: 'CSS',
        link: '/css/'
    },
    {
        text: 'Vue',
        link: '/vue/'
    },
    {
        text: '微信小程序',
        link: '/wx/'
    },
    {
        text: 'Echarts',
        link: '/echarts/'
    },
    {
        text: 'Fabric.js',
        link: '/fabric/'
    },
    {
        text: 'Nginx',
        link: '/nginx/'
    },
    {
        text: '其他',
        children: [
            {
                text: 'Windows',
                link: '/windows/'
            },
            {
                text: 'Chrome',
                link: '/chrome/'
            },
            {
                text: 'Git',
                link: '/git/'
            },
            {
                text: 'GitHub',
                link: '/github/'
            },
            {
                text: 'Shell',
                link: '/shell/'
            }
        ]
    }
    // {
    //     text: '工具',
    //     children: [
    //         {
    //             text: 'Git',
    //             link: '/tools/git/'
    //         },
    //         {
    //             text: 'Github',
    //             link: '/tools/github/'
    //         },
    //         {
    //             text: 'Shell',
    //             link: '/tools/shell/'
    //         },
    //         {
    //             text: 'Chrome',
    //             link: '/tools/chrome/'
    //         }
    //     ]
    // },
]
