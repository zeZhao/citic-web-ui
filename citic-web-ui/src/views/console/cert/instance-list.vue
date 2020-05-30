<style lang="scss" scoped>
    /*.cert-instance-list {
        margin-top: 20px;
    }*/
    .no_data{
        margin: 10px auto;
        text-align: center;
    }
    .header-page{
        margin-bottom: 15px;
    }
    .ivu-page{
        text-align: right;
    }
</style>
<template>
    <div class="cert-instance-list">
        <Card class="main" :bordered="false" dis-hover>
            <p slot="title">
                在线认证-实例列表
            </p>
            <Row class="table-wrapper">

                <ci-search-panel :add="false" :search="false" :reset="false" @search="_mxDoSearch" :searchFormConfig="searchFormConfig"></ci-search-panel>

                <Page class-name="header-page" :total="total":pageSize="pageSize" :current="pageIndex" show-total show-elevator
                      @on-page-size-change="_mxChangePageSize" @on-change="_mxChangePage"/>

                <Table :columns="columns" :data="listData" :loading="loading" v-if="listData.length > 0"></Table>

                <Col span="24" class-name="no_data" v-else>
                    <img src="../../../../static/images/public/empty-list.png" alt="">
                    <p style="color: #A4A6AC">暂无数据</p>
                </Col>

                <Page class-name="footer-page" :total="total" :pageSize="pageSize"
                      :current="pageIndex" show-total show-sizer show-elevator @on-change="_mxChangePage"
                      @on-page-size-change="_mxChangePageSize"></Page>
            </Row>
        </Card>
    </div>
</template>

<script>
    import listMixin from '../../../mixin/listMixin'

    export default {
        mixins: [listMixin],

        data() {
            return {
                searchAPI: this.$API_ENUM.CITIC_AUTH_GET_AUTH_INSTANCE_LIST,
                detailPath: '/console/cert/intance_detail',
                columns: [
                    {
                        title: '实例ID',
                        key: 'id'
                    },
                    {
                        title: '认证类型',
                        key:'authTypeDesc'
                    },
                    {
                        title: '实例状态',
                        key:'authStatusDesc'
                    },
                    {
                        title: '创建时间',
                        width: 150,
                        key: 'createTimeStr'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 110,
                        render: (h, params) => {
                            if(params.row.authStatus === 'auth_pass' || params.row.authStatus === 'auth_cancel' || params.row.authStatus === 'brand_auth_refuse' || params.row.authStatus === 'brand_auth_pass'){
                                return [
                                    h('Button', {
                                        props: {
                                            size: 'small',
                                            icon: 'edit'
                                        },
                                        on: {
                                            click: () => {
                                                this._mxToDetail(params.row.id);
                                            }
                                        }
                                    }, '查看详情')
                                ]
                            }else{
                                return [
                                    h('Button', {
                                        props: {
                                            size: 'small',
                                            icon: 'edit'
                                        },
                                        on: {
                                            click: () => {
                                                this._mxToDetail(params.row.id);
                                            }
                                        }
                                    }, '查看进度')
                                ]
                            }

                        }
                    }
                ],
                searchFormConfig: [
                    {
                        type:'input',
                        key:'id',
                        defaultValue:'',
                        placeholder:'请输入实例ID',
                        label: '实例ID'
                    },
                    {
                        type:'select',
                        key:'authType',
                        placeholder:'请选择认证类型',
                        label: '认证类型',
                        clearable:false,
                        defaultValue:'-1',
                        constValue:[
                            {
                                key:'-1',
                                value:'全部'
                            },
                            {
                                key:'website',
                                value:'网站认证'
                            },
                            {
                                key:'microblog',
                                value:'微博认证'
                            },
                            {
                                key:'wechat',
                                value:'微信认证'
                            },
                            {
                                key:'app',
                                value:'App认证'
                            },

                        ],
                    },
                    {
                        type: 'daterange',
                        placeholder:'请选择实例创建时间',
                        label: '实例创建时间',
                        defaultValue:'',
                        key: ['_createTime_', 'startTime', 'endTime'],
                    }
                ]
            }
        },
        methods: {
            /**
             * 调整请求参数
             * @private
             */
            _formatRequestData(data){
                if(data.authType === '-1'){
                    delete data.authType;
                }
                return data;
            }
        },
    }
</script>
