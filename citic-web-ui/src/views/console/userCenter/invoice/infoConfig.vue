<style lang="scss">
.invoice-manage {
    overflow: hidden;
    .content-box {
        .title-box {
            height: 46px;
            line-height: 1;
            margin-top: 16px;
            margin: 16px 0 20px 0;
            border-bottom: 1px solid #e5e5e5;
            .form-title {
                display: inline-block;
                border-left: 2px solid #00b8ec;
                padding-left: 15px;
                margin: 14px 30px 0 0;
                box-sizing: border-box;
            }
            .view-btn {
                float: right;
                padding: 6px 12px;
                border: 1px solid #65b5ff;
                border-radius: 4px;
                color: #65b5ff;
                background-color: #fff;
                margin-top: 8px;
                cursor: pointer;
            }
        }
        /deep/ .ivu-form {
            width: 56%;
            /deep/ .ivu-input-wrapper {
                width: 50%;
            }
        }
        .foucsTip {
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 4px;
            margin-left: 20px;
            line-height: 1;
            padding-top: 6px;
            color: #ed3f14;
        }
        .save {
            width: 80px;
            height: 35px;
            margin-left: 120px !important;
        }
    }
    .title-wrapper {
        margin-bottom: 10px;
        border-bottom: 1px solid #fbfbfb;
        box-sizing: border-box;
        /deep/ .ivu-card-head {
            border: none;
        }
        /deep/ .ivu-card-body {
            padding: 0;
        }
    }
    /deep/ .ivu-alert-warning {
        border: 1px solid #ee9725;
        background-color: #fdfbe7;
        border-radius: 4px;
        font-size: 14px;
    }
    .required {
        /deep/ .ivu-form-item-label:before {
            content: "*";
            display: inline-block;
            color: #ed3f14;
            font-family: SimSun, serif;
            vertical-align: middle;
            margin-right: 4px;
            line-height: 1;
            font-size: 12px;
            position: relative;
            top: -1px;
        }
    }
}
</style>
<template>
    <div class="invoice-manage">
        <Card class="title-wrapper">
            <p slot="title">发票管理 - 发票信息配置</p>
        </Card>
        <Card class="main" :bordered="false" dis-hover>
            <Alert banner type="warning" show-icon>{{tips}}</Alert>
            <div class="content-box">
                <div class="clearfix title-box">
                    <span class="form-title">开票信息</span>
                    <button class="view-btn" @click="goInvoiceApply">查看我的发票</button>
                </div>
                <Form
                    ref="formValidate"
                    :model="formValidate"
                    :rules="ruleValidate"
                    :label-width="120"
                >
                    <FormItem label="发票抬头" prop="invoiceTitle">
                        <i-input
                            v-model="formValidate.invoiceTitle"
                            placeholder="输入企业全称"
                            :maxlength="50"
                            @on-focus="handleFocus('isShowTip1')"
                            @on-blur="handleBlur('isShowTip1')"
                        />
                        <span
                            v-if="onFousObj.isShowTip1"
                            class="foucsTip"
                        >限2-50位，仅支持输入汉字、英文字母、数字、特殊字符</span>
                    </FormItem>

                    <FormItem label="发票类型" prop="invoiceType">
                        <RadioGroup v-model="formValidate.invoiceType">
                            <Radio label="0">专用发票</Radio>
                            <Radio label="1">普通发票</Radio>
                        </RadioGroup>
                    </FormItem>

                    <FormItem
                        label="统一社会信用代码"
                        prop="identificationNo"
                        :class="formValidate.invoiceType == 0 ? 'required' : ''"
                    >
                        <i-input
                            v-model="formValidate.identificationNo"
                            placeholder="请输入统一社会信用代码"
                            :maxlength="18"
                            @on-focus="handleFocus('isShowTip2')"
                            @on-blur="handleBlur('isShowTip2')"
                        />
                        <span v-if="onFousObj.isShowTip2" class="foucsTip">限2-18位，仅支持英文字母、数字</span>
                    </FormItem>

                    <FormItem
                        label="开户银行名称"
                        prop="bankName"
                        :class="formValidate.invoiceType == 0 ? 'required' : ''"
                    >
                        <i-input
                            v-model="formValidate.bankName"
                            placeholder="请输入开户银行名称"
                            :maxlength="30"
                            @on-focus="handleFocus('isShowTip3')"
                            @on-blur="handleBlur('isShowTip3')"
                        />
                        <span v-if="onFousObj.isShowTip3" class="foucsTip">限2-30位，仅支持汉字、英文字母、数字</span>
                    </FormItem>

                    <FormItem
                        label="开户账号"
                        prop="bankNo"
                        :class="formValidate.invoiceType == 0 ? 'required' : ''"
                    >
                        <i-input
                            v-model="formValidate.bankNo"
                            placeholder="请输入企业对公账号"
                            :maxlength="30"
                            @on-focus="handleFocus('isShowTip4')"
                            @on-blur="handleBlur('isShowTip4')"
                        />
                        <span v-if="onFousObj.isShowTip4" class="foucsTip">限2-30位，输入仅支持数字</span>
                    </FormItem>

                    <FormItem
                        label="公司注册地址"
                        prop="companyAddr"
                        :class="formValidate.invoiceType == 0 ? 'required' : ''"
                    >
                        <i-input
                            v-model="formValidate.companyAddr"
                            placeholder="请输入公司注册地址"
                            :maxlength="50"
                            @on-focus="handleFocus('isShowTip5')"
                            @on-blur="handleBlur('isShowTip5')"
                        />
                        <span v-if="onFousObj.isShowTip5" class="foucsTip">限2-50位，仅支持汉字、英文字母、数字、特殊字符</span>
                    </FormItem>

                    <FormItem
                        label="注册电话"
                        prop="companyTelephone"
                        :class="formValidate.invoiceType == 0 ? 'required' : ''"
                    >
                        <i-input
                            v-model="formValidate.companyTelephone"
                            placeholder="请输入注册固定电话"
                            :maxlength="15"
                            @on-focus="handleFocus('isShowTip6')"
                            @on-blur="handleBlur('isShowTip6')"
                        />
                        <span v-if="onFousObj.isShowTip6" class="foucsTip">输入仅支持数字</span>
                    </FormItem>

                    <FormItem>
                        <Button
                            type="primary"
                            class="save"
                            @click="handleSubmit('formValidate')"
                            :disabled="!form1Btn"
                        >保存</Button>
                    </FormItem>
                </Form>
            </div>
            <div class="content-box">
                <div class="title-box">
                    <span class="form-title">联系人信息</span>
                </div>
                <Form
                    ref="formValidate2"
                    :model="formValidate2"
                    :rules="ruleValidate2"
                    :label-width="120"
                >
                    <FormItem label="联系人姓名" prop="contactsName">
                        <i-input
                            v-model="formValidate2.contactsName"
                            placeholder="输入联系人真实姓名"
                            :maxlength="15"
                            @on-focus="handleFocus('isShowTip7')"
                            @on-blur="handleBlur('isShowTip7')"
                        />
                        <span v-if="onFousObj.isShowTip7" class="foucsTip">限2-15个字，仅支持输入汉字、英文字母</span>
                    </FormItem>

                    <FormItem label="联系地址" prop="contactsAddr">
                        <i-input
                            v-model="formValidate2.contactsAddr"
                            placeholder="输入有效联系地址"
                            :maxlength="50"
                            @on-focus="handleFocus('isShowTip8')"
                            @on-blur="handleBlur('isShowTip8')"
                        />
                        <span v-if="onFousObj.isShowTip8" class="foucsTip">限5-50个字。仅支持汉字、数字、英文字母</span>
                    </FormItem>

                    <FormItem label="联系电话1" prop="contactsTelephone">
                        <i-input
                            v-model="formValidate2.contactsTelephone"
                            placeholder="请输入常用电话号码"
                            :maxlength="15"
                            @on-focus="handleFocus('isShowTip9')"
                            @on-blur="handleBlur('isShowTip9')"
                        />
                        <span v-if="onFousObj.isShowTip9" class="foucsTip">仅支持数字输入</span>
                    </FormItem>

                    <FormItem label="联系电话2" prop="contactsExtTelophone">
                        <i-input
                            v-model="formValidate2.contactsExtTelophone"
                            placeholder="请输入常用电话号码"
                            :maxlength="15"
                            @on-focus="handleFocus('isShowTip10')"
                            @on-blur="handleBlur('isShowTip10')"
                        />
                        <span v-if="onFousObj.isShowTip10" class="foucsTip">仅支持数字输入</span>
                    </FormItem>

                    <FormItem label="邮箱地址" prop="email">
                        <i-input
                            v-model="formValidate2.email"
                            placeholder="请输入常用邮箱，格式如：cloud@sina.com"
                            @on-focus="handleFocus('isShowTip11')"
                            @on-blur="handleBlur('isShowTip11')"
                        />
                        <span v-if="onFousObj.isShowTip1" class="foucsTip">限2-30位，仅支持汉字、英文字母、数字</span>
                    </FormItem>

                    <FormItem>
                        <Button
                            type="primary"
                            class="save"
                            @click="handleSubmit('formValidate2')"
                            :disabled="!form2Btn"
                        >保存</Button>
                    </FormItem>
                </Form>
            </div>
        </Card>
    </div>
</template>

<script>
import { formMixin } from "../../../../mixin";
export default {
    mixins: [formMixin],
    data() {
        const validateRequire = (rule, value, callback) => {
            if (this.formValidate.invoiceType == "0") {
                if (!value) {
                    return callback(new Error("不可为空"));
                }
            }
            callback();
        };
        return {
            tips:
                "提示：如提交信息不准确将会影响为您正常开票，请提交准确的开票信息和联系人信息。",
            onFousObj: {
                // 控制自定义提示信息显隐
                isShowTip1: false,
                isShowTip2: false,
                isShowTip3: false,
                isShowTip4: false,
                isShowTip5: false,
                isShowTip6: false,
                isShowTip7: false,
                isShowTip8: false,
                isShowTip9: false,
                isShowTip10: false,
                isShowTip11: false
            },
            formValidate: {
                invoiceType: "0"
            },
            ruleValidate: {
                invoiceTitle: [
                    {
                        required: true,
                        message: "不可为空",
                        trigger: "blur"
                    },
                    {
                        pattern:
                            "^[\u4e00-\u9fa5_a-zA-Z0-9-~!@#$&*()|{}<>/?\\[\\]:——！￥&（）《》？【】：.]{2,50}$",
                        message: "格式错误"
                    }
                ],
                invoiceType: [
                    {
                        required: true,
                        message: "不可为空",
                        trigger: "blur"
                    }
                ],
                identificationNo: [
                    { validator: validateRequire, trigger: "blur" },
                    {
                        pattern: "^[a-zA-Z0-9]{2,18}$",
                        message: "格式错误"
                    }
                ],
                bankName: [
                    { validator: validateRequire, trigger: "blur" },
                    {
                        pattern: "^[\u4e00-\u9fa5_a-zA-Z0-9]{2,30}$",
                        message: "格式错误"
                    }
                ],
                bankNo: [
                    { validator: validateRequire, trigger: "blur" },
                    {
                        pattern: "^[0-9]{2,30}$",
                        message: "格式错误"
                    }
                ],
                companyAddr: [
                    { validator: validateRequire, trigger: "blur" },
                    {
                        pattern:
                            "^[\u4e00-\u9fa5_a-zA-Z0-9-~!@#$&*()|{}<>/?\\[\\]:——！￥&（）《》？【】：]{2,50}$",
                        message: "格式错误"
                    }
                ],
                companyTelephone: [
                    { validator: validateRequire, trigger: "blur" },
                    {
                        pattern: "^[0-9-()——（）]{0,15}$",
                        message: "格式错误"
                    }
                ]
            },
            formValidate2: {},
            ruleValidate2: {
                contactsName: [
                    { required: true, message: "不可为空", trigger: "blur" },
                    {
                        pattern: "^[\u4e00-\u9fa5_a-zA-Z0-9]{2,15}$",
                        message: "格式错误"
                    }
                ],
                contactsAddr: [
                    { required: true, message: "不可为空", trigger: "blur" },
                    {
                        pattern: "^[\u4e00-\u9fa5_a-zA-Z0-9]{5,50}$",
                        message: "格式错误"
                    }
                ],
                contactsTelephone: [
                    { required: true, message: "不可为空", trigger: "blur" },
                    {
                        pattern: "^[0-9]{0,15}$",
                        message: "格式错误"
                    }
                ],
                contactsExtTelophone: [
                    {
                        pattern: "^[0-9]{0,15}$",
                        message: "格式错误"
                    }
                ],
                email: [
                    { required: true, message: "不可为空", trigger: "blur" },
                    {
                        pattern:
                            "^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$",
                        message: "格式错误"
                    }
                ]
            },
            form1Btn: false, // 开票信息保存按钮
            form2Btn: false, // 联系人信息保存按钮
            id: "", // 提交使用的id
            tenantId: "", // 提交使用的tenantId
            unWatch1: "",
            unWatch2: ""
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$get(this.$API_ENUM.GET_INVOICE_INFO)
                .then(res => {
                    if (res.code == "200") {
                        if (res.data) {
                            let data = res.data;
                            const {
                                invoiceTitle,
                                invoiceType,
                                bankNo,
                                bankName,
                                companyTelephone,
                                companyAddr,
                                identificationNo
                            } = data;
                            this.formValidate = {
                                invoiceTitle,
                                invoiceType,
                                bankNo,
                                bankName,
                                companyTelephone,
                                companyAddr,
                                identificationNo
                            };
                            const {
                                contactsName,
                                contactsAddr,
                                contactsTelephone,
                                contactsExtTelophone,
                                email
                            } = data;
                            this.formValidate2 = {
                                contactsName,
                                contactsAddr,
                                contactsTelephone,
                                contactsExtTelophone,
                                email
                            };
                            this.id = res.data.id;
                            this.tenantId = res.data.tenantId;
                            this.$nextTick(() => {
                                this.registerWatcher();
                            });
                        } else {
                            this.registerWatcher();
                        }
                    } else {
                        this.$Message.error("查询失败！");
                    }
                })
                .catch(e => {
                    console.warn("错误");
                });
        },
        handleSubmit(name) {
            // 如果id和tenantId是空，则认为是新建，在这个对象中，删除id和tenantId，把修改的对象，回传给后台，如果存在id，则认为是更新
            if (this.id != "" && this.tenantId != "") {
                this.formValidate.id = this.id;
                this.formValidate.tenantId = this.tenantId;
            }
            let obj = Object.assign(this.formValidate, this.formValidate2);
            this.$post(this.$API_ENUM.SAVE_INVOICE_INFO, obj)
                .then(res => {
                    if (res.code == "200") {
                        this.$Message.success("操作成功！");
                        // 提交成功后按钮置位不可用，注销watch，getData()重新注册watch
                        this.form1Btn = false;
                        this.form2Btn = false;
                        this.unWatch1();
                        this.unWatch2();
                        this.getData();
                    } else {
                        this.$Message.error("操作失败！");
                    }
                })
                .catch(e => {
                    console.warn("错误");
                });
        },
        handleFocus(ele) {
            this.onFousObj[ele] = true;
        },
        handleBlur(ele) {
            this.onFousObj[ele] = false;
        },
        // 查看我的发票
        goInvoiceApply() {
            this.$router.push({
                path: "myInvoice"
            });
        },
        registerWatcher() {
            this.unWatch1 = this.$watch(
                "formValidate",
                (newVal, oldVal) => {
                    this.$refs["formValidate"].validate(valid => {
                        if (valid) {
                            this.form1Btn = true;
                        } else {
                            console.warn("验证失败");
                        }
                    });
                },
                { deep: true }
            );
            this.unWatch2 = this.$watch(
                "formValidate2",
                (newVal, oldVal) => {
                    this.$refs["formValidate2"].validate(valid => {
                        if (valid) {
                            this.form2Btn = true;
                        } else {
                            console.warn("验证失败");
                        }
                    });
                },
                { deep: true }
            );
        }
    }
};
</script>
