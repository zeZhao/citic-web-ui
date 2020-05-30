<style  lang="scss">
    .dialog{
        .ivu-modal{
            text-align: center;
            top: 50%;
            transform: translateY(-65%);

            .ivu-modal-content{
                border-radius: 0;

                .ivu-modal-close{
                    right: 0;
                    top: -55px;

                    .ivu-icon-ios-close-empty{
                        font-size: 60px;
                        color: #fff;
                    }
                }

                .ivu-modal-header{
                    padding: 0;
                    border: none;
                }

                .ivu-modal-body{
                    padding: 0;
                }

                .ivu-modal-footer{
                    border-top: 0;
                    text-align: center;
                }
            }
        }

        .body{
            background: #f7f7f7;
            padding: 50px 0 30px 0;
        }

        .header{
            background: #f7f7f7;
            padding: 14px 16px;
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>

<template>
    <Modal class-name="dialog"
           :transition-names="['fade', 'fade']"
           v-model="visible"
           :closable="closable"
           :mask-closable="maskClosable"
           @on-ok="ok"
           @on-cancel="cancel">
        <template slot="close">
            <slot name="close"></slot>
        </template>

        <template slot="header">
            <div class="header">
                <slot name="header"></slot>
            </div>
        </template>

        <div class="body">
            <slot name="body"></slot>
        </div>

        <template slot="footer">
            <slot name="footer"></slot>
        </template>

    </Modal>
</template>

<script>
    export default {

        props: {
            value: {
                type: Boolean,
                default: false,
                required: true,
            },
            closable: {
                type: Boolean,
                default: true,
                required: false,
            },
            maskClosable: {
                type: Boolean,
                default: true,
                required: false,
            },

        },

        data() {
            return {
                visible: this.value
            };
        },

        created() {

        },

        mounted() {

        },

        methods: {
            ok(){

            },
            cancel(){

            },
        },

        computed: {},

        watch: {
            visible(val) {
                this.$emit('update:value', val)
            },

            value(val) {
                this.visible = val;
            },
        },

        components: {},
    }
</script>
