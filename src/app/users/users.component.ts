import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users, UsersService} from '../services/users.service';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
    animations: [
        trigger('startVisible', [
            state('start', style({
                fontSize: '14px'
            })),
            transition(':enter', [
                query('a', animate('4s', keyframes([
                    style({background: 'red'}),
                    style({background: 'yellow'})
                ]))),
                style({
                    color: 'red'
                }),
                group([
                    animate(500, style({
                        fontSize: '10px'
                    })),
                    animate(250, style({
                        color: '#ccc'
                    }))
                ])
            ])
        ])
    ]
})
export class UsersComponent {
    visibleState: string;
  users: any;
  name?: '';
  userName?: '';
  isLoaded: boolean = false;

  emptyList: boolean;


  constructor(private userSevice: UsersService) { }

  public getUsers() {
      this.userSevice.fetchUsers()
          .subscribe(response => {
            this.users = response;
            this.isLoaded = !this.isLoaded;
            this.visibleState = 'start';
          });
  }

  deleteUser(id: number) {
    this.userSevice.deleteUser(id)
        .subscribe( () => {
            return this.users.filter( u => u.id !== id );
        });
  }
  addUser() {
      this.userSevice.addUser({
          name: this.name,
          username: this.userName
      }).subscribe(user => {
              this.users.push(user);

              this.name = '';
              this.userName = '';

              if (this.users.length > 11) {
              this.emptyList = false;
              console.log(this.emptyList);
          }
          });
  }
}
