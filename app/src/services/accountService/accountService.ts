import {AxiosResponse} from 'axios';
import {User} from '../../models';
import {LoginApiType} from '../../types/api';
import {ApiAxios} from '../ApiAxios';

const signIn = async (phone: string, password: string): Promise<User> => {
  console.log(phone, password);
  try {
    const {data}: AxiosResponse<LoginApiType> = await ApiAxios.post('/login', {
      phone,
      password,
    });

    console.log(data);
    return User.createUserByApi(data.data.user);
  } catch (e) {
    console.log('error', e.message);
    throw new Error('Упс... что-то пошло не так.');
  }
};

export default {signIn};
