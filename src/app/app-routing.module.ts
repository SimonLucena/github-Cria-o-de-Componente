import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { ListagemCadastroComponent } from './usuario/listagem-cadastro/listagem-cadastro.component';
import { ListagemComponent } from './usuario/listagem/listagem.component';
import { UsuarioModule } from './usuario/usuario.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    CadastroComponent,
    ListagemComponent,
    ListagemCadastroComponent,
    UsuarioModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
