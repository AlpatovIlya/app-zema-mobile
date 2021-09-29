import {makeAutoObservable} from 'mobx';
import {User} from '../models';
import {accountService} from '../services';

class AccountStore {
  user?: User;
  token?: string;
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async login(phone: string, password: string) {
    console.log('start');

    try {
      this.isLoading = true;
      this.user = await accountService.signIn(phone, password);
    } catch (e) {
      this.isLoading = false;
      console.log('end');
      console.log('=========');
    }
  }
}

const accountStore = new AccountStore();

export default accountStore;
