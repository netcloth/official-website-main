<!--
 * @Description: 首页
 * @Date: 2019-09-22 14:15:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-15 13:52:40
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
    BackTop,
  },
})

export default class Home extends Vue {}
</script>
<style>
  body {
    min-width: 1280px;
  }
</style>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 265px;
    position: relative;
  }
</style>