<template>
    <div class="news-list">
        <div class="news-list-banner">
            <div class="center">
                <h3>中信云新闻动态</h3>
                <p class="title">最新动态发展&nbsp;&nbsp;最热新闻资讯&nbsp;&nbsp;精彩内容尽收眼底</p>
            </div>
        </div>

        <div class="news-list-hot">
            <div class="center">
                <h2>热门新闻</h2>
                <Row class="news-list-hot-bg" :gutter="12">
                    <i-col span="8" v-for="(item, index) in hotList" v-if="index< 3" :key="index">
                        <div  class="news-list-item" @click="godetail(item.id, item.href)">
                            <img :src="item.images" alt="">
                            <div class="news-list-item-info">
                                <p class="time">{{item.time}}</p>
                                <h3>{{item.title}}</h3>
                                <p class="news-list-item-intro"  v-html="item.description"></p>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <div class="news-list-info">
            <div class="center">
                <h2>资讯动态</h2>
                <Row class="news-list-info-bg" :gutter="12">
                    <i-col span="8" v-for="(item, index) in infomationList" v-if="index< 6" :key="index">
                        <div class="news-list-info-item" @click="godetail(item.id, item.href)">
                            <img :src="item.images" alt="">
                            <div class="news-list-info-item-info">
                                <p class="time">{{item.time}}</p>
                                <h3>{{item.title}}</h3>
                                <p class="news-list-item-intro" v-html="item.description"></p>
                            </div>
                        </div>
                    </i-col>
                </Row>
                <!--<a class="more" href="">查看更多</a>-->
            </div>
        </div>
    </div>
</template>

<script>
    import News from 'static/json/news/news.js'
    import marked from 'marked'

    export default {
        data() {
            return {
                list: News.data,
                hotList: '',
                infomationList: '',
            }
        },
        components: {
        },
        mounted(){
            this.getHotList()
            this.getLatestList()
            window.scrollTo(0,0)
        },
        methods:{
            getHotList() {
                var hot = this.list.filter(item=> item.hot === true);
                this.hotList= hot
            },
            getLatestList() {
                var infomation = this.list.filter(item=> item.infomation === true);
                this.infomationList= infomation
            },

            /**
             * 跳转详情信息页
             */
            godetail(id,href) {
                if (href == undefined || href=='') {
                    this.$router.push({
                        path: 'detail',
                        query: {
                            id
                        }
                    });
                } else {
                    window.open(href, '_blank')
                }
            }
        },
    }
</script>

<style lang="scss">

    .news-list {
        .news-list-banner{
            width: 100%;
            height: 390px;
            background: #0e0b40;
            .center {
                width: 1200px;
                height: 390px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                text-align: left;
                background: url(~static/images/news/banner-list.gif) top right no-repeat;
            }
            .title{
                display: block;
                font-size: 14px;
                color: #ffffff;
                margin-top: 10px;
            }
            h3{
                margin-top: 150px;
                display: block;
                font-size: 22px;
                color: #ffffff;
            }
        }


        .news-list-hot{
            background: #ffffff;
            .news-list-hot-bg{
                .news-list-item{
                    display:block;
                    overflow: hidden;
                    background:#f4f4f4;
                    cursor: pointer;
                    border-bottom: 6px solid #d9d9d9;
                    img{
                        width: 393px;
                        height: 220px;
                    }
                    .news-list-item-info{
                        padding:30px 40px;
                        height: 310px;
                    }
                    &:hover{
                         border-bottom: 6px solid #d6000f;
                    }
                    .time{
                        font-size: 16px;
                        color: #999999;
                        padding:20px 0;
                    }
                    h3{
                        text-align: left;
                        font-size: 18px;
                        font-weight: bold;
                        position:relative;
                        max-height: 56px;
                        margin-bottom:20px;
                        word-break:break-all;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .news-list-item-intro{
                        margin:20px 0;
                        color: #999999;
                        font-size: 16px;
                        line-height: 30px;
                        text-align: left;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        height:90px;
                        -webkit-box-orient: vertical;
                    }
                }
            }
            .center{
                width: 1200px;
                /*height: 550px;*/
                margin: 0 auto;
                overflow: hidden;
                position: relative;
            }
            h2{
                padding-top: 76px;
                padding-bottom: 40px;
                text-align: center;
                display: block;
                font-weight: normal;
                font-size: 30px;
                color: #000000;
            }
        }

        .news-list-info{
            background: #ffffff;
            padding-bottom:60px;
            .center{
                width: 1200px;
                text-align: center;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
            }
            h2{
                padding-top: 76px;
                padding-bottom: 40px;
                text-align: center;
                display: block;
                font-weight: normal;
                font-size: 30px;
                color: #000000;
            }
            .news-list-info-bg{
                margin-bottom:40px;
                .news-list-info-item{
                    display:block;
                    cursor: pointer;
                    overflow: hidden;
                    background:#f4f4f4;
                    margin-bottom: 10px;
                    border-bottom: 6px solid #d9d9d9;
                    &:hover{
                         border-bottom: 6px solid #d6000f;
                    }
                    img{
                        width: 393px;
                        height: 220px;
                    }
                    .news-list-info-item-info{
                        padding:30px 40px;
                        height: 310px;
                    }
                    .time{
                        font-size: 16px;
                        color: #999999;
                        padding:20px 0;
                    }
                    h3{
                        text-align: left;
                        max-height: 56px;
                        font-weight: bold;
                        font-size: 18px;
                        position:relative;
                        margin-bottom:20px;
                        word-break:break-all;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;

                    }
                    .news-list-item-intro{
                        margin:20px 0;
                        color: #999999;
                        font-size: 16px;
                        line-height: 30px;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        height:90px;
                    }
                }
            }
            a.more{
                cursor: pointer;
                padding: 8px 16px;
                border-radius: 54px;
                line-height: 52px;
                font-size: 20px;
                border: 1px solid #d6000f;
                margin-top: 50px;
                color: #d6000f;
            }
        }
    }
</style>

