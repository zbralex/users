import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UserDetailComponent} from '../users/user-detail/user-detail.component';
import {UserResolver} from '../user.resolver';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailComponent, resolve: { user: UserResolver}},
  {path: 'user-address', loadChildren: () => import('../users/user-detail/user-address/user-address.module').then(m => m.UserAddressModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
