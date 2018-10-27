import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppServiceProvider {
  url: string = '../assets';

  constructor(public http: HttpClient) {
    console.log('Hello AppServiceProvider Provider');
  }

  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return new Observable((subscriber) => {
      this.http.get(this.url + '/' + endpoint, reqOpts).subscribe(
        (response) => {
          console.log(`Http GET Request to URL: ${this.url} successful`);
          subscriber.next(response);
        }, (error) => {
          console.log(`Http GET Request to URL: ${this.url} failed`);
          Observable.throw(error);
        }
      );
    }); 
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return new Observable((subscriber) => {
      this.http.post(this.url + '/' + endpoint, body, reqOpts).subscribe(
        (response) => {
          console.log(`Http POST Request to URL: ${this.url} successful`);
          subscriber.next(response);
        }, (error) => {
          console.log(`Http GET Request to URL: ${this.url} failed`);
          Observable.throw(error);
        }
      );
    })
    
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

}
