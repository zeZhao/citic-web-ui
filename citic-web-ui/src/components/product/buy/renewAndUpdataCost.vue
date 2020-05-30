<!--续费和变配页面底部加个展示组件  -->
<style scoped lang="scss">
.renew-and-updata-cost {
  height: 120px;
  background-color: #f6f7f8;
  min-width: 800px;
  .free {
    width: 100%;
    height: 130px;
    background-color: #f6f7f8;

    &.fixed-mark {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 999;
    }
    .cost {
      label {
        font-size: 16px;
      }
      span {
        display: inline-block;
        font-size: 20px;
        color: red;
        margin-top: 8px;
        // padding-left: 20px;
      }
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      padding: 20px 40px;
      height: 100%;
      .label {
        font-size: 15px;
        line-height: 60px;
      }
      .btn-group {
        text-align: center;
        .ivu-btn {
          height: 40px;
          width: 140px;
          font-size: 15px;
          font-weight: bold;
          margin: 0 10px;
          display: block;
          margin: 0 auto;
        }

        .tip-container {
          margin-top: 5px;
          .tip-click-container{
            .tip-label{
              font-weight: bold;
            }
          }
          .tip{
              margin-top: 5px;
              color: red;
            }
        }
      }
    }
  }
}
</style>

<template>
  <div class="renew-and-updata-cost" id="substanceCostPanel">
    <div class="free" v-float-bottom:substanceCostPanel>
      <Row class="container" type="flex">
        <Col span="18" class="cost">
          <Row>
            <Col
              span="12"
              class="cost"
              v-for="(item, index) in costFormat"
              :key="index"
              v-show="showCost"
            >
              <span>{{item.cost_name}}：</span>
              <span>{{item.cost_value + item.cost_unit_name}}</span>
            </Col>
          </Row>
        </Col>
        <Col span="6" class="btn-group">
          <Button
            type="error"
            shape="circle"
            size="large"
            @click="submit()"
            :disabled="buyBtnDisabled"
            :loading="loading"
          >确认变更</Button>
          <div class="tip-container" v-show="showTip && serviceid=='576206bb6ae6ca04e145958d'">
            <p class="tip-click-container">
              <label  class="tip-label">变配请参考：</label>
              <a
                name="tip-click"
                href="https://help.aliyun.com/document_detail/89743.html?spm=a2c4g.11186623.2.42.19686a945NWqgu#concept-mdh-2rb-1fb"
                target="_blank"
              >&lt;&lt;阿里云ECS变配说明 &gt;&gt;</a>
            </p>
            <p class="tip">因阿里云要求实例变更规格时必须处于已停止状态，请您在订单审批前务必停止实例，否则将变配失败！</p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //组件中各种状态
    //费用
    cost: {
      default: function() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    actionId: {
     
    },
    serviceid: {
       type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      upDropMark: 0,
      creditObj: {},
      creditForBtn: false, //信用管控控制体检按钮的btn变量
      showTip: false
    };
  },
  beforeMount() {},
  mounted() {
    this.getCreditInit();
  },
  beforeCreate() {},
  beforeUpdate() {
    console.log(this.cost);
  },
  created() {},
  computed: {
    costFormat() {
      if (Array.isArray(this.cost)) {
        return this.cost;
      } else {
        return [this.cost];
      }
    },
    showCost() {
      console.log("this.cost", this.costFormat);
      if (this.costFormat[0].cost_value && this.costFormat[0].cost_unit_name) {
        this.upDropMark = this.costFormat[0].upDropMark;
        return true;
      }

      return false;
    },
    //此计算属性用来处理按钮状态
    buyBtnDisabled() {
      //确认按钮是否禁用  true为禁用
      let _costTemp = {};
      if (Array.isArray(this.cost)) {
        _costTemp = this.cost[0];
      } else if (null == this.cost) {
      } else if (typeof this.cost == "object") {
        _costTemp = this.cost;
      }

      if (_costTemp.upDropMark != 1) {
        return true;
      }
      if (this.creditForBtn == false) {
        return true;
      }

      // this.creditForBtn = false
      // // debugger;

      return false;
    },
    isLoading() {
      // console.log(this.buyBtnDisabled())
      // if(this.buyBtnDisabled())
      // return
    }
  },
  watch: {
    cost: function(newVal, oldVal) {
      console.log("------------");
      console.log(newVal, oldVal);

      if (Array.isArray(newVal)) {
        this.creditObj.isPackage =
          newVal[0].billingType == "package" ? true : false;
      } else {
        this.creditObj.isPackage =
          newVal.billingType == "package" ? true : false;
      }

      let {
        status,
        manualFreezeFlag,
        usableBalance,
        isRenew,
        isPackage
      } = this.creditObj;
      let res = this.getErrorTips(
        status,
        manualFreezeFlag,
        usableBalance,
        isRenew,
        isPackage,
        this.cost
      );
      console.log(res);
      if (res !== undefined) {
        this.creditForBtn = false;
        this.$Message.error(res);
        return true;
      } else {
        this.creditForBtn = true;
      }
    }
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    //初始化信用管控数据
    getCreditInit() {
      this.$get(
        this.$API_ENUM.CITIC_SERVICE_CONFIG_ACTION.replace("ID", this.actionId)
      )
        .then(res => {
          this.creditObj.isRenew =
            res.data.actionType == "renew" ? true : false;
          return new Promise((resolve, reject) => {
            resolve(res.data.actionType);
          });
        })
        .then(actionType => {
          if (actionType === "reconfig") {
            this.showTip = true;
          }
          if (actionType === "renew" || actionType === "convertPackage") {
            this.$emit("firstCost");
          }
        });
      this.$get(this.$API_ENUM.CITIC_ACCOUNT_CREDIT_TID).then(res => {
        let { status, manualFreezeFlag, usableBalance } = res.data;
        this.creditObj.status = status;
        this.creditObj.manualFreezeFlag = manualFreezeFlag;
        this.creditObj.usableBalance = usableBalance;
      });
    },
    //信用管控判断并获得提示的方法
    getErrorTips(
      status,
      manualFreezeFlag,
      usableBalance,
      isRenew,
      isPackage,
      cost
    ) {
      // 冻结类型判断
      if (status === "freeze") {
        if (manualFreezeFlag) {
          return !!isRenew
            ? "您有账单逾期未支付，暂时不支持续订实例！"
            : "您有账单逾期未支付，暂时不支持变配！";
        } else {
          // 续费限制，变配不限制
          if (!isRenew) {
            return "您尚未支付的消费金额已超出您的信用额度，暂时不支持变配！";
          }
        }
      }

      // 超额判断
      // 按量服务不处理,只处理包费
      // 续费服务不处理,只处理变配
      if (isPackage && !isRenew) {
        let limit = usableBalance || "0";
        limit = Number(limit.replace(/,/g, ""));
        let money = Number(cost);

        if (money > limit) {
          return "您当前的可支付余额小于当前购买服务金额，暂时不支持变配！";
        }
      }
    }
  },
  components: {}
};
</script>