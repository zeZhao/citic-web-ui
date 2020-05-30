<style lang="scss">
    @import '../../../assets/scss/service-desc.scss';

    .serviceDescWrapper {

        img {
            max-width: 98%;
        }
    }
</style>

<template>
    <div class="product-detail">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="breadcrumb.index">首页</BreadcrumbItem>
            <BreadcrumbItem :to="breadcrumb.productCenter">产品中心</BreadcrumbItem>
            <BreadcrumbItem>{{serviceDesc.serviceName}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="product-intro-wrapper">
            <div class="product-intro-inner">
                <h2>{{serviceDesc.serviceName}}</h2>
                <H2 id="serviceAttach" v-if="serviceAttach != ''" v-html="serviceAttach" style="font-size: 1.5em;"></H2>
                <p class="product-intro">{{serviceDesc.longSummary}}</p>
                <Button class="buy-btn" v-if="showBuy === true" @click="toBuy">立即购买</Button>
            </div>
        </div>
        <div class="product-desc">
            <div class="product-desc-inner">
                <Tabs type="card">
                    <TabPane label="服务介绍" class="serviceDescTab">
                        <div class="serviceDescWrapper" id="serviceDescWrapper">
                            <div class="markdown-desc" v-if="showMarkdown" v-html="serviceDesc_html"
                                 ref="serviceDesc"></div>
                            <div class="default-desc" v-else-if="!showMarkdown" v-html="defaultDesc"
                                 ref="serviceDesc"></div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import UrlUtil from 'utils/url';
    import Config from 'conf';
    import Desc from "static/json/product/desc";
    import baseUtil from 'utils/base.js'
    import marked from 'marked'
    import Api from "utils/apiEnum.js"
    export default {
        data() {
            return {
                breadcrumb: {
                    index: '/citic-web-ui',
                    productCenter: '/product/center'
                },
                defaultDesc: Desc.defaultDesc,
                serviceDesc: {},  //详情对象
                showMarkdown: true,
                supplierAlias: UrlUtil.getParame("supplierAlias"),
                serviceAlias: UrlUtil.getParame("serviceAlias"),
                serviceId: UrlUtil.getParame("service_id"),
                actionType: 'create',
                // 是否显示购买按钮
                showBuy: true,
                // 特殊处理的服务提示
                serviceAttach: '',
                serviceDesc_html: '',  //详情描述（转换为html标签的）
            }
        },
        mounted() {
            this.specialService()
            this.getDesc();
        },
        methods: {
            /**
             * 需要特别处理的服务
             */
            specialService() {
                // 区块链没有详情信息，需要直接跳转到购买页面
                if (this.serviceId === 'a28ccb8a-a86c-4ae6-8f3a-634a642d5f84') {
                    let url = '/views/blockchain/blockchain_new.jsp'
                    window.location.href = url
                    return
                } else if (this.serviceId === 'e1e5b534-3edf-4b4e-a0f0-76b5d413143a') {
                    window.location.href = '/views/blockchain/blockchain_insert.jsp'
                    return
                }
                // 兼容之前版本
                if (this.serviceId === '369fb62a-6341-4581-8ed0-b355f7c3093a' || this.serviceId === '25ac1eec-28d9-4978-bbfb-cb8ae68969b9') {
                    this.showBuy = false
                    this.serviceAttach = '<font color="blue">(即将上线，敬请期待)</blue>'
                }
                if (this.serviceId === '5959f3f5bf213c5770d9a32b' || this.serviceId === '5959f3f5bf213c5770d9a32e' ||
                    this.serviceId === '7f87d54a35f811e78672705a' || this.serviceId === '5959f3f5bf213c5770d9a32c') {
                    this.serviceAttach = '<font color="blue">（购买前需线下申请VPC资源）</blue>'
                }
            },
            /**
             * 获取详情信息
             */
            getDesc() {
                let url = "";
                if(this.serviceId){
                    url = `srvmgt/service/detail?serviceId=${this.serviceId}`;
                } else {
                    url  = `citic/service/detailInfo?supplierAlias=${this.supplierAlias}&serviceAlias=${this.serviceAlias}`;

                }
                this.$get(url).then(res => {
                    this.serviceDesc = res.data;
                    document.title = this.serviceDesc.serviceName + '-产品详情';

                    if (this.serviceDesc && this.serviceDesc.markDown) {
                        this.showMarkdown = true;
                        this.serviceDesc_html = marked(this.serviceDesc.markDown);
                    } else {
                        this.showMarkdown = false;
                    }
                });
            },

            /**
             * 给某个dom节点的li节点下的a和img标签添加样式
             * @targetTag 要添加样式是的目标tag
             * @clazzName 节点的样式名称
             */
            // handleDomStyle: function (targetTag, clazzName) {
            //   const targetId = 'serviceDescWrapper';
            //   const tagList = this.$refs.serviceDesc.getElementsByTagName(targetTag)
            //   for (let i = 0; i < tagList.length; i++) {
            //     let dom = tagList[i]
            //     while (dom.id !== targetId) {
            //       dom = dom.parentNode
            //       if (dom.tagName.toLowerCase() === 'li') {
            //         dom.className = clazzName
            //         if (targetTag === 'a') {
            //           tagList[i].className = 'video'
            //         }
            //         break
            //       }
            //     }
            //   }
            // },
            /**
             * 调整至购买页面
             */
            toBuy: async function () {
                //注意此jumpType是跳转购买页专用jumpType
                let { adapterServiceId,  jumpType} = this.serviceDesc
                // http://127.0.0.1:8080/citic-web-ui/product/newBuy?service_id=5785e232b9aa1e3769039c19
                if(!this.serviceId){
                    this.serviceId = adapterServiceId
                }

                if (!sessionStorage.getItem("citic-token")) {
                    baseUtil.doLogin()
                    return
                }else if(jumpType == "newBuy"){
                    this.$router.push(`/product/newBuy?service_id=${this.serviceId}&adapterServiceId=${adapterServiceId}`)
                   return
                }else if(jumpType == "halfNew"){
                    this.$router.push(`/product/buy?supplierAlias=${this.supplierAlias}&serviceAlias=${this.serviceAlias}&actionType=create`)
                    return 
                }else{
                    if(this.serviceDesc.serviceType == 1){
                        window.location.href="/views/cloud/buy.jsp?serviceId="+this.serviceId+"&serviceTypeId="+this.serviceDesc.serviceType+"&yunType=null"
                        return
                    }else{
                        let res = await this.canBuy()
                        if(res.data.result === "0"){
                            window.location.href="/views/cloud/buy.jsp?serviceId="+this.serviceId+"&serviceTypeId="+this.serviceDesc.serviceType+"&yunType=null"
                        } else {
                            this.$Message.error(res.data.msg)
                        }   
                    }
                }

            },
            canBuy: async function () {
                let url = Api.SERVICE_CAN_BUY + "?serviceId="+this.serviceId+"&serviceType="+this.serviceDesc.serviceType;
                let res = await this.$get(url)
                // console.log('--',res)
                return res
            }
            /**
             * 根据产品别名、供应商别名获取产品id
             */
            /* _getProductIdsByAlias() {
               const _url = `citic/condition/ids/${this.supplierAlias}?serviceAlias=${this.serviceAlias}&actionType=${this.actionType}`;
               this.$get(_url).then(res => {
                 const {supplierId, actionId, serviceId} = res;
                 const _buyUrl = location.origin + `/pages/ecs.html?supplierId=${supplierId}&actionId=${actionId}&service_id=${serviceId}&type=add`;
                 return baseUtil.goCompatible(_buyUrl)
               });
             }*/
        }
    }
</script>
