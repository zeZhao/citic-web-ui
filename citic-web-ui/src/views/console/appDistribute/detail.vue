<style scoped>

</style>

<template>
    <ci-content-frame>
        <Card>
            <div v-if="detail">
                <ci-status-info :detail="detail" @reload="getDetail"/>
                <ci-app-info :detail="detail"/>
            </div>
        </Card>
    </ci-content-frame>
</template>

<script>

    import statusInfo from '../../../components/console/appDistribute/statusInfo';
    import appInfo from '../../../components/console/appDistribute/appInfo';

    export default {

        data() {

            const {id} = this.$route.query;

            return {
                instanceId: id,
                detail: null
            }
        },

        created() {
            this.getDetail();
        },

        methods: {

            async getDetail() {
                const res = await this.$get(`${this.$API_ENUM.APP_DISTRIBUTION_INSTANCES}/${this.instanceId}?isBrand=tenant`);

                if (resOk(res)) {
                    this.detail = res.data[0]
                }

            }

        },

        components: {
            'ci-status-info': statusInfo,
            'ci-app-info': appInfo,
        }
    }
</script>
