<style scoped lang="scss">
.table-action-bar{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 15px 0;

    .action-panel{
        flex-grow: 1;

        &.left{
            button{
                margin-right: 15px;
            }
        }

        &.right{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            button{
                margin-left: 15px;
            }
        }
    }
}
</style>

<template>
    <div class="table-action-bar">
        <div class="action-panel left">
            <slot></slot>
        </div>


        <div class="action-panel right">
            <slot name="right"></slot>
        </div>

    </div>
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
