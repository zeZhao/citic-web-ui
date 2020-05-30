<template>
 <div class="head-product-list" >
      <Dropdown>
        <a href="javascript:void(0)" class="head-product-list">
           <Icon type="arrow-down-b"></Icon>
            产品与服务
        </a>
        <Dropdown-menu slot="list">
            <ci-menu></ci-menu>
            <!-- <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item> -->
        </Dropdown-menu>
    </Dropdown>
 </div>
</template>

<script>
import Menu from "com/public/menu"
 export default {
   data () {
     return {
         productListData:[{name:"测试测试",url:"a"},{name:"测试测试",url:"b"},{name:"测试测试",url:"b"}]
     }
   },
   methods:{
       goProduct(val){
           //执行对应跳转
           console.log(val.url)
           console.log(this.$router)
       }
   },
   components:{
       "ci-menu": Menu
   }
 }
</script>

<style scoped>
.head-product-list{
    font-size: 22px;
    font-weight: bold;
    color: #606266;
}
.el-dropdown-link{
  font-size: 22px;
    font-weight: bold;
}
 
</style>
