<style scoped lang="scss">
    .head-group:after {
        content: "\0020";
        display: block;
        height: 0;
        clear: both;
    }

    .head-main {
        background: rgb(66, 64, 65);
        height: 80px;
        color: #FFFFFF;
        overflow: hidden;
        .head-group {
            width: 1200px;
            margin: auto;
            line-height: 80px;
            .left {
                .icon {
                    vertical-align: middle;
                    cursor: pointer;
                }
            }
            .middle {

            }
            .right {
                width: 230px;
                text-align: right;
                border-left: 1px solid rgb(64, 62, 63);
                margin-top: -1px;
                .console {
                    font-size: 14px;
                    color: #FFFFFF;
                    margin-left: 30px;
                    line-height: 50px;
                }
            }
        }

    }


</style>
<template>
    <div class="head-main">
        <Row class="head-group">
            <i-col span="3">
          <span class="left" @click="go">
            <img src="~static/images/public/logo-white.png" class="icon">
          </span>
            </i-col>
            <i-col span="16" class="middle">
                <ci-head-menu type="0"></ci-head-menu>
            </i-col>
            <i-col span="5" class="right">
                <ci-head-login></ci-head-login>

            </i-col>
        </Row>
    </div>
</template>

<script>
    import headLoginMain from "com/public/head/head-login-main.vue";
    import headMenu from "com/public/head/head-main-menu.vue";

    export default {
        data() {
            return {}
        },
        components: {
            "ci-head-login": headLoginMain,
            "ci-head-menu": headMenu
        },
        methods: {
            go() {
                location.href = location.origin + "/citic-web-ui/"
            }
        }
    }
</script>


