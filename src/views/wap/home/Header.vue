<!--
 * @Description: 移动端-首屏
 * @Date: 2019-09-24 09:52:47
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 17:14:22
 -->
<template>
  <div class="homeHeader">
    <canvas id='canvas'></canvas>
    <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.1/dist/images-wap/home/Moon.png" class="homeHeader-img">
    <div class="homeHeader-logo"></div>
    <div class="homeHeader-centent">
      <div class="homeHeader-content-title">NetCloth</div>
      <div class="homeHeader-centent-describe">{{$t('home.describe')}}</div>
      <div class="homeHeader-centent-btn">
        <div class="homeHeader-centent-btn-book">{{$t('home.whitepaper')}}</div>
        <div class="homeHeader-centent-btn-Onepaper">Onepaper</div>
      </div>
      <div class="homeHeader-centent-more">
        <p class="homeHeader-centent-more-btn"><span class="homeHeader-centent-more-btn-dot"></span></p>
        <p class="homeHeader-centent-more-text">下拉查看更多</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })

  export default class HomeHeader extends Vue {
    private mounted() {
      this.EachList();
    }
    private EachList() {
      var can = document.getElementById('canvas');
      var cxt = can.getContext('2d');

      var w = can.width = window.innerWidth;
      var h = can.height = window.innerHeight;

      const num = 150; // 生成点的个数
      const data = []; // 定义一个数组，准备用来存坐标
      const move = {};
      const liuXY = [];
      let k = -1;
      const range = Math.atan(k);
      const length = 200;

      // 生成num个点，并且存储初始坐标
      for (let i = 0; i < num; i++) {
        data[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 8 + 3
        };
        Cricle(data[i].x, data[i].y, data[i].r);
      };

      ! function draw() {
        cxt.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          data[i].r += Math.random() * 2 - 1;
          data[i].r = Math.max(0, data[i].r);
          data[i].r = Math.min(12, data[i].r);
          Cricle(data[i].x, data[i].y, data[i].r);
        };
        if (liuXY.length) {
          for (const i in liuXY) {
            liuXY[i].cX -= 10;
            liuX(liuXY[i].cX, liuXY[i].y, liuXY[i].x);
            if (liuXY[i].cX < 0 || getY(liuXY[i].cX, liuXY[i].y, liuXY[i].x) > h) {
              liuXY.splice(i, 1);
            }
          }
        }

        if (Math.random() > 0.98) {
          let a = Math.random() * (w - 400) + 400;
          liuXY.push({
            x: a,
            y: 0,
            cX: a
          });
        };
        window.requestAnimationFrame(draw);
      }();

      function liuX(x: any, sX: any, sY: any) {
        cxt.save();
        var y = getY(x, sY, sX);
        var r = 15;
        var rad = cxt.createRadialGradient(x, y, 0, x, y, r);
        rad.addColorStop(0, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
        rad.addColorStop(1, 'rgba(255,255,255,0)');
        cxt.fillStyle = rad;
        cxt.beginPath();
        cxt.arc(x, y, r, 0, 2 * Math.PI, true);
        cxt.closePath();
        cxt.fill();
        cxt.restore();

        const wX = x + (Math.cos(range) * length);
        const wY = y + (Math.sin(range) * length);

        const x1 = x + 3;
        const y1 = y;
        const x2 = x;
        const y2 = y - 3;

        cxt.save();
        var rad2 = cxt.createRadialGradient(x, y, 0, x, y, length);
        rad2.addColorStop(0, 'rgba(255,255,255,0.1)');
        rad2.addColorStop(1, 'rgba(255,255,255,0)');
        cxt.fillStyle = rad2;
        cxt.beginPath();
        cxt.moveTo(x1, y1);
        cxt.lineTo(x2, y2);
        cxt.lineTo(wX, wY);
        cxt.closePath();
        cxt.fill();
        cxt.restore();
      };

      function getY(x: any, startY: any, startX: any) {
        return k * x + startY - k * startX;
      };

      // 画点
      function Cricle(x: any, y: any, r: any) {
        cxt.save();
        var rad = cxt.createRadialGradient(x, y, 0, x, y, r);
        rad.addColorStop(0, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
        rad.addColorStop(1, 'rgba(255,255,255,0)');
        cxt.fillStyle = rad;
        cxt.beginPath();
        cxt.arc(x, y, r, 0, 2 * Math.PI, true);
        cxt.closePath();
        cxt.fill();
        cxt.restore();
      };
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .homeHeader {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    color: #ffffff;
    background: rgba(14, 19, 32, 1);
    position: relative;

    .homeHeader-img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    .homeHeader-logo {
      width: px2rem(133);
      height: px2rem(100);
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.1/dist/images-wap/home/logo.png');
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      bottom: px2rem(813);
      left: 50%;
      transform: translateX(-50%);
    }

    .homeHeader-centent {
      width: 100%;
      height: px2rem(672);
      text-align: center;
      position: absolute;
      bottom: px2rem(96);

      .homeHeader-content-title {
        font-size: px2rem(56);
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: px2rem(67);
      }

      .homeHeader-centent-describe {
        height: px2rem(42);
        font-size: px2rem(30);
        font-weight: 300;
        color: rgba(255, 255, 255, 0.7);
        line-height: px2rem(42);
        margin-top: px2rem(25);
      }

      .homeHeader-centent-btn {
        margin-top: px2rem(100);

        div {
          display: inline-block;
          width: px2rem(260);
          height: px2rem(80);
          border-radius: px2rem(4);
          line-height: px2rem(80);
        }

        .homeHeader-centent-btn-book {
          margin-right: px2rem(20);
        }

        .homeHeader-centent-btn-Onepaper,
        .homeHeader-centent-btn-book {
          font-size: px2rem(30);
          border: 1px solid rgba(255, 255, 255, 1);
        }
      }

      .homeHeader-centent-more {
        margin-top: px2rem(315);

        .homeHeader-centent-more-btn {
          width: px2rem(24);
          height: px2rem(40);
          border-radius: px2rem(12);
          border: px2rem(2) solid rgba(255, 255, 255, 1);
          margin: 0 auto;

          span {
            display: block;
            width: px2rem(4);
            height: px2rem(4);
            border-radius: px2rem(12);
            background: #fff;
            position: relative;
            top: 25%;
            left: 40%;
            margin-top: px2rem(2.5);
            margin-left: -px2rem(1);
            animation: dong 1.1s infinite;
          }
        }

        .homeHeader-centent-more-text {
          font-size: px2rem(22);
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: px2rem(32);
          letter-spacing: px2rem(1);
          margin-top: px2rem(20);
        }
      }
    }
  }

  /* 背景动画，和下来更多动画 */
  @keyframes dong {
    0% {
      transform: translate(0px, 0px);
    }

    20% {
      transform: translate(0px, -3px);
    }

    40% {
      transform: translate(0px, 0px);
    }

    80% {
      transform: translate(0px, 3px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  #canvas {
    position: absolute;
  }
</style>