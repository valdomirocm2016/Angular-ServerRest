import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guards';
import { LoginComponent } from './login/login/login.component';
import { PedidoComponent } from './pedido/pedido/pedido.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'clientes',
        loadChildren: () => import('app/clientes/clientes.module').then(m => m.ClientesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'pedidos',
        component: PedidoComponent

    },
    {
        path: 'produtos',
        loadChildren: () => import('app/produtos/produtos.module').then(m => m.ProdutosModule),
        canActivate: [AuthGuard]

    }
];
export const RoutingModule = RouterModule.forRoot(routes);