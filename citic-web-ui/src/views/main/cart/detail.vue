<style scoped lang="scss">

</style>

<template>
    <ci-content-frame>
        <ci-content-header :title="title"></ci-content-header>
        <ci-order-info :order="order" :priceList="priceList"></ci-order-info>
    </ci-content-frame>
</template>

<script>
    import orderInfo from '../../../components/console/order/orderInfo'

    export default {
        data() {
            return {
                title: '',
                order: [],
                priceList: [],
            };
        },

        created() {
            this.initData();
        },

        mounted() {

        },

        beforeDestroy(){

        },

        methods: {
            initData(){
                const config = this.$getSession(this.$LOCAL_STORAGE_KEYS.CART_INSTANCE_INFO);
                this.title = config.serviceName;
                const configList = config.configList.map(({ keyDisplay, valueDisplay , key, value}) => {

                    if(key === 'vmUserPassword' || key === 'vmConfirmPassword'){
                        valueDisplay = valueDisplay.replace(/\S/g, "*");
                    }

                    return {
                        keyDisplay,
                        valueDisplay,
                    }
                });

                configList.push({
                    keyDisplay: '实例数量',
                    valueDisplay: config.quantity,
                });

                configList.push({
                    keyDisplay: '自动续费',
                    valueDisplay: config.autoRenew ? "是" : "否",
                });

                configList.push({
                    keyDisplay: '备注',
                    valueDisplay: config.remarks,
                });

                configList.push({
                    keyDisplay: '成本中心',
                    valueDisplay: config.costCenterName,
                });

                configList.push({
                    keyDisplay: '应用基线',
                    valueDisplay: config.appBaseName,
                });



                this.order = configList;
                this.priceList = config.priceList;
            }
        },

        computed: {},

        watch: {},

        components: {
            'ci-order-info': orderInfo,
        },
    }
</script>
