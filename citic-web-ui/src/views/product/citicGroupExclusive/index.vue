<style scoped lang="scss">
    /*渐变放射边框按钮样式*/
    @mixin btn {
        background: linear-gradient(#27d6fb,#4be7ea);
        color: #05152b;
        box-shadow: 0 0 24px #27d6fb;
    }

    .citic-group-exclusive{
        .center {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }
        .citic-group-exclusive-banner{
            width: 100%;
            height: 394px;
            background: url(~static/images/citicGroupExclusive/citicGroup-bg.jpg) top center no-repeat;
            .citic-group-exclusive-text{
                padding-top: 120px;
                p.first-info{
                    font-size: 40px;
                    margin-top: 10px;
                    letter-spacing: 4px;
                    color: #ffffff;
                }
                p.sec-info{
                    font-size: 30px;
                    color: #cbcedd;
                    letter-spacing: 4px;
                }
                .btn-group{
                    height: 56px;
                    margin-top: 20px;
                    .btn-shape{
                        border: 1px solid #0dcef8;
                        color: #0dcef8;
                        border-radius: 10px;
                        margin-right: 10px;
                        width: 100px;
                        padding:6px 16px;
                        font-size: 20px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
        .citic-group-exclusive-list{
            width: 100%;
            margin-bottom: 30px;
            .title{
                width: 380px;
                text-align: center;
                margin: 50px auto 0;
                position: relative;
                p{
                    position: absolute;
                    background: #fff;
                    font-size: 28px;
                    width: 160px;
                    padding: 0 20px;
                    margin-left: 110px;
                    bottom: -20px;
                }
                .line{
                    border-bottom: 1px solid #000000;
                    margin-bottom: 40px;
                }
            }
            .citic-group-exclusive-con{
                padding: 0px 4px;
                .citic-group-exclusive-card{
                    background: #ffffff;
                    box-shadow: 0px 0px 4px 2px #dddddd;
                    height: 330px;
                    margin-bottom: 30px;
                    padding: 0px 30px;
                    border-radius: 2px;
                    .citic-group-exclusive-card-topimg{
                        border-top: 4px solid #4eb0fd;
                         width: 140px;
                        display: block;
                        margin: 0 auto;
                    }
                    .citic-group-exclusive-card-companyName{
                        color: #009fea;
                        font-size: 26px;
                        margin-top: 50px;
                        text-align: center;
                    }
                    .citic-group-exclusive-card-name{
                        color: #000000;
                        font-size: 18px;
                        margin-top: 34px;
                        text-align: center;
                    }
                    .citic-group-exclusive-card-summary{
                        color: #000000;
                        font-size: 14px;
                        margin-top: 36px;
                        height: 106px;
                        display:-webkit-box;
                        -webkit-line-clamp:5;
                        -webkit-box-orient:vertical;
                        overflow:hidden;

                    }
                    .btn-hover{
                        display: none;
                    }
                    .btn{
                        margin: 55px auto 0;
                        text-align: center;
                        background: linear-gradient(90deg,#0788f6,#5fbafe);
                        color: #ffffff;
                        font-size: 16px;
                        padding: 8px 20px;
                        border-radius: 20px;
                        display: block;
                        width: 170px;
                        height: 42px;
                        letter-spacing: 2px;
                        .btn-hover{
                            display: none;
                            color: #ffffff;
                        }
                        &:hover {
                            .btn-hover{
                                display: inline-block;
                                color: #ffffff;
                            }
                        }
                    }
                    .not-allowed{
                        cursor: not-allowed;
                    }

                    &:hover {
                        background: linear-gradient(120deg,#ffffff 50%,#daf2ff 100%);
                    }
                }
                .citic-group-exclusive-expectCard{
                    background: #ffffff;
                    box-shadow: 0px 0px 4px 2px #dddddd;
                    height: 330px;
                    margin-bottom: 30px;
                    border-radius: 2px;
                    overflow: hidden;
                    .btn{
                        margin: 130px auto 20px;
                        text-align: center;
                        background: linear-gradient(90deg,#0788f6,#5fbafe);
                        color: #ffffff;
                        font-size: 31px;
                        border-radius: 30px;
                        display: block;
                        width: 50px;
                        height: 50px;
                        cursor: not-allowed;
                    }
                    p.expect{
                        font-size: 20px;
                        color: #009fea;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }



</style>
<template>
    <div class="citic-group-exclusive">
        <div class="citic-group-exclusive-banner">
            <div class="citic-group-exclusive-text center">
                    <p class="first-info">中信集团服务应用专区</p>
                    <p class="sec-info">助力云上办公</p>
                    <div class="btn-group">
                        <span class="btn-shape">更简单</span>
                        <span class="btn-shape">更高效</span>
                        <span class="btn-shape">更智能</span>
                    </div>
            </div>
        </div>
        <div class="citic-group-exclusive-list">
            <div class="center">
                <div class="title">
                    <p>核心产品</p>
                    <div class="line"></div>
                </div>
                <Row class="citic-group-exclusive-con" :gutter="16">
                    <Col span="6" v-for="(item) in services" :key="item.id">
                        <div class="citic-group-exclusive-card" v-if="item.expect">
                            <span class="citic-group-exclusive-card-topimg"></span>
                            <!--<p class="citic-group-exclusive-card-companyName">{{item.companyName}}</p>-->
                            <h3 :title="item.name" class="citic-group-exclusive-card-name">{{item.name}}</h3>
                            <p class="citic-group-exclusive-card-summary">{{item.summary}}</p>
                            <a class="btn" v-if="item.operative" @click="go(item.url)">查看详情 <Icon type="arrow-right-c" class="btn-hover"></Icon></a>
                            <a class="btn not-allowed" v-if="!item.operative">敬请期待 </a>
                        </div>
                        <div class="citic-group-exclusive-expectCard" v-if="!item.expect">
                            <a class="btn" v-if="!item.operative">+</a>
                            <p class="expect">敬请期待</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            services: [
                {"id":"5ad567e0822d164ba4c30ee0",expect:true,operative:true,"name":"新媒体协作运营与传播服务","companyName":"Alibaba Cloud",summary:"对中信集团企业号、相关订阅号等进行新媒体运营的协助，包括H5、新媒体文章写作/排版、平面设计等内容。",url:"citic-web-ui/product/detail?service_id=201901180599834932"},
                {"id":"5ad567e0822d164ba4c30ee1",expect:true,operative:true,"name":"内容运营服务","companyName":"Alibaba Cloud",summary:"提供包括开发、视频、H5、设计、文案等在内的内容运营服务，以客户为中心，结合数字时代营销规律，锐意创新，提供最优化解决方案，以不断突破的营销效果，为客户打造数字时代竞争新优势。",url:"citic-web-ui/product/detail?service_id=201901171865910024"},
                {"id":"5ad567e0822d164ba4c30ee6",expect:true,operative:true,"name":"统一监控平台定制开发服务","companyName":"Alibaba Cloud",summary:"针对统一监控平台实施的线下人天服务 ",url:"citic-web-ui/product/detail?service_id=201907150547514240"},
                // {"id":"5ad567e0822d164ba4c30ee7",expect:false,operative:false,"name":"新媒体双微及运营传播","companyName":"Alibaba Cloud",summary:"据中信“互联网+”转型的总体安排，以推进中信产业传播业务为主要合作目标，通过资源共享、优势互补、软硬件开发和建设等方式，打造能够持续为中信产业传播服务的媒体渠道平台，提供中信集团双微年度运营、中信基金会微信运营、新媒体内容运营及活动运营服务。",url:""},
                {"id":"5ad567e0822d164ba4c30ee8",expect:true,operative:true,"name":"威胁速报","companyName":"Alibaba Cloud",summary:"威胁速报产品是基于知道创宇安全大数据分析平台，利用多维度安全异常挖掘模型，持续挖掘与客户相关的安全异常信息，提供服务的模式，不需要本地部署，提供的服务均需人工投入。",url:"citic-web-ui/product/detail?service_id=a1477da6-f972-11e9-8293-784f439a6e52"},
                {"id":"5ad567e0822d164ba4c30ee4",expect:true,operative:true,"name":"统一监控平台包年版","companyName":"Alibaba Cloud",summary:"招为科技监控系统结合国际运维管理标准和自身运维管理的多年实践，量身定制最符合客户现有特点和未来发展需求的运维监控管理产品。招为科技发挥产品运行稳定优势，使人员、流程、技术形成一体的持续优化服务管理中心，为客户建设IT运维流程主流支撑平台。",url:"citic-web-ui/product/detail?service_id=201907150509513978"},
                {"id":"5ad567e0822d164ba4c30ee5",expect:true,operative:true,"name":"统一监控平台买断版","companyName":"Alibaba Cloud",summary:"招为科技监控系统结合国际运维管理标准和自身运维管理的多年实践，量身定制最符合客户现有特点和未来发展需求的运维监控管理产品。招为科技发挥产品运行稳定优势，使人员、流程、技术形成一体的持续优化服务管理中心，为客户建设IT运维流程主流支撑平台。",url:"citic-web-ui/product/detail?service_id=201907150342903816"},
                {"id":"5ad567e0822d164ba4c30ee2",expect:true,operative:false,"name":"问卷网","companyName":"Alibaba Cloud",summary:"1.问卷编程服务：问卷网可以创建全新问卷/表单/测评项目，从模板库创建项目或复制老项目，创新型的体验式题型。2.数据采集服务：生产答题链接及二维码无缝支持多种形式收集：微信收集、短信收集、唯一链接、网站收集，O2O的方法组合，全面的质量控制体系。3.数据分析和报告撰写服务，交叉分析，可查阅每份答题详情及来源，支持配额进度的查看，支持图表，报告撰写。",url:""},
                {"id":"5ad567e0822d164ba4c30ee3",expect:true,operative:false,"name":"统一用户管理","companyName":"Alibaba Cloud",summary:"面向平台应用的统一认证及统一用户数据访问服务。打造用户体系建设，方便企业内部的用户管理。",url:""},
                
            ],
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
        window.scrollTo(0,0)
    },
    components: {
    },
    methods: {
        go(url) {
            let newWindow = window.open();
            if (!url) return false;
            let baseUrl = location.origin +"/";

            if (url[0] == "/") {
                newWindow.location.href = this.$CONFIG.UI_COMMON_PREFIX + url;
            } else if (url.indexOf("://") == -1) {
                newWindow.location.href = baseUrl + url;
            } else {
                newWindow.location.href = url;
            }
        }
    }
}
</script>


