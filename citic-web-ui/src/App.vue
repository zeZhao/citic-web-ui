<template>
  <div id="app">
   <v-fix-bar></v-fix-bar>
   <router-view />


  </div>
</template>

<script>
import fixBar from "com/public/fix-bar/right-fix-bar";
import BaseUtil from "utils/base.js";
export default {
  name: "App",
  components: {
    "v-fix-bar": fixBar
  },
  data(){
    return {
      
    }
  },
  created() {
      //配置iview全局消息插件
      this.$Message.config({
          top: 150,
          duration: 3
      });
    this.$CONFIG.init();
      BaseUtil.bfd();
      
  },
 
};
</script>

<style>
</style>
