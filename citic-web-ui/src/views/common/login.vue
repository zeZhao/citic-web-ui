<style scoped lang="scss">
    .login {
        display: flex;
        height: 100%;
        min-height: 600px;
        min-width: 1200px;

        .header {
            height: 65px;
            background: #fff;
            position: fixed;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 9;

            .logo {
                display: inline-block;
                margin: 12px 70px;
            }

            .home-btn {
                float: right;
                line-height: 65px;
                text-align: center;
                width: 100px;
                border-left: 1px solid #cccccc;
                font-size: 14px;
                cursor: pointer;
            }
        }

        .content {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;

            .login-box {
                background: #fff;
                width: 456px;
                height: 400px;
                margin-right: 15%;
                transform: translateY(30px);

                .form {
                    height: 100%;

                    .form-header {
                        font-weight: normal;
                        font-size: 20px;
                        text-align: center;
                        padding: 15px;
                        box-shadow: 0 1px 15px 0 rgba(136, 136, 136, 0.5);
                    }

                    .form-body {
                        padding: 35px 50px;

                        .form-item {
                            padding-bottom: 15px;
                            position: relative;

                            .code{
                                width: 250px;
                            }

                            .verify-code{
                                width: 90px;
                                height: 43px;
                                float: right;
                                position: relative;
                                top: 1px;
                            }
                        }

                        .action-bar {
                            margin-top: 15px;
                            .btn {
                                display: inline-block;
                                cursor: pointer;

                                &.login-btn {
                                    color: #89c9fa;
                                }

                                &.forget-btn {
                                    color: #d5091d;
                                    float: right;
                                }
                            }
                        }
                    }
                }

            }
        }
    }
</style>

<style lang="scss">
    .login {
        .content {
            .login-box {
                .form {
                    .form-body {
                        input {
                            height: 45px;
                        }

                        button {
                            height: 45px;
                            background: #d5091d;
                            border-color: #d5091d;

                            &:hover {
                                background: rgba(213, 9, 29, 0.8);
                                border-color: rgba(213, 9, 29, 0.8);
                            }

                            &:active {
                                background: #d5091d;
                                border-color: #d5091d;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="login">
        <header class="header">
            <img class="logo" src="../../../static/images/public/logo-black.png">
            <span class="home-btn">首页</span>
        </header>

        <div class="content" :style="{'background-image': `url(${backgroundImg})`}">
            <div class="login-box">
                <div class="form">
                    <h1 class="form-header">用户登录</h1>

                    <div class="form-body">
                        <div class="form-item">
                            <Input type="text" size="large" placeholder="请输入手机号/邮箱" v-model="form.userName"/>
                            <ci-error-tip :error.sync="error.userNameError" />
                        </div>

                        <div class="form-item">
                            <Input type="password" size="large" placeholder="请输入密码" v-model="form.password"/>
                            <ci-error-tip :error.sync="error.passwordError" />
                        </div>

                        <div class="form-item">
                            <Input class="code" type="text" size="large" placeholder="请输入验证码" :maxlength="4" v-model="form.verifyCode"/>
                            <img class="verify-code" :src="verifyCodeImage" @click="changeVerifyCode">
                            <ci-error-tip :error.sync="error.verifyCodeError" />
                        </div>

                        <!--<Button type="error" long @click="submit">登录</Button>-->
                        <ci-halo-button @click="submit">登录</ci-halo-button>

                        <div class="action-bar">
                            <span class="btn login-btn">新用户注册</span>
                            <span class="btn forget-btn">忘记密码？</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import errorTip from '../../components/common/login/errorTip';
    import backgroundImg from '../../../static/images/common/login/background.jpg'

    export default {
        data() {
            return {
                backgroundImg,
                verifyCodeImage: '',

                form:{
                    userName: '',
                    password: '',
                    verifyCode:'',
                },

                error:{
                    userNameError: '',
                    passwordError: '',
                    verifyCodeError: '',
                },
            };
        },

        created() {
            this.changeVerifyCode();
        },

        mounted() {

        },

        methods: {

            submit() {
                let verify = true;
                if (this.form.userName.trim() === '') {
                    this.error.userNameError = '账号不能为空，请重新输入';
                    verify = false
                }else {
                    this.error.userNameError = '';
                }

                if (this.form.password.trim() === '') {
                    this.error.passwordError = '密码不能为空，请重新输入';
                    verify = false
                }else {
                    this.error.passwordError = '';
                }

                if (this.form.verifyCode.trim() === '') {
                    this.error.verifyCodeError = '验证码不能为空，请重新输入';
                    verify = false
                }else if (this.form.verifyCode.trim().length < 4){
                    this.error.verifyCodeError = '您输入的验证码有误，请重新输入';
                    verify = false
                }else {
                    this.error.verifyCodeError = '';
                }

                if(!verify){
                    return;
                }

                this.$post()
            },

            changeVerifyCode(){
                this.verifyCodeImage = `http://uuidptest.c.citic/idp/Kaptcha.jpg?dt=${new Date().getTime()}`
            },
        },

        computed: {},

        watch: {},

        components: {
            'ci-error-tip': errorTip,
        },
    }
</script>
