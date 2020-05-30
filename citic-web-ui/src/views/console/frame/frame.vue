<template>
    <div class="console-frame">
        <iframe id="third-party-console" class="" ref="iframe" :src="url" frameborder="0" scrolling="auto"
                marginheight="0" marginwidth="0" width="100%" height="100%" name="mainframe"></iframe>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>

<script>
    export default {
        data() {

            let {baseUrl, param} = this.$route.query
            console.log(baseUrl, param)
            return {
                baseUrl,
                param,
                url: '',
                spinShow: true
            }
        },
        components: {},
        watch: {
            $route(to, from) {
                this.baseUrl = this.$route.query.baseUrl
                this.param = this.$route.query.param
                this.getUrl()
            }
        },
        mounted() {
            this.getUrl()
        },
        methods: {
            async getUrl() {
                // console.log(this.)
                let res = await this.$get(this.baseUrl, this.param);
                let toUrl = res.data
                if (toUrl) {
                    this.url = toUrl
                    let iframe = document.getElementById('third-party-console');
                    iframe.onload = () => {
                        this.spinShow = false
                    }
                } else {
                    this.$Message.error('您还未购买该服务')
                    this.$router.push({
                        path: '/citic-web-ui/console/index',
                    });
                }

            },
        },
    }
</script>

<style scoped>
    .console-frame {
        /*margin-top: 20px;*/
        padding-right: 4px;
        height: 96%;
    }
</style>

