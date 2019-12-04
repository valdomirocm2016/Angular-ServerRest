import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from './pedido';

@Injectable()
export class PedidoServiceService {

  private url: string = "http://localhost:8080/orders";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedido[]> {
  
    return this.http.get<Pedido[]>(this.url,{headers:this.getHeaders()})
            .map(res => res)
            .catch(this.handleError);         
  }

  private handleError(error: any) {
    let erro = error.messsage || 'Server error';
    console.error('Ocorreu um erro  ',error);
    return Observable.throw(erro);
  }
  private getHeaders() {
   
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '
    + JSON.parse(localStorage.getItem('token'))});

    return headers;
  }
}
