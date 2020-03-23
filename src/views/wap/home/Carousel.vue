<!--
 * @Description: 轮播模块
 * @Date: 2019-09-25 14:18:28
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 14:21:05
 -->
<template>
  <div class="Carousel">
    <div class="Carousel-swiper-title">{{$t('carousel.titleO')}}</div>
    <Swiper duration='5000' interval="7000" ref='swiper' class="Carousel-swiper">
      <Slide>
        <img class="Carousel-swiper-img" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.6/dist/images-wap/home/1.png" alt="" srcset="">
        <div class="Carousel-swiper-subtitle">{{$t('carousel.subTitleO')}}</div>
        <div class="Carousel-swiper-new">{{$t('carousel.messageO')}}</div>
      </Slide>
      <Slide>
        <img class="Carousel-swiper-img" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.6/dist/images-wap/home/2.png" alt="" srcset="">
        <div class="Carousel-swiper-subtitle">{{$t('carousel.subTitleT')}}</div>
        <div class="Carousel-swiper-new">{{$t('carousel.messageT')}}</div>
      </Slide>
      <Slide>
        <img class="Carousel-swiper-img" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.6/dist/images-wap/home/3.png" alt="" srcset="">
        <div class="Carousel-swiper-subtitle">{{$t('carousel.subTitleS')}}</div>
        <div class="Carousel-swiper-new">{{$t('carousel.messageS')}}</div>
      </Slide>
    </Swiper>
    <img class="Carousel-swiper-left" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.6/dist/images-wap/home/left.png" @click='ClickLeft'>
    <img class="Carousel-swiper-right" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.6/dist/images-wap/home/right.png" @click='ClickRight'>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Swiper, Slide } from 'vue-swiper-component';
  @Component({
    components: {
      Swiper,
      Slide
    }
  })
  export default class Carousel extends Vue {

    ClickLeft() {
      this.$refs.swiper.prevSlide(); // 上一张图
    }
    ClickRight() {
      this.$refs.swiper.nextSlide(); // 下一张
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .Carousel {
    box-sizing: border-box;
    background: rgba(249, 250, 253, 1);
    padding: px2rem(100) px2rem(39);
    text-align: center;
    position: relative;

    .Carousel-swiper {
      padding-bottom: px2rem(80);
    }

    .Carousel-swiper-title {
      height: px2rem(54);
      font-size: px2rem(40);
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(54);
      margin-bottom: px2rem(79);
    }

    .Carousel-swiper-img {
      width: px2rem(500);
      height: px2rem(280);
      margin: 0 auto;
    }

    .Carousel-swiper-subtitle {
      height: px2rem(45);
      font-size: px2rem(32);
      font-weight: 400;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(45);
      margin-top: px2rem(50);
      margin-bottom: px2rem(30);
    }

    .Carousel-swiper-new {
      width: px2rem(500);
      height: px2rem(200);
      font-size: px2rem(28);
      font-weight: 300;
      color: rgba(131, 134, 144, 1);
      line-height: px2rem(50);
      margin: 0 auto;
      margin-top: px2rem(30);
      margin-bottom: px2rem(49)
    }

    .Carousel-swiper-left,
    .Carousel-swiper-right {
      position: absolute;
      width: px2rem(22);
      height: px2rem(41);
      top: px2rem(705);
      z-index: 3;
    }

    .Carousel-swiper-left {
      left: px2rem(39);
    }

    .Carousel-swiper-right {
      right: px2rem(39);
    }

  }
</style>