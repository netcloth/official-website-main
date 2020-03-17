<!--
 * @Description: 邮件订阅
 * @Date: 2019-09-24 22:52:50
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-29 21:18:49
 -->
<template>
  <div class="MailBox">
    <div class="MailBox-sub">{{$t('mail.Email')}}</div>
    <div class="MailBox-meg">{{$t('mail.news')}}</div>
    <div class="MailBox-in">
      <input type="text" class="MailBox-in-input" :placeholder="$t('mail.input')" ref="email_input"/>
      <div class="MailBox-in-btn" v-on:click="commit_email" >{{$t('mail.btn')}}</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  @Component
  export default class MailBox extends Vue {
    private commit_email(){
      let email =  document.getElementsByClassName('MailBox-in-input')[0].value;
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if(!reg.test(email)){
        console.log(this.$i18n);
        let xxx = this.$i18n.messages[this.$i18n.locale].mail.msg_faild1;
        alert(xxx); 
        return;
      }
      let ok_msg = this.$i18n.messages[this.$i18n.locale].mail.msg_ok;
      let faild_msg2 = this.$i18n.messages[this.$i18n.locale].mail.msg_faild2;
      let faild_msg3 = this.$i18n.messages[this.$i18n.locale].mail.msg_faild3;
      let url = '/config/email.php?language='+this.$i18n.locale+'&email='+email
      axios.get(
        url,
        {
          
          method:'get',
          withCredentials:true,
        })
      .then( (response) => {
        console.log(response);
        let res_obj = response.data;
        if(res_obj.result){
          alert(ok_msg);
        }else{
          alert(faild_msg2);
        }
      })
      .catch( (error) => {
        console.log(error)
        alert(error)
      });
    }
  }
</script>

<style lang="scss" scoped>
  .MailBox {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    background: rgba(249, 250, 253, 1);
    background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website-main@v0.2.3/dist/images/mail/mailbox.png');
    background-repeat: no-repeat;
    text-align: center;
    padding: 133px 0;

    .MailBox-sub {
      height: 54px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(23, 33, 60, 1);
      line-height: 54px;
    }

    .MailBox-meg {
      height: 20px;
      font-size: 18px;
      font-weight: 300;
      color: rgba(95, 97, 103, 1);
      line-height: 20px;
      margin-top: 10px;
    }

    .MailBox-in-input,
    .MailBox-in-btn {
      display: inline-block;
      vertical-align: top;
      margin-top: 80px;
    }

    .MailBox-in-input {
      width: 500px;
      height: 60px;
      border-radius: 4px;
      border: 2px solid rgba(23, 33, 60, 1);
      font-size: 16px;
      font-weight: 400;
      color: rgba(131, 134, 144, 1);
      text-align: left;
      margin-right: 10px;
      padding: 19px 15px;

    }

    .MailBox-in-btn {
      width: 180px;
      height: 60px;
      background: rgba(221, 22, 62, 1);
      border-radius: 4px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
    }
  }
</style>