<!--
 * @Description: 移动端-NetCloth网络拥有的特点与优势
 * @Date: 2019-09-25 20:44:22
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 14:46:48
 -->
<template>
  <div class="Advantage">
    <div class="Advantage-title">
      {{$t('Advantage.title')}}
    </div>
    <div class="Advantage-centent">
      <ul>
        <li>
          <div class="Advantage-centent-img One"></div>
          <div class="Advantage-centent-title">{{$t('Advantage.titleO')}}</div>
          <div class="Advantage-centent-message">
            {{$t('Advantage.messageO')}}
          </div>
        </li>
        <li>
          <div class="Advantage-centent-img Two"></div>
          <div class="Advantage-centent-title">{{$t('Advantage.titleT')}}</div>
          <div class="Advantage-centent-message">
            {{$t('Advantage.messageT')}}
          </div>
        </li>
        <li>
          <div class="Advantage-centent-img Three"></div>
          <div class="Advantage-centent-title">{{$t('Advantage.titleS')}}</div>
          <div class="Advantage-centent-message">
            {{$t('Advantage.messageS')}}
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="Advantage-centent-img Four"></div>
          <div class="Advantage-centent-title">{{$t('Advantage.titleF')}}</div>
          <div class="Advantage-centent-message">
            {{$t('Advantage.messageF')}}
          </div>
        </li>
        <li>
          <div class="Advantage-centent-img Five"></div>
          <div class="Advantage-centent-title">{{$t('Advantage.titleV')}}</div>
          <div class="Advantage-centent-message">
            {{$t('Advantage.messageV')}}
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/ecosystem" style="color:#fff;">
      <div class="Advantage-btn">
        {{$t('Advantage.more')}}
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Advantage extends Vue {}
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .Advantage {
    box-sizing: border-box;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    padding: px2rem(100) 0;
    text-align: center;

    .Advantage-title {
      height: px2rem(56);
      font-size: px2rem(40);
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(56);
      padding: 0 px2rem(40);
      margin-bottom: px2rem(100);
    }

    .Advantage-centent li {
      display: block;
      margin-bottom: px2rem(100);

      .Advantage-centent-img {
        margin: 0 auto;
        background-size: 100%;
      }

      .One {
        width: px2rem(102);
        height: px2rem(95);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.8//dist/images/advantage/one.png');
      }

      .Two {
        width: px2rem(86);
        height: px2rem(86);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.8//dist/images/advantage/two.png');
      }

      .Three {
        width: px2rem(84);
        height: px2rem(95);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.8//dist/images/advantage/three.png');
      }

      .Four {
        width: px2rem(94);
        height: px2rem(95);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.8//dist/images/advantage/four.png');

      }

      .Five {
        width: px2rem(89);
        height: px2rem(102);
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.8//dist/images/advantage/five.png');
      }

      .Advantage-centent-title {
        height: px2rem(48);
        font-size: px2rem(32);
        font-weight: 400;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(48);
        margin-top: px2rem(50);
        margin-bottom: px2rem(20);
      }

      .Advantage-centent-message {
        width: px2rem(640);
        font-size: px2rem(28);
        font-weight: 300;
        color: rgba(131, 134, 144, 1);
        line-height: px2rem(44);
        margin: 0 auto;
      }
    }

    .Advantage-btn {
      width: px2rem(300);
      height: px2rem(80);
      font-size: px2rem(30);
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-radius: px2rem(4);
      line-height: px2rem(80);
      margin: 0 auto;
      background: rgba(221, 22, 62, 1);
    }
  }
</style>