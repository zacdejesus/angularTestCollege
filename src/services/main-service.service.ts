import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacter(id : number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
