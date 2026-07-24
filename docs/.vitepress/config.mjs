import { defineConfig } from "vitepress";

const NavBlock = () => {
  return [
    { text: "Домашняя", link: "/" },
    { text: "Навигация", link: "/menu" },
  ];
};

const StandardBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Главная", link: "/" },
      { text: "Навигация", link: "/menu" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const OSBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Linux", link: "/os/linux/linux" },
      { text: "Windows", link: "/os/windows/windows" },
      // { text: "Навигация Linux", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const LinuxBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Linux", link: "/os/linux/linux" },
      // { text: "Навигация Linux", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const WindowsBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Windows", link: "/os/windows/windows" },
      // { text: "Навигация Windows", link: "#" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const OzonBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Ozon", link: "#" },
      // { text: "Навигация Ozon", link: "#" },
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
const SoftBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Ansible", link: "/ansible/ansible_команды" },
      { text: "Zabbix", link: "/zabbix/zabbix_команды" },
      ...extraItems, // Добавляем уникальные пункты, если есть
    ],
  };
};
const TextBlock = (title, extraItems = []) => {
  return {
    text: title,
    items: [
      { text: "Системный администратор", link: "/системный_администратор/вопросы" },
      { text: "Гормезис", link: "/Text/Гормезис/Гормезис" },
      {
        text: "Инсулинорезистентность",
        link: "/Text/Инсулинорезистентность/Инсулинорезистентность",
      },
      { text: "Гормезис", link: "/Text/Эндотелий/Эндотелий" },
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
    outlineTitle: "Содержание страницы",
    returnToTopLabel: "Вернуться к началу",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    nav: [
      ...NavBlock(),
      // LinuxBlock("Linux"),
      // WindowsBlock("Windows"),
      OSBlock("OS"),
      SoftBlock("SoFt"),
      // OzonBlock("Про Ozon"),
      UnicodeBlock("Юникод"),
    ],
    sidebar: {
      "/linux": [LinuxBlock("Linux"), StandardBlock("Меню")],
      "/windows": [WindowsBlock("Windows"), StandardBlock("Меню")],
      // Меню по умолчанию (если путь не совпал выше)
      "/": [
        StandardBlock("Меню"),
        TextBlock("Статьи"),
        OSBlock("OS"),
        SoftBlock("SoFt"),
        // LinuxBlock("Linux"),
        // WindowsBlock("Windows"),
        // OzonBlock("Про Ozon"),
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
