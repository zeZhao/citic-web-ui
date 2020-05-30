<style scoped lang="scss">
    .custom-product-detail {

        .navigation {
            width: 1200px;
            margin: 0 auto;
            padding: 45px 0 30px 0;

            /deep/ .ivu-breadcrumb a {
                color: #666;
            }

            .current-path {
                color: #333;
            }
        }

        .banner {
            height: 600px;
            width: 100%;
            background-position: center;
            background-size: cover;

            .content {
                width: 1200px;
                margin: 0 auto;
                padding-top: 170px;
                color: #fff;

                .title {

                    .logo {
                        height: 50px;
                        display: inline-block;
                        vertical-align: middle;
                    }

                    .name {
                        font-weight: bold;
                        font-size: 32px;
                        display: inline-block;
                        line-height: 50px;
                        vertical-align: middle;
                        margin-left: 40px;
                        position: relative;

                        &::before {
                            content: "";
                            width: 1px;
                            height: 45px;
                            background: #fff;
                            display: inline-block;
                            position: absolute;
                            left: -20px;
                        }
                    }
                }

                .desc {
                    margin: 25px 0 30px 0;
                    font-size: 14px;
                    width: 800px;
                }

                .buy {
                    width: 160px;
                    height: 45px;
                }
            }
        }

        .body {
            position: relative;

            .switch-box {
                width: 1200px;
                margin: 0 auto;
                position: absolute;
                top: -45px;
                left: 50%;
                transform: translateX(-50%);
            }

            .introduce {
                padding-top: 60px;
                background: #fafafa;
            }
        }

    }
</style>

<template>
    <div class="custom-product-detail">

        <div class="navigation">
            <Breadcrumb separator=">">
                <BreadcrumbItem :to="breadcrumb.index">首页</BreadcrumbItem>
                <BreadcrumbItem :to="breadcrumb.productCenter">产品中心</BreadcrumbItem>
                <BreadcrumbItem><span class="current-path">{{serviceMetadata.serviceName}}</span></BreadcrumbItem>
            </Breadcrumb>
        </div>

        <div class="banner" :style="{'background-image': `url('${banner}')`}">
            <div class="content">
                <div class="title">
                    <img class="logo" :src="serviceMetadata.logoPath" :alt="serviceMetadata.serviceName">
                    <span class="name">{{serviceMetadata.serviceName}}</span>
                </div>

                <p class="desc">{{serviceMetadata.summary}}</p>

                <Button class="buy" type="primary" shape="circle" size="large" @click="toBuy">立即购买</Button>
            </div>
        </div>


        <div class="body">
            <ci-switch-group class="switch-box" :switchOptions="switchOptions"
                             @switchChange="switchChange"></ci-switch-group>


            <ci-introduce class="introduce" v-show="activePanel === 0" :introduceData="introduceData"
                          @toBuy="toBuy"></ci-introduce>
        </div>
    </div>
</template>

<script>
    import banner from '../../../../static/images/product/detail/banner.jpg'

    import switchGroup from '../../../components/product/detail/switchGroup';
    import introduce from '../../../components/product/detail/introduce';

    export default {
        data() {

            const {params: {serviceAlias, supplierAlias}} = this.$route;

            return {
                banner,

                breadcrumb: {
                    index: '/citic-web-ui',
                    productCenter: '/product/center'
                },

                serviceAlias,
                supplierAlias,

                switchOptions: [
                    {
                        disabled: false,
                        name: '服务介绍'
                    }, {
                        disabled: true,
                        name: '用户评论'
                    }
                ],
                activePanel: 0,

                serviceMetadata: {
                    logoPath: '',
                    summary: '',
                    serviceName: '',
                },

                introduceData: null,
            }
        },

        created() {
            this.getDetail();
        },

        methods: {
            /**
             * 获取详情信息
             */
            getDetail() {
                this.$get(this.$API_ENUM.SUPPLIER_SERVICE_DETAIL, {
                    serviceAlias: this.serviceAlias,
                    supplierAlias: this.supplierAlias,
                }).then(res => {
                    const {data: {summary, service: {id: serviceId}}} = res;

                    //获取当前服务产品数据
                    this.getMetadata(serviceId).then(res => {
                        const {logoPath, serviceName} = res.data;

                        this.$setPageTitle(`${serviceName} - 产品详情`);

                        this.serviceMetadata = {logoPath, summary, serviceName}
                    });

                    this.introduceData = res.data;
                });
            },

            getMetadata(serviceId) {
                return this.$get(this.$API_ENUM.CITIC_SERVICE_SERVICE_ID_METADATA.Format(serviceId));
            },

            switchChange(index, item) {
                this.activePanel = index;
            },

            /**
             * 调整至购买页面
             */
            toBuy() {
                this.$router.push(`/product/buy?supplierAlias=${this.supplierAlias}&serviceAlias=${this.serviceAlias}&actionType=create`)
            },
        },

        components: {
            'ci-switch-group': switchGroup,
            'ci-introduce': introduce,
        }
    }
</script>

