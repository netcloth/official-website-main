/*
 * @Description: router路由文件
 * @Date: 2019-09-22 14:15:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-10-15 13:57:20
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/web/home/index.vue';
import Development from './views/web/development/index.vue';
import Dcosystem from './views/web/ecosystem/index.vue';

import wapHome from './views/wap/home/index.vue';
import wapDevelopment from './views/wap/development/index.vue';
import wapDcosystem from './views/wap/ecosystem/index.vue';

Vue.use(Router);

const web = [{
  path: '/',
  name: 'home',
  component: Home,
},
{
  path: '/development',
  name: 'development',
  component: Development,
},
{
  path: '/ecosystem',
  name: 'ecosystem',
  component: Dcosystem,
}];

const wap = [{
  path: '/',
  name: 'home',
  component: wapHome,
},
{
  path: '/development',
  name: 'development',
  component: wapDevelopment,
},
{
  path: '/ecosystem',
  name: 'ecosystem',
  component: wapDcosystem,
}];

// 判断移动端还是pc端
const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
const clientWidth = document.body.clientWidth;
let rouMap = web;
if (flag) {
  rouMap = wap;
  console.log('移动端' + flag + clientWidth);
} else {
  rouMap = web;
  console.log('pc端');
}

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: rouMap
});