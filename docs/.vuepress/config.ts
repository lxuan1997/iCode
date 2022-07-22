import { defineUserConfig } from 'vuepress'
import { sidebar, navbar, head } from './configs'
// import { defaultTheme } from 'vuepress'
import { localTheme } from './theme'
export default defineUserConfig({
  base: '/notes/',
  lang: 'zh-CN',
  title: '',
  description: '',
  head,
  theme: localTheme({
    logo: `${process.env.NODE_ENV === 'development' ? '' : '/notes'}/logo.png`,
    sidebar,
    navbar,
  })
})