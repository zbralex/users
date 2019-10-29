import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Users, UsersService} from '../../../services/users.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class UserAddressResolver implements Resolve<Users> {
    constructor(private userService: UsersService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Users> | Promise<Users> | Users {
        return this.userService.getById(+route.params['id']);
    }

}
