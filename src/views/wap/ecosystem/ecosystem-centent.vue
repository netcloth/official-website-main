<!--
 * @Description: 生态发展
 * @Date: 2019-09-26 17:00:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 18:04:19
 -->
<template>
  <div class="Ecosystem-centent">
    <div class="Ecosystem-header">
      <div class="Ecosystem-header-title">{{$t('EcosystemHeader.title')}}</div>
      <div class="Ecosystem-header-message">{{$t('EcosystemHeader.message')}}</div>
    </div>
    <div class="Ecosystem-solutions">
      <div class="Ecosystem-solutions-title">{{$t('EcosystemSolu.title')}}</div>
      <div class="Ecosystem-solutions-center">
        <ul>
          <li>
            <div class="Ecosystem-solutions-center-header account">{{$t('EcosystemSolu.titleO')}}</div>
            <div class="Ecosystem-solutions-center-centent">
              {{$t('EcosystemSolu.messageO')}}
            </div>
          </li>
          <li>
            <div class="Ecosystem-solutions-center-header encryption">{{$t('EcosystemSolu.titleT')}}</div>
            <div class="Ecosystem-solutions-center-centent"> {{$t('EcosystemSolu.messageT')}}</div>
          </li>
          <li>
            <div class="Ecosystem-solutions-center-header Blockchain">{{$t('EcosystemSolu.titleS')}}</div>
            <div class="Ecosystem-solutions-center-centent">{{$t('EcosystemSolu.messageS')}}</div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="Ecosystem-solutions-center-header trustworthy">{{$t('EcosystemSolu.titleF')}}</div>
            <div class="Ecosystem-solutions-center-centent">{{$t('EcosystemSolu.messageF')}}</div>
          </li>
          <li>
            <div class="Ecosystem-solutions-center-header calculation">{{$t('EcosystemSolu.titleV')}}</div>
            <div class="Ecosystem-solutions-center-centent">{{$t('EcosystemSolu.messageV')}}</div>
          </li>
          <li>
            <div class="Ecosystem-solutions-center-header link">{{$t('EcosystemSolu.titleE')}}</div>
            <div class="Ecosystem-solutions-center-centent">{{$t('EcosystemSolu.messageE')}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="Ecosystem-architecture">
      <div class="Ecosystem-architecture-title">{{$t('EcosystemArch.title')}}</div>
      <div class="Ecosystem-architecture-center">
        <div class="Ecosystem-architecture-center-centent" @click='ChangeSelected("user")'>
          <div class="Ecosystem-architecture-center-centent-img">
            <span>{{$t('EcosystemArch.titleO')}}</span>
            <img class="user" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/user.png">
          </div>
          <div class="Ecosystem-architecture-center-centent-message" v-if='check=="user"'>
            {{$t('EcosystemArch.messageO')}}
          </div>
          <div class="Ecosystem-architecture-center-centent-btn">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/collapse.png" alt="" srcset="" v-if='check=="user"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/down.png" alt="" srcset="" v-else>
          </div>
        </div>
        <div class="Ecosystem-architecture-center-centent" @click='ChangeSelected("application")'>
          <div class="Ecosystem-architecture-center-centent-img">
            <span>{{$t('EcosystemArch.titleT')}}</span>
            <img class="application" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/application.png" v-show='language=="zh"'>
            <img class="application" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/application-en.png" v-show='language=="en"'>
          </div>
          <div class="Ecosystem-architecture-center-centent-message" v-if='check=="application"'>
            {{$t('EcosystemArch.messageT')}}
          </div>
          <div class="Ecosystem-architecture-center-centent-btn">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/collapse.png" alt="" srcset="" v-if='check=="application"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/down.png" alt="" srcset="" v-else>
          </div>
        </div>
        <div class="Ecosystem-architecture-center-centent" @click='ChangeSelected("nodeLayer")'>
          <div class="Ecosystem-architecture-center-centent-img">
            <span>{{$t('EcosystemArch.titleS')}}</span>
            <img class="nodeLayer" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/nodeLayer.png" v-show='language=="zh"'>
            <img class="nodeLayer" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/nodeLayer-en.png" v-show='language=="en"'>
          </div>
          <div class="Ecosystem-architecture-center-centent-message" v-if='check=="nodeLayer"'>
            {{$t('EcosystemArch.messageS')}}
          </div>
          <div class="Ecosystem-architecture-center-centent-btn">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/collapse.png" alt="" srcset="" v-if='check=="nodeLayer"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/down.png" alt="" srcset="" v-else>
          </div>
        </div>
        <div class="Ecosystem-architecture-center-centent" @click='ChangeSelected("basic")'>
          <div class="Ecosystem-architecture-center-centent-img">
            <span>{{$t('EcosystemArch.titleF')}}</span>
            <img class="basic" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/basic.png" v-show='language=="zh"'>
            <img class="basic" src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/basic-en.png" v-show='language=="en"'>
          </div>
          <div class="Ecosystem-architecture-center-centent-message" v-if='check=="basic"'>
            {{$t('EcosystemArch.messageF')}}
          </div>
          <div class="Ecosystem-architecture-center-centent-btn">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/collapse.png" alt="" srcset="" v-if='check=="basic"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/down.png" alt="" srcset="" v-else>
          </div>
        </div>
      </div>
    </div>
    <div class="Ecosystem-applications">
      <div class="Ecosystem-applications-title">{{$t('EcosystemApp.title')}}</div>
      <div class="Ecosystem-applications-centent">
        <div class="NetClothApp" @click='GoRouter'>
          <span class="NetClothApp-title">NetCloth APP</span>
          <span class="NetClothApp-message">{{$t('EcosystemApp.message')}}</span>
        </div>
        <div class="js1">
          {{$t('EcosystemApp.js')}}
        </div>
        <div class="js2">
          {{$t('EcosystemApp.js')}}
        </div>
      </div>
      <router-link to="/Development" style="color:#fff;">
        <div class="Ecosystem-applications-btn">
          {{$t('EcosystemApp.btn')}}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserModule } from '@/store/modules/user';

  @Component
  export default class EcosystemCentent extends Vue {
    private check = 'user'
    private ChangeSelected(val) {
      this.check = val;
    }

    get language() {
      return UserModule.language
    }
    GoRouter() {
      window.open('http://chat-app.netcloth.org');
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../styles/index.scss";

  .Ecosystem-centent {
    box-sizing: border-box;
    position: relative;

    .Ecosystem-header {
      height: px2rem(450);
      text-align: center;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/bg.png');
      background-size: 100%;
      padding-top: px2rem(180);

      &-title {
        font-size: px2rem(44);
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: px2rem(62);

      }

      &-message {
        height: px2rem(640);
        font-size: px2rem(30);
        font-weight: 300;
        color: rgba(255, 255, 255, .7);
        line-height: px2rem(42);
        margin: 0 auto;
        margin-top: px2rem(20);
      }
    }

    .Ecosystem-solutions {
      background: rgba(255, 255, 255, 1);
      padding: px2rem(100) 0;

      &-title {
        width: px2rem(213);
        height: px2rem(54);
        font-size: px2rem(40);
        ;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(54);
        margin: 0 auto;
        margin-bottom: px2rem(83);
      }

      &-center {
        ul:last-child {
          margin-top: px2rem(63);
        }

        li:not(:last-child) {
          margin-bottom: px2rem(63);
        }

        li {
          width: 100%;
          display: inline-block;
          vertical-align: top;
          text-align: left;

        }

        &-header {
          height: px2rem(48);
          font-size: px2rem(32);
          font-weight: normal;
          color: rgba(23, 33, 60, 1);
          line-height: px2rem(48);
          background-repeat: no-repeat;
          background-position-x: px2rem(42);
          padding-left: px2rem(125);
        }

        .account {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/account.png');
          background-size: px2rem(50) px2rem(50);
        }

        .encryption {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/encryption.png');
          background-size: px2rem(45) px2rem(50);
        }

        .Blockchain {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/Blockchain.png');
          background-size: px2rem(47) px2rem(49);
        }

        .trustworthy {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/trustworthy.png');
          background-size: px2rem(47) px2rem(47);
        }

        .calculation {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/calculation.png');
          background-size: px2rem(50) px2rem(50);
        }

        .link {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/link.png');
          background-size: px2rem(47) px2rem(47);
        }

        &-centent {
          font-size: px2rem(28);
          font-family: Avenir-Light, Avenir;
          font-weight: 300;
          color: rgba(131, 134, 144, 1);
          line-height: px2rem(44);
          margin-top: px2rem(20);
          padding-left: px2rem(125);
          padding-right: px2rem(45)
        }
      }
    }

    .Ecosystem-architecture {
      background: rgba(249, 250, 253, 1);
      padding: px2rem(100) px2rem(30);
      text-align: center;

      &-title {
        width: px2rem(600);
        height: px2rem(54);
        font-size: px2rem(40);
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(54);
        margin: 0 auto;
        margin-bottom: px2rem(79);
      }

      &-center {
        &-centent {
          width: px2rem(690);
          font-size: px2rem(30);
          font-weight: normal;
          color: rgba(23, 33, 60, 1);
          background: #fff;
          padding: px2rem(32) px2rem(35);
          margin: 0 auto;
          margin-bottom: px2rem(20);

          &-img {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: px2rem(35) 0;
            background-color: #fff;

            span {
              width: px2rem(180);
              text-align: left;
              font-size: px2rem(30);
              font-weight: 400;
              color: rgba(23, 33, 60, 1);
              line-height: px2rem(42);
              margin-right: px2rem(31);
            }

            .user {
              width: px2rem(430);
              height: px2rem(70);
            }

            .application {
              width: px2rem(402);
              height: px2rem(85);
            }

            .nodeLayer {
              width: px2rem(267);
              height: px2rem(88);
            }

            .basic {
              width: px2rem(430);
              height: px2rem(80);
            }
          }

          &-message {
            text-align: left;
            font-size: px2rem(26);
            font-weight: 300;
            color: rgba(87, 89, 96, 1);
            line-height: px2rem(40);
            background: rgba(249, 250, 253, 1);
            border-radius: px2rem(5);
            padding: px2rem(30);
          }

          &-btn {
            width: px2rem(33);
            height: px2rem(14);
            margin: px2rem(28) auto 0;

            img {
              width: 100%;
              vertical-align: top;
            }
          }
        }
      }
    }

    .Ecosystem-applications {
      text-align: center;
      background: rgba(255, 255, 255, 1);
      padding: px2rem(100) 0;

      &-title {
        width: px2rem(225);
        height: px2rem(55);
        font-size: px2rem(40);
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: px2rem(55);
        margin: 0 auto;
        margin-bottom: px2rem(79);
      }

      &-centent {

        div {
          margin: 0 auto;
        }

        .NetClothApp {
          position: relative;
          width: px2rem(660);
          height: px2rem(841);
          text-align: left;
          border-radius: px2rem(20);
          box-shadow: 0px 10px 10px 2px rgba(232, 234, 240, 0.75);
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/Netcloth-APP.png');
          background-repeat: no-repeat;
          background-size: 100%;

          span {
            display: block;
            position: relative;
            top: px2rem(595);
            padding: 0 px2rem(49);
          }

          &-title {
            height: px2rem(44);
            font-size: px2rem(32);
            font-weight: 500;
            color: rgba(23, 33, 60, 1);
            line-height: px2rem(44);
          }

          &-message {
            font-size: px2rem(28);
            font-weight: normal;
            color: rgba(131, 134, 144, 1);
            line-height: px2rem(39);
            margin-top: px2rem(17);
          }
        }

        .js1,
        .js2 {
          display: inline-block;
          width: px2rem(315);
          height: px2rem(260);
          background: rgba(23, 33, 60, 1);
          border-radius: px2rem(20);
          font-size: px2rem(36);
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: px2rem(260);
          margin-top: px2rem(30);
        }

        .js1 {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/js1.png');
          margin-right: px2rem(30);
        }

        .js2 {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images-wap/ecosystem/js2.png');
        }


      }

      &-btn {
        width: px2rem(300);
        height: px2rem(80);
        background: rgba(220, 23, 62, 1);
        border-radius: px2rem(6);
        font-size: px2rem(30);
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: px2rem(80);
        margin: 0 auto;
        margin-top: px2rem(100);
      }
    }
  }
</style>