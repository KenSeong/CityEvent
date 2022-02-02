import { Injectable } from '@angular/core';
let loginData = require("../assets/data.json");
import { User } from './models/User.model';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

users: User [] = [];
mesHobbies: User [] = [];
regions: User [] = [];


  constructor() { }

initialized: boolean = false;

init() {

  if(this.initialized) {
    return;
  }

  for (const user of loginData.Users) {
    this.users.push(new User(user.id, user.email, user.password,));
  }


this.initialized = true;
}

getUSer(id:string | null):User | null{
this.init();

  let user: User|null=null;
  for (let i=0 ; i< this.users.length; i++){
    if(id === this.users[i].id){
      user = this.users[i];
      break;
    }
    else{
      user = null;
    }
  }
  return user;
}

verificationSignIn(email: string, password: string){

  let user: User|null = null;
    
  for (let i = 0; i < this.users.length ; i++ )
  {
    if( email === this.users[i].email && password === this.users[i].password){
      user = this.users[i];
      break;
    }
  }
  return user;
}

createUser(user: User){

this.init();
this.users.push(user);

}

// valueHobbies(){

//   for (const user of loginData.Hobbies) {
//     this.mesHobbies.push(new User(user.listHobbies))
    
//     console.log();
//   }
// }
}






