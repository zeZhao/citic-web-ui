<style scoped lang="scss">
.outer-foot{
    .right-fix-bar{
        display: none;
    }
}


 
</style>
<template>
 <div class="outer-foot">
     <ci-foot></ci-foot>
 </div>
</template>

<script>
import foot from "com/public/foot.vue"
 export default {
   data () {
     return {

     }
   },
   components: {
       "ci-foot": foot
   }
 }
</script>

