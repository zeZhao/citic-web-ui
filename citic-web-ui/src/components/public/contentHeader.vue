<style scoped lang="scss">
    .content-header {
        padding: 5px 20px;
        background: #fff;
        margin-bottom: 10px;

        .main-panel {
            height: 40px;
            line-height: 40px;

            .title {
                font-size: 16px;
                color: #1a1a1a;
                font-weight: bold;
            }

            .right-group{
                float: right;
                cursor: pointer;

                .back-text {
                    vertical-align: middle;
                    font-size: 14px;
                    line-height: 40px;
                    display: inline-block;
                    color: #888888;
                }

                .icon-error{
                    height: 20px;
                    width: 20px;
                    margin-left: 10px;
                    position: relative;
                    top: 5px;
                }
            }
        }

        .subhead-panel {

        }
    }
</style>

<template>
    <div class="content-header">
        <div class="main-panel">
            <span class="title">
                {{title}}
            </span>

            <p class="right-group" @click="$router.go(-1)" v-if="hasBack">
                <span class="back-text">
                    返回上一步
                </span>
                <span class="icon-error"></span>
            </p>
        </div>
        <div class="subhead-panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '',
            },

            hasBack: {
                type: Boolean,
                default: true,
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

        components: {},
    }
</script>
