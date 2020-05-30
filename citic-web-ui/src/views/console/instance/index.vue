<style scoped lang="scss">
    .instance-list {
        /*padding-left: 15px;*/

        .search-panel {
            background: #fff;

            h2 {
                margin: 0 20px 20px 20px;
                border-bottom: 1px solid #e6e6e6;
                line-height: 50px;
            }
        }

        .table-head {
            margin: 20px 0;
        }

        /deep/ .custom-table {
            padding: 0 0 0 15px;
            background: none;
            .table-head {
                margin-top: 15px;
                background: none;
                line-height: 20px;
                font-size: 12px;
                border: none;

                .column {
                    padding: 0 10px;
                    color: #888888;
                }
            }
        }
    }
</style>

<template>
    <div class="instance-list">
        <ci-content-frame>

            <div class="search-panel">
                <h2>实例列表</h2>

                <ci-search-panel @search="_mxDoSearch" :searchFormConfig="searchFormConfig"></ci-search-panel>
            </div>

            <ci-custom-table :total="total"
                             :current.sync="pageIndex"
                             :pageSize="pageSize"
                             :loading="loading"
                             @changePage="_mxChangePage"
                             @changePageSize="_mxChangePageSize">
                <Row class="table-head">
                    <Col class="column left" span="4" style="padding-left: 50px !important;">服务名称</Col>
                    <Col class="column left" span="4">供应商名称</Col>
                    <Col class="column left" span="4">云平台实例ID</Col>
                    <Col class="column left" span="4">供应商实例ID</Col>
                    <Col class="column left" span="4">成本中心</Col>
                    <Col class="column left" span="4">应用基线</Col>
                </Row>

                <ci-instance-item v-for="instance in listData" :key="`${instance.instanceId}_${new Date().getTime()}`"
                                  @refreshList="_mxGetList"
                                  :instance="instance"
                                  :actionConfig="instanceActionConfig"
                                  :instanceStatus="searchParam.instanceStatus"
                />

                <ci-empty-list-hint v-show="listData.length === 0"/>
            </ci-custom-table>
        </ci-content-frame>
    </div>
</template>

<script>
    import instanceItem from '../../../components/console/instance/instanceItem';
    import searchPanel from '../../../components/console/instance/searchPanel';

    import {listMixin} from '../../../mixin'

    export default {
        mixins: [listMixin],

        data() {

            const {serviceId} = this.$route.query;

            return {
                searchAPI: this.$API_ENUM.CITIC_PORTAL_INSTANCE_GETINSTANCENEWLIST,
                editPath: '',

                searchParam: {
                    serviceId,
                    'providerId': '',
                    'serviceInfo': '',
                    'supplyInstanceId': '',
                    'instanceId': '',
                    'appBaseId': '',
                    'costCenterId': '',
                    'instanceStatus': 'normal',
                },

                //记录默认的查询条件
                searchFormConfig: [
                    {
                        type: 'select',
                        key: 'providerId',
                        placeholder: '供应商',
                        label: '供应商',
                        influence: 'serviceId',
                        api: this.$API_ENUM.CITIC_PORTAL_INSTANCE_QUERY_INSTANCE_NEW_PROVIDER,
                        formatOption: function (res) {
                            return res.data.map(item => {
                                return {
                                    key: item.id,
                                    value: item.name
                                }
                            })
                        },
                    },
                    {
                        type: 'select',
                        key: 'serviceId',
                        defaultValue: serviceId,
                        placeholder: '供应商服务',
                        label: '供应商服务',
                        dependent: 'providerId',
                        ignoreDependentEmpty: true,
                        api: `${this.$API_ENUM.CITIC_PORTAL_INSTANCE_GETSERVICESBYNAME}?providerId=#{0}`,
                        formatOption: function (res) {
                            return res.data.map(item => {
                                return {
                                    key: item.id,
                                    value: item.name
                                }
                            })
                        },
                    },
                    {
                        type: 'input',
                        key: 'serviceInfo',
                        placeholder: '请输入关键字',
                        label: '实例属性搜索',
                    },
                    {
                        type: 'input',
                        key: 'supplyInstanceId',
                        placeholder: '供应商实例ID',
                        label: '供应商实例ID',
                    },
                    {
                        type: 'input',
                        key: 'instanceId',
                        placeholder: '云平台实例ID',
                        label: '云平台实例ID',
                    },
                    {
                        type: 'select',
                        key: 'appBaseId',
                        placeholder: '应用基线',
                        label: '应用基线',
                        api: `${this.$API_ENUM.USER_APP_BASES}`,
                        formatOption: function (res) {
                            return res.appBases.filter(item => item.available).map(({citicId, name}) => {
                                return {
                                    key: citicId,
                                    value: name,
                                }
                            })
                        },
                    }, {
                        type: 'select',
                        key: 'costCenterId',
                        placeholder: '成本中心',
                        label: '成本中心',
                        api: `${this.$API_ENUM.COST_CENTER_OFFICE_ALL}`,
                        formatOption: function (res) {
                            return res.data.map(({id, name}) => {
                                return {
                                    key: id,
                                    value: name,
                                }
                            })
                        },
                    }, {
                        type: 'select',
                        key: 'instanceStatus',
                        clearable: false,
                        required: true,
                        defaultValue: 'normal',
                        placeholder: '实例状态',
                        label: '实例状态',
                        constValue: [
                            {
                                key: 'normal',
                                value: '正常',
                            },{
                                key: 'creating',
                                value: '创建中',
                            },{
                                key: 'deleting',
                                value: '删除中',
                            },{
                                key: 'deleted',
                                value: '已删除',
                            },{
                                key: 'ConvertPackageSuccess',
                                value: '已转包费',
                            }
                        ]
                    }
                ],

                //实例可用操作条件
                instanceActionConfig: [],

                listData: []
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {

        },

        computed: {},

        watch: {
            'searchParam.instanceStatus'(val){
                console.log("=========val", val)
            }
        },

        components: {
            'ci-instance-item': instanceItem,
            'ci-search-panel': searchPanel
        },
    }
</script>
