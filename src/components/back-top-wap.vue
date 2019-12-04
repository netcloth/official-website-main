<!--
 * @Description: 返回顶部
 * @Date: 2019-10-08 15:33:56
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-17 10:51:25
 -->
<template>
  <!-- 回顶部按钮为一张50*50的图片 -->
  <!-- btnFlag 控制图片显示隐藏 -->
  <!-- backTop 回顶部的方法 -->
  <div class="go-top" v-if="btnFlag" @click="backTop">
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class BackTop extends Vue {
    private btnFlag = false
    private mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    }

    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    private backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    }

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    private scrollToTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 0) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }

    private destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    }

  }
</script>
<style lang="scss">
  @import "../../src/styles/index.scss";

  .go-top {
    position: fixed;
    bottom: px2rem(80);
    right: px2rem(30);
    width: px2rem(163);
    height: px2rem(163);
    cursor: pointer;
    z-index: 99;
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.0/dist/images/home/top.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .go-top:hover {
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.0/dist/images/home/top-hover.png');
  }
</style>