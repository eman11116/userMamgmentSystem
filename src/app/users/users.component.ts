import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
usersList:User[]=[]
  constructor(private _UserService:UserService ){}
getUserData(){
this._UserService.getUserList().subscribe((data:any)=>{
  console.log(data);
    this.usersList=data.users;

})
}
ngOnInit(): void {
  this.getUserData();
}
}
