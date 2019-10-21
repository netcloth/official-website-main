<!--
 * @Description: 生态发展
 * @Date: 2019-09-26 14:37:42
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-08 16:33:03
 -->
<template>
  <div class="Ecosystem">
    <Header />
    <EcosystemCentent />
    <div class="footer">
      <Footer />
    </div>
    <BackTop />
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/header.vue'; // 头部导航
  import EcosystemCentent from './ecosystem-centent.vue';
  import Footer from '@/components/footer.vue'; // 底部通用导航
  import BackTop from '@/components/back-top.vue'; // 返回顶部

  @Component({
    components: {
      Header,
      EcosystemCentent,
      Footer,
      BackTop,
    }
  })
  export default class Ecosystem extends Vue {}
</script>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 265px;
    position: relative;
  }
</style>