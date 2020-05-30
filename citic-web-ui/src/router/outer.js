
export default
    [
        {
            path: 'outer/foot', component: resolve => require(['views/outerChain/outerFoot'], resolve),
            meta: {
                isNotIframe: true
            },
        }
    ]