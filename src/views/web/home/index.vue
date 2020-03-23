<!--
 * @Description: 首页
 * @Date: 2019-09-22 14:15:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-20 19:21:53
 -->
<template>
  <div class="home-pc">
    <Header />
    <HomeHeader />
    <div class="video_frame clearfix">
      <iframe class="video left" id="video" :src="$t('video.src')" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      <div class="video_right left">
        <div class="video_right_title">{{$t("video.video_right_title")}}</div>
        <div class="video_right_discribe">{{$t("video.video_right_discribe")}}</div>
        <a class="video_right_btn" target="_blank" :href="$t('video.doc_src')">{{$t("video.video_right_btn")}}</a>
      </div>
    </div>
    
    <DataIndustry />
    <Carousel />
    <Advantage />
    <Technical />
    <RouteMap />
    <MailBox />
    <div class="footer">
      <Footer />
    </div>
    <BackTop />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/header.vue'; // 通用头部导航
  import HomeHeader from './Header.vue'; // 头部导航
  import DataIndustry from './DataIndustry.vue'; // 数据产业
  import Carousel from './Carousel.vue'; // 轮播
  import Advantage from './Advantage.vue'; // Advantage
  import Technical from './Technical.vue'; // Technical
  import RouteMap from './RouteMap.vue'; // RouteMap
  import MailBox from './MailBox.vue'; // 邮件订阅
  import Footer from '@/components/footer.vue'; // 底部通用导航
  import BackTop from '@/components/back-top.vue'; // 返回顶部

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
  .home-pc {
    min-width: 1280px;
  }

  .footer {
    width: 100%;
    height: 265px;
    position: relative;
  }
  .video_frame{
    width:1200px;
    margin:0 auto;
    margin-top:120px;
  }
  
  .video{
    width:590px;
    height:360px;
    margin:0 auto;
    padding-left:50px;
  }
  .video_right{
    width:510px;
    padding-left:50px;
  }
  .video_right_title{
    font-size:32px;
    font-weight:500;
    color:rgba(23,33,60,1);
    line-height:45px;
    padding:30px 0;
  }
  .video_right_discribe{
    width:460px;
    font-size:16px;
    font-weight:400;
    color:rgba(131,134,144,1);
    line-height:28px;
    
  }
  .video_right_btn{
    display: inline-block;
    font-size:18px;
    color:#ffffff;
    background:#dd163e;
    padding:13px;
    border-radius:4px;
    box-sizing: border-box;
    margin-top:120px;
  }
</style>
