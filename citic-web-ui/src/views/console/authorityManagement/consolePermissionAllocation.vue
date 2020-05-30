<!-- 控制台权限分配 -->
<style  scoped lang="scss">
.iframe-group {
  width: 100%;
  min-height: 800px;
  border: none;
}
</style>
<template>
    <Card class="main" title="控制台权限分配">
        <!-- <p slot="title">明细账单</p> -->
        <iframe :src="iframUrl" class="iframe-group"></iframe>
    </Card>
</template>

<script>
export default {
    data () {
        return {
            iframUrl:'/views/ram/ram_user_relation.jsp'
        };
    },

    mounted(){},

    components: {},

    computed: {},

    methods: {}
}

</script>
