<!--
 * @Description: 移动端-技术特性
 * @Date: 2019-09-25 20:44:22
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 17:30:33
 -->
<template>
  <div class="Technical">
    <div class="Technical-title">
      {{$t('Technical.title')}}
    </div>
    <div class="Technical-centent">
      <ul>
        <li>
          <div class="Technical-centent-img One"></div>
          <div class="Technical-centent-title">{{$t('Technical.titleO')}}</div>
          <div class="Technical-centent-message">
            {{$t('Technical.messageO')}}
          </div>
        </li>
        <li>
          <div class="Technical-centent-img Two"></div>
          <div class="Technical-centent-title">{{$t('Technical.titleT')}}</div>
          <div class="Technical-centent-message">
            {{$t('Technical.messageT')}}
          </div>
        </li>
        <li>
          <div class="Technical-centent-img Three"></div>
          <div class="Technical-centent-title">{{$t('Technical.titleS')}}</div>
          <div class="Technical-centent-message">
            {{$t('Technical.messageS')}}
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/Development" style="color:#fff;">
      <div class="Technical-btn">
        {{$t('Technical.more')}}
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Technical extends Vue {}
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .Technical {
    box-sizing: border-box;
    text-align: center;
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images-wap/home/Technical.png');
    background-size: 100%;
    padding: px2rem(100) 0;

    .Technical-title {
      width: px2rem(600);
      height: px2rem(56);
      font-size: px2rem(40);
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: px2rem(56);
      margin: 0 auto;
      margin-bottom: px2rem(100);
    }

    .Technical-centent li {
      display: block;
      margin-bottom: px2rem(100);

      .Technical-centent-img {
        width: px2rem(63);
        height: px2rem(63);
        margin: 0 auto;
        background-size: 100%;
      }

      .One {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/technical/X.png');
      }

      .Two {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/technical/G.png');
      }

      .Three {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images/technical/K.png');
      }

      .Technical-centent-title {
        height: px2rem(45);
        font-size: px2rem(32);
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: px2rem(32);
        margin-top: px2rem(50);
        margin-bottom: px2rem(20);
      }

      .Technical-centent-message {
        width: px2rem(620);
        font-size: px2rem(28);
        font-weight: normal;
        color: rgba(255, 255, 255, .7);
        line-height: px2rem(44);
        text-align: center;
        margin: 0 auto;
      }
    }

    .Technical-btn {
      width: px2rem(300);
      height: px2rem(80);
      font-size: px2rem(30);
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-radius: px2rem(4);
      border: 1px solid rgba(255, 255, 255, 1);
      margin: 0 auto;
      line-height: px2rem(80);
    }
  }
</style>