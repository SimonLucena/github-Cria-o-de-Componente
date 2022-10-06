import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Usuario } from '../../../shared/model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuarios = USUARIOS;
  usuarioAtual = Usuario

  constructor(private rotaAtual: ActivatedRoute) {
    this.usuarioAtual = new Usuario(id:'', idade:0, nome:'');
    if {
      
    }
   }

  ngOnInit() {
  }

}