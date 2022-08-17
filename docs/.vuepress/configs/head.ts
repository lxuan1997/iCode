import type { HeadConfig } from "vuepress";
const baseUrl = process.env.NODE_ENV === 'development' ? '' : '/notes'

export const head: HeadConfig[] = [
  [
    'link', {
      rel: 'icon',
      href: `${baseUrl}/logo.png`
    }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', href: `${baseUrl}/logo.png` },
  ],
  [
    'script', {
      type: 'text/javascript',
      src: 'https://api.map.baidu.com/api?v=2.0&ak=pvMaEosAuzivPs9B3avkYEjo9DxlCZPs'
    }
  ]
]