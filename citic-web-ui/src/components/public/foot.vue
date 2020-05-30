<style scoped lang="scss">
    .footer-body {
        background: #373c42;
        font-size: 16px;
        font-weight: normal;
        color: #000000;


        .footer-content {
            width: 1200px;
            margin: 0 auto;
            padding: 50px 0 40px 0;
            position: relative;

            .footer-logo {
                position: absolute;
            }

            .footer-info-list {
                width: 800px;
                margin: 0 auto;
                overflow: hidden;

                .group {
                    float: left;
                    width: 25%;
                    text-align: center;

                    .title {
                        margin: 0 0 15px 0;
                        font-size: 16px;
                        font-weight: normal;
                        color: #ffffff;
                    }

                    .item {
                        font-size: 14px;
                        color: #aeafb1;
                        line-height: 28px;

                        a {
                             color: rgba(255, 255, 255, 0.502);
                             &:hover{
                                 color: #ffffff;
                             }
                        }
                    }
                }
            }

            .footer-qrcode-info {
                position: absolute;
                right: 0;
                top: 55px;
                text-align: center;

                .footer-qrcode {
                    display: block;
                    margin: 0 auto;
                }

                .tip {
                    font-size: 14px;
                    color: #aeafb1;
                }
            }
        }

        .contact-info{
            font-size: 12px;
            color: #666666;
            text-align: center;
            margin: 10px 0;
            a{
                color: rgba(255, 255, 255, 0.502);
                 &:hover{
                                 color: #ffffff;
                             }
            }

            span{
                padding: 0 30px;
            }
        }

        .footer-line {
            height: 1px;
            // background: #ffffff;
            background: #3b4046;
        }

        .footer-bottom {
            background: #373c42;
            text-align: center;
            padding: 20px 0 25px 0;
            width: 1200px;
            margin: 0 auto;

            .footer-bottom-tip {
                color: #5d5e60;
                font-size: 14px;
                line-height: 24px;
                .left{
                    float: left;
                    .last{
                        margin-left: 18px;
                    }
                }
                .right{
                    float: right;
                }

            }
        }
        .line{
            color: #5d5e60;
        }
        .clear{
            clear: both;
        }
    }
</style>

<template>
    <footer class="footer-body">
        <div class="footer-content">
            <img class="footer-logo" src="../../../static/images/public/logo-white.png">

            <div class="footer-info-list">
                <div class="group">
                    <h6 class="title">关于我们</h6>
                    <!-- <p class="item">
                        <a href="https://startup.citic.com/company-intro" target="_blank">公司情况</a>
                    </p> -->
                    <p class="item">
                        <a href="https://www.c.citic/providerportal/" target="_blank">加入我们</a>
                    </p>
                    <p class="item">
                        <a href="https://help.c.citic/hc/kb/article/1048743/" target="_blank">联系我们</a>
                    </p>
                </div>

                <div class="group">
                    <h6 class="title">集团资讯</h6>
                    <p class="item">
                        <a href="https://www.group.citic/html/CITIC_News/" target="_blank">新闻动态</a>
                    </p>
                    <!-- <p class="item">
                        <a @click="goInnovation()">数字化应用创新</a>
                    </p> -->
                </div>

                <div class="group">
                    <h6 class="title">帮助中心</h6>
                    <p class="item">
                        <a href="https://help.c.citic/hc/" target="_blank">帮助文档</a>
                    </p>
                    <!--<p class="item">
                        <a href="http://111.48.26.153:81/product-1200.htm" target="_blank">云平台系统</a>
                    </p>-->
                </div>

                <div class="group">
                    <h6 class="title">友情链接</h6>
                    <p class="item">
                        <a href="https://www.group.citic/" target="_blank">中信集团</a>
                    </p>
                    <p class="item">
                        <a href="http://www.citic-mall.com" target="_blank">中信e家</a>
                    </p>
                    <p class="item">
                        <a href="http://www.ecitic.com" target="_blank">E·中信</a>
                    </p>
                    <p class="item">
                        <a href="https://startup.citic.com/" target="_blank">中信双创</a>
                    </p>
                    <!-- <p class="item">
                        <a href="https://www.aliyun.com" target="_blank">阿里云</a>
                    </p> -->
                </div>

                <!-- <div class="group">
                    <h6 class="title">社区</h6>
                    <p class="item">
                        <a href="http://startup.citic.com/events" target="_blank">双创社区</a>
                    </p>
                </div> -->
                <!-- <div class="group">
                    <h6 class="title">服务商门户</h6>
                    <p class="item">
                        <a href="https://www.c.citic/providerportal/" target="_blank">服务商入驻</a>
                    </p>
                </div> -->
            </div>

            <div class="footer-qrcode-info">
                <img class="footer-qrcode" src="../../assets/images/qrcode.png">
                <label class="tip">扫一扫，关注我们</label>
            </div>
        </div>
          <div class="footer-line"></div>

        <p class="contact-info">
            <a href="https://www.c.citic/certification?code=2018061300000053" target="_blank">中信集团品牌认证</a>
             <span class="line">|</span>
             <a href="https://www.c.citic/views/about/law.jsp" target="_blank">法律声明</a>
        </p>



        <div class="footer-line"></div>

        <div class="footer-bottom">

            <div class="footer-bottom-tip">
                <div class="left">
                      <span>客服电话：4000123600</span>
                      <span class="last">联系邮箱：cloud_service@citic.com</span>
                </div>
                <div class="right">
                     <span class="item small">京ICP备17003023号-1</span>
                    <span class="item small">京公网安备 11010502030745号</span>
                </div>
                <div class="clear"></div>


            </div>
        </div>
    </footer>
</template>

<script>
    import BaseUtil from "utils/base.js"
    export default {
        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {
            goInnovation (){
                const url = window.location.origin + '/citic-web-ui/product/innovation/index';
                window.open(url, '_blank')
            }
        },

        computed: {},

        watch: {},

        components: {},
    }
</script>


