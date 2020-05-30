<style  lang="scss">
.cash-coupon-query-list {
  min-height: 800px;
  background: #ffffff;
  /*margin-top: 20px;*/
  /*padding: 20px;*/
  .title{
    margin-left: 20px;
  }
  .query-box {
    padding-top: 40px;
    margin-left: 20px;
    .type {
      display: inline-block;
      margin-left: 20px;
    }
  }
  .search-btn {
    display: block;
    width: 100px;
    margin-left: 60px;
    margin-top: 40px;
  }
  .table {
    margin-top: 30px;

  }
  .paging{
    width: 200px;
    display: block;
    margin: auto;
    margin-top: 20px;
    input{
      width: 40px;
    }

  }
}
</style>
<template>
 <div class="cash-coupon-query-list" style="padding: 20px;">
   <h1 class="title">代金券</h1>
     <div class="query-box">
         发放时间：<Date-picker type="date" placeholder="选择日期" style="width: 200px"  format="yyyy-MM-dd" v-model="startTime"></Date-picker>
         至：<Date-picker type="date" placeholder="选择日期" style="width: 200px" v-model="endTime"></Date-picker>
        <span class="type">代金券状态:</span>
          <i-select v-model="vStatus" style="width:200px" >
            <i-option v-for="(item,inx) in vStatusListData" :value="item.value" :key="inx">{{ item.name }}</i-option>
        </i-select>
        <Button type="primary" icon="ios-search" class="search-btn" @click="getData(1)">查询</Button>
     </div>
     <i-table :columns="columns" :data="listData" class="table" :loading="loading"></i-table>
     <Page :current.sync="pageNo" :total="total" :page-size="pageSize" simple class="paging"></Page>
     <!-- <Page :total="100" class="paging"></Page> -->

<!-- 全部 可用 不可用 已过期 -->
 </div>
</template>

<script>
import checkInputUtil from "utils/checkInput.js"
export default {
  data() {
    return {
      loading:false,
      startTime: "",
      endTime: "",
      vStatus: 0,
      pageSize: 10,
      pageNo: 1,
      total: 1,
      vStatusListData: [
        { name: "全部", value: 0 },
        { name: "可用", value: 1 },
        { name: "不可用", value: 2 },
        { name: "已过期", value: 3 }
      ],
      columns: [
        { title: "序号", key: "id" ,width:70,align: 'center'},
        {
          title: "代金券编码",
          key: "featureCode"
        },
        { title: "面值（元）", key: "faceValue" },
        { title: "余额（元）", key: "balance" },
        { title: "代金券类型", key: "subjectName" },
        { title: "状态", key: "statusName" },
        { title: "生效时间", key: "effectDate" },
        { title: "失效时间", key: "expireDate" },
        { title: "发放时间", key: "createTime" }
      ],
      datas: [

      ]
    };
  },
  components: {

  },
  computed:{
    listData: function(){
      return this.dataFromt(this.datas)
    }
  },
  mounted() {
    this.getData();
    this.$Message.config({
      top: 100,

  });
    // this.dataFromt(this.datas)
  },
  watch:{
    pageNo(newval,oldval){
      this.getData();

    }
  },
  methods: {
    getData(type) {

      let timeResult = checkInputUtil.startAndStopTime(this.startTime,this.endTime);
      if(timeResult != true){
        this.$Message.error(timeResult)
        return false;
      }

      let startTime = "";
      let endTime = "";
      if (this.startTime) {
        startTime = this.startTime.Format("yyyy-MM-dd");
      }
      if (this.endTime) {
        endTime = this.endTime.Format("yyyy-MM-dd");
      }
      if(type == 1){
      this.pageNo = 1;
    }
   //TODO
    let vStatus = "";
    if(this.vStatus != 0){
      vStatus =  this.vStatus
    }
      let queryObj = {
        startTime: startTime,
        endTime: endTime,
        vStatus: vStatus,
        pageSize: this.pageSize,
        pageNo: this.pageNo
      };
      this.loading = true;

      this.$get(this.$API_ENUM.TENANT_DASHBOARD_VOUCHER, queryObj).then(res => {
        this.loading = false;
        //console.log(res)
        if(res.data){
          this.total = res.data.count
         this.datas =   res.data.result
        }
      }).catch(e=>{
        this.loading = false;
      });
    },
    dataFromt(data){
      if(!data) return;
      for (let index = 0; index < data.length; index++) {
        const el = data[index];
        el.faceValue = (el.faceValue/1000).toFixed(2);
        el.balance = (el.balance/1000).toFixed(2);
        el.effectDate = new Date(el.effectDate).Format("yyyy-MM-dd")
        el.expireDate = new Date(el.expireDate).Format("yyyy-MM-dd")
        el.createTime = new Date(el.createTime).Format("yyyy-MM-dd")
        el.id = (index+1) + (10 * (this.pageNo-1))

      }
      return data;
    }
  }
};
</script>

