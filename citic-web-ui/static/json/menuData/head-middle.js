import Util from './util.js'

export default {
    main: [
        { lable: "产品中心", url: "/citic-web-ui/product/center" },
        { lable: "物联网", url: "https://iot.c.citic/" },
        { lable: "大数据", url: Util.getSystemLink().dataIndex },
        {
            lable: "在线认证",
            url: "/product/cert/details"
        },
        // { lable: "创新创业", url: "http://startup.citic.com/" }
    ],
    center:[
        { lable: "产品中心", url: "/citic-web-ui/product/center" },
        { lable: "物联网", url: "https://iot.c.citic/" },
        { lable: "大数据", url: Util.getSystemLink().dataIndex },
        {
            lable: "在线认证",
            url: "/product/cert/details"
        },
        // { lable: "创新创业", url: "http://startup.citic.com/" }
    ]
}
