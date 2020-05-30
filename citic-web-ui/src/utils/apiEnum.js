const API = {
    SERVICE_BY_ENUM_CREATE: 'create',

    // 新增实例获取表单条件
    CITIC_CONDITION_INITKEY: 'citic/condition/initkey',
    // 获取初始化key
    CITIC_CONDITION_ALIAS_INITKEY: 'citic/condition/alias/initkey',
    // 获得一个action对应全部结果参数值集合
    CITIC_CONDITION_RESULT: 'citic/condition/result',
    // 获取供应商服务详情
    SUPPLIER_SERVICES_SUPPLIERSERVICE: 'supplier/services/supplierservice',
    // 获取表单校验规则
    SUPPLIER_CHECK: 'supplier/check',
    // 动态校验表单项
    SUPPLIER_CHECK_KEYS: 'supplier/check/keys',

    // 获得用户详情
    USER_DETAIL: 'users/detail',
    // 控制台首页我的服务实例接口
    INSTANCES_SUMMARY: 'tenant/dashboard/instances/summary',
    // 控制台首页代办事项
    TODO_LIST: "tenant/dashboard/todo-list",
    // 控制台首页账户总览
    ACCOUNT_OVERVIEW: "tenant/dashboard/account/overview",
    // 获取token
    GET_TOKEN_URL: "users/token",

    // 租户分配vpc资源
    TENANT_RESOURCES_VPC: '/tenant-resources',
    // 产品中心获取供应商
    GET_SUPPLIERS: 'search/suppliers-all',
    // 获取标签
    GET_TAGS: 'search/tags',
    // 分页查询供应商服务详情，包括服务基本信息、标签信息、供应商信息。
    GET_SERVICES: 'search/services',
    // 产品详情kv配置
    JUMP_TYPE: {
        // 跳转到信云开购买页面
        serviceBuy: '/apistore/apidetail.html?service_id=',
        // 跳转到默认服务详情页面
        serviceDetail: '/citic-web-ui/product/detail?service_id=',
        // 跳转到新的产品详情页
        reconServiceDetails: '/citic-web-ui/product/detail',
        // 中信认证的链接 https:// www.c.citic/citic-web-ui/product/cert/details
        cert: '/citic-web-ui/product/cert/details',
        // 应用分发https:// www.c.citic/views/applicationDistribution/yingyongjieshao.jsp
        applicationDistribution: '/views/applicationDistribution/yingyongjieshao.jsp',
        // 自定义产品详情页面 (0: serviceAlias, 1: supplierAlias)
        customServiceDetails: '/citic-web-ui/product/#{0}/#{1}',
    },
    // 服务名称检索
    SEARCH_SERVICES: "search/serviceNames",
    // 获得租户信息详情
    TENANTS_DETAIL: "tenants/detail",

    // 创新应用 获取详情
    INNOVATE_INNOVATEINFO: 'citic/portal/innovate/innovateInfo',
    // 创新应用 列表
    INNOVATE_INNOVATELIST: 'citic/portal/innovate/innovatePage',
    // 创新应用 批量导入
    INNOVATE_INNOVATE_IMPORT: 'citic/portal/innovate/innovateImport',
    // 代金券
    TENANT_DASHBOARD_VOUCHER: "tenant/dashboard/voucher",

    // 获取应用基线
    USER_APP_BASES: 'users/app-bases',
    // 获取成本中心
    USER_COST_CENTERS: 'users/cost-centers',

    // 获取发票信息
    GET_INVOICE_INFO: "invoice/invoiceConfig",
    // 保存发票信息
    SAVE_INVOICE_INFO: "invoice/submitInvoiceConfig",
    // 发票列表
    TENANTS_INVOICE_QUERY: '/invoice/getInvoiceInfoPage',
    // 保存发表
    TENANTS_INVOICE_CONFIRM: '/invoice/applyInvoice',
    // 我的发票 发票列表
    TENANTS_BILL_DETAIL: '/payment/service-bill/list',

    // 获取应用首页top10
    INNOVATE_INNOVATETOP: "citic/portal/innovate/innovateTop",
    // 获取注册用户数top10
    INNOVATE_REGISTERUSERTOP: "citic/portal/innovate/innovateRegisterUserTop",
    // 获取交易数量top10
    INNOVATE_TRADENUMTOP: "citic/portal/innovate/innovateTradeNumTop",
    // 获取覆盖的业务和产品数量top10
    INNOVATE_COVERNUMTOP: "citic/portal/innovate/innovateCoverNumTop",
    // 获取活跃用户数top10
    INNOVATE_ACTIVEUSERTOP: "citic/portal/innovate/innovateActiveUserTop",
    // 获取应用创新首页租户信息
    INNOVATE_INNOVATETENANTDATA: "citic/portal/innovate/innovateTenantData",
    // 获取应用首页按项目需求查询应用数
    INNOVATE_INNOVATEPROJECTSTAGECOUNT: "citic/portal/innovate/innovateProjectStageCount",
    // 获取创新应用租户信息
    INNOVATE_INNOVATETENANTINFO: "citic/portal/innovate/innovateTenantInfo",
    // 按照项目阶段查询应用分档
    INNOVATE_INNOVATEPROJECTSTAGEINFO: "citic/portal/innovate/innovateProjectStageInfo",
    // 获取创新应用市场服务列表
    INNOVATE_INNOVATEMARKET: "citic/portal/innovate/innovateMarket",
    // 获取应用首页按应用类型查询应用信息
    INNOVATE_INNOVATEAPPLICATIONTYPE: "citic/portal/innovate/innovateApplicationType",

    // 购物车
    SHOPPING_CART_PRODUCTS: 'shopping-cart/products',
    // 购物车获取数量
    SHOPPING_CART_PRODUCTS_COUNT: 'shopping-cart/products/count ',
    // 新的计算商品价格
    CITIC_PRICE: 'citic/price',

    // 获取订单列表
    ORDERS: 'orders',

    // 购物车创建订单
    ORDERS_CREATION_BY_SHOPPING_CART: 'orders/creation/by-shopping-cart',

    // 根据别名换取supplierId serviceId actionId
    CITIC_CONDITION_IDS: 'citic/condition/ids',

    // 地域
    AREA_PROVINCE: 'area/province',
    // 城市
    AREA_CITY: 'area/city',
    // 提交订单
    SRVMGT_ORDER: 'srvmgt/orders/update',

    // 发起中信云安全认证
    AUTH_LAUNCH_SECURITY_AUTH: 'auth/launchSecurityAuth',
    // 获取产品详情
    SUPPLIER_SERVICE_DETAIL: 'supplier/service/detail',

    // 获取关联的服务详情数据
    CITIC_SERVICE_SERVICE_ID_METADATA: 'citic/service/#{0}/metadata',

    // 查询供应商服务详情
    SUPPLIER_SERVICES_SUPPLIER_SERVICE_ID: 'supplier/services/#{0}',

    // 下载文件接口
    COMMON_DOWNLOAD_BUSINESS: 'common/download?ossKey=#{0}',

    // 账单查询
    BILL_QUERY: 'bill/tenantBillSearch',
    // 服务账单
    SERVICE_BILL_QUERY: 'bill/ServiceBillSearch',
    // 下载服务账单
    DOWNLOAD_SERVICER_BILL: 'bill/downloadServiceBill',
    // 收支明细列表
    TENANT_IN_OUT_FUND: 'bill/tenantInOutFund',
    // 成本中心get查询 post创建  put修改
    CITIC_COSTCENTEROFFICE: "costcenteroffice",
    // 获得成本中心列表数据get
    CITIC_COSTCENTEROFFICE_COST_CENTERS: "costcenteroffice/cost-centers",

    // 订单删除一个实例
    ORDERS_ORDER_ID_PURCHASE_ID_INVENTORY_CANCEL: 'orders/#{0}/#{1}/inventory/cancel',
    // 取消订单
    ORDERS_ORDER_ID_CANCEL: 'orders/#{0}/cancel',
    // 提交订单
    ORDERS_ORDER_ID_SUBMIT: 'orders/#{0}/submit',
    // 订单详情
    ORDERS_ORDER_ID_INVENTORY: 'orders/#{0}/inventory',
    // 订单审批
    ORDERS_ORDERS_AUDITS: 'orders/orders/audits',

    // 获取账户信用信息
    CITIC_ACCOUNT_CREDIT_TID: 'citic/account/credit/tid',

    // 设置预警额度
    CITIC_ACCOUNT_CREDIT_WARNING: 'citic/account/credit/warning',

    // costcenteroffice/all 查询全部成本中心
    CITIC_COSTCENTEROFFICE_ALL: 'costcenteroffice/all',

    // 业务类型集 : 业务类型处理接口集
    CITIC_BUSINESS_TYPE_CHILD: 'businessType/child',

    // 服务列表
    CITIC_PORTAL_INSTANCE_GETSERVICESBYNAME: 'citic/portal/instance/getServicesByName',

    // 实例列表
    CITIC_PORTAL_INSTANCE_GETINSTANCENEWLIST: 'citic/portal/instance/getInstanceNewList',

    // 实例详情
    CITIC_PORTAL_INSTANCE_GETINSTANCENEWDETAIL: 'citic/portal/instance/getInstanceNewDetail',

    // 下载sdk
    CITIC_PORTAL_INSTANCE_DOWNLOADSDK: 'citic/portal/instance/downloadSDK',

    // 打开百分点数据展示页面
    CITIC_PORTAL_INSTANCE_SHOWBFDDATA: 'citic/portal/instance/showBFDdATA',

    // 开通、关闭自动续费
    CITIC_PORTAL_INSTANCE_RENEWALINSTANCE: 'citic/portal/instance/renewalInstance',

    // 释放实例
    CITIC_PORTAL_INSTANCE_DELETEINSTANCE: 'citic/portal/instance/deleteInstance',

    // 供应商列表
    CITIC_PORTAL_INSTANCE_QUERY_INSTANCE_NEW_PROVIDER: 'citic/portal/instance/queryInstanceNewProvider',

    // 账单查询 下载
    BILL_TENANT_BILL_DOWNLOAD: 'bill/tenantBillDownload',
    // 产品是否可以购买
    SERVICE_CAN_BUY: 'srvmgt/service/canbuy',

    // 应用分发列表
    APP_DISTRIBUTION_INSTANCES: 'appDistribution/instances',
    // 应用分发百分点链接
    APP_DISTRIBUTION_BAIFENDIAN_CONSOLE_URL: 'appDistribution/baifendianConsoleUrl',
    // 应用分发百分点sdk下载
    APP_DISTRIBUTION_BAIFENDIAN_SDK_URLS: 'appDistribution/baiFenDianSdkUrls',
    // 应用分发app下载
    APP_DISTRIBUTION_APP_OSS_UPLOAD: 'appDistribution/app/oss/upload',
    // 发起安全检测
    APP_DISTRIBUTION_APP_DETECT_REDETECT: 'appDistribution/app/detect/redetect',

    // 成本中心列表
    COST_CENTER_OFFICE_ALL: 'costcenteroffice/all',
    // 查询租户付款信息列表
    CITIC_PORTA_PAYMENT_PAGE_LIST: "payment/pageList",
    // 查询租户付款信息详情
    PAYMENT_SERVER_BILL_LIST: 'payment/service-bill/list',
    // 查询租户账期月付款信息
    PAYMENT_ACCOUNT_PERIOD: 'payment/{accountPeriod}',
    // 下载收款通知书
    PAYMENT_BILLING_DETAIL_DOWNLOAD: 'payment/billingDetailDownload',

    // GET 初始化服务合作协议租户信息
    LOAD_AGREEMENT_ESSENTIAL_INFO: 'agreement/loadAgreementEssentialInfo',
    // POST 添加协议
    ADD_AGREEMENT: 'agreement/addAgreement',
    // GET 判断是否重复签署
    JUDGING_DUPLICATE_SIGNATRUE: 'agreement/judgingDuplicateSignature',

    // 根据ID查询服务条款内容
    TERMS_OF_CONDITIONS_CONTENT: 'terms-of-conditions/content',
    // 根据服务ID和供应商ID查询服务条款基本信息
    TERMS_OF_CONDITIONS_SERVICEID_SUPPLIERID: 'terms-of-conditions/#{0}/#{1}',

    // 优惠券列表
    COUPON_USER_COUPON_COUPON_LIST: 'coupon/userCoupon/couponList',

    // 获取可用优惠券
    ORDERS_ORDERID_COUPONS: 'orders/#{0}/coupons',

    // 订单提交
    ORDERS_ORDERID_SUBMIT: 'orders/#{0}/submit',

    // POST 中信认证实例列表查询
    CITIC_AUTH_GET_AUTH_INSTANCE_LIST: 'citicAuth/getAuthInstanceList',

    // GET  查询实例详情
    CITIC_AUTH_GET_AUTH_INSTANCE_DETAIL: 'citicAuth/getAuthInstanceDetail',

    // GET   取消实例
    CITIC_AUTH_CANCEL_AUTH: 'citicAuth/cancelAuth',

    // GET  下载安装文档
    CITIC_AUTH_DOWNLOAD_INSTALLATION_DOC: 'citicAuth/download/installationDoc',

    // PUT 重新发起安全认证审批
    CITIC_AUTH_RELAUNCH_AUTH: 'citicAuth/relaunchAuth',

    // GET 获取证书信息
    CITIC_AUTH_CERTIFICATION: 'citicAuth/certification',

    // GET 查询已认证公司
    CITIC_AUTH_AUTHED_TENANTS: 'citicAuth/authedTenants',
    //GET 修改认证实例
    CITIC_AUTH_UPDATE_AUTHED: 'citicAuth/updateAuth',

    // 发送短信验证码
    USER_VERIFY_SEND_USER_VERIFY_SMS: 'userVerify/sendUserVerifySms',
    // 校验短信验证码
    USER_VERIFY_CHECK_USER_VERIFY_CODE: 'userVerify/checkUserVerifyCode',

    // 加入订单，立即购买
    SRVMGT_ORDERS_UPDATE: 'srvmgt/orders/update',

    // 用户操作认证
    USER_OPERATION_VERIFY_CHECK_USER_OPERATION_VERIFY: 'userOperationVerify/checkUserOperationVerify',

    // 保存用户配置菜单关系表
    USER_OPERATION_VERIFY_SAVE_USER_VERIFY_MAPPING: 'userOperationVerify/saveUserVerifyMapping',

    // 发送用户菜单配置短信验证码
    USER_OPERATION_VERIFY_SEND_USER_CONFIG_MENU_SMS: 'userOperationVerify/sendUserConfigMenuSms',

    // 发送用操作校验验证码
    USER_OPERATION_VERIFY_SEND_USER_VERIFY_MENU_SMS: 'userOperationVerify/sendUserVerifyMenuSms',

    // 查询用户配置菜单数据
    USER_OPERATION_VERIFY_USER_OPERATION_VERIFY_MENU: 'userOperationVerify/userOperationVerifyMenu',

    // 根据用户id查询用户所配置的菜单信息
    USER_OPERATION_VERIFY_USER_VERIFY_MAPPING: 'userOperationVerify/userVerifyMapping',

    // 用户配置菜单验证码校验
    USER_OPERATION_VERIFY_MENU_CONFIG_CHECK_USER_VERIFY_CODE: 'userOperationVerify/menuConfig/checkUserVerifyCode',

    // 用户执行操作验证码校验
    USER_OPERATION_VERIFY_OPERATION_CHECK_USER_VERIFY_CODE: 'userOperationVerify/operation/checkUserVerifyCode',

    //GET 服务账单查询
    CITIC_BILL_SELECT_SERVICE_BILL: 'bill/selectServiceBill',
    //GET 实例详单查询
    CITIC_BILL_SELECT_INSTANCE_BILL: 'bill/selectInstanceBill',
    //GET 获得初始化key
    CITIC_SERVICE_CONFIG_KV_INIT: 'citic/service/config/kv/init/SERVICEID',
    //POST 推导关联关系
    CITIC_SERVICE_CONFIG_KVRELATION: 'citic/service/config/kvRelation/SERVICEID/ACTIONID',
    // POST /BUY/UPDATEPRICES 变配续费算费
    CITIC_BUY_UPDATEPRICES: 'buy/updatePrices',
    //POST 新版创建订单
    CITIC_ORDER_CREATE: 'orders/orders/create',
    //get 根据serviceid获得服务详情 /supplier/services/supplierServiceByAdapterServiceId
    CITIC_SUPPLIER_SERVICES_SUPPLIERSERVICEBYADAPTERSERVICEID: "supplier/services/supplierServiceByAdapterServiceId",
    // PUT 新变配生成订单
    CITIC_ORDERS_ORDERS_RECONFIG: "orders/orders/reconfig",
    //get actionID换actincType
    CITIC_SERVICE_CONFIG_ACTION: 'citic/service/config/action/ID',


    // GET 获得开通型服务价格
    CITIC_SUPPLIER_SERVICES_OPENING_PRICE:'supplier/services/opening-price/SERVICEID',

    // GET 获取用户接受短信验证码方式
    USER_VERIFY_GET_RECIPIENT_INFO:'userVerify/get-recipient-info',

    // GET 获取用户接受短信验证码方式
    USER_ACTION_SWITCH_GET_CONFIG:'user-action-switch/get-config',

    // POST 获取用户接受短信验证码方式
    USER_ACTION_SWITCH_SET_CONFIG:'user-action-switch/set-config',

    // 发送操作开关设置短信验证码
    USER_ACTION_SWITCH_SEND_SET_ACTION_VERIFY_CODE:'user-action-switch/send-set-action-verify-code',

    // 校验操作开关设置短信验证码
    USER_ACTION_SWITCH_CHECK_SET_ACTION_VERIFY_CODE:'user-action-switch/check-set-action-verify-code',
    // GET 实例ID获得实例详情

    CITIC_PORTAL_INSTANCE_GETINSTANCENEWBUYDETAIL:"citic/portal/instance/getInstanceNewBuyDetail/INSTANCEID",

    // 线下实例审批列表
    GENERAL_INSTANCE_PAGE: 'general-instance/page',

    // 线下实例审批详情
    GENERAL_INSTANCE_APPROVE_DETAIL: 'general-instance/approve-detail',

    // 审批下下实例
    GENERAL_INSTANCE_APPROVE: 'general-instance/approve',

    // 线下实例审批记录
    GENERAL_INSTANCE_APPROVE_LOG: 'general-instance/approve-log',

    // 通用文件上传接口
    COMMON_UPLOAD_FILE: 'common/upload-file/#{0}',

    // 查询线下实例待审批数量
    GENERAL_INSTANCE_COUNT_WAIT_APPROVE: 'general-instance/count-wait-approve',
    //token验证
    USERS_VERIFYTOKEN:'users/verifyToken'
    
};

export default API
// new Proxy(AIP, {
//     set: function (target, key, value, receiver) {
//         console.warn(`不允许修改API_ENUM配置项,${key}=${value}`);
//         return Reflect.set(target, key, target[key], receiver);
//     }
// });
