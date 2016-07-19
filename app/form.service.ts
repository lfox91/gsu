import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Observable }    from 'rxjs/Observable';

//TODO: Add storedetail method befor promise

@Injectable()
export class FormService {
  constructor(private http: Http) { }
  private apiUrl = '//timeoffrequest.azurewebsites.net/api/Requests';  // URL to web api
  getUsers(): Observable<User[]> {
    return this.http
               .get(this.apiUrl)
               .map(this.extractData)
               .catch(this.handleError);
  }
  getDetails(id: number): Observable<User> {
    let url = `${this.apiUrl}/${id}`;

    return this.http
               .get(url)
               .map(this.extractData)
               .catch(this.handleError)
  }
  private post(user: User): Observable<User> {
    let body = JSON.stringify( user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
               .post(this.apiUrl, body, options)
               .map(this.extractData)
               .catch(this.handleError);
  }
  private put(user: User) {
    let body = JSON.stringify( user );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.apiUrl}/${user.id}`;

    console.log(`updating user with id ${user.id}`)
        console.log('from put request ' + JSON.stringify(user))
    return this.http
               .put(url, body, options)
               .map(this.extractData)
               .catch(this.handleError);
  }
  delete(user: User) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.apiUrl}/${user.id}`;

    return this.http
               .delete(url, headers)
               .map(this.extractData)
               .catch(this.handleError);
  }
  save(user: User) {
    this.find(user).subscribe( found => {
      if ( found ) {
        console.log('putting User');
        return this.put(user).subscribe(res=>this.getUsers().subscribe(users=>{console.log(users)}));
      }
      console.log('posting User');
      ++user.id;
      return this.post(user).subscribe(res=>this.getUsers().subscribe(users=>{console.log(users)}));
    })
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log('extract body: f.s 69: '+ body);
    return body || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  private find(user: User): Observable<boolean> {
    return this.getUsers().map(
      userArr => {
        var index: number = userArr.findIndex(
          function ( el ) {
            console.log(`el: ${JSON.stringify(el)}`);
            console.log(`User: ${JSON.stringify(user)}`);
            return el.lastName == user.lastName && el.firstName == user.firstName;
        });
        return index>-1 && userArr.length >0;
      }
    );
  }
}
