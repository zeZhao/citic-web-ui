<style lang="scss" scoped>

</style>

<template>
    <Card>
        <p slot="title">
            线下实例审批
        </p>

        <ci-search-panel :add="false" @add="_mxToDetail" @search="_mxDoSearch"
                         :searchFormConfig="searchFormConfig">
        </ci-search-panel>
        <br>
        <Table :columns="columns" :data="listData" :loading="loading"></Table>
        <br>
        <Page class="list-page"
              :total="total"
              :current="pageIndex"
              :pageSize="pageSize"
              :page-size-opts="pageSizeOpts"
              show-total
              show-sizer
              show-elevator
              @on-change="_mxChangePage"
              @on-page-size-change="_mxChangePageSize"
        ></Page>
    </Card>
</template>

<script>
    import {listMixin} from '../../../mixin'

    export default {
        mixins: [listMixin],

        data() {
            return {
                searchParam: {
                    serviceName: '',
                    statusCode: '0',
                    createTime: '',
                },

                searchFormConfig: [
                    {
                        type: 'select',
                        key: 'statusCode',
                        label: '交付状态',
                        defaultValue: '0',
                        clearable: false,
                        constValue: [{
                            value: '全部',
                            key: '0'
                        }, {
                            value: '交付成功',
                            key: '1'
                        }, {
                            value: '交付中',
                            key: '2'
                        }, {
                            value: '已取消',
                            key: '5'
                        }]
                    },

                    {
                        type: 'date',
                        key: 'createTime',
                        label: '服务创建时间',
                    },

                    {
                        type: 'input',
                        key: 'serviceName',
                        label: '查询',
                        placeholder: '输入服务名称/供应商实例ID/云平台实例ID/订单ID'
                    }
                ],

                columns: [
                    {
                        title: '下单人',
                        key: 'createOrderUserName',
                        align: 'center',
                    },
                    {
                        title: '云平台实例ID',
                        key: 'cloudInsId'
                    },
                    {
                        title: '供应商实例ID',
                        key: 'id'
                    },
                    {
                        title: '订单ID',
                        key: 'orderId'
                    },
                    {
                        title: '服务名称',
                        key: 'serviceName',
                    },
                    {
                        title: '服务创建时间',
                        key: 'createTime',
                    },
                    {
                        title: '服务交付时间',
                        key: 'updateTime',
                    },
                    {
                        title: '交付状态',
                        key: 'statusName',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return [h('Button', {
                                props: {
                                    size: 'small',
                                },
                                on: {
                                    click: () => {
                                        const {id, orderId, tenantName, statusCode} = params.row;
                                        this._mxToDetail({
                                            id,
                                            orderId,
                                            tenantName,
                                            statusCode,
                                        });
                                    }
                                }
                            }, params.row.statusCode === 1 || params.row.statusCode === 5 ? '查看详情' : '确认交付')];
                        }
                    }
                ],

                searchAPI: this.$API_ENUM.GENERAL_INSTANCE_PAGE,
                detailPath: 'approve/detail',
            }
        },


        created() {
            this.initQueryParam();
        },

        methods: {
            initQueryParam() {
                const {status = "",} = this.$route.query;
                if(status){
                    this.searchParam.statusCode = status;
                    this.searchFormConfig[0].defaultValue = status;
                }
            },

            //调整请求参数格式
            _formatRequestData(searchParam) {
                if (searchParam.createTime) {
                    searchParam.createTime = new Date(searchParam.createTime).Format("yyyy-MM-dd");
                }

                if (searchParam.statusCode === '0') {
                    searchParam.statusCode = '';
                }

                return searchParam;
            },
        }
    }

</script>
