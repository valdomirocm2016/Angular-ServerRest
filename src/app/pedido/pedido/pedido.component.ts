import { Component, OnInit } from '@angular/core';
import { PedidoServiceService } from '../pedido-service.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private pedidoService: PedidoServiceService) { }

  pedidos: Pedido[] = [];

  ngOnInit() {
    this.pedidoService.getAll()
    .subscribe(data => this.pedidos = data,
      err => alert('aconteceu um erro ' + err)
    );
  }

}
