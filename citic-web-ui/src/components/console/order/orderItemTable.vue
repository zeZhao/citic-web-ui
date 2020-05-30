<style scoped lang="scss">
    .order-instance-table {
        background: #f9fafc;
        padding: 20px;

        /deep/ .ivu-table-wrapper {
            border: none;

            .ivu-table {
                color: #999 !important;
                background: transparent;

                &::before, &::after {
                    display: none;
                }

                td {
                    background: transparent;
                }
            }

            thead {

                th {
                    border: none;
                    background: #ebedef;
                }

            }

            tbody {
                tr:last-child {
                    td {
                        border: none;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="order-instance-table">
        <Table :columns="columns" :data="instanceList"></Table>
    </div>
</template>

<script>
    export default {
        props: {
            instanceList: {
                type: Array,
                default: function () {
                    return [];
                },
                required: true,
            },
        },

        data() {
            return {
                columns: [
                    {
                        title: '服务名称',
                        key: 'serviceName'
                    },
                    {
                        title: '实例个数',
                        key: 'quantity'
                    },
                    {
                        title: '实例状态',
                        key: 'instanceStatusDesc'
                    },
                    {
                        title: '交付时间',
                        key: 'openTime'
                    },
                    {
                        title: '实例ID',
                        key: 'bizInstanceId'
                    },
                    {
                        title: '供应商实例ID',
                        key: 'supplierInstanceId'
                    },
                    {
                        title: '实例到期时间',
                        key: 'expireTime'
                    }
                ],
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        computed: {},

        watch: {},

        components: {},
    }
</script>
