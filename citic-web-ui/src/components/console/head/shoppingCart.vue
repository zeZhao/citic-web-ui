<style  lang="scss">
.console-message{
    position: relative;
    margin-right: 20px;
    img{
        vertical-align: middle;
    }
    .sign{
        position:absolute;
       
        width: 20px;
        height: 20px;
        // border-radius: 50%;
        background-color: rgb(198, 0, 0);
        top: 24px;
        right: -6px;
    }
    .badge{
       font-size: 10px;
        background-color: rgb(198, 0, 0);
        border-color: rgb(198, 0, 0);
        border:none;
        box-shadow: none;
    }
}
 
</style>
<template>
 <div class="console-message" @click="demo">
     <Badge :count="shoppingCartNumber" class-name="badge">
        <img src="~static/images/console/shopping_card.png">
    </Badge>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         shoppingCartNumber: 0,
     }
   },
   components: {

   },
   methods: {
       demo(){
           //TODO
         
           this.$store.commit("setShoppingCartNumber",{shoppingCartNumber: 1})
       }

   },
   watch:{
       "$store.state.userInfo.SHOPPING_CART_NUMBER": function(val){
           if(val > 0){
               this.shoppingCartNumber = val;
           }
       }
   }
 }
</script>