<style lang="scss" scoped>
    .step-bar{
        width: 90%;
        height: 50px;
        margin: 50px auto 25px;
        padding-left: 270px;
    }
</style>
<style lang="scss">
    .step-bar{
        .ivu-steps-status-finish{
            .ivu-steps-title{
                color: #00BBF1 !important;
            }
            .ivu-steps-tail>i:after{
                background-color: #00BBF1 !important;
            }
            .ivu-steps-head-inner{
                border-color: #00BBF1 !important;
                .ivu-steps-icon{
                    color: #00BBF1 !important;
                }
            }
        }
        .ivu-steps-status-process{
            .ivu-steps-title{
                color: #00BBF1 !important;
            }
            .ivu-steps-head-inner{
                background-color: #00BBF1 !important;
                border-color: #00BBF1 !important;
            }
        }
    }
</style>

<template>
    <div class="step-bar">
        <Steps :current="current" :status="stepStatus">
            <Step v-for="(item,index) in statusFlow" :title="item.type" :key="index"></Step>
        </Steps>
    </div>
</template>

<script>
    export default {
        props: {
            statusFlow: {
                type: Array
            }
        },

        data() {
            return {
                current:0,
                stepStatus:'process'
            }
        },

        created(){
            this.setStatusStep();
        },
        methods: {
            setStatusStep() {
                let step = -1;
                this.statusFlow.forEach((item) => {
                    if (item.status == 1) {
                        step += item.status;
                    }

                    if(step === this.statusFlow.length - 1){
                        step++;
                    }
                });
                this.current = step;
            }
        },
        watch:{
            statusFlow(val){
                this.setStatusStep();
            }
        }
    }
</script>
