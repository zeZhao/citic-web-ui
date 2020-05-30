<template>
    <div class="news-detail">
        <div class="center">
            <a class="back" @click="routerback()"><Icon type="chevron-left"></Icon> 返回</a>
            <h1 class="title">{{desc.title}}</h1>
            <p class="time">{{desc.time}}</p>
            <div class="content" v-html="desc.content"></div>
        </div>
    </div>
</template>

<script>
    import News from 'static/json/news/news.js'


    export default {
        data() {
            return {
                list: News.data,
                desc: '',
            }
        },
        components: {
        },
        mounted(){
            this.getLatestList()
            window.scrollTo(0,0)
        },
        methods:{
            getLatestList() {
                let id = this.$route.query.id
                let desc = this.list.filter(item=> item.id === id);
                this.desc= desc[0]
            },
            /**
             * 返回上一页
             */
            routerback() {
                this.$router.back(-1)
            },
        },
    }
</script>

<style lang="scss">
    .news-detail {
        .center{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
            text-align: center;
        }
        .back{
            font-size: 14px;
            color: #757980;
            margin: 20px 0;
            display: block;
            overflow: hidden;
            text-align: left;
            width: 100%;
            &:hover{
                 color: #2d8cf0;
             }
        }
        h1.title{
            display: block;
            color: #000;
            padding: 48px 0 20px;
            vertical-align: baseline;
            font-family: "Microsoft YaHei";
            font-size: 34px;
            font-weight: normal;
            line-height: 120%;
            border-bottom: 1px solid #ccc;
        }
        .time {
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
        }
        .content{
            margin: 40px 0;
            text-indent: 2em;
            display: block;
            color: #000;
            font-size: 16px;
            font-weight: normal;
            line-height: 30px;
            text-align: center;
            p{
                text-align: left;
                padding:15px 0;
            }
            img{
                max-width: 800px;
                margin: 30px auto;
            }
            .title{
                text-align: left;
                font-weight: bold;
                font-size: 16px;
                color: #d4544f;
            }
        }
    }
</style>

