import Vue from 'vue'
<template>
  <div class="MainBanner" v-bind:class="{MainBannerEn:(lang!='zh')}">
    <Header/>
    <div class="BannerText">
      {{$t("header.banner_txt1")}}
    </div>

    <div class="BannerRule" v-on:click="OnClickRule()">
      {{$t("header.btn_rule")}}
    </div>
  </div>
  
</template>

<script>

import Vue from 'vue'
import Header from '@/components/header.vue'; // 通用头部导航
Vue.component('Header', Header)
var _this = null;
export default {
  name: 'MainBanner',
  data () {
    return {
      timmer:null,
      lang:'zh',
    }
  },
  created:function(){
    _this = this;
    this.timmer= setInterval(function(){
      _this.lang = localStorage.getItem('language');
    },300);
  },
  destroyed:function(){
    clearInterval(this.timmer);
  },
  methods:{
    OnClickRule:function(){
      this.$router.push({ path:'/starfish_rule'  })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../styles/li.scss";
.MainBanner{
  width:100%;
  height:700px;
  min-height:560px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.6/dist/images/starfish/main_banner.png");
  background-size: cover;
  background-position:center;
  padding-bottom:100px;
  min-width:1100px;
}
.MainBannerEn{
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.6/dist/images/starfish/main_banner_en.png");
  background-size: cover;
  background-position:center;

}
.BannerText{
  width:1110px;
  margin:0 auto;
  text-align: center;
  padding-top:480px;
  font-size:15px;
  line-height:24px;
  color:#ffffff;
}
.BannerRule{
  height:50px;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  margin:0 auto;
  text-align: center;
  margin-top:30px;
  line-height:50px;
  font-size:20px;
  padding: 0 60px;
  border-radius:4px;
  border: 1px solid #ffffff;
  color:#ffffff;
  cursor:pointer;
}
</style>
