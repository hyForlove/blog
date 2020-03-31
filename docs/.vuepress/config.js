module.exports = {
  title: "优雅的疯子",
  description: "痛苦是力量的源泉",
  base: '/blog/',
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/user.png' }]
  ],
  themeConfig: {
    repo: "lmjben/blog",
    nav: [
      {
        text: "前端博客",
        link: "/blog/"
      },
      {
        text: "面试题",
        link: "/interview/"
      },
      {
        text: "阅读",
        link: "/book/"
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'HTML/CSS',
          collapsable: false,
          children: [
            
          ]
        },

        {
          title: '性能优化',
          collapsable: false,
          children: [
            
          ]
        }, 
        {
          title: '移动端',
          collapsable: false,
          children: [
            
          ]
        },
      ],
      "/interview/": [
        {
          title: '前端面试',
          collapsable: false,
          children: [
            
          ]
        },
      ],
      "/book/": [
        {
          title: '读书笔记',
          collapsable: false,
          children: [
            
          ]
        },
      ],
    },
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
          margin: 16
      }
    },
    '@vuepress/back-to-top':true
  }
};
