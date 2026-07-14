import { defineConfig } from "vitepress";

const createNavBlock = () => {
  return [
    { text: "Домашняя", link: "/" },
    { text: "Навигация", link: "/menu" },
  ];
};

const createStandardBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Главная", link: "/" },
      { text: "Навигация", link: "/menu" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const createLinuxBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Linux", link: "/linux" },
      { text: "Навигация Linux", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const createWindowsBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Windows", link: "#" },
      { text: "Навигация Windows", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "winsys.pro Legal",
  description: "Legal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      ...createNavBlock(),
      createLinuxBlock("Linux"),
      createWindowsBlock("Windows"),
      // { text: 'Домашняя', link: '/' },
      // { text: 'Навигация', link: '/menu' }
    ],

    // sidebar: [
    //   {
    //     text: 'Примеры',
    //     items: [
    //       { text: 'Примеры разметки', link: '/markdown-examples' },
    //       { text: 'Примеры API', link: '/api-examples' }
    //     ]
    //   },
    //         {
    //     text: 'OS',
    //     items: [
    //       { text: 'Linux', link: '/linux' },
    //       { text: 'Windows', link: '/winsys' }
    //     ]
    //   }
    // ],

    sidebar: {
      "/linux": [createLinuxBlock("Linux"), createStandardBlock("Меню")],
      "/windows": [createWindowsBlock("Windows"), createStandardBlock("Меню")],
      // Меню по умолчанию (если путь не совпал выше)
      "/": [
        createStandardBlock("Меню"),
        createLinuxBlock("Linux"),
        createWindowsBlock("Windows"),
        // { text: 'Главная', items: [{ text: 'Главная', link: '/' },{ text: 'Навигация', link: '/menu' }] },
        // { text: "Linux", items: [{ text: "Linux", link: "/linux" }] },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
