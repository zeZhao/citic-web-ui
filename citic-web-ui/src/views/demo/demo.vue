<style scoped>


</style>

<template>
    <div>
        <ci-certificate-image :param="param" style="width: 900px"/>

        <Button @click="showCheck">身份验证</Button>
        <Button @click="getFingerprint">生成指纹</Button>
        <Button @click="()=>checkAnnotation()">注解测试</Button>

        <Input v-model="req" />
        <Button @click="()=>testUrl()">测试编码</Button>
    </div>
</template>

<script>
    import certificateImage from "../../components/console/cert/certificate-image"
    import {IdentityActionCheck} from "../../annotation/identityCheckAnnotation";

    export default {

        data() {
            return {
                param: {
                    company: '中信云网有限公司',
                    application: '旗下网站',
                    domain: 'www.c.citic',
                    content: '已经通过中信品牌认证。中信品牌认证是中信集团品牌管理办公室通过中信云平台品牌在线认证系统，为授权使用中信品牌的子公司门户网站等互联网渠道应用开展数字化品牌认证服务。通过认证的子公司互联网渠道将统一在集团官网公示，便于社会公众查证识别。',
                    authCode: '2018061300000053',
                    effectiveDate: '2018-06-13至2021-06-13',
                    authDate: '2018-06-13',
                    organ: '中信集团品牌委员会办公室',
                },

                req: '',
            }
        },
        components: {
            "ci-certificate-image": certificateImage,
        },
        methods: {
            showCheck() {
                this.$identityCheck({
                    actionType: 'login',
                    success: () => console.log("调用成功!"),
                    cancel: () => console.log("close!!!"),
                });
            },

            async getFingerprint() {
                const res = await this.$fingerprint.get();
                console.log("===========murmur:", res);
            },

            @IdentityActionCheck("VERIFY_ORDER_CHECK")
            checkAnnotation() {
                console.log("原始方法，this:", this.$API_ENUM);
            },

            async testUrl(){
                this.$post("http://localhost:8888/api/post", {
                    req: this.req
                }).then(res => console.log(res));
            }
        },
    };

</script>
