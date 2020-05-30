<style lang="scss" scoped type="text/scss">
    .specoalTopic{
        width: 100%;
        font-size: 16px;
        overflow: hidden;
        position: relative;
        .banner{
            width: 100%;
            height: 575px;
            background: url(../../../static/images/specialTopic/banner1.png) center no-repeat;
        }
        .content {
            width: 1200px;
            margin: 0 auto;
        }

        .introduction{
            width: 100%;
            padding: 65px 0 80px;
            .back{
                background: #f5f5f5;
                width: 70%;
                height: 390px;
                z-index: 0;
                margin-top: 110px;
            }
            .content {
                width: 1200px;
                margin: 0 auto;

                .introduction-left {
                    float: left;
                    width: 700px;

                    .introduction-tit {
                        font-size: 28px;
                        color: #000000;

                        .introduction-span {
                            font-size: 18px;
                            color: #86899b;
                            padding-left: 15px;
                        }
                    }

                    .introduction-text {
                        margin-top: 70px;
                        background: #f5f5f5;
                        height: 390px;
                        padding: 40px 65px 48px 0;

                        p:last-child {
                            margin-top: 38px;
                        }
                    }
                }

                .introduction-img {
                    float: right;
                    width: 500px;
                }
            }
        }

        .product{
            width: 100%;
            height: 725px;
            background: #06052c;
            background-position: right center;
            background-repeat: no-repeat;
            color: #ffffff;
            h1{
                font-size: 28px;
                padding-top: 55px;
            }
            .active{
                background-color: rgba(46,172,241,.2);
                border-right: 1px solid #ffffff;
            }
            .choiceness{
                margin-top: 40px;
                .googlePack{
                    width: 170px;
                    border-right: 1px solid rgba(255,255,255,.4);
                    display: inline-block;
                    float: left;
                    li{
                        width: 170px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                    }
                }
                .googlePack-cnt{
                    float: right;
                    width: 870px;
                    h2{
                        font-size: 24px;
                        margin-top: 120px;
                    }
                    p{
                        margin-top: 40px;
                    }
                    a{
                        width: 148px;
                        height: 45px;
                        background-color: #ffffff;
                        text-align: center;
                        line-height: 45px;
                        color: #000000;
                        display: block;
                        margin-top: 60px;
                    }
                }
            }

        }
        .publicity{
            width: 100%;
            height: 235px;
            text-align: center;
            line-height: 235px;
            font-size: 30px;
            background: url(../../../static/images/specialTopic/publicity_back.png) center -55px no-repeat;
        }
    }
</style>

<template>
    <div class="specoalTopic">
        <div class="banner"></div>
        <div class="introduction clearfix">
            <div class="content">
                <div class="introduction-left">
                    <h1 class="introduction-tit">简介<span class="introduction-span">加强知识产权保护</span></h1>
                    <div class="introduction-text">
                        <p>随着经济全球化进程的加快，世界各国为了增强综合国力和提升国际竞争力，推动现代化进程，抢占经济发展的制高点，都把发展高新技术产业摆在十分重要的位置。面对知识经济时代的挑战，2012 年中国共产党第十八次全国代表大会提出实施知识产权战略，加强知识产权保护。在信息化时代背景下，中国已将软件产业作为国家优先发展的战略性先导产业和信息产业、信息服务业的核心，通过一系列强有力的政策措施，予以大力的扶持，其中最基础的一项工作就是积极推进软件正版化。</p>
                        <p>推进软件正版化对于我国鼓励自主创新、建设创新型国家具有重要意义。通过软件正版化加强软件知识产权保护，是鼓励和促进知识与技术创新的重要举措，是企业长期坚持创新的根本机制保证。创新的关键就是知识和信息的生产，通过实施软件正版化，有助于不断完善现代知识产权制度，推动知识、技术等无形要素真正成为促进经济增长的要素，为转变经济发展方式、调整经济结构发挥重要作用。</p>
                    </div>
                </div>
                <div class="introduction-img">
                    <img src="../../../static/images/specialTopic/introduction_img.png" alt="">
                </div>
            </div>
            <div class="back"></div>
        </div>

        <div class="product" :style="{backgroundImage: `url('${product_back}')`}">
            <div class="content">
                <h1>产品<span style="opacity: .5;font-size: 18px;padding-left: 15px">国产软件精选</span></h1>
                <div class="choiceness clearfix">
                    <ul class="googlePack">
                        <li v-for="(item, index) in productList" :key="index" @mouseenter="activeTab(item,index)" :class="actives == index ? 'active':''">{{item}}</li>
                    </ul>
                    <div class="googlePack-cnt" v-show="actives == 0">
                        <h2>阿里云</h2>
                        <p>阿里云创立于2009年，是全球领先的云计算及人工智能科技公司，致力于以在线公共服务的方式，提供安全、可靠的计算和数据处理能力，让计算和人工智能成为普惠科技。</p>
                        <p>阿里云服务着制造、金融、政务、交通、医疗、电信、能源等众多领域的领军企业，包括中国联通、12306、中石化、中石油、飞利浦、华大基因等大型企业客户，以及微博、知乎、锤子科技等明星互联网公司。</p>
                        <a href="../../citic-web-ui/product/detail?supplierAlias=aliyun&serviceAlias=vm">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 1">
                        <h2>金山云</h2>
                        <p>金山云——金山集团旗下云计算企业，中国TOP3云计算公司。自主研发云服务器、对象存储、云安全等一整套云计算产品，提供大数据、人工智能、区块链、边缘计算等服务，精准定制适用于企业级市场的解决方案。</p>
                        <p>当前，金山云已经通过ISO 9001/27001、等级保护、可信云、国际云安全联盟C-STAR等多项安全认证，也是拥有CSA STAR Tech IaaS/PaaS双认证的云厂商。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=kec1a0637b2847b3c22373ad">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 2">
                        <h2>WPS</h2>
                        <p>WPS Office是由金山软件股份有限公司自主研发的一款办公软件套装，可以实现办公软件最常用的文字、表格、演示等多种功能。具有内存占用低、运行速度快、体积小巧、强大插件平台支持、免费提供海量在线存储空间及文档模板。</p>
                        <p>支持阅读和输出PDF文件、全面兼容微软Office97-2010格式独特优势。覆盖Windows、Linux、Android、iOS等多个平台。WPS Office支持桌面和移动办公。且WPS移动版通过Google Play平台，已覆盖超50多个国家和地区。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201805141346610276">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 3">
                        <h2>用友</h2>
                        <p>用友公司成立于1988年，致力于把基于先进信息技术的最佳管理与业务实践普及到客户的管理与业务创新活动中，全面提供具有自主知识产权的企业管理/ERP软件、服务与解决方案，是中国最大的管理软件、ERP软件、集团管理软件、人力资源管理软件、客户关系管理软件及小型企业管理软件提供商。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201905231819539403">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 4">
                        <h2>蓝凌</h2>
                        <p>蓝凌是企业智慧办公品牌，阿里巴巴钉钉使命级战略合作伙伴，为企业提供融合“智能办公、移动门户、知识管理、数字运营、财务共享”等一体化解决方案，通过智慧高效办公变革实现数字化转型。</p>
                        <p>它以管理咨询业和IT业为依托，融合现代IT技术和创新管理思想，为用户提供规范化、个性化、专业化的服务；能够帮助客户从容面对快速应变的商业环境和利用信息及知识资本提升竞争力；实现业务流程与IT技术的完美结合，使客户从IT维护中解放出来，大幅度降低了运营成本，更集中资源与精力，专注发展其自身的核心业务，确保组织快速持续和健康成长。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=15085000078420607142">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 5">
                        <h2>奇安信</h2>
                        <p>奇安信集团（以下简称“奇安信”）是专门为政府、企业，教育、金融等机构和组织提供企业级网络安全技术、产品和服务的网络安全公司，相关产品和服务已覆盖90%以上的中央政府部门、中央企业和大型银行，已在印度尼西亚、新加坡、加拿大、中国香港等国家和地区开展了安全业务。</p>
                        <p>奇安信以“让网络更安全，让世界更美好”为使命，以“成为全球第一的网络安全公司”为愿景，不断打造网络安全颠覆性和非对称性核心技术，竞争力不断提高。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201709130622276919">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 6">
                        <h2>知道创宇</h2>
                        <p>知道创宇成立于2007年，由数位资深的安全专家创办，并拥有近百位国内一线安全人才的核心安全研究团队。知道创宇是国内较早提出云监测与云防御理念的网络安全公司之一，经过多年的积累，利用在云计算及大数据处理方面的行业先进能力，可为客户提供具备国际先进安全技术标准的可视化解决方案，提升客户网络安全监测、预警及防御能力。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=43a3921d-7479-43d0-a970-031699dcf9b6">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 7">
                        <h2>青藤云</h2>
                        <p>青藤云安全以服务器安全为核心，采用自适应安全架构，将预测、防御、监控和响应能力融为一体，构建基于主机端的安全态势感知平台，为用户提供持续的安全监控、分析和快速响应能力，帮助用户在公有云、私有云、混合云、物理机、虚拟机等多样化的业务环境下，实现安全的统一策略管理，有效预测风险，精准感知威胁，提升响应效率，全方位保护企业数字资产的安全与业务的高效开展。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201806270404701859">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 8">
                        <h2>爱加密</h2>
                        <p>爱加密是全球专业的移动信息安全综合服务提供商,专注于移动应用安全、安全大数据及物联网安全，坚持以用户需求为导向、持续不断的创新，致力于为客户提供全方位、一站式的移动安全全生命周期解决方案。爱加密的愿景是通过革新性安全方案和7X24小时全天候的专业服务保护更加智能世界的安全，打造和谐、强大、高度安全的万物互联生态环境。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201803082048317059">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 9">
                        <h2>联想企业云盘</h2>
                        <p>联想企业网盘是联想集团下联想云存储的一个企业级网盘产品，企业文件协同办公，针对企业网络文件存储和管理需求的解决方案，提供安全可靠的在线企业文件管理，致力于文件创造业务价值，提高企业办公效率。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201808032079744480">查看详情</a>
                    </div>
                    <div class="googlePack-cnt" v-show="actives == 10">
                        <h2>云智慧</h2>
                        <p>云智慧为企业级用户提供全面专业的端到端应用性能测试、应用性能监控及应用性能管理智能业务运维解决方案。旗下压测宝、监控宝和透视宝等产品，累计已为电子商务、App、在线游戏、在线旅游、保险金融、教育医疗、政企等行业的几十万用户提供前瞻性的智慧性能管理服务。</p>
                        <a href="../../citic-web-ui/product/detail?service_id=201906041663829220">查看详情</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="publicity">
            <h1>加强软件版权保护   推进使用正版软件</h1>
        </div>
    </div>

</template>

<script>
    import back0 from '../../../static/images/specialTopic/aly.png'
    import back1 from '../../../static/images/specialTopic/jsy.png'
    import back2 from '../../../static/images/specialTopic/wps.png'
    import back3 from '../../../static/images/specialTopic/yy.png'
    import back4 from '../../../static/images/specialTopic/ll.png'
    import back5 from '../../../static/images/specialTopic/qax.png'
    import back6 from '../../../static/images/specialTopic/zdcy.png'
    import back7 from '../../../static/images/specialTopic/qty.png'
    import back8 from '../../../static/images/specialTopic/ajm.png'
    import back9 from '../../../static/images/specialTopic/qyyp.png'
    import back10 from '../../../static/images/specialTopic/yzh.png'
    const productList = ['阿里云','金山云','WPS','用友','蓝凌','奇安信','知道创宇','青藤云','爱加密','联想企业云盘','云智慧']

    export default {
        data() {
            return {
                productList,
                actives:0,
                product_back:back0
            }
        },
        created() {
            console.log(1)
        },

        mounted() {
        },

        methods: {
            activeTab(item,index){
                this.actives = index

                switch (index) {
                    case 0:
                        this.product_back = back0
                        break
                    case 1:
                        this.product_back = back1
                        break
                    case 2:
                        this.product_back = back2
                        break
                    case 3:
                        this.product_back = back3
                        break
                    case 4:
                        this.product_back = back4
                        break
                    case 5:
                        this.product_back = back5
                        break
                    case 6:
                        this.product_back = back6
                        break
                    case 7:
                        this.product_back = back7
                        break
                    case 8:
                        this.product_back = back8
                        break
                    case 9:
                        this.product_back = back9
                        break
                    case 10:
                        this.product_back = back10
                        break
                    default:
                        this.product_back = back0
                        break
                }
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
