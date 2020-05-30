<style lang="scss">
.banner0 {
  .group {
    width: 100%;
    margin: auto;
    position: relative;
    .carousel {
      width: 100%;
      .carousel-item {
        &.cursor {
          cursor: pointer;
        }


        .carousel-content {
          width: 100%;
          height: 570px;
          background-position: center;

          .text {
            width: 1200px;
            margin: auto;
            color: #000000;
           .iteam{
              margin-left: 350px;
              color: #fff;
           }
            .p1 {
              font-size: 32px;
              padding-top: 100px;
            }
            .p2{
              // color: #868c96;
              font-size: 20px;
              margin-top: 10px;
              height: 20px;
            }
            .btn {
              display: block;
              width: 150px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: #ffffff;
              background-color: #d01816;
              border-radius: 20px;
              margin-top: 20px;
            }
          }

            &.item-2{
                padding-top: 215px;

                .p1{
                    padding-top: 0;
                }

                .btn.iteam{
                    margin-top: 35px;
                    background-color: #0ddef1 !important;
                    color: #333 !important;
                }
            }
        }
      }
      .ivu-carousel-dots{
        .ivu-carousel-dots-inside {
            display: block;
            position: absolute;
            bottom: 5px;
        }
        li{
          button {
              border: 0;
              cursor: pointer;
              background: #ffffff;
              opacity: .8;
              display: block;
              width: 32px;
              height: 8px;
              border-radius: 5px;
              outline: 0;
              font-size: 0;
              color: transparent;
              transition: all .5s;
          }
        }
      }
    }
    .main-menu {
      position: absolute;
      left: 40px;
      top: 20px;
    }
  }
}

.color2{
  color:#ffffff;
}
.btn-color2{

  background: #fd9e27!important;
}
</style>
<template>
 <div class="banner0">
     <div class="group">
    <Carousel id="banner0Carousel" v-model="banner0Carousel" class="carousel" autoplay :autoplay-speed="carouselSetting.autoplaySpeed"  :arrow="carouselSetting.arrow" :dots="carouselSetting.dots">
            <Carousel-item v-for="(iteam,inx) in carouselData" :key="inx" class="carousel-item" :class="{cursor: iteam.url !== null && iteam.url !== ''}" @click.native="go(iteam.url)" >
                <!-- <router-link :to="iteam.url" > -->
                <div class="carousel-content" :class="`item-${inx + 1}`" v-bind:style="{backgroundImage: 'url(' + iteam. imgUrl+ ') '}">
                    <div class="text">
                        <p class="p1 iteam" :class="iteam.type == 1?'color2':''">{{iteam.p1}}</p>
                        <p class="p2 iteam" :class="iteam.type == 1?'color2':''">{{iteam.p2}}</p>
                        <a href="javascript:void(0);" class="btn iteam"  :class="iteam.type == 1?'btn-color2':''" v-if="iteam.type!=2">{{iteam.btnText?iteam.btnText: '了解详情'}}</a>
                    </div>
                </div>
                <!-- </router-link> -->
            </Carousel-item>

        </Carousel>
    </div>

 </div>
</template>

<script>


import lbt0 from "static/images/main/carousel/lbt0.jpg";
import lbt1 from "static/images/specialTopic/banner.jpg";
// import lbt2 from "static/images/specialTopic/banner.jpg";
// import lbt3 from "static/images/main/carousel/lbt3.jpg";
// import lbt4 from "static/images/main/carousel/lbt4.jpg";
import lbt6 from "static/images/main/carousel/lbt6.jpg";
import lbt7 from "static/images/main/carousel/lbt7.jpg";
import lbt8 from "static/images/main/carousel/lbt8.jpg";

export default {
  data() {
    return {
      banner0Carousel: 0,
      carouselSetting: {
        autoplaySpeed: 5000,
        arrow: "never",
        dots: "inside"
      },
      carouselData: [
        { imgUrl: lbt8, url: "/citic-web-ui/security/index", type: 2},
        { imgUrl: lbt7, url: "/citic-web-ui/blockChain/index", type: 2},
        // { imgUrl: lbt0, type: 2, url: '/citic-web-ui/news/anniversary829'},
        { imgUrl: lbt0, type: 2, url: 'https://www.c.citic/citic-web-ui/product/detail?service_id=201803082048317059'},
        { imgUrl: lbt1, type: 2, url: '/citic-web-ui/specialTopic/index'},
        { imgUrl: lbt6, url: "", type: 2},
        // { imgUrl: lbt3, url: "/citic-web-ui/product/detail?service_id=201905231819539403", p1: "中信云税务系统", p2: "专业 高效 安全 便捷 可信赖",type: 1,btnText: "了解详情" },
        // { imgUrl: lbt4, url: "https://www.group.citic/html/2019Internet/index.html", type: 2 },
      ]
    };
  },
  components: {

  },
  methods: {
    go(url) {
      if(url) {
        if (url.indexOf("://") == -1) {
          location.href = location.origin + url;
        } else {
          location.href = url;
        }
      }
    }
  }
};
</script>

