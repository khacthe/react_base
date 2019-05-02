import { BaseApi } from './api';

class User extends BaseApi {
  getUsers() {
    return this.client.get('/users');
  }

  getUserDetail(name: String) {
    return this.client.get(`/users/${name}`);
  }

  getUserRepos(name: String) {
    return this.client.get(`/users/${name}/repos`);
  }
}

export const UserApi = new User();