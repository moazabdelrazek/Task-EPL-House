import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServicesApiService {

  constructor(private http: HttpClient) { }

  // //
  getListPost() {
    return this.http.get('../../assets/data.json')
  }
}
