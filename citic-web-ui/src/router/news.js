export default
[
  {
    path: 'news',
    component:resolve => require(['views/news/index'], resolve),
    meta: {
      title: '中信云新闻',//参数定义当前页面的标题
      isLogin: false,//定义是否需要登陆，ture需要登陆
    },
    children: [
        {
            path: 'topic',
            component:resolve => require(['views/news/topic'], resolve),
            meta: {
                title: '活动专区',
                isLogin: false
            }
        },
        {
            path: 'list',
            component:resolve => require(['views/news/list'], resolve),
            meta: {
                title: '新闻列表页',
                isLogin: false
            }
        },
        {
            path: 'detail',
            component:resolve => require(['views/news/detail'], resolve),
            meta: {
                title: '新闻详情',
                isLogin: false
            }
        },
        {
            path: 'topic829',
            component:resolve => require(['views/news/topic829'], resolve),
            meta: {
                title: '829周年庆',
                isLogin: false
            }
        },
        {
            path: 'introArt3',
            component:resolve => require(['views/news/intro-art3.vue'], resolve),
            meta: {
                title: '活动页',//参数定义当前页面的标题
                isLogin: false,//定义是否需要登陆，ture需要登陆
            }
        },
        {
            path: 'introArt5',
            component:resolve => require(['views/news/intro-art5.vue'], resolve),
            meta: {
                title: '活动页',//参数定义当前页面的标题
                isLogin: false,//定义是否需要登陆，ture需要登陆
            }
        },
        {
            path: 'introArt7',
            component:resolve => require(['views/news/intro-art7.vue'], resolve),
            meta: {
                title: '活动页',//参数定义当前页面的标题
                isLogin: false,//定义是否需要登陆，ture需要登陆
            }
        },
        {
            path: 'introArt8',
            component:resolve => require(['views/news/intro-art8.vue'], resolve),
            meta: {
                title: '活动页',//参数定义当前页面的标题
                isLogin: false,//定义是否需要登陆，ture需要登陆
            }
        },
        {
            path: 'anniversary829',
            component:resolve => require(['views/news/anniversary829.vue'], resolve),
            meta: {
                title: '活动页',//参数定义当前页面的标题
                isLogin: false,//定义是否需要登陆，ture需要登陆
            }
        },
    ]
  }
]
