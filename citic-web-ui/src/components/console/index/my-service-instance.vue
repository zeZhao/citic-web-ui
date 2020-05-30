<style scoped lang="scss">
.my-service-instance {
  background-color: #ffffff;
  color: rgb(102, 102, 102);
  font-size: 12px;
  width: 99%;
  margin: auto;
    & > .title{
        position: relative;
        // padding-left: 26px;
        padding: 20px 20px 0px 46px;
        .line{
            position: absolute;
            display: inline-block;
            background-color: rgb(234, 69, 73);
            height: 14px;
            width: 3px;
            left: 20px;
            top: 26px;
        }
    }
    & > .line{
            background-color: rgba(0, 0, 0, 0.102);
            width: 100%;
            height: 1px;
            margin-top: 25px;
    }
  &>.title{
    font-size: 18px;
    color: rgb(51, 51, 51);
    font-weight: bold;

  }
  .group{
    column-count:3;
    column-width: 180px;
    margin-top: 10px;
    min-height: 300px;
    .child{
      // border: 1px solid #000;
      break-inside: avoid;
      &:first-child{
        margin-top: 0;
      }
      .card{
         padding:20px;
        .title{
          color: rgb(51, 51, 51);
          font-size: 16px;
          font-weight: bold;
        }
        .lable-group{
           margin-top: 24px;
          cursor:pointer;
           .lable-box{
                margin-bottom: 10px;
               display: flex;
               color: rgb(51, 51, 51);
               height: 40px;
               line-height: 38px;
               background-color: rgb(245, 245, 246);
               padding: 0 20px;
               &:hover{
                 color: rgb(101, 181, 255);
                 border: 1px solid rgb(101, 181, 255);
               }
             .lable{
               display: inline-block;
               width: 80%;
               white-space:normal
             }
             .number{
                display: inline-block;
                width: 29%;
                text-align: right;
                vertical-align: text-top;
                height: 100%;
                font-weight: bold;
             }
           }
        }
      }
    }
  }
    .no_data{
        height: 300px;
        text-align: center;
        padding-top: 100px;
        // line-height: 330px;
    }

}
</style>

<template>
 <div class="my-service-instance">
     <h3 class="title" >
        <span class="line"></span>
        我的服务实例
    </h3>
     <p class="line"></p>
   <div class="group" v-if="listData.length > 0">
     <div class="child" v-for="(item,inx) in listData" :key="inx" >
        <div class="card" >
            <p class="title">{{item.serviceCategoryName}}</p>
            <div class="lable-group">
                 <p class="lable-box" v-for="(item,inx) in item.instancesSummaryByServiceVOList" :key="inx"
                    @click="toInstanceList(item)">
                    <span class="lable">{{item.serviceName}}</span>
                    <span class="number">{{item.instanceNum}}</span>
                </p>
              <!-- <div class="lable-box" v-for="(item,inx) in item.instancesSummaryByServiceVOList" :key="inx">
                <span class="lable">{{item.serviceName}}</span>
                <span class="number">{{item.instanceNum}}</span>
              </div> -->
            </div>

        </div>


     </div>
   </div>
    <div class="no_data" v-else>
       <img src="~static/images/console/index/no-data.png">
       <p style="font-size:14px;">暂无数据</p>

    </div>

 </div>
</template>

<script>
import baseUtil from "utils/base.js"
import Api from "utils/apiEnum.js"

export default {
  data() {
    return {
      modal1: true,
      modalDatas: [],
      modalTitle: "",
      listData: [

      ]
    };
  },
  mounted(){

   this.$get( Api.INSTANCES_SUMMARY).then(res=>{
      console.log(res)
      this.listData = res.data;
    }).catch(e=>{
      console.warn("-----获取控制台首页我的服务实例数据错误-----");
    })





  },
  components: {
  },
  methods: {
    openModal: function(iteam) {
      this.modalDatas = iteam.children;
      this.modalTitle = iteam.title;
      this.$refs.model.visible = true;
    },
    closeModal: function() {
      this.$refs.model.visible = false;
    },

      toInstanceList(item){
          //链接跳转清除全部页面查询记录 wpj
          this.$store.commit('resetAllSearch');
          this.$router.push(`/citic-web-ui/console/instance-manage/instance?serviceId=${item.serviceId}`);
      }
  },
  filters:{
    serviceNameFromt: (val) => {

    }
  }
};
</script>


