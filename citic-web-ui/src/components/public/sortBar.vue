<style scoped lang="scss">
    .sort-bar {
        overflow: hidden;

        .condition-item {
            float: left;
            padding: 0 20px 0 0;
            cursor: pointer;
            margin: 0 30px 0 0;
            position: relative;
            user-select: none;

            .label {
                display: inline-block;
                line-height: 20px;

                &.active {
                    color: #ea4123;
                }
            }

            .sort-icon {
                position: absolute;
                right: 4px;

                &.asc {
                    top: 0;
                }

                &.desc {
                    bottom: 0;
                }

                &.active {
                    color: #ea4123;
                }
            }
        }
    }
</style>

<template>
    <div class="sort-bar">
        <span class="condition-item" v-for="(item, index) in sortConfig" :key="index" @click="changeSort(item,index)">
            <span class="label" :class="{active: item.active}">{{item.label}}</span>

            <Icon type="arrow-up-b" class="sort-icon asc" :class="{active: item.active && item.asc}"></Icon>
            <Icon type="arrow-down-b" class="sort-icon desc" :class="{active: item.active && !item.asc}"></Icon>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            /**
             *  排序选项配置
             *  [{
             *       label: "上架时间",
             *       key: "time",
             *       active: true,
             *       asc: true,
             *   }]
             */
            sortConfig: {
                type: Array,
                required: true,
                default: () => {
                    return []
                }
            },

            //是否支持多条件排序
            multipleSort: {
                type: Boolean,
                required: false,
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

        methods: {
            changeSort(item, index) {

                //当前排序已经是激活状态
                if (item.active) {
                    item.asc = !item.asc;
                } else {
                    //激活一个,未使用的排序

                    //判断是否允许多个排序规则同时生效
                    if (!this.multipleSort) {
                        //不可以激活多个, 将其他已经激活的置为"禁用状态"
                        this.sortConfig.map(item => item.active = false);
                    }

                    item.active = true;
                }

                this.$emit("changeSort", Object.assign([], this.sortConfig));
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
