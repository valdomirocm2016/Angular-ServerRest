import { Produto } from "./produto";
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { JsonPipe } from "@angular/common";


@Injectable()
export class ProdutosService {


  private url: string = "http://localhost:8080/products";

  produtosChanged = new EventEmitter<Observable<Produto[]>>();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
  
    return this.http.get<Produto[]>(this.url+'/list',{headers:this.getHeaders()})
            .map(res => res)
            .catch(this.handleError);         
  }

  private handleError(error: any) {
    let erro = error.messsage || 'Server error';
    console.error('Ocorreu um erro  ',error);
    return Observable.throw(erro);
  }

  add(produto: Produto) {
    return this.http.post(this.url,JSON.stringify(produto),
    {headers: this.getHeaders()})
    .do(data => this.produtosChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(produto: Produto) {
    return this.http.put(this.url+'/'+produto.id,JSON.stringify(produto),
    {headers: this.getHeaders()})
    .do(data => this.produtosChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
           {headers: this.getHeaders()})
           //.map(res => res.json())
           .do(data => this.produtosChanged.emit(this.getAll()))
           .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
           .map((list: any) => list.find(produto => produto.id == id))
           .catch(this.handleError);
  }

  private getHeaders() {
   
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '
    + JSON.parse(localStorage.getItem('token'))});

    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }


}