import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData()
  {
    return this.http.get('https://mocki.io/v1/04cd9c09-4640-4ad4-9077-3b1e32d3dfe9')
  }
}
