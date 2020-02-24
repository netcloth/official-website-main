<!--
 * @Description: 移动端-数据产业
 * @Date: 2019-09-23 17:24:07
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-28 10:46:54
 -->
<template>
  <div class='DataIndustry'>
    <div class="DataIndustry-title">{{$t('dataIn.Title')}}</div>
    <div class="DataIndustry-news">{{$t('dataIn.New')}}</div>
    <ul class="DataIndustry-list">
      <li>
        <div class="DataIndustry-list-img generate-data"></div>
        <div class="DataIndustry-list-centent">
          <div class="DataIndustry-list-title">{{$t('dataIn.generateDataTitle')}}</div>
          <div class="DataIndustry-list-news">{{$t('dataIn.generateDataNew')}}</div>
        </div>
      </li>
      <li>
        <div class="DataIndustry-list-img storage"></div>
        <div class="DataIndustry-list-centent">
          <div class="DataIndustry-list-title">{{$t('dataIn.storageTitle')}}</div>
          <div class="DataIndustry-list-news">{{$t('dataIn.storageNew')}}</div>
        </div>
      </li>
      <li>
        <div class="DataIndustry-list-img data-change"></div>
        <div class="DataIndustry-list-centent">
          <div class="DataIndustry-list-title">{{$t('dataIn.dataChangeTitle')}}</div>
          <div class="DataIndustry-list-news">{{$t('dataIn.dataChangeNew')}}</div>
        </div>
      </li>
      <li>
        <div class="DataIndustry-list-img calculation"></div>
        <div class="DataIndustry-list-centent">
          <div class="DataIndustry-list-title">{{$t('dataIn.calculationTitle')}}</div>
          <div class="DataIndustry-list-news">{{$t('dataIn.calculationNew')}}</div>
        </div>
      </li>
      <li>
        <div class="DataIndustry-list-img data-produc"></div>
        <div class="DataIndustry-list-centent">
          <div class="DataIndustry-list-title">{{$t('dataIn.dataProducTitle')}}</div>
          <div class="DataIndustry-list-news">{{$t('dataIn.dataProducNew')}}</div>
        </div>
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
  @import "../../../styles/index.scss";

  .DataIndustry {
    height: px2rem(1236);
    text-align: center;
    background: rgba(255, 255, 255, 1);
    padding-top: px2rem(100);
    padding-left: px2rem(25);

    .DataIndustry-title {
      height: px2rem(54);
      font-size: px2rem(40);
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: px2rem(54);
    }

    .DataIndustry-news {
      height: px2rem(42);
      font-size: px2rem(28);
      font-weight: 300;
      color: rgba(95, 97, 103, 1);
      line-height: px2rem(42);
      margin-top: px2rem(15);
      margin-bottom: px2rem(74);
    }

    .DataIndustry-list li {
      display: block;
      text-align: left;
      margin-bottom: px2rem(48);

      .DataIndustry-list-img {
        width: px2rem(133);
        height: px2rem(133);
        background-color: #fff;
        background-size: 100%;
        margin-right: px2rem(25);
      }

      .DataIndustry-list-img,
      .DataIndustry-list-centent {
        display: inline-block;
        vertical-align: middle;
      }

      .DataIndustry-list-title {
        height: px2rem(45);
        font-size: px2rem(32);
        font-weight: 400;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(45);
        margin-bottom: px2rem(8);
      }

      .DataIndustry-list-news {
        width: px2rem(507);
        height: px2rem(37);
        font-size: px2rem(26);
        font-weight: 300;
        color: rgba(131, 134, 144, 1);
      }
    }


    .generate-data {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.9/dist/images/dataindustry/generate-data.png')
    }

    .storage {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.9/dist/images/dataindustry/storage.png')
    }

    .data-change {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.9/dist/images/dataindustry/data-change.png')
    }

    .calculation {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.9/dist/images/dataindustry/calculation.png')
    }

    .data-produc {
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.9/dist/images/dataindustry/data-produc.png')
    }
  }
</style>