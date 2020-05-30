<style scoped lang="scss">
    .identity-config-page {

        .content {
            background: #fff;
            padding: 0 20px 40px 20px;

            .page-title {
                border-bottom: 1px solid #e5e5e5;
                font-size: 16px;
                font-weight: normal;
                padding: 10px 0;
                color: #333;
            }

            .tips {
                text-align: center;
                padding: 20px 0;
            }

            .alert-tip {
                margin: 0 auto;
                text-align: center;
            }

            .form-body {
                text-align: center;
                margin: 40px 0;

                span {
                    padding-right: 40px;
                }
            }

            .btn-group {
                text-align: center;
            }
        }
    }
</style>

<template>
    <ci-content-frame class="identity-config-page">
        <div class="content">
            <h2 class="page-title">
                登录环境保护设置
            </h2>

            <p class="tips">
                系统记录日常登录环境。当环境异常时，通过设置验证方式再次确认您的身份，进一步提高账号安全性，有效保护您的账户安全。
            </p>

            <Alert class="alert-tip" type="warning">提示：您的登录环境主要包括IP地址，浏览器指纹等。</Alert>

            <div class="form-body">
                <span>登录环境保护验证:</span>
                <RadioGroup v-model="currentData.open">
                    <Radio label="open" :disabled="disabled">开启</Radio>
                    <span></span>
                    <Radio label="close" :disabled="disabled">关闭</Radio>
                </RadioGroup>
            </div>

            <div class="btn-group">
                <template v-if="modify">
                    <Button style="margin-right: 20px;" type="info" @click="submit" :loading="loading">确定</Button>
                    <Button @click="closeModify" :loading="loading">取消</Button>
                </template>
                <template v-else>
                    <Button type="info" @click="openModify" :loading="loading">设置</Button>
                </template>
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

                loading: false,
                defaultData: {
                    open: '',
                },

                currentData: {
                    open: 'open',
                },

                modify: false,
            }
        },

        created() {
            this.initData();
        },

        methods: {

            /**
             * 加载接口数据
             */
            async initData() {
                const res = await this.$get(this.$API_ENUM.USER_ACTION_SWITCH_GET_CONFIG, {
                    userAction: 'LOGIN_VERIFY'
                });

                if (resOk(res)) {
                    // this.open = res.data;
                    const data = {
                        open: res.data
                    };

                    this.defaultData = {
                        ...data
                    };

                    this.currentData = {
                        ...data
                    };
                }
            },

            /**
             * 开启编辑模式
             */
            openModify() {
                this.modify = true;
            },

            /**
             * 关闭编辑模式
             */
            closeModify() {
                this.currentData = Object.assign({}, this.defaultData);
                this.modify = false;
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
                @IdentityActionCheck({actionType: 'saveActionSwitch'})
            saveUserConfig() {
                this.loading = true;
                this.$put(this.$API_ENUM.USER_ACTION_SWITCH_SET_CONFIG, {
                    userAction: 'LOGIN_VERIFY',
                    value: this.currentData.open,
                }).then(res => {
                    if (resOk(res)) {
                        this.$Message.success('操作成功');
                        this.defaultData = Object.assign({}, this.currentData);
                        this.closeModify();
                    } else {
                        this.$Message.error(res.message || '操作失败');
                    }
                    this.loading = false;
                })
            }

        },

        watch: {},

        computed: {
            disabled() {
                return !this.modify;
            }
        },

        components: {
            'ci-select-tree': SelectTree,
        }
    }
</script>
