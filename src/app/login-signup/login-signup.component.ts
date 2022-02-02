import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../authentification.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor( private router :Router, private route :ActivatedRoute, private login :LoginService) {

   }

   emailValue = new FormControl ("");
   passwordValue = new FormControl ("");

  ngOnInit(): void {
    
  }

  connexion(){
    this.login.init();
    let user = this.login.verificationSignIn(this.emailValue.value, this.passwordValue.value);
    console.log(user);
    
    if (user){
      this.router.navigate(["/profil/", user.id]);
    } else {
      alert('Mauvaises coordonées');
    }
   
  }



}
