<template>
 <div class="index">
      <ci-browser-check></ci-browser-check>
      <div class="seach">
         <ci-serch-service @getQueryValue="getQueryVal" :showHotText="showHotText"></ci-serch-service>
      </div>

     <ci-banner0 class="banner0"></ci-banner0>
        <div class="menu-group">
       <ci-main-menu class="main-menu"></ci-main-menu>
     </div>

     <ci-banner1></ci-banner1>
     <ci-banner2></ci-banner2>
     <ci-banner3></ci-banner3>
     <ci-banner4></ci-banner4>
     <ci-banner5></ci-banner5>


 </div>
</template>
<script>
    import BrowserCheck from "com/public/browser-check.vue";
    import SerchService from "com/public/searchService.vue";
    import MainMenu from "com/public/menu/main-menu.vue";
    import Baner0 from "com/main/banner0.vue";
    import Baner1 from "com/main/banner1.vue";
    import Baner2 from "com/main/banner2.vue";
    import Baner3 from "com/main/banner3.vue";
    import Baner4 from "com/main/banner4.vue";
    import Baner5 from "com/main/banner5.vue";


 export default {
   data () {
     return {
      showHotText:true
     }
   },
   components: {
       'ci-browser-check': BrowserCheck,
       'ci-banner0': Baner0,
       'ci-banner1': Baner1,
       'ci-banner2': Baner2,
       'ci-banner3': Baner3,
       'ci-banner4': Baner4,
       'ci-banner5': Baner5,
       'ci-serch-service': SerchService,
       "ci-main-menu": MainMenu

   },
   mounted(){
     this.$store.commit("setHeadMiddleData",{data:0})
   },
   methods:{
     getQueryVal(data){
       console.log("data",data)
      //this.$router.push("/product/center")
       this.$router.push({path: './product/center', query: {selected: data}});
     }
   }
 }
</script>

<style scoped lang="scss">
    .index {
        position: relative;
        .seach{
          height: 100px;
          margin-top: 28px;
        }
        .menu {
            position: absolute;
            z-index: 9999;
            top: 160px;
        }
        .menu-group{
          width: 1200px;
          margin: auto;
           position: relative;
          .main-menu{
            position: absolute;
            top: -546px;
          }
        }

    }

</style>
