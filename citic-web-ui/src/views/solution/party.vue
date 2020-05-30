<style scoped lang="scss">
    @import "../../assets/scss/solution.scss";

    .solution-base {

        .demand{
            .introduce{
                padding: 60px 0 0 55px !important;
                width: 640px;

                p{
                    font-size: 16px;
                    color: #333;
                    padding-bottom: 30px;

                    &::before{
                        content: '';
                        display: inline-block;
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        background: #ed411f;
                        margin-right: 10px;
                        position: relative;
                        top: -1px;
                    }
                }
            }
        }

        .feature {

            .icon.feature-1 {
                background-image: url("../../../static/images/solution/party/feature-1.png");
            }
            .icon.feature-2 {
                background-image: url("../../../static/images/solution/party/feature-2.png");
            }
            .icon.feature-3 {
                background-image: url("../../../static/images/solution/party/feature-3.png");
            }
            .icon.feature-4 {
                background-image: url("../../../static/images/solution/party/feature-4.png");
            }
            .icon.feature-5 {
                background-image: url("../../../static/images/solution/party/feature-5.png");
            }

            ul{

                li{
                    &:hover{
                        background: linear-gradient(rgba(235, 20, 1, 0.4), rgba(235, 112, 87, 0.4));
                    }
                }
            }
        }

        .scheme {
            padding-bottom: 60px;

            .scheme-content {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                height: 260px;

                .logo-box{
                    width: 280px;
                    float: left;
                    background: linear-gradient(to right, #eb1401, #eb7057);
                    height: 100%;
                    position: relative;

                    .logo{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -60%);
                        text-align: center;

                        img{
                            display: inline-block;
                            padding-bottom: 10px;
                        }

                        label{
                            font-size: 18px;
                            color: #fff;
                            display: block;
                        }
                    }
                }

                .content{
                    float: left;
                    width: 920px;
                    height: 100%;
                    padding: 40px 85px 0 85px;
                    background: #fff;
                    overflow: hidden;

                    li{
                        float: left;
                        width: 290px;
                        border-radius: 5px;
                        border: 1px solid #c4c2c2;
                        margin: 0 45px 5px 0;
                        padding: 5px 0 5px 25px;

                        label{
                            font-size: 16px;
                            color: #ef6958;
                            padding-bottom: 10px;
                        }

                        p{
                            font-size: 14px;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="solution-base">
        <!--头部-->
        <div class="header" :style="{'background-image': `url(${banner})`}">
            <div class="slogan">
                <h2>党建云</h2>
                <p>智能党建解决方案</p>
            </div>
        </div>

        <!--产品需求-->
        <div class="demand">
            <h3 class="title">产品需求</h3>

            <div class="wheel-box">
                <Carousel class="wheel" v-model="carouselIndex" dots="none"
                          arrow="never">
                    <CarouselItem>
                        <div class="carousel-item">
                            <img :src="demand1" alt="">

                            <div class="introduce">
                                <p>提升企业内部至关重要党建及党务建设的工作效率
                                <p>通过资讯和书籍在线学习、阅读，提升全员政治素质</p>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>

        <!--产品功能特色-->
        <div class="feature" :style="{'background-image': `url(${featureBackground})`}">
            <h3 class="title">产品功能特色</h3>

            <!--协作社交-->
            <ul>
                <li>
                    <span class="icon feature-1"></span>
                    <label>学习</label>

                    <div class="info">
                        与人民网、光明网和中信出版集团合作，将精品党课和经典书籍搬上网，建立“网上党校”和“网络阅览室”。
                    </div>
                </li>
                <li>
                    <span class="icon feature-2"></span>
                    <label>交流</label>

                    <div class="info">
                        开设问卷调查和应知应会栏目，推广智能应用，自动解答党建基础知识方面的常见问题。开发“党员社区”，促进党员干部实时互动、深入交流。
                    </div>
                </li>
                <li>
                    <span class="icon feature-3"></span>
                    <label>管理</label>

                    <div class="info">
                        将发布通知公告、工作制度等功能嵌入党建云平台，推动党务办公智能化，使党务干部充分感受“云上办公”的便捷。
                    </div>
                </li>
                <li>
                    <span class="icon feature-4"></span>
                    <label>考核</label>

                    <div class="info">
                        党员学习时间统计，作为考核党组织和党员的重要依据，提高党建考核的精准度和公信力。
                    </div>
                </li>
                 <li>
                    <span class="icon feature-5"></span>
                    <label>服务和交流</label>

                    <div class="info">
                        利用党建云平台基于中信云布局的优势，拓展服务渠道、优化服务功能，构建集协同培训、健康运动、公益活动等多项功能于一体的综合性服务平台。
                    </div>
                </li>
                 <li>
                    <label class="wait">敬请期待</label>
                </li>

            </ul>

        </div>

        <!--方案优势-->
        <div class="scheme">
            <h3 class="title">方案优势</h3>

            <div class="scheme-content">
                <div class="logo-box">
                    <div class="logo">
                        <img src="../../../static/images/solution/party/scheme-logo.png" alt="">
                        <label>我们的优势</label>
                    </div>
                </div>

                <ul class="content">
                    <li>
                        <label>“一”个平台</label>
                        <p>全面从严治党信息化平台</p>
                    </li>
                    <li>
                        <label>“四”化目标</label>
                        <p>流程化、信息化、可量化、可视化</p>
                    </li>
                    <li>
                        <label>覆盖“两”端</label>
                        <p>平台覆盖PC端和手机端</p>
                    </li>
                    <li>
                        <label>“五”大功能</label>
                        <p>学习、管理、考核、评价、宣传</p>
                    </li>
                    <li>
                        <label>“三”条纽带</label>
                        <p>组织纽带、文化纽带、信息纽带</p>
                    </li>
                    <li>
                        <label>“六”大模块</label>
                        <p>党务、资讯、文化、学习、应用、廉政</p>
                    </li>

                </ul>
            </div>
        </div>

        <!--案例介绍-->
        <div class="case">
            <h3 class="title">案例介绍</h3>

            <div class="case-panel">
                <div class="article">
                    <p class="title">北汽新能源</p>

                    <p class="detail">
                        北汽新能源通过中信科技打造先进的党建云平台，从而实现党组织在线管理，党费在线缴纳，先锋资讯在线学习，
                        书籍在线阅读，考试在线进行等多个强大功能，目前系统成功上线，运行稳定，得到了多层领导和员工的广泛肯定。
                    </p>
                </div>

                <img :src="casePic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../../../static/images/solution/banner-party.jpg'
    import demand1 from '../../../static/images/solution/party/demand-1.png'
    import featureBackground from '../../../static/images/solution/public/feature-background.png'
    import casePic from '../../../static/images/solution/party/case.png'

    export default {

        data() {

            return {
                banner,
                demand1,
                featureBackground,
                casePic,
                carouselIndex: 0,
            }
        },
    }
</script>


