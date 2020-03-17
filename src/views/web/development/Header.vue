<!--
 * @Description: 开发专区-头部
 * @Date: 2019-09-24 09:52:47
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-13 17:26:46
 -->
<template>
  <div class="devHeader">
    <div class="devHeader-bg">
      <div class="devHeader-title">{{$t('development.title')}}</div>
    </div>
    <div class="devHeader-centent">
      <div class="devHeader-centent-left">
        <div class="devHeader-centent-header"></div>
        <div class="devHeader-centent-title">{{$t('development.leftTitle')}}</div>
        <div class="devHeader-centent-message">{{$t('development.leftMessage')}}</div>
        <a :href="'https://docs.netcloth.org/'+(GetLanguage()=='en'?'en':'')" target="_blank" class="devHeader-centent-btn">{{$t('development.leftBtn')}}</a>
      </div>
      <div class="devHeader-centent-right">
        <div class="devHeader-centent-right-o">
          <div class="devHeader-centent-header"></div>
          <div class="devHeader-centent-title">{{$t('development.rightTitleO')}}</div>
          <div class="devHeader-centent-input">
            <div class="devHeader-centent-input-t " @click='GoRouter("TestNet")'>{{$t('development.rightMessageO')}}</div>
            <div class="devHeader-centent-input-j"></div>
          </div>
        </div>
        <div class="devHeader-centent-right-t">
          <div class="devHeader-centent-header"></div>
          <div class="devHeader-centent-title">{{$t('development.rightTitleT')}}</div>
          <div class="devHeader-centent-input" @click='GoRouter("github")'>
            <div class="devHeader-centent-input-t">{{$t('development.rightMessageT')}}</div>
            <div class="devHeader-centent-input-j"></div>
          </div>
          <div class="devHeader-centent-input inputT" @click='GoRouter("Chain")'>
            <div class="devHeader-centent-input-t">{{$t('development.rightMessageS')}}</div>
            <div class="devHeader-centent-input-j"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="dev">
      <div class="dev_title">{{$t('development.title2')}}</div>
      <div class="dev_contain clearfix">
        <div class="dev_col1 left">
          <div class="dev_row1_1"></div>
          <div class="dev_row1_2">{{$t('development.row_1_1')}}</div>
          <div class="dev_row1_3">{{$t('development.row_2_1')}}</div>
        </div>
        <div class="dev_col2 left">
          <div class="dev_row2_1"></div>
          <div class="dev_row2_2">{{$t('development.row_1_2')}}</div>
          <div class="dev_row2_3">{{$t('development.row_2_2')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class DevHeader extends Vue {
    private GetLanguage(){
      return localStorage.getItem('language');
    }
    private GoRouter(val) {
      if (val == 'github') {
        window.open('https://github.com/NetCloth')
      }
      if (val == 'Chain') {
        window.open('https://github.com/NetCloth/netcloth-chain')
      }
      if(val == 'TestNet'){
        if(localStorage.getItem('language')=='zh'){
          window.open('https://docs.netcloth.org/get-started/how-to-join-testnet.html');
        }else{
          window.open('https://docs.netcloth.org/en/get-started/how-to-join-testnet.html');
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .devHeader {
    box-sizing: border-box;
    min-height: calc(100vh - 265px);

    .devHeader-bg {
      width: 100%;
      height: 300px;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/development/dev-header.png');
      background-size: 100%;
    }

    .devHeader-title {
      width: 1050px;
      height: 300px;
      font-size: 40px;
      font-weight: 600;
      color: rgba(23, 33, 60, 1);
      padding-top: 134px;
      margin: 0 auto;
    }

    .devHeader-centent {
      width: 1100px;
      height: 580px;
      margin: 0 auto;

      .devHeader-centent-header {
        width: 58px;
        height: 20px;
        background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/development/line-red.png');
        background-size: 100%;
        margin-left: -10px;
      }



      .devHeader-centent-left {
        position: relative;
        z-index: 1;
        float: left;
        width: 540px;
        height: 520px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 10px 10px 2px rgba(232, 234, 240, 0.75);
        margin-right: 20px;
        margin-top: -40px;
        padding: 0 30px;
      }

      .devHeader-centent-right {
        position: relative;
        z-index: 1;
        float: right;
        margin-top: -40px;

        .devHeader-centent-right-o {
          width: 540px;
          height: 222px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 10px 10px 2px rgba(232, 234, 240, 0.75);
          padding: 0 30px;

        }

        .devHeader-centent-right-t {
          width: 540px;
          height: 278px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 10px 10px 2px rgba(232, 234, 240, 0.75);
          margin-top: 20px;
          padding: 0 30px;

        }
      }

      .devHeader-centent-title {
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 28px;
        margin-top: 40px;
      }

      .devHeader-centent-message {
        width: 424px;
        height: 60px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(131, 134, 144, 1);
        line-height: 30px;
        margin-top: 20px;
      }

      .devHeader-centent-btn {
        width: 200px;
        height: 50px;
        background: rgb(221, 22, 62);
        border-radius: 4px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        margin-top: 222px;
        display:block;
      }

      .devHeader-centent-input {
        width: 480px;
        height: 46px;
        border-radius: 4px;
        border: 1px solid rgba(240, 241, 245, 1);
        font-size: 16px;
        font-weight: 400;
        color: rgba(131, 134, 144, 1);
        padding: 8px 15px;
        margin-top: 30px;
        cursor: pointer;

        div {
          display: inline-block;
          vertical-align: top;
        }

        .devHeader-centent-input-t {
          width: 310px;
          height: 30px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(131, 134, 144, 1);
          line-height: 30px;
        }

        .devHeader-centent-input-j {
          float: right;
          width: 16px;
          height: 13px;
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/development/golook.png');
          background-size: 100%;
          margin-top: 7px;
        }
      }

      .inputT {
        margin-top: 10px;
      }

      .devHeader-centent-input:hover {
        border: 1px solid rgba(23, 33, 60, 1);

        .devHeader-centent-input-t {
          color: rgba(23, 33, 60, 1);
        }

        .devHeader-centent-input-j {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/development/golook-red.png');
          background-size: 100%;
        }
      }

    }
  }
.left{
  float:left;
}
.clearfix {
    &::after {
        content:''; 
        display:block; 
        clear:both; 
    }
    zoom:1;
}
.dev{
  margin: 84px 0;
}
.dev_title{
  width:1100px;
  margin: 0 auto;
  font-size:40px;
  font-weight:500;
  color:rgba(23,33,60,1);
  line-height:54px;
}

.dev_contain {
  width:1100px;
  margin:0 auto;
  margin-top:65px;
}
.dev_col1{
  width:fit-content;
  
}
.dev_row1_1{
  width:101px;
  height:101px;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/starfish/resource_image3.png");
  background-size:100% 100%;
  margin:0 auto;
}
.dev_row1_2{
  font-size:18px;
  font-weight:600;
  color:rgba(23,33,60,1);
  line-height:30px;
  text-align: center;
  margin-top:13px;
}
.dev_row1_3{
  font-size:15px;
  font-weight:400;
  color:rgba(155,157,164,1);
  line-height:30px;
  text-align: center;
}
.dev_col2{
  margin-left:150px;
}
.dev_row2_1{
  @extend .dev_row1_1;
  background:url("https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.5/dist/images/starfish/resource_image4.png");
  background-size:100% 100%;
}
.dev_row2_2{
  @extend .dev_row1_2;
}
.dev_row2_3{
  @extend .dev_row1_3;
}
</style>