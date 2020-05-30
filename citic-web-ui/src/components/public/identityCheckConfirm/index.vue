<style lang="scss" scoped>

    .identity-check-confirm-mask {
        z-index: 1009;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.37);
        display: flex;
        align-items: center;
        justify-content: center;

        .identity-check-confirm {
            background: #f7f7f7;
            width: 560px;
            /*height: 290px;*/
            position: relative;
            transform: translateY(-40%);

            .close-btn {
                position: absolute;
                top: -55px;
                right: 0;
                font-size: 60px;
                color: #fff;
                cursor: pointer;
            }

            .body {
                padding: 30px 60px 0 60px;

                .title {
                    color: #333;
                    font-size: 16px;
                    text-align: center;
                }

                .content {
                    color: #666;
                    font-size: 14px;
                    padding: 30px 0 25px 0;
                }

                .input-form {
                    text-align: center;

                    .alert-tip {
                        text-align: left;

                        span {
                            color: #D9001B;
                        }
                    }

                    .check-channel-group {
                        text-align: left;
                        padding: 10px 0 20px 80px;
                    }

                    .input {
                        width: 210px;
                        margin-right: 8px;
                    }

                    .send-code-btn {
                        width: 150px;

                        &[disabled] {
                            color: #fff;
                            background-color: rgba(87, 163, 243, 0.71);
                            border-color: rgba(87, 163, 243, 0.71);
                        }
                    }

                    .error-tip {
                        padding: 7px 0 7px 35px;
                        color: #ed3f14;
                        text-align: left;
                    }
                }
            }

            .close-check-bar {
                padding: 0 0 20px 0;
                text-align: center;

                span {
                    color: #02A7F0;
                }
            }

            .footer {
                background: #fff;
                height: 75px;
                text-align: center;
                padding-top: 20px;

                .submit-btn {
                    height: 36px;
                    width: 130px;
                    color: #fff;
                    background-color: #ed3f14;
                    border-color: #ed3f14;

                    &:hover {
                        background-color: #f16543;
                        border-color: #f16543;
                    }

                    &[disabled] {
                        background-color: rgba(241, 101, 67, 0.7);
                        border-color: rgba(241, 101, 67, 0.7);
                    }
                }
            }
        }
    }

</style>

<template>
    <div :id="rootId">

        <Spin size="large" fix v-if="!showConfirm"></Spin>

        <div class="identity-check-confirm-mask" v-show="showConfirm">

            <div class="identity-check-confirm">
                <Icon class="close-btn" type="ios-close-empty" @click="close"></Icon>

                <div class="body">
                    <h2 class="title">{{activeConfig.title}}</h2>

                    <p class="content">{{activeConfig.tips}}</p>

                    <div class="input-form">

                        <!--校验方式提示信息-->
                        <Alert type="warning" show-icon class="alert-tip">提示：请您选择真实有效的联系方式，信息错误将可能导致您不能登录平台。<span>若信息不准确，请尽快联系客服更新。</span>
                        </Alert>

                        <!--选择校验方式-->
                        <div class="check-channel-group">
                            <RadioGroup v-model="checkChannel" vertical>
                                <Radio label="phone" :disabled="!phone">
                                    <span>手机  您预留的手机号为：{{phone}}</span>
                                </Radio>
                                <Radio label="email" :disabled="!email">
                                    <span>邮箱  您预留的的邮箱是：{{email}}</span>
                                </Radio>
                            </RadioGroup>
                        </div>

                        <!--验证码校验-->
                        <Input class="input" v-model="code" :placeholder="placeholder" :maxlength="codeLength"
                               :clearable="true"/>
                        <Button class="send-code-btn" type="primary"
                                :disabled="sendCodeLoading"
                                :loading="loading"
                                @click="sendCode">
                            {{sendButtonText}}{{countDownText}}
                        </Button>
                        <p class="error-tip">{{errorTip}}&nbsp;</p>
                    </div>
                </div>

                <p class="close-check-bar" v-if="activeConfig.showCloseCheck">
                    <Checkbox v-model="closeCheck">
                        以后不再验证，您可在 <span>账户安全设置</span>-><span>登录环境保护设置</span> 中开启或关闭验证。
                    </Checkbox>
                </p>

                <div class="footer">
                    <Button class="submit-btn error" shape="circle" @click="submitCode" :disabled="submitDisabled">确定
                    </Button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Index",

        props: {
            rootId: {
                type: String,
                required: true,
            },

            /**
             * 认证类型
             * login: 登录异常
             * action： 操作确认
             * saveConfig: 保存权限校验菜单配置
             */
            actionType: {
                type: String,
                required: false,
                // 登录异常统一在接口请求时校验
                // 操作确认需要在不同操作业务逻辑上添加
                // 为了减少不同业务调用的透明性，默认认证类型设置为：操作确认（action）类型
                default: 'action'
            },

            /**
             * 短信验证码重新发送时间间隔
             */
            countDownInterval: {
                type: Number,
                required: false,
                default: 60,
            },

            /**
             * 短信验证码长度
             */
            codeLength: {
                type: Number,
                required: false,
                default: 6,
            },

            /**
             * 认证成功回调函数
             */
            success: {
                type: Function,
                required: true,
            },

            /**
             * 关闭认证窗口回调函数
             */
            cancel: {
                type: Function,
                required: false,
                default: () => {
                    console.info("退出身份验证");
                }
            },

            /**
             * 特殊业务附加参数传递
             */
            param: {
                type: Object,
                required: false,
                default: () => {
                    return {}
                }
            }
        },

        data() {
            return {
                // 是否展示确认框
                showConfirm: false,
                // 验证码
                code: '',
                // 验证码错误提示
                errorTip: '',
                // 倒计时
                countDownNum: 0,
                // 倒计时定时器
                timer: null,

                // 验证码发送中
                loading: false,

                // 关闭验证
                closeCheck: false,

                // 校验方式 phone: 手机 email: 邮件
                checkChannel: '',
                phone: '',
                email: '',


                // 配置当前组件支持的所有异常操作类型
                config: {
                    // 登录异常验证
                    login: {
                        title: '异常登录验证',
                        tips: '系统检测到您登录异常，系统将对您的身份进行二次验证，请您选择验证方式。',
                        sendSmsAPI: this.$API_ENUM.USER_VERIFY_SEND_USER_VERIFY_SMS,
                        checkSmsAPI: this.$API_ENUM.USER_VERIFY_CHECK_USER_VERIFY_CODE,
                        checkIgnore: () => false,
                        // 展示关闭该校验的勾选框
                        showCloseCheck: true,
                    },

                    // 特殊操作认证
                    action: {
                        title: '用户身份验证',
                        tips: '为确认是你本人操作，请选择验证方式完成身份验证：',
                        sendSmsAPI: this.$API_ENUM.USER_OPERATION_VERIFY_SEND_USER_VERIFY_MENU_SMS,
                        checkSmsAPI: this.$API_ENUM.USER_OPERATION_VERIFY_OPERATION_CHECK_USER_VERIFY_CODE,
                        checkIgnore: () => {
                            return this.$get(this.$API_ENUM.USER_OPERATION_VERIFY_CHECK_USER_OPERATION_VERIFY, {
                                menuEnum: this.param.menuEnum
                            }).then(res => {
                                return resOk(res);
                            })
                        },
                        // 展示关闭该校验的勾选框
                        showCloseCheck: false,
                    },

                    // 保存异常操作配置
                    saveConfig: {
                        title: '用户身份验证',
                        tips: '为确认是你本人操作，请选择验证方式完成身份验证：',
                        sendSmsAPI: this.$API_ENUM.USER_OPERATION_VERIFY_SEND_USER_CONFIG_MENU_SMS,
                        checkSmsAPI: this.$API_ENUM.USER_OPERATION_VERIFY_MENU_CONFIG_CHECK_USER_VERIFY_CODE,
                        checkIgnore: () => false,
                        // 展示关闭该校验的勾选框
                        showCloseCheck: false,
                    },

                    // 保存操作开关
                    saveActionSwitch: {
                        title: '用户身份验证',
                        tips: '为确认是你本人操作，请选择验证方式完成身份验证：',
                        sendSmsAPI: this.$API_ENUM.USER_ACTION_SWITCH_SEND_SET_ACTION_VERIFY_CODE,
                        checkSmsAPI: this.$API_ENUM.USER_ACTION_SWITCH_CHECK_SET_ACTION_VERIFY_CODE,
                        checkIgnore: () => false,
                        // 展示关闭该校验的勾选框
                        showCloseCheck: false,
                    }
                }
            }
        },

        created() {
            this.initStatus();
        },

        methods: {

            /**
             * 初始化组件，检查当前操作是否需要执行校验流程
             */
            async initStatus() {
                const ignore = await this.checkIgnore();
                // 本次操作不需要校验，直接执行成功回调
                if (ignore) {
                    this.identitySuccess();
                    return;
                }

                // 操作需要进行校验，展示弹窗
                this.showConfirm = true;
                this.getRecipientInfo();
                this.recoveryStatus();
            },

            /**
             * 获取用户接收短信验证码的方式
             */
            async getRecipientInfo(){
                const res = await this.$get(this.$API_ENUM.USER_VERIFY_GET_RECIPIENT_INFO);

                if(resOk(res)){
                    const {phone, email} = res.data;
                    this.phone = phone;
                    this.email = email;
                    this.checkChannel = phone ? "phone" : "email";
                }
            },

            /**
             * 卸载当前组件dom
             */
            _removeSelf() {
                clearInterval(this.timer);
                document.getElementById(this.rootId).remove();
            },

            /**
             * 关闭当前弹窗
             */
            close() {
                this.cancel();
                this._removeSelf();
            },

            /**
             * 发送短信验证码
             */
            async sendCode() {
                this.loading = true;
                // 重新发送短信验证码，清空错误提示
                this.errorTip = '';

                const res = await this.$get(`${this.activeConfig.sendSmsAPI}?sendType=${this.checkChannel}`,
                    {
                        menuEnum: this.param.menuEnum,
                        specialSign: this.param.specialSign,
                    }
                );
                this.loading = false;
                if (resOk(res)) {
                    this.setCountDown();
                    this.$Message.success(res.message);
                } else {
                    this.$Message.error(res.message || '发送失败');
                }

            },

            /**
             * 不同操作类型可能需要预先校验是否需要对此次操作进行校验
             *
             * 每次做操作前先校验当前操作需不需要重新认证
             */
            checkIgnore() {
                if (this.activeConfig.checkIgnore) {
                    return this.activeConfig.checkIgnore();
                }

                // 默认不忽略
                return false;
            },

            /**
             * 根据缓存记录恢复短信验证码倒计时
             */
            recoveryStatus() {
                const startTime = this.$getSession(this.sessionKey);
                const now = new Date().getTime();

                const interval = Number((startTime + this.countDownInterval * 1000 - now) / 1000).toFixed();

                this.countDownNum = Math.max(Number(interval), 0);

                this._startCountDown();
            },

            /**
             * 开始重新发送短信验证码倒计时
             */
            setCountDown() {
                const time = new Date().getTime();
                this.$setSession(this.sessionKey, time);
                this.countDownNum = this.countDownInterval;

                this._startCountDown();
            },

            /**
             * 开启定时任务计算倒计时
             */
            _startCountDown() {

                if (this.countDownNum <= 0) {
                    this.countDownNum = 0;
                    return;
                }

                this.timer = setInterval(() => {
                    this.countDownNum -= 1;

                    if (this.countDownNum <= 0) {
                        this.countDownNum = 0;
                        this.$setSession(this.sessionKey);
                        clearInterval(this.timer);
                    }

                }, 1000);
            },

            /**
             * 提交短信验证码
             */
            async submitCode() {

                const res = await this.$get(`${this.activeConfig.checkSmsAPI}?verificationCode=${this.code}`,
                    {
                        menuEnum: this.param.menuEnum,
                        specialSign: this.param.specialSign,
                        // 登录验证关闭下次验证操作
                        closeCheck: this.closeCheck
                    }
                );

                if (resOk(res)) {
                    this.errorTip = '';
                    this.identitySuccess();
                } else {
                    this.errorTip = res.message || '验证码校验失败';
                }
            },

            /**
             * 身份校验成功
             */
            identitySuccess() {
                // this.$Message.success("身份验证成功");
                this.success();
                this._removeSelf();
            }
        },

        computed: {

            /**
             * 返回生效的配置
             */
            activeConfig() {
                return this.config[this.actionType];
            },

            /**
             * 是否禁用提交按钮
             */
            submitDisabled() {
                const code = `${this.code}`;
                return (
                    // 短信验证码长度校验
                    code.length !== this.codeLength
                    // 短信验证码输入正确性校验
                    || !/^[0-9]+$/.test(code)
                )
            },

            /**
             * 倒计时文案
             */
            countDownText() {
                if (this.countDownNum) {
                    return `(${this.countDownNum}s)`;
                }
            },

            /**
             * 是否等待重新发送验证码
             */
            sendCodeLoading() {
                return this.countDownNum !== 0;
            },

            /**
             * 获取 sessionStorage Key
             * @returns {string}
             */
            sessionKey() {
                return `send_verification_code_count_down_${this.actionType}`;
            },

            /**
             * 输入框内容
             * @returns {string}
             */
            placeholder() {
                switch (this.checkChannel) {
                    case "phone":
                    case "email":
                        return "请输入验证码";
                    default:
                        return "请输入验证码";
                }
            },

            /**
             * 发送按钮文案
             * @returns {string}
             */
            sendButtonText() {
                switch (this.checkChannel) {
                    case "phone":
                        return "发送短信验证码";
                    case "email":
                        return "发送邮件验证码";
                    default:
                        return "加载中";
                }
            }
        }
    }
</script>
