/*
 * @Description: 主文件
 * @Date: 2019-09-22 14:15:58
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-27 20:34:35
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import i18n from './lang';
import 'normalize.css'; // CSS重置的现代替代方案
import '../public/font/common.scss'; // 自定义字体
import './styles/flexible.js'; // 移动端自适应


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
