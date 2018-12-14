import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get('https://randomuser.me/api/?results=10')
  }

   getDataById(id: string): any {
    // return JSON.parse(localStorage.getItem("users")).forEach(e => {
    //   if (e.login.uuid == id) {
    //     console.log(e)
    //     return e;
    //   }
    // })

    return JSON.parse(localStorage.getItem("users")).find((user) => user.login.uuid == id);
  }
}
