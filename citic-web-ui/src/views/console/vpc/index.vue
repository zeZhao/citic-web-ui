<template>

    <div class="vpc-index">
        <Card class="main">
            <Breadcrumb>
                <BreadcrumbItem>首页</BreadcrumbItem>
                <BreadcrumbItem>供应商关联</BreadcrumbItem>
            </Breadcrumb>
            <Table :row-class-name="rowClassName" class="supplier-relation" :columns="vpcIndexTable" :data="vpcIndexData" :show-header="false"></Table>
        </Card>
    </div>

</template>

<script>
    import Api from "utils/apiEnum.js"
    export default {
        data() {
            return {
                status: 'relation',
                vpcIndexTable: [
                    {
                        title: '',
                        key: 'name'
                    },
                    {
                        title: '',
                        key: 'isOpen',
                        render: (h, params) => {
                            if(params.row.isOpen === 'finish'){
                                return h('div', [
                                    h('Icon', {
                                        props: {
                                            type: 'checkmark-circled'
                                        },
                                        style: {
                                            color : 'green',
                                            'font-size' : '18px'
                                        }
                                    }),
                                    h('span',{
                                        style: {
                                            margin : '0 0 0 4px'
                                        }
                                    }, '开通成功')
                                ]);
                            }else if (params.row.isOpen === 'relation') {
                                return h('div', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-clock-outline'
                                        },
                                        style: {
                                            color : '#000',
                                            'font-size' : '18px',
                                            'font-weight' : 'bold'
                                        }
                                    }),
                                    h('span',{
                                        style: {
                                            margin : '0 0 0 4px',
                                            'line-height': '18px'
                                        }
                                    }, '未开通')
                                ]);
                            }
                        }
                    },
                    {
                        title: '',
                        key: 'toUrl',
                        fixed: 'right',
                        width: 200,
                        render: (h, params) => {
                            if(params.row.isOpen === 'finish'){
                                return h('div', [
                                    h('Button', {
                                        class: 'create-vpc-btn',
                                        style:{

                                        },
                                        props: {
                                            type: 'text',
                                            size: 'small'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.index)
                                            }
                                        }
                                    }, '创建专有网络VPC >>'),
                                ]);
                            }
                        }
                    }
                ],
                vpcIndexData: [
                    {
                        name: '阿里云',
                        isOpen: 'finish',
                    }/*,
                    {
                        name: '微软云',
                        isOpen: '未开通',
                    },
                    {
                        name: '金山云',
                        isOpen: '开通成功',
                    }*/
                ]
            };
        },
        mounted() {
           this.getTenantAliVpc();
        },
        methods: {
            //finish
            getTenantAliVpc() {
                this.$get(Api.TENANT_RESOURCES_VPC).then(res => {
                    this.status = res.data.status
                    this.vpcIndexData[0].isOpen = res.data.status
                })
            },
            rowClassName (row, index) {
                if (row.isOpen === '未开通') {
                    return 'supplier-relation-notopen-bg';
                }
                return '';
            }
        }
    };
</script>

<style lang="scss">
    .vpc-index {

        .create-vpc-btn {
            border: 1px solid #ff304a;
            color: #fff;
            background: #ff304a;
        }

        .supplier-relation {
            margin-top: 40px;

            .supplier-relation-notopen-bg td {
                background-color: #f1f1f1;
                color: #000;
            }

        }

    }
</style>






