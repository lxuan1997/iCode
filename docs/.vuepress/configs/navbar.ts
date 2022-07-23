import type { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  {
    text: '前端',
    children: [
      {
        text: 'Css',
        link: '/frontend/css/'
      },
      {
        text: 'JavaScript',
        link: '/frontend/javascript/'
      },
      {
        text: 'TypeScript',
        link: '/frontend/typescript/'
      },
      {
        text: 'Vue',
        link: '/frontend/vue/'
      },
      {
        text: '微信小程序',
        link: '/frontend/wx_miniprogram/'
      },
      {
        text: 'Echarts',
        link: '/frontend/echarts/'
      },
      {
        text: '安全',
        link: '/frontend/safety/'
      },
    ]
  },
  {
    text: '后端',
    children: [
      {
        text: 'Nginx',
        link: '/backend/nginx/'
      }
    ]
  },
  {
    text: '工具',
    children: [
      {
        text: 'Git',
        link: '/tools/git/'
      },
      {
        text: 'Github',
        link: '/tools/github/'
      },
      {
        text: 'Shell',
        link: '/tools/shell/'
      },
      {
        text: 'Chrome',
        link: '/tools/chrome/'
      }
    ]
  },
  {
    text: '系统',
    children: [
      {
        text: 'Windows',
        link: '/system/windows'
      }
    ]
  }
]
