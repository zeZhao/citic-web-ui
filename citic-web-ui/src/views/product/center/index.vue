<template>
    <div id="productCenterDiv">
        <ci-browser-check></ci-browser-check>
        <div class="productCenter-bg">
            <!-- 面包屑 -->
            <Breadcrumb class="bread-crumb center" separator=">">
                <BreadcrumbItem :to="baseUrl">首页</BreadcrumbItem>
                <BreadcrumbItem :to="productCenter">产品中心</BreadcrumbItem>
            </Breadcrumb>
            <Row class="search-service-con center">
                <ci-search-service :queryValAdd="serviceName" :showHotText="showHotText"
                                   @getQueryValue="replace" @cancel="reset"></ci-search-service>
            </Row>
            <Row class="supplier-list center">
                <!-- 供应商列表-->
                <Col span="2">
                <p class="supplier-title">服务商：</p>
                </Col>
                <Col span="20">
                <RadioGroup class="supplier-con" v-model="suppliersDefaultValue" type="button" v-if="isDisplay"
                            @on-change="changeSuppliers">
                    <Radio label="" value=""><span class="toggle-btn">全部</span></Radio>
                    <Radio v-for="(item, index) in suppliers" :key="item.id" :value="item.id" :label="item.id"
                           v-if="defaultSupplierNum > index">
                        <span class="toggle-btn" @click="ToggleChangeSupplier(index)">{{ item.shortname }}</span>
                    </Radio>
                </RadioGroup>
                <div v-if="isMore" style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                    <Checkbox
                        :indeterminate="indeterminate"
                        :value="checkAll"
                        @click.prevent.native="handleCheckAll">全选
                    </Checkbox>
                </div>
                <CheckboxGroup v-if="isMore" v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox v-for="item in suppliers" :key="item.id" :value="item.id" :label="item.id">{{
                        item.shortname }}
                    </Checkbox>
                </CheckboxGroup>
                </Col>
                <Col span="1">
                <a class="more-btn" type="primary" v-if="isDisplay" v-on:click="showSuppliers">更多
                    <Icon v-if="isUp" type="chevron-up"></Icon>
                    <Icon v-if="isDown" type="chevron-down"></Icon>
                </a>
                </Col>
                <!--<Col span="1">
                <Button class="more-choose" type="primary" v-on:click="showMoreSuppliers">多选
                  <Icon v-if="isPlus" type="plus-round"></Icon>
                  <Icon v-if="isMinus" type="minus-round"></Icon>
                </Button>
                </Col>-->
            </Row>

            <!-- 标签列表-->
            <Row class="supplier-list center">
                <Col span="2">
                <p class="supplier-title">服务标签：</p>
                </Col>
                <Col span="20">
                <RadioGroup class="supplier-con" v-model="serviceTagsDefaultValue" type="button"
                            @on-change="changeServiceTags">
                    <Radio label="" value=""><span class="toggle-btn">全部</span></Radio>
                    <Radio v-for="(item, index) in serviceTags" :key="item.id" :value="item.id" :label="item.id"
                           v-if="defaultTagNum > index">
                        <span class="toggle-btn" @click="ToggleChangeServiceTags(index)">{{ item.tagName }}</span>
                    </Radio>
                </RadioGroup>
                </Col>
                <Col span="1">
                <a class="more-btn" type="primary" v-on:click="showServiceTags">更多
                    <Icon v-if="isTagUp" type="chevron-up"></Icon>
                    <Icon v-if="isTagDown" type="chevron-down"></Icon>
                </a>
                </Col>
            </Row>
            <!--服务列表-->
            <!--排序列表-->
            <Row class="order-list center">
                <Col span="2">
                    <p class="title">排序：</p>
                </Col>
                <Col span="10">
                    <ci-sort-bar class="sort-bar-panel" :sortConfig="sortConfig" @changeSort="changeSort"></ci-sort-bar>
                </Col>
                <Col span="12">
                    <Page :pageSize="pageSize" :total="totalCount" :current="pageIndex" show-total
                          @on-change="changePage"
                          @on-page-size-change="changePageSize"/>
                </Col>
            </Row>
            <Row class="product-con center" v-if="services.length>0">
                <Col span="24">
                <Card class="product-card" v-for="(item, index) in services" :key="item.id"
                      @click.native="toServiceDesc(index)">
                    <Row class="product-card-con" style="">
                        <img class="product-card-img" :src="item.logoPath">
                        <h3 class="product-card-title">{{item.name}}</h3>

                        <Tooltip :content="item.summary" placement="bottom" :delay="300">
                            <p class="product-card-summary">{{item.summary}}</p>
                        </Tooltip>
                        <p class="product-card-supplierName">{{item.supplierName}}</p>
                        <Col class="product-card-rate" span="24">
                        <span>
                    产品评分:
                    </span>
                        <Rate allow-half v-model="item.productScore"></Rate>
                        </Col>
                        <Col class="product-card-tag" span="24">
                        <span>
                    所属标签:
                    </span>
                        <span class="product-card-tag-bg">{{item.tagName}}</span>
                        </Col>
                        <Col class="product-card-btn" span="24">
                        <Button type="ghost" shape="circle">查看详情
                        </Button>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>
            <div class="no-data" v-else>
                暂无数据
            </div>
            <Row class="order-list center">
                <Col span="24">
                <Page :total="totalCount" :pageSize="pageSize" :current="pageIndex" :page-size-opts="pageSizeOpts" size="small" show-total
                      show-elevator show-sizer @on-change="changePage" @on-page-size-change="changePageSize"/>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import Api from "utils/apiEnum.js"
    import Search from "com/public/searchService"
    import BaseUtil from "utils/base.js";
    import BrowserCheck from "com/public/browser-check.vue"

    export default {
        name: 'product-center',
        data() {
            return {
                viewAvailable: false,
                indeterminate: false,
                checkAll: false,
                checkAllGroup: [],
                isDisplay: true,
                isMore: false,
                isUp: false,
                isDown: true,
                isTagUp: false,
                isTagDown: true,
                isPlus: true,
                isMinus: false,
                defaultSupplierNum: 16,
                defaultTagNum: 15,
                defaultCount: 16,
                defaultTagCount: 15,
                baseUrl: '/citic-web-ui',
                productCenter: '/product/center',
                suppliers: [],
                supplierIds: [],
                suppliersDefaultValue: '',
                serviceTags: [],
                tagId: '',
                serviceTagsDefaultValue: '',
                services: [],
                pageIndex: 1,
                sortCol: "createTime",
                sortKey: "DESC",
                totalCount: 0,
                pageSize: 15,
                pageSizeOpts: [15, 30, 45, 60],
                serviceName: '',
                showHotText: true,

                sortConfig: [
                    {
                        label: "上架时间",
                        key: "createTime",
                        active: true,
                        asc: false,
                    }, {
                        label: "名称",
                        key: "name",
                        active: false,
                        asc: true,
                    }
                ]
            }
        },
        components: {
            'ci-browser-check': BrowserCheck,
            "ci-search-service": Search
        },
        created() {
            BaseUtil.bfd();
        },
        mounted() {
            // console.log("mounted")
            // console.log(this.$route.params);
            // this.serviceName = this.$route.params.selected;
            // debugger
            // console.log(this.$route.query);
            this.serviceName = this.$route.query.selected;
            this.getSuppliers()
            this.getServiceTags()
            this.getServices()
            //改变头部菜单
            this.$store.commit("setHeadMiddleData", {data: 1})
        },
        watch: {
            $route(to, from) {
                // console.log(this.$route.query.selected)
                this.pageIndex = 1
                this.serviceName = this.$route.query.selected;
                this.getSuppliers()
                this.getServiceTags()
                this.getServices()
            }
        },
        methods: {
            /*服务商和服务标签反选*/
            ToggleChangeSupplier(index) {
                if (this.suppliers[index].id == this.suppliersDefaultValue) {
                    this.suppliersDefaultValue = '';
                    this.supplierIds = [];
                    this.getServices();
                }
            },
            ToggleChangeServiceTags(index) {
                if (this.serviceTags[index].id == this.serviceTagsDefaultValue) {
                    this.serviceTagsDefaultValue = '';
                    this.tagId = [];
                    this.getServices();
                }
            },
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.suppliers.forEach((item) => {
                        this.checkAllGroup.push(item.id)
                    })
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange(data) {
                if (data.length === this.suppliers.length) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            toServiceDesc(index) {
                //服务详情页面
                const jumpType = this.services[index].jumpType;
                const adapterServiceId = this.services[index].adapterServiceId;
                const serviceAlias = this.services[index].serviceAlias;
                const supplierAlias = this.services[index].supplierAlias;

                this.jumpToProductDetail({
                    jumpType,
                    adapterServiceId,
                    serviceAlias,
                    supplierAlias,
                })

                /*if (serviceId) {
                    // 在线认证 citicCertification 25059951495872559
                    //应用分发 applicationDistribution 201705311533857755
                    if("25059951495872559" == serviceId){
                        const toUrl = Api.JUMP_TYPE["citicCertification"];
                        window.open(toUrl, '_blank')
                    } else if ("201705311533857755" == serviceId) {
                        const toUrl = Api.JUMP_TYPE["applicationDistribution"];
                        window.open(toUrl, '_blank')
                    } else if("reconServiceDetails" == key){
                        const toUrl = Api.JUMP_TYPE[key] + "?supplierAlias=" + supplierAliasStr + "&serviceAlias=" + serviceAliasStr;
                        window.open(toUrl, '_blank')
                    } else if("customServiceDetails" === key){
                        window.open(Api.JUMP_TYPE[key].Format(serviceAliasStr, supplierAliasStr), '_blank')
                    } else {
                        const toUrl = Api.JUMP_TYPE[key] + serviceId;
                        window.open(toUrl, '_blank')
                    }
                } else {
                    if("reconServiceDetails" == key){
                        const toUrl = Api.JUMP_TYPE[key] + "?supplierAlias=" + supplierAliasStr + "&serviceAlias=" + serviceAliasStr;
                        window.open(toUrl, '_blank')
                    }else if("customServiceDetails" === key){
                        window.open(Api.JUMP_TYPE[key].Format(serviceAliasStr, supplierAliasStr), '_blank')
                    } else {
                        this.$Message.warning('暂无详情，请从首页服务目录访问购买!');
                    }
                }*/
            },
            changeSuppliers(_id) {
                this.pageIndex = 1
                this.supplierIds = []
                this.supplierIds.push(_id)
                this.getServices()
            },
            changeServiceTags(_id) {
                 this.pageIndex = 1
                this.tagId = _id
                this.getServices()
            },
            changePage(_curPage) {
                this.pageIndex = _curPage;
                this.getServices();
            },
            changePageSize(_pageSize) {
                this.pageSize = _pageSize;
                this.getServices();
            },
            showServiceTags() {
                if (this.defaultTagNum <= this.defaultCount) {
                    this.defaultTagNum = this.suppliers.length
                    this.isTagUp = true
                    this.isTagDown = false
                } else {
                    this.defaultTagNum = this.defaultTagCount
                    this.isTagUp = false
                    this.isTagDown = true
                }
            },
            showMoreSuppliers() {
                if (this.isMore) {
                    this.isMore = false
                    this.isDisplay = true
                    this.isPlus = true
                    this.isMinus = false
                } else {
                    this.isMore = true
                    this.isDisplay = false
                    this.isPlus = false
                    this.isMinus = true
                }
            },
            showSuppliers() {
                if (this.defaultSupplierNum <= this.defaultCount) {
                    this.defaultSupplierNum = this.suppliers.length
                    this.isUp = true
                    this.isDown = false
                } else {
                    this.defaultSupplierNum = this.defaultCount
                    this.isUp = false
                    this.isDown = true
                }
            },
            getSuppliers() {
                this.$get(Api.GET_SUPPLIERS,{},false).then(res => {
                    this.suppliers = res.data
                })
            },
            getServiceTags() {
                this.$get(Api.GET_TAGS,{},false).then(res => {
                    this.serviceTags = res.data
                })
            },
            getServices(serviceName) {
                // console.log(serviceName);
                if (serviceName) {
                    this.serviceName = serviceName
                }
                const _param = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    supplierIds: this.supplierIds.toString(),
                    tagId: this.tagId,
                    serviceName: this.serviceName,
                    sortCol: this.sortCol,
                    sortKey: this.sortKey,
                }
                this.$get(Api.GET_SERVICES, _param,false).then(res => {
                    this.services = res.data.data
                    this.totalCount = res.data.totalCount
                })
            },
            replace(data) {
                // console.log(this)
                // console.log(data)
                this.$router.replace({path: "./center", query: {selected: data}})
            },
            reset() {
                this.serviceName = ''
                 this.$router.replace({path: "./center"})
                this.getServices()
            },

            //排序规则改变
            changeSort(sortRule) {
                for (let item of sortRule) {
                    const {
                        key,
                        active,
                        asc
                    } = item;

                    if (active) {
                        this.sortCol = key;
                        this.sortKey = asc ? 'ASC' : 'DESC';
                        break;
                    }
                }

                this.getServices();
            }
        }
    }
</script>

<style lang="scss">
    $primercolor: #d50a1d;
    .productCenter-bg {
        background: #f7f7f7;
        padding-bottom: 10px;
        .search-service-con {
            background: #fff;
            padding: 20px 0;
        }
        .no-data{
            width: 100%;
            text-align: center;
            font-size: 14px;
            margin: 20px auto;
            min-height: 100px;
            line-height: 100px;
            background: #fff;
        }
        .center {
            width: 1200px;
            margin: 0 auto;
        }
        .bread-crumb {
            font-size: 14px;
            padding: 16px 0;

        }
        .ivu-radio-wrapper-checked {
            border-color: $primercolor !important;
            color: $primercolor !important;
            box-shadow: -1px 0 0 0 $primercolor !important;
        }
        .ivu-radio-wrapper:hover {
            color: $primercolor !important;
        }
        .ivu-radio-focus:after, .ivu-radio-focus:before {
            box-shadow: -1px 0 0 0 #fff !important;
            background: #fff !important;
        }
        /*.ivu-radio-group-button .ivu-radio-wrapper:after, .ivu-radio-group-button .ivu-radio-wrapper:before{
            border-color: #ccc!important;
            color: #ccc!important;
            box-shadow: -1px 0 0 0 #ccc!important;
        }*/
        .supplier-list {
            padding: 10px 20px;
            background: #fff;
            p.supplier-title {
                display: inline-block;
                float: left;
                line-height: 30px;
                padding-right: 20px;
                font-size: 14px;
            }
            .supplier-con {
                display: inline-block;
                float: left;
                padding-right: 10px;
                overflow-y: auto;
                max-height: 188px;
                margin-right: 20px;
                .ivu-radio-wrapper {
                    margin: 0px 11px 6px;
                    font-size: 14px;
                    border-radius: 4px;
                    padding: 0;
                    span.ivu-radio {
                        float: left;
                    }
                    .toggle-btn {
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                        float: left;
                        padding: 0 15px;
                    }
                }
            }
            .ivu-checkbox-wrapper {
                line-height: 30px;
                margin: 0px 10px 6px;
                font-size: 14px;
            }
            .more-btn {
                text-align: left;
                color: $primercolor;
                line-height: 30px;
            }
            .more-choose {
                color: $primercolor;
                background: #fff;
                border: 1px $primercolor solid;
                padding-left: 4px;
                padding-right: 4px;
            }
        }
        .tag-list {
            padding: 10px 20px;
            background: #fff;
            p.tag-title {
                display: inline-block;
                float: left;
                line-height: 30px;
                padding-right: 20px;
                font-size: 14px;
            }
            .tag-con {
                display: inline-block;
                float: left;
                .ivu-radio-wrapper {
                    margin: 0px 8px 6px;
                    border-radius: 4px;
                }
            }
            .more-btn {
                text-align: left;
                color: $primercolor;
                line-height: 30px;
            }
        }
        .order-list {
            padding: 10px 20px;
            background: #fff;
            margin-top: 10px;

            .title {
                margin: 10px 0 0 0;
                line-height: 30px;
                padding-right: 20px;
                font-size: 14px;
            }

            .sort-bar-panel {
                margin: 15px 0 0 15px;
            }
        }
        .product-con {
            padding: 10px 20px;
            background: #fff;
            margin-top: 10px;
            .product-card {
                float: left;
                width: 30%;
                margin: 10px 18px;
                height: 460px;
                cursor: pointer;
                &:hover {
                    border: 1px solid $primercolor;
                    background: #fefefe;
                    box-shadow: 0 1px 6px #fefefe;
                    .ivu-btn-ghost {
                        border: 1px solid $primercolor;
                        background: #fefefe;
                        color: $primercolor;
                    }
                }
                .product-card-con {
                    text-align: center;
                    img.product-card-img {
                        width: 100px;
                        height: 100px;
                        margin: 20px;
                    }
                    .product-card-title {
                        font-size: 16px;
                        padding: 10px 0;
                    }
                    .product-card-summary {
                        display: -webkit-box !important;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        text-align: left;
                        margin: 10px 0;
                        height: 40px;
                    }
                    .product-card-supplierName {
                        text-align: left;
                    }
                    .product-card-rate {
                        margin: 10px 0;
                        text-align: left;
                    }
                    .product-card-tag {
                        text-align: left;
                        .product-card-tag-bg {
                            font-size: 12px;
                            padding: 4px;
                            background: #fee5e8;
                        }
                    }
                    .product-card-btn {
                        margin-top: 20px;
                    }
                    .product-card-page {
                        text-align: center;
                    }
                }
            }
        }
        .ivu-page {
            padding: 8px;
            text-align: right;
        }
        .ivu-tooltip-inner{
            max-width: 345px !important;
            word-wrap:break-word;
            white-space: inherit;
        }
    }
</style>

