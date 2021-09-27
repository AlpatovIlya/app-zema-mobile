import {Account, User} from '../models';
import {api} from './axios/api';

const signInByPhoneAndPassword = async (
  phone: string,
  password: string,
): Promise<Account> => {
  const {data: data} = await api.post('/login', {
    phone,
    password,
  });
  const user = User.getUserByApi(data.user);
  const account = new Account(user, data.token);

  return account;
};

export default {signInByPhoneAndPassword};
