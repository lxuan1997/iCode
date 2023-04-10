import { defineUserConfig } from 'vuepress'
import { sidebar, navbar, head } from './configs'
// import { defaultTheme } from 'vuepress'
import { localTheme } from './theme'
export default defineUserConfig({
  base: '/iCode/',
  lang: 'zh-CN',
  title: '',
  description: '',
  head,
  theme: localTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    sidebar,
    navbar,
  })
})
