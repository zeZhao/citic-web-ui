<style scoped lang="scss">
    .coupon-item {
        height: 285px;
        width: 210px;
        margin: 0 auto 30px auto;
        background: #f8f8f8;
        text-align: center;

        .header {
            background: #61b3ff;
            height: 130px;
            color: #fff;
            position: relative;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #fff;
                z-index: 2;
                left: 50%;
                transform: translate(-50%, -70%);
            }

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 5px;
                right: 5px;
                border: 1px dashed #fff;

            }

            .status-tip {
                background: #f76348;
                line-height: 30px;
                position: absolute;
                transform: rotateZ(-45deg);
                left: -50%;
                right: 25%;
                top: 10px;
            }

            .money {
                font-size: 25px;
                font-weight: bold;
                margin-top: 30px;
                display: inline-block;

                .symbol {
                    font-size: 14px;
                }
            }

            .condition {
                margin-top: 5px;
                display: block;
                font-size: 20px;
            }
        }

        .body {
            transition: .3s;
            height: 155px;
            position: relative;

            .coupon-name {
                padding: 30px 15px 10px 15px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .order-info {
                line-height: 45px;
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
                color: #999;
                text-align: center;
                border-top: 1px dashed #e9ebf2;
                cursor: pointer;

                &:hover{
                    color: #61b3ff;
                }
            }
        }

        &:hover {
            .body {
                background: #fff;
                box-shadow: 0 4px 20px 0 rgba(97, 179, 255, 0.44);
            }
        }

        &.disabled {
            .header {
                background: #cbcbca;
            }

            &:hover {
                .body {
                    background: #fff;
                    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
</style>

<template>
    <div class="coupon-item" :class="{disabled: isDisabled}">
        <div class="header">
            <!--<span class="status-tip">即将过期</span>-->

            <span class="money">
                <span class="symbol">￥</span>
                {{coupon.money}}
            </span>

            <span class="condition">{{'无门槛'}}</span>
        </div>

        <div class="body">

            <p class="coupon-name" :title="couponTypeName">{{couponTypeName}}</p>

            <p class="time">{{startTime}} - {{endTime}}</p>

            <router-link :to="`/console/order?searchMode=${coupon.orderId}`">
                <p class="order-info" v-if="coupon.orderId" title="去订单列表">
                    订单号:{{coupon.orderId}}
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            coupon: {
                type: Object,
                required: true,
            },

        },

        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {
            formatTime(time) {
                if (time) {
                    return new Date(time).Format("yyyy.MM.dd");
                }
            }
        },

        computed: {
            startTime() {
                return this.formatTime(this.coupon.effectiveDate)
            },

            endTime() {
                return this.formatTime(this.coupon.expiryDate)
            },

            isDisabled() {
                //已使用,已过期的订单展示为不可用
                return [4, 5].includes(this.coupon.useStaus);
            },

            //生成优惠券展示名
            couponTypeName() {
                const coupon = this.coupon;

                if (coupon.couponType === 1) {
                    return `${coupon.couponTypeName}`;
                }

                return `${coupon.typeName}-${coupon.couponTypeName}`;
            },
        },

        watch: {},

        components: {},
    }
</script>
