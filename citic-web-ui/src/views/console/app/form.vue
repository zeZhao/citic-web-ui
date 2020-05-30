<style lang="scss">
  .console-app-form {
    /*margin-top: 20px;*/

    .form {
      margin: 0 auto;
      width: 800px;
    }
    .ivu-input-wrapper,
    .ivu-select {
      width: 350px;
    }
    .ivu-input-wrapper.textarea {
      width: 600px;
    }

    @mixin requiredItem {
      content: '*';
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

    .requiredItem {
      .ivu-form-item-label::before {
        @include requiredItem;
      }
    }

    .required::before {
      @include requiredItem;
    }

    .error-tip {
      color: #ed3f14;
    }
  }
</style>

<template>
  <div class="console-app-form">
    <Card>
      <p slot="title">
        <Icon type="mouse"></Icon>
        创新应用信息
      </p>
      <Form ref="form" :model="form" :rules="ruleValidate" :label-width="110" class="form">
        <FormItem label="创新应用名称：" prop="applicationName">
          <i-input v-model="form.applicationName"></i-input>
        </FormItem>
        <FormItem label="应用形式：" prop="applicationMode">
          <Select v-model="form.applicationMode" :disabled="appDisabled" :label-in-value="true" @on-change="val => {_appModeChange(val)}">
            <Option v-for="(item, index) in forms" :value="item.value" :label="item.label" :key="index">{{item.label}}</Option>
          </Select>
        </FormItem>
        <FormItem prop="otherAppModeDesc" v-show="form.otherAppMode" >
            <span class="required">其他请输入 <i-input v-model="form.otherAppModeDesc"></i-input></span>
        </FormItem>
        <FormItem label="应用类型：" prop="applicationType">
          <Select v-model="form.applicationType">
            <Option v-for="(item, index) in types" :value="item.value" :label="item.label" :key="index">{{item.label}}</Option>
          </Select>
        </FormItem>
        <FormItem label="用户规模：" prop="userScale">
            <i-input type="textarea" class="textarea" v-model="form.userScale"></i-input>
        </FormItem>
        <FormItem label="业务目标：" prop="businessGoal">
          <i-input type="textarea" class="textarea" v-model="form.businessGoal"></i-input>
        </FormItem>
        <FormItem label="应用场景：" prop="useCase">
          <i-input type="textarea" class="textarea" v-model="form.useCase"></i-input>
        </FormItem>
        <FormItem label="目标用户：" prop="targetCustomer">
          <i-input type="textarea" class="textarea" v-model="form.targetCustomer"></i-input>
        </FormItem>
        <FormItem label="绩效指标：" prop="performanceIndex">
          <i-input type="textarea" class="textarea" v-model="form.performanceIndex"></i-input>
        </FormItem>
        <FormItem label="同业比较：" prop="industryCompare">
          <i-input type="textarea" class="textarea" v-model="form.industryCompare"></i-input>
        </FormItem>
        <FormItem label="投入预算：" prop="inputBudget">
          <i-input type="textarea" class="textarea" v-model="form.inputBudget"></i-input>
        </FormItem>
        <FormItem label="新技术应用：" prop="newTechnology">
          <i-input type="textarea" class="textarea" v-model="form.newTechnology"></i-input>
        </FormItem>
        <FormItem label="数据驱动：" prop="dataDrive">
          <i-input type="textarea" class="textarea" v-model="form.dataDrive"></i-input>
        </FormItem>
        <FormItem label="项目阶段：" prop="projectStage">
          <Select v-model="form.projectStage">
            <Option v-for="(item, index) in stages" :value="item.value" :key="index">{{item.label}}</Option>
          </Select>
        </FormItem>
        <FormItem label="应用图片：" class="requiredItem">
          <PictureUpload :imgs="appImgs" :fileMaxLen="5" v-on:addImg="addAppImg" v-on:removeImg="removeAppImg"></PictureUpload>
          <span class="error-tip" v-if="errorTip_appImg">请至少上传一张图片</span>
        </FormItem>
        <FormItem label="应用访问方式：" class="requiredItem">
          <span>点击上传二维码：</span>
          <PictureUpload :imgs="visitCode" :fileMaxLen="1" v-on:addImg="addVisitCode" v-on:removeImg="removeVisitCode"></PictureUpload>

          <span>请输入应用访问地址：</span>
          <i-input v-model="visitUrl">
            <Select v-model="urlProtocal" slot="prepend" style="width: 80px">
              <Option value="http://">http://</Option>
              <Option value="https://">https://</Option>
            </Select>
          </i-input>
          <span class="error-tip" v-if="errorTip_visitUrl">访问地址格式错误</span>
          <span class="error-tip" v-if="errorTip_visitType">二维码和访问地址请至少输入一项</span>
        </FormItem>
        <FormItem>
          <Button type="ghost" @click="_mxHandleReset()">清空</Button>
          <Button type="primary" @click="doSubmit">提交</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import PictureUpload from 'com/public/picture-upload'
import APPCONST from 'static/json/console/app'
import { formMixin } from 'mixin'

export default {
  mixins: [formMixin],
  data () {
    const validateOtherAppModeDesc = (rule, value, callback) => {
        if (this.form.applicationMode == 5) {
          if(/^\s*$/g.test(value)) {
            return callback(new Error('该项不能为空'));
          } else if(/^.{0,128}$/.test(value) === false) {
            return callback(new Error('输入长度过长'));
          }
        }
        callback();
    };
    return {
      appDisabled:false,
      forms: APPCONST.forms, //应用形式
      stages: APPCONST.stages, //项目阶段
      types: APPCONST.types, //应用类型
      submitAPI: this.$API_ENUM.INNOVATE_INNOVATEINFO,
      form: {
        applicationType: '1',
        applicationMode: '1',
        applicationModeDesc: 'APP',
        projectStage: '1',
        innovateExtParamList: [],
        visitTypeUrl: '',
        otherAppMode: false, //是否是其他应用形式
        otherAppModeDesc: '' //其他应用形式描述
      },
      urlProtocal: 'http://', //应用访问地址协议
      visitUrl: '', //访问路径
      appImgs: [], //应用图片
      visitCode: [], //访问二维码
      errorTip_appImg: true, //应用图片验证提示
      errorTip_visitType: true, //应用访问验证提示
      errorTip_visitUrl: false, //应用访问路径提示

      ruleValidate: {
        applicationName: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string', max:256, message:'输入长度过长', trigger:'blur'},
        ],
        applicationMode: [
          { required: true, message: '该项不能为空', trigger: 'change' }
        ],
        applicationModeDesc: [
          { required: true, message: '该项不能为空', trigger: 'blur' },
            { type: 'string',max:128, message:'输入长度过长', trigger:'blur'},
        ],
        otherAppModeDesc: [
          { validator: validateOtherAppModeDesc, trigger: 'blur' }
        ],
        applicationType: [
          { required: true, message: '该项不能为空', trigger: 'blur' }
        ],
        userScale: [
            {required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/},
          { type: 'string',max:128, message:'输入长度过长', trigger:'blur'},
        ],
        businessGoal: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        useCase: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        targetCustomer: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        performanceIndex: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        industryCompare: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        inputBudget: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        newTechnology: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string',max:256, message:'输入长度过长', trigger:'blur'},
        ],
        usenewTechnologyrScale: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string', max:256, message:'输入长度过长', trigger:'blur'},
        ],
        dataDrive: [
          { required: true, message: '该项不能为空', trigger: 'blur', pattern: /([^\s])/ },
          { type: 'string', max:256, message:'输入长度过长', trigger:'blur'}
        ],
        projectStage: [
          { required: true, message: '该项不能为空', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    PictureUpload
  },
  watch: {
    visitCode: function(val, oldVal) {
      this._validateVisitType();
    },
    urlProtocal: function(val, oldVal) {
      if(this.visitUrl) {
        this.form.visitTypeUrl = this.urlProtocal + this.visitUrl;
      } else {
        this.form.visitTypeUrl = '';
      }
    },
    visitUrl: function(val, oldVal) {
      if(this.visitUrl) {
        this.form.visitTypeUrl = this.urlProtocal + this.visitUrl;
      } else {
        this.form.visitTypeUrl = '';
      }
    },
    'form.visitTypeUrl': function(val, oldVal) {
      this._setVisitURL();
    },
    appImgs: function(val, oldVal) {
      if(this.appImgs.length < 1) {
        this.errorTip_appImg = true;
      } else {
        this.errorTip_appImg = false;
      }
    }
  },
  methods: {
      isDisplay() {

          return false;
      },
    /**
     * 初始化数据处理
     */
    _mxArrangeFormInfo(data) {
      this.form = data;
      const applicationMode = this.forms.find(item => item.value === this.form.applicationMode);
      if(applicationMode.value == 5) { //其他应用形式
        this.form.otherAppMode = true;
        this.form.otherAppModeDesc = this.form.applicationModeDesc;
      }

      this._setVisitURL();

      //回显图片
      this.appImgs = this.form.innovateExtParamList.map(item => {
        return this._formatUploadData(item.extValue);
      });
      if(this.form.visitTypeCode) {
        this.visitCode.push(this._formatUploadData(this.form.visitTypeCode));
      }

        if(this.$route.query.id)
      {
          this.appDisabled= true
      }
      return data;
    },
    /**
     * 提交表单前调整表单内数据
     * @param formData
     * @private
     */
    _mxArrangeSubmitData(formData) {
      if(formData.applicationMode == 5) { //其他应用形式
        formData.applicationModeDesc = this.form.otherAppModeDesc;
      }
      return formData;
    },
    /**
     * 验证应用访问类型的值
     */
    _validateVisitType() {
      if(this.visitCode.length < 1 && /^\s*$/g.test(this.visitUrl)) { //二维码&&访问路径都为空
        this.errorTip_visitType = true;
        this.errorTip_visitUrl = false;
      } else { //二维码不为空，当访问路径不为空时验证路径格式
        this.errorTip_visitType = false;
        const _visitTypeUrl = this.form.visitTypeUrl;
        if(this.visitUrl.trim() !== '') {
          const _reg = /^(https|http):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
          if(_reg.test(_visitTypeUrl) && _visitTypeUrl.length <= 512) {
            this.errorTip_visitUrl = false;
          } else {
            this.errorTip_visitUrl = true;
          }
        } else {
          this.errorTip_visitUrl = false;
        }
      }
    },

    /**
     * 格式化上传图片的数据格式，以满足iview-Upload组件
     * { url: url, uuid: uuid }
     */
    _formatUploadData(url) {
      const lastIndex = url.lastIndexOf('/');
      const len = url.length;
      const uuid = url.substr((lastIndex + 1), len);
      return {
        url: url,
        uuid: uuid
      };
    },

    /**
     * 应用形式下拉框改变时的处理函数
     * @param item 包含label的下拉框值
     */
    _appModeChange(item) {
      if(item.value == 5) { //其他应用形式
        this.form.otherAppMode = true;
      } else {
        this.form.otherAppMode = false;
        this.form.applicationModeDesc = item.label;
      }
    },
    /**
     * 设置应用访问地址
     */
    _setVisitURL() {
      const _url = this.form.visitTypeUrl;
      const _httpStr = 'http://';
      const _httpsStr = 'https://';
      if(_url.indexOf(_httpStr) === 0) {
        this.urlProtocal = _httpStr;
        this.visitUrl = _url.substr(7, _url.length);
      } else if(_url.indexOf(_httpsStr) === 0) {
        this.urlProtocal = _httpsStr;
        this.visitUrl = _url.substr(8, _url.length);
      }

      this._validateVisitType();
    },
    addAppImg(value) {
      this.appImgs.push(value);
      const item = {
        extValue: value.url,
        extKey: 1 //1表示应用图片
      }
      this.form.innovateExtParamList.push(item);

      this.errorTip_appImg = false;
    },
    /**
     * 删除图片后设置
     * 如果删除的是已存在图片，则设置available = false
     * 如果删除的是刚上传的图片（未在创新应用数据表中存在），则直接删除
     */
    removeAppImg(value) {
      this.appImgs.splice(this.appImgs.findIndex((item) => { return item.uuid === value.uuid }), 1);

      this.form.innovateExtParamList.forEach((item, key) => {
        const _uuid = this._formatUploadData(item.extValue).uuid;
        if(_uuid === value.uuid) {
          if(item.hasOwnProperty('id')) { //设置available = false
            item.available = false;
          } else { //直接删除
            const _index = this.form.innovateExtParamList.indexOf(item);
            this.form.innovateExtParamList.splice(_index, 1);
          }
        }
      })
    },
    addVisitCode(value) {
      this.visitCode.push(value);
      this.form.visitTypeCode = value.url;

      this.errorTip_visitType = false;
    },
    removeVisitCode(value) {
      this.visitCode.splice(this.visitCode.findIndex((item) => { return item.uuid === value.uuid }), 1);
      this.form.visitTypeCode = '';
    },
    doSubmit() {
      //访问图片、路径验证
      if(this.errorTip_appImg || this.errorTip_visitType || this.errorTip_visitUrl) {
        return;
      }
      this._mxHandleSubmit();
    }
  }
}
</script>

