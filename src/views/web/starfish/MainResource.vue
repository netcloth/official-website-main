import Vue from 'vue'
<template>
    <div class="MainResource">
      <div class="title">{{$t("MainResource.title")}}</div>
      <div class="content clearfix">
        <div class="item1">
          <a class="item_image1" href="https://github.com/netcloth" target="_blank"></a>
          <div class="item_text">{{$t("MainResource.text1")}}</div>
        </div>
        <div class="item2" >
          <a class="item_image2" :href="'https://docs.netcloth.org/'+(GetLanguage()=='en'?'en':'')" target="_blank"></a>
          <div class="item_text">{{$t("MainResource.text2")}}</div>
        </div>
        <div class="item3">
          <div class="item_image3"></div>
          <div class="item_text">{{$t("MainResource.text3")}}</div>
        </div>
        <div class="item4">
          <div class="item_image4"></div>
          <div class="item_text">{{$t("MainResource.text4")}}</div>
        </div>
      </div>
    </div>
  
</template>

<script>

import Vue from 'vue'
export default {
  name: 'MainResource',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    go:function(url){
      window.location.href=url;
    },
    GetLanguage:function(){
      return localStorage.getItem("language");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../../../styles/li.scss";
.MainRuntimeDev{
  background:#ffffff;
}

.title{
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  font-size:30px;
  font-weight:800;
  color:#17213C;
}


.content{
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  margin: 0 auto;
  padding-bottom:100px;
}
.item{
  float:left;
  width:275px;
}
.item1{
  @extend .item;
}
.item2{
  @extend .item;
}
.item3{
  @extend .item;
}
.item4{
  @extend .item;
}
.item_image{
  width:101px;
  height:101px;
  margin:0 auto;
  display:block;
}
.item_image1{
  @extend .item_image;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.1/dist/images/starfish/resource_image1.png");
  background-size:100% 100%;
  cursor: pointer;
}
.item_image2{
  @extend .item_image;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.1/dist/images/starfish/resource_image2.png");
  background-size:100% 100%;
  cursor: pointer;
}
.item_image3{
  @extend .item_image;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.1/dist/images/starfish/resource_image3.png");
  background-size:100% 100%;
}
.item_image4{
  @extend .item_image;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.1/dist/images/starfish/resource_image4.png");
  background-size:100% 100%;
  
}

.item_text{
  
  text-align: center;
  font-size:18px;
  color:#17213C;
  margin-top:15px;
}

</style>
