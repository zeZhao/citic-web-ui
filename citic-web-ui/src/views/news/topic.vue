<template>
    <div class="news-topic">
        <div class="news-topic-banner">
            <div class="center">
                <h3>中信云活动专区</h3>
                <p class="title">线上会议 &nbsp;&nbsp;线下沙龙&nbsp;&nbsp;精彩活动一目了然</p>
            </div>
        </div>
        <div class="news-topic-new-activity newest-activity">
            <a href="/citic-web-ui/news/introArt8" target="_blank">
                <div class="center">
                    <h2>最新活动</h2>
                    <!--邀请函-->
                    <div class="banner01">
                        <Row class="center">
                            <i-col span="10">
                                <div class="invite-box">
                                    <div class="banner01-invitation">
                                        <div class="invite-text">
                                            <img src="~static/images/innovation/intro/tech-09.jpg"/>
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
                </div>
            </a>
        </div>
        <div class="news-topic-new-activity">
            <div class="center">
                <h2>活动动态</h2>

                <div class="dynamic-list">
                    <div class="part left">
                        <a href="/citic-web-ui/news/introArt8" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/1-1.png">
                        </a>

                        <a href="/citic-web-ui/news/introArt7" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/1-2.png">
                        </a>

                        <a href="https://www.c.citic/views/shalong.jsp" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/1-3.png">
                        </a>
                    </div>
                    <div class="part right">
                        <a href="https://www.c.citic/citic-web-ui/news/introArt5" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/2-1.png">
                        </a>
                        <a href="https://www.c.citic/views/news/citic-cloud-second.jsp" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/2-2.png">
                        </a>
                        <a href="https://www.c.citic/citic-web-ui/news/introArt3" target="_blank">
                            <img src="~static/images/news/topic/dynamic-list/2-3.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        mounted() {
            window.scrollTo(0, 0)
        },

        methods: {},
    }
</script>

<style lang="scss">
    .news-topic {
        .news-topic-banner {
            width: 100%;
            height: 390px;
            background-color: #0e0b40;
            .center {
                width: 1200px;
                height: 390px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                text-align: left;
                background: url(~static/images/news/banner-topic.gif) top right no-repeat;

            }
            .title {
                display: block;
                font-size: 14px;
                color: #ffffff;
                margin-top: 10px;
            }
            h3 {
                margin-top: 150px;
                display: block;
                font-size: 22px;
                color: #ffffff;
            }
        }
        .news-topic-new-activity {

            &.newest-activity {
                /*height:540px;*/
                background: url("~static/images/innovation/intro/tech-21.jpg");
            }

            .center {
                width: 1200px;
                /*height: 550px;*/
                margin: 0 auto;
                overflow: hidden;
                position: relative;
            }

            h2 {
                padding-top: 50px;
                padding-bottom: 40px;
                text-align: center;
                display: block;
                font-weight: normal;
                font-size: 30px;
                color: #000000;
            }

            .center {
                width: 1200px;
                margin: 0 auto;
            }

            .banner01 {
                overflow: hidden;
                min-height: 700px;

                .invite-box {
                    overflow: hidden;
                    margin-right: 10px;
                    background-color: #fff;
                    .banner01-invitation {
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
                                    width: 100%;
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
                        font-family: pf_medium, "Microsoft Yahei", "微软雅黑";
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
                        .in_01fr_c-to {
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
                                font-family: zzgf, "Microsoft Yahei", "微软雅黑";
                                margin-right: 6px;
                                background: #d7d7d7;
                                border-radius: 6px;
                            }
                            span {
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

            .dynamic-list {
                width: 1200px;
                margin: 0 auto 100px auto;
                overflow: hidden;

                .part {

                    &.left {
                        width: 595px;
                        float: left;
                        margin-right: 10px;
                    }

                    &.right {
                        width: 595px;
                        float: right;
                    }

                    img {
                        width: 100%;
                        display: block;
                        margin: 10px;
                    }
                }
            }
        }

    }
</style>

