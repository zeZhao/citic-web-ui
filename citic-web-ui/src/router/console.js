import Empty from '@/views/frame/empty'

import userCenter from './userCenter/index.js'
import bill from './bill.js'

import EmptyRouter from '../views/base/EmptyRouter';

import AuthorityManagement from './authorityManagement';
// const InstanceList = resolve => require(['../views/console/instance'], resolve);
const InstanceClassify = resolve => require(['../views/console/instance/classify'], resolve);
const InstanceList = resolve => require(['../views/console/instance/index'], resolve);

const OrderList = resolve => require(['../views/console/order'], resolve);
const OrderDetail = resolve => require(['../views/console/order/detail'], resolve);

const InstanceList_cert = resolve => require(['../views/console/cert/instance-list'], resolve);
const InstanceDetail_cert = resolve => require(['../views/console/cert/instance-detail'], resolve);

const AppDistributeList = resolve => require(['../views/console/appDistribute/index'], resolve);
const AppDistributeDetail = resolve => require(['../views/console/appDistribute/detail'], resolve);

const IdentityConfigAction = resolve => require(['../views/console/identityConfig/index'], resolve);
const IdentityConfigSwitch = resolve => require(['../views/console/identityConfig/switch'], resolve);

const GeneralInstance = resolve => require(['../views/console/instanceApproval/index'], resolve);
const GeneralInstanceDetail = resolve => require(['../views/console/instanceApproval/form'], resolve);

export default
[
    {
        path: 'console',
        component:resolve => require(['views/console/main'], resolve),//懒加载,
        children: [
            {
                path: 'index',
                component:resolve => require(['views/console/index/index'], resolve),//懒加载,
                meta: {
                    title: '控制台首页',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆

                }
            },{
                path: 'instance-manage',
                component:  EmptyRouter,
                children: [
                    {
                        path: 'instance',
                        component:  EmptyRouter,
                        children: [
                            {
                                path: '/',
                                component:  InstanceList,
                                meta: {
                                    title: '实例列表',
                                    isLogin: true,
                                },
                            },{
                                path: 'classify',
                                component: InstanceClassify,
                                meta: {
                                    title: '实例分类',
                                    isLogin: true,
                                },
                            }
                        ],
                    },

                    {
                        path: 'approve',
                        component:  EmptyRouter,
                        children: [
                            {
                                path: '/',
                                component:  GeneralInstance,
                                meta: {
                                    title: '实例审批列表',
                                    isLogin: true,
                                },
                            },{
                                path: 'detail',
                                component: GeneralInstanceDetail,
                                meta: {
                                    title: '实例审批详情',
                                    isLogin: true,
                                },
                            }
                        ],
                    },
                ]
            },{
                path: 'order',
                component:  EmptyRouter,
                children: [
                    {
                        path: '/',
                        component:  OrderList,
                        meta: {
                            title: '订单列表',
                            isLogin: true,
                        },
                    }
                    // ,{
                    //     path: 'detail',
                    //     component:  OrderDetail,
                    //     meta: {
                    //         title: '订单详情',
                    //         isLogin: true,
                    //     },
                    // }
                ]
            },{
                path: 'appbase',
                component: resolve => require(['views/console/appbase/index'], resolve),//懒加载,
                meta: {
                    title: '应用基线',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'costcenter',
                component: resolve => require(['views/console/costcenter/index'], resolve),//懒加载,
                meta: {
                    title: '成本中心',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆

                }
            },
            {
                path: 'vpc',
                component: resolve => require(['views/console/vpc'], resolve),
                meta: {
                    title: '供应商关联',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆

                }
            }, {
                path: 'app',
                component: Empty,
                children: [
                    {
                        path: 'list',
                        component: resolve => require(['views/console/app/list'], resolve),
                        meta: {
                            title: '创新应用列表',
                            isLogin: true
                        }
                    },
                    {
                        path: 'form',
                        component: resolve => require(['views/console/app/form'], resolve),
                        meta: {
                            title: '创新应用信息',
                            isLogin: true
                        }
                    }
                ]
            },{
                path: 'frame',
                component:resolve => require(['views/console/frame/frame'], resolve),//懒加载,
                meta: {
                    title: '控制台',//参数定义当前页面的标题
                    isLogin: true,//定义是否需要登陆，ture需要登陆
                }
            },{
                path: 'cert',
                component:  EmptyRouter,
                children: [
                    {
                        path: '/',
                        component:  InstanceList_cert,
                        meta: {
                            title: '在线认证-实例列表',
                            isLogin: true,
                        },
                    },
                    {
                        path: 'intance_detail',
                        component:  InstanceDetail_cert,
                        meta: {
                            title: '在线认证-实例详情',
                            isLogin: true,
                        },
                    }
                ]
            },
            {
                path: 'agreement',
                component: EmptyRouter,
                children: [
                    {
                        path: '/',
                        component: resolve => require(['views/console/agreement/index'], resolve),//懒加载,
                        meta: {
                            title: '服务合作协议',
                            isLogin: true
                        }
                    },
                    {
                        path: 'signing',
                        component: resolve => require(['views/console/agreement/signing'], resolve),//懒加载,
                        meta: {
                            title: '服务合作协议',
                            isLogin: true
                        }
                    },
                ]
            },
            ...userCenter,
            ...bill,
            {
                path: 'app-distribute',
                component:  EmptyRouter,
                children: [
                    {
                        path: '/',
                        component:  AppDistributeList,
                        meta: {
                            title: '应用分发管理',
                            isLogin: true,
                        },
                    },
                    {
                        path: 'detail',
                        component:  AppDistributeDetail,
                        meta: {
                            title: '服务信息',
                            isLogin: true,
                        },
                    }
                ]
            },

            {
                path: 'identity-config',
                component:  EmptyRouter,
                children: [
                    {
                        path: 'action',
                        component: IdentityConfigAction,
                        meta: {
                            title: '配置身份验证',
                            isLogin: true,
                        }
                    },{
                        path: 'switch',
                        component: IdentityConfigSwitch,
                        meta: {
                            title: '配置身份验证',
                            isLogin: true,
                        }
                    }
                ]
            },
            AuthorityManagement
        ]

    },
    {
        path: 'order/detail',
        component: OrderDetail,//懒加载,
        meta: {
            title: '订单详情',
            isLogin: true,
        },
    }
]
