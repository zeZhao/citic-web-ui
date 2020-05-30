<style lang="scss" scoped>
    .certification {
        width: 100%;
        color: #666;
        font-size: 14px;
        .certificate {
            max-width: 1200px;
            margin: 0 auto;
        }
        .introduction {
            width: 100%;
            background: #F7F7F7;
            .introduction-cnt {
                padding: 46px 0 60px;
                p {
                    margin-bottom: 16px;
                    line-height: 24px;
                }
            }
        }
        .certificationBody {
            .certificationBody-cnt {
                padding: 46px 0 60px;
            }
            .companyList-cnt {
                li {
                    float: left;
                    width: 33.33%;
                    padding-left: 20px;
                    line-height: 26px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    ::before {
                        padding-right: 6px;
                        content: '•';
                        color: #CE1414;
                        font-size: 20px;
                    }
                    a {
                        color: #666;
                    }
                }
            }
        }
        .title {
            margin-bottom: 30px;
            text-align: center;
            font: normal 26px/87px "Microsoft Yahei";
            background: url('../../../static/images/certification/bg_title.png') no-repeat center 0;
        }
        .clearfloat:after {
            display: block;
            clear: both;
            content: "";
            visibility: hidden;
            height: 0
        }
        .clearfloat {
            zoom: 1
        }
    }

    @media screen and (max-width: 1024px) {
        .certification{font-size: 22px;}
        .certificate{max-width: 800px !important;}
        .introduction-cnt{padding: 46px 20px 60px !important;}
        .introduction-cnt p{line-height: 30px!important;}
    }
    @media screen and (max-width: 768px) {
        .certification{font-size: 18px;}
        .title{font-size: 24px !important;}
        .introduction-cnt{padding: 46px 20px 60px !important;}
        .companyList-txt{width: 50% !important;padding-left: 70px;}
    }
    @media screen and (max-width: 480px) {
        .certification{font-size: 16px;}
        .title{font-size: 22px !important;}
        .companyList-cnt li{width: 50% !important;padding-left: 20px;}
    }

</style>

<template>
    <div class="certification">
        <div class="certificate">
            <ci-certificate-image :param="param" style="width: 80%;margin: 60px auto 70px"/>
        </div>
        <div class="introduction">
            <div class="introduction-cnt certificate">
                <h5 class="title">在线认证简介</h5>
                <p>
                    中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，为授权使用中信品牌的子公司门户网站、官方微博、官方微信公众号等互联网渠道应用开展数字化品牌认证服务。通过认证的子公司互联网渠道将统一在集团官网公示，便于社会公众查证识别。</p>
                <p>通过中信品牌认证的互联网渠道应用将授予中信集团品牌认证证书，增强中信品牌管理规范性并有效提升集团所属机构各互联网渠道的品牌影响和价值。</p>
                <p>
                    为确保品牌使用的严肃性和规范化，中信集团品牌管理委员会办公室定期对已通过认证的互联网渠道应用进行检核，不符合中信品牌使用要求的将即时停用或收回其数字化认证证书。</p>
           </div>
        </div>
        <div class="certificationBody">
            <div class="certificationBody-cnt certificate">
                <h5 class="title">已加入认证机构</h5>
                <div class="companyList">
                    <ul class="companyList-cnt clearfloat">
                        <li class="companyList-txt" v-for="(item,index) in companyList" :key="index">
                            <a href="javascript:void(0);">{{item.tenantName}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import certificateImage from "../../components/console/cert/certificate-image"
    export default {
        data() {
            return {
                code:this.$route.query.code,
                param: {
                    company: '',
                    application: '',
                    domain: '',
                    content: '已经通过中信品牌认证。中信品牌认证是中信集团品牌管理委员会办公室通过中信云平台品牌在线认证系统，为授权使用中信品牌的子公司门户网站等互联网渠道应用开展数字化品牌认证服务。通过认证的子公司互联网渠道将统一在集团官网公示，便于社会公众查证识别。',
                    authCode: '',
                    effectiveDate: '',
                    authDate: '',
                    organ: '中信集团品牌管理委员会办公室',
                    sealDate: '',
                },
                companyList: []
            }
        },
        beforeCreate(){
            document.getElementsByTagName('body')[0].style = 'min-width: auto !important'
            document.getElementsByTagName('html')[0].style = 'min-width: auto !important'

            // 适配移动端展示
            const meta = document.createElement("meta");
            meta.name = "viewport";
            meta.content = "width=device-width,initial-scale=1.0";
            const head = document.getElementsByTagName("head");
            head[0].append(meta);
        },

        created() {

        },

        mounted() {
            this.getData()
        },

        methods: {
            getData(){
                this.$get(`${this.$API_ENUM.CITIC_AUTH_CERTIFICATION}/${this.code}`).then(res=>{

                    const {authType, certificateCode, createTime,effectiveTime,tenantName,website} = res.data

                    let param = Object.assign({}, this.param);

                    param.company = tenantName
                    param.authCode = certificateCode
                    param.effectiveDate = `${createTime}至${effectiveTime}`
                    param.authDate = createTime

                    param.sealDate = `${createTime.split("-")[0]}-${effectiveTime.split("-")[0]}`;

                    if(authType){
                        switch (authType){
                            case 'website':
                                param.domain = website;
                                param.application = '门户网站';
                                break;
                            case 'microblog':
                                param.domain = '';
                                param.application = '微博认证';
                                break;
                            case 'wechat':
                                param.domain = '';
                                param.application = '微信认证';
                                break;
                            case 'app':
                                param.domain = '';
                                param.application = 'APP认证';
                                break
                        }
                    }
                    this.param = param;
                    this.authedTenants(authType)
                })
            },
            authedTenants(authType){
                this.$get(this.$API_ENUM.CITIC_AUTH_AUTHED_TENANTS,{authType:authType}).then(res=>{
                    if(resOk(res)){
                        this.companyList = res.data
                    }
                })
            }
        },

        computed: {},

        components: {
            "ci-certificate-image": certificateImage,
        },
    }
</script>
