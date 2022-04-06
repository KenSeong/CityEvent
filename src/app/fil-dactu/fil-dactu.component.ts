import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../user-storage.service';
import { usersdata } from '../models/usersdata.model';

@Component({
  selector: 'app-fil-dactu',
  templateUrl: './fil-dactu.component.html',
  styleUrls: ['./fil-dactu.component.css']
})
export class FilDactuComponent implements OnInit {

  user:usersdata | null=null;

  constructor(private router:Router, private route:ActivatedRoute, private storage: UserStorageService) { }

  ngOnInit(): void {
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
    this.user = this.storage.getUser(param.get('userid')) as usersdata;
    })
    console.log(this.user);
    console.log(this.user?.hobbies);

  }

}
