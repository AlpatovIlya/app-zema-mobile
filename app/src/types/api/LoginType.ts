import {ApiUser} from './ApiUser';

interface Data {
  token: string;
  user: ApiUser;
}

export interface LoginApiType {
  status: string;
  message: string;
  data: Data;
}
