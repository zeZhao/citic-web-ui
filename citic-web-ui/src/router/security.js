export default [
    {
        path: 'security',
        component: resolve => require(['views/main/index'], resolve),
        children: [
            {
                path: 'index',
                component: resolve => require(['views/security/index'], resolve),
                meta: {
                    title: '中信云等保2.0',
                    isLogin: false
                }
            },
        ]
    }
]
