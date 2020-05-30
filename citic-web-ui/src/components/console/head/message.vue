<style scoped lang="scss">
.console-message{
    position: relative;
    margin-right: 20px;
    img{
        vertical-align: middle;
    }
    .sign{
        position:absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgb(198, 0, 0);
        top: 24px;
        right: -6px;
    }
}
 
</style>
<template>
 <div class="console-message" @click="demo">
     <img src="~static/images/console/message.png">
     <i class="sign" v-if="hasMessager"></i>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         hasMessager: false,
     }
   },
   components: {

   },
   methods: {
       demo(){
           //TODO
           this.$store.commit("setUnconfirmedMessageNmuber",{unconfirmedMessageNumber: 1})
       }

   },
   watch:{
       "$store.state.userInfo.UNCONFIRMED_MESSAGE_NUMBER": function(val){
           if(val > 0){
               this.hasMessager = true;
           }
       }
   }
 }
</script>