<style scoped lang="scss">
.head-main-menu {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  width: 100%;
   //height: 100%;
  .link-group {
    width: 25%;
    display: inline-block;
   // height: 100%;
    // margin-left: 80px;
    cursor: pointer;
    .link{
      
       display: inline-block;
       color: #ffffff;
       line-height: 71px;
       border-bottom: 4px solid  rgba(205, 19, 27,0);
        &:hover{
          border-bottom: 4px solid  rgba(205, 19, 27,1);
        }

    }
    .lable-activity{
      border-bottom: 4px solid  rgb(205, 19, 27);
    }
   
  }
  
}
</style>
<template>
 <div class="head-main-menu">
   <div v-for="(iteam,inx) in menuData" :key="inx" class="link-group">
     <a :href="iteam.url" v-if="checkUrl(iteam.url)"  :class="showLine==inx?'lable-activity link':'link'">{{iteam.lable}}</a>
     <router-link :to="iteam.url" v-else  :class="showLine==inx?'lable-activity link':'link'">{{iteam.lable}}</router-link>
   </div>
   
    
    
 </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [],
      showLine: -1
    };
  },
  mounted() {
    this.menuData = this.$store.getters.headMenuData;
    this.setTitleLine();
    
  },

  watch: {
    "$store.state.uiData.HEAD_MIDDLE_TYPE": function() {
      this.menuData = this.$store.getters.headMenuData;
    }
  },
  methods: {
    checkUrl(val){
     return val.indexOf("://")!=-1
    },
    setTitleLine(){
      if(location.pathname == "/citic-web-ui/product/center"){
        this.showLine = 0
      }else if(location.pathname == "/citic-web-ui/product/cert/details"){
        this.showLine = 3
      }
      //product/center  产品中心
    }
  }
};
</script>

