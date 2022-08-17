import type { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  '/frontend/css/': [
    {
      text: 'Css',
      children: [
        '/frontend/css/README.md',
      ]
    }
  ],
  '/frontend/javascript/': [
    {
      text: 'JavaScript',
      children: [
        '/frontend/javascript/README.md',
      ]
    }
  ],
  '/frontend/typescript/': [
    {
      text: 'TypeScript',
      children: [
        '/frontend/typescript/README.md',
      ]
    }
  ],
  '/frontend/vue/': [
    {
      text: 'Vue',
      children: [
        '/frontend/vue/README.md',
        '/frontend/vue/vue-router.md',
        '/frontend/vue/vuex.md',
        '/frontend/vue/packages.md'
      ]
    }
  ],
  '/frontend/wx_miniprogram/': [
    {
      text: '微信小程序',
      children: [
        '/frontend/wx_miniprogram/README.md',
      ]
    }
  ],
  '/frontend/echarts/': [
    {
      text: 'Echarts',
      children: [
        '/frontend/echarts/README.md',
        '/frontend/echarts/BMap.md',
      ]
    }
  ],
  '/frontend/safety/': [
    {
      text: '前端安全',
      children: [
        '/frontend/safety/README.md',
      ]
    }
  ],
  '/backend/nginx/': [
    {
      text: 'Nginx',
      children: [
        '/frontend/nginx/README.md',
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