import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

import { AppareilService } from './services/appareil.service'
import { AuthService } from './services/auth.service';
import { AuthGard } from './services/auth-gard.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {path: 'appareils', canActivate:[AuthGard], component:AppareilViewComponent},
  {path: 'appareils/:id',  canActivate:[AuthGard], component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'edit', canActivate:[AuthGard], component: EditAppareilComponent},
  {path: 'users', canActivate:[AuthGard], component: UserListComponent},
  {path: 'new-user', component: NewUserComponent },
  {path: '', canActivate:[AuthGard], component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo:'/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, UserService, AuthGard],
  bootstrap: [AppComponent]
})
export class AppModule { }
