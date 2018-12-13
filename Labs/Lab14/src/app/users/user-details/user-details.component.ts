import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <p>
      Name: {{ user.name.title }}  {{ user.name.first }}  {{ user.name.last }}
    </p>
    <p>
      Gender: {{ user.gender }} 
    </p>
    <p>
      Email: {{ user.email }} 
    </p>
    <p>
      Phone: {{ user.phone }} Cell: {{user.cell}}
    </p>
    <p>
     <img src="{{user.picture.large}}">
    </p>
    <p>
    City: {{ user.location.city }} State: {{user.location.state}} Street: {{user.location.street}}
   </p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  user: object
  id: string
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id'] })
  }

  ngOnInit() {
    JSON.parse(localStorage.getItem("users")).forEach(e => {
      console.log(e.login.uuid)
      if (e.login.uuid == this.id) {
        this.user = e;
        console.log(e)
      }
    });

  }

}
