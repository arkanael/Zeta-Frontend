import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';
import { ConsultaFornecedorComponent } from './consulta-fornecedor/consulta-fornecedor.component';


import {RouterModule , Routes } from '@angular/router'

import { FormsModule,ReactiveFormsModule} from '@angular/forms'

const appRoutes : Routes = [
  { path : "cadastro-fornecedor", component : CadastroFornecedorComponent},
  { path : "consulta-fornecedor", component : ConsultaFornecedorComponent},
  { path : "cadastro-produto", component : CadastroProdutoComponent},
  { path : "consulta-produto", component : ConsultaProdutoComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    CadastroFornecedorComponent,
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
    ConsultaFornecedorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
