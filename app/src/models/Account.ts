import User from './User';

class Account {
  user: User;
  token: string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}

export default Account;
/// ======
