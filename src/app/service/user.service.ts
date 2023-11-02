import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string;
  private login:boolean;

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  setLogin(option:boolean){
    this.login=option;
  }

  getLogin():boolean{
    return this.login;
  }
}
