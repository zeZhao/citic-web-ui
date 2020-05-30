<style scoped lang="scss">
    .error-tip {
        position: absolute;
        width: 350px;
        height: 36px;
        left: -420px;
        top: 5px;
        background: rgba(0, 0, 0, 0.66);
        color: #fff;
        border-radius: 5px;
        padding: 0 20px 0 40px;

        &::after {
            content: '';
            display: inline-block;
            position: absolute;
            border: 7px solid rgba(0, 0, 0, 0);
            border-left: 7px solid rgba(0, 0, 0, 0.67);
            right: -14px;
            top: 11px;
        }

        .close {
            position: absolute;
            left: 14px;
            top: 16px;
            width: 0;
            height: 0;
            cursor: pointer;

            &::after {
                content: '';
                height: 4px;
                width: 12px;
                background: #fff;
                display: inline-block;
                transform: rotateZ(45deg);
                position: absolute;
                border-radius: 1px;
            }

            &::before {
                content: '';
                height: 4px;
                width: 12px;
                background: #fff;
                display: inline-block;
                transform: rotateZ(-45deg);
                position: absolute;
                border-radius: 1px;
            }
        }

        .tip {
            color: #ff8400;
            line-height: 36px;
        }
    }
</style>

<template>
    <div class="error-tip" v-show="error">
        <span class="close" @click="close"></span>
        <span class="tip">{{error}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                required: true,
                type: String,
                default: '',
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
            close() {
                this.$emit('update:error', '');
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
