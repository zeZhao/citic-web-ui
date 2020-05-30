<template>
  <div class="com-buy">
    <p class="verify-tips">当前所有项都为必填项</p>
    <Form ref="form" :model="form" :rules="ruleValidate" :label-width="140">
        <ci-industry-choice ref="industry" :config='{labelWidth: 140}'/>
      <FormItem label="微信号" prop="wechat_account">
          <i-input v-model="form.wechat_account" placeholder="请输入当前公众号微信账号"></i-input>
      </FormItem>
      <FormItem label="账号类型" prop="account_type">
        <Select v-model="form.account_type">
            <Option value="服务号">服务号</Option>
            <Option value="订阅号">订阅号</Option>
        </Select>
      </FormItem>
      <FormItem label="公众号名称" prop="wechat_name">
          <i-input v-model="form.wechat_name" placeholder="请输入公众号全称" :maxlength="30"></i-input>
      </FormItem>
      <FormItem label="主体类型" prop="main_type">
        <Select v-model="form.main_type">
            <Option value="政府">政府</Option>
            <Option value="企业">企业</Option>
            <Option value="媒体">媒体</Option>
            <Option value="其他组织机构">其他组织机构</Option>
        </Select>
      </FormItem>
      <FormItem label="企业/机构全称" prop="company_name">
          <i-input v-model="form.company_name" placeholder="请输入公众号所属企业或者/机构全称" :maxlength="30"></i-input>
      </FormItem>
       <FormItem label="公众号二维码" prop="qr_code_img">
          <PictureUpload  :type="'square'" :tipText="uploadText"  :imgs="form.qr_code_img" :fileMaxLen="1" v-on:addImg="qrCodeAddImg" v-on:removeImg="qrCodeRemoveImg" class="lincense"></PictureUpload>
      </FormItem>
      <FormItem label="企业工商执照扫描件" prop="license">
          <PictureUpload   :tipText="uploadText2" :imgs="form.license" :fileMaxLen="1" v-on:addImg="addImg" v-on:removeImg="removeImg" class="lincense"></PictureUpload>
      </FormItem>

      <FormItem label="管理员名称" prop="contact_name">
          <i-input v-model="form.contact_name" placeholder="请输入管理员名称"></i-input>
      </FormItem>
      <FormItem label="管理员手机号" prop="contact_phone">
          <i-input v-model="form.contact_phone" placeholder="请输入管理员常用手机号"></i-input>
      </FormItem>
      <FormItem label="管理员邮箱" prop="contact_mail">
          <i-input v-model="form.contact_mail" placeholder="请输入管理员常用邮箱"></i-input>
      </FormItem>
        <FormItem label="认证期限" prop="certification_period">
            <RadioGroup v-model="form.certification_period" type="button">
                <Radio label="biennium">两年期</Radio>
            </RadioGroup>
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
import PictureUpload from 'com/public/picture-upload'
import industryChoice from 'com/public/industry-choice'
export default {
    props: {
        creditProhibit: true
    },

  data() {
    return {
        uploadText:"上传文件支持jpg/png/gif/bmp/pdf格式，上传最小尺寸不低于80px*80px。上传文件不能超过5M。",
        uploadText2:"上传文件支持jpg/png/gif/bmp/pdf格式。文件不能超过5M。营业执照正副本均可，文字/盖章需清晰可见。",
      showModal: false, //购买结果提示框
      form: {
        authentication_type: 'authentication_wechat',
        account_type: '服务号',
        main_type: '政府',
        license: [], //工商营业执照
        qr_code_img: [],
        qr_code_img_url: "",
        certification_period:'biennium',
      },

        costCenter:'',
        costCenters: {},
        costCenterList:[],
        baseLineList:[],

      prices: '认证服务费：￥0元',

      //当前用户信息
      userInfo: this.$store.state.userInfo.USER_INFO,
      tenantInfo: this.$store.state.userInfo.TENANT_INFO,

      ruleValidate: {
        wechat_account: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(value.length<2){
                        return callback(new Error("限2-30个字"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        account_type: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        wechat_name: [
          { required: true, message: '限2-30个字，仅能输入汉字、英文字母、数字', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^[a-zA-Z0-9\u4E00-\u9FA5]{2,30}$/.test(value)){
                        return callback(new Error("限2-30个字，仅能输入汉字、英文字母、数字"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        main_type: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        company_name: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^[a-zA-Z0-9\u4E00-\u9FA5]{2,30}$/.test(value)){
                        return callback(new Error("限2-30个字，仅能输入中文、英文字母、数字、特殊字符"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        license: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        qr_code_img: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        contact_name: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^[a-zA-Z0-9\u4E00-\u9FA5]{2,30}$/.test(value)){
                        return callback(new Error("限2-30个字，仅能输入英文字母、数字、特殊字符"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        contact_phone: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)){
                        return callback(new Error("请输入正确的手机号格式"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        contact_mail: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)){
                        return callback(new Error("请输入正确的邮箱格式，格式如：test@sina.com"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
          certification_period:[{required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/}],
      }
    }
  },
  components: {
    PictureUpload,
    "ci-industry-choice" : industryChoice
  },
  mounted() {
    this.getCostCenter();
      this.getBaseLineList();
  },
  methods: {
    /**
     * 上传图片
     */
    addImg(value) {
      this.form.license.push(value);
      this.form.licenseurl = value.url;
    },
    /**
     * 二维码上传
     */
    qrCodeAddImg(value){
        this.form.qr_code_img.push(value);
        this.form.qr_code_img_url = value.url;
    },
    /**
     * 二维码移除
     */
    qrCodeRemoveImg(value){
        this.form.qr_code_img.splice(this.form.qr_code_img.findIndex((item) => { return item.uuid === value.uuid }), 1);
        this.form.qr_code_img_url = '';
    },
    /**
     * 删除图片
     */
    removeImg(value) {
      this.form.license.splice(this.form.license.findIndex((item) => { return item.uuid === value.uuid }), 1);
      this.form.licenseurl = '';
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

    /**
     * 提交申请
     */
    async doSubmit() {
        console.warn("---微信认证开始---")
        let  business_type_Id = null
        let  business_type_name = null
        let data = await this.$refs.industry.getData()
        console.warn("---组件1校验---",data)
        console.log(data)
        if(data){
            business_type_Id = data.id
            business_type_name = data.name
        }

      this.$refs['form'].validate((valid) => {
           console.warn("---表单校验校验---",valid,business_type_Id)
        if (valid && business_type_Id) {
          const { citicId, email, mobile } = this.userInfo;
          const { name, citicId: tenantCiticId } = this.tenantInfo;
            const costCenters = this.costCenters
            const appBaselineName = this.baseLineList[0]
          console.warn("---costCenter---",costCenters)
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
                business_type_id:business_type_Id,
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
          this.$post(this.$API_ENUM.SRVMGT_ORDER, jsonStr).then(res => {
               console.warn("---返回值---",costCenters)
              const { msg, message, code } = res;
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
      }
  }
}
</script>
