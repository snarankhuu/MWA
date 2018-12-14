import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users">
      <a [routerLink]="[user.login.uuid]">
        {{user.name.title}} {{user.name.first}} {{user.name.last}}
      </a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
  providers: [DataService]
})
export class UsersComponent implements OnInit {

  users: object
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      res => { console.log(res); this.users = res['results']; 
        localStorage.setItem("users", JSON.stringify(this.users)) },
      err => { console.log(err) },
      () => { console.log("Completed") }
    )
  }

}
