<template>
 <div>
   <!-- <ci-fix-bar></ci-fix-bar> -->
     <ci-main-head></ci-main-head>
     <router-view></router-view>
     <ci-foot></ci-foot>
 </div>
</template>
<script>
import MainHead from "com/public/headMain.vue";
import FixBar from "com/public/fix-bar/right-fix-bar.vue";


 export default {
   data () {
     return {

     }
   },
   components: {
       'ci-main-head':MainHead,
       'ci-fix-bar': FixBar
   }
 }
</script>

<style scoped>

 
</style>
