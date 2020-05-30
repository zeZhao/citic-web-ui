<template>
    <div class="">
        <ci-fix-bar></ci-fix-bar>
        <ci-head-product/>
        <router-view/>
        <ci-foot/>
    </div>
</template>

<script>
    import headProduct from '../../components/public/headMain'
    import FixBar from "com/public/fix-bar/right-fix-bar.vue";

    export default {
        data() {
            return {
            }
        },
        components: {
            'ci-head-product': headProduct,
            'ci-fix-bar': FixBar
        },
        mounted(){
        },
        methods:{
        },
    }
</script>

<style lang="scss">
    body {
    }
</style>

