export default [
    {
        path: 'specialTopic',
        component: resolve => require(['views/main/index'], resolve),
        children: [
            {
                path: 'index',
                component: resolve => require(['views/specialTopic/index'], resolve),
                meta: {
                    title: '国产软件专题',
                    isLogin: false
                }
            },
        ]
    }
]
