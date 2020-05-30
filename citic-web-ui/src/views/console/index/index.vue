<template>

    <div class="console-index">
        <Row>
            <i-col span="12">
                 <ci-account-credit/>

            </i-col>
            <i-col span="12">
               <ci-back-log></ci-back-log>
            </i-col>
        </Row>
        <ci-my-service-instance style="margin-top:15px;"/>

    </div>

</template>

<script>
    import MyServiceInstance from "com/console/index/my-service-instance";
    import BackLog from "com/console/index/backlog";
    import AccountOverview from "com/console/index/account-overview";
    import AccountCredit from "../../../components/console/index/account-credit";

    export default {
        data() {
            return {};
        },
        components: {
            "ci-my-service-instance": MyServiceInstance,
            "ci-back-log": BackLog,
            "ci-account-credit": AccountCredit,
        },
        methods: {}
    };
</script>

<style scoped>
    .console-index {
        width: 100%;
        /*min-height: 800px;*/

        /* background: #ffffff; */
        /*margin-top: 20px;*/
    }
</style>
