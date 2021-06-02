import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User; // = u

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.user);
  }

  goToDetails(): void {
    // this.router.navigate(['users', this.user.id]); // users/:id
    // this.activatedRoute.url.subscribe(value => console.log(value));
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user}); // users/:id

  }
}
