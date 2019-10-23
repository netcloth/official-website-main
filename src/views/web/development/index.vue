<!--
 * @Description: 开发专区主页
 * @Date: 2019-09-26 14:37:42
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 14:15:16
 -->
<template>
  <div class="development">
    <Header imgSrc='https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/development/logo-red.png' Pcolor='#17213C' />
    <devHome />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/header.vue'; // 头部导航
  import devHome from './Header.vue'; // 底部通用导航
  import Footer from '@/components/footer.vue'; // 底部通用导航
  @Component({
    components: {
      Header,
      devHome,
      Footer,
    },
  })
  export default class development extends Vue {}
</script>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 265px;
    position: relative;
  }
</style>