<!-- 
此页面为续费变配专用，流程会强行校验订单数据，新购页不走此页面 
流程说明：
  beforeRouteEnter 中取订单数据，并混入初始化key
-->
<style  lang="scss">
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

  .clause-block {
    padding: 40px 0;

    /deep/ .ivu-checkbox-wrapper {
      margin: 0;
    }

    .clause-link {
      color: #2d8cf0;
      text-decoration: underline;
      text-decoration-color: #2d8cf0;
      cursor: pointer;
    }
  }
}
@import "../../../assets/scss/order.scss";
</style>

<template>
  <div class="product-buy">
    <div class="content">
      <div class="router-group">
        <router-link to="/">
          <span class="router link">首页</span>
        </router-link>
        <router-link to="/product/center">
          <span class="router link">产品中心</span>
        </router-link>
        <span class="router">{{supplierService.serviceName}}</span>
      </div>

      <h1 class="title">{{supplierService.serviceName}}</h1>

      <Form
        :label-width="90"
        class="base-form"
        :model="formModel"
        :rules="formValidate"
        ref="kvForm"
        @submit.native.prevent
      >
        <!-- ref用来标记页面由数据生成的组件,this.$refs.keyVM 可取到所有标记的VUE实例对象 -->
        <ci-buy-key
          ref="keyVM"
          :buyKeyConfig="optionsKey"
          v-for="(optionsKey) in initData"
          :key="optionsKey.id"
          @change="buyKeyChange"
          :isLoading="changeLoading"
        ></ci-buy-key>
        <ci-cost-center ref="costCenter"></ci-cost-center>
        <FormItem label="购买备注" prop="remarks">
          <Input
            type="textarea"
            :autosize="{minRows: 3,maxRows: 5}"
            v-model="formModel.remarks"
            placeholder="选填，可输入300字（不支持特殊字符）..."
          ></Input>
        </FormItem>
      </Form>

      <div class="clause-block">
        <p>
          <Checkbox class="statement-checkbox" v-model="formModel.acceptStatement">我已同意</Checkbox>
          <span class="clause-link" @click="formModel.showStatement = true">法律地位声明</span>
        </p>
        <br />
        <p v-if="formModel.haveClause">
          <Checkbox v-model="formModel.acceptClause">我同意</Checkbox>
          <span class="clause-link" @click="openClause">服务条款</span>
        </p>
      </div>
    </div>

    <ci-cost-float
      :cost="costList"
      :loading="loading"
      @submit="doSubmit"
      ref="costBar"
      :todo="todo"
      :disabled="!canSubmit"
    />

    <!-- 提交订单确认 -->
    <ci-dialog :value.sync="formModel.visibleOrder">
      <template slot="body">
        <span class="icon-success"></span>
        <p class="dialog-title">您的订单已提交成功！</p>
        <p class="dialog-subtitle">www.c.citic</p>
      </template>

      <template slot="footer">
        <div class="dialog-button-group">
          <Button type="ghost" shape="circle" @click="formModel.visibleOrder = false">确定</Button>
          <Button type="error" shape="circle" @click="toOrderList">去订单列表</Button>
        </div>
      </template>
    </ci-dialog>
    <!-- 法律声明 -->
    <ci-dialog class="statement-dialog" :value.sync="formModel.showStatement" :maskClosable="false">
      <template slot="header">法律地位声明</template>

      <template slot="body">
        <p class="statement" v-if="supplierService.supplier.name">
          &nbsp;&nbsp;&nbsp;&nbsp;您通过中信云（www.c.citic）向
          <span
            class="height-light"
          >【{{supplierService.supplier.name}}】</span>采购
          <span class="height-light">【{{supplierService.serviceName}}】</span>，
          中信科技发展有限公司作为中信云平台的运营方，在您采购的产品或服务出现质量责任问题时，
          将根据您的合法要求，协助、配合您就所造成的损失向服务方进行相应的索赔及主张
          <span
            class="height-light"
          >【{{supplierService.supplier.name}}】</span>承担相应的责任。
        </p>
      </template>

      <template slot="footer">
        <div class="dialog-button-group">
          <Button shape="circle" class="submit-btn" @click="formModel.showStatement = false">确认同意</Button>
        </div>
      </template>
    </ci-dialog>
  </div>
</template>

<script>
import buyKey from "com/product/buy/buyKey.vue";
import costCenter from "../../../components/product/buy/costCenter";
import costFloat from "../../../components/product/buy/newBuyCost";
import baseUtil from "../../../utils/base";
//http://127.0.0.1:8080/citic-web-ui/product/newBuy?service_id=5785e232b9aa1e3769039c19

export default {
  data() {
    let { service_id, adapterServiceId } = this.$route.query;
    return {
      isInThrottleForCreate: false, //是否在调用 create接口节流中
      changeLoading: false, //组件改变时防止点击
      loading: false,
      service_id,
      adapterServiceId,
      clauseId: "",
      todo: "",
      supplierService: {
        supplier: {},
        serviceName: ""
      },
      formModel: {
        showStatement: false, //法律生命弹窗变量
        remarks: "", //购买备注
        acceptStatement: false, //服务条款
        acceptClause: false, //法律条款确认状态
        haveClause: false, //是否有服务条款
        acceptClause: false, //服务条款确认状态
        visibleOrder: false //确认窗弹出状态
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
      serviceName: "",
      actionId: "create",
      cost: "",
      upDropMark: 0,
      upDropMarkMsg: "",
      initData: [],
      costList: []
    };
  },
  async beforeMount() {
    //0页面初始化
    await this.getServiceDetile();
    await this.getClause();
    //1.从接口获得初始化key

    let initData = await this.getNewInitKey();
    console.log(initData);
    //3、混入实例传过来的值
    this.initData = initData;
    // 进入页面chang事件监听 buyKeyChange 方法逻辑
    this.$nextTick(() => {
      this.buyKeyChange({ billingKey: true });
    });
  },
  mounted() {
    // this.getCreditInfo()
  },
  beforeCreate() {},
  created() {},
  computed: {
    canSubmit() {
      console.log("----------");
      //  console.log(this.formModel.acceptStatement)

      //判断是否有价格
      if (!this.costList.length || this.costList.length < 1) {
        return false;
      }
      //判断价格状态是否正确
      if (this.upDropMark != 1) {
        return false;
      }
      //判断是否勾选法律声明
      if (!this.formModel.acceptStatement) {
        return false;
      }
      //判断是否勾选服务条款
      if (this.formModel.haveClause && !this.formModel.acceptClause) {
        return false;
      }
      //TODO 差信用管控

      return true;
    }
  },
  methods: {
    toOrderList() {
      this.$router.push("/citic-web-ui/console/order");
    },
    async getServiceDetile() {
      // 5aa88d059a78b61784ae757d
      let res = await this.$get(
        this.$API_ENUM
          .CITIC_SUPPLIER_SERVICES_SUPPLIERSERVICEBYADAPTERSERVICEID,
        { adapterServiceId: this.adapterServiceId }
      );

      let { supplier, id, name } = res.data[0];
      this.supplierService.id = id;
      this.supplierService.serviceName = name;
      this.supplierService.supplier = supplier;
      document.title = name;
      return;
    },

    async getClause() {
      // https://devops123.c.citic/leo/terms-of-conditions/5acaccc5822d160d38e8e1ff/5ac49356822d1610f846cda2
      // https://devops123.c.citic/leo/terms-of-conditions/5ac49356822d1610f846cda2/5acaccc5822d160d38e8e1ff
      const res = await this.$get(
        this.$API_ENUM.TERMS_OF_CONDITIONS_SERVICEID_SUPPLIERID.Format(
          this.supplierService.id,
          this.supplierService.supplier.id
        )
      );

      console.log(res);

      if (res.data && res.data.id) {
        this.formModel.haveClause = true;
        this.formModel.clauseId = res.data.id;
      } else {
        this.formModel.haveClause = false;
        // 没有服务条款默认为接受状态
      }

      return;
    },

    async doSubmit(action) {
      switch (action) {
        case "buy":
          this.doOrder();
          break;

        case "order":
          await this.doOrder(false);
          this.formModel.visibleOrder = true;
        default:
          break;
      }
    },

    async doOrder(isJump = true) {
      this.loading = true;
      const centerData = await this.$refs.costCenter.getCenterData();
      const { baseLine, baseLineName, costCenter, costCenterName } = centerData;
      let kvObj = await this.getParamKV();
      kvObj.property = "4=生产";
      kvObj.remarks = this.formModel.remarks;
      let requestData = {
        type: "add",
        serviceId: this.service_id,
        costIds: costCenter,
        parameters: kvObj
      };

      let res = await this.$post(
        this.$API_ENUM.CITIC_ORDER_CREATE,
        requestData
      );
      if(res.code != 200){
        this.$Message.error(res.message)
        return
      }
      if (isJump) {
        this.toOrderList();
      }
      setTimeout(() => {
        this.loading = false;
      }, 800);

      return;
    },

    async buyKeyChange({ relationKey, billingKey }) {
      let isChecked = true;
      this.costList = []; //清楚价格数据
      let keyVM = this.$refs.keyVM;
      let checkArray = [];

      if (relationKey) {
        this.changeLoading = true;
        let res = await this.getNewInitKey(this.initData);
        this.initData = res;
        this.$forceUpdate();
      }
      setTimeout(async () => {
        for (let index = 0; index < keyVM.length; index++) {
          const element = keyVM[index];
          element.dataCheck();
          checkArray.push(element.isChecked);
        }
        let costCenterCheck = await this.$refs.costCenter.validate();
        if (checkArray.includes(false) || !costCenterCheck) {
          console.log("校验未通过");
          isChecked = false;
          // return;
        }

        if (isChecked) {
          setTimeout(() => {
            //调整算费逻辑进入宏队列
            this.doCost(isChecked);
            this.changeLoading = false;
          }, 0);
        } else {
          this.changeLoading = false;
        }
      }, 0);

      // if (!this.isInThrottleForCreate) {
      //     this.isInThrottleForCreate = true;
      //     await baseUtil.waiting(1000);
      //   if (relationKey) {
      //     //此处可出发loading事件
      //     let res = await this.getNewInitKey(this.initData);
      //     // debugger;
      //     console.log(res);
      //     this.initData = res;
      //     this.$forceUpdate();
      //   }

      // }

      // //调用算费
      // setTimeout(() => {
      //   //调整算费逻辑进入宏队列
      //   this.doCost();
      // }, 0);
    },
    async doCost(isChecked) {
      console.log("isCheckedisCheckedisCheckedisChecked", isChecked);
      if (isChecked) {
        this.getCost();
      }

      //拼装算费请求参数
    },
    //获得请求参数中的KV
    async getParamKV() {
      let kvMapObj = {};

      this.initData.forEach(el => {
        if (el.showOrNot) {
          kvMapObj[el.code] = el.value;
        }
      });
      const centerData = await this.$refs.costCenter.getCenterData();
      const { baseLine, baseLineName, costCenter, costCenterName } = centerData;

      kvMapObj["app_base_line"] = `${baseLine}=${baseLineName}`;
      kvMapObj["cost_center"] = `${costCenter}=${costCenterName}=100`;

      console.log(kvMapObj);
      return kvMapObj;
    },
    async getCost() {
      let requestData = {
        serviceId: this.service_id,
        actionId: this.actionId,
        parameters: await this.getParamKV()
      };
      console.log(requestData);
      this.$post(this.$API_ENUM.CITIC_BUY_UPDATEPRICES, requestData).then(
        res => {
          let costList = res.data.detailCosts;
          let upDropMark = 0;
          let upDropMarkMsg = "";
          for (let index = 0; index < costList.length; index++) {
            const element = costList[index];
            upDropMark = element.upDropMark;
            if (upDropMark != 1) {
              upDropMarkMsg = element.upDropMarkMsg;
              break;
            }
          }
          this.upDropMark = upDropMark;
          this.upDropMarkMsg = upDropMarkMsg;
          if (upDropMark == 1) {
            this.costList = costList;
          }
        }
      );
    },
    async getNewInitKey(initData) {
      //提交旧参数获取新的initkey
      // debugger;
      let res = await this.$post(
        this.$API_ENUM.CITIC_SERVICE_CONFIG_KVRELATION.replace(
          "SERVICEID",
          this.service_id
        ).replace("ACTIONID", this.actionId),
        initData
      );
      return res.data;
    },
    async getInitKey() {
      let res = await this.$get(
        this.$API_ENUM.CITIC_SERVICE_CONFIG_KV_INIT.replace(
          "SERVICEID",
          this.service_id
        ),
        { actionId: this.actionId }
      );
      return res.data;
    },
    openClause() {
      window.open(
        `/citic-web-ui/product/clause?id=${this.formModel.clauseId}&serviceName=${this.supplierService.serviceName}`
      );
    },
    toOrderList() {
      this.$router.push("/citic-web-ui/console/order");
    }
  },
  components: {
    "ci-buy-key": buyKey,
    "ci-cost-center": costCenter,
    "ci-cost-float": costFloat
  }
};
</script>