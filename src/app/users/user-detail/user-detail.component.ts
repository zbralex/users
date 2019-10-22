import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Users, UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user: Users[];
  constructor(private route: ActivatedRoute,
              private userServise: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      this.user = this.userServise.getById(params.id)
          .subscribe(resp => {
            this.user = resp;
          })
      console.log('USER', this.user);
    });
  }

}
