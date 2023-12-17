import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
    // ai导航
    {
      title: 'AI 导航',
      items: [
        {
          icon: '/icons/chatgpt.png',
          title: 'ChatGPT（最强）',
          link: 'https://chat.openai.com/chat'
        },
        {
          icon: 'https://www.notion.so/images/logo-ios.png',
          title: 'Notion AI（笔记）',
          link: 'https://www.notion.so'
        },
        {
          icon: 'https://www.midjourney.com/apple-touch-icon.png',
          title: 'Midjourney（绘画）',
          link: 'https://www.midjourney.com'
        },
        {
          icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
          title: 'Beautiful.ai（PPT）',
          link: 'https://www.beautiful.ai'
        }
      ]
    },
  // 常用
  {
    title: '常用',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度',
        desc: '百度一下，你就知道',
        link: 'https://www.baidu.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png',
        title: '必应',
        desc: '必应可帮助你将理论付诸实践，使得搜索更加方便快捷，从而达到事半功倍的效果。',
        link: 'https://cn.bing.com/'
      },

      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'http://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico',
        title: '今日头条',
        desc: '今日头条，头条，头条网，头条新闻，今日头条官网',
        link: 'https://www.toutiao.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.xuexi.cn/favicon.ico',
        title: '学习强国',
        desc: '梦想从学习开始，事业从实践起步。',
        link: 'https://www.xuexi.cn'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        badge: {
          text: '中',
          type: 'tip',
        },
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        badge: {
          text: '中',
          type: 'warning',
        },
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        badge: {
          text: '中',
          type: 'danger',
        },
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        badge: {
          text: '请给茂茂点点小星星哦',
          type: 'info',
        },
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
  //图书
  {
    title: '图书',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.ageeye.cn/statics/icons/favicon-16x16.png',
        title: '观沧海',
        desc: '地图分享知识是我们的核心理念',
        link: 'https://www.ageeye.cn/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://avatar.0skyu.cn/assets/logo.f5999a59.svg',
        title: '自定义头像',
        desc: '零域色彩头像',
        link: 'https://avatar.0skyu.cn/'
      },

      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://cdnstatic.ventusky.com/images/favicon.ico',
        title: '风雨气温图',
        desc: '风雨气温图',
        link: 'https://www.ventusky.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_48h.png',
        title: '微信读书',
        desc: '微信读书',
        link: 'https://weread.qq.com/'
      },
      {
        badge: {
          text: '中',
          type: 'tip',
        },
        icon: 'https://qwerty.liumingye.cn./favicon.ico',
        title: 'Qwerty Learner',
        desc: '打字练习单词',
        link: 'https://qwerty.liumingye.cn/'
      },
      {
        icon: '',
        title: '中国大百科全书',
        badge: {
          text: '中',
          type: 'warning',
        },
        desc: '中国大百科全书',
        link: 'https://www.zgbk.com/'
      },
    ]
  },


  // 笔记
  {
    title: '笔记文档',
    items: [
      {
        icon: 'https://baiyunshan.flowus.cn/assets/_next/static/media/home-logo.78d948f2.png',
        title: 'FlowUS',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '知识管理与协作平台以云端笔记为载体，配合在线文档、知识库、文件夹等多形态功能，为个人和团队提供数字信息管理与协同的一站式工作中心。',
        link: 'https://flowus.cn'
      },
      {
        icon: 'https://qncdn.aoscdn.com/astro/gitmind/_astro/logo-web.6e63e885.svg',
        title: 'GitMind',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '免费思维导图协作软件，灵感流淌、思想共创，激发思想流动，让智慧自然涌现',
        link: 'https://gitmind.cn'
      },
      {
        icon: 'https://www.yinxiang.com/new/wp-content/uploads/2019/08/%E7%9F%A9%E5%BD%A2@2x-12.png',
        title: '印象笔记',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '飞书',
        link: 'https://www.yinxiang.com'
      },
      {
        icon: 'https://note.youdao.com/_nuxt/img/ynote-logo.d8ea7de.png',
        title: '有道云笔记',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '飞书',
        link: 'https://note.youdao.com'
      },
      {
        icon: 'https://wcdn.wiz.cn/static/images/wiznotex/grid_cut.svg',
        title: '为知笔记',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '以知识释放创造力,从个人笔记到团队知识库，构建更强大的知识图谱',
        link: 'https://www.wiz.cn'
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*IVdnTJqUp6gAAAAAAAAAAAAADvuFAQ/original',
        title: '语雀',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '文档与知识库工具,知识构建与分享工具',
        link: 'https://www.yuque.com'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-doc-ede672.png',
        title: '腾讯文档',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '文档ppt',
        link: 'https://docs.qq.com'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-smartcanvas-64ee75.png',
        title: '石墨文档',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '面向未来的办公软件,文档实时协同 · 知识沉淀管理 · 数据安全可控',
        link: 'https://shimo.im'
      },
      {
        icon: 'https://assets.mubu.com/888df75fd4e090ff51bed873e68ba0a2.png',
        title: '幕布',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '极简大纲笔记，一键生成思维导图',
        link: 'https://mubu.com'
      },
      {
        icon: 'https://www.processon.com/assets/imgs/logo_small.svg',
        title: 'ProcessOn',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '免费在线流程图思维导图',
        link: 'https://www.processon.com'
      },
      {
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/dab17a044f2442b5af1b8f8a418c50bd~tplv-jbbdkfciu3-image:0:0.image',
        title: '飞书',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '飞书',
        link: 'https://www.feishu.cn/'
      },
      {
        badge: {
          text: '飞书',
          type: 'info',
        },
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/dab17a044f2442b5af1b8f8a418c50bd~tplv-jbbdkfciu3-image:0:0.image',
        title: '飞书网页',
        desc: '飞书网页版',
        link: 'https://feishu.cn/messenger/'
      },
    ]
  },


  // 翻译
  {
    title: '翻译',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://fanyi.youdao.com/img/logo.50fdfa99.png',
        title: '有道翻译',
        desc: '有道翻译',
        link: 'https://fanyi.youdao.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://static.deepl.com/img/logo/deepl-logo-blue.svg',
        title: 'deepl',
        desc: '翻译',
        link: 'https://www.deepl.com'
      },
     
    ]
  },

]