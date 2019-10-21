<!--
 * @Description: 数据产业
 * @Date: 2019-09-23 17:24:07
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-15 17:57:39
 -->
<template>
  <div class='DataIndustry'>
    <div class="DataIndustry-title">{{$t('dataIn.Title')}}</div>
    <div class="DataIndustry-news">{{$t('dataIn.New')}}</div>
    <ul class="DataIndustry-list">
      <li class="DataIndustry-list-center">
        <div class="DataIndustry-list-img generate-data"></div>
        <div class="DataIndustry-list-img-title">{{$t('dataIn.generateDataTitle')}}</div>
        <div class="DataIndustry-list-img-news">{{$t('dataIn.generateDataNew')}}</div>
      </li>
      <li class="DataIndustry-list-line ">
        <span class="DataIndustry-list-line-red"></span>
      </li>
      <li class="DataIndustry-list-center">
        <div class="DataIndustry-list-img storage"></div>
        <div class="DataIndustry-list-img-title">{{$t('dataIn.storageTitle')}}</div>
        <div class="DataIndustry-list-img-news">{{$t('dataIn.storageNew')}}</div>
      </li>
      <li class="DataIndustry-list-line"></li>
      <li class="DataIndustry-list-center">
        <div class="DataIndustry-list-img data-change"></div>
        <div class="DataIndustry-list-img-title">{{$t('dataIn.dataChangeTitle')}}</div>
        <div class="DataIndustry-list-img-news">{{$t('dataIn.dataChangeNew')}}</div>
      </li>
      <li class="DataIndustry-list-line"></li>
      <li class="DataIndustry-list-center">
        <div class="DataIndustry-list-img calculation"></div>
        <div class="DataIndustry-list-img-title">{{$t('dataIn.calculationTitle')}}</div>
        <div class="DataIndustry-list-img-news">{{$t('dataIn.calculationNew')}}</div>
      </li>
      <li class="DataIndustry-list-line"></li>
      <li class="DataIndustry-list-center">
        <div class="DataIndustry-list-img data-produc"></div>
        <div class="DataIndustry-list-img-title">{{$t('dataIn.dataProducTitle')}}</div>
        <div class="DataIndustry-list-img-news">{{$t('dataIn.dataProducNew')}}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class DataIndustry extends Vue {

  }
</script>
<style lang="scss" scoped>
  .DataIndustry {
    height: 651px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    padding-top: 100px;

    .DataIndustry-title {
      height: 54px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: 54px;
    }

    .DataIndustry-news {
      height: 20px;
      font-size: 18px;
      font-weight: 300;
      color: rgba(95, 97, 103, 1);
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 95px;
    }

    .DataIndustry-list-center:not(:last-child) {
      margin-right: 58px;
    }

    .DataIndustry-list li {
      display: inline-block;
      vertical-align: top;


      .DataIndustry-list-img {
        width: 111px;
        height: 111px;
        margin: 0 auto;
        position: relative;
        background-color: #fff;
        z-index: 3;
        background-size: 100%;
      }

      .DataIndustry-list-img-title {
        height: 25px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(23, 33, 60, 1);
        line-height: 25px;
        margin-top: 37px;
        margin-bottom: 7px;
      }

      .DataIndustry-list-img-news {
        width: 180px;
        height: 40px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(131, 134, 144, 1);
      }
    }


    .generate-data {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/generate-data.png')
    }

    .storage {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/storage.png')
    }

    .data-change {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/data-change.png')
    }

    .calculation {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/calculation.png')
    }

    .data-produc {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/data-produc.png')
    }

    .DataIndustry-list-line {
      width: 97px;
      height: 7px;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.4/dist/images/dataindustry/line.png');
      background-size: 100%;
      margin-top: 52px;
      margin-left: -75px;
      position: absolute;

      .DataIndustry-list-line-red {
        width: 6px;
        height: 6px;
        background: rgba(221, 22, 62, 1);
        border-radius: 50%;
        position: absolute;
        left: 0px;
        animation: move 10s infinite;
        z-index: 2;
      }
    }
  }

  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }


    18.18% {
      transform: translate(90px, 0px);
    }

    27.27% {
      transform: translate(236px, 0px);
    }

    45.45% {
      transform: translate(327px, 0px);
    }

    54.54% {
      transform: translate(476px, 0px);
    }

    72.72% {
      transform: translate(565px, 0px);
    }

    81.81% {
      transform: translate(740px, 0px);
    }

    100% {
      transform: translate(833px, 0px);
    }
  }
</style>