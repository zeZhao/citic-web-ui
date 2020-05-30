<!-- 复杂轮播图 -->
<style  scoped lang="scss">
.multiple-swipers{
    width: 100%;
    height: 100%;
}
</style>
<template>
    <swiper :options="swiperOption" class="multiple-swipers">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
    </swiper>
</template>

<script>
export default {
props:{
},
data () {
   return {
       swiperOption:{
            slidesPerView: 3,
            spaceBetween: 30,
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // }
       }
   };
},

mounted(){},

components: {},

computed: {},

methods: {}
}

</script>
