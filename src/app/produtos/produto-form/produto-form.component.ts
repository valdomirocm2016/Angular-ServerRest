import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  preserveWhitespaces: true
})
export class ProdutoFormComponent implements OnInit {

  private produtoIndex: number;
  private isNew: boolean = true;
  private produto: Produto;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService) { }

  ngOnInit() {

    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.produtoIndex = params['id'];
          this.produtoService.get(this.produtoIndex)
          .subscribe(data => this.produto = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.produto = new Produto();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/produtos']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.produtoService.add(this.produto);
    } else {
      result = this.produtoService.update(this.produto);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
    });
  }

  excluir() {
    if (this.produto.id == null) {
      alert('Selecione algum Produto');
    } else {
      if (confirm('Você realmente quer excluir o produto '+this.produto.name+'?')) {
        this.produtoService.remove(this.produto.id)
        .subscribe(
          data => alert('Produto removido '+data),
          err => {
            alert('Produto não removido');
          });
          this.novo();
          this.voltar();
      }
    }
  }

}
