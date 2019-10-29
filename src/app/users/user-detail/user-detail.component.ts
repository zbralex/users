import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Address, Users, UsersService} from '../../services/users.service';
import {Meta, Title} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
    animations: [
        trigger('box', [
            state('start', style({
                fontSize: '40px'
            })),
            state('end', style({
                fontSize: '14px',
            })),
            transition('start<=>end', [
                style({color: 'violet'}),
                animate(500)
            ]),
            transition('* <=> special', [
                style({background: 'green'}),
                animate(200, style({
                    background: 'red',
                    fontSize: '44px'
                })),
                animate(500)
            ]),
            transition('void => *', [
                style({
                    opacity: 0,
                    fontSize: '10px'
                }),
                animate('850ms')
            ])
        ])
    ]
})
export class UserDetailComponent implements OnInit {
    boxState: string;
    visible: boolean = true;
    user: Users[] = [];
    userAddress: Address[] = [];
    constructor(  private route: ActivatedRoute,
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
  this.boxState = 'start';
}

    goBAckButton() {
        this.router.navigate(['/users']);
        this.title.setTitle('Users');
    }

    loadAddress(id: number) {
        return this.userServise.getById(id)
            .subscribe(userAddress => {
                this.userAddress = userAddress.address;
                console.log(this.userAddress);
                this.boxState = 'end';
            });
    }
}
