const CustomDetail = resolve => require(['../views/product/detail/customDetail.vue'], resolve);

export default
[
    {
        path: 'product',
        component: resolve => require(['views/product/main'], resolve),
        children: [
            {
                path: 'buy',
                component: resolve => require(['views/product/buy'], resolve),
                meta: {
                    title: '控制台首页',//参数定义当前页面的标题
                    isLogin: true  //定义是否需要登陆，ture需要登陆
                }
            },
            {
                path: 'renewAndUpdata',
                component: resolve => require(['views/product/buy/renewAndUpdata'], resolve),
                meta: {
                    title: '中信云实例变更',//参数定义当前页面的标题
                    isLogin: false  //定义是否需要登陆，ture需要登陆
                }
            },


            {
                path: 'center',
                component: resolve => require(['views/product/center'], resolve),
                meta: {
                    title: '产品中心页',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'cert/details',
                component:resolve => require(['views/product/cert/details.vue'], resolve),
                meta: {
                    title: '在线认证',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'cert/buy',
                component:resolve => require(['views/product/cert/buy.vue'], resolve),
                meta: {
                    title: '在线认证购买页',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆
                }
            },
            {
                path: 'innovation/index',
                component:resolve => require(['views/product/innovation/index.vue'], resolve),
                meta: {
                    title: '创新应用',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'innovation/details',
                component:resolve => require(['views/product/innovation/details.vue'], resolve),
                meta: {
                    title: '创新应用产品详情',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'innovation/list',
                component:resolve => require(['views/product/innovation/list.vue'], resolve),
                meta: {
                    title: '产品应用列表',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'innovation/desc',
                component:resolve => require(['views/product/innovation/desc.vue'], resolve),
                meta: {
                    title: '子公司创新应用情况',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'newBuy',
                component: resolve => require(['views/product/buy/newBuy.vue'], resolve),
                meta: {
                    title: '控制台首页',//参数定义当前页面的标题
                    isLogin: true  //定义是否需要登陆，ture需要登陆
                }
            },
            /* {
                 path: 'innovation/introArt3',
                 component:resolve => require(['views/product/innovation/intro-art3.vue'], resolve),
                 meta: {
                     title: '活动页',//参数定义当前页面的标题
                     isLogin: false,//定义是否需要登陆，ture需要登陆

                 }
             },*/
            {
                path: 'detail',
                component: resolve => require(['views/product/detail'], resolve),
                meta: {
                    title: '产品详情',
                    isLogin: false
                }
            },
            {
                path: ':serviceAlias/:supplierAlias',
                component: CustomDetail,
                meta: {
                    title: '产品详情',
                    isLogin: false
                }
            },
            {
                path: 'newly-enterprise-service',
                component: resolve => require(['views/product/newly-enterprise-service.vue'], resolve),
                meta: {
                    title: '中信云-初创企业云服务直通车',
                    isLogin: false
                }
            },
            {
                path: 'citicGroupExclusive',
                component: resolve => require(['views/product/citicGroupExclusive/index.vue'], resolve),
                meta: {
                    title: '中信集团服务应用专区',
                    isLogin: false
                }
            },
            {
                path: 'clause',
                component: resolve => require(['views/product/buy/clause'], resolve),
                meta: {
                    title: '服务条款',
                    isLogin: false
                }
            },
        ]

    }
]
