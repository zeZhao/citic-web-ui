/**
 * 用户中心路由
 */
export default
    [
        {
            path: 'userCenter/cashCoupon/list',
            component: resolve => require(['views/console/userCenter/cashCoupon/queryList.vue'], resolve),
            meta: {
                title: '代金券',//参数定义当前页面的标题
                isLogin: true,//定义是否需要登陆，ture需要登陆

            }
        },
        {
            path: 'userCenter/invoice/infoConfig',
            component: resolve => require(['views/console/userCenter/invoice/infoConfig.vue'], resolve),
            meta: {
                title: '发票信息配置',//参数定义当前页面的标题
                isLogin: true,//定义是否需要登陆，ture需要登陆

            }
        },
        {
            path: 'userCenter/invoice/myInvoice',
            component: resolve => require(['../../views/console/userCenter/invoice/myInvoice.vue'], resolve),
            meta: {
                title: '我的发票',//参数定义当前页面的标题
                isLogin: true,//定义是否需要登陆，ture需要登陆

            }
        },
        {
            path: 'userCenter/invoice/applyProgress',
            component: resolve => require(['views/console/userCenter/invoice/applyProgress.vue'], resolve),
            meta: {
                title: '发票详情',//参数定义当前页面的标题
                isLogin: true,//定义是否需要登陆，ture需要登陆
            }
        }
    ]
