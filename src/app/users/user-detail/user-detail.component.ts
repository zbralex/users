import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Users, UsersService} from '../../services/users.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user: Users;
  constructor(private route: ActivatedRoute,
              private userServise: UsersService,
              private title: Title,
              private meta: Meta) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user;
  //   this.route.params.subscribe((params: Params) => {
  //
  //     this.userServise.getById(+params.id)
  //         .subscribe(resp => {
  //           this.user = resp;
  //           this.title.setTitle(resp.name);
  //           this.meta.addTags([
  //             {name: resp.username},
  //             {content: resp.email}
  //           ]);
  //         });
  //   });
  // }

}}
