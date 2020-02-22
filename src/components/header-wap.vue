<!--
 * @Description: 公共头部
 * @Date: 2019-09-23 17:24:07
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 14:29:04
 -->
<template>
  <div class="header">
    <div class="header-menu">
      <div class="header-menu-btn" @click='Open'>
        <img :src="logoUrl.menuSrc">
      </div>
    </div>
    <div class="header-logo">
      <router-link to="/"><img :src="logoUrl.imgSrc"></router-link>
    </div>
    <div class="header-btn">
      <span class="btn-en" @click='ChangLang("en")' :style="{ color:Pcolor}" v-if='language=="zh"'>EN</span>
      <span class="btn-zh" @click='ChangLang("zh")' :style="{ color:Pcolor}" v-if='language=="en"'>中文</span>
    </div>
    <transition name="fade">
      <div class="header-menu-open" v-show='isOpen'>
        <div class="header-menu">
          <div class="header-menu-btn header-menu-btn-close" @click='Open'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.5/dist/images-wap/header/menu-close.png">
          </div>
        </div>
        <div class="header-logo">
          <router-link to="/"><img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.5/dist/images-wap/header/nav-logo.png"></router-link>
        </div>
        <div class="header-btn">
          <span class="btn-en" @click='ChangLang("en")' v-if='language=="zh"'>EN</span>
          <span class="btn-zh" @click='ChangLang("zh")' v-if='language=="en"'>中文</span>
        </div>
        <div class="header-menu-nav">
          <ul>
            <li>
              <router-link to="ecosystem">{{$t('header.ecology')}}</router-link>
            </li>
            <li>
              <router-link to="Development">{{$t('header.dev')}}</router-link>
            </li>
            <li><a>{{$t('header.block')}}</a></li>
            <li @click='GoBlog'><a>{{$t('header.blog')}}</a></li>
            <li>
              <router-link to="starfish">{{$t('header.starfish')}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { UserModule } from '../store/modules/user';

  @Component
  export default class Header extends Vue {
    private isOpen = false;
    @Prop({
      default: function () {
        return {
          imgSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.5/dist/images-wap/header/nav-logo.png',
          menuSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.5/dist/images-wap/header/menu.png',
          menuCloseSrc: 'https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.1.5/dist/images-wap/header/menu-close.png',
        }
      }
    }) readonly logoUrl!: Object;
    @Prop({ default: '#ffffff' }) readonly Pcolor!: string;

    get language() {
      return UserModule.language;
    }

    // methods
    private ChangLang(value: string): void {
      UserModule.ResetLanguage(value);
      localStorage.setItem('language', value);
      this.$i18n.locale = value;
      this.language = value;
      window.location.reload();
    }

    private Open() {
      this.isOpen = !this.isOpen;
    }

    private GoBlog() {
      if (this.language == 'zh') {
        window.open('https://blog.netcloth.org');
      } else {
        window.open('https://medium.com/@NetCloth');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../src/styles/index.scss";

  .header {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: px2rem(88);
    padding: px2rem(29);
    z-index: 2;

    .header-menu-open {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(14, 19, 32, 1);
      width: 100%;
      height: px2rem(88);
      padding: px2rem(29);
      z-index: 2;
      top: 0;
      left: 0;

      .header-menu {
        position: relative;

        &-nav {
          width: 100%;
          position: absolute;
          left: 0;
          top: px2rem(88);
          padding-left: px2rem(29);
          background: rgba(14, 19, 32, 1);

          li {
            display: block;
            height: px2rem(100);
            line-height: px2rem(100);

            a {
              font-size: px2rem(30);
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }

        }
      }
    }

    .header-menu {
      position: relative;

      &-btn,
      img {
        width: px2rem(37);
        height: px2rem(30);
      }

      &-btn-close {
        img {
          width: px2rem(28);
          height: px2rem(28);
        }
      }

    }

    .header-btn {
      font-size: px2rem(28);
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: px2rem(28);
    }

    .header-logo {

      img {
        width: px2rem(205);
        height: px2rem(40);
      }
    }

    .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      position: absolute;
      transition: opacity 1s;
    }

    .fade-leave-to {
      /* position: absolute; */
      opacity: 0;
    }

    .fade-leave-active {
      position: absolute;
      transition: opacity 1s;
    }
  }
</style>