import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { usersdata } from '../models/usersdata.model';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

// Hobbies:[]=[{sport ='"<i class="bi bi-incognito icon-activity"></i>"'}
//   ,
//   cinema='"<i class="bi bi-incognito icon-activity"></i>"',
//   art:'<i class="bi bi-incognito icon-activity"></i>',
//   litterature:<i class="bi bi-incognito icon-activity"></i>"
// ]


export class CompteComponent implements OnInit {
  // name='John Doe';
  // region='Creil';
  // imgprofil='/assets/img/PhotoProfil.jpg'; //avatar dans le code céline
  

  user:usersdata|null=null;
  

  constructor(private router:Router, private route:ActivatedRoute, private storage: UserStorageService) { }

  ngOnInit(): void {
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
    this.user = this.storage.getUser(param.get('userid')) as usersdata;
    })
    console.log(this.user);
    console.log(this.user?.hobbies);
  }
  useravat : string= "wallpaper.jpg"; // faire l'acquisition en dynamique

  



}
