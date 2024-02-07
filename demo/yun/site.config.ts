import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: 'public/kldhsh.png',
  lang: 'zh-CN',
  title: '一个纯净态博客',
  author: {
    name: '开朗的火山河123',
    avatar: '/valaxy-logo.png',
  },
  description: '奇妙站点',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/kldhsh123',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1667643729',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:1022140881#qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
    type: 'fuse'
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://pan-1303847807.cos.ap-guangzhou.myqcloud.com/klbk/202402/af131707323047.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://pan-1303847807.cos.ap-guangzhou.myqcloud.com/klbk/202402/a6d11707322977.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://pan-1303847807.cos.ap-guangzhou.myqcloud.com/klbk/202402/7b7a1707322977.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
