import Util from './util.js'

export default [
    {
        title: "大数据基础服务",
        children: [
            {
                lable: "HDFS",
                url: "views/cloud/buy.jsp?serviceId=df12f3db-4ce7-4ec0-81f5-3f357e571883&serviceTypeId=1"
            },
            {
                lable: "Spark",
                url: "views/cloud/buy.jsp?serviceId=4e8fc8ee-7c45-4cf6-8686-8df25a2cc6e7&serviceTypeId=1"
            },
            {
                lable: "MapReduce",
                url: "views/cloud/buy.jsp?serviceId=5e51f757-f46a-4223-a9a5-65bac3163645&serviceTypeId=1"
            },
            {
                lable: "Hive",
                url: "views/cloud/buy.jsp?serviceId=91fe7e17-5718-4ec9-b64c-c93c10f106cc&serviceTypeId=1"
            },
            {
                lable: "Hbase",
                url: "views/cloud/buy.jsp?serviceId=91fe7e17-5718-4ec9-b64c-c93c10f106aa&serviceTypeId=1"
            },
            {
                lable: "Greenplum",
                url: "views/cloud/buy.jsp?serviceId=6c81de94-fa9a-4627-8f59-93c018990be5&serviceTypeId=1"
            },
            // { lable: "大数据平台套餐", url: Util.getSystemLink().data },
            // { lable: "数据仓库组件套餐", url: Util.getSystemLink().data },
            { lable: "大数据实施", url: "https://www.c.citic/citic-web-ui/product/detail?service_id=201804090137360600" },
        ]
    },
    {
        title: "数据市场",
        children: [
            { lable: "法律信息", url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E6%B3%95%E5%BE%8B%E4%BF%A1%E6%81%AF" },
            { lable: "企业信息", url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E4%BC%81%E4%B8%9A%E4%BF%A1%E6%81%AF" },
            { lable: "金融信息", url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E9%87%91%E8%9E%8D%E4%BF%A1%E6%81%AF" },
            { lable: "其他行业", url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E5%85%B6%E5%AE%83%E8%A1%8C%E4%B8%9A" },
        ]
    },
    {
        title: "数据应用",
        children: [
            // { lable: "企画师", url: Util.getSystemLink().data + "Painter.jsp" },
            { lable: "日志云", url: Util.getSystemLink().data + "LogCloud.jsp" },
            { lable: "日志云实施服务", url: "citic-web-ui/product/detail?service_id=201710191272072521" },
            // { lable: "数据洞察", url: Util.getSystemLink().data + "DataInsight.jsp" },
        ]
    },
    {
        title: "数据分析及可视化",
        children: [
            { lable: "Tableau桌面版", url: Util.getSystemLink().data + "Tableau.jsp" },
            { lable: "Tableau服务器版", url: Util.getSystemLink().data + "Tableau.jsp" },
            // { lable: "数说工场(免费)", url: Util.getSystemLink().data + "numFactory.jsp" },
            { lable: "数据大屏（即将上线）", url: "" },
        ]
    },
]
