<!-- 租户管理员管理 -->
<style  scoped lang="scss">
.iframe-group {
  width: 100%;
  min-height: 800px;
  border: none;
}
</style>
<template>
    <Card class="main" title="租户管理员管理">
        <!-- <p slot="title">明细账单</p> -->
        <iframe :src="iframUrl" class="iframe-group"></iframe>
    </Card>
</template>

<script>
export default {
    data () {
        return {
            iframUrl:'/views/auth/tenantjurisdic.jsp'
        };
    },

    mounted(){},

    components: {},

    computed: {},

    methods: {}
}

</script>
