import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const userRoutres: Routes =[{
  path: 'users', component: UsersComponent,
  children: [{
    path: ':id', component: UserDetailsComponent
  }] 

}]

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutres)
  ]
})
export class UsersModule { }
