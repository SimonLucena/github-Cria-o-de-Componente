import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ListagemCadastroComponent } from './listagem-cadastro/listagem-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    CadastroComponent,
    ListagemComponent,
    ListagemCadastroComponent,
  ],
  declarations: [],
  exports: [CadastroComponent, ListagemComponent, ListagemCadastroComponent],
})
export class UsuarioModule {}
