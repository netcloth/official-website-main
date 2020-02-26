import Vue from 'vue'
<template>
<div class = "Rule">
<div class="banner">
  <Header/>
  <div class="title">{{$t("rule.title")}}</div>
  <div class="subtitle1">{{$t("rule.subtitle1")}}</div>
  <div class="subtitle2">{{$t("rule.subtitle2")}}</div>
</div>
<div class="condition">
  <div class="condition_title">{{$t("rule.condition_title")}}</div>
  <div class="condition_contain clearfix">
    <div class="condition_left left">
      <div class="condition_left_title">{{$t("rule.condition_left_title")}}</div>
      <div class="condition_left1">{{$t("rule.condition_left1")}}</div>
      <div class="condition_left2">{{$t("rule.condition_left2")}}</div>
      <div class="condition_left3">{{$t("rule.condition_left3")}}</div>
      <div class="condition_left4">{{$t("rule.condition_left4")}}</div>
    </div>
    <div class="condition_left right">
      <div class="condition_right_title">{{$t("rule.condition_right_title")}}</div>
      <div class="condition_right1">{{$t("rule.condition_right1")}}</div>
      <div class="condition_right2">{{$t("rule.condition_right2")}}</div>
      <div class="condition_right3">{{$t("rule.condition_right3")}}</div>
      <div class="condition_right4">{{$t("rule.condition_right4")}}</div>
      <div class="condition_right5">{{$t("rule.condition_right5")}}</div>
      <div class="condition_right6">{{$t("rule.condition_right6")}}<span style="color:#DD163E">contact@netcloth.org</span></div>
      <div class="condition_right7">{{$t("rule.condition_right7")}}</div>
    </div>
  </div>
</div>
<div class="rule">
  <div class="rule_title">{{$t("rule.rule_title")}}</div>
  <div class="rule_row1 clearfix">
    <div class="rule_row1_left clearfix left">
      <div class="rule_row1_left1 left">{{$t("rule.rule_row1_left1")}}</div>
      <div class="rule_row1_left2 left">{{$t("rule.rule_row1_left2")}}</div>
      <div class="rule_row1_left3 left">{{$t("rule.rule_row1_left3")}}</div>
    </div>
    <div class="rule_row1_right right clearfix">
      <div class="rule_row1_right1 left">{{$t("rule.rule_row1_right1")}}</div>
      <div class="rule_row1_right2 left">{{$t("rule.rule_row1_right2")}}</div>
      <div class="rule_row1_right3 left">{{$t("rule.rule_row1_right3")}}</div>
    </div>
  </div>
  <div class="rule_row2 clearfix">
    <div class="rule_row2_left left">
      <div class="rule_row2_left_title">{{$t("rule.rule_row2_left_title")}}</div>
      <div class="rule_row2_left1">{{$t("rule.rule_row2_left1")}}</div>
      <div class="rule_row2_left2">{{$t("rule.rule_row2_left2")}}</div>
      <div class="rule_row2_left3">{{$t("rule.rule_row2_left3")}}</div>
      <div class="rule_row2_left4">{{$t("rule.rule_row2_left4")}}</div>
      <div class="rule_row2_left5">{{$t("rule.rule_row2_left5")}}</div>
      <a class="rule_row2_left6" href="https://explorer.netcloth.org/validators" target="_blank">{{$t("rule.rule_row2_left6")}}</a>
    </div>
    <div class="rule_row2_right right">
      <div class="rule_row2_right_title">{{$t("rule.rule_row2_right_title")}}</div>
      <div class="rule_row2_right1">{{$t("rule.rule_row2_right1")}}</div>
      <div class="rule_row2_right2">{{$t("rule.rule_row2_right2")}}</div>
      <div class="rule_row2_right3">{{$t("rule.rule_row2_right3")}}</div>
      <div class="rule_row2_right4">{{$t("rule.rule_row2_right4")}}</div>
    </div>
  </div>
</div>
<div class="rule_describe">
  <div class="rule_describe_title">{{$t("rule.rule_describe_title")}}</div>
  <div class="rule_describe1">{{$t("rule.rule_describe1")}}</div>
  <div class="rule_describe2">{{$t("rule.rule_describe2")}}</div>
  <div class="rule_describe3">{{$t("rule.rule_describe3")}}</div>
  <div class="rule_describe4">{{$t("rule.rule_describe4")}}</div>
  <div class="rule_describe5">{{$t("rule.rule_describe5")}}</div>
</div>
<Footer/>
</div>
</template>

<script >
import Vue from 'vue'
import Header from '@/components/header.vue'; // 通用头部导航
import Footer from '@/components/footer.vue'; // 通用头部导航
Vue.component('Header', Header)
Vue.component('Footer', Footer)
export default {
  name: 'Rule',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../styles/li.scss";
.Rule {
  width:100%;
  background-color:#ffffff;
  font-family:PingFangSC-Regular,PingFang SC;
  min-width: 1100px;
}
.banner{
  width:100%;
  height:500px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.0/dist/images/starfish/rule_banner.png");
  background-size: cover;
  background-position:center;
  min-width:1100px;
}
.title{
  font-size:44px;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:62px;
  padding-top:150px;
  text-align:center;
}
.subtitle1{
  font-size:15px;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:21px;
  text-align:center;
  width:1110px;
  margin: 0 auto;
  margin-top:20px;
}
.subtitle2{
  @extend .subtitle1;
}

.condition{
  width:1100px;
  margin:0 auto;
}
.condition_title{
  color:#17213C;
  font-size:30px;
  line-height: 42px;
  padding-top:60px;
  padding-bottom: 50px;
  text-align: center;
  font-weight: 600;
}
.condition_contain{
  padding-bottom: 80px;
}
.condition_left{
  width:535px;
  height:420px;
  background:rgba(249,250,253,1);
  padding: 0 30px;
  box-sizing: border-box;
}
.condition_left_title{
  font-size:24px;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height:33px;
  text-align: center;
  padding-top:30px;
  padding-bottom:30px;
}

.condition_line{
  font-size:16px;
  line-height: 20px;
  color:#575960;
}
.condition_left1{
  @extend .condition_line;
}
.condition_left2{
  @extend .condition_line;
  padding-top:15px;
}
.condition_left3{
  @extend .condition_line;
  padding-top:15px;
}
.condition_left4{
  @extend .condition_line;
  padding-top:30px;
  color:#DD163E;
}

.condition_right_title{
  @extend .condition_left_title;
}
.condition_right1{
  @extend .condition_line;
}
.condition_right2{
  @extend .condition_line;
  padding-top:15px;
}
.condition_right3{
  @extend .condition_line;
  padding-top:15px;
}
.condition_right4{
  @extend .condition_line;
  padding-top:15px;
}
.condition_right5{
  @extend .condition_line;
  padding-top:15px;
}
.condition_right6{
  @extend .condition_line;
  padding-top:15px;
}
.condition_right7{
  @extend .condition_line;
  padding-top:15px;
}

.rule{
  background:#F9FAFD;
  padding:60px 0;
}
.rule_title{
  font-size:30px;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height:42px;
  text-align: center;
  padding-bottom: 70px;
}
.rule_row1{
  width: 1100px;
  background:#ffffff;
  margin:0 auto;
  padding:21px 40px;
  border-radius:10px;
  box-shadow:0px 2px 15px 0px rgba(23,33,60,0.1);
  box-sizing: border-box;
}
.rule_row1_left{}
.rule_row1_left1{
  width:68px;
  height:70px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.0/dist/images/starfish/boundy_icon.png");
  background-size:100% 100%;
}
.rule_row1_left2{
  font-size:14px;
  font-weight:400;
  color:rgba(131,134,144,1);
  line-height: 70px;
  margin-left:45px;
}
.rule_row1_left3{
  font-size:28px;
  font-family:DIN-Medium,DIN;
  font-weight:600;
  color:rgba(23,33,60,1);
  margin-left:16px;
  line-height: 70px;
}

.rule_row1_right{}
.rule_row1_right1{
  font-size:14px;
  font-weight:400;
  color:rgba(131,134,144,1);
  line-height: 70px;
}
.rule_row1_right2{
  font-size:28px;
  font-family:DIN-Medium,DIN;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height: 70px;
  margin-left:16px;
}
.rule_row1_right3{
  font-size:18px;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height:70px;
  margin-left:16px;
}

.rule_row2{
  width:1100px;
  margin:0 auto;
  margin-top:30px;
  font-size:16px;
  color:rgba(87,89,96,1);
}
.rule_row2_left{
  width:535px;
  height:438px;
  background:rgba(255,255,255,1);
  border-radius:10px;
  padding:30px;
  box-sizing: border-box;
}
.rule_row2_left_title{
  font-size:24px;
  font-weight:6500;
  color:rgba(23,33,60,1);
  text-align: center;
}
.rule_row2_item{
  margin-top:15px;
}
.rule_row2_left1{
  @extend .rule_row2_item;
  margin-top:30px;
}
.rule_row2_left2{
  @extend .rule_row2_item;
}
.rule_row2_left3{
  @extend .rule_row2_item;
}
.rule_row2_left4{
  @extend .rule_row2_item;
  color:#DD163E;
}
.rule_row2_left5{
  @extend .rule_row2_item;
  color:#DD163E;
}
.rule_row2_left6{
  width:fit-content;
  height:40px;
  line-height: 40px;
  background:rgba(221,22,62,1);
  border-radius:6px;
  color:#ffffff;
  font-size:16px;
  padding:0 34px;
  margin:0 auto;
  margin-top:30px;
  display:block;
  
}
.rule_row2_right{
  @extend .rule_row2_left;
}
.rule_row2_right_title{
  @extend .rule_row2_left_title;
}
.rule_row2_right1{
  @extend .rule_row2_item;
  margin-top:30px;
}
.rule_row2_right2{
  @extend .rule_row2_item;
}
.rule_row2_right3{
  @extend .rule_row2_item;
}
.rule_row2_right4{
  @extend .rule_row2_item;
  color:#DD163E;
}

.rule_describe{
  background:#ffffff;
  padding: 60px 0;
}
.rule_describe_title{
  font-size:30px;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height:42px;
  text-align: center;
}
.rule_describe_item{
  margin: 0 auto;
  margin-top:15px;
  font-size:16px;
  color:rgba(87,89,96,1);
  width:1100px;
}
.rule_describe1{
  @extend .rule_describe_item;
  margin-top:40px;
  
}
.rule_describe2{
  @extend .rule_describe_item;
}
.rule_describe3{
  @extend .rule_describe_item;
}
.rule_describe4{
  @extend .rule_describe_item;
}
.rule_describe5{
  @extend .rule_describe_item;
  height:50px;
  background:rgba(249,250,253,1);
  border-radius:2px;
  color:#DD163E;
  line-height:50px;
  padding-left:20px;
  box-sizing: border-box;
}
</style>
