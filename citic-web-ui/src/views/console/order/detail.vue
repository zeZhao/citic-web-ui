<style lang="scss">
#app {
    height: inherit;
}

@import "../../../assets/scss/order.scss";

.statement-dialog {
    .ivu-modal-footer {
        background: #f7f7f7;
    }
}
</style>

<style scoped lang="scss">
.order-detail {
    height: 100%;
    background: #f5f5f5;
    padding: 20px;

    .content {
        margin: 0 auto;

        .order-header-info {
            padding: 15px 30px;
            overflow: hidden;

            p {
                overflow: hidden;
            }

            .item {
                float: left;
                display: inline-block;
                color: #888888;
                padding: 10px 120px 10px 0;
            }

            .legal-info {
                border-top: 1px solid #e9e9e9;
                margin: 15px 0;
                padding-top: 15px;

                p {
                    padding: 5px;

                    .link {
                        color: #57a3f3;
                        text-decoration: underline #57a3f3;
                        cursor: pointer;
                    }

                    /deep/ .ivu-checkbox-wrapper {
                        margin: 0;
                    }
                }
            }
        }
        .order-info {
            background: #fff;
            box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.31);
            margin-bottom: 20px;

            .header {
                line-height: 50px;
                padding-left: 20px;
                font-weight: bold;
                background: #f6f6f6;
                border-bottom: 1px solid #e9e9e9;
            }

            .body {
                padding: 10px 0;
                font-size: 12px;
                /deep/ .label {
                    display: none;
                }

                /deep/ .cost-item {
                    padding-left: 30px;
                    line-height: 25px;
                    display: inline-block;
                    color: #333;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>

<template>
    <div class="order-detail">
        <div class="content">
            <ci-order-header :title="title" :subTitle="subTitle" :hasBack="false">
                <div class="order-header-info">
                    <p>
                        <span class="item">订单号：{{orderId}}</span>
                        <span class="item" v-if="oldOrderId">原订单号：{{oldOrderId}}</span>
                    </p>

                    <p>
                        <span class="item">创建时间：{{createTime}}</span>
                        <span class="item">最后修改时间：{{updateTime}}</span>
                    </p>

                    <p>
                        <span class="item" v-if="supplierInstanceId">供应商实例ID：{{supplierInstanceId}}</span>
                    </p>

                    <p>
                        <span class="item" v-if="instanceStatus">实例状态：{{instanceStatus}}</span>
                    </p>

                    <p>
                        <span class="item" v-if="failureReason">失败原因：{{failureReason}}</span>
                    </p>

                    <!--法律条款、服务声明-->
                    <div class="legal-info">
                        <p v-if="haveStatement">
                            <Checkbox :value="true" disabled>已同意</Checkbox>
                            <span class="link" @click="showStatement = true">法律地位声明</span>
                        </p>

                        <p v-if="haveClause">
                            <Checkbox :value="true" disabled>已同意</Checkbox>
                            <span class="link" @click="openClause">服务条款</span>
                        </p>
                    </div>
                </div>
            </ci-order-header>

            <div class="order-info">
                <div class="header">订单概况:</div>
                <div class="body">
                    <ci-instance-common :order="order"></ci-instance-common>
                </div>

                <div class="header">配置费用:</div>
                <div class="body">
                    <ci-configuration-cost
                        :priceList="priceList"
                        :serviceType="serviceType"
                        :serviceId="serviceId"
                        :title="title"
                    />
                    <!-- :serviceType='serviceType' -->
                </div>

                <div v-show="showOperationList">
                    <div class="header">操作记录:</div>
                    <div class="body">
                        <ci-instance-common :order="operationArr"></ci-instance-common>
                    </div>
                </div>
            </div>
        </div>

        <!--法律地位声明弹窗-->
        <ci-dialog
            class="statement-dialog"
            :value.sync="showStatement"
            :closable="true"
            :maskClosable="false"
        >
            <template slot="header">法律地位声明</template>

            <template slot="body">
                <div class="statement">
                    &nbsp;&nbsp;&nbsp;&nbsp;您通过中信云（www.c.citic）向
                    <span
                        class="height-light"
                    >【{{subTitle}}】</span>采购
                    <span class="height-light">【{{title}}】</span>，
                    中信科技发展有限公司作为中信云平台的运营方，在您采购的产品或服务出现质量责任问题时，
                    将根据您的合法要求，协助、配合您就所造成的损失向服务方进行相应的索赔及主张
                    <span
                        class="height-light"
                    >【{{subTitle}}】</span>承担相应的责任。
                </div>
            </template>

            <template slot="footer">
                <div class="dialog-button-group">
                    <!--<Button shape="circle" class="submit-btn" @click="showStatement = false">确认</Button>-->
                </div>
            </template>
        </ci-dialog>
    </div>
</template>

<script>
import orderHeader from "../../../components/console/order/orderHeader";
import instanceCommon from "../../../components/console/cert/instance-detail-common";
import configurationCost from "../../../components/product/buy/configurationCost";

export default {
    data() {
        const { purchaseId } = this.$route.query;

        return {
            purchaseId,

            title: "",
            subTitle: "",
            createTime: "",
            updateTime: "",
            openTime: "",
            orderId: "",
            oldOrderId: "",
            order: [],
            priceList: [],
            supplierInstanceId: "",
            failureReason: "",
            instanceStatus: "",

            supplierId: "",
            serviceId: "",
            serviceType: "",

            haveStatement: false,
            haveClause: false,
            clauseId: "",

            showStatement: false,
            operationArr: [],
            showOperationList: false
        };
    },

    created() {
        this.initData();
    },

    methods: {
        async initData() {
            const res = await this.$get(
                this.$API_ENUM.ORDERS_ORDER_ID_INVENTORY.Format(this.purchaseId)
            );

            const {
                oldOrderId,
                orderCreateTime,
                orderId,
                orderLastOperateTime,
                serviceInfo,
                serviceName,
                supplierName,
                priceDesc,
                supplierInstanceId,
                failureReason,
                instanceStatus,
                supplierId,
                serviceId,
                serviceType,

                legalStatusOfStatementFlag,
                termsOfConditionsId,

                cancelComment,
                cancelUserName,
                voucherUrl
            } = res.data;

            this.orderId = orderId;
            this.oldOrderId = oldOrderId;
            this.createTime = orderCreateTime;
            this.updateTime = orderLastOperateTime;
            this.title = serviceName;
            this.subTitle = supplierName;

            this.order = serviceInfo;
            this.priceList = priceDesc;
            this.supplierInstanceId = supplierInstanceId;
            this.failureReason = failureReason;
            this.instanceStatus = instanceStatus;

            this.supplierId = supplierId;
            this.serviceId = serviceId;
            this.serviceType = serviceType;

            this.haveStatement = !!legalStatusOfStatementFlag;

            if (cancelComment || cancelUserName || voucherUrl) {
                this.showOperationList = true;
            }

            let newArr = [
                {
                    keyDisplay: "取消备注",
                    valueDisplay: cancelComment
                },
                {
                    keyDisplay: "取消凭证",
                    valueDisplay: voucherUrl,
                    value: voucherUrl,
                    valueType: "file"
                }
            ];

            this.operationArr = newArr;

            this.getClause(termsOfConditionsId);
        },

        getClause(termsOfConditionsId) {
            if (termsOfConditionsId) {
                this.haveClause = true;
                this.clauseId = termsOfConditionsId;
            } else {
                this.haveClause = false;
            }
        },

        openClause() {
            window.open(
                `/citic-web-ui/product/clause?id=${this.clauseId}&serviceName=${this.title}`
            );
        }
    },

    computed: {},

    watch: {},

    components: {
        "ci-order-header": orderHeader,
        "ci-instance-common": instanceCommon,
        "ci-configuration-cost": configurationCost
    }
};
</script>
