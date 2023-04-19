import type {HeadConfig} from "vuepress";

export const head: HeadConfig[] = [
    ['link', {rel: 'icon', href: '/iCode/images/logo.png'}],
    // 添加apple icon
    ['link', {rel: 'apple-touch-icon', href: '/iCode/images/logo.png'}],
    ['link', {rel: 'stylesheet', href: '/iCode/styles/index.css'}],
    ['meta', {name: 'referrer', content: 'no-referrer'}]
]
