<!--
 * @Description: 移动端-首页
 * @Date: 2019-09-22 14:15:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 17:34:10
 -->
<template>
  <div class="home">
    <Header />
    <HomeHeader />
    <iframe class="video" id="video" :src="$t('video.src')" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    <div class="video_right">
      <div class="video_right_title">{{$t("video.video_right_title")}}</div>
      <div class="video_right_discribe">{{$t("video.video_right_discribe")}}</div>
      <a class="video_right_btn" target="_blank" :href="$t('video.doc_src')">{{$t("video.video_right_btn")}}</a>
      <div style="width:1px;height:30px;"></div>
    </div>
    <DataIndustry />
    <Carousel />
    <Advantage />
    <Technical />
    <RouteMap />
    <MailBox />
    <div class="footer-index">
      <Footer />
    </div>
    <BackTop />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/header-wap.vue'; // 通用头部导航
  import HomeHeader from './Header.vue'; // 头部导航
  import DataIndustry from './DataIndustry.vue'; // 数据产业
  import Carousel from './Carousel.vue'; // 轮播
  import Advantage from './Advantage.vue'; // Advantage
  import Technical from './Technical.vue'; // Technical
  import RouteMap from './RouteMap.vue'; // RouteMap
  import MailBox from './MailBox.vue'; // 邮件订阅
  import Footer from '@/components/footer-wap.vue'; // 底部通用导航
  import BackTop from '@/components/back-top-wap.vue'; // 返回顶部

  @Component({
    components: {
      Header,
      HomeHeader,
      DataIndustry,
      Carousel,
      Advantage,
      Technical,
      MailBox,
      RouteMap,
      Footer,
      BackTop
    },
  })

  export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .home {
    min-height: 100vh;
    background: #000;
  }

  .footer-index {
    width: 100%;
    height: px2rem(1041);
    position: relative;
  }
  .clearfix {
    &::after {
        content:''; 
        display:block; 
        clear:both; 
    }
    zoom:1;
}
.left{
    float:left;
}
.video{
    width:100%;
    height:280px;
    margin-top:72px;
  }
  .video_right{
    background:rgb(249, 250, 253);
    width:100%;
  }
  .video_right_title{
    width:100%;
    text-align: center;
    font-size:20px;
    font-weight:500;
    color:rgba(23,33,60,1);
    line-height:45px;
    padding:30px 0;
  }
  .video_right_discribe{
    width:100%;
    text-align: center;
    font-size:16px;
    font-weight:400;
    color:rgba(131,134,144,1);
    line-height:28px;
    
  }
  .video_right_btn{
    display: block;
    font-size:18px;
    color:#ffffff;
    background:#dd163e;
    padding:13px;
    border-radius:4px;
    box-sizing: border-box;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    margin:30px auto;
  }
</style>