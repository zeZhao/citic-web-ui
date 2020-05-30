<template>
    <div class="agree-wrapper">
        <div class="state-item">
            <Row>
                <Col span="4">
                    <div class="step state-testing">
                        <Icon type="ios-time" style="font-size: 90px" />
                    </div>
                </Col>
                <Col span="20">
                    <div class="state-tit">
                        <p class="state-txt">协议签署申请已提交，请耐心等候！</p>
                        <div class="state-time">申请时间：<span id="applydate">{{applydate}}</span></div>
                        <p class="redalert">
                            <span>提示：工作人员会在3个工作日内与您沟通签约事项。</span>
                            <span>如对协议内容有疑问请联系客服提交工单。</span>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {}
        },
        computed:{
            applydate(){
                return new Date().Format("yyyy-MM-dd hh:mm:ss")
    }
        }
    }
</script>

<style lang="scss" scoped>
    .agree-wrapper{
        width: 100%;
        margin-top: 50px;
        .state-item{
            width: 50%;
            margin: 30px auto;
            overflow: hidden;
        }
        .state-testing{
            display: inline-block;
        }
        .state-tit{
            display: inline-block;
            margin-left: 20px;
            .state-txt{
                color: #2385cc;
                font-weight: bolder;
                font-size: 20px;
                margin-bottom: 6px;
                display: block;
            }
            .state-time{
                font-size: 14px;
                line-height: 30px;
            }
            .redalert{
                font-size: 14px;
                color: red;
            }
        }
    }

</style>
