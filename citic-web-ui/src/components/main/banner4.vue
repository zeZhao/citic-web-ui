<template>
    <div class="banner4">
        <Row class="block-group">
            <p>中信产业社区</p>
            <p>致力做中国最好的云服务平台</p>
            <i-col
                span="6"
                v-for="(iteam,inx) in blockListData"
                :key="inx"
                class="col"
                @click.native="go(iteam.url)"
            >
                <img :src="iteam.bgUrl" class="img1" />
                <img src="~static/images/main/banner4/bg-color.png" class="img1 bg" />
                <div class="content">
                    <img :src="iteam.icon_1" class="img2" />
                    <img :src="iteam.icon_2" class="img3" />

                    <p class="title">{{iteam.name}}</p>
                    <p class="explain">{{iteam.explain}}</p>
                    <router-link to v-if="iteam.url">
                        <div class="com-more-btn">了解更多</div>
                    </router-link>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
import bg1 from "static/images/main/banner4/img-4-1.png";
import icon1_1 from "static/images/main/banner4/icon-4-1.png";
import icon1_2 from "static/images/main/banner4/icon-4-1-w.png";

import bg2 from "static/images/main/banner4/img-4-2.png";
import icon2_1 from "static/images/main/banner4/icon-4-2.png";
import icon2_2 from "static/images/main/banner4/icon-4-2-w.png";

import bg3 from "static/images/main/banner4/img-4-3.jpg";
import icon3_1 from "static/images/main/banner4/icon-4-3.png";
import icon3_2 from "static/images/main/banner4/icon-4-3-w.png";

import bg4 from "static/images/main/banner4/img-4-4.jpg";
import icon4_1 from "static/images/main/banner4/icon-4-4.png";
import icon4_2 from "static/images/main/banner4/icon-4-4-w.png";

export default {
    data() {
        return {
            blockListData: [
                {
                    name: "双创",
                    bgUrl: bg1,
                    icon_1: icon1_1,
                    icon_2: icon1_2,
                    explain:
                        "建立线上线下双创平台，开展创新创业大赛，根据创业团队能力、孵化可行性、市场机会、中信生态相关性进行评审。",
                    url: "https://startup.citic.com/"
                },
                {
                    name: "在线认证",
                    bgUrl: bg2,
                    icon_1: icon2_1,
                    icon_2: icon2_2,
                    explain:
                        "以中信强大的品牌实力和中信云强大的科技平台作为保障，中信集团对网站、微博、微信、应用进行认证，全方面提供信誉保障。",
                    url: "/product/cert/details"
                },
                {
                    name: "云采购",
                    bgUrl: bg3,
                    icon_1: icon3_1,
                    icon_2: icon3_2,
                    explain:
                        "中信生态企业专享服务，超低价格购买高品质办公设备等商品，同时享受VIP级别的原厂商服务。",
                    url: ""
                },
                {
                    name: "开发者",
                    bgUrl: bg4,
                    icon_1: icon4_1,
                    icon_2: icon4_2,
                    explain:
                        "中信云不仅为开发者提供从基础设施、技术平台、API到软件服务的全方位云服务，更提供多个产业的业务平台和数据、应用发布和营销服务等全方位支撑。",
                    url: ""
                }
            ]
        };
    },
    methods: {
        go(url) {
            if (url.indexOf("://") == -1) {
                this.$router.push(this.$CONFIG.UI_COMMON_PREFIX + url);
            } else {
                location.href = url;
            }
        }
    }
};
</script>

<style scoped>
.banner4 {
    padding: 40px 0;
}
.banner4 .block-group > p:first-child {
    font-size: 36px;
}
.banner4 .block-group > p {
    font-size: 20px;
}
.banner4 .block-group {
    width: 1200px;
    margin: auto;
}
.banner4 .block-group .col {
    position: relative;
    text-align: center;
    overflow: hidden;
    margin-top: 40px;
}

.banner4 .block-group .col .bg {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
}
.banner4 .block-group .col:hover .content {
    top: 60px;
}
.banner4 .block-group .col:hover .bg {
    display: inline;
}

.banner4 .block-group .col:hover .img1 {
    transform: scale(1.1);
}
.banner4 .block-group .col:hover .content {
    height: 500px;
}

.banner4 .block-group .col:hover .content .img2 {
    display: none;
}
.banner4 .block-group .col:hover .content .img3 {
    top: 80px;
    display: inline;
}
.banner4 .block-group .col:hover .content .title {
    color: #ffffff;
}

.banner4 .block-group .col:hover .content .explain {
    display: inline-block;
}
.banner4 .block-group .col:hover .content .com-more-btn {
    display: inline-block;
}

.banner4 .block-group .col .img1 {
    transform: scale(1);
    transition: all 0.3s;
}
.content .com-more-btn {
    font-size: 16px;
    width: 175px;
    height: 50px;
    border: 1px solid #e2e2e2;
    line-height: 50px;
    border-radius: 25px;
    margin-top: 25px;
    cursor: pointer;
    display: none;
    color: #ffffff;
}
.content {
    position: absolute;
    width: 100%;
    top: 150px;
    overflow: hidden;
    height: 270px;
    transition: all 0.3s;
}
.content .img3 {
    display: none;
}
.content .title {
    font-size: 28px;
    padding-top: 20px;
    width: 100%;
}
.content .explain {
    font-size: 14px;
    padding: 20px 38px;
    text-align: left;
    display: none;
    color: #ffffff;
}
</style>
