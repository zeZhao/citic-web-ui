<template>
    <div class="innovation-desc">
        <div class="innovation-desc-banner">

            <div class="center">
                <a class="back" @click="routerback()">
                    <Icon type="chevron-left"></Icon>
                    返回</a>
                <Row>
                    <i-col span="10">
                        <Carousel class="carousel-list" v-model="innovateExtParam" autoplay :dots="carouselSetting.dots"
                                  :autoplay-speed="carouselSetting.autoplaySpeed" loop>
                            <CarouselItem v-for="(iteam,inx) in serverDesc.innovateExtParamList" :key="inx"
                                          class="carousel-item">
                                <img :src="iteam.extValue" alt="">
                            </CarouselItem>
                        </Carousel>
                    </i-col>
                    <i-col span="14" class="innovation-desc-synopsis">
                        <p class="innovation-desc-synopsis-topname">创新应用</p>
                        <h2 :title="serverDesc.applicationName" class="innovation-desc-synopsis-title">
                            {{serverDesc.applicationName}}</h2>
                        <div class="innovation-desc-synopsis-txt">
                            <p class="innovation-desc-synopsis1">应用形式&nbsp;&nbsp;<b :title="serverDesc.applicationMode"
                                                                                    class="innovation-desc-synopsis-con"><span>/</span>&nbsp;&nbsp;&nbsp;&nbsp;{{serverDesc.applicationMode}}</b>
                            </p>
                            <p class="innovation-desc-synopsis2">项目阶段&nbsp;&nbsp;<b :title="serverDesc.projectStage"
                                                                                    class="innovation-desc-synopsis-con"><span>/</span>&nbsp;&nbsp;&nbsp;&nbsp;{{serverDesc.projectStage}}</b>
                            </p>
                            <p class="innovation-desc-synopsis3">应用类型&nbsp;&nbsp;<b :title="serverDesc.applicationType"
                                                                                    class="innovation-desc-synopsis-con"><span>/</span>&nbsp;&nbsp;&nbsp;&nbsp;{{serverDesc.applicationType}}</b>
                            </p>
                            <p class="innovation-desc-synopsis4">开发者&nbsp;&nbsp;<b :title="serverDesc.createOperator"
                                                                                   class="innovation-desc-synopsis-con"><span>/</span>&nbsp;&nbsp;&nbsp;&nbsp;{{serverDesc.createOperator}}</b>
                            </p>
                            <p class="innovation-desc-synopsis5">应用访问&nbsp;&nbsp;<b :title="serverDesc.visitTypeUrl"
                                                                                    class="innovation-desc-synopsis-con"><span>/</span>&nbsp;&nbsp;&nbsp;&nbsp;{{serverDesc.visitTypeUrl}}</b>
                            </p>
                        </div>
                        <div class="innovation-desc-qrcode" @click="go()">
                            <img :src="serverDesc.visitTypeCode" alt="">
                            <p class="innovation-desc-qrcode-tip">扫一扫立即访问</p>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="innovation-desc-intro">
            <div class="center">
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        应用场景
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.useCase}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        用户规模
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.userScale}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        业务目标
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.businessGoal}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        目标客户
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.targetCustomer}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        绩效指标
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.performanceIndex}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        同业比较
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.industryCompare}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        投入预算
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.inputBudget}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        新技术应用
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.newTechnology}}</p>
                </div>
                <div class="innovation-desc-intro-con">
                    <h3 class="innovation-desc-intro-title">
                        <Icon class="innovation-desc-intro-icon" type="stop"></Icon>
                        数据驱动
                    </h3>
                    <p class="innovation-desc-intro-txt">{{serverDesc.dataDrive}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import UrlUtil from 'utils/url';
    import Api from "utils/apiEnum.js"

    let serviceId = UrlUtil.getParame("service_id");
    export default {
        data() {
            return {
                carouselSetting: {
                    autoplaySpeed: 5000,
                    arrow: "never",
                    dots: "inside"
                },
                innovateExtParam: 0,
                serverDesc: {},  //详情对象
            }
        },
        mounted() {
            this.getDetail()
            window.scrollTo(0, 0)
        },
        methods: {
            /**
             * 获取详情信息
             */
            getDetail() {
                const url = Api.INNOVATE_INNOVATEINFO + `${this.$route.query.id}`;
                this.$get(url, {}, false).then(res => {
                    this.serverDesc = res.data;
                    const el = this.serverDesc
                    el.applicationMode = this.ModeToText(el.applicationMode);
                    el.projectStage = this.StageToText(el.projectStage);
                    el.applicationType = this.TypeToText(el.applicationType);
                    this.serverDesc = el
                });
            },
            routerback() {
                this.$router.back(-1)
            },
            ModeToText(val) {
                switch (Number(val)) {
                    case 1:
                        return "APP";
                        break;
                    case 2:
                        return "微信服务号";
                        break;
                    case 3:
                        return "微信小程序";
                        break;
                    case 4:
                        return "WEB应用";
                        break;
                    case 5:
                        return "其他";
                        break;
                    default:
                        break;
                }
            },
            StageToText(val) {
                switch (Number(val)) {
                    case 1:
                        return "需求分析";
                        break;
                    case 2:
                        return "项目立项";
                        break;
                    case 3:
                        return "应用设计";
                        break;
                    case 4:
                        return "开发测试";
                        break;
                    case 5:
                        return "上线运营";
                        break;
                    default:
                        break;
                }
            },
            TypeToText(val) {
                switch (Number(val)) {
                    case 1:
                        return "营销类";
                    case 2:
                        return "管理";
                    case 3:
                        return "基础平台";
                    case 4:
                        return "其他";
                    default:
                        break;
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @mixin innovation-desc-synopsis {
        font-size: 16px;
        line-height: 36px;
        height: 36px;
        padding-left: 48px;
        margin: 18px auto;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .innovation-desc {
        .innovation-desc-banner {
            width: 100%;
            height: 460px;
            background: #0d1c32 url(~static/images/innovation/innovation-step-bg.png) center top no-repeat;
            .center {
                width: 1200px;
                overflow: hidden;
                margin: 0 auto;
                .back {
                    font-size: 14px;
                    color: #757980;
                    margin: 20px 0;
                    display: block;
                    overflow: hidden;
                    width: 100%;
                }
                .carousel-list {
                    width: 500px;
                    height: 350px;
                    .carousel-item {
                        text-align: center;
                        img {
                            width: auto;
                            height: 350px;
                            max-width: 100%;
                            max-height: 100%;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .innovation-desc-synopsis {
            padding-left: 70px;
            .innovation-desc-synopsis-topname {
                color: #777b82;
                font: 14px;

            }
            .innovation-desc-synopsis-title {
                font-size: 40px;
                border-bottom: 2px solid #1e2d41;
                padding: 0 10px 20px 20px;
                color: #ffffff;
                font-weight: normal;
                height: 64px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .innovation-desc-synopsis-txt {
                float: left;
                width: 72%;
                display: inline-block;
                .innovation-desc-synopsis1 {
                    @include innovation-desc-synopsis
                    background: url(~static/images/innovation/desc-synopsis1.png) left top no-repeat;
                }
                .innovation-desc-synopsis2 {
                    @include innovation-desc-synopsis
                    background: url(~static/images/innovation/desc-synopsis2.png) left top no-repeat;
                }
                .innovation-desc-synopsis3 {
                    @include innovation-desc-synopsis
                    background: url(~static/images/innovation/desc-synopsis3.png) left top no-repeat;
                }
                .innovation-desc-synopsis4 {
                    @include innovation-desc-synopsis
                    background: url(~static/images/innovation/desc-synopsis4.png) left top no-repeat;
                }
                .innovation-desc-synopsis5 {
                    @include innovation-desc-synopsis
                    background: url(~static/images/innovation/desc-synopsis5.png) left top no-repeat;
                }
                .innovation-desc-synopsis-con {
                    color: #ffffff;
                    opacity: 0.6;
                    font-weight: normal;
                    margin-left: 4px;
                    span {
                        color: #2d3c51;
                    }
                }
            }
            .innovation-desc-qrcode {
                float: right;
                width: 138px;
                height: 138px;
                margin-top: 20px;
                display: inline-block;
                text-align: right;
                border: 1px solid #3ce0f1;
                img {
                    display: inline-block;
                    width: 138px;
                    height: 138px;
                }
                .innovation-desc-qrcode-tip {
                    text-align: center;
                    width: 138px;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
        .innovation-desc-intro {
            background-color: #ffffff;
            width: 100%;
            padding-bottom: 40px;
            .center {
                width: 1200px;
                margin: 0 auto;
                .innovation-desc-intro-con {
                    border-bottom: 1px solid #ccc;
                    margin-top: 20px;
                    .innovation-desc-intro-title {
                        font-size: 16px;
                        font-weight: bold;
                        .innovation-desc-intro-icon {
                            width: 20px;
                            color: #36ddf4;
                            font-size: 12px;
                        }
                    }
                    .innovation-desc-intro-txt {
                        font-size: 14px;
                        padding-left: 20px;
                        margin: 10px auto;
                        color: #000;
                        opacity: 0.8;
                        line-height: 24px;
                    }
                }
            }
        }
    }

</style>
