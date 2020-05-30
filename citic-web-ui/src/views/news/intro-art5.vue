<template>
    <div class="innovation-shalong-intro">
        <!--banner图-->
        <div class="wrap banner">
            <img src="~static/images/news/pic/introArt5/banner-art5.jpg" class="banner-img" />
        </div>
        <!--邀请函-->
        <div class="banner01">
            <Row class="center">
                <i-col span="10">
                    <div class="invite-box">
                        <div class="banner01-invitation">
                            <div class="invite-text">
                                <img src="~static/images/innovation/intro/tech-09.jpg" />
                                <h3>尊敬的先生&女士</h3>
                                <div class="invite-context">
                                    <p>第四次工业革命重构了世界发展的底层代码，网络空间的加持使得世界发展变化的速度呈指数级增长。万户互联的时代，网络安全越来越来越成为企业与个人关心和重视的话题。</p>
                                    <p>现如今，“安全”已经进入到一个新的纪元，开始全面进入重点行业、重点领域、关键业务和核心应用，安全越来越重要；与此同时随着我国《网络安全法》实施以及等级保护制度2.0的即将出台，对于各项安全合规合法也提出了更高的要求。在新的网络计算和网络安全环境下，网络安全也进入了2.0时代，安全的技术、服务、运营和管理都将发生很大变化。</p>
                                    <p>8月21，中信云邀请您参与“感知无处不在的网络安全”主题沙龙，分享企业公司安全建设思路与落地经验，与您一同探讨公司如何进行安全管理、运营，安全行业如何进行自我技术和创新之道。</p>
                                    <span class="invite-bottom">2018“中信云  科技范儿”系列沙龙活动</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </i-col>
                <i-col span="7">
                    <div class="address">
                        <img src="~static/images/innovation/intro//tech-15.jpg" alt="" class="top-img">
                        <div class="address-context">
                            <p><span>沙龙互动活动地址</span></p>
                            <div class="p3">
                                <b></b>
                                <span><i style="font-style: normal;">北京市朝阳区建国路<br />118号招商局大厦</i></span>
                                <span style="display: block;font-size: 14px">（地铁国贸站C口）</span>
                            </div>
                        </div>
                        <div class="bottom-tip">
                            <p>沙龙活动地点</p>
                        </div>
                    </div>
                </i-col>
                <i-col span="7">
                    <div class="time">
                        <p class="p1">
                            <span class="sp1">21</span>
                            <span>08</span>
                            <b></b>
                            <i>2018</i>
                        </p>
                        <div class="time-disc">
                            <p class="p2">
                                <i class="i1">1</i><i class="i2">3</i><span>:</span><i class="i3">5</i><i class="i4">0</i>
                            </p>
                            <span class="in_01fr_c-to" style="display: block;">↓</span>
                            <p class="p3">
                                <i class="i1">1</i><i class="i2">6</i><span>:</span><i class="i3">4</i><i class="i4">0</i>
                            </p>
                        </div>

                        <div class="bottom-tip">
                            <p>沙龙活动时间</p>
                        </div>
                    </div>
                </i-col>
            </Row>
        </div>
        <!--活动嘉宾-->
        <div class="wrap banner02">
            <div class="tech-container">
                <h2>活动嘉宾</h2>
                <div class="guest-box">
                    <ul class="clearfix">
                        <Carousel loop :dots="carousel.dots" :arrow="carousel.arrow">
                            <CarouselItem >
                                <div class="center">
                                    <li class="guest-1">
                                        <div class="guest-top">
                                            <img src="~static/images/news/pic/introArt5/art5-01.jpg" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>王哲<b></b><span>知道创宇</span></h3>
                                            <span>高级安全顾问</span>
                                            <p>北京知道创宇信息技术有限公司资深安全顾问。具有 15 年的网络安全从业经验，曾经就职于联想、天融信等国内知名安全公司。现在就职于北京知道创宇信息技术有限公司，主要从事政府部委大型央企的技术方案工作，输出知道创宇云安全整体解决方案。</p>
                                        </div>
                                    </li>
                                    <li class="guest-2">
                                        <div class="guest-top">
                                            <img src="~static/images/news/pic/introArt5/art5-02.jpg" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>孙维伯<b></b><span>青藤云</span></h3>
                                            <span>青藤云安全 安全技术团队负责人</span>
                                            <p>要负责售前顾问、安全服务、安全研究、安全运营团队的技术研究与管理，曾就职于绿盟科技，在漏洞挖掘、安全行业发展等有深入的见解，多次在阿里、freebuf峰会等发表演讲。</p>
                                        </div>
                                    </li>
                                    <li class="guest-3">
                                        <div class="guest-top">
                                            <img src="~static/images/news/pic/introArt5/art5-03.jpg" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>李可<b></b><span>Commvault</span></h3>
                                            <span>Commvault亚太区企业解决方案架构师</span>
                                            <p>李可现任Commvault亚太区现场咨询服务团队（FAST）企业解决方案架构师，主要负责解决方案架构设计、数据管理咨询服务和云平台集成项目。他在IT领域拥有超过18年的工作经验，涉及基础设施管理、项目管理和服务交付管理及其他运营管理等领域。</p>
                                        </div>
                                    </li>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="center">
                                    <li class="guest-4">
                                        <div class="guest-top">
                                            <img src="~static/images/news/pic/introArt5/art5-04.jpg" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>陈洪波<b></b><span>360</span></h3>
                                            <span>360企业安全集团安全服务子公司   副总裁</span>
                                            <p>擅长信息安全高端咨询规划、安全架构、企业数据保护、专业安全服务及服务平台、云安全业务体系、数据中心安全整合等业务。带领团队规划并实施能源、银行、证券、民航、运营商等多个行业的几十项重点安全项目，具备丰富的大型复杂项目操作经验。</p>
                                        </div>
                                    </li>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </ul>
                </div>
            </div>
        </div>
        <!--活动议程-->
        <div class="wrap banner03">
            <div class="tech-container">
                <h2>会议议程</h2>
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                    <tr>
                        <th>
                            <img src="~static/images/innovation/intro//tech-06.jpg" alt="">时间
                        </th>
                        <th>
                            <img src="~static/images/innovation/intro//tech-05.jpg" alt="">议题
                        </th>
                        <th>
                            <img src="~static/images/innovation/intro//tech-04.jpg" alt="">演讲嘉宾
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd">
                        <td class="borrig">13:50-14:00</td>
                        <td colspan="2">签到</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig">14:00-14:40</td>
                        <td>主题分享：云时代的数据安全</td>
                        <td>Commvault亚太区企业解决方案架构师 李可</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig">14:40—15:20</td>
                        <td class="borrig">主题分享：新形势下云安全态势感知</td>
                        <td>知道创宇高级安全顾问 王哲</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig">15:20—16:00</td>
                        <td class="borrig">主题分享：云安全的最后一公里</td>
                        <td>青藤云安全技术团队负责人 孙维柏</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig">16:00—16:40</td>
                        <td class="borrig">主题分享：基于运营的网络安全管理思路</td>
                        <td>360企业安全集团安全服务子公司副总裁 陈洪波</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--报名方式-->
        <div class="wrap banner04">
            <div class="tech-container">
                <h2>活动报名方式</h2>
                <i></i>
                <p>您可以用微信公众号进行报名</p>
                <img src="~static/images/innovation/intro/tech-01.png" alt="">
                <div class="line-through"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carousel:{
                  dots: 'none',
                  arrow: 'always',
                },
            }
        },
        components: {},
        mounted() {
            window.scrollTo(0,0)
        },
        methods: {},
    }
</script>

<style lang="scss">
    .innovation-shalong-intro {
        .wrap {
            width: 100%;
        }
        .center{
            width: 1200px;
            margin: 0 auto;
        }

        .banner{
            overflow: hidden;
            .banner-img{
                width: 100%;
                display: block;
                max-height: 720px;
            }
        }
        .banner01{
            overflow: hidden;
            background: url("~static/images/innovation/intro/tech-21.jpg");
            min-height: 700px;
            padding-top: 30px;
            .invite-box{
                overflow: hidden;
                margin-right: 10px;
                background-color: #fff;
                .banner01-invitation{
                    margin-right: 10px;
                    padding: 10px 0 10px 10px;
                    background: #fff;
                    .invite-text {
                        border: 3px solid #f3f4f5;
                        h3 {
                            text-align: center;
                            color: #000;
                            font-size: 26px;
                            font-weight: normal;
                            line-height: 40px;
                            margin-bottom: 15px;
                        }
                        .invite-context {
                            padding: 25px 10px 25px 10px;
                            min-height: 430px;
                            position: relative;
                            border-top: 1px solid #f3f4f5;
                            p {
                                font-size: 14px;
                                line-height: 24px;
                                color: #000;
                                text-align: justify;
                            }
                            .invite-bottom {
                                font-size: 14px;
                                color: #ccc;
                                display: inline-block;
                                text-align: center;
                                width : 100%;
                                position: absolute;
                                bottom: 10px;
                            }
                        }
                    }
                }
            }
            .address {
                width: 330px;
                float: left;
                margin-right: 10px;
                background: #fff;
                padding-top: 60px;
                text-align: center;
                height: 635px;
                position: relative;
                .address-context {
                    width: 270px;
                    margin: 0 auto;
                    padding: 10px 0 20px 10px;
                    text-align: center;
                    font-size: 16px;
                    box-shadow: 0px 1px 12px #f0f0f0;
                    p {
                        padding-left: 10px;
                        color: #000;
                        display: block;
                        width: auto;
                        height: 30px;
                        background: url(~static/images/innovation/intro/tech-14.jpg) no-repeat left 2px;
                    }
                }
                .bottom-tip {
                    color: #a6a6a6;
                    font-size: 20px;
                    height: 54px;
                    width: 250px;
                    border-top: 1px solid #e5e5e5;
                    border-bottom: 1px solid #e5e5e5;
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    margin-left: -125px;
                    line-height: 54px;
                }
            }
            .time {
                width: 330px;
                float: left;
                margin-right: 0;
                background: #fff;
                text-align: center;
                padding-top: 80px;
                height: 635px;
                position: relative;
                p.p1 span {
                    width: 100%;
                    display: block;
                    overflow: hidden;
                    line-height: 90px;
                    font-size: 88px;
                    color: #535353;
                    font-family: pf_medium,"Microsoft Yahei","微软雅黑";
                }
                p.p1 b {
                    width: 83px;
                    height: 1px;
                    display: block;
                    margin: 0px auto;
                    padding: 0px;
                    background-color: #ff0000;
                    margin-top: 13px;
                    margin-bottom: 10px;
                }
                p.p1 i {
                    width: 100%;
                    display: block;
                    overflow: hidden;
                    font-style: normal;
                    font-size: 46px;
                    color: #535353;
                    line-height: 50px;
                }
                .time-disc {
                    width: 260px;
                    height: 180px;
                    overflow: hidden;
                    margin: 0px auto;
                    padding: 0px;
                    margin-top: 30px;
                    .in_01fr_c-to{
                        color: #e51121;
                        display: block;
                        font-size: 14px;
                        font-weight: bolder;
                        margin-left: -8px;
                    }
                    p {
                        width: 233px;
                        overflow: hidden;
                        margin: 0px auto;
                        padding: 0px;

                        i {
                            width: 48px;
                            height: 75px;
                            display: block;
                            overflow: hidden;
                            font-size: 60px;
                            color: #e51121;
                            float: left;
                            font-style: normal;
                            text-align: center;
                            line-height: 75px;
                            font-family: zzgf,"Microsoft Yahei","微软雅黑";
                            margin-right: 6px;
                            background: #d7d7d7;
                            border-radius: 6px;
                        }
                        span{
                            float: left;
                            margin-right: 6px;
                            line-height: 78px;
                            font-size: 30px;
                            color: #e51121;
                        }
                    }
                }
                .bottom-tip {
                    color: #a6a6a6;
                    font-size: 20px;
                    height: 54px;
                    width: 250px;
                    border-top: 1px solid #e5e5e5;
                    border-bottom: 1px solid #e5e5e5;
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    margin-left: -125px;
                    line-height: 54px;
                }
            }
        }
        .banner02{
            overflow: hidden;
            padding: 50px 0;
            background: url("~static/images/innovation/intro/tech-03.jpg") no-repeat;
            .tech-container{
                width: 1200px;
                margin: 0 auto;
            }
            h2 {
                font-size: 36px;
                color: #fff;
                text-align: center;
                margin: 0 0 40px 0;
                font-weight: normal;
            }
            .center{
                width: 1060px;
                margin: 0 auto;
            }
            .guest-1{
                float: left;
                width: 340px;
                height: 580px;
                margin-right: 10px;
                background-color: #fff;
                .guest-top {
                    height: 245px;
                    text-align:center;
                    background: url("~static/images/innovation/intro/tech-11.jpg") no-repeat center;
                    img {
                        height: 245px;
                        width: 340px;
                        display: inline-block;
                    }
                }
            }
            .guest-2{
                float: left;
                width: 340px;
                height: 580px;
                margin-right: 10px;
                background-color: #fff;
                .guest-top {
                    height: 245px;
                    text-align:center;
                    background: url("~static/images/innovation/intro/tech-12.jpg") no-repeat center;
                    img {
                        height: 245px;
                        width: 340px;
                        display: inline-block;
                    }
                }
            }
            .guest-3{
                float: left;
                width: 340px;
                height: 580px;
                margin-right: 10px;
                background-color: #fff;
                .guest-top {
                    height: 245px;
                    text-align:center;
                    background: url("~static/images/innovation/intro/tech-13.jpg") no-repeat center;
                    img {
                        height: 245px;
                        width: 340px;
                        display: inline-block;
                    }
                }

            }
            .guest-4{
                float: left;
                width: 340px;
                height: 580px;
                margin-right: 10px;
                background-color: #fff;
                .guest-top {
                    height: 245px;
                    text-align:center;
                    background: url("~static/images/innovation/intro/tech-13.jpg") no-repeat center;
                    img {
                        height: 245px;
                        width: 340px;
                        display: inline-block;
                    }
                }
            }
            .guest-text {
                width: auto;
                padding: 20px 20px 20px 20px;
                h3 {
                    font-size: 26px;
                    line-height: 1.5;
                    color: #000;
                    font-weight: normal;
                    margin: 0 0 5px 0;
                    b{
                        background:  url("~static/images/news/pic/introArt5/leftarrow.png") 0px center no-repeat;;
                        display: inline-block;
                        width: 13px;
                        line-height: 22px;
                        vertical-align: middle;
                        height: 22px;
                        margin-left: 10px;
                    }
                    span{
                        display: inline-block;
                        line-height: 22px;
                        margin-left: -6px;
                        padding:0 10px;
                        border-top: 1px solid #cc3300;
                        border-right: 1px solid #cc3300;
                        border-bottom: 1px solid #cc3300;
                    }
                }
                span {
                    font-size: 16px;
                    color: #8f999c;
                    line-height: 2;
                    margin-bottom: 10px;
                }
                p {
                    line-height: 2;
                    font-size: 16px;
                    color: #000;
                }
            }
        }
        .banner03{
            overflow: hidden;
            background-color: #f5f5f5;
            padding: 40px 0px 0px 0px;
            .tech-container{
                width: 1200px;
                margin: 0 auto;
            }
            h2{
                margin: 0 0 25px;
                text-align: center;
                font-size: 36px;
                color: #000;
                font-weight: normal;
                line-height: 1.5;
            }
            table{
                width: 100%;
                th{
                    background: #1a1c1c;
                    border-right: 1px solid #fff;
                    height: 55px;
                    color: #fff;
                    font-size: 20px;
                    width: 33%;
                    img{
                        margin-right: 10px;
                    }
                }
                .even td {
                    background: #f5f5f5;
                }
                td{
                    height: 60px;
                    text-align: center;
                    font-size: 16px;
                    color: #000;
                    background: #fff;
                }
                td.borrig {
                    border-right: 1px solid #e5e5e5;
                }
            }
        }
        .banner04{
            width: 100%;
            background: url("~static/images/innovation/intro/tech-07.jpg") no-repeat center top #fff;
            padding-top: 50px;
            padding-bottom: 50px;
            position: relative;
            text-align: center;
            margin-top: 20px;
            .tech-container{
                width: 1200px;
                margin: 0 auto;
            }
            h2 {
                margin: 0 0 15px;
                font-size: 36px;
                text-align: center;
                line-height: 1.5;
                color: #fff;
                font-weight: normal;
            }
            i{
                width: 50px;
                height: 1px;
                display: block;
                margin: 0 auto 15px;
                background-color: #fff;
            }
            p{
                color: #fff;
                font-size: 16px;
                text-align: center;
                line-height: 2;
                margin-bottom: 70px;
            }
        }
        .ivu-carousel-arrow{
            opacity: 0.9;
            background: #a1a1a1;
        }
    }
</style>

