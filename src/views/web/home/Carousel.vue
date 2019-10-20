<!--
 * @Description: 轮播模块
 * @Date: 2019-09-25 14:18:28
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-17 10:51:05
 -->
<template>
  <div class="Carousel">
    <div class="Carousel-right">
      <transition name="fade">
        <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/carousel/1.png" alt="" srcset="" v-show='index==1'>
      </transition>
      <transition name="fade">
        <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/carousel/2.png" alt="" srcset="" v-show='index==2'>
      </transition>
      <transition name="fade">
        <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/carousel/3.png" alt="" srcset="" v-show='index==3'>
      </transition>
      <div id="progress">
        <span :style="{width: loadWidth+'%'}"></span>
      </div>
    </div>
    <div class="Carousel-left">
      <div class="Carousel-left-test">
        <transition name="fade">
          <div v-show='index==1'>
            <div class="Carousel-left-title">{{$t('carousel.titleO')}}</div>
            <div class="Carousel-left-subtitle">{{$t('carousel.subTitleO')}}</div>
            <div class="Carousel-left-new">{{$t('carousel.messageO')}}</div>
          </div>
        </transition>
        <transition name="fade">
          <div v-show='index==2'>
            <div class="Carousel-left-title">{{$t('carousel.titleO')}}</div>
            <div class="Carousel-left-subtitle">{{$t('carousel.subTitleT')}}</div>
            <div class="Carousel-left-new">{{$t('carousel.messageT')}}</div>
          </div>
        </transition>
        <transition name="fade">
          <div v-show='index==3'>
            <div class="Carousel-left-title">{{$t('carousel.titleO')}}</div>
            <div class="Carousel-left-subtitle">{{$t('carousel.subTitleS')}}</div>
            <div class="Carousel-left-new">{{$t('carousel.messageS')}}</div>
          </div>
        </transition>
      </div>
      <div class="Carousel-left-btn">
        <div class="Carousel-left-btn-left" @click='ClickLeft'>
          <span></span>
        </div>
        <div class="Carousel-left-btn-center">{{index}} · 3</div>
        <div class="Carousel-left-btn-right" @click='ClickRight'>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Carousel extends Vue {
  private index = 1;
  private Timer = null;
  private loadWidth = 0;
  private loadTimer = null;

  public startTimer() {
    this.Timer = setInterval(() => {
      this.index++;
      this.loadWidth = 0;
      if (this.index >= 4) {
        this.index = 1;
      }
    }, 5000);

    this.loadTimer = setInterval(() => {
      this.loadWidth = this.loadWidth + 2;
    }, 100);
  }

  public stopTimer() {
    this.loadWidth = 0;
  }


  private mounted() {
    this.startTimer();
  }

  private ClickLeft() {
    this.stopTimer();
    this.index--;
    if (this.index <= 0) {
      this.index = 3;
    }
  }

  private ClickRight() {
    this.stopTimer();
    this.index++;
    if (this.index >= 4) {
      this.index = 1;
    }
  }
}
</script>
<style lang="scss" scoped>
  .Carousel {
    box-sizing: border-box;
    height: 70vh;
    background: rgba(249, 250, 253, 1);

    .Carousel-left {
      float: right;
      /* width: 36.5vw; */
      width: 612px;
      height: 70vh;
      padding-top: 13vh;
      margin-right: 9.5vh;

      .Carousel-left-title {
        height: 54px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 54px;
      }

      .Carousel-left-subtitle {
        height: 28px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(23, 33, 60, 1);
        line-height: 28px;
        margin-top: 5vh;
      }

      .Carousel-left-new {
        /* width: 26vw; */
        width: 500px;
        height: 140px;
        font-size: 16px;
        font-weight: 300;
        color: rgba(131, 134, 144, 1);
        line-height: 28px;
        margin-top: 4vh;
      }
    }

    .Carousel-left-btn>div {
      width: 46px;
      height: 46px;
      display: inline-block;
      vertical-align: top;
      line-height: 48px;
    }

    .Carousel-left-btn-left,
    .Carousel-left-btn-right {
      border: 2px solid rgba(240, 241, 245, 1);
      border-radius: 50%;
      line-height: 44px;
      font-size: 12px;
    }

    .Carousel-left-btn-left:hover,
    .Carousel-left-btn-right:hover {
      cursor: pointer;
      border-color: #17213C;
    }

    .Carousel-left-btn-left:hover {
      span {
        border-right-color: #17213C;
      }
    }

    .Carousel-left-btn-right:hover {
      span {
        border-left-color: #17213C;
      }
    }

    .Carousel-left-btn-left {
      padding-left: 14px;

      span {
        display: inline-block;
        transform: scale(0.8);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 11px solid #888E9D;
        border-bottom: 6px solid transparent;
      }
    }

    .Carousel-left-btn-right {
      padding-left: 17px;

      span {
        display: inline-block;
        transform: scale(0.8);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-left: 11px solid #888E9D;
        border-bottom: 6px solid transparent;
      }
    }

    .Carousel-left-btn-center {
      margin: 0 30px;
      width: 31px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(23, 33, 60, 1);
    }

    .Carousel-left-test {
      margin-bottom: 4vh;
      height: 35vh;
    }
  }


  .Carousel-right {
    float: right;
    position: relative;
    /* width: 898px;
    height: 800px; */
    width: 78vh;
    height: 70vh;

    img {
      width: 100%;
    }
  }

  /* 条形 */
  #progress {
    width: 100%;
    height: 5px;
    /*注意这里*/
    box-shadow: 0 0 5px 0px #ddd inset;
    position: absolute;
    bottom: 0px;
  }

  #progress span {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: rgba(221, 22, 62, 1);
    background-size: 60px 30px;
    text-align: center;
    color: #fff;
    transition: all .2s linear;
  }

  @keyframes load {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  .Carousel-left-btn-right {
    position: relative;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    position: absolute;
    transition: opacity 1s;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-active {
    position: absolute;
    transition: opacity 1s;
  }
</style>