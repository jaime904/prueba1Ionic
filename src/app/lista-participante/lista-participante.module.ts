import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaParticipantePageRoutingModule } from './lista-participante-routing.module';

import { ListaParticipantePage } from './lista-participante.page';
import { MostrarUsuarioComponent } from '../listaparticipante/mostrar-usuario/mostrar-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaParticipantePageRoutingModule
  ],
  declarations: [ListaParticipantePage,MostrarUsuarioComponent]
})
export class ListaParticipantePageModule {}
