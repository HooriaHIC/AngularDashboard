import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUserBilling() {
    return this.http.get('https://my-json-server.typicode.com/hooriahic/api/billing/')
  }
}
