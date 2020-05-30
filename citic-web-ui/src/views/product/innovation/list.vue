<template>
    <div id="productAppDiv">
        <div class="product-app-search">
            <div class="center">
                <!-- 返回 -->
                <a class="back" @click="routerback()"><Icon type="chevron-left"></Icon> 返回</a>

                <Row class="supplier-list center">
                    <!-- 项目阶段-->
                    <Col span="2">
                        <p class="supplier-title">项目阶段：</p>
                    </Col>
                    <Col span="20">
                        <RadioGroup class="supplier-con" v-model="stagesDefaultValue" type="button" v-if="isDisplay"
                                    @on-change="changeProjectStage">
                            <Radio label="" value="">全部</Radio>
                            <Radio v-for="(item, index) in stages" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
                        </RadioGroup>
                    </Col>
                </Row>

                <Row class="supplier-list center">
                    <!-- 应用形式-->
                    <Col span="2">
                    <p class="supplier-title">应用形式：</p>
                    </Col>
                    <Col span="20">
                    <RadioGroup class="supplier-con" v-model="formsDefaultValue" type="button" v-if="isDisplay"
                                @on-change="changeAppForm">
                        <Radio label="" value="">全部</Radio>
                        <Radio v-for="(item, index) in forms" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
                    </RadioGroup>
                    </Col>

                </Row>

                <Row class="supplier-list center">
                    <!-- 应用类型-->
                    <Col span="2">
                    <p class="supplier-title">应用类型：</p>
                    </Col>
                    <Col span="20">
                    <RadioGroup class="supplier-con" v-model="typesDefaultValue" type="button" v-if="isDisplay"
                                @on-change="changeAppType">
                        <Radio label="" value="">全部</Radio>
                        <Radio v-for="(item, index) in types" :value="item.value" :label="item.value" :key="index">{{item.label}}</Radio>
                    </RadioGroup>
                    </Col>

                </Row>

                <!-- 开发者列表-->
                <Row class="supplier-list center">
                    <Col span="2">
                    <p class="supplier-title">开发者：</p>
                    </Col>
                    <Col span="20">
                    <RadioGroup class="supplier-con" v-model="developerOptionDefaultValue" type="button" @on-change="changeSuppliers">
                        <Radio label="" value="">全部</Radio>
                        <Radio v-for="(item, index) in developerOptions" :key="item.tenantId" :value="item.tenantId" :label="item.tenantId"
                               v-if="defaultDeveloperOptionNum > index">{{ item.tenantName }}
                        </Radio>
                    </RadioGroup>
                    </Col>
                    <Col span="1">
                    <a class="more-btn" type="primary" v-on:click="showALLDeveloperOptions">更多
                        <Icon v-if="isTagUp" type="chevron-up"></Icon>
                        <Icon v-if="isTagDown" type="chevron-down"></Icon>
                    </a>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="product-app">
            <div class="center">
                <Row class="product-con center" v-if="services.length>0">
                    <Col span="24">
                    <Card class="product-card" v-for="(item, index) in services" :key="item.id">
                        <Row class="product-card-con" style="">
                            <img class="product-card-img" :src="item.pictureUrl">
                            <h3 :title="item.applicationName" class="product-card-title">{{item.applicationName}}</h3>
                            <p class="product-card-summary">{{item.useCase}}</p>
                            <p class="product-card-supplierName">应用形式： {{item.applicationMode}}</p>

                            <Col class="product-card-btn" span="24">
                                <a class="btn"  @click="todetail(item.id)">查看详情</a>
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
                    <Page :total="totalElements" :pageSize="pageSize" :current="pageIndex" size="small" show-total
                          @on-change="changePage"/>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import Api from "utils/apiEnum.js"
    import Search from "com/public/searchService"
    import APPCONST from 'static/json/innovation/app'

    export default {

        name: 'product-center',
        data() {
            return {
                isMore: false,
                isDisplay: true,
                isTagDown: true,
                isTagUp: false,
                stagesDefaultValue: '',
                formsDefaultValue: '',
                typesDefaultValue: '',
                stages: APPCONST.stages, //项目阶段
                forms: APPCONST.forms, //应用形式
                types: APPCONST.types, //应用类型
                developerOptionDefaultValue:'',
                developerOptions: [],
                defaultDeveloperOptionNum: 10,
                defaultCount: 10,
                pageIndex: 1,
                totalElements: 0,
                pageSize: 6,
                pageSizeOpts: [6],
                defaultTagNum: 15,
                defaultTagCount: 15,
                services: '',
                projectStage: '',
                applicationMode: '',
                applicationType: '',
                tenantId: '',
            }
        },
        mounted() {
            this.serviceName = this.$route.query.selected;
            this.getDeveloperOptions()
            this.getinnovateMarket()
            //改变头部菜单
            this.$store.commit("setHeadMiddleData", {data: 1})
            window.scrollTo(0,0)
        },
        methods: {
            routerback() {
                this.$router.back(-1)
            },
            getDeveloperOptions() {
                this.$get(Api.INNOVATE_INNOVATETENANTINFO,{},false).then(res => {
                    this.developerOptions = res.data
                    console.log('developerOptions',this.developerOptions)
                })
            },
            //改变项目阶段
            changeProjectStage(index){
                this.projectStage = index
                this.changePage(1)
                this.getinnovateMarket()
            },
            //改变应用形式
            changeAppType(index) {
                this.applicationType = index
                this.changePage(1)
                this.getinnovateMarket()
            },
            //改变应用类型
            changeAppForm(index) {
                this.applicationMode = index
                this.changePage(1)
                this.getinnovateMarket()
            },
            //改变应用类型
            changeSuppliers(_id) {
                this.tenantId = _id
                this.changePage(1)
                this.getinnovateMarket()
            },
            getinnovateMarket () {
                const _param = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    projectStage: this.projectStage,
                    applicationMode: this.applicationMode,
                    applicationType: this.applicationType,
                    tenantId: this.tenantId,
                }
                this.$get(Api.INNOVATE_INNOVATEMARKET, _param,false).then(res => {
                    this.services = res.data.content
                    this.totalElements = res.data.totalElements
                    const el = this.services
                    for (let index = 0; index < el.length; index++) {
                        el[index].applicationMode = this.ModeToText(el[index].applicationMode);
                        this.serverDesc = el
                    }
//                    console.log('servicesel',this.serverDesc);
                })
            },
            showALLDeveloperOptions() {
                if (this.defaultDeveloperOptionNum <= this.defaultCount) {
                    this.defaultDeveloperOptionNum = this.developerOptions.length
                    this.isTagUp = true
                    this.isTagDown = false
                } else {
                    this.defaultDeveloperOptionNum = this.defaultCount
                    this.isTagUp = false
                    this.isTagDown = true
                }
            },
            changePage(_curPage) {
                this.pageIndex = _curPage;
                this.getinnovateMarket();
            },
            todetail(id) {
                this.$router.push({
                    path: 'details',
                    query: {
                        id
                    }
                });
            },
            ModeToText(val) {
                switch (Number(val)) {
                    case 1:
                        return "APP";
                        break;
                    case 2:
                        return "微信服务号";
                        break;
                    case 3:
                        return "微信小程序";
                        break;
                    case 4:
                        return "WEB应用";
                        break;
                    case 5:
                        return "其他";
                        break;
                    default:
                        break;
                }
            },
        }
    }
</script>

<style lang="scss">
    @mixin btn {
        background: linear-gradient(#27d6fb,#4be7ea);
        color: #05152b;
        box-shadow: 0 0 10px #27d6fb;
    }

    $primercolor: #d50a1d;
    .product-app-search {
        width: 100%;
        padding-bottom:40px;
        background: #0d1c32 url(~static/images/innovation/innovation-step-bg.png) center top no-repeat;
        .center {
            width: 1200px;
            overflow: hidden;
            margin: 0 auto;
        }
        .back{
            font-size: 14px;
            color: #757980;
            margin: 20px 0;
            display: block;
            overflow: hidden;
            width: 100%;
            &:hover{
                 color: #2d8cf0;
             }
        }
        .search-service-con {
            padding: 20px 0;
        }
        .bread-crumb {
            font-size: 14px;
            padding: 16px 0;
        }
        .ivu-radio-wrapper-checked {
            @include btn;
            color: #000;
        }
        .ivu-radio-wrapper:hover {
            @include btn;
            color: #000;
        }
        .supplier-list {
            padding: 10px 20px;
            p.supplier-title {
                display: inline-block;
                float: left;
                line-height: 30px;
                padding-right: 20px;
                font-size: 14px;
                color: #ffffff;
            }
            .supplier-con {
                display: inline-block;
                float: left;
                padding-right: 10px;
                overflow-y: auto;
                max-height: 188px;
                margin-right: 20px;
                .ivu-radio-wrapper {
                    margin: 0px 11px 10px;
                    font-size: 14px;
                    border-radius: 4px;
                    background-color: rgba(256, 256, 256, 0);
                    color: #ffffff;
                    }
                }
            .ivu-checkbox-wrapper {
                line-height: 30px;
                margin: 0px 10px 6px;
                font-size: 14px;
            }
            .more-btn {
                text-align: left;
                color: #ffffff;
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
                    background-color: rgba(256, 256, 256, 0);
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
            margin-top: 10px;
        }
    }
    .ivu-page {
        padding: 8px;
        text-align: right;
    }
    .product-app{
        background-color: #f7f8fa;
        overflow:hidden;
        .no-data{
            width: 100%;
            text-align: center;
            font-size: 14px;
            margin: 20px auto;
            min-height: 100px;
            line-height: 100px;
            background-color: #ffffff;
        }
        .center {
             width: 1200px;
             overflow: hidden;
             margin: 0 auto;
         }
        .product-con {
            padding: 40px 0px;
            .product-card {
                float: left;
                width: 30%;
                margin: 10px 0px;
                margin-right: 30px;
                cursor: pointer;
                margin-left: 10px;
                border: none;
                .ivu-card-body {
                    padding: 30px;
                }
                &:hover {
                    background: #fefefe;
                    box-shadow: 0 0 24px #a5edfc;
                    .btn{
                        background: linear-gradient(#27d6fb,#4be7ea);
                        color: #ffffff;
                        box-shadow: 0 0 24px #27d6fb;
                    }
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
                }
                .product-card-title {
                    font-size: 16px;
                    padding: 20px 0;
                    color: #000;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .product-card-summary {
                    display: -webkit-box !important;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    text-align: left;
                    margin: 10px 0;
                    height: 60px;
                    color: #8f9094;
                }
                .product-card-supplierName {
                    text-align: left;
                    color: #000000;
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
                    text-align:center;
                    .btn{
                        display: block;
                        margin: 0 auto;
                        border:1px solid #d8d8d8;
                        padding:15px;
                        color: #000;
                        &:hover{
                             background: linear-gradient(#27d6fb,#4be7ea);
                             color: #ffffff;
                             box-shadow: 0 0 24px #27d6fb;
                         }
                    }

                }
                .product-card-page {
                    text-align: center;
                }
            }
        }
    }
}
    #productAppDiv{
        .ivu-radio-wrapper-checked {
            @include btn;
            color: #000000;
        }
    }
    .product-app .product-con .product-card:hover .product-card-con .product-card-btn .btn{
        background: linear-gradient(#27d6fb,#4be7ea);
        color: #ffffff;
        box-shadow: 0 0 24px #27d6fb;
    }

</style>

