<style lang="scss">
.invoice-detail {
    .table-last-row {
        height: 180px;
    }
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
        .search-wrapper {
            margin: 10px 0 30px 0;
            .return {
                margin-right: 10px;
            }
            .posted span {
                &:hover {
                    border-bottom: 1px solid #fff;
                }
            }
        }
    }
}
.applyDialog {
    .ivu-modal {
        text-align: left;
        .moadlContainer {
            padding: 14px 0px 22px 40px;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            .applyInfo {
                li {
                    padding: 10px 0;
                    label {
                        display: inline-block;
                        width: 105px;
                        text-align: right;
                        margin-right: 30px;
                    }
                }
            }
        }
        .emialBox {
            text-align: center;
            margin: 66px 0 56px 0;
            span {
                padding: 22px 44px;
                border: 1px solid #bfbfbf;
                box-sizing: border-box;
            }
            span:nth-child(2) {
                border-left: none;
                margin-left: -4px;
            }
        }
    }
}
.tipContainer {
    text-align: center;
    font-size: 14px;
    padding-top: 25px;
    span {
        color: #57a3f3;
        border-bottom: 1px solid #57a3f3;
        cursor: pointer;
    }
}
</style>
<template>
    <div class="invoice-detail">
        <Card class="title-wrapper">
            <p slot="title">发票管理 - 我的发票</p>
        </Card>
        <Card class="main" :bordered="false" dis-hover>
            <div class="search-wrapper">
                <Form :label-width="130" class="search-form">
                    <Row>
                        <i-col>
                            <Button class="return" @click="goBack">返回</Button>
                            <Button
                                type="success"
                                style="cursor: default;"
                                v-if="currentInvoiceObj.invoiceStatus == 1 || currentInvoiceObj.invoiceStatus == 2"
                            >已申请，开票中……</Button>
                            <Button
                                type="success"
                                v-else-if="currentInvoiceObj.invoiceStatus == 3"
                            >已完成开票，等待邮寄……</Button>
                            <Button
                                type="success"
                                class="posted"
                                v-else-if="currentInvoiceObj.invoiceStatus == 4"
                                @click="showModel2 = true"
                            >完成邮寄，查看快递信息</Button>
                            <Button type="error" @click="getInfoData" v-else>立即申请</Button>
                        </i-col>

                        <Modal v-model="showModel" title="发票申请" class-name="applyDialog">
                            <div class="moadlContainer">
                                <RadioGroup
                                    v-model="ticketType"
                                    style="margin: 0 0 10px 50px;display: block;"
                                >
                                    <Radio label="0">专用发票</Radio>
                                    <Radio label="1">普通发票</Radio>
                                </RadioGroup>
                                <span style="color: #ea4123">提示：确认申请后开票信息将不能修改，请在确认申请开票前核对发票信息。</span>
                                <ul class="applyInfo">
                                    <li>
                                        <label>发票抬头:</label>
                                        <span>{{infoDataObj.invoiceTitle}}</span>
                                    </li>
                                    <li v-if="infoDataObj.identificationNo">
                                        <label>统一社会信用代码:</label>
                                        <span>{{infoDataObj.identificationNo}}</span>
                                    </li>
                                    <li v-if="infoDataObj.bankName">
                                        <label>开户银行名称:</label>
                                        <span>{{infoDataObj.bankName}}</span>
                                    </li>
                                    <li v-if="infoDataObj.bankNo">
                                        <label>开户账号:</label>
                                        <span>{{infoDataObj.bankNo}}</span>
                                    </li>
                                    <li v-if="infoDataObj.companyAddr">
                                        <label>公司注册地址:</label>
                                        <span>{{infoDataObj.companyAddr}}</span>
                                    </li>
                                    <li v-if="infoDataObj.companyTelephone">
                                        <label>注册电话:</label>
                                        <span>{{infoDataObj.companyTelephone}}</span>
                                    </li>
                                </ul>
                                <p style="color: #3366FF" v-if="!applyFlag">您当前的开票信息不完整，<span @click="goConfigInfo" style="cursor: pointer;border-bottom: 1px solid #3366FF;">去配置</span>。</p>
                            </div>
                            <div slot="footer" style="text-align: center;">
                                <Button type="error" @click="submit" :disabled="!applyFlag">确认申请</Button>
                                <Button @click="cancle">取消申请</Button>
                            </div>
                        </Modal>
                        <Modal v-model="showModel2" title="快递信息" class-name="applyDialog">
                            <div class="emialBox">
                                <span>{{currentInvoiceObj.expressCompany + currentInvoiceObj.expressNo}}</span>
                                <span>{{new Date(currentInvoiceObj.postTime).Format("yyyy-MM-dd hh:mm:ss")}}</span>
                            </div>
                            <div slot="footer" style="text-align: left;"></div>
                        </Modal>
                        <Modal v-model="showModel3">
                            <div class="tipContainer">
                                <p>
                                    {{tips}}
                                    <span @click="goConfigInfo">去配置</span>
                                </p>
                            </div>
                            <div slot="footer" style="text-align: left;"></div>
                        </Modal>
                    </Row>
                </Form>
            </div>
            <Row class="table-wrapper">
                <i-table
                    :row-class-name="rowClassName"
                    :columns="columns"
                    :data="listData"
                    :loading="loading"
                    stripe
                ></i-table>
            </Row>
        </Card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchAPI: this.$API_ENUM.TENANTS_BILL_DETAIL,
            billAPI: "payment",
            actualAmount: "",
            billAmount: "",
            discountAmount: "",
            loading: false,
            columns: [
                {
                    title: "序号",
                    key: "index"
                },
                {
                    title: "服务名称",
                    key: "serviceName"
                },
                {
                    title: "账期月",
                    key: "accountPeriod"
                },
                {
                    title: "可开票金额",
                    render: (h, params) => {
                        if (!params.row.type) {
                            return h(
                                "span",
                                {},
                                (Number(params.row.totalPrice) / 1000).toFixed(
                                    2
                                )
                            );
                        }
                        function textCreatde(
                            title,
                            value,
                            fontWeight = "normal",
                            otherFix = ""
                        ) {
                            return h(
                                "p",
                                {
                                    style: {
                                        fontWeight: fontWeight,
                                        fontSize: "14px",
                                        marginTop: "4px"
                                    }
                                },
                                `${title}：${otherFix}${(
                                    Number(value) / 1000
                                ).toFixed(2)}`
                            );
                        }
                        let {
                            billAmount,
                            discountAmount,
                            actualAmount
                        } = params.row.totalObj;
                        let discountAmountText = "";
                        if (discountAmount > 0) {
                            discountAmountText = "+";
                        }
                        return h("span", {}, [
                            textCreatde("总计金额", billAmount),
                            textCreatde(
                                discountAmount > 0 ? "调整金额" : "优惠金额",
                                discountAmount,
                                "normal",
                                discountAmountText
                            ),
                            textCreatde("实际开票金额", actualAmount, "bold")
                        ]);
                    }
                }
            ],
            listData: [],
            showModel: false, // 申请发票弹窗
            showModel2: false, // 快递信息弹窗
            showModel3: false, // 没有发票配置信息提示弹窗
            tips: "提示：您还没配置发票开票信息和邮寄信息，",
            infoDataObj: {}, // 发票配置信息数据对象形式
            ticketType: "",
            currentInvoiceObj: {}, // 我的发票页面传参过来的对象，当前页面需要的一些数据，包含帐期月，id,申请状态等
            applyFlag: false // 是否可以立即申请
        };
    },
    mounted() {
        this.currentInvoiceObj = this.$route.query.parmasObj;
        this._mxGetList();
    },
    methods: {
        submit() {
            let invoiceInfoParam = {
                invoiceType: this.ticketType
            };
            let id = this.currentInvoiceObj.id;
            this.$put(
                `${this.$API_ENUM.TENANTS_INVOICE_CONFIRM}/${id}`,
                invoiceInfoParam
            ).then(res => {
                if (res.code == "200") {
                    this.$Message.success("申请成功！");
                    this.currentInvoiceObj.invoiceStatus = 1;
                } else {
                    this.$Message.error("提交失败！");
                }
            });
            this.showModel = false;
        },
        cancle() {
            this.showModel = false;
        },
        goBack() {
            this.$router.go(-1);
        },
        goConfigInfo() {
            this.$router.push({ path: "./infoConfig" });
        },
        async _mxGetList() {
            this.loading = true;
            let accountPeriod = this.currentInvoiceObj.billMonth;
            let tenantId = this.currentInvoiceObj.tenantId;
            let res = await this.$get(this.searchAPI, {
                accountPeriod,
                tenantId
            });
            if (res.code == 200) {
                this.listData = res.data;
                this.loading = false;
            } else {
                this.$Message.error(res.message);
            }

            if (this.listData.length == 0) {
                return;
            }
            let res2 = await this.$get(`${this.billAPI}/${accountPeriod}`);
            if (res2.data) {
                let newObj = {
                    type: "total",
                    totalObj: res2.data
                };
                this.listData.push(newObj);
            }
        },
        // 点击立即申请前，查看是否有配置信息
        getInfoData() {
            this.$get(this.$API_ENUM.GET_INVOICE_INFO)
                .then(res => {
                    if (res.code == "200") {
                        if (res.data) {
                            const { invoiceTitle, invoiceType } = res.data;
                            if (invoiceTitle && invoiceType) {
                                this.infoDataObj = res.data;
                                this.ticketType = invoiceType;
                                this.showModel = true;
                            } else {
                                this.tips = "提示：您的发票配置信息不完整，";
                                this.showModel3 = true;
                            }
                        } else {
                            this.tips =
                                "提示：您还没配置发票开票信息和邮寄信息，";
                            this.showModel3 = true;
                        }
                    } else {
                        this.$Message.error("查询失败！");
                    }
                })
                .catch(e => {
                    console.warn("错误");
                });
        },
        rowClassName(row, index) {
            if (this.listData.length > 1) {
                if (index == this.listData.length - 1) {
                    return "table-last-row";
                }
            }
        }
    },
    watch: {
        ticketType: {
            handler(newVal, oldVal) {
                const {
                    invoiceTitle,
                    identificationNo,
                    bankName,
                    bankNo,
                    companyAddr,
                    companyTelephone
                } = this.infoDataObj;
                if (newVal == "0") {
                    if (
                        invoiceTitle &&
                        identificationNo &&
                        bankName &&
                        bankNo &&
                        companyAddr &&
                        companyTelephone
                    ) {
                        this.applyFlag = true;
                    } else {
                        this.applyFlag = false;
                    }
                } else {
                    if (invoiceTitle) {
                        this.applyFlag = true;
                    } else {
                        this.applyFlag = false;
                    }
                }
            },
            deep: true
        }
    }
};
</script>
