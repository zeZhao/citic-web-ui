<style scoped lang="scss">
    .settlement-bar {
        .tips {
            font-weight: bold;
            font-size: 14px;
            text-align: left;

            .send-back{
                color: #e94122;
                font-weight: normal;
                padding-left: 10px;
            }
        }

        .price-sum {
            padding-left: 40px;
            margin-top: 15px;
            overflow: hidden;

            .item {
                display: inline-block;
                text-align: center;
                float: left;

                .title {
                    width: 100px;
                    display: block;
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 10px;
                }

                .price {
                    display: block;
                    color: #494949;
                    line-height: 28px;
                    font-size: 14px;

                    &.payable {
                        color: #e94122;
                        font-size: 28px;
                    }
                }

                .symbol {
                    margin-top: 26px;
                    display: block;
                    width: 80px;
                    color: #494949;
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }

        .total-price{
            color: red;
            font-size: 20px;
            padding-left: 220px;
            text-align: left;
        }
    }
</style>

<template>
    <div class="settlement-bar">
        <p class="tips">订单金额（不含按量计费服务）:
            <span class="send-back" v-if="couponSendBack">
                本单未使用优惠券，券已返回“我的优惠券”
            </span>
        </p>
        <div class="price-sum" v-show="showCoupon">
            <span class="item">
                <label class="title">应付金额(元)</label>
                <span class="price payable">{{settlement.payable}}</span>
            </span>

            <span class="item">
                <span class="symbol">=</span>
            </span>

            <span class="item">
                <label class="title">总金额(元)</label>
                <span class="price">{{settlement.total}}</span>
            </span>

            <span class="item">
                <label class="symbol">-</label>
            </span>

            <span class="item">
                <label class="title">优惠券抵扣(元)</label>
                 <span class="price">{{settlement.couponDeduction}}</span>
            </span>
        </div>
        <p class="total-price" v-show="!showCoupon">
            {{settlement.total}}元
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            settlement: {
                type: Object,
                required: true,
                default: {
                    payable: 0,
                    total: 0,
                    couponDeduction: 0,
                }
            },

            couponSendBack: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        computed: {
            showCoupon(){
                return this.settlement && this.settlement.couponDeduction;
            }
        },

        watch: {},

        components: {},
    }
</script>
