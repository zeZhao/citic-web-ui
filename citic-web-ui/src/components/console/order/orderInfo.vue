<style scoped lang="scss">
    .order-info{
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

            .cost-info-item {
                overflow: hidden;
                padding: 15px 0;

                .item-label {
                    color: #333;
                    padding-left: 30px;
                    width: 20%;
                    display: inline-block;
                    float: left;
                }

                .item-value {
                    color: #999;
                    float: left;
                    width: 70%;
                    word-break: break-all;
                }
            }

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

            /deep/ .cost-price-item {
                line-height: 25px;
                display: inline-block;
                color: #999;
                font-size: 12px;
            }
        }


    }
</style>

<template>
    <div class="order-info">

        <div class="header">订单概况:</div>
        <div class="body">
            <p v-for="(item, index) in order" class="cost-info-item" :key="index" v-if="item.valueDisplay">
                <label class="item-label">{{item.keyDisplay}}</label>
                <span class="item-value">{{item.valueDisplay}} {{item.keyUnitName === 'NONE' ? '' : item.keyUnitName}}</span>
            </p>
        </div>


        <div class="header">配置费用:</div>
        <div class="body">
            <ci-configuration-cost :priceList="priceList" />
        </div>

    </div>
</template>

<script>
    import configurationCost from '../../../components/product/buy/configurationCost'

    export default {
        props: {
            order: {
                type: Array,
                default: function(){
                    return [];
                },
                required: true,
            },

            priceList: {
                type: Array,
                default: function(){
                    return [];
                },
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

        methods: {},

        computed: {},

        watch: {},

        components: {
            'ci-configuration-cost': configurationCost
        },
    }
</script>
