<style scoped lang="scss">
    .head-login-main{
         height: 80px;
         font-size: 14px;
         display: inline-block;
         vertical-align: middle;
        width: 100%;
        .icon{
            display: inline-block;
            line-height: 80px;
            vertical-align: middle;
            margin-top: -10px;
            overflow: hidden;
            height: 25px;
            img{
                transform: translateY(-8px);
                transition: transform .5s;
                &:hover{
                    transform: translateY(-25px);
                }
            }
        }
        .text{
            display: inline-block;
            margin-left: 10px;
            color: #FFFFFF;
            cursor: pointer;
            .name{
                 color: #FFFFFF;
            }
        }
        .one {
            margin-left: 0;
        }
        .focus {
            &:hover {
                color: #cd131b;
            }
        }
    }

</style>
<template>
 <div class="head-login-main">
     <!-- <div class="icon">
         <img src="~static/images/public/head-icon.png">
     </div> -->
     <div class="text one" v-if="trueName">
        <router-link to="" class="name" :title="trueName">{{trueNameFromt}}，你好</router-link>
    </div>
     <a href="javascript:void(0)" class="text focus" v-if="!trueName" @click="doLogin">登录</a>
     <span class="text focus" @click="loginOut" v-if="trueName">退出</span>
    <!-- <router-link to=""  class="text" v-if="!trueName">注册</router-link> -->
     <!-- <router-link to="/console/index" class="text">控制台</router-link> -->
     <router-link to="/citic-web-ui/console/index" class="text focus" >控制台</router-link>
     <!-- <a href="javascript:void(0);" class="text focus" @click="goConsole">控制台</a> -->

 </div>
</template>

<script>
import BaseUtil from "utils/base.js"
import { citicLoginOut } from 'utils/cookie.js'
 export default {
   data () {
     return {
         trueName: "",
         userType: ""
     }
   },
     computed: {
         trueNameFromt: function () {
             if (this.trueName.length > 5) {
                 return this.trueName.substring(0, 5);
             } else {
                 return this.trueName
             }
         }
     },
  methods:{
      ...BaseUtil,
      doLogin(){
          BaseUtil.doLogin();
      },
      go(){
          location.href = location.origin+"/views/console/console.jsp"

      },
      loginOut() {
          citicLoginOut()
      },

  },
   watch:{
       '$store.state.userInfo.USER_INFO':function(){

           if(this.$store.state.userInfo.USER_INFO){
               this.trueName = this.$store.state.userInfo.USER_INFO.fullname
           }
       }
   },
   mounted(){
        if(this.$store.state.userInfo.USER_INFO){
               this.trueName = this.$store.state.userInfo.USER_INFO.fullname
           }
        if(this.$store.state.userInfo.TENANT_INFO){
            //console.log(this.$store.state.userInfo.TENANT_INFO)
        }
           //"tenantType": "BUSINESS"
           //BaseUtil.getTenantsDetai(false)
   }
 }
</script>
