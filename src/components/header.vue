<!--
 * @Description: 公共头部
 * @Date: 2019-09-23 17:24:07
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-15 15:31:16
 -->
<template>
  <div class="header">
    <div class="header-logo">
      <router-link to="/"><img :src="imgSrc" alt="" srcset=""></router-link>
    </div>
    <div class="header-btn">
      <span class="btn-en" @click='ChangLang("en")' :style="{ color:Pcolor}">EN</span>
      <span class="btn-lin" :style="{ borderColor:Pcolor}"></span>
      <span class="btn-zh" @click='ChangLang("zh")' :style="{ color:Pcolor}">中文</span>
    </div>
    <div class="header-nav">
      <ul>
        <li>
          <router-link to="ecosystem" :style="{ color:Pcolor}">{{$t('header.ecology')}}</router-link>
        </li>
        <li>
          <router-link to="Development" :style="{ color:Pcolor}">{{$t('header.dev')}}</router-link>
        </li>
        <li><a title="" :style="{ color:Pcolor}">{{$t('header.block')}}</a></li>
        <li @click='GoBlog' class="hover"><a title="" :style="{ color:Pcolor}">{{$t('header.blog')}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { UserModule } from '../store/modules/user';

  @Component
  export default class Header extends Vue {
    @Prop({ default: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.3/dist/images/header/nav-logo.png' }) readonly imgSrc!: string;
    @Prop({ default: '#ffffff' }) readonly Pcolor!: string;
    // methods
    private ChangLang(value: string): void {
      UserModule.ResetLanguage(value);
      localStorage.setItem('language', value);
      this.$i18n.locale = value;
    }
    private GoBlog() {
      if (this.$i18n.locale == 'zh') {
        window.open('https://blog.netcloth.org');
      } else {
        window.open('https://medium.com/@NetCloth');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    box-sizing: border-box;
    min-width: 1280px;
    width: 100%;
    padding: 22px 60px;
    position: absolute;
    z-index: 2;

    div,
    ul,
    li {
      display: inline-block;
    }

    .hover a:hover {
      cursor: pointer;
    }

    .header-logo {
      width: 142px;
      height: 29px;

      img {
        width: 100%;
      }
    }

    .header-nav {
      float: right;
      height: 29px;
      line-height: 29px;

      li:not(:last-child) {
        margin-right: 40px;
      }

      li a {
        font-size: 14px;
        font-weight: 400;
      }
    }

    .header-btn {
      float: right;
      margin-left: 100px;
      height: 29px;
      font-size: 14px;
      font-weight: 400;
      line-height: 29px;
    }

    .btn-en {
      cursor: pointer;
      margin-right: 20px;
    }

    .btn-lin {
      border-right: 1px solid #ffffff;
      height: 24px;
    }

    .btn-zh {
      cursor: pointer;
      margin-left: 20px;
    }
  }
</style>