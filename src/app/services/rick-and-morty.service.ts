import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  apiRickAndMorty = "https://rickandmortyapi.com/api";

  getCharacters(page:number = 1): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiRickAndMorty}/character?page=${page}`).pipe(map((response: any) => response.results))
  }
}
