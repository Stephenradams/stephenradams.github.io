import { title } from "process";

export default {
  // app level config options
  lang: 'en-US',
title: false,
  description: 'Freelance developer blog',
  themeConfig: {
    siteTitle: 'Stephens Blog',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
}