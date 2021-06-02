import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<any[]> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   return new Promise((res, reject) => {
  //     setTimeout(() => {
  //       res('done');
  //       console.log('data received')
  //     }, 5000)
  //   });
  // }


}
