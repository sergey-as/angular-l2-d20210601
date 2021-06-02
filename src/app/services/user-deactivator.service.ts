import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserDeactivatorService implements CanDeactivate<any>{

  constructor() {
  }

  // canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  canDeactivate(): boolean {
    return confirm('leave from users page?');
  }

}
