import { ICliente } from './../IClientes';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  ClienteList: any = [];
  @Input() cli:any;
  dataSpliceId: any = [];
  dataSplicePut: any = [];



  ngOnInit(): void {
    this.mostrarListCliente();

  }
  
  mostrarListCliente(){
    this.service.getListCliente().subscribe(data =>{
      this.ClienteList=data
    });
  }
  getUserFormDataPost(data:any){
    console.warn(data);
    this.service.postListCliente(data).subscribe((result => {
      console.warn(result)
    }))
  }
  
  deleteClick(item: any){
    if(confirm('Tem certeza ?')){
      this.service.deleteListcliente(item.id).subscribe(data => {
        alert("Deletado com sucesso"), data;
      })
    }
  }

  getUserFormDataPut(dataput: any){
    const resultArray = Object.keys(dataput).map(index => {
      let dataputList = dataput[index];
      return dataputList;

    }); 
    this.dataSpliceId = resultArray[0];
    this.dataSplicePut = resultArray.splice(1,2);
    console.warn(this.dataSpliceId);
    console.warn(this.dataSplicePut);
    const objectPut = {
      "nome" : this.dataSplicePut[0],
      "Sobrenome": this.dataSplicePut[1]
    }
    this.service.putListCliente(this.dataSpliceId,objectPut).subscribe(data =>{
      alert("Atualizado com sucesso!"), data
    })
  }

}
