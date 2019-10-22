import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
export interface Users {
  id?: number;
  name: string;
  username: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GEO;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface GEO {
  lat: string;
  lng: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public fetchUsers(): Observable<Users> {
    return this.http.get<Users>('http://jsonplaceholder.typicode.com/users');
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }

  public addUser(user: Users): Observable<Users> {
    return this.http.post<Users>( 'http://jsonplaceholder.typicode.com/users', user);
  }
  public getById(id: number): Observable<any> {
    return this.http.get<any>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
