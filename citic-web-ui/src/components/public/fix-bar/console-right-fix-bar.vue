<style scoped lang="scss">
    .scroll-2-top{
        position: absolute;
        bottom: -20px;
        height: 24px;
        width: 20px;
        background-color: #a6a7a8;
        cursor: pointer;
        padding: 2px 0 4px 0;

        &:hover{
            background-color: red;
        }

        .scroll-btn{
            background: url("../../../../static/svg/scroll-2-top.svg") center no-repeat;
            background-size: contain;
            height: 20px;
            display: block;
        }
    }
</style>

<template>
 <div class="console-right-fix-bar">
     <a href="javascript:void(0);">
         <div class="item" @click="openkf">
             <img :src="img2_1">
            <div class="text">在线客服</div>
         </div>
     </a>

     <a href="https://help.c.citic/hc/">
         <div class="item">
             <img :src="img2_2">
            <div class="text">帮助中心</div>
         </div>
     </a>

     <div class="scroll-2-top" v-show="showScroll2Top" @click="scroll2Top">
         <span class="scroll-btn"></span>
     </div>
 </div>
</template>

<script>
    import fixbarImg1 from "static/images/console/fixbar-01.png"
    import fixbarImg2 from "static/images/console/fixbar-02.png"
    import fixbarImg3 from "static/images/console/fixbar-03.png"
    import fixbarImg4 from "static/images/console/fixbar-04.png"

    function listenScroll() {
        if(!this.showScroll2Top && this.scrollDom.scrollTop > 0){
            this.showScroll2Top = true;
        }

          if(this.showScroll2Top && this.scrollDom.scrollTop === 0){
            this.showScroll2Top = false;
        }
    }

export default {
        props:{
            consoleContentId: {
                type: String
            }
        },


  data() {
    return {
        img1_1: fixbarImg1,
        img1_2: fixbarImg2,
        img2_1: fixbarImg3,
        img2_2: fixbarImg4,
        img1: true,
        img2: true,
        isShow: true,
        scrollDom: null,
        showScroll2Top: false,
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

      this.addScrollListen();
  },

    // 组件删除前解除滚动监听
    beforeDestroy(){
        this.removeScrollListen();
    },


 methods:{

     /**
      * 解除滚动监听
      */
     addScrollListen(){
         let scrollDom;
         if(!this.consoleContentId){
             return;
         }

         scrollDom = document.getElementById(this.consoleContentId);

         if(!scrollDom){
             return;
         }

         this.scrollDom = scrollDom;
         scrollDom.addEventListener("scroll", listenScroll.bind(this));
    },

     /**
      * 解除滚动监听
      */
     removeScrollListen(){
         const scrollDom = this.scrollDom;
         if(!scrollDom){
             return;
         }

         scrollDom.removeEventListener("scroll", listenScroll.bind(this));
     },

     /**
      * dom滚动到顶部
      */
     scroll2Top(){
         const scrollDom = this.scrollDom;
         if(!scrollDom){
             return;
         }

         scrollDom.scrollTo(0, 0);
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


};
</script>

<style scoped>
.console-right-fix-bar{
    background-color: #a6a7a8;
    width: 20px;
    position: fixed;
    right: 0;
    bottom: 150px;
    z-index: 9999;

}

.console-right-fix-bar .item{
    font-size: 14px;
    text-align: center;
    line-height: 14px;
    color: #ffffff;
    cursor: pointer;
}
.console-right-fix-bar img{
    width: 100%;
}

.console-right-fix-bar .text{
    width: 14px;
    margin: auto;
    padding-bottom: 10px;
}
.console-right-fix-bar .item:hover{
    color: #FFFFFF;
    background-color: red;
}


</style>
