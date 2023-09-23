import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaParticipantePage } from './lista-participante.page';

const routes: Routes = [
  {
    path: '',
    component: ListaParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaParticipantePageRoutingModule {}
