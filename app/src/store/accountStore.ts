import {makeAutoObservable} from 'mobx';
import {Alert} from 'react-native';
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
    try {
      Alert.alert('Начало');
      this.isLoading = true;
      this.user = await accountService.signIn(phone, password);
    } catch (e) {
      Alert.alert('конец');
      this.isLoading = false;
    }
  }
}

const accountStore = new AccountStore();

export default accountStore;
