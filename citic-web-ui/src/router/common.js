import EmptyRouter from '../views/base/EmptyRouter';
const login = resolve => require(['../views/common/login'], resolve);


export default
[
    {
        path: 'login',
        component: login,
    }
]
