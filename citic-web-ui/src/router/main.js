import EmptyRouter from '../views/base/EmptyRouter';

const CartList = resolve => require(['../views/main/cart/'], resolve);
const CartDetail = resolve => require(['../views/main/cart/detail'], resolve);

export default [
    {
        path: '/',
        component: resolve => require(['views/main/index'], resolve),//懒加载,
        meta: {
            title: '中信云',//参数定义当前页面的标题
            isLogin: false,//定义是否需要登陆，ture需要登陆
        },
        children: [
            {
                path: '/',
                component: resolve => require(['views/main/main/index'], resolve),//懒加载,
                meta: {
                    title: '中信云',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆
                },
            },
            {
                path: 'customerService',
                component: resolve => require(['views/customerService'], resolve),//懒加载,
                meta: {
                    title: '客服系统',//参数定义当前页面的标题
                    isLogin: false,//定义是否需要登陆，ture需要登陆
                }
            },
            {
                path: 'cart',
                component: EmptyRouter,

                children: [
                    {
                        path: '/',
                        component: CartList,
                        meta: {
                            title: '购物车列表',
                            isLogin: true,
                        }
                    }, {
                        path: 'detail',
                        component: CartDetail,
                        meta: {
                            title: '购物车详情',
                            isLogin: true,
                        }
                    }
                ]
            }
        ]
    }
]
