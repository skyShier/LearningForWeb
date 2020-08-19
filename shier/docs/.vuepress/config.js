// 项目启动时,会初始化侧边栏信息,每次启动都更新
let VuepressEs = require('./vuepressEs/index.js')

// 初始化定义 & 启动报警提示
let vuepressEs = new VuepressEs({
})

module.exports = {
    title: 'Shier',  // 设置网站标题
    description : 'Adroi',
    base : '/',
    markdown: {
        lineNumbers: true
    },
    themeConfig : {
        displayAllHeaders: true, //显示所有标题
        smoothScroll: true, //页面滚动
        nav : [
            { text: 'Web学习', link: '/webStudy/' },
            { text: '常用方法', link: '/commonMethod/' },
            { text: '面试', link: '/interview/' }
        ],
        sidebarDepth : 2,
        sidebar: vuepressEs.getSidebarData() 
    }
  }