<style scoped lang="scss">
    .identity-config-page {

        .content {
            background: #fff;
            padding: 0 20px 200px 20px;

            .page-title {
                border-bottom: 1px solid #e5e5e5;
                font-size: 16px;
                font-weight: normal;
                padding: 10px 0;
                color: #333;
            }

            .tips {
                color: #999999;
                font-size: 14px;
                padding: 20px 10px;
                border-bottom: 1px solid #e5e5e5;
            }

            .btn-group {
                padding-top: 20px;
                text-align: center;

                .submit, .cancel {
                    width: 150px;
                }

                .right {
                    float: right;
                }
            }
        }
    }
</style>

<template>
    <ci-content-frame class="identity-config-page">
        <div class="content">
            <h2 class="page-title">
                配置身份验证
            </h2>

            <p class="tips">
                为防止由于您操作失误，或您的登录账号被盗，产生不实订单或错误访问的情况。
                当您在做下列操作时，进行登录身份的验证。
            </p>

            <ci-select-tree class="form-line" :disabled="disabled" :root="root" v-model="selectKeys"></ci-select-tree>

            <div class="btn-group">
                <Button class="submit" type="info" v-show="!disabled" @click="submit" :loading="loading">确定</Button>
                <Button class="cancel" type="error" v-show="!disabled" @click="cancel">取消</Button>
                <Button class="right" type="info" v-show="disabled" @click="doConfig">配置需要验证身份的操作</Button>
            </div>
        </div>
    </ci-content-frame>
</template>

<script>
    import SelectTree from '../../../components/console/identityConfig/selectTree';
    import {IdentityActionCheck} from "../../../annotation/identityCheckAnnotation";

    export default {
        data() {
            return {
                selectKeys: [],

                root: [],

                selectDefault: [],

                disabled: true,

                loading: false,
            }
        },

        created() {
            this.initData();
        },

        methods: {

            /**
             * 加载接口数据
             */
            initData() {

                Promise.all([
                    this.$get(this.$API_ENUM.USER_OPERATION_VERIFY_USER_OPERATION_VERIFY_MENU),
                    this.$get(this.$API_ENUM.USER_OPERATION_VERIFY_USER_VERIFY_MAPPING),
                ]).then(resArr => {
                    const [menuRes, configRes] = resArr;

                    if (!resOk(menuRes) || !resOk(configRes)) {
                        return;
                    }

                    const menuData = menuRes.data;
                    const configData = configRes.data;

                    // 将后台数据格式化成组件需要的数据格式
                    this.root = this.formatMenuData(menuData);

                    // 默认选中的数据
                    this.selectKeys = configData;

                    // 深拷贝初始化数据
                    this.selectDefault = [...configData];
                });
            },

            /**
             * 格式化接口返回的菜单数据
             */
            formatMenuData(data) {

                return data.map(item => {

                    const {menuEnum: key, name: label, childUserVerifyMenu: child} = item;

                    const res = {label};

                    if (key) {
                        res['key'] = key;
                    }

                    if (child) {
                        res['child'] = this.formatMenuData(child);
                    }

                    return res;
                })

            },

            /**
             * 开始配置
             */
            doConfig() {
                this.disabled = false;
            },

            cancel() {
                this.disabled = true;
                // 取消操作，恢复默认数据
                this.selectKeys = [...this.selectDefault];
            },

            /**
             * 提交表单
             */
            submit() {
                this.saveUserConfig()
            },

            /**
             * 保存用户配置数据
             */
            @IdentityActionCheck({actionType: 'saveConfig'})
            saveUserConfig(){
                this.loading = true;
                this.$get(this.$API_ENUM.USER_OPERATION_VERIFY_SAVE_USER_VERIFY_MAPPING, {
                    menuEnums: this.selectKeys.join(',')
                }).then(res => {
                    if(resOk(res)){
                        this.$Message.success('操作成功');
                        this.selectDefault = [...this.selectKeys];
                        this.cancel();
                    }else{
                        this.$Message.error(res.message || '操作失败');
                    }

                    this.loading = false;
                })
            }

        },

        watch: {},

        computed: {},

        components: {
            'ci-select-tree': SelectTree,
        }
    }
</script>
