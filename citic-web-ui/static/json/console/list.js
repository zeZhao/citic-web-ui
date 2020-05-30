import aliLogo from "static/images/console/ali-logo.png";
import yunzhihuiLogo from "static/images/console/yunzhihui-logo.png";
import zhongxinyunLogo from "static/images/console/zhongxinyun-logo.png";
import jinshanyunLogo from "static/images/console/jinshanyun-logo.png";
import percentLogo from "static/images/console/percent-logo.png";
import yiqixiuLogo from "static/images/console/yiqixiu-logo.png";
import micsoftLogo from "static/images/console/micsoft-logo.png";
import commvaultLogo from "static/images/console/commvault-logo.png";

import Util from '../menuData/util.js'

export default {
    data: [
        {
            serviceName: "阿里云",
            imageUrl: aliLogo,
            list: [
                {
                    lable: "云服务器ECS",
                    jumpType: 'iframe',
                    url: "console/ali/ecs",
                    param: '',
                    display: true,
                    serviceId: '576206bb6ae6ca04e145958d'
                },
                {
                    lable: "云数据库RDS",
                    jumpType: 'iframe',
                    url: "console/ali/rds",
                    param: '',
                    display: true,
                    serviceId: '5762107c6ae6ca04e14595b8'
                },
                {
                    lable: "弹性公网IP",
                    jumpType: 'iframe',
                    url: "console/ali/eip",
                    param: '',
                    display: true,
                    serviceId: '58b3cc2618e1fb442d8f4077'
                },
                {
                    lable: "云数据库MongoDB",
                    jumpType: 'iframe',
                    url: "console/ali/mongodb",
                    param: '',
                    display: true,
                    serviceId: '59b1fb661a74d146c4fa7eb4'
                },
                {
                    lable: "容器服务",
                    jumpType: 'iframe',
                    url: "console/ali/cs",
                    param: '',
                    display: true,
                    serviceId: '57721abd2fa45f06e1c013d2'
                },
                {
                    lable: "负载均衡",
                    jumpType: 'iframe',
                    url: "console/ali/slb",
                    param: '',
                    display: true,
                    serviceId: '583b954378c93e0473411da8'
                },
                {
                    lable: "对象存储OSS",
                    jumpType: 'iframe',
                    url: "console/ali/oss",
                    param: '',
                    display: true,
                    serviceId: '57721cb62fa45f06e1c013d6'
                },
                {
                    lable: "云数据库Redis",
                    jumpType: 'iframe',
                    url: "console/ali/redis",
                    param: '',
                    display: true,
                    serviceId: '5785e232b9aa1e3769039c19'
                },
                {
                    lable: "专有网络VPC(阿里云)",
                    jumpType: 'iframe',
                    url: "console/ali/vpc",
                    param: '',
                    display: true,
                    serviceId: 'ALI_VPC'
                },
                {
                    lable: "RAM控制台",
                    jumpType: 'iframe',
                    url: "console/ali/ram",
                    param: '',
                    display: false,
                    serviceId: '5adc3d2273310a3c8e7a410a'
                },
                {
                    lable: "云监控CMS",
                    jumpType: 'iframe',
                    url: "console/ali/cms",
                    param: '',
                    display: true,
                    serviceId: 'ALI_CMS'
                },
                {
                    lable: "内容分发CDN",
                    jumpType: 'iframe',
                    url: "console/ali/cdn",
                    param: '',
                    display: true,
                    serviceId: '598aab5879c02c083df0ca1a'
                },
                {
                    lable: "云盾",
                    jumpType: 'iframe',
                    url: "console/ali/waf",
                    param: '',
                    display: true,
                    serviceId: '58465454b992230c4edfe723'
                },
                {
                    lable: "堡垒机",
                    jumpType: 'iframe',
                    url: "console/ali/bastion",
                    param: '',
                    display: true,
                    serviceId: '59e45d6c2fe0373f04629fcf'
                },
                {
                    lable: "数据传输",
                    jumpType: 'iframe',
                    url: "console/ali/dts",
                    param: '',
                    display: true,
                    serviceId: '201906141012828734'
                },
                {
                    lable: "消息队列",
                    jumpType: 'iframe',
                    url: "console/ali/ons",
                    param: '',
                    display: true,
                    serviceId: '57721e052fa45f06e1c013da'
                },
                {
                    lable: "日志服务",
                    jumpType: 'iframe',
                    url: "console/ali/log",
                    param: '',
                    display: true,
                    serviceId: '5910162879c02c08c0102eaf'
                },
                {
                    lable: "短信服务SMS",
                    jumpType: 'iframe',
                    url: "console/ali/sms",
                    param: '',
                    display: true,
                    serviceId: 'ef424d6a-ddf6-45d4-b9ee-b1086145928f0'
                },
                {
                    lable: "CA证书服务",
                    jumpType: 'iframe',
                    url: "console/ali/cas",
                    param: '',
                    display: true,
                    serviceId: '59e440fd79c02c06000715c0'
                },
                {
                    lable: "安骑士",
                    jumpType: 'iframe',
                    url: "console/ali/aqs",
                    param: '',
                    display: true,
                    serviceId: '599a9516cc82a94038d212e3'
                },
                {
                    lable: "分布式数据库DRDS",
                    jumpType: 'iframe',
                    url: "console/ali/drds",
                    param: '',
                    display: true,
                    serviceId: '58e74c1a557f56075552c503'
                },
                {
                    lable: "金融云ECS",
                    jumpType: 'iframe',
                    url: "console/ali/finance-ecs",
                    param: '',
                    display: true,
                    serviceId: '59cb56936c0c193094b4fb5f'
                },
                {
                    lable: "视频点播VOD",
                    jumpType: 'iframe',
                    url: "console/ali/vod",
                    param: '',
                    display: true,
                    serviceId: '5a55d1585174ed4838b7145e'
                },
                {
                    lable: "态势感知",
                    jumpType: 'iframe',
                    url: "console/ali/sas",
                    param: '',
                    display: true,
                    serviceId: '59c2063c6c0c191d905397d5'
                },
                {
                    lable: "文件存储NAS",
                    jumpType: 'iframe',
                    url: "console/ali/nas",
                    param: '',
                    display: true,
                    serviceId: '5a4d8ba12cc1c614e497e178'
                },
                {
                    lable: "移动推送MHub",
                    jumpType: 'iframe',
                    url: "console/ali/mhub",
                    param: '',
                    display: true,
                    serviceId: '598bbcba970b9b4148d78e80'
                },
                {
                    lable: "加密服务HSM",
                    jumpType: 'iframe',
                    url: "console/ali/hsm",
                    param: '',
                    display: true,
                    serviceId: '5adc491973310a4baca4a648'
                },
                {
                    lable: "IPv6转换服务",
                    jumpType: 'iframe',
                    url: "console/ali/ipv6",
                    param: '',
                    display: true,
                    serviceId: '5c937034c797a800013c73cc'
                },
                {
                    lable: "云防火墙",
                    jumpType: 'iframe',
                    url: "console/ali/sfw",
                    param: '',
                    display: true,
                    serviceId: '59c2063c6c0c181d905397d5'
                },
                // TODO 查serviceId
                {lable: "备案服务", jumpType: 'iframe', url: "console/ali/bsn", param: '', display: true, serviceId: 'ALI_BSN'},
                {lable: "云安全中心", jumpType: 'iframe', url: "console/ali/sasnext", param: '', display: true,},
            ]
        },
        {
            serviceName: "云智慧",
            imageUrl: yunzhihuiLogo,
            list: [
                {
                    lable: "透视宝",
                    jumpType: 'iframe',
                    url: "console/tou-shi-bao",
                    param: {serviceId: '1d8f7d7387cd4ca5a10825ff611e73ac'},
                    display: true,
                    serviceId: '1d8f7d7387cd4ca5a10825ff611e73ac'
                },
            ]
        },
        {
            serviceName: "中信云",
            imageUrl: zhongxinyunLogo,
            list: [
                {
                    lable: "API集市",
                    jumpType: 'iframe',
                    url: "console/api-console",
                    param: '',
                    display: true,
                    serviceId: 'CITIC_API'
                },
                {
                    lable: "大数据多租户管理平台",
                    jumpType: 'blank-link',
                    url: Util.getSystemLink().datacloudConsole,
                    param: '',
                    display: true,
                    serviceId: 'CITIC_BIGDATA'
                },
            ]
        },
        {
            serviceCategoryName: "金山云",
            imageUrl: jinshanyunLogo,
            list: [
                {
                    lable: "负载均衡",
                    jumpType: 'iframe',
                    url: "console/ks-yun/slb",
                    param: {serviceId: 'slbaba9bab2b7be3bf381243'},
                    display: true,
                    serviceId: 'slbaba9bab2b7be3bf381243'
                },
                {
                    lable: "公网NAT",
                    jumpType: 'iframe',
                    url: "console/ks-yun/nat",
                    param: {serviceId: 'nataba9bab2b7be3bf381243'},
                    display: true,
                    serviceId: 'nataba9bab2b7be3bf381243'
                },
                {
                    lable: "弹性IP",
                    jumpType: 'iframe',
                    url: "console/ks-yun/eip",
                    param: {serviceId: 'eip58f9899c72fa618bc1d79'},
                    display: true,
                    serviceId: 'eip58f9899c72fa618bc1d79'
                },
                {
                    lable: "云服务器",
                    jumpType: 'iframe',
                    url: "console/ks-yun/kec",
                    param: {serviceId: 'kec1a0637b2847b3c22373ad'},
                    display: true,
                    serviceId: 'kec1a0637b2847b3c22373ad'
                },
                {
                    lable: "云数据库",
                    jumpType: 'iframe',
                    url: "console/ks-yun/rds",
                    param: {serviceId: 'rds8e9a11fa6e6c4ab79b5df'},
                    display: true,
                    serviceId: 'rds8e9a11fa6e6c4ab79b5df'
                },
                {
                    lable: "专有网络VPC",
                    jumpType: 'iframe',
                    url: "console/ks-yun/vpc",
                    param: {serviceId: 'vpcaba9bab2b7be3bf381243'},
                    display: true,
                    serviceId: 'vpcaba9bab2b7be3bf381243'
                },
            ]
        },
        {
            serviceCategoryName: "Percent百分点",
            imageUrl: percentLogo,
            list: [
                {
                    lable: "数据洞察",
                    jumpType: 'iframe',
                    url: "console/percent/cdi",
                    param: '',
                    display: true,
                    serviceId: '201801020358402673'
                },
                {
                    lable: "标签系统",
                    jumpType: 'iframe',
                    url: "console/percent/tag",
                    param: '',
                    display: true,
                    serviceId: '201905210380084996'
                },
            ]
        },
        {
            serviceCategoryName: "易企秀",
            imageUrl: yiqixiuLogo,
            list: [
                {
                    lable: "易企秀",
                    jumpType: 'iframe',
                    url: "console/eqxiu",
                    param: undefined,
                    display: true,
                    serviceId: '201712211139843827'
                },
            ]
        },
        {
            serviceCategoryName: "微软云",
            imageUrl: micsoftLogo,
            list: [
                {
                    lable: "云主机",
                    jumpType: 'iframe',
                    url: "console/azure/ecs",
                    param: '',
                    display: true,
                    serviceId: '5aa88d059a78b61784ae757d'
                },
            ]
        },
        {
            serviceCategoryName: "Commvault",
            imageUrl: commvaultLogo,
            list: [
                {
                    lable: "Commvault数据保护服务",
                    jumpType: 'blank',
                    url: "console/comm-vault/cv-backup",
                    param: '',
                    display: true,
                    serviceId: '201711281818188888'
                },
            ]
        },
    ],
}
