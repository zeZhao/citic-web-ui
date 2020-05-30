<style lang="scss" type="text/scss" scoped>
    @import "../../assets/scss/anniversary829.scss";
</style>

<template>
    <div class="anniversary">
        <div class="theme">
            <img src="../../../static/images/news/anniversary829/theme.png" alt="" style="margin-top: 90px">
            <div class="theme-nav">
                <ul class="nav-txt-list clearfix">
                    <!--<div class="circle">1</div>-->
                    <li class="circle">1</li>
                    <li>
                        <p class="nav-txt">产品优惠购</p>
                        <p class="nav-txt-synopsis">限量爆款产品优惠购</p>
                    </li>
                    <li class="circle">2</li>
                    <li>
                        <p class="nav-txt">代金券礼包</p>
                        <p class="nav-txt-synopsis">新老用户享受代金券折扣</p>
                    </li>
                    <li class="circle">3</li>
                    <li>
                        <p class="nav-txt">云产品特惠</p>
                        <p class="nav-txt-synopsis">多款产品享受全年最低价</p>
                    </li>
                    <li class="circle">4</li>
                    <li>
                        <p class="nav-txt">新租户礼包</p>
                        <p class="nav-txt-synopsis">新用户享受500元代金券</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="venue-tab">
            <ul class="venue-list">
                <li class="venue-active">
                    <a href="#cloud-resource"><p class="venue-txt">云资源会场</p></a>
                </li>
                <li>
                    <a href="#cloud-safety"><p class="venue-txt">云安全会场</p></a>
                </li>
                <li>
                    <a href="#cloud-application"><p class="venue-txt">云应用会场</p></a>
                </li>
                <li>
                    <a href="#big-data"><p class="venue-txt">大数据会场</p></a>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="discounts">
                <div class="discounts-head clearfix">
                    <img src="../../../static/images/news/anniversary829/buy_car.png" alt="" class="discounts-tit-icon">
                    <h2 class="discounts-tit">8.29周年庆优惠购</h2>
                </div>
                <div class="discounts-cnt clearfix">
                    <div class="discounts-product">
                        <p class="product-tit">Oracle 数据库</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">5</span>折</p>
                            <p class="product-discount">（仅限存储产品）</p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?supplierAlias=oracle&serviceAlias=racMulti">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">中国知网账号</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">8.29</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=9CE6EB7E343E4C2183B8FB488F2A06CF">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">大数据开发门户</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">0.00</span>元</p>
                            <p class="product-discount"></p>
                            <!--<a class="product-buy" href="https://data.c.citic/dataWork=s.jsp">立即抢购</a>-->
                            <a class="product-buy" :href="href.data + 'dataWorks.jsp'">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">机器学习平台</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">0.00</span>元</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" :href="href.machineLearning + '#/login'">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">易企秀</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">0.00</span>元</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=201712211139843827">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">阿里云安全</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">5</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=vipCloudFW">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">青藤云</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">7</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=201806270404701859">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit" style="line-height: 24px;padding-top: 20px">袋鼠云oracle</br>数据库代运维</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">88</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=201709251994734055">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">用友</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">9</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbc">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                    <div class="discounts-product">
                        <p class="product-tit">透视宝</p>
                        <div class="product-cnt">
                            <p class="product-discount"><span class="product-num">9</span>折</p>
                            <p class="product-discount"></p>
                            <a class="product-buy" href="../../citic-web-ui/product/detail?service_id=9238d564bb124feba97f84ca52446d7e">立即抢购</a>
                        </div>
                        <p class="product-tag"></p>
                    </div>
                </div>
                <!--<div class="discounts-foot">-->
                    <!--<div class="discounts-foot-left">-->
                        <!--<div class="discounts-foot-txt">知道创宇ipv6</div>-->
                        <!--<div class="discounts-foot-txt2">+</div>-->
                        <!--<div class="discounts-foot-txt">1元</div>-->
                    <!--</div>-->
                    <!--<div class="discounts-foot-right">-->
                        <!--<p class="foot-right-txt">知道创宇ipv6 + 中国知网500元账号</p>-->
                        <!--<p class="discounts-right-back">立即购买</p>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <div id="cloud-resource" class="cloud-resource">
                <div class="resource-head clearfix">
                    <img src="../../../static/images/news/anniversary829/buy_car.png" alt="" class="resource-tit-icon">
                    <h2 class="resource-tit">云资源会场</h2>
                    <p class="resource-tip">全年最低价，消费满额赠送代金券</p>
                    <p class="resource-line"></p>
                </div>
                <div class="resource-cnt">
                    <div class="server clearfix">
                        <div class="server-left">
                            <h3 class="server-tit">云服务器</h3>
                            <ul class="server-introduce">
                                <li><img src="../../../static/images/news/anniversary829/tick.png" alt="">多家云资源可选，覆盖目前市面主流云资源产品</li>
                                <li><img src="../../../static/images/news/anniversary829/tick.png" alt="">多样化配置，满足不同场景需求</li>
                                <li><img src="../../../static/images/news/anniversary829/tick.png" alt="">安全可靠，中信云为业务保驾护航</li>
                            </ul>
                            <p class="server-step"></p>
                            <p class="server-line"></p>
                        </div>
                        <div class="server-right">
                            <div class="server-product">
                                <div class="product-head">
                                    <p class="product-tit">阿里云</p>
                                    <p class="product-tip">安全合规,让您的业务轻松上云</p>
                                    <ul class="product-list">
                                        <li style="margin-right: 48px">稳定</li>
                                        <li style="margin-right: 48px">弹性</li>
                                        <li>高安全</li>
                                    </ul>
                                    <p class="product-detail">云服务器 ECS是一种弹性可伸缩的计算服务，助您降低 IT 成本，提升运维效率，使您更专注于核心业务创新。</p>
                                </div>
                                <div class="product-buy">
                                    <a class="buyBtn" href="../../citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=vm">立即购买</a>
                                </div>
                            </div>
                            <div class="server-product">
                                <div class="product-head">
                                    <p class="product-tit">微软云</p>
                                    <p class="product-tip">值得信赖的云</p>
                                    <ul class="product-list">
                                        <li style="margin-right: 48px">安全</li>
                                        <li style="margin-right: 48px">可信</li>
                                        <li>智能云</li>
                                    </ul>
                                    <p class="product-detail">Microsoft Azure 是一个开放而灵活的企业级云计算平台。通过 IaaS + PaaS 帮助你加快发展步伐,提高工作效率并节省运营成本。</p>
                                </div>
                                <div class="product-buy">
                                    <a class="buyBtn" href="../../citic-web-ui/product/detail?supplierAlias=KLLT&serviceAlias=vm">立即购买</a>
                                </div>
                            </div>
                            <div class="server-product">
                                <div class="product-head">
                                    <p class="product-tit">金山云</p>
                                    <p class="product-tip">开启您的云计算之旅</p>
                                    <ul class="product-list">
                                        <li style="margin-right: 25px">快速入门</li>
                                        <li style="margin-right: 25px">金牌服务</li>
                                        <li>云市场</li>
                                    </ul>
                                    <p class="product-detail">计算、存储、安全、网络、大数据、人工智能，助您业务飞跃发展。</p>
                                </div>
                                <div class="product-buy">
                                    <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=kec1a0637b2847b3c22373ad">立即购买</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="database clearfix">
                        <div class="server-left">
                            <h3 class="server-tit">云数据库</h3>
                            <ul class="database-introduce">
                                <li :class="actives === 'RDS' ? 'active' : ''" @click="database('RDS')">云数据库RDS</li>
                                <li :class="actives === 'Redis' ? 'active' : ''" @click="database('Redis')">云数据库Redis</li>
                                <li :class="actives === 'MongoDB' ? 'active' : ''" @click="database('MongoDB')">高性能数据库MongoDB</li>
                            </ul>
                            <p class="server-step"></p>
                            <p class="database-line"></p>
                        </div>
                        <div class="database-right">
                            <div class="RDS" v-show="RDS">
                                <div class="database-product">
                                    <div class="product-head">
                                        <p class="product-tit">中信专有云</p>
                                        <p class="product-line"></p>
                                    </div>
                                    <p class="product-detail">中信专有云关系型数据库（简称 RDS）是一种高安全等级、稳定可靠、可弹性伸缩的在线数据库服务。</p>
                                    <div class="product-buy">
                                        <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5959f3f5bf213c5770d9a32c">立即购买</a>
                                    </div>
                                </div>
                                <div class="database-product">
                                    <div class="product-head">
                                        <p class="product-tit">阿里云</p>
                                        <p class="product-line"></p>
                                    </div>
                                    <p class="product-detail">阿里云关系型数据库是一种稳定可靠、可弹性伸缩的在线数据库服务。基于飞天分布式系统和高性能存储。</p>
                                    <div class="product-buy">
                                        <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5762107c6ae6ca04e14595b8">立即购买</a>
                                    </div>
                                </div>
                                <div class="database-product">
                                    <div class="product-head">
                                        <p class="product-tit">金山云</p>
                                        <p class="product-line"></p>
                                    </div>
                                    <p class="product-detail">金山云关系型数据库服务是一种即开即用、稳定可靠、可弹性伸缩的在线数据库服务。</p>
                                    <div class="product-buy">
                                        <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=rds8e9a11fa6e6c4ab79b5df">立即购买</a>
                                    </div>
                                </div>
                            </div>
                            <div class="Redis" v-show="Redis">
                                <div class="database-product clearfix">
                                    <div class="product-left">
                                        <p class="product-tit">云数据库Redis</p>
                                        <div class="memory-box">
                                            <p class="product-memory">1G主从版</p>
                                            <p class="product-memory">4G主从版</p>
                                            <p class="product-memory">8G主从版</p>
                                            <p class="product-memory">16G主从版</p>
                                        </div>
                                    </div>
                                    <div class="product-right">
                                        <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5785e232b9aa1e3769039c19">立即购买</a>
                                    </div>
                                </div>
                            </div>
                            <div class="MongoDB" v-show="MongoDB">
                                <div class="database-product clearfix">
                                    <div class="product-left">
                                        <p class="product-tit">高性能数据库MongoDB</p>
                                        <div class="memory-box">
                                            <p class="product-memory">1C2G SSD盘</p>
                                            <p class="product-memory">2C4G SSD盘</p>
                                            <p class="product-memory">4C8G SSD盘</p>
                                            <p class="product-memory">8C16G SSD盘</p>
                                        </div>
                                    </div>
                                    <div class="product-right">
                                        <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=59b1fb661a74d146c4fa7eb4">立即购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="store">
                        <p class="store-tit">云存储</p>
                        <div class="database-product">
                            <div class="product-head">
                                <p class="product-tit">中信专有云</p>
                                <p class="product-line"></p>
                            </div>
                            <p class="product-detail">块存储为云服务器ECS提供高可靠、弹性、高性能、低时延的数据块级随机存储，相比传统SAN存储具有诸多优势。</p>
                            <div class="product-buy">
                                <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5959f3f5bf213c5770d9a32b">立即购买</a>
                            </div>
                        </div>
                        <div class="database-product">
                            <div class="product-head">
                                <p class="product-tit">对象存储</p>
                                <p class="product-line"></p>
                            </div>
                            <p class="product-detail">阿里云对象存储是阿里云对外提供的海量，安全，低成本，高可靠的云存储服务。</p>
                            <div class="product-buy">
                                <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=57721cb62fa45f06e1c013d6">立即购买</a>
                            </div>
                        </div>
                        <div class="database-product">
                            <div class="product-head">
                                <p class="product-tit">阿里云文件存储</p>
                                <p class="product-line"></p>
                            </div>
                            <p class="product-detail">阿里云文件存储是面向阿里云ECS实例、HPC和Docker的文件存储服务。</p>
                            <div class="product-buy">
                                <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5a4d8ba12cc1c614e497e178">立即购买</a>
                            </div>
                        </div>
                        <div class="database-product">
                            <div class="product-head">
                                <p class="product-tit">块存储</p>
                                <p class="product-line"></p>
                            </div>
                            <p class="product-detail">块存储是阿里云为云服务器ECS提供的低时延、持久性、高可靠的数据块级随机存储。</p>
                            <div class="product-buy">
                                <a class="buyBtn" href="../../citic-web-ui/product/detail?service_id=5836a0462fbaaf0aee0db7a2">立即购买</a>
                            </div>
                        </div>
                    </div>
                    <div class="moreCloud">
                        <p class="moreCloud-tit">更多云产品</p>
                        <div class="moreCloud-box">
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=58b3cc2618e1fb442d8f4077">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">弹性IP</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=57721e052fa45f06e1c013da">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">消息队列</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=598aab5879c02c083df0ca1a">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">CDN</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=583b954378c93e0473411da8">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">负载均衡</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=58f6f22318795506e40112fc">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">NAT网关</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=59e440fd79c02c06000715c0">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">CA证书</p>
                                <p class="cloud-tag"></p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=5a55d1585174ed4838b7145e">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">视频点播</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?service_id=5910162879c02c08c0102eaf">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">日志服务</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=IPv6">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">IPV6</p>
                            </a>
                            <a class="cloud" href="../../citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=vpn">
                                <p class="cloud-img"></p>
                                <p class="cloud-txt">VPN网关</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cloud-safety" class="cloud-safety">
                <div class="discounts-head clearfix">
                    <img src="../../../static/images/news/anniversary829/cloud-safety-back.png" alt="" class="discounts-tit-icon">
                    <h2 class="discounts-tit">云安全会场</h2>
                </div>
                <div class="safety-cnt">
                    <div class="safety-serve">
                        <div class="serve-name">网络类安全服务</div>
                        <ul class="serve-product">
                            <li class="clearfix">
                                <span>WEB应用防火墙</span>
                                <a href="../../citic-web-ui/product/detail?service_id=58465454b992230c4edfe723">产品详情 ></a>
                                <p class="serve-tag"></p>
                            </li>

                            <li class="clearfix"><span>云安全防护</span><a href="../../citic-web-ui/product/detail?service_id=43a3921d-7479-43d0-a970-031699dcf9b6">产品详情 > </a></li>
                            <li class="clearfix"><span>智能DNS服务</span><a href="../../citic-web-ui/product/detail?service_id=206c3efc853b92c3779d730b9e7c2def">产品详情 > </a></li>
                        </ul>
                    </div>
                    <div class="safety-serve">
                        <div class="serve-name">主机类安全服务</div>
                        <ul class="serve-product">
                            <li class="clearfix">
                                <span>安骑士</span>
                                <a href="../../citic-web-ui/product/detail?service_id=599a9516cc82a94038d212e3">产品详情 > </a>
                                <p class="serve-tag"></p>
                            </li>
                            <li class="clearfix">
                                <span>青藤云适应性主机安全</span>
                                <a href="../../citic-web-ui/product/detail?service_id=201806270404701859">产品详情 > </a>
                                <p class="serve-tag-7"></p>
                            </li>
                            <li class="clearfix"><span>360天擎终端安全</span><a href="../../citic-web-ui/product/detail?service_id=201709130622276919">产品详情 > </a></li>
                        </ul>
                    </div>
                    <div class="safety-serve">
                        <div class="serve-name">运维类安全服务</div>
                        <ul class="serve-product">
                            <li class="clearfix">
                                <span>堡垒机</span>
                                <a href="../../citic-web-ui/product/detail?service_id=59e45d6c2fe0373f04629fcf">产品详情 > </a>
                                <p class="serve-tag"></p>
                            </li>
                            <li class="clearfix"><span>数据备份</span><a href="../../citic-web-ui/product/detail?service_id=201711281818188888">产品详情 > </a></li>
                            <li class="clearfix">
                                <span>安全态势感知</span>
                                <a href="../../citic-web-ui/product/detail?service_id=59c2063c6c0c191d905397d5">产品详情 > </a>
                                <p class="serve-tag"></p>
                            </li>
                        </ul>
                    </div>
                    <div class="safety-serve">
                        <div class="serve-name">应用类安全服务</div>
                        <ul class="serve-product">
                            <li class="clearfix"><span>在线认证</span><a href="../../citic-web-ui/product/cert/details">产品详情 > </a></li>
                            <li class="clearfix">
                                <span>CA证书</span>
                                <a href="../../citic-web-ui/product/detail?service_id=59e440fd79c02c06000715c0">产品详情 > </a>
                                <p class="serve-tag"></p>
                            </li>
                            <li class="clearfix"><span>APP安全检测和加固</span><a href="../../citic-web-ui/product/detail?service_id=201803082048317059">产品详情 > </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="cloud-application" class="cloud-application">
                <div class="discounts-head clearfix">
                    <img src="../../../static/images/news/anniversary829/cloud-application.png" alt="" class="discounts-tit-icon">
                    <h2 class="discounts-tit">云应用会场</h2>
                </div>
                <div class="application-cnt">
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=15085000078420607107">
                        <p class="application-img"></p>
                        <p class="application-txt">财务管理</p>
                        <p class="application-tag"></p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201707270565691905">
                        <p class="application-img"></p>
                        <p class="application-txt">合并报表</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201707310410754332">
                        <p class="application-img"></p>
                        <p class="application-txt">全面预算</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbd">
                        <p class="application-img"></p>
                        <p class="application-txt">移动报账</p>
                        <p class="application-tag"></p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=20e7fd16-e5b0-46ec-bc8a-5a4a8232b313">
                        <p class="application-img"></p>
                        <p class="application-txt">友人才</p>
                        <p class="application-tag"></p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201711200953567810">
                        <p class="application-img"></p>
                        <p class="application-txt">民主测评</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbc">
                        <p class="application-img"></p>
                        <p class="application-txt">集采平台</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=15085000078420607113">
                        <p class="application-img"></p>
                        <p class="application-txt">企业邮箱</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=15085000078420607130">
                        <p class="application-img"></p>
                        <p class="application-txt">移动办公OA</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=15085000078420607142">
                        <p class="application-img"></p>
                        <p class="application-txt">协同办公OA</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=15085000078420607229">
                        <p class="application-img"></p>
                        <p class="application-txt">视频会议</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201708231982199295">
                        <p class="application-img"></p>
                        <p class="application-txt">企业云盘</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201708011340342711">
                        <p class="application-img"></p>
                        <p class="application-txt">云客服</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201905101464398259">
                        <p class="application-img"></p>
                        <p class="application-txt">ITSM</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=1446f6b8a4aa11e680f576304dec7eb7">
                        <p class="application-img"></p>
                        <p class="application-txt">域名注册</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201712211735524819">
                        <p class="application-img"></p>
                        <p class="application-txt">视频直播标准</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=fd0c9244-f1e6-49df-a18e-70ae7a1facbf">
                        <p class="application-img"></p>
                        <p class="application-txt">快速建站</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=41fc31a4-d0d7-4a1a-a3a5-744b8cec72a6">
                        <p class="application-img"></p>
                        <p class="application-txt">项目协同</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201804181018502364">
                        <p class="application-img"></p>
                        <p class="application-txt">欧特克设计软件</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=9238d564bb124feba97f84ca52446d7e">
                        <p class="application-img"></p>
                        <p class="application-txt">移动应用性能管理</p>
                        <p class="application-tag"></p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=206c3efc853b92c3779d730b9e7c2def">
                        <p class="application-img"></p>
                        <p class="application-txt">域名解析</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201906041663829220">
                        <p class="application-img"></p>
                        <p class="application-txt">应用性能管理</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=79dc102e4fe7424486baa553de5da2e4">
                        <p class="application-img"></p>
                        <p class="application-txt">浏览器性能管理</p>
                    </a>
                    <a class="application-list" href="../../citic-web-ui/product/detail?service_id=201905071933529964">
                        <p class="application-img"></p>
                        <p class="application-txt">方正字库</p>
                        <p>(可试用至2020年5月31号)</p>
                        <p class="discounts_gratis"></p>
                    </a>
                </div>
            </div>
            <div id="big-data" class="big-data">
                <div class="discounts-head clearfix">
                    <img src="../../../static/images/news/anniversary829/big-data.png" alt="" class="discounts-tit-icon">
                    <h2 class="discounts-tit">大数据会场</h2>
                </div>
                <div class="data-cnt">
                    <div class="data-product">
                        <div class="data-product-left">
                            <p class="product-name">大数据组件和服务</p>
                            <a class="product-detail" :href="href.data">了解详情</a>
                        </div>
                        <ul class="data-product-right">
                            <li><a href="../../views/cloud/buy.jsp?serviceId=df12f3db-4ce7-4ec0-81f5-3f357e571883&serviceTypeId=1">HDFS</a></li>
                            <li><a href="../../views/cloud/buy.jsp?serviceId=4e8fc8ee-7c45-4cf6-8686-8df25a2cc6e7&serviceTypeId=1">Spark</a></li>
                            <li><a href="../../views/cloud/buy.jsp?serviceId=91fe7e17-5718-4ec9-b64c-c93c10f106cc&serviceTypeId=1">Hive</a></li>
                            <li><a href="../../views/cloud/buy.jsp?serviceId=6c81de94-fa9a-4627-8f59-93c018990be5&serviceTypeId=1">Greenplum</a></li>
                            <li><a href="../../views/cloud/buy.jsp?serviceId=91fe7e17-5718-4ec9-b64c-c93c10f106aa&serviceTypeId=1">Hbase</a></li>
                            <li><a href="../../citic-web-ui/product/detail?service_id=5e51f757-f46a-4223-a9a5-65bac3163645">MapReduce</a></li>
                            <li><a :href="href.data+'dataWorks.jsp'">大数据开发门户</a></li>
                            <li><a href="../../citic-web-ui/product/detail?service_id=0cff6582-6bfb-4560-a170-5a5180e9b363">Kafka</a></li>
                        </ul>
                    </div>
                    <div class="data-product">
                        <div class="data-product-left">
                            <p class="product-name">数据应用</p>
                            <a class="product-detail" :href="href.market + 'views/goodsList/goodsList.html'">了解详情</a>
                        </div>
                        <div class="data-product-right">
                            <a class="serve-box" :href="href.data + 'Painter.jsp'">
                                <p class="serve-icon"></p>
                                <p class="serve-name">企画师</p>
                            </a>
                            <a class="serve-box" :href="href.data + 'LogCloud.jsp'">
                                <p class="serve-icon"></p>
                                <p class="serve-name">日志云</p>
                            </a>
                            <a class="serve-box" :href="href.data + 'DOCCloud.jsp'">
                                <p class="serve-icon"></p>
                                <p class="serve-name">文档云</p>
                            </a>
                        </div>
                    </div>
                    <div class="data-product">
                        <div class="data-product-left">
                            <p class="product-name">图像识别</p>
                            <a class="product-detail" :href="href.data">了解详情</a>
                        </div>
                        <div class="data-product-right">
                            <a class="serve-box1" href="/apistore/apidetail.html?service_id=3d47b510-dc32-4801-88c3-a354e09c983e">
                                <p class="serve-icon"></p>
                                <p class="serve-name">微软情绪识别</p>
                            </a>
                            <a class="serve-box1" href="/apistore/apidetail.html?service_id=a27a75c0-533f-4e75-8d92-5600f9141e8b">
                                <p class="serve-icon"></p>
                                <p class="serve-name">微软计算机视觉</p>
                            </a>
                            <a class="serve-box1" href="/apistore/apidetail.html?service_id=c60d4f41-0e16-4452-946a-e554859d16ad">
                                <p class="serve-icon"></p>
                                <p class="serve-name">商汤人脸对比</p>
                            </a>
                            <a class="serve-box1" href="/apistore/apidetail.html?service_id=d08b268a-df78-41b4-baef-c04fe607f448">
                                <p class="serve-icon"></p>
                                <p class="serve-name">商汤人脸核身</p>
                            </a>
                        </div>
                    </div>
                    <div class="data-product">
                        <div class="data-product-left">
                            <p class="product-name">大数据解决方案</p>
                            <a class="product-detail" :href="href.data + 'shujushangyun.jsp'">了解详情</a>
                        </div>
                        <ul class="data-product-right" style="padding-top: 50px">
                            <li><a :href="href.data + 'shujushangyun.jsp'">数据上云</a></li>
                            <li><a :href="href.data + 'zhinenggongye.jsp'">智能工业4.0</a></li>
                            <li><a :href="href.data + 'shujucangku.jsp'">数据仓库</a></li>
                            <li><a :href="href.data + 'jinrongfengxian.jsp'">金融风险控制</a></li>
                            <li><a :href="href.data + 'jingzhunyingxiao.jsp'">精准营销</a></li>
                        </ul>
                    </div>
                    <div class="data-product" style="width: 1200px">
                        <div class="data-product-left">
                            <p class="product-name">热点数据</p>
                            <a class="product-detail" :href="href.market">了解详情</a>
                        </div>
                        <ul class="data-product-right1">
                            <li><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17374'">企业工商信息</a></li>
                            <li><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17372'">司法涉诉监控</a></li>
                            <li style="width: 300px"><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17380'">企业工商信息（深度）查询</a></li>
                            <li><a :href="href.market + 'views/goodsDetails/dataDetails.html?goods_id=17383'">企业砖石报告</a></li>
                            <li><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17338'">银行卡四要素核验</a></li>
                            <li><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17373'">司法涉诉查询</a></li>
                            <li style="width: 300px"><a :href="href.market + 'views/goodsDetails/apiDetails.html?goods_id=17379'">工商四要素</a></li>
                            <li><a :href="href.market + 'views/goodsDetails/dataDetails.html?goods_id=17386'">企业族谱探寻</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="activity-rules">
                <div class="discounts-head clearfix">
                    <img src="../../../static/images/news/anniversary829/activity-rules-icon.png" alt="" class="discounts-tit-icon">
                    <h2 class="discounts-tit">活动规则</h2>
                </div>
                <div class="rules-cnt">
                    <p>1. 凡是在8月29日——10月31日期间下单，即可享受代金券优惠政策。</p>
                    <p>2. 代金券根据符合规则的订单计提，活动结束后由工作人员发放到用户账户，结账的时候统一抵扣欠款。</p>
                    <p>3. 活动仅限中信云平台注册租户。</p>
                    <p>4. 成功下单的用户，请在60天内付款；若因未支付导致订单失效，视为放弃活动机会。</p>
                    <p>5. 对于通过恶意注册或其他不正当手段在本次活动中进行非法牟利、炒作、转售、获奖、虚假交易的用户，中信云有权取消其获奖资格或其因参加活动所获权益，有权采取包括不限于停止服务、封停帐号、冻结代金券等止损和保护措施；如该违规行为给中信云造成损失的，中信云保留追究其民事责任和刑事责任的权利。</p>
                    <p>6. 云资源类产品（如云服务器、数据库、云存储、网络等服务）、人天服务类产品不参与代金券赠送活动。指定产品在829期间的新增订单享受代金券赠送。</p>
                    <p>7. 代金券名额有限，先到先得。代金券在活动结束后发放，不在下单时折让！</p>
                    <p>8. 活动期间购买，oracle产品，存储5折；中国知网8.29折；用友产品9折（续费产品不参与），透视宝9折，袋鼠云88折，且折扣产品不参与返代金券优惠。
                        云资源类产品不参与返代金券（如阿里云、金山云、微软云）；人天服务类产品不参与返代金券，享受特别优惠政策及厂商优惠政策产品不参与返代金券；
                        部分产品不参与返代金券活动：大数据所有产品、用户标签画像和推荐、资金管理（九恒星）、Office 365 E3、Office 365 ProPlus、power BI Pro、OA（蓝凌）集团公文、OA（致远）、爱加密、teambition、海波龙、税务系统、集采平台、ITSM招银云创，360云安全防护基础版、商汤产品、国际短信服务、域名注册、域名解析等产品不参与活动。</p>
                    <p>9. 在法律范围内中信云有对本活动的解释权。</p>
                    <p>10. 联系大客户经理或者客服，咨询最新的优惠政策。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Util from '../../../static/json/menuData/util.js'

    export default {
        data() {
            return {
                href:{},
                actives:'RDS',
                RDS:true,
                Redis:false,
                MongoDB:false
            }
        },
        created() {
            this.href = Util.getSystemLink()
        },

        mounted() {
        },

        methods: {
            database(type){
                if(type === "RDS"){
                    this.RDS = true
                    this.Redis = false
                    this.MongoDB = false
                    this.actives = 'RDS'
                }else if(type === "Redis"){
                    this.Redis = true
                    this.RDS = false
                    this.MongoDB = false
                    this.actives = 'Redis'
                }else if(type === "MongoDB"){
                    this.MongoDB = true
                    this.RDS = false
                    this.Redis = false
                    this.actives = 'MongoDB'
                }
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
