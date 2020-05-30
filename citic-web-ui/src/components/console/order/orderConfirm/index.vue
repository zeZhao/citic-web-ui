<style scoped lang="scss">
.confirm-form {
    .content {
        margin: 0 auto;
        background: #fff;
        padding: 20px;

        /deep/ .ivu-table-wrapper {
            border: none;

            .ivu-table {
                thead {
                    border: 1px solid #e8e8e8;

                    th {
                        background: #f5f5f5;
                        padding-left: 80px;
                    }
                }

                tr {
                    margin: 5px 0;
                }

                td {
                    position: relative;
                    padding: 25px 80px;
                    border-left: 1px solid #e8e8e8;

                    &:last-child {
                        border-right: 1px solid #e8e8e8;
                    }
                }

                &::before {
                    display: none;
                }

                &::after {
                    display: none;
                }
            }
        }

        /deep/ .price-item-line {
            display: block;
            padding: 5px 0;
        }

        .coupon-group {
            margin: 30px 0;
            text-align: left;

            /deep/ .ivu-checkbox {
                &.ivu-checkbox-checked {
                    .ivu-checkbox-inner {
                        border-color: #ed3f14;
                        background-color: #ed3f14;
                    }
                }
            }

            .coupon-checkbox-label {
                margin-left: 10px;
                font-weight: bold;
            }

            .coupon-select {
                margin-left: 20px;
                width: 500px;
            }

            .empty-tip {
                color: red;
            }
        }
    }

    .footer-bar {
        height: 220px;
        box-shadow: 0 -3px 20px 1px rgba(0, 0, 0, 0.2);
        padding: 40px 45px 0 45px;

        .submit-btn {
            float: right;
            margin: 10px 30px 0 0;
            padding: 8px 35px;
        }
    }
}
</style>

<template>
    <div class="confirm-form">
        <div class="content">
            <Table :columns="columns" :data="orderList" height="400"></Table>

            <div class="coupon-group">
                <Checkbox v-model="couponChecked" :disabled="couponDisabled"></Checkbox>
                <span class="coupon-checkbox-label">优惠券</span>
                <Select
                    class="coupon-select"
                    v-model="couponId"
                    v-show="!couponDisabled"
                    :disabled="!couponChecked"
                    @on-change="_changeCouponOptions"
                    :placeholder="couponPlaceholder"
                >
                    <Option
                        v-for="item in couponOptions"
                        :value="item.uniqueId"
                        :key="item.uniqueId"
                    >
                        {{ item.optionName
                        }}
                    </Option>
                </Select>

                <span class="empty-tip" v-show="couponDisabled">无可用优惠券</span>
            </div>
        </div>

        <div class="footer-bar">
            <ci-settlement :settlement="settlement" />

            <Button
                class="submit-btn"
                type="info"
                shape="circle"
                size="small"
                :loading="!canSubmit"
                @click="submitOrder"
            >提交订单</Button>
        </div>

        <!--订单成功后弹窗-->
        <!--<ci-dialog :value.sync="visibleOrderDialog">-->
        <!--<template slot="body">-->
        <!--<span class="icon-success"></span>-->
        <!--<p class="dialog-title">您的订单已提交成功！</p>-->
        <!--<p class="dialog-subtitle">{{$location.host}}</p>-->
        <!--</template>-->

        <!--<template slot="footer">-->
        <!--<div class="dialog-button-group">-->
        <!--<Button type="ghost" shape="circle" @click="visibleOrderDialog = false">确定</Button>-->
        <!--<Button type="error" shape="circle" @click="$router.push('/console/order')">去订单列表</Button>-->
        <!--</div>-->
        <!--</template>-->
        <!--</ci-dialog>-->

        <!--订单失败后弹窗-->
        <!-- <ci-dialog :value.sync="visibleErrorDialog">
             <template slot="body">
                 <span class="icon-success"></span>
                 <p class="dialog-title">您的订单提交失败！</p>
                 <p class="dialog-subtitle" style="color: #666;padding-bottom: 10px;">抱歉，当前优惠券不可用，请重新提交订单。</p>
                 <p class="dialog-subtitle">{{$location.host}}</p>
             </template>

             <template slot="footer"><div></div></template>
        </ci-dialog>-->
    </div>
</template>

<script>
import settlement from "./settlement";

export default {
    props: {
        orderId: {
            required: true
        },
        orderData: {
            required: true
        }
    },

    data() {
        return {
            orderList: [],

            columns: [
                {
                    title: "服务名称",
                    key: "serviceName"
                },
                {
                    title: "价格",
                    render: (h, params) => {
                        // return [h('ci-price-display', {
                        //     props: {
                        //         parentClass: "price-item-line",
                        //         priceList: params.row['priceList'],
                        //         getTag: (item) => {
                        //             return `${item.billingItemName}:`;
                        //         }
                        //     },
                        // })];

                        return params.row.priceDesc.map(item => {
                            return h("p", {}, item);
                        });
                    }
                },
                {
                    title: "购买数量",
                    key: "instanceNum"
                }
            ],

            couponChecked: true,
            couponOptions: [],
            couponId: "",

            settlement: {
                payable: 0,
                total: 0,
                couponDeduction: 0
            },

            //订单是否能提交
            canSubmit: false
            // //页面提交类型 (cart: 购物车, buy: 购买页面)
            // submitType: '',
            // //跳转到订单确认页面弹出框
            // visibleOrderDialog: false,
            // //订单提交特殊异常失败提示
            // visibleErrorDialog: false,
        };
    },

    created() {},

    mounted() {},

    methods: {
        /**
         * 获取缓存的订单数据
         */
        /* initList() {
                 this.$get(this.$API_ENUM.COUPON_USER_COUPON_COUPON_LIST.Format(this.key)).then(res => {
                     if (resOk(res)) {
                         const data = JSON.parse(res.data)
                         const {type, productList} = data;
                         //设置页面提交类型
                         this.submitType = type;
                         switch (type) {
                             case 'cart':
                                 this.orderList = productList;
                                 break;
                             case 'buy':
                                 this.orderList = productList;
                                 break;
                             default:
                                 break;
                         }

                         this.getTotalPrice();
                     }
                 })
             },*/

        /**
         * 更新价格展示信息
         * @param total
         * @param payable
         * @param couponDeduction
         * @private
         */
        _updateSettlement(total = 0, payable = 0, couponDeduction = 0) {
            this.settlement = {
                total,
                payable,
                couponDeduction
            };
        },

        /**
         * 获取可用优惠券 + 订单应付金额
         */
        async getTotalPrice() {
            this.couponId = "";
            this.canSubmit = false;
            this.orderList = [];
            this.couponOptions = [];
            this.couponChecked = false;

            if (this.orderId) {
                /* //生成请求参数
                     const baseParamList = this.orderList.map((item, index) => {

                         const {supplierAlias, serviceAlias: citicServiceAlias, configList, quantity: instanceNum} = item;
                         const keyValue = {};

                         configList.forEach(item => {
                             const {key, value} = item;
                             keyValue[key] = value;
                         });

                         return {
                             supplierAlias,
                             citicServiceAlias,
                             keyValue,
                             instanceNum,
                             index,
                         }
                     });


                     this.$post(this.$API_ENUM.CITIC_PRICE_ORDER_PRICE, {
                         baseParamList,
                     }).then(res => {
                         if (resOk(res)) {

                             const {data: {voList, couponList, orderMoney}} = res;

                             //更新列表价格
                             const orderList = this.orderList.concat();
                             voList.forEach(item => {
                                 const {index, itemVOList} = item;
                                 orderList[index].priceList = itemVOList;
                             });
                             this.orderList = orderList;

                             //展示优惠券列表
                             this.couponOptions = couponList.map(coupon => {
                                 let optionName;

                                 if (coupon.type === 1) {
                                     optionName = `${coupon.couponTypeName}`;
                                 }else {
                                     optionName = `${coupon.typeName}-${coupon.couponTypeName}`;
                                 }

                                 coupon.optionName = `${optionName}${coupon.money}元`;
                                 return coupon;
                             });
                             if (couponList.length > 0) {
                                 this.couponId = couponList[0].uniqueId;
                             }else {
                                 this.couponChecked = false;
                             }

                             //更新支付金额信息
                             if(!this.couponChecked){
                                //如果没选中使用优惠券,是首次进入页面,默认设置订单金额
                                 this._updateSettlement(orderMoney, orderMoney);
                             }else {
                                 this._updateSettlement(orderMoney, orderMoney);
                                 //如果已经选用过优惠券,则是因为页面数据更新进入方法,需要根据选中的优惠券金额设置
                                 this._changeCouponOptions();
                             }

                             //页面数据加载完成,可以点击提交按钮
                             this.canSubmit = true;
                         } else {
                             this.$Message.error(res.message)
                         }
                     })*/
                if (this.orderData) {
                    const {
                        purchaseList,
                        couponList,
                        orderAmt
                    } = this.orderData;

                    this.orderList = purchaseList;

                    //展示优惠券列表
                    if (couponList && couponList.length > 0) {
                        this.couponOptions = couponList.map(coupon => {
                            let optionName;

                            if (coupon.type === 1) {
                                optionName = `${coupon.couponTypeName}`;
                            } else {
                                optionName = `${coupon.typeName}-${coupon.couponTypeName}`;
                            }

                            coupon.optionName = `${optionName}${coupon.money}元`;
                            return coupon;
                        });

                        this.couponId = couponList[0].uniqueId;
                        this.couponChecked = true;
                    } else {
                        this.couponChecked = false;
                    }

                    //更新支付金额信息
                    this._updateSettlement(orderAmt, orderAmt);
                    if (this.couponChecked) {
                        //如果没选中使用优惠券,是首次进入页面,默认设置订单金额
                        this._changeCouponOptions();
                    }

                    //页面数据加载完成,可以点击提交按钮
                    this.canSubmit = true;
                }
            }
        },

        /**
         * 优惠券改变
         * @private
         */
        _changeCouponOptions() {
            const total = this.settlement.total;
            //选择使用优惠券
            if (this.couponChecked) {
                const coupon = this.couponOptions.find(
                    item => item.uniqueId === this.couponId
                );

                if (coupon) {
                    const { realUsedMoney, realOrderMoney } = coupon;

                    //更新费用信息
                    this._updateSettlement(
                        total,
                        realOrderMoney,
                        realUsedMoney
                    );
                } else {
                    this._updateSettlement(total, total);
                }
            } else {
                //取消使用优惠券
                this._updateSettlement(total, total);
                this.couponId = "";
            }
        },

        /**
         * 订单提交
         */
        async submitOrder() {
            this.canSubmit = false;

            const res = await this.$put(
                `${this.$API_ENUM.ORDERS_ORDERID_SUBMIT}?couponId=#{1}`.Format(
                    this.orderId,
                    this.couponId
                )
            );

            this._handleSubmitResult(res);

            //此处需要区别从购物车提交还是从购买页面提交
            /*switch (this.submitType) {
                    //购物车下单
                    case 'cart':
                        this._submitOrderFromCart();
                        break;
                    case 'buy':
                        this._submitOrderFromBuy();
                        break;
                }*/
        },

        /**
         * 提交购物车下单的数据
         * @private
         */
        /*async _submitOrderFromCart() {
                const req = {
                    productList: this.orderList.map(item => {
                        return {shoppingCartProductId: item.id}
                    }),
                };

                if(this.couponChecked){
                    req.coupon = {couponId: this.couponId};
                }

                let res = await this.$post(`${this.$API_ENUM.ORDERS_CREATION_BY_SHOPPING_CART}`, req);
                this._handleSubmitResult(res);
            },*/

        /**
         * 提交购买页面下单数据
         * @private
         */
        /* async _submitOrderFromBuy(){
                  const req = {
                      productList: this.orderList,
                  };

                  if(this.couponChecked){
                      req.coupon = {couponId: this.couponId};
                  }

                  let res = await this.$post(
                      this.$API_ENUM.ORDERS_CREATION,
                      req
                  );

                  this._handleSubmitResult(res);
              },*/

        /**
         * 处理订单请求结果
         * @private
         */
        _handleSubmitResult(res) {
            if (resOk(res)) {
                // this.visibleOrderDialog = true
                this.$Message.success("您的订单已提交成功！");
                this.$emit("submitSuccess");
            } else {
                //3008: 下单时优惠券被抢
                //3006: 算价时优惠券不能使用了
                if (["3006", "3008"].includes(res.code)) {
                    // this.visibleErrorDialog = true;
                    this.$Message.error(
                        "抱歉，当前优惠券不可用，请重新提交订单。"
                    );
                    //订单特殊异常失败时,重新加载页面数据
                    this.getTotalPrice();
                } else if (["4001"].includes(res.code)) {
                    this.$Message.error({
                        content: res.message,
                        duration: 10
                    });
                } else {
                    this.$Message.error(res.message || "操作失败！");
                }
            }

            this.canSubmit = true;
        }
    },

    computed: {
        couponDisabled() {
            return this.couponOptions.length === 0;
        },

        couponPlaceholder() {
            if (this.couponOptions.length === 0) {
                return "无可用优惠券";
            }

            return "请选择";
        }
    },

    watch: {
        couponChecked() {
            this._changeCouponOptions();
        },

        //订单确认弹窗关闭后,关掉页签
        /* visibleOrderDialog(value) {
                 if (value === false) {
                     setTimeout(() => {
                         window.close()
                     }, 500);
                 }
             },*/

        //订单特殊异常失败时,重新加载页面数据
        /*visibleErrorDialog(value) {
                if (value === false) {
                    this.getTotalPrice();
                }
            },*/

        orderId() {
            this.getTotalPrice();
        },
        orderData() {
            this.getTotalPrice();
        }
    },

    components: {
        "ci-settlement": settlement
    }
};
</script>
