<style lang="scss">
.head-console {
  height: 80px;
  line-height: 80px;
  width: 100%;
  background: #424041;
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*z-index: 9999;*/
  color: #ffffff;
  .left {
    padding-left: 40px;
    width: 170px;
    border-left: 1px solid #000000;
    float: left;
    .icon {
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .head-console-product-toggle{
      height: 80px;
    width: 170px;
    position: relative;
    float: left;
  .head-console-product-toggle-title{
      font-size: 14px;
      color: #ffffff;
  }
    .head-console-product-toggle-menu{
      color: #000000;
      background:#f7f7f7;
      margin: 0;
      width: 1022px;
      height: 580px;
      overflow-x: scroll;
      overflow-y: hidden;
      box-shadow: 0 1px 10px rgba(0,0,0,.2);
      position: absolute;
      z-index: 9999;
      top: 80px;

      .head-console-product-toggle-con{
        height: 546px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .head-console-product-toggle-firm{
        width: 240px;
        max-height: 580px;
        padding:8px 20px;
        float: left;
        background: #ffffff;
        list-style:none;
        margin:10px 0 10px 10px;
        overflow: auto;
        .product-toggle-firm-title{
          border-bottom: 1px solid #ecebec;
          margin-bottom: 10px;
          height:56px;
        }
        .head-console-product-toggle-item{
            line-height: 26px;
            height:26px;
            font-size: 12px;
          a.product-toggle-item-title{
            color: #000000;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            cursor: pointer;
              display: block;
          }
          a.product-toggle-item-title:hover{
              color: #ea4123;
              background: url("~static/images/console/product-title-hover.png") center right no-repeat;
          }
        }
      }
    }
  }
  .middle{
      height: 80px;
    float: right;
    vertical-align: middle;
    .icon{
      display: inline-block;
    }
    .text-btn-grout{
        height: 80px;
       display: inline-block;
       font-size: 16px;
       .text-btn{
           font-size: 18px;
           color: #ffffff;
           display: inline-block;
           padding: 0 15px;

           &:hover{
                color: #ea4123;
                background-color: #363334;

                img{
                    animation: halo 1s;

                    @keyframes halo {
                        from {
                            transform: rotateX(0deg);
                        }
                        to {
                            transform: rotateX(360deg);
                        }
                    }
                }
            }
       }
    }
  }
  .right {
    text-align: right;
    padding-right: 40px;
    padding-left:30px;
    font-size: 16px;
     float: right;
     border-left: 1px solid #000;
      height: 80px;
      width: 300px;

      .focus {
          cursor: pointer;
          display: inline-block;
          margin-left: 10px;
          &:hover {
              color: #cd131b;
          }
      }


    .line{
      display: inline-block;
    }
    .user-icon {
      display: inline-block;
      width: 27px;
      height: 27px;
      background: url("~static/images/console/profile-user.png");
       vertical-align: middle;
    }
    .true-name{
      display: inline-block;
      vertical-align: middle;
      color: rgba(255, 255, 255, 0.302);
      margin-left: 5px;
    }
    .arrow{
       vertical-align: middle;
        margin-left: 10px;
    }
  }
  .clear{
    clear: both;
  }
}
</style>
<template>
 <div class="head-console">
   <Row class="head-group">
      <div class="left">
          <img src="~static/images/public/logo-white.png" class="icon" @click="goIndex">
      </div>
        <div class="head-console-product-toggle">
            <a class="head-console-product-toggle-title" href="javascript:void(0)" @click="toggleOpen()" v-clickoutside="handleClose" v-if="titleDisplay">
                产品与服务
                <Icon type="arrow-down-b"></Icon>
            </a>
            <div class="head-console-product-toggle-menu" v-show="visible">
                <div class="head-console-product-toggle-con">
                    <li class="head-console-product-toggle-firm" v-for="(item, index) in ListData" :key="index">
                        <p class="product-toggle-firm-title"><img :src="item.imageUrl" alt=""></p>
                        <div class="head-console-product-toggle-item" v-for="(childitem, ind) in item.list" v-if="childitem.display" :key="ind">
                            <a class="product-toggle-item-title" href="javascript:void(0);" @click="toframe(childitem.url, childitem.param, childitem.jumpType, childitem.serviceId)">{{childitem.lable}}</a>
                        </div>
                    </li>
                </div>
            </div>
        </div>

      <div class="right">
          <i class="user-icon"></i>
          <span class="true-name" :title="trueName">您好，{{trueNameFromt}}</span>
          <span class="true-name focus" @click="loginOut">退出</span>
          <!-- <Icon type="arrow-down-b" class="arrow"></Icon> -->
      </div>
       <div class="middle">
         <div class="text-btn-grout">
           <router-link to="/citic-web-ui/" class="text-btn" @click="goIndex">首页</router-link>
           <a :href="oldUrl" class="text-btn" title="旧控制台">
               <img :src="backImg" alt=""><span>回旧控制台</span></a>
           <!-- <span>首页</span> -->
           <!-- <span>论坛</span> -->
         </div>

           <!-- <ci-message class="icon"></ci-message>
           <ci-shooping-cart class="icon"></ci-shooping-cart> -->
      </div>
      <div class="clear"></div>

   </Row>
 </div>
</template>

<script>
import Message from "com/console/head/message.vue"
import ShoopingCart from "com/console/head/shoppingCart.vue"
import BaseUtil from "utils/base.js"
import List from "static/json/console/list"
import store from "../../vuex/index.js"
import sort from "utils/sortUnicode.js"
import toBackConsoleImg from "static/images/console/backImg.png"
import {IdentityActionCheck} from "../../annotation/identityCheckAnnotation";
import { citicLoginOut } from 'utils/cookie.js'

const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
        function documentHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) {
                return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e);
            }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};

export default {
  data() {
    return {
      toUrl: '',
      titleDisplay: true,
      visible: false,
      trueName: "",
      ListData: List.data,
      oldUrl:location.origin+"/views/console/console.jsp",
      backImg: toBackConsoleImg,
    };
  },
  components: {
    "ci-message": Message,
    "ci-shooping-cart": ShoopingCart
  },
   watch:{
       '$store.state.userInfo.USER_INFO':function(){

           if(this.$store.state.userInfo.USER_INFO){
               this.trueName = this.$store.state.userInfo.USER_INFO.fullname
           }
       }
   },
  mounted() {
      console.log("---", this.$store.state.userInfo.USER_INFO)
    if (this.$store.state.userInfo.USER_INFO) {
      this.trueName = this.$store.state.userInfo.USER_INFO.fullname;
    }
    this.serviceDisplay()
//      this.sort()
  },
  directives: {clickoutside},
  methods:{
     ...BaseUtil,
     ...sort,
      //登出
      loginOut() {
          citicLoginOut()
      },
      /**
       * 产品与服务中按字母排序
       */
      sort(){
          for(let i=0; i<this.ListData.length; i++){
              sort.compareArray(this.ListData[i].list, 'lable', true)
          }
      },
      /**
       * 控制服务是否显示
       */
      isDisplay(lable, isdisplay){
          for(let i = 0; i < this.ListData.length; i++){
              let list= this.ListData[i].list;
              for(let index = 0; index < list.length; index++){
                  if(list[index].lable== lable){
                      list[index].display = isdisplay
                  }
              }
          }
      },
      /**
       * 是否显示产品与服务
       */
      serviceDisplay(){
            // 20171129032149408-8688-DD4374B6E-----生产环境：中信科技发展有限公司
            // 20171031104953469-EFC6-9F2723BC7-----测试环境：中信云测试租户3
            // 20171130020149804-D36D-43A268210-----未知租户
            // 20171031104957470-708F-6C7C31CBE-----测试环境：中信云测试租户2
            // 20171129032148972-FF32-2401332E4-----中信集团


          let mainIdArray = ['20171129032149408-8688-DD4374B6E', '20171031104953469-EFC6-9F2723BC7', ' 20171130020149804-D36D-43A268210','20171129032148972-FF32-2401332E4'];
          let mainId = store.state.userInfo.TENANT_INFO.mainId
          let role = store.state.userInfo.USER_INFO.role
//          console.log('role',role)
          var isIn = false;
          /**
           * RAM控制台权限控制
           */
          if((role & 3) == 3){
              this.isDisplay('RAM控制台', true)
          }

          for (let index = 0; index < mainIdArray.length; index++) {
              var element = mainIdArray[index];
              if (mainId == element) {
                  isIn = true;
              }
          }
          if(isIn){
              console.log("是中信科技")
              if ((role & 64) == 64 || (role & 2) == 2) {
                  /**
                   * API集市权限控制
                   */
                  if((role & 64) == 64 && (role & 2) != 2){
                      console.log("是运维不是租户管理员显示")
                      this.isDisplay('API集市', false)
                  }
                  console.log("是运维或者是租户管理员显示")
              }else{
                  console.log("不是运维或者是租户管理员不显示")
                  this.titleDisplay = false
              }
          }
      },

      toggleOpen () {
//          iView.LoadingBar.start();
          this.visible = !this.visible;
      },
      handleClose(e) {
          this.visible = false;
      },

      /**
       * serviceId 不能删除，该参数在注解方法中使用，作为动态枚举类型进行拼接
       * @param url
       * @param param
       * @param jumpType
       * @param serviceId
       */
      @IdentityActionCheck({menuEnum: "VERIFY", actionEnumArg: 3})
      toframe(url, param, jumpType, serviceId){
          console.log(url, ",", param, ",", jumpType)
         if(jumpType == 'iframe'){  //在当前页面的iframe中打开页面
             this.$get(url, param).then(res => {
                 let toUrl = res.data
                 if (toUrl) {
                     this.$router.push({
                         path: '/citic-web-ui/console/frame',
                         query: {
                             baseUrl: url,
                             param: param,
                             jumpType: jumpType
                         }
                     });
                 } else {
                     this.$Message.error('您还未购买该服务')
                     this.$router.push({
                         path: '/citic-web-ui/console/index',
                     });
                 }
             }).catch(e => {
                 console.warn("错误");
             })


         }else if(jumpType == 'blank'){ //在新窗口打开页面，但需要通过接口获取页面地址
             let newWindow = window.open();
             this.$get(url, false).then(res => {
                 let toUrl = res.data
                 if(toUrl){
                     newWindow.location.href = toUrl;
                 }else {
                     this.$Message.error('您还未购买该服务')
                     this.$router.push({
                         path: '/citic-web-ui/console/index',
                     });
                 }
             }).catch(e=>{
                 console.warn("错误");
             })
         } else if(jumpType == 'blank-link'){ //在新窗口直接打开页面，不需要通过接口获取页面地址
            window.open().location.href = url;
         }
          this.visible= false
      },
      checkUrl(val){
          return val.indexOf("://")!=-1
      },
  },
  computed:{
       trueNameFromt:function(){
           console.log(this.trueName)
        //    debugger;
           if(!this.trueName){
               return ""
           }else if(this.trueName.length > 5){
               return this.trueName.substring(0,5);
           }else{
               return this.trueName
           }
       }
   },
};
</script>

