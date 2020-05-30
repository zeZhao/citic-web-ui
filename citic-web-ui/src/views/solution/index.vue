<style scoped lang="scss">
    @import "../../assets/scss/solution.scss";

    .solution-base {

        .wheel-panel {
            background: #f6f6f6;
            height: 380px;

            .wheel-box {
                width: 1200px;
                height: 100%;
                position: relative;
                margin: 0 auto;

                .wheel-content {
                    position: absolute;
                    top: -90px;
                    left: 0;
                    right: 0;
                    height: 420px;
                    background: #fff;
                    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);

                    /deep/ .ivu-carousel-arrow {
                        background: rgba(88, 168, 244, 0.52);

                        &:hover {
                            background: #58a8f4;
                        }

                        &.right {
                            right: -16px;
                        }

                        &.left {
                            left: -16px;
                        }

                    }

                    .carousel-item {
                        background: #fff;
                        height: 420px;
                        padding: 50px 60px;
                        overflow: hidden;

                        .logo {
                            float: left;
                            height: 320px;
                            width: 395px;
                            border: 1px solid #b5b5b5;
                            background: no-repeat center;

                            &.manage {
                                background-image: url("../../../static/images/solution/home/logo-manage.png");
                            }

                            &.party {
                                background-image: url("../../../static/images/solution/home/logo-party.png");
                            }

                            &.enterprise {
                                background-image: url("../../../static/images/solution/home/logo-enterprise.png");
                            }
                        }

                        .introduce {
                            float: left;
                            padding: 50px 0 0 40px;

                            h3 {
                                font-size: 20px;
                                font-weight: normal;
                            }

                            ul {
                                margin-top: 30px;
                                padding: 20px 10px 0 10px;
                                border-top: 1px solid #d9d9d9;
                                border-bottom: 1px solid #d9d9d9;

                                li {
                                    display: inline-block;
                                    color: #666;
                                    padding-bottom: 20px;
                                    font-size: 14px;
                                    margin-right: 90px;
                                    line-height: 100%;

                                    &::before {
                                        content: '·';
                                        font-weight: bold;
                                        font-size: 20px;
                                        margin-right: 10px;
                                        vertical-align: middle;
                                        color: #999;
                                    }
                                }
                            }

                            .btn-group {
                                margin-top: 80px;

                                button {
                                    margin-right: 15px;
                                }

                                .consult {
                                    border-color: #57a3f3;
                                    color: #57a3f3;
                                }
                            }
                        }
                    }
                }
            }
        }

        .advantage {
            height: 475px;
            background: #fff;

            h3 {
                padding: 50px 0;
            }

            ul {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                li {
                    width: 33%;
                    float: left;
                    text-align: center;

                    img {
                        height: 122px;
                    }

                    h4 {
                        font-size: 16px;
                        font-weight: normal;
                        padding: 20px 0 5px 0;
                    }

                    p {
                        line-height: 2;
                    }
                }
            }
        }

        .scheme {
            height: 780px;
            background: no-repeat center;
            background-size: cover;

            h3 {
                color: #fff;
                padding: 80px 0 50px 0;
            }

            ul {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                padding: 10px 0;

                li {
                    width: 388px;
                    float: left;
                    cursor: pointer;

                    img{

                        &:hover{
                            box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.4);
                        }
                    }
                }
            }
        }

        .service {
            padding-bottom: 65px;
            text-align: center;

            h3 {
                padding: 60px 0 40px 0;
            }

            table, table tr th, table tr td {
                border: 1px solid #d6d4d4;
            }

            table {
                width: 1200px;
                margin: 0 auto 35px auto;
                border-collapse: collapse;
                text-align: center;

                thead {
                    line-height: 50px;
                    background: #f5f5f5;
                    font-size: 16px;

                    tr {
                        th {
                            font-weight: normal;
                        }
                    }
                }

                tbody {
                    line-height: 45px;
                    color: #666;
                    font-size: 14px;
                }
            }

            button {
                padding: 10px 35px;
            }
        }

        .case {
            background: #f6f6f6;
            padding-top: 60px;

            ul {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                padding: 50px 0 85px 0;

                li {
                    float: left;
                    width: 380px;
                    background: #fff;

                    &:hover {
                        img {
                            transform: scale(1.2);
                        }
                    }

                    .head {
                        height: 245px;
                        position: relative;
                        overflow: hidden;

                        img {
                            display: block;
                            width: 100%;
                            transition: .5s;
                        }

                        .bar {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 50px;
                            line-height: 50px;
                            font-size: 16px;
                            background: rgba(0, 0, 0, 0.40);
                            color: #fff;
                            padding: 0 40px;
                        }
                    }

                    .body {
                        height: 240px;
                        padding: 25px 45px 0 45px;
                        font-size: 14px;
                        color: #999;
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
                <h2>企业社交解决方案</h2>
                <p>新时代全面搭建高管决策、员工生活与工作及党建工作的</p>
                <p>全方位企业社交平台</p>
            </div>
        </div>

        <!--轮播入口-->
        <div class="wheel-panel">

            <div class="wheel-box">
                <div class="wheel-content">
                    <Carousel v-model="carouselIndex" loop autoplay :autoplay-speed="5000" dots="none" arrow="always">
                        <CarouselItem>
                            <div class="carousel-item">
                                <div class="logo manage"></div>

                                <div class="introduce">
                                    <h3>高管看板-面向企业高管的移动办公解决方案</h3>
                                    <ul>
                                        <li>我的首页</li>
                                        <li>舆情监控</li>
                                        <li>研究报告</li>
                                        <br>
                                        <li>组织认识</li>
                                        <li>财务报告</li>
                                    </ul>

                                    <div class="btn-group">
                                        <Button type="primary" class="detail" @click="detail('manage')">了解详情</Button>
                                        <Button type="ghost" class="consult" @click="openCustomerService">立即咨询</Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-item">
                                <div class="logo enterprise"></div>

                                <div class="introduce">
                                    <h3>企业号-企业智慧沟通解决方案</h3>
                                    <ul>
                                        <li>新闻资讯</li>
                                        <li>移动办公</li>
                                        <li>企业文化</li>
                                        <br>
                                        <li>生活服务</li>
                                        <li>业务协同</li>
                                        <li>生活场景</li>
                                    </ul>

                                    <div class="btn-group">
                                        <Button type="primary" class="detail" @click="detail('enterprise')">了解详情
                                        </Button>
                                        <Button type="ghost" class="consult" @click="openCustomerService">立即咨询</Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="carousel-item">
                                <div class="logo party"></div>

                                <div class="introduce">
                                    <h3>党建云-智能党建解决方案</h3>
                                    <ul>
                                        <li>在线学习</li>
                                        <li>在线交流</li>
                                        <li>党务管理</li>
                                        <br>
                                        <li>党员考核</li>
                                        <li>党员服务</li>
                                        <li>党费通</li>
                                    </ul>

                                    <div class="btn-group">
                                        <Button type="primary" class="detail" @click="detail('party')">了解详情</Button>
                                        <Button type="ghost" class="consult" @click="openCustomerService">立即咨询</Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>

        </div>

        <!--方案优势-->
        <div class="advantage">
            <h3 class="title">方案优势</h3>
            <ul>
                <li>
                    <img src="../../../static/images/solution/home/advantage-1.png">
                    <h4>最佳实践背书</h4>
                    <p>输出的不止是技术方案，更重要的输出是中信</p>
                    <p>集团级别的数字化转型成功经验</p>
                    <p>根据此经验来帮助合作伙伴规划和建设。</p>
                </li>
                <li>
                    <img src="../../../static/images/solution/home/advantage-2.png">
                    <h4>大屏小屏融合</h4>
                    <p>借助云计算、大数据、移动社交等互联网技术，聚集</p>
                    <p>公司员工，引入公司内外部资源与员工连接起来，</p>
                    <p>为员工提供办公、协同、生活的平台。</p>
                </li>
                <li>
                    <img src="../../../static/images/solution/home/advantage-3.png">
                    <h4>服务方式灵活</h4>
                    <p>整体方案服务方式灵活，根据具体需求可整体</p>
                    <p>输出，可独立输出；可公有云模式输出，</p>
                    <p>也可私有化方式输出。</p>
                </li>
            </ul>
        </div>

        <!--搭建有针对性的智能化企业社交解决方案-->
        <div class="scheme" :style="{'background-image': `url(${schemeBackground})`}">
            <h3 class="title">搭建有针对性的智能化企业社交解决方案</h3>

            <ul>
                <li @click="detail('manage')">
                    <img class="hover-box-shadow" src="../../../static/images/solution/home/scheme-1.png">
                </li>
                <li style="margin: 0 17px;" @click="detail('enterprise')">
                    <img class="hover-box-shadow" src="../../../static/images/solution/home/scheme-2.png">
                </li>
                <li @click="detail('party')">
                    <img class="hover-box-shadow" src="../../../static/images/solution/home/scheme-3.png">
                </li>
            </ul>
        </div>

        <!--服务方式-->
        <div class="service">
            <h3 class="title">服务方式</h3>

            <table>
                <thead>
                <tr>
                    <th>服务策略</th>
                    <th>建设难度</th>
                    <th>数据安全性</th>
                    <th>标准化</th>
                    <th>定制化</th>
                    <th>成本</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>SaaS服务</td>
                    <td>低</td>
                    <td>中</td>
                    <td>高</td>
                    <td>低</td>
                    <td>低</td>
                </tr>
                <tr>
                    <td>系统托管</td>
                    <td>中</td>
                    <td>中</td>
                    <td>中</td>
                    <td>中</td>
                    <td>中</td>
                </tr>
                <tr>
                    <td>软件输出</td>
                    <td>中</td>
                    <td>高</td>
                    <td>中</td>
                    <td>高</td>
                    <td>高</td>
                </tr>
                </tbody>
            </table>

            <Button type="primary" shape="circle" @click="openCustomerService">立即咨询产品报价</Button>
        </div>

        <!--客户案例-->
        <div class="case">
            <h3 class="title">客户案例</h3>

            <ul>
                <li class="hover-box-shadow">
                    <div class="head">
                        <img :src="case1">
                        <div class="bar">
                            中信集团-高管看板
                        </div>
                    </div>
                    <div class="body">
                        <p>“中信集团高管看板”系统，覆盖中信集团高管、职能部门领导、合并报表范围内一级子公司领导层，
                            具有良好的用户体验及安全性，采用iPad作为移动办公终端，通过MDM（Mobile Device Management，移动设备管理）
                            进行统一安全管理，具有便捷的移动性能、优秀的操控体验、超长的待机时间、良好的安全防护等特点。</p>
                    </div>
                </li>

                <li style="margin: 0 30px" class="hover-box-shadow">
                    <div class="head">
                        <img :src="case2">
                        <div class="bar">
                            中信集团-企业号
                        </div>
                    </div>
                    <div class="body">
                        <p>中信集团企业号总注册用户规模达18万，激活用户规模达到11万。企业号平均每月推送170篇图文，
                            企业号平均每月爬取并推送出58篇图文，图文阅读量最高达25万+人次。帮助中信集团，借助云计算、大数据、
                            移动社交等互联网技术，聚集中信集团内部员工，引入中信内外部资源与中信员工连起来，为中信员工提供办公、协同、
                            生活等多种服务。</p>
                    </div>
                </li>

                <li class="hover-box-shadow">
                    <div class="head">
                        <img :src="case3">
                        <div class="bar">
                            北汽新能源-党建云
                        </div>
                    </div>
                    <div class="body">
                        <p>北汽新能源通过中信科技打造先进的党建云平台，从而实现党组织在线管理，党费在线缴纳，先锋资讯在线学习，
                            书籍在线阅读，考试在线进行等多个强大功能，目前系统成功上线，运行稳定，得到了多层领导和员工的广泛肯定。</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import banner from '../../../static/images/solution/banner-enterprise.jpg'
    import schemeBackground from '../../../static/images/solution/home/scheme-background.png'
    import case1 from '../../../static/images/solution/home/case-1.jpg'
    import case2 from '../../../static/images/solution/home/case-2.jpg'
    import case3 from '../../../static/images/solution/home/case-3.jpg'

    export default {

        data() {

            return {
                banner,
                schemeBackground,
                case1,
                case2,
                case3,
                carouselIndex: 0,
            }
        },

        methods: {
            detail(type) {
                this.$router.push(`/solution/${type}`);
            },

            openCustomerService() {
                openCustomerService();
            }
        }

    }
</script>


