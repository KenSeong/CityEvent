import { Injectable } from '@angular/core';
import { usersdata } from './models/usersdata.model';
let usersJsonFile = require ('../assets/data.json');

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }
}
