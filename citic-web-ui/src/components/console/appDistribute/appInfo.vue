<style scoped lang="scss">
    .logo-img{
        max-width: 100%;
        height: 80px;
    }

    .screenshot-img{
        max-width: 25%;
        margin-right: 5px;
    }

    .distribution-channel{
        margin-right: 10px;
    }
</style>

<template>
    <Card>
        <p slot="title">
            分发应用信息
        </p>

        <Form label-position="left" :label-width="100">
            <FormItem label="申请人信息">

                <Form label-position="left" :label-width="100">
                    <FormItem label="已验证手机号">
                        {{appInfo.userInfoVo.mobile}}
                    </FormItem>

                    <FormItem label="已验证邮箱">
                        {{appInfo.userInfoVo.email}}
                    </FormItem>

                    <FormItem label="租户名">
                        {{appInfo.userInfoVo.userName}}
                    </FormItem>

                    <FormItem label="申请人姓名">
                        {{appInfo.userInfoVo.applicantName}}
                    </FormItem>
                </Form>

            </FormItem>

            <FormItem label="应用名称">
                {{appInfo.appName}}
            </FormItem>

            <FormItem label="应用类型">
                {{appInfo.appType}}
            </FormItem>

            <FormItem label="版本号">
                {{appInfo.appVersion}}
            </FormItem>

            <FormItem label="推荐语句">
                {{appInfo.recommend}}
            </FormItem>

            <FormItem label="版权资料">
                <a :href="appInfo.copyright">下载版权资料</a>
            </FormItem>

            <FormItem label="应用渠道">
                {{appInfo.appSysTypeName}}
            </FormItem>

            <FormItem label="支持语言">
                {{appInfo.supportLanguage}}
            </FormItem>

            <FormItem label="应用介绍">
                {{appInfo.appNote}}
            </FormItem>

            <FormItem label="资费类型">
                {{appInfo.tariffType}}
            </FormItem>

            <FormItem label="价格(元)">
                {{appInfo.price}}
            </FormItem>

            <FormItem label="应用logo">
                <img class="logo-img" :src="appInfo.logo">
            </FormItem>

            <FormItem label="应用截图">
                <img class="screenshot-img" v-for="(item, index) in appInfo.appScreenshotList" :src="item.appScreenshot" :key="index">
            </FormItem>

            <FormItem label="分发渠道">
                <label class="distribution-channel" v-for="(item, index) in appInfo.appDistributionChannelList" :key="index">{{item.channelName}}</label>
            </FormItem>

            <FormItem label="分发申请时间">
                {{appInfo.createTimeString}}
            </FormItem>
        </Form>
    </Card>
</template>

<script>
    export default {
        props: {
            detail: {
                required: true,
                default: {},
            }
        },

        data() {
            return {
                appInfo: {
                    userInfoVo: {
                        mobile: '',
                        email: '',
                        userName: '',
                        applicantName: '',
                    },

                    appName: '',
                    appTypeName: '',
                    appVersion: '',
                    recommend: '',
                    copyright: '',
                    appSysTypeName: '',
                    supportLanguage: '',
                    appNote: '',
                    tariffType: '',
                    price: '',
                    logo: '',
                    appScreenshotList: [],
                    appDistributionChannelList: [],
                    createTimeString: '',
                }
            }
        },

        created(){
            this.appInfo = Object.assign({}, this.detail);
        },

        methods: {

        }
    }
</script>
