<template>
 <div class="banner2">
     <div class="banner-box">
         <Row class="row">
            <i-col span="10">
                <router-link to="">
                    <p class="title">{{listData[nowBannerBox].title}}</p>
                </router-link>
                 
             <p class="explain">{{listData[nowBannerBox].explanin}}</p>
             <div class="cross-animation" v-if="listData[nowBannerBox].url">
                 <a  class="more" :href="listData[nowBannerBox].url">
                     了解更多
                 </a>
                 <img src="~static/images/main/icon-i-right.png" class="icon-left">
                 <img src="~static/images/main/icon-i-right.png" class="icon-right">
             </div>
            </i-col>
            <i-col span="14">
                <img :src="listData[nowBannerBox].imgUrl" alt="">
            </i-col>
        </Row>
         <div class="banner2-nav">
             <Row  class="row" :gutter="10">
                <i-col span="4" v-for="(iteam,inx) in listData" :key="inx" class="nav-col" @mouseenter.native="nowBannerBox = inx">
                    <router-link to="" style="display:block;" :class="nowBannerBox==inx?'activity':''">
                        <img :src="iteam.imgUrl">
                        <p>{{iteam.title}}</p>
                    </router-link>
                </i-col>
                
            </Row>
            
         </div>
         
     </div>
     <div>

     </div>

 </div>
</template>

<script>
import imgUrl1 from "static/images/main/banner2/b2-1.1.png";
import imgUrl2 from "static/images/main/p2-6-b.png";
import imgUrl3 from "static/images/main/p2-3-b.png";
import imgUrl4 from "static/images/main/p2-4-b.png";
import imgUrl5 from "static/images/main/p2-5-b.png";
import imgUrl6 from "static/images/main/p2-2-b.png";

export default {
  data() {
    return {
      listData: [
        {
          title: "中信联盟",
          explanin:
            "集团组织创始成员基于11亿零售客户流量共同发起建立的用户身份互认、权益互通和标签数据整合共享的新零售互联网平台。",
          imgUrl: imgUrl1,
          url:"https://www.c.citic/apistore//alliancechain.html"
        },
         {
          title: "精准农业",
          explanin:
            "强大的并行计算和机器学习建模能力，结合中信强大的基因测序能力，在人工智能辅助育种、等方面实现精准农业。",
          imgUrl: imgUrl6,
          url: ""
        },
         {
          title: "智能制造",
          explanin:
            "基于中信的物联网开放平台及应用软件，提供跨企业，行业的设备连接，管理；并依托中信大数据能力提供基于运行数据的生产性服务，如远程监控，自动运维，故障预警等。",
          imgUrl: imgUrl3,
          url: "https://iotapp.c.citic/"
        },
        {
          title: "智能建造",
          explanin:
            "搭建一个“互联网+EPC+BIM”的开放平台，聚合投资方、设计方、施工方、运营方入驻，嫁接制造、金融、物流等服务，共同打造全生命周期建造生态系统。",
          imgUrl: imgUrl4,
          url: ""
        },
        {
          title: "生态金融",
          explanin:
            "供应链、贸易、集采、仓储、租赁、现金管理等应用场景积累商流、物流和资金流等大数据，由金融机构提供金融服务。",
          imgUrl: imgUrl5,
          url: "https://www.c.citic/views/transaction.jsp"
        },
        {
          title: "仓储物流",
          explanin:
            "利用物联网和区块链技术建立仓储物流云平台，解决仓储的真实性和仓单的信用问题，建立供应链金融生态。",
          imgUrl: imgUrl2,
          url: ""
        },
       
        
        
       
      ],
      nowBannerBox: 0
    };
  },
  methods: {}
};
</script>

<style scoped>
.banner2 .banner2-nav {
  position: absolute;
  bottom: 80px;
  width: 100%;
}
.banner2-nav img {
  width: 100%;
  height: 100%;
}
.banner2-nav p {
  font-size: 18px;
  color: rgb(102, 102, 102);
  line-height: 48px;
  text-align: center;
  background-color: #ffffff;
  margin-top: -4px;
}
.banner2 {
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  background: rgb(242, 242, 242);
}
.banner-box {
  padding: 110px 0 140px;
}
.cross-animation {
  position: relative;
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 40px;
}
.cross-animation .more {
  color: #d92028;
  font-size: 14px;
  line-height: 50px;
  display: none;
}
.cross-animation .icon-left {
  position: absolute;
  left: 74px;
  top: 4px;
  transition: all 0.3s;
}

.cross-animation .icon-right {
  position: absolute;
  left: 90px;
  top: 22px;
  transform: rotate(180deg);
  transition: all 0.3s;
}

.cross-animation:hover .icon-left {
  left: 178px;
  top: 30px;
}
.cross-animation:hover .icon-right {
  left: 0;
  top: 0;
}
.cross-animation:hover .more {
  display: inline;
}

.banner-box .row {
  width: 1200px;
  margin: auto !important;
  letter-spacing: 2px;
}
.banner-box .row .nav-col {
}
.banner-box .row .title {
  color: rgb(51, 51, 51);
  font-size: 34px;
}
.banner-box .row .explain {
  color: rgb(102, 102, 102);
  width: 260px;
  font-size: 14px;
  line-height: 23px;
}

.banner-box .explain {
}
.activity{
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.1);
}
</style>
