/*
 * @Description: user信息模块
 * @Date: 2019-09-27 10:08:00
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2019-09-28 12:29:16
 */
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface IUserState {
  language: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public language = localStorage.getItem('language') || 'zh';

  @Mutation
  private SET_LANGUAGE(language: string) {
    this.language = language;
  }

  // tslint:disable-next-line:member-ordering
  @Action
  public async ResetLanguage(language: string) {
    this.SET_LANGUAGE(language);
  }

}

export const UserModule = getModule(User);
