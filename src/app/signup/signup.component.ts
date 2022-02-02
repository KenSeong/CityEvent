import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../authentification.service';
import { User } from '../models/User.model';
import uniqid from 'uniqid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: string [] = []
  selectedRegion: string [] = [];
  selectedHobbies: string []= [];

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private create: LoginService) { }

nameValue = new FormControl ("");
emailValue = new FormControl ("");
passwordValue = new FormControl ("");
hobbiesValue = new FormControl ("");
regionValue = new FormControl ("");

mesHobbies: string [] = [];
mesRegions: string [] = [];  

  ngOnInit(): void {
  // this.create.valueHobbies();



  }

  selectChangeHandler (event: any) {
  
    this.selectedRegion = event.target.value;
    this.selectedHobbies = event.target.value;
    
    
  }

  inscription(){
let userId = uniqid();
let newUser = new User(userId, this.nameValue.value, this.emailValue.value, this.passwordValue.value );

newUser.hobbies = this.selectedHobbies;
newUser.regions = this.selectedRegion;
console.log(newUser);

    this.create.init();

      this.create.createUser(newUser);
  }

  




}
