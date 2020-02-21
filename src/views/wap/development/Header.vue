<!--
 * @Description: 开发专区-头部
 * @Date: 2019-09-24 09:52:47
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-13 17:27:29
 -->
<template>
  <div class="devHeader">
    <div class="devHeader-bg">
      <div class="devHeader-title">{{$t('development.title')}}</div>
    </div>
    <div class="devHeader-centent">
      <div class="devHeader-centent-left">
        <div class="devHeader-centent-header"></div>
        <div class="devHeader-centent-title">{{$t('development.leftTitle')}}</div>
        <div class="devHeader-centent-message">{{$t('development.leftMessage')}}</div>
        <div class="devHeader-centent-btn">{{$t('development.leftBtn')}}</div>
      </div>
      <div class="devHeader-centent-right-o">
        <div class="devHeader-centent-header"></div>
        <div class="devHeader-centent-title">{{$t('development.rightTitleO')}}</div>
        <div class="devHeader-centent-input">
          <div class="devHeader-centent-input-t">{{$t('development.rightMessageO')}}</div>
          <div class="devHeader-centent-input-j"></div>
        </div>
      </div>
      <div class="devHeader-centent-right-t">
        <div class="devHeader-centent-header"></div>
        <div class="devHeader-centent-title">{{$t('development.rightTitleT')}}</div>
        <div class="devHeader-centent-input" @click='GoRouter("github")'>
          <div class="devHeader-centent-input-t">{{$t('development.rightMessageT')}}</div>
          <div class="devHeader-centent-input-j"></div>
        </div>
        <div class="devHeader-centent-input inputT" @click='GoRouter("Chain")'>
          <div class="devHeader-centent-input-t">{{$t('development.rightMessageS')}}</div>
          <div class="devHeader-centent-input-j"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })

  export default class devHeader extends Vue {
    private GoRouter(val) {
      if (val == 'github') {
        window.open('https://github.com/NetCloth')
      }
      if (val == 'Chain') {
        window.open('https://github.com/NetCloth/netcloth-chain')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .devHeader {
    box-sizing: border-box;

    &-bg {
      box-sizing: border-box;
      width: 100%;
      height: px2rem(450);
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.3/dist/images-wap/development/dev-header.png');
      background-size: 100%;
      padding-top: px2rem(213);
    }

    &-title {
      height: px2rem(67);
      font-size: px2rem(48);
      font-weight: 600;
      color: rgba(23, 33, 60, 1);
      margin-left: px2rem(70);

    }

    &-centent {
      padding-bottom: px2rem(100);
      margin: 0 auto;

      &-header {
        width: px2rem(88);
        height: px2rem(23);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.3/dist/images-wap/development/line-red.png');
        background-size: 100%;
      }

      &-left,
      &-right-o,
      &-right-t {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 30px 2px rgba(232, 234, 240, 0.75);
        border-radius: px2rem(10);
        margin: 0 auto;
        padding: 0 px2rem(40);
      }

      &-left {
        width: px2rem(690);
        height: px2rem(570);
        margin-top: - px2rem(40);
      }

      &-right-o {
        width: px2rem(690);
        height: px2rem(350);
        margin-top: px2rem(30);
      }

      &-right-t {
        width: px2rem(690);
        height: px2rem(470);
        margin-top: px2rem(30);
      }

      &-title {
        height: px2rem(50);
        font-size: px2rem(36);
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(50);
        margin-top: px2rem(80);
      }

      &-message {
        width: px2rem(610);
        font-size: px2rem(28);
        font-weight: 400;
        color: rgba(131, 134, 144, 1);
        line-height: px2rem(48);
        margin-top: px2rem(30);
      }

      &-btn {
        width: px2rem(300);
        height: px2rem(80);
        background: rgba(240, 241, 245, 1);
        border-radius: px2rem(6);
        font-size: px2rem(30);
        font-weight: 400;
        color: rgba(131, 134, 144, 1);
        line-height: px2rem(80);
        text-align: center;
        cursor: pointer;
        margin-top: px2rem(106);
      }

      &-input {
        width: px2rem(610);
        height: px2rem(100);
        border-radius: px2rem(4);
        border: 1px solid rgba(240, 241, 245, 1);
        font-weight: 400;
        padding: px2rem(35) px2rem(30);
        margin-top: px2rem(40);

        &-t {
          float: left;
          width: px2rem(430);
          font-size: px2rem(30);
          font-weight: 400;
          color: rgba(131, 134, 144, 1);
        }

        &-j {
          float: right;
          width: px2rem(32);
          height: px2rem(26);
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.3/dist/images-wap/development/golook.png');
          background-size: 100%;
        }
      }

      .inputT {
        margin-top: px2rem(20);
      }
    }
  }
</style>