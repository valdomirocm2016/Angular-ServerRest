import { Routes, RouterModule } from "@angular/router";
import {PedidoComponent} from './pedido/pedido.component'
const   PEDIDOS_ROUTES: Routes = [
    {
        path: '',
        component: PedidoComponent
    }

];
export const PedidosRouting = RouterModule.forChild(PEDIDOS_ROUTES);