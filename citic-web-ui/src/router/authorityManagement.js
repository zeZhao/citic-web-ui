import Empty from '@/views/frame/empty'

export default   {
    path: 'jurisdiction',
    component: Empty,
    children: [
      // {
      //   path: 'tenant-administrator-management',
      //   component: resolve => require(['views/console/authorityManagement/tenantAdministratorManagement'], resolve),
      //   meta: {
      //     title: '租户管理员管理',
      //     isLogin: true
      //   }
      // },
      {
        path: 'console-permission-allocation',
        component: resolve => require(['views/console/authorityManagement/consolePermissionAllocation'], resolve),
        meta: {
          title: '控制台权限分配',
          isLogin: true
        }
      },

    ]
  }
