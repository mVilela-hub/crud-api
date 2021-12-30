import { ICliente } from './IClientes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService { 
  
  constructor(private httpCliente: HttpClient) { }
  
  GetAll() {
    return this.httpCliente.get<ICliente[]>(`${API_PATH}Cliente`).toPromise();
  }

  GetById(id: number) {
    return this.httpCliente.get<ICliente[]>(`${API_PATH}Cliente/${id}`).toPromise();
  }

  Post(cliente: ICliente){
    return this.httpCliente.post<ICliente>(`${API_PATH}Cliente`, cliente).toPromise();
  }
  
  Put(cliente: ICliente){
    return this.httpCliente.put<ICliente>(`${API_PATH}Cliente/${cliente.id}`, cliente).toPromise();
  } 
  
  Delete(id: number){
    return this.httpCliente.delete<ICliente>(`${API_PATH}Cliente/${id}`).toPromise()
  }
}
