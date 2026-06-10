export default {
  // app level config options
  lang: 'en-US',
  title: "Stephen Adams | Developer & Consultant",
  description: 'Developer and consultant blog',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: "Stephen's Blog",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Book', link: 'https://leanpub.com/getting-started-with-angular' },
      { text: 'Services', link: '/services' },
      { text: 'Projects', link: '/projects' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
}