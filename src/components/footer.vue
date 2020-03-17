import Vue from 'vue'
<template>
  <div class="Footer clearfix">
    <div class="content clearfix">
      <div class="foot_left left">
        <div class="logo"></div>
        <div class="left_2 clearfix">
          <a class="sublogo_1" href='https://medium.com/@NetCloth' target="_blank"></a>
          <a class="sublogo_2" href='https://twitter.com/NetCloth' target="_blank"></a>
          <a class="sublogo_3" href='https://github.com/netcloth' target="_blank"></a>
          <a class="sublogo_4" href="mailto:contact@netcloth.org"></a>
        </div>
      </div>
      <div class="left clearfix">
        <div class="col1">
          <div class="row1">{{$t("footer_new.item11")}}</div>
          <a class="row2"  href="https://chat-app.netcloth.org">{{$t("footer_new.item12")}}</a>
          <a class="row3" :href="GetLanguage()=='zh'?'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/docs/whitepaper_cn.pdf':'https://github.com/netcloth/whitepaper/blob/master/whitepaper.md'" target="_blank">{{$t("footer_new.item13")}}</a>
          <a class="row4"  target="_blank">{{$t("footer_new.item14")}}</a>
        </div>
        <div class="col2">
          <div class="row1">{{$t("footer_new.item21")}}</div>
          <router-link class="row2" to="Development" >{{$t("footer_new.item22")}}</router-link>
          <a class="row3" href="https://docs.netcloth.org">{{$t("footer_new.item23")}}</a>
          <a class="row4" href='https://github.com/netcloth'>{{$t("footer_new.item24")}}</a>
        </div>
        <div class="col3">
          <div class="row1">{{$t("footer_new.item31")}}</div>
          <div class="row2">{{$t("footer_new.item32")}}</div>
          <a class="row3" href="https://blog.netcloth.org">{{$t("footer_new.item33")}}</a>
          <div class="row4">{{$t("footer_new.item34")}}</div>
        </div>
        <div class="col4">
          <div class="row1">{{$t("footer_new.item41")}}</div>
          <div class="row2">{{$t("footer_new.item42")}}</div>
          <div class="row3">{{$t("footer_new.item43")}}</div>
          <div class="row4">{{$t("footer_new.item44")}}</div>
        </div>
        
      </div>
      <div class="col5">
        <div class="row1" style="text-align:center">{{$t("footer_new.item51")}}</div>
        <div class="clearfix">
          <div class="codebar right" v-bind:class="{codebar_en:(lang!='zh')}"></div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom">©2019 NetCloth</div>
  </div>
  
</template>

<script>
var _this = null;

export default {
  name: 'footer',
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
    go: function(url){
      window.location.href=url;
    },
    GetLanguage:function(){
      return localStorage.getItem('language')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../src/styles/index.scss";
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
.right{
    float:right
}
.Footer {
  width:100%;
  background-color:#0E1320;
  
}
.foot_left{
  float:left;
}
.content{
  width:1100px;
  margin: 0 auto;
  border-top:38px solid rgba(0,0,0,0);
}
.logo{
  width:166px;
  height:44px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/logo.png");
  background-size:100% 100%;
}
.left_2{
  margin-top:37px;
}
.sublogo{
  width:40px;
  height:40px;
  float:left;
  cursor: pointer;
  text-decoration:none;
}
.sublogo_1{
  @extend .sublogo;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/footer_sublogo_image1.png");
  background-size:100% 100%;
}
.sublogo_2{
  @extend .sublogo;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/footer_sublogo_image2.png");
  background-size:100% 100%;
  margin-left:24px;
}
.sublogo_3{
  @extend .sublogo;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/footer_sublogo_image3.png");
  background-size:100% 100%;
  margin-left:24px;
}
.sublogo_4{
  @extend .sublogo;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/footer_sublogo_image4.png");
  background-size:100% 100%;
  margin-left:24px;
}
.foot_right{
  float:right;
}
.col{
  color:#A8ACB3;
  float:left;
  //width:140px;
}
.col1{
  @extend .col;
  margin-left:100px;
}
.col2{
  @extend .col;
  margin-left:48px;
}
.col3{
  @extend .col;
  margin-left:48px;
}
.col4{
  @extend .col;
  margin-left:48px;
}
.col5{
  @extend .col;
  float: right;
}
.row{
  font-size:12px;
  color:#A8ACB3;
  display:block;
}
.row1{
  @extend .row;
  font-size:16px;
  margin-bottom:24px;
}
.row2{
  @extend .row;
  margin-top:12px;
  line-height: 17px;
}
.row3{
  @extend .row;
  margin-top:12px;
  line-height: 17px;
}
.row4{
  @extend .row;
  margin-top:12px;
  line-height: 17px;
}

.line{
  width:1100px;
  height:1px;
  background:#6C7078;
  margin:0 auto;
  margin-top:50px;
}
.bottom{
  color:#6C7078;
  font-size:12px;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  margin:0 auto;
  margin-top:19px;
}
.codebar{
  width:128px;
  height:128px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/community_cn.png");
  background-size:100% 100%;
}
.codebar_en{
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.4/dist/images/footer/community_en.png");
  background-size:100% 100%;
}
</style>
