<template>
    <div>
        <span :class="parentClass" v-for="(priceItem, priceIndex) in priceList" :key="priceIndex">

            <!--使用插槽添加计费项前缀-->
            <slot v-bind:priceItem="priceItem"></slot>

            <!--使用函数添加计费项的前缀-->
            <template v-if="getTag">
                <span class="tag">{{getTag(priceItem)}}</span>
            </template>


            <!--包年包月   包年包月不展示price-list数据只展示最外层总价-->
            <template v-if="priceItem.feeType === 'once'">
                <span :class="sonClass">{{priceItem.sumPrice}}元</span>
            </template>

            <!--按量付费-->
            <template v-if="priceItem.feeType === 'usage'">
                <span :class="sonClass" v-for="(feeItem, feeIndex) in priceItem.priceList"
                      :key="feeIndex">

                     {{feeItem.price}}{{feeItem.priceUnitName}}

                    <!--时间区间-->
                    <template v-if="feeItem.timeType">
                        {{feeItem.timeIntervalLeftValue}} - {{feeItem.timeIntervalRightValue}} {{feeItem.timeTypeName}}
                    </template>

                    <!--使用量区间-->
                    <!--<template v-if="feeItem.unit">
                        {{feeItem.usageIntervalLeftValue}} - {{feeItem.usageIntervalRightValue}} {{feeItem.unitName}}
                    </template>-->

                </span>

            </template>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            priceList: {
                type: Array,
                default: function(){return []},
                required: true,
            },

            getTag: {
                type: Function,
                default: null,
                required: false,
            },

            parentClass: {
                type: String,
                default: "",
                required: false,
            },

            sonClass: {
                type: String,
                default: "",
                required: false,
            },
        },
    }
</script>
