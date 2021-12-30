import { ICliente } from './IClientes';
import { Observable } from 'rxjs';
import { ClienteService } from './cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-api';
  constructor (private clienteService: ClienteService){

  }
  
  getAllCliente() {
    this.clienteService.GetAll()
    .then(cliente => console.log(cliente))
    .catch(error => console.error(error));
  }

  getByIdCliente() {
    this.clienteService.GetById(1)
    .then(cliente => console.log(cliente))
    .catch(error => console.error(error));
  }

  postCliente() {
    const Cliente: ICliente = {
      Nome: "Francisco",
      Sobrenome: "Rezende"
    };
    
    this.clienteService.Post(Cliente)
    .then(cliente => console.log("Adicionado com sucesso!"))
    .catch(error => console.error(error));
  }

  putCliente() {
    const Cliente: ICliente = {
      id: 10,
      Nome: "Chico",
      Sobrenome: "Rezende"
    };

    this.clienteService.Put(Cliente)
    .then(cliente => console.log("Atualizado com sucesso !"))
    .catch(error => console.error(error));
  }
  
  deleteCliente(){
    this.clienteService.Delete(10)
    .then(cliente => console.log("Deletado com sucesso !"))
    .catch(error => console.error(error));
  }

  
}
