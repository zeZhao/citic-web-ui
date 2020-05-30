export default [
    {
        path: 'solution',
        component: resolve => require(['views/main/index'], resolve),
        children: [
            {
                path: '',
                component: resolve => require(['views/solution/index'], resolve),
                meta: {
                    title: '企业社交解决方案',
                    isLogin: false
                }
            },
            {
                path: 'manage',
                component: resolve => require(['views/solution/manage'], resolve),
                meta: {
                    title: '高管看板',
                    isLogin: false
                }
            },
            {
                path: 'party',
                component: resolve => require(['views/solution/party'], resolve),
                meta: {
                    title: '党建云',
                    isLogin: false
                }
            },
            {
                path: 'enterprise',
                component: resolve => require(['views/solution/enterprise'], resolve),
                meta: {
                    title: '企业号',
                    isLogin: false
                }
            },
            {
                path: 'taxSystem',
                component: resolve => require(['views/solution/taxSystem'], resolve),
                meta: {
                    title: '税务系统',
                    isLogin: false
                }
            }

        ]
    }
]
