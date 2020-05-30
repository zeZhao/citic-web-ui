<style scoped lang="scss">
.serch-service {
  position: relative;
  .serch-group {
    width: 1200px;
    margin: auto;
    position: relative;
    .such-input {
      display: block;
      width: 766px;
      margin: auto;
    }
    .icon-group {
      position: absolute;
      top: 9px;
      right: 230px;
      cursor: pointer;
      .icon {
        display: inline-block;
        line-height: 19px;
        vertical-align: middle;
      }
      .line {
        display: inline-block;
        height: 12px;
        border-left: 1px solid #a0a0a0;
        vertical-align: middle;
        margin: 0 6px;
      }
    }
  }
  .hot-text {
    font-size: 14px;
    color: rgb(153, 153, 153);
    padding-top: 8px;
    width: 766px;
    margin: auto;
    span {
      display: inline-block;
      margin-left: 18px;
      cursor: pointer;
      &:hover{
        color: rgb(213, 10, 29);
      }
    }
    :first-child {
      margin-left: 0;
    }
  }
  .search-result {
    height: 0;
    width: 766px;
    margin-left: -383px;
    margin-top: -28px;
    left: 50%;
    position: absolute;
    background: #ffffff;
    color: rgb(153, 153, 153);
    overflow: hidden;
    z-index: 10000;
    transition: height 0.4s;
    .lable {
      margin: 10px;
      cursor: pointer;
    }
  }
  .search-result-select {
    // border: 1px solid #ccc;
    height: auto;
  }
}
</style>
<template>
 <div class="serch-service">
     <div class="serch-group">
        <i-input v-model="queryVaL" placeholder="请输入服务名称..." class="such-input" size="large" @on-enter="goProductCetner" @on-focus="inputFocus" @on-blur="inputblur" ref="queryInput"></i-input>
        <div class="icon-group">
            <img src="~static/images/public/cancel.png" class="icon" v-show="searchData" @click="cancel()">
            <span class="line"></span>
            <img src="~static/images/public/magnifier.png" class="icon" @click="goProductCetner">
        </div>
     </div>
     <div class="hot-text" v-if="showHotText">
         <span v-for="(item,inx) in hotText" :key="inx" @click="hotTextClick(item) ">{{item.lable}}</span>
     </div>
     <div class="search-result" :class="isShow?'search-result-select':''" v-if="searchData">
          <p class="lable" v-for="(item,inx) in searchData" :key="inx" @click="lableClick(item)">{{item.name}}</p>
     </div>
 </div>
</template>
<script>
//全局服务搜索窗
import hotTextMenu from 'static/json/menuData/hot.js'
export default {
  props: {
    //输入窗初始数据
    queryValAdd: String,
    //是否展示热词
    showHotText: Boolean
  },
  data() {
    return {
      queryVaL: "",
      hotText: hotTextMenu,
      isLoad: 0,
      isShow: false,
      searchData: "",
      timeoutObj: "",
      cancelBtnShow: false,
    };
  },
  mounted() {
    //ajax 获取预制数据

    if (this.queryValAdd) {
      this.queryVaL = this.queryValAdd;
    }
  },
  watch: {
    queryVaL: function(newVal, oldVal) {
        console.log(newVal);
      clearTimeout(this.timeoutObj);
      if (!newVal) {
        this.searchData = "";
        return;
      }
      this.timeoutObj = setTimeout(() => {
        this.$get(
          this.$API_ENUM.SEARCH_SERVICES,
          { pageSize: 10, pageIndex: 1, serviceName: newVal },
          false
        ).then(res => {
          console.log(res);
          this.searchData = res.data;
        });
      }, 500);
    },
    queryValAdd: function(newVal, oldVal) {
      this.queryVaL = this.queryValAdd;
    }
  },
  methods: {
    cancel(){
      this.queryVaL=''
      this.$emit("cancel")
    },
    goProductCetner() {
      //跳转到产品中心页 path未定 queryKer 未定
      //this.$router.push({path: '', query: {selected: this.queryVaL}});
      this.isShow = false;
      this.$emit("getQueryValue", this.queryVaL);
    },
    inputFocus() {
      this.isShow = true;
    },
    inputblur() {
      setTimeout(() => {
        this.isShow = false;
      }, 1000);
    },
    hotTextClick(item) {
      let url = item.url;
       if (!url) return false;
        //debugger;
        let baseUrl = location.origin +"/";
        if (url[0] == "/") {
          this.$router.push(this.$CONFIG.UI_COMMON_PREFIX + url);
        } else if (url.indexOf("://") == -1) {
          location.href = baseUrl + url;
        } else {
          location.href = url;
        }



     // debugger;
      // if(item.url.indexOf("://") == -1){
      //   this.$router.push(this.$CONFIG.UI_COMMON_PREFIX + item.url);
      // }else{
      //   location.href = item.url;
      // }

      // this.ref

      //queryInput
    },
    lableClick(item) {
        let{ jumpType, adapterServiceId, serviceAlias, supplierAlias } = item
        this.jumpToProductDetail({
            jumpType,
            adapterServiceId,
            serviceAlias,
            supplierAlias,
        })
    }
  }
};
</script>

