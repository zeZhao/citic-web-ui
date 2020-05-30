<style lang="scss" scoped>

</style>
<template>
    <ci-content-frame>
        <Card>
            <div slot="title">
               应用分发
            </div>
            <Table :columns="columns" :data="listData" :loading="loading"></Table>
        </Card>
    </ci-content-frame>
</template>

<script>
    import {listMixin} from 'mixin';

    export default {
        mixins: [listMixin],

        data() {
            return {
                searchAPI: this.$API_ENUM.APP_DISTRIBUTION_INSTANCES + "?isBrand=tenant&serviceID=201705311533857755",
                detailPath: '/console/app-distribute/detail',
                columns: [
                    {
                        title: '订单创建时间',
                        key: 'createTimeString'
                    },
                    {
                        title: '应用名称',
                        key: 'appName'
                    },
                    {
                        title: '服务名称',
                        key: 'serviceName'
                    },
                    {
                        title: '供应商',
                        key: 'supplierName'
                    },
                    {
                        title: '检测次数',
                        key: 'monitorTimes'
                    },
                    {
                        title: '加固次数',
                        key: 'reinforeceTimes'
                    },
                    {
                        title: '价格(元)',
                        key: 'incrementPrices'
                    },
                    {
                        title: '状态',
                        width: 400,
                        render: (h, params) => {
                            return h('div', {}, this.getStatus(params.row, h));
                        }
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 110,
                        render: (h, params) => {
                            return [
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        icon: 'edit',
                                    },

                                    on: {
                                        click: () => {
                                            this._mxToDetail(params.row.id);
                                        }
                                    }
                                }, '查看详情')
                            ]
                        }
                    }
                ]
            }
        },
        methods: {
            /**
             * 获取操作状态
             */
            getStatus(item, h) {
                const appInstanceStatusMap = item.appInstanceStatusMap;

                if (appInstanceStatusMap != null) {
                    const {tenant, brand, monitor, reinforce} = appInstanceStatusMap;
                    const tenantStatus = this.getActionStatus(tenant);
                    const brandStatus = this.getActionStatus(brand);
                    const monitorStatus = this.getActionStatus(monitor);
                    const reinforceStatus = this.getActionStatus(reinforce);

                    return [tenantStatus, brandStatus, monitorStatus, reinforceStatus].map(item => {
                        return h('Button', {
                            props: {
                                type: item.type,
                                shape: "circle",
                                size: "small",
                            },

                            style: {
                                marginRight: '5px'
                            }

                        }, item.label)
                    });
                }else {
                    return []
                }
            },

            /**
             * 解析状态属性
             */
            getActionStatus(str) {
                const statusArr = str.split("#");

                return {
                    label: statusArr[1],
                    type: this.getButtonType(statusArr[0]),
                }
            },

            /**
             * 根据code转换为button类型
             * @param code
             * @returns {string}
             */
            getButtonType(code) {
                switch (code) {
                    case 'state-success':
                        return 'success';
                    case 'state-primary':
                        return 'primary';
                    case 'state-default':
                        return 'default';
                    case 'state-danger':
                        return 'error';
                }
            }
        }
    }
</script>
