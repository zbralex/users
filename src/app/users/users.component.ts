import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users, UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
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
