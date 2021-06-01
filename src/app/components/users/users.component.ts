import {Component, OnInit} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // users: any[];
  users: User[];

  // private  httpClient: HttpClient;
  //
  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }
  // constructor(private httpClient: HttpClient) {
  constructor(private userSevice: UserService) {

  }

  ngOnInit(): void {
    // this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
    //   .subscribe(value => this.users = value)
    this.userSevice.getUsers().
    subscribe(value => this.users = value)
  }

}
