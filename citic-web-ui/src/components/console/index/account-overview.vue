<style scoped lang="scss">
.account-overview{
  background-color: #ffffff;
  color: rgb(102, 102, 102);
  font-size: 12px;
  padding: 20px;
  height: 305px;
  width: 98%;
  margin: auto;
  
   &>.title{
        font-size: 18px;
        color: rgb(51, 51, 51);
        font-weight: bold;
    }
    .group{
      text-align: center;
      margin-top: 32px;
      .money{
        font-size: 20px;
        color: rgb(67, 64, 65);
        font-weight: bold;
      }
      .lable{
        color: rgba(77, 77, 77, 0.8);
      }

      
    }
    .btn-group{
      text-align: center;
      margin-top: 30px;
      .btn{
        display: inline-block;
         width: 35%;
         height: 34px;
         border: 1px solid rgb(234, 65, 35);
         line-height: 32px;
         color: rgb(234, 65, 35);
         text-align: center;
         border-radius: 17px;
         font-weight: bold;
         &:first-child{
           color: #ffffff;
           background-color: rgb(234, 65, 35); 
           margin-right: 10px;
         }
      }
    }
}
</style>
<template>
 <div class="account-overview">
     <p class="title">账户总览</p>
     <div class="group">
       <p class="money">{{accountBalance}}</p>
       <p class="lable">账户余额(元)</p>
     </div>
     <div class="group">
      <p class="money">{{bill}}</p>
      <p class="lable">当前账单(元)</p>
     </div>
     <div class="btn-group">
       <router-link to="./userCenter/cashCoupon/list" class="btn">代金券</router-link>
       <router-link to="./userCenter/invoice/myInvoice" class="btn">申请发票</router-link>
     </div>
 </div>


</template>
<script>
import Api from "utils/apiEnum.js";
import BaseUtil from "utils/base.js";
export default {
  data() {
    return {
      
      accountBalance:  "",
      bill: "",
      // billYuan: "00",
      // billFen: "00"
    };
  },
  mounted() {

    this.$get(Api.ACCOUNT_OVERVIEW)
      .then(res => {
         this.accountBalance = this.formatCurrency(res.data.totalBalance)
         this.bill = this.formatCurrency(res.data.totalBillOfLastMonth)
       
      })
      .catch(e => {
        console.warn("-----获取控制台首页代办事项数据错误-----");
      });
  },
  methods:{
    ...BaseUtil
  }
};
</script>