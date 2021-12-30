import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  getListCliente(): Observable<any>{
    return this.http.get<any>(`${API_PATH}Cliente`);
  }

  postListCliente(data: any){
    return this.http.post<any>(`${API_PATH}Cliente`, data);
  }

  putListCliente(id:any,val: any){
    return this.http.put<any>(`${API_PATH}Cliente/${id}`, val);
  }
  
  deleteListcliente(val: any){
    return this.http.delete(`${API_PATH}Cliente/` + val);
  }
}
