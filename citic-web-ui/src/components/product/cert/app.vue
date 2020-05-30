<template>
    <div class="com-buy app">
        <p class="verify-tips">加*的项为必填项</p>
        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="120">
            <FormItem label="应用渠道" prop="app_release_platform">
                <RadioGroup v-model="form.app_release_platform" type="button">
                    <Radio label="app_adapter_android_phone">Android</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="应用名称" prop="app_name">
                <i-input v-model="form.app_name"></i-input>
            </FormItem>
            <ci-industry-choice ref="industry"/>
            <FormItem label="开发模型" prop="app_research_status">
                <RadioGroup v-model="form.app_research_status" type="button">
                    <Radio label="app_is_own">公司自主设计研发</Radio>
                    <Radio label="app_ishalf_own">公司自主设计，外包人员开发</Radio>
                    <Radio label="app_no_own">外包设计研发</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="部署位置" prop="app_deploy">
                <RadioGroup v-model="form.app_deploy" type="button">
                    <Radio label="app_physics_room">物理机房部署</Radio>
                    <Radio label="app_cloud_room">云部署</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="APP版本号" prop="app_version_number">
                <i-input v-model="form.app_version_number" placeholder="请输入应用版本号"></i-input>
            </FormItem>

            <FormItem label="APP版本控制说明文本" prop="app_version_control">
                <FileUpload :tipText="tipText2" @addFile="addFile($event,version_control)" @removeFile="removeFile($event,version_control,'app_version_control')" :fileMaxLen="1" :files="version_control"></FileUpload>
            </FormItem>
            <FormItem label="应用图标上传" prop="app_icon_url">
                <PictureUpload :tipText="uploadText" :imgs="app_icons" :fileMaxLen="1" v-on:addImg="addImg" v-on:removeImg="removeImg" class="lincense"></PictureUpload>
            </FormItem>
            <FormItem label="应用简介" prop="app_introduce">
                <i-input v-model="form.app_introduce" type="textarea" :rows="7"></i-input>
                <span class="tips">请保持在300字以内</span>
            </FormItem>
            <FormItem label="开发商/开发者" prop="app_developer">
                <i-input v-model="form.app_developer" placeholder="请输入开发商/开发者全称，如：中信银行"></i-input>
            </FormItem>
            <FormItem label="APP版本支持语言" prop="app_adapter_language">
                <i-input v-model="form.app_adapter_language" placeholder="简体中文、俄文、德文、意大利文、日文、发文、繁体中文、英文、葡萄雅文、西班牙文、韩文 "></i-input>
            </FormItem>

            <FormItem label="APP付费类型" prop="app_payment_type">
                <RadioGroup v-model="form.app_payment_type" type="button">
                    <Radio label="app_gratis">免费</Radio>
                    <Radio label="app_pay">付费</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="合规报告" prop="security_grade_records_url" style="min-height: 75px">
                <FileUpload :tipText="tipText1" :format="format1" @addFile="addFile($event,security_grade_records)" @removeFile="removeFile($event,security_grade_records,'security_grade_records_url')" :fileMaxLen="3" :files="security_grade_records"></FileUpload>
                <p style="line-height: 20px;margin-top: 10px">《App违法违规收集使用个人信息自评估指南》自评结果</p>
            </FormItem>
            <FormItem label="网络安全等级保护备案级别" prop="security_grade">
                <Select v-model="form.security_grade" @on-change="securityGrade" style="width: 50%">
                    <Option value="一级">一级</Option>
                    <Option value="二级">二级</Option>
                    <Option value="三级">三级</Option>
                    <Option value="四级">四级</Option>
                    <Option value="未定级备案">未定级备案</Option>
                </Select>
            </FormItem>
            <FormItem label="网络安全保护定级预期完成时间" v-if="form.security_grade === '未定级备案'">
                <DatePicker v-model="form.security_expected_start_time" type="date" @on-change="expectedStartTime" placeholder="请选择起始时间"
                            :options="startOptions"
                ></DatePicker>
                -
                <DatePicker v-model="form.security_expected_end_time" type="date" @on-change="expectedEndTime" placeholder="请选择结束时间"
                            :options="endOptions"
                ></DatePicker>
            </FormItem>
            <FormItem label="网络安全等级保护备案证明" ref="securityCertifyUrl" :required="required" v-if="form.security_grade !== '未定级备案'">
                <FileUpload :tipText="tipText2" @addFile="addFile($event,security_certify_files)" @removeFile="removeFile($event,security_certify_files,'security_certify_url')" :fileMaxLen="1" :files="security_certify_files"></FileUpload>
            </FormItem>

            <FormItem label="第三方漏洞扫描报告" prop="security_report_url">
                <FileUpload @addFile="addFile($event,security_report)" @removeFile="removeFile($event,security_report,'security_report_url')" :fileMaxLen="3" :files="security_report"></FileUpload>
                <Button class="uploadBtn" @click="download"><Icon type="android-download" style="padding-right: 10px"></Icon>点击下载报告示例</Button>
                <p class="tip">请提供第三方正规安全检测机构的有效安全漏洞扫描报告或含漏扫报告的等级保护测评报告，确认漏扫报告中无紧急、高危漏洞或提供漏洞修复记录。</p>
            </FormItem>

            <FormItem label="认证期限" prop="certification_period">
                <RadioGroup v-model="form.certification_period" type="button">
                    <Radio label="biennium">两年期</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="公司全称" prop="company_name">
                <i-input v-model="form.company_name" placeholder="如：中信科技发展有限公司"></i-input>
            </FormItem>
            <FormItem label="公司简介" prop="company_introduce">
                <i-input v-model="form.company_introduce" type="textarea" :rows="7"></i-input>
                <span class="tips">请保持在300字以内</span>
            </FormItem>
            <FormItem label="公司地址" prop="position_address">
                <Select v-model="province" @on-change="getCitysByProvince">
                    <Option v-for="item in provinces" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <Select v-model="city" :disabled = "province === ''">
                    <Option v-for="item in citys" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <i-input v-model="form.position_address" placeholder="请填写详细地址" class="width400">></i-input>
            </FormItem>
            <FormItem label="联系人名称">
                <i-input v-model="form.contact_name" disabled></i-input>
            </FormItem>
            <FormItem label="联系人电话">
                <i-input v-model="form.contact_phone" disabled></i-input>
            </FormItem>
            <FormItem label="联系人邮箱">
                <i-input v-model="form.contact_mail" disabled></i-input>
            </FormItem>
            <FormItem label="成本中心" prop="costCenter">
                <Select v-model="costCenter" @on-change="costCenterChange" style="width: 50%">
                    <Option v-for="option in costCenterList" :key="option.id" :value="option.id" :label="option.name">
                        {{option.name}}
                    </Option>
                </Select>
            </FormItem>
            <div class="box-shadow">
                <FormItem label="服务费用" class="serviceCharge">
                    <label style="display: block;"><span class="em">{{prices}}</span></label>
                    <!--<label>检测单价：<span class="em">2000</span>元/次</label>-->
                </FormItem>
                <FormItem class="submitBox">
                    <Button type="primary" class="submitStyle" @click="doSubmit" v-if="!creditProhibit">提交申请</Button>
                </FormItem>
            </div>
        </Form>

        <Modal v-model="showModal" class="modal-box" title="认证申请提交成功，请及时通知管理员审核订单！" ok-text="进入租户控制台"
               @on-ok="toConsoleInstance"
               cancel-text="返回选择其他认证" @on-cancel="otherAuthentication">
        </Modal>
    </div>
</template>

<script>
    import PictureUpload from 'com/public/picture-upload'
    import FileUpload from 'com/public/file-upload'
    import industryChoice from 'com/public/industry-choice'
    import checkInput from "utils/checkInput.js"

    export default {
        props: {
            creditProhibit: true
        },
        components: {
            PictureUpload,
            FileUpload,
            "ci-industry-choice": industryChoice
        },
        data() {
            return {
                format1:['doc','docx','png','jpg','bmp','pdf','rar','zip','xlsx','xls'],
                tipText1:'上传文件支持doc/docx/jpg/png/bmp/pdf/rar/zip/xlsx/xls格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。文件最多不能超过3份',
                tipText2:'上传文件支持doc/docx/jpg/png/bmp/pdf/rar/zip格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。',
                showModal: false, //购买结果提示框
                required:false,
                form: {
                    //默认选项
                    authentication_type:'authentication_app',
                    app_release_platform:'app_adapter_android_phone',
                    app_research_status:'app_is_own',
                    app_deploy:'app_physics_room',
                    app_payment_type:'app_gratis',
                    security_auth_type:'security_report_self_upload',
                    certification_period:'biennium',
                },
                version_control:[],//版本控制说明文案列表
                security_grade_records:[],//等级备案的证书列表
                security_report:[],//安全报告列表
                security_certify_files:[],//网络安全等级保护备案证明
                app_icons:[], //应用图标上传

                costCenter:'',
                costCenterList:[],

                provinces: [], //省列表
                citys: [], //市列表

                province: '', //选中的省
                city: '', //选中的市
                prices: '认证服务费：￥0元',
                startOptions: {
                    isabledDate: (date) => {
                        return date = new Date();
                    }
                },
                endOptions:{
                    disabledDate: (date) => {
                        if (this.form.security_expected_start_time) {
                            return date < this.form.security_expected_start_time
                        }else{
                            return date < new Date();
                        }
                    }
                },
                uploadText:'上传文件支持jpg/png，尺寸为512*512，上传文件不能超过2M。',
                //当前用户信息
                userInfo: this.$store.state.userInfo.USER_INFO,
                tenantInfo: this.$store.state.userInfo.TENANT_INFO,

                ruleValidate: {
                    app_release_platform:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_name:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_research_status:[{required: true, message: '该项  不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_deploy:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_version_number:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_version_control:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_icon_url: [
                        { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
                    ],
                    app_introduce:[
                        {required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/},
                        {type: 'string', max: 300, message: '输入的长度请保持在300以内', trigger: 'blur'}
                    ],
                    app_developer:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_user_data:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_adapter_language:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    app_payment_type:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    // security_grade:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    security_grade_records_url:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    // security_auth_type:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    security_report_url:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    certification_period:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    company_name:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
                    company_introduce:[
                        {required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/},
                        {type: 'string', max: 300, message: '输入的长度请保持在300以内', trigger: 'blur'}
                    ],
                    position_address:[
                        { required: true, message: '详细地址不能为空', trigger: 'blur', pattern: /([^\s])/ },
                        { required: true, message: '详细地址不能为空', trigger: 'change', pattern: /([^\s])/ },
                        {
                            validator:( rule, value, callback )=>{
                                let L = value.length
                                if(L < 2 || L > 50){
                                    return callback(new Error("限2-50字"))
                                }else if(!checkInput.specialCharacters(value)){
                                    return callback(new Error("不支持特殊字符"))
                                }else if(!this.province || !this.city){
                                    return callback(new Error("详细地址不能为空"))
                                }else{
                                    return  callback()
                                }

                            },
                            trigger: 'blur'
                        },
                    ],
                }
            }
        },
        mounted() {
            this.getProvinces();

            this.getCostCenter();
            this.getBaseLineList();
            const {fullname, email, mobile} = this.userInfo;
            this.form.contact_name = fullname;
            this.form.contact_phone = mobile;
            this.form.contact_mail = email;
        },
        methods: {
            /*
            * 上传文件
            * @files    文件列表
            * */
            addFile(val,files){
                files.push(val)
            },
            /*
            * 删除文件
            * @files    文件列表
            * */
            removeFile(val,files,str){
                files.splice(files.findIndex((item) => { return item.uuid === val.uuid }), 1);
                this.filesToString(files,str)
            },
            //设置验证
            securityGrade(val){
                if(val){
                    if(val !== '未定级备案') {
                        if(this.form.hasOwnProperty('security_expected_start_time')){
                            delete this.form.security_expected_start_time
                        }
                        if(this.form.hasOwnProperty('security_expected_end_time')) {
                            delete this.form.security_expected_end_time
                        }
                    }else{
                        if(this.form.hasOwnProperty('security_certify_url')){
                            delete this.form.security_certify_url
                        }
                    }
                }
            },
            //选择定级预期完成时间
            expectedStartTime(val){
                this.$set(this.form, 'security_expected_start_time', val)
            },
            expectedEndTime(val){
                this.$set(this.form, 'security_expected_end_time', val)
            },

            getProvinces() {
                this.$get(`${this.$API_ENUM.AREA_PROVINCE}?country=中国`).then(res => {
                    this.provinces = res.data;

                    //默认选中第一项
                    // this.province = this.provinces[0];
                    this.getCitys();
                });
            },
            getCitys() {
                this.$get(`${this.$API_ENUM.AREA_CITY}?country=中国&province=${this.province}`).then(res => {
                    this.citys = res.data;

                    //默认选中第一项
                    this.city = this.citys[0];
                });
            },

            /**
             * 下拉框change事件
             */
            getCitysByProvince(item) {
                this.getCitys(item.value);
            },

            costCenterChange(data){
                this.costCenters = data
            },
            /**
             * 获取成本中心
             */
            getCostCenter() {
                this.$get(this.$API_ENUM.CITIC_COSTCENTEROFFICE_COST_CENTERS).then(res => {
                    this.costCenterList = res.costCenters;
                    this.costCenter =this.costCenterList[0].id
                    this.costCenterChange({
                        label:this.costCenterList[0].name,
                        value: this.costCenterList[0].id,
                    })
                });
            },
            /**
             * 获取应用基线
             */
            getBaseLineList() {
                this.$get(this.$API_ENUM.USER_APP_BASES).then(res => {
                    this.baseLineList = res.appBases.filter(item => item.available);
                });
            },

            async doSubmit() {
                let business_type_Id = null
                let  business_type_name = null
                let data = await this.$refs.industry.getData()
                if (data) {
                    business_type_Id = data.id
                    business_type_name = data.name
                }

                // 上传多个文件类型转换为String
                if(this.version_control.length){this.filesToString(this.version_control,'app_version_control')}

                if(this.security_grade_records.length){this.filesToString(this.security_grade_records,'security_grade_records_url')}

                if(this.security_report.length){this.filesToString(this.security_report,'security_report_url')}

                if(this.security_certify_files.length){
                    if(this.form.security_grade !== '未定级备案'){
                        this.filesToString(this.security_certify_files,'security_certify_url')
                    }
                }


                this.$refs['form'].validate((valid) => {
                    if (valid && business_type_Id) {
                        const {citicId, email, mobile} = this.userInfo;
                        const {name, citicId: tenantCiticId} = this.tenantInfo;
                        const costCenters = this.costCenters
                        const appBaselineName = this.baseLineList[0]
                        this.form.position_province = this.province
                        this.form.position_city = this.city
                        this.form.company_address = `${this.province}-${this.city}-${this.form.position_address}`;
                        //拼接最终json

                        const jsonStr = {
                            type: 'add',
                            id: '',
                            state_id: '1',
                            tenant_id: tenantCiticId,
                            user_id: citicId,
                            email: email,
                            mobile: mobile,
                            tenant_name: name,
                            list_id: '',
                            service_id: '25059951495872559',
                            cost_ids: costCenters.value,
                            parameters: {
                                cost_center: `${costCenters.value}=${costCenters.label}=100`,
                                is_auto_renewal: '0',
                                prices: this.prices,
                                property: "1=开发",
                                app_base_line: `${appBaselineName.citicId}=${appBaselineName.name}`,
                                instance_num: `1`,

                                //加入页面表单数据
                                ...this.form,
                                business_type_id: business_type_Id,
                                business_type_name:business_type_name
                            },
                            detail_costs: [
                                {
                                    list_id: '',
                                    cost: [{
                                        "cost_name": "认证服务费",
                                        "cost_unit_name": "元",
                                        "billingType": "package",
                                        "cost_unit": "",
                                        "cost_value": 0
                                    }]
                                }
                            ]
                        };
                        console.log(jsonStr)

                        this.$post(this.$API_ENUM.SRVMGT_ORDER, jsonStr).then(res => {
                            const {msg, message, code} = res;
                            if (code == 200) {
                                this.showModal = true;
                            } else {
                                this.$Message.error(msg || message || '操作失败！');
                            }
                        });
                    }
                });
            },

            /**
             * 跳转至租户控制台的订单
             */
            toConsoleInstance() {
                this.$router.push({
                    path: '/citic-web-ui/console/order'
                });
            },
            /*
              * 关闭弹框
              * */
            otherAuthentication(){
                this.showModal = false;
            },
            download(){
                this.downloadFileByUrl('https://public-supply-service.oss-cn-beijing.aliyuncs.com/public_dev_supplier/632b4abf-0b41-4391-8943-97fc989e61a2.zip')
            },
            /*
            * 上传多个文件转为字符串
            * @files    上传文件列表
            * @str  表单属性
            * */
            filesToString(files,str){
                let arr = []
                files.forEach(item=>{
                    arr.push(item.url)
                })
                this.$set(this.form,str,`${arr}`)
            },
            addImg(value) {
                this.app_icons.push(value);
                this.form.app_icon_url = value.url;
            },
            /**
             * 删除图片
             */
            removeImg(value) {
                this.app_icons.splice(this.app_icons.findIndex((item) => { return item.uuid === value.uuid }), 1);
                this.form.app_icon_url = '';
            },
        }

    }
</script>
