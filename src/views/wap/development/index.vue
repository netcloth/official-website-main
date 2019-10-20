<!--
 * @Description: 开发专区主页
 * @Date: 2019-09-26 14:37:42
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 17:45:30
 -->
<template>
  <div class="development">
    <Header :logoUrl='logoUrl' Pcolor='#17213C' />
    <devHome />
    <div class="footer">
      <Footer />
    </div>
    <BackTop />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header-wap.vue'; // 头部导航
import devHome from './Header.vue'; // 底部通用导航
import Footer from '@/components/footer-wap.vue'; // 底部通用导航
import BackTop from '@/components/back-top-wap.vue'; // 返回顶部

@Component({
  components: {
    Header,
    devHome,
    Footer,
    BackTop,
  },
})
export default class development extends Vue {
  private logoUrl = {
    imgSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images-wap/header/logo-red.png',
    menuSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images-wap/header/menu-red.png',
    menuCloseSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.2/dist/images-wap/header/menu-close-red.png',
  };
}
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .footer {
    width: 100%;
    height: px2rem(1041);
    position: relative;
  }
</style>