import Vue from 'vue'
<template>
<div class = "Main">
  <MainBanner>
  </MainBanner>
  <MainStep/>
  <MainBounty/>
  <MainResource/>
  <Footer/>
</div>
</template>

<script >
import Vue from 'vue'
import Header from '@/components/header.vue'; // 通用头部导航
import MainBanner from './MainBanner.vue'
import MainStep from './MainStep.vue'
import MainBounty from './MainBounty.vue'
import MainResource from './MainResource.vue'
import Footer from '@/components/footer.vue'; // 通用头部导航
Vue.component('Header', Header)
Vue.component('MainBanner', MainBanner)
Vue.component('MainStep', MainStep)
Vue.component('MainBounty', MainBounty) 
Vue.component('MainResource', MainResource)
Vue.component('Footer', Footer)
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Main {
  width:100%;
  background-color:#ffffff;
  font-family:PingFangSC-Regular,PingFang SC;
  min-width: 1100px;
}

</style>
