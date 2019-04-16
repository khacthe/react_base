import { BaseApi } from './api';

class User extends BaseApi {
  getUsers() {
    return this.client.get('/users');
  }
}

export const UserApi = new User();