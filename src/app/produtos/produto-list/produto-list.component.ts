import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  preserveWhitespaces: true
})
export class ProdutoListComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.getAll()
      .subscribe(data => this.produtos = data,
        err => alert('aconteceu um erro ' + err)
      );
    this.produtoService.produtosChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.produtos = data
      )
    );
  }
  

}
