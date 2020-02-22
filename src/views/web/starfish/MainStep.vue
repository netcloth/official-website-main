import Vue from 'vue'
<template>
<div>
    <div class="slogen">{{$t("MainStep.text")}}</div>
    <div class="step_content clearfix">
      <div class="validator left ">
        <div class="validator_text">{{$t("MainStep.text1")}}</div>
        <a class="validator_btn" href='https://docs.netcloth.org/' target="_blank">{{$t("MainStep.text2")}}</a>
      </div>
      <div class="grey_line left"></div>
      <div class="step1 left">
        <div class="step1_img"></div>
        <div class="step1_txt">{{$t("MainStep.text3")}}</div>
      </div>
      <div class="step2 left">
        <div class="step2_img"></div>
        <div class="step2_txt">{{$t("MainStep.text4")}}</div>
      </div>
      <div class="step3 left">
        <div class="step3_img"></div>
        <div class="step3_txt">{{$t("MainStep.text5")}}</div>
      </div>
      <div class="step4 left">
        <div class="step4_img"></div>
        <div class="step4_txt">{{$t("MainStep.text6")}}</div>
      </div>
    </div>



    <div class="part_content">
      <div class="part_discribe clearfix">
        <div class="part_text left">{{$t("MainStep.part_text1")}}</div>
        <div class="grey_line left"></div>
        <div class="part_step1 left">
          <div class="part_step1_img"></div>
          <div class="part_step1_txt">{{$t("MainStep.part_text2")}}</div>
        </div>
        <div class="part_step2 left">
          <div class="part_step2_img"></div>
          <div class="part_step2_txt">{{$t("MainStep.part_text3")}}</div>
        </div>
        <div class="part_step3 left">
          <div class="part_step3_img"></div>
          <div class="part_step3_txt">{{$t("MainStep.part_text4")}}</div>
        </div>
        <div class="part_step4 left">
          <div class="part_step4_img"></div>
          <div class="part_step4_txt">{{$t("MainStep.part_text5")}}</div>
        </div>
      </div>
      <div class="part_log">
        {{$t("MainStep.part_log1")}}<br/>
        {{$t("MainStep.part_log2")}}<span  style="color:#DD163E">contact@netcloth.org</span>{{$t("MainStep.part_log3")}}
      </div>

    </div>
</div>
</template>

<script>

import Vue from 'vue'
export default {
  name: 'MainStep',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{
    go:function(url){
      window.location.href=url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../../styles/li.scss";
.slogen{
  text-align: center;
  margin:80px 0;
  font-size:30px;
  font-weight:600;
  color:#17213C;
}
.step_content{
  width: 1100px;;
  background:#ffffff;
  margin:0 auto;
  padding:21px 40px;
  border-radius:10px;
  box-shadow:0px 2px 15px 0px rgba(23,33,60,0.1);
}
.validator{
  width:134px;
}
.validator_text{
  padding-top:19px;
  padding-bottom:22px;
  color:#17213C;
  text-align: center;
  font-size:24px
}
.validator_btn{
  border-radius:6px;
  border:1px solid rgba(221,22,62,1);
  color:#DD163E;
  padding:11px 34px;
  display:block;
}
.grey_line{
  height:120px;
  width:1px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/grey_line.png");
  background-size:100% 100%;
  margin:9px 40px;

}
.step{
  width:200px;
}
.step1{
  @extend .step;
}
.step2{
  @extend .step;
}
.step3{
  @extend .step;
}
.step4{
  @extend .step;
}
.step_img{
  width:80px;
  height:80px;
  margin:0 auto;
}
.step_txt{
  line-height: 22px;
  font-size:16px;
  color:#17213C;
  text-align: center;
  padding-top:16px;
  padding-left:16px;
  padding-right:16px;
}

.step1_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/main_step1.png");
  background-size:100% 100%;
}
.step1_txt{
  @extend .step_txt;
}
.step2_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/main_step2.png");
  background-size:100% 100%;
}
.step2_txt{
  @extend .step_txt;
}
.step3_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/main_step3.png");
  background-size:100% 100%;
}
.step3_txt{
  @extend .step_txt;
}
.step4_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/main_step4.png");
  background-size:100% 100%;
}
.step4_txt{
  @extend .step_txt;
}
.step_btn{
  float:left;
  height:44px;
  font-size:18px;
  background-color:#DD163E;
  color:#ffffff;
  border-radius:6px;
  line-height: 44px;
  padding:0 34px;
  margin-left:84px;
  margin-top:18px;
}


.part_content{
  @extend .step_content;
  margin-top:30px;
}
.part_text{
  @extend .validator_text;
  width:134px;
}
.part_step1{
  @extend .step1;
}
.part_step2{
  @extend .step2;
}
.part_step3{
  @extend .step3;
}
.part_step4{
  @extend .step4;
}

.part_step1_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/part_step_img1.png");
  background-size:100% 100%;
}
.part_step2_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/part_step_img2.png");
  background-size:100% 100%;
}
.part_step3_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/part_step_img3.png");
  background-size:100% 100%;
}
.part_step4_img{
  @extend .step_img;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.4/dist/images/starfish/main_step4.png");
  background-size:100% 100%;
}

.part_step1_txt{
  @extend .step_txt;
}
.part_step2_txt{
  @extend .step_txt;
}
.part_step3_txt{
  @extend .step_txt;
}
.part_step4_txt{
  @extend .step_txt;
}
.part_log{
  width:1000px;
  background:rgba(249,250,253,1);
  border-radius:2px;
  padding:15px 20px;
  font-size:14px;
  line-height: 22px;
  margin-top:30px;
}
</style>
