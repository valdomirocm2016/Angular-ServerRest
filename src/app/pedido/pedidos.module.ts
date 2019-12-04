import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRouting } from './pedidos.routing';
import { PedidoServiceService } from './pedido-service.service';
import { PedidoComponent } from './pedido/pedido.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,PedidosRouting,FormsModule
      ],
      declarations: [ PedidoComponent],
      providers: [PedidoServiceService]
  })
  export class PedidosModule { }