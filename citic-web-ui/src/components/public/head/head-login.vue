<template>
 <div>
     <span v-if="userTrueName">您好，{{userTrueName}}</span>
     <span v-else @click="goLogin">登陆</span>
 </div>
</template>

<script>
//头部右上角登陆与名字的组件
import baseUtil from "utils/base.js";
 export default {
   data () {
     return {
         userTrueName: ""
     }
   },
   mounted(){
      if(this.$store.state.userInfo.USER_INFO){
          this.userTrueName = this.$store.state.userInfo.USER_INFO.userTrueName
      }
   },
   methods:{
       goLogin(){
          // console.log(location.href)
           baseUtil.doLogin(location.href)
       }
   }
   
 }
</script>

<style scoped>

 
</style>
