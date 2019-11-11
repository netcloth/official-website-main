<!--
 * @Description: 生态发展
 * @Date: 2019-09-26 17:00:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-21 17:19:04
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
        <div class="Ecosystem-architecture-center-left">
          <div :class="[{ 'selected': check=='user' }, 'Ecosystem-architecture-center-left-centet']" @click='ChangeSelected("user")'>
            <span>{{$t('EcosystemArch.titleO')}}</span>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/user.png" width="336px">
          </div>
          <div :class="[{ 'selected': check=='application' }, 'Ecosystem-architecture-center-left-centet']" @click='ChangeSelected("application")'>
            <span>{{$t('EcosystemArch.titleT')}}</span>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/application.png" v-show='language=="zh"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/application-en.png" v-show='language=="en"'>
          </div>
          <div :class="[{ 'selected': check=='nodeLayer' }, 'Ecosystem-architecture-center-left-centet']" @click='ChangeSelected("nodeLayer")'>
            <span>{{$t('EcosystemArch.titleS')}}</span>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/nodeLayer.png" v-show='language=="zh"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/nodeLayer-en.png" v-show='language=="en"'>
          </div>
          <div :class="[{ 'selected': check=='basic' }, 'Ecosystem-architecture-center-left-centet']" @click='ChangeSelected("basic")'>
            <span>{{$t('EcosystemArch.titleF')}}</span>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/basic.png" v-show='language=="zh"'>
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/basic-en.png" v-show='language=="en"'>
          </div>
        </div>
        <div class="Ecosystem-architecture-center-right">
          <div class="Ecosystem-architecture-center-right-center" v-show='check=="user"'>
            <div class="Ecosystem-architecture-center-right-center-t">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/user-phone.png" alt="" srcset="">
            </div>
            <div class="Ecosystem-architecture-center-right-center-title">
              {{$t('EcosystemArch.titleO')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-message">
              {{$t('EcosystemArch.messageO')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-b">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/user.png" width="200px">
            </div>
          </div>
          <div class="Ecosystem-architecture-center-right-center" v-show='check=="application"'>
            <div class="Ecosystem-architecture-center-right-center-t">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/application-phone.png" alt="" srcset="">
            </div>
            <div class="Ecosystem-architecture-center-right-center-title">
              {{$t('EcosystemArch.titleT')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-message">
              {{$t('EcosystemArch.messageT')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-b">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/application.png" width="200px" v-show='language=="zh"'>
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/application-en.png" width="200px" v-show='language=="en"'>
            </div>
          </div>
          <div class="Ecosystem-architecture-center-right-center" v-show='check=="nodeLayer"'>
            <div class="Ecosystem-architecture-center-right-center-t">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/nodeLayer-phone.png" alt="" srcset="">
            </div>
            <div class="Ecosystem-architecture-center-right-center-title">
              {{$t('EcosystemArch.titleS')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-message">
              {{$t('EcosystemArch.messageS')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-b">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/nodeLayer.png" height="44px" v-show='language=="zh"'>
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/nodeLayer-en.png" height="44px" v-show='language=="en"'>
            </div>
          </div>
          <div class="Ecosystem-architecture-center-right-center" v-show='check=="basic"'>
            <div class="Ecosystem-architecture-center-right-center-t">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/basic-phone.png" alt="" srcset="">
            </div>
            <div class="Ecosystem-architecture-center-right-center-title">
              {{$t('EcosystemArch.titleF')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-message">
              {{$t('EcosystemArch.messageF')}}
            </div>
            <div class="Ecosystem-architecture-center-right-center-b">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/basic.png" width="200px" v-show='language=="zh"'>
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/basic-en.png" width="200px" v-show='language=="en"'>
            </div>
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
      return UserModule.language;
    }
    GoRouter() {
      window.open('http://chat-app.netcloth.org');
    }
  }
</script>
<style lang="scss" scoped>
  .Ecosystem-centent {
    box-sizing: border-box;
    position: relative;

    .Ecosystem-header {
      height: 500px;
      text-align: center;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/bg.png');
      padding-top: 227px;

      &-title {
        height: 50px;
        font-size: 36px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;

      }

      &-message {
        height: 33px;
        font-size: 24px;
        font-weight: 300;
        color: rgba(255, 255, 255, .7);
        line-height: 33px;
        margin-top: 20px;
      }
    }

    .Ecosystem-solutions {
      height: 705px;
      background: rgba(255, 255, 255, 1);
      padding-top: 103px;
      text-align: center;

      &-title {
        height: 54px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 54px;
        margin-bottom: 79px;
      }

      &-center {
        ul:last-child {
          margin-top: 50px;
        }

        li {
          width: 400px;
          display: inline-block;
          vertical-align: top;
          text-align: left;
        }

        &-header {
          height: 48px;
          font-size: 20px;
          font-weight: normal;
          color: rgba(23, 33, 60, 1);
          line-height: 48px;
          background-repeat: no-repeat;
          background-position-y: 10px;
          background-size: 25px;
          padding-left: 56px;
          margin-right: 39px;
        }

        .account {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/account.png');
        }

        .encryption {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/encryption.png');
        }

        .Blockchain {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/Blockchain.png');
        }

        .trustworthy {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/trustworthy.png');
        }

        .calculation {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/calculation.png');
        }

        .link {
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/link.png');
        }

        &-centent {
          width: 320px;
          font-size: 15px;
          font-weight: 300;
          color: rgba(131, 134, 144, 1);
          line-height: 25px;
          margin-top: 10px;
          padding-left: 56px;
        }
      }
    }

    .Ecosystem-architecture {
      height: 893px;
      background: rgba(249, 250, 253, 1);
      padding-top: 92px;
      text-align: center;

      &-title {
        height: 54px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 54px;
        margin-bottom: 84px;
      }

      &-center {

        &-left,
        &-right {
          height: 584px;
          text-align: center;
          display: inline-block;
          vertical-align: top;
        }

        &-left {
          padding: 67px 0;
          margin-right: 90px;

          .selected {
            font-weight: bold;
            background: rgba(255, 255, 255, 1);
          }

          &-centet {
            display: flex;
            align-items: center;
            width: 550px;
            height: 112px;
            line-height: 112px;
            font-size: 18px;
            font-weight: 400;
            color: rgba(23, 33, 60, 1);

            span {
              width: 110px;
              text-align: left;
              margin: 0 40px;
            }
          }
        }

        &-right {
          width: 461px;
          padding: 16px;
          padding-top: 73px;
          padding-left: 124px;
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/phone.png');
          background-size: 100%;

          &-center {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 240px;
            height: 425px;
            padding-top: 38px;
            padding-bottom: 20px;

            &-title {
              font-size: 20px;
              font-weight: 500;
              color: rgba(23, 33, 60, 1);
            }

            &-message {
              width: 238.9px;
              height: 220px;
              font-size: 12px;
              font-weight: normal;
              color: rgba(87, 89, 96, 1);
              text-align: center;
              line-height: 20px;
              transform: scale(0.9);
            }

            &-center {
              text-align: center;
            }
          }
        }
      }
    }

    .Ecosystem-applications {
      height: 895px;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      padding-top: 102px;

      &-title {
        height: 44px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(23, 33, 60, 1);
        line-height: 44px;
        padding-bottom: 99px;
      }

      &-centent {

        div {
          display: inline-block;
          vertical-align: top;
        }

        div:not(:last-child) {
          margin-right: 40px;
        }

        .NetClothApp {
          position: relative;
          width: 340px;
          height: 400px;
          text-align: left;
          border-radius: 12px;
          box-shadow: 0px 5px 5px 0px rgba(232, 234, 240, 0.75);
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/Netcloth-APP.png');

          span {
            display: block;
            position: relative;
            top: 300px;
            padding-left: 25px;
          }

          &-title {
            font-size: 16px;
            font-weight: 600;
            color: rgba(23, 33, 60, 1);
            line-height: 22px;
          }

          &-message {
            width: 290px;
            font-size: 12px;
            font-weight: normal;
            color: rgba(131, 134, 144, 1);
            line-height: 18px;
          }
        }

        .js1 {
          width: 340px;
          height: 400px;
          border-radius: 12px;
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/js1.png');
        }

        .js2 {
          width: 340px;
          height: 400px;
          border-radius: 12px;
          background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.0.8/dist/images/ecosystem/js2.png');
        }

        .js1,
        .js2 {
          font-size: 24px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 400px;
        }
      }

      &-btn {
        width: 260px;
        height: 50px;
        background: rgba(220, 23, 62, 1);
        border-radius: 4px;
        font-size: 18px;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        margin: 0 auto;
        margin-top: 100px;
      }

      &-btn:hover {
        background: #d30931;
      }
    }
  }
</style>