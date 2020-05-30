<style lang="scss">
.invoice-list {
    .title-wrapper {
        margin-bottom: 10px;
        border-bottom: 1px solid #fbfbfb;
        box-sizing: border-box;
        .ivu-card-head {
            border: none;
        }
        .ivu-card-body {
            padding: 0;
        }
    }
    .main {
        .ivu-table-cell {
            height: auto;
        }
        .main {
            .ivu-table-cell {
                height: auto;
            }
            .search-wrapper {
                margin: 10px 0 6px 0;
                .viewBtn {
                    text-align: center;
                }
            }
        }
    }
}
</style>
<template>
    <div class="app-list invoice-list">
        <Card class="title-wrapper">
            <p slot="title">发票管理 - 我的发票</p>
        </Card>
        <Card class="main" :bordered="false" dis-hover>
            <div class="search-wrapper clearfix">
                <search-form
                    :search-form-config="searchFormConfig"
                    :page="page"
                    :stored-value="storedValue"
                    :span="span"
                    @dosearch="_searchChange"
                >
                    <span slot="reset"></span>
                </search-form>
                <Button @click="viewConfigInfo" style="float: right;margin-top: -32px;">查看发票配置信息</Button>
            </div>
            <Table :columns="columns" :data="listData" :loading="loading"></Table>
            <Page
                style="margin-top:20px;"
                :total="page.total"
                :page-size="page.pageSize"
                :page-size-opts="page.pageSizeOpts"
                :current="page.pageIndex"
                @on-change="_pageIndexChange"
                @on-page-size-change="_pageSizeChange"
                show-sizer
                show-elevator
                show-total
            ></Page>
        </Card>
    </div>
</template>

<script>
import newSearch from "com/public/new-search.vue";
import mixinList from "mixin/new-list-mixin.js";
export default {
    mixins: [mixinList],
    data() {
        return {
            span: 10,
            listUrl: this.$API_ENUM.TENANTS_INVOICE_QUERY,
            searchFormConfig: [
                {
                    type: "select",
                    keyName: "applyStatus",
                    displayName: "按申请状态：",
                    placeholder: "请选择",
                    defaultValue: function() {
                        return "";
                    },
                    selectLsitData: [
                        { value: "all", label: "全部" },
                        { value: "0", label: "未申请" },
                        { value: "1", label: "已申请" }
                    ]
                },
                {
                    type: "select",
                    keyName: "invoiceStatus",
                    displayName: "按开票状态：",
                    placeholder: "请选择",
                    defaultValue: function() {
                        return "";
                    },
                    selectLsitData: [
                        { value: "all", label: "全部" },
                        { value: "0", label: "开票中" },
                        { value: "3", label: "已开票" },
                        { value: "4", label: "已邮寄" }
                    ]
                },

                {
                    type: "month-section",
                    keyName: "startMonth",
                    displayName: "账期：",
                    placeholder: "",
                    defaultValue: function() {
                        return "";
                    }
                },
                {
                    type: "month-section",
                    keyName: "endMonth",
                    displayName: "至:",
                    placeholder: "",
                    leftOffSet: 5,
                    defaultValue: function() {
                        return "";
                    }
                }
            ],
            columns: [
                {
                    title: "序号",
                    key: "index",
                    render: (h, params) => {
                        return h(
                            "span",
                            params.index +
                                (this.page.pageIndex - 1) * this.page.pageSize +
                                1
                        );
                    }
                },
                {
                    title: "账期月",
                    key: "billMonth"
                },
                {
                    title: "可开票金额",
                    render: (h, params) => {
                        const _fee = params.row.actualAmount + "";
                        return [h("span", {}, _fee.liToYuan())];
                    }
                },
                {
                    title: "申请状态",
                    render: (h, params) => {
                        const _status = params.row.applyStatus;
                        let _statusText = "";
                        let _statusColor = "";
                        if (_status == 0) {
                            _statusText = "未申请";
                            _statusColor = "#65b5ff";
                        } else {
                            _statusText = "已申请";
                            _statusColor = "#5b616e";
                        }
                        return [
                            h(
                                "span",
                                { style: { color: _statusColor } },
                                _statusText
                            )
                        ];
                    }
                },
                {
                    title: "开票状态",
                    render: (h, params) => {
                        switch (params.row.invoiceStatus) {
                            case "1":
                            case "2":
                                return h("span", "开票中");
                                break;
                            case "3":
                                return h("span", "已开票");
                                break;
                            case "4":
                                return h("span", "已邮寄");
                                break;
                        }
                    }
                },
                {
                    title: "申请时间",
                    render: (h, params) => {
                        let _applyTime;
                        if (params.row.applyTime) {
                            _applyTime = new Date(params.row.applyTime).Format(
                                "yyyy-MM-dd hh:mm:ss"
                            );
                        } else {
                            _applyTime = '—'
                        }
                        return [h("span", {}, _applyTime)];
                    }
                },
                {
                    title: "操作",
                    key: "subjectName",
                    align: "center",
                    render: (h, params) => {
                        const _applyStatus = params.row.applyStatus;
                        let _applyStatusText = "";
                        let _applyType = "";
                        if (_applyStatus == 0) {
                            _applyStatusText = "立即申请";
                            _applyType = "error";
                        } else {
                            _applyStatusText = "查看详情";
                            _applyType = "ghost";
                        }
                        return [
                            h(
                                "Button",
                                {
                                    props: {
                                        type: _applyType
                                    },
                                    on: {
                                        click: () => {
                                            let parmasObj = params.row;
                                            this.$router.push({
                                                path: "applyProgress",
                                                query: { parmasObj: parmasObj }
                                            });
                                        }
                                    }
                                },
                                _applyStatusText
                            )
                        ];
                    }
                }
            ],
            listData: []
        };
    },
    mounted() {},
    components: {
        "search-form": newSearch
    },
    methods: {
        requestParameterAssembly(searchFormData) {
            // debugger;
            let { page, searchFormData: search } = searchFormData;
            search.applyStatus == "all" ? (search.applyStatus = "") : "";
            search.invoiceStatus == "all" ? (search.invoiceStatus = "") : "";

            // if (typeof search.startMonth == "object") {
            //     search.startMonth = search.startMonth.Format("yyyyMM");
            // }

            // if (typeof search.endMonth == "object") {
            //     search.endMonth = search.endMonth.Format("yyyyMM");
            // }

            if (search.startMonth) {
                search.startMonth = new Date(search.startMonth).Format(
                    "yyyyMM"
                );
            }
            if (search.endMonth) {
                search.endMonth = new Date(search.endMonth).Format("yyyyMM");
            }

            if (search.startMonth && search.endMonth) {
                if (Number(search.startMonth) > Number(search.endMonth)) {
                    this.$Message.error("结束时间不能大于开始时间");
                    return;
                }
            }

            return {
                pageIndex: page.pageIndex,
                pageSize: page.pageSize,
                ...search
            };
        },

        mixinAssignment(res) {
            //返回数据赋值
            this.page.total = res.totalElements;
            this.listData = res.content;
        },
        viewConfigInfo() {
            this.$router.push({ path: "infoConfig" });
        }
    }
};
</script>
