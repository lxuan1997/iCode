import type { HeadConfig } from "vuepress";

export const head: HeadConfig[] = [
  ['link', {
    rel: 'icon',
    href: `${process.env.NODE_ENV === 'development' ? '' : '/notes'}/logo.png`
  }]
]