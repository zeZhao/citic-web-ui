import Empty from '@/views/frame/empty'

const COUPON = resolve => require(['views/console/coupon/index'], resolve);

export default [
  {
    path: 'bill',
    component: Empty,
    children: [
      {
        path: 'bill-query',
        component: resolve => require(['views/console/bill/bill-query'], resolve),

        meta: {
          title: '账单查询',
          isLogin: true
        }
      },
      {
        path: 'service-bill-query',
        component: resolve => require(['views/console/bill/service-bill-query'], resolve),
        meta: {
          title: '服务账单查询',
          isLogin: true
        }
      },

      {
        path: 'service-bill-query-details',
        component: resolve => require(['views/console/bill/service-bill-query-details'], resolve),
        meta: {
          title: '实例详情',
          isLogin: true
        }
      },


      {
        path: 'in-out-bill',
        component: resolve => require(['views/console/bill/in-out-bill'], resolve),
        meta: {
          title: '收支明细',
          isLogin: true
        }
      },{
        path: 'coupon',
        component: COUPON,
        meta: {
          title: '优惠券',
          isLogin: true
        }
      },
      {
        path: 'detail-bill',
        component: resolve => require(['views/console/bill/detail-bill'], resolve),
        meta: {
          title: '明细账单',
          isLogin: true
        }
      },
      {
        path: 'payment-management',
        component: resolve => require(['views/console/bill/paymentManagement'], resolve),
        meta: {
          title: '付款管理',
          isLogin: true
        }
      },
      {
        path: 'payment-management-detile',
        component: resolve => require(['views/console/bill/paymentManagementDetile'], resolve),
        meta: {
          title: '付款详情',
          isLogin: true
        }
      }




    ]
  }
]
