import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PostFormComponent} from './post-form/post-form.component';
import {PostComponent} from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    UsersComponent,
    UserDetailComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RoutingModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatProgressBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
