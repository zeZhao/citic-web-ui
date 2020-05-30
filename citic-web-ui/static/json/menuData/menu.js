import Util from './util.js'

export default [
    {
        title: "弹性计算",
        childrenGroup: [
            {
                title: "弹性计算",
                children: [
                    { lable: "云服务器（阿里云）", url: "citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=vm" },
                    { lable: "云服务器(中信专有云)", url: "citic-web-ui/product/detail?service_id=7f87d54a35f811e78672705a" },
                    { lable: "云服务器(微软云)", url: "citic-web-ui/product/detail?supplierAlias=KLLT&serviceAlias=vm" },
                    { lable: "云服务器(金山云)", url: "citic-web-ui/product/detail?service_id=kec1a0637b2847b3c22373ad" },
                    { lable: "云服务器ECS（阿里金融云）", url: "citic-web-ui/product/detail?service_id=59cb56936c0c193094b4fb5f" },
                    { lable: "传统虚拟机（中企通信）", url: "citic-web-ui/product/detail?service_id=57981ab7e1983a04434e1b4e" },
                    { lable: "云磁盘（阿里云）", url: "citic-web-ui/product/detail?service_id=5836a0462fbaaf0aee0db7a2" },
                    { lable: "云磁盘(中信专有云)", url: "citic-web-ui/product/detail?service_id=5959f3f5bf213c5770d9a32b" },
                    { lable: "云磁盘(微软云)", url: "citic-web-ui/product/detail?supplierAlias=KLLT&serviceAlias=disk" },
                    { lable: "对象存储OSS（阿里云）", url: "citic-web-ui/product/detail?service_id=57721cb62fa45f06e1c013d6" },
                    { lable: "文件存储(阿里云)", url: "citic-web-ui/product/detail?service_id=5a4d8ba12cc1c614e497e178" },
                    { lable: "容器服务（阿里云）", url: "citic-web-ui/product/detail?service_id=57721abd2fa45f06e1c013d2" },
                    { lable: "消息队列（阿里云）", url: "citic-web-ui/product/detail?service_id=57721e052fa45f06e1c013da" },
                    { lable: "日志服务（阿里云）", url: "citic-web-ui/product/detail?service_id=5910162879c02c08c0102eaf" },
                    { lable: "物理服务器(腾讯云)", url: "citic-web-ui/product/detail?service_id=201709271272072521" },
                    //{ lable: "Oracle Java云服务(即将上线）", url: "" }
                ]
            }

        ]


    },

    {
        title: "网络与安全",
        childrenGroup: [
            {
                title: "网络与安全",
                children: [
                    { lable: "负载均衡（阿里云）", url: "citic-web-ui/product/detail?service_id=583b954378c93e0473411da8" },
                    { lable: "负载均衡(中信专有云)", url: "citic-web-ui/product/detail?service_id=5959f3f5bf213c5770d9a32e" },
                    { lable: "负载均衡(金山云)", url: "citic-web-ui/product/detail?service_id=slbaba9bab2b7be3bf381243" },
                    { lable: "弹性公网IP(阿里云)", url: "citic-web-ui/product/detail?service_id=58b3cc2618e1fb442d8f4077" },
                    { lable: "弹性IP(微软云)", url: "citic-web-ui/product/detail?supplierAlias=KLLT&serviceAlias=pip" },
                    { lable: "弹性IP（金山云）", url: "citic-web-ui/product/detail?service_id=eip58f9899c72fa618bc1d79" },

                    { lable: "VPN账号服务", url: "citic-web-ui/product/detail?service_id=201711211469711596" },
                    { lable: "NAT网关（阿里云）", url: "citic-web-ui/product/detail?service_id=58f6f22318795506e40112fc" },
                    { lable: "NAT网关（金山云）", url: "citic-web-ui/product/detail?service_id=nataba9bab2b7be3bf381243" },
                    { lable: "虚拟私有网络(金山云)", url: "citic-web-ui/product/detail?service_id=vpcaba9bab2b7be3bf381243" },
                    { lable: "NAT共享带宽包(阿里云)", url: "citic-web-ui/product/detail?service_id=58f86433434fa917ce66a178" },
                    { lable: "CDN（阿里云）", url: "citic-web-ui/product/detail?service_id=598aab5879c02c083df0ca1a" },
                    {
                        lable: "云安全防护（知道创宇）",
                        url: "citic-web-ui/product/detail?service_id=43a3921d-7479-43d0-a970-031699dcf9b6"
                    },
                    { lable: "云安全防护(360)", url: "citic-web-ui/product/detail?service_id=201711061628112233" },
                    // { lable: "云安全防护（阿里云）", url: "citic-web-ui/product/detail?service_id=599f864579c02c09eb174ff8" },
                    { lable: "Web应用防火墙（阿里云）", url: "citic-web-ui/product/detail?service_id=58465454b992230c4edfe723" },
                    { lable: "360天擎终端安全管理服务", url: "citic-web-ui/product/detail?service_id=201709130622276919" },
                    //{ lable: "态势感知（阿里云）", url: "citic-web-ui/product/detail?service_id=59c2063c6c0c191d905397d5" },

                    //{ lable: "安骑士（阿里云）", url: "citic-web-ui/product/detail?service_id=599a9516cc82a94038d212e3" },
                    // { lable: "堡垒机（驻云CSOS）", url: "citic-web-ui/product/detail?service_id=15085000078420607124" },
                    { lable: "堡垒机（阿里云）", url: "citic-web-ui/product/detail?service_id=59e45d6c2fe0373f04629fcf" },
                    { lable: "CA证书（阿里云）", url: "citic-web-ui/product/detail?service_id=59e440fd79c02c06000715c0" },
                    { lable: "SSL  VPN（深信服）", url: "citic-web-ui/product/detail?service_id=15085000078420607217" },
                    { lable: "IPv6转换服务（阿里云）", url: "citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=IPv6" },
                    { lable: "MPLS VPN网络服务(即将上线)", url: "" },
                    { lable: "DDos高防（阿里云）(即将上线)", url: "" },
                ]
            }
        ]

    },

    {
        title: "数据库",
        childrenGroup: [
            {
                title: "数据库",
                children: [
                    { lable: "云数据库RDS(阿里云)", url: "citic-web-ui/product/detail?service_id=5762107c6ae6ca04e14595b8" },
                    { lable: "云数据库 MongoDB（阿里云）", url: "citic-web-ui/product/detail?service_id=59b1fb661a74d146c4fa7eb4" },
                    { lable: "云数据库KRDS(金山云)", url: "citic-web-ui/product/detail?service_id=rds8e9a11fa6e6c4ab79b5df" },
                    { lable: "云数据库RDS(中信专有云)", url: "citic-web-ui/product/detail?service_id=5959f3f5bf213c5770d9a32c" },
                    // { lable: "云数据库 SQLServer（阿里云）", url: "citic-web-ui/product/detail?service_id=5762107c6ae6ca04e14595b8" },
                    // { lable: "云数据库 Percona(金山云)", url: "citic-web-ui/product/detail?service_id=rds8e9a11fa6e6c4ab79b5df" },
                    // { lable: "云数据库 PostgreSQL（阿里云）", url: "citic-web-ui/product/detail?service_id=5762107c6ae6ca04e14595b8" },
                    // { lable: "云数据库 PPAS（阿里云）", url: "citic-web-ui/product/detail?service_id=5762107c6ae6ca04e14595b8" },
                    { lable: "分布式关系型数据库DRDS（阿里云）", url: "citic-web-ui/product/detail?service_id=58e74c1a557f56075552c503" },
                    {
                        lable: "云数据库RDS只读(阿里云)", url: "citic-web-ui/product/detail?service_id=596ecb29027772050998969e"
                    },
                    { lable: "云数据库Redis（阿里云）", url: "citic-web-ui/product/detail?service_id=5785e232b9aa1e3769039c19" },
                    { lable: "oracle数据库服务(袋鼠云)", url: "citic-web-ui/product/detail?service_id=201709251994734055" },
                    {
                        lable: "Oracle 单机版",
                        url: "citic-web-ui/product/detail?supplierAlias=oracle&serviceAlias=rac"
                    },
                    {
                        lable: "Oracle RAC版",
                        url: "citic-web-ui/product/detail?supplierAlias=oracle&serviceAlias=racMulti"
                    },
                    { lable: "数据传输服务DTS（阿里云）", url: "citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=DTS" },
                ]
            }
        ],

    },

    {
        title: "企业应用",
        childrenGroup: [
            {
                title: "企业应用",
                children: [
                    { lable: "财务管理(用友NC)", url: "citic-web-ui/product/detail?service_id=15085000078420607107" },
                    { lable: "合并报表(天阳宏业)", url: "citic-web-ui/product/detail?service_id=201707270565691905" },
                    // { lable: "资金管理（MBS九恒星版）", url: "citic-web-ui/product/detail?service_id=201704242009327278" },
                    { lable: "全面预算（天阳宏业）", url: "citic-web-ui/product/detail?service_id=201707310410754332" },
                    { lable: "全面预算（海波龙）", url: "citic-web-ui/product/detail?service_id=201708140259262044" },
                    { lable: "移动报账(用友)", url: "citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbd" },
                    { lable: "友人才(用友)", url: "citic-web-ui/product/detail?service_id=20e7fd16-e5b0-46ec-bc8a-5a4a8232b313" },
                    { lable: "民主测评(宏景云)", url: "citic-web-ui/product/detail?service_id=201711200953567810" },
                    { lable: "项目协同（teambition）", url: "citic-web-ui/product/detail?service_id=41fc31a4-d0d7-4a1a-a3a5-744b8cec72a6" },
                    { lable: "集采平台", url: "citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbc" },
                    { lable: "企业邮箱(腾讯)", url: "citic-web-ui/product/detail?service_id=15085000078420607113" },
                    { lable: "OA(道一)", url: "citic-web-ui/product/detail?service_id=15085000078420607130" },
                    { lable: "OA(蓝凌)", url: "citic-web-ui/product/detail?service_id=15085000078420607142" },
                    { lable: "OA（致远）", url: "citic-web-ui/product/detail?service_id=201805150728934761" },
                    { lable: "视频会议(PEXIP)", url: "citic-web-ui/product/detail?service_id=15085000078420607229" },
                    // { lable: "企业云盘（书生）", url: "citic-web-ui/product/detail?service_id=201705080277338787" },
                    { lable: "企业云盘（联想）", url: "citic-web-ui/product/detail?service_id=201708231982199295" },
                    // { lable: "云客服（逸创免费版）", url: "citic-web-ui/product/detail?service_id=201708011317342711" },
                    { lable: "云客服(plus)", url: "citic-web-ui/product/detail?service_id=201708011340342711" },
                    { lable: "H5营销工具(易企秀)", url: "citic-web-ui/product/detail?service_id=201712211139843827" },
                    // { lable: "Office365 E3", url: "citic-web-ui/product/detail?service_id=201712071215703035" },
                    { lable: "Office365 ProPlus", url: "citic-web-ui/product/detail?service_id=201712071664731982" },
                    // { lable: "IT服务管理", url: "citic-web-ui/product/detail?service_id=201712211372342934" },
                    { lable: "一起写", url: "citic-web-ui/product/detail?service_id=201711061739112233" },
                    { lable: "ITSM（招银云创）", url: "citic-web-ui/product/detail?service_id=201905101464398259" },
                    { lable: "直播标准(越亮传奇)", url: "citic-web-ui/product/detail?service_id=201712211735524819" },
                    { lable: "直播定制（越亮传奇）", url: "citic-web-ui/product/detail?service_id=201712210464918160" },
                    { lable: "内容运营管理", url: "citic-web-ui/product/detail?service_id=201712141798667096" },
                    // { lable: "视频点播VOD（阿里云）", url: "citic-web-ui/product/detail?service_id=5a55d1585174ed4838b7145e" },
                    // {
                    //     lable: "项目协同（teambition）",
                    //     url: "citic-web-ui/product/detail?service_id=41fc31a4-d0d7-4a1a-a3a5-744b8cec72a6"
                    // },
                    { lable: "欧特克设计软件", url: "citic-web-ui/product/detail?service_id=201804181018502364" },
                    { lable: "域名注册", url: "citic-web-ui/product/detail?service_id=1446f6b8a4aa11e680f576304dec7eb7" },
                    { lable: "域名解析", url: "citic-web-ui/product/detail?service_id=206c3efc853b92c3779d730b9e7c2def" },
                    // { lable: "域名综合管理", url: "citic-web-ui/product/detail?service_id=8292cbcabc2d11e6a4a6cec0c932ce01" },
                    // { lable: "TMCH代理", url: "citic-web-ui/product/detail?service_id=94b5ddc6d65711e6bf26cec0c932ce01" },
                    // { lable: "建站服务", url: "citic-web-ui/product/detail?service_id=b29da2ee-5f58-45e3-b9cb-8adfd5251660" },
                    { lable: "快速建站(正邦)", url: "citic-web-ui/product/detail?service_id=fd0c9244-f1e6-49df-a18e-70ae7a1facbf" },
                    // { lable: "网络营销设计", url: "citic-web-ui/product/detail?service_id=f8b176f3-8191-489b-9abb-ea3ced517964" },
                    { lable: "中信文档云", url: Util.getSystemLink().data + "DOCCloud.jsp" },
                    { lable: "应用性能管理（云智慧）", url: "citic-web-ui/product/detail?service_id=1d8f7d7387cd4ca5a10825ff611e73ac" },
                    { lable: "Commvault数据保护服务", url: "citic-web-ui/product/detail?service_id=201711281818188888" },
                    { lable: "浏览器性能管理（云智慧）", url: "citic-web-ui/product/detail?service_id=79dc102e4fe7424486baa553de5da2e4" },
                    { lable: "移动应用性能管理（云智慧）", url: "citic-web-ui/product/detail?service_id=9238d564bb124feba97f84ca52446d7e" },
                    { lable: "testin定制服务-云测试定制版（云测）", url: "citic-web-ui/product/detail?service_id=201709071155275857" },
                    { lable: "testin标准服务-云测试标准版（云测）", url: "citic-web-ui/product/detail?service_id=201709080315782565" },

                    { lable: "HCM人力资源系统", url: "citic-web-ui/product/detail?service_id=fd92b676-1181-11ea-8988-7440bb434590" },

                ]

            }
        ],

    },

    {
        title: "物联网",
        childrenGroup: [
            {
                title: "物联网",
                children: [
                    { lable: "物联网OpenAPI", url: "apistore/apidetail.html?service_id=23414e76-3202-45f1-afbb-0fcfb642c2e6" },
                    { lable: "物联网控制台", url: "https://iot.c.citic/homepage" },
                    { lable: "物联网平台企业版", url: "citic-web-ui/product/detail?supplierAlias=things&serviceAlias=iotpro" },
                    { lable: "定制实施开发（物联网）", url: "https://www.c.citic/citic-web-ui/product/detail?service_id=201812172107925373" },
                ]

            },
            {
                title: '智慧建筑、智慧园区',
                children: [
                    { lable: "智慧建筑控制台", url: "https://bim.webuilding.net.cn/#/home" },
                    { lable: "智慧园区物联网平台企业版", url: "https://iot.c.citic/homepage#webuilding" },
                ]
            }
        ]

    },

    {
        title: "大数据",
        childrenGroup: [
            {
                title: "大数据",
                children: [
                    { lable: "大数据实施服务", url: "https://data.c.citic/dataWorks.jsp" },
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
                        url: "citic-web-ui/product/detail?service_id=5e51f757-f46a-4223-a9a5-65bac3163645"
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
                    {
                        lable: "Kafka",
                        url: "citic-web-ui/product/detail?service_id=0cff6582-6bfb-4560-a170-5a5180e9b363"
                    },
                    { lable: "EMR", url: Util.getSystemLink().dataIndex + "/EMR.jsp" },
                    { lable: "大数据开发套件", url: Util.getSystemLink().dataIndex + "/bigData.jsp" },
                    // { lable: "大数据平台套餐", url: Util.getSystemLink().data },
                    // { lable: "数据仓库组件套餐", url: Util.getSystemLink().data },
                    { lable: "Tableau桌面版", url: Util.getSystemLink().dataIndex + "/Tableau.jsp" },
                    { lable: "Tableau服务器版", url: Util.getSystemLink().dataIndex + "/Tableau.jsp" },
                    // { lable: "数说工场(免费)", url: Util.getSystemLink().data + "numFactory.jsp" },
                    // { lable: "企画师", url: Util.getSystemLink().data + "Painter.jsp" },
                    { lable: "日志云", url: Util.getSystemLink().dataIndex + "/LogCloud.jsp" },
                    { lable: "日志云实施服务", url: "citic-web-ui/product/detail?service_id=201710191272072521" },
                    // { lable: "数据洞察", url: Util.getSystemLink().data + "DataInsight.jsp" },
                    // { lable: "容器云", url: Util.getSystemLink().data + "CaseCloud.jsp" },
                    { lable: "数据大屏（即将上线）", url: "" },
                    { lable: "大数据开发门户", url: "https://data.c.citic/dataWorks.jsp" },
                    // { lable: "数据治理", url: Util.getSystemLink().data + "dataManage.jsp"},

                ]
            }
        ]

    },
    {
        title: "数据市场",
        childrenGroup: [
            {
                title: "数据市场",
                children: [
                    {
                        lable: "法律信息",
                        url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E6%B3%95%E5%BE%8B%E4%BF%A1%E6%81%AF"
                    },
                    {
                        lable: "企业信息",
                        url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E4%BC%81%E4%B8%9A%E4%BF%A1%E6%81%AF"
                    },
                    {
                        lable: "金融信息",
                        url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E9%87%91%E8%9E%8D%E4%BF%A1%E6%81%AF"
                    },
                    {
                        lable: "其他行业",
                        url: Util.getSystemLink().market + "views/goodsList/indexList.html?category=%E5%85%B6%E5%AE%83%E8%A1%8C%E4%B8%9A"
                    },
                ]
            }
        ]

    },
    {
        title: "人工智能",
        childrenGroup: [
            {
                title: "图像识别",
                children: [
                    // { lable: "情绪识别", url: "apistore/apidetail.html?service_id=3d47b510-dc32-4801-88c3-a354e09c983e" },
                    // { lable: "计算机视觉", url: "apistore/apidetail.html?service_id=a27a75c0-533f-4e75-8d92-5600f9141e8b" },
                    // { lable: "人脸识别", url: "apistore/apidetail.html?service_id=d149adb5-b1fe-481a-a294-68c7c2796fee" },
                    // { lable: "身份识别", url: "apistore/apidetail.html?service_id=e81e3c2f-622f-475e-a6da-3b526c167580" },

                    // { lable: "商汤人脸比对", url: "apistore/apidetail.html?service_id=c60d4f41-0e16-4452-946a-e554859d16ad" },
                    // { lable: "商汤人脸比对（其他辅助类）", url: "apistore/apidetail.html?service_id=c21cbb04-b88f-49a8-9c71-089fe4f2aafa" },
                    // { lable: "商汤人脸核身", url: "apistore/apidetail.html?service_id=d08b268a-df78-41b4-baef-c04fe607f448" },
                    // { lable: "商汤证卡OCR", url: "apistore/apidetail.html?service_id=a272032e-7f45-4717-805f-f970fa11dc57" },
                    // { lable: "党建知识API", url: "apistore/apidetail.html?service_id=c448ffb0-dc23-4674-80e2-928c17b344fa" },
                    // { lable: "AI工坊", url: "citic-web-ui/product/detail?service_id=201712050077199197" },
                    // { lable: "文档识别(即将上线)", url: "" },
                    { lable: "微软情绪识别", url: "apistore/apidetail.html?service_id=3d47b510-dc32-4801-88c3-a354e09c983e" },
                    { lable: "微软计算机视觉", url: "apistore/apidetail.html?service_id=a27a75c0-533f-4e75-8d92-5600f9141e8b" },
                    { lable: "商汤人脸对比", url: "apistore/apidetail.html?service_id=c60d4f41-0e16-4452-946a-e554859d16ad" },
                    { lable: "商汤人脸核身", url: "apistore/apidetail.html?service_id=d08b268a-df78-41b4-baef-c04fe607f448" },
                ]

            },
            {
                title: '热点数据',
                children: [
                    { lable: "企业工商信息", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17374" },
                    { lable: "企业工商信息（深度）查询", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17380" },
                    { lable: "司法涉诉监控", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17372" },
                    { lable: "司法涉诉查询", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17373" },
                    { lable: "银行卡四要素核验", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17338" },
                    { lable: "工商四要素", url: "https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17379" },
                    { lable: "企业砖石报告", url: "https://market.c.citic/views/goodsDetails/dataDetails.html?goods_id=17383" },
                    { lable: "企业族谱探寻", url: "https://market.c.citic/views/goodsDetails/dataDetails.html?goods_id=17386" },
                ]
            },
            {
                title: '大数据解决方案',
                children: [
                    { lable: "数据上云", url: "https://data.c.citic/shujushangyun.jsp" },
                    { lable: "数据仓库", url: "https://data.c.citic/shujucangku.jsp" },
                    { lable: "金融风险控制", url: "https://data.c.citic/jinrongfengxian.jsp" },
                    { lable: "智能工业4.0", url: "https://data.c.citic/zhinenggongye.jsp" },
                    { lable: "精准营销", url: "https://data.c.citic/jingzhunyingxiao.jsp" },
                ]
            }
        ]

    },
    {
        title: "移动",
        childrenGroup: [
            {
                title: "移动",
                children: [

                    { lable: "移动推送服务", url: "citic-web-ui/product/detail?service_id=598bbcba970b9b4148d78e80" },
                    { lable: "中信联盟", url: "apistore/apidetail.html?service_id=e881caa4-a505-45af-83fa-26cc8119d775" },
                    { lable: "移动社交平台（即将上线）", url: "" },
                ]
            }
        ]

    },
    {
        title: "解决方案",
        childrenGroup: [
            {
                title: "解决方案",
                children: [
                    { lable: "数字化应用创新APP解决方案", url: "views/developer.jsp" },
                    // { lable: "初创企业云服务直通车", url: "/product/newly-enterprise-service" },
                    { lable: "企业社交解决方案", url: "/solution" },
                    { lable: "高管看板解决方案", url: "/solution/manage" },
                    { lable: "企业号解决方案", url: "/solution/enterprise" },
                    { lable: "党建云解决方案", url: "/solution/party" },
                    { lable: "中信云税务系统解决方案", url: "/solution/taxSystem" },
                    { lable: "中信云等保2.0解决方案", url: "/security/index" }
                ]
            }

        ]

    },


    {
        title: "开发者服务",
        childrenGroup: [
            {
                title: "开发者服务",
                children: [
                    // { lable: "应用性能管理", url: "citic-web-ui/product/detail?service_id=1d8f7d7387cd4ca5a10825ff611e73ac" },
                    // { lable: "数据备份", url: "citic-web-ui/product/detail?service_id=201711281818188888" },
                    // { lable: "浏览器性能管理", url: "citic-web-ui/product/detail?service_id=79dc102e4fe7424486baa553de5da2e4" },
                    // { lable: "移动应用性能管理", url: "citic-web-ui/product/detail?service_id=9238d564bb124feba97f84ca52446d7e" },
                    { lable: "在线认证", url: "/product/cert/details" },


                    { lable: "天气查询服务", url: "apistore/apidetail.html?service_id=10c8f1a5-2b07-4cc2-bf26-3a803bbb354e" },
                    { lable: "企业年金", url: "apistore/apidetail.html?service_id=925d3994-4075-43b3-a128-78db2843890a" },
                    { lable: "中信云OpenAPI", url: "apistore/apidetail.html?service_id=c3472270-671d-4897-af94-c67fcbb04722" },

                    //{ lable: "地图服务", url: "apistore/apidetail.html?service_id=4b524916-3ca4-4c4b-8e5a-205e4224ce41" },
                    { lable: "短信服务", url: "apistore/apidetail.html?service_id=ef424d6a-ddf6-45d4-b9ee-b1086145928f0" },
                    { lable: "国际短信服务", url: "apistore/apidetail.html?service_id=bd25c684-f84b-49a3-8feb-fd88d692434c" },

                    { lable: "定制实施开发（数据库迁移）", url: "citic-web-ui/product/detail?service_id=201705090817658591" },
                    { lable: "定制实施开发（服务器迁移）", url: "citic-web-ui/product/detail?service_id=201705091587109265" },
                    { lable: "定制实施开发（用友NC）", url: "citic-web-ui/product/detail?service_id=201706191420945665" },
                    { lable: "定制实施开发（天阳宏业合并报表） ", url: "citic-web-ui/product/detail?service_id=201707282050020570" },
                    { lable: "定制实施开发（天阳宏业全面预算）", url: "citic-web-ui/product/detail?service_id=201707311496379762" },
                    { lable: "定制实施开发（腾讯企邮）", url: "citic-web-ui/product/detail?service_id=201707180746210586" },
                    { lable: "定制实施开发（蓝凌OA）", url: "citic-web-ui/product/detail?service_id=15085000078420607201" },
                    //{ lable: "定制实施开发（Apicloud）", url: "citic-web-ui/product/detail?service_id=201804190760291561" },
                    //{ lable: "定制实施开发（UPP）", url: "citic-web-ui/product/detail?service_id=201804181680346242" },
                    // { lable: "应用分发", url: "views/applicationDistribution/yingyongjieshao.jsp" },
                    // { lable: "testin定制服务", url: "citic-web-ui/product/detail?service_id=201709071155275857" },
                    // { lable: "testin标准服务", url: "citic-web-ui/product/detail?service_id=201709080315782565" },
                    { lable: "定制实施开发（移动社交）", url: "citic-web-ui/product/detail?service_id=201712141805727517" },
                    // { lable: "越亮传奇直播定制服务", url: "citic-web-ui/product/detail?service_id=201712210464918160" },

                    { lable: "设备托管服务（中信云）", url: "citic-web-ui/product/detail?service_id=201709120608299958" },
                    { lable: "定制实施开发（联创智融）", url: "citic-web-ui/product/detail?service_id=201803260606043782" },
                    { lable: "定制实施开发（瑞友）", url: "citic-web-ui/product/detail?service_id=201803260957901957" },
                    { lable: "定制实施开发（考奇）", url: "citic-web-ui/product/detail?service_id=201803261812923832" },
                    { lable: "定制实施开发（高伟达）", url: "citic-web-ui/product/detail?service_id=201801241622004088" },
                    { lable: "定制实施开发（Commvault）", url: "citic-web-ui/product/detail?service_id=201801301918461605" },
                    // { lable: "API集市", url: "https://www.c.citic/apistore/" },
                    { lable: "定制实施开发（中信云）", url: "citic-web-ui/product/detail?service_id=201807191187825325" },
                    // { lable: "定制实施开发（东方融创）", url: "citic-web-ui/product/detail?service_id=201807160719448721" },
                    // { lable: "定制实施开发（中软国际）", url: "citic-web-ui/product/detail?service_id=201807181118482872" },
                    // { lable: "定制实施开发（天阳宏业）", url: "citic-web-ui/product/detail?service_id=201807131896855244" },
                    // { lable: "定制实施开发（文思海辉）", url: "citic-web-ui/product/detail?service_id=201807170368682742" },
                    { lable: "定制实施开发（联想云盘）", url: "citic-web-ui/product/detail?service_id=201808032079744480" },
                    { lable: "定制实施开发（人力资源系统）", url: "citic-web-ui/product/detail?service_id=3cbea200-10c5-11ea-844f-7440bb434590" },
                    { lable: "定制实施开发（数据类/移动类/应用类产品）", url: "citic-web-ui/product/detail?service_id=4582e8b8-0f28-11ea-a3ee-784f439a6e52" },

                ]
            }
        ],

    },

    {
        title: "区块链",
        childrenGroup: [
            {
                title: "区块链",
                children: [
                    { lable: "区块链", url: "/blockChain/index" }
                ]
            }
        ],

    }
]
