
<style  scoped lang="scss">
.banner1 {
  font-size: 14px;
  color: rgba(51, 51, 51, 0.6);
  background-color: #ffffff;

  width: 1200px;
  margin: auto;
  height: 156px;
  .banner1-row {
    height: 100%;

    .banner1-col {
    height: 100%;

      .group{
         cursor:pointer;
        text-align: center;
        display: block;
        color: rgba(51, 51, 51, 0.6);
        height: 100%;
        display: flex;
        justify-content:center;
        align-items:Center;
        div{
            text-align: left;
            display: inline-block;
            margin-left: 20px;
             vertical-align: middle;

             .title {
                font-size: 16px;
                 vertical-align: middle;
                color: rgb(51, 51, 51);
                font-weight: bold;
                }

        }
      }

       &:hover  {
        background-color: rgb(244, 252, 255);
        .group div .title{
                color: rgb(205, 19, 27);
        }
        }
    }

  }
}
</style>
<template>
 <div class="banner1">
     <Row class="banner1-row">
        <i-col span="6" class="banner1-col" v-for="(item,inx) in data" :key="inx">
            <a class="group" :href="item.url?item.url:'javascriot:void(0);'">
                <img :src="item.img" alt="">
                <div>
                    <p class="title">{{item.title}}</p>
                    <p >{{item.notice}}</p>
                </div>
            </a>

        </i-col>
    </Row>
 </div>
</template>
<script>
import img1 from "static/images/main/icon-1-1.1.png";
import img2 from "static/images/main/icon-1-2.1.png";
import img3 from "static/images/main/icon-1-3.1.png";
import img4 from "static/images/main/icon-1-4.1.png";
export default {
  data() {
    return {
      data: [
        { img: img1, title: "新闻动态", notice: "热门新闻&资讯动态", url:"/citic-web-ui/news/list"},
        { img: img2, title: "活动专区", notice: "线上活动&“科技范”沙龙", url:"/citic-web-ui/news/topic" },
        { img: img3, title: "服务与支持", notice: "帮助文档&使用干货", url:"https://help.c.citic/hc/" },
        { img: img4, title: "加入中信云", notice: "服务商入驻&共创新可能", url: this.isProduction()?"https://www.c.citic/providerportal/" : "https://test123.c.citic/providerportal/"}
      ]
    };
  },
  components: {

  },
  methods:{
      isProduction(){
          let hostname = location.hostname
          if(hostname == "test123.c.citic"){
              return false
          }else if(hostname == "127.0.0.1"){
              return false
          }
          return true
      }
  }
};
</script>

