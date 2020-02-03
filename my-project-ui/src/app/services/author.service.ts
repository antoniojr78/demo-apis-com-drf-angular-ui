import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from '../models/authors.model'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  apiURL = "http://localhost:8000/api/authors/"

  // Obs.: HttpClient From Angular (Not Sellenium)
  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get<Authors[]>(this.apiURL)
  }
}
