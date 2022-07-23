import type { HeadConfig } from "vuepress";

export const head: HeadConfig[] = [
  [
    'link', {
      rel: 'icon',
      href: `${process.env.NODE_ENV === 'development' ? '' : '/notes'}/logo.png`
    }
  ],
  [
    'script', {
      type: 'text/javascript',
      src: 'https://api.map.baidu.com/api?v=2.0&ak=pvMaEosAuzivPs9B3avkYEjo9DxlCZPs'
    }
  ]
]