import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
