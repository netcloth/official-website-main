/*
 * @Description: VUEX配置文件
 * @Date: 2019-09-27 10:07:28
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-27 10:18:51
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { IUserState } from './modules/user';

Vue.use(Vuex);

export interface IRootState {
    user: IUserState;
}

export default new Vuex.Store<IRootState>({});
