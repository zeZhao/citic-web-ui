<template>
    <div class="innovation-shalong-intro" >
        <!--banner图-->
        <div class="wrap banner">
            <img src="~static/images/activity/8/banner.png" class="banner-img" />
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
                                    <p>产业互联网的实现，需要跨界共建数字生态共同体，形成新价值网络。当连接扩展到全产业、纵深到产业链的每个环节，需要传统行业发挥主导作用，利用互联网工具，构建适合自身特点的新型数字生态网络，获得新动能、实现新价值；也需要互联网科技公司做好数字化转型助手，提供连接器、工具箱。</p>
                                    <br>
                                    <br>
                                    <p>在发展产业互联网的道路上，理念和思维模式的刷新需要走在前列。共建数字生态共同体的需要：一是共生，数字世界与物理世界不是孤立、而是协同发展；二是共创，要能跨界、敢跨界，积极打破传统产业间、以及不同科技的边界混合创新；三是共赢，要鼓励共同创造与分享价值成果，推动技术开源、能力开放、收益共享等等。4月19日，中信云&腾讯云邀请您一起数字赋能，云享未来。</p>
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
                                <span><i style="font-style: normal;">京龙大厦13层</i></span>
                                <span style="display: block;font-size: 14px">北京市朝阳区朝阳北路225号</span>
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
                            <span class="sp1">04</span>
                            <span>19</span>
                            <b></b>
                            <i>2019</i>
                        </p>
                        <div class="time-disc">
                            <p class="p2">
                                <i class="i1">1</i><i class="i2">3</i><span>:</span><i class="i3">3</i><i
                                class="i4">0</i>
                            </p>
                            <span class="in_01fr_c-to" style="display: block;">↓</span>
                            <p class="p3">
                                <i class="i1">1</i><i class="i2">6</i><span>:</span><i class="i3">4</i><i
                                class="i4">0</i>
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
                                    <li class="guest">
                                        <div class="guest-top">
                                            <img src="~static/images/activity/8/guest-1.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>潘晓东</h3>
                                            <span>腾讯云 腾讯云企业云平台中心高级工程师</span>
                                        </div>
                                    </li>
                                    <li class="guest">
                                        <div class="guest-top">
                                            <img src="~static/images/activity/8/guest-2.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>王炜</h3>
                                            <span>腾讯云 腾讯云中间件产品架构师</span>
                                        </div>
                                    </li>
                                    <li class="guest">
                                        <div class="guest-top">
                                            <img src="~static/images/activity/8/guest-3.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>徐展</h3>
                                            <span>腾讯云 腾讯云云安全部产品总监</span>
                                        </div>
                                    </li>

                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div class="center">
                                    <li class="guest">
                                        <div class="guest-top">
                                            <img src="~static/images/activity/8/guest-4.png" alt="">
                                        </div>
                                        <div class="guest-text">
                                            <h3>刘英平</h3>
                                            <span>腾讯云 腾讯云智慧行业高级解决方案架构师</span>
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
                        <td class="borrig">腾讯如何协助企业建立基础云平台</td>
                        <td>潘晓东 - 腾讯云企业云平台中心高级工程师</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig">14：30-15：10 </td>
                        <td class="borrig">解读腾讯企业云原生技术中台</td>
                        <td>王炜 - 腾讯云中间件产品架构师</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig"></td>
                        <td colspan="2">茶歇</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig">15：30-16：10 </td>
                        <td class="borrig">揭秘提供企业各项安全保障的腾讯安全 </td>
                        <td>徐展 - 腾讯云云安全部产品总监</td>
                    </tr>
                    <tr class="even">
                        <td class="borrig"> 16：10-16：40 </td>
                        <td class="borrig">解读智慧企业大数据与AI解决方案</td>
                        <td>刘英平 - 腾讯云智慧行业高级解决方案架构师</td>
                    </tr>
                    <tr class="odd">
                        <td class="borrig"></td>
                        <td colspan="2">结束</td>
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
            padding: 50px 0 150px 0;
            background: url("~static/images/innovation/intro/tech-03.jpg") no-repeat;
            .tech-container{
                width: 1200px;
                margin: 0 auto;
            }
            h2 {
                font-size: 30px;
                color: rgba(255, 255, 255, 0.81);
                text-align: center;
                margin: 0 0 40px 0;
                font-weight: normal;
            }
            .center{
                width: 1200px;
                margin: 0 auto;
            }

            .guest{
                float: left;
                width: 385px;
                height: 430px;
                background-color: #fff;
                margin: 0 7px;

                .guest-top {
                    height: 280px;

                    img {
                        width: 100%;
                        display: block;
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

