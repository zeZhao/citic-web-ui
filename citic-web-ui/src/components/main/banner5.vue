<template>
 <div class="banner5">
     <div class="content">
         <p>合作伙伴</p>
         <p>携手共赢，与中信合作伙伴共建云端生态</p>
        <Row class="row">
            <i-col span="4" v-for="(iteam,inx) in listData" :key="inx" class="col">
                <a class="" href="javascript:void(0);" HTML:target=_blank>
                    <img :src="iteam.logoUrl">
                </a>
            </i-col>
        </Row>
     </div>
 </div>
</template>

<script>
import logo1 from 'static/images/main/banner5/aly.png'
import logo2 from 'static/images/main/banner5/jsy.png'
import logo3 from 'static/images/main/banner5/wry.png'
import logo4 from 'static/images/main/banner5/oracl.png'
import logo5 from 'static/images/main/banner5/tx.png'
import logo6 from 'static/images/main/banner5/yy.png'

 export default {
   data () {
     return {
         listData:[
             {logoUrl: logo1},
             {logoUrl: logo2},
             {logoUrl: logo3},
             {logoUrl: logo4},
             {logoUrl: logo5},
             {logoUrl: logo6}
         ]
     }
   },
   components: {

   }
 }
</script>

<style scoped>
.banner5{

}
.banner5 .content{
    width: 1200px;
    margin: auto;
    text-align: center;
}
.banner5 .content > p{
    font-size: 20px;
    color: rgb(102,102,102);
}
.banner5 .content > p:first-child{
    font-size: 36px;

}
.banner5 .content .row{
    margin: 40px 0;

}
.banner5 .content .row .col{
    line-height: 95px;
     /* height:  */
}
.banner5 .content .row .col a{
    cursor: default;
}
.banner5 .content .row .col img{
    display: inline-block;
    vertical-align: middle;
}


</style>
