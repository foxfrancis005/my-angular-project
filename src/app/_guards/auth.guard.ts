import { Injectable } from '@angular/core';
import { Router,
         CanActivate,
         CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('canActivate:');
        console.dir(route.data['rol']);
        return true;
    }

    canActivateChild(){
        console.log('canActivateChild router.url:');
        console.dir(this.router.url);
        return true;
    }

}
