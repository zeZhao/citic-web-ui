<template>
    <div class="news-topic829">
        <div class="news-topic829-banner">
            <div class="activity01 center">
                <div class="activity01-title"></div>
                    <Row class="activity01-content">
                        <i-col span="11" class="activity01-content-left">
                            <Row :gutter="20">
                                <i-col span="8">
                                    <div class="activity01-content-left-con">
                                        <p>小米手环2</p>
                                        <img :src="giftImg01" alt="">
                                    </div>
                                </i-col>
                                <i-col span="8">
                                    <div class="activity01-content-left-con">
                                        <p>小米运动蓝牙耳机</p>
                                        <img :src="giftImg02" alt="">
                                    </div>
                                </i-col>
                                <i-col span="8">
                                    <div class="activity01-content-left-con">
                                        <p>小米运动蓝牙耳机</p>
                                        <img :src="giftImg03" alt="">
                                    </div>
                                </i-col>
                            </Row>
                            <button class="activity01-content-left-btn">扫码分享得好礼</button>
                        </i-col>
                        <i-col span="13" class="activity01-content-right">
                            <Row :gutter="20">
                                <i-col span="7" offset="1">
                                    <div class="activity01-content-right-img">
                                        <img :src="QRcodeImg" alt="">
                                    </div>
                                </i-col>
                                <i-col  span="14" offset="2">
                                    <div class="activity01-content-right-info">
                                        <h3>活动说明</h3>
                                        <p class="title">活动时间</p>
                                        <p>2018年8月29日-2018年9月29日；</p>
                                        <p class="title">活动规则</p>
                                        <p>1、扫描中间二维码，关注中信科技微信；</p>
                                        <p>2、回复：829</p>
                                        <p>3、转发消息到朋友圈，积攒38个，发消息到微信后台，会有工作人员主动联系你！</p>
                                        <p>4、在829互动期间下单者，才可以享受送礼品优惠！</p>
                                        <p class="activity-intro">备注：活动用户需为中信云平台注册用户，每用户最多可获得1次获奖机会；分享用户，工作人员将会在活动结束后15个工作日内寄送奖品（奖品受订单金额、时间影响，不同时间以及订单金额赠送奖品不同）；中信云在法律允许的范围内享有对本活动的解释权。</p>
                                    </div>
                                </i-col>
                            </Row>
                        </i-col>
                    </Row>
            </div>
        </div>

        <div class="activity02">
            <div class="center">
                <div class="activity02-title"></div>
                <Row class="activity02-bg" :gutter="30">
                    <i-col span="6">
                        <div class="activity02-content">
                            <div class="activity02-content-title"><p class="main">微软</p><p class="vice">Microsoft</p></div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">云服务器</p>
                                    <p title="提供多种可缩放按需分配计算资源之一">提供多种可缩放按需分配计算资源之一</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?supplierAlias=microsoft&serviceAlias=vm')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">云磁盘</p>
                                    <p title="将磁盘用作存储操作系统等">将磁盘用作存储操作系统等</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?supplierAlias=microsoft&serviceAlias=disk')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">弹性IP</p>
                                    <p title="能动态绑定到虚拟机或者负载均衡器等">能动态绑定到虚拟机或者负载均衡器等</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?supplierAlias=microsoft&serviceAlias=IPservice')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div class="activity02-content">
                            <div class="activity02-content-title"><p class="main">金山云</p><p class="vice">Ksyun</p></div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">云服务器</p>
                                    <p title="KEC是云计算基础设施的重要组成部分">KEC是云计算基础设施的重要组成部分</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=kec1a0637b2847b3c22373ad')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">WPS企业版</p>
                                    <p title="金山自主研发的一款办公软件套装">金山自主研发的一款办公软件套装</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201805141346610276')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">NAT网关</p>
                                    <p title="VPC内云服务器/物理机访问互联网的产品">VPC内云服务器/物理机访问互联网的产品</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=nataba9bab2b7be3bf381243')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div class="activity02-content">
                            <div class="activity02-content-title"><p class="main">阿里云</p><p class="vice">Aliyun</p></div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">堡垒机</p>
                                    <p title="云上服务器安全运维审计必选产品">云上服务器安全运维审计必选产品</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=59e45d6c2fe0373f04629fcf')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">态势感知</p>
                                    <p title="态势感知提供的是一项SAAS服务">态势感知提供的是一项SAAS服务</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=59c2063c6c0c191d905397d5')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">安骑士</p>
                                    <p title="阿里云推出的一款服务器安全运维管理产品">阿里云推出的一款服务器安全运维管理产品</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=599a9516cc82a94038d212e3')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div class="activity02-content">
                            <div class="activity02-content-title"><p class="main">用友</p><p class="vice">Yonyou</p></div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">用友NC</p>
                                    <p title="面向集团企业的世界级高端管理软件">面向集团企业的世界级高端管理软件</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=15085000078420607107')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">移动报账</p>
                                    <p title="用友新一代云服务智能报账平台 ">用友新一代云服务智能报账平台</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=a732806f-46c5-4386-9877-41c5687a5fbd')">抢购</button>
                            </div>
                            <div class="activity02-content-inner">
                                <div class="activity02-content-inner-left">
                                    <p class="title">友人才</p>
                                    <p title="用友新一代人力资源云服务平台">用友新一代人力资源云服务平台</p>
                                </div>
                                <button class="activity02-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=20e7fd16-e5b0-46ec-bc8a-5a4a8232b313')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity03">
            <div class="center">
                <div class="activity03-title"></div>
                <Row class="activity03-bg" :gutter="40">
                    <i-col span="6">
                        <div class="activity03-content-inner">
                            <div class="activity03-content-inner-left">
                                <p class="title">物联网平台</p>
                                <p title="物联网平台关联产业资源">物联网平台关联产业资源</p>
                            </div>
                            <button class="activity03-content-inner-btn" @click="go('https://iot.c.citic/homepage')">抢鲜</button>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div class="activity03-content-inner">
                            <div class="activity03-content-inner-left">
                                <p class="title">欧特克</p>
                                <p title="欧特克全线软件产品">欧特克全线软件产品</p>
                            </div>
                            <button class="activity03-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201804181018502364')">抢购</button>
                        </div>
                    </i-col>

                    <i-col span="6">
                        <div class="activity03-content-inner">
                            <div class="activity03-content-inner-left">
                                <p class="title">Oracle</p>
                                <p title="企业级的数据库云服务">企业级的数据库云服务</p>
                            </div>
                            <button class="activity03-content-inner-btn" @click="go('citic-web-ui/product/detail?supplierAlias=oracle&serviceAlias=racMulti')">抢购</button>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div class="activity03-content-inner">
                            <div class="activity03-content-inner-left">
                                <p class="title">青藤云</p>
                                <p title="云安全的最后一公里">云安全的最后一公里</p>
                            </div>
                            <button class="activity03-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201806270404701859')">抢购</button>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity04">
            <div class="center">
                <div class="activity04-title"></div>
                <Row class="activity04-bg" :gutter="40">
                    <i-col span="8">
                        <div class="activity04-content">
                            <div class="activity04-content-title"><p class="main">云安全</p><p class="vice">Sefety</p></div>
                            <div class="activity04-content-inner">
                                <div class="activity04-content-inner-left">
                                    <p class="title">知道创宇</p>
                                    <p class="info" title="云安全防护服务和人工安全服务">云安全防护服务和人工安全服务</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=43a3921d-7479-43d0-a970-031699dcf9b6')">抢购</button>
                            </div>
                            <div class="activity04-content-inner">
                                <div class="activity04-content-inner-left">
                                    <p class="title">爱加密</p>
                                    <p class="info"  title="专业移动应用安全检测平台">专业移动应用安全检测平台</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201803082048317059')">抢购</button>
                            </div>
                            <div class="activity04-content-inner">
                                <div class="activity04-content-inner-left">
                                    <p class="title" style="font-size: 15px;">阿里云<br>Web应用防火墙</p>
                                    <p class="info"  title="市场份额第一超高性价比的网站安全防护平台">市场份额第一超高性价比的网站安全防护平台</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=58465454b992230c4edfe723')">抢购</button>
                            </div>
                            <div class="activity04-content-inner">
                                <div class="activity04-content-inner-left">
                                    <p class="title">360</p>
                                    <p class="info"  title="集齐多重安全于一体的云安全防护平台">集齐多重安全于一体的云安全防护平台</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201711061628112233')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="activity04-content">
                            <div class="activity04-content-title"><p class="main">云运维</p><p class="vice">Maintain</p></div>
                            <div class="activity04-content-inner width100">
                                <div class="activity04-content-inner-left">
                                    <p class="title">袋鼠云</p>
                                    <p class="info"  title="为用户提供云计算和大数据技术服务及产品">为用户提供云计算和大数据技术服务及产品</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201709251994734055')">抢购</button>
                            </div>
                            <div class="activity04-content-inner width100">
                                <div class="activity04-content-inner-left">
                                    <p class="title">云智慧</p>
                                    <p class="info"  title="提供应用、浏览器性能以及移动应用性能">提供应用、浏览器性能以及移动应用性能</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=1d8f7d7387cd4ca5a10825ff611e73ac')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="activity04-content">
                            <div class="activity04-content-title"><p class="main">云备份</p><p class="vice">Backup </p></div>
                            <div class="activity04-content-inner width100">
                                <div class="activity04-content-inner-left">
                                    <p class="title">CV</p>
                                    <p class="info"  title="协助用户达成最佳化的配置 , 以满足用户对数据保护的需求">协助用户达成最佳化的配置 , 以满足用户对数据保护的需求</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201801301918461605')">抢购</button>
                            </div>
                            <div class="activity04-content-inner width100">
                                <div class="activity04-content-inner-left">
                                    <p class="title">中企通信</p>
                                    <p class="info"  title="为客户提供基于VMware的虚拟资源池服务产品">为客户提供基于VMware的虚拟资源池服务产品</p>
                                </div>
                                <button class="activity04-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=57981ab7e1983a04434e1b4e')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity05">
            <div class="center">
                <div class="activity05-title"></div>
                <Row class="activity05-bg" :gutter="40">
                    <i-col span="8">
                        <div class="activity05-content">
                            <div class="activity05-content-title"><p class="main">大数据平台</p><p class="vice">Data platform</p></div>
                            <div class="activity05-content-inner width100">
                                <div class="activity05-content-inner-left">
                                    <p class="title">数据仓库</p>
                                    <p class="info"  title="数仓构建一键化，提供全栈大数据服务">数仓构建一键化，提供全栈大数据服务</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://data.c.citic/index.jsp')">抢购</button>
                            </div>
                            <div class="activity05-content-inner width100">
                                <div class="activity05-content-inner-left">
                                    <p class="title">tableau</p>
                                    <p class="info"  title="业内BI领跑者,提供丰富多样可视化分析">业内BI领跑者,提供丰富多样可视化分析</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://data.c.citic/Tableau.jsp')">抢购</button>
                            </div>
                            <div class="activity05-content-inner width100">
                                <div class="activity05-content-inner-left">
                                    <p class="title">日志易</p>
                                    <p class="info"  title="IT智能运维，日志安全审计，业务链路跟踪，让日志分析更容易">IT智能运维，日志安全审计，业务链路跟踪，让日志分析更容易</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://data.c.citic/LogCloud.jsp')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="activity05-content">
                            <div class="activity05-content-title"><p class="main">人工智能</p><p class="vice">AI</p></div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">人脸对比</p>
                                    <p class="info"  title="智能比对照片与活体数据，判断是否同一人">智能比对照片与活体数据，判断是否同一人</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('apistore/apidetail.html?service_id=c60d4f41-0e16-4452-946a-e554859d16ad')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">机器学习</p>
                                    <p class="info"  title="中信自有的大数据场景的机器学习平台">中信自有的大数据场景的机器学习平台</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('http://ml.c.citic')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">人脸核身</p>
                                    <p class="info"  title="智能比对核查后台照片与上传照片或静默活体数据，判断是否同一人">智能比对核查后台照片与上传照片或静默活体数据，判断是否同一人</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('apistore/apidetail.html?service_id=d08b268a-df78-41b4-baef-c04fe607f448')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">证卡OCR</p>
                                    <p class="info"  title="识别身份证或银行卡文字信息">识别身份证或银行卡文字信息</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('apistore/apidetail.html?service_id=a272032e-7f45-4717-805f-f970fa11dc57')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="activity05-content">
                            <div class="activity05-content-title"><p class="main">数据市场</p><p class="vice">Data market</p></div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">企业年报</p>
                                    <p class="info"  title="自主获取快捷辨识企业概览">自主获取快捷辨识企业概览</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://market.c.citic/views/goodsDetails/apiDetails.html?goods_id=17273')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">企业征信</p>
                                    <p class="info"  title="透视企业关系洞察企业客户价值及风险">透视企业关系洞察企业客户价值及风险</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://saas.elecredit.com/')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">个人征信</p>
                                    <p class="info"  title="传递有效数据服务全场景大数据风控">传递有效数据服务全场景大数据风控</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('https://market.c.citic/views/goodsList/indexList.html?category=%E4%B8%AA%E4%BA%BA%E6%95%B0%E6%8D%AE')">抢购</button>
                            </div>
                            <div class="activity05-content-inner-four">
                                <div class="activity05-content-inner-left">
                                    <p class="title">知网数据</p>
                                    <p class="info"  title="汇聚最新研究成果助力技术创新">汇聚最新研究成果助力技术创新</p>
                                </div>
                                <button class="activity05-content-inner-btn" @click="go('views/cloud/serviceDesc.jsp?service_id=9CE6EB7E343E4C2183B8FB488F2A06CF ')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity06">
            <div class="center">
                <div class="activity06-title"></div>
                <Row class="activity06-bg" :gutter="40">
                    <i-col span="12">
                        <div class="activity06-content">
                            <div class="activity06-content-title"><p class="main">日常办公</p></div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">蓝凌</p>
                                    <p class="info"  title="国内第一家研究知识管理和推动知识化平台建设的企业">国内第一家研究知识管理和推动知识化平台建设的企业</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=15085000078420607142')">抢购</button>
                            </div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">致远</p>
                                    <p class="info"  title="专注于为组织级客户提供协同管理软件、解决方案和云服务">专注于为组织级客户提供协同管理软件、解决方案和云服务</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201805150728934761')">抢购</button>
                            </div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">Teambition</p>
                                    <p class="info"  title="Teambition 致力于改善人们的工作方式">Teambition 致力于改善人们的工作方式</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=41fc31a4-d0d7-4a1a-a3a5-744b8cec72a6')">抢购</button>
                            </div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">道一</p>
                                    <p class="info"  title="大的微信工作平台，帮助企业实现智能化、移动化的高效工作方式">大的微信工作平台，帮助企业实现智能化、移动化的高效工作方式</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=15085000078420607130')">抢购</button>
                            </div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">WPS</p>
                                    <p class="info"  title="金山自主研发的一款办公软件套装">金山自主研发的一款办公软件套装</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201805141346610276')">抢购</button>
                            </div>
                            <div class="activity06-content-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">Office365</p>
                                    <p class="info"  title="通过共享的文档、电子邮件和日程安排团队都可以实现轻松的协同工作">通过共享的文档、电子邮件和日程安排团队都可以实现轻松的协同工作</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201712071215703035')">抢购</button>
                            </div>

                        </div>
                    </i-col>
                    <i-col span="12">
                        <div class="activity06-content">
                            <div class="activity06-content-title"><p class="main">财务管理</p></div>
                            <div class="activity06-content-right-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">海波龙</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="为企业提供一个全面、完善的预算管理解决方案">为企业提供一个全面、完善的预算管理解决方案</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201708140259262044')">抢购</button>
                            </div>
                            <div class="activity06-content-right-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">天阳</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="助企业或企业集团建立从业务计划到财务预算的全面预算管理系统">助企业或企业集团建立从业务计划到财务预算的全面预算管理系统</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201707310410754332')">抢购</button>
                            </div>
                            <div class="activity06-content-right-inner">
                                <div class="activity06-content-inner-left">
                                    <p class="title">九恒星</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="为集团型企业提供跨行现金管理的金融服务">为集团型企业提供跨行现金管理的金融服务</p>
                                </div>
                                <button class="activity06-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201704242009327278')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity07">
            <div class="center">
                <div class="activity07-title"></div>
                <Row class="activity07-bg" :gutter="40">
                    <i-col span="12">
                        <div class="activity07-content">
                            <div class="activity07-content-title"><p class="main">企业营销</p></div>
                            <div class="activity07-content-inner-four width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">H5营销（易企秀 )</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="帮助广大企业构筑建场景-做推广-管数据-再营销的移动营销闭环">帮助广大企业构筑建场景-做推广-管数据-再营销的移动营销闭环
                                    </p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201712211139843827')">抢购</button>
                            </div>
                            <div class="activity07-content-inner-four width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">云客服（逸创）</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="逸创云客服整合了全客服渠道">逸创云客服整合了全客服渠道</p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201708011340342711')">抢购</button>
                            </div>
                            <div class="activity07-content-inner-four width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">视频直播（越亮传奇）</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="根据具体活动针对性的定制活动规模，完整的直播解决方案">根据具体活动针对性的定制活动规模，完整的直播解决方案
                                    </p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201712210464918160')">抢购</button>
                            </div>
                            <div class="activity07-content-inner-four width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">企业微信</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="在线团建 胜人一筹，企业新闻智能推荐、精彩活动便捷加入">在线团建 胜人一筹，企业新闻智能推荐、精彩活动便捷加入
                                    </p>
                                </div>
                                <button class="activity07-content-inner-btn" style="width: 100px">敬请期待</button>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="12">
                        <div class="activity07-content">
                            <div class="activity07-content-title"><p class="main">企业建站</p></div>
                            <div class="activity07-content-inner width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">企业建站（正邦）</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="提供建站相关设计服务运营服务">提供建站相关设计服务运营服务</p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=fd0c9244-f1e6-49df-a18e-70ae7a1facbf')">抢购</button>
                            </div>
                            <div class="activity07-content-inner width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">APP开发</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="APIcloud：提供API”和“管理API”是APICloud特有的服务模式">APIcloud：提供API”和“管理API”是APICloud特有的服务模式</p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201804190760291561')">抢购</button>
                            </div>
                            <div class="activity07-content-inner width100">
                                <div class="activity07-content-inner-left">
                                    <p class="title">UPP</p>
                                    <p class="dashed">-</p>
                                    <p class="info"  title="为不同平台的产品提供全流程的用户体验设计和咨询服务">为不同平台的产品提供全流程的用户体验设计和咨询服务</p>
                                </div>
                                <button class="activity07-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201804181680346242')">抢购</button>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity08">
            <div class="center">
                <div class="activity08-title"></div>
                <Row class="activity08-bg" :gutter="20">
                    <i-col span="12">
                        <div class="activity08-content-inner">
                            <div class="activity08-content-inner-left">
                                <p class="title">在线认证</p>
                                <p class="info"  title="为中信旗下子公司的网站、微信号、微博提供认证服务">为中信旗下子公司的网站、微信号、微博提供认证服务</p>
                            </div>
                            <button class="activity08-content-inner-btn" @click="go('citic-web-ui/product/cert/details')">抢购</button>
                        </div>
                        <div class="activity08-content-inner">
                            <div class="activity08-content-inner-left">
                                <p class="title">供应链</p>
                                <p class="info"  title="面向集团企业的世界级高端管理软件">面向集团企业的世界级高端管理软件</p>
                            </div>
                            <button class="activity08-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=15085000078420607107')">抢购</button>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div class="activity08-content-inner-right">
                            <div class="activity08-content-inner-left">
                                <p class="title">宏景人员测评</p>
                                <p class="dashed">-</p>
                                <p class="info"  title="适用于企事业单位对领导班子和班子成员进行民主测评和民主评议">适用于企事业单位对领导班子和班子成员进行民主测评和民主评议</p>
                            </div>
                            <button class="activity08-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=201711200953567810')">抢购</button>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div class="activity08-content-inner-right">
                            <div class="activity08-content-inner-left">
                                <p class="title">EHR</p>
                                <p class="dashed">-</p>
                                <p class="info"  title="致力于为企业人力资源管理与员工服务提供最佳的SaaS软件与服务">致力于为企业人力资源管理与员工服务提供最佳的SaaS软件与服务</p>
                            </div>
                            <button class="activity08-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=20e7fd16-e5b0-46ec-bc8a-5a4a8232b313')">抢购</button>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div class="activity08-content-inner-right">
                            <div class="activity08-content-inner-left">
                                <p class="title">企业邮箱</p>
                                <p class="dashed">-</p>
                                <p class="info"  title="腾讯针对企业用户提供的企业邮局服务">腾讯针对企业用户提供的企业邮局服务</p>
                            </div>
                            <button class="activity08-content-inner-btn" @click="go('citic-web-ui/product/detail?service_id=15085000078420607113')">抢购</button>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="activity09">
            <div class="center">
                <p class="activity09-title">活动规则</p>
                <p>(1)凡是在8月29日——10月31日期间下单，即可享受代金券优惠政策。</p>
                <p>(2)代金券根据符合规则的订单计提，活动结束后由工作人员发放到用户账户，结账的时候统一抵扣欠款。</p>
                <p>(3)活动仅限中信云平台注册租户。</p>
                <p>(4)成功下单的用户，请在60天内付款；若因未支付导致订单失效，视为放弃活动机会。</p>
                <p>(5)对于通过恶意注册或其他不正当手段在本次活动中进行非法牟利、炒作、转售、获奖、虚假交易的用户，中信云有权取消其获奖资格或其因参加活动所获权益，有权采取包括不限于停止服务、封停帐号、冻结代金券等止损和保护措施；如该违规行为给中信云造成损失的，中信云保留追究其民事责任和刑事责任的权利。</p>
                <p>(6)云资源类产品（如云服务器、数据库、云存储、网络等服务）、人天服务类产品不参与代金券赠送活动。服务续费不参加代金券赠送活动。指定产品在829期间的新增订单享受代金券赠送。</p>
                <p>(7)代金券名额有限，先到先得。代金券在活动结束后发放，不在下单时折让！</p>
                <p>(8)在法律范围内中信云有对本活动的解释权。</p>
            </div>
        </div>
    </div>
</template>

<script>
    import QRcodeImg from "static/images/news/topic829/citic-QRcode.png";
    import giftImg01 from "static/images/news/topic829/gift01.png";
    import giftImg02 from "static/images/news/topic829/gift02.png";
    import giftImg03 from "static/images/news/topic829/gift03.png";
    import MenuData from "static/json/news/menu";

    export default {
        data() {
            return {
                QRcodeImg: QRcodeImg,
                giftImg01: giftImg01,
                giftImg02: giftImg02,
                giftImg03: giftImg03,
                menuData:  [
                    { img: QRcodeImg, title: "新闻动态", notice: "热门新闻&资讯动态", url:"/citic-web-ui/news/list"},
                ],
            }
        },
        components: {
        },
        mounted(){
        },
        methods:{
            getMenu(){
                console.log(this.menuData)
            },

            go(url) {
                let newWindow = window.open();
                if (!url) return false;
                let baseUrl = location.origin +"/";
//                console.log(this.$CONFIG.UI_COMMON_PREFIX,baseUrl)

                if (url[0] == "/") {
                    console.log('url1')
                    newWindow.location.href = this.$CONFIG.UI_COMMON_PREFIX + url;
//                    this.$router.push(this.$CONFIG.UI_COMMON_PREFIX + url);
                } else if (url.indexOf("://") == -1) {
                    console.log('url2',location.origin)
                    newWindow.location.href = baseUrl + url;
                } else {
                    console.log('url3')
                    newWindow.location.href = url;
                }
            }
        },
    }
</script>

<style lang="scss">
    @mixin activity-inner {
        background: linear-gradient(30deg, #6044ef 40%,#6748f1 60%,#836cf2 80%, #b17af9 100%);
        color: #ffffff;
        border-radius: 8px;
    }
    @mixin activity-inner-hover {
        background: linear-gradient(30deg, #7c62fe 40%,#7e59f4 100%);

    }
    @mixin activity-btn {
        background: linear-gradient(126deg, #f24585 20%, #e5cc22 100%);
        cursor: pointer;
        box-shadow: 0 0 24px #f14a81;
        color: #ffffff;
        display: block;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 16px;
        font-weight: bold;
    }
    .news-topic829 {
        background: url(~static/images/news/topic829/total-bg.jpg) top center no-repeat;
        padding-bottom: 50px;
        background-color: #0d0b36;
        .news-topic829-banner{
            width: 100%;
            height: 1280px;
            background: url(~static/images/news/topic829/banner.png) top center no-repeat;
            .center {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                text-align: center;
            }
            .activity01{
                display:none;
                .activity01-title{
                    background: url(~static/images/news/topic829/title01.png) top center no-repeat;
                    display: block;
                    margin: 0 auto;
                    margin-top: 610px;
                    width: 100%;
                    height: 200px;
                }
                .activity01-content{
                    height: 470px;
                    width: 100%;
                    padding:54px;
                    border:4px solid #ddd;
                    border-image: -webkit-linear-gradient(#864dc2,#0d5fab) 30 30;
                    border-image: -moz-linear-gradient(#864dc2,#0d5fab) 30 30;
                    border-image: linear-gradient(#864dc2,#0d5fab) 30 30;
                    .activity01-content-left{
                        .activity01-content-left-con{
                            height: 260px;
                            background: linear-gradient(45deg,#521dec 0%,#00deff 70%);
                            color: #ffffff;
                            border-radius: 8px;
                            p{
                                font-size: 16px;
                                padding-top: 45px;
                                padding-bottom: 30px;
                            }
                        }
                        .activity01-content-left-btn{
                            background: #1bf7ff;
                            padding:10px 79px;
                            margin-top: 60px;
                            border: none;
                            border-radius: 40px;
                            cursor: default;
                        }
                    }
                    .activity01-content-right{
                        .activity01-content-right-img{
                            margin-top: -14px;
                        }
                        .activity01-content-right-info{
                            text-align: left;
                            color: #ffffff;
                            font-size: 14px;
                            h3{
                                font-size: 35px;
                                font-weight: bold;
                            }
                            .title{
                                color: #00fff6;
                                margin-top: 20px;
                            }
                            .activity-intro{
                                color: #998be6;
                                margin-top: 10px;
                            }
                        }
                    }

                }
            }
    }
    .activity02{
        margin-top:-800px;
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity02-title{
            background: url(~static/images/news/topic829/title02.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity02-content{
            background: #4832b7;
            display: block;
            height:366px;
            padding:20px 10px;
            border-radius: 8px;
            .activity02-content-title{
                background: url(~static/images/news/topic829/title-bg.png) left center no-repeat, url(~static/images/news/topic829/title-bg.png) right center no-repeat;
                overflow: hidden;
                display: block;
                margin:8px 20px;
                color:#ffffff;
                p.main{
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 26px;

                }
                p.vice{
                    font-size: 20px;
                }
            }
            .activity02-content-inner{
                @include activity-inner;
                margin-top: 10px;
                height: 70px;
                color: #ffffff;
                line-height: 14px;
                &:hover{
                    @include activity-inner-hover;
                 }
                .activity02-content-inner-left{
                    float: left;
                    display:inline-block;
                    text-align: left;
                    width: 66%;
                    margin: 16px 0 0 10px;
                    p.title{
                        font-size: 16px;
                        height: 16px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p{
                        font-size: 12px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
                .activity02-content-inner-btn{
                    @include activity-btn;
                    float: right;
                    margin:15px 10px 15px 0;
                    width: 60px;
                }
            }
        }
    }

    .activity03{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity03-title{
            background: url(~static/images/news/topic829/title03.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity03-content-inner{
            @include activity-inner;
            margin-top: 10px;
            height: 70px;
            color: #ffffff;
            line-height: 14px;
            &:hover{
             @include activity-inner-hover;
             }
            .activity03-content-inner-left{
                float: left;
                display:inline-block;
                text-align: left;
                width: 66%;
                margin: 16px 0 0 10px;
                p.title{
                    font-size: 16px;
                    height: 16px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                p{
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
            .activity03-content-inner-btn{
                @include activity-btn;
                float: right;
                margin:15px 10px 0 0;
                width: 60px;
            }
        }
    }

    .activity04{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity04-title{
            background: url(~static/images/news/topic829/title04.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity04-content{
            overflow: hidden;
            background: #4832b7;
            display: block;
            padding:20px 10px;
            border-radius: 8px;
            .activity04-content-title{
                overflow: hidden;
                display: block;
                margin:8px 70px;
                color:#ffffff;
                background: url(~static/images/news/topic829/title-bg.png) left center no-repeat, url(~static/images/news/topic829/title-bg.png) right center no-repeat;
                p.main{
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 26px;

                }
                p.vice{
                    font-size: 20px;
                }
            }

            .activity04-content-inner{
                @include activity-inner;
                width: 168px;
                margin: 10px 4px;
                height: 130px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity04-content-inner-left{
                    display:block;
                    text-align: center;
                    width: 66%;
                    margin: 16px auto;
                    p.title{
                        font-size: 16px;
                        font-weight: bold;
                        height: 36px;
                        line-height: 16px;
                    }
                    p.info{
                        font-size: 12px;
                        height: 32px;
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        opacity:0.7;
                    }
                }
                .activity04-content-inner-btn{
                    @include activity-btn;
                    margin:15px auto -15px;
                    width: 60px;
                }
            }
            .width100{
                width: 98%;
            }
        }
    }

    .activity05{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity05-title{
            background: url(~static/images/news/topic829/title05.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity05-content{
            overflow: hidden;
            background: #4832b7;
            display: block;
            padding:20px 10px;
            border-radius: 8px;
            .activity05-content-title{
                overflow: hidden;
                display: block;
                margin:8px 40px;
                background: url(~static/images/news/topic829/title-bg.png) left center no-repeat, url(~static/images/news/topic829/title-bg.png) right center no-repeat;
                color:#ffffff;
                p.main{
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 26px;
                }
                p.vice{
                    font-size: 20px;
                }
            }
            .activity05-content-inner{
                @include activity-inner;
                width: 168px;
                margin: 10px 4px;
                height: 70px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity05-content-inner-left{
                    float: left;
                    display:inline-block;
                    text-align: left;
                    width: 66%;
                    margin: 16px 0 0 10px;
                    p.title{
                        font-size: 16px;
                        height: 16px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p{
                        font-size: 12px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
                .activity05-content-inner-btn{
                    @include activity-btn;
                    float: right;
                    margin:15px 10px;
                    width: 60px;
                }
            }
            .width100{
                width: 98%;
            }
            .activity05-content-inner-four{
                @include activity-inner;
                width: 168px;
                margin: 10px 4px;
                height: 115px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity05-content-inner-left{
                    display:block;
                    text-align: center;
                    width: 66%;
                    margin: 16px auto;
                    p.title{
                        font-size: 16px;
                        height: 16px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p.info{
                        font-size: 12px;
                        height: 32px;
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        opacity: 0.7;
                    }
                }
                .activity05-content-inner-btn{
                    @include activity-btn;
                    margin: 10px auto 10px;
                    width: 60px;
                }
            }
        }
    }

    .activity06{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity06-title{
            background: url(~static/images/news/topic829/title06.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity06-content{
            overflow: hidden;
            background: #4832b7;
            display: block;
            padding:20px 10px;
            border-radius: 8px;
            .activity06-content-title{
                margin: 30px;
                color:#ffffff;
                p.main{
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 26px;

                }
                p.vice{
                    font-size: 20px;
                }
            }
            .activity06-content-inner{
                @include activity-inner;
                width: 178px;
                height: 130px;
                margin: 10px 4px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity06-content-inner-left{
                    display:block;
                    text-align: center;
                    width: 66%;
                    margin: 16px auto;
                    p.title{
                        font-size: 16px;
                        height: 16px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p.info{
                        font-size: 12px;
                        height: 32px;
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        opacity: 0.7;
                    }
                }
                .activity06-content-inner-btn{
                    @include activity-btn;
                    margin: 26px auto 10px;
                    width: 60px;
                }
            }
            .width100{
            }
        }
        .activity06-content-right-inner{
            @include activity-inner;
            width: 178px;
            height: 280px;
            margin: 10px 4px;
            color: #ffffff;
            line-height: 14px;
            float: left;
            display: inline-block;
            &:hover{
             @include activity-inner-hover;
             }
            .activity06-content-inner-left{
                display:inline-block;
                text-align: center;
                width: 66%;
                margin: 50px 0 60px 0px;
                p.title{
                    font-size: 16px;
                    height: 16px;
                    font-weight: bold;
                    margin-top: 10px;
                    margin-bottom: 20px;
                }
                p.dashed{
                    font-size: 60px;
                    opacity: 0.7;
                }
                p.info{
                    margin-top: 40px;
                    font-size: 12px;
                    height: 32px;
                    line-height: 16px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    opacity: 0.7;
                }
            }
            .activity06-content-inner-btn{
                @include activity-btn;
                margin: 10px auto 10px;
                width: 60px;
            }
        }
    }
    .activity07{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity07-title{
            background: url(~static/images/news/topic829/title07.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity07-content{
            overflow: hidden;
            background: #4832b7;
            display: block;
            padding:20px 10px;
            border-radius: 8px;
            .activity07-content-title{
                margin: 30px;
                color:#ffffff;
                p.main{
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 26px;

                }
                p.vice{
                    font-size: 20px;
                }
            }
            .activity07-content-inner{
                @include activity-inner;
                width: 178px;
                margin: 10px 4px;
                height: 280px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity07-content-inner-left{
                    display:inline-block;
                    text-align: center;
                    width: 90%;
                    margin: 50px 0 60px 0px;
                    p.title{
                        font-size: 15px;
                        height: 16px;
                        font-weight: bold;
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    p.dashed{
                        font-size: 60px;
                        opacity: 0.7;
                    }
                    p.info{
                        margin-top: 40px;
                        font-size: 12px;
                        height: 32px;
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        opacity: 0.7;
                    }
                }
                .activity07-content-inner-btn{
                    @include activity-btn;
                    margin:10px auto 10px;
                    width: 60px;
                }
            }
            .activity07-content-inner-four{
                @include activity-inner;
                width: 270px;
                margin: 10px 4px;
                height: 130px;
                color: #ffffff;
                line-height: 14px;
                float: left;
                display: inline-block;
                &:hover{
                 @include activity-inner-hover;
                 }
                .activity07-content-inner-left{
                    display:block;
                    text-align: center;
                    width: 66%;
                    margin: 16px auto;
                    p.title{
                        font-size: 16px;
                        height: 16px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    p.info{
                        font-size: 12px;
                        height: 32px;
                        line-height: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        opacity: 0.7;
                    }
                }
                .activity07-content-inner-btn{
                    @include activity-btn;
                    margin: 10px auto 10px;
                    width: 60px;
                }
            }
        }
    }

    .activity08{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .activity08-title{
            background: url(~static/images/news/topic829/title08.png) top center no-repeat;
            display: block;
            margin: 0 auto;
            margin-top: 100px;
            width: 100%;
            height: 120px;
        }
        .activity08-content-inner{
            @include activity-inner;
            margin-top: 10px;
            height: 150px;
            color: #ffffff;
            line-height: 14px;
            &:hover{
             @include activity-inner-hover;
             }
            .activity08-content-inner-left{
                display:inline-block;
                text-align: center;
                width: 90%;
                margin: 30px 0 0px;
                p.title{
                    font-size: 16px;
                    height: 16px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                p.info{
                    font-size: 12px;
                    height: 32px;
                    line-height: 16px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    opacity: 0.7;
                }
            }
            .activity08-content-inner-btn{
                @include activity-btn;
                margin:0px auto;
                width: 100px;
            }
        }
        .activity08-content-inner-right{
            @include activity-inner;
            margin-top: 10px;
            height: 310px;
            color: #ffffff;
            line-height: 14px;
            &:hover{
             @include activity-inner-hover;
             }
            .activity08-content-inner-left{
                display:inline-block;
                text-align: center;
                width: 90%;
                margin: 50px 0 40px;
                p.title{
                    font-size: 16px;
                    height: 16px;
                    font-weight: bold;
                    margin-top: 10px;
                    margin-bottom: 20px;
                }
                p.dashed{
                    font-size: 60px;
                    opacity: 0.7;
                }
                p.info{
                    margin-top: 40px;
                    font-size: 12px;
                    height: 32px;
                    line-height: 16px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    opacity: 0.7;
                }
            }
            .activity08-content-inner-btn{
                @include activity-btn;
                margin:15px auto 10px;
                width:100px;
            }
        }
    }
    .activity09{
        margin-top:100px;
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: left;
        }
        p.activity09-title{
            font-size: 18px;
            color: #27d6fb;
        }
        p{
            font-size: 14px;
            color: #998be6;
        }
    }
}

</style>

