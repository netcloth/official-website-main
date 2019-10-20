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
</style>