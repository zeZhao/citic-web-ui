<template>
 <div class="head">
   <router-link to="">
      <img src="~images/logo.png" class="head-group">
   </router-link>
   <div class="head-group head-middle">
     <slot>
      <!-- 头部中间的插槽 -->
    </slot>
   </div>
    
    <div class="head-right">

      <router-link to="">
        <span class="head-right-lable">去首页</span>
      </router-link>

      <a href="javascript:void(0);">
       <v-head-login class="head-right-lable"></v-head-login>
      </a>
      
      <router-link to="">
        <span class="head-right-lable">帮助中心</span>
      </router-link>

      <router-link to="">
        <span class="head-right-lable">退出</span>
      </router-link>

      <div class="clear"></div>
    </div>
    <div class="clear"></div>
 </div>
</template>

<script>

import HeadLogin from "com/public/head/head-login.vue"
 export default {
   data () {
     return {
       
     }
   },
   components: {
       "v-head-login": HeadLogin
   }
 }
</script>

<style scoped>
  .clear{
    clear: both;
  }
  .head{
    width: 1200px;
    height: 76px;
    margin: auto;
    background-color: #FFFFFF;
    padding-top: 20px;
  }
  .head-group{
    float: left;
   
  }
  .head-right-lable{
    float: left;
    margin-left: 30px;
    color: #606266;
    font-size: 18px;
    font-weight: bold;
  }
 
  .head-right{
    float: right;
   
  }
  .head-middle{
    margin-left: 60px;
  }
 
</style>
