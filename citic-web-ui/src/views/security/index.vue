<style lang="scss" type="text/scss" scoped>
    $backColor: #5dafff;
    %widthAuto {
        width: 1200px;
        margin: 0 auto;
    }

    .security {
        overflow: hidden;

        .banner {
            height: 455px;

            .slogan {
                @extend %widthAuto;
                color: #fff;

                h1 {
                    padding-top: 155px;
                    font-size: 40px;
                }

                p {
                    width: 474px;
                    font-size: 16px;
                }
            }
        }

        .solution, .advantage, .process, .recommend {
            background-color: #f8f8fa;
            overflow: hidden;

            .solution-cnt, .advantage-cnt, .process-cnt, .recommend-cnt {
                @extend %widthAuto;

                .title {
                    text-align: center;
                    margin-top: 65px;

                    h1 {
                        font-size: 34px;
                        display: inline-block;
                    }

                    span {
                        width: 435px;
                        height: 1px;
                        background-color: #23253a;
                        opacity: 0.4;
                        display: inline-block;
                        margin-top: 30px;
                    }

                    span:nth-of-type(1) {
                        float: left;
                    }

                    span:nth-of-type(2) {
                        float: right;
                    }
                }

                .tag {
                    width: 400px;
                    height: 500px;
                    background-color: #ffffff;
                    box-shadow: 0 3px 9px 2px rgba(75, 129, 250, 0.2);
                    border-top: 5px solid $backColor;
                    padding: 0 35px;
                    margin: 85px 0;
                    float: left;

                    h4 {
                        padding-top: 50px;
                        font-size: 20px;
                        color: $backColor;
                    }

                    .line {
                        width: 47px;
                        height: 3px;
                        background-color: #5dafff;
                        display: inline-block;
                    }

                    p {
                        padding: 26px 0;
                        font-size: 14px;
                    }

                    ul {
                        font-size: 14px;
                        border-top: 1px solid #e5e5e5;
                        border-bottom: 1px solid #e5e5e5;
                        padding: 20px 0;

                        li {
                            margin-bottom: 18px;
                            text-indent: -1em;
                            margin-left: 2em;
                            line-height: 18px;
                            color: rgba(0, 0, 0, .6);

                            span {
                                width: 6px;
                                height: 6px;
                                border-radius: 50%;
                                background-color: #8c8c8c;
                                opacity: 0.7;
                                display: inline-block;
                                margin-right: 10px;
                            }
                        }

                        li:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                .advantage-tags {
                    width: 285px;
                    height: 322px;
                    border: solid 1px #bbbdbe;
                    text-align: center;
                    margin: 70px 15px 80px 0;
                    float: left;

                    img {
                        margin: 42px 0;
                    }

                    h5 {
                        font-size: 18px;
                    }

                    .line {
                        width: 20px;
                        height: 2px;
                        background-color: #999999;
                        margin: 24px auto 15px;
                    }

                    .txt {
                        font-size: 16px;
                        color: #666666;
                        padding: 0 28px;
                        text-align: left;
                    }
                }

                .advantage-tags:hover {
                    height: 350px;
                    margin-top: 55px;
                    background-color: #f1f9ff;
                    border-color: #5dafff;
                    box-shadow: 0 3px 9px 2px rgba(75, 129, 250, 0.2);
                    transition: height .5s, margin-top .5s;
                }

                .process-cycle {
                    width: 1187px;
                    height: 383px;
                    margin-top: 75px;
                    position: relative;
                }

                .recommend-product {
                    margin-top: 50px;
                    height: 600px;

                    .product-tag {
                        width: 366px;
                        /*height: 365px;*/
                        background-color: #ffffff;
                        border: solid 1px #e5e5e5;
                        float: left;
                        margin-top: 50px;

                        .product-tit {
                            width: 100%;
                            height: 62px;
                            text-align: center;
                            line-height: 62px;
                            background-color: #5dafff;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            img {
                                display: inline-block;
                                margin-right: 10px;
                            }

                            h5 {
                                font-size: 20px;
                                color: #fff;
                                display: inline-block;
                            }
                        }

                        ul {
                            li {
                                width: 237px;
                                height: 36px;
                                line-height: 36px;
                                background-color: #ffffff;
                                border-radius: 4px;
                                border: solid 1px #e5e5e5;
                                text-align: center;
                                font-size: 14px;
                                margin: 20px auto;

                                span:last-child {
                                    display: none;
                                }
                            }

                            li:hover {
                                color: #5dafff;

                                span:first-child {
                                    float: left;
                                    margin-left: 20px;
                                }

                                span:last-child {
                                    float: right;
                                    margin-right: 20px;
                                    display: inline-block;
                                }

                            }
                        }

                        &:hover {
                            box-shadow: 0px 3px 24px 5px rgba(75, 129, 250, 0.2);
                        }

                    }

                    .product-tag:nth-of-type(2) {
                        margin: 0 50px;
                    }
                }
            }
        }

    }
</style>

<template>
    <div class="security">
        <div class="banner" :style="{'background': `url(${banner}) center`}">
            <div class="slogan">
                <h1>中信云等保2.0解决方案</h1>
                <p>中信云通过自身丰富的合作生态，并联合优质的测评和咨询机构，为客户提供一站式的等保解决方案，帮助客户快速、低成本完成<br>安全整改，轻松满足等保合规要求。</p>
            </div>
        </div>
        <div class="solution">
            <div class="solution-cnt clearfix">
                <div class="title clearfix">
                    <span></span>
                    <h1>解决方案介绍</h1>
                    <span></span>
                </div>

                <div class="tag">
                    <h4>等级保护工作的意义</h4>
                    <span class="line"></span>
                    <p>为客户量身定制整改解决方案，优选权威测评机构，提供专业的等保测评服务。</p>
                    <ul>
                        <li><span></span>降低信息安全风险，提高信息系统的安全防护能力；</li>
                        <li><span></span>满足国家相关法律法规和制度的要求 ；</li>
                        <li><span></span>满足相关主管单位和行业要求；</li>
                        <li><span></span>合理地规避或降低风险。</li>
                    </ul>
                </div>
                <div class="tag"
                     style="background: #5dafff;color: #fff;border-top-color: #012ca9;margin-top: 50px;height: 570px">
                    <h4 style="color: #fff">开展等级保护工作法律依据</h4>
                    <span class="line" style="background: #fff"></span>
                    <p>网络安全等级保护是国家网络安全保障的基本制度、基本策略、基本方法。开展网络安全等级保护工作是保护信息化发展、维护网络安全的根本保障，是网络安全保障工作中国家意志的体现。</p>
                    <p>
                        开展信息安全等级保护工作是保护信息化发展、维护国家信息安全的根本保障，是解决我国信息安全面临的威胁和存在的问题，实行国家对重要信息系统进行重点安全保障的重大措施。2008年发布的《GB/T22239-2008
                        信息安全技术 信息系统安全等级保护基本要求 》简称为等保1.0；2019年5月发布的《GB/T22239-2019 信息安全技术 信息系统安全等级保护基本要求
                        》等标准简称为等保2.0。</p>
                </div>
                <div class="tag">
                    <h4>一站式的等保解决方案</h4>
                    <span class="line"></span>
                    <p style="padding: 26px 0 15px">为客户量身定制整改解决方案，优选权威测评机构，提供专业的等保测评服务。</p>
                    <ul style="padding: 10px 0 20px">
                        <li><span></span>根据客户实际情况，提供等保合规安全方案，协助客户进行满足度自查分析；</li>
                        <li><span></span>根据建议书的整改方案，协助客户完成安全服务的选型和部署；</li>
                        <li><span></span>根据自查分析的结果，指导客户对网络、主机、数据库进行技术整改；</li>
                        <li><span></span>根据等保对安全管理的要求，提供安全管理制度规范指导；</li>
                        <li><span></span>优选具有资质的权威等保测评机构，提供专业的测评服务。</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="advantage" style="background: #fff;height: 600px">
            <div class="advantage-cnt clearfix">
                <div class="title clearfix" style="margin-top: 70px">
                    <span></span>
                    <h1>方案优势</h1>
                    <span></span>
                </div>
                <div class="advantage-tags" v-for="(t,i) in advantageTags" :key="i">
                    <img :src="t.img" alt="">
                    <h5>{{t.title}}</h5>
                    <p class="line"></p>
                    <p class="txt">{{t.cnt}}</p>
                </div>
            </div>
        </div>
        <div class="process" style="padding-bottom: 85px">
            <div class="process-cnt clearfix">
                <div class="title clearfix" style="margin-top: 70px">
                    <span></span>
                    <h1>方案流程</h1>
                    <span></span>
                </div>
                <div class="process-cycle">
                    <img :src="cycleCnt" alt="">
                </div>
            </div>
        </div>
        <div class="recommend clearfix" style="background: #fff;margin-top: 50px;overflow: hidden">
            <div class="recommend-cnt clearfix">
                <div class="title clearfix" style="margin-top: 70px">
                    <span></span>
                    <h1>产品推荐</h1>
                    <span></span>
                </div>
                <div class="recommend-product">
                    <div class="product-tag" v-for="(t,i) in productList" :key="i">
                        <div class="product-tit">
                            <img :src="t.img" alt="">
                            <h5>{{t.title}}</h5>
                        </div>
                        <ul>
                            <li v-for="(tt,ii) in t.tag" :key="ii">
                                <span>{{tt}}</span>
                                <span>></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../../../static/images/security/banner.jpg'
    import icon_1 from '../../../static/images/security/icon_1.png'
    import icon_2 from '../../../static/images/security/icon_2.png'
    import icon_3 from '../../../static/images/security/icon_3.png'
    import icon_4 from '../../../static/images/security/icon_4.png'
    import icon_5 from '../../../static/images/security/icon_5.png'
    import icon_6 from '../../../static/images/security/icon_6.png'
    import icon_7 from '../../../static/images/security/icon_7.png'
    import cycleCnt from '../../../static/images/security/cycleCnt.png'

    export default {
        data() {
            return {
                banner,
                icon_1,
                icon_2,
                icon_3,
                icon_4,
                icon_5,
                icon_6,
                icon_7,
                cycleCnt,
                advantageTags: [
                    {
                        img: icon_1,
                        title: '优质的等保测评服务',
                        cnt: '联合各地优质咨询和测评机构，避免多点沟通和重复工作、缩短测评时间。'
                    },
                    {
                        img: icon_2,
                        title: '合规的基础设施平台',
                        cnt: '中信云平台已经通过等保三级，平台等保测评经验能够为租户的等保合规认证帮助和复用。'
                    },
                    {
                        img: icon_3,
                        title: '全面的安全防护体系',
                        cnt: '中信云提供丰富的安全产品，全面满足等保要求，保障快速、低成本完成安全整改。'
                    },
                    {
                        img: icon_4,
                        title: '完备的等保合规生态',
                        cnt: '中信云引入优质的生态合作伙伴，为客户提供多种选择。'
                    },
                ],
                productList: [
                    {
                        img: icon_5,
                        title: '应用安全服务',
                        tag: ['Web应用防火墙', 'DDoS云清洗', 'SSL证书', '网页防篡改', '漏洞扫描']
                    }, {
                        img: icon_6,
                        title: '云基础资源安全服务',
                        tag: ['云防火墙', '主机入侵检测与防病毒', '堡垒机', '数据库审计', '流量审计', '终端防病毒', '云灾备', '安全态势感知']
                    },
                    {
                        img: icon_7,
                        title: '等级保护咨询',
                        tag: ['定级备案', '现场差距测评', '整改方案编制', '现场测评', '测评报告编制']
                    }
                ],
            }
        },
        created() {
        },

        mounted() {
        },

        methods: {},

        computed: {},

        watch: {},

        components: {},
    }
</script>
