import { Injectable } from '@angular/core';
import { usersdata } from './models/usersdata.model';
let usersJsonFile = require ('../assets/data.json');

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {


  users:usersdata []=[];

  constructor() { }

  initialized: boolean = false;

  init() {
  if(this.initialized) {
    return;
  } 
  for (const user of usersJsonFile.Users) {
    this.users.push(new usersdata(user.id, user.name, user.region))
  }
  this.initialized = true;
  };
  

  getUser(id:string | null):usersdata | null{
    this.init();
    let user:usersdata|null=null;
    for (let i=0 ;i< this.users.length;i++){
      if(id === this.users[i].id){
        user=this.users[i];
        break;
      }
      else{
        user =  null;
      }
    }
    return user;
  }






}
