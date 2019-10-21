<!--
 * @Description: 路线图
 * @Date: 2019-09-25 21:59:29
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 16:28:16
 -->
<template>
  <div class="RouteMap">
    <div class="RouteMap-centent">
      <div class="RouteMap-centent-title">{{$t('routeMap.title')}}</div>
      <ul class="RouteMap-centent-top">
        <li :class="{ 'selected': selectedIndex==1}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y2')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t2')}}</div>
        </li>
        <li :class="{ 'selected': selectedIndex==3}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y4')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t4')}}</div>
        </li>
        <li :class="{ 'selected': selectedIndex==5}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y6')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t6')}}</div>
        </li>
      </ul>
      <ul class="RouteMap-centent-center">
        <li :class="{ 'selected': selectedIndex==0}">
          <div class="RouteMap-centent-center-d"></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==1}">
          <div class="RouteMap-centent-center-d "></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==2}">
          <div class="RouteMap-centent-center-d"></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==3}">
          <div class="RouteMap-centent-center-d"></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==4}">
          <div class="RouteMap-centent-center-d"></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==5}">
          <div class="RouteMap-centent-center-d"></div>
          <div class="RouteMap-centent-center-l">
            <span></span>
          </div>
        </li>
        <li :class="{ 'selected': selectedIndex==6}">
          <div class="RouteMap-centent-center-d"></div>
        </li>
      </ul>
      <ul class="RouteMap-centent-bottom">
        <li :class="{ 'selected': selectedIndex==0}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y1')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t1')}}</div>
        </li>
        <li :class="{ 'selected': selectedIndex==2}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y3')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t3')}}</div>
        </li>
        <li :class="{ 'selected': selectedIndex==4}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y5')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t5')}}</div>
        </li>
        <li :class="{ 'selected': selectedIndex==6}">
          <div class="RouteMap-centent-y">{{$t('routeMap.y7')}}</div>
          <div class="RouteMap-centent-m">{{$t('routeMap.t7')}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class RouteMap extends Vue {
    private selectedIndex = 0;

    private mounted() {
      setInterval(() => {
        this.selectedIndex++;
        if (this.selectedIndex > 6) {
          this.selectedIndex = 0;
        }
      }, 5000);
    }
  }
</script>
<style lang="scss" scoped>
  .RouteMap {
    box-sizing: border-box;
    height: 800px;
    background: rgba(255, 255, 255, 1);
    padding-top: 111px;
    padding-bottom: 43px;

    .RouteMap-centent {
      width: 1099px;
      height: 646px;
      text-align: center;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.5/dist/images/routeMap/Map.png');
      margin: 0 auto;
      padding-top: 88px;

      .RouteMap-centent-title {
        height: 45px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 45px;
        margin-bottom: 105px;
      }

      ul {
        display: flex;
      }

      .RouteMap-centent-top {
        justify-content: space-around;
      }

      .RouteMap-centent-center {
        margin: 62px 0;
        justify-content: center;

        div {
          display: inline-block;
          vertical-align: middle;
        }

        .RouteMap-centent-center-d {
          width: 5px;
          height: 5px;
          background: rgba(23, 33, 60, 1);
          border-radius: 50%;
          margin: 0 25px;
        }

        .RouteMap-centent-center-l {
          width: 107px;
          height: 1px;
          background: rgba(23, 33, 60, 1);
          position: relative;
        }

      }

      .RouteMap-centent-bottom {
        justify-content: space-between;
      }

      li {
        display: inline-block;
        vertical-align: top;

        .RouteMap-centent-y {
          height: 29px;
          font-size: 24px;
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(23, 33, 60, 1);
          line-height: 29px;
          margin-bottom: 10px;
        }

        .RouteMap-centent-m {
          height: 22px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(131, 134, 144, 1);
          line-height: 22px;
        }
      }

      .selected {
        position: relative;

        div {
          color: rgba(221, 22, 62, 1);
        }

        .RouteMap-centent-center-d {
          background: rgba(221, 22, 62, 1);
        }

        span {
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(221, 22, 62, 1);
          background-size: 60px 30px;
          text-align: center;
          animation: load 5s linear infinite;
        }

        @keyframes load {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }
      }
    }
  }
</style>