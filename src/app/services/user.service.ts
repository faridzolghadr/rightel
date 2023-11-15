import { Injectable } from '@angular/core';
import { User } from '../models/user-model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList: User[] = [];

  constructor() { }

  getUsersList() {
    return this.usersList;
  }

  entryUser(user: User, type: 'add' | 'edit' | 'activate' | 'password') {
    if (type === 'add') {
      this.usersList.push(user);
      return;
    }

    let index = this.usersList.findIndex(it => it.id === user.id);
    if (type === 'edit' && index > -1) {
      this.usersList[index] = { ...user };
      return;
    }

    if (type === 'activate' && index > -1) {
      this.usersList[index].active = !user.active;
      return;
    }

    if (type === 'password' && index > -1) {
      this.usersList[index].password = user.password;
      return;
    }
  }


}
