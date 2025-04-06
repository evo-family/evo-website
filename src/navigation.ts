import { getBlogPermalink, getHomePermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getHomePermalink(),
    },
    {
      text: '文档',
      href: 'https://doc.hevoai.com',
      target: '_blank',
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '下载',
      href: getPermalink('/download'),
    },
  ],
  actions: [{ text: '开始使用', variant: 'primary', href: 'https://chat.hevoai.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        { text: '项目文档', href: '#' },
        { text: '技术架构', href: '#' },
        { text: '更新日志', href: '#' },
      ],
    },
    {
      title: '开发者',
      links: [
        { text: '快速开始', href: '#' },
        { text: '部署指南', href: '#' },
        { text: '贡献指南', href: '#' },
      ],
    },
    {
      title: '社区',
      links: [
        { text: '技术文档', href: '#' },
        { text: '问答社区', href: '#' },
        { text: '博客', href: '#' },
      ],
    },
    {
      title: '关于',
      links: [
        { text: '开源协议', href: 'https://github.com/evo-family/evo-chat/blob/main/LICENSE' },
        { text: '联系我们', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: '头条', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: '小红书', icon: 'tabler:notebook', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/evo-family/evo-chat' },
    { ariaLabel: 'Bilibili', icon: 'tabler:brand-bilibili', href: '#' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
