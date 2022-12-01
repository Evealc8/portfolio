import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
// http = alias
  constructor(private http:HttpClient) { }
// metodo observable que devuelve datos
// funcion obtener datos
  getDatos():Observable<any>{
    return this.http.get('./assets/bd.json');
  }
}
