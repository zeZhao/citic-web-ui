import Empty from '@/views/frame/empty'

export default [
    {
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
    }
]
