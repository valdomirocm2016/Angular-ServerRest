import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.router';
import { LoginComponent } from './login/login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { AuthGuard } from './login/login-guards';
import { PedidoComponent } from './pedido/pedido/pedido.component';
import { PedidoServiceService } from './pedido/pedido-service.service';
import { ProdutosService } from './produtos/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginServiceService,
    PedidoServiceService,
    ProdutosService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
