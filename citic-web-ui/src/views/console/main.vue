<style lang="scss" scoped>
    /*.content {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding-left: 229px;
        padding-top: 80px;
        background: #f5f5f5;
        overflow-x: auto;
        overflow-y: auto;
        min-width: 1211px;
    }

    .minLeft {
        padding-left: 32px;
    }

    .maxLeft {
        padding-left: 229px;
    }

    .fixbar {
        background: #d01816;
    }*/

    .console-frame{
        display: flex;
        flex-direction: column;
        height: 100%;

        .console-body{
            background: #f5f5f5;
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            height: calc(100% - 80px);

            .content{
                flex-grow: 1;
                padding: 0 10px 10px 10px;
                overflow-y: auto;
                overflow-x: auto;
                width: calc(100% - 220px);
            }
        }
    }

</style>


<template>
    <div class="console-frame">
        <!--页面头部-->
        <ci-console-head></ci-console-head>

        <!--页面内容-->
        <div class="console-body">
            <ci-console-menu @change="changeStyle"></ci-console-menu>

            <div class="content" :class="Left" :id="consoleContentId">
                <router-view/>
            </div>
        </div>

        <!--右侧浮动工具栏-->
        <v-fix-bar :consoleContentId="consoleContentId"></v-fix-bar>
    </div>
</template>

<script>
    //租户平台首页 axl
    import consoleHead from "com/public/headConsole.vue"
    import consoleMenu from "com/public/menu/console-menu.vue"
    import fixBar from "com/public/fix-bar/console-right-fix-bar";

    export default {
        data() {
            return {
                Left: '',

                consoleContentId: 'console-content'
            }
        },
        components: {
            "ci-console-head": consoleHead,
            "ci-console-menu": consoleMenu,
            "v-fix-bar": fixBar
        },
        mounted() {

        },
        methods: {
            changeStyle(Left) { // type是子组件$emit传递的参数
                this.Left = Left
            },
        },
    }
</script>
