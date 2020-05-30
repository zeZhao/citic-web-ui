<style scoped lang="scss">
    .clause-page {
        background: #f6f7f8;

        .content-box {
            width: 1200px;
            margin: 0 auto;
            padding-bottom: 30px;

          /*  .router-group {
                text-align: left;
                padding: 20px 50px 10px 50px;
                color: #999999;

                .router {
                    &.link {
                        cursor: pointer;
                        color: #999999;

                        &:hover {
                            color: #57a3f3;
                        }

                        &::after {
                            content: '>';
                            padding: 0 5px;
                        }

                        &.empty {
                            color: #999999;
                            cursor: default;
                        }
                    }

                    &.current {
                        color: #666;
                        cursor: default;
                    }
                }
            }*/

            .content {
                background: #fff;
                padding: 30px 50px;

                .title {
                    font-size: 32px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #f3f3f3;
                    color: #333;
                }

                .text {
                    padding: 20px 0 0 0;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
            }
        }
    }
</style>

<template>
    <div class="clause-page">

        <div class="content-box">
            <!--<div class="router-group">-->
                <!--<router-link to="/"><span class="router link">首页</span></router-link>-->
                <!--<router-link to="/product/center"><span class="router link">产品中心</span></router-link>-->
                <!--<span class="router link empty">{{serviceName}}</span>-->
                <!--<span class="router current">服务条款</span>-->
            <!--</div>-->

            <div class="content">
                <p class="title">{{serviceName}}-服务条款</p>
                <pre class="text">{{text}}</pre>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                serviceName: '',
                text: ''
            }
        },

        created() {
            this.getClause();
        },

        methods: {

           async getClause() {
               const {id, serviceName} = this.$route.query;

               this.serviceName = serviceName;

               const res = await this.$get(`${this.$API_ENUM.TERMS_OF_CONDITIONS_CONTENT}?id=${id}`);

               if(resOk(res)){
                   this.text = res.data.replace(/\r/g, '\n\r');
               }else {
                   this.$Message.error(res.message || '详情查询失败');
               }

            }
        }
    }
</script>
