<!--
 * @Description: 移动端-底部通用导航
 * @Date: 2019-09-23 15:05:10
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-14 18:02:05
 -->
<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.1/dist/images-wap/footer/footer-logo.png">
      </div>
      <div class="footer-centent">
        <div class="footer_project">
          <h4 class="title">{{$t('footer.project')}}</h4>
          <ul class="link_list">
            <li @click='GoRouter("app")'><a>NetCloth App</a></li>
            <li><a>{{$t('footer.Whitepaper')}}</a></li>
            <li><a>Onepaper</a></li>
          </ul>
        </div>
        <div class="footer_dev">
          <h4 class="title">{{$t('footer.Resources')}}</h4>
          <ul class="link_list">
            <li class="hover">
              <router-link to="Development">{{$t('footer.Portal')}}</router-link>
            </li>
            <li><a>{{$t('footer.Documents')}}</a></li>
            <li @click='GoRouter("github")'><a>GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-centent">
        <div class="footer_community">
          <h4 class="title">{{$t('footer.Community')}}</h4>
          <ul class="link_list">
            <li><a>{{$t('footer.Evemts')}}</a></li>
            <li @click='GoBlog'><a>{{$t('footer.Blog')}}</a></li>
            <li><a>{{$t('footer.Media')}}</a></li>
          </ul>
        </div>
        <div class="footer_about">
          <h4 class="title">{{$t('footer.About')}}</h4>
          <ul class="link_list">
            <li><a>{{$t('footer.Kits')}}</a></li>
            <li><a>{{$t('footer.FAQ')}}</a></li>
            <li><a>{{$t('footer.Donation')}}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-list">
        <div class="footer-medium" @click='GoRouter("medium")'></div>
        <div class="footer-twier" @click='GoRouter("twier")'></div>
        <div class="footer-github" @click='GoRouter("github")'></div>
        <div class="footer-wordpress" @click='GoRouter("wordpress")'></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&#169</span>2019 NetCloth
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class Footer extends Vue {

    private GoRouter(val) {
      if (val == 'medium') {
        window.open('https://medium.com/@NetCloth');
      }
      if (val == 'twier') {
        window.open('https://twitter.com/NetCloth');
      }
      if (val == 'github') {
        window.open('https://github.com/NetCloth');
      }
      if (val == 'wordpress') {
        window.open('https://blog.netcloth.org');
      }
      if (val == 'app') {
        window.open('http://chat-app.netcloth.org');
      }
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
  @import "../../src/styles/index.scss";

  .footer {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(14, 19, 32, 1);

    .footer-top {
      padding: px2rem(73) 0 px2rem(80) px2rem(40);
    }

    .footer-logo {
      margin-bottom: px2rem(80);

      img {
        width: px2rem(299);
        height: px2rem(79);
      }
    }

    .footer-centent {
      margin-bottom: px2rem(60);

      div {
        display: inline-block;
        text-align: left;
      }

      div:not(:last-child) {
        margin-right: px2rem(20);
      }

      h4 {
        margin: 0;
        padding: 0;
        height: px2rem(45);
        line-height: px2rem(45);
        margin-bottom: px2rem(20);
        font-size: px2rem(32);
        font-weight: 400;
        color: #c5c9d1;
      }

      li:not(:last-child) {
        margin-bottom: px2rem(12);
      }

      ul li {
        display: block;
        width: px2rem(300);
        height: px2rem(40);
        line-height: px2rem(40);

        a {
          font-size: px2rem(28);
          font-weight: 400;
          color: #8c919a;
        }
      }
    }

    .footer-list div {
      width: px2rem(77);
      height: px2rem(77);
      display: inline-block;
      vertical-align: top;
    }

    .footer-list div:not(:last-child) {
      margin-right: px2rem(57);
    }

    .footer-medium {
      background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.1/dist/images-wap/footer/medium.png');
      background-size: 100%;
    }

    .footer-twier {
      background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.1/dist/images-wap/footer/twier.png');
      background-size: 100%;
    }

    .footer-github {
      background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.1/dist/images-wap/footer/github.png');
      background-size: 100%;
    }

    .footer-wordpress {
      background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.1/dist/images/footer/wordpress.png');
      background-size: 100%;

    }

    .footer-bottom {
      line-height: px2rem(113);
      font-size: px2rem(24);
      font-weight: 400;
      text-align: left;
      color: rgba(108, 112, 120, 1);
      border-top: px2rem(1) solid rgba(255, 255, 255, .1);
      padding-left: px2rem(40);
    }
  }
</style>