import icon0 from "static/images/consoleMenu/icon-home.png";
import icon1 from "static/images/consoleMenu/icon-zhgl.png";
import icon2 from "static/images/consoleMenu/icon-fyzx.png";
import icon3 from "static/images/consoleMenu/icon-fpgl.png";
import icon4 from "static/images/consoleMenu/icon-ddgl.png";
import icon5 from "static/images/consoleMenu/icon-sllb.png";
import icon8 from "static/images/consoleMenu/icon-jsgl.png";
import icon9 from "static/images/consoleMenu/icon-zhkt.png";
import icon10 from "static/images/consoleMenu/icon-agreement.png";
export default [
    {
        title: "控制台首页",
        icon: icon0,
        url: "/console/index"
    },
    {
        title: "订单列表",
        icon: icon4,
        url: "/console/order",
        // children: [
        //     { label: "我的订单", url: "/console/order"},
        //
        // ]
    },
    {
        title: "实例管理中心",
        icon: icon5,
        children: [
            { label: "实例列表", url: "/console/instance-manage/instance" },
            { label: "线下实例交付", url: "/console/instance-manage/approve" },
        ]
    },
    {
        title: "费用中心",
        code: "feeCenter",
        icon: icon2,
        children: [
            { label: "代金券查询", url: "/console/userCenter/cashCoupon/list" },
            { label: "账单查询", code: 'billQuery', url: "/console/bill/bill-query" },
            { label: "服务账单查询", code: 'serviceBillQuery', url: "/console/bill/service-bill-query" },
            { label: "收支明细", code: 'inOutBill', url: "/console/bill/in-out-bill" },
            { label: "付款管理", url: "/console/bill/payment-management" },
            { label: "明细账单", url: "/console/bill/detail-bill" },
            { label: "优惠券", url: "/console/bill/coupon" },
        ]
    },
    {
        title: "增值服务",
        icon: icon5,
        children: [
            { label: "在线认证", url: "/console/cert" },
            { label: "应用分发管理", url: "/console/app-distribute" },
        ]
    },
    {
        title: "权限管理",
        code: "auth",
        icon: icon8,
        children: [
            // { label: "租户管理员管理", url: "/console/jurisdiction/tenant-administrator-management" },
            { label: "控制台权限分配",url: "/console/jurisdiction/console-permission-allocation" },
        ]
    },

    // {
    //     title: "用户中心",
    //     icon: icon1,
    //     children: [
    //         { label: "个人资料", url: "" },
    //         { label: "安全设置", url: "" },
    //         { label: "实名认证", url: "" },
    //         { label: "机构管理", url: "" },
    //         { label: "用户管理", url: "" },
    //     ]
    // },

    {
        title: "配置管理",
        icon: icon9,
        children: [
            // { label: "协议签署", url: "" },
            // { label: "服务购买开通", url: "" },
            { label: "应用基线管理", url: "/console/appbase" },
            { label: "成本中心管理", url: "/console/costcenter" },
            // { label: "配置身份认证", url: "/console/identity-config" },
        ]
    },

    {
        title: "账户安全设置",
        icon: icon9,
        children: [
            { label: "操作保护设置", url: "/console/identity-config/action" },
            { label: "登录环境保护设置", url: "/console/identity-config/switch" },
        ]
    },

    {
        title: "发票管理",
        icon: icon3,
        children: [
            { label: "我的发票", url: "/console/userCenter/invoice/myInvoice" },
            { label: "发票信息配置", url: "/console/userCenter/invoice/infoConfig" },
            // { label: "发票申请", url: "/console/userCenter/invoice/list" },
            // { label: "发票申请进度", url: "/console/userCenter/invoice/applicationProgress" },
        ]
    },
    // {
    //     title: "创新应用管理",
    //     icon: icon4,
    //     url: "/console/app/list",
    // },
    {
        title: "服务合作协议",
        icon: icon10,
        url: "/console/agreement"
    }
]
