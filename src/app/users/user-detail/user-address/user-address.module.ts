import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserAddressComponent} from './user-address.component';



@NgModule({
  declarations: [
      UserAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      {path: '', component: UserAddressComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserAddressModule { }
