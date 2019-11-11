<!--
 * @Description: 技术特性
 * @Date: 2019-09-25 20:44:22
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-11 14:32:43
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
  .Technical {
    box-sizing: border-box;
    height: 667px;
    text-align: center;
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/technical/Technical.png');
    background-size: 100%;
    opacity: 0.9479000000000001;
    padding-top: 100px;

    .Technical-title {
      height: 45px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }

    .Technical-centent li:not(:last-child) {
      margin-right: 130px;
    }

    .Technical-centent li {
      display: inline-block;
      margin: 78px 0 30px 0;
      vertical-align: top;

      .Technical-centent-img {
        width: 42px;
        height: 42px;
        margin: 0 auto;
        background-size: 100%;
      }

      .One {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/technical/X.png');
      }

      .Two {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/technical/G.png');
      }

      .Three {
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/technical/k.png');
      }

      .Technical-centent-title {
        height: 28px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 28px;
        margin-top: 43px;
        margin-bottom: 20px;
      }

      .Technical-centent-message {
        width: 280px;
        height: 130px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(255, 255, 255, .7);
        line-height: 26px;
      }
    }

    .Technical-btn {
      width: 260px;
      height: 50px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 1);
      margin: 0 auto;
      line-height: 50px;
    }

    .Technical-btn:hover {
      border: 1px solid #dd163e;
      background: #dd163e;
    }
  }
</style>