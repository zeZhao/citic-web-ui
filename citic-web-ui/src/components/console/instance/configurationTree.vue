<style scoped lang="scss">
    .config-group {
        font-size: 12px;

        .config-line {
            /*line-height: 25px;*/
            padding-left: 20px;
            color: #9e9e9e;

            &.root {
                /*line-height: 35px;*/
                border-bottom: 1px solid #f2f2f2;
                padding: 0 0 10px 0;

                & > .label {
                    color: #333333;
                }

                &:last-child {
                    border: none;
                }
            }
        }

        .label {
            text-align: right;

            &::after {
                content: "：";
            }

            &:empty::after {
                content: "";
            }
        }

        .value {
            word-break: break-all;
        }
    }
</style>

<template>
    <div class="config-group">
        <div class="config-line" :class="{root: level === 0}"
             :style="{'padding-top': `${ 10 - level * 2 }px`}" v-for="(item, key) in config" :key="key">
            <span class="label">{{item.label}}</span>
            <span class="value" v-if="!item.child">{{item.value}}</span>
            <configuration-tree v-else :config="item.child" :level="nextLevel"></configuration-tree>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'configuration-tree',

        props: {
            config: {
                default: {},
                required: true,
            },

            level: {
                default: 0,
                type: Number,
                required: false,
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
            nextLevel() {
                return Number(this.level + 1);
            },
        },

        components: {},
    }
</script>
