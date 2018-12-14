import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

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
  styles: [],
  providers: [DataService]
})
export class UserDetailsComponent implements OnInit {
  user: object
  id: string
  constructor(private route: ActivatedRoute, private data: DataService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.user = this.data.getDataById(this.id)
    })
  }

  ngOnInit() {
    console.log(this.id, this.data.getDataById(this.id))
    // this.user = this.data.getDataById(this.id)
  }
}
