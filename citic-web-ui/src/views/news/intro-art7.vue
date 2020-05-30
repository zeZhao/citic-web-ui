<template>
    <div class="innovation-shalong-intro" >
        <!--banner图-->
        <div class="wrap banner">
            <img src="~static/images/innovation/intro/intro-art7-1.png" class="banner-img" />
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
                                    <p>数据化存储时代，数据资产作为每个公司最关注的部分已经成为公司发展决策过程中的重要依据，并逐渐在办公场合中被广泛应用，给企业带来了巨大便利的同时，也带来新的挑战。归档不合理、标签化不明显、流程不清晰、需求不明确，则会产生大量不必要的工作量，拖慢整体办公速度。</p>
                                    <p>伴随着公司发展和协同办公效率的提高，产生的大量数据急需“上云”，并做到可视化的计算、存储与应用。而传统的办公模式已经难以适应智能化时代企业的发展需求，如何更好的提高公司协同办公效率，并利用公司的“数据资产”是每个公司急需解决的问题。</p>
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
                                <span><i style="font-style: normal;">北京市朝阳区建国路118号<br />招商局大厦14层</i></span>
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
                            <span class="sp1">01</span>
                            <span>10</span>
                            <b></b>
                            <i>2019</i>
                        </p>
                        <div class="time-disc">
                            <p class="p2">
                                <i class="i1">1</i><i class="i2">4</i><span>:</span><i class="i3">0</i><i class="i4">0</i>
                            </p>
                            <span class="in_01fr_c-to" style="display: block;">↓</span>
                            <p class="p3">
                                <i class="i1">1</i><i class="i2">6</i><span>:</span><i class="i3">2</i><i class="i4">0</i>
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
                        <!-- <ci-multiple-swipers></ci-multiple-swipers> -->
                        <Carousel loop :dots="carousel.dots" :arrow="carousel.arrow">
                            <CarouselItem >
                                <div class="center">
                                    <li class="guest-1">
                                        <div class="guest-top">
                                            <img src="~static/images/innovation/intro/intro-art7-2.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>高建生<!--<b></b><span>知道创宇</span>--></h3>
                                            <span>中信科技 信息安全团队高级信息安全工程师</span>
                                            <p>
                                                中信科技发展有限公司信息安全团队高级安全工程师。主要从事中信云安全相关的安全管理、规划设计、风险评估、项目实施等工作，熟悉网络安全等级保护、可信云、ISO20000、ISO27001、CSA STAR等国内外主流信息安全标准体系。
                                            </p>
                                        </div>
                                    </li>
                                    <li class="guest-2">
                                        <div class="guest-top">
                                            <img src="~static/images/innovation/intro/intro-art7-3.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>刘洋<!--<b></b><span>青藤云</span>--></h3>
                                            <span>360 企业安全集团安全专家</span>
                                            <p>
                                                现任职360企业安全集团安全专家。10余年Web安全防护领域的经验，多次参与重大事件的重保活动，国家重要机构应急事件处置等，先后在绿盟、网宿等多家厂商从事信息安全相关的安全顾问、产品经理。
                                            </p>
                                        </div>
                                    </li>
                                    <li class="guest-3">
                                        <div class="guest-top">
                                            <img src="~static/images/innovation/intro/intro-art7-4.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>马睿博<!--<b></b><span>Commvault</span>--></h3>
                                            <span>阿里云 安全架构师</span>
                                            <p>
                                                阿里云安全架构师  十五年安全行业从业经验 长年供职于华为、三六零、阿里云等大型企业。
                                            </p>
                                        </div>
                                    </li>

                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div class="center">
                                    <li class="guest-4" style="margin-left: 10px;">
                                        <div class="guest-top">
                                            <img src="~static/images/innovation/intro/intro-art7-5.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>毛帅</h3>
                                            <span>知道创宇 云防护产品线负责人</span>
                                            <p>
                                                现就任于知道创宇云防御产品线DDoS海啸攻击防御平台与祝融级CC防御平台双系统架构师。具有十年以上的云安全DDoS防御实战与运营维护经验，曾多次参加国家级重点保障，负责金融行业、政府部门及大型央企安全防御方案建设。
                                            </p>
                                        </div>
                                    </li>
                                    <li class="guest-4">
                                        <div class="guest-top">
                                            <img src="~static/images/innovation/intro/intro-art7-6.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>刘长波</h3>
                                            <span>中国电信 网络安全产品运营中心市场总监</span>
                                            <p>
                                                中国电信集团专家。现为中国电信网络安全产品运营中心市场总监。曾任中国电信ChinaNet/CN2骨干网络负责人，具有丰富的IP网络维护和重保经验。
                                            </p>
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
                        <td class="borrig">13：30-14：00</td>
                        <td colspan="2">来宾签到</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig">14：00-14：30 </td>
                        <td class="borrig">中信云平台安全能力</td>
                        <td>高健生 - 中信云</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig">15：10-15：40 </td>
                        <td class="borrig">DDoS的防御、缓解</td>
                        <td>刘长波 - 中国电信</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig">15：40-16：10 </td>
                        <td class="borrig">DDoS攻击防御从0到1 </td>
                        <td>刘洋 - 360</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig"> 16：30-17：10 </td>
                        <td class="borrig">阿里云上的DDoS攻击报告和应对手段</td>
                        <td>马瑞博 - 阿里云</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig"></td>
                        <td colspan="2">沟通交流，结束致辞</td>
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
import introArt7MultipleSwipers from "com/public/swiper/intro-art7-multiple-swipers.vue"
    export default {
        data() {
            return {
                carousel:{
                  dots: 'none',
                  arrow: 'always',
                },
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        components: {
            "ci-multiple-swipers": introArt7MultipleSwipers
        },
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
                                text-indent: 2em;
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
                /*display: flex;*/
                /*justify-content: space-around;*/
            }
            .guest-1{
                float: left;
                width: 340px;
                height: 580px;
                margin-right: 10px;
                margin-left: 10px;
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

