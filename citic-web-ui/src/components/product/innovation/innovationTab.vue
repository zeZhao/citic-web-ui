<template>
    <div class="innovation-tab">

        <div class="nav-tab">
            <Row class="tab">
                <i-col span="4" class="col" v-for="(item,inx) in tabListData" :key="inx"
                       @mouseenter.native="mouseenter(inx)" :class="item.isSelect==0?'':'active'">
                    <span>{{item.name}}</span>
                </i-col>
            </Row>
        </div>
        <div class="content-group">
            <div class="content content1" v-if="tabListData[0].isSelect == 1" >
                <div span="12" v-for="(item,inx) in application" :key="inx" class="innovation-tab-col" @click="todetail(item.id)">
                    <img :src="item.pictureUrl" alt="">
                    <div class="content-group-right">
                        <p class="title">{{item.applicationName}}</p>
                        <p class="company">{{item.tenantName}}</p>
                        <p class="describe">{{item.useCase}}</p>
                    </div>
                </div>
            </div>
            <div class="content" v-if="tabListData[1].isSelect == 1">
                <div span="12" v-for="(item,inx) in application" :key="inx" class="innovation-tab-col" @click="todetail(item.id)">
                    <img :src="item.pictureUrl" alt="">
                    <div class="content-group-right">
                        <p class="title">{{item.applicationName}}</p>
                        <p class="company">{{item.tenantName}}</p>
                        <p class="describe">{{item.useCase}}</p>
                    </div>
                </div>
            </div>
            <div class="content" v-if="tabListData[2].isSelect == 1">
                <div span="12" v-for="(item,inx) in application" :key="inx" class="innovation-tab-col" @click="todetail(item.id)">
                    <img :src="item.pictureUrl" alt="">
                    <div class="content-group-right">
                        <p class="title">{{item.applicationName}}</p>
                        <p class="company">{{item.tenantName}}</p>
                        <p class="describe">{{item.useCase}}</p>
                    </div>
                </div>
            </div>
            <div class="content" v-if="tabListData[3].isSelect == 1">
                <div span="12" v-for="(item,inx) in application" :key="inx" class="innovation-tab-col" @click="todetail(item.id)">
                    <img :src="item.pictureUrl" alt="">
                    <div class="content-group-right">
                        <p class="title">{{item.applicationName}}</p>
                        <p class="company">{{item.tenantName}}</p>
                        <p class="describe">{{item.useCase}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="tomore">
            <a class="btn" @click="toInnovationList()">查看更多 <Icon type="arrow-right-c"></Icon></a>
        </div>-->
    </div>
</template>

<script>
    import Api from "utils/apiEnum.js"

    export default {
        data() {
            return {
                application: [],
                applicationType: 1,
                tabListData: [
                    {name: "营销类", isSelect: 1},
                    {name: "管理类", isSelect: 0},
                    {name: "基础平台", isSelect: 0},
                    {name: "其他类", isSelect: 0},
                ],
                /*yunMenuData: yunMenuData,
                daMenuData: daMenuData,
                wyuzlMenuData: wyuzlMenuData*/
            };
        },
        mounted() {
            this.innovateApplicationType()
        },
        methods: {
            innovateApplicationType() {
                const _param = {
                    applicationType: this.applicationType
                }
                this.$get(Api.INNOVATE_INNOVATEAPPLICATIONTYPE, _param,false).then(res => {
                    this.application = res.data
                    console.log('application',this.application)
                })
            },
            mouseenter(inx) {
                this.tabListData.forEach(element => {
                    element.isSelect = 0;
                });
                this.tabListData[inx].isSelect = 1;
                this.applicationType = inx + 1;
//                console.log('applicationType',this.applicationType)
                this.innovateApplicationType()
            },
            todetail(id) {
                this.$router.push({
                    path: 'details',
                    query: {
                        id
                    }
                });
            },
            toInnovationList() {
                this.$router.push({
                    path: 'list',
                });
            },
        }
    };
</script>

<style scoped lang="scss">
@mixin btn {
    background: linear-gradient(#27d6fb,#4be7ea);
    color: #05152b;
    box-shadow: 0 0 24px #27d6fb;
}
.active {
    border-bottom: 3px solid #4be7ea;
    color: #4be7ea;
    span {
        color: #4be7ea;
    }
}
.innovation-tab {
    color: rgb(102, 102, 102);
    padding: 40px 0;
    background-color: #05152b;
    .content-group {
        width: 1200px;
        margin: auto;
    }
    .content-group .content {
        width: 100%;
    }

    .nav-tab {
        width: 540px;
        margin: 0 auto;
        p {
            font-size: 20px;
        }
        p:first-child {
            font-size: 36px;
        }
        .tab {
            text-align: center;
            font-size: 16px;
            margin: 30px auto;
        .col {
            width: 88px;
            margin-right: 46px;
            height: 50px;
            line-height: 50px;
            color: #ffffff;
            opacity: 0.8;
            cursor: pointer;
            position: relative;
        }
        span {
        }
        }
    }
    .tomore{
        text-align: center;
        margin: 50px auto;
        display:block;
        .btn{
            @include btn;
            padding:10px 24px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bolder;
            vertical-align: bottom;
        }
    }
}
.innovation-tab-col {
    text-align: left;
    padding: 20px;
    width: 560px;
    margin: 20px;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #1ebbc5;
    &:hover {
        background: linear-gradient(to right, #1ebbc5, #1791d7);
    }
    img {
        width: 200px;
        height: 130px;
        display: block;
        float: left;
    }

    .content-group-right {
        margin-left: 20px;
        float: left;
        .title {
            width: 290px;
            font-size: 18px;
            color: #ffffff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .company {
            font-size: 14px;
            color: #ffffff;
            margin: 16px auto;
        }
        .describe {
            font-size: 12px;
            color: #ffffff;
            opacity: 0.6;
            width: 290px;
            height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box !important;
        }
    }
}

</style>
