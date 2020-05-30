<style scoped lang="scss">
.banner3 {
  padding-top: 95px;
  .nav-tab {
    p {
      font-size: 20px;
      &:first-child {
        font-size: 36px;
      }
    }
    .tab {
      text-align: center;
      font-size: 24px;
      margin-top: 30px;
      .col {
        height: 80px;
        padding-top: 25px;
        cursor: pointer;
        width: 16.66666%;
        img {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          padding-left: 10px;
        }
      }
    }
    .active {
      background-color: rgb(217, 32, 40);
      color: #ffffff;
    }
  }
  .menus {
    background-color: rgb(242, 242, 242);
    .menu-goup .content {
      font-size: 12px;
      color: rgb(153, 153, 153);
      padding: 48px 0 95px 0;
      .title {
        font-size: 16px;
        color: rgb(51, 51, 51);
        cursor: pointer;
      }
      .list {
        margin-top: 8px;

        .lable {
          margin-top: 12px;
          cursor: pointer;
          &:hover {
            color: rgb(217, 32, 40);
          }
        }
      }
      .banner3-col2 {
        margin-top: 10px;
        .p1 {
          font-size: 16px;
          color: rgb(51, 51, 51);
          cursor: pointer;
        }
        .p2 {
          display: block;
          margin-top: 10px;
          width: 250px;
          height: 20px;
          cursor: pointer;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
           &:hover {
            color: rgb(217, 32, 40);
          }

        }
      }
    }
  }

  .center {
    width: 1200px;
    margin: auto;
  }
}
</style>

<template>
 <div class="banner3">
     <div class="nav-tab center">
        <p>科技平台</p>
        <p>满足不同行业各应用场景的需求</p>
         <Row class="tab">
            <i-col span="4" class="col" v-for="(iteam,inx) in tabListData" :key="inx"   @mouseenter.native="mouseenter(inx)" :class="iteam.isSelect==0?'':'active'">
                <img :src="iteam.icon1" v-if="iteam.isSelect == 0">
                <img :src="iteam.icon2" v-else>
                <span>{{iteam.name}}</span>
                <span class="line"></span>
            </i-col>
        </Row>
     </div>
     <div class="menus">
       <div class="menu-goup center">
          <div class="content content1" v-if="tabListData[0].isSelect == 1">
             <Row>
                <i-col span="4" v-for="(iteam,inx) in yunMenuData" :key="inx" class="banner3-col">
                    <p class="title">{{iteam.title}}</p>
                    <ul class="list">
                        <li class="lable" v-for="(child,inx) in iteam.children" :key="inx" @click="go(child.url)">{{child.lable}}</li>
                    </ul>
                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[1].isSelect == 1">
             <Row type="flex" justify="center">


                <i-col span="4" v-for="(iteam,inx) in daMenuData" :key="inx" class="banner3-col">
                    <p class="title">{{iteam.title}}</p>
                    <ul class="list" >
                        <li class="lable" v-for="(child,inx) in iteam.children" :key="inx" @click="go(child.url)">{{child.lable}}</li>
                    </ul>
                </i-col>


            </Row>
         </div>
         <div class="content" v-if="tabListData[2].isSelect == 1">
             <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['wu']" :key="inx" class="banner3-col2">
                    <p class="p1" @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2" @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[3].isSelect == 1">
             <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['yi']" :key="inx" class="banner3-col2">
                    <p class="p1"  @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2"  @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[4].isSelect == 1">
              <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['zhi']" :key="inx" class="banner3-col2">
                    <p class="p1"  @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2"  @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
           <div class="content" v-if="tabListData[5].isSelect == 1">
               <Row type="flex" justify="center">

                   <i-col span="4" v-for="(iteam,inx) in lianMenuData" :key="inx" class="banner3-col">
                       <p class="title">{{iteam.title}}</p>
                       <ul class="list" >
                           <li class="lable" v-for="(child,inx) in iteam.children" :key="inx" @click="go(child.url)">{{child.lable}}</li>
                       </ul>
                   </i-col>

               </Row>
           </div>
       </div>
     </div>


     <!-- <div class="content-group">
         <div class="content content1" v-if="tabListData[0].isSelect == 1">
             <Row>
                <i-col span="4" v-for="(iteam,inx) in yunMenuData" :key="inx" class="banner3-col">
                    <p class="title">{{iteam.title}}</p>
                    <ul class="list">
                        <li class="lable" v-for="(child,inx) in iteam.children" :key="inx" @click="go(child.url)">{{child.lable}}</li>
                    </ul>
                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[1].isSelect == 1">
             <Row type="flex" justify="center">


                <i-col span="4" v-for="(iteam,inx) in daMenuData" :key="inx" class="banner3-col">
                    <p class="title">{{iteam.title}}</p>
                    <ul class="list" >
                        <li class="lable" v-for="(child,inx) in iteam.children" :key="inx" @click="go(child.url)">{{child.lable}}</li>
                    </ul>
                </i-col>


            </Row>
         </div>
         <div class="content" v-if="tabListData[2].isSelect == 1">
             <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['wu']" :key="inx" class="banner3-col2">
                    <p class="p1" @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2" @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[3].isSelect == 1">
             <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['yi']" :key="inx" class="banner3-col2">
                    <p class="p1"  @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2"  @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[4].isSelect == 1">
              <Row >
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['zhi']" :key="inx" class="banner3-col2">
                    <p class="p1"  @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2"  @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div>
         <div class="content" v-if="tabListData[5].isSelect == 1">
               <Row type="flex" justify="center">
                <i-col span="6" v-for="(iteam,inx) in wyuzlMenuData['lian']" :key="inx" class="banner3-col2">
                    <p class="p1"  @click="go(iteam.url)">{{iteam.title}}</p>
                    <p class="p2"  @click="go(iteam.url)">{{iteam.lable}}</p>

                </i-col>
            </Row>
         </div> -->

     <!-- </div> -->
 </div>
</template>

<script>
import img1_1 from "static/images/main/banner3/icon-3-1.png";
import img1_2 from "static/images/main/banner3/icon-3-1-red.png";

import img2_1 from "static/images/main/banner3/icon-3-2.png";
import img2_2 from "static/images/main/banner3/icon-3-2-red.png";

import img3_1 from "static/images/main/banner3/icon-3-3.png";
import img3_2 from "static/images/main/banner3/icon-3-3-red.png";

import img4_1 from "static/images/main/banner3/icon-3-4.png";
import img4_2 from "static/images/main/banner3/icon-3-4-red.png";

import img5_1 from "static/images/main/banner3/icon-3-5.png";
import img5_2 from "static/images/main/banner3/icon-3-5-red.png";

import img7_1 from "static/images/main/banner3/icon-3-7.png";
import img7_2 from "static/images/main/banner3/icon-3-7-red.png";

import yunMenuData from "static/json/menuData/menu-yun";
import daMenuData from "static/json/menuData/menu-da";
import wyuzlMenuData from "static/json/menuData/menu-wyuzl";
import lianMenuData from "static/json/menuData/menu-lian";

export default {
  data() {
    return {
      tabListData: [
        { name: "云", icon1: img1_1, icon2: img1_2, isSelect: 1 },
        { name: "大", icon1: img2_1, icon2: img2_2, isSelect: 0 },
        { name: "物", icon1: img3_1, icon2: img3_2, isSelect: 0 },
        { name: "移", icon1: img4_1, icon2: img4_2, isSelect: 0 },
        { name: "智", icon1: img5_1, icon2: img5_2, isSelect: 0 },
        { name: "链", icon1: img7_1, icon2: img7_2, isSelect: 0 }
      ],
      yunMenuData: yunMenuData,
      daMenuData: daMenuData,
      wyuzlMenuData: wyuzlMenuData,
      lianMenuData: lianMenuData,
    };
  },
  methods: {
    mouseenter(inx) {
      this.tabListData.forEach(element => {
        element.isSelect = 0;
      });
      this.tabListData[inx].isSelect = 1;
    },
    go(url) {
      // let baseUrl = "https://www.c.citic/";
      let baseUrl = location.origin + "/";
      if (url.indexOf("://") == -1) {
        location.href = baseUrl + url;
      } else {
        location.href = url;
      }
    }
  }
};

// .banner3-col {
//   text-align: left;

//   .title {
//     font-size: 18px;
//     color: rgb(102, 102, 102);
//   }
//   .list {
//     margin-top: 10px;
//     .lable {
//       text-align: left;

//       width: 250px;
//       height: 35px;
//       cursor: pointer;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//       overflow: hidden;
//       line-height: 35px;
//     }
//   }
// }
// .banner3-col2 {
//   height: 90px;
//   .p1 {
//     font-size: 16px;
//   }
//   .p2 {
//     display: block;
//     margin-top: 10px;
//     width: 250px;
//     height: 20px;
//     cursor: pointer;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
//   }
// }
// .active {
//   background-color: rgb(217, 32, 40);
//   color: #ffffff;
// }
// .banner3 {
//   color: rgb(102, 102, 102);
//   padding: 90px 0;
// }
// .banner3 .nav-tab {
//   width: 1200px;
//   margin: auto;
// }
// .banner3 .content-group {
//   width: 1200px;
//   border: 1px solid #ccc;
//   margin: auto;
// }

// .banner3 .content-group .content {
//   width: 100%;
//   background: rgb(242, 242, 242);
//   padding: 50px 0 50px 50px;
// }
// .banner3 .nav-tab .tab .col {
//   height: 80px;
//   line-height: 70px;
//   position: relative;
// }
// .banner3 .nav-tab .tab .col .line {
//   height: 70px;
//   line-height: 60px;
//   position: relative;
// }

// .banner3 .nav-tab .tab .col img {
//   margin-right: 20px;

//   vertical-align: middle;
// }
// .banner3 .nav-tab .tab .col span {
//   vertical-align: middle;
// }

// .banner3 .nav-tab .tab {
//   text-align: center;

//   font-size: 24px;
//   margin-top: 30px;
// }

// .banner3 .nav-tab p {
//   font-size: 20px;
// }

// .banner3 .nav-tab p:first-child {
//   font-size: 36px;
// }
</script>

