<!--
 * @Description: 底部通用导航
 * @Date: 2019-09-23 15:05:10
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 17:18:35
 -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-content-top">
        <div class="footer-content-top-left">
          <div class="footer-logo"></div>
          <div class="footer-list">
            <div class="footer-medium" @click='GoRouter("medium")'></div>
            <div class="footer-twier" @click='GoRouter("twier")'></div>
            <div class="footer-github" @click='GoRouter("github")'></div>
            <div class="footer-wordpress" @click='GoRouter("wordpress")'></div>
          </div>
        </div>
        <div class="footer-content-top-right">
          <div class="footer_project">
            <h4 class="title">{{$t('footer.project')}}</h4>
            <ul class="link_list">
              <li @click='GoRouter("app")' class="hover"><a>NetCloth App</a></li>
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
              <li class="hover" @click='GoRouter("github")'><a>GitHub</a></li>
            </ul>
          </div>
          <div class="footer_community">
            <h4 class="title">{{$t('footer.Community')}}</h4>
            <ul class="link_list">
              <li><a>{{$t('footer.Evemts')}}</a></li>
              <li class="hover" @click='GoBlog'><a>{{$t('footer.Blog')}}</a></li>
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
      </div>
      <div class="footer-content-bootom">
        <span>&#169</span>2019 NetCloth
      </div>
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
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 265px;
    background: rgba(14, 19, 32, 1);

    .footer-content {
      width: 1100px;
      margin: 0 auto;
    }

    .footer-logo {
      width: 166px;
      height: 44px;
      margin-bottom: 36px;
      background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/footer-logo.png');
      background-size: 100%;
    }

    .footer-content-top {
      height: 208px;
      padding: 38px 0 50px 0;
    }

    .footer-content-top-left {
      width: 250px;
      display: inline-block;

      .footer-list div {
        width: 40px;
        height: 40px;
        display: inline-block;
        background-size: 100%;
      }

      .footer-list div:not(:last-child) {
        margin-right: 30px;
      }

      .footer-medium {
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/medium.png');
      }

      .footer-medium:hover {
        cursor: pointer;
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/medium-hover.png');
      }

      .footer-twier {
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/twier.png');
      }

      .footer-twier:hover {
        cursor: pointer;
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/twier-hover.png');
      }

      .footer-github {
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/github.png');
      }

      .footer-github:hover {
        cursor: pointer;
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/github-hover.png');
      }

      .footer-wordpress {
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/wordpress.png');
      }

      .footer-wordpress:hover {
        cursor: pointer;
        background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.7/dist/images/footer/wordpress-hover.png');
        background-size: 100%;
      }

    }

    .footer-content-top-right {
      float: right;


      div {
        display: inline-block;
        text-align: left;
      }

      div:not(:last-child) {
        margin-right: 110px;
      }

      h4 {
        margin: 0;
        padding: 0;
        margin-top: 9px;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
        color: #c5c9d1;
        line-height: 22px;
      }

      ul {
        line-height: 1.5;
      }

      ul li {
        display: block;
        margin-top: 8px;

        a {
          color: #8c919a;
          font-size: 14px;
        }
      }

      .link_list .hover:hover a {
        cursor: pointer;
        color: rgba(168, 172, 179, 1);
      }
    }


    .footer-content-bootom {
      height: 56px;
      font-size: 12px;
      font-weight: 400;
      text-align: center;
      color: rgba(108, 112, 120, 1);
      padding: 19px 0;
      border-top: 1px solid rgba(255, 255, 255, .1);
    }
  }
</style>