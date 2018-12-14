import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataService ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.dataService.getDataById(next.params.id)) return true;

    this.router.navigate(['/404']);
  }
}
