import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "winsys.pro Legal",
  description: "Legal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      '/linux/': [ // Меню для раздела Linux
        { text: 'Введение', items: [{ text: 'Установка', link: '/linux/install' }] }
      ],
      '/windows/': [ // Меню для раздела Windows
        { text: 'Основы', items: [{ text: 'CMD', link: '/windows/cmd' }] }
      ],
      // Меню по умолчанию (если путь не совпал выше)
      '/': [
        { text: 'Главная', items: [{ text: 'О проекте', link: '/' }] }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
