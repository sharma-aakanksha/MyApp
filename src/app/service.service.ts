import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICovid } from './ICovid';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  res:any;
  constructor(private http: HttpClient) { }
  getService(){
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
     return this.http.get<ICovid[]>("https://coronavirus-19-api.herokuapp.com/countries")
    }
}
