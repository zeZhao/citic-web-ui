<style scoped lang="scss">
.error-404 {
  .error {
    width: 100%;
    height: auto;
    background-color: #9abef9;
    position: relative;
    margin-bottom: -10px;
    z-index: 9999;
    img {
      margin-top: 250px;
      width: 100%;
    }
    .text {
      position: absolute;
      left: 50%;
      bottom: 10%;
      margin-left: -290px;
      text-align: center;
      font-size: 16px;
      color: rgb(51, 51, 51);
      .p1 {
        font-size: 28px;
      }
      .p2{
         margin-top: 25px; 
         
      }
      .p3{
          line-height: 55px;
          .router-link{
              color: #DA5050;
          }
      }
    }
  }
  .foot{
      margin-top:-10px;
      position: relative;
      z-index: 10000;
  }
}
</style>
<template>
 <div class="error-404">
     <ci-main-head></ci-main-head>
     <div class="error">
         <img src="~static/images/error/error.png" alt="" >
         <div class="text">
            <p class="p1">oh_no___这个页面被外星人收走了o_╥﹏╥_o</p>
            <p class="p2">攻城狮_正在玩命修复中</p>
            <p class="p3">表着急~~如果实在等不及，您可以返回
                <router-link to="/" class="router-link">中信云首页</router-link>
            查找您感兴趣的内容</p>
          </div>
     </div>
    <ci-foot class="foot"></ci-foot>
 </div>
</template>

<script>
import MainHead from "com/public/headMain.vue";
export default {
  data() {
    return {};
  },
  components: {
    "ci-main-head": MainHead
  }
};
</script>

