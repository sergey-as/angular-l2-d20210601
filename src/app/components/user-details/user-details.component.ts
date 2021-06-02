import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {User} from "../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  fullUser: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(this.router.getCurrentNavigation()?.extras.state);
      // console.log(history.state);
      this.fullUser = this.router.getCurrentNavigation()?.extras.state as User;
    })
  }

  ngOnInit(): void {
  }

}
