<template>
  <div class="com-buy">
    <p class="verify-tips">当前所有项都为必填项</p>

    <Form ref="form" :model="form" :rules="ruleValidate" :label-width="140">
        <ci-industry-choice ref="industry" :config='{labelWidth: 140}'/>
      <FormItem label="官方微博名称" prop="micro_blog_name">
          <i-input v-model="form.micro_blog_name" placeholder="限5-30个字，仅能输入汉字、英文字母、数字" :maxlength="30"></i-input>
      </FormItem>
      <FormItem label="官方微博地址" prop="weiboaddr">
          <i-input v-model="form.weiboaddr" placeholder="请输入官网微博网址"></i-input>
      </FormItem>
      <FormItem label="所属类型" prop="type">
        <Select v-model="form.type">
            <Option value="政府">政府</Option>
            <Option value="企业">企业</Option>
            <Option value="媒体">媒体</Option>
            <Option value="网站">网站</Option>
            <Option value="应用">应用</Option>
            <Option value="机构">机构</Option>
            <Option value="公益">公益</Option>
            <Option value="校园组织">校园组织</Option>
        </Select>
      </FormItem>
      <FormItem label="所在地" prop="position_province" class="provinceItem">
        <Select v-model="form.position_province" @on-change="getCitysByProvince" filterable>
            <Option v-for="item in provinces" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </FormItem>
      <FormItem prop="position_city" class="cityItem">
        <Select v-model="form.position_city" filterable>
            <Option v-for="item in citys" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </FormItem>
      <FormItem label="官网地址" prop="website">
          <i-input v-model="form.website" placeholder="请输入官网网址"></i-input>
      </FormItem>
      <FormItem label="企业工商执照扫描件" prop="license">
          <PictureUpload :tipText="uploadText" :imgs="form.license" :fileMaxLen="1" v-on:addImg="addImg" v-on:removeImg="removeImg" class="lincense"></PictureUpload>
      </FormItem>

      <FormItem label="运营者名称" prop="contact_name">
          <i-input v-model="form.contact_name" placeholder="限2-10个字，仅能输入汉字、英文字母"></i-input>
      </FormItem>
      <FormItem label="运营者手机号" prop="contact_phone">
          <i-input v-model="form.contact_phone" placeholder="仅支持数字输入"></i-input>
      </FormItem>
      <FormItem label="运营者邮箱" prop="contact_mail">
          <i-input v-model="form.contact_mail" placeholder="请输入运营人员常用邮箱，格式如：test@sina.com"></i-input>
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
        uploadText:"上传文件支持jpg/png/gif/bmp/pdf格式。文件不能超过5M。营业执照正副本均可，文字/盖章需清晰可见。",
      showModal: false, //购买结果提示框
      form: {
        type: '政府',
        authentication_type: 'authentication_micro_blog',
        license: [], //工商营业执照
        position_province: '', //选中的省
        position_city: '', //选中的市
        certification_period:'biennium',
      },
        costCenter:'',
        costCenters: {},
        costCenterList:[],
        baseLineList:[],

      provinces: [], //省列表
      citys: [], //市列表

      prices: '认证服务费：￥0元',

      //当前用户信息
      userInfo: this.$store.state.userInfo.USER_INFO,
      tenantInfo: this.$store.state.userInfo.TENANT_INFO,

      ruleValidate: {
        micro_blog_name: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
           {
              validator:( rule, value, callback )=>{
                    let L = value?value.length:0
                    if(!value){
                        return  callback()
                    }
                    if(!/^[a-zA-Z0-9\u4E00-\u9FA5]{5,30}$/.test(value)){
                        return callback(new Error("限5-30个字，仅能输入汉字、英文字母、数字"))
                    }
                    return  callback()
              },
              trigger: 'blur'
          }
        ],
        weiboaddr: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
        ],
          position_province: [
          { required: true, message: '该项不能为空', trigger: 'change', pattern: /([^\s])/ }
        ],
          position_city: [
          { required: true, message: '该项不能为空', trigger: 'change', pattern: /([^\s])/ }
        ],
        type: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ }
        ],
        website: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
        ],
        license: [
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
                    if(!/^[a-zA-Z\u4E00-\u9FA5]{2,10}$/.test(value)){
                        return callback(new Error("限2-10个字，仅能输入汉字、英文字母"))
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
  mounted(){
      this.getProvinces();
      this.getBaseLineList();
      this.getCostCenter();
  },
  methods: {
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

    getProvinces() {
      this.$get(`${this.$API_ENUM.AREA_PROVINCE}?country=中国`).then(res => {
          this.provinces = res.data;

          //默认选中第一项
          this.getCitys();
      });
    },
    getCitys() {
      this.$get(`${this.$API_ENUM.AREA_CITY}?country=中国&province=${this.form.position_province}`).then(res => {
          this.citys = res.data;

          //默认选中第一项
          this.form.position_city = this.citys[0];
      });
    },

    /**
     * 下拉框change事件
     */
    getCitysByProvince(item) {
      this.getCitys(item.value);
    },

    /**
     * 上传图片
     */
    addImg(value) {
      this.form.license.push(value);
      this.form.licenseurl = value.url;
    },

    /**
     * 删除图片
     */
    removeImg(value) {
      this.form.license.splice(this.form.license.findIndex((item) => { return item.uuid === value.uuid }), 1);
      this.form.licenseurl = '';
    },

    /**
     * 提交申请
     */
    async doSubmit() {
        let  business_type_Id = null
        let  business_type_name = null
        let data = await this.$refs.industry.getData()
            if(data){
                business_type_Id = data.id
                business_type_name = data.name
            }
        console.log('========', data)


      this.$refs['form'].validate((valid) => {
        if (valid && business_type_Id) {
          const { citicId, email, mobile } = this.userInfo;
          const { name, citicId: tenantCiticId } = this.tenantInfo;
            const costCenters = this.costCenters
            const appBaselineName = this.baseLineList[0]

          this.form.company_address = `${this.form.position_province}-${this.form.position_city}`;
          this.form.company_name = this.form.micro_blog_name;  //后台接口要求必须要有此字段

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

          this.$post(this.$API_ENUM.SRVMGT_ORDER, jsonStr).then(res => {
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
