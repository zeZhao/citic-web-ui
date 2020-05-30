<style scoped lang="scss">
    @import "../../assets/scss/solution.scss";

    .solution-base {

        .feature {
            .icon.feature-1 {
                background-image: url("../../../static/images/solution/manage/feature-1.png");
            }
            .icon.feature-2 {
                background-image: url("../../../static/images/solution/manage/feature-2.png");
            }
            .icon.feature-3 {
                background-image: url("../../../static/images/solution/manage/feature-3.png");
            }
            .icon.feature-4 {
                background-image: url("../../../static/images/solution/manage/feature-4.png");
            }
            .icon.feature-5 {
                background-image: url("../../../static/images/solution/manage/feature-5.png");
            }
            .icon.feature-6 {
                background-image: url("../../../static/images/solution/manage/feature-6.png");
            }
            .icon.feature-7 {
                background-image: url("../../../static/images/solution/manage/feature-7.png");
            }
        }

        .scheme {

            .scheme-content {
                width: 1200px;
                height: 260px;
                margin: 0 auto;
                background: #fff;
                overflow: hidden;

                .menu {
                    float: left;
                    width: 280px;

                    li {
                        background: linear-gradient(to right, #3b3b3b, #3b3b3b);
                        color: #fff;
                        height: 100px;
                        transition: .5s;
                        font-size: 18px;
                        text-align: center;
                        padding-top: 40px;

                        .menu-icon {
                            transition: .5s;
                            display: block;
                            height: 0;
                            background: no-repeat center;
                            background-size: contain;
                            margin-bottom: 0;

                            &.menu-icon-1 {
                                background-image: url("../../../static/images/solution/manage/scheme-1.png");
                            }

                            &.menu-icon-2 {
                                background-image: url("../../../static/images/solution/manage/scheme-2.png");
                            }
                        }

                        label {

                        }

                        &.active {
                            background: linear-gradient(to right, #516dff, #5fbafe);
                            height: 160px;

                            .menu-icon {
                                height: 35px;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }

                .menu-detail {
                    float: left;
                    width: 920px;

                    .detail {
                        ul {
                            padding: 30px 35px;

                            li {
                                margin-bottom: 30px;

                                label {
                                    color: #333;
                                    margin-bottom: 15px;
                                    font-size: 14px;
                                    font-weight: bold;
                                    display: block;

                                    &::before{
                                        content: '';
                                        width: 2px;
                                        height: 14px;
                                        display: inline-block;
                                        background: #518cee;
                                        margin-right: 10px;
                                        position: relative;
                                        top: 1px;
                                    }
                                }

                                p {
                                    color: #666;
                                }
                            }
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
                <h2>高管看板</h2>
                <p>面向企业高管的移动办公解决方案</p>
            </div>
        </div>

        <!--产品需求-->
        <div class="demand">
            <h3 class="title">产品需求</h3>

            <div class="wheel-box">
                <Carousel class="wheel" v-model="carouselIndex" loop autoplay :autoplay-speed="5000" dots="none"
                          arrow="always">
                    <CarouselItem>
                        <div class="carousel-item">
                            <img :src="demand1" alt="">

                            <div class="introduce">
                                <p>我需要个“驾驶舱”，</p>
                                <p>对全集团进行业务协同管理以及各层面的风险管控，</p>
                                <p>这个驾驶舱怎么造？</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-item">
                            <img :src="demand2" alt="">

                            <div class="introduce">
                                <p>我经常要出差，带着笔记本不方便，而且公司系统太多，</p>
                                <p>有没有一个设备能方便的展现所有功能</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-item">
                            <img :src="demand3" alt="">

                            <div class="introduce">
                                <p>我需要经常关注财务分析和竞争分析来做重要的决策，</p>
                                <p>有没有一个平台能整体查看这些实时资讯</p>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>

        <!--产品功能特色-->
        <div class="feature" :style="{'background-image': `url(${featureBackground})`}">
            <h3 class="title">产品功能特色</h3>

            <ul>
                <li>
                    <span class="icon feature-1"></span>
                    <label>移动办公</label>

                    <div class="info">
                        随时随地获取企业内外部数据
                    </div>
                </li>
                <li>
                    <span class="icon feature-2"></span>
                    <label>安全保障</label>

                    <div class="info">
                        传输加密/防丢失/远程擦除/指纹/人脸识别等
                    </div>
                </li>
                <li>
                    <span class="icon feature-3"></span>
                    <label>应用集成</label>

                    <div class="info">
                        OA/邮件/网盘等多项应用
                    </div>
                </li>
                <li>
                    <span class="icon feature-4"></span>
                    <label>便于携带</label>

                    <div class="info">
                        名片/笔记本/企业logo等
                    </div>
                </li>
                <li>
                    <span class="icon feature-5"></span>
                    <label>行业研究</label>

                    <div class="info">
                        专业级的行业分析报告，对全行业的数据汇总分析，企业之间的对标管理
                    </div>
                </li>
                <li>
                    <span class="icon feature-6"></span>
                    <label>网络舆情</label>

                    <div class="info">
                        贵公司的网络评价，以及企业负面新闻等
                    </div>
                </li>
                <li>
                    <span class="icon feature-7"></span>
                    <label>经营决策</label>

                    <div class="info">
                        集团（总部）以及各级单位的财务数据情况，月/季度/年的走势分析
                    </div>
                </li>

                <li>
                    <label class="wait">敬请期待</label>
                </li>

            </ul>
        </div>

        <!--方案介绍-->
        <div class="scheme">
            <h3 class="title">方案介绍</h3>

            <div class="scheme-content">
                <ul class="menu">
                    <li @click="changeMenu(1)" :class="{active: menuIndex === 1}">
                        <span class="menu-icon menu-icon-1"></span>
                        <label>高管看板</label>
                    </li>
                    <li @click="changeMenu(2)" :class="{active: menuIndex === 2}">
                        <span class="menu-icon menu-icon-2"></span>
                        <label>高管看板服务端</label>
                    </li>
                </ul>

                <div class="menu-detail">

                    <div class="detail" v-show="menuIndex === 1">
                        <ul>
                            <li>
                                <label>运营管控</label>
                                <p>首页精选、财务分析、战略与投资管理、客户协同管理、风险管控、中信舆情</p>
                            </li>
                            <li>
                                <label>高效办公</label>
                                <p>公文处理、日程安排、邮件、移动社交、中信头条、无纸会议等</p>
                            </li>
                        </ul>
                    </div>

                    <div class="detail" v-show="menuIndex === 2">
                        <ul>
                            <li>
                                <label>系统管理</label>
                                <p>用户管理、角色管理、高管免登录管理、权限管理、运营管理</p>
                            </li>
                            <li>
                                <label>内容管理</label>
                                <p>中信舆情维护、研究报告维护、财务导航维护、战略与投资维护、风险管控维护、客户关系维护</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--案例介绍-->
        <div class="case">
            <h3 class="title">案例介绍</h3>

            <div class="case-panel">
                <div class="article">
                    <p class="title">中信集团-高管看板</p>

                    <p class="detail">
                        “中信集团高管看板”系统，覆盖中信集团高管、职能部门领导、合并报表范围内一级子公司领导层，
                        具有良好的用户体验及安全性，采用iPad作为移动办公终端，
                        通过MDM（Mobile Device Management，移动设备管理）进行统一安全管理，
                        具有便捷的移动性能、优秀的操控体验、超长的待机时间、良好的安全防护等特点。
                    </p>
                </div>

                <img :src="casePic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../../../static/images/solution/banner-manage.jpg'
    import demand1 from '../../../static/images/solution/manage/demand-1.png'
    import demand2 from '../../../static/images/solution/manage/demand-2.png'
    import demand3 from '../../../static/images/solution/manage/demand-3.png'
    import featureBackground from '../../../static/images/solution/public/feature-background.png'
    import casePic from '../../../static/images/solution/manage/case.png'

    export default {

        data() {

            return {
                banner,
                demand1,
                demand2,
                demand3,
                featureBackground,
                casePic,
                carouselIndex: 0,

                menuIndex: 1,
            }
        },

        methods: {
            changeMenu(index) {
                this.menuIndex = index;
            }
        }

    }
</script>


