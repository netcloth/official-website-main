<!--
 * @Description: NetCloth网络拥有的特点与优势
 * @Date: 2019-09-25 20:44:22
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 13:54:45
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
  .Advantage {
    box-sizing: border-box;
    text-align: center;
    height: 980px;
    background: rgba(255, 255, 255, 1);
    padding-top: 100px;

    .Advantage-title {
      height: 45px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: 45px;
      margin-bottom: 112px;
    }

    .Advantage-centent li:not(:last-child) {
      margin-right: 130px;
    }

    .Advantage-centent li {
      display: inline-block;
      margin-bottom: 90px;
      vertical-align: top;

      .Advantage-centent-img {
        background-size: 100%;
        margin: 0 auto;
      }

      .One {
        width: 75px;
        height: 70px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/advantage/one.png');
      }

      .Two {
        width: 71px;
        height: 71px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/advantage/two.png');
      }

      .Three {
        width: 62px;
        height: 70px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/advantage/three.png');
      }

      .Four {
        width: 69px;
        height: 70px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/advantage/four.png');
      }

      .Five {
        width: 66px;
        height: 75px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/advantage/five.png');
      }

      .Advantage-centent-title {
        height: 48px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(23, 33, 60, 1);
        line-height: 48px;
        margin-top: 9px;
      }

      .Advantage-centent-message {
        width: 320px;
        font-size: 15px;
        font-family: PingFangSC-Light, PingFangSC;
        font-weight: 300;
        color: rgba(131, 134, 144, 1);
        line-height: 25px;
      }
    }

    .Advantage-btn {
      width: 260px;
      height: 50px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 1);
      line-height: 50px;
      margin: 0 auto;
      background: rgba(221, 22, 62, 1);
    }

    .Advantage-btn:hover {
      background: #d30931;
    }
  }
</style>