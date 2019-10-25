import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Users, UsersService} from '../../services/users.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user: Users[] = [];
  constructor(private route: ActivatedRoute,
              private userServise: UsersService,
              private title: Title,
              private meta: Meta,
              private router: Router) {
  }

  ngOnInit(): void {
  this.route.data.subscribe(users => {
          this.user = users.user;
            // seo-tags
          this.title.setTitle(users.user.name);
          this.meta.addTags([
            {name: users.user.username},
            {content: users.user.email}
          ]);
        } );
}

    goBAckButton() {
        this.router.navigate(['/users']);
        this.title.setTitle('Users');
    }
}
