<!-- 
此页面为续费变配专用，流程会强行校验订单数据，新购页不走此页面 
流程说明：
  beforeRouteEnter 中取订单数据，并混入初始化key
-->
<style lang="scss">
.product-buy {
  .router-group {
    text-align: left;
    padding-top: 20px;

    .router {
      &.link {
        cursor: pointer;

        &::after {
          content: ">";
          padding: 0 5px;
        }
      }
    }
  }

  .title {
    padding: 40px 0 30px 0;
  }
  .instance_details {
    > p {
      font-size: 20px;
    }
    .key-value {
      margin-top: 10px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding-top: 10px;
      padding-bottom: 24px;

      .col {
        margin-top: 14px;
        text-overflow: ellipsis;
        .label {
          font-weight: bold;
        }
        .value {
        }
      }
    }
  }

  .content {
    width: 1200px;
    margin: 0 auto 100px auto;
    padding: 20px 150px 20px 250px;
  }

  .base-form {
    margin-top: 30px;
    /deep/.ivu-input-wrapper,
    .ivu-input,
    .ivu-select {
      width: 500px !important;
    }
  }
}
</style>

<template>
  <div class="product-buy">
    <div class="content">
      <h1 class="title">{{instanceBasicInfo.serviceName}}</h1>
      <!-- <ci-credit-management @credit-info-change="getCreditInfo"></ci-credit-management> -->
      <div class="instance_details">
        <p>配置信息</p>
        <Row class="key-value">
          <Col span="12" v-for="item in instanceData" :key="item.key" class="col">
            <label class="label">{{item.keyName}}：</label>
            <span class="value">{{item.codeName}}</span>
          </Col>
        </Row>
      </div>

      <Form
        :label-width="90"
        class="base-form"
        :model="formModel"
        :rules="formValidate"
        ref="kvForm"
      >
        <!-- ref用来标记页面由数据生成的组件,this.$refs.keyVM 可取到所有标记的VUE实例对象 -->
        <ci-buy-key
          ref="keyVM"
          :buyKeyConfig="optionsKey"
          v-for="(optionsKey) in initData"
          :key="optionsKey.id"
          @change="buyKeyChange"
        ></ci-buy-key>

        <FormItem label="购买备注" prop="remarks">
          <Input
            type="textarea"
            :autosize="{minRows: 3,maxRows: 5}"
            v-model="formModel.remarks"
            placeholder="选填，可输入300字（不支持特殊字符）..."
          ></Input>
        </FormItem>

        <ci-cost-center ref="costCenter"></ci-cost-center>

        <!-- 购买备注： -->
      </Form>
    </div>
    <ci-renew-and-updata-cost
      :loading="costLoading"
      :cost="cost"
      @submit="doSubmit"
      @firstCost = "firstCost = true"
      :actionId="actionId"
      :serviceid="instanceBasicInfo.service_id"
    ></ci-renew-and-updata-cost>

      <!--  -->
  </div>
</template>

<script>
import buyKey from "com/product/buy/buyKey.vue";
import renewAndUpdataCost from "com/product/buy/renewAndUpdataCost.vue";
import costCenter from "../../../components/product/buy/costCenter";

export default {
  data() {
    let { instance_id, actionId } = this.$route.query;
    return {
      firstCost:false,//页面渲染结束时是否需要调用算费
      isInThrottleForCreate: false, //是否在调用 create接口节流中
      instance_id,
      actionId,
      costLoading: false,
      formModel: {
        remarks: "" //购买备注
      }, //表单额外字段
      formValidate: {
        remarks: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback();
              } else if (
                /^([\u4e00-\u9fa5a-zA-Z0-9\-!@#$*(){}\[\]?=]|)+$/.test(value)
              ) {
                callback();
              } else {
                callback(new Error("不支持特殊字符"));
              }
            },
            trigger: "blur"
          }
        ]
      }, //额外表单的校验规则
      upDropMark: "0", //算费是否正常0不正常，1正常
      parameters: "",
      //实例基本信息取自订单传过来的数据
      instanceBasicInfo: {
        serviceName: "",
        service_id: null
      },
      instanceData: null,
      billingType: "package",
      cost: {},
      initData: []
    };
  },
  async beforeMount() {
    //1获取实例信息并存入vm中
    await this.getInstanceInfo();
    //2.从接口获得初始化key
    let initData = await this.getInitKey();
    console.log(initData);
    // //3、混入实例传过来的值
    initData = this.serviceMixinInitData(initData);
    // 4、混入默认值
    initData = this.mixinDefaultValue(initData)
    //5、请求获得新的展示key
    initData = await this.getNewInitKey(initData);

   //6、赋值渲染
    this.initData = initData;
    //7、续费时首次调用算费
    this.$nextTick(()=> {
      if(this.firstCost){
        this.buyKeyChange({})
      }
    })
   
    //进入页面chang事件监听 buyKeyChange 方法逻辑
  },
  mounted() {
     
  },
  beforeCreate() {},
  created() {},
  computed: {},
  methods: {
    //混入默认值
    mixinDefaultValue(initData){
      initData.forEach(element => {
        let { defaultValue, defaultValueId } = element
        if(defaultValue && defaultValueId){
          element.value = defaultValue
          element.valueId = defaultValueId
        }
      });
      return initData
    },
    //value为空时选择第一个为默认值
    selectDefault(initData) {
      console.log(initData);
      let isChange = false;
      initData.forEach(element => {
        if (
          !element.value &&
          element.keyValues &&
          element.keyValues.length > 0 &&
          element.showOrNot
        ) {
          let firstOne = element.keyValues[0];
          element.value = firstOne.code;
          element.valueId = firstOne.id;
          isChange = true;
        }
      });
      return {
        initData,
        isChange
      };
    },
    //校验其他增加的表单项数据
    checkFormModel() {
      return new Promise((resolve, reject) => {
        this.$refs.kvForm.validate(valid => {
          if (valid) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    },

    async doSubmit() {
      let valid = await this.checkFormModel();
      if (!valid) {
        this.$Message.error("表单校验失败");
        return;
      }
      const centerData = await this.$refs.costCenter.getCenterData();
      const { baseLine, baseLineName, costCenter, costCenterName } = centerData;

      let requestData = {
        instanceId: this.instance_id,
        serviceId: this.instanceBasicInfo.service_id,
        actionId: this.actionId,
        costIds: costCenter,
        parameters: await this.getParamKV()
      };

      this.$put(this.$API_ENUM.CITIC_ORDERS_ORDERS_RECONFIG, requestData).then(
        res => {
          console.log(res);
          if (res.code == "200") {
            this.$router.push("/citic-web-ui/console/order");
          }else{
            this.$Message.error(res.message)
            return
          }
        }
      );
    },
    async buyKeyChange({ relationKey }) {
      console.log("relationKey", relationKey)
      
      if (relationKey) {
        //此处可出发loading事件
        this.costLoading = true;
        let res = await this.getNewInitKey(this.initData);
        console.log("----------------");
        console.log(res);
        let defaultObj = this.selectDefault(res);
        // debugger;
        if (defaultObj.isChange) {
          this.initData = res;
          this.buyKeyChange({ relationKey });

          return;
        } else {
          this.initData = res;
        }
      }

      //调用算费
      setTimeout(() => {
        //调整算费逻辑进入宏队列
        this.doCost();
      }, 0);
    },
    async doCost() {
      //  console.log(this.initData)
      //  console.log(this.instanceData)
      console.log(this.$refs.keyVM);

      let keyVM = this.$refs.keyVM;
      let checkArray = [];
      for (let index = 0; index < keyVM.length; index++) {
        const element = keyVM[index];
        element.dataCheck();
        checkArray.push(element.isChecked);
      }
      let costCenterCheck = await this.$refs.costCenter.validate();
      console.log(costCenterCheck);

      if (checkArray.includes(false) || !costCenterCheck) {
        console.log("校验未通过");
        return;
      }

      //拼装算费请求参数
      this.getCost();
    },
    //获得请求参数中的KV
    async getParamKV() {
      let kvMap = new Map();

      Object.keys(this.parameters).forEach(key => {
        kvMap.set(key, this.parameters[key]);
      });

      this.initData.forEach(el => {
        if (el.showOrNot) {
          kvMap.set(el.code, el.value);
        }
      });
      const centerData = await this.$refs.costCenter.getCenterData();
      const { baseLine, baseLineName, costCenter, costCenterName } = centerData;
      kvMap.set("app_base_line", `${baseLine}=${baseLineName}`);
      kvMap.set("cost_center", `${costCenter}=${costCenterName}=100`);

      let kvMapObj = Object.create(null);
      for (let [k, v] of kvMap) {
        kvMapObj[k] = v;
      }
      console.log(kvMapObj);
      return kvMapObj;
    },
    async getCost() {
      let requestData = {
        instanceId: this.instance_id,
        serviceId: this.instanceBasicInfo.service_id,
        actionId: this.actionId,
        parameters: await this.getParamKV()
      };
      console.log(requestData);
      this.$post(this.$API_ENUM.CITIC_BUY_UPDATEPRICES, requestData).then(
        res => {
          
          let costConfig = res.data.reconfigCost
            ? res.data.reconfigCost
            : res.data.detailCosts;

          let _costTemp = {}

          if(Array.isArray(costConfig)){
            _costTemp = costConfig[0]
          }else if(null ==  costConfig){

          }else if(typeof costConfig == "object"){
            _costTemp = costConfig
          }


          let {
            cost_value,
            cost_unit_name,
            upDropMark,
            upDropMarkMsg,
            billingType
          } = _costTemp;
          this.costLoading = false;
          // debugger;
          if (upDropMark != 1) {
            this.cost = {}
            this.upDropMark = upDropMark;
            this.$Message.error(upDropMarkMsg);
            return;
          }
          
          this.cost = costConfig;
          this.upDropMark = upDropMark;
          this.billingType = billingType;
        }
      );
    },
    async getNewInitKey(initData) {
      // debugger;
      //提交旧参数获取新的initkey
      // debugger;
      let res = await this.$post(
        this.$API_ENUM.CITIC_SERVICE_CONFIG_KVRELATION.replace(
          "SERVICEID",
          this.instanceBasicInfo.service_id
        ).replace("ACTIONID", this.actionId),
        initData
      );

      // console.log(res)
      return res.data;
    },
    async getInitKey() {
      let res = await this.$get(
        this.$API_ENUM.CITIC_SERVICE_CONFIG_KV_INIT.replace(
          "SERVICEID",
          this.instanceBasicInfo.service_id
        ),
        { actionId: this.actionId }
      );
      return res.data;
    },
    async getInstanceInfo() {
      let res = await this.$get(
        this.$API_ENUM.CITIC_PORTAL_INSTANCE_GETINSTANCENEWBUYDETAIL.replace(
          "INSTANCEID",
          this.instance_id
        )
      );
      console.log(res.data);
      let { parameters, serviceId, serviceInfo, serviceName } = res.data;
      this.instanceData = res.data.serviceInfo;
      this.instanceBasicInfo.service_id = serviceId;
      this.parameters = parameters;
      return;
      //赋值

      //
      // //

      // //设置服务基本信息
      // this.instanceBasicInfo.serviceName = instanceMap.service_name;
      // this.instanceBasicInfo.service_id = instanceMap.service_id;
      // // document.title = instanceMap.service_name

      // this.instanceData = service;
      // this.parameters = parameters;
    },
    serviceMixinInitData(initData) {
      //订单数据混入初始化key
      //用来做页面展示
      let parametersKeyObj = Object.keys(this.parameters);

      initData.map(el1 => {
        parametersKeyObj.forEach(el2 => {
          if (el1.code == el2) {
            console.log(el1);
            el1.value = this.parameters[el2];
            el1.valueId = getVualueId(el1.keyValues, el1.value);
            el1.oldValue = this.parameters[el2];
            el1.oldValueId = getVualueId(el1.keyValues, el1.value);
          }
        });
      });
      console.log(initData);
      //获得valueid
      function getVualueId(keyValues, value) {
        if (!keyValues || keyValues.length == 0) {
          return "";
        }
        for (let index = 0; index < keyValues.length; index++) {
          const element = keyValues[index];
          if (element.code == value) {
            return element.id;
          }
        }
      }

      return initData;
    },
    getCreditInfo(creditProhibit) {
      console.log(creditProhibit);
    }
  },
  components: {
    "ci-buy-key": buyKey,
    "ci-cost-center": costCenter,
    "ci-renew-and-updata-cost": renewAndUpdataCost
  }
};
</script>