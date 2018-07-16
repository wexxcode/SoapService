import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://api.apixu.com/v1/current.xml?key=8ef305095daf4ba0a3f141611181607&q=Paris';

  constructor(private http: HttpClient) { }

  getData() {
    return this
            .http
            .get(this.url, {responseType: 'text' });
        }

}
