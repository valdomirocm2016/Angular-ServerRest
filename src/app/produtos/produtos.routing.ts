import { Routes, RouterModule } from "@angular/router";
import { ProdutoListComponent } from "./produto-list/produto-list.component";
import { ProdutoFormComponent } from "./produto-form/produto-form.component";
import { ProdutoCrudComponent } from "./produto-crud/produto-crud.component";


const PRODUTOS_ROUTES: Routes = [
    {
        path: '',
        component: ProdutoCrudComponent
    },
    {
        path: ':id',
        component: ProdutoCrudComponent
    }

];
export const produtosRouting = RouterModule.forChild(PRODUTOS_ROUTES);