<!--
 * @Description: 邮件订阅
 * @Date: 2019-09-24 22:52:50
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-28 14:19:20
 -->
<template>
  <div class="MailBox">
    <div class="MailBox-title">{{$t('mail.Email')}}</div>
    <div class="MailBox-message">{{$t('mail.news')}}</div>
    <div class="MailBox-in">
      <div class="MailBox-in-input">{{$t('mail.input')}}</div>
      <div class="MailBox-in-btn">{{$t('mail.btn')}}</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class MailBox extends Vue {}
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .MailBox {
    box-sizing: border-box;
    background: rgba(249, 250, 253, 1);
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.6/dist/images-wap/home/mailbox.png');
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
    padding: px2rem(150) 0;

    &-title {
      height: px2rem(54);
      font-size: px2rem(40);
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(54);
    }

    &-message,
    &-in-input,
    &-in-btn {
      margin: 0 auto;
    }

    &-message {
      width: px2rem(580);
      font-size: px2rem(28);
      font-weight: 300;
      color: rgba(95, 97, 103, 1);
      margin-top: px2rem(15);
      line-height: px2rem(44);

    }



    &-in-input {
      width: px2rem(640);
      height: px2rem(100);
      border-radius: px2rem(4);
      border: 1px solid rgba(23, 33, 60, 1);
      font-size: px2rem(26);
      font-weight: 400;
      color: rgba(131, 134, 144, 1);
      text-align: left;
      padding: px2rem(32) px2rem(23);
      margin-top: px2rem(80);
    }

    &-in-btn {
      width: px2rem(640);
      height: px2rem(100);
      background: rgba(221, 22, 62, 1);
      border-radius: px2rem(4);
      font-size: px2rem(30);
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: px2rem(100);
      margin-top: px2rem(30);
    }
  }
</style>