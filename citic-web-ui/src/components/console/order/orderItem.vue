<style scoped lang="scss">
    .order-item {
        margin-bottom: 10px;
        border: 1px solid #dbf3ff;
        box-shadow: 0 0 0 0 rgba(204, 204, 204, 0);
        transition: .3s;

        .header {
            background: #ebf8ff;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding: 10px 15px;

            .left, .right {
                flex-grow: 1;
            }

            .left {
                font-size: 12px;

                .check-box-block {
                    /*width: 25px;*/
                    display: inline-block;
                }

                .title {
                    color: #1a1a1a;
                    margin-right: 30px;
                }

                .order-info {
                    color: rgba(26, 26, 26, 0.71);
                    margin-right: 30px;

                    &.right {
                        float: right;
                        margin: 0;
                        padding: 0;
                    }
                }
            }

            .right {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                padding-right: 30px;

                .delete-icon {
                    background: url("../../../../static/svg/delete-icon.svg") center;
                    background-size: cover;
                    height: 16px;
                    width: 16px;
                    display: inline-block;
                    margin: 0 5px;
                    cursor: pointer;
                    position: relative;
                    top: 2px;
                }

                .download-icon {
                    background: url("../../../../static/svg/download-blue-icon.svg") center;
                    background-size: cover;
                    height: 16px;
                    width: 16px;
                    display: inline-block;
                    margin: 0 5px;
                    cursor: pointer;
                    position: relative;
                    top: 2px;
                }

                .approve-btn {
                    font-size: 12px;
                    padding: 0 10px;
                    margin: 0 5px;
                }
            }
        }

        .price-total {
            border-top: 1px solid #dbf3ff;
            padding: 20px 40px 30px 40px;
        }

        .footer {
            border-top: 1px solid #dbf3ff;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding: 15px 20px;

            .left, .right {
                flex-grow: 1;
            }

            .right {
                text-align: right;

                .ivu-btn {
                    margin-left: 10px;
                }
            }

            .remark {
                color: #666;
            }

            .update-time {
                color: #666;
            }
        }

        .content {

            /deep/ .row {
                display: flex;
                border-top: 1px solid #dbf3ff;
                position: relative;

                &.border {
                    border-top: 1px solid #dbf3ff;
                    border-bottom: 1px solid #dbf3ff;
                }

                /*展开收起按钮*/
                .fold-btn {
                    z-index: 2;
                    cursor: pointer;
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: inline-block;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    background: #f3f3f3 url("../../../../static/images/console/instance/icon-plus.png") no-repeat center;
                    background-size: 65%;
                    transition: .3s;

                    &.active {
                        background: #f3f3f3 url("../../../../static/images/console/instance/icon-reduce.png") no-repeat center;
                        background-size: 65%;
                    }
                }

                .cell {
                    display: inline-block;
                    border-right: 1px solid #dbf3ff;
                    border-top: 1px solid #dbf3ff;
                    text-align: center;
                    color: #333;
                    min-height: 50px;

                    &.text-right {
                        text-align: right;
                        padding: 0 20px;
                    }

                    &.text-left {
                        text-align: left;
                        padding: 0 20px;
                    }

                    &.bold {
                        font-weight: bold;
                        color: #333;
                    }

                    &.light {
                        color: #666
                    }

                    &.empty-cell {
                        border-top: none;
                    }

                    .action-btn {
                        padding: 0 10px;
                        transition: .3s;
                        display: inline-block;

                        &:hover {
                            color: #ed3f14;
                        }

                        cursor: pointer;
                    }

                    .sub-cell {
                        display: flex;
                        flex-direction: column;
                        justify-items: flex-start;
                        border-right: none;

                        &:first-child {
                            border-top: none;
                        }

                        .cell {
                            flex-grow: 1;
                        }
                    }

                    &.text {
                        padding-top: 15px;
                        padding-bottom: 15px;
                    }

                    &.vertical-item {
                        padding-top: 15px;

                        &:first-child {
                            margin-top: -15px;
                        }
                    }
                }

                &:first-child > .cell {
                    border-top: none;
                }

                & > .cell:last-child {
                    border-right: none;
                }

                &.title {
                    background: #ebf8ff;
                }
            }
        }

        &.disabled {
            border: 1px solid #ececec;

            .header {
                background: #f7f7f7;

                .right {
                    .download-icon {
                        background: url("../../../../static/svg/download-gray-icon.svg") center;
                        background-size: cover;
                    }
                }
            }

            .content {

                /deep/ .row {
                    border-top: 1px solid #ececec;

                    &.border {
                        border-top: 1px solid #ececec;
                        border-bottom: 1px solid #ececec;
                    }

                    .cell {
                        border-right: 1px solid #ececec;
                        border-top: 1px solid #ececec;

                        &.empty-cell {
                            border-top: none;
                        }

                        .sub-cell {
                            border-right: none;
                            line-height: 50px;

                            &:first-child {
                                border-top: none;
                            }
                        }
                    }

                    &:first-child > .cell {
                        border-top: none;
                    }

                    & > .cell:last-child {
                        border-right: none;
                    }

                    &.title {
                        background: #f7f7f7;
                    }
                }
            }

            .price-total {
                border-top: 1px solid #ececec;
            }

            .footer {
                border-top: 1px solid #ececec;

            }
        }

        &.selected {
            border: 1px solid #add9ff;
            box-shadow: 0 0 10px 0 #add9ff;
        }

        &.disabled.selected {
            border: 1px solid #cccccc;
            box-shadow: 0 0 10px 0 #cccccc;
        }

        .content > div:first-child > .row {
            border-top: none;
        }

        .price-panel {
            .row {
                .cell {
                    color: #ea4223;
                }
            }
        }
    }
</style>
<style scoped lang="scss">
    .order-item {
        .opening-cost{
            padding: 0 10px;
            transition: .3s;
            display: inline-block;
            cursor: pointer;
            color: #169bd5;
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }

</style>

<template>
    <div class="order-item" :class="{disabled: !order.isToAudit, selected: order.selected}">
        <div class="header">
            <div class="left">
                <!--<span class="check-box-block">
                    <Checkbox v-model="order.selected" @on-change="checkBoxChange"
                              v-show="showCheckBox">{{''}}</Checkbox>
                </span>-->
                <span class="title">{{order.createTime}}</span>
                <span class="order-info">订单号：{{order.id}}</span>
                <span class="order-info">类型：{{order.typeDesc}}</span>
                <span class="order-info">状态：{{order.statusDesc}}</span>
                <span class="order-info right"> 最后一次操作时间：{{order.lastOperateTime}}</span>
            </div>

            <!--<div class="right">
                &lt;!&ndash;管理员展示审批按钮&ndash;&gt;
                <template v-if="adminAuth">
                    &lt;!&ndash;待审批状态的展示审批&ndash;&gt;
                    <Button class="approve-btn" type="info" @click="approveOne(order.id)" size="small" shape="circle"
                            v-show="order.isToAudit">审批
                    </Button>

                    &lt;!&ndash;管理员权限时如果创建用户是当前管理员则展示取消&ndash;&gt;
                    <span class="delete-icon" @click="deleteItem(order.id)"
                          v-show="order.isToAudit && userInfo.userId === order.userId"></span>
                    &lt;!&ndash;  <span class="download-icon" v-show="userInfo.userId === order.userId"></span>&ndash;&gt;
                </template>
                <template v-else>
                    &lt;!&ndash;用户展示导出删除按钮&ndash;&gt;
                    &lt;!&ndash;待审批状态的展示删除&ndash;&gt;
                    <span class="delete-icon" @click="deleteItem(order.id)" v-show="order.isToAudit"></span>
                    &lt;!&ndash; <span class="download-icon"></span>&ndash;&gt;
                </template>
            </div>-->
        </div>

        <div class="content">
            <Row class="row title">
                <Col class="cell text text-left" span="6">服务名称</Col>
                <Col class="cell text text-left" span="5">服务商</Col>
                <Col class="cell text text-left" span="3">实例个数</Col>
                <Col class="cell text text-left" span="3">实例成功个数</Col>
                <Col class="cell text" span="4">价格</Col>
                <Col class="cell text" span="3">操作</Col>
            </Row>

            <div v-for="(purchase, index) in order.purchaseList" :key="purchase.id">

                <Row class="row">  <!--:class="{border: showTable(index)}"-->

                    <!--收缩实力详情列表-->
                    <!--<div class="fold-btn" v-if="hasInstanceList" :class="{active: !foldTable[index]}"-->
                    <!--@click="toggleFoldTable(index)"></div>-->

                    <!--服务名称-->
                    <Col class="cell text-left text bold" span="6">
                        {{purchase.serviceName}}
                    </Col>

                    <!--服务商-->
                    <Col class="cell text-left text bold" span="5">
                        {{purchase.supplierName}}
                    </Col>

                    <!--实例个数-->
                    <Col class="cell text text-left" span="3">{{purchase.instanceNum}}</Col>

                    <!--实例成功个数-->
                    <Col class="cell text text-left" span="3">{{purchase.instanceSuccessNum}}</Col>

                    <!--费用-->
                    <Col class="cell" span="4">
                        <template v-if="purchase.serviceType != 2">
                            <span class="cell sub-cell" v-for="(price, priceIndex) in purchase.priceDesc"
                                  :key="priceIndex">{{price}}</span>
                        </template>
                        <template v-else>
                            <span class="opening-cost" @click="openOpeningModel(purchase)">点击查看服务价格</span>
                        </template>

                            <!--  -->
                    </Col>

                    <!--操作-->
                    <Col class="cell bold text" span="3">
                        <span class="action-btn" @click="deleteItem(purchase.id)" v-if="hasDelete">删除</span>
                        <span class="action-btn" @click="toDetail(purchase.id)">查看详情</span>
                    </Col>
                </Row>

                <!--实例详细列表-->
                <!--  <ci-order-item-table :instanceList="instanceList(index)" v-show="showTable(index)"/>-->
            </div>
        </div>

         <div class="price-total">
             <ci-settlement :settlement="settlement" :couponSendBack="order.couponSendBack"/>
         </div>

        <!--<div class="content price-panel">-->
            <!--<Row class="row">-->
                <!--<Col class="cell text text-left" style="border-right: none" span="18">订单金额（不含按量计费服务）：</Col>-->
                <!--<Col class="cell text" span="3">{{order.orderAmt}}元</Col>-->
            <!--</Row>-->
        <!--</div>-->

        <div class="footer" v-if="hasPanel">
            <div class="left remark" v-if="hasApprovalOpinion">
                <!--<p>审批人员：{{order.auditOpinion}}</p>-->
                <p>审批意见：{{order.auditOpinion}}</p>
            </div>

            <div class="right">

                <!--有提交订单按钮才判断-->
                <template v-if="hasSubmit">
                    <Alert v-if="manualFreeze" style="display: inline-block" type="warning" show-icon>您有账单逾期未支付，暂时不支持购买新服务</Alert>
                    <Alert v-if="autoFreeze" style="display: inline-block" type="warning" show-icon>您尚未支付的消费金额已超出您的信用额度，暂时不能购买新的服务！</Alert>
                    <Alert v-if="creditExcess" style="display: inline-block; width: 500px; text-align: left;" type="warning" show-icon>您当前的可支付余额小于当前购买服务金额,暂时不能购买此服务规格，为不影响您的正常购买服务,请及时充值或选购其他规格。</Alert>
                </template>


                <Button v-if="hasCancel" @click="cancelOrder" type="info"
                        :disabled="loading"
                >取消订单</Button>
                <Button v-if="hasSubmit" @click="submitOrder" type="info"
                        :loading="loading"  :disabled="submitDisabled"
                >提交订单</Button>

                <Button v-if="hasApproval" type="info" @click="approveOne">审核</Button>

            </div>
        </div>



    </div>




</template>

<script>

    import orderItemTable from './orderItemTable';
    import settlement from './orderConfirm/settlement';


    export default {
        props: {
            order: {
                type: Object,
                required: true,
            },

            //当前用户是否是管理员权限
            adminAuth: {
                type: Boolean,
                required: true,
            },

            //是否展示单选框
            showCheckBox: {
                type: Boolean,
                required: true,
            },

            creditInfo: {
                type: Object,
                required: true,
            },
        },

        data() {
            return {
                openingModel:false,
                modelTitle:"",
                markdownData:"",
                userInfo: this.$store.state.userInfo.USER_INFO,

                //默认收起
                foldTable: [],

                settlement: {
                    payable: 0,
                    total: 0,
                    couponDeduction: 0,
                },

                loading: false,

                // 默认禁止提交订单
                submitDisabled: true,
                // 手动冻结
                manualFreeze: false,
                // 自动冻结
                autoFreeze: false,
                // 信用超额
                creditExcess: false,
            };
        },

        created() {
            // const foldTable = [];
            // this.order.productList.forEach(() => foldTable.push(true));
            // this.foldTable = foldTable;

            const {orderAmt: total, orderRealAmt: payable, orderDiscountAmt: couponDeduction} = this.order;
            this.settlement = {
                payable,
                total,
                couponDeduction,
            }

            // 设置信用管控状态
            this.setCreditStatus();
        },

        mounted() {

        },

        methods: {
            openOpeningModel(purchase){
                this.$emit("openOpening", purchase)
            },
            checkBoxChange(value) {
                this.$emit('selectOne', {id: this.order.id, value});
            },

            toDetail(purchaseId) {
                //GET /orders/{id}/inventory
                // let href = window.location.origin + window.location.pathname;
                //
                // if(!href.endsWith("/")){
                //     href += "/"
                // }

                window.open(`${window.location.origin}/citic-web-ui/order/detail?purchaseId=${purchaseId}`);
            },


            /**
             * 提交订单
             */
            async submitOrder() {
                //PUT /orders/{id}/submit
                // this.loading = true;
                // const res = await this.$put(this.$API_ENUM.ORDERS_ORDER_ID_SUBMIT.Format(this.order.id));
                // this.loading = false;
                //
                // if (resOk(res)) {
                //     this.$Message.success("订单提交成功");
                //     this.$emit('refreshAll');
                // } else {
                //     this.$Message.error(res.message);
                // }

                this.$emit("submit", this.order);
            },

            /**
             * 取消订单
             */
            cancelOrder() {
                //PUT /orders/{id}/cancel

                this.$confirmDialog(async () => {
                    const res = await this.$put(this.$API_ENUM.ORDERS_ORDER_ID_CANCEL.Format(this.order.id));

                    if (resOk(res)) {
                        this.$Message.success("订单取消成功");
                        this.$emit('refreshAll');
                    } else {
                        this.$Message.error(res.message);
                    }

                }, '确定要取消该订单？')
            },

            /**
             * 删除一个实例
             */
            deleteItem(purchaseId) {
                //PUT /orders/{orderId}/{id}/inventory/cancel

                this.$confirmDialog(async () => {
                    const res = await this.$put(this.$API_ENUM.ORDERS_ORDER_ID_PURCHASE_ID_INVENTORY_CANCEL.Format(this.order.id, purchaseId));

                    if (resOk(res)) {
                        this.$Message.success("操作成功");
                        this.$emit('refreshAll');
                    } else {
                        this.$Message.error(res.message);
                    }

                }, '确定要删除该清单？')
            },

            /**
             * 审批订单
             */
            approveOne() {
                //PUT /orders/orders/audits
                this.$emit('approveOne', this.order);
            },

            // instanceList(index) {
            //     const {instanceList, serviceName} = this.order.productList[index];
            //     return instanceList.map(item => {
            //         return {
            //             instanceList,
            //             quantity: 1,
            //             serviceName,
            //             ...item
            //         };
            //     });
            // },
            //
            // showTable(index) {
            //     if (this.hasInstanceList) {
            //         if (!this.foldTable[index]) {
            //             return true;
            //         }
            //     }
            //     return false;
            // },
            //
            // toggleFoldTable(index){
            //     const foldTable = Object.assign([], this.foldTable);
            //     foldTable[index] = !foldTable[index];
            //     this.foldTable = foldTable;
            // },

            /**
             * 设置信用管控状态

             // 下订单
             // status === 'freeze'
             // manualFreezeFlag 手动冻结标志

             // usableCreditLines 可用信用额度
             // 缺自动冻结文案

             // 续费的时候
             // status === 'freeze'
             // manualFreezeFlag 手动冻结标志 限制
             // 自动冻结 不限制
             // 金额超出 限制

             // 变配
             // status === 'freeze'
             // 自动 和 手动 限制
             // 金额超出 限制
             */
            setCreditStatus(){
                const {status, manualFreezeFlag, usableBalance} = this.creditInfo;

                if(!status){
                    return;
                }

                // // 默认禁止提交订单
                // submitDisabled: true,
                // // 手动冻结
                // manualFreeze: false,
                // // 自动冻结
                // autoFreeze: false,
                // // 信用超额
                // creditExcess: false,
                // 设置默认状态
                this.submitDisabled = false;
                this.manualFreeze = false;
                this.autoFreeze = false;
                this.creditExcess = false;

                // 冻结类型判断
                if(status === 'freeze'){
                    this.submitDisabled = true;

                    if(manualFreezeFlag){
                        this.manualFreeze = true;
                    }else {
                        this.autoFreeze = true;
                    }

                    return;
                }

                // 超额判断
                // let limit = usableBalance || '0';
                // limit = Number(limit.replace(/,/g, ''));
                // // TODO 有优惠券后需要根据使用优惠券后的金额判断
                // if(this.order.orderAmt > limit){
                //     // 说明超额
                //     this.submitDisabled = true;
                //     this.creditExcess = true;
                //     return;
                // }
            },
        },

        computed: {
            // // 交付中,交付完成,交付失败 状态展示详细信息
            // hasInstanceList() {
            //     return ['deliverSuccess', 'toDeliver', 'deliverFail'].includes(this.order.orderStatus);
            // },

            /**
             * 按钮和文案展示规则

             未提交     unsubmitted
             待审核     waitApproval
             交付中     pending
             交付成功   finished
             交付失败   deliveryFailure
             已拒绝     refused
             已取消     canceled

             用户
             未提交            待审核        交付中            交付成功        交付失败        已拒绝        已取消
             （提交，取消）                审批意见            审批意见        审批意见        审批意见


             管理员
             未提交            待审核        交付中            交付成功        交付失败        已拒绝        已取消
             （提交，取消）    （审批）        审批意见            审批意见        审批意见        审批意见
             */

            /**
             * 是否展示底部
             */
            hasPanel() {
                const adminAuth = this.adminAuth;
                const status = this.order.status;

                if (adminAuth && ['waitApproval'].includes(status)) {
                    return true;
                }

                if (['canceled'].includes(status)) {
                    return false;
                }

                return true;
            },

            /**
             * 判断是否包含审批意见
             */
            hasApprovalOpinion() {
                return ['pending', 'finished', 'deliveryFailure', 'refused'].includes(this.order.status);
            },

            /**
             * 判断是否包含提交、取消操作
             */
            hasSubmit() {
                return ['unsubmitted'].includes(this.order.status);
            },

            /**
             * 判断是否包含取消
             */
            hasCancel() {
                return ['unsubmitted', 'waitApproval'].includes(this.order.status);
            },

            /**
             * 判断是否包含审批操作
             */
            hasApproval() {
                const adminAuth = this.adminAuth;
                const status = this.order.status;

                if (adminAuth && ['waitApproval'].includes(status)) {
                    return true;
                }
                return false;
            },

            hasDelete() {
                return ['unsubmitted'].includes(this.order.status)
            },
        },

        watch: {
            // 信用管控状态变更重新计算
            creditInfo(){
                return this.setCreditStatus();
            }
        },

        components: {
            'ci-order-item-table': orderItemTable,
            'ci-settlement': settlement
        },
    }
</script>
