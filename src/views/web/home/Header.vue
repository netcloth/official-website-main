<!--
 * @Description: 首屏
 * @Date: 2019-09-24 09:52:47
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-16 10:57:07
 -->
<template>
  <div class="homeHeader">
    <canvas id='canvas'></canvas>
    <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.2/dist/images/home/Moon.png" class="homeHeader-img">
    <div class="homeHeader-centent">
      <div class="homeHeader-logo"></div>
      <div class="homeHeader-content-title">NetCloth</div>
      <div class="homeHeader-centent-describe">{{$t('home.describe')}}</div>
      <div class="homeHeader-centent-btn">
        <div class="homeHeader-centent-btn-book" @click="GoUrl('paper')">{{$t('home.whitepaper')}}</div>
        <div class="homeHeader-centent-btn-Onepaper">Onepaper</div>
        <div class="homeHeader-centent-btn-Onepaper" @click="GoUrl('eco')">{{$t('home.eco')}}</div>
        <div class="homeHeader-centent-btn-APP" @click="GoApp()">NetCloth APP</div>
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
    private  GoApp(){
        window.location.href='https://chat-app.netcloth.org';
      
    }
    private GoUrl(url){
      if(url=="paper"){
        if(localStorage.getItem("language") == "zh"){
          window.open('https://github.com/netcloth/whitepaper/blob/master/whitepaper_cn.md');
        }else{
          window.open('https://github.com/netcloth/whitepaper/blob/master/whitepaper.md');
        }
      }if(url == "eco"){
        if(localStorage.getItem("language") == "zh"){
          window.open("https://github.com/netcloth/whitepaper/blob/master/EcologicalConstruction_cn.md");
        }else{
          window.open("https://github.com/netcloth/whitepaper/blob/master/EcologicalConstruction.md");
        }
      }
    }
    private EachList() {
      var can = document.getElementById('canvas');
      var cxt = can.getContext('2d');

      var w = can.width = window.innerWidth < 1100 ? 1100 : window.innerWidth;
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
          for (var i in liuXY) {
            liuXY[i].cX -= 10;
            liuX(liuXY[i].cX, liuXY[i].y, liuXY[i].x);
            if (liuXY[i].cX < 0 || getY(liuXY[i].cX, liuXY[i].y, liuXY[i].x) > h) {
              liuXY.splice(i, 1);
            };
          };
        };
        if (Math.random() > 0.98) {
          var a = Math.random() * (w - 400) + 400;
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

        var wX = x + (Math.cos(range) * length);
        var wY = y + (Math.sin(range) * length);

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
  .homeHeader {
    box-sizing: border-box;
    height: 100vh;
    color: #ffffff;
    background: rgba(14, 19, 32, 1);
    position: relative;

    .homeHeader-img {
      height: 60vh;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .homeHeader-logo {
      width: 7vw;
      height: 134px;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.2/dist/images/home/logo.png');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 50% 100%;
      position: absolute;
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
    }

    .homeHeader-centent {
      width: 100%;
      height: 60vh;
      text-align: center;
      position: absolute;
      bottom: 0;

      .homeHeader-content-title {
        padding-top: 4.5vh;
        font-size: 5.5vh;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: 67px;
      }

      .homeHeader-centent-describe {
        height: 37px;
        font-size: 3vh;
        font-weight: 300;
        color: rgba(255, 255, 255, .7);
        line-height: 37px;
        /* letter-spacing: 5px; */
        margin-top: 2.5vh;
      }

      .homeHeader-centent-btn {
        margin-top: 8vh;

        div {
          display: inline-block;
          width: 200px;
          height: 50px;
          font-size: 20px;
          border-radius: 4px;
          line-height: 50px;
        }

        .homeHeader-centent-btn-book {
          
        }

        .homeHeader-centent-btn-Onepaper,
        .homeHeader-centent-btn-book,
        .homeHeader-centent-btn-APP {
          margin-right: 22px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 1);
        }
        .homeHeader-centent-btn-APP{
          background:#DD163E;
          border:none;
        }
      }

      .homeHeader-centent-more {
        margin-top: 17vh;

        .homeHeader-centent-more-btn {
          width: 20px;
          height: 32px;
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 1);
          position: relative;
          left: calc(50% - 10px);

          span {
            display: block;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: #fff;
            position: relative;
            top: 50%;
            left: 50%;
            margin-top: -2.5px;
            margin-left: -0.7px;
            animation: dong 1.1s linear infinite;
          }
        }

        .homeHeader-centent-more-text {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 10px;
          letter-spacing: 1px;
          margin-top: 15px;
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