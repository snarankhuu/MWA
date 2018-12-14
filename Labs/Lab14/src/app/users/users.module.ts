import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundGuard } from './not-found.guard';

const userRoutres: Routes =[{
  path: 'users', component: UsersComponent,
  children: [{
    path: ':id', component: UserDetailsComponent, canActivate: [NotFoundGuard]
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
