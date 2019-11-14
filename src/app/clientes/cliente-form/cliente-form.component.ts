import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  private clienteIndex: number;
  private isNew: boolean = true;
  private cliente: Cliente;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clienteService: ClientesService) { 
              }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.clienteIndex = params['id'];
          this.clienteService.get(this.clienteIndex)
          .subscribe(data => this.cliente = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.cliente = new Cliente();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/clientes']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.clienteService.add(this.cliente);
    } else {
      result = this.clienteService.update(this.cliente);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
    err => {
      alert("An error occurred. "+ err);
    });
  }

  excluir() {
    if (this.cliente.id == null) {
      alert('Selecione algum cliente');
    } else {
      if (confirm('Você realmente quer excluir o cliente '+this.cliente.name+'?')) {
        this.clienteService.remove(this.cliente.id)
        .subscribe(
          data => alert('Cliente removido '+data),
          err => {
            alert('Cliente não removido');
          });
          this.novo();
          this.voltar();
      }
    }
  }

}
