import type { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  '/git/': [
    {
      text: 'git',
      children: [
        '/git/README.md',
        '/git/github-tips.md',
        '/git/common-commands.md'
      ]
    }
  ]
}