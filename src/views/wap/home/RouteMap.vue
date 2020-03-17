<!--
 * @Description: 路线图
 * @Date: 2019-09-25 21:59:29
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 17:31:23
 -->
<template>
  <div class="RouteMap">
    <div class="RouteMap-title">{{$t('routeMap.title')}}</div>
    <div class="RouteMap-centent">
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
  @import "../../../styles/index.scss";

  .RouteMap {
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    padding: px2rem(100) 0;
    text-align: center;

    &-title {
      height: px2rem(56);
      font-size: px2rem(49);
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(56);
      margin-bottom: px2rem(80);
    }

    &-centent {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.1/dist/images-wap/home/Map.png');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position-y: 50%;
      display: flex;
      justify-content: space-around;

      &-center {
        li {
          display: block;
        }

        &-d {
          width: px2rem(10);
          height: px2rem(10);
          background: rgba(237, 238, 242, 1);
          border-radius: 50%;
          margin: px2rem(20) auto;
        }

        &-l {
          width: px2rem(2);
          height: px2rem(100);
          background: rgba(237, 238, 242, 1);
          position: relative;
          margin: 0 px2rem(4);
        }

      }


      &-bottom,
      &-top {
        display: flex;
        flex-direction: column;

        li {
          display: block;
          width: px2rem(310);
        }

        .RouteMap-centent-y {
          font-size: px2rem(32);
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(23, 33, 60, 1);
          margin-bottom: px2rem(20);
        }

        .RouteMap-centent-m {
          width: px2rem(310);
          font-size: px2rem(28);
          font-weight: 400;
          color: rgba(131, 134, 144, 1);
        }
      }

      &-top {
        justify-content: space-around;

        li {
          text-align: right;
        }
      }

      &-bottom {
        justify-content: space-between;

        li {
          text-align: left;
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
          top: 0px;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(221, 22, 62, 1);
          /* background-size: 60px 30px; */
          text-align: center;
          animation: load 5s linear infinite;
        }

        @keyframes load {
          0% {
            height: 0%;
          }

          100% {
            height: 100%;
          }
        }
      }
    }
  }
</style>