<template>
  <div class="com-buy">
    <p class="verify-tips">加*的项为必填项</p>
    <Form ref="form" :model="form" :rules="ruleValidate" :label-width="120">
      <FormItem label="网站名称" prop="website_name">
          <i-input v-model="form.website_name" placeholder="请输入网站名称，如“中信云网有限公司”"></i-input>
      </FormItem>
      <ci-industry-choice ref="industry"/>
      <FormItem label="主域名" prop="website_addr">
          <i-input v-model="form.website_addr" placeholder="请输入网站域名，格式如“www.***.com.cn“"></i-input>
      </FormItem>
      <FormItem label="其他域名">
          <i-input v-model="form.website_addr_other" placeholder="请输入网站域名，格式如“www.***.com.cn“"></i-input>
      </FormItem>
      <FormItem label="网站ICP备案号" prop="icp" >
          <i-input v-model="form.icp" :maxlength="30" placeholder="托管在境外的网站可不填写"></i-input>
      </FormItem>
      <FormItem label="公网安备号" prop="pcn">
          <i-input v-model="form.pcn" :maxlength="30" placeholder="托管在境外的网站可不填写"></i-input>
      </FormItem>
      <FormItem label="网站介绍" prop="website_introduce" >
          <i-input v-model="form.website_introduce" type="textarea" :rows="7" :maxlength="300"></i-input>
          <span class="tips">请保持在300字以内</span>
      </FormItem>

      <FormItem label="网站开发模式" prop="website_research_status">
        <RadioGroup v-model="form.website_research_status" type="button">
          <Radio label="website_is_own">公司自主设计研发</Radio>
          <Radio label="website_ishalf_own">公司自主设计，外包人员开发</Radio>
          <Radio label="website_no_own">外包设计研发</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="网站部署位置" prop="website_deploy">
        <RadioGroup v-model="form.website_deploy" type="button">
          <Radio label="website_physics_room">物理机房部署</Radio>
          <Radio label="website_cloud_room">云部署</Radio>
        </RadioGroup>
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
        <FormItem label="网络安全保护定级预期完成时间" prop="security_expected_end_time" v-if="form.security_grade === '未定级备案'">
            <DatePicker v-model="form.security_expected_start_time" type="date" @on-change="expectedStartTime" placeholder="请选择起始时间"
                        :options="startOptions"
                        ></DatePicker>
             -
            <DatePicker v-model="form.security_expected_end_time" type="date" @on-change="expectedEndTime" placeholder="请选择结束时间"
                        :options="endOptions"
                        ></DatePicker>
        </FormItem>
        <FormItem label="网络安全等级保护备案证明" prop="security_certify_url" v-if="form.security_grade !== '未定级备案'">
            <FileUpload :tipText="tipText" @addFile="addFile($event,security_certify_files)" @removeFile="removeFile($event,security_certify_files,'security_certify_url')" :fileMaxLen="1" :files="security_certify_files"></FileUpload>
        </FormItem>
        <FormItem label="第三方漏洞扫描报告" prop="security_report_url">
            <FileUpload @addFile="addFile($event,security_report)" @removeFile="removeFile($event,security_report,'security_report_url')" :fileMaxLen="fileLen" :files="security_report"></FileUpload>
            <Button class="uploadBtn" @click="download" v-show="security_report.length !== fileLen"><Icon type="android-download" style="padding-right: 10px"></Icon>点击下载报告示例</Button>
            <p class="tip">请提供第三方正规安全检测机构的有效安全漏洞扫描报告或含漏扫报告的等级保护测评报告，确认漏扫报告中无紧急、高危漏洞或提供漏洞修复记录。</p>
        </FormItem>
        <FormItem label="认证期限" prop="certification_period">
            <RadioGroup v-model="form.certification_period" type="button">
                <Radio label="biennium">两年期</Radio>
            </RadioGroup>
        </FormItem>
      <FormItem label="网站日均PV" prop="website_daily_pv">
          <i-input v-model="form.website_daily_pv"></i-input>
      </FormItem>
      <FormItem label="网站日均UV" prop="website_daily_uv">
          <i-input v-model="form.website_daily_uv"></i-input>
      </FormItem>

      <FormItem label="公司全称" prop="company_name">
          <i-input v-model="form.company_name" placeholder="请输入公司全称" :maxlength="50"></i-input>
      </FormItem>
      <FormItem label="公司简介" prop="company_introduce" >
          <i-input v-model="form.company_introduce" type="textarea" :rows="7" :maxlength="300"></i-input>
          <span class="tips">请保持在300字以内</span>
      </FormItem>
      <FormItem label="公司地址" prop="company_addr">
        <Select v-model="province" @on-change="getCitysByProvince">
            <Option v-for="item in provinces" :value="item" :key="item">{{ item }}</Option>
        </Select>
        <Select v-model="city" :disabled = "province === ''">
            <Option v-for="item in citys" :value="item" :key="item">{{ item }}</Option>
        </Select>
        <i-input v-model="form.company_addr" placeholder="请填写详细地址" class="width400" :maxlength="50"></i-input>

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
                <label class="em">{{prices}}</label>
                <!--<label class="em">检测单价：¥2000元/次</label>-->
            </FormItem>
            <FormItem class="submitBox">
                <Button class="submitStyle" type="primary" @click="doSubmit" v-if="!creditProhibit">提交申请</Button>
            </FormItem>
        </div>

    </Form>

    <Modal v-model="showModal" class="modal-box" title="认证申请提交成功，请及时通知管理员审核订单！" ok-text="进入租户控制台" @on-ok="toConsoleInstance" cancel-text="返回选择其他认证" @on-cancel="otherAuthentication">
    </Modal>
  </div>
</template>

<script>
import checkInput from "utils/checkInput.js"
import industryChoice from 'com/public/industry-choice'
import FileUpload from 'com/public/file-upload'
export default {
    props: {
        creditProhibit: true
    },
    components: {
        FileUpload,
        "ci-industry-choice" : industryChoice
    },

  data() {
    return {
      showModal: false, //购买结果提示框
      form: {
        website_research_status: 'website_is_own',
        website_deploy: 'website_physics_room',

        authentication_type: 'authentication_website',
          security_auth_type:'security_report_self_upload',
          certification_period:'biennium',
      },

      costCenter:'',
      costCenters: {},
      costCenterList:[],
        baseLineList:[],


      provinces: [], //省列表
      citys: [], //市列表

      province: '', //选中的省
      city: '', //选中的市
      prices: '认证服务费：￥0元',

      //当前用户信息
      userInfo: this.$store.state.userInfo.USER_INFO,
      tenantInfo: this.$store.state.userInfo.TENANT_INFO,

      security_report:[], //安全报告
        security_certify_files:[], //网络安全等级保护备案证明
        tipText:'上传文件支持doc/docx/jpg/png/bmp/pdf/rar/zip格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。',

        startOptions: {
            disabledDate: (date) => {
                return date < new Date();
            }
        },
        endOptions:{
            disabledDate: (date) => {
                if (this.form.startTime) {
                    return date < this.startTime
                }else{
                    return date < new Date();
                }
            }
        },
        fileLen:3,
      ruleValidate: {
        website_name: [
          { required: true, message: '该项不能为空', pattern: /([^\s])/ ,trigger:'blur'},
          {
              validator:( rule, value, callback )=>{
                  let L = value?value.length:0
                  if(!value){
                      return  callback()
                  }
                  if(L < 2 || L > 50){
                      return callback(new Error("限2-50字"))
                  }else if(!checkInput.specialCharacters(value)){
                      return callback(new Error("不支持特殊字符"))
                  }else{
                     return  callback()
                  }

              },
              trigger: 'blur'
          }
        ],
        website_addr: [
          { required: true, message: '该项不能为空',  pattern: /([^\s])/ ,trigger:'blur'},
        ],
        website_introduce: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
        ],
        website_research_status: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        website_deploy: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        website_daily_pv: [
          { message:'请输入正整数', trigger:'blur', pattern: /^[1-9]\d*$/ }
        ],
        website_daily_uv: [
          { message:'请输入正整数', trigger:'blur', pattern: /^[1-9]\d*$/ }
        ],
        company_name: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                  let L = value.length
                  if(L < 2 || L > 50){
                      return callback(new Error("限2-50字"))
                  }else if(!checkInput.specialCharacters(value)){
                      return callback(new Error("不支持特殊字符"))
                  }else{
                     return  callback()
                  }

              },
              trigger: 'blur'
          }
        ],
        company_introduce: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
        //   { type: 'string', max: 300, message:'输入的长度请保持在300以内', trigger:'blur'}
        ],
        company_addr: [
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
        security_grade:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
        // security_grade_records_url:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
        // security_auth_type:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
          security_expected_end_time: [
              { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
              {
                  validator:(rule, value, callback)=>{
                      if(!this.form.security_expected_start_time){
                          return callback(new Error("起始时间不能为空"))
                      }else{
                          return  callback()
                      }
                 },
                  trigger: 'blur'
              }
          ],
          security_certify_url:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
          security_report_url:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
        certification_period:[{ required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },],
       }
    }
  },
  mounted() {
      this.getProvinces();
      this.getCostCenter();
      this.getBaseLineList();
      const { fullname, email, mobile } = this.userInfo;
      this.form.contact_name = fullname;
      this.form.contact_phone = mobile;
      this.form.contact_mail = email;
  },
  methods: {
      expectedStartTime(val){
          this.form.security_expected_start_time = val
      },
      expectedEndTime(val){
          this.form.security_expected_end_time = val
      },
      securityGrade(val){
          if(val){
              if(val === '未定级备案'){
                  if(this.form.hasOwnProperty('security_certify_url')){
                      delete this.form.security_certify_url
                  }
              }else{
                  if(this.form.hasOwnProperty('security_expected_start_time')){
                      delete this.form.security_expected_start_time
                  }
                  if(this.form.hasOwnProperty('security_expected_end_time')) {
                      delete this.form.security_expected_end_time
                  }
              }
          }
      },
    getProvinces() {
      this.$get(`${this.$API_ENUM.AREA_PROVINCE}?country=中国`).then(res => {
          this.provinces = res.data;

          //默认选中第一项
        //   this.province = this.provinces[0];
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

       let  business_type_Id = null
       let  business_type_name = null
       let data = await this.$refs.industry.getData()
        if(data){
            business_type_Id = data.id
            business_type_name = data.name
        }


        // 上传多个文件类型转换为String
        if(this.security_report.length){
           this.filesToString(this.security_report,'security_report_url')
       }
        if(this.security_certify_files.length){
            if(this.form.security_grade !== '未定级备案'){
                this.filesToString(this.security_certify_files,'security_certify_url')
            }
       }


      this.$refs['form'].validate((valid) => {
        if (valid && business_type_Id) {
          const { citicId, email, mobile } = this.userInfo;
          const { name, citicId: tenantCiticId } = this.tenantInfo;
          const costCenters = this.costCenters


          this.form.company_address = `${this.province}-${this.city}-${this.form.company_addr}`;

        const appBaselineName = this.baseLineList[0]
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
                      "cost_name":"认证服务费",
                      "cost_unit_name":"元",
                      "billingType":"package",
                      "cost_unit":"",
                      "cost_value":0
                    }]
                }
            ]
          };
          console.log(jsonStr)

          this.$post(this.$API_ENUM.SRVMGT_ORDER, jsonStr).then(res => {
              const { msg, message, code } = res;
              if (code == 200) {
                this.showModal = true;
              } else {
                this.$Message.error(msg || message || '操作失败！');
              }
          });
        }
        else{
            this.$Message.error('加*的项为必填项！');
        }
      });
    },

    /**
     * 跳转至租户控制台的订单
     */
    toConsoleInstance() {
      // window.location.href = location.origin + '/views/console/console.jsp'
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
  }
}
</script>
