import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutosService } from './produtos.service';
import { produtosRouting } from './produtos.routing';
import { FormsModule } from '@angular/forms';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { FilterPipe } from 'app/produtos/filter.pipe';
import { ProdutoCrudComponent } from './produto-crud/produto-crud.component';


@NgModule({
  declarations: [ProdutoFormComponent, ProdutoListComponent,FilterPipe, ProdutoCrudComponent],
  imports: [
    CommonModule,produtosRouting, FormsModule
  ],
  providers: [ProdutosService]
})
export class ProdutosModule { }
