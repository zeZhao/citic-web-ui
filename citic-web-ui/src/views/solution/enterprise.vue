<style scoped lang="scss">
    @import "../../assets/scss/solution.scss";

    .solution-base {

        .demand{
            .introduce{
                padding: 15px 0 0 55px !important;
                width: 640px;

                p{
                    font-size: 18px;
                    color: #333;
                }

                ul{
                    margin-top: 10px;
                    border-top: 1px solid #d9d9d9;
                    border-bottom: 1px solid #d9d9d9;
                    color: #666;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    overflow: hidden;

                    li{
                        float: left;
                        width: 50%;
                        padding-bottom: 10px;
                        position: relative;
                        padding-left: 25px;

                        &::before{
                            position: absolute;
                            content: '·';
                            font-size: 30px;
                            color: #666;
                            display: inline;
                            left: 10px;
                            top: -15px;
                        }
                    }
                }
            }
        }

        .feature {
            height: 500px;

            h3{
                padding: 60px 0 50px 0;
            }

            .feature-menu{
                width: 850px;
                margin: 0 auto;
                overflow: hidden;
                padding-bottom: 35px;
                position: relative;

                label{
                    float: left;
                    width: 25%;
                    color: #fff;
                    font-size: 18px;
                    display: inline-block;
                    text-align: center;
                    cursor: pointer;
                }

                &::after {
                    content: '';
                    height: 2px;
                    background: #fff;
                    position: absolute;
                    bottom: 25px;
                }

                &.left::after{
                    transition: right .3s cubic-bezier(0.4, 0, 1, 1), left .3s cubic-bezier(0.22, 0.61, 0.36, 1);
                }

                &.right::after{
                    transition: right .3s cubic-bezier(0.22, 0.61, 0.36, 1), left .3s cubic-bezier(0.4, 0, 1, 1);
                }

                &.active-1::after{
                    left: 7.5%;
                    right: 82.5%;
                }

                &.active-2::after{
                    left: 32.5%;
                    right: 57.5%;
                }

                &.active-3::after{
                    left: 57.5%;
                    right: 32.5%;
                }

                &.active-4::after{
                    left: 82.5%;
                    right: 7.5%;
                }
            }

            .icon.feature-1-1 {
                background-image: url("../../../static/images/solution/enterprise/feature-1-1.png");
            }
            .icon.feature-1-2 {
                background-image: url("../../../static/images/solution/enterprise/feature-1-2.png");
            }
            .icon.feature-1-3 {
                background-image: url("../../../static/images/solution/enterprise/feature-1-3.png");
            }
            .icon.feature-1-4 {
                background-image: url("../../../static/images/solution/enterprise/feature-1-4.png");
            }
            .icon.feature-2-1 {
                background-image: url("../../../static/images/solution/enterprise/feature-2-1.png");
            }
            .icon.feature-2-2 {
                background-image: url("../../../static/images/solution/enterprise/feature-2-2.png");
            }
            .icon.feature-2-3 {
                background-image: url("../../../static/images/solution/enterprise/feature-2-3.png");
            }
            .icon.feature-2-4 {
                background-image: url("../../../static/images/solution/enterprise/feature-2-4.png");
            }
            .icon.feature-3-1 {
                background-image: url("../../../static/images/solution/enterprise/feature-3-1.png");
            }
            .icon.feature-3-2 {
                background-image: url("../../../static/images/solution/enterprise/feature-3-2.png");
            }
            .icon.feature-3-3 {
                background-image: url("../../../static/images/solution/enterprise/feature-3-3.png");
            }
            .icon.feature-3-4 {
                background-image: url("../../../static/images/solution/enterprise/feature-3-4.png");
            }
            .icon.feature-4-1 {
                background-image: url("../../../static/images/solution/enterprise/feature-4-1.png");
            }
            .icon.feature-4-2 {
                background-image: url("../../../static/images/solution/enterprise/feature-4-2.png");
            }
            .icon.feature-4-3 {
                background-image: url("../../../static/images/solution/enterprise/feature-4-3.png");
            }
        }

        .scheme {
            height: 720px;

            .scheme-content {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                img{
                    float: left;
                    margin-bottom: 20px;
                    width: 386px;
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
                <h2>企业号</h2>
                <p>搭建涵盖员工生活与工作全方位的企业社交平台</p>
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
                                <p>办公流程复杂、流程不透明；企业文化及生活服务等资讯获得困难；</p>
                                <p>员工沟通及协作效率低</p>
                                <ul>
                                    <li>流程审批不及时</li>
                                    <li>员工考勤管理难</li>
                                    <li>市场方案传达不及时</li>
                                    <li>大规模调研展开难度大</li>
                                    <li>员工培训成本高</li>
                                    <li>企业文化建设程度低</li>
                                    <li>员工协作交流少</li>
                                    <li>多方互动沟通效率低</li>
                                </ul>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>

        </div>

        <!--产品功能特色-->
        <div class="feature" :style="{'background-image': `url(${featureBackground})`}">
            <h3 class="title">产品功能特色</h3>

            <div class="feature-menu" :class="menuClass">
                <label @click="changeFeature(1)">协作&社交</label>
                <label @click="changeFeature(2)">资讯&知识</label>
                <label @click="changeFeature(3)">生活</label>
                <label @click="changeFeature(4)">智慧办公</label>
            </div>

            <!--协作社交-->
            <ul v-show="featureIndex === 1">
                <li>
                    <span class="icon feature-1-1"></span>
                    <label>i协同</label>

                    <div class="info">
                        发挥多元化集团企业优势，促进集团下各行业协同发展
                    </div>
                </li>
                <li>
                    <span class="icon feature-1-2"></span>
                    <label>协同培训</label>

                    <div class="info">
                        组织协调集团内各子公司共享培训课程，发布培训消息，鼓励各企业员工参与学习。
                    </div>
                </li>
                <li>
                    <span class="icon feature-1-3"></span>
                    <label>通讯录&同事群聊</label>

                    <div class="info">
                        向员工提供企业各机构员工的联络信息，一键建群或开展同事间沟通交流。
                    </div>
                </li>
                <li>
                    <span class="icon feature-1-4"></span>
                    <label>企业健步</label>

                    <div class="info">
                        通过小程序结合微信运动面向集团员工输出健步社交生态，可排行可PK。
                    </div>
                </li>
            </ul>

            <!--资讯&知识-->
            <ul v-show="featureIndex === 2">
                <li>
                    <span class="icon feature-2-1"></span>
                    <label>企业聚焦</label>

                    <div class="info">
                        企业资讯、业务资讯重磅消息分秒必达
                    </div>
                </li>
                <li>
                    <span class="icon feature-2-2"></span>
                    <label>企业头条</label>

                    <div class="info">
                        打造企业内部信息、活动、直播等资讯的资讯共享，内容分类管理，便于快速查看
                    </div>
                </li>
                <li>
                    <span class="icon feature-2-3"></span>
                    <label>安全侠</label>

                    <div class="info">
                        第一时间发布企业信息安全贴士，随时随地关注安全资讯
                    </div>
                </li>
                <li>
                    <span class="icon feature-2-4"></span>
                    <label>离退家园</label>

                    <div class="info">
                        传递企业对离退休人员的关怀，重视离退休干部的精神文明生活，提供便捷 的退休金发放提醒
                    </div>
                </li>
            </ul>

            <!--生活-->
            <ul v-show="featureIndex === 3">
                <li>
                    <span class="icon feature-3-1"></span>
                    <label>金融理财</label>

                    <div class="info">
                        发布金融资讯，提供企业年金快速查询，提供企业内部员工的专享理财服务
                    </div>
                </li>
                <li>
                    <span class="icon feature-3-2"></span>
                    <label>智趣生活&员工内购</label>

                    <div class="info">
                        整合企业内部资源，为企业员工提供电商平台，健康保险业务
                    </div>
                </li>
                <li>
                    <span class="icon feature-3-3"></span>
                    <label>摄影圈</label>

                    <div class="info">
                        展示员工兴趣爱好，向内部摄影爱好者提供共享交流的平台
                    </div>
                </li>
                <li>
                    <span class="icon feature-3-4"></span>
                    <label>出国境</label>

                    <div class="info">
                        实时提示出国出境安全信息及签证服务政策，第一时间了解出发目的地旅行动态
                    </div>
                </li>
            </ul>

            <!--智慧办公-->
            <ul v-show="featureIndex === 4">
                <li>
                    <span class="icon feature-4-1"></span>
                    <label>日程管理</label>

                    <div class="info">
                        方便员工管理日常的工作和事务，提醒备忘事项，共享日程安排、协同工作
                    </div>
                </li>
                <li>
                    <span class="icon feature-4-2"></span>
                    <label>会议助手</label>

                    <div class="info">
                        智能化预约会议，全方位会议管理，会议提醒与签到，会议室资源一目了然
                    </div>
                </li>
                <li>
                    <span class="icon feature-4-3"></span>
                    <label>智能语音</label>

                    <div class="info">
                        基于企业号应用场景和知识库输出智能应答服务，通过AI能力方便员工用户呼起应用并展开应答，打造企业号的小爱同学
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
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-1.png" alt="">
                <img class="hover-box-shadow" style="margin: 0 20px;" src="../../../static/images/solution/enterprise/scheme-2.png" alt="">
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-3.png" alt="">
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-4.png" alt="">
                <img class="hover-box-shadow" style="margin: 0 20px;" src="../../../static/images/solution/enterprise/scheme-5.png" alt="">
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-6.png" alt="">
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-7.png" alt="">
                <img class="hover-box-shadow" style="margin: 0 20px;" src="../../../static/images/solution/enterprise/scheme-8.png" alt="">
                <img class="hover-box-shadow" src="../../../static/images/solution/enterprise/scheme-9.png" alt="">
            </div>
        </div>

        <!--案例介绍-->
        <div class="case">
            <h3 class="title">案例介绍</h3>

            <div class="case-panel">
                <div class="article">
                    <p class="title">中信集团-企业号</p>

                    <p class="detail">
                        中信集团企业号总注册用户规模达18万，激活用户规模达到11万。企业号平均每月推送170篇图文，
                        企业号平均每月爬取并推送出58篇图文，图文阅读量最高达25万+人次。
                        帮助中信集团，借助云计算、大数据、移动社交等互联网技术，聚集中信集团内部员工，
                        引入中信内外部资源与中信员工连起来，为中信员工提供办公、协同、生活等多种服务。
                    </p>
                </div>

                <img :src="casePic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '../../../static/images/solution/banner-manage.jpg'
    import demand1 from '../../../static/images/solution/enterprise/demand-1.png'
    import featureBackground from '../../../static/images/solution/public/feature-background.png'
    import casePic from '../../../static/images/solution/enterprise/case.png'

    export default {

        data() {

            return {
                banner,
                demand1,
                featureBackground,
                casePic,
                carouselIndex: 0,

                featureIndex: 1,
                menuClass: {
                    'active-1': true
                },
            }
        },

        methods: {
            changeFeature(index) {
                this.featureIndex = index;
            }
        },

        watch:{
            featureIndex(newValue, oldValue){
                const active = `active-${newValue}`;
                const direction = newValue - oldValue > 0 ? 'right' : 'left';

                let _class = {};

                _class[active] = true;
                _class[direction] = true;

                this.menuClass = _class;
            }
        },
    }
</script>


