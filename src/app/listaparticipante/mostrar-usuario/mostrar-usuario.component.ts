import { Component, OnInit,Input } from '@angular/core';
import { IUsuario } from 'src/app/lista-participante/tipo/usuario';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.scss'],
})
export class MostrarUsuarioComponent  implements OnInit {
  @Input()
  public Listusuario!:IUsuario;
  constructor() { }

  ngOnInit() {}

}
