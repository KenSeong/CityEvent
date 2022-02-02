import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { usersdata } from '../models/usersdata.model';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent implements OnInit {
  name='John Doe';
  localisation='Creil';
  imgprofil='/assets/img/PhotoProfil.jpg';

  
  user:usersdata|null=null;
  
  constructor(private router:Router, private route:ActivatedRoute, private storage: UserStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
    this.user = this.storage.getUser(param.get('id')) as users;
    })
  }

}
