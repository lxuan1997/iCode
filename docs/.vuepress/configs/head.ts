import type { HeadConfig } from "vuepress";

export const head: HeadConfig[] = [
    [
        'link', {
        rel: 'icon',
        href: '/iCode/images/logo-icon.png'
    }
    ],
    // 添加apple icon
    [
        'link',
        { rel: 'apple-touch-icon', href: '/iCode/images/logo.png' },
    ],
    [
        'meta',
        {name: 'referrer', content: 'no-referrer'}
    ]
]
