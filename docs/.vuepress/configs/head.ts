import type { HeadConfig } from "vuepress";

export const head: HeadConfig[] = [
    [
        'link', {
        rel: 'icon',
        href: '/images/logo-icon.png'
    }
    ],
    // 添加apple icon
    [
        'link',
        { rel: 'apple-touch-icon', href: '/images/logo-icon.png' },
    ]
]
