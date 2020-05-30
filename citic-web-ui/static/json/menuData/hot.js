import Util from './util.js'

export default [
    {
        lable: "360天擎服务",
        url:
            "citic-web-ui/product/detail?service_id=201709130622276919"
    },
    {
        lable: "数据备份",
        url:
            "citic-web-ui/product/detail?service_id=201711281818188888"
    },
    {
        lable: "齐治云堡垒",
        url:
            "citic-web-ui/product/detail?service_id=201803080035979880"
    },
    {
        lable: "云服务器",
        url:
            "/product/detail?supplierAlias=aliyun&serviceAlias=vm"
    },
    {
        lable: "在线认证",
        url: "/product/cert/details"
    },
    { lable: "大数据套餐 ", url: Util.getSystemLink().data },
    {
        lable: "人脸识别",
        url:
            "apistore/apidetail.html?service_id=d08b268a-df78-41b4-baef-c04fe607f448"
    },
    {lable: "API集市", url: Util.getSystemLink().apiStore},
    {lable: "Oracle", url: "/product/detail?supplierAlias=oracle&serviceAlias=racMulti"},
]
