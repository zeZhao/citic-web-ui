export default [
    {
        path: 'blockChain',
        component: resolve => require(['views/main/index'], resolve),
        children: [
            {
                path: 'index',
                component: resolve => require(['views/blockChain/index'], resolve),
                meta: {
                    title: '中信区块链',
                    isLogin: false
                }
            },
        ]
    }
]
