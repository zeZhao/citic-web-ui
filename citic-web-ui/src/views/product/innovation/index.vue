<style lang="scss" src="../../../assets/scss/innovation-ranking.scss"></style>

<template>
    <div class="innovation-bg">
        <div class="innovation-banner">
            <div class="center">
                <div class="ranking">
                    <div class="ranking-table">
                        <div class="panel">
                            <div class="panel-heading">创新应用排行榜</div>
                            <Carousel class="carousel-list" autoplay :autoplay-speed="carousel.autoplaySpeed" v-model="rankingIndex" :dots="carousel.dots" :arrow="carousel.arrow">
                                <CarouselItem>
                                    <ci-racking-table></ci-racking-table>
                                </CarouselItem>
                                <CarouselItem>
                                    <ci-register-num></ci-register-num>
                                </CarouselItem>
                                <CarouselItem>
                                    <ci-trade-num></ci-trade-num>
                                </CarouselItem>
                                <CarouselItem>
                                    <ci-product-num></ci-product-num>
                                </CarouselItem>
                                <CarouselItem>
                                    <ci-active-user></ci-active-user>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div class="logged" v-if="trueName">
                    <p class="logged-company"><span>{{tenantData.tenantName}}</span>已有</pc>
                    <p class="count-circle"><span class="count-num">{{tenantData.innovateCount}}</span>款<b class="count-inn">创新应用</b></p>
                    <p class="logged-company">超过了<span class="logged-company-rate">{{tenantData.percent}}</span>的子公司</p>
                    <div class="btn" @click="toConsole()">管理我的应用 <Icon type="arrow-right-c"></Icon></div>
                </div>
                <div class="not-logged"  v-if="!trueName">
                    <a class="btn" @click="doLogin">登录查看我的应用信息</a>
                </div>
            </div>
        </div>
        <div class="innovation-rate">
            <div class="center">
                <Row>
                    <i-col span="17">
                        <h2 class="innovation-rate-title" style="display: block">中信集团创新应用项目</h2>
                        <Row :gutter="140">
                            <i-col span="4" v-for="(item,inx) in projectStage" :key="inx">
                                <p class="count-circle"><span class="count-num">{{item.projectStageCount}}</span>款<b class="count-inn">{{item.projectStage}}</b></p>
                            </i-col>
                        </Row>
                        <div class="btn" @click="toInnovationDesc()">创新动态 <Icon type="arrow-right-c"></Icon></div>
                    </i-col>
                    <i-col span="7" class="issued-innovation">
                        <h2 class="innovation-rate-title" style="display: block">中信企业已发布创新应用</h2>
                        <p class="count-circle" style="margin: 0 auto"><span class="count-num">{{innovateProjectStageCount.totalCount}}</span>款<b class="count-inn">创新应用</b></p>
                        <div class="btn to-market" @click="toInnovationList()">访问应用市场 <Icon type="arrow-right-c"></Icon></div>
                    </i-col>
                </Row>
            </div>
        </div>
        <ci-innovation-tab class="innovation-tab"></ci-innovation-tab>
        <div class="dev-info-backtwo">
            <h2>数字化应用创新APP解决方案</h2>
            <div class="center">
                <div class="introimg-bg" @click="go('views/developer.jsp')">
                    <img class="introimg" src="~static/images/innovation/dev-info.png" alt="">
                </div>
                <div class="introimg-info" @click="go('views/developer.jsp')">
                    <img src="~static/images/innovation/app.png" alt="">
                </div>
            </div>
        </div>
        <div class="history-activity">
            <h2>历史精彩活动</h2>
            <div class="center">
                <Row>
                    <i-col span="11" class="history-activity-tab">
                        <div class="history-activity-tab-btn">
                            <img src="~static/images/innovation/simple_img_small_3.png"/>
                            <span class="dangqi">第三期</span>
                            <div class="slider_info">
                                <h3>中信云科技范儿沙龙：生态∞创新如何为我所用</h3>
                                <p>从工业时代制造业的供应链体系，到信息时代Windows & Intel时代的...</p>
                            </div>
                        </div>
                        <div class="history-activity-tab-btn">
                            <img src="~static/images/innovation/simple_img_small_2.png"/>
                            <span class="dangqi">第二期</span>
                            <div class="slider_info">
                                <h3>中信云科技范儿沙龙：解码无处不在的AI</h3>
                                <p>3月29日，中信云将邀请人工智能领域专家，基于不同技术、应用和研究维度...</p>
                            </div>
                        </div>
                        <div class="history-activity-tab-btn">
                            <img src="~static/images/innovation/simple_img_small_1.png"/>
                            <span class="dangqi">第一期</span>
                            <div class="slider_info">
                                <h3>中信云科技范儿沙龙：第一站将从中信双创空间隆重召开</h3>
                                <p>中信云召集国内外先进厂商及业内专家大咖，在2018年开展一系列活动...</p>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="12" offset="1">
                        <Carousel autoplay :autoplay-speed="5000" v-model="historyTab" loop>
                            <Carousel-item @click.native="go('views/shalong.jsp')">
                                <img src="~static/images/innovation/simple_img_1.png" alt="">
                            </Carousel-item>
                            <Carousel-item @click.native="go('views/news/citic-cloud-second.jsp')">
                                <img src="~static/images/innovation/simple_img_2.png" alt="">
                            </Carousel-item>
                            <Carousel-item @click.native="torouter('/news/introArt3')">
                                <img src="~static/images/innovation/simple_img_3.png" alt="">
                            </Carousel-item>
                        </Carousel>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import BaseUtil from "utils/base.js"
import Api from "utils/apiEnum.js"
import rankingTable from "com/product/innovation/rankingTable"
import RegisterNum from "com/product/innovation/register-num"
import TradeNum from "com/product/innovation/trade-num"
import ProductNum from "com/product/innovation/product-num"
import ActiveUser from "com/product/innovation/active-user"
import innovationTab from "com/product/innovation/innovationTab"

export default {
    data () {
        return {
            carousel:{
                dots: 'inside',
                arrow: 'never',
                autoplaySpeed: 8000
            },
            rankingIndex: 0,
            trueName: "",
            tenantData: [],
            innovateProjectStageCount: [],
            projectStageCountVoList: [],
            projectStage:[],
            historyTab: 1,
        }
    },
    watch:{
        '$store.state.userInfo.USER_INFO':function(){

            if(this.$store.state.userInfo.USER_INFO){
                this.trueName = this.$store.state.userInfo.USER_INFO.fullname
            }
        }
    },
    mounted(){

        if(this.$store.state.userInfo.USER_INFO){
            this.trueName = this.$store.state.userInfo.USER_INFO.fullname
        }
        if(this.$store.state.userInfo.TENANT_INFO){
            //console.log(this.$store.state.userInfo.TENANT_INFO)
        }
        //"tenantType": "BUSINESS"
        //BaseUtil.getTenantsDetai(false)
        this.getInnovateTenantData();
        this.gettenantData();
        window.scrollTo(0,0)
    },
    components: {
        "ci-racking-table": rankingTable,
        "ci-register-num": RegisterNum, //注册用户数
        "ci-trade-num": TradeNum, //交易次数/笔数
        "ci-product-num": ProductNum, //覆盖的业务和产品数量
        "ci-active-user": ActiveUser, //覆盖的业务和产品数量
        "ci-innovation-tab": innovationTab 
    },
    methods: {
        go(_url){
            let url = BaseUtil.goCompatible(_url)
            /*window.open(url, '_blank')*/
        },
        doLogin(){
            BaseUtil.doLogin();
        },
        /*changeTab(inx) {
            console.log(inx)
            this.historyTab = inx;
        },*/
        gettenantData() {
            this.$get(Api.INNOVATE_INNOVATETENANTDATA, {},false).then(res => {
                this.tenantData = res.data
//                console.log('tenantData',this.tenantData)
            })
        },
        getInnovateTenantData() {
            this.$get(Api.INNOVATE_INNOVATEPROJECTSTAGECOUNT, {},false).then(res => {
                this.innovateProjectStageCount = res.data
                this.projectStageCountVoList = res.data.projectStageCountVoList
                const el = this.projectStageCountVoList
                console.log('222222',el)
                for (let index = 0; index < el.length; index++) {
                    el[index].projectStage = this.StageToText(el[index].projectStage);
                    this.projectStage = el
                }
//                console.log('innovateProjectStageCount',this.innovateProjectStageCount)
//                console.log('projectStageCountVoList',this.projectStageCountVoList)

            })
        },
        torouter(path){
            this.$router.push({
                path: path,
            });
        },
        todetail(id) {
            this.$router.push({
                path: 'innovation/details',
                query: {
                    id
                }
            });
        },
        toConsole() {
            this.$router.push({
                path: '../../console/app/list',
            });
        },
        toInnovationDesc() {
            this.$router.push({
                path: 'desc',
            });
        },
        toInnovationList() {
            this.$router.push({
                path: 'list',
            });
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
    }
}
</script>

<style scoped lang="scss">
    /*渐变放射边框按钮样式*/
    @mixin btn {
        background: linear-gradient(#27d6fb,#4be7ea);
        color: #05152b;
        box-shadow: 0 0 24px #27d6fb;
    }
    .innovation-banner{
        width: 100%;
        height: 548px;
        background: url(~static/images/innovation/innovation-bg.png) top center no-repeat;

        .center {
            width: 1200px;
            height: 550px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;

            .ranking{
                position: absolute;
                top: 50px;
                right: 20px;
                width: 311px;
                height:470px;
                background: url(~static/images/innovation/ranking.png) top center no-repeat;
            }
            .logged{
                position: absolute;
                top: 340px;
                left: 100px;
                p{
                    font-size: 16px;
                    color: #42effd;
                    display: inline-block;
                    font-weight: bold;
                }
                .logged-company{
                    line-height: 120px;
                    vertical-align: bottom;
                    margin: 0 10px;
                    .logged-company-rate{
                        color: #ffffff;
                    }
                }

                .btn{
                    @include btn;
                    display: inline-block;
                    cursor: pointer;
                    width: 146px;
                    padding:10px 24px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: bolder;
                    margin: 0 16px;
                    margin-bottom: 40px;
                    vertical-align: bottom;
                }
            }
            .not-logged{
                height: 20px;
                position: absolute;
                top: 360px;
                left: 280px;
                .btn{
                    @include btn;
                    padding:16px 40px;
                    border-radius: 30px;
                    font-size: 20px;
                    font-weight: bolder;
                }
            }
        }
    }
    .innovation-rate{
        width: 100%;
        background: #05152b;
        padding: 40px 0;
        border-bottom:1px solid #1d2e40;
        .center {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            .innovation-rate-title{
                font-size: 24px;
                color: #ffffff;
                text-align: center;
            }
            .count-circle{
                font-size: 16px;
                color: #42effd;
                font-weight: bold;
            }
            .issued-innovation{
                border-left:1px solid #1d2e40;
            }
            .btn{
                @include btn;
                margin: 30px auto;
                cursor: pointer;
                padding:10px 24px;
                width: 120px;
                border-radius: 30px;
                font-size: 14px;
                font-weight: bolder;
            }
            .to-market{
                width: 150px;
            }
        }
    }
    .innovation-tab{
        border-bottom:1px solid #1d2e40;
    }
    .dev-info-backtwo {
        width: 100%;
        padding: 60px 0;
        background: #05152b;
        border-bottom:1px solid #1d2e40;
        .center{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            margin-bottom: 40px;
            .introimg-bg {
                float: left;
                overflow: hidden;
                padding: 4px;
                border: 2px solid #4be7ea;
                background: #FFFFFF;
                margin-left: 20px;
                border-radius: 2px;

                img.introimg {
                    border-radius: 10px;
                }
            }
            .introimg-info {
                float: left;
                margin-left: 80px;
                /*img{
                    height: 457px;
                }*/
            }

        }
    }
    .history-activity{
        width: 100%;
        padding: 60px 0;
        background: #05152b;
        .center{
            width: 1200px;
            margin: 0 auto;

            .history-activity-tab{
                .history-activity-tab-btn{
                    width: 100%;
                    height: 154px;
                    display: inline-block;
                    border: 1px solid #1ebbc5;
                    text-align: center;
                    margin-bottom: 20px;
                    cursor: pointer;
                    position: relative;
                    padding: 14px;
                    img{
                        border-radius: 4px;
                        float: left;
                        height: 126px;
                        width: 180px;
                    }
                    .dangqi {
                        background: linear-gradient(to right, #1ebbc5, #1791d7);
                        position: absolute;
                        width: 60px;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        bottom: 13px;
                        left: 134px;
                        color:#ffffff;
                    }
                    .slider_info {
                        float: left;
                        text-align: left;
                        padding:6px 20px;
                        width: 340px;
                        height: 130px;
                        h3{
                            color: #ffffff;
                            font-size: 18px;
                            line-height: 28px;
                            height: 70px;
                            font-weight: normal;
                        }
                        p{
                            font-size: 12px;
                            color: #ffffff;
                            opacity: 0.6;
                        }
                    }
                    &:hover{
                         background: linear-gradient(to right, #1ebbc5, #1791d7);
                     }
                }
            }
        }
    }


    /*公共的计数圆圈样式*/
    .count-circle{
        width: 126px;
        height: 126px;
        padding-top: 20px;
        background: url(~static/images/innovation/count-circle.png) top center no-repeat;
        .count-num{
            font-weight: 100;
            font-size: 36px;
            line-height: 60px;
            text-align: center;
            color: #ffffff;
            display: inline-block;
            width: 65px;
            margin-left: 24px;
        }
        .count-inn{
            display: block;
            line-height: 20px;
            text-align: center;
            margin-top: -6px;
        }
    }
    h2 {
        font-size: 30px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 40px;
        color: #ffffff;
    }

</style>
