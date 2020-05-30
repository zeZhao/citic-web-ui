<style scoped lang="scss">
    .head-product-panel{
        height: 80px;
        background: #f2f2f1;
        border-bottom: 1px solid #dddee1;

        .contain{
            background: #f2f2f1;
            width: 1200px;
            height: 100%;
            margin: 0 auto;

            .logo-box{
                margin-top: 20px;
                display: inline-block;

                &::after{
                    content: " ";
                    display: inline-block;
                    width: 1px;
                    height: 40px;
                    background: #dddee1;
                    margin-left: 20px;
                }
            }

            .action-group{
                float: right;
                line-height: 80px;
                text-align: center;
                font-size: 16px;

                .action-item{
                    width: 150px;
                    cursor: pointer;
                    transition: color .2s ease;
                    display: inline-block;
                    color: #000;

                    &.separate{
                        border-right: 1px solid #dddee1;
                    }

                    &:hover{
                        color: #ce1515;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="head-product-panel">
        <div class="contain">
            <span class="logo-box">
                <img src="../../assets/images/logo.png" alt="">
            </span>

            <nav class="action-group">
                <label class="action-item separate" @click="toPath('https://help.c.citic/hc/')">
                    文档中心
                </label>

                <label class="action-item" @click="toPath('https://dev123.c.citic/providerportal/')">
                    服务商入口
                </label>

                <label class="action-item" @click="toPath('https://dev123.c.citic/views/console/console.jsp')">
                    控制台
                </label>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {
            toPath(url){
                window.open(url);
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>
