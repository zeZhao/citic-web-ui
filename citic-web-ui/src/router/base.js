
export default
    [
        {
            path: '*', component:resolve => require(['views/base/404'], resolve),
        }
    ]