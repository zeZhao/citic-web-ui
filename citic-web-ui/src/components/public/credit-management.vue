<template>
    <Alert type="warning" show-icon v-if="creditProhibit">
        <p>尊敬的租户，您的采购金额已超出信用额度，暂时无法采购新服务。</p>
        <p>请您及时还款以免影响您的使用。申请调额请联系<a @click="openCustomerService">中信云客服</a>或拨打4000123600查询。</p>
    </Alert>
</template>

<script>
    export default {
        data(){
            return {
                creditProhibit: false
            }
        },

        created(){
            this.getCreditInfo();
        },

        methods: {
            /**
             * 获取用户信用数据
             */
            async getCreditInfo(){
                // const res = await this.$get(this.$API_ENUM.CITIC_ACCOUNT_CREDIT_TID);
                // if(resOk(res)){
                //     const {outfulFlag} = res.data;
                //     this.creditProhibit = outfulFlag;
                //
                //     this.$emit('credit-info-change', outfulFlag)
                // }

                // 订单里加了信用管控，购买时要去掉信用管控
                // 默认信用管控结果为正常不限制购买
                // ｗａｎｇｐｅｉｊｉａｎ
                this.$emit('credit-info-change', false)
            },

            /**
             * 开启客服小窗口
             */
            openCustomerService() {
                window.open("//citic.kf5.com/kchat?supportbox=1&active_in_iframe=0&","中信云客服", 'width=360, height=540');
            }
        }
    }
</script>

<style scoped>

</style>
