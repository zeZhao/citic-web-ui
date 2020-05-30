<style scoped lang="scss">
@import "../../assets/scss/block.scss";

.block-base {
    .feature {
        margin-top: 50px;
        li {
            width: 224px;
            height: 66px;
            float: left;
            font-size: 16px;
            color: #fff;
            padding: 20px 0 0 90px;
        }
    }

    .course {
        .course-box {
            .time {
                font-size: 20px;
                color: #fff;
                padding: 10px 15px;
                background-color: #60acf3;
            }
            .block-title {
                font-size: 18px;
                color: #333;
                margin-top: 20px;
            }

            .content {
                font-size: 16px;
                color: #7e7d7d;
                margin-top: 18px;
                li {
                    margin-top: 10px;
                    padding-left: 19px;
                }
            }

            .photo {
                width: 498px;
                height: 285px;
                position: absolute;
                left: -530px;
                top: -80px;
            }
        }
    }

    .partner {
        background-color: #f5f5f6;
        padding: 70px 0;
        ul {
            width: 1200px;
            margin: 50px auto 0 auto;
            overflow: hidden;
            li {
                float: left;
                img {
                    width: 300px;
                    height: 147px;
                    cursor: pointer;
                    &:hover {
                        transform: scale(1.1, 1.1);
                    }
                }
            }
        }
    }
}
</style>

<style>
.course .ivu-timeline-item-tail {
    border-left: 2px dashed #60acf3;
    left: 12px;
}

.course .ivu-timeline-item-head {
    width: 26px;
    height: 26px;
    background-color: #f5f5f6;
    border: 4px solid #2d8cf0;
}

.course .ivu-timeline {
    margin-left: 540px;
}

.course .ivu-timeline-item {
    min-height: 280px;
}

.course .ivu-timeline-item-content {
    padding-left: 50px;
}
</style>

<template>
    <div class="block-base">
        <!--头部-->
        <div class="header" :style="{'background-image': `url(${banner})`}">
            <div class="slogan">
                <h2>中信科技区块链在多领域应用中融合发展</h2>
                <p>
                    中信科技积极响应国家发展战略，自2016年成立区块链实验室起，注重研究基础核心技术，
                    <br />把握原始创新能力。
                    <br />在中信集团各领域发展中，探索融合区块链技术应用场景，在促进数据共享、优化业务流程、
                    <br />降低运营成本、
                    提升协同效率、建设可信体系等方面为客户提供全方位服务。
                </p>
                <ul class="feature">
                    <li :style="{'background-image': `url(${feature1})`}">强化基础研究</li>
                    <li
                        :style="{'background-image': `url(${feature2})`}"
                        style="margin-left: 42px;"
                    >创新产业应用</li>
                </ul>
            </div>
        </div>

        <!--区块链研究和应用历程-->
        <div class="course">
            <h3 class="title">区块链研究和应用历程</h3>

            <div class="course-box">
                <Timeline>
                    <TimelineItem v-for="(item, index) in itemData" :key="index">
                        <img class="photo" :src="item.imgUrl" />
                        <span class="time">{{item.time}}</span>
                        <p class="block-title">{{item.title}}</p>
                        <ul class="content">
                            <li v-for="(citem, cindex) in item.content" :key="cindex">{{citem}}</li>
                        </ul>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>

        <!--区块链创新实战案例-->
        <div class="case">
            <h3 class="title">区块链创新实战案例</h3>

            <div class="case-panel">
                <div class="case-content">
                    <img src="../../../static/images/blockChain/case1.png" />
                    <div class="article">
                        <span>案例1</span>

                        <p class="title">优享+：一个数字身份，畅享无界服务</p>

                        <p class="detail">
                            场景：围绕中信集团多个子公司（下称：成员商户）及其个人用户，打造用户身份互认、
                            权益互通和标签数据整合共享的互联网平台。
                            <br />
                            <br />方案：优享+作为组织者，建立“交易者”（成员商户）间的权益交易平台（“中心化”），
                            由平台对交易参与者进行管理，交易不需要经过平台的认证和记录（“去中心化”）。
                            <br />
                            <br />效果：用户通过一个账号、一次登录实现一站式访问成员商户提供的产品和服务，并在一个
                            权益账户、一个基础单位下对各种权益进行统一管理和综合使用。平台能够通过标签数据共
                            享建立跨机构、多维度、专业性的精准用户画像。
                        </p>
                    </div>
                </div>
                <div class="case-content" style="border: none;">
                    <div class="article">
                        <span>案例2</span>

                        <p class="title">梧桐港：供应链管理综合服务平台</p>

                        <p class="detail">
                            建立仓储物流云平台，通过可信仓单建立供应链金融生态。
                            <br />基于区块链的数字资产流转生态圈，实现了数据的透明、可追溯、防篡改。
                        </p>
                    </div>
                    <img src="../../../static/images/blockChain/case2.png" />
                </div>
            </div>
        </div>

        <!--合作伙伴-->
        <div class="partner">
            <h3 class="title">合作伙伴</h3>
            <ul>
                <li v-for="(item, index) in partnerImg" :key="index">
                    <img :src="item.imgSrc" @click="goDetail(item.link)" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import banner from "../../../static/images/blockChain/banner.png";
import feature1 from "../../../static/images/blockChain/feature-bg1.png";
import feature2 from "../../../static/images/blockChain/feature-bg2.png";
import course1 from "../../../static/images/blockChain/course/course1.png";
import course2 from "../../../static/images/blockChain/course/course2.png";
import course3 from "../../../static/images/blockChain/course/course3.png";
import course4 from "../../../static/images/blockChain/course/course4.png";
import course5 from "../../../static/images/blockChain/course/course5.png";
import course6 from "../../../static/images/blockChain/course/course6.png";
import course7 from "../../../static/images/blockChain/course/course7.png";
import course8 from "../../../static/images/blockChain/course/course8.png";
import course9 from "../../../static/images/blockChain/course/course9.png";
import course10 from "../../../static/images/blockChain/course/course10.png";
import partner1 from "../../../static/images/blockChain/partner/partner1.png";
import partner2 from "../../../static/images/blockChain/partner/partner2.png";
import partner3 from "../../../static/images/blockChain/partner/partner3.png";
import partner4 from "../../../static/images/blockChain/partner/partner4.png";

export default {
    data() {
        return {
            banner,
            feature1,
            feature2,
            itemData: [
                {
                    time: "2015年",
                    title: "布局区块链",
                    imgUrl: course1
                },
                {
                    time: "2016年",
                    title: "成立区块链实验室",
                    imgUrl: course2,
                    content: ["区块链开发平台上线", "票据链应用落地"]
                },
                {
                    time: "2017年5月",
                    title: "中信集团加入Linux基金会Hyperledger组织",
                    imgUrl: course3,
                    content: [ "国内早期加入的企业"]
                },
                {
                    time: "2017年12月",
                    title: "供应链管理综合服务平台上线",
                    imgUrl: course4,
                    content: ["获“区块链+产业供应链优秀案例奖”"]
                },
                {
                    time: "2018年01月",
                    title: "中信集团与腾讯签署战略框架协议",
                    imgUrl: course5,
                    content: ["联手推进区块链+实体经济"]
                },
                {
                    time: "2018年08月",
                    title: "区块链解决方案在工业互联网联盟第八次全会上亮相",
                    imgUrl: course6
                },
                {
                    time: "2018年09月",
                    title: "优享+区块链应用落地",
                    imgUrl: course7,
                    content: [
                        "截止2019年10月，实际用户达6480万（月活跃用户超过250万），联盟企业25家"
                    ]
                },
                {
                    time: "2019年04月",
                    title:
                        "加入信息通信研究院工业互联网产业联盟工业区块链特设组",
                    imgUrl: course8
                },
                {
                    time: "2019年11月",
                    title: "开拓能源区块链",
                    imgUrl: course9,
                    content: ["实现能源交易管理服务平台"]
                },
                {
                    time: "未来",
                    title: "继续深入研究核心技术，积极探索更加广阔的应用场景",
                    imgUrl: course10
                }
            ],
            partnerImg: [
                {
                    imgSrc: partner1,
                    link: "https://www.hyperledger.org/"
                },
                {
                    imgSrc: partner2,
                    link: "https://www.bubi.cn/"
                },
                {
                    imgSrc: partner3,
                    link: "https://www.dataqin.com/"
                },
                {
                    imgSrc: partner4,
                    link: "http://www.cdtrust.com/"
                }
            ]
        };
    },
    methods: {
        goDetail(url) {
            if (url) {
                window.open(url);
            }
        }
    }
};
</script>


