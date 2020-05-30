<template>
 <div class="right-fix-bar" v-show="isShow" >
     <!--<div class="toggle-btn" :class="toggle?'toggle-open':'toggle-close'" @click="istoggle">
         &lt;!&ndash;<img src="" alt="">&ndash;&gt;
     </div>-->
     <a href="javascript:void(0);" v-if="toggle">
         <div class="item" @mouseenter="mouseenter(0)" @mouseleave="mouseleave(0)" @click="openkf">
            <img :src="img1_1" v-if="img1">
            <img :src="img1_2" v-else>
            <div class="text">在线客服</div>
         </div>
     </a>

     <a href="https://help.c.citic/hc/" v-if="toggle">
         <div class="item" @mouseenter="mouseenter(1)" @mouseleave="mouseleave(1)">
            <img :src="img2_1" v-if="img2">
            <img :src="img2_2" v-else>
            <div class="text">帮助中心</div>
         </div>
     </a>
 </div>
</template>

<script>
import img1_1 from "images/fixbar/fixbar-mg04.png"
import img1_2 from "images/fixbar/fixbar-mg04-1.png"
import img2_1 from "images/fixbar/fixbar-mg01.png"
import img2_2 from "images/fixbar/fixbar-mg01-2.png"
export default {
  data() {
    return {
        img1_1: img1_1,
        img1_2: img1_2,
        img2_1: img2_1,
        img2_2: img2_2,
        img1: true,
        img2: true,
        isShow: true,
        toggle: true,
        toggleInfo: '展开'
    };
  },
  mounted(){
      let href = location.href;
      if(href.indexOf("outer/foot")>-1){

          this.isShow = false;
      }

      window.KF5SupportBoxAPI.ready(function()
        {
                // 隐藏默认按钮
                window.KF5SupportBoxAPI.hideButton(function(){
                        window.KF5SupportBoxAPI.open(function(){
                                console.log(222)
                        });
                });
        });



  },
 methods:{
      /*
       * 展开收起客服和帮助中心
       */
     istoggle(){
         this.toggle = !this.toggle;
     },
     mouseenter(model){
         if(model == 0){
             this.img1 = false
         }else if(model == 1){
             this.img2 = false
         }
     },
     mouseleave(model){
        if(model == 0){
             this.img1 = true
         }else if(model == 1){
             this.img2 = true
         }
     },
     openkf(){
        //  window.open(location.origin+"/citic-web-ui/customerService")
        // this.$router.push("/citic-web-ui/customerService")
        // window.KF5SupportBoxAPI.ready(function()
        // {

        //         window.KF5SupportBoxAPI.open(function(){

        //         });
        // });
         window.open("http://citic.kf5.com/kchat?supportbox=1&active_in_iframe=0&","newwindow", "height=600, width=500, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
     }
 },
    watch:{
      "$route":function (newVal) {
          let href = location.href;
          if(href.indexOf("console")>-1 || href.indexOf("outer/foot")>-1 || href.indexOf("certification")>-1){
              this.isShow = false;
          }else{
              this.isShow = true;
          }

      }
    }


};
</script>

<style scoped>
.right-fix-bar{
    width: 50px;
    height: 160px;
    position: fixed;
    right: 0;
    top: 100px;
    z-index: 9999;

}
.right-fix-bar .toggle-btn{
    height: 50px;
    width:50px;
    cursor: pointer;
}
.right-fix-bar .toggle-open{
    background: url("~static/images/console/toggle-close.png") center no-repeat;
}
.right-fix-bar .toggle-close{
    background: url("~static/images/console/toggle-open.png") center no-repeat;
}
.right-fix-bar .item{
    background-color: #FFFFFF;
    margin-bottom: 10px;
    color: #666;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
}
.right-fix-bar img{
    width: 100%;
}

.right-fix-bar .text{
    width: 14px;
    margin: auto;
    padding-bottom: 10px;
}
.right-fix-bar .item:hover{
    color: #FFFFFF;
    background-color: red;
}


</style>
