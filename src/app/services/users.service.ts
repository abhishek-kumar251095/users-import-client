import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsersList(page:number):Observable<any> {

    const href = 'https://users-import-server.herokuapp.com/user';
    const requestUrl =
        `${href}?page=${page + 1}`;
    return this.http.get(requestUrl);
  }
}
