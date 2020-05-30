<style scoped lang="scss">
.buy-key {
  .form-item {
    .input-length {
      width: 500px;
    }
    .error-class {
      /deep/ .ivu-input {
        border-color: #ed3f14;
        &:hover {
          border-color: #ed3f14;
        }
        &:focus {
          border-color: #ed3f14;
          outline: 0;
          box-shadow: 0 0 0 2px rgba(237, 63, 20, 0.2);
        }
      }
      /deep/ .ivu-select-selection {
        border-color: #ed3f14;
        &:hover {
          border-color: #ed3f14;
        }
        &:focus {
          border-color: #ed3f14;
          outline: 0;
          box-shadow: 0 0 0 2px rgba(237, 63, 20, 0);
        }
      }
    }
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
  <div class="buy-key">
    <template>
      <!-- inputNum,inputSingleLine,inputText,select,tabSelect,password,searchSelect -->
      <!-- inputNum 数字输入窗 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'inputNum'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <InputNumber
          :max="9999"
          :min="0"
          v-model="numInputValue"
          @on-blur="onChang()"
          @on-change="onChang()"
          :disabled="isDisable"
        ></InputNumber>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>
      <!-- inputSingleLine 单行输入窗 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'inputSingleLine'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <Input
          v-model="buyKeyConfig.value"
          @on-blur="onChang()"
          :placeholder="buyKeyConfig.tips"
          :class="isChecked? '':'error-class'"
          :disabled="isDisable"
        ></Input>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>

      <!-- inputText 多行输入框 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'inputText'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <Input
          type="textarea"
          :autosize="{minRows: 3,maxRows: 5}"
          v-model="buyKeyConfig.value"
          @on-blur="onChang()"
          :placeholder="buyKeyConfig.tips"
          :class="isChecked? '':'error-class'"
          :disabled="isDisable"
        ></Input>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>

      <!-- select 下拉选择 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'select'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <Select
          v-model="buyKeyConfig.value"
          :placeholder="buyKeyConfig.tips"
          @on-change="onChang()"
          :clearable="!isDisable"
          :class="isChecked? '':'error-class'"
          :disabled="isDisable"
        >
          <i-option
            v-for="(item, index) in buyKeyConfig.keyValues"
            :key="item.code + index"
            :value="item.code"
          >{{item.displayName}}</i-option>
        </Select>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>
      <!-- tabSelect Radio单选 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'tabSelect'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <RadioGroup
          v-model="buyKeyConfig.value"
          type="button"
          @on-change="onChang"
          :disabled="isDisable"
        >
          <Radio
            v-for="(item, index) in buyKeyConfig.keyValues"
            :key="item.code + index"
            :label="item.code"
             :disabled="isDisable"
          >{{item.displayName}}</Radio>
        </RadioGroup>
      </FormItem>

      <!-- password 密码输入框 -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'password'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <Input
          type="password"
          v-model="buyKeyConfig.value"
          @on-blur="onChang()"
          :placeholder="buyKeyConfig.tips"
          :class="isChecked? '':'error-class'"
          :disabled="isDisable"
        ></Input>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>

      <!-- searchSelect  带搜索条件的selsec -->
      <FormItem
        :label="buyKeyConfig.displayName"
        v-if="buyKeyConfig.editComponent === 'searchSelect'"
        class="form-item"
        :class="buyKeyConfig.required?'required':''"
        v-show="isShowOrNot"
      >
        <Select
          v-model="buyKeyConfig.value"
          :placeholder="buyKeyConfig.tips"
          @on-change="onChang()"
          :clearable="!isDisable"
          filterable
          :class="isChecked? '':'error-class'"
          :disabled="isDisable"
        >
          <i-option
            v-for="item in buyKeyConfig.keyValues"
            :key="item.code"
            :value="item.code"
          >{{item.displayName}}</i-option>
        </Select>
        <div class="ivu-form-item-error-tip" v-show="!isChecked">{{ alertText }}</div>
      </FormItem>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    //当前行组件数据，可混入订单穿来的已选值
    buyKeyConfig: {
      required: true,
      type: Object
    },
    isLoading:{
      required:false,
      type: Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
      isChecked: true, //是否通过校验
      alertText: "",
      errorClass: "error-class",
      valuecheck: false
    };
  },
  mounted() {
    // console.log(this.buyKeyConfig)
    
    if(this.buyKeyConfig.editComponent == "inputNum" && !this.buyKeyConfig.value){
      // debugger;
      this.buyKeyConfig.value = 0
    }
  },
  computed: {
    numInputValue: {
      get() {
         if(!this.buyKeyConfig.value){
            return 0
          }else{
            return Number(this.buyKeyConfig.value)
          }
      },
      set(v) {
        this.buyKeyConfig.value = v;
      }
    },
    inputValue() {
      return this.buyKeyConfig.value;
    },
    isShowOrNot() {
      if (
        this.buyKeyConfig.showOrNot &&
        this.buyKeyConfig.keyInteractMode != "hidden"
      ) {
        return true;
      }
      return false;
    },
    isDisable() {
      let disable = false
      if (this.buyKeyConfig.keyInteractMode == "readonly") {
        disable =  true;
      }
      console.log("this.isLoading",this.isLoading)
      if(this.isLoading){
        disable = true
      }
      return disable;
    }
  },
  methods: {
    async onChang() {
      console.log(this.buyKeyConfig);
      //参数校验
      // this.valuecheck = await this.dataCheck();
      // console.log("valuecheck", this.valuecheck);

      //relationKey是否参与关联关系计算， keyValues selsect数据 value已选值
      let { relationKey, keyValues, value, billingKey } = this.buyKeyConfig;
      //取行数据为后端传参做准备
      let _rowData = {};
      if (keyValues && keyValues.length > 0) {
        keyValues.forEach(element => {
          if (value == element.code) {
            _rowData = element;
          }
        });
      }
      this.rowData = _rowData;
      this.buyKeyConfig.valueId = _rowData.id;
      this.buyKeyConfig.changedOrNot = true;

      this.$emit("change", { relationKey,billingKey });
    },
    async dataCheck() {
      let {
        value,
        required,
        code,
        expression,
        alertText,
        tips,
        showOrNot
      } = this.buyKeyConfig;
      //必填校验
      // if(this.buyKeyConfig.displayName == "实例密码"){
      //   debugger;
      // }
      if (showOrNot) {
        if (required) {
          if (value === undefined || value === null || value === "") {
            console.warn(`必填校验没有通过，code=${code},value=${value}`);
            this.isChecked = false;
            this.alertText = "此项必填";
            return false;
          }
        }
        //静态正则校验
        if (expression) {
          let valueReg = new RegExp(this.$Base64.decode(expression));
          if (!valueReg.test(value)) {
            console.warn(
              `静态正则校验校验没有通过，code=${code},value=${value}`
            );
            this.$Message.error(alertText);
            this.isChecked = false;
            this.alertText = alertText;
            return false;
          }
        }
      }

      //TODO 动态校验

      this.isChecked = true;
      return true;
    }
  },
  components: {}
};
</script>
