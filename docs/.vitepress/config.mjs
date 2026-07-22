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
      { text: "Linux", link: "/os/linux/linux" },
      { text: "Навигация Linux", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const createWindowsBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Windows", link: "/os/windows/windows" },
      { text: "Навигация Windows", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const OzonBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Ozon", link: "#" },
      { text: "Навигация Ozon", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const UnicodeBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Юникод", link: "/unicode/unicode" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Legal.Winsys.Pro",
  description: "Legal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      ...createNavBlock(),
      createLinuxBlock("Linux"),
      createWindowsBlock("Windows"),
      OzonBlock("Про Ozon"),
      UnicodeBlock("Юникод"),
    ],
    sidebar: {
      "/linux": [createLinuxBlock("Linux"), createStandardBlock("Меню")],
      "/windows": [createWindowsBlock("Windows"), createStandardBlock("Меню")],
      // Меню по умолчанию (если путь не совпал выше)
      "/": [
        createStandardBlock("Меню"),
        createLinuxBlock("Linux"),
        createWindowsBlock("Windows"),
        OzonBlock("Про Ozon"),
        UnicodeBlock("Юникод"),
      ],
    },

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

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
