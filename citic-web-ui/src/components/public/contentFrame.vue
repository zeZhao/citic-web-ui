<style scoped lang="scss">
    .background {
        padding: 0 0 20px 0;
        background: #f5f5f5;

        .content {
            width: 100%;
            margin: 0 auto;
        }
    }
</style>

<template>
    <div class="background">
        <div class="content" :style="{width: contentWidth ? `${contentWidth}px` : 'auto'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            contentWidth: {
                type: Number,
            }
        },

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
