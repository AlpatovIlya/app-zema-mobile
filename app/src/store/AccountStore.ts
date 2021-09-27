import {User} from '../models';
import {action, computed, makeObservable, observable} from 'mobx';

interface IAcocunt {
  user: User | null;
  token: string | null;
}

class AccountStore implements IAcocunt {
  user = null;
  token = null;
  count = 0;

  constructor() {
    makeObservable(this, {
      user: observable,
      token: observable,
      count: observable,
      isLoggedIn: computed,
      increment: action,
      dicrement: action,
    });
  }
  increment() {
    this.count++;
  }
  dicrement() {
    this.count--;
  }

  get isLoggedIn() {
    return !!this.user;
  }
}
// const accountStore = new AccountStore();

export default AccountStore;
