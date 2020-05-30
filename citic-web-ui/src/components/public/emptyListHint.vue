<style scoped lang="scss">
    .empty-image{
        background: url("../../../static/images/public/empty-list.png") center no-repeat;
        background-size: 80px;
        height: 400px;
        position: relative;

        &::after{
            content: "暂无数据~";
            display: block;
            position: absolute;
            top: 240px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            color: #1a1a1a;
        }
    }
</style>

<template>
    <div class="empty-image"></div>
</template>

<script>
    export default {
        data() {
            return {};
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        computed: {},

        watch: {},

        components: {},
    }
</script>
