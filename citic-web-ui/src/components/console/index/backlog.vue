
<style scoped lang="scss">
    .back-log{
         background-color: #ffffff;
        color: rgb(102, 102, 102);
        font-size: 12px;
         height: 295px;
        width: 98%;
        margin: auto;

        .item {
            display: block;
            width: 95%;
            height: 41px;
            line-height: 40px;
            background-color: rgb(245, 245, 246);
            margin-bottom: 10px;
            padding-left: 20px;
            padding-right: 35px;
             font-size: 14px;
             color: rgba(0, 0, 0, 0.702);
             border: 1px solid #ffffff;
             cursor: pointer;
             .num{
                 float: right;
             }
             &:hover{
                 border-color: rgb(101, 181, 255);
                 color: rgb(101, 181, 255);
                 a{
                     color: rgb(101, 181, 255);
                 }
             }
             /*&:last-child{*/
             /*    cursor:no-drop;*/
             /*}*/
        }


         &>.title{
           font-size: 18px;
            color: rgb(51, 51, 51);
            font-weight: bold;
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
        .content{
              margin-top: 24px;
             padding: 0 20px 20px 20px;
        }
        .group{
            display: flex;
            height: 40px;
            line-height: 40px;
            background-color: rgb(247, 247, 247);
            padding: 0 10px;
            margin-top: 10px;
            color: rgb(191, 191, 191);
            .lable{
                display: inline-block;
                width: 90%;
            }
            .number{
                display: inline-block;
                width: 10%;
            }
        }

        .have-data{
             color:#000000;
             background-color: #ffffff;
             &:hover{
                 color: rgb(101, 181, 255);
                 box-shadow: 0px 6px 32px 0px rgba(101, 181, 255, 0.32);
             }
        }
    }
</style>
<template>
 <div class="back-log">
     <h3 class="title">
         <span class="line"></span>
             待办事项
    </h3>
     <p class="line"></p>
        <Row class="content">
            <Col span="6" class="img-group">
                <img src="~static/images/console/index/dingdanchulizhong.png" >

            </Col>
            <Col span="18" >
                <router-link class="item" :to='url'>
                    <span>待审批订单:</span>
                    <span  class="num" >{{listData.length?listData[0].num : ''}}</span>
                </router-link>
                <a class="item" href="javascript:void(0);">
                    <span>待评价订单:</span>
                    <span class="num" >{{listData.length?listData[3].num: ''}}</span>
                </a>
                <router-link class="item" :to='instanceWaitApprovalUrl'>
                    <span>待确认交付实例:</span>
                    <span  class="num" >{{instanceWait}}</span>
                </router-link>
            </Col>
        </Row>
     </div>
 </div>
</template>

<script>
import Api from "utils/apiEnum.js"
 export default {
   data () {
     return {
         listData:[
         ],
         value:"",
         url: "/citic-web-ui/console/order?orderStatus=waitApproval",
         instanceWaitApprovalUrl: "/citic-web-ui/console/instance-manage/approve?status=2",

         // 线下待审批实例
         instanceWait: 0,
     }
   },

     created(){
         this.initData();
     },

    mounted(){
        this.$get( Api.TODO_LIST).then(res=>{
             //console.log(res)
       this.listData = res.data;
        }).catch(e=>{
            console.warn("-----获取控制台首页代办事项数据错误-----");
        })
    },
   components: {

   },
   methods:{
       /**
        * 加载线下待审批实例数量
        */
      async initData(){
           const res = await this.$get(this.$API_ENUM.GENERAL_INSTANCE_COUNT_WAIT_APPROVE);
           if(resOk(res)){
               this.instanceWait = res.data;
           }
       }
   }
 }
</script>


