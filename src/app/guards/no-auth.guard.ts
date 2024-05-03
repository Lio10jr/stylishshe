import { SesionService } from './../services/sesion.service';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  servAuth = inject(SesionService);
  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user = localStorage.getItem('user');

    return new Promise(async (resolve) => {
      this.servAuth.getAuth().onAuthStateChanged((auth) => {
        if (!auth) resolve(true);
        else {
          this.router.navigate(['inicio']);
          resolve(false);
        }
      })

    });
  }
}
